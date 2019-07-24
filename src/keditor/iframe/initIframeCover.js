import CSS_CLASS from '../constants/cssClass';

export default function (iframe, wrapper) {
    if (!wrapper) {
        iframe.wrap(`<div class="${CSS_CLASS.IFRAME_COVER_WRAPPER_FAKE}"></div>`);
        wrapper = iframe.parent();
    }
    
    wrapper.addClass(`${CSS_CLASS.IFRAME_COVER_WRAPPER}`);
    
    let cover = $(`<div class="${CSS_CLASS.IFRAME_COVER}"></div>`);
    wrapper.prepend(cover);
    
    wrapper.on('mouseleave', function () {
        wrapper.removeClass(`${CSS_CLASS.IFRAME_COVER_HIDDEN}`);
    });
    
    cover.on('dblclick', function (e) {
        e.preventDefault();
        
        wrapper.addClass(`${CSS_CLASS.IFRAME_COVER_HIDDEN}`);
    });
};
