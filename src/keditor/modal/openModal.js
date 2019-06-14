import SNIPPET_TYPE from '../constants/snippetType';
import CLASS_NAMES from '../constants/classNames';

export default function (target, snippetType) {
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
        modal.find(`.${CLASS_NAMES.SNIPPETS_WRAPPER}`).css('display', 'none');
        modal.find(snippetType === SNIPPET_TYPE.COMPONENT ? `.${CLASS_NAMES.SNIPPETS_WRAPPER_COMPONENT}` : `.${CLASS_NAMES.SNIPPETS_WRAPPER_CONTAINER}`).css('display', 'block');
    } else {
        modal.find(`.${CLASS_NAMES.SNIPPETS_WRAPPER}`).css('display', 'block').find(`.${CLASS_NAMES.SNIPPET}[data-type=container]`).css('display', snippetType === SNIPPET_TYPE.COMPONENT ? 'none' : 'block');
        modalTitle = 'Add content';
    }
    
    modal.find(`.${CLASS_NAMES.MODAL_TITLE}`).html(modalTitle);
    self.modalTarget = target;
    self.modalSnippetType = snippetType;
    
    modal.css('display', 'block');
    $(document.body).addClass(CLASS_NAMES.STATE_MODAL_OPENED);
    setTimeout(() => {
        modal.addClass(CLASS_NAMES.STATE_SHOWED);
    }, 0);
};
