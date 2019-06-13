import CLASS_NAMES from '../constants/classNames';

export default function (dynamicElement) {
    let self = this;
    let options = self.options;
    let component = dynamicElement.closest('[data-type^=component]');
    let contentArea = dynamicElement.closest(`.${CLASS_NAMES.CONTENT_AREA}`);
    
    dynamicElement.attr('id', self.generateId());
    
    if (typeof options.onBeforeDynamicContentLoad === 'function') {
        options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
    }
    
    let dynamicHref = dynamicElement.attr('data-dynamic-href');
    let data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
    data = $.param(data);
    
    return $.ajax({
        url: dynamicHref,
        data: data,
        type: 'GET',
        dataType: 'HTML',
        success: function (response, status, jqXHR) {
            dynamicElement.html(response);
            
            if (typeof options.onDynamicContentLoaded === 'function') {
                options.onDynamicContentLoaded.call(self, dynamicElement, jqXHR, contentArea);
            }
        },
        error: function (jqXHR, textStatus, errorThrown ) {
            if (typeof options.onDynamicContentError === 'function') {
                options.onDynamicContentError.call(self, dynamicElement, jqXHR, contentArea);
            }
        }
    });
};
