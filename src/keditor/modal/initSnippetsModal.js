import SNIPPET_TYPE from '../constants/snippetType';
import error from '../utils/error';
import log from '../utils/log';

export default function () {
    let self = this;
    let options = self.options;
    let modalId = self.generateId('modal');
    let snippetsWrapperHtml = '';
    
    if (options.explicitSnippetEnabled) {
        snippetsWrapperHtml = `
                    <div class="keditor-snippets-wrapper keditor-snippets-wrapper-container">
                        <div class="keditor-snippets keditor-snippets-container"></div>
                    </div>
                    <div class="keditor-snippets-wrapper keditor-snippets-wrapper-component">
                        <div class="keditor-snippets keditor-snippets-component"></div>
                    </div>
                `;
    } else {
        snippetsWrapperHtml = `
                    <div class="keditor-snippets-wrapper">
                        <div class="keditor-snippets"></div>
                    </div>
                `;
    }
    
    let modal = self.modal = $(`
                <div class="keditor-ui keditor-modal" id="${modalId}">
                    <div class="keditor-modal-header">
                        <button type="button" class="keditor-modal-close">&times;</button>
                        <h4 class="keditor-modal-title"></h4>
                    </div>
                    <div class="keditor-modal-body">${snippetsWrapperHtml}</div>
                    <div class="keditor-modal-footer">
                        <button type="button" class="keditor-ui keditor-btn keditor-btn-default keditor-modal-close">Close</button>
                        <button type="button" class="keditor-ui keditor-btn keditor-btn-primary keditor-modal-add">Add</button>
                    </div>
                </div>
            `);
    
    if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
        log(`Getting snippets form "${options.snippetsUrl}"...`);
        
        $.ajax({
            type: 'get',
            dataType: 'html',
            url: options.snippetsUrl,
            success: function (resp) {
                log('Success in getting snippets');
                
                if (typeof options.onSnippetsLoaded === 'function') {
                    resp = options.onSnippetsLoaded.call(self, resp) || resp;
                }
                
                self.renderSnippets(resp);
                
                if (options.snippetsFilterEnabled) {
                    if (options.explicitSnippetEnabled) {
                        self.initSnippetsFilter(SNIPPET_TYPE.CONTAINER);
                        self.initSnippetsFilter(SNIPPET_TYPE.COMPONENT);
                    } else {
                        self.initSnippetsFilter(SNIPPET_TYPE.ALL);
                    }
                }
            },
            error: function (jqXHR) {
                log('Error when getting snippets', jqXHR);
                if (typeof options.onSnippetsError === 'function') {
                    options.onSnippetsError.call(self, jqXHR);
                }
            }
        });
        
        // Close buttons
        modal.find('.keditor-modal-close').on('click', function (e) {
            e.preventDefault();
            
            self.closeModal();
        });
        
        // Add button
        modal.find('.keditor-modal-add').on('click', function (e) {
            e.preventDefault();
            
            let selectedSnippet = modal.find('.keditor-snippets-wrapper .selected');
            if (selectedSnippet.length === 0) {
                return;
            }
            
            let contentArea = self.modalTarget.closest('.keditor-content-area');
            let snippetType = selectedSnippet.attr('data-type');
            let snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
            let snippetContent = snippetContentElement.html();
            let isAddingContainer = false;
            let isAddingComponent = false;
            let isAddingComponentWithContainer = false;
            
            if (options.explicitSnippetEnabled) {
                switch (self.modalSnippetType) {
                    case SNIPPET_TYPE.COMPONENT:
                        isAddingComponent = true;
                        break;
                    
                    case SNIPPET_TYPE.CONTAINER:
                        isAddingContainer = true;
                        break;
                    
                    default:
                    // Do nothing
                }
            } else {
                if (snippetType === 'container') {
                    isAddingContainer = true;
                } else {
                    switch (self.modalSnippetType) {
                        case SNIPPET_TYPE.COMPONENT:
                            isAddingComponent = true;
                            break;
                        
                        case SNIPPET_TYPE.ALL:
                            if (self.modalTarget.is('.keditor-container-content-inner')) {
                                isAddingComponent = true;
                            } else {
                                isAddingComponentWithContainer = true;
                            }
                            
                            break;
                        
                        default:
                        // Do nothing
                    }
                }
            }
            
            let newContainer;
            let newComponent;
            
            if (isAddingContainer) {
                self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                
                newContainer = $(`
                            <section class="keditor-ui keditor-container showed-keditor-toolbar">
                                <section class="keditor-ui keditor-container-inner">${snippetContent}</section>
                            </section>
                        `);
                self.modalTarget.append(newContainer);
                
                if (typeof options.onContainerSnippetAdded === 'function') {
                    options.onContainerSnippetAdded.call(self, e, newContainer, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                self.initContainer(contentArea, newContainer);
            }
            
            if (isAddingComponent) {
                let dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                newComponent = $(`
                            <section class="keditor-ui keditor-component" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                                <section class="keditor-ui keditor-component-content">${snippetContent}</section>
                            </section>
                        `);
                self.modalTarget.append(newComponent);
                
                let container = self.modalTarget.closest('.keditor-container');
                if (typeof options.onComponentSnippetAdded === 'function') {
                    options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                self.initComponent(contentArea, container, newComponent);
            }
            
            if (isAddingComponentWithContainer) {
                self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                
                let dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                newContainer = $(`
                            <section class="keditor-ui keditor-container showed-keditor-toolbar">
                                <section class="keditor-ui keditor-container-inner">${options.containerForQuickAddComponent}</section>
                            </section>
                        `);
                newComponent = $(`
                            <section class="keditor-ui keditor-component" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                                <section class="keditor-ui keditor-component-content">${snippetContent}</section>
                            </section>
                        `);
                newContainer.find('[data-type="container-content"]').eq(0).html(newComponent);
                self.modalTarget.append(newContainer);
                
                if (typeof options.onComponentSnippetAdded === 'function') {
                    options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                self.initContainer(contentArea, newContainer);
            }
            
            self.closeModal();
        });
        
        // Action click for snippet
        modal.on('click', '.keditor-snippet', function (e) {
            e.preventDefault();
            
            let snippet = $(this);
            if (!snippet.hasClass('selected')) {
                snippet.parent().find('.selected').removeClass('selected');
                snippet.addClass('selected');
            }
        });
        
        let cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        modal.on(cssTransitionEnd, () => {
            if (!modal.hasClass('showed')) {
                modal.css('display', 'none');
                $(document.body).removeClass('opened-modal');
            }
        });
        
        modal.appendTo(document.body);
    } else {
        error('"snippetsUrl" must be not null!');
    }
};
