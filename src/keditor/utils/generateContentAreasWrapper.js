export default function (content) {
    let self = this;
    let options = self.options;
    
    let contentAreasWrapper = $(options.contentAreasWrapper || '<div />');
    contentAreasWrapper.attr('class', 'keditor-ui keditor-content-area-wrapper');
    
    if (!contentAreasWrapper.attr('id')) {
        contentAreasWrapper.attr('id', self.generateId('content-area-wrapper'));
    }
    
    contentAreasWrapper.html(content);
    
    return contentAreasWrapper;
};
