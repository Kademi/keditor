import TOOLBAR_TYPE from "../constants/toolbarType";

export default function (contentArea, container) {
    let self = this;
    let options = self.options;
    let isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;
    
    if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
        container.addClass('keditor-initializing-container');
        
        if (typeof options.onBeforeInitContainer === 'function') {
            options.onBeforeInitContainer.call(self, container, contentArea);
        }
        
        if (isNested) {
            container.addClass('keditor-sub-container');
        }
        
        container.append(self.generateToolbar(isNested ? TOOLBAR_TYPE.SUB_CONTAINER : TOOLBAR_TYPE.CONTAINER));
        
        container.attr('id', self.generateId());
        
        let containerContents = container.find('[data-type="container-content"]');
        containerContents.each(function () {
            let containerContent = $(this);
            
            if (options.nestedContainerEnabled && !isNested && containerContent.parents('[data-type="container-content"]').length > 0) {
                // Do nothing because it's container content of sub container
                return;
            }
            
            self.initContainerContent(contentArea, container, containerContent, isNested);
        });
        
        if (typeof options.onInitContainer === 'function') {
            options.onInitContainer.call(self, container, contentArea);
        }
        
        container.addClass('keditor-initialized-container');
        container.removeClass('keditor-initializing-container');
    }
};
