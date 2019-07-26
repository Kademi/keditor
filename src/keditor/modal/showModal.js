import CSS_CLASS from '../constants/cssClass';

export default function (modal) {
    modal.css('display', 'block');
    $(document.body).addClass(CSS_CLASS.STATE_MODAL_OPENED);
    setTimeout(() => {
        modal.addClass(CSS_CLASS.STATE_SHOWED);
    }, 0);
};
