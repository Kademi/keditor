import SNIPPET_TYPE from '../constants/snippetType';
import log from '../utils/log';

export default function (target, snippetType) {
    log('openModal', target, snippetType);
    
    let self = this;
    let modal = self.modal;
    let options = self.options;
    let modalTitle = '';
    switch (snippetType) {
        case SNIPPET_TYPE.CONTAINER:
            modalTitle = 'Add container';
            break;
        
        case SNIPPET_TYPE.COMPONENT:
            modalTitle = 'Add component';
            break;
        
        default:
        // Do nothing
    }
    
    if (options.explicitSnippetEnabled) {
        modal.find('.keditor-snippets-wrapper').css('display', 'none');
        modal.find(snippetType === SNIPPET_TYPE.COMPONENT ? '.keditor-snippets-wrapper-component' : '.keditor-snippets-wrapper-container').css('display', 'block');
    } else {
        modal.find('.keditor-snippets-wrapper').css('display', 'block').find('.keditor-snippet[data-type=container]').css('display', snippetType === SNIPPET_TYPE.COMPONENT ? 'none' : 'block');
        modalTitle = 'Add content';
    }
    
    modal.find('.keditor-modal-title').html(modalTitle);
    self.modalTarget = target;
    self.modalSnippetType = snippetType;
    
    modal.css('display', 'block');
    $(document.body).addClass('opened-modal');
    setTimeout(() => {
        modal.addClass('showed');
    }, 0);
};
