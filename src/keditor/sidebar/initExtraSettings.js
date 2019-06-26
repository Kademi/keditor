import openSidebar from './openSidebar';

export default function () {
    let self = this;
    let options = self.options;
    
    if ($.isPlainObject(options.extraSettings)) {
        for (let key in options.extraSettings) {
            let extraSetting = options.extraSettings[key];
            
            let trigger = typeof extraSetting.trigger === 'function' ? extraSetting.trigger.call(self, extraSetting) : extraSetting.trigger;
            trigger.attr('data-extra-setting', key);
            trigger.on('click', function (e) {
                e.preventDefault();
                
                openSidebar.call(self, trigger);
            })
        }
    }
};
