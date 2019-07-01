import CLASS_NAMES from '../constants/classNames';

export default function (modal) {
    let cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    
    modal.off(cssTransitionEnd).on(cssTransitionEnd, () => {
        if (!modal.hasClass(CLASS_NAMES.STATE_SHOWED)) {
            modal.css('display', 'none');
            $(document.body).removeClass(CLASS_NAMES.STATE_MODAL_OPENED);
        }
    });
    
    modal.removeClass(CLASS_NAMES.STATE_SHOWED);
};
