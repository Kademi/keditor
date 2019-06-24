import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let modal = self.modal;
    
    modal.on({
        click: function (e) {
            e.preventDefault();
            
            let snippet = $(this);
            if (snippet.hasClass(CLASS_NAMES.STATE_SELECTED)) {
                snippet.removeClass(CLASS_NAMES.STATE_SELECTED)
            } else {
                modal.find(`.${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
                snippet.addClass(CLASS_NAMES.STATE_SELECTED);
            }
        },
        mouseover: function () {
            $(this).addClass(CLASS_NAMES.STATE_SELECTED);
        },
        mouseout: function () {
            $(this).removeClass(CLASS_NAMES.STATE_SELECTED);
        }
    }, `.${CLASS_NAMES.SNIPPET}`);
};
