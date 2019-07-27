import CSS_CLASS from '../constants/cssClass';
import getComponentContent from '../component/getComponentContent';
import convertToComponent from '../component/convertToComponent';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        let container = component.closest(`.${CSS_CLASS.CONTAINER}`);
        let contentArea = container.parent();
        let newComponent = $(getComponentContent.call(self, component));
        
        component.after(newComponent);
        convertToComponent.call(self, newComponent);
        
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
