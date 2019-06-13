import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', function (e) {
        let sidebar = self.getClickedElement(e, `.${CLASS_NAMES.SIDEBAR}`);
        let modal = self.getClickedElement(e, `.${CLASS_NAMES.MODAL}`);
        
        let container = self.getClickedElement(e, `.${CLASS_NAMES.CONTAINER}`);
        if (container) {
            if (!container.hasClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                container.addClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                let contentArea = container.parent();
                if (typeof options.onContainerSelected === 'function') {
                    options.onContainerSelected.call(self, e, container, contentArea);
                }
            }
        } else {
            if (!sidebar && !modal) {
                contentAreasWrapper.find(`.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
            }
        }
        
        let component = self.getClickedElement(e, `.${CLASS_NAMES.COMPONENT}`);
        if (component) {
            if (!component.hasClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CLASS_NAMES.COMPONENT}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                component.addClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                let contentArea = component.parent();
                if (typeof options.onComponentSelected === 'function') {
                    options.onComponentSelected.call(self, e, component, contentArea);
                }
            }
        } else {
            if (!sidebar) {
                contentAreasWrapper.find(`.${CLASS_NAMES.COMPONENT}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
            }
        }
    });
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        if (contentAreasWrapper.hasClass(CLASS_NAMES.STATE_SETTING_OPENED) && contentAreasWrapper.hasClass(CLASS_NAMES.STATE_SIDEBAR_OPENED)) {
            if (!container.is(self.settingContainer)) {
                self.openSidebar(container);
            } else {
                self.closeSidebar();
            }
        } else {
            self.openSidebar(container);
        }
    });
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        let contentArea = container.parent();
        let newContainer = $(self.getContainerContent(container, btn.parent().hasClass(CLASS_NAMES.SUB_CONTAINER_TOOLBAR)));
        container.after(newContainer);
        self.convertToContainer(contentArea, newContainer);
        
        if (typeof options.onContainerDuplicated === 'function') {
            options.onContainerDuplicated.call(self, container, newContainer, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
    });
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_DELETE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        
        if (confirm(options.confirmDeleteContainerText)) {
            let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
            let components = container.find(`.${CLASS_NAMES.COMPONENT}`);
            let contentArea = container.parent();
            
            if (typeof options.onBeforeContainerDeleted === 'function') {
                options.onBeforeContainerDeleted.call(self, e, container, contentArea);
            }
            
            let settingComponent = self.settingComponent;
            if (settingComponent) {
                let settingComponentParent = settingComponent.closest(`.${CLASS_NAMES.CONTAINER}`);
                if (settingComponentParent.is(container)) {
                    self.closeSidebar();
                }
            } else if (container.is(self.settingContainer)) {
                self.closeSidebar();
            }
            
            if (components.length > 0) {
                components.each(function () {
                    self.deleteComponent($(this));
                });
            }
            
            container.remove();
            
            if (typeof options.onContainerDeleted === 'function') {
                options.onContainerDeleted.call(self, e, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        if (contentAreasWrapper.hasClass(CLASS_NAMES.STATE_SETTING_OPENED) && contentAreasWrapper.hasClass(CLASS_NAMES.STATE_SIDEBAR_OPENED)) {
            if (!component.is(self.settingComponent())) {
                self.openSidebar(component);
            } else {
                self.closeSidebar();
            }
        } else {
            self.openSidebar(component);
        }
    });
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        let container = component.closest(`.${CLASS_NAMES.CONTAINER}`);
        let contentArea = container.parent();
        let newComponent = $(self.getComponentContent(component));
        
        component.after(newComponent);
        self.convertToComponent(contentArea, container, newComponent);
        
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
                self.closeSidebar();
            }
            
            self.deleteComponent(component);
            
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
