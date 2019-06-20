import initPreviewAction from './initPreviewAction';
import initFullscreenAction from './initFullscreenAction';
import initSaveAction from './initSaveAction';

export default function () {    
    initPreviewAction.apply(this);
    initFullscreenAction.apply(this);
    initSaveAction.apply(this);
};
