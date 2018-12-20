import log from '../utils/log';

export default function (container, isNested) {
    log(`getContainerContent - isNested=${isNested}`, container);
    
    let self = this;
    let containerInner = container.children('.keditor-container-inner').clone();
    
    containerInner.find('[data-type=container-content]').not(isNested ? '' : '.keditor-sub-container-content').each(function () {
        let containerContent = $(this);
        containerContent.removeClass('keditor-container-content keditor-sub-container-content ui-sortable').removeAttr('id');
        
        let containerContentInner = containerContent.children();
        let content = '';
        
        containerContentInner.children().each(function () {
            let child = $(this);
            
            if (child.is('.keditor-component')) {
                content += self.getComponentContent(child);
            } else if (child.is('.keditor-sub-container')) {
                content += self.getContainerContent(child, true);
            }
        });
        
        containerContent.html(content);
    });
    
    return `<section>${containerInner.html()}</section>`;
}