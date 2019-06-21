import initPreviewAction from './initPreviewAction';
import initFullscreenAction from './initFullscreenAction';
import initSaveAction from './initSaveAction';

export default function () {
    let self = this;
    
    initPreviewAction.apply(self);
    initFullscreenAction.apply(self);
    initSaveAction.apply(self);
};
