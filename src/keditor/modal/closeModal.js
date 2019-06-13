import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = null;
    self.modalAction = null;
    modal.find(`.${CLASS_NAMES.MODAL_TITLE}`).html('');
    modal.find(`.${CLASS_NAMES.SNIPPETS_WRAPPER} .${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
    modal.removeClass(CLASS_NAMES.STATE_SHOWED);
};
