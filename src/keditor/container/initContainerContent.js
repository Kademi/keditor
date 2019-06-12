import TOOLBAR_TYPE from "../constants/toolbarType";
import SNIPPET_TYPE from "../constants/snippetType";

export default function (contentArea, container, containerContent, isNested) {
    let self = this;
    let options = self.options;
    
    containerContent.addClass('keditor-container-content');
    if (isNested) {
        containerContent.addClass('keditor-sub-container-content');
    }
    containerContent.attr('id', self.generateId());
    
    let containerContentInner = $('<div class="keditor-container-content-inner"></div>');
    containerContentInner.html(containerContent.html());
    containerContent.html(containerContentInner);
    
    let containerContentToolbar = $(self.generateToolbar(isNested ? TOOLBAR_TYPE.SUB_CONTAINER_CONTENT : TOOLBAR_TYPE.CONTAINER_CONTENT));
    containerContentToolbar.appendTo(containerContent);
    
    if (options.explicitSnippetEnabled) {
        if (!isNested) {
            if (options.explicitSnippetEnabled) {
                containerContentToolbar.children('.btn-add-container').on('click', function (e) {
                    e.preventDefault();
                    
                    self.openModal(containerContentInner, SNIPPET_TYPE.CONTAINER);
                });
            }
        }
        
        containerContentToolbar.children('.btn-add-component').on('click', function (e) {
            e.preventDefault();
            
            self.openModal(containerContentInner, SNIPPET_TYPE.COMPONENT);
        });
    } else {
        containerContentToolbar.children('.btn-add-content').on('click', function (e) {
            e.preventDefault();
            
            self.openModal(containerContentInner, isNested ? SNIPPET_TYPE.COMPONENT : options.nestedContainerEnabled ? SNIPPET_TYPE.ALL : SNIPPET_TYPE.COMPONENT);
        });
    }
    
    containerContentInner.sortable({
        handle: '.btn-component-reposition, .btn-container-reposition',
        helper: 'clone',
        items: '> section',
        connectWith: '.keditor-container-content-inner',
        tolerance: 'pointer',
        sort: function () {
            $(this).removeClass('ui-state-default');
        },
        receive: function (event, ui) {
            let helper = ui.helper;
            let item = ui.item;
            let container;
            
            if (helper) {
                helper.remove();
            }
            container = item.closest('.keditor-container');
            
            if (!container.hasClass('showed-keditor-toolbar')) {
                $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                container.addClass('showed-keditor-toolbar');
            }
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, event, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, event, contentArea);
            }
            
            item.removeClass('keditor-ui-dragging');
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
    
    containerContentInner.children().each(function () {
        let child = $(this);
        
        if (child.find('[data-type="container-content"]').length > 0) {
            self.convertToContainer(contentArea, child);
        } else {
            self.convertToComponent(contentArea, container, child, true);
        }
    });
};
