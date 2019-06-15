(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("jQuery")) : factory(root["jQuery"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_jquery__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/keditor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/keditor/component/convertToComponent.js":
/*!*****************************************************!*\
  !*** ./src/keditor/component/convertToComponent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, target, isExisting) {
  if (target.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT_TOOLBAR))) {
    return;
  }

  var self = this;
  var isSection = target.is('section');
  var component;

  if (isSection) {
    target.addClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));
    target.wrapInner("<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_CONTENT, "\"></section>"));
    component = target;
  } else {
    target.wrap("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, "\">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_CONTENT, "\"></section>\n</section>\n"));
    component = target.parent().parent();
  }

  if (isExisting) {
    component.addClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_EXISTING));
  }

  self.initComponent(contentArea, container, component);
});
;

/***/ }),

/***/ "./src/keditor/component/deleteComponent.js":
/*!**************************************************!*\
  !*** ./src/keditor/component/deleteComponent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  var self = this;
  var componentType = self.getComponentType(component);
  var componentData = KEditor.components[componentType];

  if (typeof componentData.destroy === 'function') {
    componentData.destroy.call(componentData, component, self);
  }

  component.remove();
});
;

/***/ }),

/***/ "./src/keditor/component/getComponentContent.js":
/*!******************************************************!*\
  !*** ./src/keditor/component/getComponentContent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  var self = this;
  var clonedComponent = component.clone();
  var componentType = self.getComponentType(clonedComponent);
  var componentData = KEditor.components[componentType];
  var dataAttributes = self.getDataAttributes(clonedComponent, null, true);
  var content; // Handle iframe-wrapper

  var iframeWrapper = clonedComponent.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_WRAPPER));

  if (iframeWrapper.length > 0) {
    iframeWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER)).remove();
    var iframe = iframeWrapper.children('iframe');

    if (iframeWrapper.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_WRAPPER_FAKE)) {
      iframe.unwrap();
    } else {
      iframeWrapper.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_WRAPPER);
    }
  }

  if (typeof componentData.getContent === 'function') {
    content = componentData.getContent.call(componentData, clonedComponent, self);
  } else {
    var componentContent = clonedComponent.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_CONTENT));
    content = componentContent.html();
  }

  clonedComponent.html(content).find('[data-dynamic-href]').each(function () {
    $(this).html('');
  });
  return "<section ".concat(dataAttributes.join(' '), ">").concat(clonedComponent.html(), "</section>");
});
;

/***/ }),

/***/ "./src/keditor/component/getComponentType.js":
/*!***************************************************!*\
  !*** ./src/keditor/component/getComponentType.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  var self = this;
  var options = self.options;
  var componentType = (component.attr('data-type') || '').replace('component-', '');

  if (componentType && componentType in KEditor.components) {
    return componentType;
  } else {
    if (typeof options.defaultComponentType === 'string') {
      componentType = options.defaultComponentType;
    } else if (typeof options.defaultComponentType === 'function') {
      componentType = options.defaultComponentType.call(self, component);
    }

    if (!componentType) {
      self.error('Component type is undefined!');
    }

    return componentType;
  }
});
;

/***/ }),

/***/ "./src/keditor/component/initComponent.js":
/*!************************************************!*\
  !*** ./src/keditor/component/initComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toolbarType */ "./src/keditor/constants/toolbarType.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, component) {
  var self = this;
  var options = self.options;

  if (!component.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZED) || !component.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING)) {
    component.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING);
    component.attr('id', self.generateId());

    if (typeof options.onBeforeInitComponent === 'function') {
      options.onBeforeInitComponent.call(self, component, contentArea);
    }

    var componentContent = component.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT_CONTENT));
    componentContent.attr('id', self.generateId());
    var componentType = self.getComponentType(component);
    var componentData = KEditor.components[componentType];
    component.append(self.generateToolbar(_constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, componentData.settingEnabled));
    component.find('[data-dynamic-href]').each(function () {
      var dynamicElement = $(this);
      self.initDynamicContent(dynamicElement);
    });

    if (typeof componentData.init === 'function') {
      componentData.init.call(componentData, contentArea, container, component, self);
    }

    if (typeof options.onInitComponent === 'function') {
      options.onInitComponent.call(self, component, contentArea);
    }

    component.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZED);
    component.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING);
  }
});
;

/***/ }),

/***/ "./src/keditor/component/initDynamicContent.js":
/*!*****************************************************!*\
  !*** ./src/keditor/component/initDynamicContent.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (dynamicElement) {
  var self = this;
  var options = self.options;
  var component = dynamicElement.closest('[data-type^=component]');
  var contentArea = dynamicElement.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));
  dynamicElement.attr('id', self.generateId());

  if (typeof options.onBeforeDynamicContentLoad === 'function') {
    options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
  }

  var dynamicHref = dynamicElement.attr('data-dynamic-href');
  var data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
  data = $.param(data);
  return $.ajax({
    url: dynamicHref,
    data: data,
    type: 'GET',
    dataType: 'HTML',
    success: function success(response, status, jqXHR) {
      dynamicElement.html(response);

      if (typeof options.onDynamicContentLoaded === 'function') {
        options.onDynamicContentLoaded.call(self, dynamicElement, jqXHR, contentArea);
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      if (typeof options.onDynamicContentError === 'function') {
        options.onDynamicContentError.call(self, dynamicElement, jqXHR, contentArea);
      }
    }
  });
});
;

/***/ }),

/***/ "./src/keditor/constants/classNames.js":
/*!*********************************************!*\
  !*** ./src/keditor/constants/classNames.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CLASS_NAMES = {
  UI: 'keditor-ui',
  UI_DRAGGING: 'keditor-ui-dragging',
  UI_HIDDEN: 'keditor-ui-hidden',
  SORTABLE: 'ui-sortable',
  WRAPPER: 'keditor-wrapper',
  BTN: 'keditor-btn',
  BTN_PRIMARY: 'keditor-btn-primary',
  BTN_DEFAULT: 'keditor-btn-default',
  STATE_ACTIVE: 'active',
  STATE_OPENED: 'opened',
  STATE_SHOWED: 'showed',
  STATE_SELECTED: 'selected',
  STATE_DUPLICATED: 'duplicated',
  STATE_INITIALIZED: 'initialized',
  STATE_INITIALIZING: 'initializing',
  STATE_TOOLBAR_SHOWED: 'showed-keditor-toolbar',
  STATE_SETTING_OPENED: 'opened-keditor-setting',
  STATE_SIDEBAR_OPENED: 'opened-keditor-sidebar',
  STATE_MODAL_OPENED: 'opened-modal',
  STATE_NOT_MATCHED: 'not-matched',
  ADD_CONTENT: 'btn-add-content',
  ADD_COMPONENT: 'btn-add-component',
  ADD_CONTAINER: 'btn-add-container',
  SIDEBAR: 'keditor-sidebar',
  SIDEBAR_HEADER: 'keditor-sidebar-header',
  SIDEBAR_BODY: 'keditor-sidebar-body',
  SIDEBAR_TITLE: 'keditor-sidebar-title',
  SIDEBAR_CLOSER: 'keditor-sidebar-closer',
  TOPBAR: 'keditor-topbar',
  TOPBAR_LEFT: 'keditor-topbar-left',
  TOPBAR_CENTER: 'keditor-topbar-center',
  TOPBAR_RIGHT: 'keditor-topbar-right',
  TOPBAR_BUTTON: 'keditor-topbar-btn',
  TOPBAR_TITLE: 'keditor-topbar-title',
  MODAL: 'keditor-modal',
  MODAL_COMPONENT: 'keditor-modal-component',
  MODAL_CONTAINER: 'keditor-modal-container',
  MODAL_HEADER: 'keditor-modal-header',
  MODAL_BODY: 'keditor-modal-body',
  MODAL_FOOTER: 'keditor-modal-footer',
  MODAL_CLOSE: 'keditor-modal-close',
  MODAL_ADD: 'keditor-modal-add',
  SNIPPET: 'keditor-snippet',
  SNIPPET_CONTAINER: 'keditor-snippet-container',
  SNIPPET_COMPONENT: 'keditor-snippet-component',
  SNIPPETS: 'keditor-snippets',
  SNIPPETS_FILTER: 'keditor-snippets-filter',
  SNIPPETS_FILTER_COMPONENT: 'keditor-snippets-filter-component',
  SNIPPETS_FILTER_CONTAINER: 'keditor-snippets-filter-container',
  SNIPPETS_FILTER_LABEL: 'keditor-snippets-filter-label',
  SNIPPETS_SEARCH: 'keditor-snippets-search',
  SNIPPETS_FILTER_WRAPPER: 'keditor-snippets-filter-wrapper',
  SNIPPETS_CONTAINER: 'keditor-snippets-container',
  SNIPPETS_COMPONENT: 'keditor-snippets-component',
  SNIPPETS_WRAPPER: 'keditor-snippets-wrapper',
  SNIPPETS_WRAPPER_CONTAINER: 'keditor-snippets-wrapper-container',
  SNIPPETS_WRAPPER_COMPONENT: 'keditor-snippets-wrapper-component',
  SETTING: 'keditor-setting',
  SETTING_FORM: 'keditor-setting-form',
  SETTING_EXTRA: 'keditor-setting-extra',
  SETTING_CONTAINER: 'keditor-setting-container',
  CONTENT_AREA: 'keditor-content-area',
  CONTENT_AREA_INNER: 'keditor-content-area-inner',
  CONTENT_AREAS: 'keditor-content-areas',
  CONTENT_AREAS_WRAPPER: 'keditor-content-areas-wrapper',
  IFRAME: 'keditor-iframe',
  IFRAME_WRAPPER: 'keditor-iframe-wrapper',
  IFRAME_COVER_WRAPPER: 'keditor-iframe-cover-wrapper',
  IFRAME_COVER_WRAPPER_FAKE: 'keditor-iframe-cover-wrapper-fake',
  IFRAME_COVER: 'keditor-iframe-cover',
  IFRAME_COVER_HIDDEN: 'hidden-cover',
  COMPONENT: 'keditor-component',
  COMPONENT_REPOSITION: 'btn-component-reposition',
  COMPONENT_SETTING: 'btn-component-setting',
  COMPONENT_DUPLICATE: 'btn-component-duplicate',
  COMPONENT_DELETE: 'btn-component-delete',
  COMPONENT_CONTENT: 'keditor-component-content',
  COMPONENT_EXISTING: 'existing-component',
  CONTAINER: 'keditor-container',
  CONTAINER_TOOLBAR: 'keditor-toolbar-container',
  CONTAINER_REPOSITION: 'btn-container-reposition',
  CONTAINER_DUPLICATE: 'btn-container-duplicate',
  CONTAINER_DELETE: 'btn-container-delete',
  CONTAINER_SETTING: 'btn-container-setting',
  CONTAINER_INNER: 'keditor-container-inner',
  CONTAINER_CONTENT: 'keditor-container-content',
  CONTAINER_CONTENT_INNER: 'keditor-container-content-inner',
  CONTAINER_CONTENT_TOOLBAR: 'keditor-container-content-toolbar',
  SUB_CONTAINER: 'keditor-sub-container',
  SUB_CONTAINER_CONTENT: 'keditor-sub-container-content',
  SUB_CONTAINER_TOOLBAR: 'keditor-toolbar-sub-container',
  PREVIEW_AREA: 'keditor-preview-area'
};
/* harmony default export */ __webpack_exports__["default"] = (CLASS_NAMES);

