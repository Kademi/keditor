import CSS_CLASS from '../constants/cssClass';
import getDataAttributes from '../utils/getDataAttributes';
import initComponent from './initComponent';

export default function (target, isExisting) {
    if (target.is(`.${CSS_CLASS.TOOLBAR_CONTAINER_CONTENT}`)) {
        return;
    }
    
    let self = this;
    let component;
    let dataAttributes = getDataAttributes.call(self, target, null, true);
    
    target.wrap(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT}" data-type="${target.attr('data-type')}" ${dataAttributes.join(' ')}></section>`);
    target.wrap(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CONTENT}"></section>`);
    component = target.parent().parent();
    
    target.removeAttr('data-type');
    
    if (isExisting) {
        component.addClass(`${CSS_CLASS.COMPONENT_EXISTING}`);
    }
    
    initComponent.call(self, component);
};
