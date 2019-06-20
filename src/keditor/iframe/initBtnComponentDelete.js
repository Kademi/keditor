import CLASS_NAMES from '../constants/classNames';
import closeSidebar from '../sidebar/closeSidebar';
import deleteComponent from '../component/deleteComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_DELETE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        
        if (confirm(options.confirmDeleteComponentText)) {
            let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
            let container = component.closest(`.${CLASS_NAMES.CONTAINER}`);
            let contentArea = component.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
            
            if (typeof options.onBeforeComponentDeleted === 'function') {
                options.onBeforeComponentDeleted.call(self, e, component, contentArea);
            }
            
            if (component.is(self.settingComponent)) {
                closeSidebar.call(self);
            }
            
            deleteComponent.call(self, component);
            
            if (typeof options.onComponentDeleted === 'function') {
                options.onComponentDeleted.call(self, e, component, contentArea);
            }
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, e, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
