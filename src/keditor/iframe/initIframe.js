import log from '../utils/log';

export default function () {
    let self = this;
    let options = self.options;
    let element = self.element;
    let originalContent = element.is('textarea') ? element.val() : element.html();
    let wrapper = self.iframeWrapper = $('<div class="keditor-ui keditor-iframe-wrapper"></div>');
    let iframe = self.iframe = $('<iframe class="keditor-ui keditor-iframe"></iframe>');
    
    element.after(wrapper);
    wrapper.attr('id', self.generateId('iframe-wrapper')).append(iframe);
    element.addClass('keditor-hidden-element');
    
    let iframeDoc = self.iframeDoc = iframe.contents();
    
    // Fix issue Firefox can't render content inside iframe
    // ======================================================
    iframeDoc.get(0).open();
    iframeDoc.get(0).close();
    // ======================================================
    
    self.window = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
    let iframeHead = self.iframeHead = iframeDoc.find('head');
    let iframeBody = self.iframeBody = self.body = iframeDoc.find('body');
    
    log('Adding styles to iframe...');
    let styles = '';
    $('[data-type="keditor-style"]').each(function () {
        let style = $(this);
        let href = style.attr('href') || style.attr('data-href') || '';
        
        if (href) {
            styles += `<link rel="stylesheet" type="text/css" href="${href}" />\n`;
        } else {
            styles += `<style type="text/css">${style.html()}</style>\n`;
        }
    });
    
    if (options.contentStyles && $.isArray(options.contentStyles)) {
        $.each(options.contentStyles, function (i, style) {
            let idStr = '';
            if (style.id) {
                idStr = ` id="${style.id}" `;
            }
            
            if (style.href) {
                styles += `<link rel="stylesheet" type="text/css" href="${style.href}" ${idStr} />\n`;
            } else {
                styles += `<style type="text/css" ${idStr}>${style.content}</style>\n`;
            }
        });
    }
    
    iframeHead.append(styles);
    
    log('Adding original content to iframe...');
    let contentAreasWrapper = self.generateContentAreasWrapper(originalContent);
    iframeBody.append(contentAreasWrapper);
    self.contentAreasWrapper = contentAreasWrapper;
    
    if (typeof options.onInitIframe === 'function') {
        options.onInitIframe.call(self, iframe, iframeHead, iframeBody);
    }
};
