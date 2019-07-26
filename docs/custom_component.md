# Custom component
There are 2 steps to add your custom component:
 1. Add a custom snippet in `examples/snippets/snippets.html`
 1. Add component handler file
 
## Add a custom snippet
The following snippet is for component with type is `x`.
```html
<div data-type="component-x" data-preview="/path/to/preview/of/snippet" data-keditor-title="Text block" data-keditor-categories="Text;Heading">
    <div class="page-header">
        <h1 style="margin-bottom: 30px; font-size: 50px;"><b class="text-uppercase">Cras justo odio</b> <small>Donec id elit non mi</small></h1>
        <p class="lead"><em>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</em></p>
    </div>
</div>
```

Details:
 * `data-type` should be `component-${name}`. Example: `component-x` for `x` component
 * `data-preview` is url of preview image for component
 * `data-keditor-title` is text title for component. Will be showed under preview image in snippet modal
 * `data-keditor-categories` is list of categories for component. Used for filter and search in snippet modal
 
 ## Add component handler file
 You need to do following steps to add your component handler file:
  1. Create a file inside `src/components/` folder
  2. Import your file in `src/components/index.js` file
  3. Add content for your file as following structure:
 
 ```javascript
 import KEditor from 'keditor';
 
 KEditor.components['x'] = {
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
      * Function will be called for getting content of component from method of KEditor `target.keditor('getContent')`
      * @param {jQuery} component This component is cloned from original component. So you can do anything with it, event deleted
      * @param {KEditor} keditor KEditor instance which is calling this function
      * @return {String}
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
     settingTitle: 'X component',
 
     /**
      * Initialize setting form of this type
      * @param {jQuery} form Form contains all setting of this type and is child of `div[id="keditor-setting-forms"]`
      * @param {KEditor} keditor KEditor instance which is calling this function
      */
     initSettingForm: function (form, keditor) {
 
     },
 
     /**
      * Show setting form for this type. This function will be called when user clicks on setting button of component when setting panel is hidden. You can fulfill form controls in this function.
      * @param {jQuery} form Form contains all setting of this type and is child of `div[id="keditor-setting-forms"]`
      * @param {jQuery} component Component will be applied setting
      * @param {KEditor} keditor KEditor instance which is calling this function
      */
     showSettingForm: function (form, component, keditor) {
 
     },
 
     /**
      * Hide setting form for this type. This function will be called when user clicks again on setting button of component when setting panel is showed. You can clear setting form in this function
      * @param {jQuery} form Form contains all setting of this type and is child of `div[id="keditor-setting-forms"]`
      * @param {KEditor} keditor KEditor instance which is calling this function
      */
     hideSettingForm: function (form, keditor) {
 
     }
 };
 ```
 
 __**Note**__: `KEditor.getSettingComponent()` is method for getting which component is setting
 
 ---
[⬅ Back to documentation list](../README.md#documentation)
