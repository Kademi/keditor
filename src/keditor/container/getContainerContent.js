import CLASS_NAMES from '../constants/classNames';
import getComponentContent from '../component/getComponentContent';

export default function getContainerContent (container, isNested) {
    let self = this;
    let containerInner = container.children(`.${CLASS_NAMES.CONTAINER_INNER}`).clone();
    
    containerInner.find('[data-type=container-content]').not(isNested ? '' : `.${CLASS_NAMES.SUB_CONTAINER_CONTENT}`).each(function () {
        let containerContent = $(this);
        containerContent.removeClass(`${CLASS_NAMES.CONTAINER_CONTENT} ${CLASS_NAMES.SUB_CONTAINER_CONTENT} ${CLASS_NAMES.SORTABLE}`).removeAttr('id');
        
        let containerContentInner = containerContent.children();
        let content = '';
        
        containerContentInner.children().each(function () {
            let child = $(this);
            
            if (child.is(`.${CLASS_NAMES.COMPONENT}`)) {
                content += getComponentContent.call(self, child);
            } else if (child.is(`.${CLASS_NAMES.SUB_CONTAINER}`)) {
                content += getContainerContent.call(self, child, true);
            }
        });
        
        containerContent.html(content);
    });
    
    return `<section>${containerInner.html()}</section>`;
}