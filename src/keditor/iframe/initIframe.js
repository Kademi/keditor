import CLASS_NAMES from '../constants/classNames';
import initIframeActions from './initIframeActions';
import initContentAreas from '../contentArea/initContentAreas';

export default function () {
    let self = this;
    let element = self.element;
    let options = self.options;
    let wrapperId = self.generateId();
    let wrapper = self.wrapper = $(`
        <div id="${wrapperId}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.WRAPPER}">
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.IFRAME_WRAPPER}">
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.IFRAME_WIDTH_SWITCHER}">
                    <iframe class="${CLASS_NAMES.UI} ${CLASS_NAMES.IFRAME}"></iframe>
                </div>
            </div>
        </div>
    `);
    
    element.addClass(CLASS_NAMES.UI_HIDDEN);
    element.after(wrapper);
    
    let iframe = self.iframe = wrapper.find(`.${CLASS_NAMES.IFRAME}`);
    self.iframeDoc = iframe.contents();
    
    // Fix issue Firefox can't render content inside iframe
    // ======================================================
    self.iframeDoc.get(0).open();
    self.iframeDoc.get(0).close();
    // ======================================================
    
    self.iframeWindow = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
    self.iframeHead = self.iframeDoc.find('head');
    self.iframeBody = self.iframeDoc.find('body');
    
    // Generate head content for iframe
    let styles = '';
    $('[data-type="keditor-style"]').each(function () {
        let style = $(this);
        let idStr = style.attr('id') || '';
        let href = style.attr('href') || style.attr('data-href') || '';
        
        if (href) {
            styles += `<link rel="stylesheet" type="text/css" href="${href}" ${idStr} />\n`;
        } else {
            styles += `<style type="text/css" ${idStr}>${style.html()}</style>\n`;
        }
    });
    $.isArray(options.contentStyles) && $.each(options.contentStyles, function (i, style) {
        let idStr = style.id || '';
        
        if (style.href) {
            styles += `<link rel="stylesheet" type="text/css" href="${style.href}" ${idStr} />\n`;
        } else {
            styles += `<style type="text/css" ${idStr}>${style.content}</style>\n`;
        }
    });
    self.iframeHead.append(styles);
    
    // Generate body content for iframe
    self.contentAreasWrapper = $(options.contentAreasWrapper || '<div />');
    self.contentAreasWrapper.attr('class', `${CLASS_NAMES.UI} ${CLASS_NAMES.CONTENT_AREAS_WRAPPER}`);
    self.contentAreasWrapper.html(element.val() || element.html() || '');
    if (!self.contentAreasWrapper.attr('id')) {
        self.contentAreasWrapper.attr('id', self.generateId());
    }
    self.iframeBody.append(self.contentAreasWrapper).addClass(CLASS_NAMES.IFRAME_BODY);
    
    if (typeof options.onInitIframe === 'function') {
        options.onInitIframe.call(self, self.iframe, self.iframeHead, self.iframeBody);
    }
    
    initContentAreas.call(self);
    initIframeActions.call(self);
};
