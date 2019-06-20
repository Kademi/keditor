import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';
import generateId from '../utils/generateId';
import getComponentType from './getComponentType';
import generateToolbar from '../utils/generateToolbar';
import initDynamicContent from './initDynamicContent';

export default function (contentArea, container, component) {
    let self = this;
    let options = self.options;
    
    if (!component.hasClass(CLASS_NAMES.STATE_INITIALIZED) || !component.hasClass(CLASS_NAMES.STATE_INITIALIZING)) {
        component.addClass(CLASS_NAMES.STATE_INITIALIZING);
        component.attr('id', generateId());
        
        if (typeof options.onBeforeInitComponent === 'function') {
            options.onBeforeInitComponent.call(self, component, contentArea);
        }
        
        let componentContent = component.children(`.${CLASS_NAMES.COMPONENT_CONTENT}`);
        componentContent.attr('id', generateId());
        
        let componentType = getComponentType.call(self, component);
        let componentData = KEditor.components[componentType];
        
        component.append(generateToolbar.call(self, TOOLBAR_TYPE.COMPONENT, componentData.settingEnabled));
        
        component.find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            
            initDynamicContent.call(self, dynamicElement);
        });
        
        if (typeof componentData.init === 'function') {
            componentData.init.call(componentData, contentArea, container, component, self);
        }
        
        if (typeof options.onInitComponent === 'function') {
            options.onInitComponent.call(self, component, contentArea);
        }
        
        component.addClass(CLASS_NAMES.STATE_INITIALIZED);
        component.removeClass(CLASS_NAMES.STATE_INITIALIZING);
    }
};
