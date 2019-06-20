import CLASS_NAMES from '../constants/classNames';
import openSidebar from '../sidebar/openSidebar';
import closeSidebar from '../sidebar/closeSidebar';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        if (self.sidebar.hasClass(CLASS_NAMES.STATE_OPENED)) {
            if (!container.is(self.settingContainer)) {
                openSidebar.call(self, container);
            } else {
                closeSidebar.call(self);
            }
        } else {
            openSidebar.call(self, container);
        }
    });
};
