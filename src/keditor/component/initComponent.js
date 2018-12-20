import TOOLBAR_TYPE from "../constants/toolbarType";
import log from '../utils/log';

export default function (contentArea, container, component) {
    log('initComponent', contentArea, container, component);
    
    let self = this;
    let options = self.options;
    let body = self.body;
    
    if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
        component.addClass('keditor-initializing-component');
        component.attr('id', self.generateId('component'));
        
        if (typeof options.onBeforeInitComponent === 'function') {
            options.onBeforeInitComponent.call(self, component, contentArea);
        }
        
        let componentContent = component.children('.keditor-component-content');
        componentContent.attr('id', self.generateId('component-content'));
        
        let componentType = self.getComponentType(component);
        log(`Component type: ${componentType}`);
        
        let componentData = KEditor.components[componentType];
        
        log('Render KEditor toolbar for component', component);
        component.append(self.generateToolbar(TOOLBAR_TYPE.COMPONENT, componentData.settingEnabled));
        
        component.find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            
            self.initDynamicContent(dynamicElement);
        });
        
        if (typeof componentData.init === 'function') {
            componentData.init.call(componentData, contentArea, container, component, self);
        } else {
            log(`"init" function of component type "${componentType}" does not exist`);
        }
        
        if (typeof options.onInitComponent === 'function') {
            options.onInitComponent.call(self, component, contentArea);
        }
        
        component.addClass('keditor-initialized-component');
        component.removeClass('keditor-initializing-component');
    } else {
        if (component.hasClass('keditor-initialized-component')) {
            log('Component is already initialized!');
        } else {
            log('Component is initializing...');
        }
    }
};
