import renderSnippet from './renderSnippet';
import renderSnippetFilter from './renderSnippetFilter';
import CLASS_NAMES from '../constants/classNames';

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let [
        snippetPreviewHtml,
        snippetContentHtml
    ] = renderSnippet.call(self, type, title, previewUrl, categories, content, extraData);
    
    self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
    self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
    
    self.modal.find(`.${CLASS_NAMES.SNIPPETS}`).append(snippetPreviewHtml);
    self.modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(snippetContentHtml);
    
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(this);
    snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`).html(categoriesOptions).trigger('change');
};
