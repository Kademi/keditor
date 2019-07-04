import CSS_CLASS from '../constants/cssClass';
import initComponent from './initComponent';

export default function (contentArea, container, target, isExisting) {
    if (target.is(`.${CSS_CLASS.TOOLBAR_CONTAINER_CONTENT}`)) {
        return;
    }
    
    let self = this;
    let isSection = target.is('section');
    let component;
    
    if (isSection) {
        target.addClass(`${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT}`);
        target.find(`.${CSS_CLASS.COMPONENT_CONTENT}`).length === 0 && target.wrapInner(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CONTENT}"></section>`);
        component = target;
    } else {
        target.wrap(`
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT}">
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CONTENT}"></section>
            </section>
        `);
        component = target.parent().parent();
    }
    
    if (isExisting) {
        component.addClass(`${CSS_CLASS.COMPONENT_EXISTING}`);
    }
    
    initComponent.call(self, contentArea, container, component);
};
