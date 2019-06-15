import CLASS_NAMES from '../constants/classNames';

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let options = self.options;
    let snippetId = self.generateId();
    let snippetPreviewHtml = `
        <section
            class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPET} ${type === 'container' ? CLASS_NAMES.SNIPPET_CONTAINER : CLASS_NAMES.SNIPPET_COMPONENT}"
            data-snippet="#${snippetId}"
            data-type="${type}"
            data-keditor-title="${title}"
            data-keditor-categories="${categories}"
        >
            <span class="${CLASS_NAMES.SNIPPET_INNER}">
                <span class="${CLASS_NAMES.SNIPPET_PREVIEW}" style="background-image: url('${previewUrl}')"></span>
                <span class="${CLASS_NAMES.SNIPPET_TITLE}" title="${title}">${title}</span>
            </span>
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
