import CLASS_NAMES from '../constants/classNames';
import closeModal from './closeModal';

export default function () {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = null;
    self.modalTargetAction = null;
    modal.find(`.${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
    modal.find(`.${CLASS_NAMES.STATE_NOT_MATCHED}`).removeClass(CLASS_NAMES.STATE_NOT_MATCHED);
    modal.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`).val('');
    modal.removeClass(CLASS_NAMES.MODAL_COMPONENT);
    modal.removeClass(CLASS_NAMES.MODAL_CONTAINER);
    
    closeModal.call(self, modal);
};
