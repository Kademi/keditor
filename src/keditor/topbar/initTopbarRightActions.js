import CLASS_NAMES from "../constants/classNames";

export default function () {
    let self = this;
    let options = self.options;
    let topbarRight = self.topbarRight;
    
    let btnPreview = $(`<a href="javascript:void(0);" title="Preview OFF" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"></a>`);
    let iconPreviewOff = $(`<i class="fa fa-fw fa-eye-slash"></i>`);
    let iconPreviewOn = $(`<i class="fa fa-fw fa-eye" style="display: none;"></i>`);
    btnPreview.append(iconPreviewOff);
    btnPreview.append(iconPreviewOn);
    
    self.previewArea = $(`<div class="${CLASS_NAMES.PREVIEW_AREA}" style="display: none;"></div>`);
    self.contentAreasWrapper.after(self.previewArea);
    
    btnPreview.on('click', function (e) {
        e.preventDefault();
        
        let isPreviewOn = btnPreview.hasClass(CLASS_NAMES.TOPBAR_BUTTON_ACTIVE);
    
        btnPreview[isPreviewOn ? 'removeClass' : 'addClass'](CLASS_NAMES.TOPBAR_BUTTON_ACTIVE);
        btnPreview.attr('title', isPreviewOn ? 'Preview OFF' : 'Preview ON');
        iconPreviewOff.css('display', isPreviewOn ? '' : 'none');
        iconPreviewOn.css('display', isPreviewOn ? 'none' : '');
        self.contentAreasWrapper.css('display', isPreviewOn ? '' : 'none');
        self.previewArea.css('display', isPreviewOn ? 'none' : '');
        
        if (!isPreviewOn) {
            let content = self.getContent();
            self.previewArea.html(content).find('[data-dynamic-href]').each(function () {
                let dynamicElement = $(this);
                dynamicElement.html('Loading...');
                self.initDynamicContent(dynamicElement);
            });
        }
    });
    
    let btnSave = $(`<a href="javascript:void(0);" title="Save" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}"><i class="fa fa-fw fa-save"></i></a>`);
    btnSave.on('click', function (e) {
        e.preventDefault();
        
        let content = self.getContent();
        
        typeof options.onSave === 'function' && options.onSave.call(self, content);
    });
    
    topbarRight.append(btnSave);
    topbarRight.append(btnPreview);
};
