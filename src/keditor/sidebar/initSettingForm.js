import CSS_CLASS from '../constants/cssClass';

export default function (target, settingType, settingCategory, initFunction, functionContext, callback) {
    let self = this;
    let sidebarBody = self.sidebarBody;
    let isExisting = false;
    
    let settingForm = sidebarBody.children(`.${CSS_CLASS.SETTING_FORM}[data-setting-type="${settingType}"][data-setting-category="${settingCategory}"]`);
    if (settingForm.length === 0) {
        if (typeof initFunction === 'function') {
            settingForm = $(`
                <div
                    data-setting-type="${settingType}"
                    data-setting-category="${settingCategory}"
                    class="${CSS_CLASS.UI} ${CSS_CLASS.SETTING_FORM}"
                ></div>
            `);
            let loadingText = $(`<span class="${CSS_CLASS.SETTING_FORM_LOADING}" />`).html('Loading...');
            sidebarBody.append(settingForm);
            settingForm.append(loadingText);
    
            $.when(initFunction.call(functionContext, settingForm, self)).done(function () {
                setTimeout(function () {
                    loadingText.remove();
                    
                    typeof callback === 'function' && callback(false);
                }, 100);
            });
        }
    } else {
        isExisting = true;
    }
    
    return {
        settingForm,
        isExisting
    }
};
