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
/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, target, isExisting) {
  if (target.is('.keditor-container-content-toolbar')) {
    return;
  }

  var self = this;
  var isSection = target.is('section');
  var component;

  if (isSection) {
    target.addClass('keditor-ui keditor-component');
    target.wrapInner('<section class="keditor-ui keditor-component-content"></section>');
    component = target;
  } else {
    target.wrap('<section class="keditor-ui keditor-component"><section class="keditor-ui keditor-component-content"></section></section>');
    component = target.parent().parent();
  }

  if (isExisting) {
    component.addClass('existing-component');
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
/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  var self = this;
  var clonedComponent = component.clone();
  var componentType = self.getComponentType(clonedComponent);
  var componentData = KEditor.components[componentType];
  var dataAttributes = self.getDataAttributes(clonedComponent, null, true);
  var content; // Handle iframe-wrapper

  var iframeWrapper = component.find('.keditor-iframe-wrapper');

  if (iframeWrapper.length > 0) {
    iframeWrapper.find('.keditor-iframe-cover').remove();
    var iframe = iframeWrapper.children('iframe');

    if (iframeWrapper.hasClass('keditor-iframe-wrapper-fake')) {
      iframe.unwrap();
    } else {
      iframeWrapper.removeClass('keditor-iframe-wrapper');
    }
  }

  if (typeof componentData.getContent === 'function') {
    content = componentData.getContent.call(componentData, clonedComponent, self);
  } else {
    var componentContent = clonedComponent.children('.keditor-component-content');
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

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, component) {
  var self = this;
  var options = self.options;

  if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
    component.addClass('keditor-initializing-component');
    component.attr('id', self.generateId());

    if (typeof options.onBeforeInitComponent === 'function') {
      options.onBeforeInitComponent.call(self, component, contentArea);
    }

    var componentContent = component.children('.keditor-component-content');
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

    component.addClass('keditor-initialized-component');
    component.removeClass('keditor-initializing-component');
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
/* harmony default export */ __webpack_exports__["default"] = (function (dynamicElement) {
  var self = this;
  var options = self.options;
  var component = dynamicElement.closest('.keditor-component');
  var contentArea = dynamicElement.closest('.keditor-content-area');
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
  WRAPPER: 'keditor-wrapper',
  HIDDEN_ELEMENT: 'keditor-hidden-element',
  SIDEBAR: 'keditor-sidebar',
  SIDEBAR_HEADER: 'keditor-sidebar-header',
  SIDEBAR_BODY: 'keditor-sidebar-body',
  SIDEBAR_TITLE: 'keditor-sidebar-title',
  SIDEBAR_CLOSER: 'keditor-sidebar-closer',
  SIDEBAR_OPENED: 'opened',
  TOPBAR: 'keditor-topbar',
  TOPBAR_LEFT: 'keditor-topbar-left',
  TOPBAR_RIGHT: 'keditor-topbar-right',
  TOPBAR_CENTER: 'keditor-topbar-center',
  TOPBAR_BUTTON: 'keditor-topbar-btn',
  TOPBAR_BUTTON_ACTIVE: 'active',
  TOPBAR_TITLE: 'keditor-topbar-title',
  SETTING: 'keditor-setting',
  SETTING_CONTAINER: 'keditor-setting-container',
  SETTING_FORM: 'keditor-setting-form',
  SETTING_FORM_ACTIVE: 'active',
  CONTENT_AREAS_WRAPPER: 'keditor-content-areas-wrapper',
  CONTENT_AREAS: 'keditor-content-areas',
  CONTENT_AREA: 'keditor-content-area',
  IFRAME: 'keditor-iframe',
  IFRAME_WRAPPER: 'keditor-iframe-wrapper',
  IFRAME_FAKER: 'keditor-iframe-faker',
  IFRAME_COVER_WRAPPER: 'keditor-iframe-cover-wrapper',
  IFRAME_COVER: 'keditor-iframe-cover',
  IFRAME_COVER_HIDDEN: 'hidden-cover',
  COMPONENT: 'keditor-component'
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

  /** Enable filtering snippets by categories and text searching or not* @option {Boolean}*/
  snippetsFilterEnabled: true,

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

  /** Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type="container-content"). By default, all first level sections under container content will be initialized* @option {Function}* @param {jQuery} container* @param {jQuery} contentArea*/
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

  /** Callback will be called before loading dynamic content* @option {Function}* @param {jQuery} dynamicElement* @param {jQuery} component* @param {jQuery} contentArea*/
  onBeforeDynamicContentLoad: function onBeforeDynamicContentLoad(dynamicElement, component, contentArea) {},

  /** Callback will be called after dynamic content is loaded* @option {Function}* @param {jQuery} dynamicElement* @param {jqXHR} , jqXHR* @param {jQuery} contentArea*/
  onDynamicContentLoaded: function onDynamicContentLoaded(dynamicElement, jqXHR, contentArea) {},

  /** Callback will be called if loading dynamic content is error, abort or timeout* @option {Function}* @param {jQuery} dynamicElement* @param {jqXHR} , jqXHR* @param {jQuery} contentArea*/
  onDynamicContentError: function onDynamicContentError(dynamicElement, jqXHR, contentArea) {}
});

/***/ }),

/***/ "./src/keditor/constants/snippetType.js":
/*!**********************************************!*\
  !*** ./src/keditor/constants/snippetType.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  ALL: 0,
  CONTAINER: 1,
  COMPONENT: 2
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
/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, target) {
  var self = this;
  var container;

  if (target.is('section')) {
    target.addClass('keditor-ui keditor-container');
    target.wrapInner('<section class="keditor-ui keditor-container-inner"></section>');
    container = target;
  } else {
    target.wrap('<section class="keditor-ui keditor-container"><section class="keditor-ui keditor-container-inner"></section></section>');
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
/* harmony default export */ __webpack_exports__["default"] = (function (container, isNested) {
  var self = this;
  var containerInner = container.children('.keditor-container-inner').clone();
  containerInner.find('[data-type=container-content]').not(isNested ? '' : '.keditor-sub-container-content').each(function () {
    var containerContent = $(this);
    containerContent.removeClass('keditor-container-content keditor-sub-container-content ui-sortable').removeAttr('id');
    var containerContentInner = containerContent.children();
    var content = '';
    containerContentInner.children().each(function () {
      var child = $(this);

      if (child.is('.keditor-component')) {
        content += self.getComponentContent(child);
      } else if (child.is('.keditor-sub-container')) {
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

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container) {
  var self = this;
  var options = self.options;
  var isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;

  if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
    container.addClass('keditor-initializing-container');

    if (typeof options.onBeforeInitContainer === 'function') {
      options.onBeforeInitContainer.call(self, container, contentArea);
    }

    if (isNested) {
      container.addClass('keditor-sub-container');
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

    container.addClass('keditor-initialized-container');
    container.removeClass('keditor-initializing-container');
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, containerContent, isNested) {
  var self = this;
  var options = self.options;
  containerContent.addClass('keditor-container-content');

  if (isNested) {
    containerContent.addClass('keditor-sub-container-content');
  }

  containerContent.attr('id', self.generateId());
  var containerContentInner = $('<div class="keditor-container-content-inner"></div>');
  containerContentInner.html(containerContent.html());
  containerContent.html(containerContentInner);
  var containerContentToolbar = $(self.generateToolbar(isNested ? _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER_CONTENT : _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER_CONTENT));
  containerContentToolbar.appendTo(containerContent);

  if (options.explicitSnippetEnabled) {
    if (!isNested) {
      if (options.explicitSnippetEnabled) {
        containerContentToolbar.children('.btn-add-container').on('click', function (e) {
          e.preventDefault();
          self.openModal(containerContentInner, _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER);
        });
      }
    }

    containerContentToolbar.children('.btn-add-component').on('click', function (e) {
      e.preventDefault();
      self.openModal(containerContentInner, _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT);
    });
  } else {
    containerContentToolbar.children('.btn-add-content').on('click', function (e) {
      e.preventDefault();
      self.openModal(containerContentInner, isNested ? _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT : options.nestedContainerEnabled ? _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].ALL : _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].COMPONENT);
    });
  }

  containerContentInner.sortable({
    handle: '.btn-component-reposition, .btn-container-reposition',
    helper: 'clone',
    items: '> section',
    connectWith: '.keditor-container-content-inner',
    tolerance: 'pointer',
    sort: function sort() {
      $(this).removeClass('ui-state-default');
    },
    receive: function receive(event, ui) {
      var helper = ui.helper;
      var item = ui.item;
      var container;

      if (helper) {
        helper.remove();
      }

      container = item.closest('.keditor-container');

      if (!container.hasClass('showed-keditor-toolbar')) {
        $('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        container.addClass('showed-keditor-toolbar');
      }

      if (typeof options.onContainerChanged === 'function') {
        options.onContainerChanged.call(self, event, container, contentArea);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(self, event, contentArea);
      }

      item.removeClass('keditor-ui-dragging');
    },
    start: function start(e, ui) {
      ui.item.addClass('keditor-ui-dragging');
    },
    stop: function stop(e, ui) {
      if (ui.helper) {
        ui.helper.remove();
      }

      ui.item.removeClass('keditor-ui-dragging');
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, dontInitToolbar) {
  var self = this;
  var options = self.options;
  contentArea.addClass('keditor-content-area');
  var content = contentArea.html();
  var contentAreaInner = $('<div class="keditor-content-area-inner"></div>').html(content);
  contentArea.html(contentAreaInner);

  if (typeof options.onBeforeInitContentArea === 'function') {
    options.onBeforeInitContentArea.call(self, contentArea);
  }

  if (!dontInitToolbar) {
    var contentAreaToolbar = $(self.generateToolbar(_constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREA));
    contentArea.append(contentAreaToolbar);
    contentAreaToolbar.children(options.explicitSnippetEnabled ? '.btn-add-container' : '.btn-add-content').on('click', function (e) {
      e.preventDefault();
      self.openModal(contentAreaInner, options.explicitSnippetEnabled ? _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].CONTAINER : _constants_snippetType__WEBPACK_IMPORTED_MODULE_1__["default"].ALL);
    });
  }

  contentAreaInner.sortable({
    handle: '.keditor-toolbar-container:not(.keditor-toolbar-sub-container) .btn-container-reposition',
    items: '> section',
    helper: 'clone',
    connectWith: '.keditor-content-area',
    axis: 'y',
    tolerance: 'pointer',
    sort: function sort() {
      $(this).removeClass('ui-state-default');
    },
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

      item.addClass('keditor-ui-dragging');
    },
    start: function start(e, ui) {
      ui.item.addClass('keditor-ui-dragging');
    },
    stop: function stop(e, ui) {
      if (ui.helper) {
        ui.helper.remove();
      }

      ui.item.removeClass('keditor-ui-dragging');
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
  element.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].HIDDEN_ELEMENT);
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

  element.removeClass('keditor-hidden-element');
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
/* harmony default export */ __webpack_exports__["default"] = (function (inArray) {
  var self = this;
  var result = [];
  self.contentAreasWrapper.find('.keditor-content-area-inner').each(function () {
    var html = '';
    $(this).children('.keditor-container').each(function () {
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var contentAreasWrapper = self.contentAreasWrapper;
  contentAreasWrapper.on('click', function (e) {
    var sidebar = self.getClickedElement(e, '.keditor-sidebar');
    var modal = self.getClickedElement(e, '.keditor-modal');
    var container = self.getClickedElement(e, '.keditor-container');

    if (container) {
      if (!container.hasClass('showed-keditor-toolbar')) {
        contentAreasWrapper.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        contentAreasWrapper.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        container.addClass('showed-keditor-toolbar');
        var contentArea = container.parent();

        if (typeof options.onContainerSelected === 'function') {
          options.onContainerSelected.call(self, e, container, contentArea);
        }
      }
    } else {
      if (!sidebar && !modal) {
        contentAreasWrapper.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        contentAreasWrapper.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
      }
    }

    var component = self.getClickedElement(e, '.keditor-component');

    if (component) {
      if (!component.hasClass('showed-keditor-toolbar')) {
        contentAreasWrapper.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        component.addClass('showed-keditor-toolbar');

        var _contentArea = component.parent();

        if (typeof options.onComponentSelected === 'function') {
          options.onComponentSelected.call(self, e, component, _contentArea);
        }
      }
    } else {
      if (!sidebar) {
        contentAreasWrapper.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
      }
    }
  });
  contentAreasWrapper.on('click', '.btn-container-setting', function (e) {
    e.preventDefault();
    var btn = $(this);
    var container = btn.closest('.keditor-container');

    if (contentAreasWrapper.hasClass('opened-keditor-setting') && contentAreasWrapper.hasClass('opened-keditor-sidebar')) {
      if (!container.is(self.settingContainer)) {
        self.openSidebar(container);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(container);
    }
  });
  contentAreasWrapper.on('click', '.btn-container-duplicate', function (e) {
    e.preventDefault();
    var btn = $(this);
    var container = btn.closest('.keditor-container');
    var contentArea = container.parent();
    var newContainer = $(self.getContainerContent(container, btn.parent().hasClass('keditor-toolbar-sub-container')));
    container.after(newContainer);
    self.convertToContainer(contentArea, newContainer);

    if (typeof options.onContainerDuplicated === 'function') {
      options.onContainerDuplicated.call(self, container, newContainer, contentArea);
    }

    if (typeof options.onContentChanged === 'function') {
      options.onContentChanged.call(self, e, contentArea);
    }
  });
  contentAreasWrapper.on('click', '.btn-container-delete', function (e) {
    e.preventDefault();
    var btn = $(this);

    if (confirm(options.confirmDeleteContainerText)) {
      var container = btn.closest('.keditor-container');
      var components = container.find('.keditor-component');
      var contentArea = container.parent();

      if (typeof options.onBeforeContainerDeleted === 'function') {
        options.onBeforeContainerDeleted.call(self, e, container, contentArea);
      }

      var settingComponent = self.settingComponent;

      if (settingComponent) {
        var settingComponentParent = settingComponent.closest('.keditor-container');

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
  contentAreasWrapper.on('click', '.btn-component-setting', function (e) {
    e.preventDefault();
    var btn = $(this);
    var component = btn.closest('.keditor-component');

    if (contentAreasWrapper.hasClass('opened-keditor-setting') && contentAreasWrapper.hasClass('opened-keditor-sidebar')) {
      if (!component.is(self.settingComponent())) {
        self.openSidebar(component);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(component);
    }
  });
  contentAreasWrapper.on('click', '.btn-component-duplicate', function (e) {
    e.preventDefault();
    var btn = $(this);
    var component = btn.closest('.keditor-component');
    var container = component.closest('.keditor-container');
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
  contentAreasWrapper.on('click', '.btn-component-delete', function (e) {
    e.preventDefault();
    var btn = $(this);

    if (confirm(options.confirmDeleteComponentText)) {
      var component = btn.closest('.keditor-component');
      var container = component.closest('.keditor-container');
      var contentArea = component.closest('.keditor-content-area');

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
  contentAreasWrapper.addClass('keditor-clicks-initialized');
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
    iframe.wrap("<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].IFRAME_FAKER, "\"></div>"));
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
/* harmony import */ var _utils_generateId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/generateId */ "./src/keditor/utils/generateId.js");
/* harmony import */ var _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/generateToolbar */ "./src/keditor/utils/generateToolbar.js");
/* harmony import */ var _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/beautifyCategories */ "./src/keditor/utils/beautifyCategories.js");
/* harmony import */ var _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/getDataAttributes */ "./src/keditor/utils/getDataAttributes.js");
/* harmony import */ var _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/getClickedElement */ "./src/keditor/utils/getClickedElement.js");
/* harmony import */ var _iframe_initIframeActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iframe/initIframeActions */ "./src/keditor/iframe/initIframeActions.js");
/* harmony import */ var _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./iframe/initIframeCover */ "./src/keditor/iframe/initIframeCover.js");
/* harmony import */ var _topbar_initTopbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./topbar/initTopbar */ "./src/keditor/topbar/initTopbar.js");
/* harmony import */ var _topbar_initTopbarModes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topbar/initTopbarModes */ "./src/keditor/topbar/initTopbarModes.js");
/* harmony import */ var _topbar_initDeviceSwitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topbar/initDeviceSwitcher */ "./src/keditor/topbar/initDeviceSwitcher.js");
/* harmony import */ var _sidebar_initSidebar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/initSidebar */ "./src/keditor/sidebar/initSidebar.js");
/* harmony import */ var _sidebar_openSidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/openSidebar */ "./src/keditor/sidebar/openSidebar.js");
/* harmony import */ var _sidebar_closeSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/closeSidebar */ "./src/keditor/sidebar/closeSidebar.js");
/* harmony import */ var _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snippet/renderSnippets */ "./src/keditor/snippet/renderSnippets.js");
/* harmony import */ var _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snippet/initSnippetsFilter */ "./src/keditor/snippet/initSnippetsFilter.js");
/* harmony import */ var _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./snippet/addSnippet */ "./src/keditor/snippet/addSnippet.js");
/* harmony import */ var _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/initSnippetsModal */ "./src/keditor/modal/initSnippetsModal.js");
/* harmony import */ var _modal_openModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/openModal */ "./src/keditor/modal/openModal.js");
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/closeModal */ "./src/keditor/modal/closeModal.js");
/* harmony import */ var _contentArea_initContentAreaWrapper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contentArea/initContentAreaWrapper */ "./src/keditor/contentArea/initContentAreaWrapper.js");
/* harmony import */ var _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contentArea/initContentAreas */ "./src/keditor/contentArea/initContentAreas.js");
/* harmony import */ var _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./contentArea/initContentArea */ "./src/keditor/contentArea/initContentArea.js");
/* harmony import */ var _container_convertToContainer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./container/convertToContainer */ "./src/keditor/container/convertToContainer.js");
/* harmony import */ var _container_initContainer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./container/initContainer */ "./src/keditor/container/initContainer.js");
/* harmony import */ var _container_initContainerContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./container/initContainerContent */ "./src/keditor/container/initContainerContent.js");
/* harmony import */ var _container_getContainerContent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./container/getContainerContent */ "./src/keditor/container/getContainerContent.js");
/* harmony import */ var _component_getComponentType__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/getComponentType */ "./src/keditor/component/getComponentType.js");
/* harmony import */ var _component_convertToComponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/convertToComponent */ "./src/keditor/component/convertToComponent.js");
/* harmony import */ var _component_initComponent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/initComponent */ "./src/keditor/component/initComponent.js");
/* harmony import */ var _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/initDynamicContent */ "./src/keditor/component/initDynamicContent.js");
/* harmony import */ var _component_deleteComponent__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/deleteComponent */ "./src/keditor/component/deleteComponent.js");
/* harmony import */ var _component_getComponentContent__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./component/getComponentContent */ "./src/keditor/component/getComponentContent.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./init */ "./src/keditor/init.js");
/* harmony import */ var _destroy__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./destroy */ "./src/keditor/destroy.js");
/* harmony import */ var _getContent__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./getContent */ "./src/keditor/getContent.js");
/* harmony import */ var _setContent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./setContent */ "./src/keditor/setContent.js");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../styles/keditor.less */ "./src/styles/keditor.less");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_less__WEBPACK_IMPORTED_MODULE_38__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







































 // Check dependencies

