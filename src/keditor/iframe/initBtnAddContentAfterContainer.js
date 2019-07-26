import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import showSnippetModal from '../modal/showSnippetModal';

export default function () {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.TOOLBAR_CONTAINER_BOTTOM} .${CSS_CLASS.ADD_CONTENT}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
        showSnippetModal.call(self, container, ACTION_TYPE.AFTER, true, true);
    });
};
