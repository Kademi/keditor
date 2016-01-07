# KEditor
KEditor is a JQuery plugin which provides a content editor with drag and drop snippets. Uses CK Editor for inline editing of blocks.

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional)
 * CKEditor: http://ckeditor.com/

# Configuration
```javascript
/**
 * Configuration:
 * @option {Object} ckeditor Configuration for CKEditor. See at http://docs.ckeditor.com/#!/api/CKEDITOR.config
 * @option {String} snippetsUrl Url to snippets file
 * @option {String} [snippetsListId="keditor-snippets-list"] Id of element which contains snippets. As default, value is "keditor-snippets-list" and KEditor will render snippets sidebar automatically. If you specific other id, only snippets will rendered and put into your element
 * @option {Function} onContentChange Callback will be called when content is changed. Required "onchange" plugin on CKEditor
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
    snippetsUrl: 'snippets.html',
    snippetsListId: 'keditor-snippets-list',
    onContentChange: function () {
    }
};
```

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md

# Lived example
 * With basic CKEditor toolbar: https://rawgit.com/Kademi/keditor/master/examples/index.html
 * With standard CKEditor toolbar: https://rawgit.com/Kademi/keditor/master/examples/standard_ckeditor.html
 * With full CKEditor toolbar: https://rawgit.com/Kademi/keditor/master/examples/full_ckeditor.html
