import CLASS_NAMES from '../constants/classNames';

export default function (component) {
    let self = this;
    let clonedComponent = component.clone();
    let componentType = self.getComponentType(clonedComponent);
    let componentData = KEditor.components[componentType];
    let dataAttributes = self.getDataAttributes(clonedComponent, null, true);
    let content;
    
    // Handle iframe-wrapper
    let iframeWrapper = clonedComponent.find(`.${CLASS_NAMES.IFRAME_COVER_WRAPPER}`);
    if (iframeWrapper.length > 0) {
        iframeWrapper.find(`.${CLASS_NAMES.IFRAME_COVER}`).remove();
        
        let iframe = iframeWrapper.children('iframe');
        if (iframeWrapper.hasClass(CLASS_NAMES.IFRAME_COVER_WRAPPER_FAKE)) {
            iframe.unwrap();
        } else {
            iframeWrapper.removeClass(CLASS_NAMES.IFRAME_COVER_WRAPPER);
        }
    }
    
    if (typeof componentData.getContent === 'function') {
        content = componentData.getContent.call(componentData, clonedComponent, self);
    } else {
        let componentContent = clonedComponent.children(`.${CLASS_NAMES.COMPONENT_CONTENT}`);
        content = componentContent.html();
    }
    
    clonedComponent.html(content).find('[data-dynamic-href]').each(function () {
        $(this).html('');
    });
    
    return `<section ${dataAttributes.join(' ')}>${clonedComponent.html()}</section>`;
};
