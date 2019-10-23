import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';
import setFullScreenMode from './setFullscreenMode';

export default function () {
    let self = this;
    let options = self.options;
    let btnFullscreen = self.btnFullscreen = $(`<a href="javascript:void(0);" title="${options.locale.fullscreenOff}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.FULLSCREEN_OFF}</a>`);
    btnFullscreen.on('click', function (e) {
        e.preventDefault();
    
        setFullScreenMode.call(self, !self.isFullscreen);
    });
    
    document.addEventListener('fullscreenchange', function () {
        let isOn = !!document.fullscreenElement;
        
        self.isFullScreen = isOn;
        btnFullscreen.html(isOn ? ICON.FULLSCREEN_ON : ICON.FULLSCREEN_OFF);
        btnFullscreen.attr('title', isOn ? options.locale.fullscreenOn : options.locale.fullscreenOff);
    });
    
    self.topbarRight.append(btnFullscreen);
}
