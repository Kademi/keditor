# Methods
There are many ways to call method

```javascript
$('.selector').keditor('methodName', param1, param2, ...);
```

or

```javascript
var keditor = $('.selector').keditor(options); // Get KEditor instance when initializing
keditor.methodName(param1, param2, ...);
```

or

```javascript
$('.selector').keditor(options);
var keditor = $('.selector').data('keditor'); // Get KEditor instance via `data` attribute
keditor.methodName(param1, param2, ...);
```

## Static methods

### log
```javascript
/**
 * Log utility of KEditor with `[ KEditor ] ` as prefix. You can see the log when `window.KEDITOR_DEBUG = true`
 * @param {*} args Values you want to log
 */
KEditor.log(...args);
```

### error
```javascript
/**
 * Throw error with `[ KEditor ] ` as prefix for message
 * @param {String} message Error message
 */
KEditor.error(message);
```

### init
```javascript
/**
 * Initialize KEditor instance
 * @param {jQuery} target Element which you want to initialize as KEditor
 * @param {Object} config Configuration of KEditor instance. See https://github.com/Kademi/keditor/blob/master/docs/configuration.md for more details
 */
KEditor.init(target, config);
```

### loadDynamicContent
```javascript
/**
 * Load dynamic content for elements which have `data-dynamic-href` attribute
 * @param {jQuery} dynamicElement jQuery object of element(s) which you want to load dynamic content. Element(s) must have `data-dynamic-href` attribute
 * @param {Object} options Callbacks include `onSuccess` and `onError` with arguments are `dynamicElement` and `jqXHR`
 */
KEditor.loadDynamicContent(dynamicElement, options);
```

## Instance methods

### getSettingContainer
```javascript
/**
 * Get container which is setting-up
 * @return {jQuery} 
 */
KEditor.prototype.getSettingContainer();
```

### getSettingComponent
```javascript
/**
 * Get component which is setting-up
 * @return {jQuery} 
 */
KEditor.prototype.getSettingComponent();
```

### generateId
```javascript
/**
 * Generate a random Id
 * @return {String} 
 */
KEditor.prototype.generateId();
```

### getDataAttributes
```javascript
/**
 * Get list of `data-*` attributes
 * @param {jQuery} target jQuery of elements which you want to get list of `data-*` attributes
 * @param {Array<String>} ignoreAttributes Array of attributes you want to ignore
 * @param {Boolean} isArray Return list as Array or Object
 * @return {Array|Object}
 */
KEditor.prototype.getDataAttributes(target, ignoreAttributes, isArray);
```

### initIframeCover
```javascript
/**
 * Init iframe cover which avoid iframe's z-index issue in IE browsers
 * @param {jQuery} iframe Iframe which you want to add cover for
 * @param {jQuery} wrapper Wrapper of iframe
 */
KEditor.prototype.initIframeCover(iframe, wrapper);
```

### initModal
```javascript
/**
 * Init KEditor modal
 * @param {String} modalId Id of modal
 * @param {Boolean} hasFooter Modal has footer or not
 * @param {Boolean} disableOriginEvents If you want to handle close button by yourself, just set it as `false`
 */
KEditor.prototype.initModal(modalId, hasFooter, disableOriginEvents);
```

### showModal
```javascript
/**
 * Show a KEditor modal
 * @param {jQuery} modal Modal you want to show
 */
KEditor.prototype.showModal(modal);
```

### hideModal
```javascript
/**
 * Hide a KEditor modal
 * @param {jQuery} modal Modal you want to show
 */
KEditor.prototype.hideModal(modal);
```

### getContent
```javascript
/**
 * @param {Boolean} inArray Return your content in array format or just plain string
 * @return {String|Array<String>}
 */
KEditor.prototype.getContent(inArray);
```

Example:
```javascript
$('#target1').keditor('getContent'); // For only 1 content-area
$('#target2').keditor('getContent', true); // For more than 1 content-area and you want to get them separately
```

### setContent
```javascript
/**
 * @param {String} content HTML content
 * @param {String|jQuery} contentArea Can be selector or jQuery object of content area which you want to set new content. If you have only a content area, you can leave it blank
 */
KEditor.prototype.setContent(content, contentArea);
```

Example:
```javascript
$('#id').keditor('setContent', `
    <div class="row">
        <div class="col-md-6" data-type="container-content">
            <div data-type="component-text">New content</div>
        </div>
    </div>
`);
```

### destroy
```javascript
/**
 * Removes the KEditor functionality completely. This will return the element back to its pre-init state with latest content
 */
KEditor.prototype.destroy();
```
 
### addSnippet
```javascript
/**
 * Add snippet programmatically 
 * @param {String} type Type of snippet. Can be `container` or `component-*`
 * @param {String} title Text title of snippet
 * @param {String} previewUrl Url to preview image of snippet
 * @param {String} categories Categories list of snippet, separated by `snippetsCategoriesSeparator` option
 * @param {String} content HTML content of snippet
 * @param {Array<String>} extraAttrs If you component contains dynamic content, you will need this parameter to add `data-*` attribute to your component
 */
KEditor.prototype.addSnippet(type, title, previewUrl, categories, content, dataAttributes);
```

### initDynamicContent
```javascript
/**
 * Load dynamic content for elements which have `data-dynamic-href` attribute
 * @param {jQuery} dynamicElement jQuery object of element(s) which you want to load dynamic content. Element(s) must have `data-dynamic-href` attribute
 * @return {jqXHR}
 */
KEditor.prototype.initDynamicContent(dynamicElement);
```

 ---
[⬅ Back to documentation list](../README.md#documentation)
