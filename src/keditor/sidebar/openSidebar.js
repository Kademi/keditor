import CLASS_NAMES from '../constants/classNames';
import getComponentType from '../component/getComponentType';
import SETTING_CATEGORY from '../constants/settingCategory';
import showSettingForm from './showSettingForm';

export default function (target) {
    let self = this;
    let options = self.options;
    let sidebar = self.sidebar;
    let _showSettingForm = (...args) => showSettingForm.call(self, ...args);
    
    if (target.is(`.${CLASS_NAMES.COMPONENT}`)) {
        let componentType = getComponentType.call(self, target);
        let componentData = KEditor.components[componentType];
    
        _showSettingForm(target, componentType, SETTING_CATEGORY.COMPONENT, componentData.settingTitle, componentData.initSettingForm, componentData.showSettingForm, componentData);
    } else if (target.is(`.${CLASS_NAMES.CONTAINER}`)) {
        _showSettingForm(target, null, SETTING_CATEGORY.COMPONENT, options.locale.containerSetting, options.containerSettingInitFunction, options.containerSettingShowFunction, self);
    } else {
        let extraKey = target.attr('data-extra-setting');
        let extraTabData = options.extraSettings[extraKey];
        _showSettingForm(target, extraKey, SETTING_CATEGORY.EXTRA, extraTabData.title, extraTabData.settingInitFunction, extraTabData.showSettingForm, extraTabData);
    }
    
    sidebar.addClass(CLASS_NAMES.STATE_OPENED);
};
