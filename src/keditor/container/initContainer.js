import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';
import generateToolbar from '../utils/generateToolbar';
import generateId from '../utils/generateId';
import initContainerContent from './initContainerContent';

export default function (contentArea, container) {
    let self = this;
    let options = self.options;
    let isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;
    
    if (!container.hasClass(CLASS_NAMES.STATE_INITIALIZED) || !container.hasClass(CLASS_NAMES.STATE_INITIALIZING)) {
        container.addClass(CLASS_NAMES.STATE_INITIALIZING);
        
        if (typeof options.onBeforeInitContainer === 'function') {
            options.onBeforeInitContainer.call(self, container, contentArea);
        }
        
        if (isNested) {
            container.addClass(CLASS_NAMES.SUB_CONTAINER);
        }
        
        container.append(generateToolbar.call(self, isNested ? TOOLBAR_TYPE.SUB_CONTAINER : TOOLBAR_TYPE.CONTAINER));
        
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
        
        container.addClass(CLASS_NAMES.STATE_INITIALIZED);
        container.removeClass(CLASS_NAMES.STATE_INITIALIZING);
    }
};
