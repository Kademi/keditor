# KEditor
KEditor is a JQuery plugin which provides a content editor with drag and drop snippets. Uses CK Editor for inline editing of blocks.

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional)
 * CKEditor: http://ckeditor.com/
 * FontAwesome: http://fontawesome.io/

# Configuration
```javascript
/**
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
$.fn.keditor.DEFAULTS = {
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
```

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md

# Lived examples
 * https://rawgit.com/Kademi/keditor/master/examples/index.html
