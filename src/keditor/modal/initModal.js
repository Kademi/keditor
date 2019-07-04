import CSS_CLASS from '../constants/cssClass';
import closeModal from './closeModal';

export default function (modalId, hasFooter = true, disableOriginEvents = false) {
    let self = this;
    let modalFooter = `<div class="${CSS_CLASS.MODAL_FOOTER}"></div>`;
    let modal = $(`
        <div class="${CSS_CLASS.UI} ${CSS_CLASS.MODAL} ${hasFooter ? CSS_CLASS.STATE_HAS_FOOTER : ''}" id="${modalId}">
            <div class="${CSS_CLASS.MODAL_HEADER}">
                <button type="button" class="${CSS_CLASS.MODAL_CLOSE}">&times;</button>
                <h4 class="${CSS_CLASS.MODAL_TITLE}"></h4>
            </div>
            <div class="${CSS_CLASS.MODAL_BODY}"></div>
            ${hasFooter ? modalFooter : ''}
        </div>
    `);
    
    if (!disableOriginEvents) {
        // Close buttons
        modal.on('click', `.${CSS_CLASS.MODAL_CLOSE}`, function (e) {
            e.preventDefault();
            
            closeModal.call(self, modal);
        });
    }
    
    return modal.appendTo(document.body);
};
