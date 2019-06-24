import DEFAULTS from './constants/defaults';
import initSnippetsModal from './modal/initSnippetsModal';
import initExtraSettings from './sidebar/initExtraSettings';
import initSidebar from './sidebar/initSidebar';
import initTopbar from './topbar/initTopbar';
import initIframe from './iframe/initIframe';
import generateId from './utils/generateId';

export default function (target, config) {
    let self = this;
    self.element = target;
    self.options = $.extend({}, DEFAULTS, config);
    
    initIframe.call(self);
    initTopbar.call(self);
    initSidebar.call(self);
    initSnippetsModal.call(self);
    initExtraSettings.call(self);
    
    self.id = generateId();
    KEditor.instances[self.id] = self;
    
    if (typeof self.options.onReady === 'function') {
        self.options.onReady.call(self);
    }
};
