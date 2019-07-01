import CLASS_NAMES from '../constants/classNames';

export default function (modal) {
    modal.css('display', 'block');
    $(document.body).addClass(CLASS_NAMES.STATE_MODAL_OPENED);
    setTimeout(() => {
        modal.addClass(CLASS_NAMES.STATE_SHOWED);
    }, 0);
};
