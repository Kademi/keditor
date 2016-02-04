 /**!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, $.fn.ckeditor, Bootstrap, FontAwesome
 *
 * Configuration:
 * @option {Object} ckeditor Configuration for CKEditor. See at http://docs.ckeditor.com/#!/api/CKEDITOR.options
 * @option {String} snippetsUrl Url to snippets file
 * @option {String} [snippetsListId="keditor-snippets-list"] Id of element which contains snippets. As default, value is "keditor-snippets-list" and KEditor will render snippets sidebar automatically. If you specific other id, only snippets will rendered and put into your element
 * @option {Function} onInitContentArea Method will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized. Arguments: contentArea
 * @option {Function} onContentChanged Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed. Arguments: event
 * @option {Function} onInitContainer Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type="container-content"). By default, all first level sections under container content will be initialized. Arguments: container
 * @option {Function} onBeforeContainerDeleted Callback will be called before container is deleted. Arguments: event, selectedContainer
 * @option {Function} onContainerDeleted Callback will be called after container and its components are already deleted. Arguments: event, selectedContainer
 * @option {Function} onContainerChanged Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated. Arguments: event, changedContainer
 * @option {Function} onContainerDuplicated Callback will be called when a container is duplicated. Arguments: event, originalContainer, newContainer
 * @option {Function} onContainerSelected Callback will be called when a container is selected. Arguments: event, selectedContainer
 * @option {Function} onContainerSnippetDropped Callback will be called when a container snippet is dropped into content area. Arguments: event, newContainer, droppedContainer
 * @option {Function} onCKEditorReady Callback will be called after initializing component, when CKEditor of component content is ready. Arguments: component, editor
 * @option {Function} onInitComponent Callback will be called when initializing component. Arguments: component
 * @option {Function} onBeforeComponentDeleted Callback will be called before a component is deleted. Arguments: event, selectedComponent
 * @option {Function} onComponentDeleted Callback will be called after a component is deleted. Arguments: event, selectedComponent
 * @option {Function} onComponentChanged Callback will be called when content of a component is changed. Arguments: event, changedComponent
 * @option {Function} onComponentDuplicated Callback will be called when a component is duplicated. Arguments: event, originalComponent, newComponent
 * @option {Function} onComponentSelected Callback will be called when a component is selected. Arguments: event, selectedComponent
 * @option {Function} onComponentSnippetDropped Callback will be called after a component snippet is dropped into a container. Arguments: event, newComponent, droppedComponent
 */