if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.sortable) {
  error('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
} // KEditor class


var KEditor =
/*#__PURE__*/
function () {
  _createClass(KEditor, null, [{
    key: "log",
    value: function log() {
      if (console && typeof console.log === 'function' && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.keditor.debug) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        console.log.apply(console, ['[ KEditor ] '].concat(args));
        console.log("\"log\" is DEPRECATED. Will be removed soon. Please use \"console.log\" instead!");
      }
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

    return _init__WEBPACK_IMPORTED_MODULE_34__["default"].apply(this, [target, config]);
  }

  _createClass(KEditor, [{
    key: "generateId",
    value: function generateId() {
      return Object(_utils_generateId__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }, {
    key: "generateToolbar",
    value: function generateToolbar(type, isComponentConfigurable) {
      return _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_3__["default"].apply(this, [type, isComponentConfigurable]);
    }
  }, {
    key: "beautifyCategories",
    value: function beautifyCategories(categories) {
      return _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, [categories]);
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
      return _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_5__["default"].apply(this, [target, ignoreAttributes, isArray]);
    }
  }, {
    key: "getComponentType",
    value: function getComponentType(component) {
      return _component_getComponentType__WEBPACK_IMPORTED_MODULE_28__["default"].apply(this, [component]);
    }
  }, {
    key: "getClickedElement",
    value: function getClickedElement(event, selector) {
      return _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_6__["default"].apply(this, [event, selector]);
    } // Iframe
    //---------------------------------

  }, {
    key: "initIframeCover",
    value: function initIframeCover(iframe, wrapper) {
      return _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_8__["default"].apply(this, [iframe, wrapper]);
    } // KEditor clicks
    //---------------------------------

  }, {
    key: "initIframeActions",
    value: function initIframeActions() {
      return _iframe_initIframeActions__WEBPACK_IMPORTED_MODULE_7__["default"].apply(this);
    } // Topbar
    //---------------------------------

  }, {
    key: "initTopbar",
    value: function initTopbar() {
      return _topbar_initTopbar__WEBPACK_IMPORTED_MODULE_9__["default"].apply(this);
    }
  }, {
    key: "initDeviceSwitcher",
    value: function initDeviceSwitcher() {
      return _topbar_initDeviceSwitcher__WEBPACK_IMPORTED_MODULE_11__["default"].apply(this);
    }
  }, {
    key: "initTopbarModes",
    value: function initTopbarModes() {
      return _topbar_initTopbarModes__WEBPACK_IMPORTED_MODULE_10__["default"].apply(this);
    } // Sidebar
    //---------------------------------

  }, {
    key: "initSidebar",
    value: function initSidebar() {
      return _sidebar_initSidebar__WEBPACK_IMPORTED_MODULE_12__["default"].apply(this);
    }
  }, {
    key: "openSidebar",
    value: function openSidebar(target) {
      return _sidebar_openSidebar__WEBPACK_IMPORTED_MODULE_13__["default"].apply(this, [target]);
    }
  }, {
    key: "closeSidebar",
    value: function closeSidebar() {
      return _sidebar_closeSidebar__WEBPACK_IMPORTED_MODULE_14__["default"].apply(this);
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
      return _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_18__["default"].apply(this);
    }
  }, {
    key: "renderSnippets",
    value: function renderSnippets(resp) {
      return _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_15__["default"].apply(this, [resp]);
    }
  }, {
    key: "initSnippetsFilter",
    value: function initSnippetsFilter(type) {
      return _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_16__["default"].apply(this, [type]);
    }
  }, {
    key: "openModal",
    value: function openModal(target, snippetType) {
      return _modal_openModal__WEBPACK_IMPORTED_MODULE_19__["default"].apply(this, [target, snippetType]);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      return _modal_closeModal__WEBPACK_IMPORTED_MODULE_20__["default"].apply(this);
    } // Content areas
    //---------------------------------

  }, {
    key: "initContentAreaWrapper",
    value: function initContentAreaWrapper() {
      return _contentArea_initContentAreaWrapper__WEBPACK_IMPORTED_MODULE_21__["default"].apply(this);
    }
  }, {
    key: "initContentAreas",
    value: function initContentAreas() {
      return _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_22__["default"].apply(this);
    }
  }, {
    key: "initContentArea",
    value: function initContentArea(contentArea, dontInitToolbar) {
      return _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_23__["default"].apply(this, [contentArea, dontInitToolbar]);
    } // Containers
    //---------------------------------

  }, {
    key: "convertToContainer",
    value: function convertToContainer(contentArea, target) {
      return _container_convertToContainer__WEBPACK_IMPORTED_MODULE_24__["default"].apply(this, [contentArea, target]);
    }
  }, {
    key: "initContainer",
    value: function initContainer(contentArea, container) {
      return _container_initContainer__WEBPACK_IMPORTED_MODULE_25__["default"].apply(this, [contentArea, container]);
    }
  }, {
    key: "initContainerContent",
    value: function initContainerContent(contentArea, container, containerContent, isNested) {
      return _container_initContainerContent__WEBPACK_IMPORTED_MODULE_26__["default"].apply(this, [contentArea, container, containerContent, isNested]);
    } // Components
    //---------------------------------

  }, {
    key: "convertToComponent",
    value: function convertToComponent(contentArea, container, target, isExisting) {
      return _component_convertToComponent__WEBPACK_IMPORTED_MODULE_29__["default"].apply(this, [contentArea, container, target, isExisting]);
    }
  }, {
    key: "initComponent",
    value: function initComponent(contentArea, container, component) {
      return _component_initComponent__WEBPACK_IMPORTED_MODULE_30__["default"].apply(this, [contentArea, container, component]);
    }
  }, {
    key: "initDynamicContent",
    value: function initDynamicContent(dynamicElement) {
      return _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_31__["default"].apply(this, [dynamicElement]);
    }
  }, {
    key: "deleteComponent",
    value: function deleteComponent(component) {
      return _component_deleteComponent__WEBPACK_IMPORTED_MODULE_32__["default"].apply(this, [component]);
    } // Get content
    //---------------------------------

  }, {
    key: "getComponentContent",
    value: function getComponentContent(component) {
      return _component_getComponentContent__WEBPACK_IMPORTED_MODULE_33__["default"].apply(this, [component]);
    }
  }, {
    key: "getContainerContent",
    value: function getContainerContent(container, isNested) {
      return _container_getContainerContent__WEBPACK_IMPORTED_MODULE_27__["default"].apply(this, [container, isNested]);
    }
  }, {
    key: "getContent",
    value: function getContent(inArray) {
      return _getContent__WEBPACK_IMPORTED_MODULE_36__["default"].apply(this, [inArray]);
    } // Set content
    //---------------------------------

  }, {
    key: "setContent",
    value: function setContent(content, contentArea) {
      return _setContent__WEBPACK_IMPORTED_MODULE_37__["default"].apply(this, [content, contentArea]);
    } // Destroy
    //---------------------------------

  }, {
    key: "destroy",
    value: function destroy() {
      return _destroy__WEBPACK_IMPORTED_MODULE_35__["default"].apply(this);
    } // Destroy
    //---------------------------------

  }, {
    key: "addSnippet",
    value: function addSnippet(type, title, previewUrl, categories, content, dataAttributes) {
      return _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_17__["default"].apply(this, [type, title, previewUrl, categories, content, dataAttributes]);
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var modal = self.modal;
  self.modalTarget = null;
  self.modalAction = null;
  modal.find('.keditor-modal-title').html('');
  modal.find('.keditor-snippets-wrapper .selected').removeClass('selected');
  modal.removeClass('showed');
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var modalId = self.generateId();
  var snippetsWrapperHtml = '';

  if (options.explicitSnippetEnabled) {
    snippetsWrapperHtml = "\n<div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-container\">\n<div class=\"keditor-snippets keditor-snippets-container\"></div>\n</div>\n<div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-component\">\n<div class=\"keditor-snippets keditor-snippets-component\"></div>\n</div>\n";
  } else {
    snippetsWrapperHtml = "\n<div class=\"keditor-snippets-wrapper\">\n<div class=\"keditor-snippets\"></div>\n</div>\n";
  }

  var modal = self.modal = $("\n<div class=\"keditor-ui keditor-modal\" id=\"".concat(modalId, "\">\n<div class=\"keditor-modal-header\">\n<button type=\"button\" class=\"keditor-modal-close\">&times;</button>\n<h4 class=\"keditor-modal-title\"></h4>\n</div>\n<div class=\"keditor-modal-body\">").concat(snippetsWrapperHtml, "</div>\n<div class=\"keditor-modal-footer\">\n<button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-default keditor-modal-close\">Close</button>\n<button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-primary keditor-modal-add\">Add</button>\n</div>\n</div>\n"));

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

        if (options.snippetsFilterEnabled) {
          if (options.explicitSnippetEnabled) {
            self.initSnippetsFilter(_constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER);
            self.initSnippetsFilter(_constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT);
          } else {
            self.initSnippetsFilter(_constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].ALL);
          }
        }
      },
      error: function error(jqXHR) {
        if (typeof options.onSnippetsError === 'function') {
          options.onSnippetsError.call(self, jqXHR);
        }
      }
    }); // Close buttons

    modal.find('.keditor-modal-close').on('click', function (e) {
      e.preventDefault();
      self.closeModal();
    }); // Add button

    modal.find('.keditor-modal-add').on('click', function (e) {
      e.preventDefault();
      var selectedSnippet = modal.find('.keditor-snippets-wrapper .selected');

      if (selectedSnippet.length === 0) {
        return;
      }

      var contentArea = self.modalTarget.closest('.keditor-content-area');
      var snippetType = selectedSnippet.attr('data-type');
      var snippetContentElement = modal.find(selectedSnippet.attr('data-snippet'));
      var snippetContent = snippetContentElement.html();
      var isAddingContainer = false;
      var isAddingComponent = false;
      var isAddingComponentWithContainer = false;

      if (options.explicitSnippetEnabled) {
        switch (self.modalSnippetType) {
          case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT:
            isAddingComponent = true;
            break;

          case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER:
            isAddingContainer = true;
            break;

          default: // Do nothing

        }
      } else {
        if (snippetType === 'container') {
          isAddingContainer = true;
        } else {
          switch (self.modalSnippetType) {
            case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT:
              isAddingComponent = true;
              break;

            case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].ALL:
              if (self.modalTarget.is('.keditor-container-content-inner')) {
                isAddingComponent = true;
              } else {
                isAddingComponentWithContainer = true;
              }

              break;

            default: // Do nothing

          }
        }
      }

      var newContainer;
      var newComponent;

      if (isAddingContainer) {
        self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        newContainer = $("\n<section class=\"keditor-ui keditor-container showed-keditor-toolbar\">\n<section class=\"keditor-ui keditor-container-inner\">".concat(snippetContent, "</section>\n</section>\n"));
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
        newComponent = $("\n<section class=\"keditor-ui keditor-component\" data-type=\"".concat(snippetType, "\" ").concat(dataAttributes.join(' '), ">\n<section class=\"keditor-ui keditor-component-content\">").concat(snippetContent, "</section>\n</section>\n"));
        self.modalTarget.append(newComponent);
        var container = self.modalTarget.closest('.keditor-container');

        if (typeof options.onComponentSnippetAdded === 'function') {
          options.onComponentSnippetAdded.call(self, e, newComponent, selectedSnippet, contentArea);
        }

        if (typeof options.onContentChanged === 'function') {
          options.onContentChanged.call(self, e, contentArea);
        }

        self.initComponent(contentArea, container, newComponent);
      }

      if (isAddingComponentWithContainer) {
        self.body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');

        var _dataAttributes = self.getDataAttributes(snippetContentElement, null, true);

        newContainer = $("\n<section class=\"keditor-ui keditor-container showed-keditor-toolbar\">\n<section class=\"keditor-ui keditor-container-inner\">".concat(options.containerForQuickAddComponent, "</section>\n</section>\n"));
        newComponent = $("\n<section class=\"keditor-ui keditor-component\" data-type=\"".concat(snippetType, "\" ").concat(_dataAttributes.join(' '), ">\n<section class=\"keditor-ui keditor-component-content\">").concat(snippetContent, "</section>\n</section>\n"));
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

    modal.on('click', '.keditor-snippet', function (e) {
      e.preventDefault();
      var snippet = $(this);

      if (!snippet.hasClass('selected')) {
        snippet.parent().find('.selected').removeClass('selected');
        snippet.addClass('selected');
      }
    });
    var cssTransitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
    modal.on(cssTransitionEnd, function () {
      if (!modal.hasClass('showed')) {
        modal.css('display', 'none');
        $(document.body).removeClass('opened-modal');
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");

/* harmony default export */ __webpack_exports__["default"] = (function (target, snippetType) {
  var self = this;
  var modal = self.modal;
  var options = self.options;
  var modalTitle = '';

  switch (snippetType) {
    case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER:
      modalTitle = 'Add container';
      break;

    case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT:
      modalTitle = 'Add component';
      break;

    default: // Do nothing

  }

  if (options.explicitSnippetEnabled) {
    modal.find('.keditor-snippets-wrapper').css('display', 'none');
    modal.find(snippetType === _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT ? '.keditor-snippets-wrapper-component' : '.keditor-snippets-wrapper-container').css('display', 'block');
  } else {
    modal.find('.keditor-snippets-wrapper').css('display', 'block').find('.keditor-snippet[data-type=container]').css('display', snippetType === _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT ? 'none' : 'block');
    modalTitle = 'Add content';
  }

  modal.find('.keditor-modal-title').html(modalTitle);
  self.modalTarget = target;
  self.modalSnippetType = snippetType;
  modal.css('display', 'block');
  $(document.body).addClass('opened-modal');
  setTimeout(function () {
    modal.addClass('showed');
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
/* harmony default export */ __webpack_exports__["default"] = (function (content, contentArea) {
  var self = this;
  var contentAreasWrapper = self.wrapper;

  if (!contentArea) {
    contentArea = contentAreasWrapper.children('.keditor-content-area');
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
  var activeForm = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_BODY)).children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE));

  if (activeForm.length > 0) {
    if (activeForm.is(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_CONTAINER))) {
      if (typeof options.containerSettingHideFunction === 'function') {
        options.containerSettingHideFunction.call(self, activeForm, self);
      }
    } else {
      var activeType = activeForm.attr('data-type');
      var componentData = KEditor.components[activeType];

      if (typeof componentData.hideSettingForm === 'function') {
        componentData.hideSettingForm.call(componentData, activeForm, self);
      }
    }

    activeForm.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE);
  }

  self.setSettingComponent(null);
  self.setSettingContainer(null);
  sidebar.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_OPENED);
});

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
  var activeForm = sidebarBody.children(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE));
  activeForm.removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE);

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
        settingForm = $("\n<div\ndata-type=\"".concat(componentType, "\"\nclass=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM, " ").concat(settingFormClass, " clearfix ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE, "\"\n>\n</div>\n"));
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

      settingForm.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE);
    }
  } else {
    self.setSettingContainer(target);
    self.setSettingComponent(null);
    sidebarTitle.html('Container Settings');

    var _settingForm = sidebar.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_CONTAINER));

    if (typeof options.containerSettingShowFunction === 'function') {
      options.containerSettingShowFunction.call(self, _settingForm, target, self);
    }

    _settingForm.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SETTING_FORM_ACTIVE);
  }

  sidebar.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].SIDEBAR_OPENED);
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




