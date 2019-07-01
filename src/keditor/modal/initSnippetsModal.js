import CLASS_NAMES from '../constants/classNames';
import generateId from '../utils/generateId';
import renderSnippets from '../snippet/renderSnippets';
import initSnippetsFilter from '../snippet/initSnippetsFilter';
import closeSnippetModal from './closeSnippetModal';
import initSnippetAction from './initSnippetAction';
import addSnippetToTarget from './addSnippetToTarget';
import initModal from './initModal';

export default function () {
    let self = this;
    let options = self.options;
    let modal = self.modal = initModal.call(self, generateId(), false, true);
    
    if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
        modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(`
            <div class="${CLASS_NAMES.SNIPPETS_WRAPPER}">
                <div class="${CLASS_NAMES.SNIPPETS}"></div>
            </div>
        `);
        
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
    } else {
        self.error('"snippetsUrl" must be not null!');
    }
};
