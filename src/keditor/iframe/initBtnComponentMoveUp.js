import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_MOVE_UP}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        let prevComponent = component.prev(`.${CSS_CLASS.COMPONENT}`);
        
        if (prevComponent.length > 0) {
            let container = component.closest(`.${CSS_CLASS.CONTAINER}`);
            let contentArea = component.closest(`.${CSS_CLASS.CONTENT_AREA}`);
            
            prevComponent.before(component);
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, e, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