/***/ }),

/***/ "./src/keditor/constants/defaults.js":
/*!*******************************************!*\
  !*** ./src/keditor/constants/defaults.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  /** Title will be showed in left of topbar* @option {String}*/
  title: 'Editing with KEditor',

  /** Enable nested container or not* @option {Boolean}*/
  nestedContainerEnabled: true,

  /** Enable explicit snippet or not. When disable, there is only one button for adding. If add button is in content area or container, you can add component or containers. If add button is in sub-container, you just can add only component. When you add component in content area, please make sure you config "containerForQuickAddComponent" option* @option {Boolean}*/
  explicitSnippetEnabled: false,

  /** containerForQuickAddComponent The container snippet which will be added automatically in content are when you adding a component. Note: component will be added in first container content of container* @option {String}*/
  containerForQuickAddComponent: "\n<div class=\"row\">\n<div class=\"col-sm-12\" data-type=\"container-content\">\n</div>\n</div>\n",

  /** Extra settings in sidebar* @option {Object<String, Object>}* @format:* {*     settingName: {*         title,*         content,*         trigger*         settingShowFunction*     }* }* @settingName.option {String} title* @settingName.option {String} content* @settingName.option {jQuery|Function} trigger If pass as function, argument will be current extra setting. This function must return a jQuery object* @settingName.option {Function} settingShowFunction Same arguments with "containerSettingShowFunction"* @example:* {*     settingName1: {*         title: 'Page Settings',*         content: '<div>This is content of page settings</div>',*         trigger: $('.btn-page-setting'),*         settingShowFunction: function (form, container, keditor) {*             // Do something*         }*     },*     settingName2: {*         title: 'Page Settings 2',*         content: '<div>This is content of page settings 2</div>',*         triggerSelector: '.btn-page-settings',*         trigger: function (extraSetting) {*             return $(extraSetting.triggerSelector);*         },*         settingShowFunction: function (form, container, keditor) {*             // Do something*         }*     }* }*/
  extraSettings: null,

  /** Text content for add content button. This available only when "explicitSippetEnabled" is "false"* @option {String}*/
  btnAddContentText: '<i class="fa fa-plus"></i>',

  /** Text content for add container button* @option {String}*/
  btnAddContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',

  /** Text content for add sub-container button* @option {String}*/
  btnAddSubContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',

  /** Text content for add component button* @option {String}*/
  btnAddComponentText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-list-ul"></i>',

  /** Text content for move button of container* @option {String}*/
  btnMoveContainerText: '<i class="fa fa-sort"></i>',

  /** Text content for move button of component* @option {String}*/
  btnMoveComponentText: '<i class="fa fa-arrows"></i>',

  /** Text content for setting button of container* @option {String}*/
  btnSettingContainerText: '<i class="fa fa-cog"></i>',

  /** Text content for setting button of component* @option {String}*/
  btnSettingComponentText: '<i class="fa fa-cog"></i>',

  /** Text content for duplicate button of container* @option {String}*/
  btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',

  /** Text content for duplicate button of component* @option {String}*/
  btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',

  /** Text content for delete button of container* @option {String}*/
  btnDeleteContainerText: '<i class="fa fa-times"></i>',

  /** Text content for delete button of component* @option {String}*/
  btnDeleteComponentText: '<i class="fa fa-times"></i>',

  /** Text content for confirm dialog when deleting container* @option {String}*/
  confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',

  /** Text content for confirm dialog when deleting container* @option {String}*/
  confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',

  /** Width of mobile device* @option {Number}*/
  widthMobile: 320,

  /** Width of tablet device* @option {Number}*/
  widthTablet: 768,

  /** Default component type of component. If type of component does not exist in KEditor.components, will be used "defaultComponentType" as type of this component. If is function, argument is component* @option {String|Function}* @param {jQuery} component*/
  defaultComponentType: 'blank',

  /** Url to snippets file* @option {String}*/
  snippetsUrl: 'snippets/snippets.html',

  /** The separator character between each categories* @option {String}*/
  snippetsCategoriesSeparator: ';',

  /** Content styles for iframe mode. Beside of this option, KEditor will add all elements which have 'data-type=keditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element* @option {Array<Object>}* @example:* [*     {*         href: '/path/to/style/file'*     }, {*         content: 'a { color: red; }'*     }* ]*/
  contentStyles: [],

  /** Selector of content areas. If is null or selector does not match any elements, will create default content area and wrap all content inside it.* @option {String}*/
  contentAreasSelector: null,

  /** The wrapper element for all contents inside iframe or new div which will contains content of textarea. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag, just leave it as blank* @option {String}*/
  contentAreasWrapper: "<div class=\"".concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREAS_WRAPPER, "\"></div>"),

  /** Enable setting panel for container* @option {Boolean}*/
  containerSettingEnabled: false,

  /** Method will be called when initializing setting panel for container* @option {Function}* @param {jQuery} container* @param {KEditor} keditorInstance*/
  containerSettingInitFunction: null,

  /** Method will be called when setting panel for container is showed* @option {Function}* @param {jQuery} settingForm* @param {jQuery} container* @param {KEditor} keditorInstance*/
  containerSettingShowFunction: null,

  /** Method will be called when setting panel for container is hidden* @option {Function}* @param {jQuery} settingForm* @param {KEditor} keditorInstance*/
  containerSettingHideFunction: null,

  /** Callback will be called after keditor instance is ready* @option {Function}*/
  onReady: function onReady() {},

  /** Callback will be called after clicking on "Save" button in topbar* @option {Function}* @param {String} content*/
  onSave: function onSave(content) {},

  /** Callback will be called after snippets are loaded. If you want to modify snippets content, please return modified* @option {Function}* @param {String} resp* @return {String}*/
  onSnippetsLoaded: function onSnippetsLoaded(resp) {},

  /** Callback will be called when error in loading snippets* @option {Function}* @param {jqXHR} jqXHR*/
  onSnippetsError: function onSnippetsError(jqXHR) {},

  /** Callback will be called after iframe and content areas wrapper inside it are created* @option {Function}* @param {jQuery} iframe* @param {jQuery} iframeHead* @param {jQuery} iframeBody*/
  onInitIframe: function onInitIframe(iframe, iframeHead, iframeBody) {},

  /** Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed* @option {Function}* @param {Event} event* @param {jQuery} contentArea*/
  onContentChanged: function onContentChanged(event, contentArea) {},

  /** Callback will be called before initializing container* @option {Function}* @param {jQuery} contentArea*/
  onBeforeInitContentArea: function onBeforeInitContentArea(contentArea) {},

  /** Callback will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized* @option {Function}* @param {jQuery} contentArea*/
  onInitContentArea: function onInitContentArea(contentArea) {},

  /** Callback will be called before initializing container* @option {Function}* @param {jQuery} container* @param {jQuery} contentArea*/
  onBeforeInitContainer: function onBeforeInitContainer(container, contentArea) {},

  /** Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type=`container-content"). By default, all first level sections under container content will be initialized* @option {Function}* @param {jQuery} container* @param {jQuery} contentArea*/
  onInitContainer: function onInitContainer(container, contentArea) {},

  /** Callback will be called before container is deleted* @option {Function}* @param {Event} event* @param {jQuery} selectedContainer* @param {jQuery} contentArea*/
  onBeforeContainerDeleted: function onBeforeContainerDeleted(event, selectedContainer, contentArea) {},

  /** Callback will be called after container and its components are already deleted* @option {Function}* @param {Event} event* @param {jQuery} selectedContainer* @param {jQuery} contentArea*/
  onContainerDeleted: function onContainerDeleted(event, selectedContainer, contentArea) {},

  /** Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated* @option {Function}* @param {Event} event* @param {jQuery} changedContainer* @param {jQuery} contentArea*/
  onContainerChanged: function onContainerChanged(event, changedContainer, contentArea) {},

  /** Callback will be called when a container is duplicated* @option {Function}* @param {Event} event* @param {jQuery} originalContainer* @param {jQuery} newContainer* @param {jQuery} contentArea*/
  onContainerDuplicated: function onContainerDuplicated(event, originalContainer, newContainer, contentArea) {},

  /** Callback will be called when a container is selected* @option {Function}* @param {Event} event* @param {jQuery} selectedContainer* @param {jQuery} contentArea*/
  onContainerSelected: function onContainerSelected(event, selectedContainer, contentArea) {},

  /** Callback will be called when a container snippet is added in a content area* @option {Function}* @param {Event} event* @param {jQuery} newContainer* @param {jQuery} selectedSnippet* @param {jQuery} contentArea*/
  onContainerSnippetAdded: function onContainerSnippetAdded(event, newContainer, selectedSnippet, contentArea) {},

  /** Callback will be called after component is initialized. This callback is available or not is depend on component type handler.* @option {Function}* @param {jQuery} component*/
  onComponentReady: function onComponentReady(component) {},

  /** Callback will be called before initializing component* @option {Function}* @param {jQuery} component* @param {jQuery} contentArea*/
  onBeforeInitComponent: function onBeforeInitComponent(component, contentArea) {},

  /** Callback will be called when initializing component* @option {Function}* @param {jQuery} component* @param {jQuery} contentArea*/
  onInitComponent: function onInitComponent(component, contentArea) {},

  /** Callback will be called before a component is deleted* @option {Function}* @param {Event} event* @param {jQuery} selectedComponent* @param {jQuery} contentArea*/
  onBeforeComponentDeleted: function onBeforeComponentDeleted(event, selectedComponent, contentArea) {},

  /** Callback will be called after a component is deleted* @option {Function}* @param {Event} event* @param {jQuery} selectedComponent* @param {jQuery} contentArea*/
  onComponentDeleted: function onComponentDeleted(event, selectedComponent, contentArea) {},

  /** Callback will be called when content of a component is changed* @option {Function}* @param {Event} event* @param {jQuery} changedComponent* @param {jQuery} contentArea*/
  onComponentChanged: function onComponentChanged(event, changedComponent, contentArea) {},

  /** Callback will be called when a component is duplicated* @option {Function}* @param {Event} event* @param {jQuery} originalComponent* @param {jQuery} newComponent* @param {jQuery} contentArea*/
  onComponentDuplicated: function onComponentDuplicated(event, originalComponent, newComponent, contentArea) {},

  /** Callback will be called when a component is selected* @option {Function}* @param {Event} event* @param {jQuery} selectedComponent* @param {jQuery} contentArea*/
  onComponentSelected: function onComponentSelected(event, selectedComponent, contentArea) {},

  /** Callback will be called after a component snippet is added in a container* @option {Function}* @param {Event} event* @param {jQuery} newComponent* @param {jQuery} selectedSnippet* @param {jQuery} contentArea*/
  onComponentSnippetAdded: function onComponentSnippetAdded(event, newComponent, selectedSnippet, contentArea) {},

  /** Callback will be called before loading dynamic content* @option {Function}* @param {jQuery} dynamicElement* @param {jQuery} component* @param {jQuery} contentArea Can be null if preview is ON*/
  onBeforeDynamicContentLoad: function onBeforeDynamicContentLoad(dynamicElement, component, contentArea) {},

  /** Callback will be called after dynamic content is loaded* @option {Function}* @param {jQuery} dynamicElement* @param {jqXHR} , jqXHR* @param {jQuery} contentArea Can be null if preview is ON*/
  onDynamicContentLoaded: function onDynamicContentLoaded(dynamicElement, jqXHR, contentArea) {},

  /** Callback will be called if loading dynamic content is error, abort or timeout* @option {Function}* @param {jQuery} dynamicElement* @param {jqXHR} , jqXHR* @param {jQuery} contentArea Can be null if preview is ON*/
  onDynamicContentError: function onDynamicContentError(dynamicElement, jqXHR, contentArea) {}
});

