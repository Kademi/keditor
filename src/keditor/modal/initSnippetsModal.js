import SNIPPET_TYPE from '../constants/snippetType';
import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let modalId = self.generateId();
    let snippetsWrapperHtml = '';
    
    if (options.explicitSnippetEnabled) {
        snippetsWrapperHtml = `
            <div class="${CLASS_NAMES.SNIPPETS_WRAPPER} ${CLASS_NAMES.SNIPPETS_WRAPPER_CONTAINER}">
                <div class="${CLASS_NAMES.SNIPPETS} ${CLASS_NAMES.SNIPPETS_CONTAINER}"></div>
            </div>
            <div class="${CLASS_NAMES.SNIPPETS_WRAPPER} ${CLASS_NAMES.SNIPPETS_WRAPPER_COMPONENT}">
                <div class="${CLASS_NAMES.SNIPPETS} ${CLASS_NAMES.SNIPPETS_COMPONENT}"></div>
            </div>
        `;
    } else {
        snippetsWrapperHtml = `
            <div class="${CLASS_NAMES.SNIPPETS_WRAPPER}">
                <div class="${CLASS_NAMES.SNIPPETS}"></div>
            </div>
        `;
    }
    
    let modal = self.modal = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.MODAL}" id="${modalId}">
            <div class="${CLASS_NAMES.MODAL_HEADER}">
                <button type="button" class="${CLASS_NAMES.MODAL_CLOSE}">&times;</button>
                <h4 class="${CLASS_NAMES.MODAL_TITLE}"></h4>
            </div>
            <div class="${CLASS_NAMES.MODAL_BODY}">${snippetsWrapperHtml}</div>
            <div class="${CLASS_NAMES.MODAL_FOOTER}">
                <button type="button" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.MODAL_CLOSE}">Close</button>
                <button type="button" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_PRIMARY} ${CLASS_NAMES.MODAL_ADD}">Add</button>
            </div>
        </div>
    `);
    
    if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
        $.ajax({
            type: 'get',
            dataType: 'html',
            url: options.snippetsUrl,
            success: function (resp) {
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
                if (typeof options.onSnippetsError === 'function') {
                    options.onSnippetsError.call(self, jqXHR);
                }
            }
        });
        
        // Close buttons
        modal.find(`.${CLASS_NAMES.MODAL_CLOSE}`).on('click', function (e) {
            e.preventDefault();
            
            self.closeModal();
        });
        
        // Add button
        modal.find(`.${CLASS_NAMES.MODAL_ADD}`).on('click', function (e) {
            e.preventDefault();
            
            let selectedSnippet = modal.find(`.${CLASS_NAMES.SNIPPETS_WRAPPER} .${CLASS_NAMES.STATE_SELECTED}`);
            if (selectedSnippet.length === 0) {
                return;
            }
            
            let contentArea = self.modalTarget.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
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
                            if (self.modalTarget.is(`.${CLASS_NAMES.CONTAINER_CONTENT_INNER}`)) {
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
                self.contentAreasWrapper.find(`.${CLASS_NAMES.CONTAINER}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                newContainer = $(`
                    <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER} ${CLASS_NAMES.STATE_TOOLBAR_SHOWED}">
                        <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_INNER}">${snippetContent}</section>
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
                    <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                        <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}">${snippetContent}</section>
                    </section>
                `);
                self.modalTarget.append(newComponent);
                
                let container = self.modalTarget.closest(`.${CLASS_NAMES.CONTAINER}`);
                if (typeof options.onComponentSnippetAdded === 'function') {
                    options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                self.initComponent(contentArea, container, newComponent);
            }
            
            if (isAddingComponentWithContainer) {
                self.contentAreasWrapper.find(`.${CLASS_NAMES.CONTAINER}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                let dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                newContainer = $(`
                    <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER} ${CLASS_NAMES.STATE_TOOLBAR_SHOWED}">
                        <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_INNER}">${options.containerForQuickAddComponent}</section>
                    </section>
                `);
                newComponent = $(`
                    <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                        <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}">${snippetContent}</section>
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
        modal.on('click', `.${CLASS_NAMES.SNIPPET}`, function (e) {
            e.preventDefault();
            
            let snippet = $(this);
            if (!snippet.hasClass(CLASS_NAMES.STATE_SELECTED)) {
                snippet.parent().find(`.${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
                snippet.addClass(CLASS_NAMES.STATE_SELECTED);
            }
        });
        
        let cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        modal.on(cssTransitionEnd, () => {
            if (!modal.hasClass(CLASS_NAMES.STATE_SHOWED)) {
                modal.css('display', 'none');
                $(document.body).removeClass(CLASS_NAMES.STATE_MODAL_OPENED);
            }
        });
        
        modal.appendTo(document.body);
    } else {
        self.error('"snippetsUrl" must be not null!');
    }
};
