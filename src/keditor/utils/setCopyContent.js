import CSS_CLASS from '../constants/cssClass';

export default function (content, isCut) {
    let self = this;
    
    self.copyContent = isCut ? null : content;
    self.cutContent = isCut ? content : null;
    
    self.contentAreasWrapper.find(`.${CSS_CLASS.UI_CUTTING}`).removeClass(CSS_CLASS.UI_CUTTING);
    self.iframeBody.removeClass(`${CSS_CLASS.STATE_CUTTING} ${CSS_CLASS.STATE_COPYING}`);
    
    if (content) {
        isCut && content.addClass(CSS_CLASS.UI_CUTTING);
        self.iframeBody.addClass(isCut ? CSS_CLASS.STATE_CUTTING : CSS_CLASS.STATE_COPYING);
    }
};
