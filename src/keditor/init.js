import DEFAULTS from './constants/defaults';
import CLASS_NAMES from './constants/classNames';

export default function (target, config) {
    let self = this;
    let element = self.element = target;
    let options = self.options = $.extend({}, DEFAULTS, config);
    
    if (options.iframeMode) {
        self.initIframe();
    } else {
        self.window = window;
        self.body = $(document.body);
        
        let originalContent = element.val() || element.html() || '';
        let contentAreasWrapper = self.generateContentAreasWrapper(originalContent);
        
        if (element.is('textarea')) {
            element.after(contentAreasWrapper);
            element.addClass(CLASS_NAMES.HIDDEN_ELEMENT);
        } else {
            element.empty().append(contentAreasWrapper);
        }
        
        self.contentAreasWrapper = contentAreasWrapper;
    }
    
    self.initSidebar();
    self.initSnippetsModal();
    self.initContentAreas();
    
    if (!self.body.hasClass(CLASS_NAMES.CLICKS_INITIALIZED)) {
        self.initKEditorClicks();
    }
    
    self.id = self.generateId();
    KEditor.instances[self.id] = self;
    
    if (typeof options.onReady === 'function') {
        options.onReady.call(self);
    }
};