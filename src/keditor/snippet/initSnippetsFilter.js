import SNIPPET_TYPE from '../constants/snippetType';
import log from '../utils/log';

export default function (type) {
    log('initSnippetsFilter');
    
    let self = this;
    let options = self.options;
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
    
    let categoriesOptions = '';
    $.each(categories, function (i, category) {
        categoriesOptions += `<option value="${category}">${category}</option>`;
    });
    
    let snippetsWrapper = modal.find(snippetsWrapperSelector);
    let snippets = snippetsWrapper.find('.keditor-snippets').children('.keditor-snippet');
    
    snippetsWrapper.prepend(`
                <div class="keditor-ui keditor-snippets-filter-wrapper">
                    <select class="keditor-ui keditor-snippets-filter">
                        <option value="" selected="selected">All</option>
                        ${categoriesOptions}
                    </select>
                    <input type="text" class="keditor-ui keditor-snippets-search" value="" placeholder="Type to search..." />
                </div>
            `);
    
    snippets.each(function () {
        let snippet = $(this);
        let categories = snippet.attr('data-keditor-categories') || '';
        let filterCategories = categories.toLowerCase();
        categories = categories.split(options.snippetsCategoriesSeparator);
        filterCategories = filterCategories.split(options.snippetsCategoriesSeparator);
        
        snippet.data('categories', categories);
        snippet.data('categoriesFilter', filterCategories);
    });
    
    let txtSearch = snippetsWrapper.find('.keditor-snippets-search');
    let cbbFilter = snippetsWrapper.find('.keditor-snippets-filter');
    
    let doFilter = function () {
        let selectedCategory = (cbbFilter.val() || '').toLowerCase();
        let searchText = (txtSearch.val() || '').toLowerCase();
        snippets.filter('.selected').removeClass('selected');
        
        if (selectedCategory || searchText) {
            log('Filtering snippets');
            
            snippets.each(function () {
                let snippet = $(this);
                let dataCategories = snippet.data('categoriesFilter');
                let dataCategoriesString = dataCategories.join(';');
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