/* harmony default export */ __webpack_exports__["default"] = (function (type, title, previewUrl, categories, content, extraData) {
  var self = this;
  var options = self.options;

  var _renderSnippet$call = _renderSnippet__WEBPACK_IMPORTED_MODULE_0__["default"].call(self, type, title, previewUrl, categories, content, extraData),
      _renderSnippet$call2 = _slicedToArray(_renderSnippet$call, 2),
      snippetPreviewHtml = _renderSnippet$call2[0],
      snippetContentHtml = _renderSnippet$call2[1];

  self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
  self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
  self.snippetsCategories = self.beautifyCategories([].concat(_toConsumableArray(self.snippetsContainerCategories), _toConsumableArray(self.snippetsComponentCategories)));

  if (options.explicitSnippetEnabled) {
    if (type === 'container') {
      self.modal.find('.keditor-snippets-container').append(snippetPreviewHtml);
    } else if (type.indexOf('component') !== -1) {
      self.modal.find('.keditor-snippets-component').append(snippetPreviewHtml);
    }
  } else {
    self.modal.find('.keditor-snippets').append(snippetPreviewHtml);
  }

  self.modal.find('.keditor-modal-body').append(snippetContentHtml);
  var filterType;

  if (options.snippetsFilterEnabled) {
    if (options.explicitSnippetEnabled) {
      filterType = type === 'container' ? _constants_snippetType__WEBPACK_IMPORTED_MODULE_2__["default"].CONTAINER : _constants_snippetType__WEBPACK_IMPORTED_MODULE_2__["default"].COMPONENT;
    } else {
      filterType = _constants_snippetType__WEBPACK_IMPORTED_MODULE_2__["default"].ALL;
    }
  }

  var _renderSnippetFilter$ = _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, filterType),
      _renderSnippetFilter$2 = _slicedToArray(_renderSnippetFilter$, 2),
      categoriesOptions = _renderSnippetFilter$2[0],
      snippetsWrapper = _renderSnippetFilter$2[1];

  snippetsWrapper.find('.keditor-snippets-filter').html(categoriesOptions).trigger('change');
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  var self = this;
  var options = self.options;

  var _renderSnippetFilter$ = _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, type),
      _renderSnippetFilter$2 = _slicedToArray(_renderSnippetFilter$, 2),
      categoriesOptions = _renderSnippetFilter$2[0],
      snippetsWrapper = _renderSnippetFilter$2[1];

  snippetsWrapper.prepend("\n<div class=\"keditor-ui keditor-snippets-filter-wrapper\">\n<select class=\"keditor-ui keditor-snippets-filter\">\n".concat(categoriesOptions, "\n</select>\n<input type=\"text\" class=\"keditor-ui keditor-snippets-search\" value=\"\" placeholder=\"Type to search...\" />\n</div>\n"));
  var txtSearch = snippetsWrapper.find('.keditor-snippets-search');
  var cbbFilter = snippetsWrapper.find('.keditor-snippets-filter');

  var doFilter = function doFilter() {
    var selectedCategory = (cbbFilter.val() || '').toLowerCase();
    var searchText = (txtSearch.val() || '').toLowerCase();
    var snippets = snippetsWrapper.find('.keditor-snippets').children('.keditor-snippet');
    snippets.filter('.selected').removeClass('selected');

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

        snippet[error === 0 ? 'removeClass' : 'addClass']('not-matched');
      });
    } else {
      snippets.removeClass('not-matched');
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
/* harmony default export */ __webpack_exports__["default"] = (function (type, title, previewUrl, categories, content, extraData) {
  var self = this;
  var options = self.options;
  var snippetId = self.generateId();
  var snippetPreviewHtml = "\n<section\nclass=\"keditor-ui keditor-snippet\"\ndata-snippet=\"#".concat(snippetId, "\"\ndata-type=\"").concat(type, "\"\ntitle=\"").concat(title, "\"\ndata-keditor-categories=\"").concat(categories, "\"\n>\n<span><span style=\"background-image: url('").concat(previewUrl, "')\"></span></span>\n</section>\n");
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");

/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  var self = this;
  var modal = self.modal;
  var categories;
  var snippetsWrapperSelector;

  switch (type) {
    case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].ALL:
      categories = self.snippetsCategories;
      snippetsWrapperSelector = '.keditor-snippets-wrapper';
      break;

    case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER:
      categories = self.snippetsContainerCategories;
      snippetsWrapperSelector = '.keditor-snippets-wrapper-container';
      break;

    case _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT:
      categories = self.snippetsComponentCategories;
      snippetsWrapperSelector = '.keditor-snippets-wrapper-component';
      break;

    default: // Do nothing

  }

  var categoriesOptions = '<option value="" selected="selected">All</option>';
  $.each(categories, function (i, category) {
    categoriesOptions += "<option value=\"".concat(category, "\">").concat(category, "</option>");
  });
  return [categoriesOptions, modal.find(snippetsWrapperSelector)];
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = (function (resp) {
  var self = this;
  var options = self.options;
  var snippetsContainerHtml = '';
  var snippetsComponentHtml = '';
  var snippetsContentHtml = '';
  self.snippetsCategories = [];
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

    if (type === 'container') {
      snippetsContainerHtml += snippetPreviewHtml;
    } else if (type.indexOf('component') !== -1) {
      snippetsComponentHtml += snippetPreviewHtml;
    }

    snippetsContentHtml += snippetContentHtml;
  });
  self.snippetsContainerCategories = self.beautifyCategories(self.snippetsContainerCategories);
  self.snippetsComponentCategories = self.beautifyCategories(self.snippetsComponentCategories);
  self.snippetsCategories = self.beautifyCategories([].concat(_toConsumableArray(self.snippetsContainerCategories), _toConsumableArray(self.snippetsComponentCategories)));

  if (options.explicitSnippetEnabled) {
    self.modal.find('.keditor-snippets-container').html(snippetsContainerHtml);
    self.modal.find('.keditor-snippets-component').html(snippetsComponentHtml);
  } else {
    self.modal.find('.keditor-snippets').html(snippetsContainerHtml + snippetsComponentHtml);
  }

  self.modal.find('.keditor-modal-body').append(snippetsContentHtml);
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
  var btnMobile = $("<a href=\"javascript:void(0);\" title=\"View on mobile\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-mobile\"></i></a>"));
  btnMobile.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
    self.iframeWrapper.css('width', options.widthMobile);
    btnMobile.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
  });
  var btnTablet = $("<a href=\"javascript:void(0);\" title=\"View on tablet\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-tablet\"></i></a>"));
  btnTablet.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
    self.iframeWrapper.css('width', options.widthTablet);
    btnTablet.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
  });
  var btnDesktop = $("<a href=\"javascript:void(0);\" title=\"View on desktop\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE, "\"><i class=\"fa fa-fw fa-desktop\"></i></a>"));
  btnDesktop.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
    self.iframeWrapper.css('width', '');
    btnDesktop.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
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
  self.initTopbarModes();
});
;

/***/ }),

