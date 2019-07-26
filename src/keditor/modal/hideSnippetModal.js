import CSS_CLASS from '../constants/cssClass';
import hideModal from './hideModal';

export default function () {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = null;
    self.modalTargetAction = null;
    modal.find(`.${CSS_CLASS.STATE_SELECTED}`).removeClass(CSS_CLASS.STATE_SELECTED);
    modal.find(`.${CSS_CLASS.STATE_NOT_MATCHED}`).removeClass(CSS_CLASS.STATE_NOT_MATCHED);
    modal.find(`.${CSS_CLASS.SNIPPETS_FILTER}`).val('');
    modal.removeClass(CSS_CLASS.MODAL_COMPONENT);
    modal.removeClass(CSS_CLASS.MODAL_CONTAINER);
    
    hideModal.call(self, modal);
};
