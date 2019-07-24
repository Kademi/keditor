import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';
import DEVICE from '../constants/device';

export default function (deviceMode, trigger) {
    let self = this;
    let options = self.options;
    let topbarCenter = self.topbarCenter;
    let iframeWidthSwitcher = self.iframe.parent();
    let width = '';
    let minWidth = '';
    
    topbarCenter.find(`.${CSS_CLASS.STATE_ACTIVE}`).removeClass(CSS_CLASS.STATE_ACTIVE);
    trigger.addClass(CSS_CLASS.STATE_ACTIVE);
    
    switch (deviceMode) {
        case DEVICE.MOBILE:
            width = options.widthMobile;
            break;
            
        case DEVICE.TABLET:
            width = options.widthTablet;
            break;
            
        case DEVICE.LAPTOP:
            width = options.widthLaptop;
            break;
            
        case DEVICE.DESKTOP:
            minWidth = options.minWidthDesktop;
            break;
        
        default:
            // Do nothing
    }
    
    self.deviceMode = deviceMode;
    iframeWidthSwitcher.css('width', width);
    iframeWidthSwitcher.css('min-width', minWidth);
};
