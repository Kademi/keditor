import CSS_CLASS from '../constants/cssClass';
import getClickedElement from '../utils/getClickedElement';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    self.iframeBody.on('click', function (e) {
        let sidebar = getClickedElement(e, `.${CSS_CLASS.SIDEBAR}`);
        let modal = getClickedElement(e, `.${CSS_CLASS.MODAL}`);
        
        let container = getClickedElement(e, `.${CSS_CLASS.CONTAINER}`);
        if (container) {
            if (!container.hasClass(CSS_CLASS.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
                container.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
                
                let contentArea = container.parent();
                if (typeof options.onContainerSelected === 'function') {
                    options.onContainerSelected.call(self, e, container, contentArea);
                }
            }
        } else {
            if (!sidebar && !modal) {
                contentAreasWrapper.find(`.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
            }
        }
        
        let component = getClickedElement(e, `.${CSS_CLASS.COMPONENT}`);
        if (component) {
            if (!component.hasClass(CSS_CLASS.STATE_TOOLBAR_SHOWED)) {
                contentAreasWrapper.find(`.${CSS_CLASS.COMPONENT}.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
                component.addClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
                
                let contentArea = component.parent();
                if (typeof options.onComponentSelected === 'function') {
                    options.onComponentSelected.call(self, e, component, contentArea);
                }
            }
        } else {
            if (!sidebar) {
                contentAreasWrapper.find(`.${CSS_CLASS.COMPONENT}.${CSS_CLASS.STATE_TOOLBAR_SHOWED}`).removeClass(CSS_CLASS.STATE_TOOLBAR_SHOWED);
            }
        }
    });
};
