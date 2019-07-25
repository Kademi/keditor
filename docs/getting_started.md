# Getting Started
Get started with KEditor, the jQuery plugin which provides a content editor with drag and drop snippets.

## Dependencies
 * jQuery: http://jquery.com/
 * jQuery UI: https://jqueryui.com/ (Requires sortable and resizable) 
 * jQuery Fullscreen: https://github.com/private-face/jquery.fullscreen
 * FontAwesome: http://fontawesome.io/
 * Bootstrap: http://getbootstrap.com/ (Optional for snippets' style)


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

 ---
[⬅ Back to documentation list](./index.md)
