import TOOLBAR_TYPE from '../constants/toolbarType';
import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import showSnippetModal from '../modal/showSnippetModal';
import generateId from '../utils/generateId';
import generateToolbar from '../utils/generateToolbar';
import convertToContainer from './convertToContainer';
import convertToComponent from '../component/convertToComponent';

export default function (contentArea, container, containerContent, isNested) {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    containerContent.addClass(CSS_CLASS.CONTAINER_CONTENT);
    isNested && containerContent.addClass(CSS_CLASS.SUB_CONTAINER_CONTENT);
    containerContent.attr('id', generateId());
    
    let containerContentInner = $(`<div class="${CSS_CLASS.CONTAINER_CONTENT_INNER}"></div>`);
    containerContentInner.html(containerContent.html());
    containerContent.html(containerContentInner);
    
    let containerContentToolbar = $(
        generateToolbar.call(self, isNested ? TOOLBAR_TYPE.SUB_CONTAINER_CONTENT : TOOLBAR_TYPE.CONTAINER_CONTENT, options.containerSettingEnabled)
    );
    containerContentToolbar.appendTo(containerContent);
    containerContentToolbar.children(`.${CSS_CLASS.ADD_CONTENT}`).on('click', function (e) {
        e.preventDefault();
        
        showSnippetModal.call(self, containerContentInner, ACTION_TYPE.APPEND, true, !isNested);
    });
    
    containerContentInner.sortable({
        handle: `.${CSS_CLASS.COMPONENT_MOVE}, .${CSS_CLASS.CONTAINER_MOVE}`,
        helper: 'clone',
        items: `> .${CSS_CLASS.COMPONENT}`,
        connectWith: `.${CSS_CLASS.CONTAINER_CONTENT_INNER}`,
        tolerance: 'pointer',
        receive: function (event, ui) {
            let helper = ui.helper;
            let item = ui.item;
            let container;
            
            if (helper) {
                helper.remove();
            }
            container = item.closest(`.${CSS_CLASS.CONTAINER}`);
            
            if (!container.hasClass(CSS_CLASS.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CSS_CLASS.CONTAINER}.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
                container.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
            }
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, event, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, event, contentArea);
            }
            
            item.removeClass(CSS_CLASS.UI_DRAGGING);
        },
        start: function (e, ui) {
            ui.item.addClass(CSS_CLASS.UI_DRAGGING);
            ui.item.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
        },
        stop: function (e, ui) {
            if (ui.helper) {
                ui.helper.remove();
            }
            ui.item.removeClass(CSS_CLASS.UI_DRAGGING);
        }
    });
    
    containerContentInner.children().each(function () {
        let child = $(this);
        
        if (child.find('[data-type="container-content"]').length > 0) {
            convertToContainer.call(self, child);
        } else {
            convertToComponent.call(self, child, true);
        }
    });
};
