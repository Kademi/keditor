import getComponentType from './getComponentType';

export default function (component) {
    let self = this;
    
    let componentType = getComponentType.call(self, component);
    let componentData = KEditor.components[componentType];
    if (typeof componentData.destroy === 'function') {
        componentData.destroy.call(componentData, component, self);
    }
    
    component.remove();
};
