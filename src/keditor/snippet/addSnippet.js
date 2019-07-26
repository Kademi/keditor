import renderSnippet from './renderSnippet';
import renderSnippetFilter from './renderSnippetFilter';
import CSS_CLASS from '../constants/cssClass';
import beautifyCategories from './beautifyCategories';

export default function (type, title, previewUrl, categories, content, extraAttrs) {
    let self = this;
    let [
        snippetPreviewHtml,
        snippetContentHtml
    ] = renderSnippet.call(self, type, title, previewUrl, categories, content, extraAttrs);
    
    self.categoryContainer = beautifyCategories(self.categoryContainer);
    self.categoryComponent = beautifyCategories(self.categoryComponent);
    
    self.modal.find(`.${CSS_CLASS.SNIPPETS}`).append(snippetPreviewHtml);
    self.modal.find(`.${CSS_CLASS.MODAL_BODY}`).append(snippetContentHtml);
    
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(self);
    snippetsWrapper.find(`.${CSS_CLASS.SNIPPETS_FILTER}`).html(categoriesOptions).trigger('change');
};
