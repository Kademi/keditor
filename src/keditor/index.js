import '../styles/keditor.less';

import $ from 'jquery';
import DEFAULTS from './constants/defaults';
import log from './utils/log';
import error from './utils/error';
import generateId from './utils/generateId';
import getDataAttributes from './utils/getDataAttributes';
import initIframeCover from './iframe/initIframeCover';
import addSnippet from './snippet/addSnippet';
import init from './init';
import destroy from './destroy';
import getContent from './getContent';
import setContent from './setContent';
import initModal from './modal/initModal';
import showModal from './modal/showModal';
import hideModal from './modal/hideModal';
import initDynamicContent from './component/initDynamicContent';

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
        init.apply(this, [target, config]);
    }
    
    /**
     * Log utility of KEditor with `[ KEditor ] ` as prefix. You can see the log when `window.KEDITOR_DEBUG = true`
     * @param {*} args Values you want to log
     */
    static log(...args) {
        log(...args);
    }
    
    /**
     * Throw error with `[ KEditor ] ` as prefix for message
     * @param {String} message Error message
     */
    static error(message) {
        error(message);
    }
    
    /**
     * Initialize KEditor instance
     * @param {jQuery} target Element which you want to initialize as KEditor
     * @param {Object} config Configuration of KEditor instance. See https://github.com/Kademi/keditor/blob/master/docs/configuration.md for more details
     * @return {KEditor}
     */
    static init(target, config) {
        return new KEditor(target, config);
    }
    
    /**
     * Load dynamic content for elements which have `data-dynamic-href` attribute
     * @param {jQuery} dynamicElement jQuery object of element(s) which you want to load dynamic content. Element(s) must have `data-dynamic-href` attribute
     * @param {Object} options Callbacks include `onSuccess` and `onError` with arguments are `dynamicElement` and `jqXHR`
     */
    static loadDynamicContent(dynamicElement, options = {}) {
        dynamicElement.each(function () {
            initDynamicContent.call({
                options: {
                    onDynamicContentLoaded: options.onSuccess,
                    onDynamicContentError: options.onError
                }
            }, $(this));
        });
    }
    
    /**
     * Get container which is setting-up
     * @return {jQuery}
     */
    getSettingContainer() {
        return this.settingContainer;
    }
    
    /**
     * Get component which is setting-up
     * @return {jQuery}
     */
    getSettingComponent() {
        return this.settingComponent;
    }
    
    /**
     * Generate a random Id
     * @return {String}
     */
    generateId() {
        return generateId();
    }
    
    /**
     * Get list of `data-*` attributes
     * @param {jQuery} target jQuery of elements which you want to get list of `data-*` attributes
     * @param {Array<String>} ignoreAttributes Array of attributes you want to ignore
     * @param {Boolean} isArray Return list as Array or Object
     * @return {Array|Object}
     */
    getDataAttributes(target, ignoreAttributes, isArray) {
        return getDataAttributes.apply(this, [target, ignoreAttributes, isArray]);
    }
    
    /**
     * Init iframe cover which avoid iframe's z-index issue in IE browsers
     * @param {jQuery} iframe Iframe which you want to add cover for
     * @param {jQuery} wrapper Wrapper of iframe
     */
    initIframeCover(iframe, wrapper) {
        initIframeCover.apply(this, [iframe, wrapper]);
    }
    
    /**
     * Init KEditor modal
     * @param {String} modalId Id of modal
     * @param {Boolean} hasFooter Modal has footer or not
     * @param {Boolean} disableOriginEvents If you want to handle close button by yourself, just set it as `false`
     * @return {jQuery}
     */
    initModal(modalId, hasFooter, disableOriginEvents) {
        return initModal.call(this, modalId, hasFooter, disableOriginEvents);
    }
    
    /**
     * Show a KEditor modal
     * @param {jQuery} modal Modal you want to show
     */
    showModal(modal) {
        showModal.call(this, modal);
    }
    
    /**
     * Hide a KEditor modal
     * @param {jQuery} modal Modal you want to show
     */
    hideModal(modal) {
        hideModal.call(this, modal);
    }
    
    /**
     * @param {Boolean} inArray Return your content in array format or just plain string
     * @return {String|Array<String>}
     */
    getContent(inArray) {
        return getContent.apply(this, [inArray]);
    }
    
    /**
     * @param {String} content HTML content
     * @param {String|jQuery} contentArea Can be selector or jQuery object of content area which you want to set new content. If you have only a content area, you can leave it blank
     */
    setContent(content, contentArea) {
        setContent.apply(this, [content, contentArea]);
    }
    
    /**
     * Removes the KEditor functionality completely. This will return the element back to its pre-init state with latest content
     */
    destroy() {
        destroy.apply(this);
    }
    
    /**
     * Add snippet programmatically
     * @param {String} type Type of snippet. Can be `container` or `component-*`
     * @param {String} title Text title of snippet
     * @param {String} previewUrl Url to preview image of snippet
     * @param {String} categories Categories list of snippet, separated by `snippetsCategoriesSeparator` option
     * @param {String} content HTML content of snippet
     * @param {Array<String>} extraAttrs If you component contains dynamic content, you will need this parameter to add `data-*` attribute to your component
     */
    addSnippet(type, title, previewUrl, categories, content, extraAttrs) {
        addSnippet.apply(this, [type, title, previewUrl, categories, content, extraAttrs]);
    }
    
    /**
     * Load dynamic content for elements which have `data-dynamic-href` attribute
     * @param {jQuery} dynamicElement jQuery object of element(s) which you want to load dynamic content. Element(s) must have `data-dynamic-href` attribute
     * @return {jqXHR}
     */
    initDynamicContent(dynamicElement) {
        return initDynamicContent.apply(this, [dynamicElement]);
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
