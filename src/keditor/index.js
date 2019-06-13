import $ from 'jquery';

import DEFAULTS from './constants/defaults';

import log from './utils/log';
import generateId from './utils/generateId';
import generateToolbar from './utils/generateToolbar';
import beautifyCategories from './utils/beautifyCategories';
import getDataAttributes from './utils/getDataAttributes';
import getClickedElement from './utils/getClickedElement';

import initIframeActions from './iframe/initIframeActions';
import initIframeCover from './iframe/initIframeCover';

import initTopbar from './topbar/initTopbar';
import initTopbarRightActions from './topbar/initTopbarRightActions';
import initDeviceSwitcher from './topbar/initDeviceSwitcher';

import initSidebar from './sidebar/initSidebar';
import openSidebar from './sidebar/openSidebar';
import closeSidebar from './sidebar/closeSidebar';

import renderSnippets from './snippet/renderSnippets';
import initSnippetsFilter from './snippet/initSnippetsFilter';
import addSnippet from './snippet/addSnippet';

import initSnippetsModal from './modal/initSnippetsModal';
import openModal from './modal/openModal';
import closeModal from './modal/closeModal';

import initContentAreaWrapper from './contentArea/initContentAreaWrapper';
import initContentAreas from './contentArea/initContentAreas';
import initContentArea from './contentArea/initContentArea';

import convertToContainer from './container/convertToContainer';
import initContainer from './container/initContainer';
import initContainerContent from './container/initContainerContent';
import getContainerContent from './container/getContainerContent';

import getComponentType from './component/getComponentType';
import convertToComponent from './component/convertToComponent';
import initComponent from './component/initComponent';
import initDynamicContent from './component/initDynamicContent';
import deleteComponent from './component/deleteComponent';
import getComponentContent from './component/getComponentContent';

import init from './init';
import destroy from './destroy';
import getContent from './getContent';
import setContent from './setContent';

import '../styles/keditor.less';

// Check dependencies
if (!$.fn.sortable) {
    error('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
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
    
    static log(...args) {
        return log.apply(null, args);
    }
    
    static error(message) {
        throw new Error(`[ KEditor ] ${message}`);
    }
    
    static init(target, config) {
        return new KEditor(target, config);
    }
    
    constructor(target, config) {
        return init.apply(this, [target, config]);
    }
    
    generateId() {
        return generateId();
    }
    
    generateToolbar(type, isComponentConfigurable) {
        return generateToolbar.apply(this, [type, isComponentConfigurable]);
    }
    
    beautifyCategories(categories) {
        return beautifyCategories.apply(this, [categories]);
    }
    
    setSettingContainer(container) {
        this.settingContainer = container;
    }
    
    getSettingContainer() {
        return this.settingContainer;
    }
    
    setSettingComponent(component) {
        this.settingComponent = component;
    }
    
    getSettingComponent() {
        return this.settingComponent;
    }
    
    getDataAttributes(target, ignoreAttributes, isArray) {
        return getDataAttributes.apply(this, [target, ignoreAttributes, isArray]);
    }
    
    getComponentType(component) {
        return getComponentType.apply(this, [component]);
    }
    
    getClickedElement(event, selector) {
        return getClickedElement.apply(this, [event, selector]);
    }
    
    // Iframe
    //---------------------------------
    initIframeCover(iframe, wrapper) {
        return initIframeCover.apply(this, [iframe, wrapper]);
    }
    
    // KEditor clicks
    //---------------------------------
    initIframeActions() {
        return initIframeActions.apply(this);
    }
    
    // Topbar
    //---------------------------------
    initTopbar() {
        return initTopbar.apply(this);
    }
    
    initDeviceSwitcher() {
        return initDeviceSwitcher.apply(this);
    }
    
    initTopbarRightActions() {
        return initTopbarRightActions.apply(this);
    }
    
    // Sidebar
    //---------------------------------
    initSidebar() {
        return initSidebar.apply(this);
    }
    
    openSidebar(target) {
        return openSidebar.apply(this, [target]);
    }
    
    closeSidebar() {
        return closeSidebar.apply(this);
    }
    
    // Legacy methods. DEPRECATED
    //---------------------------------
    showSettingPanel(target) {
        this.openSidebar(target);
    }
    
    hideSettingPanel() {
        this.closeSidebar();
    }
    
    // Snippet modal
    //---------------------------------
    initSnippetsModal() {
        return initSnippetsModal.apply(this);
    }
    
    renderSnippets(resp) {
        return renderSnippets.apply(this, [resp]);
    }
    
    initSnippetsFilter(type) {
        return initSnippetsFilter.apply(this, [type]);
    }
    
    openModal(target, snippetType) {
        return openModal.apply(this, [target, snippetType]);
    }
    
    closeModal() {
        return closeModal.apply(this);
    }
    
    // Content areas
    //---------------------------------
    initContentAreaWrapper() {
        return initContentAreaWrapper.apply(this);
    }
    
    initContentAreas() {
        return initContentAreas.apply(this);
    }
    
    initContentArea(contentArea, dontInitToolbar) {
        return initContentArea.apply(this, [contentArea, dontInitToolbar]);
    }
    
    // Containers
    //---------------------------------
    convertToContainer(contentArea, target) {
        return convertToContainer.apply(this, [contentArea, target]);
    }
    
    initContainer(contentArea, container) {
        return initContainer.apply(this, [contentArea, container]);
    }
    
    initContainerContent(contentArea, container, containerContent, isNested) {
        return initContainerContent.apply(this, [contentArea, container, containerContent, isNested]);
    }
    
    // Components
    //---------------------------------
    convertToComponent(contentArea, container, target, isExisting) {
        return convertToComponent.apply(this, [contentArea, container, target, isExisting]);
    }
    
    initComponent(contentArea, container, component) {
        return initComponent.apply(this, [contentArea, container, component]);
    }
    
    initDynamicContent(dynamicElement) {
        return initDynamicContent.apply(this, [dynamicElement]);
    }
    
    deleteComponent(component) {
        return deleteComponent.apply(this, [component]);
    }
    
    // Get content
    //---------------------------------
    getComponentContent(component) {
        return getComponentContent.apply(this, [component]);
    }
    
    getContainerContent(container, isNested) {
        return getContainerContent.apply(this, [container, isNested]);
    }
    
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
