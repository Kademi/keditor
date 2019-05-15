import renderSnippet from "./renderSnippet";

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
};
