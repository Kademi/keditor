import openSidebar from './openSidebar';
import initSettingForm from './initSettingForm';
import SETTING_CATEGORY from '../constants/settingCategory';

export default function () {
    let self = this;
    let options = self.options;
    
    $.isPlainObject(options.extraSettings) && $.each(options.extraSettings, (name, extraSetting) => {
        let trigger;
        switch (typeof extraSetting.trigger) {
            case 'function':
                trigger = extraSetting.trigger.call(self, extraSetting);
                break;
        
            case 'string':
                trigger = $(extraSetting.trigger);
                break;
        
            default:
                trigger = extraSetting.trigger;
        }
    
        trigger.attr('data-extra-setting', name);
        trigger.on('click', function (e) {
            e.preventDefault();
        
            openSidebar.call(self, trigger);
        });
        
        if (extraSetting.autoInit) {
            initSettingForm.call(self, trigger, name, SETTING_CATEGORY.EXTRA, extraSetting.settingInitFunction, extraSetting);
        }
    });
};
