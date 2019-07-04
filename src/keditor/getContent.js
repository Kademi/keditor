import CSS_CLASS from './constants/cssClass';
import getContainerContent from './container/getContainerContent';

export default function (inArray) {
    let self = this;
    let result = [];
    
    self.contentAreasWrapper.find(`.${CSS_CLASS.CONTENT_AREA_INNER}`).each(function () {
        let html = '';
        $(this).children(`.${CSS_CLASS.CONTAINER}`).each(function () {
            let container = $(this);
            
            html += getContainerContent.call(self, container);
        });
        
        result.push(html);
    });
    
    return inArray ? result : result.join('\n');
};