/***/ }),

/***/ "./src/keditor/constants/toolbarType.js":
/*!**********************************************!*\
  !*** ./src/keditor/constants/toolbarType.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  CONTENT_AREA: 0,
  CONTAINER: 1,
  SUB_CONTAINER: 2,
  CONTAINER_CONTENT: 3,
  SUB_CONTAINER_CONTENT: 4,
  COMPONENT: 5
});

/***/ }),

/***/ "./src/keditor/container/convertToContainer.js":
/*!*****************************************************!*\
  !*** ./src/keditor/container/convertToContainer.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, target) {
  var self = this;
  var container;

  if (target.is('section')) {
    target.addClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
    target.wrapInner("<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_INNER, "\"></section>"));
    container = target;
  } else {
    target.wrap("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER, "\">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_INNER, "\"></section>\n</section>\n"));
    container = target.parent().parent();
  }

  self.initContainer(contentArea, container);
});
;

/***/ }),

/***/ "./src/keditor/container/getContainerContent.js":
/*!******************************************************!*\
  !*** ./src/keditor/container/getContainerContent.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (container, isNested) {
  var self = this;
  var containerInner = container.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_INNER)).clone();
  containerInner.find('[data-type=container-content]').not(isNested ? '' : ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT)).each(function () {
    var containerContent = $(this);
    containerContent.removeClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SORTABLE)).removeAttr('id');
    var containerContentInner = containerContent.children();
    var content = '';
    containerContentInner.children().each(function () {
      var child = $(this);

      if (child.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT))) {
        content += self.getComponentContent(child);
      } else if (child.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER))) {
        content += self.getContainerContent(child, true);
      }
    });
    containerContent.html(content);
  });
  return "<section>".concat(containerInner.html(), "</section>");
});

/***/ }),

/***/ "./src/keditor/container/initContainer.js":
/*!************************************************!*\
  !*** ./src/keditor/container/initContainer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toolbarType */ "./src/keditor/constants/toolbarType.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container) {
  var self = this;
  var options = self.options;
  var isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;

  if (!container.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZED) || !container.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING)) {
    container.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING);

    if (typeof options.onBeforeInitContainer === 'function') {
      options.onBeforeInitContainer.call(self, container, contentArea);
    }

    if (isNested) {
      container.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SUB_CONTAINER);
    }

    container.append(self.generateToolbar(isNested ? _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER : _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
    container.attr('id', self.generateId());
    var containerContents = container.find('[data-type="container-content"]');
    containerContents.each(function () {
      var containerContent = $(this);

      if (options.nestedContainerEnabled && !isNested && containerContent.parents('[data-type="container-content"]').length > 0) {
        // Do nothing because it's container content of sub container
        return;
      }

      self.initContainerContent(contentArea, container, containerContent, isNested);
    });

    if (typeof options.onInitContainer === 'function') {
      options.onInitContainer.call(self, container, contentArea);
    }

    container.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZED);
    container.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_INITIALIZING);
  }
});
;

/***/ }),

/***/ "./src/keditor/container/initContainerContent.js":
/*!*******************************************************!*\
  !*** ./src/keditor/container/initContainerContent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toolbarType */ "./src/keditor/constants/toolbarType.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, containerContent, isNested) {
  var self = this;
  var options = self.options;
  var contentAreasWrapper = self.contentAreasWrapper;
  containerContent.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_CONTENT);
  isNested && containerContent.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SUB_CONTAINER_CONTENT);
  containerContent.attr('id', self.generateId());
  var containerContentInner = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_CONTENT_INNER, "\"></div>"));
  containerContentInner.html(containerContent.html());
  containerContent.html(containerContentInner);
  var containerContentToolbar = $(self.generateToolbar(isNested ? _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT : _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT));
  containerContentToolbar.appendTo(containerContent);

  if (options.explicitSnippetEnabled) {
    if (!isNested) {
      if (options.explicitSnippetEnabled) {
        containerContentToolbar.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTAINER)).on('click', function (e) {
          e.preventDefault();
          self.openModal(containerContentInner, false, true);
        });
      }
    }

    containerContentToolbar.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_COMPONENT)).on('click', function (e) {
      e.preventDefault();
      self.openModal(containerContentInner, true, false);
    });
  } else {
    containerContentToolbar.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTENT)).on('click', function (e) {
      e.preventDefault();
      self.openModal(containerContentInner, true, !isNested && options.nestedContainerEnabled);
    });
  }

  containerContentInner.sortable({
    handle: ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT_REPOSITION, " .").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_REPOSITION),
    helper: 'clone',
    items: '> section',
    connectWith: ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_CONTENT_INNER),
    tolerance: 'pointer',
    receive: function receive(event, ui) {
      var helper = ui.helper;
      var item = ui.item;
      var container;

      if (helper) {
        helper.remove();
      }

      container = item.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER));

      if (!container.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_TOOLBAR_SHOWED)) {
        contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER, ".").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_TOOLBAR_SHOWED);
        container.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_TOOLBAR_SHOWED);
      }

      if (typeof options.onContainerChanged === 'function') {
        options.onContainerChanged.call(self, event, container, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, event, contentArea);
      }

      item.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    },
    start: function start(e, ui) {
      ui.item.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    },
    stop: function stop(e, ui) {
      if (ui.helper) {
        ui.helper.remove();
      }

      ui.item.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    }
  });
  containerContentInner.children().each(function () {
    var child = $(this);

    if (child.find('[data-type="container-content"]').length > 0) {
      self.convertToContainer(contentArea, child);
    } else {
      self.convertToComponent(contentArea, container, child, true);
    }
  });
});
;

/***/ }),

/***/ "./src/keditor/contentArea/initContentArea.js":
/*!****************************************************!*\
  !*** ./src/keditor/contentArea/initContentArea.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toolbarType */ "./src/keditor/constants/toolbarType.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, dontInitToolbar) {
  var self = this;
  var options = self.options;
  contentArea.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_AREA);
  var content = contentArea.html();
  var contentAreaInner = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_AREA_INNER, "\"></div>")).html(content);
  contentArea.html(contentAreaInner);

  if (typeof options.onBeforeInitContentArea === 'function') {
    options.onBeforeInitContentArea.call(self, contentArea);
  }

  if (!dontInitToolbar) {
    var contentAreaToolbar = $(self.generateToolbar(_constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));
    contentArea.append(contentAreaToolbar);
    contentAreaToolbar.children(options.explicitSnippetEnabled ? ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTAINER) : ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTENT)).on('click', function (e) {
      e.preventDefault();
      self.openModal(contentAreaInner, !options.explicitSnippetEnabled, true);
    });
  }

  contentAreaInner.sortable({
    handle: ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_TOOLBAR, ":not(.").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SUB_CONTAINER_TOOLBAR, ") .").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER_REPOSITION),
    items: '> section',
    helper: 'clone',
    connectWith: ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CONTENT_AREA),
    axis: 'y',
    tolerance: 'pointer',
    receive: function receive(event, ui) {
      var helper = ui.helper;
      var item = ui.item;

      if (helper) {
        helper.remove();
      }

      self.closeSidebar();

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, event, contentArea);
      }

      item.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    },
    start: function start(e, ui) {
      ui.item.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    },
    stop: function stop(e, ui) {
      if (ui.helper) {
        ui.helper.remove();
      }

      ui.item.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI_DRAGGING);
    }
  });
  contentAreaInner.children('section').each(function () {
    self.convertToContainer(contentArea, $(this));
  });

  if (typeof options.onInitContentArea === 'function') {
    var contentData = options.onInitContentArea.call(self, contentArea);

    if (contentData && contentData.length > 0) {
      $.each(contentData, function () {
        self.convertToContainer(contentArea, $(this));
      });
    }
  }
});
;

/***/ }),

