import CSS_CLASS from '../constants/cssClass';
import initContainer from './initContainer';

export default function (target) {
    let self = this;
    let container;
    
    target.wrap(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER}"></section>`);
    target.wrap(`<section class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_INNER}"></section>`);
    container = target.parent().parent();
    
    initContainer.call(self, container);
};
