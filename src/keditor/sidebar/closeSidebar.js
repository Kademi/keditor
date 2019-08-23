import CSS_CLASS from '../constants/cssClass';
import SETTING_CATEGORY from '../constants/settingCategory';
import log from '../utils/log';

export default function () {
    log('closeSidebar');
    
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let activeForm = self.sidebarBody.children(`.${CSS_CLASS.STATE_ACTIVE}`);
    
    if (activeForm.length > 0) {
        switch (activeForm.attr('[data-setting-category]')) {
            case SETTING_CATEGORY.CONTAINER:
                if (typeof options.containerSettingHideFunction === 'function') {
                    options.containerSettingHideFunction.call(self, activeForm, self);
                }
                break;
            
            case SETTING_CATEGORY.COMPONENT:
                let activeType = activeForm.attr('data-type');
                let componentData = KEditor.components[activeType];
                
                if (typeof componentData.hideSettingForm === 'function') {
                    componentData.hideSettingForm.call(componentData, activeForm, self);
                }
                break;
            
            case SETTING_CATEGORY.EXTRA:
                // TODO: Will add method when hiding setting for Extra setting
                break;
            
            default:
            // Do nothing
        }
        
        activeForm.removeClass(CSS_CLASS.STATE_ACTIVE);
    }
    
    self.settingComponent = null;
    self.settingContainer = null;
    sidebar.removeClass(CSS_CLASS.STATE_OPENED);
    self.iframeBody.removeClass(CSS_CLASS.STATE_SIDEBAR_SHOWED);
}