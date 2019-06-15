import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let sidebarBody = self.sidebar.find(`.${CLASS_NAMES.SIDEBAR_BODY}`);
    
    if ($.isPlainObject(options.extraSettings)) {
        for (let key in options.extraSettings) {
            let extraSetting = options.extraSettings[key];
            let form = $(`<div data-extra-setting="${key}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.SETTING_FORM} ${CLASS_NAMES.SETTING_EXTRA}"></div>`);
            form.html(extraSetting.content);
            sidebarBody.append(form);
            
            let trigger = typeof extraSetting.trigger === 'function' ? extraSetting.trigger.call(this, extraSetting) : extraSetting.trigger;
            trigger.on('click', function (e) {
                e.preventDefault();
                
                self.openSidebar(trigger);
            })
        }
    }
};
