import CLASS_NAMES from '../constants/classNames';
import 'jquery.fullscreen';

export default function () {
    let self = this;
    let btnFullscreen = $(`<a href="javascript:void(0);" title="Fullscreen OFF" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-expand"></i></a>`);
    btnFullscreen.on('click', function (e) {
        e.preventDefault();
        
        $.fullscreen.isFullScreen() ? $.fullscreen.exit() : self.wrapper.fullscreen();
    });
    $(document).on('fscreenchange', function (e, isFullScreen) {
        btnFullscreen.find('i').attr('class', isFullScreen ? 'fa fa-fw fa-compress' : 'fa fa-fw fa-expand');
        btnFullscreen.attr('title', isFullScreen ? 'Fullscreen ON' : 'Fullscreen OFF');
    });
    
    this.topbarRight.append(btnFullscreen);
}
