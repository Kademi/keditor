import initSelectAction from './initSelectAction';
import initBtnComponentDelete from './initBtnComponentDelete';
import initBtnComponentDuplicate from './initBtnComponentDuplicate';
import initBtnComponentSetting from './initBtnComponentSetting';
import initBtnContainerDelete from './initBtnContainerDelete';
import initBtnContainerDuplicate from './initBtnContainerDuplicate';
import initBtnContainerSetting from './initBtnContainerSetting';
import initBtnComponentMoveDown from './initBtnComponentMoveDown';
import initBtnComponentMoveUp from './initBtnComponentMoveUp';
import initBtnContainerMoveDown from './initBtnContainerMoveDown';
import initBtnContainerMoveUp from './initBtnContainerMoveUp';

import initBtnAddContentAfterContainer from './initBtnAddContentAfterContainer';
import initBtnAddContentAfterComponent from './initBtnAddContentAfterComponent';

export default function () {
    let self = this;
    
    initSelectAction.call(self);
    
    initBtnAddContentAfterComponent.call(self);
    initBtnAddContentAfterContainer.call(self);
    
    initBtnComponentDelete.call(self);
    initBtnComponentDuplicate.call(self);
    initBtnComponentMoveDown.call(self);
    initBtnComponentMoveUp.call(self);
    initBtnComponentSetting.call(self);
    
    initBtnContainerDelete.call(self);
    initBtnContainerDuplicate.call(self);
    initBtnContainerMoveDown.call(self);
    initBtnContainerMoveUp.call(self);
    initBtnContainerSetting.call(self);
};
