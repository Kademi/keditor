import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', `.${CLASS_NAMES.COMPONENT_MOVE_DOWN}`, function (e) {
        e.preventDefault();
        
        let btn = $(this);
        let component = btn.closest(`.${CLASS_NAMES.COMPONENT}`);
        let nextComponent = component.next(`.${CLASS_NAMES.COMPONENT}`);
        
        if (nextComponent.length > 0) {
            let container = component.closest(`.${CLASS_NAMES.CONTAINER}`);
            let contentArea = component.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
    
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
