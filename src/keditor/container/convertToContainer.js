import CSS_CLASS from '../constants/cssClass';
import initContainer from './initContainer';

export default function (contentArea, target) {
    let self = this;
    let container;
    
    if (target.is('section')) {
        target.addClass(`${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER}`);
        target.wrapInner(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_INNER}"></section>`);
        container = target;
    } else {
        target.wrap(`
            <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER}">
                <section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_INNER}"></section>
            </section>
        `);
        container = target.parent().parent();
    }
    
    initContainer.call(self, contentArea, container);
};
