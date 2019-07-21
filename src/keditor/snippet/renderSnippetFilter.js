import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let options = self.options;
    let modal = self.modal;
    
    let categoriesOptions = `<option value="" selected="selected">${options.locale.snippetCategoryAll}</option>`;
    $.each(self.categoryComponent, function (i, category) {
        categoriesOptions += `<option value="${category}" class="${CSS_CLASS.SNIPPETS_FILTER_COMPONENT}">${category}</option>`;
    });
    $.each(self.categoryContainer, function (i, category) {
        let isDuplicateWithComponent = $.inArray(category, self.categoryComponent) !== -1;
        categoriesOptions += `<option value="${category}" class="${CSS_CLASS.SNIPPETS_FILTER_CONTAINER} ${isDuplicateWithComponent ? CSS_CLASS.STATE_DUPLICATED : ''}">${category}</option>`;
    });
    
    let filterWrapper = modal.find(`.${CSS_CLASS.SNIPPETS_FILTER_WRAPPER}`);
    if (filterWrapper.length === 0) {
        filterWrapper = $(`<div class="${CSS_CLASS.UI} ${CSS_CLASS.SNIPPETS_FILTER_WRAPPER}"></div>`);
        modal.find(`.${CSS_CLASS.MODAL_TITLE}`).replaceWith(filterWrapper);
    }
    
    return [
        categoriesOptions,
        filterWrapper
    ];
};
