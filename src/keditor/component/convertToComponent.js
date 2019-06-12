export default function (contentArea, container, target, isExisting) {
    if (target.is('.keditor-container-content-toolbar')) {
        return;
    }
    
    let self = this;
    let isSection = target.is('section');
    let component;
    
    if (isSection) {
        target.addClass('keditor-ui keditor-component');
        target.wrapInner('<section class="keditor-ui keditor-component-content"></section>');
        component = target;
    } else {
        target.wrap('<section class="keditor-ui keditor-component"><section class="keditor-ui keditor-component-content"></section></section>');
        component = target.parent().parent();
    }
    
    if (isExisting) {
        component.addClass('existing-component');
    }
    
    self.initComponent(contentArea, container, component);
};
