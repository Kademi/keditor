import SNIPPET_TYPE from "../constants/snippetType";

export default function (type) {
    let self = this;
    let modal = self.modal;
    let categories;
    let snippetsWrapperSelector;
    
    switch (type) {
        case SNIPPET_TYPE.ALL:
            categories = self.snippetsCategories;
            snippetsWrapperSelector = '.keditor-snippets-wrapper';
            break;
        
        case SNIPPET_TYPE.CONTAINER:
            categories = self.snippetsContainerCategories;
            snippetsWrapperSelector = '.keditor-snippets-wrapper-container';
            break;
        
        case SNIPPET_TYPE.COMPONENT:
            categories = self.snippetsComponentCategories;
            snippetsWrapperSelector = '.keditor-snippets-wrapper-component';
            break;
        
        default:
        // Do nothing
    }
    
    let categoriesOptions = '<option value="" selected="selected">All</option>';
    $.each(categories, function (i, category) {
        categoriesOptions += `<option value="${category}">${category}</option>`;
    });
    
    return [
        categoriesOptions,
        modal.find(snippetsWrapperSelector)
    ];
};
