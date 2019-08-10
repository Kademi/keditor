import initPreviewAction from './initPreviewAction';
import initFullscreenAction from './initFullscreenAction';
import initSaveAction from './initSaveAction';

export default function () {
    let self = this;
    let options = self.options;
    
    initPreviewAction.apply(self);
    initFullscreenAction.apply(self);
    typeof options.onSave === 'function' && initSaveAction.apply(self);
};
