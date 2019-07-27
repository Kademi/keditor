import CSS_CLASS from '../constants/cssClass';
import getContainerContent from '../container/getContainerContent';
import convertToContainer from '../container/convertToContainer';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.CONTAINER_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
        let contentArea = container.parent();
        let newContainer = $(getContainerContent.call(self, container, btn.parent().hasClass(CSS_CLASS.TOOLBAR_SUB_CONTAINER)));
        container.after(newContainer);
        convertToContainer.call(self, newContainer);
        
        if (typeof options.onContainerDuplicated === 'function') {
            options.onContainerDuplicated.call(self, container, newContainer, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
    });
};
