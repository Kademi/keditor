import CSS_CLASS from './constants/cssClass';
import initContentArea from './contentArea/initContentArea';
import error from './utils/error';

export default function (content, contentArea) {
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    let target;
    
    if (!contentArea) {
        target = contentAreasWrapper.children(`.${CSS_CLASS.CONTENT_AREA}`);
    } else {
        if (!contentArea.jquery) {
            target = contentAreasWrapper.find(contentArea);
        }
    }

    if (target.length === 0) {
        error('Content area does not exist!');
    }

    target.html(content);
    initContentArea.call(self, target, true);
};
