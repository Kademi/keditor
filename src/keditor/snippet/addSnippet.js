import renderSnippet from "./renderSnippet";
import renderSnippetFilter from "./renderSnippetFilter";
import SNIPPET_TYPE from "../constants/snippetType";

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let options = self.options;
    let [
        snippetPreviewHtml,
        snippetContentHtml
    ] = renderSnippet.call(self, type, title, previewUrl, categories, content, extraData);
    
    self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
    self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
    self.snippetsCategories = self.beautifyCategories([...self.snippetsContainerCategories, ...self.snippetsComponentCategories]);
    
    if (options.explicitSnippetEnabled) {
        if (type === 'container') {
            self.modal.find('.keditor-snippets-container').append(snippetPreviewHtml);
        } else if (type.indexOf('component') !== -1) {
            self.modal.find('.keditor-snippets-component').append(snippetPreviewHtml);
        }
    } else {
        self.modal.find('.keditor-snippets').append(snippetPreviewHtml)
    }
    self.modal.find('.keditor-modal-body').append(snippetContentHtml);
    
    let filterType;
    if (options.snippetsFilterEnabled) {
        if (options.explicitSnippetEnabled) {
            filterType = type === 'container' ? SNIPPET_TYPE.CONTAINER : SNIPPET_TYPE.COMPONENT;
        } else {
            filterType = SNIPPET_TYPE.ALL;
        }
    }
    
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(this, filterType);
    snippetsWrapper.find('.keditor-snippets-filter').html(categoriesOptions).trigger('change');
};
