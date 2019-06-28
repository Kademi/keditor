import CLASS_NAMES from '../constants/classNames';
import generateId from '../utils/generateId';
import renderSnippets from '../snippet/renderSnippets';
import initSnippetsFilter from '../snippet/initSnippetsFilter';
import closeSnippetModal from './closeSnippetModal';
import initSnippetAction from './initSnippetAction';
import addSnippetToTarget from './addSnippetToTarget';

export default function () {
    let self = this;
    let options = self.options;
    let modalId = generateId();
    
    let modal = self.modal = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.MODAL}" id="${modalId}">
            <div class="${CLASS_NAMES.MODAL_HEADER}">
                <button type="button" class="${CLASS_NAMES.MODAL_CLOSE}">&times;</button>
            </div>
            <div class="${CLASS_NAMES.MODAL_BODY}">
                <div class="${CLASS_NAMES.SNIPPETS_WRAPPER}">
                    <div class="${CLASS_NAMES.SNIPPETS}"></div>
                </div>
            </div>
        </div>
    `);
    
    if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
        $.ajax({
            type: 'get',
            dataType: 'html',
            url: options.snippetsUrl,
            success: function (resp) {
                if (typeof options.onSnippetsLoaded === 'function') {
                    resp = options.onSnippetsLoaded.call(self, resp) || resp;
                }
                
                renderSnippets.call(self, resp);
                initSnippetsFilter.call(self);
            },
            error: function (jqXHR) {
                if (typeof options.onSnippetsError === 'function') {
                    options.onSnippetsError.call(self, jqXHR);
                }
            }
        });
        
        // Snippet events
        initSnippetAction.call(self);
        
        // Close buttons
        modal.find(`.${CLASS_NAMES.MODAL_CLOSE}`).on('click', function (e) {
            e.preventDefault();
            
            closeSnippetModal.call(self);
        });
    
        // Add buttons
        modal.on('click', `.${CLASS_NAMES.SNIPPET_ADD}`, function (e) {
            e.preventDefault();
            
            let selectedSnippet = $(this).closest(`.${CLASS_NAMES.SNIPPET}`);
            
            addSnippetToTarget.call(self, e, selectedSnippet, self.modalTarget, self.modalTargetAction);
            closeSnippetModal.call(self);
        });
        
        let cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
        modal.on(cssTransitionEnd, () => {
            if (!modal.hasClass(CLASS_NAMES.STATE_SHOWED)) {
                modal.css('display', 'none');
                $(document.body).removeClass(CLASS_NAMES.STATE_MODAL_OPENED);
            }
        });
        
        modal.appendTo(document.body);
    } else {
        self.error('"snippetsUrl" must be not null!');
    }
};
