import CLASS_NAMES from '../constants/classNames';
import openSidebar from '../sidebar/openSidebar';
import closeSidebar from '../sidebar/closeSidebar';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        if (self.sidebar.hasClass(CLASS_NAMES.STATE_OPENED)) {
            if (!component.is(self.settingComponent)) {
                openSidebar.call(self, component);
            } else {
                closeSidebar.call(self);
            }
        } else {
            openSidebar.call(self, component);
        }
    });
};
