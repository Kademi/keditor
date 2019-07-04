import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let modal = self.modal;
    
    modal.on({
        click: function (e) {
            e.preventDefault();
            
            let snippet = $(this);
            if (snippet.hasClass(CSS_CLASS.STATE_SELECTED)) {
                snippet.removeClass(CSS_CLASS.STATE_SELECTED)
            } else {
                modal.find(`.${CSS_CLASS.STATE_SELECTED}`).removeClass(CSS_CLASS.STATE_SELECTED);
                snippet.addClass(CSS_CLASS.STATE_SELECTED);
            }
        },
        mouseover: function () {
            $(this).addClass(CSS_CLASS.STATE_SELECTED);
        },
        mouseout: function () {
            $(this).removeClass(CSS_CLASS.STATE_SELECTED);
        }
    }, `.${CSS_CLASS.SNIPPET}`);
};