/***/ "./src/keditor/contentArea/initContentAreaWrapper.js":
/*!***********************************************************!*\
  !*** ./src/keditor/contentArea/initContentAreaWrapper.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var element = self.element;
  var options = self.options;
  var wrapper = self.wrapper = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].WRAPPER, "\"></div>"));
  var iframeWrapper = self.iframeWrapper = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_WRAPPER, "\"></div>"));
  var iframe = self.iframe = $("<iframe class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME, "\"></iframe>"));
  element.after(wrapper);
  element.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI_HIDDEN);
  iframeWrapper.html(iframe);
  wrapper.attr('id', self.generateId()).append(iframeWrapper);
  self.iframeDoc = iframe.contents(); // Fix issue Firefox can't render content inside iframe
  // ======================================================

  self.iframeDoc.get(0).open();
  self.iframeDoc.get(0).close(); // ======================================================

  self.iframeWindow = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
  self.iframeHead = self.iframeDoc.find('head');
  self.iframeBody = self.iframeDoc.find('body'); // Generate head content for iframe

  var styles = '';
  $('[data-type="keditor-style"]').each(function () {
    var style = $(this);
    var idStr = style.attr('id') || '';
    var href = style.attr('href') || style.attr('data-href') || '';

    if (href) {
      styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(href, "\" ").concat(idStr, " />\n");
    } else {
      styles += "<style type=\"text/css\" ".concat(idStr, ">").concat(style.html(), "</style>\n");
    }
  });
  $.isArray(options.contentStyles) && $.each(options.contentStyles, function (i, style) {
    var idStr = style.id || '';

    if (style.href) {
      styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(style.href, "\" ").concat(idStr, " />\n");
    } else {
      styles += "<style type=\"text/css\" ".concat(idStr, ">").concat(style.content, "</style>\n");
    }
  });
  self.iframeHead.append(styles); // Generate body content for iframe

  self.contentAreasWrapper = $(options.contentAreasWrapper || '<div />');
  self.contentAreasWrapper.attr('class', "".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREAS_WRAPPER));
  self.contentAreasWrapper.html(element.val() || element.html() || '');

  if (!self.contentAreasWrapper.attr('id')) {
    self.contentAreasWrapper.attr('id', self.generateId());
  }

  self.iframeBody.append(self.contentAreasWrapper);

  if (typeof options.onInitIframe === 'function') {
    options.onInitIframe.call(self, self.iframe, self.iframeHead, self.iframeBody);
  }

  self.initContentAreas();
  self.initIframeActions();
});
;

/***/ }),

/***/ "./src/keditor/contentArea/initContentAreas.js":
/*!*****************************************************!*\
  !*** ./src/keditor/contentArea/initContentAreas.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var contentAreasWrapper = self.contentAreasWrapper;
  var contentAreas;

  if (options.contentAreasSelector) {
    contentAreas = contentAreasWrapper.find(options.contentAreasSelector);
  }

  if (!contentAreas || contentAreas.length === 0) {
    var originalContent = contentAreasWrapper.html();
    contentAreas = $('<div />').html(originalContent);
    contentAreasWrapper.empty().append(contentAreas);
  }

  contentAreas.each(function () {
    var contentArea = $(this);

    if (!contentArea.attr('id')) {
      contentArea.attr('id', self.generateId());
    }

    self.initContentArea(contentArea);
  });
});
;

/***/ }),

/***/ "./src/keditor/destroy.js":
/*!********************************!*\
  !*** ./src/keditor/destroy.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var element = self.element;
  var id = self.id;
  var content = self.getContent(false);
  self.wrapper.remove();

  if (element.is('textarea')) {
    element.val(content);
  } else {
    element.html(content);
  }

  element.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI_HIDDEN);
  element.data('keditor', null);
  delete KEditor.instances[id];
});
;

/***/ }),

/***/ "./src/keditor/getContent.js":
/*!***********************************!*\
  !*** ./src/keditor/getContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (inArray) {
  var self = this;
  var result = [];
  self.contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA_INNER)).each(function () {
    var html = '';
    $(this).children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER)).each(function () {
      var container = $(this);
      html += self.getContainerContent(container);
    });
    result.push(html);
  });
  return inArray ? result : result.join('\n');
});
;

/***/ }),

/***/ "./src/keditor/iframe/initIframeActions.js":
/*!*************************************************!*\
  !*** ./src/keditor/iframe/initIframeActions.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var contentAreasWrapper = self.contentAreasWrapper;
  contentAreasWrapper.on('click', function (e) {
    var sidebar = self.getClickedElement(e, ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR));
    var modal = self.getClickedElement(e, ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL));
    var container = self.getClickedElement(e, ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));

    if (container) {
      if (!container.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)) {
        contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
        container.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
        var contentArea = container.parent();

        if (typeof options.onContainerSelected === 'function') {
          options.onContainerSelected.call(self, e, container, contentArea);
        }
      }
    } else {
      if (!sidebar && !modal) {
        contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
      }
    }

    var component = self.getClickedElement(e, ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));

    if (component) {
      if (!component.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)) {
        contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, ".").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
        component.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);

        var _contentArea = component.parent();

        if (typeof options.onComponentSelected === 'function') {
          options.onComponentSelected.call(self, e, component, _contentArea);
        }
      }
    } else {
      if (!sidebar) {
        contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, ".").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
      }
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_SETTING), function (e) {
    e.preventDefault();
    var btn = $(this);
    var container = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));

    if (contentAreasWrapper.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SETTING_OPENED) && contentAreasWrapper.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SIDEBAR_OPENED)) {
      if (!container.is(self.settingContainer)) {
        self.openSidebar(container);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(container);
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_DUPLICATE), function (e) {
    e.preventDefault();
    var btn = $(this);
    var container = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
    var contentArea = container.parent();
    var newContainer = $(self.getContainerContent(container, btn.parent().hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_TOOLBAR)));
    container.after(newContainer);
    self.convertToContainer(contentArea, newContainer);

    if (typeof options.onContainerDuplicated === 'function') {
      options.onContainerDuplicated.call(self, container, newContainer, contentArea);
    }

    if (typeof options.onContentChanged === 'function') {
      options.onContentChanged.call(self, e, contentArea);
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_DELETE), function (e) {
    e.preventDefault();
    var btn = $(this);

    if (confirm(options.confirmDeleteContainerText)) {
      var container = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
      var components = container.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));
      var contentArea = container.parent();

      if (typeof options.onBeforeContainerDeleted === 'function') {
        options.onBeforeContainerDeleted.call(self, e, container, contentArea);
      }

      var settingComponent = self.settingComponent;

      if (settingComponent) {
        var settingComponentParent = settingComponent.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));

        if (settingComponentParent.is(container)) {
          self.closeSidebar();
        }
      } else if (container.is(self.settingContainer)) {
        self.closeSidebar();
      }

      if (components.length > 0) {
        components.each(function () {
          self.deleteComponent($(this));
        });
      }

      container.remove();

      if (typeof options.onContainerDeleted === 'function') {
        options.onContainerDeleted.call(self, e, container, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, e, contentArea);
      }
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_SETTING), function (e) {
    e.preventDefault();
    var btn = $(this);
    var component = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));

    if (contentAreasWrapper.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SETTING_OPENED) && contentAreasWrapper.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SIDEBAR_OPENED)) {
      if (!component.is(self.settingComponent())) {
        self.openSidebar(component);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(component);
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_DUPLICATE), function (e) {
    e.preventDefault();
    var btn = $(this);
    var component = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));
    var container = component.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
    var contentArea = container.parent();
    var newComponent = $(self.getComponentContent(component));
    component.after(newComponent);
    self.convertToComponent(contentArea, container, newComponent);

    if (typeof options.onComponentDuplicated === 'function') {
      options.onComponentDuplicated.call(self, component, newComponent, contentArea);
    }

    if (typeof options.onContainerChanged === 'function') {
      options.onContainerChanged.call(self, e, container, contentArea);
    }

    if (typeof options.onContentChanged === 'function') {
      options.onContentChanged.call(self, e, contentArea);
    }
  });
  contentAreasWrapper.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_DELETE), function (e) {
    e.preventDefault();
    var btn = $(this);

    if (confirm(options.confirmDeleteComponentText)) {
      var component = btn.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT));
      var container = component.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
      var contentArea = component.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));

      if (typeof options.onBeforeComponentDeleted === 'function') {
        options.onBeforeComponentDeleted.call(self, e, component, contentArea);
      }

      if (component.is(self.settingComponent)) {
        self.closeSidebar();
      }

      self.deleteComponent(component);

      if (typeof options.onComponentDeleted === 'function') {
        options.onComponentDeleted.call(self, e, component, contentArea);
      }

      if (typeof options.onContainerChanged === 'function') {
        options.onContainerChanged.call(self, e, container, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, e, contentArea);
      }
    }
  });
});
;

/***/ }),

/***/ "./src/keditor/iframe/initIframeCover.js":
/*!***********************************************!*\
  !*** ./src/keditor/iframe/initIframeCover.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (iframe, wrapper) {
  if (!wrapper) {
    iframe.wrap("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_WRAPPER_FAKE, "\"></div>"));
    wrapper = iframe.parent();
  }

  wrapper.addClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_WRAPPER));
  var cover = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER, "\"></div>"));
  wrapper.prepend(cover);
  wrapper.on('mouseleave', function () {
    wrapper.removeClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_HIDDEN));
  });
  cover.on('dblclick', function (e) {
    e.preventDefault();
    wrapper.addClass("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_COVER_HIDDEN));
  });
});
;

/***/ }),

/***/ "./src/keditor/index.js":
/*!******************************!*\
  !*** ./src/keditor/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/defaults */ "./src/keditor/constants/defaults.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/log */ "./src/keditor/utils/log.js");
