import CLASS_NAMES from '../constants/classNames';
import getContent from '../getContent';
import ICONS from '../constants/icons';

export default function () {
    let self = this;
    let options = self.options;
    let btnSave = $(`<a href="javascript:void(0);" title="${options.locale.save}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.SAVE}</a>`);
    btnSave.on('click', function (e) {
        e.preventDefault();
        
        let content = getContent.call(self);
        
        typeof options.onSave === 'function' && options.onSave.call(self, content);
    });
    
    self.topbarRight.append(btnSave);
};
