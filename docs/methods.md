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
 * Log utility of KEditor with `[ KEditor ] ` as prefix
 * @param {Any} Values you want to log
 */
KEditor.log(value1, value2, ...);
```

**Note**: You can see the log when `window.KEDITOR_DEBUG = true`

### error
```javascript
/**
 * Throw error with `[ KEditor ] ` as prefix for message
 * @param {String} msg Error message
 */
KEditor.error(msg);
```

### init
```javascript
/**
 * Initialize KEditor instance
 * @param {jQuery} target Element which you want to initialize as KEditor
 * @param {Object} options Configuration of KEditor instance. See https://github.com/Kademi/keditor/blob/master/docs/configuration.md for more details
 */
KEditor.init(target, options);
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
 * @param 
 */
KEditor.getContent();
```

### getSettingComponent
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### generateId
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### getDataAttributes
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### initIframeCover
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### initModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### openModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### closeModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### showSettingPanel
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### hideSettingPanel
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

### getContent
```javascript
/**
 * @param {Boolean} inArray Return your content in array format or just plain string
 */
KEditor.getContent(inArray);
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
KEditor.setContent(content, contentArea);
```

Example:
```javascript
$('#id').keditor('setContent', '<section><div class="row"><div class="col-md-6" data-type="container-content"><section data-type="component-text">New content</section></div></div></section>');
```

### destroy
Removes the KEditor functionality completely. This will return the element back to its pre-init state with latest content

```javascript
$('.selector').keditor('destroy');
```
 
### addSnippet
Add snippet programmatically

```javascript
/**
 * @param 
 */
$('.selector').keditor('destroy');
```

 ---
[⬅ Back to documentation list](./index.md)
