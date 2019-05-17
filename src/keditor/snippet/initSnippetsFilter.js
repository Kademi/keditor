import log from '../utils/log';
import renderSnippetFilter from "./renderSnippetFilter";

export default function (type) {
    log('initSnippetsFilter');
    
    let self = this;
    let options = self.options;
    let [categoriesOptions, snippetsWrapper] = renderSnippetFilter.call(this, type);
    
    snippetsWrapper.prepend(`
        <div class="keditor-ui keditor-snippets-filter-wrapper">
            <select class="keditor-ui keditor-snippets-filter">
                ${categoriesOptions}
            </select>
            <input type="text" class="keditor-ui keditor-snippets-search" value="" placeholder="Type to search..." />
        </div>
    `);
    
    let txtSearch = snippetsWrapper.find('.keditor-snippets-search');
    let cbbFilter = snippetsWrapper.find('.keditor-snippets-filter');
    
    let doFilter = function () {
        let selectedCategory = (cbbFilter.val() || '').toLowerCase();
        let searchText = (txtSearch.val() || '').toLowerCase();
        let snippets = snippetsWrapper.find('.keditor-snippets').children('.keditor-snippet');
        snippets.filter('.selected').removeClass('selected');
        
        if (selectedCategory || searchText) {
            log('Filtering snippets');
            
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
                
                snippet[error === 0 ? 'removeClass' : 'addClass']('not-matched');
            });
        } else {
            log('Show all snippets');
            snippets.removeClass('not-matched');
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
