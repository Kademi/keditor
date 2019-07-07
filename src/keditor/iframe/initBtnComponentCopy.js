import CSS_CLASS from '../constants/cssClass';
import setCopyContent from '../utils/setCopyContent';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_COPY}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        setCopyContent.call(self, component, false);
    });
};
