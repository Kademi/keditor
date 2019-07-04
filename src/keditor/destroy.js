import CSS_CLASS from './constants/cssClass';
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
    
    element.removeClass(CSS_CLASS.UI_HIDDEN);
    element.data('keditor', null);
    delete KEditor.instances[id];
};
