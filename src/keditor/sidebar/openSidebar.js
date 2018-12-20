import log from '../utils/log';

export default function (target) {
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let sidebarTitle = sidebar.find('.keditor-sidebar-title');
    let sidebarBody = sidebar.find('.keditor-sidebar-body');
    let activeForm = sidebarBody.children('.active');
    activeForm.removeClass('active');
    
    if (target.is('.keditor-component')) {
        self.setSettingComponent(target);
        self.setSettingContainer(null);
        
        let componentType = self.getComponentType(target);
        let componentData = KEditor.components[componentType];
        sidebarTitle.html(componentData.settingTitle);
        
        let settingForm = sidebarBody.find(`.keditor-setting-${componentType}`);
        
        if (settingForm.length === 0) {
            let componentData = KEditor.components[componentType];
            if (typeof componentData.initSettingForm === 'function') {
                settingForm = $(`
                            <div
                                data-type="${componentType}"
                                class="keditor-ui keditor-setting-form keditor-setting-${componentType} clearfix active"
                            >
                            </div>
                        `);
                let loadingText = $('<span />').html('Loading...');
                sidebarBody.append(settingForm);
                settingForm.append(loadingText);
                
                let initFunction = componentData.initSettingForm.call(componentData, settingForm, self);
                $.when(initFunction).done(function () {
                    log(`Initialized setting form for component type "${componentType}"`);
                    
                    setTimeout(function () {
                        loadingText.remove();
                        
                        if (typeof componentData.showSettingForm === 'function') {
                            componentData.showSettingForm.call(componentData, settingForm, target, self);
                        }
                    }, 100);
                });
            }
        } else {
            if (typeof componentData.showSettingForm === 'function') {
                componentData.showSettingForm.call(componentData, settingForm, target, self);
            }
            settingForm.addClass('active');
        }
    } else {
        self.setSettingContainer(target);
        self.setSettingComponent(null);
        
        sidebarTitle.html('Container Settings');
        
        let settingForm = sidebar.find('.keditor-container-setting');
        if (typeof options.containerSettingShowFunction === 'function') {
            options.containerSettingShowFunction.call(self, settingForm, target, self);
        }
        settingForm.addClass('active');
    }
    
    sidebar.addClass('opened');
};
