# KEditor
KEditor is a JQuery plugin which provides a content editor with drag and drop snippets. Uses CK Editor for inline editing of blocks.

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional)
 * Bootstrap: http://getbootstrap.com/
 * FontAwesome: http://fontawesome.io/ (Optional for icons)

# Configuration
```javascript
/**
 * Configuration:
 * @option {String} btnMoveContainerText Text content for move button of container
 * @option {String} btnMoveComponentText Text content for move button of component
 * @option {String} btnSettingContainerText Text content for setting button of container
 * @option {String} btnSettingComponentText Text content for setting button of component
 * @option {String} btnDuplicateContainerText Text content for duplicate button of container
 * @option {String} btnDuplicateComponentText Text content for duplicate button of component
 * @option {String} btnDeleteContainerText Text content for delete button of container
 * @option {String} btnDeleteComponentText Text content for delete button of component
 * @option {String|Function} defaultComponentType Default component type of component. If type of component does not exist in KEditor.components, will be used 'defaultComponentType' as type of this component. If is function, argument is component - jQuery object of component
 * @option {Boolean} iframeMode KEditor is created inside an iframe or not. Keditor will add all elements which have 'data-type=keditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element
 * @option {String} snippetsUrl Url to snippets file
 * @option {String} snippetsListId Id of element which contains snippets. As default, value is "keditor-snippets-list" and KEditor will render snippets sidebar automatically. If you specific other id, only snippets will rendered and put into your element
 * @option {String} contentAreasSelector Selector of content areas. If is null or selector does not match any elements, will create default content area and wrap all content inside it.
 * @option {Boolean} iframeMode Initialized KEditor inside an iframe for not
 * @option {String} contentAreasWrapper The wrapper element for all contents inside iframe. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag
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
 * @option {Function} onDynamicContentLoaded Callback will be called after dynamic content is loaded. Arguments: dynamicElement, response, status, xhr
 * @option {Function} onDynamicContentError Callback will be called if loading dynamic content is error, abort or timeout. Arguments: dynamicElement, response, status, xhr
 */
$.keditor.DEFAULTS = {
    btnMoveContainerText: '<i class="fa fa-sort"></i>',
    btnMoveComponentText: '<i class="fa fa-arrows"></i>',
    btnSettingContainerText: '<i class="fa fa-cog"></i>',
    btnSettingComponentText: '<i class="fa fa-cog"></i>',
    btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
    btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
    btnDeleteContainerText: '<i class="fa fa-times"></i>',
    btnDeleteComponentText: '<i class="fa fa-times"></i>',
    defaultComponentType: 'text',
    snippetsUrl: 'snippets/default/snippets.html',
    snippetsListId: 'keditor-snippets-list',
    contentAreasSelector: null,
    iframeMode: false,
    contentAreasWrapper: '<div class="keditor-content-areas-wrapper container"></div>',
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
    onDynamicContentLoaded: function (dynamicElement, response, status, xhr) {
    },
    onDynamicContentError: function (dynamicElement, response, status, xhr) {
    }
};
```

# Iframe mode
```javascript
$('#id').keditor({
    iframeMode: true
});
```

When `iframeMode` is ON, all elements which have `data-type=keditor-style` will be used for iframe stylesheets. Examples:
```html
<link rel="stylesheet" data-type="keditor-style" type="text/css" href="/path/to/css" />

<!-- In iframe will be changed to -->
<link rel="stylesheet" type="text/css" href="/path/to/css" />
```

```html
<!-- This style will not impact to current document -->
<div data-type="keditor-style" data-href="/path/to/css"></div>

<!-- In iframe will be changed to -->
<link rel="stylesheet" type="text/css" href="/path/to/css" />
```

```html
<style data-type="keditor-style" type="text/css">
    // CSS rules
</style>

<!-- In iframe will be changed to -->
<style data-type="text/css">
    // CSS rules
</style>
```

```html
<!-- This style will not impact to current document -->
<script data-type="keditor-style" type="text/css">
    // CSS rules
</script>

<!-- In iframe will be changed to -->
<style data-type="text/css">
    // CSS rules
</style>
```

# How to get content of KEditor
```javascript
$('#id').keditor('getContent');
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

<!-- Example for component snippet. x is name of component type. Example: "component-text" -->
<div data-type="component-x" data-preview="/path/to/preview/of/snippet">
    <div class="page-header">
        <h1 style="margin-bottom: 30px; font-size: 50px;"><b class="text-uppercase">Cras justo odio</b> <small>Donec id elit non mi</small></h1>
        <p class="lead"><em>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</em></p>
    </div>
</div>
```

# Customize component type
```javascript
$.keditor.components['typeName'] = {
    /**
     * Function will be called when initializing a component with this type
     * @param {jQuery} contentArea
     * @param {jQuery} container
     * @param {jQuery} component
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    init: function (contentArea, container, component, keditor) {

    },

    /**
     * Function will be called for getting content of component from method of KEditor "target.keditor('getContent')"
     * @param {jQuery} component This component is cloned from original component. So you can do anything with it, event deleted
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    getContent: function (component, keditor) {

    },

    /**
     * Function will be called when deleting component
     * @param {jQuery} component
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    destroy: function (component, keditor) {

    },

    // Enable setting panel for this type or not
    settingEnabled: true,

    // Title of setting panel
    settingTitle: 'Add image',

    /**
     * Initialize setting form of this type
     * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    initSettingForm: function (form, keditor) {

    },

    /**
     * Show setting form for this type. This function will be called when user clicks on setting button of component when setting panel is hidden. You can fulfill form controls in this function.
     * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
     * @param {jQuery} component Component will be applied setting
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    showSettingForm: function (form, component, keditor) {

    },

    /**
     * Hide setting form for this type. This function will be called when user clicks again on setting button of component when setting panel is showed. You can clear setting form in this function
     * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
     * @param {KEditor} keditor KEditor instance which is calling this function
     */
    hideSettingForm: function (form, keditor) {

    }
};
```

__**Note**__: `KEditor.settingComponent` is component which will be applied setting. You can access this component after setting panel is showed.

# Dynamic content
If you want a element which has dynamic content, you can do like the following
```html
<div data-dynamic-href="/path/to/dynamic/content" data-attribute-one="1" data-attribute-two="2" ...></div>
```
So the content of this `div` will be get from `/path/to/dynamic/content?attributeOne=1&attributeTwo=2`

Example:
```html
<!-- 
    Here is example of a component with type is "products" and have dynamic content inside.
    Full url for getting dynamic content is "/_components/ecommerce/productList?numProducts=4&store=store1&category=c1"
 -->
<div data-type="component-products">
    <div data-dynamic-href='/_components/ecommerce/productList' data-num-products='4' data-store="store1" data-category="c1"></div>
</div>
```

__**Note**__: All `data-*` attribute will be converted to camel-case. Example: data-number-products will be `numberProducts`.

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md

# Lived examples
https://rawgit.com/Kademi/keditor/master/examples/index.html
