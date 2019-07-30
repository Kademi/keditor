import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import getDataAttributes from '../utils/getDataAttributes';
import convertToComponent from '../component/convertToComponent';
import convertToContainer from '../container/convertToContainer';

export default function (e, selectedSnippet, target, targetAction) {
    let self = this;
    let modal = self.modal;
    let options = self.options;
    let contentArea = target.closest(`.${CSS_CLASS.CONTENT_AREA}`);
    let snippetType = selectedSnippet.attr('data-type');
    
    let snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
    
    let snippetContent = snippetContentElement.html();
    let isModalComponent = modal.hasClass(CSS_CLASS.MODAL_COMPONENT);
    let isModalContainer = modal.hasClass(CSS_CLASS.MODAL_CONTAINER);
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
            if (target.is(`.${CSS_CLASS.CONTAINER_CONTENT_INNER}`)) {
                isAddingComponent = true;
            } else {
                if (targetAction === ACTION_TYPE.APPEND) {
                    isAddingComponentWithContainer = true;
                } else {
                    isAddingComponent = true;
                }
            }
        }
    }
    
    let newContainer;
    let newComponent;
    
    self.contentAreasWrapper.find(`.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
    
    if (isAddingContainer) {
        newContainer = $(snippetContent);
        target[targetAction](newContainer);
        
        if (typeof options.onContainerSnippetAdded === 'function') {
            options.onContainerSnippetAdded.call(self, e, newContainer, selectedSnippet, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
        
        convertToContainer.call(self, newContainer);
        newContainer.trigger('click');
    }
    
    if (isAddingComponent || isAddingComponentWithContainer) {
        let dataAttributes = getDataAttributes.call(self, snippetContentElement, null, true);
        newComponent = $(`
            <div data-type="${snippetType}" ${dataAttributes.join(' ')}>
                ${snippetContent}
            </div>
        `);
    }
    
    if (isAddingComponent) {
        target[targetAction](newComponent);
        
        let container = target.closest(`.${CSS_CLASS.CONTAINER}`);
        container.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
        if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
        
        convertToComponent.call(self,newComponent);
        newComponent.trigger('click');
    }
    
    if (isAddingComponentWithContainer) {
        newContainer = $(options.containerForQuickAddComponent);
        newContainer.find('[data-type="container-content"]').eq(0).html(newComponent);
        target[targetAction](newContainer);
        
        if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
    
        convertToContainer.call(self, newContainer);
        newComponent.trigger('click');
    }
};
