import CLASS_NAMES from './constants/classNames';

export default function () {
    let self = this;
    let element = self.element;
    let id = self.id;
    
    let content = self.getContent(false);
    self.wrapper.remove();
    
    if (element.is('textarea')) {
        element.val(content);
    } else {
        element.html(content);
    }
    
    element.removeClass(CLASS_NAMES.UI_HIDDEN);
    element.data('keditor', null);
    delete KEditor.instances[id];
};
