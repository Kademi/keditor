# Dynamic content
If you want a component which has dynamic content, you can do as the following:
```html
<div data-type="component-x" data-attribute-one="1" data-attribute-two="2" ...>
    <h3>Bill details:</h1>
    <div data-dynamic-href="/path/to/dynamic/content"></div>
</div>
```

Details:
 * Element with `data-dynamic-href` will load content from `/path/to/dynamic/content` url with params are all `data-*` attributes. In above example, the final url for loading content is `/path/to/dynamic/content?data-attribute-one=1&data-attribute-two=2`
 * All `data-*` attributes must be placed in component element
 
 ## Rendering dynamic content
 There are 2 ways to render dynamic content in `VIEW MODE` (not in KEditor aka `EDIT MODE`):
  1. Server-side: You can add code in your server-side for detecting dynamic component with `data-dynamic-href` attribute and generate content for it
  1. Client-side: KEditor provides a static method to load dynamic content is `KEditor.loadDynamicElement()`. Please read at [here](./methods.md) for more details of this method
  

 ---
[⬅ Back to documentation list](../README.md#documentation)
