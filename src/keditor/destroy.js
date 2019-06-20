import CLASS_NAMES from './constants/classNames';
import getContent from './getContent';

export default function () {
    let self = this;
    let element = self.element;
    let id = self.id;
    
    let content = getContent.call(self, false);
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
