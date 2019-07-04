import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.CONTAINER_MOVE_UP}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let container = btn.closest(`.${CSS_CLASS.CONTAINER}`);
        let prevContainer = container.prev(`.${CSS_CLASS.CONTAINER}`);
        
        if (prevContainer.length > 0) {
            let contentArea = container.parent();
            
            prevContainer.before(container);
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
