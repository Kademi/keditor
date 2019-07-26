import CSS_CLASS from '../constants/cssClass';
import showModal from './showModal';

export default function (target, actionType, showComponent, showContainer) {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = target;
    self.modalTargetAction = actionType;
    showComponent && modal.addClass(CSS_CLASS.MODAL_COMPONENT);
    showContainer && modal.addClass(CSS_CLASS.MODAL_CONTAINER);
    modal.css('display', 'block');
    
    showModal.call(self, modal);
};
