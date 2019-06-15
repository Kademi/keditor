import SNIPPET_TYPE from '../constants/snippetType';
import CLASS_NAMES from '../constants/classNames';

export default function (type) {
    let self = this;
    let modal = self.modal;
    let categories;
    let snippetsWrapperSelector;
    
    switch (type) {
        case SNIPPET_TYPE.ALL:
            categories = self.snippetsCategories;
            snippetsWrapperSelector = `.${CLASS_NAMES.SNIPPETS_WRAPPER}`;
            break;
        
        case SNIPPET_TYPE.CONTAINER:
            categories = self.snippetsContainerCategories;
            snippetsWrapperSelector = `.${CLASS_NAMES.SNIPPETS_WRAPPER_CONTAINER}`;
            break;
        
        case SNIPPET_TYPE.COMPONENT:
            categories = self.snippetsComponentCategories;
            snippetsWrapperSelector = `.${CLASS_NAMES.SNIPPETS_WRAPPER_COMPONENT}`;
            break;
        
        default:
        // Do nothing
    }
    
    let categoriesOptions = `<option value="" selected="selected">All</option>`;
    $.each(categories, function (i, category) {
        categoriesOptions += `<option value="${category}">${category}</option>`;
    });
    
    return [
        categoriesOptions,
        modal.find(snippetsWrapperSelector)
    ];
};
