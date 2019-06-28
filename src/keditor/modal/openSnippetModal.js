import CLASS_NAMES from '../constants/classNames';

export default function (target, actionType, showComponent, showContainer) {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = target;
    self.modalTargetAction = actionType;
    showComponent && modal.addClass(CLASS_NAMES.MODAL_COMPONENT);
    showContainer && modal.addClass(CLASS_NAMES.MODAL_CONTAINER);
    modal.css('display', 'block');
    
    $(document.body).addClass(CLASS_NAMES.STATE_MODAL_OPENED);
    setTimeout(() => {
        modal.addClass(CLASS_NAMES.STATE_SHOWED);
    }, 0);
};
