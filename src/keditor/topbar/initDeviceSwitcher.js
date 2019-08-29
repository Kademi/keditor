import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';
import DEVICE_MODE from '../constants/deviceMode';
import switchDevice from './switchDevice';

export default function () {
    let self = this;
    let options = self.options;
    let topbarCenter = self.topbarCenter;
    
    let btnMobile = self.btnMobile = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnMobile}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_MOBILE}</a>
    `);
    btnMobile.on('click', function (e) {
        e.preventDefault();
        switchDevice.call(self, DEVICE_MODE.MOBILE, btnMobile);
    });
    
    let btnTablet = self.btnTablet = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnTablet}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_TABLET}</a>
    `);
    btnTablet.on('click', function (e) {
        e.preventDefault();
        switchDevice.call(self, DEVICE_MODE.TABLET, btnTablet);
    });
    
    let btnLaptop = self.btnLaptop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnLaptop}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_LAPTOP}</a>
    `);
    btnLaptop.on('click', function (e) {
        e.preventDefault();
        switchDevice.call(self, DEVICE_MODE.LAPTOP, btnLaptop);
    });
    
    let btnDesktop = self.btnDesktop = $(`
        <a href="javascript:void(0);" title="${options.locale.viewOnDesktop}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.DEVICE_DESKTOP}</a>
    `);
    btnDesktop.on('click', function (e) {
        e.preventDefault();
        switchDevice.call(self, DEVICE_MODE.DESKTOP, btnDesktop);
    }).trigger('click');
    
    topbarCenter.append(btnMobile);
    topbarCenter.append(btnTablet);
    topbarCenter.append(btnLaptop);
    topbarCenter.append(btnDesktop);
};
