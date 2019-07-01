import CLASS_NAMES from '../constants/classNames';
import openModal from './openModal';

export default function (target, actionType, showComponent, showContainer) {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = target;
    self.modalTargetAction = actionType;
    showComponent && modal.addClass(CLASS_NAMES.MODAL_COMPONENT);
    showContainer && modal.addClass(CLASS_NAMES.MODAL_CONTAINER);
    modal.css('display', 'block');
    
    openModal.call(self, modal);
};
