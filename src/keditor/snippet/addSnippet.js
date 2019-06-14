import renderSnippet from './renderSnippet';
import renderSnippetFilter from './renderSnippetFilter';
import SNIPPET_TYPE from '../constants/snippetType';
import CLASS_NAMES from '../constants/classNames';

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
            self.modal.find(`.${CLASS_NAMES.SNIPPETS_CONTAINER}`).append(snippetPreviewHtml);
        } else if (type.indexOf('component') !== -1) {
            self.modal.find(`.${CLASS_NAMES.SNIPPETS_COMPONENT}`).append(snippetPreviewHtml);
        }
    } else {
        self.modal.find(`.${CLASS_NAMES.SNIPPETS}`).append(snippetPreviewHtml)
    }
    self.modal.find(`.${CLASS_NAMES.MODAL_BODY}`).append(snippetContentHtml);
    
    let filterType;
    if (options.snippetsFilterEnabled) {
        if (options.explicitSnippetEnabled) {
            filterType = type === 'container' ? SNIPPET_TYPE.CONTAINER : SNIPPET_TYPE.COMPONENT;
        } else {
            filterType = SNIPPET_TYPE.ALL;
        }
    }
    
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(this, filterType);
    snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`).html(categoriesOptions).trigger('change');
};
