import CSS_CLASS from '../constants/cssClass';
import closeSidebar from '../sidebar/closeSidebar';
import deleteComponent from '../component/deleteComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_DELETE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        
        if (confirm(options.locale.confirmDeleteComponentText)) {
            let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
            let container = component.closest(`.${CSS_CLASS.CONTAINER}`);
            let contentArea = component.closest(`.${CSS_CLASS.CONTENT_AREA}`);
            
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
