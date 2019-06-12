import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let activeForm = sidebar.find(`.${CLASS_NAMES.SIDEBAR_BODY}`).children(`.${CLASS_NAMES.SETTING_FORM_ACTIVE}`);
    
    if (activeForm.length > 0) {
        if (activeForm.is(`.${CLASS_NAMES.SETTING_CONTAINER}`)) {
            if (typeof options.containerSettingHideFunction === 'function') {
                options.containerSettingHideFunction.call(self, activeForm, self);
            }
        } else {
            let activeType = activeForm.attr('data-type');
            let componentData = KEditor.components[activeType];
            
            if (typeof componentData.hideSettingForm === 'function') {
                componentData.hideSettingForm.call(componentData, activeForm, self);
            }
        }
        
        activeForm.removeClass(CLASS_NAMES.SETTING_FORM_ACTIVE);
    }
    
    self.setSettingComponent(null);
    self.setSettingContainer(null);
    sidebar.removeClass(CLASS_NAMES.SIDEBAR_OPENED);
}