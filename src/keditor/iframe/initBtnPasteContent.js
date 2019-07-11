import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import setCopyContent from '../utils/setCopyContent';
import log from '../utils/log';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.PASTE_CONTENT}`, function (e) {
        e.preventDefault();
        
        log(`Click on ".${CSS_CLASS.PASTE_CONTENT}"`);
    
        let btn = $(this);
        
        // Check source
        let source = self.copyContent ? self.copyContent.clone() : self.cutContent;
        
        // Check target
        let target = null;
        
        let toolbarBottom = btn.closest(`.${CSS_CLASS.TOOLBAR_BOTTOM}`);
        if (toolbarBottom.length > 0) {
            if (toolbarBottom.hasClass(CSS_CLASS.TOOLBAR_CONTAINER_BOTTOM)) {
                log('Target is container');
                target = btn.closest(`.${CSS_CLASS.CONTAINER}`);
            }
            
            if (toolbarBottom.hasClass(CSS_CLASS.TOOLBAR_COMPONENT_BOTTOM)) {
                log('Target is component');
                target = btn.closest(`.${CSS_CLASS.COMPONENT}`);
            }
        }
        
        let toolbarContainerContent = btn.closest(`.${CSS_CLASS.TOOLBAR_CONTAINER_CONTENT}`);
        if (toolbarContainerContent.length > 0) {
            log('Target is component');
            target = toolbarContainerContent.siblings(`.${CSS_CLASS.CONTAINER_CONTENT_INNER}`);
        }
        
        let toolbarContentArea =  btn.closest(`.${CSS_CLASS.TOOLBAR_CONTENT_AREA}`);
        if (toolbarContentArea.length > 0) {
            target = toolbarContentArea.siblings(`.${CSS_CLASS.CONTENT_AREA_INNER}`);
        }
        
        // Check action
        let action = null;
        if (toolbarBottom.length > 0) {
            action = ACTION_TYPE.AFTER;
        } else {
            action = ACTION_TYPE.APPEND;
        }
        
        target[action](source);
        setCopyContent.call(self, null);
    });
};
