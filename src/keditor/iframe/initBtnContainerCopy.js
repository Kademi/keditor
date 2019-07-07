import CSS_CLASS from '../constants/cssClass';
import setCopyContent from '../utils/setCopyContent';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.CONTAINER_COPY}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
        setCopyContent.call(self, container, false);
    });
};
