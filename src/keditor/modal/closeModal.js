import CSS_CLASS from '../constants/cssClass';

export default function (modal) {
    let cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    
    modal.off(cssTransitionEnd).on(cssTransitionEnd, () => {
        if (!modal.hasClass(CSS_CLASS.STATE_SHOWED)) {
            modal.css('display', 'none');
            $(document.body).removeClass(CSS_CLASS.STATE_MODAL_OPENED);
        }
    });
    
    modal.removeClass(CSS_CLASS.STATE_SHOWED);
};
