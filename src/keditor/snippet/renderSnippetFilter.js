import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let modal = self.modal;
    
    let categoriesOptions = `<option value="" selected="selected">All</option>`;
    $.each(self.categoryComponent, function (i, category) {
        categoriesOptions += `<option value="${category}" class="${CLASS_NAMES.SNIPPETS_FILTER_COMPONENT}">${category}</option>`;
    });
    $.each(self.categoryContainer, function (i, category) {
        let isDuplicateWithComponent = $.inArray(category, self.categoryComponent) !== -1;
        categoriesOptions += `<option value="${category}" class="${CLASS_NAMES.SNIPPETS_FILTER_CONTAINER} ${isDuplicateWithComponent ? CLASS_NAMES.STATE_DUPLICATED : ''}">${category}</option>`;
    });
    
    let filterWrapper = modal.find(`.${CLASS_NAMES.SNIPPETS_FILTER_WRAPPER}`);
    if (filterWrapper.length === 0) {
        filterWrapper = $(`<div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_FILTER_WRAPPER}"></div>`);
        modal.find(`.${CLASS_NAMES.MODAL_TITLE}`).replaceWith(filterWrapper);
    }
    
    return [
        categoriesOptions,
        filterWrapper
    ];
};
