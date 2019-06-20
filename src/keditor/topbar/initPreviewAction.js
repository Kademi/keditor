import CLASS_NAMES from '../constants/classNames';
import initDynamicContent from '../component/initDynamicContent';
import getContent from '../getContent';

export default function () {
    let self = this;
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
        
        !isPreviewOn && self.previewArea.html(getContent.call(self)).find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            dynamicElement.html('Loading...');
            initDynamicContent.call(self, dynamicElement);
        });
    });
    
    self.topbarRight.append(btnPreview);
};
