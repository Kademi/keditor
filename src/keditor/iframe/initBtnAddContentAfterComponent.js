import CLASS_NAMES from '../constants/classNames';
import ACTION_TYPE from '../constants/actionType';
import openModal from '../modal/openModal';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.TOOLBAR_COMPONENT_BOTTOM} .${CLASS_NAMES.ADD_CONTENT}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        openModal.call(self, component, ACTION_TYPE.AFTER, true, options.nestedContainerEnabled);
    });
};
