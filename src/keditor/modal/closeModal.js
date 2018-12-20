export default function () {
    let self = this;
    let modal = self.modal;
    
    self.modalTarget = null;
    self.modalAction = null;
    modal.find('.keditor-modal-title').html('');
    modal.find('.keditor-snippets-wrapper .selected').removeClass('selected');
    modal.removeClass('showed');
};
