import initSelectAction from './initSelectAction';
import initKeyDownAction from './initKeyDownAction';
import initBtnPasteContent from './initBtnPasteContent';

import initBtnAddContentAfterContainer from './initBtnAddContentAfterContainer';
import initBtnAddContentAfterComponent from './initBtnAddContentAfterComponent';

import initBtnComponentDelete from './initBtnComponentDelete';
import initBtnComponentDuplicate from './initBtnComponentDuplicate';
import initBtnComponentCopy from './initBtnComponentCopy';
import initBtnComponentCut from './initBtnComponentCut';
import initBtnComponentSetting from './initBtnComponentSetting';
import initBtnComponentMoveDown from './initBtnComponentMoveDown';
import initBtnComponentMoveUp from './initBtnComponentMoveUp';

import initBtnContainerDelete from './initBtnContainerDelete';
import initBtnContainerDuplicate from './initBtnContainerDuplicate';
import initBtnContainerCopy from './initBtnContainerCopy';
import initBtnContainerCut from './initBtnContainerCut';
import initBtnContainerSetting from './initBtnContainerSetting';
import initBtnContainerMoveDown from './initBtnContainerMoveDown';
import initBtnContainerMoveUp from './initBtnContainerMoveUp';

export default function () {
    let self = this;
    
    initSelectAction.call(self);
    
    initKeyDownAction.call(self);
    
    initBtnPasteContent.call(self);
    
    initBtnAddContentAfterComponent.call(self);
    initBtnAddContentAfterContainer.call(self);
    
    initBtnComponentDelete.call(self);
    initBtnComponentDuplicate.call(self);
    initBtnComponentCopy.call(self);
    initBtnComponentCut.call(self);
    initBtnComponentMoveDown.call(self);
    initBtnComponentMoveUp.call(self);
    initBtnComponentSetting.call(self);
    
    initBtnContainerDelete.call(self);
    initBtnContainerDuplicate.call(self);
    initBtnContainerCopy.call(self);
    initBtnContainerCut.call(self);
    initBtnContainerMoveDown.call(self);
    initBtnContainerMoveUp.call(self);
    initBtnContainerSetting.call(self);
};
