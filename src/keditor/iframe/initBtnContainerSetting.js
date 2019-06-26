import CLASS_NAMES from '../constants/classNames';
import openSidebar from '../sidebar/openSidebar';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        openSidebar.call(self, container);
    });
};
