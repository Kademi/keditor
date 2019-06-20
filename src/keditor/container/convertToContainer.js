import CLASS_NAMES from '../constants/classNames';
import initContainer from './initContainer';

export default function (contentArea, target) {
    let self = this;
    let container;
    
    if (target.is('section')) {
        target.addClass(`${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER}`);
        target.wrapInner(`<section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_INNER}"></section>`);
        container = target;
    } else {
        target.wrap(`
            <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER}">
                <section class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_INNER}"></section>
            </section>
        `);
        container = target.parent().parent();
    }
    
    initContainer.call(self, contentArea, container);
};
