import log from '../utils/log';

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
    
    $(resp).filter('div').each(function (i) {
        let snippet = $(this);
        let snippetId = self.generateId('snippet');
        let content = snippet.html().trim();
        let previewUrl = snippet.attr('data-preview');
        let type = snippet.attr('data-type');
        let title = snippet.attr('data-keditor-title');
        let categories = snippet.attr('data-keditor-categories') || '';
        
        let snippetHtml = `
                    <section
                        class="keditor-ui keditor-snippet"
                        data-snippet="#${snippetId}"
                        data-type="${type}"
                        title="${title}"
                        data-keditor-categories="${categories}"
                    >
                        <span><span style="background-image: url('${previewUrl}')"></span></span>
                    </section>
                `;
        
        categories = categories.split(options.snippetsCategoriesSeparator);
        
        if (type === 'container') {
            snippetsContainerHtml += snippetHtml;
            self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
        } else if (type.indexOf('component') !== -1) {
            snippetsComponentHtml += snippetHtml;
            self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
        }
        
        let dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);
        snippetsContentHtml += `<script id="${snippetId}" type="text/html" ${dataAttributes.join(' ')}>${content}</script>`;
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
