import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import setCopyContent from '../utils/setCopyContent';
import log from '../utils/log';
import convertToContainer from '../container/convertToContainer';
import getComponentContent from '../component/getComponentContent';
import convertToComponent from '../component/convertToComponent';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.PASTE_CONTENT}`, function (e) {
        e.preventDefault();
        
        log(`Click on ".${CSS_CLASS.PASTE_CONTENT}"`);
        
        let btn = $(this);
        let isCopy = !!self.copyContent;
        
        // Check source
        let source = isCopy ? self.copyContent : self.cutContent;
        let isComponent = source.hasClass(CSS_CLASS.COMPONENT);
        let isContainer = source.hasClass(CSS_CLASS.CONTAINER);
        let isSubContainer = source.hasClass(CSS_CLASS.SUB_CONTAINER);
        let pasteContent;
        if (isCopy) {
            pasteContent = $(isComponent ? getComponentContent.call(self, source) : getComponentContent.call(self, source, isSubContainer));
        } else {
            pasteContent = source;
        }
        
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
        
        let toolbarContentArea = btn.closest(`.${CSS_CLASS.TOOLBAR_CONTENT_AREA}`);
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
        
        target[action](pasteContent);
        setCopyContent.call(self, null);
        
        if (isCopy) {
            if (isComponent) {
                convertToComponent.call(self, pasteContent);
            }
            
            if (isContainer) {
                convertToContainer.call(self, pasteContent);
            }
        }
    });
};
