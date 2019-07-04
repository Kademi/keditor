import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CSS_CLASS.COMPONENT_MOVE_DOWN}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CSS_CLASS.COMPONENT}`);
        let nextComponent = component.next(`.${CSS_CLASS.COMPONENT}`);
        
        if (nextComponent.length > 0) {
            let container = component.closest(`.${CSS_CLASS.CONTAINER}`);
            let contentArea = component.closest(`.${CSS_CLASS.CONTENT_AREA}`);
    
            nextComponent.after(component);
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, e, container, contentArea);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        }
    });
};
