import renderSnippetFilter from './renderSnippetFilter';
import CLASS_NAMES from '../constants/classNames';

export default function (type) {
    let self = this;
    let options = self.options;
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(this, type);
    
    snippetsWrapper.prepend(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_FILTER_WRAPPER}">
            <select class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_FILTER}">
                ${categoriesOptions}
            </select>
            <input type="text" class="${CLASS_NAMES.UI} ${CLASS_NAMES.SNIPPETS_SEARCH}" value="" placeholder="Type to search..." />
        </div>
    `);
    
    let txtSearch = snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS_SEARCH}`);
    let cbbFilter = snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS_FILTER}`);
    
    let doFilter = function () {
        let selectedCategory = (cbbFilter.val() || '').toLowerCase();
        let searchText = (txtSearch.val() || '').toLowerCase();
        let snippets = snippetsWrapper.find(`.${CLASS_NAMES.SNIPPETS}`).children(`.${CLASS_NAMES.SNIPPET}`);
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
                    let title = snippet.attr('title').toLowerCase();
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
