import CSS_CLASS from './constants/cssClass';
import initContentArea from './contentArea/initContentArea';

export default function (content, contentArea) {
    let self = this;
    let contentAreasWrapper = self.wrapper;
    
    if (!contentArea) {
        contentArea = contentAreasWrapper.children(`.${CSS_CLASS.CONTENT_AREA}`);
    } else {
        if (!contentArea.jquery) {
            contentArea = contentAreasWrapper.find(contentArea);
        }
    }
    
    if (contentArea.length === 0) {
        self.error('Content area does not exist!');
    }
    
    contentArea.html(content);
    initContentArea.call(contentArea, true);
};
