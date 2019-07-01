import CLASS_NAMES from '../constants/classNames';
import closeModal from './closeModal';

export default function (modalId, hasFooter = true, disableOriginEvents = false) {
    let self = this;
    let modalFooter = `<div class="${CLASS_NAMES.MODAL_FOOTER}"></div>`;
    let modal = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.MODAL} ${hasFooter ? CLASS_NAMES.STATE_HAS_FOOTER : ''}" id="${modalId}">
            <div class="${CLASS_NAMES.MODAL_HEADER}">
                <button type="button" class="${CLASS_NAMES.MODAL_CLOSE}">&times;</button>
                <h4 class="${CLASS_NAMES.MODAL_TITLE}"></h4>
            </div>
            <div class="${CLASS_NAMES.MODAL_BODY}"></div>
            ${hasFooter ? modalFooter : ''}
        </div>
    `);
    
    if (!disableOriginEvents) {
        // Close buttons
        modal.on('click', `.${CLASS_NAMES.MODAL_CLOSE}`, function (e) {
            e.preventDefault();
            
            closeModal.call(self, modal);
        });
    }
    
    return modal.appendTo(document.body);
};
