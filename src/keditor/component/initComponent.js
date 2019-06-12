import TOOLBAR_TYPE from "../constants/toolbarType";

export default function (contentArea, container, component) {
    let self = this;
    let options = self.options;
    
    if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
        component.addClass('keditor-initializing-component');
        component.attr('id', self.generateId());
        
        if (typeof options.onBeforeInitComponent === 'function') {
            options.onBeforeInitComponent.call(self, component, contentArea);
        }
        
        let componentContent = component.children('.keditor-component-content');
        componentContent.attr('id', self.generateId());
        
        let componentType = self.getComponentType(component);
        let componentData = KEditor.components[componentType];
        
        component.append(self.generateToolbar(TOOLBAR_TYPE.COMPONENT, componentData.settingEnabled));
        
        component.find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            
            self.initDynamicContent(dynamicElement);
        });
        
        if (typeof componentData.init === 'function') {
            componentData.init.call(componentData, contentArea, container, component, self);
        }
        
        if (typeof options.onInitComponent === 'function') {
            options.onInitComponent.call(self, component, contentArea);
        }
        
        component.addClass('keditor-initialized-component');
        component.removeClass('keditor-initializing-component');
    }
};
