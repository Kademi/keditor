import CSS_CLASS from '../constants/cssClass';
import getDataAttributes from '../utils/getDataAttributes';
import generateId from '../utils/generateId';

export default function (dynamicElement) {
    let self = this;
    let options = self.options;
    let component = dynamicElement.closest(`[data-type^="component"]`);
    let contentArea = dynamicElement.closest(`.${CSS_CLASS.CONTENT_AREA}`);
    
    !dynamicElement.attr('id') && dynamicElement.attr('id', generateId());
    
    if (typeof options.onBeforeDynamicContentLoad === 'function') {
        options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
    }
    
    let dynamicHref = dynamicElement.attr('data-dynamic-href');
    let data = getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
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
