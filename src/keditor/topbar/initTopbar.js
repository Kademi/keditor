import CSS_CLASS from '../constants/cssClass';
import generateId from '../utils/generateId';
import initDeviceSwitcher from './initDeviceSwitcher';
import initTopbarRightActions from './initTopbarRightActions';
import initTopbarExtraItems from './initTopbarExtraItems';

export default function () {
    let self = this;
    let topbarId = generateId();
    let options = self.options;
    
    self.topbar = $(`
        <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR}" id="${topbarId}">
            <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_LEFT}">
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_TITLE}" title="${options.title}">${options.title}</div>
            </div>
            <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_CENTER}">
            </div>
            <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOPBAR_RIGHT}">
            </div>
        </div>
    `);
    self.topbarLeft = self.topbar.find(`.${CSS_CLASS.TOPBAR_LEFT}`);
    self.topbarCenter = self.topbar.find(`.${CSS_CLASS.TOPBAR_CENTER}`);
    self.topbarRight = self.topbar.find(`.${CSS_CLASS.TOPBAR_RIGHT}`);
    
    self.topbar.appendTo(self.wrapper);
    
    initDeviceSwitcher.call(self);
    initTopbarRightActions.call(self);
    initTopbarExtraItems.call(self);
};
