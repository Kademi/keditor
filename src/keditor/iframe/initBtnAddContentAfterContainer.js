import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import openSnippetModal from '../modal/openSnippetModal';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.TOOLBAR_SUB_CONTAINER_BOTTOM} .${CSS_CLASS.ADD_CONTENT}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let subContainer = btn.closest(`.${CSS_CLASS.SUB_CONTAINER}`);
        openSnippetModal.call(self, subContainer, ACTION_TYPE.AFTER, true, options.nestedContainerEnabled);
    });
};
