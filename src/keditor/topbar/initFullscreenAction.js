import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';
import 'jquery.fullscreen';

export default function () {
    let self = this;
    let btnFullscreen = $(`<a href="javascript:void(0);" title="${options.locale.fullscreenOff}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.FULLSCREEN_OFF}</a>`);
    btnFullscreen.on('click', function (e) {
        e.preventDefault();
        
        $.fullscreen.isFullScreen() ? $.fullscreen.exit() : self.wrapper.fullscreen();
    });
    $(document).on('fscreenchange', function (e, isFullScreen) {
        btnFullscreen.html(isFullScreen ? ICONS.FULLSCREEN_ON : ICONS.FULLSCREEN_OFF);
        btnFullscreen.attr('title', isFullScreen ? options.locale.fullscreenOn : options.locale.fullscreenOff);
    });
    
    this.topbarRight.append(btnFullscreen);
}
