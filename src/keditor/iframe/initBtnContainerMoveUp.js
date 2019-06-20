import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.CONTAINER_MOVE_UP}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CLASS_NAMES.CONTAINER}`);
        let prevContainer = container.prev(`.${CLASS_NAMES.CONTAINER}`);
        
        if (prevContainer.length > 0) {
            let contentArea = container.parent();
            
            prevContainer.before(container);
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
