import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let topbarId = self.generateId();
    let options = self.options;
    
    self.topbar = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR}" id="${topbarId}">
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_LEFT}">
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_TITLE}" title="${options.title}">${options.title}</div>
            </div>
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_CENTER}">
            </div>
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_RIGHT}">
            </div>
        </div>
    `);
    self.topbarLeft = self.topbar.find(`.${CLASS_NAMES.TOPBAR_LEFT}`);
    self.topbarCenter = self.topbar.find(`.${CLASS_NAMES.TOPBAR_CENTER}`);
    self.topbarRight = self.topbar.find(`.${CLASS_NAMES.TOPBAR_RIGHT}`);
    
    self.topbar.appendTo(self.wrapper);
    
    self.initDeviceSwitcher();
    self.initTopbarRightActions();
};
