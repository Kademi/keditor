import generateId from '../utils/generateId';
import initContentArea from './initContentArea';

export default function () {
    let self = this;
    let options = self.options;
    let contentAreasWrapper = self.contentAreasWrapper;
    
    let contentAreas;
    if (options.contentAreasSelector) {
        contentAreas = contentAreasWrapper.find(options.contentAreasSelector);
    }
    
    if (!contentAreas || contentAreas.length === 0) {
        let originalContent = contentAreasWrapper.html();
        
        contentAreas = $('<div />').html(originalContent);
        contentAreasWrapper.empty().append(contentAreas);
    }
    
    contentAreas.each(function () {
        let contentArea = $(this);
        if (!contentArea.attr('id')) {
            contentArea.attr('id', generateId());
        }
        
        initContentArea.call(self, contentArea);
    });
};
