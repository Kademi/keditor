import CLASS_NAMES from '../constants/classNames';
import SETTING_CATEGORY from '../constants/settingCategory';
import closeSidebar from './closeSidebar';

export default function (target, settingType, settingCategory, settingTitle, initFunction, showFunction, functionContext) {
    let self = this;
    let sidebar = self.sidebar;
    let sidebarTitle = self.sidebarTitle;
    let sidebarBody = self.sidebarBody;
    
    let settingForm = sidebarBody.children(`.${CLASS_NAMES.SETTING_FORM}[data-setting-type="${settingType}"][data-setting-category="${settingCategory}"]`);
    if (settingForm.length === 0) {
        if (typeof initFunction === 'function') {
            settingForm = $(`
                <div
                    data-setting-type="${settingType}"
                    data-setting-category="${settingCategory}"
                    class="${CLASS_NAMES.UI} ${CLASS_NAMES.SETTING_FORM}"
                ></div>
            `);
            let loadingText = $(`<span class="${CLASS_NAMES.SETTING_FORM_LOADING}" />`).html('Loading...');
            sidebarBody.append(settingForm);
            settingForm.append(loadingText);
            
            $.when(initFunction.call(functionContext, settingForm, self)).done(function () {
                setTimeout(function () {
                    loadingText.remove();
                    
                    if (typeof showFunction === 'function') {
                        showFunction.call(functionContext, settingForm, target, self);
                    }
                }, 100);
            });
        }
    } else {
        if (settingForm.hasClass(CLASS_NAMES.STATE_ACTIVE) && (target.is(self.settingContainer) || target.is(self.settingComponent))) {
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
    
    sidebarBody.children(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
    sidebarTitle.html(settingTitle);
    settingForm.addClass(CLASS_NAMES.STATE_ACTIVE);
    sidebar.addClass(CLASS_NAMES.STATE_OPENED);
}