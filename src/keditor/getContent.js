import CLASS_NAMES from './constants/classNames';
import getContainerContent from './container/getContainerContent';

export default function (inArray) {
    let self = this;
    let result = [];
    
    self.contentAreasWrapper.find(`.${CLASS_NAMES.CONTENT_AREA_INNER}`).each(function () {
        let html = '';
        $(this).children(`.${CLASS_NAMES.CONTAINER}`).each(function () {
            let container = $(this);
            
            html += getContainerContent.call(self, container);
        });
        
        result.push(html);
    });
    
    return inArray ? result : result.join('\n');
};