/* harmony import */ var _utils_generateId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateId */ "./src/keditor/utils/generateId.js");
/* harmony import */ var _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/generateToolbar */ "./src/keditor/utils/generateToolbar.js");
/* harmony import */ var _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/beautifyCategories */ "./src/keditor/utils/beautifyCategories.js");
/* harmony import */ var _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getDataAttributes */ "./src/keditor/utils/getDataAttributes.js");
/* harmony import */ var _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/getClickedElement */ "./src/keditor/utils/getClickedElement.js");
/* harmony import */ var _iframe_initIframeActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iframe/initIframeActions */ "./src/keditor/iframe/initIframeActions.js");
/* harmony import */ var _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./iframe/initIframeCover */ "./src/keditor/iframe/initIframeCover.js");
/* harmony import */ var _topbar_initTopbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topbar/initTopbar */ "./src/keditor/topbar/initTopbar.js");
/* harmony import */ var _topbar_initTopbarRightActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topbar/initTopbarRightActions */ "./src/keditor/topbar/initTopbarRightActions.js");
/* harmony import */ var _topbar_initDeviceSwitcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topbar/initDeviceSwitcher */ "./src/keditor/topbar/initDeviceSwitcher.js");
/* harmony import */ var _sidebar_initSidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/initSidebar */ "./src/keditor/sidebar/initSidebar.js");
/* harmony import */ var _sidebar_openSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/openSidebar */ "./src/keditor/sidebar/openSidebar.js");
/* harmony import */ var _sidebar_closeSidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/closeSidebar */ "./src/keditor/sidebar/closeSidebar.js");
/* harmony import */ var _sidebar_initExtraSettings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sidebar/initExtraSettings */ "./src/keditor/sidebar/initExtraSettings.js");
/* harmony import */ var _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./snippet/renderSnippets */ "./src/keditor/snippet/renderSnippets.js");
/* harmony import */ var _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./snippet/initSnippetsFilter */ "./src/keditor/snippet/initSnippetsFilter.js");
/* harmony import */ var _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./snippet/addSnippet */ "./src/keditor/snippet/addSnippet.js");
/* harmony import */ var _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/initSnippetsModal */ "./src/keditor/modal/initSnippetsModal.js");
/* harmony import */ var _modal_openModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/openModal */ "./src/keditor/modal/openModal.js");
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/closeModal */ "./src/keditor/modal/closeModal.js");
/* harmony import */ var _contentArea_initContentAreaWrapper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contentArea/initContentAreaWrapper */ "./src/keditor/contentArea/initContentAreaWrapper.js");
/* harmony import */ var _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./contentArea/initContentAreas */ "./src/keditor/contentArea/initContentAreas.js");
/* harmony import */ var _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./contentArea/initContentArea */ "./src/keditor/contentArea/initContentArea.js");
/* harmony import */ var _container_convertToContainer__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./container/convertToContainer */ "./src/keditor/container/convertToContainer.js");
/* harmony import */ var _container_initContainer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./container/initContainer */ "./src/keditor/container/initContainer.js");
/* harmony import */ var _container_initContainerContent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./container/initContainerContent */ "./src/keditor/container/initContainerContent.js");
/* harmony import */ var _container_getContainerContent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./container/getContainerContent */ "./src/keditor/container/getContainerContent.js");
/* harmony import */ var _component_getComponentType__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/getComponentType */ "./src/keditor/component/getComponentType.js");
/* harmony import */ var _component_convertToComponent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/convertToComponent */ "./src/keditor/component/convertToComponent.js");
/* harmony import */ var _component_initComponent__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/initComponent */ "./src/keditor/component/initComponent.js");
/* harmony import */ var _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/initDynamicContent */ "./src/keditor/component/initDynamicContent.js");
/* harmony import */ var _component_deleteComponent__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./component/deleteComponent */ "./src/keditor/component/deleteComponent.js");
/* harmony import */ var _component_getComponentContent__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./component/getComponentContent */ "./src/keditor/component/getComponentContent.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./init */ "./src/keditor/init.js");
/* harmony import */ var _destroy__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./destroy */ "./src/keditor/destroy.js");
/* harmony import */ var _getContent__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./getContent */ "./src/keditor/getContent.js");
/* harmony import */ var _setContent__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./setContent */ "./src/keditor/setContent.js");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../styles/keditor.less */ "./src/styles/keditor.less");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_less__WEBPACK_IMPORTED_MODULE_40__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









































 // Check dependencies

if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.sortable) {
  error('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
}

window.KEDITOR_DEBUG = true; // KEditor class

var KEditor =
/*#__PURE__*/
function () {
  _createClass(KEditor, null, [{
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].apply(null, args);
    }
  }, {
    key: "error",
    value: function error(message) {
      throw new Error("[ KEditor ] ".concat(message));
    }
  }, {
    key: "init",
    value: function init(target, config) {
      return new KEditor(target, config);
    }
  }]);

  function KEditor(target, config) {
    _classCallCheck(this, KEditor);

    return _init__WEBPACK_IMPORTED_MODULE_36__["default"].apply(this, [target, config]);
  }

  _createClass(KEditor, [{
    key: "generateId",
    value: function generateId() {
      return Object(_utils_generateId__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  }, {
    key: "generateToolbar",
    value: function generateToolbar(type, isComponentConfigurable) {
      return _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, [type, isComponentConfigurable]);
    }
  }, {
    key: "beautifyCategories",
    value: function beautifyCategories(categories) {
      return _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_5__["default"].apply(this, [categories]);
    }
  }, {
    key: "setSettingContainer",
    value: function setSettingContainer(container) {
      this.settingContainer = container;
    }
  }, {
    key: "getSettingContainer",
    value: function getSettingContainer() {
      return this.settingContainer;
    }
  }, {
    key: "setSettingComponent",
    value: function setSettingComponent(component) {
      this.settingComponent = component;
    }
  }, {
    key: "getSettingComponent",
    value: function getSettingComponent() {
      return this.settingComponent;
    }
  }, {
    key: "getDataAttributes",
    value: function getDataAttributes(target, ignoreAttributes, isArray) {
      return _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_6__["default"].apply(this, [target, ignoreAttributes, isArray]);
    }
  }, {
    key: "getComponentType",
    value: function getComponentType(component) {
      return _component_getComponentType__WEBPACK_IMPORTED_MODULE_30__["default"].apply(this, [component]);
    }
  }, {
    key: "getClickedElement",
    value: function getClickedElement(event, selector) {
      return _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_7__["default"].apply(this, [event, selector]);
    } // Iframe
    //---------------------------------

  }, {
    key: "initIframeCover",
    value: function initIframeCover(iframe, wrapper) {
      return _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_9__["default"].apply(this, [iframe, wrapper]);
    } // KEditor clicks
    //---------------------------------

  }, {
    key: "initIframeActions",
    value: function initIframeActions() {
      return _iframe_initIframeActions__WEBPACK_IMPORTED_MODULE_8__["default"].apply(this);
    } // Topbar
    //---------------------------------

  }, {
    key: "initTopbar",
    value: function initTopbar() {
      return _topbar_initTopbar__WEBPACK_IMPORTED_MODULE_10__["default"].apply(this);
    }
  }, {
    key: "initDeviceSwitcher",
    value: function initDeviceSwitcher() {
      return _topbar_initDeviceSwitcher__WEBPACK_IMPORTED_MODULE_12__["default"].apply(this);
    }
  }, {
    key: "initTopbarRightActions",
    value: function initTopbarRightActions() {
      return _topbar_initTopbarRightActions__WEBPACK_IMPORTED_MODULE_11__["default"].apply(this);
    } // Sidebar
    //---------------------------------

  }, {
    key: "initSidebar",
    value: function initSidebar() {
      return _sidebar_initSidebar__WEBPACK_IMPORTED_MODULE_13__["default"].apply(this);
    }
  }, {
    key: "openSidebar",
    value: function openSidebar(target) {
      return _sidebar_openSidebar__WEBPACK_IMPORTED_MODULE_14__["default"].apply(this, [target]);
    }
  }, {
    key: "closeSidebar",
    value: function closeSidebar() {
      return _sidebar_closeSidebar__WEBPACK_IMPORTED_MODULE_15__["default"].apply(this);
    }
  }, {
    key: "initExtraSettings",
    value: function initExtraSettings() {
      return _sidebar_initExtraSettings__WEBPACK_IMPORTED_MODULE_16__["default"].apply(this);
    } // Legacy methods. DEPRECATED
    //---------------------------------

  }, {
    key: "showSettingPanel",
    value: function showSettingPanel(target) {
      this.openSidebar(target);
    }
  }, {
    key: "hideSettingPanel",
    value: function hideSettingPanel() {
      this.closeSidebar();
    } // Snippet modal
    //---------------------------------

  }, {
    key: "initSnippetsModal",
    value: function initSnippetsModal() {
      return _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_20__["default"].apply(this);
    }
  }, {
    key: "renderSnippets",
    value: function renderSnippets(resp) {
      return _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_17__["default"].apply(this, [resp]);
    }
  }, {
    key: "initSnippetsFilter",
    value: function initSnippetsFilter() {
      return _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_18__["default"].apply(this);
    }
  }, {
    key: "openModal",
    value: function openModal(target, showComponent, showContainer) {
      return _modal_openModal__WEBPACK_IMPORTED_MODULE_21__["default"].apply(this, [target, showComponent, showContainer]);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      return _modal_closeModal__WEBPACK_IMPORTED_MODULE_22__["default"].apply(this);
    } // Content areas
    //---------------------------------

  }, {
    key: "initContentAreaWrapper",
    value: function initContentAreaWrapper() {
      return _contentArea_initContentAreaWrapper__WEBPACK_IMPORTED_MODULE_23__["default"].apply(this);
    }
  }, {
    key: "initContentAreas",
    value: function initContentAreas() {
      return _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_24__["default"].apply(this);
    }
  }, {
    key: "initContentArea",
    value: function initContentArea(contentArea, dontInitToolbar) {
      return _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_25__["default"].apply(this, [contentArea, dontInitToolbar]);
    } // Containers
    //---------------------------------

  }, {
    key: "convertToContainer",
    value: function convertToContainer(contentArea, target) {
      return _container_convertToContainer__WEBPACK_IMPORTED_MODULE_26__["default"].apply(this, [contentArea, target]);
    }
  }, {
    key: "initContainer",
    value: function initContainer(contentArea, container) {
      return _container_initContainer__WEBPACK_IMPORTED_MODULE_27__["default"].apply(this, [contentArea, container]);
    }
  }, {
    key: "initContainerContent",
    value: function initContainerContent(contentArea, container, containerContent, isNested) {
      return _container_initContainerContent__WEBPACK_IMPORTED_MODULE_28__["default"].apply(this, [contentArea, container, containerContent, isNested]);
    } // Components
    //---------------------------------

  }, {
    key: "convertToComponent",
    value: function convertToComponent(contentArea, container, target, isExisting) {
      return _component_convertToComponent__WEBPACK_IMPORTED_MODULE_31__["default"].apply(this, [contentArea, container, target, isExisting]);
    }
  }, {
    key: "initComponent",
    value: function initComponent(contentArea, container, component) {
      return _component_initComponent__WEBPACK_IMPORTED_MODULE_32__["default"].apply(this, [contentArea, container, component]);
    }
  }, {
    key: "initDynamicContent",
    value: function initDynamicContent(dynamicElement) {
      return _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_33__["default"].apply(this, [dynamicElement]);
    }
  }, {
    key: "deleteComponent",
    value: function deleteComponent(component) {
      return _component_deleteComponent__WEBPACK_IMPORTED_MODULE_34__["default"].apply(this, [component]);
    } // Get content
    //---------------------------------

  }, {
    key: "getComponentContent",
    value: function getComponentContent(component) {
      return _component_getComponentContent__WEBPACK_IMPORTED_MODULE_35__["default"].apply(this, [component]);
    }
  }, {
    key: "getContainerContent",
    value: function getContainerContent(container, isNested) {
      return _container_getContainerContent__WEBPACK_IMPORTED_MODULE_29__["default"].apply(this, [container, isNested]);
    }
  }, {
    key: "getContent",
    value: function getContent(inArray) {
      return _getContent__WEBPACK_IMPORTED_MODULE_38__["default"].apply(this, [inArray]);
    } // Set content
    //---------------------------------

  }, {
    key: "setContent",
    value: function setContent(content, contentArea) {
      return _setContent__WEBPACK_IMPORTED_MODULE_39__["default"].apply(this, [content, contentArea]);
    } // Destroy
    //---------------------------------

  }, {
    key: "destroy",
    value: function destroy() {
      return _destroy__WEBPACK_IMPORTED_MODULE_37__["default"].apply(this);
    } // Snippet
    //---------------------------------

  }, {
    key: "addSnippet",
    value: function addSnippet(type, title, previewUrl, categories, content, dataAttributes) {
      return _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_19__["default"].apply(this, [type, title, previewUrl, categories, content, dataAttributes]);
    }
  }]);

  return KEditor;
}(); // KEditor plugins


