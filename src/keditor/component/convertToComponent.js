import CLASS_NAMES from '../constants/classNames';

export default function (contentArea, container, target, isExisting) {
    if (target.is(`.${CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR}`)) {
        return;
    }
    
    let self = this;
    let isSection = target.is('section');
    let component;
    
    if (isSection) {
        target.addClass(`${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT}`);
        target.wrapInner(`<section class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_CONTENT}"></section>`);
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
    
    self.initComponent(contentArea, container, component);
};
