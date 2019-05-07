# KEditor
KEditor is a jQuery plugin which provides a content editor with drag and drop snippets ([http://kademi.github.io/keditor/](http://kademi.github.io/keditor/))

## Shortcuts
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

# Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/ (Requires only draggable, droppable and sortable)
 * NiceScroll: http://areaaperta.com/nicescroll/ (Optional for scroll bar)
 * Bootstrap: http://getbootstrap.com/ (Optional for style)
 * FontAwesome: http://fontawesome.io/ (Optional for icons)

# Configuration
See [source code](./src/keditor/constants/defaults.js) for more details.

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
Please read at [here](./LICENSE.md)