_defineProperty(KEditor, "DEFAULTS", _constants_defaults__WEBPACK_IMPORTED_MODULE_1__["default"]);

_defineProperty(KEditor, "debug", false);

_defineProperty(KEditor, "version", '2.0.0');

_defineProperty(KEditor, "instances", {});

_defineProperty(KEditor, "components", {
  blank: {
    settingEnabled: false
  }
});

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.keditor = function (options) {
  var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var instance = element.data('keditor');

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

window.KEditor = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.keditor = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.keditor.constructor = KEditor;

/***/ }),

/***/ "./src/keditor/init.js":
/*!*****************************!*\
  !*** ./src/keditor/init.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/defaults */ "./src/keditor/constants/defaults.js");

/* harmony default export */ __webpack_exports__["default"] = (function (target, config) {
  var self = this;
  self.element = target;
  self.options = $.extend({}, _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"], config);
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
});
;

/***/ }),

/***/ "./src/keditor/modal/closeModal.js":
/*!*****************************************!*\
  !*** ./src/keditor/modal/closeModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var modal = self.modal;
  self.modalTarget = null;
  modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED);
  modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_NOT_MATCHED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_NOT_MATCHED);
  modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS_FILTER)).val('');
  modal.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SHOWED);
  modal.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_COMPONENT);
  modal.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CONTAINER);
});
;

/***/ }),

/***/ "./src/keditor/modal/initSnippetsModal.js":
/*!************************************************!*\
  !*** ./src/keditor/modal/initSnippetsModal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var modalId = self.generateId();
  var modal = self.modal = $("\n<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL, "\" id=\"").concat(modalId, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_HEADER, "\">\n<button type=\"button\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CLOSE, "\">&times;</button>\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_BODY, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS_WRAPPER, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS, "\"></div>\n</div>\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_FOOTER, "\">\n<button type=\"button\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].BTN, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].BTN_DEFAULT, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CLOSE, "\">Close</button>\n<button type=\"button\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].BTN, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].BTN_PRIMARY, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ADD, "\">Add</button>\n</div>\n</div>\n"));

  if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
    $.ajax({
      type: 'get',
      dataType: 'html',
      url: options.snippetsUrl,
      success: function success(resp) {
        if (typeof options.onSnippetsLoaded === 'function') {
          resp = options.onSnippetsLoaded.call(self, resp) || resp;
        }

        self.renderSnippets(resp);
        self.initSnippetsFilter();
      },
      error: function error(jqXHR) {
        if (typeof options.onSnippetsError === 'function') {
          options.onSnippetsError.call(self, jqXHR);
        }
      }
    }); // Close buttons

    modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CLOSE)).on('click', function (e) {
      e.preventDefault();
      self.closeModal();
    }); // Add button

    modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_ADD)).on('click', function (e) {
      e.preventDefault();
      var selectedSnippet = modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS_WRAPPER, " .").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED));

      if (selectedSnippet.length === 0) {
        return;
      }

      var contentArea = self.modalTarget.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));
      var snippetType = selectedSnippet.attr('data-type');
      var snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
      var snippetContent = snippetContentElement.html();
      var isModalComponent = modal.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_COMPONENT);
      var isModalContainer = modal.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CONTAINER);
      var isAddingContainer = false;
      var isAddingComponent = false;
      var isAddingComponentWithContainer = false;

      if (options.explicitSnippetEnabled) {
        isAddingComponent = isModalComponent;
        isAddingContainer = isModalContainer;
      } else {
        if (snippetType === 'container') {
          isAddingContainer = true;
        } else {
          if (isModalComponent && !isModalContainer) {
            isAddingComponent = true;
          }

          if (isModalComponent && isModalContainer) {
            if (self.modalTarget.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT_INNER))) {
              isAddingComponent = true;
            } else {
              isAddingComponentWithContainer = true;
            }
          }
        }
      }

      var newContainer;
      var newComponent;

      if (isAddingContainer) {
        self.contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER, ".").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);
        newContainer = $("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED, "\">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_INNER, "\">").concat(snippetContent, "</section>\n</section>\n"));
        self.modalTarget.append(newContainer);

        if (typeof options.onContainerSnippetAdded === 'function') {
          options.onContainerSnippetAdded.call(self, e, newContainer, selectedSnippet, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }

        self.initContainer(contentArea, newContainer);
      }

      if (isAddingComponent) {
        var dataAttributes = self.getDataAttributes(snippetContentElement, null, true);
        newComponent = $("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, "\" data-type=\"").concat(snippetType, "\" ").concat(dataAttributes.join(' '), ">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_CONTENT, "\">").concat(snippetContent, "</section>\n</section>\n"));
        self.modalTarget.append(newComponent);
        var container = self.modalTarget.closest(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));

        if (typeof options.onComponentSnippetAdded === 'function') {
          options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }

        self.initComponent(contentArea, container, newComponent);
      }

      if (isAddingComponentWithContainer) {
        self.contentAreasWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER, ".").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED);

        var _dataAttributes = self.getDataAttributes(snippetContentElement, null, true);

        newContainer = $("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_TOOLBAR_SHOWED, "\">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_INNER, "\">").concat(options.containerForQuickAddComponent, "</section>\n</section>\n"));
        newComponent = $("\n<section class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, "\" data-type=\"").concat(snippetType, "\" ").concat(_dataAttributes.join(' '), ">\n<section class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT_CONTENT, "\">").concat(snippetContent, "</section>\n</section>\n"));
        newContainer.find('[data-type="container-content"]').eq(0).html(newComponent);
        self.modalTarget.append(newContainer);

        if (typeof options.onComponentSnippetAdded === 'function') {
          options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }

        self.initContainer(contentArea, newContainer);
      }

      self.closeModal();
    }); // Action click for snippet

    modal.on('click', ".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPET), function (e) {
      e.preventDefault();
      var snippet = $(this);

      if (!snippet.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED)) {
        snippet.parent().find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED);
        snippet.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SELECTED);
      }
    });
    var cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    modal.on(cssTransitionEnd, function () {
      if (!modal.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SHOWED)) {
        modal.css('display', 'none');
        $(document.body).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_MODAL_OPENED);
      }
    });
    modal.appendTo(document.body);
  } else {
    self.error('"snippetsUrl" must be not null!');
  }
});
;

/***/ }),

/***/ "./src/keditor/modal/openModal.js":
/*!****************************************!*\
  !*** ./src/keditor/modal/openModal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (target, showComponent, showContainer) {
  var self = this;
  var modal = self.modal;
  console.log(showComponent, showContainer);
  self.modalTarget = target;
  showComponent && modal.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_COMPONENT);
  showContainer && modal.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_CONTAINER);
  modal.css('display', 'block');
  $(document.body).addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_MODAL_OPENED);
  setTimeout(function () {
    modal.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_SHOWED);
  }, 0);
});
;

/***/ }),

/***/ "./src/keditor/setContent.js":
/*!***********************************!*\
  !*** ./src/keditor/setContent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (content, contentArea) {
  var self = this;
  var contentAreasWrapper = self.wrapper;

  if (!contentArea) {
    contentArea = contentAreasWrapper.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));
  } else {
    if (!contentArea.jquery) {
      contentArea = contentAreasWrapper.find(contentArea);
    }
  }

  if (contentArea.length === 0) {
    self.error('Content area does not exist!');
  }

  contentArea.html(content);
  self.initContentArea(contentArea, true);
});
;

/***/ }),

/***/ "./src/keditor/sidebar/closeSidebar.js":
/*!*********************************************!*\
  !*** ./src/keditor/sidebar/closeSidebar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var sidebar = self.sidebar;
  var activeForm = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY)).children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE));

  if (activeForm.length > 0) {
    if (activeForm.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_CONTAINER))) {
      if (typeof options.containerSettingHideFunction === 'function') {
        options.containerSettingHideFunction.call(self, activeForm, self);
      }
    } else if (activeForm.is('[data-type]')) {
      var activeType = activeForm.attr('data-type');
      var componentData = KEditor.components[activeType];

      if (typeof componentData.hideSettingForm === 'function') {
        componentData.hideSettingForm.call(componentData, activeForm, self);
      }
    } else if (activeForm.is('[data-extra-setting]')) {// TODO: Will add method when hiding setting for Extra setting
    }

    activeForm.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  }

  self.setSettingComponent(null);
  self.setSettingContainer(null);
  sidebar.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_OPENED);
});

/***/ }),

/***/ "./src/keditor/sidebar/initExtraSettings.js":
/*!**************************************************!*\
  !*** ./src/keditor/sidebar/initExtraSettings.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _this = this;

  var self = this;
  var options = self.options;
  var sidebarBody = self.sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY));

  if ($.isPlainObject(options.extraSettings)) {
    var _loop = function _loop(key) {
      var extraSetting = options.extraSettings[key];
      var form = $("<div data-extra-setting=\"".concat(key, "\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_EXTRA, "\"></div>"));
      form.html(extraSetting.content);
      sidebarBody.append(form);
      var trigger = typeof extraSetting.trigger === 'function' ? extraSetting.trigger.call(_this, extraSetting) : extraSetting.trigger;
      trigger.on('click', function (e) {
        e.preventDefault();
        self.openSidebar(trigger);
      });
    };

    for (var key in options.extraSettings) {
      _loop(key);
    }
  }
});
;

/***/ }),

