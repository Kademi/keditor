import TOOLBAR_TYPE from "../constants/toolbarType";
import SNIPPET_TYPE from "../constants/snippetType";

export default function (contentArea, dontInitToolbar) {
    let self = this;
    let options = self.options;
    
    contentArea.addClass('keditor-content-area');
    let content = contentArea.html();
    let contentAreaInner = $('<div class="keditor-content-area-inner"></div>').html(content);
    contentArea.html(contentAreaInner);
    
    if (typeof options.onBeforeInitContentArea === 'function') {
        options.onBeforeInitContentArea.call(self, contentArea);
    }
    
    if (!dontInitToolbar) {
        let contentAreaToolbar = $(self.generateToolbar(TOOLBAR_TYPE.CONTENT_AREA));
        contentArea.append(contentAreaToolbar);
        contentAreaToolbar.children(options.explicitSnippetEnabled ? '.btn-add-container' : '.btn-add-content').on('click', function (e) {
            e.preventDefault();
            
            self.openModal(contentAreaInner, options.explicitSnippetEnabled ? SNIPPET_TYPE.CONTAINER : SNIPPET_TYPE.ALL);
        });
    }
    
    contentAreaInner.sortable({
        handle: '.keditor-toolbar-container:not(.keditor-toolbar-sub-container) .btn-container-reposition',
        items: '> section',
        helper: 'clone',
        connectWith: '.keditor-content-area',
        axis: 'y',
        tolerance: 'pointer',
        sort: function () {
            $(this).removeClass('ui-state-default');
        },
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
            
            item.addClass('keditor-ui-dragging');
        },
        start: function (e, ui) {
            ui.item.addClass('keditor-ui-dragging');
        },
        stop: function (e, ui) {
            if (ui.helper) {
                ui.helper.remove();
            }
            ui.item.removeClass('keditor-ui-dragging');
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
