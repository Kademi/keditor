# KEditor
KEditor is a jQuery plugin which provides a content editor with drag and drop snippets

## Shortcuts
 * [Live examples](#live-examples)
 * [Dependencies](#dependencies)
 * [Configuration](#configuration)
 * [Iframe mode](#iframe-mode)
 * [How to get content of KEditor](#how-to-get-content-of-keditor)
 * [How to set content of KEditor](#how-to-set-content-of-keditor)
 * [Customize snippet](#customize-snippet)
 * [Customize component type](#customize-component-type)
 * [Dynamic content](#dynamic-content)
 * [Support Touch Devices](#support-touch-devices)
 * [License](#license)

# Live examples
https://rawgit.com/Kademi/keditor/master/examples/index.html

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/ (Requires only draggable, droppable and sortable)
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional for scroll bar)
 * Bootstrap: http://getbootstrap.com/ (Optional for style)
 * FontAwesome: http://fontawesome.io/ (Optional for icons)

# Configuration
```javascript
/**!
 * Configuration:
 * @option {Boolean} nestedContainerEnabled Enable nested container or not
 * @option {Boolean} explicitSnippetEnabled Enable explicit snippet or not. When disable, there is only one button for adding. If add button is in content area or container, you can add component or containers. If add button is in sub-container, you just can add only component. When you add component in content area, please make sure you config `containerForQuickAddComponent` option
 * @option {String} containerForQuickAddComponent The container snippet which will be added automatically in content are when you adding a component. Note: component will be added in first container content of container
 * @option {String} btnAddContentText Text content for add content button. This available only when `explicitSippetEnabled` is `false`
 * @option {String} btnAddContainerText Text content for add container button
 * @option {String} btnAddSubContainerText Text content for add sub-container button
 * @option {String} btnAddComponentText Text content for add component button
 * @option {String} btnMoveContainerText Text content for move button of container
 * @option {String} btnMoveComponentText Text content for move button of component
 * @option {String} btnSettingContainerText Text content for setting button of container
 * @option {String} btnSettingComponentText Text content for setting button of component
 * @option {String} btnDuplicateContainerText Text content for duplicate button of container
 * @option {String} btnDuplicateComponentText Text content for duplicate button of component
 * @option {String} btnDeleteContainerText Text content for delete button of container
 * @option {String} btnDeleteComponentText Text content for delete button of component
 * @option {String|Function} defaultComponentType Default component type of component. If type of component does not exist in KEditor.components, will be used 'defaultComponentType' as type of this component. If is function, argument is component
 * @option {String} snippetsUrl Url to snippets file
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
 * @option {String} contentAreasWrapper The wrapper element for all contents inside iframe or new div which will contains content of textarea. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag, just leave it as blank
 * @option {Boolean} containerSettingEnabled Enable setting panel for container
 * @option {Function} containerSettingInitFunction Method will be called when initializing setting panel for container
 * @option {Function} containerSettingShowFunction Method will be called when setting panel for container is showed
 * @option {Function} containerSettingHideFunction Method will be called when setting panel for container is hidden
 * @option {Function} onReady Callback will be called after keditor instance is ready
 * @option {Function} onInitIframe Callback will be called after iframe and content areas wrapper inside it are created
 * @option {Function} onContentChanged Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed
 * @option {Function} onBeforeInitContentArea Callback will be called before initializing container
 * @option {Function} onInitContentArea Callback will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized
 * @option {Function} onBeforeInitContainer Callback will be called before initializing container
 * @option {Function} onInitContainer Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type="container-content"). By default, all first level sections under container content will be initialized
 * @option {Function} onBeforeContainerDeleted Callback will be called before container is deleted
 * @option {Function} onContainerDeleted Callback will be called after container and its components are already deleted
 * @option {Function} onContainerChanged Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated
 * @option {Function} onContainerDuplicated Callback will be called when a container is duplicated
 * @option {Function} onContainerSelected Callback will be called when a container is selected
 * @option {Function} onContainerSnippetAdded Callback will be called when a container snippet is added in a content area
 * @option {Function} onComponentReady Callback will be called after component is initialized. This callback is available or not is depend on component type handler.
 * @option {Function} onBeforeInitComponent Callback will be called before initializing component
 * @option {Function} onInitComponent Callback will be called when initializing component
 * @option {Function} onBeforeComponentDeleted Callback will be called before a component is deleted
 * @option {Function} onComponentDeleted Callback will be called after a component is deleted
 * @option {Function} onComponentChanged Callback will be called when content of a component is changed
 * @option {Function} onComponentDuplicated Callback will be called when a component is duplicated
 * @option {Function} onComponentSelected Callback will be called when a component is selected
 * @option {Function} onComponentSnippetAdded Callback will be called after a component snippet is added in a container
 * @option {Function} onBeforeDynamicContentLoad Callback will be called before loading dynamic content
 * @option {Function} onDynamicContentLoaded Callback will be called after dynamic content is loaded
 * @option {Function} onDynamicContentError Callback will be called if loading dynamic content is error, abort or timeout
 */
$.keditor.DEFAULTS = {
    nestedContainerEnabled: true,
    btnAddContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
    btnAddSubContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
    btnAddComponentText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-list-ul"></i>',
    btnMoveContainerText: '<i class="fa fa-sort"></i>',
    btnMoveComponentText: '<i class="fa fa-arrows"></i>',
    btnSettingContainerText: '<i class="fa fa-cog"></i>',
    btnSettingComponentText: '<i class="fa fa-cog"></i>',
    btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
    btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
    btnDeleteContainerText: '<i class="fa fa-times"></i>',
    btnDeleteComponentText: '<i class="fa fa-times"></i>',
    defaultComponentType: 'blank',
    snippetsUrl: 'snippets/snippets.html',
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

    onSnippetsLoaded: function (modal) {

    },
    onSnippetsError: function (modal, error) {

    },

    onInitIframe: function (iframe, iframeHead, iframeBody) {
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
    onContainerSnippetAdded: function (event, newContainer, selectedSnippet, contentArea) {
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
    onComponentSnippetAdded: function (event, newComponent, selectedSnippet, contentArea) {
    },

    onBeforeDynamicContentLoad: function (dynamicElement, component, contentArea) {
    },
    onDynamicContentLoaded: function (dynamicElement, response, status, xhr, contentArea) {
    },
    onDynamicContentError: function (dynamicElement, response, status, xhr, contentArea) {
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
/**
 * @param {Boolean} inArray Return your content in array format or just plain string
 */
KEditor.prototype.getContent(inArray);
```

Example:
```javascript
$('#target1').keditor('getContent'); // For only 1 content-area
$('#target2').keditor('getContent', true); // For more than 1 content-area and you want to get them separately
```

# How to set content of KEditor
```javascript
/**
 * @param {String} content HTML content
 * @param {String|jQuery} contentArea Can be selector or jQuery object of content area which you want to set new content. If you have only a content area, you can leave it blank
 */
KEditor.prototype.setContent(content, contentArea);
```

Example:
```javascript
$('#id').keditor('setContent', '<section><div class="row"><div class="col-md-6" data-type="container-content"><section data-type="component-text">New content</section></div></div></section>');
```

# Customize snippet
```html
<!-- Example for container snippet -->
<div data-type="container" data-preview="/path/to/preview/of/snippet" data-title="1 col">
    <div class="row">
        <div class="col-sm-12">
            <div data-type="container-content">
                <!-- Components will be dropped inside element which has attribute data-type="container-content" -->
            </div>
        </div>
    </div>
</div>

<!-- Example for component snippet. x is name of component type. Example: "component-text" -->
<div data-type="component-x" data-preview="/path/to/preview/of/snippet" data-title="Text block">
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

__**Note**__: `KEditor.getSettingComponent()` is method for getting which component is setting

# Dynamic content
If you want a element which has dynamic content, you can do like the following
```html
<div data-type="component-x" data-attribute-one="1" data-attribute-two="2" ...>
    <div data-dynamic-href="/path/to/dynamic/content"></div>
</div>
```
So the content of this `div` will be get from `/path/to/dynamic/content?attributeOne=1&attributeTwo=2`

Example:
```html
<!-- 
    Here is example of a component with type is "products" and have dynamic content inside.
    Full url for getting dynamic content is "/_components/ecommerce/productList?numProducts=4&store=store1&category=c1"
 -->
<div data-type="component-products" data-num-products='4' data-store="store1" data-category="c1">
    <div data-dynamic-href='/_components/ecommerce/productList'></div>
</div>
```

__**Note**__: 
 * All `data-*` attribute will be converted to camel-case. Example: `data-number-products` will be `numberProducts`, `data-numberProducts` will be `numberproducts`
 * All `data-*` attribute will be placed in div which contains `data-type="component-..."` attribute, not placed in div which contains `data-dynamic-href` attribute
 
# Support Touch Devices
Please use this plugin for enable Drag & Drop on Touch Devices: [jQuery UI Touch Punch](http://touchpunch.furf.com/)

# License
Please read at https://github.com/Kademi/keditor/blob/master/LICENSE.md