(function ($) {
    // Log function will print log message when "$.fn.keditor.debug" equals "true"
    var flog = function () {
        if (typeof (console) !== 'undefined' && $.fn.keditor.debug === true) {
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
    if (!$.fn.ckeditor) {
        error('$.fn.ckeditor does not exist. Please import CKEditor and its jQuery adapter into your document for continue using KEditor.');
    } else {
        // Disable CKEditor init automatically with element which has "contenteditable=true"
        CKEDITOR.disableAutoInline = true;
    }

    $.fn.keditor = function (method) {
        if (methods[method] && method !== 'init') {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            throw new Error('[KEditor] Method ' + method + ' does not exist on jquery.keditor');
        }
    };

    // Debug mode
    $.fn.keditor.debug = true;

    // Version of KEditor
    $.fn.keditor.version = '1.0.0';

    // Default configuration of KEditor
    var DEFAULTS = $.fn.keditor.DEFAULTS = {
        ckeditor: {
            allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
            bodyId: 'editor',
            templates_replaceContent: false,
            enterMode: 'P',
            forceEnterMode: true,
            format_tags: 'p;h1;h2;h3;h4;h5;h6', // removed p2
            format_p2: {
                element: 'p',
                attributes: {
                    'class': 'lessSpace'
                }
            },
            removePlugins: 'magicline',
            minimumChangeMilliseconds: 100
        },
        snippetsUrl: 'snippets/default/snippets.html',
        snippetsListId: 'keditor-snippets-list',
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
        onCKEditorReady: function (component, editor) {
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
        }
    };

    // Object KEditor
    var KEditor = {

        generateId: function (type) {
            var timestamp = (new Date()).getTime();
            return 'keditor-' + type + '-' + timestamp;
        },

        initSidebar: function (options) {
            flog('initSidebar', options);

            var body = $(document.body);
            body.addClass('opened-keditor-sidebar');

            if (options.snippetsListId === DEFAULTS.snippetsListId) {
                flog('Render default KEditor snippet container');

                body.append(
                    '<div id="keditor-sidebar">' +
                    '    <a id="keditor-sidebar-toggler"><i class="fa fa-chevron-right"></i></a>' +
                    '    <div id="keditor-snippets-list"></div>' +
                    '    <div id="keditor-snippets-content" style="display: none"></div>' +
                    '</div>'
                );
                KEditor.initSidebarToggler();
            } else {
                flog('Render KEditor snippets content after custom snippets list with id="' + options.snippetsListId + '"');
                $('#' + options.snippetsListId).after('<div id="keditor-snippets-content" style="display: none"></div>');
            }

            if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
                flog('Getting snippets form "' + options.snippetsUrl + '"...');

                $.ajax({
                    type: 'get',
                    dataType: 'html',
                    url: options.snippetsUrl,
                    success: function (resp) {
                        flog('Success in getting snippets', resp);

                        KEditor.renderSnippets(resp, options);
                        KEditor.initSnippets(options);
                        KEditor.initSnippetsSwitcher(options);
                    },
                    error: function (jqXHR) {
                        flog('Error when getting snippets', jqXHR);
                    }
                });
            } else {
                error('"snippetsUrl" must be not null!');
            }
        },

        initSidebarToggler: function () {
            flog('initSidebarToggler');

            var body = $(document.body);
            $('#keditor-sidebar-toggler').on('click', function (e) {
                e.preventDefault();

                var icon = $(this).find('i');
                if (body.hasClass('opened-keditor-sidebar')) {
                    body.removeClass('opened-keditor-sidebar');
                    icon.attr('class', 'fa fa-chevron-left')
                } else {
                    body.addClass('opened-keditor-sidebar');
                    icon.attr('class', 'fa fa-chevron-right')
                }
            });
        },

        renderSnippets: function (resp, options) {
            flog('renderSnippets', resp, options);

            var snippetsContainerHtml = '';
            var snippetsComponentHtml = '';
            var snippetsContentHtml = '';

            $('<div />').html(resp).find('> div').each(function (i) {
                var snippet = $(this);
                var content = snippet.html().trim();
                var previewUrl = snippet.attr('data-preview');
                var type = snippet.attr('data-type');
                var snippetHtml = '';

                flog('Snippet #' + i + ' type=' + type, previewUrl, content);

                snippetHtml += '<section class="keditor-snippet" data-snippet="#keditor-snippet-' + i + '" data-type="' + type + '">';
                snippetHtml += '   <img class="keditor-snippet-preview" src="' + previewUrl + '" />';
                snippetHtml += '</section>';

                if (type === 'container') {
                    snippetsContainerHtml += snippetHtml;
                } else if (type === 'component') {
                    snippetsComponentHtml += snippetHtml;
                }

                snippetsContentHtml += '<div id="keditor-snippet-' + i + '" style="display: none;">' + content + '</div>';
            });

            $('#' + options.snippetsListId).html(
                '<ul id="keditor-snippets-type-switcher" class="nav nav-tabs nav-justified">' +
                '    <li class="active"><a href="#keditor-container-snippets">Containers</a></li>' +
                '    <li><a href="#keditor-component-snippets">Components</a></li>' +
                '</ul>' +
                '<div id="keditor-snippets-container" class="tab-content">' +
                '   <div class="tab-pane keditor-snippets active" id="keditor-container-snippets">' + snippetsContainerHtml + '</div>' +
                '   <div class="tab-pane keditor-snippets" id="keditor-component-snippets">' + snippetsComponentHtml + '</div>' +
                '</div>'
            ).addClass('loaded-snippets');
            $('#keditor-snippets-content').html(snippetsContentHtml);
        },

        initSnippets: function (options) {
            flog('initSnippets', options);

            var snippetsList = $('#' + options.snippetsListId);

            if ($.fn.niceScroll) {
                flog('Initialize $.fn.niceScroll for snippets list');
                snippetsList.find('.keditor-snippets').niceScroll({
                    cursorcolor: '#999',
                    cursorwidth: 6,
                    railpadding: {
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    },
                    cursorborder: ''
                });
            } else {
                flog('$.fn.niceScroll does not exist. Use default sidebar.');
            }

            flog('Initialize $.fn.draggable for container snippets list');
            snippetsList.find('.keditor-snippet[data-type=container]').draggable({
                helper: 'clone',
                revert: 'invalid',
                connectToSortable: '.keditor-content-area',
                start: function () {
                    $('[contenteditable]').blur();
                    $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                }
            });

            snippetsList.find('.keditor-snippet[data-type=component]').draggable({
                helper: 'clone',
                revert: 'invalid',
                connectToSortable: '.keditor-container-content',
                start: function () {
                    $('[contenteditable]').blur();
                    $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    $(document.body).addClass('highlighted-container-content');
                },
                stop: function () {
                    $(document.body).removeClass('highlighted-container-content');
                }
            });
        },

        initSnippetsSwitcher: function (options) {
            flog('initSnippetsSwitcher', options);

            var switcherLis = $('#keditor-snippets-type-switcher li');
            var snippetsDivs = $('#keditor-snippets-container .keditor-snippets');

            switcherLis.find('a').on('click', function (e) {
                e.preventDefault();

                var a = $(this);
                var li = a.parent();
                var href = a.attr('href');

                if (!li.hasClass('active')) {
                    var activatedLi = switcherLis.filter('.active');
                    var activatedSnippetsDiv = snippetsDivs.filter('.active');
                    var targetDiv = $(href);

                    activatedLi.removeClass('active');
                    activatedSnippetsDiv.removeClass('active');

                    li.addClass('active');
                    targetDiv.addClass('active');

                    if ($.fn.niceScroll) {
                        activatedSnippetsDiv.getNiceScroll().hide();
                        targetDiv.getNiceScroll().show();
                    }
                }
            });
        },

        initContentArea: function (contentArea, options) {
            flog('initContentArea', contentArea, options);

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
                        var snippetContent = $(item.attr('data-snippet')).html();
                        flog('Snippet content', snippetContent);

                        var container = $(
                            '<section class="keditor-container">' +
                            '   <section class="keditor-container-inner">' + snippetContent + '</section>' +
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

                        KEditor.initContainer(contentArea, container, options);
                    }

                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, event);
                    }
                }
            });

            flog('Initialize existing containers in content area');
            contentArea.children('section').each(function () {
                KEditor.convertToContainer(contentArea, $(this), options);
            });

            if (typeof options.onInitContentArea === 'function') {
                var contentData = options.onInitContentArea.call(contentArea, contentArea);
                if (contentData && contentData.length > 0) {
                    $.each(contentData, function () {
                        KEditor.convertToContainer(contentArea, $(this), options);
                    });
                }
            }
        },

        convertToContainer: function (contentArea, target, options) {
            var isSection = target.is('section');
            var container;

            if (isSection) {
                target.addClass('keditor-container');
                target.wrapInner('<section class="keditor-container-inner"></section>');
                container = target;
            } else {
                target.wrap('<section class="keditor-container"><section class="keditor-container-inner"></section></section>');
                container = target.parent().parent();
            }

            KEditor.initContainer(contentArea, container, options);
        },

        initContainer: function (contentArea, container, options) {
            flog('initContainer', contentArea, container, options);

            if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
                container.addClass('keditor-initializing-container');

                flog('Render KEditor toolbar for container', container);
                container.append(
                    '<div class="keditor-toolbar keditor-toolbar-container">' +
                    '   <a href="#" class="btn-container-reposition"><i class="fa fa-sort"></i></a>' +
                    '   <a href="#" class="btn-container-duplicate"><i class="fa fa-files-o"></i></a>' +
                    '   <a href="#" class="btn-container-delete"><i class="fa fa-times"></i></a>' +
                    '</div>'
                );

                var containerId = KEditor.generateId('container');
                flog('Id for container is: ' + containerId);
                container.attr('id', containerId);

                var containerContents = container.find('[data-type="container-content"]');
                flog('Initialize ' + containerContents.length + ' container content(s)');
                containerContents.each(function () {
                    var containerContent = $(this);

                    KEditor.initContainerContent(contentArea, container, containerContent, options);
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

        initContainerContent: function (contentArea, container, containerContent, options) {
            flog('initContainerContent', contentArea, container, containerContent, options);

            var contentId = KEditor.generateId('container-content');
            containerContent.addClass('keditor-container-content');

            flog('Id for container content id: ' + contentId, containerContent);
            containerContent.attr('id', contentId);

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
                        var snippetContent = $(item.attr('data-snippet')).html();
                        flog('Snippet content', snippetContent);

                        var component = $(
                            '<section class="keditor-component">' +
                            '   <section class="keditor-component-content">' + snippetContent + '</section>' +
                            '</section>'
                        );
                        helper.replaceWith(component);

                        container = component.closest('.keditor-container');

                        if (typeof options.onComponentSnippetDropped === 'function') {
                            options.onComponentSnippetDropped.call(contentArea, event, component, ui.item);
                        }

                        KEditor.initComponent(contentArea, container, component, options);
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

                KEditor.convertToComponent(contentArea, container, content, options);
            });
        },

        convertToComponent: function (contentArea, container, target, options) {
            var isSection = target.is('section');
            var component;

            if (isSection) {
                target.addClass('keditor-component');
                target.wrapInner('<section class="keditor-component-content"></section>');
                component = target;
            } else {
                target.wrap('<section class="keditor-component"><section class="keditor-component-content"></section></section>');
                component = target.parent().parent();
            }

            KEditor.initComponent(contentArea, container, component, options);
        },

        initComponent: function (contentArea, container, component, options) {
            flog('initComponent', contentArea, container, component, options);

            if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
                component.addClass('keditor-initializing-component');

                flog('Render KEditor toolbar for component', component);
                component.append(
                    '<div class="keditor-toolbar keditor-toolbar-component">' +
                    '   <a href="#" class="btn-component-reposition"><i class="fa fa-arrows"></i></a>' +
                    '   <a href="#" class="btn-component-duplicate"><i class="fa fa-files-o"></i></a>' +
                    '   <a href="#" class="btn-component-delete"><i class="fa fa-times"></i></a>' +
                    '</div>'
                );

                flog('Initialize CKEditor for component', component);
                var componentContent = component.children('.keditor-component-content');
                componentContent.prop('contenteditable', true);

                var contentId = KEditor.generateId('component-content');
                flog('Id for component content is: ' + contentId);
                componentContent.attr('id', contentId);

                componentContent.on('input', function (e) {
                    if (typeof options.onComponentChanged === 'function') {
                        options.onComponentChanged.call(contentArea, e, component);
                    }

                    if (typeof options.onContainerChanged === 'function') {
                        options.onContainerChanged.call(contentArea, e, container);
                    }

                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(contentArea, e);
                    }
                });

                var editor = componentContent.ckeditor(options.ckeditor).editor;
                editor.on('instanceReady', function () {
                    flog('CKEditor is ready', component);

                    if (typeof options.onCKEditorReady === 'function') {
                        options.onCKEditorReady.call(contentArea, component, editor);
                    }
                });

                if (typeof options.onInitComponent === 'function') {
                    options.onInitComponent.call(contentArea, component);
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

        initKEditorClicks: function (options) {
            flog('initKEditorClicks', options);

            var body = $(document.body);

            body.on('click', function (e) {
                var container = KEditor.getClickedElement(e, '.keditor-container');
                if (container) {
                    flog('Click on .keditor-container', container, container.hasClass('showed-keditor-toolbar'));

                    if (!container.hasClass('showed-keditor-toolbar')) {
                        $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        container.addClass('showed-keditor-toolbar');

                        var contentArea = container.parent();
                        if (typeof options.onContainerSelected === 'function') {
                            options.onContainerSelected.call(contentArea, e, container);
                        }
                    }
                } else {
                    $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                    $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                }

                var component = KEditor.getClickedElement(e, '.keditor-component');
                if (component) {
                    flog('Click on .keditor-component', component);

                    if (!component.hasClass('showed-keditor-toolbar')) {
                        $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        component.addClass('showed-keditor-toolbar');

                        var contentArea = component.parent();
                        if (typeof options.onComponentSelected === 'function') {
                            options.onComponentSelected.call(contentArea, e, component);
                        }
                    }
                } else {
                    $('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                }
            });

            body.on('click', '.btn-container-duplicate', function (e) {
                e.preventDefault();

                var btn = $(this);
                flog('Click on .btn-container-duplicate', btn);

                var container = btn.closest('.keditor-container');
                var contentArea = container.parent();
                var newContainer = $(KEditor.getContainerContent(container));

                container.after(newContainer);
                KEditor.convertToContainer(contentArea, newContainer, options);

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

                    if (components.length > 0) {
                        components.each(function () {
                            KEditor.deleteComponent($(this));
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

            body.on('click', '.btn-component-duplicate', function (e) {
                e.preventDefault();

                var btn = $(this);
                flog('Click on .btn-component-duplicate', btn);

                var component = btn.closest('.keditor-component');
                var container = component.closest('.keditor-container');
                var contentArea = container.parent();
                var newComponent = $(KEditor.getComponentContent(component));

                component.after(newComponent);
                KEditor.convertToComponent(contentArea, container, newComponent, options);

                flog('Component is duplicated');

                if (typeof options.onComponentDuplicated=== 'function') {
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

                    KEditor.deleteComponent(component);

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

            var componentContent = component.children('.keditor-component-content');
            var id = componentContent.attr('id');
            var editor = CKEDITOR.instances[id];

            if (editor) {
                editor.destroy();
            }

            component.remove();
        },

        getComponentContent: function (component) {
            var id = component.find('.keditor-component-content').attr('id');

            return '<section>' + CKEDITOR.instances[id].getData() + '</section>';
        },

        getContainerContent: function (container) {
            var containerInner = container.children('.keditor-container-inner').clone();

            containerInner.find('[data-type=container-content]').each(function () {
                var containerContent = $(this);
                containerContent.removeClass('keditor-container-content ui-droppable ui-sortable').removeAttr('id');

                containerContent.children('.keditor-component').each(function () {
                    var component = $(this);

                    component.replaceWith(KEditor.getComponentContent(component));
                });
            });

            return '<section>' + containerInner.html() + '</section>';
        }
    };

    var methods = {

        init: function (options) {
            var contentAreas = $(this);
            options = $.extend({}, DEFAULTS, options);

            contentAreas.each(function () {
                var contentArea = $(this);
                if (contentArea.attr('id').length === 0) {
                    flog('Content area does not contain Id. Generating id for content area...');

                    var id = KEditor.generateId('content-area');
                    contentArea.attr('id', id);
                    flog('Id for content are is: "' + id + '"');
                }
            });

            var snippetsList = $('#' + options.snippetsListId);
            if (!snippetsList.hasClass('loaded-snippets')) {
                KEditor.initSidebar(options);
            } else {
                flog('Snippets list is already initialized!');
            }

            KEditor.initKEditorClicks(options);

            contentAreas.each(function () {
                var contentArea = $(this);
                if (contentArea.data('keditorOptions')) {
                    flog('KEditor is already initialized!');
                } else {
                    contentArea.data('keditorOptions', options);
                    KEditor.initContentArea(contentArea, options);
                }
            });

            return contentAreas;
        },

        getContent: function () {
            var contentArea = $(this);
            var html = '';

            contentArea.children('.keditor-container').each(function () {
                var container = $(this);

                html += KEditor.getContainerContent(container);
            });

            return html;
        }
    };

})(jQuery);
