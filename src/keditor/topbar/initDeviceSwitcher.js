import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';

export default function () {
    let self = this;
    let topbarCenter = self.topbarCenter;
    let options = self.options;
    
    let btnMobile = $(`
        <a href="javascript:void(0);" title="View on mobile" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_MOBILE}</a>
    `);
    btnMobile.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', options.widthMobile);
        btnMobile.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnTablet = $(`
        <a href="javascript:void(0);" title="View on tablet" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_TABLET}</a>
    `);
    btnTablet.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', options.widthTablet);
        btnTablet.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnDesktop = $(`
        <a href="javascript:void(0);" title="View on desktop" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.DEVICE_DESKTOP}</a>
    `);
    btnDesktop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', '');
        btnDesktop.addClass(CLASS_NAMES.STATE_ACTIVE);
    }).trigger('click');
    
    topbarCenter.append(btnMobile);
    topbarCenter.append(btnTablet);
    topbarCenter.append(btnDesktop);
};
