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
var keditor = $('.selector').data('keditor'); // Get KEditor instance via `data` attribute
keditor.methodName(param1, param2, ...);
```

## log (static)
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## error (static)
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## init (static)
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## loadDynamicContent (static)
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## getSettingContainer
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## getSettingComponent
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## generateId
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## getDataAttributes
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## initIframeCover
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## initModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## openModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## closeModal
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## showSettingPanel
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## hideSettingPanel
```javascript
/**
 * @param 
 */
KEditor.getContent();
```

## getContent
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

## setContent
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

## destroy
Removes the KEditor functionality completely. This will return the element back to its pre-init state with latest content

```javascript
$('.selector').keditor('destroy');
```
 
## addSnippet
Add snippet programmatically

```javascript
/**
 * @param 
 */
$('.selector').keditor('destroy');
```

 ---
[⬅ Back to documentation list](./index.md)
