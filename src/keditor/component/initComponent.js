import TOOLBAR_TYPE from '../constants/toolbarType';
import CSS_CLASS from '../constants/cssClass';
import generateId from '../utils/generateId';
import generateToolbar from '../utils/generateToolbar';
import getComponentType from './getComponentType';
import initDynamicContent from './initDynamicContent';

export default function (component) {
    let self = this;
    let options = self.options;
    let container = component.closest(`.${CSS_CLASS.CONTAINER}`);
    let contentArea = container.closest(`.${CSS_CLASS.CONTENT_AREA}`);
    
    if (!component.hasClass(CSS_CLASS.STATE_INITIALIZED) || !component.hasClass(CSS_CLASS.STATE_INITIALIZING)) {
        component.addClass(CSS_CLASS.STATE_INITIALIZING);
        component.attr('id', generateId());
        
        if (typeof options.onBeforeInitComponent === 'function') {
            options.onBeforeInitComponent.call(self, component, contentArea);
        }
        
        let componentContent = component.children(`.${CSS_CLASS.COMPONENT_CONTENT}`);
        componentContent.attr('id', generateId());
        
        let componentType = getComponentType.call(self, component);
        let componentData = KEditor.components[componentType];
        
        component.append(generateToolbar.call(self, TOOLBAR_TYPE.COMPONENT, componentData.settingEnabled));
        component.append(generateToolbar.call(self, TOOLBAR_TYPE.COMPONENT_BOTTOM));
        
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
        
        component.addClass(CSS_CLASS.STATE_INITIALIZED);
        component.removeClass(CSS_CLASS.STATE_INITIALIZING);
    }
};
