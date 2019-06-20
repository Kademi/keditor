import CLASS_NAMES from '../constants/classNames';
import 'jquery.fullscreen';

export default function () {
    let self = this;
    let options = self.options;
    let topbarRight = self.topbarRight;
    
    let btnPreview = $(`<a href="javascript:void(0);" title="Preview OFF" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-eye-slash"></i></a>`);
    
    self.previewArea = $(`<div class="${CLASS_NAMES.PREVIEW_AREA}"></div>`);
    self.contentAreasWrapper.after(self.previewArea);
    
    btnPreview.on('click', function (e) {
        e.preventDefault();
        
        let isPreviewOn = btnPreview.hasClass(CLASS_NAMES.STATE_ACTIVE);
        
        btnPreview.find('i').attr('class', isPreviewOn ? 'fa fa-fw fa-eye-slash' : 'fa fa-fw fa-eye');
        btnPreview[isPreviewOn ? 'removeClass' : 'addClass'](CLASS_NAMES.STATE_ACTIVE);
        btnPreview.attr('title', isPreviewOn ? 'Preview OFF' : 'Preview ON');
        self.iframeBody[isPreviewOn ? 'removeClass' : 'addClass'](CLASS_NAMES.STATE_PREVIEWING);
        
        !isPreviewOn && self.previewArea.html(self.getContent()).find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            dynamicElement.html('Loading...');
            self.initDynamicContent(dynamicElement);
        });
    });
    
    let btnSave = $(`<a href="javascript:void(0);" title="Save" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-save"></i></a>`);
    btnSave.on('click', function (e) {
        e.preventDefault();
        
        let content = self.getContent();
        
        typeof options.onSave === 'function' && options.onSave.call(self, content);
    });
    
    let btnFullscreen = $(`<a href="javascript:void(0);" title="Fullscreen OFF" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-expand"></i></a>`);
    btnFullscreen.on('click', function (e) {
        e.preventDefault();
        
        $.fullscreen.isFullScreen() ? $.fullscreen.exit() : self.wrapper.fullscreen();
    });
    $(document).on('fscreenchange', function (e, isFullScreen) {
        btnFullscreen.find('i').attr('class', isFullScreen ? 'fa fa-fw fa-compress' : 'fa fa-fw fa-expand');
        btnFullscreen.attr('title', isFullScreen ? 'Fullscreen ON' : 'Fullscreen OFF');
    });
    
    topbarRight.append(btnSave);
    topbarRight.append(btnPreview);
    topbarRight.append(btnFullscreen);
};
