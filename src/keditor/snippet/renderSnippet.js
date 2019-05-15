export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let options = self.options;
    let snippetId = self.generateId('snippet');
    let snippetPreviewHtml = `
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
    let snippetContentHtml = `<script id="${snippetId}" type="text/html" ${extraData.join(' ')}>${content}</script>`;
    
    categories = categories.split(options.snippetsCategoriesSeparator);
    
    if (type === 'container') {
        self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
    } else if (type.indexOf('component') !== -1) {
        self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
    }
    
    return [
        snippetPreviewHtml,
        snippetContentHtml
    ];
};
