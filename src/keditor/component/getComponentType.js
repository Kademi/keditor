import error from '../utils/error';
import log from '../utils/log';

export default function (component) {
    let self = this;
    let options = self.options;
    
    let componentType = (component.attr('data-type') || '').replace('component-', '');
    if (componentType && (componentType in KEditor.components)) {
        return componentType;
    } else {
        if (typeof options.defaultComponentType === 'string') {
            componentType = options.defaultComponentType;
        } else if (typeof options.defaultComponentType === 'function') {
            componentType = options.defaultComponentType.call(self, component);
        }
        
        if (!componentType) {
            error('Component type is undefined!');
        }
        
        log(`Fallback to defaultComponentType: ${componentType}`);
        return componentType;
    }
};
