import CLASS_NAMES from '../constants/classNames';
import ACTION_TYPE from '../constants/actionType';
import openModal from '../modal/openModal';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.TOOLBAR_SUB_CONTAINER_BOTTOM} .${CLASS_NAMES.ADD_CONTENT}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let subContainer = btn.closest(`.${CLASS_NAMES.SUB_CONTAINER}`);
        openModal(subContainer, ACTION_TYPE.AFTER, true, options.nestedContainerEnabled);
    });
};
