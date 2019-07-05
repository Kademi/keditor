import '../styles/keditor.less';

import $ from 'jquery';
import DEFAULTS from './constants/defaults';
import generateId from './utils/generateId';
import getDataAttributes from './utils/getDataAttributes';
import initIframeCover from './utils/initIframeCover';
import addSnippet from './snippet/addSnippet';
import openSidebar from './sidebar/openSidebar';
import closeSidebar from './sidebar/closeSidebar';
import init from './init';
import destroy from './destroy';
import getContent from './getContent';
import setContent from './setContent';
import initModal from './modal/initModal';
import openModal from './modal/openModal';
import closeModal from './modal/closeModal';

// Check dependencies
if (!$.fn.sortable) {
    throw new Error('[ KEditor ] $.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
}

window.KEDITOR_DEBUG = true;

// KEditor class
class KEditor {
    static DEFAULTS = DEFAULTS;
    static debug = false;
    static version = '@{version}';
    static instances = {};
    static components = {
        blank: {
            settingEnabled: false
        }
    };
    
    settingComponent = null;
    settingContainer = null;
    
    copyContent = null;
    cutContent = null;
    
    categoryComponent = [];
    categoryContainer = [];
    
    constructor(target, config) {
        return init.apply(this, [target, config]);
    }
    
    // Static methods
    //---------------------------------
    static log(...args) {
        if (console && typeof console.log === 'function' && window.KEDITOR_DEBUG) {
            console.log.apply(console, ['[ KEditor ] ', ...args]);
        }
    }
    
    static error(message) {
        throw new Error(`[ KEditor ] ${message}`);
    }
    
    static init(target, config) {
        return new KEditor(target, config);
    }
    
    // Setting stuffs
    //---------------------------------
    getSettingContainer() {
        return this.settingContainer;
    }
    
    getSettingComponent() {
        return this.settingComponent;
    }
    
    // Utilities
    //---------------------------------
    generateId() {
        return generateId();
    }
    
    getDataAttributes(target, ignoreAttributes, isArray) {
        return getDataAttributes.apply(this, [target, ignoreAttributes, isArray]);
    }
    
    // Iframe
    //---------------------------------
    initIframeCover(iframe, wrapper) {
        return initIframeCover.apply(this, [iframe, wrapper]);
    }
    
    // Modal
    //---------------------------------
    initModal(modalId, hasFooter, disableOriginEvents) {
        return initModal.call(this, modalId, hasFooter, disableOriginEvents);
    }
    
    openModal(modal) {
        return openModal.call(this, modal);
    }
    
    closeModal(modal) {
        return closeModal.call(this, modal);
    }
    
    // Legacy methods. DEPRECATED
    //---------------------------------
    showSettingPanel(target) {
        openSidebar.call(this, target);
    }
    
    hideSettingPanel() {
        closeSidebar.call(this);
    }
    
    // Get content
    //---------------------------------
    getContent(inArray) {
        return getContent.apply(this, [inArray]);
    }
    
    // Set content
    //---------------------------------
    setContent(content, contentArea) {
        return setContent.apply(this, [content, contentArea]);
    }
    
    // Destroy
    //---------------------------------
    destroy() {
        return destroy.apply(this);
    }
    
    // Snippet
    //---------------------------------
    addSnippet(type, title, previewUrl, categories, content, dataAttributes) {
        return addSnippet.apply(this, [type, title, previewUrl, categories, content, dataAttributes]);
    }
}

// KEditor plugins
$.fn.keditor = function (options) {
    let element = $(this);
    let instance = element.data('keditor');
    
    if (typeof options === 'string') {
        if (instance && instance[options] && typeof instance[options] === 'function') {
            return instance[options].apply(instance, Array.prototype.slice.call(arguments, 1));
        }
    } else {
        if (!instance) {
            instance = KEditor.init(element, options);
            element.data('keditor', instance);
        }
        
        return instance;
    }
};

window.KEditor = $.keditor = $.fn.keditor.constructor = KEditor;
