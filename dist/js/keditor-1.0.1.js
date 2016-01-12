/*!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.0.1
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, $.fn.ckeditor, FontAwesome
 *
 * Configuration:
 * @option {Object} ckeditor Configuration for CKEditor. See at http://docs.ckeditor.com/#!/api/CKEDITOR.options
 * @option {String} snippetsUrl Url to snippets file
 * @option {String} [snippetsListId="keditor-snippets-list"] Id of element which contains snippets. As default, value is "keditor-snippets-list" and KEditor will render snippets sidebar automatically. If you specific other id, only snippets will rendered and put into your element
 * @option {Function} onContentChanged Callback will be called when content is changed. Arguments: event
 * @option {Function} onSnippetDropped Callback will be called when snippet is dropped into content area. Arguments: event, newSection, droppedSnippet
 * @option {Function} onBeforeSectionDeleted Callback will be called before selected section is deleted. Arguments: event, btnRemove, selectedSection
 * @option {Function} onSectionChanged Callback will be called when content of section is changed. Arguments: event, changedSection
 * @option {Function} onSectionDuplicated Callback will be called when section is duplicated. Arguments: event, originalSection, newSection
 * @option {Function} onSectionSelected Callback will be called when section is selected. Arguments: event, selectedSection
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
            allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes are allowed through
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
        onContentChanged: function (event) {
        },
        onSnippetDropped: function (event, newSection, droppedSnippet) {
        },
        onBeforeSectionDeleted: function (event, btnRemove, selectedSection) {
        },
        onSectionChanged: function (event, changedSection) {
        },
        onSectionDuplicated: function (event, originalSection, newSection) {
        },
        onSectionSelected: function (event, selectedSection) {
        }
    };

    // Object KEditor
    var KEditor = {
        initSnippet: function (contentArea, options) {
            flog('initSnippetToggler', contentArea, options);

            var body = $(document.body);
            body.addClass('opened-keditor-snippets');

            if (options.snippetsListId === DEFAULTS.snippetsListId) {
                flog('Render default KEditor snippet container');

                body.append(
                    '<div id="keditor-snippets-container">' +
                    '    <a id="keditor-snippets-toggler"><i class="fa fa-chevron-right"></i></a>' +
                    '    <div id="keditor-snippets-list" class="clearfix"></div>' +
                    '    <div id="keditor-snippets-content" style="display: none"></div>' +
                    '</div>'
                );
                KEditor.initSnippetToggler();
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
                        KEditor.initSnippetsActions(contentArea, options);
                    },
                    error: function (jqXHR) {
                        flog('Error when getting snippets', jqXHR);
                    }
                });
            } else {
                error('"snippetsUrl" must be not null!');
            }
        },

        initSnippetToggler: function () {
            flog('initSnippetToggler');

            var body = $(document.body);

            $('#keditor-snippets-toggler').on('click', function (e) {
                e.preventDefault();

                var icon = $(this).find('i');
                if (body.hasClass('opened-keditor-snippets')) {
                    body.removeClass('opened-keditor-snippets');
                    icon.attr('class', 'fa fa-chevron-left')
                } else {
                    body.addClass('opened-keditor-snippets');
                    icon.attr('class', 'fa fa-chevron-right')
                }
            });
        },

        renderSnippets: function (resp, options) {
            flog('renderSnippets', resp, options);

            var snippetsHtml = '';
            var snippetsContentHtml = '';

            $('<div />').html(resp).find('> div').each(function (i) {
                var div = $(this);
                var content = div.html().trim();
                var previewUrl = div.attr('data-preview');

                flog('Snippet #' + i, previewUrl, content);

                snippetsHtml += '<section class="keditor-snippet" data-snippet="#keditor-snippet-' + i + '">';
                snippetsHtml += '   <img class="keditor-snippet-preview" src="' + previewUrl + '" />';
                snippetsHtml += '</section>';

                snippetsContentHtml += '<div id="keditor-snippet-' + i + '" style="display: none;">' + content + '</div>';
            });

            $('#' + options.snippetsListId).html(snippetsHtml);
            $('#keditor-snippets-content').html(snippetsContentHtml);
        },

        initSnippetsActions: function (contentArea, options) {
            flog('initSnippetsActions', contentArea, options);

            var snippetsList = $('#' + options.snippetsListId);

            if ($.fn.niceScroll) {
                flog('Initialize $.fn.niceScroll for snippets list');
                snippetsList.niceScroll({
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

            var contentAreaId = contentArea.attr('id');
            flog('Initialize $.fn.draggable for snippets list which connect to #' + contentAreaId);
            snippetsList.find('.keditor-snippet').draggable({
                helper: 'clone',
                revert: 'invalid',
                connectToSortable: '#' + contentAreaId,
                cursorAt: {
                    top: 0,
                    left: 0
                },
                start: function () {
                    $('.keditor-section-content').blur();
                }
            });
        },

        initContentArea: function (contentArea, options) {
            flog('initContentArea', contentArea, options);

            var body = $(document.body);
            var contentAreaId = contentArea.attr('id');
            contentArea.addClass('keditor-content-area');

            flog('Initialize $.fn.droppable for content area');
            contentArea.droppable({
                accept: '.keditor-snippet',
                tolerance: 'pointer',
                greedy: true
            });

            flog('Initialize $.fn.sortable for content area');
            contentArea.sortable({
                handle: '.btn-section-reposition',
                items: '> section',
                connectWith: '#' + contentAreaId,
                axis: 'y',
                sort: function () {
                    $(this).removeClass('ui-state-default');
                },
                receive: function (event, ui) {
                    flog('On received snippet', event, ui);

                    var helper = ui.helper;
                    var item = ui.item;
                    var snippetContent = $(item.attr('data-snippet')).html();
                    flog('Snippet content', snippetContent);

                    var section = $(
                        '<section class="keditor-section">' +
                        '   <section class="keditor-section-content">' + snippetContent + '</section>' +
                        '</section>'
                    );
                    helper.replaceWith(section);

                    if (typeof options.onSnippetDropped === 'function') {
                        options.onSnippetDropped.call(this, event, section, ui.item);
                    }

                    KEditor.initContentEditable(section, options);

                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(this, event);
                    }
                }
            });

            flog('Initialize existing sections in content area');
            contentArea.find('> section').each(function () {
                var section = $(this);
                section.addClass('keditor-section-content');
                section.wrap('<section class="keditor-section"></section>');

                var keditorSection = section.parent();
                KEditor.initContentEditable(keditorSection, options);
            });

            body.on('click', function (e) {
                var section = KEditor.getClickElement(e, 'section.keditor-section');
                if (section) {
                    flog('Click on .keditor-section', section);

                    if (!section.hasClass('showed-keditor-toolbar')) {
                        contentArea.find('.keditor-section.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
                        section.addClass('showed-keditor-toolbar');

                        if (typeof options.onSectionSelected === 'function') {
                            options.onSectionSelected.call(this, e, section);
                        }
                    }
                }

                var btnRemove = KEditor.getClickElement(e, '.btn-section-delete');
                if (btnRemove) {
                    flog('Click on .btn-section-delete', btnRemove);

                    if (confirm('Are you sure that you want to delete this section? This action can not be undo!')) {
                        var selectedSection = btnRemove.closest('section.keditor-section');
                        if (typeof options.onBeforeSectionDeleted === 'function') {
                            options.onBeforeSectionDeleted.call(this, e, btnRemove, selectedSection);
                        }

                        var id = selectedSection.find('.keditor-section-content').attr('id');
                        CKEDITOR.instances[id].destroy();
                        selectedSection.remove();

                        flog('Section is deleted');

                        if (typeof options.onContentChanged === 'function') {
                            options.onContentChanged.call(this, e);
                        }
                    }
                }

                var btnDuplicate = KEditor.getClickElement(e, '.btn-section-duplicate');
                if (btnDuplicate) {
                    flog('Click on .btn-section-duplicate', btnDuplicate);

                    var selectedSection = btnDuplicate.closest('section.keditor-section');
                    var selectedSectionContent = KEditor.getSectionContent(selectedSection);
                    var newSection = $(
                        '<section class="keditor-section">' +
                        '   <section class="keditor-section-content">' + selectedSectionContent + '</section>' +
                        '</section>'
                    );

                    selectedSection.after(newSection);
                    KEditor.initContentEditable(newSection, options);

                    flog('Section is duplicated');

                    if (typeof options.onSectionDuplicated === 'function') {
                        options.onSectionDuplicated.call(this, e, selectedSection, newSection);
                    }

                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(this, e);
                    }
                }
            });
        },

        getClickElement: function (event, selector) {
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

        initContentEditable: function (section, options) {
            flog('initContentEditable', section, options);

            if (!section.hasClass('keditor-editable') || !section.hasClass('keditor-initializing')) {
                section.addClass('keditor-initializing');

                flog('Render KEditor toolbar for section', section);
                section.append(
                    '<div class="keditor-toolbar">' +
                    '   <div class="btn-group-vertical">' +
                    '       <a href="#" class="btn btn-xs btn-info btn-section-reposition"><i class="fa fa-sort"></i></a>' +
                    '       <a href="#" class="btn btn-xs btn-warning btn-section-duplicate"><i class="fa fa-files-o"></i></a>' +
                    '       <a href="#" class="btn btn-xs btn-danger btn-section-delete"><i class="fa fa-remove"></i></a>' +
                    '   </div>' +
                    '</div>'
                );

                flog('Initialize CKEditor for section', section);
                var sectionContent = section.find('.keditor-section-content');
                sectionContent.prop('contenteditable', true);

                var id = 'keditor-section-' + (new Date()).getTime();
                flog('Id for section content is: ' + id);
                sectionContent.attr('id', id);

                sectionContent.ckeditor(options.ckeditor);
                sectionContent.on('input', function (e) {
                    if (typeof options.onSectionChanged === 'function') {
                        options.onSectionChanged.call(this, e);
                    }

                    if (typeof options.onContentChanged === 'function') {
                        options.onContentChanged.call(this, e);
                    }
                });

                section.addClass('keditor-editable');
                section.removeClass('keditor-initializing');
            } else {
                if (section.hasClass('keditor-editable')) {
                    flog('Section is already initialized!');
                } else {
                    flog('Section is initializing...');
                }
            }
        },

        getSectionContent: function (section) {
            var id = section.find('.keditor-section-content').attr('id');

            return CKEDITOR.instances[id].getData();
        }
    };

    var methods = {
        init: function (options) {
            return $(this).each(function () {
                var contentArea = $(this);
                if (contentArea.data('keditorOptions')) {
                    flog('KEditor is already initialized!');
                } else {
                    if (contentArea.attr('id').length === 0) {
                        flog('Content area does not contain Id. Generating id for content area...');

                        var id = 'keditor-content-area-' + (new Date()).getTime();
                        contentArea.attr('id', id);
                        flog('Id for content are is: "' + id + '"');
                    }

                    options = $.extend({}, DEFAULTS, options);
                    contentArea.data('keditorOptions', options);
                    KEditor.initContentArea(contentArea, options);
                    KEditor.initSnippet(contentArea, options);
                }

                return contentArea;
            });
        },
        getContent: function () {
            var contentArea = $(this);
            var html = '';

            contentArea.find('> section').each(function () {
                var section = $(this);

                html += '<section>' + KEditor.getSectionContent(section) + '</section>';
            });

            return html;
        }
    };

})(jQuery);
