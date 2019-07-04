import TOOLBAR_TYPE from '../constants/toolbarType';
import CSS_CLASS from '../constants/cssClass';
import generateToolbar from '../utils/generateToolbar';
import generateId from '../utils/generateId';
import initContainerContent from './initContainerContent';

export default function (contentArea, container) {
    let self = this;
    let options = self.options;
    let isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;
    
    if (!container.hasClass(CSS_CLASS.STATE_INITIALIZED) || !container.hasClass(CSS_CLASS.STATE_INITIALIZING)) {
        container.addClass(CSS_CLASS.STATE_INITIALIZING);
        
        if (typeof options.onBeforeInitContainer === 'function') {
            options.onBeforeInitContainer.call(self, container, contentArea);
        }
        
        if (isNested) {
            container.addClass(CSS_CLASS.SUB_CONTAINER);
        }
        
        container.append(
            generateToolbar.call(self, isNested ? TOOLBAR_TYPE.SUB_CONTAINER : TOOLBAR_TYPE.CONTAINER, options.containerSettingEnabled)
        );
        isNested && container.append(generateToolbar.call(self, TOOLBAR_TYPE.SUB_CONTAINER_BOTTOM));
        
        container.attr('id', generateId());
        
        let containerContents = container.find('[data-type="container-content"]');
        containerContents.each(function () {
            let containerContent = $(this);
            
            if (options.nestedContainerEnabled && !isNested && containerContent.parents('[data-type="container-content"]').length > 0) {
                // Do nothing because it's container content of sub container
                return;
            }
            
            initContainerContent.call(self, contentArea, container, containerContent, isNested);
        });
        
        if (typeof options.onInitContainer === 'function') {
            options.onInitContainer.call(self, container, contentArea);
        }
        
        container.addClass(CSS_CLASS.STATE_INITIALIZED);
        container.removeClass(CSS_CLASS.STATE_INITIALIZING);
    }
};
