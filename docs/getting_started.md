# Getting Started
Get started with KEditor, the jQuery plugin which provides a content editor with drag n drop, configurable contents.

## Dependencies
 * [jQuery](http://jquery.com/) for DOM stuffs such as traversing, manipulation, utilities, etc... 
 * [jQuery UI](https://jqueryui.com/) for sortable and resizable stuffs 
 * [jQuery Fullscreen](https://github.com/private-face/jquery.fullscreen) for fullscreen mode
 * [FontAwesome](http://fontawesome.io/) for icons
 * [Bootstrap](http://getbootstrap.com/) for content styles (optional)
 
## Usage
There are 2 ways to initialize KEditor:
 1. Via jQuery plugin. Examples:
    ```javascript
    $('.selector').keditor({
        // options
    });
    ```
    
 1. Via `init` method. Examples:
    ```javascript
    KEditor.init($('.selector'), {
        // options
    });
    ```
 
**Note**: For options, please view at [here](./configuration.md) for all configuration options
 
## Content structure in KEditor
```
keditor
├───content-area
│    ├───container
│    │    ├───container-content
│    │    │    ├───component
│    │    │    ├───sub-container
│    │    │    │   │───sub-container-content
│    │    │    │   │   │───component
│    │    │    │   │   │───component
│    │    │    │   │   └───...
│    │    │    │   └───...
│    │    │    └───...
│    │    └───...
│    └───...
└───...
```

Details:
 1. Each `keditor` will have `content-area`(s) as children
 1. Each `content-area` will have `container`(s) as children
 1. Each `container` will have `container-content`(s) as children
 1. Each `container-content` will have `sub-container`(s) or `component` as children
 1. Each `sub-container` will have `sub-container-content`(s) as children
 1. Each `sub-container-content` will have `component` as children


## Content iframe
All content of KEditor will be editing inside `iframe`. Reason for it:
 * Independent styles with editor controls
 * Can change devices width when editing and previewing

### Stylesheet for iframe
There are 2 ways to specify stylesheet for iframe:
 1. Via `data-type=keditor-style`. KEditor will use `href` or `data-href` for external styles and `innerHTML` for internal styles. Examples:
    ```html
    <!-- This style will be applied for both current document and iframe -->
    <link rel="stylesheet" data-type="keditor-style" type="text/css" href="/path/to/first/css" />

    <!-- This style will be applied for both current document and iframe -->
    <style data-type="keditor-style" type="text/css">
        /* CSS rules */
    </style>

    <!-- This style will not impact to current document -->
    <div data-type="keditor-style" data-href="/path/to/second/css"></div>

    <!-- This style will not impact to current document -->
    <script data-type="keditor-style" data-href="/path/to/third/css"></script>
    
    <!-- This style will not impact to current document -->
    <script data-type="keditor-style">
        // CSS rules
    </script>
    ```

 1. Via `contentStyles` option. Examples:
    ```javascript
    $('.selector').keditor({
        contentStyles: [
            {
                id: 'firstStyle',
                href: '/path/to/first/css'
            }, {
                id: 'secondStyle',
                content: 'a { color: red; }'
            }
        ]
    });
    ``` 

 ---
[⬅ Back to documentation list](../README.md#documentation)
