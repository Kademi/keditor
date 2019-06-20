import CLASS_NAMES from '../constants/classNames';
import closeSidebar from '../sidebar/closeSidebar';
import deleteComponent from '../component/deleteComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_DELETE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        
        if (confirm(options.confirmDeleteContainerText)) {
            let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
            let components = container.find(`.${CLASS_NAMES.COMPONENT}`);
            let contentArea = container.parent();
            
            if (typeof options.onBeforeContainerDeleted === 'function') {
                options.onBeforeContainerDeleted.call(self, e, container, contentArea);
            }
            
            let settingComponent = self.settingComponent;
            if (settingComponent) {
                let settingComponentParent = settingComponent.closest(`.${CLASS_NAMES.CONTAINER}`);
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