/***/ "./src/keditor/topbar/initTopbarModes.js":
/*!***********************************************!*\
  !*** ./src/keditor/topbar/initTopbarModes.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvZ2V0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pZnJhbWUvaW5pdElmcmFtZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdG9wYmFyL2luaXREZXZpY2VTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhck1vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2JlYXV0aWZ5Q2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2tlZGl0b3IubGVzcz8yNmYzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImNvbnRlbnRBcmVhIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiaXNFeGlzdGluZyIsImlzIiwic2VsZiIsImlzU2VjdGlvbiIsImNvbXBvbmVudCIsImFkZENsYXNzIiwid3JhcElubmVyIiwid3JhcCIsInBhcmVudCIsImluaXRDb21wb25lbnQiLCJjb21wb25lbnRUeXBlIiwiZ2V0Q29tcG9uZW50VHlwZSIsImNvbXBvbmVudERhdGEiLCJLRWRpdG9yIiwiY29tcG9uZW50cyIsImRlc3Ryb3kiLCJjYWxsIiwicmVtb3ZlIiwiY2xvbmVkQ29tcG9uZW50IiwiY2xvbmUiLCJkYXRhQXR0cmlidXRlcyIsImdldERhdGFBdHRyaWJ1dGVzIiwiY29udGVudCIsImlmcmFtZVdyYXBwZXIiLCJmaW5kIiwibGVuZ3RoIiwiaWZyYW1lIiwiY2hpbGRyZW4iLCJoYXNDbGFzcyIsInVud3JhcCIsInJlbW92ZUNsYXNzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudENvbnRlbnQiLCJodG1sIiwiZWFjaCIsIiQiLCJqb2luIiwib3B0aW9ucyIsImF0dHIiLCJyZXBsYWNlIiwiZGVmYXVsdENvbXBvbmVudFR5cGUiLCJlcnJvciIsImdlbmVyYXRlSWQiLCJvbkJlZm9yZUluaXRDb21wb25lbnQiLCJhcHBlbmQiLCJnZW5lcmF0ZVRvb2xiYXIiLCJUT09MQkFSX1RZUEUiLCJDT01QT05FTlQiLCJzZXR0aW5nRW5hYmxlZCIsImR5bmFtaWNFbGVtZW50IiwiaW5pdER5bmFtaWNDb250ZW50IiwiaW5pdCIsIm9uSW5pdENvbXBvbmVudCIsImNsb3Nlc3QiLCJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCIsImR5bmFtaWNIcmVmIiwiZGF0YSIsInBhcmFtIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImpxWEhSIiwib25EeW5hbWljQ29udGVudExvYWRlZCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsIm9uRHluYW1pY0NvbnRlbnRFcnJvciIsIkNMQVNTX05BTUVTIiwiVUkiLCJXUkFQUEVSIiwiSElEREVOX0VMRU1FTlQiLCJTSURFQkFSIiwiU0lERUJBUl9IRUFERVIiLCJTSURFQkFSX0JPRFkiLCJTSURFQkFSX1RJVExFIiwiU0lERUJBUl9DTE9TRVIiLCJTSURFQkFSX09QRU5FRCIsIlRPUEJBUiIsIlRPUEJBUl9MRUZUIiwiVE9QQkFSX1JJR0hUIiwiVE9QQkFSX0NFTlRFUiIsIlRPUEJBUl9CVVRUT04iLCJUT1BCQVJfQlVUVE9OX0FDVElWRSIsIlRPUEJBUl9USVRMRSIsIlNFVFRJTkciLCJTRVRUSU5HX0NPTlRBSU5FUiIsIlNFVFRJTkdfRk9STSIsIlNFVFRJTkdfRk9STV9BQ1RJVkUiLCJDT05URU5UX0FSRUFTX1dSQVBQRVIiLCJDT05URU5UX0FSRUFTIiwiQ09OVEVOVF9BUkVBIiwiSUZSQU1FIiwiSUZSQU1FX1dSQVBQRVIiLCJJRlJBTUVfRkFLRVIiLCJJRlJBTUVfQ09WRVJfV1JBUFBFUiIsIklGUkFNRV9DT1ZFUiIsIklGUkFNRV9DT1ZFUl9ISURERU4iLCJ0aXRsZSIsIm5lc3RlZENvbnRhaW5lckVuYWJsZWQiLCJleHBsaWNpdFNuaXBwZXRFbmFibGVkIiwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQiLCJidG5BZGRDb250ZW50VGV4dCIsImJ0bkFkZENvbnRhaW5lclRleHQiLCJidG5BZGRTdWJDb250YWluZXJUZXh0IiwiYnRuQWRkQ29tcG9uZW50VGV4dCIsImJ0bk1vdmVDb250YWluZXJUZXh0IiwiYnRuTW92ZUNvbXBvbmVudFRleHQiLCJidG5TZXR0aW5nQ29udGFpbmVyVGV4dCIsImJ0blNldHRpbmdDb21wb25lbnRUZXh0IiwiYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dCIsImJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQiLCJidG5EZWxldGVDb250YWluZXJUZXh0IiwiYnRuRGVsZXRlQ29tcG9uZW50VGV4dCIsImNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0IiwiY29uZmlybURlbGV0ZUNvbXBvbmVudFRleHQiLCJ3aWR0aE1vYmlsZSIsIndpZHRoVGFibGV0Iiwic25pcHBldHNVcmwiLCJzbmlwcGV0c0ZpbHRlckVuYWJsZWQiLCJzbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IiLCJjb250ZW50U3R5bGVzIiwiY29udGVudEFyZWFzU2VsZWN0b3IiLCJjb250ZW50QXJlYXNXcmFwcGVyIiwiY29udGFpbmVyU2V0dGluZ0VuYWJsZWQiLCJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiIsImNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24iLCJvblJlYWR5Iiwib25TbmlwcGV0c0xvYWRlZCIsInJlc3AiLCJvblNuaXBwZXRzRXJyb3IiLCJvbkluaXRJZnJhbWUiLCJpZnJhbWVIZWFkIiwiaWZyYW1lQm9keSIsIm9uQ29udGVudENoYW5nZWQiLCJldmVudCIsIm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhIiwib25Jbml0Q29udGVudEFyZWEiLCJvbkJlZm9yZUluaXRDb250YWluZXIiLCJvbkluaXRDb250YWluZXIiLCJvbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQiLCJzZWxlY3RlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRGVsZXRlZCIsIm9uQ29udGFpbmVyQ2hhbmdlZCIsImNoYW5nZWRDb250YWluZXIiLCJvbkNvbnRhaW5lckR1cGxpY2F0ZWQiLCJvcmlnaW5hbENvbnRhaW5lciIsIm5ld0NvbnRhaW5lciIsIm9uQ29udGFpbmVyU2VsZWN0ZWQiLCJvbkNvbnRhaW5lclNuaXBwZXRBZGRlZCIsInNlbGVjdGVkU25pcHBldCIsIm9uQ29tcG9uZW50UmVhZHkiLCJvbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQiLCJzZWxlY3RlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RGVsZXRlZCIsIm9uQ29tcG9uZW50Q2hhbmdlZCIsImNoYW5nZWRDb21wb25lbnQiLCJvbkNvbXBvbmVudER1cGxpY2F0ZWQiLCJvcmlnaW5hbENvbXBvbmVudCIsIm5ld0NvbXBvbmVudCIsIm9uQ29tcG9uZW50U2VsZWN0ZWQiLCJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZCIsIkFMTCIsIkNPTlRBSU5FUiIsIlNVQl9DT05UQUlORVIiLCJDT05UQUlORVJfQ09OVEVOVCIsIlNVQl9DT05UQUlORVJfQ09OVEVOVCIsImluaXRDb250YWluZXIiLCJpc05lc3RlZCIsImNvbnRhaW5lcklubmVyIiwibm90IiwiY29udGFpbmVyQ29udGVudCIsInJlbW92ZUF0dHIiLCJjb250YWluZXJDb250ZW50SW5uZXIiLCJjaGlsZCIsImdldENvbXBvbmVudENvbnRlbnQiLCJnZXRDb250YWluZXJDb250ZW50IiwiY29udGFpbmVyQ29udGVudHMiLCJwYXJlbnRzIiwiaW5pdENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50VG9vbGJhciIsImFwcGVuZFRvIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuTW9kYWwiLCJTTklQUEVUX1RZUEUiLCJzb3J0YWJsZSIsImhhbmRsZSIsImhlbHBlciIsIml0ZW1zIiwiY29ubmVjdFdpdGgiLCJ0b2xlcmFuY2UiLCJzb3J0IiwicmVjZWl2ZSIsInVpIiwiaXRlbSIsInN0YXJ0Iiwic3RvcCIsImNvbnZlcnRUb0NvbnRhaW5lciIsImNvbnZlcnRUb0NvbXBvbmVudCIsImRvbnRJbml0VG9vbGJhciIsImNvbnRlbnRBcmVhSW5uZXIiLCJjb250ZW50QXJlYVRvb2xiYXIiLCJheGlzIiwiY2xvc2VTaWRlYmFyIiwiY29udGVudERhdGEiLCJlbGVtZW50Iiwid3JhcHBlciIsImFmdGVyIiwiaWZyYW1lRG9jIiwiY29udGVudHMiLCJnZXQiLCJvcGVuIiwiY2xvc2UiLCJpZnJhbWVXaW5kb3ciLCJjb250ZW50V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJzdHlsZXMiLCJzdHlsZSIsImlkU3RyIiwiaHJlZiIsImlzQXJyYXkiLCJpIiwiaWQiLCJ2YWwiLCJpbml0Q29udGVudEFyZWFzIiwiaW5pdElmcmFtZUFjdGlvbnMiLCJjb250ZW50QXJlYXMiLCJvcmlnaW5hbENvbnRlbnQiLCJlbXB0eSIsImluaXRDb250ZW50QXJlYSIsImluc3RhbmNlcyIsImluQXJyYXkiLCJyZXN1bHQiLCJwdXNoIiwic2lkZWJhciIsImdldENsaWNrZWRFbGVtZW50IiwibW9kYWwiLCJidG4iLCJzZXR0aW5nQ29udGFpbmVyIiwib3BlblNpZGViYXIiLCJjb25maXJtIiwic2V0dGluZ0NvbXBvbmVudCIsInNldHRpbmdDb21wb25lbnRQYXJlbnQiLCJkZWxldGVDb21wb25lbnQiLCJjb3ZlciIsInByZXBlbmQiLCJmbiIsImNvbnNvbGUiLCJsb2ciLCJrZWRpdG9yIiwiZGVidWciLCJhcmdzIiwiYXBwbHkiLCJtZXNzYWdlIiwiRXJyb3IiLCJjb25maWciLCJpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSIsImNhdGVnb3JpZXMiLCJiZWF1dGlmeUNhdGVnb3JpZXMiLCJpZ25vcmVBdHRyaWJ1dGVzIiwic2VsZWN0b3IiLCJpbml0SWZyYW1lQ292ZXIiLCJpbml0VG9wYmFyIiwiaW5pdERldmljZVN3aXRjaGVyIiwiaW5pdFRvcGJhck1vZGVzIiwiaW5pdFNpZGViYXIiLCJpbml0U25pcHBldHNNb2RhbCIsInJlbmRlclNuaXBwZXRzIiwiaW5pdFNuaXBwZXRzRmlsdGVyIiwic25pcHBldFR5cGUiLCJjbG9zZU1vZGFsIiwiaW5pdENvbnRlbnRBcmVhV3JhcHBlciIsInNldENvbnRlbnQiLCJwcmV2aWV3VXJsIiwiYWRkU25pcHBldCIsIkRFRkFVTFRTIiwiYmxhbmsiLCJpbnN0YW5jZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJ3aW5kb3ciLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsIm1vZGFsVGFyZ2V0IiwibW9kYWxBY3Rpb24iLCJtb2RhbElkIiwic25pcHBldHNXcmFwcGVySHRtbCIsInNuaXBwZXRDb250ZW50RWxlbWVudCIsInNuaXBwZXRDb250ZW50IiwiaXNBZGRpbmdDb250YWluZXIiLCJpc0FkZGluZ0NvbXBvbmVudCIsImlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciIsIm1vZGFsU25pcHBldFR5cGUiLCJib2R5IiwiZXEiLCJzbmlwcGV0IiwiY3NzVHJhbnNpdGlvbkVuZCIsImNzcyIsImRvY3VtZW50IiwibW9kYWxUaXRsZSIsInNldFRpbWVvdXQiLCJqcXVlcnkiLCJhY3RpdmVGb3JtIiwiYWN0aXZlVHlwZSIsImhpZGVTZXR0aW5nRm9ybSIsInNldFNldHRpbmdDb21wb25lbnQiLCJzZXRTZXR0aW5nQ29udGFpbmVyIiwic2lkZWJhcklkIiwic2lkZWJhckJvZHkiLCJmb3JtIiwic2lkZWJhclRpdGxlIiwic2V0dGluZ1RpdGxlIiwic2V0dGluZ0Zvcm1DbGFzcyIsInNldHRpbmdGb3JtIiwiaW5pdFNldHRpbmdGb3JtIiwibG9hZGluZ1RleHQiLCJpbml0RnVuY3Rpb24iLCJ3aGVuIiwiZG9uZSIsInNob3dTZXR0aW5nRm9ybSIsImV4dHJhRGF0YSIsInJlbmRlclNuaXBwZXQiLCJzbmlwcGV0UHJldmlld0h0bWwiLCJzbmlwcGV0Q29udGVudEh0bWwiLCJzbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMiLCJzbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMiLCJzbmlwcGV0c0NhdGVnb3JpZXMiLCJpbmRleE9mIiwiZmlsdGVyVHlwZSIsInJlbmRlclNuaXBwZXRGaWx0ZXIiLCJjYXRlZ29yaWVzT3B0aW9ucyIsInNuaXBwZXRzV3JhcHBlciIsInRyaWdnZXIiLCJ0eHRTZWFyY2giLCJjYmJGaWx0ZXIiLCJkb0ZpbHRlciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFRleHQiLCJzbmlwcGV0cyIsImZpbHRlciIsImRhdGFDYXRlZ29yaWVzU3RyaW5nIiwiZGF0YUNhdGVnb3JpZXMiLCJzcGxpdCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic25pcHBldElkIiwiY29uY2F0Iiwic25pcHBldHNXcmFwcGVyU2VsZWN0b3IiLCJjYXRlZ29yeSIsInNuaXBwZXRzQ29udGFpbmVySHRtbCIsInNuaXBwZXRzQ29tcG9uZW50SHRtbCIsInNuaXBwZXRzQ29udGVudEh0bWwiLCJ0cmltIiwidG9wYmFyQ2VudGVyIiwiYnRuTW9iaWxlIiwiYnRuVGFibGV0IiwiYnRuRGVza3RvcCIsInRvcGJhcklkIiwidG9wYmFyIiwidG9wYmFyTGVmdCIsInRvcGJhclJpZ2h0IiwibmV3QXJyYXkiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0VGltZSIsInJhbmRvbSIsIk1hdGgiLCJyb3VuZCIsInNldHRpbmdCdG4iLCJ0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QUMsQ0FBcEYsRUFBdUY7QUFDdkYsVUFBSXZDLE9BQUosRUFBYTtBQUNiOU0sc0JBQWMsQ0FBQzJOLElBQWYsV0FBdUJ6TSxJQUFJLENBQUNzVixJQUE1QixnQkFBcUN0VixJQUFJLENBQUN1VixLQUExQztBQUNDLE9BRkQsTUFFTztBQUNQelcsc0JBQWMsQ0FBQ2tCLElBQUksQ0FBQ3NWLElBQU4sQ0FBZCxHQUE0QnRWLElBQUksQ0FBQ3VWLEtBQWpDO0FBQ0M7QUFDQTtBQUNBLEdBUkQ7QUFTQSxTQUFPelcsY0FBUDtBQUNDO0FBQUEsQzs7Ozs7Ozs7Ozs7QUNmRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJqcy9rZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2tlZGl0b3IvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJykpIHtccnJldHVybjtccn1ccmxldCBzZWxmID0gdGhpcztccmxldCBpc1NlY3Rpb24gPSB0YXJnZXQuaXMoJ3NlY3Rpb24nKTtccmxldCBjb21wb25lbnQ7XHJpZiAoaXNTZWN0aW9uKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQnKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudC1jb250ZW50XCI+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0O1xyfSBlbHNlIHtccnRhcmdldC53cmFwKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnRcIj48c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb21wb25lbnQgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJpZiAoaXNFeGlzdGluZykge1xyY29tcG9uZW50LmFkZENsYXNzKCdleGlzdGluZy1jb21wb25lbnQnKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5kZXN0cm95LmNhbGwoY29tcG9uZW50RGF0YSwgY29tcG9uZW50LCBzZWxmKTtccn1ccmNvbXBvbmVudC5yZW1vdmUoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNsb25lZENvbXBvbmVudCA9IGNvbXBvbmVudC5jbG9uZSgpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY2xvbmVkQ29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjbG9uZWRDb21wb25lbnQsIG51bGwsIHRydWUpO1xybGV0IGNvbnRlbnQ7XHIvLyBIYW5kbGUgaWZyYW1lLXdyYXBwZXJccmxldCBpZnJhbWVXcmFwcGVyID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJpZiAoaWZyYW1lV3JhcHBlci5sZW5ndGggPiAwKSB7XHJpZnJhbWVXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWlmcmFtZS1jb3ZlcicpLnJlbW92ZSgpO1xybGV0IGlmcmFtZSA9IGlmcmFtZVdyYXBwZXIuY2hpbGRyZW4oJ2lmcmFtZScpO1xyaWYgKGlmcmFtZVdyYXBwZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXItZmFrZScpKSB7XHJpZnJhbWUudW53cmFwKCk7XHJ9IGVsc2Uge1xyaWZyYW1lV3JhcHBlci5yZW1vdmVDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyfVxyfVxyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmdldENvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtccmNvbnRlbnQgPSBjb21wb25lbnREYXRhLmdldENvbnRlbnQuY2FsbChjb21wb25lbnREYXRhLCBjbG9uZWRDb21wb25lbnQsIHNlbGYpO1xyfSBlbHNlIHtccmxldCBjb21wb25lbnRDb250ZW50ID0gY2xvbmVkQ29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29udGVudCA9IGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyY2xvbmVkQ29tcG9uZW50Lmh0bWwoY29udGVudCkuZmluZCgnW2RhdGEtZHluYW1pYy1ocmVmXScpLmVhY2goZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5odG1sKCcnKTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+JHtjbG9uZWRDb21wb25lbnQuaHRtbCgpfTwvc2VjdGlvbj5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb21wb25lbnRUeXBlID0gKGNvbXBvbmVudC5hdHRyKCdkYXRhLXR5cGUnKSB8fCAnJykucmVwbGFjZSgnY29tcG9uZW50LScsICcnKTtccmlmIChjb21wb25lbnRUeXBlICYmIChjb21wb25lbnRUeXBlIGluIEtFZGl0b3IuY29tcG9uZW50cykpIHtccnJldHVybiBjb21wb25lbnRUeXBlO1xyfSBlbHNlIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ3N0cmluZycpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlO1xyfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50VHlwZSA9IG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUuY2FsbChzZWxmLCBjb21wb25lbnQpO1xyfVxyaWYgKCFjb21wb25lbnRUeXBlKSB7XHJzZWxmLmVycm9yKCdDb21wb25lbnQgdHlwZSBpcyB1bmRlZmluZWQhJyk7XHJ9XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmlmICghY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbXBvbmVudCcpIHx8ICFjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpKSB7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyY29tcG9uZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29tcG9uZW50Q29udGVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmNvbXBvbmVudC5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTVBPTkVOVCwgY29tcG9uZW50RGF0YS5zZXR0aW5nRW5hYmxlZCkpO1xyY29tcG9uZW50LmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBkeW5hbWljRWxlbWVudCA9ICQodGhpcyk7XHJzZWxmLmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCk7XHJ9KTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmluaXQuY2FsbChjb21wb25lbnREYXRhLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIHNlbGYpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKTtccmNvbXBvbmVudC5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50ID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBkeW5hbWljRWxlbWVudC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmR5bmFtaWNFbGVtZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxybGV0IGR5bmFtaWNIcmVmID0gZHluYW1pY0VsZW1lbnQuYXR0cignZGF0YS1keW5hbWljLWhyZWYnKTtccmxldCBkYXRhID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjb21wb25lbnQsIFsnZGF0YS10eXBlJywgJ2RhdGEtZHluYW1pYy1ocmVmJ10sIGZhbHNlKTtccmRhdGEgPSAkLnBhcmFtKGRhdGEpO1xycmV0dXJuICQuYWpheCh7XHJ1cmw6IGR5bmFtaWNIcmVmLFxyZGF0YTogZGF0YSxccnR5cGU6ICdHRVQnLFxyZGF0YVR5cGU6ICdIVE1MJyxccnN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzLCBqcVhIUikge1xyZHluYW1pY0VsZW1lbnQuaHRtbChyZXNwb25zZSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50TG9hZGVkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSk7XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvci5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJcbn07XHJcbiIsImNvbnN0IENMQVNTX05BTUVTID0ge1xyVUk6ICdrZWRpdG9yLXVpJyxccldSQVBQRVI6ICdrZWRpdG9yLXdyYXBwZXInLFxySElEREVOX0VMRU1FTlQ6ICdrZWRpdG9yLWhpZGRlbi1lbGVtZW50JyxcclNJREVCQVI6ICdrZWRpdG9yLXNpZGViYXInLFxyU0lERUJBUl9IRUFERVI6ICdrZWRpdG9yLXNpZGViYXItaGVhZGVyJyxcclNJREVCQVJfQk9EWTogJ2tlZGl0b3Itc2lkZWJhci1ib2R5JyxcclNJREVCQVJfVElUTEU6ICdrZWRpdG9yLXNpZGViYXItdGl0bGUnLFxyU0lERUJBUl9DTE9TRVI6ICdrZWRpdG9yLXNpZGViYXItY2xvc2VyJyxcclNJREVCQVJfT1BFTkVEOiAnb3BlbmVkJyxcclRPUEJBUjogJ2tlZGl0b3ItdG9wYmFyJyxcclRPUEJBUl9MRUZUOiAna2VkaXRvci10b3BiYXItbGVmdCcsXHJUT1BCQVJfUklHSFQ6ICdrZWRpdG9yLXRvcGJhci1yaWdodCcsXHJUT1BCQVJfQ0VOVEVSOiAna2VkaXRvci10b3BiYXItY2VudGVyJyxcclRPUEJBUl9CVVRUT046ICdrZWRpdG9yLXRvcGJhci1idG4nLFxyVE9QQkFSX0JVVFRPTl9BQ1RJVkU6ICdhY3RpdmUnLFxyVE9QQkFSX1RJVExFOiAna2VkaXRvci10b3BiYXItdGl0bGUnLFxyU0VUVElORzogJ2tlZGl0b3Itc2V0dGluZycsXHJTRVRUSU5HX0NPTlRBSU5FUjogJ2tlZGl0b3Itc2V0dGluZy1jb250YWluZXInLFxyU0VUVElOR19GT1JNOiAna2VkaXRvci1zZXR0aW5nLWZvcm0nLFxyU0VUVElOR19GT1JNX0FDVElWRTogJ2FjdGl2ZScsXHJDT05URU5UX0FSRUFTX1dSQVBQRVI6ICdrZWRpdG9yLWNvbnRlbnQtYXJlYXMtd3JhcHBlcicsXHJDT05URU5UX0FSRUFTOiAna2VkaXRvci1jb250ZW50LWFyZWFzJyxcckNPTlRFTlRfQVJFQTogJ2tlZGl0b3ItY29udGVudC1hcmVhJyxccklGUkFNRTogJ2tlZGl0b3ItaWZyYW1lJyxccklGUkFNRV9XUkFQUEVSOiAna2VkaXRvci1pZnJhbWUtd3JhcHBlcicsXHJJRlJBTUVfRkFLRVI6ICdrZWRpdG9yLWlmcmFtZS1mYWtlcicsXHJJRlJBTUVfQ09WRVJfV1JBUFBFUjogJ2tlZGl0b3ItaWZyYW1lLWNvdmVyLXdyYXBwZXInLFxySUZSQU1FX0NPVkVSOiAna2VkaXRvci1pZnJhbWUtY292ZXInLFxySUZSQU1FX0NPVkVSX0hJRERFTjogJ2hpZGRlbi1jb3ZlcicsXHJDT01QT05FTlQ6ICdrZWRpdG9yLWNvbXBvbmVudCcsXHJcbn07XHJleHBvcnQgZGVmYXVsdCBDTEFTU19OQU1FUztcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4vY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCB7XHIvKlxyKiBUaXRsZSB3aWxsIGJlIHNob3dlZCBpbiBsZWZ0IG9mIHRvcGJhclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xydGl0bGU6ICdFZGl0aW5nIHdpdGggS0VkaXRvcicsXHIvKlxyKiBFbmFibGUgbmVzdGVkIGNvbnRhaW5lciBvciBub3RcciogQG9wdGlvbiB7Qm9vbGVhbn1cciovXHJuZXN0ZWRDb250YWluZXJFbmFibGVkOiB0cnVlLFxyLypcciogRW5hYmxlIGV4cGxpY2l0IHNuaXBwZXQgb3Igbm90LiBXaGVuIGRpc2FibGUsIHRoZXJlIGlzIG9ubHkgb25lIGJ1dHRvbiBmb3IgYWRkaW5nLiBJZiBhZGQgYnV0dG9uIGlzIGluIGNvbnRlbnQgYXJlYSBvciBjb250YWluZXIsIHlvdSBjYW4gYWRkIGNvbXBvbmVudCBvciBjb250YWluZXJzLiBJZiBhZGQgYnV0dG9uIGlzIGluIHN1Yi1jb250YWluZXIsIHlvdSBqdXN0IGNhbiBhZGQgb25seSBjb21wb25lbnQuIFdoZW4geW91IGFkZCBjb21wb25lbnQgaW4gY29udGVudCBhcmVhLCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBjb25maWcgXCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudFwiIG9wdGlvblxyKiBAb3B0aW9uIHtCb29sZWFufVxyKi9ccmV4cGxpY2l0U25pcHBldEVuYWJsZWQ6IGZhbHNlLFxyLypcciogY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQgVGhlIGNvbnRhaW5lciBzbmlwcGV0IHdoaWNoIHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseSBpbiBjb250ZW50IGFyZSB3aGVuIHlvdSBhZGRpbmcgYSBjb21wb25lbnQuIE5vdGU6IGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGluIGZpcnN0IGNvbnRhaW5lciBjb250ZW50IG9mIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQ6IGBccjxkaXYgY2xhc3M9XCJyb3dcIj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiPlxyPC9kaXY+XHI8L2Rpdj5ccmAsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb250ZW50IGJ1dHRvbi4gVGhpcyBhdmFpbGFibGUgb25seSB3aGVuIFwiZXhwbGljaXRTaXBwZXRFbmFibGVkXCIgaXMgXCJmYWxzZVwiXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5BZGRDb250ZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBhZGQgY29udGFpbmVyIGJ1dHRvblxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuQWRkQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGFkZCBzdWItY29udGFpbmVyIGJ1dHRvblxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuQWRkU3ViQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb21wb25lbnQgYnV0dG9uXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5BZGRDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWxpc3QtdWxcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29udGFpbmVyXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5Nb3ZlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtc29ydFwiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBtb3ZlIGJ1dHRvbiBvZiBjb21wb25lbnRcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bk1vdmVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3NcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3Igc2V0dGluZyBidXR0b24gb2YgY29udGFpbmVyXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5TZXR0aW5nQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbXBvbmVudFxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuU2V0dGluZ0NvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbXBvbmVudFxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBkZWxldGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuRGVsZXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkRlbGV0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbnRhaW5lcj8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgY29uZmlybSBkaWFsb2cgd2hlbiBkZWxldGluZyBjb250YWluZXJcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0OiAnQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tcG9uZW50PyBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZSEnLFxyLypcciogV2lkdGggb2YgbW9iaWxlIGRldmljZVxyKiBAb3B0aW9uIHtOdW1iZXJ9XHIqL1xyd2lkdGhNb2JpbGU6IDMyMCxcci8qXHIqIFdpZHRoIG9mIHRhYmxldCBkZXZpY2VcciogQG9wdGlvbiB7TnVtYmVyfVxyKi9ccndpZHRoVGFibGV0OiA3NjgsXHIvKlxyKiBEZWZhdWx0IGNvbXBvbmVudCB0eXBlIG9mIGNvbXBvbmVudC4gSWYgdHlwZSBvZiBjb21wb25lbnQgZG9lcyBub3QgZXhpc3QgaW4gS0VkaXRvci5jb21wb25lbnRzLCB3aWxsIGJlIHVzZWQgXCJkZWZhdWx0Q29tcG9uZW50VHlwZVwiIGFzIHR5cGUgb2YgdGhpcyBjb21wb25lbnQuIElmIGlzIGZ1bmN0aW9uLCBhcmd1bWVudCBpcyBjb21wb25lbnRcciogQG9wdGlvbiB7U3RyaW5nfEZ1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIqL1xyZGVmYXVsdENvbXBvbmVudFR5cGU6ICdibGFuaycsXHIvKlxyKiBVcmwgdG8gc25pcHBldHMgZmlsZVxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyc25pcHBldHNVcmw6ICdzbmlwcGV0cy9zbmlwcGV0cy5odG1sJyxcci8qXHIqIEVuYWJsZSBmaWx0ZXJpbmcgc25pcHBldHMgYnkgY2F0ZWdvcmllcyBhbmQgdGV4dCBzZWFyY2hpbmcgb3Igbm90XHIqIEBvcHRpb24ge0Jvb2xlYW59XHIqL1xyc25pcHBldHNGaWx0ZXJFbmFibGVkOiB0cnVlLFxyLypcciogVGhlIHNlcGFyYXRvciBjaGFyYWN0ZXIgYmV0d2VlbiBlYWNoIGNhdGVnb3JpZXNcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcjogJzsnLFxyLypcciogQ29udGVudCBzdHlsZXMgZm9yIGlmcmFtZSBtb2RlLiBCZXNpZGUgb2YgdGhpcyBvcHRpb24sIEtFZGl0b3Igd2lsbCBhZGQgYWxsIGVsZW1lbnRzIHdoaWNoIGhhdmUgJ2RhdGEtdHlwZT1rZWRpdG9yLXN0eWxlJyBmb3IgaWZyYW1lIHN0eWxlc2hlZXQuIFRoZXNlIGVsZW1lbnRzIGNhbiBiZSAnbGluaycsICdzdHlsZScgb3IgYW55IHRhZ3MuIElmIHRoZXNlIGVsZW1lbnRzIGhhdmUgJ2hyZWYnIGF0dHJpYnV0ZSwgd2lsbCBjcmVhdGUgbGluayB0YWcgd2l0aCBocmVmLiBJZiB0aGVzZSBlbGVtZW50cyBkbyBub3QgaGF2ZSAnaHJlZicgYXR0cmlidXRlLCB3aWxsIGNyZWF0ZSBzdHlsZSB0YWcgd2l0aCBjc3MgcnVsZSBpcyBodG1sIGNvZGUgaW5zaWRlIGVsZW1lbnRcciogQG9wdGlvbiB7QXJyYXk8T2JqZWN0Pn1cciogQGV4YW1wbGU6XHIqIFtcciogICAgIHtcciogICAgICAgICBocmVmOiAnL3BhdGgvdG8vc3R5bGUvZmlsZSdcciogICAgIH0sIHtcciogICAgICAgICBjb250ZW50OiAnYSB7IGNvbG9yOiByZWQ7IH0nXHIqICAgICB9XHIqIF1cciovXHJjb250ZW50U3R5bGVzOiBbXSxcci8qXHIqIFNlbGVjdG9yIG9mIGNvbnRlbnQgYXJlYXMuIElmIGlzIG51bGwgb3Igc2VsZWN0b3IgZG9lcyBub3QgbWF0Y2ggYW55IGVsZW1lbnRzLCB3aWxsIGNyZWF0ZSBkZWZhdWx0IGNvbnRlbnQgYXJlYSBhbmQgd3JhcCBhbGwgY29udGVudCBpbnNpZGUgaXQuXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJjb250ZW50QXJlYXNTZWxlY3RvcjogbnVsbCxcci8qXHIqIFRoZSB3cmFwcGVyIGVsZW1lbnQgZm9yIGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIG9yIG5ldyBkaXYgd2hpY2ggd2lsbCBjb250YWlucyBjb250ZW50IG9mIHRleHRhcmVhLiBJdCdzIGp1c3QgZm9yIGRpc3BsYXlpbmcgcHVycG9zZS4gSWYgeW91IHdhbnQgYWxsIGNvbnRlbnRzIGluc2lkZSBpZnJhbWUgYXJlIGFwcGVuZGVkIGludG8gYm9keSB0YWcsIGp1c3QgbGVhdmUgaXQgYXMgYmxhbmtcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmNvbnRlbnRBcmVhc1dyYXBwZXI6IGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9XCI+PC9kaXY+YCxcci8qXHIqIEVuYWJsZSBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXJcciogQG9wdGlvbiB7Qm9vbGVhbn1cciovXHJjb250YWluZXJTZXR0aW5nRW5hYmxlZDogZmFsc2UsXHIvKlxyKiBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIqIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHIqL1xyY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbjogbnVsbCxcci8qXHIqIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBzaG93ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZXR0aW5nRm9ybVxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIqIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHIqL1xyY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbjogbnVsbCxcci8qXHIqIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBoaWRkZW5cciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZXR0aW5nRm9ybVxyKiBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyKi9ccmNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb246IG51bGwsXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBrZWRpdG9yIGluc3RhbmNlIGlzIHJlYWR5XHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKi9ccm9uUmVhZHk6IGZ1bmN0aW9uICgpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBzbmlwcGV0cyBhcmUgbG9hZGVkLiBJZiB5b3Ugd2FudCB0byBtb2RpZnkgc25pcHBldHMgY29udGVudCwgcGxlYXNlIHJldHVybiBtb2RpZmllZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtTdHJpbmd9IHJlc3BcciogQHJldHVybiB7U3RyaW5nfVxyKi9ccm9uU25pcHBldHNMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBlcnJvciBpbiBsb2FkaW5nIHNuaXBwZXRzXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pxWEhSfSBqcVhIUlxyKi9ccm9uU25pcHBldHNFcnJvcjogZnVuY3Rpb24gKGpxWEhSKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgaWZyYW1lIGFuZCBjb250ZW50IGFyZWFzIHdyYXBwZXIgaW5zaWRlIGl0IGFyZSBjcmVhdGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lXHIqIEBwYXJhbSB7alF1ZXJ5fSBpZnJhbWVIZWFkXHIqIEBwYXJhbSB7alF1ZXJ5fSBpZnJhbWVCb2R5XHIqL1xyb25Jbml0SWZyYW1lOiBmdW5jdGlvbiAoaWZyYW1lLCBpZnJhbWVIZWFkLCBpZnJhbWVCb2R5KSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBjb250ZW50IGlzIGNoYW5nZWQuIEluY2x1ZGVzIGFkZCwgZGVsZXRlLCBkdXBsaWNhdGUgY29udGFpbmVyIG9yIGNvbXBvbmVudC4gT3IgY29udGVudCBvZiBhIGNvbXBvbmVudCBpcyBjaGFuZ2VkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbnRlbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb250YWluZXJcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhOiBmdW5jdGlvbiAoY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb250ZW50IGFyZWEuIEl0IGNhbiByZXR1cm4gYXJyYXkgb2YgalF1ZXJ5IG9iamVjdHMgd2hpY2ggd2lsbCBiZSBpbml0aWFsaXplZCBhcyBjb250YWluZXIgaW4gY29udGVudCBhcmVhLiBCeSBkZWZhdWx0LCBhbGwgZmlyc3QgbGV2ZWwgc2VjdGlvbnMgdW5kZXIgY29udGVudCBhcmVhIHdpbGwgYmUgaW5pdGlhbGl6ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uSW5pdENvbnRlbnRBcmVhOiBmdW5jdGlvbiAoY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkJlZm9yZUluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29udGFpbmVyLiBJdCBjYW4gcmV0dXJuIGFycmF5IG9mIGpRdWVyeSBvYmplY3RzIHdoaWNoIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgZWRpdGFibGUgY29tcG9uZW50cyBpbiBjb250YWluZXIgY29udGVudCAoTk9URTogdGhlc2Ugb2JqZWN0cyBNVVNUIGJlIHVuZGVyIGVsZW1lbnRzIHdoaWNoIGhhdmUgYXR0cmlidXRlIGRhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCIpLiBCeSBkZWZhdWx0LCBhbGwgZmlyc3QgbGV2ZWwgc2VjdGlvbnMgdW5kZXIgY29udGFpbmVyIGNvbnRlbnQgd2lsbCBiZSBpbml0aWFsaXplZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGNvbnRhaW5lciBpcyBkZWxldGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbnRhaW5lciBhbmQgaXRzIGNvbXBvbmVudHMgYXJlIGFscmVhZHkgZGVsZXRlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgY29udGFpbmVyIGlzIGNoYW5nZWQuIEl0IGNhbiBiZSB3aGVuIGNvbnRhaW5lciByZWNlaXZlZCBuZXcgY29tcG9uZW50IGZyb20gc25pcHBldCBvciBmcm9tIG90aGVyIGNvbnRhaW5lci4gT3IgY29udGVudCBvZiBhbnkgY29tcG9uZW50cyBhcmUgY2hhbmdlZCBvciBhbnkgY29tcG9uZW50cyBhcmUgZGVsZXRlZCBvciBkdXBsaWNhdGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIGR1cGxpY2F0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gbmV3Q29udGFpbmVyXHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyRHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb250YWluZXIgaXMgc2VsZWN0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbnRhaW5lclNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb250YWluZXIgc25pcHBldCBpcyBhZGRlZCBpbiBhIGNvbnRlbnQgYXJlYVxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IG5ld0NvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRTbmlwcGV0XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyU25pcHBldEFkZGVkOiBmdW5jdGlvbiAoZXZlbnQsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gVGhpcyBjYWxsYmFjayBpcyBhdmFpbGFibGUgb3Igbm90IGlzIGRlcGVuZCBvbiBjb21wb25lbnQgdHlwZSBoYW5kbGVyLlxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyKi9ccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbXBvbmVudFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkJlZm9yZUluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29tcG9uZW50XHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uSW5pdENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgYSBjb21wb25lbnQgaXMgZGVsZXRlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBkZWxldGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb21wb25lbnRcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25Db21wb25lbnREZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBvZiBhIGNvbXBvbmVudCBpcyBjaGFuZ2VkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudENoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29tcG9uZW50IGlzIGR1cGxpY2F0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gbmV3Q29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29tcG9uZW50RHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgc2VsZWN0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudFNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250YWluZXJcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkU25pcHBldFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBkeW5hbWljIGNvbnRlbnRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBkeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcciogQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkR5bmFtaWNDb250ZW50TG9hZGVkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGlmIGxvYWRpbmcgZHluYW1pYyBjb250ZW50IGlzIGVycm9yLCBhYm9ydCBvciB0aW1lb3V0XHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcciogQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkR5bmFtaWNDb250ZW50RXJyb3I6IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKSB7XHJ9XHJcbn07XHIiLCJleHBvcnQgZGVmYXVsdCB7XHJBTEw6IDAsXHJDT05UQUlORVI6IDEsXHJDT01QT05FTlQ6IDJcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyQ09OVEVOVF9BUkVBOiAwLFxyQ09OVEFJTkVSOiAxLFxyU1VCX0NPTlRBSU5FUjogMixcckNPTlRBSU5FUl9DT05URU5UOiAzLFxyU1VCX0NPTlRBSU5FUl9DT05URU5UOiA0LFxyQ09NUE9ORU5UOiA1XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVyO1xyaWYgKHRhcmdldC5pcygnc2VjdGlvbicpKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXInKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyXCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWlubmVyXCI+PC9zZWN0aW9uPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRhaW5lciwgaXNOZXN0ZWQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250YWluZXJJbm5lciA9IGNvbnRhaW5lci5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyLWlubmVyJykuY2xvbmUoKTtccmNvbnRhaW5lcklubmVyLmZpbmQoJ1tkYXRhLXR5cGU9Y29udGFpbmVyLWNvbnRlbnRdJykubm90KGlzTmVzdGVkID8gJycgOiAnLmtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJjb250YWluZXJDb250ZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50IGtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50IHVpLXNvcnRhYmxlJykucmVtb3ZlQXR0cignaWQnKTtccmxldCBjb250YWluZXJDb250ZW50SW5uZXIgPSBjb250YWluZXJDb250ZW50LmNoaWxkcmVuKCk7XHJsZXQgY29udGVudCA9ICcnO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY2hpbGQpO1xyfSBlbHNlIGlmIChjaGlsZC5pcygnLmtlZGl0b3Itc3ViLWNvbnRhaW5lcicpKSB7XHJjb250ZW50ICs9IHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250ZW50KTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbj4ke2NvbnRhaW5lcklubmVyLmh0bWwoKX08L3NlY3Rpb24+YDtcclxufSIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGlzTmVzdGVkID0gb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmIGNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykgfHwgIWNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJykpIHtccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lcicpO1xyfVxyY29udGFpbmVyLmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUikpO1xyY29udGFpbmVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRzID0gY29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpO1xyY29udGFpbmVyQ29udGVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJpZiAob3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmICFpc05lc3RlZCAmJiBjb250YWluZXJDb250ZW50LnBhcmVudHMoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtcci8vIERvIG5vdGhpbmcgYmVjYXVzZSBpdCdzIGNvbnRhaW5lciBjb250ZW50IG9mIHN1YiBjb250YWluZXJccnJldHVybjtccn1ccnNlbGYuaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpO1xyY29udGFpbmVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQnKTtccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQnKTtccn1ccmNvbnRhaW5lckNvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXJcIj48L2Rpdj4nKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5odG1sKGNvbnRhaW5lckNvbnRlbnQuaHRtbCgpKTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250YWluZXJDb250ZW50SW5uZXIpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQgOiBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQpKTtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmFwcGVuZFRvKGNvbnRhaW5lckNvbnRlbnQpO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKCFpc05lc3RlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyfSk7XHJ9XHJ9XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29tcG9uZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn0gZWxzZSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIGlzTmVzdGVkID8gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA6IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5BTEwgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfVxyY29udGFpbmVyQ29udGVudElubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5idG4tY29tcG9uZW50LXJlcG9zaXRpb24sIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250YWluZXItY29udGVudC1pbm5lcicsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xybGV0IGNvbnRhaW5lcjtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccmNvbnRhaW5lciA9IGl0ZW0uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHIkKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RhcnQ6IGZ1bmN0aW9uIChlLCB1aSkge1xydWkuaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0b3A6IGZ1bmN0aW9uIChlLCB1aSkge1xyaWYgKHVpLmhlbHBlcikge1xydWkuaGVscGVyLnJlbW92ZSgpO1xyfVxydWkuaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50SW5uZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjaGlsZCA9ICQodGhpcyk7XHJpZiAoY2hpbGQuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIGNoaWxkKTtccn0gZWxzZSB7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGVudEFyZWEuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGVudC1hcmVhJyk7XHJsZXQgY29udGVudCA9IGNvbnRlbnRBcmVhLmh0bWwoKTtccmxldCBjb250ZW50QXJlYUlubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyXCI+PC9kaXY+JykuaHRtbChjb250ZW50KTtccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudEFyZWFJbm5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoIWRvbnRJbml0VG9vbGJhcikge1xybGV0IGNvbnRlbnRBcmVhVG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQSkpO1xyY29udGVudEFyZWEuYXBwZW5kKGNvbnRlbnRBcmVhVG9vbGJhcik7XHJjb250ZW50QXJlYVRvb2xiYXIuY2hpbGRyZW4ob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gJy5idG4tYWRkLWNvbnRhaW5lcicgOiAnLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250ZW50QXJlYUlubmVyLCBvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkFMTCk7XHJ9KTtccn1ccmNvbnRlbnRBcmVhSW5uZXIuc29ydGFibGUoe1xyaGFuZGxlOiAnLmtlZGl0b3ItdG9vbGJhci1jb250YWluZXI6bm90KC5rZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lcikgLmJ0bi1jb250YWluZXItcmVwb3NpdGlvbicsXHJpdGVtczogJz4gc2VjdGlvbicsXHJoZWxwZXI6ICdjbG9uZScsXHJjb25uZWN0V2l0aDogJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJheGlzOiAneScsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyc2VsZi5jbG9zZVNpZGViYXIoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xyY29udGVudEFyZWFJbm5lci5jaGlsZHJlbignc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccmxldCBjb250ZW50RGF0YSA9IG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEubGVuZ3RoID4gMCkge1xyJC5lYWNoKGNvbnRlbnREYXRhLCBmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgd3JhcHBlciA9IHNlbGYud3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLldSQVBQRVJ9XCI+PC9kaXY+YCk7XHJsZXQgaWZyYW1lV3JhcHBlciA9IHNlbGYuaWZyYW1lV3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLklGUkFNRV9XUkFQUEVSfVwiPjwvZGl2PmApO1xybGV0IGlmcmFtZSA9IHNlbGYuaWZyYW1lID0gJChgPGlmcmFtZSBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuSUZSQU1FfVwiPjwvaWZyYW1lPmApO1xyZWxlbWVudC5hZnRlcih3cmFwcGVyKTtccmVsZW1lbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuSElEREVOX0VMRU1FTlQpO1xyaWZyYW1lV3JhcHBlci5odG1sKGlmcmFtZSk7XHJ3cmFwcGVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpLmFwcGVuZChpZnJhbWVXcmFwcGVyKTtccnNlbGYuaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRzKCk7XHIvLyBGaXggaXNzdWUgRmlyZWZveCBjYW4ndCByZW5kZXIgY29udGVudCBpbnNpZGUgaWZyYW1lXHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccnNlbGYuaWZyYW1lRG9jLmdldCgwKS5vcGVuKCk7XHJzZWxmLmlmcmFtZURvYy5nZXQoMCkuY2xvc2UoKTtcci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyc2VsZi5pZnJhbWVXaW5kb3cgPSBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA/IGlmcmFtZVswXS5jb250ZW50V2luZG93IDogaWZyYW1lWzBdLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztccnNlbGYuaWZyYW1lSGVhZCA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2hlYWQnKTtccnNlbGYuaWZyYW1lQm9keSA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2JvZHknKTtcci8vIEdlbmVyYXRlIGhlYWQgY29udGVudCBmb3IgaWZyYW1lXHJsZXQgc3R5bGVzID0gJyc7XHIkKCdbZGF0YS10eXBlPVwia2VkaXRvci1zdHlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHN0eWxlID0gJCh0aGlzKTtccmxldCBpZFN0ciA9IHN0eWxlLmF0dHIoJ2lkJykgfHwgJyc7XHJsZXQgaHJlZiA9IHN0eWxlLmF0dHIoJ2hyZWYnKSB8fCBzdHlsZS5hdHRyKCdkYXRhLWhyZWYnKSB8fCAnJztccmlmIChocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtocmVmfVwiICR7aWRTdHJ9IC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiAke2lkU3RyfT4ke3N0eWxlLmh0bWwoKX08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtcciQuaXNBcnJheShvcHRpb25zLmNvbnRlbnRTdHlsZXMpICYmICQuZWFjaChvcHRpb25zLmNvbnRlbnRTdHlsZXMsIGZ1bmN0aW9uIChpLCBzdHlsZSkge1xybGV0IGlkU3RyID0gc3R5bGUuaWQgfHwgJyc7XHJpZiAoc3R5bGUuaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7c3R5bGUuaHJlZn1cIiAke2lkU3RyfSAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgJHtpZFN0cn0+JHtzdHlsZS5jb250ZW50fTwvc3R5bGU+XFxuYDtccn1ccn0pO1xyc2VsZi5pZnJhbWVIZWFkLmFwcGVuZChzdHlsZXMpO1xyLy8gR2VuZXJhdGUgYm9keSBjb250ZW50IGZvciBpZnJhbWVccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9ICQob3B0aW9ucy5jb250ZW50QXJlYXNXcmFwcGVyIHx8ICc8ZGl2IC8+Jyk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignY2xhc3MnLCBgJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9YCk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbChlbGVtZW50LnZhbCgpIHx8IGVsZW1lbnQuaHRtbCgpIHx8ICcnKTtccmlmICghc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2lkJykpIHtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccn1ccnNlbGYuaWZyYW1lQm9keS5hcHBlbmQoc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRJZnJhbWUgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0SWZyYW1lLmNhbGwoc2VsZiwgc2VsZi5pZnJhbWUsIHNlbGYuaWZyYW1lSGVhZCwgc2VsZi5pZnJhbWVCb2R5KTtccn1ccnNlbGYuaW5pdENvbnRlbnRBcmVhcygpO1xyc2VsZi5pbml0SWZyYW1lQWN0aW9ucygpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xybGV0IGNvbnRlbnRBcmVhcztccmlmIChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKSB7XHJjb250ZW50QXJlYXMgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcik7XHJ9XHJpZiAoIWNvbnRlbnRBcmVhcyB8fCBjb250ZW50QXJlYXMubGVuZ3RoID09PSAwKSB7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gY29udGVudEFyZWFzV3JhcHBlci5odG1sKCk7XHJjb250ZW50QXJlYXMgPSAkKCc8ZGl2IC8+JykuaHRtbChvcmlnaW5hbENvbnRlbnQpO1xyY29udGVudEFyZWFzV3JhcHBlci5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXMpO1xyfVxyY29udGVudEFyZWFzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRlbnRBcmVhID0gJCh0aGlzKTtccmlmICghY29udGVudEFyZWEuYXR0cignaWQnKSkge1xyY29udGVudEFyZWEuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJ9XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQ7XHJsZXQgaWQgPSBzZWxmLmlkO1xybGV0IGNvbnRlbnQgPSBzZWxmLmdldENvbnRlbnQoZmFsc2UpO1xyc2VsZi53cmFwcGVyLnJlbW92ZSgpO1xyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQudmFsKGNvbnRlbnQpO1xyfSBlbHNlIHtccmVsZW1lbnQuaHRtbChjb250ZW50KTtccn1ccmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaGlkZGVuLWVsZW1lbnQnKTtccmVsZW1lbnQuZGF0YSgna2VkaXRvcicsIG51bGwpO1xyZGVsZXRlIEtFZGl0b3IuaW5zdGFuY2VzW2lkXTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGluQXJyYXkpIHtccmxldCBzZWxmID0gdGhpcztccmxldCByZXN1bHQgPSBbXTtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBodG1sID0gJyc7XHIkKHRoaXMpLmNoaWxkcmVuKCcua2VkaXRvci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXIgPSAkKHRoaXMpO1xyaHRtbCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyKTtccn0pO1xycmVzdWx0LnB1c2goaHRtbCk7XHJ9KTtccnJldHVybiBpbkFycmF5ID8gcmVzdWx0IDogcmVzdWx0LmpvaW4oJ1xcbicpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xybGV0IHNpZGViYXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1zaWRlYmFyJyk7XHJsZXQgbW9kYWwgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1tb2RhbCcpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRhaW5lcikge1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhciAmJiAhbW9kYWwpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJsZXQgY29tcG9uZW50ID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29tcG9uZW50KSB7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbXBvbmVudC5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhcikge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRlbnRBcmVhc1dyYXBwZXIuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb250YWluZXIgPSAkKHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGJ0bi5wYXJlbnQoKS5oYXNDbGFzcygna2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXInKSkpO1xyY29udGFpbmVyLmFmdGVyKG5ld0NvbnRhaW5lcik7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckR1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQpKSB7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbXBvbmVudHMgPSBjb250YWluZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxybGV0IHNldHRpbmdDb21wb25lbnQgPSBzZWxmLnNldHRpbmdDb21wb25lbnQ7XHJpZiAoc2V0dGluZ0NvbXBvbmVudCkge1xybGV0IHNldHRpbmdDb21wb25lbnRQYXJlbnQgPSBzZXR0aW5nQ29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHNldHRpbmdDb21wb25lbnRQYXJlbnQuaXMoY29udGFpbmVyKSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSBpZiAoY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJjb21wb25lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5kZWxldGVDb21wb25lbnQoJCh0aGlzKSk7XHJ9KTtccn1ccmNvbnRhaW5lci5yZW1vdmUoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckRlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEZWxldGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmlmIChjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgY29udGVudEFyZWFzV3JhcHBlci5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQoKSkpIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29tcG9uZW50ID0gJChzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY29tcG9uZW50KSk7XHJjb21wb25lbnQuYWZ0ZXIobmV3Q29tcG9uZW50KTtccnNlbGYuY29udmVydFRvQ29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIG5ld0NvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xyaWYgKGNvbmZpcm0ob3B0aW9ucy5jb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCkpIHtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccnNlbGYuZGVsZXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItY2xpY2tzLWluaXRpYWxpemVkJyk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWZyYW1lLCB3cmFwcGVyKSB7XHJpZiAoIXdyYXBwZXIpIHtccmlmcmFtZS53cmFwKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5JRlJBTUVfRkFLRVJ9XCI+PC9kaXY+YCk7XHJ3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xyfVxyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfV1JBUFBFUn1gKTtccmxldCBjb3ZlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLklGUkFNRV9DT1ZFUn1cIj48L2Rpdj5gKTtccndyYXBwZXIucHJlcGVuZChjb3Zlcik7XHJ3cmFwcGVyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyd3JhcHBlci5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJjb3Zlci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUlkJztcclxuaW1wb3J0IGdlbmVyYXRlVG9vbGJhciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVG9vbGJhcic7XHJcbmltcG9ydCBiZWF1dGlmeUNhdGVnb3JpZXMgZnJvbSAnLi91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgZ2V0RGF0YUF0dHJpYnV0ZXMgZnJvbSAnLi91dGlscy9nZXREYXRhQXR0cmlidXRlcyc7XHJcbmltcG9ydCBnZXRDbGlja2VkRWxlbWVudCBmcm9tICcuL3V0aWxzL2dldENsaWNrZWRFbGVtZW50JztccmltcG9ydCBpbml0SWZyYW1lQWN0aW9ucyBmcm9tICcuL2lmcmFtZS9pbml0SWZyYW1lQWN0aW9ucyc7XHJcbmltcG9ydCBpbml0SWZyYW1lQ292ZXIgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZUNvdmVyJztccmltcG9ydCBpbml0VG9wYmFyIGZyb20gJy4vdG9wYmFyL2luaXRUb3BiYXInO1xyXG5pbXBvcnQgaW5pdFRvcGJhck1vZGVzIGZyb20gJy4vdG9wYmFyL2luaXRUb3BiYXJNb2Rlcyc7XHJcbmltcG9ydCBpbml0RGV2aWNlU3dpdGNoZXIgZnJvbSAnLi90b3BiYXIvaW5pdERldmljZVN3aXRjaGVyJztccmltcG9ydCBpbml0U2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5pdFNpZGViYXInO1xyXG5pbXBvcnQgb3BlblNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL29wZW5TaWRlYmFyJztcclxuaW1wb3J0IGNsb3NlU2lkZWJhciBmcm9tICcuL3NpZGViYXIvY2xvc2VTaWRlYmFyJztccmltcG9ydCByZW5kZXJTbmlwcGV0cyBmcm9tICcuL3NuaXBwZXQvcmVuZGVyU25pcHBldHMnO1xyXG5pbXBvcnQgaW5pdFNuaXBwZXRzRmlsdGVyIGZyb20gJy4vc25pcHBldC9pbml0U25pcHBldHNGaWx0ZXInO1xyXG5pbXBvcnQgYWRkU25pcHBldCBmcm9tICcuL3NuaXBwZXQvYWRkU25pcHBldCc7XHJpbXBvcnQgaW5pdFNuaXBwZXRzTW9kYWwgZnJvbSAnLi9tb2RhbC9pbml0U25pcHBldHNNb2RhbCc7XHJcbmltcG9ydCBvcGVuTW9kYWwgZnJvbSAnLi9tb2RhbC9vcGVuTW9kYWwnO1xyXG5pbXBvcnQgY2xvc2VNb2RhbCBmcm9tICcuL21vZGFsL2Nsb3NlTW9kYWwnO1xyaW1wb3J0IGluaXRDb250ZW50QXJlYVdyYXBwZXIgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFXcmFwcGVyJztcclxuaW1wb3J0IGluaXRDb250ZW50QXJlYXMgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzJztcclxuaW1wb3J0IGluaXRDb250ZW50QXJlYSBmcm9tICcuL2NvbnRlbnRBcmVhL2luaXRDb250ZW50QXJlYSc7XHJpbXBvcnQgY29udmVydFRvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyL2NvbnZlcnRUb0NvbnRhaW5lcic7XHJcbmltcG9ydCBpbml0Q29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvaW5pdENvbnRhaW5lckNvbnRlbnQnO1xyXG5pbXBvcnQgZ2V0Q29udGFpbmVyQ29udGVudCBmcm9tICcuL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50JztccmltcG9ydCBnZXRDb21wb25lbnRUeXBlIGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUnO1xyXG5pbXBvcnQgY29udmVydFRvQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2NvbnZlcnRUb0NvbXBvbmVudCc7XHJcbmltcG9ydCBpbml0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2luaXRDb21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdER5bmFtaWNDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudCc7XHJcbmltcG9ydCBkZWxldGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvZGVsZXRlQ29tcG9uZW50JztcclxuaW1wb3J0IGdldENvbXBvbmVudENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnQvZ2V0Q29tcG9uZW50Q29udGVudCc7XHJpbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL2Rlc3Ryb3knO1xyXG5pbXBvcnQgZ2V0Q29udGVudCBmcm9tICcuL2dldENvbnRlbnQnO1xyXG5pbXBvcnQgc2V0Q29udGVudCBmcm9tICcuL3NldENvbnRlbnQnO1xyaW1wb3J0ICcuLi9zdHlsZXMva2VkaXRvci5sZXNzJztcci8vIENoZWNrIGRlcGVuZGVuY2llc1xyXG5pZiAoISQuZm4uc29ydGFibGUpIHtccmVycm9yKCckLmZuLnNvcnRhYmxlIGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgaW1wb3J0ICQuZm4uc29ydGFibGUgaW50byB5b3VyIGRvY3VtZW50IGZvciBjb250aW51ZSB1c2luZyBLRWRpdG9yLicpO1xyXG59XHIvLyBLRWRpdG9yIGNsYXNzXHJcbmNsYXNzIEtFZGl0b3Ige1xyc3RhdGljIERFRkFVTFRTID0gREVGQVVMVFM7XHJzdGF0aWMgZGVidWcgPSBmYWxzZTtccnN0YXRpYyB2ZXJzaW9uID0gJzIuMC4wJztccnN0YXRpYyBpbnN0YW5jZXMgPSB7fTtccnN0YXRpYyBjb21wb25lbnRzID0ge1xyYmxhbms6IHtccnNldHRpbmdFbmFibGVkOiBmYWxzZVxyfVxyfTtccnN0YXRpYyBsb2coLi4uYXJncykge1xyaWYgKGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nICYmICQua2VkaXRvci5kZWJ1Zykge1xyY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbIEtFZGl0b3IgXSAnLCAuLi5hcmdzXSk7XHJjb25zb2xlLmxvZyhgXCJsb2dcIiBpcyBERVBSRUNBVEVELiBXaWxsIGJlIHJlbW92ZWQgc29vbi4gUGxlYXNlIHVzZSBcImNvbnNvbGUubG9nXCIgaW5zdGVhZCFgKTtccn1ccn1ccnN0YXRpYyBlcnJvcihtZXNzYWdlKSB7XHJ0aHJvdyBuZXcgRXJyb3IoYFsgS0VkaXRvciBdICR7bWVzc2FnZX1gKTtccn1ccnN0YXRpYyBpbml0KHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gbmV3IEtFZGl0b3IodGFyZ2V0LCBjb25maWcpO1xyfVxyY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBpbml0LmFwcGx5KHRoaXMsIFt0YXJnZXQsIGNvbmZpZ10pO1xyfVxyZ2VuZXJhdGVJZCgpIHtccnJldHVybiBnZW5lcmF0ZUlkKCk7XHJ9XHJnZW5lcmF0ZVRvb2xiYXIodHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccnJldHVybiBnZW5lcmF0ZVRvb2xiYXIuYXBwbHkodGhpcywgW3R5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlXSk7XHJ9XHJiZWF1dGlmeUNhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xycmV0dXJuIGJlYXV0aWZ5Q2F0ZWdvcmllcy5hcHBseSh0aGlzLCBbY2F0ZWdvcmllc10pO1xyfVxyc2V0U2V0dGluZ0NvbnRhaW5lcihjb250YWluZXIpIHtccnRoaXMuc2V0dGluZ0NvbnRhaW5lciA9IGNvbnRhaW5lcjtccn1ccmdldFNldHRpbmdDb250YWluZXIoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29udGFpbmVyO1xyfVxyc2V0U2V0dGluZ0NvbXBvbmVudChjb21wb25lbnQpIHtccnRoaXMuc2V0dGluZ0NvbXBvbmVudCA9IGNvbXBvbmVudDtccn1ccmdldFNldHRpbmdDb21wb25lbnQoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29tcG9uZW50O1xyfVxyZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5KSB7XHJyZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZXMuYXBwbHkodGhpcywgW3RhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheV0pO1xyfVxyZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRUeXBlLmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENsaWNrZWRFbGVtZW50KGV2ZW50LCBzZWxlY3Rvcikge1xycmV0dXJuIGdldENsaWNrZWRFbGVtZW50LmFwcGx5KHRoaXMsIFtldmVudCwgc2VsZWN0b3JdKTtccn1cci8vIElmcmFtZVxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpIHtccnJldHVybiBpbml0SWZyYW1lQ292ZXIuYXBwbHkodGhpcywgW2lmcmFtZSwgd3JhcHBlcl0pO1xyfVxyLy8gS0VkaXRvciBjbGlja3Ncci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0SWZyYW1lQWN0aW9ucygpIHtccnJldHVybiBpbml0SWZyYW1lQWN0aW9ucy5hcHBseSh0aGlzKTtccn1cci8vIFRvcGJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRUb3BiYXIoKSB7XHJyZXR1cm4gaW5pdFRvcGJhci5hcHBseSh0aGlzKTtccn1ccmluaXREZXZpY2VTd2l0Y2hlcigpIHtccnJldHVybiBpbml0RGV2aWNlU3dpdGNoZXIuYXBwbHkodGhpcyk7XHJ9XHJpbml0VG9wYmFyTW9kZXMoKSB7XHJyZXR1cm4gaW5pdFRvcGJhck1vZGVzLmFwcGx5KHRoaXMpO1xyfVxyLy8gU2lkZWJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTaWRlYmFyKCkge1xycmV0dXJuIGluaXRTaWRlYmFyLmFwcGx5KHRoaXMpO1xyfVxyb3BlblNpZGViYXIodGFyZ2V0KSB7XHJyZXR1cm4gb3BlblNpZGViYXIuYXBwbHkodGhpcywgW3RhcmdldF0pO1xyfVxyY2xvc2VTaWRlYmFyKCkge1xycmV0dXJuIGNsb3NlU2lkZWJhci5hcHBseSh0aGlzKTtccn1cci8vIExlZ2FjeSBtZXRob2RzLiBERVBSRUNBVEVEXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2hvd1NldHRpbmdQYW5lbCh0YXJnZXQpIHtccnRoaXMub3BlblNpZGViYXIodGFyZ2V0KTtccn1ccmhpZGVTZXR0aW5nUGFuZWwoKSB7XHJ0aGlzLmNsb3NlU2lkZWJhcigpO1xyfVxyLy8gU25pcHBldCBtb2RhbFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTbmlwcGV0c01vZGFsKCkge1xycmV0dXJuIGluaXRTbmlwcGV0c01vZGFsLmFwcGx5KHRoaXMpO1xyfVxycmVuZGVyU25pcHBldHMocmVzcCkge1xycmV0dXJuIHJlbmRlclNuaXBwZXRzLmFwcGx5KHRoaXMsIFtyZXNwXSk7XHJ9XHJpbml0U25pcHBldHNGaWx0ZXIodHlwZSkge1xycmV0dXJuIGluaXRTbmlwcGV0c0ZpbHRlci5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyb3Blbk1vZGFsKHRhcmdldCwgc25pcHBldFR5cGUpIHtccnJldHVybiBvcGVuTW9kYWwuYXBwbHkodGhpcywgW3RhcmdldCwgc25pcHBldFR5cGVdKTtccn1ccmNsb3NlTW9kYWwoKSB7XHJyZXR1cm4gY2xvc2VNb2RhbC5hcHBseSh0aGlzKTtccn1cci8vIENvbnRlbnQgYXJlYXNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0Q29udGVudEFyZWFXcmFwcGVyKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYVdyYXBwZXIuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWFzKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYXMuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xycmV0dXJuIGluaXRDb250ZW50QXJlYS5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcl0pO1xyfVxyLy8gQ29udGFpbmVyc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJyZXR1cm4gY29udmVydFRvQ29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgdGFyZ2V0XSk7XHJ9XHJpbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccnJldHVybiBpbml0Q29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyXSk7XHJ9XHJpbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xycmV0dXJuIGluaXRDb250YWluZXJDb250ZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZF0pO1xyfVxyLy8gQ29tcG9uZW50c1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccnJldHVybiBjb252ZXJ0VG9Db21wb25lbnQuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZ10pO1xyfVxyaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccnJldHVybiBpbml0Q29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnRdKTtccn1ccmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCkge1xycmV0dXJuIGluaXREeW5hbWljQ29udGVudC5hcHBseSh0aGlzLCBbZHluYW1pY0VsZW1lbnRdKTtccn1ccmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpIHtccnJldHVybiBkZWxldGVDb21wb25lbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyLy8gR2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJnZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudENvbnRlbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJyZXR1cm4gZ2V0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGFpbmVyLCBpc05lc3RlZF0pO1xyfVxyZ2V0Q29udGVudChpbkFycmF5KSB7XHJyZXR1cm4gZ2V0Q29udGVudC5hcHBseSh0aGlzLCBbaW5BcnJheV0pO1xyfVxyLy8gU2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJzZXRDb250ZW50KGNvbnRlbnQsIGNvbnRlbnRBcmVhKSB7XHJyZXR1cm4gc2V0Q29udGVudC5hcHBseSh0aGlzLCBbY29udGVudCwgY29udGVudEFyZWFdKTtccn1cci8vIERlc3Ryb3lcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJkZXN0cm95KCkge1xycmV0dXJuIGRlc3Ryb3kuYXBwbHkodGhpcyk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyYWRkU25pcHBldCh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpIHtccnJldHVybiBhZGRTbmlwcGV0LmFwcGx5KHRoaXMsIFt0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXNdKTtccn1cclxufVxyLy8gS0VkaXRvciBwbHVnaW5zXHJcbiQuZm4ua2VkaXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJsZXQgZWxlbWVudCA9ICQodGhpcyk7XHJsZXQgaW5zdGFuY2UgPSBlbGVtZW50LmRhdGEoJ2tlZGl0b3InKTtccmlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtccmlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVtvcHRpb25zXSAmJiB0eXBlb2YgaW5zdGFuY2Vbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtccnJldHVybiBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJ9XHJ9IGVsc2Uge1xyaWYgKCFpbnN0YW5jZSkge1xyaW5zdGFuY2UgPSBLRWRpdG9yLmluaXQoZWxlbWVudCwgb3B0aW9ucyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBpbnN0YW5jZSk7XHJ9XHJyZXR1cm4gaW5zdGFuY2U7XHJ9XHJcbn07XHJ3aW5kb3cuS0VkaXRvciA9ICQua2VkaXRvciA9ICQuZm4ua2VkaXRvci5jb25zdHJ1Y3RvciA9IEtFZGl0b3I7XHJcbiIsImltcG9ydCBERUZBVUxUUyBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0cyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBjb25maWcpIHtccmxldCBzZWxmID0gdGhpcztccnNlbGYuZWxlbWVudCA9IHRhcmdldDtccnNlbGYub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgY29uZmlnKTtccnNlbGYuaW5pdENvbnRlbnRBcmVhV3JhcHBlcigpO1xyc2VsZi5pbml0VG9wYmFyKCk7XHJzZWxmLmluaXRTaWRlYmFyKCk7XHJzZWxmLmluaXRTbmlwcGV0c01vZGFsKCk7XHJzZWxmLmlkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJLRWRpdG9yLmluc3RhbmNlc1tzZWxmLmlkXSA9IHNlbGY7XHJpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vblJlYWR5ID09PSAnZnVuY3Rpb24nKSB7XHJzZWxmLm9wdGlvbnMub25SZWFkeS5jYWxsKHNlbGYpO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xyc2VsZi5tb2RhbFRhcmdldCA9IG51bGw7XHJzZWxmLm1vZGFsQWN0aW9uID0gbnVsbDtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbCgnJyk7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIC5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xybW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBtb2RhbElkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJsZXQgc25pcHBldHNXcmFwcGVySHRtbCA9ICcnO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb250YWluZXJcIj48L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudFwiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfSBlbHNlIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0c1wiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfVxybGV0IG1vZGFsID0gc2VsZi5tb2RhbCA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1tb2RhbFwiIGlkPVwiJHttb2RhbElkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtaGVhZGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHI8aDQgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLXRpdGxlXCI+PC9oND5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtYm9keVwiPiR7c25pcHBldHNXcmFwcGVySHRtbH08L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWZvb3RlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQga2VkaXRvci1tb2RhbC1jbG9zZVwiPkNsb3NlPC9idXR0b24+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tcHJpbWFyeSBrZWRpdG9yLW1vZGFsLWFkZFwiPkFkZDwvYnV0dG9uPlxyPC9kaXY+XHI8L2Rpdj5ccmApO1xyaWYgKHR5cGVvZiBvcHRpb25zLnNuaXBwZXRzVXJsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLnNuaXBwZXRzVXJsLmxlbmd0aCA+IDApIHtcciQuYWpheCh7XHJ0eXBlOiAnZ2V0JyxccmRhdGFUeXBlOiAnaHRtbCcsXHJ1cmw6IG9wdGlvbnMuc25pcHBldHNVcmwsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcCkge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccnJlc3AgPSBvcHRpb25zLm9uU25pcHBldHNMb2FkZWQuY2FsbChzZWxmLCByZXNwKSB8fCByZXNwO1xyfVxyc2VsZi5yZW5kZXJTbmlwcGV0cyhyZXNwKTtccmlmIChvcHRpb25zLnNuaXBwZXRzRmlsdGVyRW5hYmxlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTlRBSU5FUik7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0gZWxzZSB7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQUxMKTtccn1ccn1ccn0sXHJlcnJvcjogZnVuY3Rpb24gKGpxWEhSKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0Vycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uU25pcHBldHNFcnJvci5jYWxsKHNlbGYsIGpxWEhSKTtccn1ccn1ccn0pO1xyLy8gQ2xvc2UgYnV0dG9uc1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFkZCBidXR0b25ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWFkZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgc2VsZWN0ZWRTbmlwcGV0ID0gbW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZFNuaXBwZXQubGVuZ3RoID09PSAwKSB7XHJyZXR1cm47XHJ9XHJsZXQgY29udGVudEFyZWEgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IHNuaXBwZXRUeXBlID0gc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHNuaXBwZXRDb250ZW50RWxlbWVudCA9IG1vZGFsLmZpbmQoc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtc25pcHBldCcpKTtccmxldCBzbmlwcGV0Q29udGVudCA9IHNuaXBwZXRDb250ZW50RWxlbWVudC5odG1sKCk7XHJsZXQgaXNBZGRpbmdDb250YWluZXIgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudCA9IGZhbHNlO1xybGV0IGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IGZhbHNlO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyaXNBZGRpbmdDb250YWluZXIgPSB0cnVlO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfSBlbHNlIHtccmlmIChzbmlwcGV0VHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccn0gZWxzZSB7XHJzd2l0Y2ggKHNlbGYubW9kYWxTbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJpZiAoc2VsZi5tb2RhbFRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInKSkge1xyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyfSBlbHNlIHtccmlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IHRydWU7XHJ9XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJ9XHJsZXQgbmV3Q29udGFpbmVyO1xybGV0IG5ld0NvbXBvbmVudDtccmlmIChpc0FkZGluZ0NvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb250YWluZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJ9XHJpZiAoaXNBZGRpbmdDb21wb25lbnQpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb21wb25lbnQpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYubW9kYWxUYXJnZXQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7b3B0aW9ucy5jb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudH08L3NlY3Rpb24+XHI8L3NlY3Rpb24+XHJgKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykuZXEoMCkuaHRtbChuZXdDb21wb25lbnQpO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbXBvbmVudCwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFjdGlvbiBjbGljayBmb3Igc25pcHBldFxybW9kYWwub24oJ2NsaWNrJywgJy5rZWRpdG9yLXNuaXBwZXQnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xyaWYgKCFzbmlwcGV0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJzbmlwcGV0LnBhcmVudCgpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyc25pcHBldC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtccn1ccn0pO1xybGV0IGNzc1RyYW5zaXRpb25FbmQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCc7XHJtb2RhbC5vbihjc3NUcmFuc2l0aW9uRW5kLCAoKSA9PiB7XHJpZiAoIW1vZGFsLmhhc0NsYXNzKCdzaG93ZWQnKSkge1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcciQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyfVxyfSk7XHJtb2RhbC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtccn0gZWxzZSB7XHJzZWxmLmVycm9yKCdcInNuaXBwZXRzVXJsXCIgbXVzdCBiZSBub3QgbnVsbCEnKTtccn1cclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvc25pcHBldFR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgc25pcHBldFR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBtb2RhbFRpdGxlID0gJyc7XHJzd2l0Y2ggKHNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT05UQUlORVI6XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250YWluZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJtb2RhbFRpdGxlID0gJ0FkZCBjb21wb25lbnQnO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJtb2RhbC5maW5kKHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50JyA6ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lcicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyfSBlbHNlIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5maW5kKCcua2VkaXRvci1zbmlwcGV0W2RhdGEtdHlwZT1jb250YWluZXJdJykuY3NzKCdkaXNwbGF5Jywgc25pcHBldFR5cGUgPT09IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgPyAnbm9uZScgOiAnYmxvY2snKTtccm1vZGFsVGl0bGUgPSAnQWRkIGNvbnRlbnQnO1xyfVxybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtdGl0bGUnKS5odG1sKG1vZGFsVGl0bGUpO1xyc2VsZi5tb2RhbFRhcmdldCA9IHRhcmdldDtccnNlbGYubW9kYWxTbmlwcGV0VHlwZSA9IHNuaXBwZXRUeXBlO1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHIkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdvcGVuZWQtbW9kYWwnKTtccnNldFRpbWVvdXQoKCkgPT4ge1xybW9kYWwuYWRkQ2xhc3MoJ3Nob3dlZCcpO1xyfSwgMCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50LCBjb250ZW50QXJlYSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLndyYXBwZXI7XHJpZiAoIWNvbnRlbnRBcmVhKSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyfSBlbHNlIHtccmlmICghY29udGVudEFyZWEuanF1ZXJ5KSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChjb250ZW50QXJlYSk7XHJ9XHJ9XHJpZiAoY29udGVudEFyZWEubGVuZ3RoID09PSAwKSB7XHJzZWxmLmVycm9yKCdDb250ZW50IGFyZWEgZG9lcyBub3QgZXhpc3QhJyk7XHJ9XHJjb250ZW50QXJlYS5odG1sKGNvbnRlbnQpO1xyc2VsZi5pbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIHRydWUpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9YCkuY2hpbGRyZW4oYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkV9YCk7XHJpZiAoYWN0aXZlRm9ybS5sZW5ndGggPiAwKSB7XHJpZiAoYWN0aXZlRm9ybS5pcyhgLiR7Q0xBU1NfTkFNRVMuU0VUVElOR19DT05UQUlORVJ9YCkpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24uY2FsbChzZWxmLCBhY3RpdmVGb3JtLCBzZWxmKTtccn1ccn0gZWxzZSB7XHJsZXQgYWN0aXZlVHlwZSA9IGFjdGl2ZUZvcm0uYXR0cignZGF0YS10eXBlJyk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1thY3RpdmVUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5oaWRlU2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyfVxyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KG51bGwpO1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKG51bGwpO1xyc2lkZWJhci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5TSURFQkFSX09QRU5FRCk7XHJcbn0iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhcklkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhciA9ICQoYFxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUn1cIiBpZD1cIiR7c2lkZWJhcklkfVwiPlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9IRUFERVJ9XCI+XHI8c3BhbiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9USVRMRX1cIj48L3NwYW4+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5TSURFQkFSX0NMT1NFUn1cIj4mdGltZXM7PC9hPlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9XCI+PC9kaXY+XHI8L2Rpdj5ccmApO1xyc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0NMT1NFUn1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn0pO1xybGV0IHNpZGViYXJCb2R5ID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9YCk7XHJzaWRlYmFyQm9keS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xycmV0dXJuIGZhbHNlO1xyfSk7XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccmxldCBmb3JtID0gJChgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNfSAke0NMQVNTX05BTUVTLlNFVFRJTkdfQ09OVEFJTkVSfVwiPjwvZGl2PmApO1xyc2lkZWJhckJvZHkuYXBwZW5kKGZvcm0pO1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uLmNhbGwoc2VsZiwgZm9ybSwgc2VsZik7XHJ9IGVsc2Uge1xyc2VsZi5lcnJvcignXCJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uXCIgaXMgbm90IGZ1bmN0aW9uIScpO1xyfVxyfVxyc2lkZWJhci5hcHBlbmRUbyhzZWxmLndyYXBwZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBzaWRlYmFyVGl0bGUgPSBzaWRlYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlNJREVCQVJfVElUTEV9YCk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlNJREVCQVJfQk9EWX1gKTtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhckJvZHkuY2hpbGRyZW4oYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkV9YCk7XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyaWYgKHRhcmdldC5pcyhgLiR7Q0xBU1NfTkFNRVMuQ09NUE9ORU5UfWApKSB7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKHRhcmdldCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccnNpZGViYXJUaXRsZS5odG1sKGNvbXBvbmVudERhdGEuc2V0dGluZ1RpdGxlKTtccmxldCBzZXR0aW5nRm9ybUNsYXNzID0gYCR7Q0xBU1NfTkFNRVMuU0VUVElOR30tJHtjb21wb25lbnRUeXBlfWA7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyQm9keS5maW5kKGAuJHtzZXR0aW5nRm9ybUNsYXNzfWApO1xyaWYgKHNldHRpbmdGb3JtLmxlbmd0aCA9PT0gMCkge1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJzZXR0aW5nRm9ybSA9ICQoYFxyPGRpdlxyZGF0YS10eXBlPVwiJHtjb21wb25lbnRUeXBlfVwiXHJjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNfSAke3NldHRpbmdGb3JtQ2xhc3N9IGNsZWFyZml4ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRX1cIlxyPlxyPC9kaXY+XHJgKTtccmxldCBsb2FkaW5nVGV4dCA9ICQoJzxzcGFuIC8+JykuaHRtbCgnTG9hZGluZy4uLicpO1xyc2lkZWJhckJvZHkuYXBwZW5kKHNldHRpbmdGb3JtKTtccnNldHRpbmdGb3JtLmFwcGVuZChsb2FkaW5nVGV4dCk7XHJsZXQgaW5pdEZ1bmN0aW9uID0gY29tcG9uZW50RGF0YS5pbml0U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgc2VsZik7XHIkLndoZW4oaW5pdEZ1bmN0aW9uKS5kb25lKGZ1bmN0aW9uICgpIHtccnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xybG9hZGluZ1RleHQucmVtb3ZlKCk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyfSwgMTAwKTtccn0pO1xyfVxyfSBlbHNlIHtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccn0gZWxzZSB7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNpZGViYXJUaXRsZS5odG1sKCdDb250YWluZXIgU2V0dGluZ3MnKTtccmxldCBzZXR0aW5nRm9ybSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0VUVElOR19DT05UQUlORVJ9YCk7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uLmNhbGwoc2VsZiwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccnNpZGViYXIuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuU0lERUJBUl9PUEVORUQpO1xyXG59O1xyXG4iLCJpbXBvcnQgcmVuZGVyU25pcHBldCBmcm9tIFwiLi9yZW5kZXJTbmlwcGV0XCI7XHJcbmltcG9ydCByZW5kZXJTbmlwcGV0RmlsdGVyIGZyb20gXCIuL3JlbmRlclNuaXBwZXRGaWx0ZXJcIjtcclxuaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGV4dHJhRGF0YSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdID0gcmVuZGVyU25pcHBldC5jYWxsKHNlbGYsIHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoWy4uLnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLCAuLi5zZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllc10pO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lcicpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnQnKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKTtccn1ccn0gZWxzZSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbClccn1ccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtYm9keScpLmFwcGVuZChzbmlwcGV0Q29udGVudEh0bWwpO1xybGV0IGZpbHRlclR5cGU7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmZpbHRlclR5cGUgPSB0eXBlID09PSAnY29udGFpbmVyJyA/IFNOSVBQRVRfVFlQRS5DT05UQUlORVIgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UO1xyfSBlbHNlIHtccmZpbHRlclR5cGUgPSBTTklQUEVUX1RZUEUuQUxMO1xyfVxyfVxybGV0IFtjYXRlZ29yaWVzT3B0aW9ucywgc25pcHBldHNXcmFwcGVyXSA9IHJlbmRlclNuaXBwZXRGaWx0ZXIuY2FsbCh0aGlzLCBmaWx0ZXJUeXBlKTtccnNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1maWx0ZXInKS5odG1sKGNhdGVnb3JpZXNPcHRpb25zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXRGaWx0ZXIgZnJvbSBcIi4vcmVuZGVyU25pcHBldEZpbHRlclwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IFtjYXRlZ29yaWVzT3B0aW9ucywgc25pcHBldHNXcmFwcGVyXSA9IHJlbmRlclNuaXBwZXRGaWx0ZXIuY2FsbCh0aGlzLCB0eXBlKTtccnNuaXBwZXRzV3JhcHBlci5wcmVwZW5kKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtZmlsdGVyLXdyYXBwZXJcIj5ccjxzZWxlY3QgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtZmlsdGVyXCI+XHIke2NhdGVnb3JpZXNPcHRpb25zfVxyPC9zZWxlY3Q+XHI8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1zZWFyY2hcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiVHlwZSB0byBzZWFyY2guLi5cIiAvPlxyPC9kaXY+XHJgKTtccmxldCB0eHRTZWFyY2ggPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtc2VhcmNoJyk7XHJsZXQgY2JiRmlsdGVyID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWZpbHRlcicpO1xybGV0IGRvRmlsdGVyID0gZnVuY3Rpb24gKCkge1xybGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSAoY2JiRmlsdGVyLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xybGV0IHNlYXJjaFRleHQgPSAodHh0U2VhcmNoLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xybGV0IHNuaXBwZXRzID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuY2hpbGRyZW4oJy5rZWRpdG9yLXNuaXBwZXQnKTtccnNuaXBwZXRzLmZpbHRlcignLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRDYXRlZ29yeSB8fCBzZWFyY2hUZXh0KSB7XHJzbmlwcGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBkYXRhQ2F0ZWdvcmllc1N0cmluZyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKS50b0xvd2VyQ2FzZSgpO1xybGV0IGRhdGFDYXRlZ29yaWVzID0gZGF0YUNhdGVnb3JpZXNTdHJpbmcuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xybGV0IGVycm9yID0gMDtccmlmIChzZWxlY3RlZENhdGVnb3J5KSB7XHJpZiAoJC5pbkFycmF5KHNlbGVjdGVkQ2F0ZWdvcnksIGRhdGFDYXRlZ29yaWVzKSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJpZiAoc2VhcmNoVGV4dCkge1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCd0aXRsZScpLnRvTG93ZXJDYXNlKCk7XHJpZiAodGl0bGUuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEgJiYgZGF0YUNhdGVnb3JpZXNTdHJpbmcuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJzbmlwcGV0W2Vycm9yID09PSAwID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKCdub3QtbWF0Y2hlZCcpO1xyfSk7XHJ9IGVsc2Uge1xyc25pcHBldHMucmVtb3ZlQ2xhc3MoJ25vdC1tYXRjaGVkJyk7XHJ9XHJ9O1xyY2JiRmlsdGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJkb0ZpbHRlcigpO1xyfSk7XHJsZXQgdGltZXI7XHJ0eHRTZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XHJjbGVhclRpbWVvdXQodGltZXIpO1xydGltZXIgPSBzZXRUaW1lb3V0KGRvRmlsdGVyLCAyMDApO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0SWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccmxldCBzbmlwcGV0UHJldmlld0h0bWwgPSBgXHI8c2VjdGlvblxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldFwiXHJkYXRhLXNuaXBwZXQ9XCIjJHtzbmlwcGV0SWR9XCJccmRhdGEtdHlwZT1cIiR7dHlwZX1cIlxydGl0bGU9XCIke3RpdGxlfVwiXHJkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcz1cIiR7Y2F0ZWdvcmllc31cIlxyPlxyPHNwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlld1VybH0nKVwiPjwvc3Bhbj48L3NwYW4+XHI8L3NlY3Rpb24+XHJgO1xybGV0IHNuaXBwZXRDb250ZW50SHRtbCA9IGA8c2NyaXB0IGlkPVwiJHtzbmlwcGV0SWR9XCIgdHlwZT1cInRleHQvaHRtbFwiICR7ZXh0cmFEYXRhLmpvaW4oJyAnKX0+JHtjb250ZW50fTwvc2NyaXB0PmA7XHJjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zcGxpdChvcHRpb25zLnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcik7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMuY29uY2F0KGNhdGVnb3JpZXMpO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9XHJyZXR1cm4gW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IGNhdGVnb3JpZXM7XHJsZXQgc25pcHBldHNXcmFwcGVyU2VsZWN0b3I7XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkFMTDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT05UQUlORVI6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmxldCBjYXRlZ29yaWVzT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkFsbDwvb3B0aW9uPic7XHIkLmVhY2goY2F0ZWdvcmllcywgZnVuY3Rpb24gKGksIGNhdGVnb3J5KSB7XHJjYXRlZ29yaWVzT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7Y2F0ZWdvcnl9XCI+JHtjYXRlZ29yeX08L29wdGlvbj5gO1xyfSk7XHJyZXR1cm4gW1xyY2F0ZWdvcmllc09wdGlvbnMsXHJtb2RhbC5maW5kKHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yKVxyXTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSAnLi9yZW5kZXJTbmlwcGV0JztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0c0NvbnRhaW5lckh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbXBvbmVudEh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbnRlbnRIdG1sID0gJyc7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gW107XHIkKHJlc3ApLmZpbHRlcignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc25pcHBldCA9ICQodGhpcyk7XHJsZXQgY29udGVudCA9IHNuaXBwZXQuaHRtbCgpLnRyaW0oKTtccmxldCBwcmV2aWV3VXJsID0gc25pcHBldC5hdHRyKCdkYXRhLXByZXZpZXcnKTtccmxldCB0eXBlID0gc25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCB0aXRsZSA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLXRpdGxlJyk7XHJsZXQgY2F0ZWdvcmllcyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKSB8fCAnJztccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldCwgWydkYXRhLXByZXZpZXcnLCAnZGF0YS10eXBlJywgJ2RhdGEta2VkaXRvci10aXRsZScsICdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcyddLCB0cnVlKTtccmxldCBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl0gPSByZW5kZXJTbmlwcGV0LmNhbGwoc2VsZiwgdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc25pcHBldHNDb250YWluZXJIdG1sICs9IHNuaXBwZXRQcmV2aWV3SHRtbDtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNuaXBwZXRzQ29tcG9uZW50SHRtbCArPSBzbmlwcGV0UHJldmlld0h0bWw7XHJ9XHJzbmlwcGV0c0NvbnRlbnRIdG1sICs9IHNuaXBwZXRDb250ZW50SHRtbDtccn0pO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoWy4uLnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLCAuLi5zZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllc10pO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5odG1sKHNuaXBwZXRzQ29udGFpbmVySHRtbCk7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudCcpLmh0bWwoc25pcHBldHNDb21wb25lbnRIdG1sKTtccn0gZWxzZSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwgKyBzbmlwcGV0c0NvbXBvbmVudEh0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldHNDb250ZW50SHRtbCk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgdG9wYmFyQ2VudGVyID0gc2VsZi50b3BiYXJDZW50ZXI7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBidG5Nb2JpbGUgPSAkKGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHRpdGxlPVwiVmlldyBvbiBtb2JpbGVcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLW1vYmlsZVwiPjwvaT48L2E+YCk7XHJidG5Nb2JpbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnRvcGJhckNlbnRlci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1gKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJzZWxmLmlmcmFtZVdyYXBwZXIuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGhNb2JpbGUpO1xyYnRuTW9iaWxlLmFkZENsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccn0pO1xybGV0IGJ0blRhYmxldCA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdGl0bGU9XCJWaWV3IG9uIHRhYmxldFwiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OfVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtdGFibGV0XCI+PC9pPjwvYT5gKTtccmJ0blRhYmxldC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aFRhYmxldCk7XHJidG5UYWJsZXQuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyfSk7XHJsZXQgYnRuRGVza3RvcCA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdGl0bGU9XCJWaWV3IG9uIGRlc2t0b3BcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWRlc2t0b3BcIj48L2k+PC9hPmApO1xyYnRuRGVza3RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgJycpO1xyYnRuRGVza3RvcC5hZGRDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJ9KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuTW9iaWxlKTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuVGFibGV0KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuRGVza3RvcCk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgdG9wYmFySWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyc2VsZi50b3BiYXIgPSAkKGBccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUn1cIiBpZD1cIiR7dG9wYmFySWR9XCI+XHI8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfTEVGVH1cIj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9USVRMRX1cIiB0aXRsZT1cIiR7b3B0aW9ucy50aXRsZX1cIj4ke29wdGlvbnMudGl0bGV9PC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9DRU5URVJ9XCI+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1cIj5ccjwvZGl2PlxyPC9kaXY+XHJgKTtccnNlbGYudG9wYmFyTGVmdCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9MRUZUfWApO1xyc2VsZi50b3BiYXJDZW50ZXIgPSBzZWxmLnRvcGJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQ0VOVEVSfWApO1xyc2VsZi50b3BiYXJSaWdodCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1gKTtccnNlbGYudG9wYmFyLmFwcGVuZFRvKHNlbGYud3JhcHBlcik7XHJzZWxmLmluaXREZXZpY2VTd2l0Y2hlcigpO1xyc2VsZi5pbml0VG9wYmFyTW9kZXMoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNhdGVnb3JpZXMpIHtccmxldCBuZXdBcnJheSA9IFtdO1xyZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJsZXQgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2ldIHx8ICcnO1xyaWYgKGNhdGVnb3J5ICE9PSAnJyAmJiAkLmluQXJyYXkoY2F0ZWdvcnksIG5ld0FycmF5KSA9PT0gLTEpIHtccm5ld0FycmF5LnB1c2goY2F0ZWdvcnkpO1xyfVxyfVxycmV0dXJuIG5ld0FycmF5LnNvcnQoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJsZXQgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTg3NjU0MzIxMCk7XHJyZXR1cm4gYGtlZGl0b3ItdWktJHt0aW1lc3RhbXB9JHtyYW5kb219YDtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvdG9vbGJhclR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzZXR0aW5nQnRuID0gJyc7XHJpZiAoIW9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybGV0IHRvb2xiYXJDbGFzcyA9ICcnO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXInO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXInO1xycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSAke3Rvb2xiYXJDbGFzc31cIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRlbnRcIiB0aXRsZT1cIkFkZCBjb250ZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbnRlbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBjb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyIGtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhciBrZWRpdG9yLWJ0bi1ncm91cFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgc3ViLWNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRTdWJDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09NUE9ORU5UOlxyaWYgKGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29tcG9uZW50VGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29tcG9uZW50XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbXBvbmVudFRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdG9yKSB7XHJsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xybGV0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XHJpZiAodGFyZ2V0LmlzKHNlbGVjdG9yKSkge1xycmV0dXJuIHRhcmdldDtccn0gZWxzZSBpZiAoY2xvc2VzdC5sZW5ndGggPiAwKSB7XHJyZXR1cm4gY2xvc2VzdDtccn0gZWxzZSB7XHJyZXR1cm4gbnVsbDtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheSkge1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gaXNBcnJheSA/IFtdIDoge307XHJpZiAoIWlnbm9yZUF0dHJpYnV0ZXMpIHtccmlnbm9yZUF0dHJpYnV0ZXMgPSBbXTtccn1cciQuZWFjaCh0YXJnZXQuZ2V0KDApLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJpZiAoYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDAgJiYgJC5pbkFycmF5KGF0dHIubmFtZSwgaWdub3JlQXR0cmlidXRlcykgPT09IC0xKSB7XHJpZiAoaXNBcnJheSkge1xyZGF0YUF0dHJpYnV0ZXMucHVzaChgJHthdHRyLm5hbWV9PVwiJHthdHRyLnZhbHVlfVwiYCk7XHJ9IGVsc2Uge1xyZGF0YUF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XHJ9XHJ9XHJ9KTtccnJldHVybiBkYXRhQXR0cmlidXRlcztcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=