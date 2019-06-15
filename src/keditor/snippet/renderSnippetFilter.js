import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let modal = self.modal;
    
    let categoriesOptions = `<option value="" selected="selected">All</option>`;
    $.each(self.snippetsComponentCategories, function (i, category) {
        categoriesOptions += `<option value="${category}" class="${CLASS_NAMES.SNIPPETS_FILTER_COMPONENT}">${category}</option>`;
    });
    $.each(self.snippetsContainerCategories, function (i, category) {
        let isDuplicateWithComponent = $.inArray(category, self.snippetsComponentCategories) !== -1;
        categoriesOptions += `<option value="${category}" class="${CLASS_NAMES.SNIPPETS_FILTER_CONTAINER} ${isDuplicateWithComponent ? CLASS_NAMES.STATE_DUPLICATED : ''}">${category}</option>`;
    });
    
    return [
        categoriesOptions,
        modal.find(`.${CLASS_NAMES.MODAL_HEADER}`)
    ];
};
