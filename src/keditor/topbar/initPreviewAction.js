import CLASS_NAMES from '../constants/classNames';
import initDynamicContent from '../component/initDynamicContent';
import getContent from '../getContent';
import ICONS from '../constants/icons';

export default function () {
    let self = this;
    let options = self.options;
    let btnPreview = $(`<a href="javascript:void(0);" title="${options.locale.previewOff}" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">${ICONS.PREVIEW_OFF}</a>`);
    
    self.previewArea = $(`<div class="${CLASS_NAMES.PREVIEW_AREA}"></div>`);
    self.contentAreasWrapper.after(self.previewArea);
    
    btnPreview.on('click', function (e) {
        e.preventDefault();
        
        let isPreviewOn = !btnPreview.hasClass(CLASS_NAMES.STATE_ACTIVE);
        
        btnPreview.html(isPreviewOn ? ICONS.PREVIEW_ON : ICONS.PREVIEW_OFF);
        btnPreview[isPreviewOn ? 'addClass' : 'removeClass'](CLASS_NAMES.STATE_ACTIVE);
        btnPreview.attr('title', isPreviewOn ? options.locale.previewOn : options.locale.previewOff);
        self.iframeBody[isPreviewOn ? 'addClass' : 'removeClass'](CLASS_NAMES.STATE_PREVIEWING);
        
        isPreviewOn && self.previewArea.html(getContent.call(self)).find('[data-dynamic-href]').each(function () {
            let dynamicElement = $(this);
            dynamicElement.html('Loading...');
            initDynamicContent.call(self, dynamicElement);
        });
    });
    
    self.topbarRight.append(btnPreview);
};
