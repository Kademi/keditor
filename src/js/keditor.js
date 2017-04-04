/**!
 * Configuration:
 * @option {Boolean} niceScrollEnabled Enable niceScroll or not
 * @option {String} btnMoveContainerText Text content for move button of container
 * @option {String} btnMoveComponentText Text content for move button of component
 * @option {String} btnSettingContainerText Text content for setting button of container
 * @option {String} btnSettingComponentText Text content for setting button of component
 * @option {String} btnDuplicateContainerText Text content for duplicate button of container
 * @option {String} btnDuplicateComponentText Text content for duplicate button of component
 * @option {String} btnDeleteContainerText Text content for delete button of container
 * @option {String} btnDeleteComponentText Text content for delete button of component
 * @option {String} tabContainersText Text for Containers tab
 * @option {String} tabContainersTitle Title for Containers tab
 * @option {String} tabComponentsText Text for Components tab
 * @option {String} tabComponentsTitle Title for Components tab
 * @option {Boolean} tabTooltipEnabled Bootstrap Tooltip is enabled for Component and Container tab or not
 * @option {Object} extraTabs Extra tabs besides Containers and Components tabs in sidebar
 * Example: {
 *     tabName: {
 *         text: 'My Extra Tab #1',
 *         title: 'My Extra Tab #1',
 *         content: 'Here is content of My Extra Tab #1'
 *     }
 * }
 * @option {String|Function} defaultComponentType Default component type of component. If type of component does not exist in KEditor.components, will be used 'defaultComponentType' as type of this component. If is function, argument is component - jQuery object of component
 * @option {String} snippetsUrl Url to snippets file
 * @option {String} snippetsListId Id of element which contains snippets. As default, value is "keditor-snippets-list" and KEditor will render snippets sidebar automatically. If you specific other id, only snippets will rendered and put into your element
 * @option {Boolean} snippetsTooltipEnabled Bootstrap tooltip is enable for snippet or not
 * @option {String} snippetsTooltipPosition Position of Bootstrap tooltip for snippet. Can be 'left', 'right', 'top' and 'bottom'
 * @option {Boolean} snippetsFilterEnabled Enable filtering snippets by categories and text searching or not
 * @option {String} snippetsCategoriesSeparator The separator character between each categories
 * @option {Boolean} iframeMode KEditor is created inside an iframe or not. KEditor is created inside an iframe or not. Keditor will add all elements which have 'data-type=keditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element
 * @option {Array<Object>} contentStyles Content styles for iframe mode
 * Example: [
 *     {
 *         href: '/path/to/style/file'
 *     }, {
 *         content: 'a { color: red; }'
 *     }
 * ]
 * @option {String} contentAreasSelector Selector of content areas. If is null or selector does not match any elements, will create default content area and wrap all content inside it.
 * @option {String} contentAreasWrapper The wrapper element for all contents inside iframe. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag
 * @option {Boolean} containerSettingEnabled Enable setting panel for container
 * @option {Function} containerSettingInitFunction Method will be called when initializing setting panel for container
 * @option {Function} containerSettingShowFunction Method will be called when setting panel for container is showed
 * @option {Function} containerSettingHideFunction Method will be called when setting panel for container is hidden
 * @option {Function} onReady Callback will be called after keditor instance is ready
 * @option {Function} onInitFrame Callback will be called after iframe and content areas wrapper inside it are created. Arguments: frame, frameHead, frameBody
 * @option {Function} onSidebarToggled Callback will be called after toggled sidebar. Arguments: isOpened
 * @option {Function} onInitContentArea Callback will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized. Arguments: contentArea
 * @option {Function} onContentChanged Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed. Arguments: event
 * @option {Function} onInitContainer Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type="container-content"). By default, all first level sections under container content will be initialized. Arguments: container
 * @option {Function} onBeforeContainerDeleted Callback will be called before container is deleted. Arguments: event, selectedContainer
 * @option {Function} onContainerDeleted Callback will be called after container and its components are already deleted. Arguments: event, selectedContainer
 * @option {Function} onContainerChanged Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated. Arguments: event, changedContainer
 * @option {Function} onContainerDuplicated Callback will be called when a container is duplicated. Arguments: event, originalContainer, newContainer
 * @option {Function} onContainerSelected Callback will be called when a container is selected. Arguments: event, selectedContainer
 * @option {Function} onContainerSnippetDropped Callback will be called when a container snippet is dropped into content area. Arguments: event, newContainer, droppedContainer
 * @option {Function} onComponentReady Callback will be called after component is initialized. This callback is available or not is depend on component type handler.
 * @option {Function} onInitComponent Callback will be called when initializing component. Arguments: component
 * @option {Function} onBeforeComponentDeleted Callback will be called before a component is deleted. Arguments: event, selectedComponent
 * @option {Function} onComponentDeleted Callback will be called after a component is deleted. Arguments: event, selectedComponent
 * @option {Function} onComponentChanged Callback will be called when content of a component is changed. Arguments: event, changedComponent
 * @option {Function} onComponentDuplicated Callback will be called when a component is duplicated. Arguments: event, originalComponent, newComponent
 * @option {Function} onComponentSelected Callback will be called when a component is selected. Arguments: event, selectedComponent
 * @option {Function} onComponentSnippetDropped Callback will be called after a component snippet is dropped into a container. Arguments: event, newComponent, droppedComponent
 * @option {Function} onBeforeDynamicContentLoad Callback will be called before loading dynamic content. Arguments: dynamicElement, component
 * @option {Function} onDynamicContentLoaded Callback will be called after dynamic content is loaded. Arguments: dynamicElement, response, status, xhr
 * @option {Function} onDynamicContentError Callback will be called if loading dynamic content is error, abort or timeout. Arguments: dynamicElement, response, status, xhr
 */
