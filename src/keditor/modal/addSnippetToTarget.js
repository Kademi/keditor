import CLASS_NAMES from '../constants/classNames';
import initComponent from '../component/initComponent';
import initContainer from '../container/initContainer';
import checkContainerContent from '../container/checkContainerContent';
import ACTION_TYPE from '../constants/actionType';

export default function (e, selectedSnippet, target, targetAction) {
    let self = this;
    let modal = self.modal;
    let options = self.options;
    let contentArea = target.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
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
            if (target.is(`.${CLASS_NAMES.CONTAINER_CONTENT_INNER}`)) {
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
    
    if (isAddingContainer) {
        self.contentAreasWrapper.find(`.${CLASS_NAMES.CONTAINER}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
        
        newContainer = $(`
            <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER} ${CLASS_NAMES.STATE_TOOLBAR_SHOWED}">
                <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_INNER}">${snippetContent}</section>
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
            <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}" data-type="${snippetType}" ${dataAttributes.join(' ')}>
                ${snippetContent}
            </section>
        `);
        target[targetAction](newComponent);
        
        let container = target.closest(`.${CLASS_NAMES.CONTAINER}`);
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
                ${snippetContent}
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
    
    if (!target.is(`.${CLASS_NAMES.CONTENT_AREA_INNER}`)) {
        checkContainerContent(target);
    }
};
