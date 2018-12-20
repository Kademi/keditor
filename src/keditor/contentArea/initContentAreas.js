import log from '../utils/log';

export default function () {
    log('initContentAreas');
    
    let self = this;
    let contentAreasWrapper = self.contentAreasWrapper;
    let options = self.options;
    
    let contentAreas;
    if (options.contentAreasSelector) {
        contentAreas = contentAreasWrapper.find(options.contentAreasSelector);
    }
    
    if (!contentAreas || contentAreas.length === 0) {
        log('Do not find any content area. Creating default content area...');
        let originalContent = contentAreasWrapper.html();
        
        contentAreas = $('<div />').html(originalContent);
        contentAreasWrapper.empty().append(contentAreas);
    }
    
    contentAreas.each(function () {
        let contentArea = $(this);
        if (!contentArea.attr('id')) {
            contentArea.attr('id', self.generateId('content-area'));
        }
        
        self.initContentArea(contentArea);
    });
};