(function ($) {
    // Log function will print log message when "KEditor.debug" equals "true"
    var flog = function () {
        if (typeof (console) !== 'undefined' && KEditor.debug === true) {
            if (navigator.appName == 'Microsoft Internet Explorer') {
                // BM: Previous used JSON, but that crashed IE sometimes. So this is pretty crap, but at least safer
                if (arguments.length == 1) {
                    console.log('[KEditor]', arguments[0]);
                } else if (arguments.length == 2) {
                    console.log('[KEditor]', arguments[0], arguments[1]);
                } else if (arguments.length > 2) {
                    console.log('[KEditor]', arguments[0], arguments[1], arguments[2]);
                }
            } else {
                console.log(['KEditor'], arguments);
            }
        }
    };
    
    // Throw error message
    var error = function (msg) {
        throw new Error('[KEditor] ' + msg);
    };
    
    // Check dependencies
    if (!$.fn.draggable) {
        error('$.fn.draggable does not exist. Please import $.fn.draggable into your document for continue using KEditor.');
    }
    if (!$.fn.droppable) {
        error('$.fn.droppable does not exist. Please import $.fn.droppable into your document for continue using KEditor.');
    }
    if (!$.fn.sortable) {
        error('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
    }
    
    // KEditor class
    var KEditor = function (target, options) {
        this.options = $.extend({}, KEditor.DEFAULTS, options);
        this.init(target);
    };
    
    // Turn on/off debug mode
    KEditor.debug = true;
    
    // Version of KEditor
    KEditor.version = '@{version}';
    
    // Default configuration of KEditor
    KEditor.DEFAULTS = {
        niceScrollEnabled: true,
        btnMoveContainerText: '<i class="fa fa-sort"></i>',
        btnMoveComponentText: '<i class="fa fa-arrows"></i>',
        btnSettingContainerText: '<i class="fa fa-cog"></i>',
        btnSettingComponentText: '<i class="fa fa-cog"></i>',
        btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
        btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
        btnDeleteContainerText: '<i class="fa fa-times"></i>',
        btnDeleteComponentText: '<i class="fa fa-times"></i>',
        tabContainersText: 'Containers',
        tabContainersTitle: 'Containers',
        tabComponentsText: 'Components',
        tabComponentsTitle: 'Components',
        tabTooltipEnabled: true,
        extraTabs: null,
        defaultComponentType: 'blank',
        snippetsUrl: 'snippets/default/snippets.html',
        snippetsListId: 'keditor-snippets-list',
        snippetsTooltipEnabled: true,
        snippetsTooltipPosition: 'left',
        snippetsFilterEnabled: true,
        snippetsCategoriesSeparator: ';',
        iframeMode: false,
        contentStyles: [],
        contentAreasSelector: null,
        contentAreasWrapper: '<div class="keditor-ui keditor-content-areas-wrapper"></div>',
        containerSettingEnabled: false,
        containerSettingInitFunction: null,
        containerSettingShowFunction: null,
        containerSettingHideFunction: null,
        onReady: function () {
        },
        onInitFrame: function (frame, frameHead, frameBody) {
        },
        onSidebarToggled: function (isOpened) {
        },
        onInitContentArea: function (contentArea) {
        },
        onContentChanged: function (event) {
        },
        onInitContainer: function (container) {
        },
        onBeforeContainerDeleted: function (event, selectedContainer) {
        },
        onContainerDeleted: function (event, selectedContainer) {
        },
        onContainerChanged: function (event, changedContainer) {
        },
        onContainerDuplicated: function (event, originalContainer, newContainer) {
        },
        onContainerSelected: function (event, selectedContainer) {
        },
        onContainerSnippetDropped: function (event, newContainer, droppedContainer) {
        },
        onComponentReady: function (component) {
        },
        onInitComponent: function (component) {
        },
        onBeforeComponentDeleted: function (event, selectedComponent) {
        },
        onComponentDeleted: function (event, selectedComponent) {
        },
        onComponentChanged: function (event, changedComponent) {
        },
        onComponentDuplicated: function (event, originalComponent, newComponent) {
        },
        onComponentSelected: function (event, selectedComponent) {
        },
        onComponentSnippetDropped: function (event, newComponent, droppedComponent) {
        },
        onBeforeDynamicContentLoad: function (dynamicElement, component) {
        },
        onDynamicContentLoaded: function (dynamicElement, response, status, xhr) {
        },
        onDynamicContentError: function (dynamicElement, response, status, xhr) {
        }
    };
    
    // Component types
    KEditor.components = {
        blank: {
            settingEnabled: false
        }
    };
    
    // Export log methods;
    KEditor.log = flog;
    KEditor.error = error;
    
    KEditor.prototype = {
        init: function (target) {
            var self = this;
            var options = self.options;
            
            if (options.iframeMode) {
                target = self.initFrame(target);
            } else {
                self.body = $(document.body);
                
                if (target.is('textarea')) {
                    flog('Target is textarea', target);
                    
                    var htmlContent = target.val();
                    var keditorWrapper = $('<div />');
                    var keditorWrapperId = self.generateId('wrapper');
                    
                    target.after(keditorWrapper);
                    keditorWrapper.attr({
                        id: keditorWrapperId,
                        class: 'keditor-ui keditor-wrapper'
                    });
                    
                    keditorWrapper.html(htmlContent);
                    target.css('display', 'none');
                    target.attr('data-keditor-wrapper', '#' + keditorWrapperId);
                    
                    target = keditorWrapper;
                }
            }
            
            var body = self.body;
            var ajaxRequest;
            if (body.hasClass('initialized-snippets-list')) {
                flog('Snippets list is already initialized!');
            } else {
                ajaxRequest = self.initSidebar();
                body.addClass('initialized-snippets-list');
            }
            if (body.hasClass('initialized-click-event-handlers')) {
                flog('CLick event handlers is already initialized!');
            } else {
                self.initKEditorClicks();
                body.addClass('initialized-click-event-handlers');
            }
            
            self.initContentAreas(target);
            
            if (!ajaxRequest && typeof options.onReady === 'function') {
                options.onReady.call(self);
            }
        },
        
        generateId: function (type) {
            var timestamp = (new Date()).getTime();
            return 'keditor-' + type + '-' + timestamp;
        },
        
        initNiceScroll: function (target) {
            flog('initNiceScroll', target);
            
            if ($.fn.niceScroll && this.options.niceScrollEnabled) {
                flog('Initialize $.fn.niceScroll');
                target.niceScroll({
                    cursorcolor: '#999',
                    cursorwidth: 6,
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    cursorborder: '',
                    disablemutationobserver: true
                });
            } else {
                flog('$.fn.niceScroll does not exist. Use default sidebar.');
            }
        },
        
        initFrame: function (target) {
            flog('initFrame', target);
            
            var self = this;
            var options = self.options;
            var originalContent = target.is('textarea') ? target.val() : target.html();
            var iframe = $('<iframe />');
            var iframeId = self.generateId('frame');
            
            target.after(iframe);
            iframe.attr({
                'id': iframeId,
                'class': 'keditor-ui keditor-frame'
            });
            
            target.css('display', 'none');
            target.attr('data-keditor-frame', '#' + iframeId);
            
            var iframeDoc = iframe.contents();
            // Fix issue Firefox can't render content inside iframe
            // ======================================================
            iframeDoc.get(0).open();
            iframeDoc.get(0).close();
            // ======================================================
            var iframeHead = iframeDoc.find('head');
            var iframeBody = iframeDoc.find('body');
            
            flog('Adding styles to iframe...');
            var styles = '';
            $('[data-type="keditor-style"]').each(function () {
                var style = $(this);
                var href = style.attr('href') || style.attr('data-href') || '';
                
                if (href) {
                    styles += '<link rel="stylesheet" type="text/css" href="' + href + '" />\n';
                } else {
                    styles += '<style type="text/css">' + style.html() + '</style>\n';
                }
            });
            
            if (options.contentStyles && $.isArray(options.contentStyles)) {
                $.each(options.contentStyles, function (i, style) {
                    if (style.href) {
                        styles += '<link rel="stylesheet" type="text/css" href="' + style.href + '" />\n';
                    } else {
                        styles += '<style type="text/css">' + style.content + '</style>\n';
                    }
                });
            }
            
            flog('Styles: \n' + styles);
            
            iframeHead.append(styles);
            flog('All styles are added');
            
            flog('Adding original content to iframe...');
            var contentAreasWrapper;
            if (options.contentAreasWrapper) {
                contentAreasWrapper = $(options.contentAreasWrapper);
                contentAreasWrapper.html(originalContent);
                iframeBody.append(contentAreasWrapper);
            } else {
                iframeBody.html(originalContent);
            }
            
            // In frame, have to use default snippets container
            options.snippetsListId = KEditor.DEFAULTS.snippetsListId;
            
            self.body = iframeBody;
            
            if (typeof options.onInitFrame === 'function') {
                options.onInitFrame.call(iframe, iframe, iframeHead, iframeBody);
            }
            
            return contentAreasWrapper || iframeBody;
        },
        
        initSidebar: function () {
            flog('initSidebar');
            
            var self = this;
            var options = self.options;
            var body = self.body;
            body.addClass('opened-keditor-sidebar');
            
            if (options.snippetsListId === KEditor.DEFAULTS.snippetsListId) {
                flog('Render default KEditor snippet container');
                
                body.append(
                    '<div id="keditor-sidebar" class="keditor-ui">' +
                    '   <a id="keditor-sidebar-toggler" class="keditor-ui"><i class="fa fa-chevron-right"></i></a>' +
                    '   <div id="keditor-snippets-list" class="keditor-ui"></div>' +
                    '   <div id="keditor-snippets-content" class="keditor-ui" style="display: none"></div>' +
                    '   <div id="keditor-setting-panel" class="keditor-ui">' +
                    '       <div id="keditor-setting-header" class="keditor-ui">' +
                    '           <span id="keditor-setting-title" class="keditor-ui"></span>' +
                    '           <a href="#" id="keditor-setting-closer" class="keditor-ui"><i class="fa fa-arrow-right"></i></a>' +
                    '       </div>' +
                    '       <div id="keditor-setting-body" class="keditor-ui">' +
                    '           <div id="keditor-setting-forms" class="keditor-ui"></div>' +
                    '       </div>' +
                    '   </div>' +
                    '</div>'
                );
                self.initSidebarToggler();
            } else {
                flog('Render KEditor snippets content after custom snippets list with id="' + options.snippetsListId + '"');
                body.find('#' + options.snippetsListId).after('<div id="keditor-snippets-content" class="keditor-ui" style="display: none"></div>');
            }
            
            if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
                flog('Getting snippets form "' + options.snippetsUrl + '"...');
                
                return $.ajax({
                    type: 'get',
                    dataType: 'html',
                    url: options.snippetsUrl,
                    success: function (resp) {
                        flog('Success in getting snippets', resp);
                        
                        self.renderSnippets(resp);
                        self.initSnippets();
                        self.initTabs();
                        self.initTabsSwitcher();
                        self.initSettingPanel();
                        
                        if (options.snippetsFilterEnabled) {
                            self.initSnippetsFilter('Container');
                            self.initSnippetsFilter('Component');
                        }
                        
                        if (options.snippetsTooltipEnabled || options.tabTooltipEnabled) {
                            flog('Initialize Bootstrap tooltip plugin');
                            body.find('#' + options.snippetsListId).find('[data-toggle="tooltip"]').tooltip();
                        }
                        
                        if (typeof options.onReady === 'function') {
                            options.onReady.call(self);
                        }
                    },
                    error: function (jqXHR) {
                        flog('Error when getting snippets', jqXHR);
                    }
                });
            } else {
                error('"snippetsUrl" must be not null!');
            }
        },
        
        initSnippetsFilter: function (type) {
            flog('initSnippetsFilter', type);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            var lowerCaseType = type.toLowerCase();
            var categories = self['snippets' + type + 'Categories'];
            
            var filterHtml = '';
            filterHtml += '<div id="keditor-' + lowerCaseType + '-snippets-filter-wrapper" class="keditor-ui keditor-snippets-filter-wrapper">';
            filterHtml += '     <input type="text" id="keditor-' + lowerCaseType + '-snippets-search" class="keditor-ui keditor-snippets-search" value="" placeholder="Type to search..." />';
            filterHtml += '     <select id="keditor-' + lowerCaseType + '-snippets-filter" class="keditor-ui keditor-snippets-filter">';
            filterHtml += '         <option value="" selected="selected">All</option>';
            
            for (var i = 0; i < categories.length; i++) {
                filterHtml += '     <option value="' + categories[i] + '">' + categories[i] + '</option>';
            }
            
            filterHtml += '     </select>';
            filterHtml += '</div>';
            
            var tab = body.find('#keditor-' + lowerCaseType + '-snippets-tab');
            var snippets = tab.find('.keditor-snippet');
            tab.prepend(filterHtml);
            
            snippets.each(function () {
                var snippet = $(this);
                var categories = snippet.attr('data-categories') || '';
                var filterCategories = categories.toLowerCase();
                categories = categories.split(options.snippetsCategoriesSeparator);
                filterCategories = filterCategories.split(options.snippetsCategoriesSeparator);
                
                snippet.data('categories', categories);
                snippet.data('categoriesFilter', filterCategories);
            });
            
            var txtSearch = tab.find('.keditor-snippets-search');
            var cbbFilter = tab.find('.keditor-snippets-filter');
            
            var doFilter = function () {
                var selectedCategory = (cbbFilter.val() || '').toLowerCase();
                var searchText = (txtSearch.val() || '').toLowerCase();
                
                flog('Do filter with selected category is "' + selectedCategory + '" and search text is "' + searchText + '"');
                
                if (selectedCategory || searchText) {
                    flog('Filtering snippets');
                    
                    snippets.each(function () {
                        var snippet = $(this);
                        var dataCategories = snippet.data('categoriesFilter');
                        var dataCategoriesString = dataCategories.join(';');
                        var error = 0;
                        
                        if (selectedCategory) {
                            if ($.inArray(selectedCategory, dataCategories) === -1) {
                                error++;
                            }
                        }
                        
                        if (searchText) {
                            var title = snippet.attr('title').toLowerCase();
                            if (title.indexOf(searchText) === -1 && dataCategoriesString.indexOf(searchText) === -1) {
                                error++;
                            }
                        }
                        
                        snippet[error === 0 ? 'removeClass' : 'addClass']('not-matched');
                    });
                } else {
                    flog('Show all snippets');
                    snippets.removeClass('not-matched');
                }
            };
            
            cbbFilter.on('change', function () {
                doFilter();
            });
            
            var timer;
            txtSearch.on('keydown', function () {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    doFilter();
                }, 200);
            });
        },
        
        toggleSidebar: function (showSidebar) {
            flog('toggleSidebar', showSidebar);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            var icon = body.find('#keditor-sidebar-toggler i');
            
            if (showSidebar) {
                body.addClass('opened-keditor-sidebar');
                icon.attr('class', 'fa fa-chevron-right')
            } else {
                body.removeClass('opened-keditor-sidebar');
                icon.attr('class', 'fa fa-chevron-left')
            }
            
            if (typeof options.onSidebarToggled === 'function') {
                options.onSidebarToggled.call(null, showSidebar);
            }
        },
        
        initSidebarToggler: function () {
            flog('initSidebarToggler');
            
            var self = this;
            var body = self.body;
            
            body.find('#keditor-sidebar-toggler').on('click', function (e) {
                e.preventDefault();
                
                self.toggleSidebar(!body.hasClass('opened-keditor-sidebar'));
            });
        },
        
        renderSnippets: function (resp) {
            flog('renderSnippets', resp);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            var snippetsContainerHtml = '';
            var snippetsComponentHtml = '';
            var snippetsContentHtml = '';
            
            self.snippetsContainerCategories = [];
            self.snippetsComponentCategories = [];
            
            $('<div />').html(resp).find('> div').each(function (i) {
                var snippet = $(this);
                var content = snippet.html().trim();
                var previewUrl = snippet.attr('data-preview');
                var type = snippet.attr('data-type');
                var title = snippet.attr('data-keditor-title');
                var snippetHtml = '';
                var categories = snippet.attr('data-categories') || '';
                
                flog('Snippet #' + i + ' type=' + type + ' categories=' + categories, previewUrl, content);
                
                snippetHtml += '<section class="keditor-ui keditor-snippet" data-snippet="#keditor-snippet-' + i + '" data-type="' + type + '" ' + (options.snippetsTooltipEnabled ? 'data-toggle="tooltip" data-placement="' + options.snippetsTooltipPosition + '"' : '') + ' title="' + title + '" data-categories="' + categories + '">';
                snippetHtml += '   <img class="keditor-ui keditor-snippet-preview" src="' + previewUrl + '" />';
                snippetHtml += '</section>';
                
                categories = categories.split(options.snippetsCategoriesSeparator);
                
                if (type === 'container') {
                    snippetsContainerHtml += snippetHtml;
                    self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
                } else if (type.indexOf('component') !== -1) {
                    snippetsComponentHtml += snippetHtml;
                    self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
                }
                
                var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-categories'], true);
                snippetsContentHtml += '<script id="keditor-snippet-' + i + '" type="text/html" ' + dataAttributes.join(' ') + '>' + content + '</script>';
            });
            
            self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
            self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
            
            body.find('#' + options.snippetsListId).html(
                '<ul id="keditor-snippets-type-switcher" class="keditor-ui keditor-tabs">' +
                '    <li class="keditor-ui keditor-tab active"><a class="keditor-ui" href="#keditor-container-snippets-tab"' + (options.tabTooltipEnabled ? 'data-toggle="tooltip" data-placement="bottom"' : '') + ' title="' + options.tabContainersTitle + '">' + options.tabContainersText + '</a></li>' +
                '    <li class="keditor-ui keditor-tab"><a class="keditor-ui" href="#keditor-component-snippets-tab"' + (options.tabTooltipEnabled ? 'data-toggle="tooltip" data-placement="bottom"' : '') + ' title="' + options.tabComponentsTitle + '">' + options.tabComponentsText + '</a></li>' +
                '</ul>' +
                '<div id="keditor-snippets-container" class="keditor-ui keditor-tabs-content">' +
                '   <div class="keditor-ui keditor-tab-content active" id="keditor-container-snippets-tab"><div class="keditor-ui keditor-tab-content-inner">' + snippetsContainerHtml + '</div></div>' +
                '   <div class="keditor-ui keditor-tab-content" id="keditor-component-snippets-tab"><div class="keditor-ui keditor-tab-content-inner">' + snippetsComponentHtml + '</div></div>' +
                '</div>'
            ).addClass('loaded-snippets');
            body.find('#keditor-snippets-content').html(snippetsContentHtml);
        },
        
        beautifyCategories: function (categories) {
            flog('beautifyCategories', categories);
            
            var newArray = [];
            for (var i = 0; i < categories.length; i++) {
                var category = categories[i] || '';
                
                if (category !== '' && $.inArray(category, newArray) === -1) {
                    newArray.push(category);
                }
            }
            
            return newArray.sort();
        },
        
        initSnippets: function () {
            flog('initSnippets');
            
            var self = this;
            var options = self.options;
            var body = self.body;
            var snippetsList = body.find('#' + options.snippetsListId);
            
            flog('Initialize $.fn.draggable for container snippets list');
            snippetsList.find('.keditor-snippet[data-type=container]').draggable({
                helper: 'clone',
                revert: 'invalid',
                connectToSortable: body.find('.keditor-content-area'),
                start: function () {
                    $('[contenteditable]').blur();
                    $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                },
                stop: function () {
                    snippetsList.find('.keditor-snippet[data-type^=component]').draggable('option', 'connectToSortable', body.find('.keditor-container-content'));
                }
            });
            
            snippetsList.find('.keditor-snippet[data-type^=component]').draggable({
                helper: 'clone',
                revert: 'invalid',
                connectToSortable: body.find('.keditor-container-content'),
                start: function () {
                    body.find('[contenteditable]').blur();
                    body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    body.addClass('highlighted-container-content');
                },
                stop: function () {
                    body.removeClass('highlighted-container-content');
                }
            });
        },
        
        initTabs: function () {
            flog('initTabs');
            
            var self = this;
            var body = self.body;
            var options = self.options;
            var switcherWrapper = body.find('#keditor-snippets-type-switcher');
            var tabPaneWrapper = body.find('#keditor-snippets-container');
            
            if (options.extraTabs && $.isPlainObject(options.extraTabs)) {
                flog('Add extra tabs', options.extraTabs);
                
                for (var tabName in options.extraTabs) {
                    var tabData = options.extraTabs[tabName];
                    
                    switcherWrapper.append('<li class="keditor-ui keditor-tab"><a class="keditor-ui" href="#keditor-extra-tab-' + tabName + '"' + (options.tabTooltipEnabled ? 'data-toggle="tooltip" data-placement="bottom" title="' + tabData.title + '"' : '') + '>' + tabData.text + '</a></li>');
                    tabPaneWrapper.append('<div class="keditor-ui keditor-tab-content" id="keditor-extra-tab-' + tabName + '"><div class="keditor-tab-content-inner">' + tabData.content + '</div></div>');
                }
            }
            
            self.initNiceScroll(tabPaneWrapper.find('.keditor-tab-content-inner'));
        },
        
        initTabsSwitcher: function () {
            flog('initTabsSwitcher');
            
            var self = this;
            var body = self.body;
            var switcherLis = body.find('#keditor-snippets-type-switcher li');
            var tabContent = body.find('#keditor-snippets-container .keditor-tab-content');
            
            switcherLis.find('a').on('click', function (e) {
                e.preventDefault();
                
                var a = $(this);
                var li = a.parent();
                var href = a.attr('href');
                
                if (!li.hasClass('active')) {
                    var activatedLi = switcherLis.filter('.active');
                    var activatedPane = tabContent.filter('.active');
                    var targetDiv = body.find(href);
                    
                    activatedLi.removeClass('active');
                    activatedPane.removeClass('active');
                    
                    li.addClass('active');
                    targetDiv.addClass('active');
                    
                    if ($.fn.niceScroll && self.options.niceScrollEnabled) {
                        activatedPane.getNiceScroll().hide();
                        
                        var targetNiceScroll = targetDiv.getNiceScroll();
                        targetNiceScroll.show();
                        targetNiceScroll.resize();
                    }
                }
            });
        },
        
        initSettingPanel: function () {
            flog('initSettingPanel');
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            body.find('#keditor-setting-closer').on('click', function (e) {
                e.preventDefault();
                
                self.hideSettingPanel();
            });
            
            var settingForms = body.find('#keditor-setting-forms');
            self.initNiceScroll(settingForms);
            
            if (options.containerSettingEnabled === true) {
                if (typeof options.containerSettingInitFunction === 'function') {
                    
                    var form = $('<div id="keditor-container-setting" class="keditor-ui keditor-setting-form clearfix"></div>');
                    settingForms.append(form);
                    
                    flog('Initialize container setting panel');
                    options.containerSettingInitFunction.call(self, form, self);
                } else {
                    error('"containerSettingInitFunction" is not function!');
                }
            }
        },
        
        setSettingContainer: function (container) {
            flog('setSettingContainer', container);
            
            var self = this;
            var body = self.body;
            
            if (container) {
                var idSettingContainer = container.attr('id');
                body.attr('data-setting-container', idSettingContainer);
            } else {
                body.removeAttr('data-setting-container');
            }
        },
        
        getSettingContainer: function () {
            flog('getSettingContainer');
            
            var self = this;
            var body = self.body;
            var idSettingContainer = body.attr('data-setting-container');
            
            return body.find('#' + idSettingContainer);
        },
        
        setSettingComponent: function (component) {
            flog('setSettingComponent', component);
            
            var self = this;
            var body = self.body;
            
            if (component) {
                var idSettingComponent = component.attr('id');
                body.attr('data-setting-component', idSettingComponent);
            } else {
                body.removeAttr('data-setting-component');
            }
        },
        
        getSettingComponent: function () {
            flog('getSettingComponent');
            
            var self = this;
            var body = self.body;
            var idSettingComponent = body.attr('data-setting-component');
            
            return body.find('#' + idSettingComponent);
        },
        
        showSettingPanel: function (target) {
            flog('showSettingPanel', target);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            var isComponent = target.is('.keditor-component');
            
            var activeForm = body.find('#keditor-setting-forms').children('.active');
            activeForm.removeClass('active');
            
            if (isComponent) {
                self.setSettingComponent(target);
                self.setSettingContainer(null);
                
                var componentType = self.getComponentType(target);
                var componentData = KEditor.components[componentType];
                body.find('#keditor-setting-title').html(componentData.settingTitle);
                
                var settingForms = body.find('#keditor-setting-forms');
                var settingForm = body.find('#keditor-setting-' + componentType);
                
                if (settingForm.length === 0) {
                    var componentData = KEditor.components[componentType];
                    if (typeof componentData.initSettingForm === 'function') {
                        settingForm = $('<div id="keditor-setting-' + componentType + '" data-type="' + componentType + '" class="keditor-ui keditor-setting-form clearfix active"></div>');
                        var loadingText = $('<span />').html('Loading...');
                        settingForms.append(settingForm);
                        settingForm.append(loadingText);
                        
                        flog('Initializing setting form for component type "' + componentType + '"');
                        
                        var initFunction = componentData.initSettingForm.call(componentData, settingForm, self);
                        $.when(initFunction).done(function () {
                            flog('Initialized setting form for component type "' + componentType + '"');
                            
                            setTimeout(function () {
                                loadingText.remove();
                                
                                if (typeof componentData.showSettingForm === 'function') {
                                    flog('Show setting form of component type "' + componentType + '"');
                                    componentData.showSettingForm.call(componentData, settingForm, target, self);
                                } else {
                                    flog('"showSettingForm" function of component type "' + componentType + '" does not exist');
                                }
                            }, 100);
                        });
                    } else {
                        flog('"initSettingForm" function of component type "' + componentType + '" does not exist');
                    }
                } else {
                    if (typeof componentData.showSettingForm === 'function') {
                        flog('Show setting form of component type "' + componentType + '"');
                        componentData.showSettingForm.call(componentData, settingForm, target, self);
                    } else {
                        flog('"showSettingForm" function of component type "' + componentType + '" does not exist');
                    }
                    settingForm.addClass('active');
                }
            } else {
                self.setSettingContainer(target);
                self.setSettingComponent(null);
                
                body.find('#keditor-setting-title').html("Container Settings");
                
                var settingForm = body.find('#keditor-container-setting');
                if (typeof options.containerSettingShowFunction === 'function') {
                    flog('Show setting form of container');
                    options.containerSettingShowFunction.call(self, settingForm, target, self);
                } else {
                    flog('"containerSettingShowFunction" does not exist');
                }
                settingForm.addClass('active');
            }
            
            self.toggleSidebar(true);
            body.addClass('opened-keditor-setting');
        },
        
        hideSettingPanel: function () {
            flog('hideSettingPanel');
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            body.removeClass('opened-keditor-setting');
            
            var activeForm = body.find('#keditor-setting-forms').children('.active');
            if (activeForm.length > 0) {
                if (activeForm.is('#keditor-container-setting')) {
                    if (typeof options.containerSettingHideFunction === 'function') {
                        flog('Hide setting form of container');
                        options.containerSettingHideFunction.call(self, activeForm, self);
                    } else {
                        flog('"containerSettingHideFunction" does not exist');
                    }
                } else {
                    var activeType = activeForm.attr('data-type');
                    var componentData = KEditor.components[activeType];
                    
                    if (typeof componentData.hideSettingForm === 'function') {
                        flog('Hide setting form of component type "' + activeType + '"');
                        componentData.hideSettingForm.call(componentData, activeForm, self);
                    } else {
                        flog('"hideSettingForm" function of component type "' + activeType + '" does not exist');
                    }
                }
                
                activeForm.removeClass('active');
            }
            
            body.removeClass('opened-keditor-setting');
            self.setSettingComponent(null);
            self.setSettingContainer(null);
        },
        
        getContentAreas: function (target) {
            flog('getContentAreas', target);
            
            var self = this;
            var options = self.options;
            var contentAreas;
            if (options.contentAreasSelector) {
                contentAreas = target.find(options.contentAreasSelector);
            }
            
            if (!contentAreas || contentAreas.length === 0) {
                flog('Do not find any content area. Creating default content area...');
                contentAreas = $('<div />');
                
                var originalContent = target.html();
                contentAreas.html(originalContent);
                target.empty().append(contentAreas);
            }
            
            return contentAreas;
        },
        
        initContentAreas: function (target) {
            flog('initContentAreas', target);
            
            var self = this;
            var contentAreas = self.getContentAreas(target);
            
            contentAreas.each(function () {
                var contentArea = $(this);
                if (!contentArea.attr('id')) {
                    contentArea.attr('id', self.generateId('content-area'));
                }
                
                self.initContentArea(contentArea);
                contentArea.data('keditor', self);
            });
        },
        
        initContentArea: function (contentArea) {
            flog('initContentArea', contentArea);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            contentArea.addClass('keditor-content-area');
            
            flog('Initialize $.fn.droppable for content area');
            contentArea.droppable({
                accept: '.keditor-snippet[data-type=container]',
                tolerance: 'pointer',
                greedy: true
            });
            
            flog('Initialize $.fn.sortable for content area');
            contentArea.sortable({
                handle: '.btn-container-reposition',
                items: '> section',
                connectWith: '.keditor-content-area',
                axis: 'y',
                tolerance: 'pointer',
                sort: function () {
                    $(this).removeClass('ui-state-default');
                },
                receive: function (event, ui) {
                    flog('On received snippet', event, ui);
                    
                    var helper = ui.helper;
                    var item = ui.item;
                    
                    if (item.is('.keditor-snippet')) {
                        var snippetContent = body.find(item.attr('data-snippet')).html();
                        flog('Snippet content', snippetContent);
                        
                        var container = $(
                            '<section class="keditor-ui keditor-container">' +
                            '   <section class="keditor-ui keditor-container-inner">' + snippetContent + '</section>' +
                            '</section>'
                        );
                        helper.replaceWith(container);
                        
                        if (!container.hasClass('showed-keditor-toolbar')) {
                            $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                            container.addClass('showed-keditor-toolbar');
                        }
                        
                        if (typeof options.onContainerSnippetDropped === 'function') {
                            options.onContainerSnippetDropped.call(contentArea, event, container, ui.item);
                        }
                        
                        self.initContainer(contentArea, container);
                    }
                    
                    self.hideSettingPanel();
                    
                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, event);
                    }
                }
            });
            
            flog('Initialize existing containers in content area');
            contentArea.children('section').each(function () {
                self.convertToContainer(contentArea, $(this));
            });
            
            if (typeof options.onInitContentArea === 'function') {
                var contentData = options.onInitContentArea.call(contentArea, contentArea);
                if (contentData && contentData.length > 0) {
                    $.each(contentData, function () {
                        self.convertToContainer(contentArea, $(this));
                    });
                }
            }
        },
        
        convertToContainer: function (contentArea, target) {
            flog('convertToContainer', contentArea, target);
            
            var self = this;
            var isSection = target.is('section');
            var container;
            
            if (isSection) {
                target.addClass('keditor-container');
                target.wrapInner('<section class="keditor-ui keditor-container-inner"></section>');
                container = target;
            } else {
                target.wrap('<section class="keditor-ui keditor-container"><section class="keditor-ui keditor-container-inner"></section></section>');
                container = target.parent().parent();
            }
            
            self.initContainer(contentArea, container);
        },
        
        initContainer: function (contentArea, container) {
            flog('initContainer', contentArea, container);
            
            var self = this;
            var options = self.options;
            
            if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
                container.addClass('keditor-initializing-container');
                
                var settingBtn = '';
                if (options.containerSettingEnabled === true) {
                    settingBtn = '<a href="javascript:void(0);" class="keditor-ui btn-container-setting">' + options.btnSettingContainerText + '</a>';
                }
                
                flog('Render KEditor toolbar for container', container);
                container.append(
                    '<div class="keditor-toolbar keditor-toolbar-container">' +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-container-reposition">' + options.btnMoveContainerText + '</a>' + settingBtn +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-container-duplicate">' + options.btnDuplicateContainerText + '</a>' +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-container-delete">' + options.btnDeleteContainerText + '</a>' +
                    '</div>'
                );
                
                container.attr('id', self.generateId('container'));
                
                var containerContents = container.find('[data-type="container-content"]');
                flog('Initialize ' + containerContents.length + ' container content(s)');
                containerContents.each(function () {
                    var containerContent = $(this);
                    
                    self.initContainerContent(contentArea, container, containerContent);
                });
                
                if (typeof options.onInitContainer === 'function') {
                    options.onInitContainer.call(contentArea, container);
                }
                
                container.addClass('keditor-initialized-container');
                container.removeClass('keditor-initializing-container');
            } else {
                if (container.hasClass('keditor-initialized-container')) {
                    flog('Container is already initialized!');
                } else {
                    flog('Container is initializing...');
                }
            }
        },
        
        initContainerContent: function (contentArea, container, containerContent) {
            flog('initContainerContent', contentArea, container, containerContent);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            containerContent.addClass('keditor-container-content');
            containerContent.attr('id', self.generateId('container-content'));
            
            flog('Initialize $.fn.droppable for container content');
            containerContent.droppable({
                accept: '.keditor-snippet[data-type=component]',
                tolerance: 'pointer',
                greedy: true
            });
            
            flog('Initialize $.fn.sortable for container content');
            containerContent.sortable({
                handle: '.btn-component-reposition',
                items: '> section',
                connectWith: '.keditor-container-content',
                tolerance: 'pointer',
                sort: function () {
                    $(this).removeClass('ui-state-default');
                },
                receive: function (event, ui) {
                    flog('On received snippet', event, ui);
                    
                    var helper = ui.helper;
                    var item = ui.item;
                    var container;
                    
                    if (item.is('.keditor-snippet')) {
                        var snippetContentElement = body.find(item.attr('data-snippet'));
                        var snippetContent = snippetContentElement.html();
                        var componentType = item.attr('data-type');
                        flog('Snippet content', snippetContent);
                        
                        var dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                        var component = $(
                            '<section class="keditor-ui keditor-component" data-type="' + componentType + '" ' + dataAttributes.join(' ') + '>' +
                            '   <section class="keditor-ui keditor-component-content">' + snippetContent + '</section>' +
                            '</section>'
                        );
                        helper.replaceWith(component);
                        
                        container = component.closest('.keditor-container');
                        
                        if (typeof options.onComponentSnippetDropped === 'function') {
                            options.onComponentSnippetDropped.call(contentArea, event, component, ui.item);
                        }
                        
                        self.initComponent(contentArea, container, component);
                    } else {
                        container = item.closest('.keditor-container');
                    }
                    
                    if (!container.hasClass('showed-keditor-toolbar')) {
                        $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        container.addClass('showed-keditor-toolbar');
                    }
                    
                    if (typeof options.onContainerChanged === 'function') {
                        options.onContainerChanged.call(contentArea, event, container);
                    }
                    
                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, event);
                    }
                }
            });
            
            flog('Initialize existing components inside container content');
            containerContent.children().each(function () {
                var content = $(this);
                
                self.convertToComponent(contentArea, container, content, true);
            });
        },
        
        convertToComponent: function (contentArea, container, target, isExisting) {
            flog('convertToComponent', contentArea, container, target, isExisting);
            
            var self = this;
            var isSection = target.is('section');
            var component;
            
            if (isSection) {
                target.addClass('keditor-component');
                target.wrapInner('<section class="keditor-ui keditor-component-content"></section>');
                component = target;
            } else {
                target.wrap('<section class="keditor-ui keditor-component"><section class="keditor-ui keditor-component-content"></section></section>');
                component = target.parent().parent();
            }
            
            if (isExisting) {
                component.addClass('existing-component');
            }
            
            self.initComponent(contentArea, container, component);
        },
        
        getDataAttributes: function (target, ignoreAttributes, isArray) {
            flog('getDataAttributes', target, ignoreAttributes, isArray);
            
            var dataAttributes = isArray ? [] : {};
            if (!ignoreAttributes) {
                ignoreAttributes = [];
            }
            
            $.each(target.get(0).attributes, function (i, attr) {
                if (attr.name.indexOf('data-') === 0 && $.inArray(attr.name, ignoreAttributes) === -1) {
                    if (isArray) {
                        dataAttributes.push(attr.name + '="' + attr.value + '"');
                    } else {
                        dataAttributes[attr.name] = attr.value;
                    }
                }
            });
            
            return dataAttributes;
        },
        
        getComponentType: function (component) {
            flog('getComponentType', component);
            
            var self = this;
            var options = self.options;
            
            var dataType = component.attr('data-type');
            var componentType = dataType ? dataType.replace('component-', '') : '';
            if (componentType && (componentType in KEditor.components)) {
                return componentType;
            } else {
                if (componentType) {
                    flog('Component type "' + componentType + '" does not exist');
                } else {
                    flog('This component does not contain data-type attribute');
                }
                
                if (typeof options.defaultComponentType === 'string') {
                    componentType = options.defaultComponentType;
                } else if (typeof options.defaultComponentType === 'function') {
                    componentType = options.defaultComponentType.call(component, component);
                }
                
                if (!componentType) {
                    error('Component type is undefined!');
                }
                
                flog('Fallback to defaultComponentType: ' + componentType);
                return componentType;
            }
        },
        
        initComponent: function (contentArea, container, component) {
            flog('initComponent', contentArea, container, component);
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
                component.addClass('keditor-initializing-component');
                component.attr('id', self.generateId('component'));
                
                var componentContent = component.children('.keditor-component-content');
                componentContent.attr('id', self.generateId('component-content'));
                
                var componentType = self.getComponentType(component);
                flog('Component type: ' + componentType);
                
                var componentData = KEditor.components[componentType];
                var isSettingEnabled = componentData.settingEnabled;
                var settingBtn = '';
                if (isSettingEnabled) {
                    settingBtn = '<a href="javascript:void(0);" class="keditor-ui btn-component-setting">' + options.btnSettingComponentText + '</a>';
                }
                
                flog('Render KEditor toolbar for component', component);
                component.append(
                    '<div class="keditor-toolbar keditor-toolbar-component">' +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-component-reposition">' + options.btnMoveComponentText + '</a>' + settingBtn +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-component-duplicate">' + options.btnDuplicateComponentText + '</a>' +
                    '   <a href="javascript:void(0);" class="keditor-ui btn-component-delete">' + options.btnDeleteComponentText + '</a>' +
                    '</div>'
                );
                
                var dynamicContentRequests = [];
                component.find('[data-dynamic-href]').each(function () {
                    var dynamicElement = $(this);
                    
                    dynamicContentRequests.push(self.initDynamicContent(dynamicElement));
                });
                
                $.when.apply(null, dynamicContentRequests).then(function () {
                    if (typeof componentData.init === 'function') {
                        componentData.init.call(componentData, contentArea, container, component, self);
                    } else {
                        body.removeClass('highlighted-container-content');
                        flog('"init" function of component type "' + componentType + '" does not exist');
                    }
                    
                    if (typeof options.onInitComponent === 'function') {
                        options.onInitComponent.call(contentArea, component);
                    }
                    
                    component.addClass('keditor-initialized-component');
                    component.removeClass('keditor-initializing-component');
                });
            } else {
                if (component.hasClass('keditor-initialized-component')) {
                    flog('Component is already initialized!');
                } else {
                    flog('Component is initializing...');
                }
            }
        },
        
        getClickedElement: function (event, selector) {
            var target = $(event.target);
            var closest = target.closest(selector);
            
            if (target.is(selector)) {
                return target;
            } else if (closest.length > 0) {
                return closest;
            } else {
                return null;
            }
        },
        
        initKEditorClicks: function () {
            flog('initKEditorClicks');
            
            var self = this;
            var options = self.options;
            var body = self.body;
            
            body.on('click', function (e) {
                var sidebar = self.getClickedElement(e, '#keditor-sidebar');
                
                var container = self.getClickedElement(e, '.keditor-container');
                if (container) {
                    flog('Click on .keditor-container', container);
                    
                    if (!container.hasClass('showed-keditor-toolbar')) {
                        body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        container.addClass('showed-keditor-toolbar');
                        
                        var contentArea = container.parent();
                        if (typeof options.onContainerSelected === 'function') {
                            options.onContainerSelected.call(contentArea, e, container);
                        }
                    }
                } else {
                    if (!sidebar) {
                        body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    }
                }
                
                var component = self.getClickedElement(e, '.keditor-component');
                if (component) {
                    flog('Click on .keditor-component', component);
                    
                    if (!component.hasClass('showed-keditor-toolbar')) {
                        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        component.addClass('showed-keditor-toolbar');
                        
                        var contentArea = component.parent();
                        if (typeof options.onComponentSelected === 'function') {
                            options.onComponentSelected.call(contentArea, e, component);
                        }
                    }
                } else {
                    if (!sidebar) {
                        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    }
                }
            });
            
            
            body.on('click', '.btn-container-setting', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-container-setting', btn);
                
                var container = btn.closest('.keditor-container');
                if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
                    if (!container.is(self.getSettingContainer())) {
                        self.showSettingPanel(container);
                    } else {
                        self.hideSettingPanel();
                    }
                } else {
                    self.showSettingPanel(container);
                }
            });
            
            body.on('click', '.btn-container-duplicate', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-container-duplicate', btn);
                
                var container = btn.closest('.keditor-container');
                var contentArea = container.parent();
                var newContainer = $(self.getContainerContent(container));
                
                container.after(newContainer);
                self.convertToContainer(contentArea, newContainer);
                
                var snippetsList = body.find('#' + options.snippetsListId);
                var componentSnippets = snippetsList.find('.keditor-snippet[data-type^=component]');
                var currentLinkedContainerContents = componentSnippets.draggable('option', 'connectToSortable');
                componentSnippets.draggable('option', 'connectToSortable', currentLinkedContainerContents.add(newContainer.find('.keditor-container-content')));
                
                flog('Container is duplicated');
                
                if (typeof options.onContainerDuplicated === 'function') {
                    options.onContainerDuplicated.call(contentArea, container, newContainer);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(contentArea, e);
                }
            });
            
            body.on('click', '.btn-container-delete', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-container-delete', btn);
                
                if (confirm('Are you sure that you want to delete this container? This action can not be undo!')) {
                    var container = btn.closest('.keditor-container');
                    var components = container.find('.keditor-component');
                    var contentArea = container.parent();
                    
                    if (typeof options.onBeforeContainerDeleted === 'function') {
                        options.onBeforeContainerDeleted.call(contentArea, e, container);
                    }
                    
                    var settingComponent = self.getSettingComponent();
                    if (settingComponent) {
                        var settingComponentParent = settingComponent.closest('.keditor-container');
                        if (settingComponentParent.is(container)) {
                            flog('Deleting container is container of setting container. Close setting panel for this setting component', settingComponent);
                            self.hideSettingPanel();
                        }
                    } else if (self.getSettingContainer().is(container)) {
                        flog('Deleting container is setting container. Close setting panel for this container', container);
                        self.hideSettingPanel();
                    }
                    
                    if (components.length > 0) {
                        components.each(function () {
                            self.deleteComponent($(this));
                        });
                    }
                    
                    container.remove();
                    
                    if (typeof options.onContainerDeleted === 'function') {
                        options.onContainerDeleted.call(contentArea, e, container);
                    }
                    
                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, e);
                    }
                }
            });
            
            body.on('click', '.btn-component-setting', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-component-setting', btn);
                
                var component = btn.closest('.keditor-component');
                if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
                    if (!component.is(self.getSettingComponent())) {
                        self.showSettingPanel(component);
                    } else {
                        self.hideSettingPanel();
                    }
                } else {
                    self.showSettingPanel(component);
                }
            });
            
            body.on('click', '.btn-component-duplicate', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-component-duplicate', btn);
                
                var component = btn.closest('.keditor-component');
                var container = component.closest('.keditor-container');
                var contentArea = container.parent();
                var newComponent = $(self.getComponentContent(component));
                
                component.after(newComponent);
                self.convertToComponent(contentArea, container, newComponent);
                
                flog('Component is duplicated');
                
                if (typeof options.onComponentDuplicated === 'function') {
                    options.onComponentDuplicated.call(contentArea, component, newComponent);
                }
                
                if (typeof options.onContainerChanged === 'function') {
                    options.onContainerChanged.call(contentArea, e, container);
                }
                
                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(contentArea, e);
                }
            });
            
            body.on('click', '.btn-component-delete', function (e) {
                e.preventDefault();
                
                var btn = $(this);
                flog('Click on .btn-component-delete', btn);
                
                if (confirm('Are you sure that you want to delete this component? This action can not be undo!')) {
                    var component = btn.closest('.keditor-component');
                    var contentArea = component.closest('.keditor-content-area');
                    
                    if (typeof options.onBeforeComponentDeleted === 'function') {
                        options.onBeforeComponentDeleted.call(contentArea, e, component);
                    }
                    
                    if (self.getSettingComponent().is(component)) {
                        self.hideSettingPanel();
                    }
                    
                    self.deleteComponent(component);
                    
                    if (typeof options.onComponentDeleted === 'function') {
                        options.onComponentDeleted.call(contentArea, e, component);
                    }
                    
                    if (typeof options.onContainerChanged === 'function') {
                        options.onContainerChanged.call(contentArea, e, component);
                    }
                    
                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, e);
                    }
                }
            });
        },
        
        deleteComponent: function (component) {
            flog('deleteComponent', component);
            
            var self = this;
            
            var componentType = self.getComponentType(component);
            var componentData = KEditor.components[componentType];
            if (typeof componentData.destroy === 'function') {
                componentData.destroy.call(componentData, component, self);
            } else {
                flog('"destroy" function of component type "' + componentType + '" does not exist');
            }
            
            component.remove();
        },
        
        initDynamicContent: function (dynamicElement) {
            flog('initDynamicContent', dynamicElement);
            
            var self = this;
            var options = self.options;
            var component = dynamicElement.closest('.keditor-component');
            var contentArea = dynamicElement.closest('.keditor-content-area');
            
            if (!dynamicElement.attr('id')) {
                dynamicElement.attr('id', self.generateId('dynamic-element'));
            }
            
            if (typeof options.onBeforeDynamicContentLoad === 'function') {
                options.onBeforeDynamicContentLoad.call(contentArea, dynamicElement, component);
            }
            
            var dynamicHref = dynamicElement.attr('data-dynamic-href');
            var data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
            data = $.param(data);
            flog('Dynamic href: ' + dynamicHref, 'Data: ' + data);
            
            return $.ajax({
                url: dynamicHref,
                data: data,
                type: 'GET',
                dataType: 'HTML',
                success: function (response, status, xhr) {
                    flog('Dynamic content is loaded', dynamicElement, response, status, xhr);
                    dynamicElement.html(response);
                    
                    if (typeof options.onDynamicContentLoaded === 'function') {
                        options.onDynamicContentLoaded.call(contentArea, dynamicElement, response, status, xhr);
                    }
                },
                error: function (response, status, xhr) {
                    flog('Error when loading dynamic content', dynamicElement, response, status, xhr);
                    
                    if (typeof options.onDynamicContentError === 'function') {
                        options.onDynamicContentError.call(contentArea, dynamicElement, response, status, xhr);
                    }
                }
            });
        },
        
        getComponentContent: function (component) {
            flog('getComponentContent', component);
            
            var self = this;
            var componentType = self.getComponentType(component);
            var componentData = KEditor.components[componentType];
            var dataAttributes = self.getDataAttributes(component, null, true);
            var content;
            
            if (typeof componentData.getContent === 'function') {
                content = componentData.getContent.call(componentData, component, self);
            } else {
                flog('"getContent" function of component type "' + componentType + '" does not exist. Using default getContent method');
                var componentContent = component.children('.keditor-component-content');
                content = componentContent.html();
            }
            
            var tempDiv = $('<div />').html(content);
            tempDiv.find('[data-dynamic-href]').each(function () {
                $(this).html('');
            });
            content = tempDiv.html();
            
            return '<section ' + dataAttributes.join(' ') + '>' + content + '</section>';
        },
        
        getContainerContent: function (container) {
            flog('getContainerContent', container);
            
            var self = this;
            var options = self.options;
            var containerInner = container.children('.keditor-container-inner').clone();
            
            containerInner.find('[data-type=container-content]').each(function () {
                var containerContent = $(this);
                containerContent.removeClass('keditor-container-content ui-droppable ui-sortable').removeAttr('id');
                
                containerContent.children('.keditor-component').each(function () {
                    var component = $(this);
                    
                    component.replaceWith(self.getComponentContent(component));
                });
            });
            
            return '<section>' + containerInner.html() + '</section>';
        }
        
    };
    
    // Plugin methods
    var methods = {
        __init: function (options) {
            return $(this).each(function () {
                var target = $(this);
                
                if (target.data('keditor')) {
                    flog('KEditor is already initialized!');
                } else {
                    flog('Initialze KEditor', target, options);
                    var keditor = new KEditor(target, options);
                    target.data('keditor', keditor);
                }
            });
        },
        
        getContent: function (inArray) {
            var target = $(this);
            var keditor = target.data('keditor');
            var options = keditor.options;
            var result = [];
            target = options.iframeMode ? keditor.body : target;
            
            target.find('.keditor-content-area').each(function () {
                var html = '';
                $(this).children('.keditor-container').each(function () {
                    var container = $(this);
                    
                    html += keditor.getContainerContent(container, options);
                });
                
                result.push(html);
            });
            
            return inArray ? result : result.join('\n');
        },
        
        getOptions: function () {
            var keditor = $(this).data('keditor');
            
            return keditor.options;
        }
    };
    
    // Export KEditor
    $.keditor = KEditor;
    
    // KEditor plugins
    $.fn.keditor = function (method) {
        if (methods[method] && method !== 'init') {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.__init.apply(this, arguments);
        } else {
            error('Method ' + method + ' does not exist on $.fn.keditor');
        }
    };
    
})(jQuery);
