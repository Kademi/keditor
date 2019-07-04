import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';

export default function () {
    let self = this;
    let options = self.options;
    let topbarCenter = self.topbarCenter;
    let iframeWidthSwitcher = self.iframe.parent();
    
    let btnMobile = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnMobile}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_MOBILE}</a>
    `);
    btnMobile.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthMobile);
        iframeWidthSwitcher.css('min-width', '');
        btnMobile.addClass(CSS_CLASS.STATE_ACTIVE);
    });
    
    let btnTablet = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnTablet}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_TABLET}</a>
    `);
    btnTablet.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthTablet);
        iframeWidthSwitcher.css('min-width', '');
        btnTablet.addClass(CSS_CLASS.STATE_ACTIVE);
    });
    
    let btnLaptop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnLaptop}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_LAPTOP}</a>
    `);
    btnLaptop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthLaptop);
        iframeWidthSwitcher.css('min-width', '');
        btnLaptop.addClass(CSS_CLASS.STATE_ACTIVE);
    });
    
    let btnDesktop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnDesktop}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_DESKTOP}</a>
    `);
    btnDesktop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', '');
        iframeWidthSwitcher.css('min-width', options.minWidthDesktop);
        btnDesktop.addClass(CSS_CLASS.STATE_ACTIVE);
    }).trigger('click');
    
    topbarCenter.append(btnMobile);
    topbarCenter.append(btnTablet);
    topbarCenter.append(btnLaptop);
    topbarCenter.append(btnDesktop);
};
