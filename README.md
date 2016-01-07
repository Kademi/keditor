# KEditor
KEditor is a JQuery plugin which provides a content editor with drag and drop snippets. Uses CK Editor for inline editing of blocks.

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/
 * NiceScroll: http://areaaperta.com/nicescroll/
 * CKEditor: http://ckeditor.com/

# Configuration
## Defaults
```
$.fn.ckeditor.DEFAULTS = {
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

## CKEditor configuration
All CKEditor configuration will be configured in `ckeditor`

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md

# Lived example
Check it out at https://rawgit.com/Kademi/keditor/master/index.html
