import CLASS_NAMES from '../constants/classNames';
import getContainerContent from '../container/getContainerContent';
import convertToContainer from '../container/convertToContainer';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_DUPLICATE}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        let contentArea = container.parent();
        let newContainer = $(getContainerContent.call(self, container, btn.parent().hasClass(CLASS_NAMES.SUB_CONTAINER_TOOLBAR)));
        container.after(newContainer);
        convertToContainer.call(self, contentArea, newContainer);
        
        if (typeof options.onContainerDuplicated === 'function') {
            options.onContainerDuplicated.call(self, container, newContainer, contentArea);
        }
        
        if (typeof options.onContentChanged === 'function') {
            options.onContentChanged.call(self, e, contentArea);
        }
    });
};
