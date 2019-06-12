export default function (inArray) {
    let self = this;
    let result = [];
    
    self.wrapper.find('.keditor-content-area-inner').each(function () {
        let html = '';
        $(this).children('.keditor-container').each(function () {
            let container = $(this);
            
            html += self.getContainerContent(container);
        });
        
        result.push(html);
    });
    
    return inArray ? result : result.join('\n');
};
