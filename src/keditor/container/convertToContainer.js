import log from '../utils/log';

export default function (contentArea, target) {
    log('convertToContainer', contentArea, target);
    
    let self = this;
    let container;
    
    if (target.is('section')) {
        target.addClass('keditor-ui keditor-container');
        target.wrapInner('<section class="keditor-ui keditor-container-inner"></section>');
        container = target;
    } else {
        target.wrap('<section class="keditor-ui keditor-container"><section class="keditor-ui keditor-container-inner"></section></section>');
        container = target.parent().parent();
    }
    
    self.initContainer(contentArea, container);
};
