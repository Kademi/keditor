import CLASS_NAMES from '../constants/classNames';
import getClickedElement from '../utils/getClickedElement';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    contentAreasWrapper.on('click', function (e) {
        let sidebar = getClickedElement(e, `.${CLASS_NAMES.SIDEBAR}`);
        let modal = getClickedElement(e, `.${CLASS_NAMES.MODAL}`);
        
        let container = getClickedElement(e, `.${CLASS_NAMES.CONTAINER}`);
        if (container) {
            if (!container.hasClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                container.addClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                let contentArea = container.parent();
                if (typeof options.onContainerSelected === 'function') {
                    options.onContainerSelected.call(self, e, container, contentArea);
                }
            }
        } else {
            if (!sidebar && !modal) {
                contentAreasWrapper.find(`.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
            }
        }
        
        let component = getClickedElement(e, `.${CLASS_NAMES.COMPONENT}`);
        if (component) {
            if (!component.hasClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CLASS_NAMES.COMPONENT}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                component.addClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
                
                let contentArea = component.parent();
                if (typeof options.onComponentSelected === 'function') {
                    options.onComponentSelected.call(self, e, component, contentArea);
                }
            }
        } else {
            if (!sidebar) {
                contentAreasWrapper.find(`.${CLASS_NAMES.COMPONENT}.${CLASS_NAMES.STATE_TOOLBAR_SHOWED}`).removeClass(CLASS_NAMES.STATE_TOOLBAR_SHOWED);
            }
        }
    });
};
