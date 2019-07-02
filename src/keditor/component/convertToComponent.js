import CLASS_NAMES from '../constants/classNames';
import initComponent from './initComponent';

export default function (contentArea, container, target, isExisting) {
    if (target.is(`.${CLASS_NAMES.TOOLBAR_CONTAINER_CONTENT}`)) {
        return;
    }
    
    let self = this;
    let isSection = target.is('section');
    let component;
    
    if (isSection) {
        target.addClass(`${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}`);
        target.find(`.${CLASS_NAMES.COMPONENT_CONTENT}`).length === 0 && target.wrapInner(`<section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}"></section>`);
        component = target;
    } else {
        target.wrap(`
            <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}">
                <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}"></section>
            </section>
        `);
        component = target.parent().parent();
    }
    
    if (isExisting) {
        component.addClass(`${CLASS_NAMES.COMPONENT_EXISTING}`);
    }
    
    initComponent.call(self, contentArea, container, component);
};
