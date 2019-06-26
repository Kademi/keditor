import CLASS_NAMES from '../constants/classNames';
import SETTING_CATEGORY from '../constants/settingCategory';

export default function (target, settingType, settingCategory, settingTitle, initFunction, showFunction, functionContext) {
    let self = this;
    let sidebarTitle = self.sidebarTitle;
    let sidebarBody = self.sidebarBody;
    let activeForm = sidebarBody.children(`.${CLASS_NAMES.STATE_ACTIVE}`);
    activeForm.removeClass(CLASS_NAMES.STATE_ACTIVE);
    
    let settingForm = sidebarBody.find(`.${CLASS_NAMES.SETTING_FORM}[data-setting-type="${settingType}"][data-setting-category="${settingCategory}"]`);
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
        if (typeof showFunction === 'function') {
            showFunction.call(functionContext, settingForm, target, self);
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
    
    sidebarTitle.html(settingTitle);
    settingForm.addClass(CLASS_NAMES.STATE_ACTIVE);
}