import CSS_CLASS from '../constants/cssClass';
import getComponentType from '../component/getComponentType';
import SETTING_CATEGORY from '../constants/settingCategory';
import showSettingForm from './showSettingForm';

export default function (target) {
    let self = this;
    let options = self.options;
    let _showSettingForm = (...args) => showSettingForm.call(self, ...args);
    
    if (target.is(`.${CSS_CLASS.COMPONENT}`)) {
        let componentType = getComponentType.call(self, target);
        let componentData = KEditor.components[componentType];
    
        _showSettingForm(target, componentType, SETTING_CATEGORY.COMPONENT, componentData.settingTitle, componentData.initSettingForm, componentData.showSettingForm, componentData);
    } else if (target.is(`.${CSS_CLASS.CONTAINER}`)) {
        _showSettingForm(target, null, SETTING_CATEGORY.CONTAINER, options.locale.containerSetting, options.containerSettingInitFunction, options.containerSettingShowFunction, self);
    } else {
        let extraKey = target.attr('data-extra-setting');
        let extraTabData = options.extraSettings[extraKey];
        _showSettingForm(target, extraKey, SETTING_CATEGORY.EXTRA, extraTabData.title, extraTabData.settingInitFunction, extraTabData.settingShowFunction, extraTabData);
    }
};
