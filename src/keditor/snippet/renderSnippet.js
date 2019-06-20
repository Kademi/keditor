import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';
import generateId from '../utils/generateId';

export default function (type, title, previewUrl, categories, content, extraData) {
    let self = this;
    let options = self.options;
    let snippetId = generateId();
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
                <span class="${CLASS_NAMES.SNIPPET_ADD} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_PRIMARY}" title="${title}">${ICONS.ADD} Add</span>
            </span>
        </section>
    `;
    let snippetContentHtml = `<script id="${snippetId}" type="text/html" ${extraData.join(' ')}>${content}</script>`;
    
    categories = categories.split(options.snippetsCategoriesSeparator);
    
    if (type === 'container') {
        self.categoryContainer = self.categoryContainer.concat(categories);
    } else if (type.indexOf('component') !== -1) {
        self.categoryComponent = self.categoryComponent.concat(categories);
    }
    
    return [
        snippetPreviewHtml,
        snippetContentHtml
    ];
};
