import CSS_CLASS from '../constants/cssClass';

export default function (content, isCut) {
    let self = this;
    
    self.copyContent = isCut ? null : content;
    self.cutContent = isCut ? content : null;
    
    self.contentAreasWrapper.find(`.${CSS_CLASS.UI_CUTTING}`).removeClass(CSS_CLASS.UI_CUTTING);
    isCut && content.addClass(CSS_CLASS.UI_CUTTING);
};
