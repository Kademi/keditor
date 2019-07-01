import renderSnippetFilter from './renderSnippetFilter';
import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let [categoriesOptions, filterWrapper] = renderSnippetFilter.call(self);
    
    filterWrapper.html(`
        <span class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_FILTER_LABEL}">Category:</span>
        <select class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_FILTER}">
            ${categoriesOptions}
        </select>
        <input type="text" class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_SEARCH}" value="" placeholder="Type to search..." />
    `);
    
    let txtSearch = filterWrapper.find(`.${CLASS_NAMES.SNIPPETS_SEARCH}`);
    let cbbFilter = filterWrapper.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`);
    
    let doFilter = function () {
        let selectedCategory = (cbbFilter.val() || '').toLowerCase();
        let searchText = (txtSearch.val() || '').toLowerCase();
        let snippets = self.modal.find(`.${CLASS_NAMES.SNIPPET}`);
        snippets.filter(`.${CLASS_NAMES.STATE_SELECTED}`).removeClass(CLASS_NAMES.STATE_SELECTED);
        
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
                
                snippet[error === 0 ? 'removeClass' : 'addClass'](CLASS_NAMES.STATE_NOT_MATCHED);
            });
        } else {
            snippets.removeClass(CLASS_NAMES.STATE_NOT_MATCHED);
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
