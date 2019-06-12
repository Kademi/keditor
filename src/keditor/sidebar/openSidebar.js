import CLASS_NAMES from '../constants/classNames';

export default function (target) {
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let sidebarTitle = sidebar.find(`.${CLASS_NAMES.SIDEBAR_TITLE}`);
    let sidebarBody = sidebar.find(`.${CLASS_NAMES.SIDEBAR_BODY}`);
    let activeForm = sidebarBody.children(`.${CLASS_NAMES.SETTING_FORM_ACTIVE}`);
    activeForm.removeClass(CLASS_NAMES.SETTING_FORM_ACTIVE);
    
    if (target.is(`.${CLASS_NAMES.COMPONENT}`)) {
        self.setSettingComponent(target);
        self.setSettingContainer(null);
        
        let componentType = self.getComponentType(target);
        let componentData = KEditor.components[componentType];
        sidebarTitle.html(componentData.settingTitle);
        
        let settingFormClass = `${CLASS_NAMES.SETTING}-${componentType}`;
        let settingForm = sidebarBody.find(`.${settingFormClass}`);
        
        if (settingForm.length === 0) {
            let componentData = KEditor.components[componentType];
            if (typeof componentData.initSettingForm === 'function') {
                settingForm = $(`
                    <div
                        data-type="${componentType}"
                        class="${CLASS_NAMES.UI} ${CLASS_NAMES.SETTING_FORM} ${settingFormClass} clearfix ${CLASS_NAMES.SETTING_FORM_ACTIVE}"
                    >
                    </div>
                `);
                let loadingText = $('<span />').html('Loading...');
                sidebarBody.append(settingForm);
                settingForm.append(loadingText);
                
                let initFunction = componentData.initSettingForm.call(componentData, settingForm, self);
                $.when(initFunction).done(function () {
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
            settingForm.addClass(CLASS_NAMES.SETTING_FORM_ACTIVE);
        }
    } else {
        self.setSettingContainer(target);
        self.setSettingComponent(null);
        
        sidebarTitle.html('Container Settings');
        
        let settingForm = sidebar.find(`.${CLASS_NAMES.SETTING_CONTAINER}`);
        if (typeof options.containerSettingShowFunction === 'function') {
            options.containerSettingShowFunction.call(self, settingForm, target, self);
        }
        settingForm.addClass(CLASS_NAMES.SETTING_FORM_ACTIVE);
    }
    
    sidebar.addClass(CLASS_NAMES.SIDEBAR_OPENED);
};
