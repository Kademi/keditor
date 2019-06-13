import CLASS_NAMES from '../constants/classNames';

export default function (iframe, wrapper) {
    if (!wrapper) {
        iframe.wrap(`<div class="${CLASS_NAMES.IFRAME_COVER_WRAPPER_FAKE}"></div>`);
        wrapper = iframe.parent();
    }
    
    wrapper.addClass(`${CLASS_NAMES.IFRAME_COVER_WRAPPER}`);
    
    let cover = $(`<div class="${CLASS_NAMES.IFRAME_COVER}"></div>`);
    wrapper.prepend(cover);
    
    wrapper.on('mouseleave', function () {
        wrapper.removeClass(`${CLASS_NAMES.IFRAME_COVER_HIDDEN}`);
    });
    
    cover.on('dblclick', function (e) {
        e.preventDefault();
        
        wrapper.addClass(`${CLASS_NAMES.IFRAME_COVER_HIDDEN}`);
    });
};
