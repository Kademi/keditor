import CSS_CLASS from '../constants/cssClass';
import SETTING_CATEGORY from '../constants/settingCategory';
import closeSidebar from './closeSidebar';
import initSettingForm from './initSettingForm';

export default function (target, settingType, settingCategory, settingTitle, initFunction, showFunction, functionContext) {
    let self = this;
    let sidebar = self.sidebar;
    let sidebarTitle = self.sidebarTitle;
    let sidebarBody = self.sidebarBody;
    
    let {settingForm, isExisting} = initSettingForm.call(self, target, settingType, settingCategory, initFunction, functionContext, () => {
        if (typeof showFunction === 'function') {
            showFunction.call(functionContext, settingForm, target, self);
        }
    });
    
    if (isExisting) {
        if (settingForm.hasClass(CSS_CLASS.STATE_ACTIVE) && (target.is(self.settingContainer) || target.is(self.settingComponent) || target.is('[data-extra-setting]'))) {
            closeSidebar.call(self);
            return;
        } else {
            if (typeof showFunction === 'function') {
                showFunction.call(functionContext, settingForm, target, self);
            }
        }
    }
    
    self.settingComponent = null;
    self.settingContainer = null;
    
    switch (settingCategory) {
        case SETTING_CATEGORY.COMPONENT:
            self.settingComponent = target;
            break;
        
        case SETTING_CATEGORY.CONTAINER:
            self.settingContainer = target;
            break;
        
        default:
        // Do nothing
    }
    
    sidebarBody.children(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
    sidebarTitle.html(settingTitle);
    settingForm.addClass(CSS_CLASS.STATE_ACTIVE);
    sidebar.addClass(CSS_CLASS.STATE_OPENED);
}