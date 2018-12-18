(function ($) {
    // Log function will print log message
    var flog = function () {
        if (typeof (console) !== 'undefined' && KEditor.debug === true) {
            var args = Array.prototype.slice.apply(arguments);
            args.unshift('[KEditor]');

            console.log.apply(console, args);
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
        this.element = target;
        this.options = $.extend({}, KEditor.DEFAULTS, options);
        this.init(target);
    };

    // KEditor instances
    KEditor.instances = {};

    // Turn on/off debug mode
    KEditor.debug = true;

    // Version of KEditor
    KEditor.version = '@{version}';

    // Default configuration of KEditor
    KEditor.DEFAULTS = {
        niceScrollEnabled: true,
        nestedContainerEnabled: true,
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
        confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',
        confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',
        tabTooltipEnabled: true,
        extraTabs: null,
        defaultComponentType: 'blank',
        sidebarContainer: null,
        snippetsUrl: 'snippets/snippets.html',
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
        onContentChanged: function (event, contentArea) {
        },

        onBeforeInitContentArea: function (contentArea) {
        },
        onInitContentArea: function (contentArea) {
        },

        onBeforeInitContainer: function (container, contentArea) {
        },
        onInitContainer: function (container, contentArea) {
        },
        onBeforeContainerDeleted: function (event, selectedContainer, contentArea) {
        },
        onContainerDeleted: function (event, selectedContainer, contentArea) {
        },
        onContainerChanged: function (event, changedContainer, contentArea) {
        },
        onContainerDuplicated: function (event, originalContainer, newContainer, contentArea) {
        },
        onContainerSelected: function (event, selectedContainer, contentArea) {
        },
        onContainerSnippetDropped: function (event, newContainer, droppedSnippet, contentArea) {
        },

        onComponentReady: function (component) {
        },
        onBeforeInitComponent: function (component, contentArea) {
        },
        onInitComponent: function (component, contentArea) {
        },
        onBeforeComponentDeleted: function (event, selectedComponent, contentArea) {
        },
        onComponentDeleted: function (event, selectedComponent, contentArea) {
        },
        onComponentChanged: function (event, changedComponent, contentArea) {
        },
        onComponentDuplicated: function (event, originalComponent, newComponent, contentArea) {
        },
        onComponentSelected: function (event, selectedComponent, contentArea) {
        },
        onComponentSnippetDropped: function (event, newComponent, droppedSnippet, contentArea) {
        },

        onBeforeDynamicContentLoad: function (dynamicElement, component, contentArea) {
        },
        onDynamicContentLoaded: function (dynamicElement, response, status, xhr, contentArea) {
        },
        onDynamicContentError: function (dynamicElement, response, status, xhr, contentArea) {
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

    KEditor.prototype.init = function (target) {
        var self = this;
        var options = self.options;

        if (options.iframeMode) {
            target = self.initFrame(target);
        } else {
            self.window = window;
            self.body = $(document.body);

            if (target.is('textarea')) {
                flog('Target is textarea', target);

                var htmlContent = target.val();
                var keditorWrapper = $(options.contentAreasWrapper || '<div />');
                target.after(keditorWrapper);
                keditorWrapper.attr({
                    class: 'keditor-ui keditor-wrapper'
                });

                var keditorWrapperId = keditorWrapper.attr('id');
                if (!keditorWrapperId) {
                    keditorWrapperId = self.generateId('wrapper');
                    keditorWrapper.attr('id', keditorWrapperId);
                }

                keditorWrapper.html(htmlContent);
                target.addClass('keditor-hidden-element');
                target.attr('data-keditor-wrapper', '#' + keditorWrapperId);

                target = keditorWrapper;
            }
        }

        var body = self.body;
        var ajaxRequest;
        if (body.hasClass('initialized-snippets-list')) {
            flog('Snippets list is already initialized!');
            var snippetsList = body.find('#keditor-snippets-list');
            self.containerSnippets = snippetsList.find('.keditor-snippet[data-type=container]');
            self.componentSnippets = snippetsList.find('.keditor-snippet[data-type^=component]');
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
    };

    KEditor.prototype.generateId = function (type) {
        var timestamp = (new Date()).getTime();
        var random = Math.round(Math.random() * 9876543210);
        return 'keditor-' + type + '-' + timestamp + random;
    };

    KEditor.prototype.initNiceScroll = function (target) {
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
    };

    KEditor.prototype.initFrame = function (target) {
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

        target.addClass('keditor-hidden-element');
        target.attr('data-keditor-frame', '#' + iframeId);

        var iframeDoc = self.iframeDoc = iframe.contents();
        // Fix issue Firefox can't render content inside iframe
        // ======================================================
        iframeDoc.get(0).open();
        iframeDoc.get(0).close();
        // ======================================================
        self.window = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
        var iframeHead = self.iframeHead = iframeDoc.find('head');
        var iframeBody = self.iframeBody = iframeDoc.find('body');

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
                var idStr = '';
                if (style.id) {
                    idStr = ' id="' + style.id + '" '
                }

                if (style.href) {
                    styles += '<link rel="stylesheet" type="text/css" href="' + style.href + '"' + idStr + ' />\n';
                } else {
                    styles += '<style type="text/css"' + idStr + '>' + style.content + '</style>\n';
                }
            });
        }

        flog('Styles: \n' + styles);

        iframeHead.append(styles);
        flog('All styles are added');

        flog('Adding original content to iframe...');
        if (!options.contentAreasWrapper) {
            options.contentAreasWrapper = '<div class="keditor-ui keditor-content-areas-wrapper"></div>';
        }

        var contentAreasWrapper = self.contentAreasWrapper = $(options.contentAreasWrapper);
        contentAreasWrapper.html(originalContent);
        iframeBody.append(contentAreasWrapper);

        self.body = iframeBody;

        if (typeof options.onInitFrame === 'function') {
            options.onInitFrame.call(self, iframe, iframeHead, iframeBody);
        }

        return contentAreasWrapper;
    };

    KEditor.prototype.initSidebar = function () {
        flog('initSidebar');

        var self = this;
        var options = self.options;
        var body = self.body;
        body.addClass('opened-keditor-sidebar');
        var sidebarContainer = body;
        if (options.sidebarContainer) {
            sidebarContainer = body.find(options.sidebarContainer);
        }

        flog('Render Keditor sidebar');
        sidebarContainer.append(
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

        if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
            flog('Getting snippets form "' + options.snippetsUrl + '"...');

            return $.ajax({
                type: 'get',
                dataType: 'html',
                url: options.snippetsUrl,
                success: function (resp) {
                    flog('Success in getting snippets');

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
                        body.find('#keditor-snippets-list').find('[data-toggle="tooltip"]').tooltip({
                            trigger: 'hover'
                        });
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
    };

    KEditor.prototype.initSnippetsFilter = function (type) {
        flog('initSnippetsFilter for ' + type);

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
            var categories = snippet.attr('data-keditor-categories') || '';
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
    };

    KEditor.prototype.toggleSidebar = function (showSidebar) {
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
            options.onSidebarToggled.call(self, showSidebar);
        }
    };

    KEditor.prototype.initSidebarToggler = function () {
        flog('initSidebarToggler');

        var self = this;
        var body = self.body;

        body.find('#keditor-sidebar-toggler').on('click', function (e) {
            e.preventDefault();

            self.toggleSidebar(!body.hasClass('opened-keditor-sidebar'));
        });
    };

    KEditor.prototype.renderSnippets = function (resp) {
        flog('renderSnippets');

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
            var categories = snippet.attr('data-keditor-categories') || '';

            snippetHtml += '<section class="keditor-ui keditor-snippet" data-snippet="#keditor-snippet-' + i + '" data-type="' + type + '" ' + (options.snippetsTooltipEnabled ? 'data-toggle="tooltip" data-placement="' + options.snippetsTooltipPosition + '"' : '') + ' title="' + title + '" data-keditor-categories="' + categories + '">';
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

            var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);
            snippetsContentHtml += '<script id="keditor-snippet-' + i + '" type="text/html" ' + dataAttributes.join(' ') + '>' + content + '</script>';
        });

        self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
        self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);

        body.find('#keditor-snippets-list').html(
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
    };

    KEditor.prototype.beautifyCategories = function (categories) {
        var newArray = [];
        for (var i = 0; i < categories.length; i++) {
            var category = categories[i] || '';

            if (category !== '' && $.inArray(category, newArray) === -1) {
                newArray.push(category);
            }
        }

        return newArray.sort();
    };

    KEditor.prototype.getConnectedForContainerSnippets = function () {
        var self = this;
        var options = self.options;
        var body = self.body;

        var selector = '.keditor-content-area';
        if (options.nestedContainerEnabled) {
            selector += ',.keditor-container-content:not(.keditor-sub-container-content)';
        }

        return body.find(selector);
    };

    KEditor.prototype.initSnippets = function () {
        flog('initSnippets');

        var self = this;
        var options = self.options;
        var body = self.body;
        var snippetsList = body.find('#keditor-snippets-list');
        var containerSnippets = self.containerSnippets = snippetsList.find('.keditor-snippet[data-type=container]');
        var componentSnippets = self.componentSnippets = snippetsList.find('.keditor-snippet[data-type^=component]');

        flog('Initialize $.fn.draggable for container snippets list');
        containerSnippets.draggable({
            helper: 'clone',
            revert: 'invalid',
            connectToSortable: self.getConnectedForContainerSnippets(),
            start: function () {
                body.find('[contenteditable]').blur();
                body.find('.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                body.addClass('highlighted-container-content');

                if (options.nestedContainerEnabled) {
                    body.find('.keditor-sub-container-content').sortable('disable');
                }
            },
            stop: function () {
                if (options.nestedContainerEnabled) {
                    containerSnippets.draggable('option', 'connectToSortable', self.getConnectedForContainerSnippets());
                }
                componentSnippets.draggable('option', 'connectToSortable', body.find('.keditor-container-content'));

                if (options.nestedContainerEnabled) {
                    body.find('.keditor-sub-container-content').sortable('enable');
                }
                body.removeClass('highlighted-container-content');
            }
        });

        componentSnippets.draggable({
            helper: 'clone',
            revert: 'invalid',
            connectToSortable: body.find('.keditor-container-content'),
            start: function () {
                body.find('[contenteditable]').blur();
                body.find('.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                body.addClass('highlighted-container-content');
            },
            stop: function () {
                body.removeClass('highlighted-container-content');
            }
        });
    };

    KEditor.prototype.initTabs = function () {
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
    };

    KEditor.prototype.initTabsSwitcher = function () {
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
    };

    KEditor.prototype.initSettingPanel = function () {
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
        settingForms.on('submit', 'form', function (e) {
            e.preventDefault();
            return false;
        });

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
    };

    KEditor.prototype.setSettingContainer = function (container) {
        flog('setSettingContainer', container);

        var self = this;
        var body = self.body;

        if (container) {
            var idSettingContainer = container.attr('id');
            body.attr('data-setting-container', idSettingContainer);
        } else {
            body.removeAttr('data-setting-container');
        }
    };

    KEditor.prototype.getSettingContainer = function () {
        flog('getSettingContainer');

        var self = this;
        var body = self.body;
        var idSettingContainer = body.attr('data-setting-container');

        return body.find('#' + idSettingContainer);
    };

    KEditor.prototype.setSettingComponent = function (component) {
        flog('setSettingComponent', component);

        var self = this;
        var body = self.body;

        if (component) {
            var idSettingComponent = component.attr('id');
            body.attr('data-setting-component', idSettingComponent);
        } else {
            body.removeAttr('data-setting-component');
        }
    };

    KEditor.prototype.getSettingComponent = function () {
        flog('getSettingComponent');

        var self = this;
        var body = self.body;
        var idSettingComponent = body.attr('data-setting-component');

        return body.find('#' + idSettingComponent);
    };

    KEditor.prototype.showSettingPanel = function (target) {
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
    };

    KEditor.prototype.hideSettingPanel = function () {
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
    };

    KEditor.prototype.getContentAreas = function (target) {
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
    };

    KEditor.prototype.initContentAreas = function (target) {
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
    };

    KEditor.prototype.initContentArea = function (contentArea) {
        flog('initContentArea', contentArea);

        var self = this;
        var options = self.options;
        var body = self.body;

        contentArea.addClass('keditor-content-area');

        if (typeof options.onBeforeInitContentArea === 'function') {
            options.onBeforeInitContentArea.call(self, contentArea);
        }

        flog('Initialize $.fn.sortable for content area');
        contentArea.sortable({
            handle: '.keditor-toolbar-container:not(.keditor-toolbar-sub-container) .btn-container-reposition',
            items: '> section',
            helper: 'clone',
            connectWith: '.keditor-content-area',
            axis: 'y',
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
                        options.onContainerSnippetDropped.call(self, event, container, ui.item, contentArea);
                    }

                    self.initContainer(contentArea, container);
                } else {
                    if (helper) {
                        helper.remove();
                    }
                }

                self.hideSettingPanel();

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, event, contentArea);
                }

                item.addClass('keditor-ui-dragging');
                contentArea.removeClass('keditor-highlighted-dropzone');
            },
            start: function (e, ui) {
                body.addClass('highlighted-container-content');
                ui.item.addClass('keditor-ui-dragging');
            },
            stop: function (e, ui) {
                body.removeClass('highlighted-container-content');
                contentArea.removeClass('keditor-highlighted-dropzone');
                if (ui.helper) {
                    ui.helper.remove();
                }
                ui.item.removeClass('keditor-ui-dragging');
            },
            over: function () {
                contentArea.addClass('keditor-highlighted-dropzone');
            },
            out: function () {
                contentArea.addClass('keditor-highlighted-dropzone');
            }
        });

        flog('Initialize existing containers in content area');
        contentArea.children('section').each(function () {
            self.convertToContainer(contentArea, $(this));
        });

        if (typeof options.onInitContentArea === 'function') {
            var contentData = options.onInitContentArea.call(self, contentArea);
            if (contentData && contentData.length > 0) {
                $.each(contentData, function () {
                    self.convertToContainer(contentArea, $(this));
                });
            }
        }
    };

    KEditor.prototype.convertToContainer = function (contentArea, target) {
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
    };

    KEditor.prototype.initContainer = function (contentArea, container) {
        var self = this;
        var options = self.options;
        var isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;

        flog('initContainer - isNested=' + isNested, contentArea, container);

        if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
            container.addClass('keditor-initializing-container');

            if (typeof options.onBeforeInitContainer === 'function') {
                options.onBeforeInitContainer.call(self, container, contentArea);
            }

            if (isNested) {
                container.addClass('keditor-sub-container');
            }

            var settingBtn = '';
            if (options.containerSettingEnabled === true) {
                settingBtn = '<a href="javascript:void(0);" class="keditor-ui btn-container-setting">' + options.btnSettingContainerText + '</a>';
            }

            flog('Render KEditor toolbar for container', container);
            container.append(
                '<div class="keditor-toolbar keditor-toolbar-container ' + (isNested ? 'keditor-toolbar-sub-container' : '') + '">' +
                '   <a href="javascript:void(0);" class="keditor-ui btn-container-reposition">' + options.btnMoveContainerText + '</a>' + settingBtn +
                '   <a href="javascript:void(0);" class="keditor-ui btn-container-duplicate">' + options.btnDuplicateContainerText + '</a>' +
                '   <a href="javascript:void(0);" class="keditor-ui btn-container-delete">' + options.btnDeleteContainerText + '</a>' +
                '</div>'
            );

            container.attr('id', self.generateId(isNested ? 'sub-container' : 'container'));

            var containerContents = container.find('[data-type="container-content"]');
            flog('Initialize ' + containerContents.length + ' container content(s)');
            containerContents.each(function () {
                var containerContent = $(this);

                if (options.nestedContainerEnabled) {
                    if (isNested) {
                        self.initContainerContent(contentArea, container, containerContent, isNested);
                    } else {
                        if (containerContent.parents('[data-type="container-content"]').length === 0) {
                            self.initContainerContent(contentArea, container, containerContent, isNested);
                        }
                    }
                } else {
                    self.initContainerContent(contentArea, container, containerContent, isNested);
                }
            });

            if (typeof options.onInitContainer === 'function') {
                options.onInitContainer.call(self, container, contentArea);
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
    };

    KEditor.prototype.initContainerContent = function (contentArea, container, containerContent, isNested) {
        flog('initContainerContent - isNested=' + isNested, contentArea, container, containerContent);

        var self = this;
        var options = self.options;
        var body = self.body;

        containerContent.addClass('keditor-container-content');
        if (isNested) {
            containerContent.addClass('keditor-sub-container-content');
        }
        containerContent.attr('id', self.generateId('container-content'));

        flog('Initialize $.fn.sortable for container content');
        containerContent.sortable({
            handle: '.btn-component-reposition, .btn-container-reposition',
            helper: 'clone',
            items: '> section',
            connectWith: '.keditor-container-content',
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
                    var snippetType = item.attr('data-type');
                    flog('Snippet content', snippetContent);

                    if (snippetType === 'container') {
                        flog('Add nested container into container content', containerContent);

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
                            options.onContainerSnippetDropped.call(self, event, container, ui.item, contentArea);
                        }

                        self.initContainer(contentArea, container);
                    } else {
                        flog('Add component into container content', containerContent);
                        var dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
                        var component = $(
                            '<section class="keditor-ui keditor-component" data-type="' + snippetType + '" ' + dataAttributes.join(' ') + '>' +
                            '   <section class="keditor-ui keditor-component-content">' + snippetContent + '</section>' +
                            '</section>'
                        );
                        helper.replaceWith(component);

                        container = component.closest('.keditor-container');

                        if (typeof options.onComponentSnippetDropped === 'function') {
                            options.onComponentSnippetDropped.call(self, event, component, ui.item, contentArea);
                        }

                        self.initComponent(contentArea, container, component);
                    }
                } else {
                    if (helper) {
                        helper.remove();
                    }
                    container = item.closest('.keditor-container');
                }

                if (!container.hasClass('showed-keditor-toolbar')) {
                    $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    container.addClass('showed-keditor-toolbar');
                }

                if (typeof options.onContainerChanged === 'function') {
                    options.onContainerChanged.call(self, event, container, contentArea);
                }

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, event, contentArea);
                }

                item.removeClass('keditor-ui-dragging');
                contentArea.removeClass('keditor-highlighted-dropzone');
            },
            start: function (e, ui) {
                body.addClass('highlighted-container-content');
                ui.item.addClass('keditor-ui-dragging');
            },
            stop: function (e, ui) {
                body.removeClass('highlighted-container-content');
                containerContent.removeClass('keditor-highlighted-dropzone');

                if (ui.helper) {
                    ui.helper.remove();
                }
                ui.item.removeClass('keditor-ui-dragging');
            },
            over: function () {
                containerContent.addClass('keditor-highlighted-dropzone');
            },
            out: function () {
                containerContent.removeClass('keditor-highlighted-dropzone');
            }
        });

        flog('Initialize existing components inside container content');
        containerContent.children().each(function () {
            var child = $(this);

            if (child.find('[data-type="container-content"]').length > 0) {
                self.convertToContainer(contentArea, child);
            } else {
                self.convertToComponent(contentArea, container, child, true);
            }
        });
    };

    KEditor.prototype.convertToComponent = function (contentArea, container, target, isExisting) {
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
    };

    KEditor.prototype.getDataAttributes = function (target, ignoreAttributes, isArray) {
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
    };

    KEditor.prototype.getComponentType = function (component) {
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
                componentType = options.defaultComponentType.call(self, component);
            }

            if (!componentType) {
                error('Component type is undefined!');
            }

            flog('Fallback to defaultComponentType: ' + componentType);
            return componentType;
        }
    };

    KEditor.prototype.initComponent = function (contentArea, container, component) {
        flog('initComponent', contentArea, container, component);

        var self = this;
        var options = self.options;
        var body = self.body;

        if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
            component.addClass('keditor-initializing-component');
            component.attr('id', self.generateId('component'));

            if (typeof options.onBeforeInitComponent === 'function') {
                options.onBeforeInitComponent.call(self, component, contentArea);
            }

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

            component.find('[data-dynamic-href]').each(function () {
                var dynamicElement = $(this);

                self.initDynamicContent(dynamicElement);
            });

            if (typeof componentData.init === 'function') {
                componentData.init.call(componentData, contentArea, container, component, self);
            } else {
                body.removeClass('highlighted-container-content');
                flog('"init" function of component type "' + componentType + '" does not exist');
            }

            if (typeof options.onInitComponent === 'function') {
                options.onInitComponent.call(self, component, contentArea);
            }

            component.addClass('keditor-initialized-component');
            component.removeClass('keditor-initializing-component');
        } else {
            if (component.hasClass('keditor-initialized-component')) {
                flog('Component is already initialized!');
            } else {
                flog('Component is initializing...');
            }
        }
    };

    KEditor.prototype.getClickedElement = function (event, selector) {
        var target = $(event.target);
        var closest = target.closest(selector);

        if (target.is(selector)) {
            return target;
        } else if (closest.length > 0) {
            return closest;
        } else {
            return null;
        }
    };

    KEditor.prototype.initKEditorClicks = function () {
        flog('initKEditorClicks');

        var self = this;
        var options = self.options;
        var body = self.body;

        body.on('click', function (e) {
            var sidebar = self.getClickedElement(e, '#keditor-sidebar');

            var container = self.getClickedElement(e, '.keditor-container');
            if (container) {
                if (!container.hasClass('showed-keditor-toolbar')) {
                    body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    container.addClass('showed-keditor-toolbar');

                    var contentArea = container.parent();
                    if (typeof options.onContainerSelected === 'function') {
                        options.onContainerSelected.call(self, e, container, contentArea);
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
                if (!component.hasClass('showed-keditor-toolbar')) {
                    body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    component.addClass('showed-keditor-toolbar');

                    var contentArea = component.parent();
                    if (typeof options.onComponentSelected === 'function') {
                        options.onComponentSelected.call(self, e, component, contentArea);
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
            var newContainer = $(self.getContainerContent(container, btn.parent().hasClass('keditor-toolbar-sub-container')));
            container.after(newContainer);
            self.convertToContainer(contentArea, newContainer);

            var snippetsList = body.find('#keditor-snippets-list');
            var componentSnippets = snippetsList.find('.keditor-snippet[data-type^=component]');
            var currentLinkedContainerContents = componentSnippets.draggable('option', 'connectToSortable');
            componentSnippets.draggable('option', 'connectToSortable', currentLinkedContainerContents.add(newContainer.find('.keditor-container-content')));

            flog('Container is duplicated');

            if (typeof options.onContainerDuplicated === 'function') {
                options.onContainerDuplicated.call(self, container, newContainer, contentArea);
            }

            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        });

        body.on('click', '.btn-container-delete', function (e) {
            e.preventDefault();

            var btn = $(this);
            flog('Click on .btn-container-delete', btn);

            if (confirm(options.confirmDeleteContainerText)) {
                var container = btn.closest('.keditor-container');
                var components = container.find('.keditor-component');
                var contentArea = container.parent();

                if (typeof options.onBeforeContainerDeleted === 'function') {
                    options.onBeforeContainerDeleted.call(self, e, container, contentArea);
                }

                var settingComponent = self.getSettingComponent();
                if (settingComponent && settingComponent.length > 0) {
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
                    options.onContainerDeleted.call(self, e, container, contentArea);
                }

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
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
                options.onComponentDuplicated.call(self, component, newComponent, contentArea);
            }

            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(self, e, container, contentArea);
            }

            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(self, e, contentArea);
            }
        });

        body.on('click', '.btn-component-delete', function (e) {
            e.preventDefault();

            var btn = $(this);
            flog('Click on .btn-component-delete', btn);

            if (confirm(options.confirmDeleteComponentText)) {
                var component = btn.closest('.keditor-component');
                var container = component.closest('.keditor-container');
                var contentArea = component.closest('.keditor-content-area');

                if (typeof options.onBeforeComponentDeleted === 'function') {
                    options.onBeforeComponentDeleted.call(self, e, component, contentArea);
                }

                if (self.getSettingComponent().is(component)) {
                    self.hideSettingPanel();
                }

                self.deleteComponent(component);

                if (typeof options.onComponentDeleted === 'function') {
                    options.onComponentDeleted.call(self, e, component, contentArea);
                }

                if (typeof options.onContainerChanged === 'function') {
                    options.onContainerChanged.call(self, e, container, contentArea);
                }

                if (typeof options.onContentChanged === 'function') {
                    options.onContentChanged.call(self, e, contentArea);
                }
            }
        });
    };

    KEditor.prototype.deleteComponent = function (component) {
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
    };

    KEditor.prototype.initDynamicContent = function (dynamicElement) {
        flog('initDynamicContent', dynamicElement);

        var self = this;
        var options = self.options;
        var component = dynamicElement.closest('.keditor-component');
        var contentArea = dynamicElement.closest('.keditor-content-area');

        dynamicElement.attr('id', self.generateId('dynamic-element'));

        if (typeof options.onBeforeDynamicContentLoad === 'function') {
            options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
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
                    options.onDynamicContentLoaded.call(self, dynamicElement, response, status, xhr, contentArea);
                }
            },
            error: function (response, status, xhr) {
                flog('Error when loading dynamic content', dynamicElement, response, status, xhr);

                if (typeof options.onDynamicContentError === 'function') {
                    options.onDynamicContentError.call(self, dynamicElement, response, status, xhr, contentArea);
                }
            }
        });
    };

    KEditor.prototype.getComponentContent = function (component) {
        flog('getComponentContent', component);

        var self = this;
        component = component.clone();
        var componentType = self.getComponentType(component);
        var componentData = KEditor.components[componentType];
        var dataAttributes = self.getDataAttributes(component, null, true);
        var content;

        // Handle iframe-wrapper
        var iframeWrapper = component.find('.keditor-iframe-wrapper');
        if (iframeWrapper.length > 0) {
            iframeWrapper.find('.keditor-iframe-cover').remove();

            var iframe = iframeWrapper.children('iframe');
            if (iframeWrapper.hasClass('keditor-iframe-wrapper-fake')) {
                iframe.unwrap();
            } else {
                iframeWrapper.removeClass('keditor-iframe-wrapper');
            }
        }

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
    };

    KEditor.prototype.getContainerContent = function (container, isNested) {
        flog('getContainerContent - isNested=' + isNested, container);

        var self = this;
        var containerInner = container.children('.keditor-container-inner').clone();

        containerInner.find('[data-type=container-content]').not(isNested ? '' : '.keditor-sub-container-content').each(function () {
            var containerContent = $(this);
            containerContent.removeClass('keditor-container-content keditor-sub-container-content ui-droppable ui-sortable').removeAttr('id');

            containerContent.children().each(function () {
                var child = $(this);

                if (child.is('.keditor-component')) {
                    child.replaceWith(self.getComponentContent(child));
                } else if (child.is('.keditor-sub-container')) {
                    child.replaceWith(self.getContainerContent(child, true));
                }
            });
        });

        return '<section>' + containerInner.html() + '</section>';
    };

    KEditor.prototype.getContent = function (inArray) {
        var self = this;
        var options = self.options;
        var result = [];
        var target = options.iframeMode ? self.body : self.element;

        if (target.is('textarea')) {
            target = $(target.attr('data-keditor-wrapper'));
        }

        target.find('.keditor-content-area').each(function () {
            var html = '';
            $(this).children('.keditor-container').each(function () {
                var container = $(this);

                html += self.getContainerContent(container);
            });

            result.push(html);
        });

        return inArray ? result : result.join('\n');
    };

    KEditor.prototype.initIframeCover = function (iframe, wrapper) {
        if (!wrapper) {
            iframe.wrap('<div class="keditor-iframe-wrapper-fake"></div>');
            wrapper = iframe.parent();
        }

        wrapper.addClass('keditor-iframe-wrapper');

        var cover = $('<div class="keditor-iframe-cover"></div>');
        wrapper.prepend(cover);

        wrapper.on('mouseleave', function () {
            wrapper.removeClass('hidden-cover');
        });

        cover.on('dblclick', function (e) {
            e.preventDefault();

            wrapper.addClass('hidden-cover');
        });
    };

    KEditor.prototype.setContent = function (content, contentArea) {
        var self = this;
        var options = self.options;
        var body = self.body;
        var target = options.iframeMode ? self.contentAreasWrapper : self.element;

        if (target.is('textarea')) {
            target = $(target.attr('data-keditor-wrapper'));
        }

        if (!contentArea) {
            contentArea = target.children();
        } else {
            if (!contentArea.jquery) {
                contentArea = target.find(contentArea);
            }
        }

        if (contentArea.length === 0) {
            error('Content area does not exist!');
        }

        contentArea.html(content);
        self.initContentArea(contentArea);

        if (options.nestedContainerEnabled) {
            self.containerSnippets.draggable('option', 'connectToSortable', self.getConnectedForContainerSnippets());
        }
        self.componentSnippets.draggable('option', 'connectToSortable', body.find('.keditor-container-content'));
    };

    KEditor.prototype.getOptions = function () {
        return $.extend(true, {}, this.options);
    };

    KEditor.prototype.destroy = function (getLatestContent) {
        var target = this.element;
        var instanceId = target.attr('data-keditor-instance');

        if (getLatestContent) {
            var content = this.getContent(false);

            if (target.is('textarea')) {
                target.val(content);
            } else {
                target.html(content);
            }
        }

        if (this.options.iframeMode) {
            $(target.attr('data-keditor-frame')).remove();
            target.removeAttr('data-keditor-frame');
        } else {
            if (target.is('textarea')) {
                $(target.attr('data-keditor-wrapper')).remove();
                target.removeAttr('data-keditor-wrapper');
            }

            var notIframeInstanceCount = 0;
            for (var instanceId in KEditor.instances) {
                if (!KEditor.instances[instanceId].options.iframeMode) {
                    notIframeInstanceCount++;
                }
            }

            if (notIframeInstanceCount === 0) {
                this.body.removeClass('initialized-snippets-list opened-keditor-sidebar');
                this.body.find('#keditor-sidebar').remove();
            }
        }

        target.removeAttr('data-keditor-instance');
        target.removeClass('keditor-hidden-element');
        target.data('keditor', null);
        delete KEditor.instances[instanceId];
    };

    // KEditor plugins
    $.fn.keditor = function (options) {
        var element = $(this);
        var instance = element.data('keditor');

        if (typeof options == 'string') {
            if (instance && instance[options] && typeof instance[options] === 'function') {
                return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
            }
        } else {
            if (!instance) {
                instance = new KEditor(element, options);
                element.data('keditor', instance);

                var instanceId = instance.generateId('instance');
                element.attr('data-keditor-instance', instanceId);
                KEditor.instances[instanceId] = instance;
            }

            return instance;
        }
    };

    $.fn.keditor.constructor = KEditor;

    // Export KEditor
    $.keditor = KEditor;

})(jQuery);
