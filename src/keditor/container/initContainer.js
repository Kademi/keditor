import TOOLBAR_TYPE from '../constants/toolbarType';
import CSS_CLASS from '../constants/cssClass';
import generateToolbar from '../utils/generateToolbar';
import generateId from '../utils/generateId';
import initContainerContent from './initContainerContent';
import initColumnResizer from './initColumnResizer';

export default function (container) {
    let self = this;
    let options = self.options;
    let isNested = container.closest('[data-type="container-content"]').length > 0;
    let contentArea = container.closest(`.${CSS_CLASS.CONTENT_AREA}`);
    
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
            +
            generateToolbar.call(self, isNested ? TOOLBAR_TYPE.SUB_CONTAINER_BOTTOM : TOOLBAR_TYPE.CONTAINER_BOTTOM)
        );
        
        container.attr('id', generateId());
        
        let containerContents = container.find('[data-type="container-content"]');
        containerContents.each(function () {
            let containerContent = $(this);
            
            if (!isNested && containerContent.parents('[data-type="container-content"]').length > 0) {
                // Do nothing because it's container content of sub container
                return;
            }
            
            initContainerContent.call(self, contentArea, container, containerContent, isNested);
        });
    
        options.bootstrap.columnResizeEnabled && initColumnResizer.call(self, container);
        
        if (typeof options.onInitContainer === 'function') {
            options.onInitContainer.call(self, container, contentArea);
        }
        
        container.addClass(CSS_CLASS.STATE_INITIALIZED);
        container.removeClass(CSS_CLASS.STATE_INITIALIZING);
    }
};