/***/ "./src/keditor/sidebar/initSidebar.js":
/*!********************************************!*\
  !*** ./src/keditor/sidebar/initSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var sidebarId = self.generateId();
  var sidebar = self.sidebar = $("\n<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR, "\" id=\"").concat(sidebarId, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_HEADER, "\">\n<span class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_TITLE, "\"></span>\n<a href=\"javascript:void(0);\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_CLOSER, "\">&times;</a>\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY, "\"></div>\n</div>\n"));
  sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_CLOSER)).on('click', function (e) {
    e.preventDefault();
    self.closeSidebar();
  });
  var sidebarBody = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY));
  sidebarBody.on('submit', 'form', function (e) {
    e.preventDefault();
    return false;
  });

  if (options.containerSettingEnabled === true) {
    if (typeof options.containerSettingInitFunction === 'function') {
      var form = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_CONTAINER, "\"></div>"));
      sidebarBody.append(form);
      options.containerSettingInitFunction.call(self, form, self);
    } else {
      self.error('"containerSettingInitFunction" is not function!');
    }
  }

  sidebar.appendTo(self.wrapper);
});
;

/***/ }),

/***/ "./src/keditor/sidebar/openSidebar.js":
/*!********************************************!*\
  !*** ./src/keditor/sidebar/openSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (target) {
  var self = this;
  var options = self.options;
  var sidebar = self.sidebar;
  var sidebarTitle = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_TITLE));
  var sidebarBody = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY));
  var activeForm = sidebarBody.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE));
  activeForm.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);

  if (target.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT))) {
    self.setSettingComponent(target);
    self.setSettingContainer(null);
    var componentType = self.getComponentType(target);
    var componentData = KEditor.components[componentType];
    sidebarTitle.html(componentData.settingTitle);
    var settingFormClass = "".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING, "-").concat(componentType);
    var settingForm = sidebarBody.find(".".concat(settingFormClass));

    if (settingForm.length === 0) {
      var _componentData = KEditor.components[componentType];

      if (typeof _componentData.initSettingForm === 'function') {
        settingForm = $("\n<div\ndata-type=\"".concat(componentType, "\"\nclass=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM, " ").concat(settingFormClass, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE, "\"\n>\n</div>\n"));
        var loadingText = $('<span />').html('Loading...');
        sidebarBody.append(settingForm);
        settingForm.append(loadingText);

        var initFunction = _componentData.initSettingForm.call(_componentData, settingForm, self);

        $.when(initFunction).done(function () {
          setTimeout(function () {
            loadingText.remove();

            if (typeof _componentData.showSettingForm === 'function') {
              _componentData.showSettingForm.call(_componentData, settingForm, target, self);
            }
          }, 100);
        });
      }
    } else {
      if (typeof componentData.showSettingForm === 'function') {
        componentData.showSettingForm.call(componentData, settingForm, target, self);
      }

      settingForm.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    }
  } else if (target.is("".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER))) {
    self.setSettingContainer(target);
    self.setSettingComponent(null);
    sidebarTitle.html('Container Settings');

    var _settingForm = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_CONTAINER));

    if (typeof options.containerSettingShowFunction === 'function') {
      options.containerSettingShowFunction.call(self, _settingForm, target, self);
    }

    _settingForm.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  } else {
    // should be extra tabs
    var extraKey = target.attr('data-extra-setting');
    var extraTabData = options.extraSettings[extraKey];
    sidebarTitle.html(extraTabData.title);

    var _settingForm2 = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_EXTRA, "[data-extra-setting=").concat(extraKey, "]"));

    typeof extraTabData.settingShowFunction === 'function' && extraTabData.settingShowFunction.call(self, _settingForm2, target, self);

    _settingForm2.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  }

  sidebar.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_OPENED);
});
;

/***/ }),

/***/ "./src/keditor/snippet/addSnippet.js":
/*!*******************************************!*\
  !*** ./src/keditor/snippet/addSnippet.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderSnippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSnippet */ "./src/keditor/snippet/renderSnippet.js");
/* harmony import */ var _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSnippetFilter */ "./src/keditor/snippet/renderSnippetFilter.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (type, title, previewUrl, categories, content, extraData) {
  var self = this;

  var _renderSnippet$call = _renderSnippet__WEBPACK_IMPORTED_MODULE_0__["default"].call(self, type, title, previewUrl, categories, content, extraData),
      _renderSnippet$call2 = _slicedToArray(_renderSnippet$call, 2),
      snippetPreviewHtml = _renderSnippet$call2[0],
      snippetContentHtml = _renderSnippet$call2[1];

  self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
  self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
  self.modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_2__["default"].SNIPPETS)).append(snippetPreviewHtml);
  self.modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_2__["default"].MODAL_BODY)).append(snippetContentHtml);

  var _renderSnippetFilter$ = _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this),
      _renderSnippetFilter$2 = _slicedToArray(_renderSnippetFilter$, 2),
      categoriesOptions = _renderSnippetFilter$2[0],
      snippetsWrapper = _renderSnippetFilter$2[1];

  snippetsWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_2__["default"].SNIPPETS_FILTER)).html(categoriesOptions).trigger('change');
});
;

/***/ }),

/***/ "./src/keditor/snippet/initSnippetsFilter.js":
/*!***************************************************!*\
  !*** ./src/keditor/snippet/initSnippetsFilter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSnippetFilter */ "./src/keditor/snippet/renderSnippetFilter.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;

  var _renderSnippetFilter$ = _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this),
      _renderSnippetFilter$2 = _slicedToArray(_renderSnippetFilter$, 2),
      categoriesOptions = _renderSnippetFilter$2[0],
      snippetsWrapper = _renderSnippetFilter$2[1];

  snippetsWrapper.prepend("\n<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_FILTER_WRAPPER, "\">\n<label class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_FILTER_LABEL, "\">Category:</label>\n<select class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_FILTER, "\">\n").concat(categoriesOptions, "\n</select>\n<input type=\"text\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_SEARCH, "\" value=\"\" placeholder=\"Type to search...\" />\n</div>\n"));
  var txtSearch = snippetsWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_SEARCH));
  var cbbFilter = snippetsWrapper.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS_FILTER));

  var doFilter = function doFilter() {
    var selectedCategory = (cbbFilter.val() || '').toLowerCase();
    var searchText = (txtSearch.val() || '').toLowerCase();
    var snippets = self.modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPET));
    snippets.filter(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_SELECTED)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_SELECTED);

    if (selectedCategory || searchText) {
      snippets.each(function () {
        var snippet = $(this);
        var dataCategoriesString = snippet.attr('data-keditor-categories').toLowerCase();
        var dataCategories = dataCategoriesString.split(options.snippetsCategoriesSeparator);
        var error = 0;

        if (selectedCategory) {
          if ($.inArray(selectedCategory, dataCategories) === -1) {
            error++;
          }
        }

        if (searchText) {
          var title = snippet.attr('title').toLowerCase();

          if (title.indexOf(searchText) === -1 && dataCategoriesString.indexOf(searchText) === -1) {
            error++;
          }
        }

        snippet[error === 0 ? 'removeClass' : 'addClass'](_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_NOT_MATCHED);
      });
    } else {
      snippets.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].STATE_NOT_MATCHED);
    }
  };

  cbbFilter.on('change', function () {
    doFilter();
  });
  var timer;
  txtSearch.on('keydown', function () {
    clearTimeout(timer);
    timer = setTimeout(doFilter, 200);
  });
});
;

/***/ }),

/***/ "./src/keditor/snippet/renderSnippet.js":
/*!**********************************************!*\
  !*** ./src/keditor/snippet/renderSnippet.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function (type, title, previewUrl, categories, content, extraData) {
  var self = this;
  var options = self.options;
  var snippetId = self.generateId();
  var snippetPreviewHtml = "\n<section\nclass=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPET, " ").concat(type === 'container' ? _constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPET_CONTAINER : _constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPET_COMPONENT, "\"\ndata-snippet=\"#").concat(snippetId, "\"\ndata-type=\"").concat(type, "\"\ntitle=\"").concat(title, "\"\ndata-keditor-categories=\"").concat(categories, "\"\n>\n<span><span style=\"background-image: url('").concat(previewUrl, "')\"></span></span>\n</section>\n");
  var snippetContentHtml = "<script id=\"".concat(snippetId, "\" type=\"text/html\" ").concat(extraData.join(' '), ">").concat(content, "</script>");
  categories = categories.split(options.snippetsCategoriesSeparator);

  if (type === 'container') {
    self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
  } else if (type.indexOf('component') !== -1) {
    self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
  }

  return [snippetPreviewHtml, snippetContentHtml];
});
;

/***/ }),

/***/ "./src/keditor/snippet/renderSnippetFilter.js":
/*!****************************************************!*\
  !*** ./src/keditor/snippet/renderSnippetFilter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var modal = self.modal;
  var categoriesOptions = "<option value=\"\" selected=\"selected\">All</option>";
  $.each(self.snippetsComponentCategories, function (i, category) {
    categoriesOptions += "<option value=\"".concat(category, "\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS_FILTER_COMPONENT, "\">").concat(category, "</option>");
  });
  $.each(self.snippetsContainerCategories, function (i, category) {
    var isDuplicateWithComponent = $.inArray(category, self.snippetsComponentCategories) !== -1;
    categoriesOptions += "<option value=\"".concat(category, "\" class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SNIPPETS_FILTER_CONTAINER, " ").concat(isDuplicateWithComponent ? _constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_DUPLICATED : '', "\">").concat(category, "</option>");
  });
  return [categoriesOptions, modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].MODAL_HEADER))];
});
;

/***/ }),

/***/ "./src/keditor/snippet/renderSnippets.js":
/*!***********************************************!*\
  !*** ./src/keditor/snippet/renderSnippets.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _renderSnippet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderSnippet */ "./src/keditor/snippet/renderSnippet.js");
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function (resp) {
  var self = this;
  var snippetsContentHtml = '';
  var snippetsHtml = '';
  self.snippetsContainerCategories = [];
  self.snippetsComponentCategories = [];
  $(resp).filter('div').each(function () {
    var snippet = $(this);
    var content = snippet.html().trim();
    var previewUrl = snippet.attr('data-preview');
    var type = snippet.attr('data-type');
    var title = snippet.attr('data-keditor-title');
    var categories = snippet.attr('data-keditor-categories') || '';
    var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);

    var _renderSnippet$call = _renderSnippet__WEBPACK_IMPORTED_MODULE_0__["default"].call(self, type, title, previewUrl, categories, content, dataAttributes),
        _renderSnippet$call2 = _slicedToArray(_renderSnippet$call, 2),
        snippetPreviewHtml = _renderSnippet$call2[0],
        snippetContentHtml = _renderSnippet$call2[1];

    snippetsHtml += snippetPreviewHtml;
    snippetsContentHtml += snippetContentHtml;
  });
  self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
  self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
  self.modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].SNIPPETS)).html(snippetsHtml);
  self.modal.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].MODAL_BODY)).append(snippetsContentHtml);
});
;

