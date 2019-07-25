import CSS_CLASS from '../constants/cssClass';
import getComponentContent from '../component/getComponentContent';

export default function getContainerContent (container, isNested) {
    let self = this;
    let containerInner = container.children(`.${CSS_CLASS.CONTAINER_INNER}`).clone();
    
    containerInner.find('[data-type=container-content]').not(isNested ? '' : `.${CSS_CLASS.SUB_CONTAINER_CONTENT}`).each(function () {
        let containerContent = $(this);
        containerContent.removeClass(`${CSS_CLASS.CONTAINER_CONTENT} ${CSS_CLASS.SUB_CONTAINER_CONTENT} ${CSS_CLASS.SORTABLE} ${CSS_CLASS.RESIZABLE}`).removeAttr('id');
        
        let containerContentInner = containerContent.children();
        let content = '';
        
        containerContentInner.children().each(function () {
            let child = $(this);
            
            if (child.is(`.${CSS_CLASS.COMPONENT}`)) {
                content += getComponentContent.call(self, child);
            } else if (child.is(`.${CSS_CLASS.SUB_CONTAINER}`)) {
                content += getContainerContent.call(self, child, true);
            }
        });
        
        containerContent.html(content);
    });
    
    return containerInner.html();
}