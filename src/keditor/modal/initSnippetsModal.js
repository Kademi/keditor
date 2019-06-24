import CLASS_NAMES from '../constants/classNames';
import closeModal from './closeModal';
import generateId from '../utils/generateId';
import renderSnippets from '../snippet/renderSnippets';
import initSnippetsFilter from '../snippet/initSnippetsFilter';
import initContainer from '../container/initContainer';
import initComponent from '../component/initComponent';

export default function () {
    let self = this;
    let options = self.options;
    let modalId = generateId();
    
    let modal = self.modal = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.MODAL}" id="${modalId}">
            <div class="${CLASS_NAMES.MODAL_HEADER}">
                <button type="button" class="${CLASS_NAMES.MODAL_CLOSE}">&times;</button>
            </div>
            <div class="${CLASS_NAMES.MODAL_BODY}">
                <div class="${CLASS_NAMES.SNIPPETS_WRAPPER}">
                    <div class="${CLASS_NAMES.SNIPPETS}"></div>
                </div>
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
                
                renderSnippets.call(self, resp);
                initSnippetsFilter.call(self);
            },
            error: function (jqXHR) {
                if (typeof options.onSnippetsError === 'function') {
                    options.onSnippetsError.call(self, jqXHR);
                }
            }
        });
        
        // Snippet events
        modal.on({
            click: function (e) {
                e.preventDefault();
                
                let snippet = $(this);
                if (snippet.hasClass(CLASS_NAMES.STATE_SELECTED)) {
                    snippet.removeClass(CLASS_NAMES.STATE_SELECTED)
                } else {
                    modal.find(`.${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
                    snippet.addClass(CLASS_NAMES.STATE_SELECTED);
                }
            },
            mouseover: function () {
                $(this).addClass(CLASS_NAMES.STATE_SELECTED);
            },
            mouseout: function () {
                $(this).removeClass(CLASS_NAMES.STATE_SELECTED);
            }
        }, `.${CLASS_NAMES.SNIPPET}`);
        
        // Close buttons
        modal.find(`.${CLASS_NAMES.MODAL_CLOSE}`).on('click', function (e) {
            e.preventDefault();
            
            closeModal.call(self);
        });
        
        modal.on('click', `.${CLASS_NAMES.SNIPPET_ADD}`, function (e) {
            e.preventDefault();
            
            let selectedSnippet = $(this).closest(`.${CLASS_NAMES.SNIPPET}`);
            let contentArea = self.modalTarget.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
            let snippetType = selectedSnippet.attr('data-type');
            
            let snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
            
            let snippetContent = snippetContentElement.html();
            let isModalComponent = modal.hasClass(CLASS_NAMES.MODAL_COMPONENT);
            let isModalContainer = modal.hasClass(CLASS_NAMES.MODAL_CONTAINER);
            let isAddingContainer = false;
            let isAddingComponent = false;
            let isAddingComponentWithContainer = false;
            
            if (snippetType === 'container') {
                isAddingContainer = true;
            } else {
                if (isModalComponent && !isModalContainer) {
                    isAddingComponent = true;
                }
                
                if (isModalComponent && isModalContainer) {
                    if (self.modalTarget.is(`.${CLASS_NAMES.CONTAINER_CONTENT_INNER}`)) {
                        isAddingComponent = true;
                    } else {
                        isAddingComponentWithContainer = true;
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
                self.modalTarget[self.modalTargetAction](newContainer);
                
                if (typeof options.onContainerSnippetAdded === 'function') {
                    options.onContainerSnippetAdded.call(self, e, newContainer, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                initContainer.call(self, contentArea, newContainer);
            }
            
            if (isAddingComponent) {
                let dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                newComponent = $(`
                    <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                        <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}">${snippetContent}</section>
                    </section>
                `);
                self.modalTarget[self.modalTargetAction](newComponent);
                
                let container = self.modalTarget.closest(`.${CLASS_NAMES.CONTAINER}`);
                if (typeof options.onComponentSnippetAdded === 'function') {
                    options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                initComponent.call(self, contentArea, container, newComponent);
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
                self.modalTarget[self.modalTargetAction](newContainer);
                
                if (typeof options.onComponentSnippetAdded === 'function') {
                    options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
                
                initContainer.call(self, contentArea, newContainer);
            }
    
            closeModal.call(self);
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