/***/ }),

/***/ "./src/keditor/topbar/initDeviceSwitcher.js":
/*!**************************************************!*\
  !*** ./src/keditor/topbar/initDeviceSwitcher.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var topbarCenter = self.topbarCenter;
  var options = self.options;
  var btnMobile = $("\n<a href=\"javascript:void(0);\" title=\"View on mobile\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\">\n<i class=\"fa fa-fw fa-mobile\"></i>\n</a>\n"));
  btnMobile.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    self.iframeWrapper.css('width', options.widthMobile);
    btnMobile.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  });
  var btnTablet = $("\n<a href=\"javascript:void(0);\" title=\"View on tablet\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\">\n<i class=\"fa fa-fw fa-tablet\"></i>\n</a>\n"));
  btnTablet.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    self.iframeWrapper.css('width', options.widthTablet);
    btnTablet.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  });
  var btnDesktop = $("\n<a href=\"javascript:void(0);\" title=\"View on desktop\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE, "\">\n<i class=\"fa fa-fw fa-desktop\"></i>\n</a>\n"));
  btnDesktop.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    self.iframeWrapper.css('width', '');
    btnDesktop.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
  });
  topbarCenter.append(btnMobile);
  topbarCenter.append(btnTablet);
  topbarCenter.append(btnDesktop);
});
;

/***/ }),

/***/ "./src/keditor/topbar/initTopbar.js":
/*!******************************************!*\
  !*** ./src/keditor/topbar/initTopbar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var topbarId = self.generateId();
  var options = self.options;
  self.topbar = $("\n<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR, "\" id=\"").concat(topbarId, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_LEFT, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_TITLE, "\" title=\"").concat(options.title, "\">").concat(options.title, "</div>\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_CENTER, "\">\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_RIGHT, "\">\n</div>\n</div>\n"));
  self.topbarLeft = self.topbar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_LEFT));
  self.topbarCenter = self.topbar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_CENTER));
  self.topbarRight = self.topbar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_RIGHT));
  self.topbar.appendTo(self.wrapper);
  self.initDeviceSwitcher();
  self.initTopbarRightActions();
});
;

/***/ }),

/***/ "./src/keditor/topbar/initTopbarRightActions.js":
/*!******************************************************!*\
  !*** ./src/keditor/topbar/initTopbarRightActions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/classNames */ "./src/keditor/constants/classNames.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var topbarRight = self.topbarRight;
  var btnPreview = $("<a href=\"javascript:void(0);\" title=\"Preview OFF\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"></a>"));
  var iconPreviewOff = $("<i class=\"fa fa-fw fa-eye-slash\"></i>");
  var iconPreviewOn = $("<i class=\"fa fa-fw fa-eye\" style=\"display: none;\"></i>");
  btnPreview.append(iconPreviewOff);
  btnPreview.append(iconPreviewOn);
  self.previewArea = $("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].PREVIEW_AREA, "\" style=\"display: none;\"></div>"));
  self.contentAreasWrapper.after(self.previewArea);
  btnPreview.on('click', function (e) {
    e.preventDefault();
    var isPreviewOn = btnPreview.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    btnPreview[isPreviewOn ? 'removeClass' : 'addClass'](_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].STATE_ACTIVE);
    btnPreview.attr('title', isPreviewOn ? 'Preview OFF' : 'Preview ON');
    iconPreviewOff.css('display', isPreviewOn ? '' : 'none');
    iconPreviewOn.css('display', isPreviewOn ? 'none' : '');
    self.contentAreasWrapper.css('display', isPreviewOn ? '' : 'none');
    self.previewArea.css('display', isPreviewOn ? 'none' : '');

    if (!isPreviewOn) {
      var content = self.getContent();
      self.previewArea.html(content).find('[data-dynamic-href]').each(function () {
        var dynamicElement = $(this);
        dynamicElement.html('Loading...');
        self.initDynamicContent(dynamicElement);
      });
    }
  });
  var btnSave = $("<a href=\"javascript:void(0);\" title=\"Save\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-save\"></i></a>"));
  btnSave.on('click', function (e) {
    e.preventDefault();
    var content = self.getContent();
    typeof options.onSave === 'function' && options.onSave.call(self, content);
  });
  topbarRight.append(btnSave);
  topbarRight.append(btnPreview);
});
;

/***/ }),

/***/ "./src/keditor/utils/beautifyCategories.js":
/*!*************************************************!*\
  !*** ./src/keditor/utils/beautifyCategories.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (categories) {
  var newArray = [];

  for (var i = 0; i < categories.length; i++) {
    var category = categories[i] || '';

    if (category !== '' && $.inArray(category, newArray) === -1) {
      newArray.push(category);
    }
  }

  return newArray.sort();
});
;

/***/ }),

/***/ "./src/keditor/utils/generateId.js":
/*!*****************************************!*\
  !*** ./src/keditor/utils/generateId.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var timestamp = new Date().getTime();
  var random = Math.round(Math.random() * 9876543210);
  return "keditor-ui-".concat(timestamp).concat(random);
});
;

/***/ }),

/***/ "./src/keditor/utils/generateToolbar.js":
/*!**********************************************!*\
  !*** ./src/keditor/utils/generateToolbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/toolbarType */ "./src/keditor/constants/toolbarType.js");

/* harmony default export */ __webpack_exports__["default"] = (function (type, isComponentConfigurable) {
  var self = this;
  var options = self.options;
  var settingBtn = '';

  if (!options.explicitSnippetEnabled) {
    var toolbarClass = '';

    switch (type) {
      case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA:
        toolbarClass = 'keditor-content-area-toolbar';

      case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT:
      case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT:
        toolbarClass = 'keditor-container-content-toolbar';
        return "\n<div class=\"keditor-ui ".concat(toolbarClass, "\">\n<a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-content\" title=\"Add content\">").concat(options.btnAddContentText, "</a>\n</div>\n");

      default: // Do nothing

    }
  }

  switch (type) {
    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA:
      return "\n<div class=\"keditor-ui keditor-content-area-toolbar\">\n<a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-container\" title=\"Add container\">".concat(options.btnAddContainerText, "</a>\n</div>\n");

    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER:
      if (options.containerSettingEnabled === true) {
        settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-setting\">".concat(options.btnSettingContainerText, "</a>");
      }

      return "\n<div class=\"keditor-toolbar keditor-toolbar-container\">\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-reposition\">".concat(options.btnMoveContainerText, "</a>\n").concat(settingBtn, "\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-duplicate\">").concat(options.btnDuplicateContainerText, "</a>\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-delete\">").concat(options.btnDeleteContainerText, "</a>\n</div>\n");

    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER:
      if (options.containerSettingEnabled === true) {
        settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-setting\">".concat(options.btnSettingContainerText, "</a>");
      }

      return "\n<div class=\"keditor-toolbar keditor-toolbar-container keditor-toolbar-sub-container\">\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-reposition\">".concat(options.btnMoveContainerText, "</a>\n").concat(settingBtn, "\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-duplicate\">").concat(options.btnDuplicateContainerText, "</a>\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-container-delete\">").concat(options.btnDeleteContainerText, "</a>\n</div>\n");

    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT:
      return "\n<div class=\"keditor-ui keditor-container-content-toolbar keditor-btn-group\">\n<a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-container\" title=\"Add sub-container\">".concat(options.btnAddSubContainerText, "</a>\n<a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-component\" title=\"Add component\">").concat(options.btnAddComponentText, "</a>\n</div>\n");

    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT:
      return "\n<div class=\"keditor-ui keditor-container-content-toolbar\">\n<a href=\"javascript:void(0)\" class=\"keditor-ui keditor-btn keditor-btn-default btn-add-component\" title=\"Add component\">".concat(options.btnAddComponentText, "</a>\n</div>\n");

    case _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT:
      if (isComponentConfigurable) {
        settingBtn = "<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-setting\">".concat(options.btnSettingComponentText, "</a>");
      }

      return "\n<div class=\"keditor-toolbar keditor-toolbar-component\">\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-reposition\">".concat(options.btnMoveComponentText, "</a>\n").concat(settingBtn, "\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-duplicate\">").concat(options.btnDuplicateComponentText, "</a>\n<a href=\"javascript:void(0);\" class=\"keditor-ui btn-component-delete\">").concat(options.btnDeleteComponentText, "</a>\n</div>\n");

    default: // Do nothing

  }
});
;

/***/ }),

/***/ "./src/keditor/utils/getClickedElement.js":
/*!************************************************!*\
  !*** ./src/keditor/utils/getClickedElement.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (event, selector) {
  var target = $(event.target);
  var closest = target.closest(selector);

  if (target.is(selector)) {
    return target;
  } else if (closest.length > 0) {
    return closest;
  } else {
    return null;
  }
});
;

/***/ }),

/***/ "./src/keditor/utils/getDataAttributes.js":
/*!************************************************!*\
  !*** ./src/keditor/utils/getDataAttributes.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (target, ignoreAttributes, isArray) {
  var dataAttributes = isArray ? [] : {};

  if (!ignoreAttributes) {
    ignoreAttributes = [];
  }

  $.each(target.get(0).attributes, function (i, attr) {
    if (attr.name.indexOf('data-') === 0 && $.inArray(attr.name, ignoreAttributes) === -1) {
      if (isArray) {
        dataAttributes.push("".concat(attr.name, "=\"").concat(attr.value, "\""));
      } else {
        dataAttributes[attr.name] = attr.value;
      }
    }
  });
  return dataAttributes;
});
;

/***/ }),

/***/ "./src/keditor/utils/log.js":
/*!**********************************!*\
  !*** ./src/keditor/utils/log.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (console && typeof console.log === 'function' && window.KEDITOR_DEBUG) {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    console.log.apply(console, ['[ KEditor ] '].concat(args));
  }
});

/***/ }),

/***/ "./src/styles/keditor.less":
/*!*********************************!*\
  !*** ./src/styles/keditor.less ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ })

/******/ });
});
//# sourceMappingURL=keditor.js.map