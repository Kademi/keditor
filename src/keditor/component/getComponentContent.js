import CSS_CLASS from '../constants/cssClass';
import getComponentType from './getComponentType';
import getDataAttributes from '../utils/getDataAttributes';

export default function (component) {
    let self = this;
    let clonedComponent = component.clone();
    let componentType = getComponentType.call(self, clonedComponent);
    let componentData = KEditor.components[componentType];
    let dataAttributes = getDataAttributes(clonedComponent, null, true);
    let content;
    
    // Handle iframe-wrapper
    let iframeWrapper = clonedComponent.find(`.${CSS_CLASS.IFRAME_COVER_WRAPPER}`);
    if (iframeWrapper.length > 0) {
        iframeWrapper.find(`.${CSS_CLASS.IFRAME_COVER}`).remove();
        
        let iframe = iframeWrapper.children('iframe');
        if (iframeWrapper.hasClass(CSS_CLASS.IFRAME_COVER_WRAPPER_FAKE)) {
            iframe.unwrap();
        } else {
            iframeWrapper.removeClass(CSS_CLASS.IFRAME_COVER_WRAPPER);
        }
    }
    
    if (typeof componentData.getContent === 'function') {
        content = componentData.getContent.call(componentData, clonedComponent, self);
    } else {
        let componentContent = clonedComponent.children(`.${CSS_CLASS.COMPONENT_CONTENT}`);
        content = componentContent.html();
    }
    
    clonedComponent.html(content).find('[data-dynamic-href]').each(function () {
        $(this).html('');
    });
    
    return `<section ${dataAttributes.join(' ')}>${clonedComponent.html()}</section>`;
};
