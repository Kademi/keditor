import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import initComponent from '../component/initComponent';
import initContainer from '../container/initContainer';
import checkContainerContent from '../container/checkContainerContent';

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
        newContainer = $(`
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER} ${CSS_CLASS.STATE_TOOLBAR_SHOWED}">
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_INNER}">${snippetContent}</section>
            </section>
        `);
        target[targetAction](newContainer);
        
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
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT} ${CSS_CLASS.STATE_TOOLBAR_SHOWED}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CONTENT}">${snippetContent}</section>
            </section>
        `);
        target[targetAction](newComponent);
        
        let container = target.closest(`.${CSS_CLASS.CONTAINER}`);
        container.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
        if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
        
        initComponent.call(self, contentArea, container, newComponent);
    }
    
    if (isAddingComponentWithContainer) {
        let dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
        newContainer = $(`
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER} ${CSS_CLASS.STATE_TOOLBAR_SHOWED}">
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_INNER}">${options.containerForQuickAddComponent}</section>
            </section>
        `);
        newComponent = $(`
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT} ${CSS_CLASS.STATE_TOOLBAR_SHOWED}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CONTENT}">${snippetContent}</section>
            </section>
        `);
        newContainer.find('[data-type="container-content"]').eq(0).html(newComponent);
        target[targetAction](newContainer);
        
        if (typeof options.onComponentSnippetAdded === 'function') {
            options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
        
        initContainer.call(self, contentArea, newContainer);
    }
    
    if (!target.is(`.${CSS_CLASS.CONTENT_AREA_INNER}`)) {
        checkContainerContent(target);
    }
};
