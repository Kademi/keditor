import CSS_CLASS from '../constants/cssClass';
import DEVICE_MODE from '../constants/deviceMode';

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
        case DEVICE_MODE.MOBILE:
            width = options.widthMobile;
            break;
            
        case DEVICE_MODE.TABLET:
            width = options.widthTablet;
            break;
            
        case DEVICE_MODE.LAPTOP:
            width = options.widthLaptop;
            break;
            
        case DEVICE_MODE.DESKTOP:
            minWidth = options.minWidthDesktop;
            break;
        
        default:
            // Do nothing
    }
    
    self.deviceMode = deviceMode;
    iframeWidthSwitcher.css('width', width);
    iframeWidthSwitcher.css('min-width', minWidth);
};
