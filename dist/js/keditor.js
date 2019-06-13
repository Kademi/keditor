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
/* harmony import */ var _topbar_initTopbarRightActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topbar/initTopbarRightActions */ "./src/keditor/topbar/initTopbarRightActions.js");
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
    key: "initTopbarRightActions",
    value: function initTopbarRightActions() {
      return _topbar_initTopbarRightActions__WEBPACK_IMPORTED_MODULE_10__["default"].apply(this);
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
    } // Snippet
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
  var sidebar = self.sidebar; // alert(self.sidebar);

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
  var btnSave = $("<a href=\"javascript:void(0);\" title=\"Save\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-save\"></i></a>"));
  btnSave.on('click', function (e) {
    e.preventDefault();
    var content = self.getContent(true);
    typeof options.onSave === 'function' && options.onSave.call(self, content);
  });
  topbarRight.append(btnSave);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvZ2V0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pZnJhbWUvaW5pdElmcmFtZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdG9wYmFyL2luaXREZXZpY2VTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhclJpZ2h0QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZ2VuZXJhdGVJZC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZVRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZ2V0Q2xpY2tlZEVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZ2V0RGF0YUF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLmxlc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiY29udGVudEFyZWEiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJpc0V4aXN0aW5nIiwiaXMiLCJzZWxmIiwiaXNTZWN0aW9uIiwiY29tcG9uZW50IiwiYWRkQ2xhc3MiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwicGFyZW50IiwiaW5pdENvbXBvbmVudCIsImNvbXBvbmVudFR5cGUiLCJnZXRDb21wb25lbnRUeXBlIiwiY29tcG9uZW50RGF0YSIsIktFZGl0b3IiLCJjb21wb25lbnRzIiwiZGVzdHJveSIsImNhbGwiLCJyZW1vdmUiLCJjbG9uZWRDb21wb25lbnQiLCJjbG9uZSIsImRhdGFBdHRyaWJ1dGVzIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJjb250ZW50IiwiaWZyYW1lV3JhcHBlciIsImZpbmQiLCJsZW5ndGgiLCJpZnJhbWUiLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwidW53cmFwIiwicmVtb3ZlQ2xhc3MiLCJnZXRDb250ZW50IiwiY29tcG9uZW50Q29udGVudCIsImh0bWwiLCJlYWNoIiwiJCIsImpvaW4iLCJvcHRpb25zIiwiYXR0ciIsInJlcGxhY2UiLCJkZWZhdWx0Q29tcG9uZW50VHlwZSIsImVycm9yIiwiZ2VuZXJhdGVJZCIsIm9uQmVmb3JlSW5pdENvbXBvbmVudCIsImFwcGVuZCIsImdlbmVyYXRlVG9vbGJhciIsIlRPT0xCQVJfVFlQRSIsIkNPTVBPTkVOVCIsInNldHRpbmdFbmFibGVkIiwiZHluYW1pY0VsZW1lbnQiLCJpbml0RHluYW1pY0NvbnRlbnQiLCJpbml0Iiwib25Jbml0Q29tcG9uZW50IiwiY2xvc2VzdCIsIm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkIiwiZHluYW1pY0hyZWYiLCJkYXRhIiwicGFyYW0iLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwianFYSFIiLCJvbkR5bmFtaWNDb250ZW50TG9hZGVkIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwib25EeW5hbWljQ29udGVudEVycm9yIiwiQ0xBU1NfTkFNRVMiLCJVSSIsIldSQVBQRVIiLCJISURERU5fRUxFTUVOVCIsIlNJREVCQVIiLCJTSURFQkFSX0hFQURFUiIsIlNJREVCQVJfQk9EWSIsIlNJREVCQVJfVElUTEUiLCJTSURFQkFSX0NMT1NFUiIsIlNJREVCQVJfT1BFTkVEIiwiVE9QQkFSIiwiVE9QQkFSX0xFRlQiLCJUT1BCQVJfUklHSFQiLCJUT1BCQVJfQ0VOVEVSIiwiVE9QQkFSX0JVVFRPTiIsIlRPUEJBUl9CVVRUT05fQUNUSVZFIiwiVE9QQkFSX1RJVExFIiwiU0VUVElORyIsIlNFVFRJTkdfQ09OVEFJTkVSIiwiU0VUVElOR19GT1JNIiwiU0VUVElOR19GT1JNX0FDVElWRSIsIkNPTlRFTlRfQVJFQVNfV1JBUFBFUiIsIkNPTlRFTlRfQVJFQVMiLCJDT05URU5UX0FSRUEiLCJJRlJBTUUiLCJJRlJBTUVfV1JBUFBFUiIsIklGUkFNRV9GQUtFUiIsIklGUkFNRV9DT1ZFUl9XUkFQUEVSIiwiSUZSQU1FX0NPVkVSIiwiSUZSQU1FX0NPVkVSX0hJRERFTiIsInRpdGxlIiwibmVzdGVkQ29udGFpbmVyRW5hYmxlZCIsImV4cGxpY2l0U25pcHBldEVuYWJsZWQiLCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudCIsImJ0bkFkZENvbnRlbnRUZXh0IiwiYnRuQWRkQ29udGFpbmVyVGV4dCIsImJ0bkFkZFN1YkNvbnRhaW5lclRleHQiLCJidG5BZGRDb21wb25lbnRUZXh0IiwiYnRuTW92ZUNvbnRhaW5lclRleHQiLCJidG5Nb3ZlQ29tcG9uZW50VGV4dCIsImJ0blNldHRpbmdDb250YWluZXJUZXh0IiwiYnRuU2V0dGluZ0NvbXBvbmVudFRleHQiLCJidG5EdXBsaWNhdGVDb250YWluZXJUZXh0IiwiYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dCIsImJ0bkRlbGV0ZUNvbnRhaW5lclRleHQiLCJidG5EZWxldGVDb21wb25lbnRUZXh0IiwiY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQiLCJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCIsIndpZHRoTW9iaWxlIiwid2lkdGhUYWJsZXQiLCJzbmlwcGV0c1VybCIsInNuaXBwZXRzRmlsdGVyRW5hYmxlZCIsInNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvciIsImNvbnRlbnRTdHlsZXMiLCJjb250ZW50QXJlYXNTZWxlY3RvciIsImNvbnRlbnRBcmVhc1dyYXBwZXIiLCJjb250YWluZXJTZXR0aW5nRW5hYmxlZCIsImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24iLCJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiIsIm9uUmVhZHkiLCJvblNhdmUiLCJvblNuaXBwZXRzTG9hZGVkIiwicmVzcCIsIm9uU25pcHBldHNFcnJvciIsIm9uSW5pdElmcmFtZSIsImlmcmFtZUhlYWQiLCJpZnJhbWVCb2R5Iiwib25Db250ZW50Q2hhbmdlZCIsImV2ZW50Iiwib25CZWZvcmVJbml0Q29udGVudEFyZWEiLCJvbkluaXRDb250ZW50QXJlYSIsIm9uQmVmb3JlSW5pdENvbnRhaW5lciIsIm9uSW5pdENvbnRhaW5lciIsIm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCIsInNlbGVjdGVkQ29udGFpbmVyIiwib25Db250YWluZXJEZWxldGVkIiwib25Db250YWluZXJDaGFuZ2VkIiwiY2hhbmdlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRHVwbGljYXRlZCIsIm9yaWdpbmFsQ29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwib25Db250YWluZXJTZWxlY3RlZCIsIm9uQ29udGFpbmVyU25pcHBldEFkZGVkIiwic2VsZWN0ZWRTbmlwcGV0Iiwib25Db21wb25lbnRSZWFkeSIsIm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCIsInNlbGVjdGVkQ29tcG9uZW50Iiwib25Db21wb25lbnREZWxldGVkIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2hhbmdlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RHVwbGljYXRlZCIsIm9yaWdpbmFsQ29tcG9uZW50IiwibmV3Q29tcG9uZW50Iiwib25Db21wb25lbnRTZWxlY3RlZCIsIm9uQ29tcG9uZW50U25pcHBldEFkZGVkIiwiQUxMIiwiQ09OVEFJTkVSIiwiU1VCX0NPTlRBSU5FUiIsIkNPTlRBSU5FUl9DT05URU5UIiwiU1VCX0NPTlRBSU5FUl9DT05URU5UIiwiaW5pdENvbnRhaW5lciIsImlzTmVzdGVkIiwiY29udGFpbmVySW5uZXIiLCJub3QiLCJjb250YWluZXJDb250ZW50IiwicmVtb3ZlQXR0ciIsImNvbnRhaW5lckNvbnRlbnRJbm5lciIsImNoaWxkIiwiZ2V0Q29tcG9uZW50Q29udGVudCIsImdldENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50cyIsInBhcmVudHMiLCJpbml0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRUb29sYmFyIiwiYXBwZW5kVG8iLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5Nb2RhbCIsIlNOSVBQRVRfVFlQRSIsInNvcnRhYmxlIiwiaGFuZGxlIiwiaGVscGVyIiwiaXRlbXMiLCJjb25uZWN0V2l0aCIsInRvbGVyYW5jZSIsInNvcnQiLCJyZWNlaXZlIiwidWkiLCJpdGVtIiwic3RhcnQiLCJzdG9wIiwiY29udmVydFRvQ29udGFpbmVyIiwiY29udmVydFRvQ29tcG9uZW50IiwiZG9udEluaXRUb29sYmFyIiwiY29udGVudEFyZWFJbm5lciIsImNvbnRlbnRBcmVhVG9vbGJhciIsImF4aXMiLCJjbG9zZVNpZGViYXIiLCJjb250ZW50RGF0YSIsImVsZW1lbnQiLCJ3cmFwcGVyIiwiYWZ0ZXIiLCJpZnJhbWVEb2MiLCJjb250ZW50cyIsImdldCIsIm9wZW4iLCJjbG9zZSIsImlmcmFtZVdpbmRvdyIsImNvbnRlbnRXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInN0eWxlcyIsInN0eWxlIiwiaWRTdHIiLCJocmVmIiwiaXNBcnJheSIsImkiLCJpZCIsInZhbCIsImluaXRDb250ZW50QXJlYXMiLCJpbml0SWZyYW1lQWN0aW9ucyIsImNvbnRlbnRBcmVhcyIsIm9yaWdpbmFsQ29udGVudCIsImVtcHR5IiwiaW5pdENvbnRlbnRBcmVhIiwiaW5zdGFuY2VzIiwiaW5BcnJheSIsInJlc3VsdCIsInB1c2giLCJzaWRlYmFyIiwiZ2V0Q2xpY2tlZEVsZW1lbnQiLCJtb2RhbCIsImJ0biIsInNldHRpbmdDb250YWluZXIiLCJvcGVuU2lkZWJhciIsImNvbmZpcm0iLCJzZXR0aW5nQ29tcG9uZW50Iiwic2V0dGluZ0NvbXBvbmVudFBhcmVudCIsImRlbGV0ZUNvbXBvbmVudCIsImNvdmVyIiwicHJlcGVuZCIsImZuIiwiY29uc29sZSIsImxvZyIsImtlZGl0b3IiLCJkZWJ1ZyIsImFyZ3MiLCJhcHBseSIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbmZpZyIsImlzQ29tcG9uZW50Q29uZmlndXJhYmxlIiwiY2F0ZWdvcmllcyIsImJlYXV0aWZ5Q2F0ZWdvcmllcyIsImlnbm9yZUF0dHJpYnV0ZXMiLCJzZWxlY3RvciIsImluaXRJZnJhbWVDb3ZlciIsImluaXRUb3BiYXIiLCJpbml0RGV2aWNlU3dpdGNoZXIiLCJpbml0VG9wYmFyUmlnaHRBY3Rpb25zIiwiaW5pdFNpZGViYXIiLCJpbml0U25pcHBldHNNb2RhbCIsInJlbmRlclNuaXBwZXRzIiwiaW5pdFNuaXBwZXRzRmlsdGVyIiwic25pcHBldFR5cGUiLCJjbG9zZU1vZGFsIiwiaW5pdENvbnRlbnRBcmVhV3JhcHBlciIsInNldENvbnRlbnQiLCJwcmV2aWV3VXJsIiwiYWRkU25pcHBldCIsIkRFRkFVTFRTIiwiYmxhbmsiLCJpbnN0YW5jZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJ3aW5kb3ciLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsIm1vZGFsVGFyZ2V0IiwibW9kYWxBY3Rpb24iLCJtb2RhbElkIiwic25pcHBldHNXcmFwcGVySHRtbCIsInNuaXBwZXRDb250ZW50RWxlbWVudCIsInNuaXBwZXRDb250ZW50IiwiaXNBZGRpbmdDb250YWluZXIiLCJpc0FkZGluZ0NvbXBvbmVudCIsImlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciIsIm1vZGFsU25pcHBldFR5cGUiLCJib2R5IiwiZXEiLCJzbmlwcGV0IiwiY3NzVHJhbnNpdGlvbkVuZCIsImNzcyIsImRvY3VtZW50IiwibW9kYWxUaXRsZSIsInNldFRpbWVvdXQiLCJqcXVlcnkiLCJhY3RpdmVGb3JtIiwiYWN0aXZlVHlwZSIsImhpZGVTZXR0aW5nRm9ybSIsInNldFNldHRpbmdDb21wb25lbnQiLCJzZXRTZXR0aW5nQ29udGFpbmVyIiwic2lkZWJhcklkIiwic2lkZWJhckJvZHkiLCJmb3JtIiwic2lkZWJhclRpdGxlIiwic2V0dGluZ1RpdGxlIiwic2V0dGluZ0Zvcm1DbGFzcyIsInNldHRpbmdGb3JtIiwiaW5pdFNldHRpbmdGb3JtIiwibG9hZGluZ1RleHQiLCJpbml0RnVuY3Rpb24iLCJ3aGVuIiwiZG9uZSIsInNob3dTZXR0aW5nRm9ybSIsImV4dHJhRGF0YSIsInJlbmRlclNuaXBwZXQiLCJzbmlwcGV0UHJldmlld0h0bWwiLCJzbmlwcGV0Q29udGVudEh0bWwiLCJzbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMiLCJzbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMiLCJzbmlwcGV0c0NhdGVnb3JpZXMiLCJpbmRleE9mIiwiZmlsdGVyVHlwZSIsInJlbmRlclNuaXBwZXRGaWx0ZXIiLCJjYXRlZ29yaWVzT3B0aW9ucyIsInNuaXBwZXRzV3JhcHBlciIsInRyaWdnZXIiLCJ0eHRTZWFyY2giLCJjYmJGaWx0ZXIiLCJkb0ZpbHRlciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFRleHQiLCJzbmlwcGV0cyIsImZpbHRlciIsImRhdGFDYXRlZ29yaWVzU3RyaW5nIiwiZGF0YUNhdGVnb3JpZXMiLCJzcGxpdCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic25pcHBldElkIiwiY29uY2F0Iiwic25pcHBldHNXcmFwcGVyU2VsZWN0b3IiLCJjYXRlZ29yeSIsInNuaXBwZXRzQ29udGFpbmVySHRtbCIsInNuaXBwZXRzQ29tcG9uZW50SHRtbCIsInNuaXBwZXRzQ29udGVudEh0bWwiLCJ0cmltIiwidG9wYmFyQ2VudGVyIiwiYnRuTW9iaWxlIiwiYnRuVGFibGV0IiwiYnRuRGVza3RvcCIsInRvcGJhcklkIiwidG9wYmFyIiwidG9wYmFyTGVmdCIsInRvcGJhclJpZ2h0IiwiYnRuU2F2ZSIsIm5ld0FycmF5IiwidGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJyYW5kb20iLCJNYXRoIiwicm91bmQiLCJzZXR0aW5nQnRuIiwidG9vbGJhckNsYXNzIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBZSx5RUFBVUEsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0NDLE1BQWxDLEVBQTBDQyxVQUExQyxFQUFzRDtBQUNyRSxNQUFJRCxNQUFNLENBQUNFLEVBQVAsQ0FBVSxvQ0FBVixDQUFKLEVBQXFEO0FBQ3JEO0FBQ0M7O0FBQ0QsTUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxNQUFJQyxTQUFTLEdBQUdKLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVLFNBQVYsQ0FBaEI7QUFDQSxNQUFJRyxTQUFKOztBQUNBLE1BQUlELFNBQUosRUFBZTtBQUNmSixVQUFNLENBQUNNLFFB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aXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9rZWRpdG9yL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZykge1xyaWYgKHRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhcicpKSB7XHJyZXR1cm47XHJ9XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgaXNTZWN0aW9uID0gdGFyZ2V0LmlzKCdzZWN0aW9uJyk7XHJsZXQgY29tcG9uZW50O1xyaWYgKGlzU2VjdGlvbikge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50Jyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj4nKTtccmNvbXBvbmVudCA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj48L3NlY3Rpb24+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyfVxyaWYgKGlzRXhpc3RpbmcpIHtccmNvbXBvbmVudC5hZGRDbGFzcygnZXhpc3RpbmctY29tcG9uZW50Jyk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuZGVzdHJveS5jYWxsKGNvbXBvbmVudERhdGEsIGNvbXBvbmVudCwgc2VsZik7XHJ9XHJjb21wb25lbnQucmVtb3ZlKCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjbG9uZWRDb21wb25lbnQgPSBjb21wb25lbnQuY2xvbmUoKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNsb25lZENvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY2xvbmVkQ29tcG9uZW50LCBudWxsLCB0cnVlKTtccmxldCBjb250ZW50O1xyLy8gSGFuZGxlIGlmcmFtZS13cmFwcGVyXHJsZXQgaWZyYW1lV3JhcHBlciA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyaWYgKGlmcmFtZVdyYXBwZXIubGVuZ3RoID4gMCkge1xyaWZyYW1lV3JhcHBlci5maW5kKCcua2VkaXRvci1pZnJhbWUtY292ZXInKS5yZW1vdmUoKTtccmxldCBpZnJhbWUgPSBpZnJhbWVXcmFwcGVyLmNoaWxkcmVuKCdpZnJhbWUnKTtccmlmIChpZnJhbWVXcmFwcGVyLmhhc0NsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyLWZha2UnKSkge1xyaWZyYW1lLnVud3JhcCgpO1xyfSBlbHNlIHtccmlmcmFtZVdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccn1ccn1ccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5nZXRDb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJjb250ZW50ID0gY29tcG9uZW50RGF0YS5nZXRDb250ZW50LmNhbGwoY29tcG9uZW50RGF0YSwgY2xvbmVkQ29tcG9uZW50LCBzZWxmKTtccn0gZWxzZSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNsb25lZENvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbnRlbnQgPSBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn1ccmNsb25lZENvbXBvbmVudC5odG1sKGNvbnRlbnQpLmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcciQodGhpcykuaHRtbCgnJyk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24gJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PiR7Y2xvbmVkQ29tcG9uZW50Lmh0bWwoKX08L3NlY3Rpb24+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50VHlwZSA9IChjb21wb25lbnQuYXR0cignZGF0YS10eXBlJykgfHwgJycpLnJlcGxhY2UoJ2NvbXBvbmVudC0nLCAnJyk7XHJpZiAoY29tcG9uZW50VHlwZSAmJiAoY29tcG9uZW50VHlwZSBpbiBLRWRpdG9yLmNvbXBvbmVudHMpKSB7XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn0gZWxzZSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdzdHJpbmcnKSB7XHJjb21wb25lbnRUeXBlID0gb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZTtccn0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlLmNhbGwoc2VsZiwgY29tcG9uZW50KTtccn1ccmlmICghY29tcG9uZW50VHlwZSkge1xyc2VsZi5lcnJvcignQ29tcG9uZW50IHR5cGUgaXMgdW5kZWZpbmVkIScpO1xyfVxycmV0dXJuIGNvbXBvbmVudFR5cGU7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKSB8fCAhY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKSkge1xyY29tcG9uZW50LmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKTtccmNvbXBvbmVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJjb21wb25lbnQuYXBwZW5kKHNlbGYuZ2VuZXJhdGVUb29sYmFyKFRPT0xCQVJfVFlQRS5DT01QT05FTlQsIGNvbXBvbmVudERhdGEuc2V0dGluZ0VuYWJsZWQpKTtccmNvbXBvbmVudC5maW5kKCdbZGF0YS1keW5hbWljLWhyZWZdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgZHluYW1pY0VsZW1lbnQgPSAkKHRoaXMpO1xyc2VsZi5pbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpO1xyfSk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5pbml0LmNhbGwoY29tcG9uZW50RGF0YSwgY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBzZWxmKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50Jyk7XHJjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudCA9IGR5bmFtaWNFbGVtZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJkeW5hbWljRWxlbWVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBkeW5hbWljSHJlZiA9IGR5bmFtaWNFbGVtZW50LmF0dHIoJ2RhdGEtZHluYW1pYy1ocmVmJyk7XHJsZXQgZGF0YSA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY29tcG9uZW50LCBbJ2RhdGEtdHlwZScsICdkYXRhLWR5bmFtaWMtaHJlZiddLCBmYWxzZSk7XHJkYXRhID0gJC5wYXJhbShkYXRhKTtccnJldHVybiAkLmFqYXgoe1xydXJsOiBkeW5hbWljSHJlZixccmRhdGE6IGRhdGEsXHJ0eXBlOiAnR0VUJyxccmRhdGFUeXBlOiAnSFRNTCcsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UsIHN0YXR1cywganFYSFIpIHtccmR5bmFtaWNFbGVtZW50Lmh0bWwocmVzcG9uc2UpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfSxccmVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50RXJyb3IuY2FsbChzZWxmLCBkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyXG59O1xyXG4iLCJjb25zdCBDTEFTU19OQU1FUyA9IHtcclVJOiAna2VkaXRvci11aScsXHJXUkFQUEVSOiAna2VkaXRvci13cmFwcGVyJyxcckhJRERFTl9FTEVNRU5UOiAna2VkaXRvci1oaWRkZW4tZWxlbWVudCcsXHJTSURFQkFSOiAna2VkaXRvci1zaWRlYmFyJyxcclNJREVCQVJfSEVBREVSOiAna2VkaXRvci1zaWRlYmFyLWhlYWRlcicsXHJTSURFQkFSX0JPRFk6ICdrZWRpdG9yLXNpZGViYXItYm9keScsXHJTSURFQkFSX1RJVExFOiAna2VkaXRvci1zaWRlYmFyLXRpdGxlJyxcclNJREVCQVJfQ0xPU0VSOiAna2VkaXRvci1zaWRlYmFyLWNsb3NlcicsXHJTSURFQkFSX09QRU5FRDogJ29wZW5lZCcsXHJUT1BCQVI6ICdrZWRpdG9yLXRvcGJhcicsXHJUT1BCQVJfTEVGVDogJ2tlZGl0b3ItdG9wYmFyLWxlZnQnLFxyVE9QQkFSX1JJR0hUOiAna2VkaXRvci10b3BiYXItcmlnaHQnLFxyVE9QQkFSX0NFTlRFUjogJ2tlZGl0b3ItdG9wYmFyLWNlbnRlcicsXHJUT1BCQVJfQlVUVE9OOiAna2VkaXRvci10b3BiYXItYnRuJyxcclRPUEJBUl9CVVRUT05fQUNUSVZFOiAnYWN0aXZlJyxcclRPUEJBUl9USVRMRTogJ2tlZGl0b3ItdG9wYmFyLXRpdGxlJyxcclNFVFRJTkc6ICdrZWRpdG9yLXNldHRpbmcnLFxyU0VUVElOR19DT05UQUlORVI6ICdrZWRpdG9yLXNldHRpbmctY29udGFpbmVyJyxcclNFVFRJTkdfRk9STTogJ2tlZGl0b3Itc2V0dGluZy1mb3JtJyxcclNFVFRJTkdfRk9STV9BQ1RJVkU6ICdhY3RpdmUnLFxyQ09OVEVOVF9BUkVBU19XUkFQUEVSOiAna2VkaXRvci1jb250ZW50LWFyZWFzLXdyYXBwZXInLFxyQ09OVEVOVF9BUkVBUzogJ2tlZGl0b3ItY29udGVudC1hcmVhcycsXHJDT05URU5UX0FSRUE6ICdrZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJJRlJBTUU6ICdrZWRpdG9yLWlmcmFtZScsXHJJRlJBTUVfV1JBUFBFUjogJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInLFxySUZSQU1FX0ZBS0VSOiAna2VkaXRvci1pZnJhbWUtZmFrZXInLFxySUZSQU1FX0NPVkVSX1dSQVBQRVI6ICdrZWRpdG9yLWlmcmFtZS1jb3Zlci13cmFwcGVyJyxccklGUkFNRV9DT1ZFUjogJ2tlZGl0b3ItaWZyYW1lLWNvdmVyJyxccklGUkFNRV9DT1ZFUl9ISURERU46ICdoaWRkZW4tY292ZXInLFxyQ09NUE9ORU5UOiAna2VkaXRvci1jb21wb25lbnQnLFxyXG59O1xyZXhwb3J0IGRlZmF1bHQgQ0xBU1NfTkFNRVM7XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQge1xyLypcciogVGl0bGUgd2lsbCBiZSBzaG93ZWQgaW4gbGVmdCBvZiB0b3BiYXJcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccnRpdGxlOiAnRWRpdGluZyB3aXRoIEtFZGl0b3InLFxyLypcciogRW5hYmxlIG5lc3RlZCBjb250YWluZXIgb3Igbm90XHIqIEBvcHRpb24ge0Jvb2xlYW59XHIqL1xybmVzdGVkQ29udGFpbmVyRW5hYmxlZDogdHJ1ZSxcci8qXHIqIEVuYWJsZSBleHBsaWNpdCBzbmlwcGV0IG9yIG5vdC4gV2hlbiBkaXNhYmxlLCB0aGVyZSBpcyBvbmx5IG9uZSBidXR0b24gZm9yIGFkZGluZy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBjb250ZW50IGFyZWEgb3IgY29udGFpbmVyLCB5b3UgY2FuIGFkZCBjb21wb25lbnQgb3IgY29udGFpbmVycy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBzdWItY29udGFpbmVyLCB5b3UganVzdCBjYW4gYWRkIG9ubHkgY29tcG9uZW50LiBXaGVuIHlvdSBhZGQgY29tcG9uZW50IGluIGNvbnRlbnQgYXJlYSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgY29uZmlnIFwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnRcIiBvcHRpb25cciogQG9wdGlvbiB7Qm9vbGVhbn1cciovXHJleHBsaWNpdFNuaXBwZXRFbmFibGVkOiBmYWxzZSxcci8qXHIqIGNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IFRoZSBjb250YWluZXIgc25pcHBldCB3aGljaCB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkgaW4gY29udGVudCBhcmUgd2hlbiB5b3UgYWRkaW5nIGEgY29tcG9uZW50LiBOb3RlOiBjb21wb25lbnQgd2lsbCBiZSBhZGRlZCBpbiBmaXJzdCBjb250YWluZXIgY29udGVudCBvZiBjb250YWluZXJcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50OiBgXHI8ZGl2IGNsYXNzPVwicm93XCI+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIj5ccjwvZGl2PlxyPC9kaXY+XHJgLFxyLypcciogVGV4dCBjb250ZW50IGZvciBhZGQgY29udGVudCBidXR0b24uIFRoaXMgYXZhaWxhYmxlIG9ubHkgd2hlbiBcImV4cGxpY2l0U2lwcGV0RW5hYmxlZFwiIGlzIFwiZmFsc2VcIlxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuQWRkQ29udGVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgYWRkIGNvbnRhaW5lciBidXR0b25cciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkFkZENvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBhZGQgc3ViLWNvbnRhaW5lciBidXR0b25cciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkFkZFN1YkNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBhZGQgY29tcG9uZW50IGJ1dHRvblxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuQWRkQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1saXN0LXVsXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIG1vdmUgYnV0dG9uIG9mIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuTW92ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXNvcnRcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29tcG9uZW50XHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5Nb3ZlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtYXJyb3dzXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyYnRuU2V0dGluZ0NvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBzZXR0aW5nIGJ1dHRvbiBvZiBjb21wb25lbnRcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0blNldHRpbmdDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb250YWluZXJcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8qXHIqIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb250YWluZXJcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccmJ0bkRlbGV0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGRlbGV0ZSBidXR0b24gb2YgY29tcG9uZW50XHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJidG5EZWxldGVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4nLFxyLypcciogVGV4dCBjb250ZW50IGZvciBjb25maXJtIGRpYWxvZyB3aGVuIGRlbGV0aW5nIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQ6ICdBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb250YWluZXI/IFRoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lIScsXHIvKlxyKiBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbXBvbmVudD8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8qXHIqIFdpZHRoIG9mIG1vYmlsZSBkZXZpY2VcciogQG9wdGlvbiB7TnVtYmVyfVxyKi9ccndpZHRoTW9iaWxlOiAzMjAsXHIvKlxyKiBXaWR0aCBvZiB0YWJsZXQgZGV2aWNlXHIqIEBvcHRpb24ge051bWJlcn1cciovXHJ3aWR0aFRhYmxldDogNzY4LFxyLypcciogRGVmYXVsdCBjb21wb25lbnQgdHlwZSBvZiBjb21wb25lbnQuIElmIHR5cGUgb2YgY29tcG9uZW50IGRvZXMgbm90IGV4aXN0IGluIEtFZGl0b3IuY29tcG9uZW50cywgd2lsbCBiZSB1c2VkIFwiZGVmYXVsdENvbXBvbmVudFR5cGVcIiBhcyB0eXBlIG9mIHRoaXMgY29tcG9uZW50LiBJZiBpcyBmdW5jdGlvbiwgYXJndW1lbnQgaXMgY29tcG9uZW50XHIqIEBvcHRpb24ge1N0cmluZ3xGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyKi9ccmRlZmF1bHRDb21wb25lbnRUeXBlOiAnYmxhbmsnLFxyLypcciogVXJsIHRvIHNuaXBwZXRzIGZpbGVcciogQG9wdGlvbiB7U3RyaW5nfVxyKi9ccnNuaXBwZXRzVXJsOiAnc25pcHBldHMvc25pcHBldHMuaHRtbCcsXHIvKlxyKiBFbmFibGUgZmlsdGVyaW5nIHNuaXBwZXRzIGJ5IGNhdGVnb3JpZXMgYW5kIHRleHQgc2VhcmNoaW5nIG9yIG5vdFxyKiBAb3B0aW9uIHtCb29sZWFufVxyKi9ccnNuaXBwZXRzRmlsdGVyRW5hYmxlZDogdHJ1ZSxcci8qXHIqIFRoZSBzZXBhcmF0b3IgY2hhcmFjdGVyIGJldHdlZW4gZWFjaCBjYXRlZ29yaWVzXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJzbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3I6ICc7Jyxcci8qXHIqIENvbnRlbnQgc3R5bGVzIGZvciBpZnJhbWUgbW9kZS4gQmVzaWRlIG9mIHRoaXMgb3B0aW9uLCBLRWRpdG9yIHdpbGwgYWRkIGFsbCBlbGVtZW50cyB3aGljaCBoYXZlICdkYXRhLXR5cGU9a2VkaXRvci1zdHlsZScgZm9yIGlmcmFtZSBzdHlsZXNoZWV0LiBUaGVzZSBlbGVtZW50cyBjYW4gYmUgJ2xpbmsnLCAnc3R5bGUnIG9yIGFueSB0YWdzLiBJZiB0aGVzZSBlbGVtZW50cyBoYXZlICdocmVmJyBhdHRyaWJ1dGUsIHdpbGwgY3JlYXRlIGxpbmsgdGFnIHdpdGggaHJlZi4gSWYgdGhlc2UgZWxlbWVudHMgZG8gbm90IGhhdmUgJ2hyZWYnIGF0dHJpYnV0ZSwgd2lsbCBjcmVhdGUgc3R5bGUgdGFnIHdpdGggY3NzIHJ1bGUgaXMgaHRtbCBjb2RlIGluc2lkZSBlbGVtZW50XHIqIEBvcHRpb24ge0FycmF5PE9iamVjdD59XHIqIEBleGFtcGxlOlxyKiBbXHIqICAgICB7XHIqICAgICAgICAgaHJlZjogJy9wYXRoL3RvL3N0eWxlL2ZpbGUnXHIqICAgICB9LCB7XHIqICAgICAgICAgY29udGVudDogJ2EgeyBjb2xvcjogcmVkOyB9J1xyKiAgICAgfVxyKiBdXHIqL1xyY29udGVudFN0eWxlczogW10sXHIvKlxyKiBTZWxlY3RvciBvZiBjb250ZW50IGFyZWFzLiBJZiBpcyBudWxsIG9yIHNlbGVjdG9yIGRvZXMgbm90IG1hdGNoIGFueSBlbGVtZW50cywgd2lsbCBjcmVhdGUgZGVmYXVsdCBjb250ZW50IGFyZWEgYW5kIHdyYXAgYWxsIGNvbnRlbnQgaW5zaWRlIGl0LlxyKiBAb3B0aW9uIHtTdHJpbmd9XHIqL1xyY29udGVudEFyZWFzU2VsZWN0b3I6IG51bGwsXHIvKlxyKiBUaGUgd3JhcHBlciBlbGVtZW50IGZvciBhbGwgY29udGVudHMgaW5zaWRlIGlmcmFtZSBvciBuZXcgZGl2IHdoaWNoIHdpbGwgY29udGFpbnMgY29udGVudCBvZiB0ZXh0YXJlYS4gSXQncyBqdXN0IGZvciBkaXNwbGF5aW5nIHB1cnBvc2UuIElmIHlvdSB3YW50IGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIGFyZSBhcHBlbmRlZCBpbnRvIGJvZHkgdGFnLCBqdXN0IGxlYXZlIGl0IGFzIGJsYW5rXHIqIEBvcHRpb24ge1N0cmluZ31cciovXHJjb250ZW50QXJlYXNXcmFwcGVyOiBgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuQ09OVEVOVF9BUkVBU19XUkFQUEVSfVwiPjwvZGl2PmAsXHIvKlxyKiBFbmFibGUgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIqIEBvcHRpb24ge0Jvb2xlYW59XHIqL1xyY29udGFpbmVyU2V0dGluZ0VuYWJsZWQ6IGZhbHNlLFxyLypcciogTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lclxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyKiBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyKi9ccmNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb246IG51bGwsXHIvKlxyKiBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXIgaXMgc2hvd2VkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cciogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyKiBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyKi9ccmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb246IG51bGwsXHIvKlxyKiBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXIgaXMgaGlkZGVuXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cciogQHBhcmFtIHtLRWRpdG9yfSBrZWRpdG9ySW5zdGFuY2VcciovXHJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uOiBudWxsLFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIga2VkaXRvciBpbnN0YW5jZSBpcyByZWFkeVxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciovXHJvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgY2xpY2tpbmcgb24gXCJTYXZlXCIgYnV0dG9uIGluIHRvcGJhclxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtTdHJpbmd9IGNvbnRlbnRcciovXHJvblNhdmU6IGZ1bmN0aW9uIChjb250ZW50KSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgc25pcHBldHMgYXJlIGxvYWRlZC4gSWYgeW91IHdhbnQgdG8gbW9kaWZ5IHNuaXBwZXRzIGNvbnRlbnQsIHBsZWFzZSByZXR1cm4gbW9kaWZpZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7U3RyaW5nfSByZXNwXHIqIEByZXR1cm4ge1N0cmluZ31cciovXHJvblNuaXBwZXRzTG9hZGVkOiBmdW5jdGlvbiAocmVzcCkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gZXJyb3IgaW4gbG9hZGluZyBzbmlwcGV0c1xyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqcVhIUn0ganFYSFJcciovXHJvblNuaXBwZXRzRXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGlmcmFtZSBhbmQgY29udGVudCBhcmVhcyB3cmFwcGVyIGluc2lkZSBpdCBhcmUgY3JlYXRlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGlmcmFtZVxyKiBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lSGVhZFxyKiBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lQm9keVxyKi9ccm9uSW5pdElmcmFtZTogZnVuY3Rpb24gKGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBpcyBjaGFuZ2VkLiBJbmNsdWRlcyBhZGQsIGRlbGV0ZSwgZHVwbGljYXRlIGNvbnRhaW5lciBvciBjb21wb25lbnQuIE9yIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25Db250ZW50Q2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkJlZm9yZUluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29udGVudCBhcmVhLiBJdCBjYW4gcmV0dXJuIGFycmF5IG9mIGpRdWVyeSBvYmplY3RzIHdoaWNoIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgY29udGFpbmVyIGluIGNvbnRlbnQgYXJlYS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRlbnQgYXJlYSB3aWxsIGJlIGluaXRpYWxpemVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb250YWluZXJcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25CZWZvcmVJbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRhaW5lci4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGVkaXRhYmxlIGNvbXBvbmVudHMgaW4gY29udGFpbmVyIGNvbnRlbnQgKE5PVEU6IHRoZXNlIG9iamVjdHMgTVVTVCBiZSB1bmRlciBlbGVtZW50cyB3aGljaCBoYXZlIGF0dHJpYnV0ZSBkYXRhLXR5cGU9YGNvbnRhaW5lci1jb250ZW50XCIpLiBCeSBkZWZhdWx0LCBhbGwgZmlyc3QgbGV2ZWwgc2VjdGlvbnMgdW5kZXIgY29udGFpbmVyIGNvbnRlbnQgd2lsbCBiZSBpbml0aWFsaXplZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGNvbnRhaW5lciBpcyBkZWxldGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbnRhaW5lciBhbmQgaXRzIGNvbXBvbmVudHMgYXJlIGFscmVhZHkgZGVsZXRlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgY29udGFpbmVyIGlzIGNoYW5nZWQuIEl0IGNhbiBiZSB3aGVuIGNvbnRhaW5lciByZWNlaXZlZCBuZXcgY29tcG9uZW50IGZyb20gc25pcHBldCBvciBmcm9tIG90aGVyIGNvbnRhaW5lci4gT3IgY29udGVudCBvZiBhbnkgY29tcG9uZW50cyBhcmUgY2hhbmdlZCBvciBhbnkgY29tcG9uZW50cyBhcmUgZGVsZXRlZCBvciBkdXBsaWNhdGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIGR1cGxpY2F0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gbmV3Q29udGFpbmVyXHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyRHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb250YWluZXIgaXMgc2VsZWN0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbnRhaW5lclNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb250YWluZXIgc25pcHBldCBpcyBhZGRlZCBpbiBhIGNvbnRlbnQgYXJlYVxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IG5ld0NvbnRhaW5lclxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRTbmlwcGV0XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29udGFpbmVyU25pcHBldEFkZGVkOiBmdW5jdGlvbiAoZXZlbnQsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gVGhpcyBjYWxsYmFjayBpcyBhdmFpbGFibGUgb3Igbm90IGlzIGRlcGVuZCBvbiBjb21wb25lbnQgdHlwZSBoYW5kbGVyLlxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyKi9ccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbXBvbmVudFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkJlZm9yZUluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLypcciogQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29tcG9uZW50XHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uSW5pdENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgYSBjb21wb25lbnQgaXMgZGVsZXRlZFxyKiBAb3B0aW9uIHtGdW5jdGlvbn1cciogQHBhcmFtIHtFdmVudH0gZXZlbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBhIGNvbXBvbmVudCBpcyBkZWxldGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb21wb25lbnRcciogQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHIqL1xyb25Db21wb25lbnREZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBvZiBhIGNvbXBvbmVudCBpcyBjaGFuZ2VkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge0V2ZW50fSBldmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudENoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29tcG9uZW50IGlzIGR1cGxpY2F0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gbmV3Q29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQ29tcG9uZW50RHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgc2VsZWN0ZWRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudFNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250YWluZXJcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcciogQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkU25pcHBldFxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBkeW5hbWljIGNvbnRlbnRcciogQG9wdGlvbiB7RnVuY3Rpb259XHIqIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyKiBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIqIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyKi9ccm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvKlxyKiBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBkeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkXHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcciogQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkR5bmFtaWNDb250ZW50TG9hZGVkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfSxcci8qXHIqIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGlmIGxvYWRpbmcgZHluYW1pYyBjb250ZW50IGlzIGVycm9yLCBhYm9ydCBvciB0aW1lb3V0XHIqIEBvcHRpb24ge0Z1bmN0aW9ufVxyKiBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcciogQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyKiBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFcciovXHJvbkR5bmFtaWNDb250ZW50RXJyb3I6IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKSB7XHJ9XHJcbn07XHIiLCJleHBvcnQgZGVmYXVsdCB7XHJBTEw6IDAsXHJDT05UQUlORVI6IDEsXHJDT01QT05FTlQ6IDJcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyQ09OVEVOVF9BUkVBOiAwLFxyQ09OVEFJTkVSOiAxLFxyU1VCX0NPTlRBSU5FUjogMixcckNPTlRBSU5FUl9DT05URU5UOiAzLFxyU1VCX0NPTlRBSU5FUl9DT05URU5UOiA0LFxyQ09NUE9ORU5UOiA1XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVyO1xyaWYgKHRhcmdldC5pcygnc2VjdGlvbicpKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXInKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyXCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWlubmVyXCI+PC9zZWN0aW9uPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRhaW5lciwgaXNOZXN0ZWQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250YWluZXJJbm5lciA9IGNvbnRhaW5lci5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyLWlubmVyJykuY2xvbmUoKTtccmNvbnRhaW5lcklubmVyLmZpbmQoJ1tkYXRhLXR5cGU9Y29udGFpbmVyLWNvbnRlbnRdJykubm90KGlzTmVzdGVkID8gJycgOiAnLmtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJjb250YWluZXJDb250ZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50IGtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50IHVpLXNvcnRhYmxlJykucmVtb3ZlQXR0cignaWQnKTtccmxldCBjb250YWluZXJDb250ZW50SW5uZXIgPSBjb250YWluZXJDb250ZW50LmNoaWxkcmVuKCk7XHJsZXQgY29udGVudCA9ICcnO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY2hpbGQpO1xyfSBlbHNlIGlmIChjaGlsZC5pcygnLmtlZGl0b3Itc3ViLWNvbnRhaW5lcicpKSB7XHJjb250ZW50ICs9IHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250ZW50KTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbj4ke2NvbnRhaW5lcklubmVyLmh0bWwoKX08L3NlY3Rpb24+YDtcclxufSIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGlzTmVzdGVkID0gb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmIGNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykgfHwgIWNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJykpIHtccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lcicpO1xyfVxyY29udGFpbmVyLmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUikpO1xyY29udGFpbmVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRzID0gY29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpO1xyY29udGFpbmVyQ29udGVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJpZiAob3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmICFpc05lc3RlZCAmJiBjb250YWluZXJDb250ZW50LnBhcmVudHMoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtcci8vIERvIG5vdGhpbmcgYmVjYXVzZSBpdCdzIGNvbnRhaW5lciBjb250ZW50IG9mIHN1YiBjb250YWluZXJccnJldHVybjtccn1ccnNlbGYuaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpO1xyY29udGFpbmVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQnKTtccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQnKTtccn1ccmNvbnRhaW5lckNvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXJcIj48L2Rpdj4nKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5odG1sKGNvbnRhaW5lckNvbnRlbnQuaHRtbCgpKTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250YWluZXJDb250ZW50SW5uZXIpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQgOiBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQpKTtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmFwcGVuZFRvKGNvbnRhaW5lckNvbnRlbnQpO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKCFpc05lc3RlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyfSk7XHJ9XHJ9XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29tcG9uZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn0gZWxzZSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIGlzTmVzdGVkID8gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA6IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5BTEwgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfVxyY29udGFpbmVyQ29udGVudElubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5idG4tY29tcG9uZW50LXJlcG9zaXRpb24sIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250YWluZXItY29udGVudC1pbm5lcicsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xybGV0IGNvbnRhaW5lcjtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccmNvbnRhaW5lciA9IGl0ZW0uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHIkKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RhcnQ6IGZ1bmN0aW9uIChlLCB1aSkge1xydWkuaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0b3A6IGZ1bmN0aW9uIChlLCB1aSkge1xyaWYgKHVpLmhlbHBlcikge1xydWkuaGVscGVyLnJlbW92ZSgpO1xyfVxydWkuaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50SW5uZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjaGlsZCA9ICQodGhpcyk7XHJpZiAoY2hpbGQuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIGNoaWxkKTtccn0gZWxzZSB7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGVudEFyZWEuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGVudC1hcmVhJyk7XHJsZXQgY29udGVudCA9IGNvbnRlbnRBcmVhLmh0bWwoKTtccmxldCBjb250ZW50QXJlYUlubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyXCI+PC9kaXY+JykuaHRtbChjb250ZW50KTtccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudEFyZWFJbm5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoIWRvbnRJbml0VG9vbGJhcikge1xybGV0IGNvbnRlbnRBcmVhVG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQSkpO1xyY29udGVudEFyZWEuYXBwZW5kKGNvbnRlbnRBcmVhVG9vbGJhcik7XHJjb250ZW50QXJlYVRvb2xiYXIuY2hpbGRyZW4ob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gJy5idG4tYWRkLWNvbnRhaW5lcicgOiAnLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250ZW50QXJlYUlubmVyLCBvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkFMTCk7XHJ9KTtccn1ccmNvbnRlbnRBcmVhSW5uZXIuc29ydGFibGUoe1xyaGFuZGxlOiAnLmtlZGl0b3ItdG9vbGJhci1jb250YWluZXI6bm90KC5rZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lcikgLmJ0bi1jb250YWluZXItcmVwb3NpdGlvbicsXHJpdGVtczogJz4gc2VjdGlvbicsXHJoZWxwZXI6ICdjbG9uZScsXHJjb25uZWN0V2l0aDogJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJheGlzOiAneScsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyc2VsZi5jbG9zZVNpZGViYXIoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xyY29udGVudEFyZWFJbm5lci5jaGlsZHJlbignc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccmxldCBjb250ZW50RGF0YSA9IG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEubGVuZ3RoID4gMCkge1xyJC5lYWNoKGNvbnRlbnREYXRhLCBmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgd3JhcHBlciA9IHNlbGYud3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLldSQVBQRVJ9XCI+PC9kaXY+YCk7XHJsZXQgaWZyYW1lV3JhcHBlciA9IHNlbGYuaWZyYW1lV3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLklGUkFNRV9XUkFQUEVSfVwiPjwvZGl2PmApO1xybGV0IGlmcmFtZSA9IHNlbGYuaWZyYW1lID0gJChgPGlmcmFtZSBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuSUZSQU1FfVwiPjwvaWZyYW1lPmApO1xyZWxlbWVudC5hZnRlcih3cmFwcGVyKTtccmVsZW1lbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuSElEREVOX0VMRU1FTlQpO1xyaWZyYW1lV3JhcHBlci5odG1sKGlmcmFtZSk7XHJ3cmFwcGVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpLmFwcGVuZChpZnJhbWVXcmFwcGVyKTtccnNlbGYuaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRzKCk7XHIvLyBGaXggaXNzdWUgRmlyZWZveCBjYW4ndCByZW5kZXIgY29udGVudCBpbnNpZGUgaWZyYW1lXHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccnNlbGYuaWZyYW1lRG9jLmdldCgwKS5vcGVuKCk7XHJzZWxmLmlmcmFtZURvYy5nZXQoMCkuY2xvc2UoKTtcci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyc2VsZi5pZnJhbWVXaW5kb3cgPSBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA/IGlmcmFtZVswXS5jb250ZW50V2luZG93IDogaWZyYW1lWzBdLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztccnNlbGYuaWZyYW1lSGVhZCA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2hlYWQnKTtccnNlbGYuaWZyYW1lQm9keSA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2JvZHknKTtcci8vIEdlbmVyYXRlIGhlYWQgY29udGVudCBmb3IgaWZyYW1lXHJsZXQgc3R5bGVzID0gJyc7XHIkKCdbZGF0YS10eXBlPVwia2VkaXRvci1zdHlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHN0eWxlID0gJCh0aGlzKTtccmxldCBpZFN0ciA9IHN0eWxlLmF0dHIoJ2lkJykgfHwgJyc7XHJsZXQgaHJlZiA9IHN0eWxlLmF0dHIoJ2hyZWYnKSB8fCBzdHlsZS5hdHRyKCdkYXRhLWhyZWYnKSB8fCAnJztccmlmIChocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtocmVmfVwiICR7aWRTdHJ9IC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiAke2lkU3RyfT4ke3N0eWxlLmh0bWwoKX08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtcciQuaXNBcnJheShvcHRpb25zLmNvbnRlbnRTdHlsZXMpICYmICQuZWFjaChvcHRpb25zLmNvbnRlbnRTdHlsZXMsIGZ1bmN0aW9uIChpLCBzdHlsZSkge1xybGV0IGlkU3RyID0gc3R5bGUuaWQgfHwgJyc7XHJpZiAoc3R5bGUuaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7c3R5bGUuaHJlZn1cIiAke2lkU3RyfSAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgJHtpZFN0cn0+JHtzdHlsZS5jb250ZW50fTwvc3R5bGU+XFxuYDtccn1ccn0pO1xyc2VsZi5pZnJhbWVIZWFkLmFwcGVuZChzdHlsZXMpO1xyLy8gR2VuZXJhdGUgYm9keSBjb250ZW50IGZvciBpZnJhbWVccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9ICQob3B0aW9ucy5jb250ZW50QXJlYXNXcmFwcGVyIHx8ICc8ZGl2IC8+Jyk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignY2xhc3MnLCBgJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9YCk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbChlbGVtZW50LnZhbCgpIHx8IGVsZW1lbnQuaHRtbCgpIHx8ICcnKTtccmlmICghc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2lkJykpIHtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccn1ccnNlbGYuaWZyYW1lQm9keS5hcHBlbmQoc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRJZnJhbWUgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0SWZyYW1lLmNhbGwoc2VsZiwgc2VsZi5pZnJhbWUsIHNlbGYuaWZyYW1lSGVhZCwgc2VsZi5pZnJhbWVCb2R5KTtccn1ccnNlbGYuaW5pdENvbnRlbnRBcmVhcygpO1xyc2VsZi5pbml0SWZyYW1lQWN0aW9ucygpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xybGV0IGNvbnRlbnRBcmVhcztccmlmIChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKSB7XHJjb250ZW50QXJlYXMgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcik7XHJ9XHJpZiAoIWNvbnRlbnRBcmVhcyB8fCBjb250ZW50QXJlYXMubGVuZ3RoID09PSAwKSB7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gY29udGVudEFyZWFzV3JhcHBlci5odG1sKCk7XHJjb250ZW50QXJlYXMgPSAkKCc8ZGl2IC8+JykuaHRtbChvcmlnaW5hbENvbnRlbnQpO1xyY29udGVudEFyZWFzV3JhcHBlci5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXMpO1xyfVxyY29udGVudEFyZWFzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRlbnRBcmVhID0gJCh0aGlzKTtccmlmICghY29udGVudEFyZWEuYXR0cignaWQnKSkge1xyY29udGVudEFyZWEuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJ9XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQ7XHJsZXQgaWQgPSBzZWxmLmlkO1xybGV0IGNvbnRlbnQgPSBzZWxmLmdldENvbnRlbnQoZmFsc2UpO1xyc2VsZi53cmFwcGVyLnJlbW92ZSgpO1xyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQudmFsKGNvbnRlbnQpO1xyfSBlbHNlIHtccmVsZW1lbnQuaHRtbChjb250ZW50KTtccn1ccmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaGlkZGVuLWVsZW1lbnQnKTtccmVsZW1lbnQuZGF0YSgna2VkaXRvcicsIG51bGwpO1xyZGVsZXRlIEtFZGl0b3IuaW5zdGFuY2VzW2lkXTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGluQXJyYXkpIHtccmxldCBzZWxmID0gdGhpcztccmxldCByZXN1bHQgPSBbXTtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBodG1sID0gJyc7XHIkKHRoaXMpLmNoaWxkcmVuKCcua2VkaXRvci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXIgPSAkKHRoaXMpO1xyaHRtbCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyKTtccn0pO1xycmVzdWx0LnB1c2goaHRtbCk7XHJ9KTtccnJldHVybiBpbkFycmF5ID8gcmVzdWx0IDogcmVzdWx0LmpvaW4oJ1xcbicpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xybGV0IHNpZGViYXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1zaWRlYmFyJyk7XHJsZXQgbW9kYWwgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1tb2RhbCcpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRhaW5lcikge1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhciAmJiAhbW9kYWwpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJsZXQgY29tcG9uZW50ID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29tcG9uZW50KSB7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbXBvbmVudC5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhcikge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRlbnRBcmVhc1dyYXBwZXIuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb250YWluZXIgPSAkKHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGJ0bi5wYXJlbnQoKS5oYXNDbGFzcygna2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXInKSkpO1xyY29udGFpbmVyLmFmdGVyKG5ld0NvbnRhaW5lcik7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckR1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQpKSB7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbXBvbmVudHMgPSBjb250YWluZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxybGV0IHNldHRpbmdDb21wb25lbnQgPSBzZWxmLnNldHRpbmdDb21wb25lbnQ7XHJpZiAoc2V0dGluZ0NvbXBvbmVudCkge1xybGV0IHNldHRpbmdDb21wb25lbnRQYXJlbnQgPSBzZXR0aW5nQ29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHNldHRpbmdDb21wb25lbnRQYXJlbnQuaXMoY29udGFpbmVyKSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSBpZiAoY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJjb21wb25lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5kZWxldGVDb21wb25lbnQoJCh0aGlzKSk7XHJ9KTtccn1ccmNvbnRhaW5lci5yZW1vdmUoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckRlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEZWxldGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmlmIChjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgY29udGVudEFyZWFzV3JhcHBlci5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQoKSkpIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29tcG9uZW50ID0gJChzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY29tcG9uZW50KSk7XHJjb21wb25lbnQuYWZ0ZXIobmV3Q29tcG9uZW50KTtccnNlbGYuY29udmVydFRvQ29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIG5ld0NvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xyaWYgKGNvbmZpcm0ob3B0aW9ucy5jb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCkpIHtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccnNlbGYuZGVsZXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItY2xpY2tzLWluaXRpYWxpemVkJyk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWZyYW1lLCB3cmFwcGVyKSB7XHJpZiAoIXdyYXBwZXIpIHtccmlmcmFtZS53cmFwKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5JRlJBTUVfRkFLRVJ9XCI+PC9kaXY+YCk7XHJ3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xyfVxyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfV1JBUFBFUn1gKTtccmxldCBjb3ZlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLklGUkFNRV9DT1ZFUn1cIj48L2Rpdj5gKTtccndyYXBwZXIucHJlcGVuZChjb3Zlcik7XHJ3cmFwcGVyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyd3JhcHBlci5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJjb3Zlci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUlkJztcclxuaW1wb3J0IGdlbmVyYXRlVG9vbGJhciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVG9vbGJhcic7XHJcbmltcG9ydCBiZWF1dGlmeUNhdGVnb3JpZXMgZnJvbSAnLi91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgZ2V0RGF0YUF0dHJpYnV0ZXMgZnJvbSAnLi91dGlscy9nZXREYXRhQXR0cmlidXRlcyc7XHJcbmltcG9ydCBnZXRDbGlja2VkRWxlbWVudCBmcm9tICcuL3V0aWxzL2dldENsaWNrZWRFbGVtZW50JztccmltcG9ydCBpbml0SWZyYW1lQWN0aW9ucyBmcm9tICcuL2lmcmFtZS9pbml0SWZyYW1lQWN0aW9ucyc7XHJcbmltcG9ydCBpbml0SWZyYW1lQ292ZXIgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZUNvdmVyJztccmltcG9ydCBpbml0VG9wYmFyIGZyb20gJy4vdG9wYmFyL2luaXRUb3BiYXInO1xyXG5pbXBvcnQgaW5pdFRvcGJhclJpZ2h0QWN0aW9ucyBmcm9tICcuL3RvcGJhci9pbml0VG9wYmFyUmlnaHRBY3Rpb25zJztcclxuaW1wb3J0IGluaXREZXZpY2VTd2l0Y2hlciBmcm9tICcuL3RvcGJhci9pbml0RGV2aWNlU3dpdGNoZXInO1xyaW1wb3J0IGluaXRTaWRlYmFyIGZyb20gJy4vc2lkZWJhci9pbml0U2lkZWJhcic7XHJcbmltcG9ydCBvcGVuU2lkZWJhciBmcm9tICcuL3NpZGViYXIvb3BlblNpZGViYXInO1xyXG5pbXBvcnQgY2xvc2VTaWRlYmFyIGZyb20gJy4vc2lkZWJhci9jbG9zZVNpZGViYXInO1xyaW1wb3J0IHJlbmRlclNuaXBwZXRzIGZyb20gJy4vc25pcHBldC9yZW5kZXJTbmlwcGV0cyc7XHJcbmltcG9ydCBpbml0U25pcHBldHNGaWx0ZXIgZnJvbSAnLi9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlcic7XHJcbmltcG9ydCBhZGRTbmlwcGV0IGZyb20gJy4vc25pcHBldC9hZGRTbmlwcGV0JztccmltcG9ydCBpbml0U25pcHBldHNNb2RhbCBmcm9tICcuL21vZGFsL2luaXRTbmlwcGV0c01vZGFsJztcclxuaW1wb3J0IG9wZW5Nb2RhbCBmcm9tICcuL21vZGFsL29wZW5Nb2RhbCc7XHJcbmltcG9ydCBjbG9zZU1vZGFsIGZyb20gJy4vbW9kYWwvY2xvc2VNb2RhbCc7XHJpbXBvcnQgaW5pdENvbnRlbnRBcmVhV3JhcHBlciBmcm9tICcuL2NvbnRlbnRBcmVhL2luaXRDb250ZW50QXJlYVdyYXBwZXInO1xyXG5pbXBvcnQgaW5pdENvbnRlbnRBcmVhcyBmcm9tICcuL2NvbnRlbnRBcmVhL2luaXRDb250ZW50QXJlYXMnO1xyXG5pbXBvcnQgaW5pdENvbnRlbnRBcmVhIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhJztccmltcG9ydCBjb252ZXJ0VG9Db250YWluZXIgZnJvbSAnLi9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXIgZnJvbSAnLi9jb250YWluZXIvaW5pdENvbnRhaW5lcic7XHJcbmltcG9ydCBpbml0Q29udGFpbmVyQ29udGVudCBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudCc7XHJcbmltcG9ydCBnZXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2dldENvbnRhaW5lckNvbnRlbnQnO1xyaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9jb21wb25lbnQvZ2V0Q29tcG9uZW50VHlwZSc7XHJcbmltcG9ydCBjb252ZXJ0VG9Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50JztcclxuaW1wb3J0IGluaXRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvaW5pdENvbXBvbmVudCc7XHJcbmltcG9ydCBpbml0RHluYW1pY0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnQvaW5pdER5bmFtaWNDb250ZW50JztcclxuaW1wb3J0IGRlbGV0ZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQnO1xyXG5pbXBvcnQgZ2V0Q29tcG9uZW50Q29udGVudCBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRDb250ZW50JztccmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XHJcbmltcG9ydCBkZXN0cm95IGZyb20gJy4vZGVzdHJveSc7XHJcbmltcG9ydCBnZXRDb250ZW50IGZyb20gJy4vZ2V0Q29udGVudCc7XHJcbmltcG9ydCBzZXRDb250ZW50IGZyb20gJy4vc2V0Q29udGVudCc7XHJpbXBvcnQgJy4uL3N0eWxlcy9rZWRpdG9yLmxlc3MnO1xyLy8gQ2hlY2sgZGVwZW5kZW5jaWVzXHJcbmlmICghJC5mbi5zb3J0YWJsZSkge1xyZXJyb3IoJyQuZm4uc29ydGFibGUgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSBpbXBvcnQgJC5mbi5zb3J0YWJsZSBpbnRvIHlvdXIgZG9jdW1lbnQgZm9yIGNvbnRpbnVlIHVzaW5nIEtFZGl0b3IuJyk7XHJcbn1cci8vIEtFZGl0b3IgY2xhc3NcclxuY2xhc3MgS0VkaXRvciB7XHJzdGF0aWMgREVGQVVMVFMgPSBERUZBVUxUUztccnN0YXRpYyBkZWJ1ZyA9IGZhbHNlO1xyc3RhdGljIHZlcnNpb24gPSAnMi4wLjAnO1xyc3RhdGljIGluc3RhbmNlcyA9IHt9O1xyc3RhdGljIGNvbXBvbmVudHMgPSB7XHJibGFuazoge1xyc2V0dGluZ0VuYWJsZWQ6IGZhbHNlXHJ9XHJ9O1xyc3RhdGljIGxvZyguLi5hcmdzKSB7XHJpZiAoY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicgJiYgJC5rZWRpdG9yLmRlYnVnKSB7XHJjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1sgS0VkaXRvciBdICcsIC4uLmFyZ3NdKTtccmNvbnNvbGUubG9nKGBcImxvZ1wiIGlzIERFUFJFQ0FURUQuIFdpbGwgYmUgcmVtb3ZlZCBzb29uLiBQbGVhc2UgdXNlIFwiY29uc29sZS5sb2dcIiBpbnN0ZWFkIWApO1xyfVxyfVxyc3RhdGljIGVycm9yKG1lc3NhZ2UpIHtccnRocm93IG5ldyBFcnJvcihgWyBLRWRpdG9yIF0gJHttZXNzYWdlfWApO1xyfVxyc3RhdGljIGluaXQodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBuZXcgS0VkaXRvcih0YXJnZXQsIGNvbmZpZyk7XHJ9XHJjb25zdHJ1Y3Rvcih0YXJnZXQsIGNvbmZpZykge1xycmV0dXJuIGluaXQuYXBwbHkodGhpcywgW3RhcmdldCwgY29uZmlnXSk7XHJ9XHJnZW5lcmF0ZUlkKCkge1xycmV0dXJuIGdlbmVyYXRlSWQoKTtccn1ccmdlbmVyYXRlVG9vbGJhcih0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xycmV0dXJuIGdlbmVyYXRlVG9vbGJhci5hcHBseSh0aGlzLCBbdHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGVdKTtccn1ccmJlYXV0aWZ5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XHJyZXR1cm4gYmVhdXRpZnlDYXRlZ29yaWVzLmFwcGx5KHRoaXMsIFtjYXRlZ29yaWVzXSk7XHJ9XHJzZXRTZXR0aW5nQ29udGFpbmVyKGNvbnRhaW5lcikge1xydGhpcy5zZXR0aW5nQ29udGFpbmVyID0gY29udGFpbmVyO1xyfVxyZ2V0U2V0dGluZ0NvbnRhaW5lcigpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb250YWluZXI7XHJ9XHJzZXRTZXR0aW5nQ29tcG9uZW50KGNvbXBvbmVudCkge1xydGhpcy5zZXR0aW5nQ29tcG9uZW50ID0gY29tcG9uZW50O1xyfVxyZ2V0U2V0dGluZ0NvbXBvbmVudCgpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb21wb25lbnQ7XHJ9XHJnZXREYXRhQXR0cmlidXRlcyh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccnJldHVybiBnZXREYXRhQXR0cmlidXRlcy5hcHBseSh0aGlzLCBbdGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5XSk7XHJ9XHJnZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudFR5cGUuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q2xpY2tlZEVsZW1lbnQoZXZlbnQsIHNlbGVjdG9yKSB7XHJyZXR1cm4gZ2V0Q2xpY2tlZEVsZW1lbnQuYXBwbHkodGhpcywgW2V2ZW50LCBzZWxlY3Rvcl0pO1xyfVxyLy8gSWZyYW1lXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcikge1xycmV0dXJuIGluaXRJZnJhbWVDb3Zlci5hcHBseSh0aGlzLCBbaWZyYW1lLCB3cmFwcGVyXSk7XHJ9XHIvLyBLRWRpdG9yIGNsaWNrc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRJZnJhbWVBY3Rpb25zKCkge1xycmV0dXJuIGluaXRJZnJhbWVBY3Rpb25zLmFwcGx5KHRoaXMpO1xyfVxyLy8gVG9wYmFyXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdFRvcGJhcigpIHtccnJldHVybiBpbml0VG9wYmFyLmFwcGx5KHRoaXMpO1xyfVxyaW5pdERldmljZVN3aXRjaGVyKCkge1xycmV0dXJuIGluaXREZXZpY2VTd2l0Y2hlci5hcHBseSh0aGlzKTtccn1ccmluaXRUb3BiYXJSaWdodEFjdGlvbnMoKSB7XHJyZXR1cm4gaW5pdFRvcGJhclJpZ2h0QWN0aW9ucy5hcHBseSh0aGlzKTtccn1cci8vIFNpZGViYXJcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U2lkZWJhcigpIHtccnJldHVybiBpbml0U2lkZWJhci5hcHBseSh0aGlzKTtccn1ccm9wZW5TaWRlYmFyKHRhcmdldCkge1xycmV0dXJuIG9wZW5TaWRlYmFyLmFwcGx5KHRoaXMsIFt0YXJnZXRdKTtccn1ccmNsb3NlU2lkZWJhcigpIHtccnJldHVybiBjbG9zZVNpZGViYXIuYXBwbHkodGhpcyk7XHJ9XHIvLyBMZWdhY3kgbWV0aG9kcy4gREVQUkVDQVRFRFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccnNob3dTZXR0aW5nUGFuZWwodGFyZ2V0KSB7XHJ0aGlzLm9wZW5TaWRlYmFyKHRhcmdldCk7XHJ9XHJoaWRlU2V0dGluZ1BhbmVsKCkge1xydGhpcy5jbG9zZVNpZGViYXIoKTtccn1cci8vIFNuaXBwZXQgbW9kYWxcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U25pcHBldHNNb2RhbCgpIHtccnJldHVybiBpbml0U25pcHBldHNNb2RhbC5hcHBseSh0aGlzKTtccn1ccnJlbmRlclNuaXBwZXRzKHJlc3ApIHtccnJldHVybiByZW5kZXJTbmlwcGV0cy5hcHBseSh0aGlzLCBbcmVzcF0pO1xyfVxyaW5pdFNuaXBwZXRzRmlsdGVyKHR5cGUpIHtccnJldHVybiBpbml0U25pcHBldHNGaWx0ZXIuYXBwbHkodGhpcywgW3R5cGVdKTtccn1ccm9wZW5Nb2RhbCh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJyZXR1cm4gb3Blbk1vZGFsLmFwcGx5KHRoaXMsIFt0YXJnZXQsIHNuaXBwZXRUeXBlXSk7XHJ9XHJjbG9zZU1vZGFsKCkge1xycmV0dXJuIGNsb3NlTW9kYWwuYXBwbHkodGhpcyk7XHJ9XHIvLyBDb250ZW50IGFyZWFzXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdENvbnRlbnRBcmVhV3JhcHBlcigpIHtccnJldHVybiBpbml0Q29udGVudEFyZWFXcmFwcGVyLmFwcGx5KHRoaXMpO1xyfVxyaW5pdENvbnRlbnRBcmVhcygpIHtccnJldHVybiBpbml0Q29udGVudEFyZWFzLmFwcGx5KHRoaXMpO1xyfVxyaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccnJldHVybiBpbml0Q29udGVudEFyZWEuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXJdKTtccn1cci8vIENvbnRhaW5lcnNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIHRhcmdldCkge1xycmV0dXJuIGNvbnZlcnRUb0NvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIHRhcmdldF0pO1xyfVxyaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKSB7XHJyZXR1cm4gaW5pdENvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lcl0pO1xyfVxyaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpIHtccnJldHVybiBpbml0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWRdKTtccn1cci8vIENvbXBvbmVudHNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJyZXR1cm4gY29udmVydFRvQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmddKTtccn1ccmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJyZXR1cm4gaW5pdENvbXBvbmVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50XSk7XHJ9XHJpbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpIHtccnJldHVybiBpbml0RHluYW1pY0NvbnRlbnQuYXBwbHkodGhpcywgW2R5bmFtaWNFbGVtZW50XSk7XHJ9XHJkZWxldGVDb21wb25lbnQoY29tcG9uZW50KSB7XHJyZXR1cm4gZGVsZXRlQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1cci8vIEdldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZ2V0Q29tcG9uZW50Q29udGVudChjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRDb250ZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBpc05lc3RlZCkge1xycmV0dXJuIGdldENvbnRhaW5lckNvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRhaW5lciwgaXNOZXN0ZWRdKTtccn1ccmdldENvbnRlbnQoaW5BcnJheSkge1xycmV0dXJuIGdldENvbnRlbnQuYXBwbHkodGhpcywgW2luQXJyYXldKTtccn1cci8vIFNldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2V0Q29udGVudChjb250ZW50LCBjb250ZW50QXJlYSkge1xycmV0dXJuIHNldENvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRlbnQsIGNvbnRlbnRBcmVhXSk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZGVzdHJveSgpIHtccnJldHVybiBkZXN0cm95LmFwcGx5KHRoaXMpO1xyfVxyLy8gU25pcHBldFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmFkZFNuaXBwZXQodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKSB7XHJyZXR1cm4gYWRkU25pcHBldC5hcHBseSh0aGlzLCBbdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzXSk7XHJ9XHJcbn1cci8vIEtFZGl0b3IgcGx1Z2luc1xyXG4kLmZuLmtlZGl0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xybGV0IGVsZW1lbnQgPSAkKHRoaXMpO1xybGV0IGluc3RhbmNlID0gZWxlbWVudC5kYXRhKCdrZWRpdG9yJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Vbb3B0aW9uc10gJiYgdHlwZW9mIGluc3RhbmNlW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJyZXR1cm4gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyfVxyfSBlbHNlIHtccmlmICghaW5zdGFuY2UpIHtccmluc3RhbmNlID0gS0VkaXRvci5pbml0KGVsZW1lbnQsIG9wdGlvbnMpO1xyZWxlbWVudC5kYXRhKCdrZWRpdG9yJywgaW5zdGFuY2UpO1xyfVxycmV0dXJuIGluc3RhbmNlO1xyfVxyXG59O1xyd2luZG93LktFZGl0b3IgPSAkLmtlZGl0b3IgPSAkLmZuLmtlZGl0b3IuY29uc3RydWN0b3IgPSBLRWRpdG9yO1xyXG4iLCJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgY29uZmlnKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJzZWxmLmVsZW1lbnQgPSB0YXJnZXQ7XHJzZWxmLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgREVGQVVMVFMsIGNvbmZpZyk7XHJzZWxmLmluaXRDb250ZW50QXJlYVdyYXBwZXIoKTtccnNlbGYuaW5pdFRvcGJhcigpO1xyc2VsZi5pbml0U2lkZWJhcigpO1xyc2VsZi5pbml0U25pcHBldHNNb2RhbCgpO1xyc2VsZi5pZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xyS0VkaXRvci5pbnN0YW5jZXNbc2VsZi5pZF0gPSBzZWxmO1xyaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMub25SZWFkeSA9PT0gJ2Z1bmN0aW9uJykge1xyc2VsZi5vcHRpb25zLm9uUmVhZHkuY2FsbChzZWxmKTtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccnNlbGYubW9kYWxUYXJnZXQgPSBudWxsO1xyc2VsZi5tb2RhbEFjdGlvbiA9IG51bGw7XHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC10aXRsZScpLmh0bWwoJycpO1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccm1vZGFsLnJlbW92ZUNsYXNzKCdzaG93ZWQnKTtcclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvc25pcHBldFR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IHNuaXBwZXRzV3JhcHBlckh0bWwgPSAnJztccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIGtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXJcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzIGtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyXCI+PC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudFwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnRcIj48L2Rpdj5ccjwvZGl2PlxyYDtccn0gZWxzZSB7XHJzbmlwcGV0c1dyYXBwZXJIdG1sID0gYFxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHNcIj48L2Rpdj5ccjwvZGl2PlxyYDtccn1ccmxldCBtb2RhbCA9IHNlbGYubW9kYWwgPSAkKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItbW9kYWxcIiBpZD1cIiR7bW9kYWxJZH1cIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWhlYWRlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxyPGg0IGNsYXNzPVwia2VkaXRvci1tb2RhbC10aXRsZVwiPjwvaDQ+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWJvZHlcIj4ke3NuaXBwZXRzV3JhcHBlckh0bWx9PC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1mb290ZXJcIj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGtlZGl0b3ItbW9kYWwtY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLXByaW1hcnkga2VkaXRvci1tb2RhbC1hZGRcIj5BZGQ8L2J1dHRvbj5ccjwvZGl2PlxyPC9kaXY+XHJgKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5zbmlwcGV0c1VybCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5zbmlwcGV0c1VybC5sZW5ndGggPiAwKSB7XHIkLmFqYXgoe1xydHlwZTogJ2dldCcsXHJkYXRhVHlwZTogJ2h0bWwnLFxydXJsOiBvcHRpb25zLnNuaXBwZXRzVXJsLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3ApIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XHJyZXNwID0gb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkLmNhbGwoc2VsZiwgcmVzcCkgfHwgcmVzcDtccn1ccnNlbGYucmVuZGVyU25pcHBldHMocmVzcCk7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9IGVsc2Uge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkFMTCk7XHJ9XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vblNuaXBwZXRzRXJyb3IuY2FsbChzZWxmLCBqcVhIUik7XHJ9XHJ9XHJ9KTtcci8vIENsb3NlIGJ1dHRvbnNccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBZGQgYnV0dG9uXHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1hZGQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNlbGVjdGVkU25pcHBldCA9IG1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRTbmlwcGV0Lmxlbmd0aCA9PT0gMCkge1xycmV0dXJuO1xyfVxybGV0IGNvbnRlbnRBcmVhID0gc2VsZi5tb2RhbFRhcmdldC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBzbmlwcGV0VHlwZSA9IHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCBzbmlwcGV0Q29udGVudEVsZW1lbnQgPSBtb2RhbC5maW5kKHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXNuaXBwZXQnKSk7XHJsZXQgc25pcHBldENvbnRlbnQgPSBzbmlwcGV0Q29udGVudEVsZW1lbnQuaHRtbCgpO1xybGV0IGlzQWRkaW5nQ29udGFpbmVyID0gZmFsc2U7XHJsZXQgaXNBZGRpbmdDb21wb25lbnQgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSBmYWxzZTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnN3aXRjaCAoc2VsZi5tb2RhbFNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJpc0FkZGluZ0NvbXBvbmVudCA9IHRydWU7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn0gZWxzZSB7XHJpZiAoc25pcHBldFR5cGUgPT09ICdjb250YWluZXInKSB7XHJpc0FkZGluZ0NvbnRhaW5lciA9IHRydWU7XHJ9IGVsc2Uge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyaWYgKHNlbGYubW9kYWxUYXJnZXQuaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyJykpIHtccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccn0gZWxzZSB7XHJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSB0cnVlO1xyfVxyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyfVxybGV0IG5ld0NvbnRhaW5lcjtccmxldCBuZXdDb21wb25lbnQ7XHJpZiAoaXNBZGRpbmdDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29tcG9uZW50KTtccmxldCBjb250YWluZXIgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccn1ccmlmIChpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke29wdGlvbnMuY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xybmV3Q29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmVxKDApLmh0bWwobmV3Q29tcG9uZW50KTtccnNlbGYubW9kYWxUYXJnZXQuYXBwZW5kKG5ld0NvbnRhaW5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccn1ccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBY3Rpb24gY2xpY2sgZm9yIHNuaXBwZXRccm1vZGFsLm9uKCdjbGljaycsICcua2VkaXRvci1zbmlwcGV0JywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmlmICghc25pcHBldC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyc25pcHBldC5wYXJlbnQoKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccnNuaXBwZXQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJ9XHJ9KTtccmxldCBjc3NUcmFuc2l0aW9uRW5kID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnO1xybW9kYWwub24oY3NzVHJhbnNpdGlvbkVuZCwgKCkgPT4ge1xyaWYgKCFtb2RhbC5oYXNDbGFzcygnc2hvd2VkJykpIHtccm1vZGFsLmNzcygnZGlzcGxheScsICdub25lJyk7XHIkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKCdvcGVuZWQtbW9kYWwnKTtccn1ccn0pO1xybW9kYWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJ9IGVsc2Uge1xyc2VsZi5lcnJvcignXCJzbmlwcGV0c1VybFwiIG11c3QgYmUgbm90IG51bGwhJyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxUaXRsZSA9ICcnO1xyc3dpdGNoIChzbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxybW9kYWxUaXRsZSA9ICdBZGQgY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxybW9kYWxUaXRsZSA9ICdBZGQgY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xybW9kYWwuZmluZChzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCcgOiAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtccn0gZWxzZSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykuZmluZCgnLmtlZGl0b3Itc25pcHBldFtkYXRhLXR5cGU9Y29udGFpbmVyXScpLmNzcygnZGlzcGxheScsIHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJ25vbmUnIDogJ2Jsb2NrJyk7XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250ZW50Jztccn1ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbChtb2RhbFRpdGxlKTtccnNlbGYubW9kYWxUYXJnZXQgPSB0YXJnZXQ7XHJzZWxmLm1vZGFsU25pcHBldFR5cGUgPSBzbmlwcGV0VHlwZTtccm1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnb3BlbmVkLW1vZGFsJyk7XHJzZXRUaW1lb3V0KCgpID0+IHtccm1vZGFsLmFkZENsYXNzKCdzaG93ZWQnKTtccn0sIDApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudCwgY29udGVudEFyZWEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi53cmFwcGVyO1xyaWYgKCFjb250ZW50QXJlYSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmNoaWxkcmVuKCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccn0gZWxzZSB7XHJpZiAoIWNvbnRlbnRBcmVhLmpxdWVyeSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoY29udGVudEFyZWEpO1xyfVxyfVxyaWYgKGNvbnRlbnRBcmVhLmxlbmd0aCA9PT0gMCkge1xyc2VsZi5lcnJvcignQ29udGVudCBhcmVhIGRvZXMgbm90IGV4aXN0IScpO1xyfVxyY29udGVudEFyZWEuaHRtbChjb250ZW50KTtccnNlbGYuaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCB0cnVlKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfWApLmNoaWxkcmVuKGAuJHtDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFfWApO1xyaWYgKGFjdGl2ZUZvcm0ubGVuZ3RoID4gMCkge1xyaWYgKGFjdGl2ZUZvcm0uaXMoYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfQ09OVEFJTkVSfWApKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uLmNhbGwoc2VsZiwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9IGVsc2Uge1xybGV0IGFjdGl2ZVR5cGUgPSBhY3RpdmVGb3JtLmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbYWN0aXZlVHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmhpZGVTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIGFjdGl2ZUZvcm0sIHNlbGYpO1xyfVxyfVxyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccnNpZGViYXIucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuU0lERUJBUl9PUEVORUQpO1xyXG59IiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXJJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXIgPSAkKGBccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJ9XCIgaWQ9XCIke3NpZGViYXJJZH1cIj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJfSEVBREVSfVwiPlxyPHNwYW4gY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJfVElUTEV9XCI+PC9zcGFuPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9DTE9TRVJ9XCI+JnRpbWVzOzwvYT5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfVwiPjwvZGl2PlxyPC9kaXY+XHJgKTtccnNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9DTE9TRVJ9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9KTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfWApO1xyc2lkZWJhckJvZHkub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnJldHVybiBmYWxzZTtccn0pO1xyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgZm9ybSA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STX0gJHtDTEFTU19OQU1FUy5TRVRUSU5HX0NPTlRBSU5FUn1cIj48L2Rpdj5gKTtccnNpZGViYXJCb2R5LmFwcGVuZChmb3JtKTtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbi5jYWxsKHNlbGYsIGZvcm0sIHNlbGYpO1xyfSBlbHNlIHtccnNlbGYuZXJyb3IoJ1wiY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvblwiIGlzIG5vdCBmdW5jdGlvbiEnKTtccn1ccn1ccnNpZGViYXIuYXBwZW5kVG8oc2VsZi53cmFwcGVyKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHIvLyBhbGVydChzZWxmLnNpZGViYXIpO1xybGV0IHNpZGViYXJUaXRsZSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9USVRMRX1gKTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfWApO1xybGV0IGFjdGl2ZUZvcm0gPSBzaWRlYmFyQm9keS5jaGlsZHJlbihgLiR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRX1gKTtccmFjdGl2ZUZvcm0ucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRSk7XHJpZiAodGFyZ2V0LmlzKGAuJHtDTEFTU19OQU1FUy5DT01QT05FTlR9YCkpIHtccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudCh0YXJnZXQpO1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKG51bGwpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUodGFyZ2V0KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyc2lkZWJhclRpdGxlLmh0bWwoY29tcG9uZW50RGF0YS5zZXR0aW5nVGl0bGUpO1xybGV0IHNldHRpbmdGb3JtQ2xhc3MgPSBgJHtDTEFTU19OQU1FUy5TRVRUSU5HfS0ke2NvbXBvbmVudFR5cGV9YDtccmxldCBzZXR0aW5nRm9ybSA9IHNpZGViYXJCb2R5LmZpbmQoYC4ke3NldHRpbmdGb3JtQ2xhc3N9YCk7XHJpZiAoc2V0dGluZ0Zvcm0ubGVuZ3RoID09PSAwKSB7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5pbml0U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccnNldHRpbmdGb3JtID0gJChgXHI8ZGl2XHJkYXRhLXR5cGU9XCIke2NvbXBvbmVudFR5cGV9XCJccmNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk19ICR7c2V0dGluZ0Zvcm1DbGFzc30gY2xlYXJmaXggJHtDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFfVwiXHI+XHI8L2Rpdj5ccmApO1xybGV0IGxvYWRpbmdUZXh0ID0gJCgnPHNwYW4gLz4nKS5odG1sKCdMb2FkaW5nLi4uJyk7XHJzaWRlYmFyQm9keS5hcHBlbmQoc2V0dGluZ0Zvcm0pO1xyc2V0dGluZ0Zvcm0uYXBwZW5kKGxvYWRpbmdUZXh0KTtccmxldCBpbml0RnVuY3Rpb24gPSBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCBzZWxmKTtcciQud2hlbihpbml0RnVuY3Rpb24pLmRvbmUoZnVuY3Rpb24gKCkge1xyc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJsb2FkaW5nVGV4dC5yZW1vdmUoKTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJ9LCAxMDApO1xyfSk7XHJ9XHJ9IGVsc2Uge1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgdGFyZ2V0LCBzZWxmKTtccn1ccnNldHRpbmdGb3JtLmFkZENsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyfVxyfSBlbHNlIHtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcih0YXJnZXQpO1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KG51bGwpO1xyc2lkZWJhclRpdGxlLmh0bWwoJ0NvbnRhaW5lciBTZXR0aW5ncycpO1xybGV0IHNldHRpbmdGb3JtID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TRVRUSU5HX0NPTlRBSU5FUn1gKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb24uY2FsbChzZWxmLCBzZXR0aW5nRm9ybSwgdGFyZ2V0LCBzZWxmKTtccn1ccnNldHRpbmdGb3JtLmFkZENsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyfVxyc2lkZWJhci5hZGRDbGFzcyhDTEFTU19OQU1FUy5TSURFQkFSX09QRU5FRCk7XHJcbn07XHJcbiIsImltcG9ydCByZW5kZXJTbmlwcGV0IGZyb20gXCIuL3JlbmRlclNuaXBwZXRcIjtcclxuaW1wb3J0IHJlbmRlclNuaXBwZXRGaWx0ZXIgZnJvbSBcIi4vcmVuZGVyU25pcHBldEZpbHRlclwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl0gPSByZW5kZXJTbmlwcGV0LmNhbGwoc2VsZiwgdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGV4dHJhRGF0YSk7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhbLi4uc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMsIC4uLnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzXSk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyJykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbCk7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudCcpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpO1xyfVxyfSBlbHNlIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKVxyfVxyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1ib2R5JykuYXBwZW5kKHNuaXBwZXRDb250ZW50SHRtbCk7XHJsZXQgZmlsdGVyVHlwZTtccmlmIChvcHRpb25zLnNuaXBwZXRzRmlsdGVyRW5hYmxlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyZmlsdGVyVHlwZSA9IHR5cGUgPT09ICdjb250YWluZXInID8gU05JUFBFVF9UWVBFLkNPTlRBSU5FUiA6IFNOSVBQRVRfVFlQRS5DT01QT05FTlQ7XHJ9IGVsc2Uge1xyZmlsdGVyVHlwZSA9IFNOSVBQRVRfVFlQRS5BTEw7XHJ9XHJ9XHJsZXQgW2NhdGVnb3JpZXNPcHRpb25zLCBzbmlwcGV0c1dyYXBwZXJdID0gcmVuZGVyU25pcHBldEZpbHRlci5jYWxsKHRoaXMsIGZpbHRlclR5cGUpO1xyc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWZpbHRlcicpLmh0bWwoY2F0ZWdvcmllc09wdGlvbnMpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgcmVuZGVyU25pcHBldEZpbHRlciBmcm9tIFwiLi9yZW5kZXJTbmlwcGV0RmlsdGVyXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgW2NhdGVnb3JpZXNPcHRpb25zLCBzbmlwcGV0c1dyYXBwZXJdID0gcmVuZGVyU25pcHBldEZpbHRlci5jYWxsKHRoaXMsIHR5cGUpO1xyc25pcHBldHNXcmFwcGVyLnByZXBlbmQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXItd3JhcHBlclwiPlxyPHNlbGVjdCBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXJcIj5cciR7Y2F0ZWdvcmllc09wdGlvbnN9XHI8L3NlbGVjdD5ccjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLXNlYXJjaFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHRvIHNlYXJjaC4uLlwiIC8+XHI8L2Rpdj5ccmApO1xybGV0IHR4dFNlYXJjaCA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1zZWFyY2gnKTtccmxldCBjYmJGaWx0ZXIgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtZmlsdGVyJyk7XHJsZXQgZG9GaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IChjYmJGaWx0ZXIudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgc2VhcmNoVGV4dCA9ICh0eHRTZWFyY2gudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgc25pcHBldHMgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5jaGlsZHJlbignLmtlZGl0b3Itc25pcHBldCcpO1xyc25pcHBldHMuZmlsdGVyKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZENhdGVnb3J5IHx8IHNlYXJjaFRleHQpIHtccnNuaXBwZXRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGRhdGFDYXRlZ29yaWVzU3RyaW5nID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgZGF0YUNhdGVnb3JpZXMgPSBkYXRhQ2F0ZWdvcmllc1N0cmluZy5zcGxpdChvcHRpb25zLnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcik7XHJsZXQgZXJyb3IgPSAwO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkpIHtccmlmICgkLmluQXJyYXkoc2VsZWN0ZWRDYXRlZ29yeSwgZGF0YUNhdGVnb3JpZXMpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccmlmIChzZWFyY2hUZXh0KSB7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ3RpdGxlJykudG9Mb3dlckNhc2UoKTtccmlmICh0aXRsZS5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSAmJiBkYXRhQ2F0ZWdvcmllc1N0cmluZy5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccnNuaXBwZXRbZXJyb3IgPT09IDAgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ25vdC1tYXRjaGVkJyk7XHJ9KTtccn0gZWxzZSB7XHJzbmlwcGV0cy5yZW1vdmVDbGFzcygnbm90LW1hdGNoZWQnKTtccn1ccn07XHJjYmJGaWx0ZXIub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmRvRmlsdGVyKCk7XHJ9KTtccmxldCB0aW1lcjtccnR4dFNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uICgpIHtccmNsZWFyVGltZW91dCh0aW1lcik7XHJ0aW1lciA9IHNldFRpbWVvdXQoZG9GaWx0ZXIsIDIwMCk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNuaXBwZXRJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IHNuaXBwZXRQcmV2aWV3SHRtbCA9IGBccjxzZWN0aW9uXHJjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0XCJccmRhdGEtc25pcHBldD1cIiMke3NuaXBwZXRJZH1cIlxyZGF0YS10eXBlPVwiJHt0eXBlfVwiXHJ0aXRsZT1cIiR7dGl0bGV9XCJccmRhdGEta2VkaXRvci1jYXRlZ29yaWVzPVwiJHtjYXRlZ29yaWVzfVwiXHI+XHI8c3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcmV2aWV3VXJsfScpXCI+PC9zcGFuPjwvc3Bhbj5ccjwvc2VjdGlvbj5ccmA7XHJsZXQgc25pcHBldENvbnRlbnRIdG1sID0gYDxzY3JpcHQgaWQ9XCIke3NuaXBwZXRJZH1cIiB0eXBlPVwidGV4dC9odG1sXCIgJHtleHRyYURhdGEuam9pbignICcpfT4ke2NvbnRlbnR9PC9zY3JpcHQ+YDtccmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzLmNvbmNhdChjYXRlZ29yaWVzKTtccn1ccnJldHVybiBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl07XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJsZXQgY2F0ZWdvcmllcztccmxldCBzbmlwcGV0c1dyYXBwZXJTZWxlY3RvcjtccnN3aXRjaCAodHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnQnO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxybGV0IGNhdGVnb3JpZXNPcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+QWxsPC9vcHRpb24+JztcciQuZWFjaChjYXRlZ29yaWVzLCBmdW5jdGlvbiAoaSwgY2F0ZWdvcnkpIHtccmNhdGVnb3JpZXNPcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtjYXRlZ29yeX1cIj4ke2NhdGVnb3J5fTwvb3B0aW9uPmA7XHJ9KTtccnJldHVybiBbXHJjYXRlZ29yaWVzT3B0aW9ucyxccm1vZGFsLmZpbmQoc25pcHBldHNXcmFwcGVyU2VsZWN0b3IpXHJdO1xyXG59O1xyXG4iLCJpbXBvcnQgcmVuZGVyU25pcHBldCBmcm9tICcuL3JlbmRlclNuaXBwZXQnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3ApIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNuaXBwZXRzQ29udGFpbmVySHRtbCA9ICcnO1xybGV0IHNuaXBwZXRzQ29tcG9uZW50SHRtbCA9ICcnO1xybGV0IHNuaXBwZXRzQ29udGVudEh0bWwgPSAnJztccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gW107XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBbXTtcciQocmVzcCkuZmlsdGVyKCdkaXYnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBjb250ZW50ID0gc25pcHBldC5odG1sKCkudHJpbSgpO1xybGV0IHByZXZpZXdVcmwgPSBzbmlwcGV0LmF0dHIoJ2RhdGEtcHJldmlldycpO1xybGV0IHR5cGUgPSBzbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItdGl0bGUnKTtccmxldCBjYXRlZ29yaWVzID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcycpIHx8ICcnO1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhzbmlwcGV0LCBbJ2RhdGEtcHJldmlldycsICdkYXRhLXR5cGUnLCAnZGF0YS1rZWRpdG9yLXRpdGxlJywgJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJ10sIHRydWUpO1xybGV0IFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXSA9IHJlbmRlclNuaXBwZXQuY2FsbChzZWxmLCB0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpO1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzbmlwcGV0c0NvbnRhaW5lckh0bWwgKz0gc25pcHBldFByZXZpZXdIdG1sO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc25pcHBldHNDb21wb25lbnRIdG1sICs9IHNuaXBwZXRQcmV2aWV3SHRtbDtccn1ccnNuaXBwZXRzQ29udGVudEh0bWwgKz0gc25pcHBldENvbnRlbnRIdG1sO1xyfSk7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhbLi4uc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMsIC4uLnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzXSk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lcicpLmh0bWwoc25pcHBldHNDb250YWluZXJIdG1sKTtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50JykuaHRtbChzbmlwcGV0c0NvbXBvbmVudEh0bWwpO1xyfSBlbHNlIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5odG1sKHNuaXBwZXRzQ29udGFpbmVySHRtbCArIHNuaXBwZXRzQ29tcG9uZW50SHRtbClccn1ccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtYm9keScpLmFwcGVuZChzbmlwcGV0c0NvbnRlbnRIdG1sKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCB0b3BiYXJDZW50ZXIgPSBzZWxmLnRvcGJhckNlbnRlcjtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGJ0bk1vYmlsZSA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdGl0bGU9XCJWaWV3IG9uIG1vYmlsZVwiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OfVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtbW9iaWxlXCI+PC9pPjwvYT5gKTtccmJ0bk1vYmlsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aE1vYmlsZSk7XHJidG5Nb2JpbGUuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyfSk7XHJsZXQgYnRuVGFibGV0ID0gJChgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB0aXRsZT1cIlZpZXcgb24gdGFibGV0XCIgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT059XCI+PGkgY2xhc3M9XCJmYSBmYS1mdyBmYS10YWJsZXRcIj48L2k+PC9hPmApO1xyYnRuVGFibGV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJ0b3BiYXJDZW50ZXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkV9YCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyc2VsZi5pZnJhbWVXcmFwcGVyLmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoVGFibGV0KTtccmJ0blRhYmxldC5hZGRDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJ9KTtccmxldCBidG5EZXNrdG9wID0gJChgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiB0aXRsZT1cIlZpZXcgb24gZGVza3RvcFwiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OfSAke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtZGVza3RvcFwiPjwvaT48L2E+YCk7XHJidG5EZXNrdG9wLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJ0b3BiYXJDZW50ZXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkV9YCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyc2VsZi5pZnJhbWVXcmFwcGVyLmNzcygnd2lkdGgnLCAnJyk7XHJidG5EZXNrdG9wLmFkZENsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccn0pO1xydG9wYmFyQ2VudGVyLmFwcGVuZChidG5Nb2JpbGUpO1xydG9wYmFyQ2VudGVyLmFwcGVuZChidG5UYWJsZXQpO1xydG9wYmFyQ2VudGVyLmFwcGVuZChidG5EZXNrdG9wKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCB0b3BiYXJJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJzZWxmLnRvcGJhciA9ICQoYFxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSfVwiIGlkPVwiJHt0b3BiYXJJZH1cIj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9MRUZUfVwiPlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX1RJVExFfVwiIHRpdGxlPVwiJHtvcHRpb25zLnRpdGxlfVwiPiR7b3B0aW9ucy50aXRsZX08L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0NFTlRFUn1cIj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX1JJR0hUfVwiPlxyPC9kaXY+XHI8L2Rpdj5ccmApO1xyc2VsZi50b3BiYXJMZWZ0ID0gc2VsZi50b3BiYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuVE9QQkFSX0xFRlR9YCk7XHJzZWxmLnRvcGJhckNlbnRlciA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9DRU5URVJ9YCk7XHJzZWxmLnRvcGJhclJpZ2h0ID0gc2VsZi50b3BiYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuVE9QQkFSX1JJR0hUfWApO1xyc2VsZi50b3BiYXIuYXBwZW5kVG8oc2VsZi53cmFwcGVyKTtccnNlbGYuaW5pdERldmljZVN3aXRjaGVyKCk7XHJzZWxmLmluaXRUb3BiYXJSaWdodEFjdGlvbnMoKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gXCIuLi9jb25zdGFudHMvY2xhc3NOYW1lc1wiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgdG9wYmFyUmlnaHQgPSBzZWxmLnRvcGJhclJpZ2h0O1xybGV0IGJ0blNhdmUgPSAkKGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHRpdGxlPVwiU2F2ZVwiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OfVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtc2F2ZVwiPjwvaT48L2E+YCk7XHJidG5TYXZlLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgY29udGVudCA9IHNlbGYuZ2V0Q29udGVudCh0cnVlKTtccnR5cGVvZiBvcHRpb25zLm9uU2F2ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBvcHRpb25zLm9uU2F2ZS5jYWxsKHNlbGYsIGNvbnRlbnQpO1xyfSk7XHJ0b3BiYXJSaWdodC5hcHBlbmQoYnRuU2F2ZSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjYXRlZ29yaWVzKSB7XHJsZXQgbmV3QXJyYXkgPSBbXTtccmZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xybGV0IGNhdGVnb3J5ID0gY2F0ZWdvcmllc1tpXSB8fCAnJztccmlmIChjYXRlZ29yeSAhPT0gJycgJiYgJC5pbkFycmF5KGNhdGVnb3J5LCBuZXdBcnJheSkgPT09IC0xKSB7XHJuZXdBcnJheS5wdXNoKGNhdGVnb3J5KTtccn1ccn1ccnJldHVybiBuZXdBcnJheS5zb3J0KCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCB0aW1lc3RhbXAgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xybGV0IHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk4NzY1NDMyMTApO1xycmV0dXJuIGBrZWRpdG9yLXVpLSR7dGltZXN0YW1wfSR7cmFuZG9tfWA7XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2V0dGluZ0J0biA9ICcnO1xyaWYgKCFvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmxldCB0b29sYmFyQ2xhc3MgPSAnJztccnN3aXRjaCAodHlwZSkge1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQTpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyJztccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVDpccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQ6XHJ0b29sYmFyQ2xhc3MgPSAna2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJztccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkgJHt0b29sYmFyQ2xhc3N9XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250ZW50XCIgdGl0bGU9XCJBZGQgY29udGVudFwiPiR7b3B0aW9ucy5idG5BZGRDb250ZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn1ccnN3aXRjaCAodHlwZSkge1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQTpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250ZW50LWFyZWEtdG9vbGJhclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgY29udGFpbmVyXCI+JHtvcHRpb25zLmJ0bkFkZENvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVI6XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbnRhaW5lclRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbnRhaW5lclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb250YWluZXJUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVI6XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbnRhaW5lclRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbnRhaW5lciBrZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb250YWluZXJUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXIga2VkaXRvci1idG4tZ3JvdXBcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRhaW5lclwiIHRpdGxlPVwiQWRkIHN1Yi1jb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkU3ViQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb21wb25lbnRcIiB0aXRsZT1cIkFkZCBjb21wb25lbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb21wb25lbnRcIiB0aXRsZT1cIkFkZCBjb21wb25lbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTVBPTkVOVDpccmlmIChpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbXBvbmVudFRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbXBvbmVudFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb21wb25lbnRUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3Rvcikge1xybGV0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtccmxldCBjbG9zZXN0ID0gdGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyaWYgKHRhcmdldC5pcyhzZWxlY3RvcikpIHtccnJldHVybiB0YXJnZXQ7XHJ9IGVsc2UgaWYgKGNsb3Nlc3QubGVuZ3RoID4gMCkge1xycmV0dXJuIGNsb3Nlc3Q7XHJ9IGVsc2Uge1xycmV0dXJuIG51bGw7XHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IGlzQXJyYXkgPyBbXSA6IHt9O1xyaWYgKCFpZ25vcmVBdHRyaWJ1dGVzKSB7XHJpZ25vcmVBdHRyaWJ1dGVzID0gW107XHJ9XHIkLmVhY2godGFyZ2V0LmdldCgwKS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoaSwgYXR0cikge1xyaWYgKGF0dHIubmFtZS5pbmRleE9mKCdkYXRhLScpID09PSAwICYmICQuaW5BcnJheShhdHRyLm5hbWUsIGlnbm9yZUF0dHJpYnV0ZXMpID09PSAtMSkge1xyaWYgKGlzQXJyYXkpIHtccmRhdGFBdHRyaWJ1dGVzLnB1c2goYCR7YXR0ci5uYW1lfT1cIiR7YXR0ci52YWx1ZX1cImApO1xyfSBlbHNlIHtccmRhdGFBdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xyfVxyfVxyfSk7XHJyZXR1cm4gZGF0YUF0dHJpYnV0ZXM7XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9