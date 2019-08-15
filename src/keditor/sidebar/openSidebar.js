import CSS_CLASS from '../constants/cssClass';
import getComponentType from '../component/getComponentType';
import SETTING_CATEGORY from '../constants/settingCategory';
import showSettingForm from './showSettingForm';
import log from '../utils/log';

export default function (target) {
    log('openSidebar', target);
    
    let self = this;
    let options = self.options;
    
    if (target.is(`.${CSS_CLASS.COMPONENT}`)) {
        let componentType = getComponentType.call(self, target);
        let componentData = KEditor.components[componentType];
    
        showSettingForm.call(self, target, componentType, SETTING_CATEGORY.COMPONENT, componentData.settingTitle, componentData.initSettingForm, componentData.showSettingForm, componentData);
    } else if (target.is(`.${CSS_CLASS.CONTAINER}`)) {
        showSettingForm.call(self, target, null, SETTING_CATEGORY.CONTAINER, options.locale.containerSetting, options.containerSettingInitFunction, options.containerSettingShowFunction, self);
    } else {
        let extraKey = target.attr('data-extra-setting');
        let extraSetting = options.extraSettings[extraKey];
        showSettingForm.call(self, target, extraKey, SETTING_CATEGORY.EXTRA, extraSetting.title, extraSetting.settingInitFunction, extraSetting.settingShowFunction, extraSetting);
    }
};
