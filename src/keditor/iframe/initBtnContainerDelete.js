import CSS_CLASS from '../constants/cssClass';
import closeSidebar from '../sidebar/closeSidebar';
import deleteComponent from '../component/deleteComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.CONTAINER_DELETE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        
        if (confirm(options.locale.confirmDeleteContainerText)) {
            let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
            let components = container.find(`.${CSS_CLASS.COMPONENT}`);
            let contentArea = container.closest(`.${CSS_CLASS.CONTENT_AREA}`);
            
            if (typeof options.onBeforeContainerDeleted === 'function') {
                options.onBeforeContainerDeleted.call(self, e, container, contentArea);
            }
            
            if (self.settingComponent) {
                let settingComponentParent = self.settingComponent.closest(`.${CSS_CLASS.CONTAINER}`);
                if (settingComponentParent.is(container)) {
                    closeSidebar.call(self);
                }
            } else if (container.is(self.settingContainer)) {
                closeSidebar.call(self);
            }
            
            if (components.length > 0) {
                components.each(function () {
                    deleteComponent.call(self, $(this));
                });
            }
            
            container.remove();
            
            if (typeof options.onContainerDeleted === 'function') {
                options.onContainerDeleted.call(self, e, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
