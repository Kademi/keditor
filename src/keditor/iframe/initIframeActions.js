import initSelectAction from './initSelectAction';
import initBtnComponentDelete from './initBtnComponentDelete';
import initBtnComponentDuplicate from './initBtnComponentDuplicate';
import initBtnComponentSetting from './initBtnComponentSetting';
import initBtnContainerDelete from './initBtnContainerDelete';
import initBtnContainerDuplicate from './initBtnContainerDuplicate';
import initBtnContainerSetting from './initBtnContainerSetting';

export default function () {
    let self = this;
    
    initSelectAction.call(self);
    initBtnComponentDelete.call(self);
    initBtnComponentDuplicate.call(self);
    initBtnComponentSetting.call(self);
    initBtnContainerDelete.call(self);
    initBtnContainerDuplicate.call(self);
    initBtnContainerSetting.call(self);
};
