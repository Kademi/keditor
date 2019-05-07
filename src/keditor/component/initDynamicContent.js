import log from '../utils/log';

export default function (dynamicElement) {
    log('initDynamicContent', dynamicElement);
    
    let self = this;
    let options = self.options;
    let component = dynamicElement.closest('.keditor-component');
    let contentArea = dynamicElement.closest('.keditor-content-area');
    
    dynamicElement.attr('id', self.generateId('dynamic-element'));
    
    if (typeof options.onBeforeDynamicContentLoad === 'function') {
        options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
    }
    
    let dynamicHref = dynamicElement.attr('data-dynamic-href');
    let data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
    data = $.param(data);
    log(`Dynamic href: ${dynamicHref}, Data: ${data}`);
    
    return $.ajax({
        url: dynamicHref,
        data: data,
        type: 'GET',
        dataType: 'HTML',
        success: function (response, status, jqXHR) {
            log('Dynamic content is loaded', dynamicElement, response, status, jqXHR);
            dynamicElement.html(response);
            
            if (typeof options.onDynamicContentLoaded === 'function') {
                options.onDynamicContentLoaded.call(self, dynamicElement, jqXHR, contentArea);
            }
        },
        error: function (jqXHR, textStatus, errorThrown ) {
            log('Error when loading dynamic content', dynamicElement, jqXHR, textStatus, errorThrown );
            
            if (typeof options.onDynamicContentError === 'function') {
                options.onDynamicContentError.call(self, dynamicElement, jqXHR, contentArea);
            }
        }
    });
};
