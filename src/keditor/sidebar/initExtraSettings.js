import openSidebar from './openSidebar';

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
        })
    });
};
