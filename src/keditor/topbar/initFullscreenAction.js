import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';
import 'jquery.fullscreen';

export default function () {
    let self = this;
    let options = self.options;
    let btnFullscreen = $(`<a href="javascript:void(0);" title="${options.locale.fullscreenOff}" class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_BUTTON}">${ICON.FULLSCREEN_OFF}</a>`);
    btnFullscreen.on('click', function (e) {
        e.preventDefault();
        
        $.fullscreen.isFullScreen() ? $.fullscreen.exit() : self.wrapper.fullscreen();
    });
    $(document).on('fscreenchange', function (e, isFullScreen) {
        btnFullscreen.html(isFullScreen ? ICON.FULLSCREEN_ON : ICON.FULLSCREEN_OFF);
        btnFullscreen.attr('title', isFullScreen ? options.locale.fullscreenOn : options.locale.fullscreenOff);
    });
    
    this.topbarRight.append(btnFullscreen);
}
