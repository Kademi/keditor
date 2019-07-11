import CSS_CLASS from '../constants/cssClass';

export default function (target, isCut) {
    let self = this;
    
    self.copyContent = isCut ? null : target;
    self.cutContent = isCut ? target : null;
    
    self.contentAreasWrapper.find(`.${CSS_CLASS.UI_CUTTING}`).removeClass(CSS_CLASS.UI_CUTTING);
    self.iframeBody.removeClass(`${CSS_CLASS.STATE_COPYING} ${CSS_CLASS.STATE_COPYING_COMPONENT} ${CSS_CLASS.STATE_COPYING_CONTAINER} ${CSS_CLASS.STATE_COPYING_SUB_CONTAINER}`);
    
    if (target) {
        isCut && target.addClass(CSS_CLASS.UI_CUTTING);
        self.iframeBody.addClass(CSS_CLASS.STATE_COPYING);
        
        if (target.hasClass(CSS_CLASS.COMPONENT)) {
            self.iframeBody.addClass(CSS_CLASS.STATE_COPYING_COMPONENT);
        }
        
        if (target.hasClass(CSS_CLASS.CONTAINER)) {
            self.iframeBody.addClass(target.hasClass(CSS_CLASS.SUB_CONTAINER) ? CSS_CLASS.STATE_COPYING_SUB_CONTAINER : CSS_CLASS.STATE_COPYING_CONTAINER);
        }
    }
};
