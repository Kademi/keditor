import renderSnippet from './renderSnippet';
import renderSnippetFilter from './renderSnippetFilter';
import CLASS_NAMES from '../constants/classNames';
import beautifyCategories from '../utils/beautifyCategories';

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let [
        snippetPreviewHtml,
        snippetContentHtml
    ] = renderSnippet.call(self, type, title, previewUrl, categories, content, extraData);
    
    self.categoryContainer = beautifyCategories(self.categoryContainer);
    self.categoryComponent = beautifyCategories(self.categoryComponent);
    
    self.modal.find(`.${CLASS_NAMES.SNIPPETS}`).append(snippetPreviewHtml);
    self.modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(snippetContentHtml);
    
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(self);
    snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`).html(categoriesOptions).trigger('change');
};
