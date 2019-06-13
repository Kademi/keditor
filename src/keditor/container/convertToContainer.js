import CLASS_NAMES from '../constants/classNames';

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
    
    self.initContainer(contentArea, container);
};
