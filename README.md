# KEditor
KEditor is a JQuery plugin which provides a content editor with drag and drop snippets. Uses CK Editor for inline editing of blocks.

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional)
 * CKEditor: http://ckeditor.com/
 * FontAwesome: http://fontawesome.io/ (Optional for icons)

# Configuration
```javascript
/**
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
$.fn.keditor.DEFAULTS = {
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
```

# How to get content of KEditor
```javascript
$('#your-content-area').keditor('getContent');
```

# Customize snippet
```html
<!-- Example for container snippet -->
<div data-type="container" data-preview="/path/to/preview/of/snippet">
    <div class="row">
        <div class="col-sm-12">
            <div data-type="container-content">
                <!-- Components will be dropped inside element which has attribute data-type="container-content" -->
            </div>
        </div>
    </div>
</div>

<!-- Example for component snippet -->
<div data-type="component" data-preview="/path/to/preview/of/snippet">
    <div class="page-header">
        <h1 style="margin-bottom: 30px; font-size: 50px;"><b class="text-uppercase">Cras justo odio</b> <small>Donec id elit non mi</small></h1>
        <p class="lead"><em>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</em></p>
    </div>
</div>
```

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md

# Lived examples
https://rawgit.com/Kademi/keditor/master/examples/index.html
