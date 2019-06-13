import TOOLBAR_TYPE from '../constants/toolbarType';
import SNIPPET_TYPE from '../constants/snippetType';
import CLASS_NAMES from '../constants/classNames';

export default function (contentArea, container, containerContent, isNested) {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    containerContent.addClass(CLASS_NAMES.CONTAINER_CONTENT);
    isNested && containerContent.addClass(CLASS_NAMES.SUB_CONTAINER_CONTENT);
    containerContent.attr('id', self.generateId());
    
    let containerContentInner = $(`<div class="${CLASS_NAMES.CONTAINER_CONTENT_INNER}"></div>`);
    containerContentInner.html(containerContent.html());
    containerContent.html(containerContentInner);
    
    let containerContentToolbar = $(self.generateToolbar(isNested ? TOOLBAR_TYPE.SUB_CONTAINER_CONTENT : TOOLBAR_TYPE.CONTAINER_CONTENT));
    containerContentToolbar.appendTo(containerContent);
    
    if (options.explicitSnippetEnabled) {
        if (!isNested) {
            if (options.explicitSnippetEnabled) {
                containerContentToolbar.children(`.${CLASS_NAMES.ADD_CONTAINER}`).on('click', function (e) {
                    e.preventDefault();
                    
                    self.openModal(containerContentInner, SNIPPET_TYPE.CONTAINER);
                });
            }
        }
        
        containerContentToolbar.children(`.${CLASS_NAMES.ADD_COMPONENT}`).on('click', function (e) {
            e.preventDefault();
            
            self.openModal(containerContentInner, SNIPPET_TYPE.COMPONENT);
        });
    } else {
        containerContentToolbar.children(`.${CLASS_NAMES.ADD_CONTENT}`).on('click', function (e) {
            e.preventDefault();
            
            self.openModal(containerContentInner, isNested ? SNIPPET_TYPE.COMPONENT : options.nestedContainerEnabled ? SNIPPET_TYPE.ALL : SNIPPET_TYPE.COMPONENT);
        });
    }
    
    containerContentInner.sortable({
        handle: `.${CLASS_NAMES.COMPONENT_REPOSITION} .${CLASS_NAMES.CONTAINER_REPOSITION}`,
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
        },
        start: function (e, ui) {
            ui.item.addClass(CLASS_NAMES.UI_DRAGGING);
        },
        stop: function (e, ui) {
            if (ui.helper) {
                ui.helper.remove();
            }
            ui.item.removeClass(CLASS_NAMES.UI_DRAGGING);
        }
    });
    
    containerContentInner.children().each(function () {
        let child = $(this);
        
        if (child.find('[data-type="container-content"]').length > 0) {
            self.convertToContainer(contentArea, child);
        } else {
            self.convertToComponent(contentArea, container, child, true);
        }
    });
};
