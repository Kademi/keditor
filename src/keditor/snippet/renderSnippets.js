import log from '../utils/log';
import renderSnippet from './renderSnippet';

export default function (resp) {
    log('renderSnippets');
    
    let self = this;
    let options = self.options;
    
    let snippetsContainerHtml = '';
    let snippetsComponentHtml = '';
    let snippetsContentHtml = '';
    
    self.snippetsCategories = [];
    self.snippetsContainerCategories = [];
    self.snippetsComponentCategories = [];
    
    $(resp).filter('div').each(function () {
        let snippet = $(this);
        let content = snippet.html().trim();
        let previewUrl = snippet.attr('data-preview');
        let type = snippet.attr('data-type');
        let title = snippet.attr('data-keditor-title');
        let categories = snippet.attr('data-keditor-categories') || '';
        let dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);
        let [
            snippetPreviewHtml,
            snippetContentHtml
        ] = renderSnippet.call(self, type, title, previewUrl, categories, content, dataAttributes);
        
        if (type === 'container') {
            snippetsContainerHtml += snippetPreviewHtml;
        } else if (type.indexOf('component') !== -1) {
            snippetsComponentHtml += snippetPreviewHtml;
        }
        
        snippetsContentHtml += snippetContentHtml;
    });
    
    self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
    self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
    self.snippetsCategories = self.beautifyCategories([...self.snippetsContainerCategories, ...self.snippetsComponentCategories]);
    
    if (options.explicitSnippetEnabled) {
        self.modal.find('.keditor-snippets-container').html(snippetsContainerHtml);
        self.modal.find('.keditor-snippets-component').html(snippetsComponentHtml);
    } else {
        self.modal.find('.keditor-snippets').html(snippetsContainerHtml + snippetsComponentHtml)
    }
    self.modal.find('.keditor-modal-body').append(snippetsContentHtml);
};
