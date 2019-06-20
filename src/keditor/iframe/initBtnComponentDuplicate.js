import CLASS_NAMES from '../constants/classNames';
import getComponentContent from '../component/getComponentContent';
import convertToComponent from '../component/convertToComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        let container = component.closest(`.${CLASS_NAMES.CONTAINER}`);
        let contentArea = container.parent();
        let newComponent = $(getComponentContent.call(self, component));
        
        component.after(newComponent);
        convertToComponent.call(self, contentArea, container, newComponent);
        
        if (typeof options.onComponentDuplicated === 'function') {
            options.onComponentDuplicated.call(self, component, newComponent, contentArea);
        }
        
        if (typeof options.onContainerChanged === 'function') {
            options.onContainerChanged.call(self, e, container, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
    });
};
