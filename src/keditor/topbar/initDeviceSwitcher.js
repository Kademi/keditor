import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';

export default function () {
    let self = this;
    let options = self.options;
    let topbarCenter = self.topbarCenter;
    let iframeWidthSwitcher = self.iframe.parent();
    
    let btnMobile = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnMobile}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_MOBILE}</a>
    `);
    btnMobile.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthMobile);
        iframeWidthSwitcher.css('min-width', '');
        btnMobile.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnTablet = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnTablet}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_TABLET}</a>
    `);
    btnTablet.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthTablet);
        iframeWidthSwitcher.css('min-width', '');
        btnTablet.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnLaptop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnLaptop}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_LAPTOP}</a>
    `);
    btnLaptop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', options.widthLaptop);
        iframeWidthSwitcher.css('min-width', '');
        btnLaptop.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnDesktop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnDesktop}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_DESKTOP}</a>
    `);
    btnDesktop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        iframeWidthSwitcher.css('width', '');
        iframeWidthSwitcher.css('min-width', options.minWidthDesktop);
        btnDesktop.addClass(CLASS_NAMES.STATE_ACTIVE);
    }).trigger('click');
    
    topbarCenter.append(btnMobile);
    topbarCenter.append(btnTablet);
    topbarCenter.append(btnLaptop);
    topbarCenter.append(btnDesktop);
};
