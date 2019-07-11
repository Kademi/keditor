import CSS_CLASS from '../constants/cssClass';
import ACTION_TYPE from '../constants/actionType';
import openSnippetModal from '../modal/openSnippetModal';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.TOOLBAR_COMPONENT_BOTTOM} .${CSS_CLASS.ADD_CONTENT}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
        openSnippetModal.call(self, component, ACTION_TYPE.AFTER, true, options.nestedContainerEnabled ? !container.hasClass(CSS_CLASS.SUB_CONTAINER) : false);
    });
};
