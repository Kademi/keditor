import CLASS_NAMES from '../constants/classNames';
import getContent from '../getContent';

export default function () {
    let self = this;
    let options = self.options;
    let btnSave = $(`<a href="javascript:void(0);" title="Save" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-save"></i></a>`);
    btnSave.on('click', function (e) {
        e.preventDefault();
        
        let content = getContent.call(self);
        
        typeof options.onSave === 'function' && options.onSave.call(self, content);
    });
    
    self.topbarRight.append(btnSave);
};
