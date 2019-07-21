import renderSnippetFilter from './renderSnippetFilter';
import CSS_CLASS from '../constants/cssClass';

export default function () {
    let self = this;
    let options = self.options;
    let [categoriesOptions, filterWrapper] = renderSnippetFilter.call(self);
    
    filterWrapper.html(`
        <span class="${CSS_CLASS.UI} ${CSS_CLASS.SNIPPETS_FILTER_LABEL}">${options.locale.snippetCategoryLabel}:</span>
        <select class="${CSS_CLASS.UI} ${CSS_CLASS.SNIPPETS_FILTER}">
            ${categoriesOptions}
        </select>
        <input type="text" class="${CSS_CLASS.UI} ${CSS_CLASS.SNIPPETS_SEARCH}" value="" placeholder="${options.locale.snippetCategorySearch}" />
    `);
    
    let txtSearch = filterWrapper.find(`.${CSS_CLASS.SNIPPETS_SEARCH}`);
    let cbbFilter = filterWrapper.find(`.${CSS_CLASS.SNIPPETS_FILTER}`);
    
    let doFilter = function () {
        let selectedCategory = (cbbFilter.val() || '').toLowerCase();
        let searchText = (txtSearch.val() || '').toLowerCase();
        let snippets = self.modal.find(`.${CSS_CLASS.SNIPPET}`);
        snippets.filter(`.${CSS_CLASS.STATE_SELECTED}`).removeClass(CSS_CLASS.STATE_SELECTED);
        
        if (selectedCategory || searchText) {
            snippets.each(function () {
                let snippet = $(this);
                let dataCategoriesString = snippet.attr('data-keditor-categories').toLowerCase();
                let dataCategories = dataCategoriesString.split(options.snippetsCategoriesSeparator);
                let error = 0;
                
                if (selectedCategory) {
                    if ($.inArray(selectedCategory, dataCategories) === -1) {
                        error++;
                    }
                }
                
                if (searchText) {
                    let title = snippet.attr('data-keditor-title').toLowerCase();
                    if (title.indexOf(searchText) === -1 && dataCategoriesString.indexOf(searchText) === -1) {
                        error++;
                    }
                }
                
                snippet[error === 0 ? 'removeClass' : 'addClass'](CSS_CLASS.STATE_NOT_MATCHED);
            });
        } else {
            snippets.removeClass(CSS_CLASS.STATE_NOT_MATCHED);
        }
    };
    
    cbbFilter.on('change', function () {
        doFilter();
    });
    
    let timer;
    txtSearch.on('keydown', function () {
        clearTimeout(timer);
        timer = setTimeout(doFilter, 200);
    });
};
