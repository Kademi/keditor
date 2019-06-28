import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';
import ACTION_TYPE from '../constants/actionType';
import openSnippetModal from '../modal/openSnippetModal';
import generateId from '../utils/generateId';
import generateToolbar from '../utils/generateToolbar';
import convertToContainer from './convertToContainer';
import convertToComponent from '../component/convertToComponent';
import checkContainerContent from './checkContainerContent';

export default function (contentArea, container, containerContent, isNested) {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    containerContent.addClass(CLASS_NAMES.CONTAINER_CONTENT);
    isNested && containerContent.addClass(CLASS_NAMES.SUB_CONTAINER_CONTENT);
    containerContent.attr('id', generateId());
    
    let containerContentInner = $(`<div class="${CLASS_NAMES.CONTAINER_CONTENT_INNER}"></div>`);
    containerContentInner.html(containerContent.html());
    containerContent.html(containerContentInner);
    
    let containerContentToolbar = $(generateToolbar.call(self, isNested ? TOOLBAR_TYPE.SUB_CONTAINER_CONTENT : TOOLBAR_TYPE.CONTAINER_CONTENT));
    containerContentToolbar.appendTo(containerContent);
    containerContentToolbar.children(`.${CLASS_NAMES.ADD_CONTENT}`).on('click', function (e) {
        e.preventDefault();
        
        openSnippetModal.call(self, containerContentInner, ACTION_TYPE.APPEND, true, !isNested && options.nestedContainerEnabled);
    });
    
    containerContentInner.sortable({
        handle: `.${CLASS_NAMES.COMPONENT_MOVE}, .${CLASS_NAMES.CONTAINER_MOVE}`,
        helper: 'clone',
        items: '> section',
        connectWith: `.${CLASS_NAMES.CONTAINER_CONTENT_INNER}`,
        tolerance: 'pointer',
        receive: function (event, ui) {
            let helper = ui.helper;
            let item = ui.item;
            let container;
            
            if (helper) {
                helper.remove();
            }
            container = item.closest(`.${CLASS_NAMES.CONTAINER}`);
            
            if (!container.hasClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CLASS_NAMES.CONTAINER}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                container.addClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
            }
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, event, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, event, contentArea);
            }
            
            item.removeClass(CLASS_NAMES.UI_DRAGGING);
            checkContainerContent.call(self, containerContentInner);
        },
        start: function (e, ui) {
            ui.item.addClass(CLASS_NAMES.UI_DRAGGING);
        },
        stop: function (e, ui) {
            if (ui.helper) {
                ui.helper.remove();
            }
            ui.item.removeClass(CLASS_NAMES.UI_DRAGGING);
            checkContainerContent.call(self, containerContentInner);
        }
    });
    
    containerContentInner.children().each(function () {
        let child = $(this);
        
        if (child.find('[data-type="container-content"]').length > 0) {
            convertToContainer.call(self, contentArea, child);
        } else {
            convertToComponent.call(self, contentArea, container, child, true);
        }
    });
    
    checkContainerContent.call(self, containerContentInner);
};
