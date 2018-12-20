import log from '../utils/log';

export default function (iframe, wrapper) {
    if (!wrapper) {
        iframe.wrap('<div class="keditor-iframe-wrapper-fake"></div>');
        wrapper = iframe.parent();
    }
    
    wrapper.addClass('keditor-iframe-wrapper');
    
    let cover = $('<div class="keditor-iframe-cover"></div>');
    wrapper.prepend(cover);
    
    wrapper.on('mouseleave', function () {
        wrapper.removeClass('hidden-cover');
    });
    
    cover.on('dblclick', function (e) {
        e.preventDefault();
        
        wrapper.addClass('hidden-cover');
    });
};
