import renderSnippet from './renderSnippet';
import CLASS_NAMES from '../constants/classNames';

export default function (resp) {
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
        self.modal.find(`.${CLASS_NAMES.SNIPPETS_CONTAINER}`).html(snippetsContainerHtml);
        self.modal.find(`.${CLASS_NAMES.SNIPPETS_COMPONENT}`).html(snippetsComponentHtml);
    } else {
        self.modal.find(`.${CLASS_NAMES.SNIPPETS}`).html(snippetsContainerHtml + snippetsComponentHtml)
    }
    self.modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(snippetsContentHtml);
};
