import CSS_CLASS from '../constants/cssClass';
import openSidebar from '../sidebar/openSidebar';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_SETTING}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        openSidebar.call(self, component);
    });
};
