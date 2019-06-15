import renderSnippet from './renderSnippet';
import CLASS_NAMES from '../constants/classNames';

export default function (resp) {
    let self = this;
    let snippetsContentHtml = '';
    let snippetsHtml = '';
    
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
    
        snippetsHtml += snippetPreviewHtml;
        snippetsContentHtml += snippetContentHtml;
    });
    
    self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
    self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
    
    self.modal.find(`.${CLASS_NAMES.SNIPPETS}`).html(snippetsHtml);
    self.modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(snippetsContentHtml);
};
