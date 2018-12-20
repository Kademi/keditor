import log from '../utils/log';

export default function () {
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let activeForm = sidebar.find('.keditor-sidebar-body').children('.active');
    
    if (activeForm.length > 0) {
        if (activeForm.is('.keditor-container-setting')) {
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
        
        activeForm.removeClass('active');
    }
    
    self.setSettingComponent(null);
    self.setSettingContainer(null);
    sidebar.removeClass('opened');
}