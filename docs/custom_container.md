# Custom container
You need to add a custom snippet in `examples/snippets/snippets.html` as following:

```html
<div data-type="container" data-preview="/path/to/preview/of/snippet" data-keditor-title="1 col" data-keditor-categories="Bootstrap column">
    <div class="row">
        <div class="col-sm-12">
            <div data-type="container-content">
                <!-- Components will be dropped inside element which has attribute `data-type="container-content"` -->
            </div>
        </div>
    </div>
</div>
```

Details:
 * `data-type` must be `container`
 * `data-preview` is url of preview image for container
 * `data-keditor-title` is text title for container. Will be showed under preview image in snippet modal
 * `data-keditor-categories` is list of categories for container. Used for filter and search in snippet modal
 * You need at least one element which has `data-type="container-content"` to add components inside your container
 
 ---
[⬅ Back to documentation list](../README.md#documentation)
