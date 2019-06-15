import DEFAULTS from './constants/defaults';

export default function (target, config) {
    let self = this;
    self.element = target;
    self.options = $.extend({}, DEFAULTS, config);
    
    self.initContentAreaWrapper();
    self.initTopbar();
    self.initSidebar();
    self.initSnippetsModal();
    self.initExtraSettings();
    
    self.id = self.generateId();
    KEditor.instances[self.id] = self;
    
    if (typeof self.options.onReady === 'function') {
        self.options.onReady.call(self);
    }
};
