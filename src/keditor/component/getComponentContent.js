export default function (component) {
    let self = this;
    let clonedComponent = component.clone();
    let componentType = self.getComponentType(clonedComponent);
    let componentData = KEditor.components[componentType];
    let dataAttributes = self.getDataAttributes(clonedComponent, null, true);
    let content;
    
    // Handle iframe-wrapper
    let iframeWrapper = component.find('.keditor-iframe-wrapper');
    if (iframeWrapper.length > 0) {
        iframeWrapper.find('.keditor-iframe-cover').remove();
        
        let iframe = iframeWrapper.children('iframe');
        if (iframeWrapper.hasClass('keditor-iframe-wrapper-fake')) {
            iframe.unwrap();
        } else {
            iframeWrapper.removeClass('keditor-iframe-wrapper');
        }
    }
    
    if (typeof componentData.getContent === 'function') {
        content = componentData.getContent.call(componentData, clonedComponent, self);
    } else {
        let componentContent = clonedComponent.children('.keditor-component-content');
        content = componentContent.html();
    }
    
    clonedComponent.html(content).find('[data-dynamic-href]').each(function () {
        $(this).html('');
    });
    
    return `<section ${dataAttributes.join(' ')}>${clonedComponent.html()}</section>`;
};
