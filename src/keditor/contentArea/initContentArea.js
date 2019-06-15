import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';

export default function (contentArea, dontInitToolbar) {
    let self = this;
    let options = self.options;
    
    contentArea.addClass(CLASS_NAMES.CONTENT_AREA);
    let content = contentArea.html();
    let contentAreaInner = $(`<div class="${CLASS_NAMES.CONTENT_AREA_INNER}"></div>`).html(content);
    contentArea.html(contentAreaInner);
    
    if (typeof options.onBeforeInitContentArea === 'function') {
        options.onBeforeInitContentArea.call(self, contentArea);
    }
    
    if (!dontInitToolbar) {
        let contentAreaToolbar = $(self.generateToolbar(TOOLBAR_TYPE.CONTENT_AREA));
        contentArea.append(contentAreaToolbar);
        contentAreaToolbar.children(options.explicitSnippetEnabled ? `.${CLASS_NAMES.ADD_CONTAINER}` : `.${CLASS_NAMES.ADD_CONTENT}`).on('click', function (e) {
            e.preventDefault();
            
            self.openModal(contentAreaInner, !options.explicitSnippetEnabled, true);
        });
    }
    
    contentAreaInner.sortable({
        handle: `.${CLASS_NAMES.CONTAINER_TOOLBAR}:not(.${CLASS_NAMES.SUB_CONTAINER_TOOLBAR}) .${CLASS_NAMES.CONTAINER_REPOSITION}`,
        items: '> section',
        helper: 'clone',
        connectWith: `.${CLASS_NAMES.CONTENT_AREA}`,
        axis: 'y',
        tolerance: 'pointer',
        receive: function (event, ui) {
            let helper = ui.helper;
            let item = ui.item;
            
            if (helper) {
                helper.remove();
            }
            
            self.closeSidebar();
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, event, contentArea);
            }
            
            item.addClass(CLASS_NAMES.UI_DRAGGING);
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
    
    contentAreaInner.children('section').each(function () {
        self.convertToContainer(contentArea, $(this));
    });
    
    if (typeof options.onInitContentArea === 'function') {
        let contentData = options.onInitContentArea.call(self, contentArea);
        if (contentData && contentData.length > 0) {
            $.each(contentData, function () {
                self.convertToContainer(contentArea, $(this));
            });
        }
    }
};
