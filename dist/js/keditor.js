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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, target, isExisting) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('convertToComponent', contentArea, container, target, isExisting);

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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('deleteComponent', component);
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (component) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('getComponentContent');
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
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/error */ "./src/keditor/utils/error.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


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
      Object(_utils_error__WEBPACK_IMPORTED_MODULE_0__["default"])('Component type is undefined!');
    }

    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])("Fallback to defaultComponentType: ".concat(componentType));
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, component) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('initComponent', contentArea, container, component);
  var self = this;
  var options = self.options;
  var body = self.body;

  if (!component.hasClass('keditor-initialized-component') || !component.hasClass('keditor-initializing-component')) {
    component.addClass('keditor-initializing-component');
    component.attr('id', self.generateId('component'));

    if (typeof options.onBeforeInitComponent === 'function') {
      options.onBeforeInitComponent.call(self, component, contentArea);
    }

    var componentContent = component.children('.keditor-component-content');
    componentContent.attr('id', self.generateId('component-content'));
    var componentType = self.getComponentType(component);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])("Component type: ".concat(componentType));
    var componentData = KEditor.components[componentType];
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Render KEditor toolbar for component', component);
    component.append(self.generateToolbar(_constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].COMPONENT, componentData.settingEnabled));
    component.find('[data-dynamic-href]').each(function () {
      var dynamicElement = $(this);
      self.initDynamicContent(dynamicElement);
    });

    if (typeof componentData.init === 'function') {
      componentData.init.call(componentData, contentArea, container, component, self);
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])("\"init\" function of component type \"".concat(componentType, "\" does not exist"));
    }

    if (typeof options.onInitComponent === 'function') {
      options.onInitComponent.call(self, component, contentArea);
    }

    component.addClass('keditor-initialized-component');
    component.removeClass('keditor-initializing-component');
  } else {
    if (component.hasClass('keditor-initialized-component')) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Component is already initialized!');
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Component is initializing...');
    }
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (dynamicElement) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('initDynamicContent', dynamicElement);
  var self = this;
  var options = self.options;
  var component = dynamicElement.closest('.keditor-component');
  var contentArea = dynamicElement.closest('.keditor-content-area');
  dynamicElement.attr('id', self.generateId('dynamic-element'));

  if (typeof options.onBeforeDynamicContentLoad === 'function') {
    options.onBeforeDynamicContentLoad.call(self, dynamicElement, component, contentArea);
  }

  var dynamicHref = dynamicElement.attr('data-dynamic-href');
  var data = self.getDataAttributes(component, ['data-type', 'data-dynamic-href'], false);
  data = $.param(data);
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])("Dynamic href: ".concat(dynamicHref, ", Data: ").concat(data));
  return $.ajax({
    url: dynamicHref,
    data: data,
    type: 'GET',
    dataType: 'HTML',
    success: function success(response, status, xhr) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Dynamic content is loaded', dynamicElement, response, status, xhr);
      dynamicElement.html(response);

      if (typeof options.onDynamicContentLoaded === 'function') {
        options.onDynamicContentLoaded.call(self, dynamicElement, response, status, xhr, contentArea);
      }
    },
    error: function error(response, status, xhr) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Error when loading dynamic content', dynamicElement, response, status, xhr);

      if (typeof options.onDynamicContentError === 'function') {
        options.onDynamicContentError.call(self, dynamicElement, response, status, xhr, contentArea);
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
var PREFIX_CLASS = 'keditor-';
/* harmony default export */ __webpack_exports__["default"] = ({
  UI: "".concat(PREFIX_CLASS, "ui"),
  HIDDEN_ELEMENT: "".concat(PREFIX_CLASS, "hidden-element"),
  CLICKS_INITIALIZED: "".concat(PREFIX_CLASS, "clicks-initialized"),
  CONTENT_AREAS_WRAPPER: "".concat(PREFIX_CLASS, "content-areas-wrapper")
});

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
  nestedContainerEnabled: true,
  explicitSnippetEnabled: false,
  containerForQuickAddComponent: "\n<div class=\"row\">\n<div class=\"col-sm-12\" data-type=\"container-content\">\n</div>\n</div>\n",
  btnAddContentText: '<i class="fa fa-plus"></i>',
  btnAddContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
  btnAddSubContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
  btnAddComponentText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-list-ul"></i>',
  btnMoveContainerText: '<i class="fa fa-sort"></i>',
  btnMoveComponentText: '<i class="fa fa-arrows"></i>',
  btnSettingContainerText: '<i class="fa fa-cog"></i>',
  btnSettingComponentText: '<i class="fa fa-cog"></i>',
  btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
  btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
  btnDeleteContainerText: '<i class="fa fa-times"></i>',
  btnDeleteComponentText: '<i class="fa fa-times"></i>',
  confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',
  confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',
  defaultComponentType: 'blank',
  snippetsUrl: 'snippets/snippets.html',
  snippetsFilterEnabled: true,
  snippetsCategoriesSeparator: ';',
  iframeMode: false,
  contentStyles: [],
  contentAreasSelector: null,
  contentAreasWrapper: "<div class=\"".concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREAS_WRAPPER, "\"></div>"),
  containerSettingEnabled: false,
  containerSettingInitFunction: null,
  containerSettingShowFunction: null,
  containerSettingHideFunction: null,
  onReady: function onReady() {},
  onSnippetsLoaded: function onSnippetsLoaded(modal) {},
  onSnippetsError: function onSnippetsError(modal, error) {},
  onInitIframe: function onInitIframe(iframe, iframeHead, iframeBody) {},
  onContentChanged: function onContentChanged(event, contentArea) {},
  onBeforeInitContentArea: function onBeforeInitContentArea(contentArea) {},
  onInitContentArea: function onInitContentArea(contentArea) {},
  onBeforeInitContainer: function onBeforeInitContainer(container, contentArea) {},
  onInitContainer: function onInitContainer(container, contentArea) {},
  onBeforeContainerDeleted: function onBeforeContainerDeleted(event, selectedContainer, contentArea) {},
  onContainerDeleted: function onContainerDeleted(event, selectedContainer, contentArea) {},
  onContainerChanged: function onContainerChanged(event, changedContainer, contentArea) {},
  onContainerDuplicated: function onContainerDuplicated(event, originalContainer, newContainer, contentArea) {},
  onContainerSelected: function onContainerSelected(event, selectedContainer, contentArea) {},
  onContainerSnippetAdded: function onContainerSnippetAdded(event, newContainer, selectedSnippet, contentArea) {},
  onComponentReady: function onComponentReady(component) {},
  onBeforeInitComponent: function onBeforeInitComponent(component, contentArea) {},
  onInitComponent: function onInitComponent(component, contentArea) {},
  onBeforeComponentDeleted: function onBeforeComponentDeleted(event, selectedComponent, contentArea) {},
  onComponentDeleted: function onComponentDeleted(event, selectedComponent, contentArea) {},
  onComponentChanged: function onComponentChanged(event, changedComponent, contentArea) {},
  onComponentDuplicated: function onComponentDuplicated(event, originalComponent, newComponent, contentArea) {},
  onComponentSelected: function onComponentSelected(event, selectedComponent, contentArea) {},
  onComponentSnippetAdded: function onComponentSnippetAdded(event, newComponent, selectedSnippet, contentArea) {},
  onBeforeDynamicContentLoad: function onBeforeDynamicContentLoad(dynamicElement, component, contentArea) {},
  onDynamicContentLoaded: function onDynamicContentLoaded(dynamicElement, response, status, xhr, contentArea) {},
  onDynamicContentError: function onDynamicContentError(dynamicElement, response, status, xhr, contentArea) {}
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, target) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('convertToContainer', contentArea, target);
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (container, isNested) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])("getContainerContent - isNested=".concat(isNested), container);
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container) {
  var self = this;
  var options = self.options;
  var isNested = options.nestedContainerEnabled && container.closest('[data-type="container-content"]').length > 0;
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])("initContainer - isNested=".concat(isNested), contentArea, container);

  if (!container.hasClass('keditor-initialized-container') || !container.hasClass('keditor-initializing-container')) {
    container.addClass('keditor-initializing-container');

    if (typeof options.onBeforeInitContainer === 'function') {
      options.onBeforeInitContainer.call(self, container, contentArea);
    }

    if (isNested) {
      container.addClass('keditor-sub-container');
    }

    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Render KEditor toolbar for container', container);
    container.append(self.generateToolbar(isNested ? _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].SUB_CONTAINER : _constants_toolbarType__WEBPACK_IMPORTED_MODULE_0__["default"].CONTAINER));
    container.attr('id', self.generateId(isNested ? 'sub-container' : 'container'));
    var containerContents = container.find('[data-type="container-content"]');
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])("Initialize ".concat(containerContents.length, " container content(s)"));
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
  } else {
    if (container.hasClass('keditor-initialized-container')) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Container is already initialized!');
    } else {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Container is initializing...');
    }
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");



/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, container, containerContent, isNested) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])("initContainerContent - isNested=".concat(isNested), contentArea, container, containerContent);
  var self = this;
  var options = self.options;
  containerContent.addClass('keditor-container-content');

  if (isNested) {
    containerContent.addClass('keditor-sub-container-content');
  }

  containerContent.attr('id', self.generateId('container-content'));
  var containerContentInner = $('<div class="keditor-container-content-inner"></div>');
  containerContentInner.html(containerContent.html());
  containerContent.html(containerContentInner);
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Initialize toolbar for container content');
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

  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Initialize $.fn.sortable for container content');
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
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('On received snippet', event, ui);
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
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Initialize existing components inside container content');
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");



/* harmony default export */ __webpack_exports__["default"] = (function (contentArea, dontInitToolbar) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('initContentArea', contentArea);
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

  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Initialize $.fn.sortable for content area');
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
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('On received snippet', event, ui);
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
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Initialize existing containers in content area');
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

/***/ "./src/keditor/contentArea/initContentAreas.js":
/*!*****************************************************!*\
  !*** ./src/keditor/contentArea/initContentAreas.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('initContentAreas');
  var self = this;
  var contentAreasWrapper = self.contentAreasWrapper;
  var options = self.options;
  var contentAreas;

  if (options.contentAreasSelector) {
    contentAreas = contentAreasWrapper.find(options.contentAreasSelector);
  }

  if (!contentAreas || contentAreas.length === 0) {
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Do not find any content area. Creating default content area...');
    var originalContent = contentAreasWrapper.html();
    contentAreas = $('<div />').html(originalContent);
    contentAreasWrapper.empty().append(contentAreas);
  }

  contentAreas.each(function () {
    var contentArea = $(this);

    if (!contentArea.attr('id')) {
      contentArea.attr('id', self.generateId('content-area'));
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

  if (self.options.iframeMode) {
    self.iframeWrapper.remove();
  } else {
    self.contentAreasWrapper.remove();
  }

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

/***/ "./src/keditor/iframe/initIframe.js":
/*!******************************************!*\
  !*** ./src/keditor/iframe/initIframe.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var element = self.element;
  var originalContent = element.is('textarea') ? element.val() : element.html();
  var wrapper = self.iframeWrapper = $('<div class="keditor-ui keditor-iframe-wrapper"></div>');
  var iframe = self.iframe = $('<iframe class="keditor-ui keditor-iframe"></iframe>');
  element.after(wrapper);
  wrapper.attr('id', self.generateId('iframe-wrapper')).append(iframe);
  element.addClass('keditor-hidden-element');
  var iframeDoc = self.iframeDoc = iframe.contents(); // Fix issue Firefox can't render content inside iframe
  // ======================================================

  iframeDoc.get(0).open();
  iframeDoc.get(0).close(); // ======================================================

  self.window = iframe[0].contentWindow ? iframe[0].contentWindow : iframe[0].contentDocument.defaultView;
  var iframeHead = self.iframeHead = iframeDoc.find('head');
  var iframeBody = self.iframeBody = self.body = iframeDoc.find('body');
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Adding styles to iframe...');
  var styles = '';
  $('[data-type="keditor-style"]').each(function () {
    var style = $(this);
    var href = style.attr('href') || style.attr('data-href') || '';

    if (href) {
      styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(href, "\" />\n");
    } else {
      styles += "<style type=\"text/css\">".concat(style.html(), "</style>\n");
    }
  });

  if (options.contentStyles && $.isArray(options.contentStyles)) {
    $.each(options.contentStyles, function (i, style) {
      var idStr = '';

      if (style.id) {
        idStr = " id=\"".concat(style.id, "\" ");
      }

      if (style.href) {
        styles += "<link rel=\"stylesheet\" type=\"text/css\" href=\"".concat(style.href, "\" ").concat(idStr, " />\n");
      } else {
        styles += "<style type=\"text/css\" ".concat(idStr, ">").concat(style.content, "</style>\n");
      }
    });
  }

  iframeHead.append(styles);
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Adding original content to iframe...');
  var contentAreasWrapper = self.generateContentAreasWrapper(originalContent);
  iframeBody.append(contentAreasWrapper);
  self.contentAreasWrapper = contentAreasWrapper;

  if (typeof options.onInitIframe === 'function') {
    options.onInitIframe.call(self, iframe, iframeHead, iframeBody);
  }
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (iframe, wrapper) {
  if (!wrapper) {
    iframe.wrap('<div class="keditor-iframe-wrapper-fake"></div>');
    wrapper = iframe.parent();
  }

  wrapper.addClass('keditor-iframe-wrapper');
  var cover = $('<div class="keditor-iframe-cover"></div>');
  wrapper.prepend(cover);
  wrapper.on('mouseleave', function () {
    wrapper.removeClass('hidden-cover');
  });
  cover.on('dblclick', function (e) {
    e.preventDefault();
    wrapper.addClass('hidden-cover');
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
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/error */ "./src/keditor/utils/error.js");
/* harmony import */ var _utils_generateId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/generateId */ "./src/keditor/utils/generateId.js");
/* harmony import */ var _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/generateToolbar */ "./src/keditor/utils/generateToolbar.js");
/* harmony import */ var _utils_generateContentAreasWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/generateContentAreasWrapper */ "./src/keditor/utils/generateContentAreasWrapper.js");
/* harmony import */ var _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/beautifyCategories */ "./src/keditor/utils/beautifyCategories.js");
/* harmony import */ var _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/getDataAttributes */ "./src/keditor/utils/getDataAttributes.js");
/* harmony import */ var _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/getClickedElement */ "./src/keditor/utils/getClickedElement.js");
/* harmony import */ var _utils_initKEditorClicks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/initKEditorClicks */ "./src/keditor/utils/initKEditorClicks.js");
/* harmony import */ var _iframe_initIframe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./iframe/initIframe */ "./src/keditor/iframe/initIframe.js");
/* harmony import */ var _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./iframe/initIframeCover */ "./src/keditor/iframe/initIframeCover.js");
/* harmony import */ var _sidebar_initSidebar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/initSidebar */ "./src/keditor/sidebar/initSidebar.js");
/* harmony import */ var _sidebar_openSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sidebar/openSidebar */ "./src/keditor/sidebar/openSidebar.js");
/* harmony import */ var _sidebar_closeSidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidebar/closeSidebar */ "./src/keditor/sidebar/closeSidebar.js");
/* harmony import */ var _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./snippet/renderSnippets */ "./src/keditor/snippet/renderSnippets.js");
/* harmony import */ var _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./snippet/initSnippetsFilter */ "./src/keditor/snippet/initSnippetsFilter.js");
/* harmony import */ var _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modal/initSnippetsModal */ "./src/keditor/modal/initSnippetsModal.js");
/* harmony import */ var _modal_openModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/openModal */ "./src/keditor/modal/openModal.js");
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/closeModal */ "./src/keditor/modal/closeModal.js");
/* harmony import */ var _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./contentArea/initContentAreas */ "./src/keditor/contentArea/initContentAreas.js");
/* harmony import */ var _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contentArea/initContentArea */ "./src/keditor/contentArea/initContentArea.js");
/* harmony import */ var _container_convertToContainer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./container/convertToContainer */ "./src/keditor/container/convertToContainer.js");
/* harmony import */ var _container_initContainer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./container/initContainer */ "./src/keditor/container/initContainer.js");
/* harmony import */ var _container_initContainerContent__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./container/initContainerContent */ "./src/keditor/container/initContainerContent.js");
/* harmony import */ var _container_getContainerContent__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./container/getContainerContent */ "./src/keditor/container/getContainerContent.js");
/* harmony import */ var _component_getComponentType__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/getComponentType */ "./src/keditor/component/getComponentType.js");
/* harmony import */ var _component_convertToComponent__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/convertToComponent */ "./src/keditor/component/convertToComponent.js");
/* harmony import */ var _component_initComponent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/initComponent */ "./src/keditor/component/initComponent.js");
/* harmony import */ var _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./component/initDynamicContent */ "./src/keditor/component/initDynamicContent.js");
/* harmony import */ var _component_deleteComponent__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./component/deleteComponent */ "./src/keditor/component/deleteComponent.js");
/* harmony import */ var _component_getComponentContent__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./component/getComponentContent */ "./src/keditor/component/getComponentContent.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./init */ "./src/keditor/init.js");
/* harmony import */ var _destroy__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./destroy */ "./src/keditor/destroy.js");
/* harmony import */ var _getContent__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./getContent */ "./src/keditor/getContent.js");
/* harmony import */ var _setContent__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./setContent */ "./src/keditor/setContent.js");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../styles/keditor.less */ "./src/styles/keditor.less");
/* harmony import */ var _styles_keditor_less__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_less__WEBPACK_IMPORTED_MODULE_37__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






































 // Check dependencies

if (!jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn.sortable) {
  Object(_utils_error__WEBPACK_IMPORTED_MODULE_3__["default"])('$.fn.sortable does not exist. Please import $.fn.sortable into your document for continue using KEditor.');
} // KEditor class


var KEditor =
/*#__PURE__*/
function () {
  _createClass(KEditor, null, [{
    key: "log",
    value: function log() {
      _utils_log__WEBPACK_IMPORTED_MODULE_2__["default"].apply(void 0, arguments);
    }
  }, {
    key: "error",
    value: function error() {
      _utils_error__WEBPACK_IMPORTED_MODULE_3__["default"].apply(void 0, arguments);
    }
  }, {
    key: "init",
    value: function init(target, config) {
      return new KEditor(target, config);
    }
  }]);

  function KEditor(target, config) {
    _classCallCheck(this, KEditor);

    return _init__WEBPACK_IMPORTED_MODULE_33__["default"].apply(this, [target, config]);
  }

  _createClass(KEditor, [{
    key: "generateId",
    value: function generateId(type) {
      return _utils_generateId__WEBPACK_IMPORTED_MODULE_4__["default"].apply(this, [type]);
    }
  }, {
    key: "generateContentAreasWrapper",
    value: function generateContentAreasWrapper(content) {
      return _utils_generateContentAreasWrapper__WEBPACK_IMPORTED_MODULE_6__["default"].apply(this, [content]);
    }
  }, {
    key: "generateToolbar",
    value: function generateToolbar(type, isComponentConfigurable) {
      return _utils_generateToolbar__WEBPACK_IMPORTED_MODULE_5__["default"].apply(this, [type, isComponentConfigurable]);
    }
  }, {
    key: "beautifyCategories",
    value: function beautifyCategories(categories) {
      return _utils_beautifyCategories__WEBPACK_IMPORTED_MODULE_7__["default"].apply(this, [categories]);
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
      return _utils_getDataAttributes__WEBPACK_IMPORTED_MODULE_8__["default"].apply(this, [target, ignoreAttributes, isArray]);
    }
  }, {
    key: "getComponentType",
    value: function getComponentType(component) {
      return _component_getComponentType__WEBPACK_IMPORTED_MODULE_27__["default"].apply(this, [component]);
    }
  }, {
    key: "getClickedElement",
    value: function getClickedElement(event, selector) {
      return _utils_getClickedElement__WEBPACK_IMPORTED_MODULE_9__["default"].apply(this, [event, selector]);
    } // Iframe
    //---------------------------------

  }, {
    key: "initIframe",
    value: function initIframe() {
      return _iframe_initIframe__WEBPACK_IMPORTED_MODULE_11__["default"].apply(this);
    }
  }, {
    key: "initIframeCover",
    value: function initIframeCover(iframe, wrapper) {
      return _iframe_initIframeCover__WEBPACK_IMPORTED_MODULE_12__["default"].apply(this, [iframe, wrapper]);
    } // KEditor clicks
    //---------------------------------

  }, {
    key: "initKEditorClicks",
    value: function initKEditorClicks() {
      return _utils_initKEditorClicks__WEBPACK_IMPORTED_MODULE_10__["default"].apply(this);
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
      return _snippet_renderSnippets__WEBPACK_IMPORTED_MODULE_16__["default"].apply(this, [resp]);
    }
  }, {
    key: "initSnippetsFilter",
    value: function initSnippetsFilter(type) {
      return _snippet_initSnippetsFilter__WEBPACK_IMPORTED_MODULE_17__["default"].apply(this, [type]);
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
    key: "initContentAreas",
    value: function initContentAreas() {
      return _contentArea_initContentAreas__WEBPACK_IMPORTED_MODULE_21__["default"].apply(this);
    }
  }, {
    key: "initContentArea",
    value: function initContentArea(contentArea, dontInitToolbar) {
      return _contentArea_initContentArea__WEBPACK_IMPORTED_MODULE_22__["default"].apply(this, [contentArea, dontInitToolbar]);
    } // Containers
    //---------------------------------

  }, {
    key: "convertToContainer",
    value: function convertToContainer(contentArea, target) {
      return _container_convertToContainer__WEBPACK_IMPORTED_MODULE_23__["default"].apply(this, [contentArea, target]);
    }
  }, {
    key: "initContainer",
    value: function initContainer(contentArea, container) {
      return _container_initContainer__WEBPACK_IMPORTED_MODULE_24__["default"].apply(this, [contentArea, container]);
    }
  }, {
    key: "initContainerContent",
    value: function initContainerContent(contentArea, container, containerContent, isNested) {
      return _container_initContainerContent__WEBPACK_IMPORTED_MODULE_25__["default"].apply(this, [contentArea, container, containerContent, isNested]);
    } // Components
    //---------------------------------

  }, {
    key: "convertToComponent",
    value: function convertToComponent(contentArea, container, target, isExisting) {
      return _component_convertToComponent__WEBPACK_IMPORTED_MODULE_28__["default"].apply(this, [contentArea, container, target, isExisting]);
    }
  }, {
    key: "initComponent",
    value: function initComponent(contentArea, container, component) {
      return _component_initComponent__WEBPACK_IMPORTED_MODULE_29__["default"].apply(this, [contentArea, container, component]);
    }
  }, {
    key: "initDynamicContent",
    value: function initDynamicContent(dynamicElement) {
      return _component_initDynamicContent__WEBPACK_IMPORTED_MODULE_30__["default"].apply(this, [dynamicElement]);
    }
  }, {
    key: "deleteComponent",
    value: function deleteComponent(component) {
      return _component_deleteComponent__WEBPACK_IMPORTED_MODULE_31__["default"].apply(this, [component]);
    } // Get content
    //---------------------------------

  }, {
    key: "getComponentContent",
    value: function getComponentContent(component) {
      return _component_getComponentContent__WEBPACK_IMPORTED_MODULE_32__["default"].apply(this, [component]);
    }
  }, {
    key: "getContainerContent",
    value: function getContainerContent(container, isNested) {
      return _container_getContainerContent__WEBPACK_IMPORTED_MODULE_26__["default"].apply(this, [container, isNested]);
    }
  }, {
    key: "getContent",
    value: function getContent(inArray) {
      return _getContent__WEBPACK_IMPORTED_MODULE_35__["default"].apply(this, [inArray]);
    } // Set content
    //---------------------------------

  }, {
    key: "setContent",
    value: function setContent(content, contentArea) {
      return _setContent__WEBPACK_IMPORTED_MODULE_36__["default"].apply(this, [content, contentArea]);
    } // Destroy
    //---------------------------------

  }, {
    key: "destroy",
    value: function destroy() {
      return _destroy__WEBPACK_IMPORTED_MODULE_34__["default"].apply(this);
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
/* harmony import */ var _constants_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/classNames */ "./src/keditor/constants/classNames.js");


/* harmony default export */ __webpack_exports__["default"] = (function (target, config) {
  var self = this;
  var element = self.element = target;
  var options = self.options = $.extend({}, _constants_defaults__WEBPACK_IMPORTED_MODULE_0__["default"], config);

  if (options.iframeMode) {
    self.initIframe();
  } else {
    self.window = window;
    self.body = $(document.body);
    var originalContent = element.val() || element.html() || '';
    var contentAreasWrapper = self.generateContentAreasWrapper(originalContent);

    if (element.is('textarea')) {
      element.after(contentAreasWrapper);
      element.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].HIDDEN_ELEMENT);
    } else {
      element.empty().append(contentAreasWrapper);
    }

    self.contentAreasWrapper = contentAreasWrapper;
  }

  self.initSidebar();
  self.initSnippetsModal();
  self.initContentAreas();

  if (!self.body.hasClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_1__["default"].CLICKS_INITIALIZED)) {
    self.initKEditorClicks();
  }

  self.id = self.generateId();
  KEditor.instances[self.id] = self;

  if (typeof options.onReady === 'function') {
    options.onReady.call(self);
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
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/error */ "./src/keditor/utils/error.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var modalId = self.generateId('modal');
  var snippetsWrapperHtml = '';

  if (options.explicitSnippetEnabled) {
    snippetsWrapperHtml = "\n<div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-container\">\n<div class=\"keditor-snippets keditor-snippets-container\"></div>\n</div>\n<div class=\"keditor-snippets-wrapper keditor-snippets-wrapper-component\">\n<div class=\"keditor-snippets keditor-snippets-component\"></div>\n</div>\n";
  } else {
    snippetsWrapperHtml = "\n<div class=\"keditor-snippets-wrapper\">\n<div class=\"keditor-snippets\"></div>\n</div>\n";
  }

  var modal = self.modal = $("\n<div class=\"keditor-ui keditor-modal\" id=\"".concat(modalId, "\">\n<div class=\"keditor-modal-header\">\n<button type=\"button\" class=\"keditor-modal-close\">&times;</button>\n<h4 class=\"keditor-modal-title\"></h4>\n</div>\n<div class=\"keditor-modal-body\">").concat(snippetsWrapperHtml, "</div>\n<div class=\"keditor-modal-footer\">\n<button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-default keditor-modal-close\">Close</button>\n<button type=\"button\" class=\"keditor-ui keditor-btn keditor-btn-primary keditor-modal-add\">Add</button>\n</div>\n</div>\n"));

  if (typeof options.snippetsUrl === 'string' && options.snippetsUrl.length > 0) {
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])("Getting snippets form \"".concat(options.snippetsUrl, "\"..."));
    $.ajax({
      type: 'get',
      dataType: 'html',
      url: options.snippetsUrl,
      success: function success(resp) {
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Success in getting snippets');

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
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_2__["default"])('Error when getting snippets', jqXHR);

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
    Object(_utils_error__WEBPACK_IMPORTED_MODULE_1__["default"])('"snippetsUrl" must be not null!');
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


/* harmony default export */ __webpack_exports__["default"] = (function (target, snippetType) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('openModal', target, snippetType);
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
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/error */ "./src/keditor/utils/error.js");

/* harmony default export */ __webpack_exports__["default"] = (function (content, contentArea) {
  var self = this;
  var contentAreasWrapper = self.contentAreasWrapper;

  if (!contentArea) {
    contentArea = contentAreasWrapper.children('.keditor-content-area');
  } else {
    if (!contentArea.jquery) {
      contentArea = contentAreasWrapper.find(contentArea);
    }
  }

  if (contentArea.length === 0) {
    Object(_utils_error__WEBPACK_IMPORTED_MODULE_0__["default"])('Content area does not exist!');
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var sidebar = self.sidebar;
  var activeForm = sidebar.find('.keditor-sidebar-body').children('.active');

  if (activeForm.length > 0) {
    if (activeForm.is('.keditor-container-setting')) {
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

    activeForm.removeClass('active');
  }

  self.setSettingComponent(null);
  self.setSettingContainer(null);
  sidebar.removeClass('opened');
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
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/error */ "./src/keditor/utils/error.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


/* harmony default export */ __webpack_exports__["default"] = (function () {
  var self = this;
  var options = self.options;
  var sidebarId = self.generateId('sidebar');
  var sidebar = self.sidebar = $("\n<div class=\"keditor-ui keditor-sidebar\" id=\"".concat(sidebarId, "\">\n<div class=\"keditor-ui keditor-sidebar-header\">\n<span class=\"keditor-ui keditor-sidebar-title\"></span>\n<a href=\"javascript:void(0);\" class=\"keditor-ui keditor-sidebar-close\">&times;</a>\n</div>\n<div class=\"keditor-ui keditor-sidebar-body\"></div>\n</div>\n"));
  sidebar.find('.keditor-sidebar-close').on('click', function (e) {
    e.preventDefault();
    self.closeSidebar();
  });
  var sidebarBody = sidebar.find('.keditor-sidebar-body');
  sidebarBody.on('submit', 'form', function (e) {
    e.preventDefault();
    return false;
  });

  if (options.containerSettingEnabled === true) {
    if (typeof options.containerSettingInitFunction === 'function') {
      var form = $('<div  class="keditor-ui keditor-setting-form keditor-container-setting"></div>');
      sidebarBody.append(form);
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Initialize container setting panel');
      options.containerSettingInitFunction.call(self, form, self);
    } else {
      Object(_utils_error__WEBPACK_IMPORTED_MODULE_0__["default"])('"containerSettingInitFunction" is not function!');
    }
  }

  sidebar.appendTo(options.iframeMode ? self.iframeWrapper : self.body);
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function (target) {
  var self = this;
  var options = self.options;
  var sidebar = self.sidebar;
  var sidebarTitle = sidebar.find('.keditor-sidebar-title');
  var sidebarBody = sidebar.find('.keditor-sidebar-body');
  var activeForm = sidebarBody.children('.active');
  activeForm.removeClass('active');

  if (target.is('.keditor-component')) {
    self.setSettingComponent(target);
    self.setSettingContainer(null);
    var componentType = self.getComponentType(target);
    var componentData = KEditor.components[componentType];
    sidebarTitle.html(componentData.settingTitle);
    var settingForm = sidebarBody.find(".keditor-setting-".concat(componentType));

    if (settingForm.length === 0) {
      var _componentData = KEditor.components[componentType];

      if (typeof _componentData.initSettingForm === 'function') {
        settingForm = $("\n<div\ndata-type=\"".concat(componentType, "\"\nclass=\"keditor-ui keditor-setting-form keditor-setting-").concat(componentType, " clearfix active\"\n>\n</div>\n"));
        var loadingText = $('<span />').html('Loading...');
        sidebarBody.append(settingForm);
        settingForm.append(loadingText);

        var initFunction = _componentData.initSettingForm.call(_componentData, settingForm, self);

        $.when(initFunction).done(function () {
          Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])("Initialized setting form for component type \"".concat(componentType, "\""));
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

      settingForm.addClass('active');
    }
  } else {
    self.setSettingContainer(target);
    self.setSettingComponent(null);
    sidebarTitle.html('Container Settings');

    var _settingForm = sidebar.find('.keditor-container-setting');

    if (typeof options.containerSettingShowFunction === 'function') {
      options.containerSettingShowFunction.call(self, _settingForm, target, self);
    }

    _settingForm.addClass('active');
  }

  sidebar.addClass('opened');
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
/* harmony import */ var _constants_snippetType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/snippetType */ "./src/keditor/constants/snippetType.js");
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");


/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('initSnippetsFilter');
  var self = this;
  var options = self.options;
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

  var categoriesOptions = '';
  $.each(categories, function (i, category) {
    categoriesOptions += "<option value=\"".concat(category, "\">").concat(category, "</option>");
  });
  var snippetsWrapper = modal.find(snippetsWrapperSelector);
  var snippets = snippetsWrapper.find('.keditor-snippets').children('.keditor-snippet');
  snippetsWrapper.prepend("\n<div class=\"keditor-ui keditor-snippets-filter-wrapper\">\n<select class=\"keditor-ui keditor-snippets-filter\">\n<option value=\"\" selected=\"selected\">All</option>\n".concat(categoriesOptions, "\n</select>\n<input type=\"text\" class=\"keditor-ui keditor-snippets-search\" value=\"\" placeholder=\"Type to search...\" />\n</div>\n"));
  snippets.each(function () {
    var snippet = $(this);
    var categories = snippet.attr('data-keditor-categories') || '';
    var filterCategories = categories.toLowerCase();
    categories = categories.split(options.snippetsCategoriesSeparator);
    filterCategories = filterCategories.split(options.snippetsCategoriesSeparator);
    snippet.data('categories', categories);
    snippet.data('categoriesFilter', filterCategories);
  });
  var txtSearch = snippetsWrapper.find('.keditor-snippets-search');
  var cbbFilter = snippetsWrapper.find('.keditor-snippets-filter');

  var doFilter = function doFilter() {
    var selectedCategory = (cbbFilter.val() || '').toLowerCase();
    var searchText = (txtSearch.val() || '').toLowerCase();
    snippets.filter('.selected').removeClass('selected');

    if (selectedCategory || searchText) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Filtering snippets');
      snippets.each(function () {
        var snippet = $(this);
        var dataCategories = snippet.data('categoriesFilter');
        var dataCategoriesString = dataCategories.join(';');
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
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_1__["default"])('Show all snippets');
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

/***/ "./src/keditor/snippet/renderSnippets.js":
/*!***********************************************!*\
  !*** ./src/keditor/snippet/renderSnippets.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }


/* harmony default export */ __webpack_exports__["default"] = (function (resp) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('renderSnippets');
  var self = this;
  var options = self.options;
  var snippetsContainerHtml = '';
  var snippetsComponentHtml = '';
  var snippetsContentHtml = '';
  self.snippetsCategories = [];
  self.snippetsContainerCategories = [];
  self.snippetsComponentCategories = [];
  $(resp).filter('div').each(function (i) {
    var snippet = $(this);
    var snippetId = self.generateId('snippet');
    var content = snippet.html().trim();
    var previewUrl = snippet.attr('data-preview');
    var type = snippet.attr('data-type');
    var title = snippet.attr('data-keditor-title');
    var categories = snippet.attr('data-keditor-categories') || '';
    var snippetHtml = "\n<section\nclass=\"keditor-ui keditor-snippet\"\ndata-snippet=\"#".concat(snippetId, "\"\ndata-type=\"").concat(type, "\"\ntitle=\"").concat(title, "\"\ndata-keditor-categories=\"").concat(categories, "\"\n>\n<span><span style=\"background-image: url('").concat(previewUrl, "')\"></span></span>\n</section>\n");
    categories = categories.split(options.snippetsCategoriesSeparator);

    if (type === 'container') {
      snippetsContainerHtml += snippetHtml;
      self.snippetsContainerCategories = self.snippetsContainerCategories.concat(categories);
    } else if (type.indexOf('component') !== -1) {
      snippetsComponentHtml += snippetHtml;
      self.snippetsComponentCategories = self.snippetsComponentCategories.concat(categories);
    }

    var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);
    snippetsContentHtml += "<script id=\"".concat(snippetId, "\" type=\"text/html\" ").concat(dataAttributes.join(' '), ">").concat(content, "</script>");
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

/***/ "./src/keditor/utils/error.js":
/*!************************************!*\
  !*** ./src/keditor/utils/error.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (message) {
  throw new Error("[ KEditor ] ".concat(message));
});

/***/ }),

/***/ "./src/keditor/utils/generateContentAreasWrapper.js":
/*!**********************************************************!*\
  !*** ./src/keditor/utils/generateContentAreasWrapper.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (content) {
  var self = this;
  var options = self.options;
  var contentAreasWrapper = $(options.contentAreasWrapper || '<div />');
  contentAreasWrapper.attr('class', 'keditor-ui keditor-content-area-wrapper');

  if (!contentAreasWrapper.attr('id')) {
    contentAreasWrapper.attr('id', self.generateId('content-area-wrapper'));
  }

  contentAreasWrapper.html(content);
  return contentAreasWrapper;
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
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var timestamp = new Date().getTime();
  var random = Math.round(Math.random() * 9876543210);
  return "keditor-".concat(type, "-").concat(timestamp).concat(random);
});

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

/***/ "./src/keditor/utils/initKEditorClicks.js":
/*!************************************************!*\
  !*** ./src/keditor/utils/initKEditorClicks.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('initKEditorClicks');
  var self = this;
  var options = self.options;
  var body = self.body;
  body.on('click', function (e) {
    var sidebar = self.getClickedElement(e, '.keditor-sidebar');
    var modal = self.getClickedElement(e, '.keditor-modal');
    var container = self.getClickedElement(e, '.keditor-container');

    if (container) {
      if (!container.hasClass('showed-keditor-toolbar')) {
        body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        container.addClass('showed-keditor-toolbar');
        var contentArea = container.parent();

        if (typeof options.onContainerSelected === 'function') {
          options.onContainerSelected.call(self, e, container, contentArea);
        }
      }
    } else {
      if (!sidebar && !modal) {
        body.find('.keditor-container.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
      }
    }

    var component = self.getClickedElement(e, '.keditor-component');

    if (component) {
      if (!component.hasClass('showed-keditor-toolbar')) {
        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
        component.addClass('showed-keditor-toolbar');

        var _contentArea = component.parent();

        if (typeof options.onComponentSelected === 'function') {
          options.onComponentSelected.call(self, e, component, _contentArea);
        }
      }
    } else {
      if (!sidebar) {
        body.find('.keditor-component.showed-keditor-toolbar').removeClass('showed-keditor-toolbar');
      }
    }
  });
  body.on('click', '.btn-container-setting', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-container-setting', btn);
    var container = btn.closest('.keditor-container');

    if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
      if (!container.is(self.settingContainer)) {
        self.openSidebar(container);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(container);
    }
  });
  body.on('click', '.btn-container-duplicate', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-container-duplicate', btn);
    var container = btn.closest('.keditor-container');
    var contentArea = container.parent();
    var newContainer = $(self.getContainerContent(container, btn.parent().hasClass('keditor-toolbar-sub-container')));
    container.after(newContainer);
    self.convertToContainer(contentArea, newContainer);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Container is duplicated');

    if (typeof options.onContainerDuplicated === 'function') {
      options.onContainerDuplicated.call(self, container, newContainer, contentArea);
    }

    if (typeof options.onContentChanged === 'function') {
      options.onContentChanged.call(self, e, contentArea);
    }
  });
  body.on('click', '.btn-container-delete', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-container-delete', btn);

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
          Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Deleting container is container of setting container. Close setting panel for this setting component', settingComponent);
          self.closeSidebar();
        }
      } else if (container.is(self.settingContainer)) {
        Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Deleting container is setting container. Close setting panel for this container', container);
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
  body.on('click', '.btn-component-setting', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-component-setting', btn);
    var component = btn.closest('.keditor-component');

    if (body.hasClass('opened-keditor-setting') && body.hasClass('opened-keditor-sidebar')) {
      if (!component.is(self.settingComponent())) {
        self.openSidebar(component);
      } else {
        self.closeSidebar();
      }
    } else {
      self.openSidebar(component);
    }
  });
  body.on('click', '.btn-component-duplicate', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-component-duplicate', btn);
    var component = btn.closest('.keditor-component');
    var container = component.closest('.keditor-container');
    var contentArea = container.parent();
    var newComponent = $(self.getComponentContent(component));
    component.after(newComponent);
    self.convertToComponent(contentArea, container, newComponent);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Component is duplicated');

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
  body.on('click', '.btn-component-delete', function (e) {
    e.preventDefault();
    var btn = $(this);
    Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Click on .btn-component-delete', btn);

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
  body.addClass('keditor-clicks-initialized');
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  if (console && typeof console.log === 'function' && jquery__WEBPACK_IMPORTED_MODULE_0___default.a.keditor.debug) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2dldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvaW5pdFNuaXBwZXRzRmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9pbml0S0VkaXRvckNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLmxlc3M/MjZmMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInRhcmdldCIsImlzRXhpc3RpbmciLCJsb2ciLCJpcyIsInNlbGYiLCJpc1NlY3Rpb24iLCJjb21wb25lbnQiLCJhZGRDbGFzcyIsIndyYXBJbm5lciIsIndyYXAiLCJwYXJlbnQiLCJpbml0Q29tcG9uZW50IiwiY29tcG9uZW50VHlwZSIsImdldENvbXBvbmVudFR5cGUiLCJjb21wb25lbnREYXRhIiwiS0VkaXRvciIsImNvbXBvbmVudHMiLCJkZXN0cm95IiwiY2FsbCIsInJlbW92ZSIsImNsb25lZENvbXBvbmVudCIsImNsb25lIiwiZGF0YUF0dHJpYnV0ZXMiLCJnZXREYXRhQXR0cmlidXRlcyIsImNvbnRlbnQiLCJpZnJhbWVXcmFwcGVyIiwiZmluZCIsImxlbmd0aCIsImlmcmFtZSIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJ1bndyYXAiLCJyZW1vdmVDbGFzcyIsImdldENvbnRlbnQiLCJjb21wb25lbnRDb250ZW50IiwiaHRtbCIsImVhY2giLCIkIiwiam9pbiIsIm9wdGlvbnMiLCJhdHRyIiwicmVwbGFjZSIsImRlZmF1bHRDb21wb25lbnRUeXBlIiwiZXJyb3IiLCJib2R5IiwiZ2VuZXJhdGVJZCIsIm9uQmVmb3JlSW5pdENvbXBvbmVudCIsImFwcGVuZCIsImdlbmVyYXRlVG9vbGJhciIsIlRPT0xCQVJfVFlQRSIsIkNPTVBPTkVOVCIsInNldHRpbmdFbmFibGVkIiwiZHluYW1pY0VsZW1lbnQiLCJpbml0RHluYW1pY0NvbnRlbnQiLCJpbml0Iiwib25Jbml0Q29tcG9uZW50IiwiY2xvc2VzdCIsIm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkIiwiZHluYW1pY0hyZWYiLCJkYXRhIiwicGFyYW0iLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwieGhyIiwib25EeW5hbWljQ29udGVudExvYWRlZCIsIm9uRHluYW1pY0NvbnRlbnRFcnJvciIsIlBSRUZJWF9DTEFTUyIsIlVJIiwiSElEREVOX0VMRU1FTlQiLCJDTElDS1NfSU5JVElBTElaRUQiLCJDT05URU5UX0FSRUFTX1dSQVBQRVIiLCJuZXN0ZWRDb250YWluZXJFbmFibGVkIiwiZXhwbGljaXRTbmlwcGV0RW5hYmxlZCIsImNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IiwiYnRuQWRkQ29udGVudFRleHQiLCJidG5BZGRDb250YWluZXJUZXh0IiwiYnRuQWRkU3ViQ29udGFpbmVyVGV4dCIsImJ0bkFkZENvbXBvbmVudFRleHQiLCJidG5Nb3ZlQ29udGFpbmVyVGV4dCIsImJ0bk1vdmVDb21wb25lbnRUZXh0IiwiYnRuU2V0dGluZ0NvbnRhaW5lclRleHQiLCJidG5TZXR0aW5nQ29tcG9uZW50VGV4dCIsImJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQiLCJidG5EdXBsaWNhdGVDb21wb25lbnRUZXh0IiwiYnRuRGVsZXRlQ29udGFpbmVyVGV4dCIsImJ0bkRlbGV0ZUNvbXBvbmVudFRleHQiLCJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dCIsImNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0Iiwic25pcHBldHNVcmwiLCJzbmlwcGV0c0ZpbHRlckVuYWJsZWQiLCJzbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IiLCJpZnJhbWVNb2RlIiwiY29udGVudFN0eWxlcyIsImNvbnRlbnRBcmVhc1NlbGVjdG9yIiwiY29udGVudEFyZWFzV3JhcHBlciIsIkNMQVNTX05BTUVTIiwiY29udGFpbmVyU2V0dGluZ0VuYWJsZWQiLCJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiIsImNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24iLCJvblJlYWR5Iiwib25TbmlwcGV0c0xvYWRlZCIsIm1vZGFsIiwib25TbmlwcGV0c0Vycm9yIiwib25Jbml0SWZyYW1lIiwiaWZyYW1lSGVhZCIsImlmcmFtZUJvZHkiLCJvbkNvbnRlbnRDaGFuZ2VkIiwiZXZlbnQiLCJvbkJlZm9yZUluaXRDb250ZW50QXJlYSIsIm9uSW5pdENvbnRlbnRBcmVhIiwib25CZWZvcmVJbml0Q29udGFpbmVyIiwib25Jbml0Q29udGFpbmVyIiwib25CZWZvcmVDb250YWluZXJEZWxldGVkIiwic2VsZWN0ZWRDb250YWluZXIiLCJvbkNvbnRhaW5lckRlbGV0ZWQiLCJvbkNvbnRhaW5lckNoYW5nZWQiLCJjaGFuZ2VkQ29udGFpbmVyIiwib25Db250YWluZXJEdXBsaWNhdGVkIiwib3JpZ2luYWxDb250YWluZXIiLCJuZXdDb250YWluZXIiLCJvbkNvbnRhaW5lclNlbGVjdGVkIiwib25Db250YWluZXJTbmlwcGV0QWRkZWQiLCJzZWxlY3RlZFNuaXBwZXQiLCJvbkNvbXBvbmVudFJlYWR5Iiwib25CZWZvcmVDb21wb25lbnREZWxldGVkIiwic2VsZWN0ZWRDb21wb25lbnQiLCJvbkNvbXBvbmVudERlbGV0ZWQiLCJvbkNvbXBvbmVudENoYW5nZWQiLCJjaGFuZ2VkQ29tcG9uZW50Iiwib25Db21wb25lbnREdXBsaWNhdGVkIiwib3JpZ2luYWxDb21wb25lbnQiLCJuZXdDb21wb25lbnQiLCJvbkNvbXBvbmVudFNlbGVjdGVkIiwib25Db21wb25lbnRTbmlwcGV0QWRkZWQiLCJBTEwiLCJDT05UQUlORVIiLCJDT05URU5UX0FSRUEiLCJTVUJfQ09OVEFJTkVSIiwiQ09OVEFJTkVSX0NPTlRFTlQiLCJTVUJfQ09OVEFJTkVSX0NPTlRFTlQiLCJpbml0Q29udGFpbmVyIiwiaXNOZXN0ZWQiLCJjb250YWluZXJJbm5lciIsIm5vdCIsImNvbnRhaW5lckNvbnRlbnQiLCJyZW1vdmVBdHRyIiwiY29udGFpbmVyQ29udGVudElubmVyIiwiY2hpbGQiLCJnZXRDb21wb25lbnRDb250ZW50IiwiZ2V0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRzIiwicGFyZW50cyIsImluaXRDb250YWluZXJDb250ZW50IiwiY29udGFpbmVyQ29udGVudFRvb2xiYXIiLCJhcHBlbmRUbyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1vZGFsIiwiU05JUFBFVF9UWVBFIiwic29ydGFibGUiLCJoYW5kbGUiLCJoZWxwZXIiLCJpdGVtcyIsImNvbm5lY3RXaXRoIiwidG9sZXJhbmNlIiwic29ydCIsInJlY2VpdmUiLCJ1aSIsIml0ZW0iLCJzdGFydCIsInN0b3AiLCJjb252ZXJ0VG9Db250YWluZXIiLCJjb252ZXJ0VG9Db21wb25lbnQiLCJkb250SW5pdFRvb2xiYXIiLCJjb250ZW50QXJlYUlubmVyIiwiY29udGVudEFyZWFUb29sYmFyIiwiYXhpcyIsImNsb3NlU2lkZWJhciIsImNvbnRlbnREYXRhIiwiY29udGVudEFyZWFzIiwib3JpZ2luYWxDb250ZW50IiwiZW1wdHkiLCJpbml0Q29udGVudEFyZWEiLCJlbGVtZW50IiwiaWQiLCJ2YWwiLCJpbnN0YW5jZXMiLCJpbkFycmF5IiwicmVzdWx0IiwicHVzaCIsIndyYXBwZXIiLCJhZnRlciIsImlmcmFtZURvYyIsImNvbnRlbnRzIiwiZ2V0Iiwib3BlbiIsImNsb3NlIiwid2luZG93IiwiY29udGVudFdpbmRvdyIsImNvbnRlbnREb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwic3R5bGVzIiwic3R5bGUiLCJocmVmIiwiaXNBcnJheSIsImkiLCJpZFN0ciIsImdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlciIsImNvdmVyIiwicHJlcGVuZCIsImZuIiwiY29uZmlnIiwiYXBwbHkiLCJpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSIsImNhdGVnb3JpZXMiLCJiZWF1dGlmeUNhdGVnb3JpZXMiLCJzZXR0aW5nQ29udGFpbmVyIiwic2V0dGluZ0NvbXBvbmVudCIsImlnbm9yZUF0dHJpYnV0ZXMiLCJzZWxlY3RvciIsImdldENsaWNrZWRFbGVtZW50IiwiaW5pdElmcmFtZSIsImluaXRJZnJhbWVDb3ZlciIsImluaXRLRWRpdG9yQ2xpY2tzIiwiaW5pdFNpZGViYXIiLCJvcGVuU2lkZWJhciIsImluaXRTbmlwcGV0c01vZGFsIiwicmVzcCIsInJlbmRlclNuaXBwZXRzIiwiaW5pdFNuaXBwZXRzRmlsdGVyIiwic25pcHBldFR5cGUiLCJjbG9zZU1vZGFsIiwiaW5pdENvbnRlbnRBcmVhcyIsImRlbGV0ZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJERUZBVUxUUyIsImJsYW5rIiwia2VkaXRvciIsImluc3RhbmNlIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImFyZ3VtZW50cyIsImNvbnN0cnVjdG9yIiwiZXh0ZW5kIiwiZG9jdW1lbnQiLCJtb2RhbFRhcmdldCIsIm1vZGFsQWN0aW9uIiwibW9kYWxJZCIsInNuaXBwZXRzV3JhcHBlckh0bWwiLCJqcVhIUiIsInNuaXBwZXRDb250ZW50RWxlbWVudCIsInNuaXBwZXRDb250ZW50IiwiaXNBZGRpbmdDb250YWluZXIiLCJpc0FkZGluZ0NvbXBvbmVudCIsImlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciIsIm1vZGFsU25pcHBldFR5cGUiLCJlcSIsInNuaXBwZXQiLCJjc3NUcmFuc2l0aW9uRW5kIiwiY3NzIiwibW9kYWxUaXRsZSIsInNldFRpbWVvdXQiLCJqcXVlcnkiLCJzaWRlYmFyIiwiYWN0aXZlRm9ybSIsImFjdGl2ZVR5cGUiLCJoaWRlU2V0dGluZ0Zvcm0iLCJzZXRTZXR0aW5nQ29tcG9uZW50Iiwic2V0U2V0dGluZ0NvbnRhaW5lciIsInNpZGViYXJJZCIsInNpZGViYXJCb2R5IiwiZm9ybSIsInNpZGViYXJUaXRsZSIsInNldHRpbmdUaXRsZSIsInNldHRpbmdGb3JtIiwiaW5pdFNldHRpbmdGb3JtIiwibG9hZGluZ1RleHQiLCJpbml0RnVuY3Rpb24iLCJ3aGVuIiwiZG9uZSIsInNob3dTZXR0aW5nRm9ybSIsInNuaXBwZXRzV3JhcHBlclNlbGVjdG9yIiwic25pcHBldHNDYXRlZ29yaWVzIiwic25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzIiwic25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzIiwiY2F0ZWdvcmllc09wdGlvbnMiLCJjYXRlZ29yeSIsInNuaXBwZXRzV3JhcHBlciIsInNuaXBwZXRzIiwiZmlsdGVyQ2F0ZWdvcmllcyIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJ0eHRTZWFyY2giLCJjYmJGaWx0ZXIiLCJkb0ZpbHRlciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2hUZXh0IiwiZmlsdGVyIiwiZGF0YUNhdGVnb3JpZXMiLCJkYXRhQ2F0ZWdvcmllc1N0cmluZyIsInRpdGxlIiwiaW5kZXhPZiIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic25pcHBldHNDb250YWluZXJIdG1sIiwic25pcHBldHNDb21wb25lbnRIdG1sIiwic25pcHBldHNDb250ZW50SHRtbCIsInNuaXBwZXRJZCIsInRyaW0iLCJwcmV2aWV3VXJsIiwic25pcHBldEh0bWwiLCJjb25jYXQiLCJuZXdBcnJheSIsIm1lc3NhZ2UiLCJFcnJvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwic2V0dGluZ0J0biIsInRvb2xiYXJDbGFzcyIsImF0dHJpYnV0ZXMiLCJuYW1lIiwidmFsdWUiLCJidG4iLCJjb25maXJtIiwic2V0dGluZ0NvbXBvbmVudFBhcmVudCIsImNvbnNvbGUiLCJkZWJ1ZyIsImFyZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNlLHlFQUFVQSxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQ0MsTUFBbEMsRUFBMENDLFVBQTFDLEVBQXNEO0FBQ3JFQyw0REFBRyxDQUFDLG9CQUFELEVBQXVCSixXQUF2QixFQUFvQ0MsU0FBcEMsRUFBK0NDLE1BQS9DLEVBQXVEQyxVQUF2RCxDQUFIOztBQUNBLE1BQUlELE1BQU0sQ0FBQ0csRUFBUCxDQUFVLG9DQUFWLENBQUosRUFBcUQ7QUFDckQ7QUFDQzs7QUFDRCxNQUFJQyxJQUFJLEdB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QSxzQ0FEbERDLElBQ2tEO0FBRGxEQSxVQUNrRDtBQUFBOztBQUNyRUYsV0FBTyxDQUFDL1UsR0FBUixDQUFZeU4sS0FBWixDQUFrQnNILE9BQWxCLEdBQTRCLGNBQTVCLFNBQStDRSxJQUEvQztBQUNDO0FBQ0EsQ0FKRCxFOzs7Ozs7Ozs7OztBQ0RBLHVDOzs7Ozs7Ozs7OztBQ0FBLG9EIiwiZmlsZSI6ImpzL2tlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wialF1ZXJ5XCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJqUXVlcnlcIikpIDogZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMva2VkaXRvci9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccmxvZygnY29udmVydFRvQ29tcG9uZW50JywgY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKTtccmlmICh0YXJnZXQuaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXInKSkge1xycmV0dXJuO1xyfVxybGV0IHNlbGYgPSB0aGlzO1xybGV0IGlzU2VjdGlvbiA9IHRhcmdldC5pcygnc2VjdGlvbicpO1xybGV0IGNvbXBvbmVudDtccmlmIChpc1NlY3Rpb24pIHtccnRhcmdldC5hZGRDbGFzcygna2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudCcpO1xydGFyZ2V0LndyYXBJbm5lcignPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj48L3NlY3Rpb24+Jyk7XHJjb21wb25lbnQgPSB0YXJnZXQ7XHJ9IGVsc2Uge1xydGFyZ2V0LndyYXAoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiPjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudC1jb250ZW50XCI+PC9zZWN0aW9uPjwvc2VjdGlvbj4nKTtccmNvbXBvbmVudCA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtccn1ccmlmIChpc0V4aXN0aW5nKSB7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2V4aXN0aW5nLWNvbXBvbmVudCcpO1xyfVxyc2VsZi5pbml0Q29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxvZygnZGVsZXRlQ29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmRlc3Ryb3kuY2FsbChjb21wb25lbnREYXRhLCBjb21wb25lbnQsIHNlbGYpO1xyfVxyY29tcG9uZW50LnJlbW92ZSgpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsb2coJ2dldENvbXBvbmVudENvbnRlbnQnKTtccmxldCBzZWxmID0gdGhpcztccmxldCBjbG9uZWRDb21wb25lbnQgPSBjb21wb25lbnQuY2xvbmUoKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNsb25lZENvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY2xvbmVkQ29tcG9uZW50LCBudWxsLCB0cnVlKTtccmxldCBjb250ZW50O1xyLy8gSGFuZGxlIGlmcmFtZS13cmFwcGVyXHJsZXQgaWZyYW1lV3JhcHBlciA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyaWYgKGlmcmFtZVdyYXBwZXIubGVuZ3RoID4gMCkge1xyaWZyYW1lV3JhcHBlci5maW5kKCcua2VkaXRvci1pZnJhbWUtY292ZXInKS5yZW1vdmUoKTtccmxldCBpZnJhbWUgPSBpZnJhbWVXcmFwcGVyLmNoaWxkcmVuKCdpZnJhbWUnKTtccmlmIChpZnJhbWVXcmFwcGVyLmhhc0NsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyLWZha2UnKSkge1xyaWZyYW1lLnVud3JhcCgpO1xyfSBlbHNlIHtccmlmcmFtZVdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccn1ccn1ccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5nZXRDb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJjb250ZW50ID0gY29tcG9uZW50RGF0YS5nZXRDb250ZW50LmNhbGwoY29tcG9uZW50RGF0YSwgY2xvbmVkQ29tcG9uZW50LCBzZWxmKTtccn0gZWxzZSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNsb25lZENvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbnRlbnQgPSBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn1ccmNsb25lZENvbXBvbmVudC5odG1sKGNvbnRlbnQpLmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcciQodGhpcykuaHRtbCgnJyk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24gJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PiR7Y2xvbmVkQ29tcG9uZW50Lmh0bWwoKX08L3NlY3Rpb24+YDtcclxufTtcclxuIiwiaW1wb3J0IGVycm9yIGZyb20gJy4uL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50VHlwZSA9IChjb21wb25lbnQuYXR0cignZGF0YS10eXBlJykgfHwgJycpLnJlcGxhY2UoJ2NvbXBvbmVudC0nLCAnJyk7XHJpZiAoY29tcG9uZW50VHlwZSAmJiAoY29tcG9uZW50VHlwZSBpbiBLRWRpdG9yLmNvbXBvbmVudHMpKSB7XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn0gZWxzZSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdzdHJpbmcnKSB7XHJjb21wb25lbnRUeXBlID0gb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZTtccn0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlLmNhbGwoc2VsZiwgY29tcG9uZW50KTtccn1ccmlmICghY29tcG9uZW50VHlwZSkge1xyZXJyb3IoJ0NvbXBvbmVudCB0eXBlIGlzIHVuZGVmaW5lZCEnKTtccn1ccmxvZyhgRmFsbGJhY2sgdG8gZGVmYXVsdENvbXBvbmVudFR5cGU6ICR7Y29tcG9uZW50VHlwZX1gKTtccnJldHVybiBjb21wb25lbnRUeXBlO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCkge1xybG9nKCdpbml0Q29tcG9uZW50JywgY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGJvZHkgPSBzZWxmLmJvZHk7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKSB8fCAhY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKSkge1xyY29tcG9uZW50LmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKTtccmNvbXBvbmVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29tcG9uZW50JykpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29tcG9uZW50Q29udGVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29tcG9uZW50LWNvbnRlbnQnKSk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybG9nKGBDb21wb25lbnQgdHlwZTogJHtjb21wb25lbnRUeXBlfWApO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJsb2coJ1JlbmRlciBLRWRpdG9yIHRvb2xiYXIgZm9yIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJjb21wb25lbnQuYXBwZW5kKHNlbGYuZ2VuZXJhdGVUb29sYmFyKFRPT0xCQVJfVFlQRS5DT01QT05FTlQsIGNvbXBvbmVudERhdGEuc2V0dGluZ0VuYWJsZWQpKTtccmNvbXBvbmVudC5maW5kKCdbZGF0YS1keW5hbWljLWhyZWZdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgZHluYW1pY0VsZW1lbnQgPSAkKHRoaXMpO1xyc2VsZi5pbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpO1xyfSk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5pbml0LmNhbGwoY29tcG9uZW50RGF0YSwgY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBzZWxmKTtccn0gZWxzZSB7XHJsb2coYFwiaW5pdFwiIGZ1bmN0aW9uIG9mIGNvbXBvbmVudCB0eXBlIFwiJHtjb21wb25lbnRUeXBlfVwiIGRvZXMgbm90IGV4aXN0YCk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdENvbXBvbmVudC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyY29tcG9uZW50LmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbXBvbmVudCcpO1xyY29tcG9uZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKTtccn0gZWxzZSB7XHJpZiAoY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbXBvbmVudCcpKSB7XHJsb2coJ0NvbXBvbmVudCBpcyBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xyfSBlbHNlIHtccmxvZygnQ29tcG9uZW50IGlzIGluaXRpYWxpemluZy4uLicpO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQpIHtccmxvZygnaW5pdER5bmFtaWNDb250ZW50JywgZHluYW1pY0VsZW1lbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50ID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBkeW5hbWljRWxlbWVudC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmR5bmFtaWNFbGVtZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdkeW5hbWljLWVsZW1lbnQnKSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVEeW5hbWljQ29udGVudExvYWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVEeW5hbWljQ29udGVudExvYWQuY2FsbChzZWxmLCBkeW5hbWljRWxlbWVudCwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgZHluYW1pY0hyZWYgPSBkeW5hbWljRWxlbWVudC5hdHRyKCdkYXRhLWR5bmFtaWMtaHJlZicpO1xybGV0IGRhdGEgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKGNvbXBvbmVudCwgWydkYXRhLXR5cGUnLCAnZGF0YS1keW5hbWljLWhyZWYnXSwgZmFsc2UpO1xyZGF0YSA9ICQucGFyYW0oZGF0YSk7XHJsb2coYER5bmFtaWMgaHJlZjogJHtkeW5hbWljSHJlZn0sIERhdGE6ICR7ZGF0YX1gKTtccnJldHVybiAkLmFqYXgoe1xydXJsOiBkeW5hbWljSHJlZixccmRhdGE6IGRhdGEsXHJ0eXBlOiAnR0VUJyxccmRhdGFUeXBlOiAnSFRNTCcsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XHJsb2coJ0R5bmFtaWMgY29udGVudCBpcyBsb2FkZWQnLCBkeW5hbWljRWxlbWVudCwgcmVzcG9uc2UsIHN0YXR1cywgeGhyKTtccmR5bmFtaWNFbGVtZW50Lmh0bWwocmVzcG9uc2UpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCByZXNwb25zZSwgc3RhdHVzLCB4aHIsIGNvbnRlbnRBcmVhKTtccn1ccn0sXHJlcnJvcjogZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIHhocikge1xybG9nKCdFcnJvciB3aGVuIGxvYWRpbmcgZHluYW1pYyBjb250ZW50JywgZHluYW1pY0VsZW1lbnQsIHJlc3BvbnNlLCBzdGF0dXMsIHhocik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvci5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCByZXNwb25zZSwgc3RhdHVzLCB4aHIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyXG59O1xyXG4iLCJjb25zdCBQUkVGSVhfQ0xBU1MgPSAna2VkaXRvci0nO1xyZXhwb3J0IGRlZmF1bHQge1xyVUk6IGAke1BSRUZJWF9DTEFTU311aWAsXHJISURERU5fRUxFTUVOVDogYCR7UFJFRklYX0NMQVNTfWhpZGRlbi1lbGVtZW50YCxcckNMSUNLU19JTklUSUFMSVpFRDogYCR7UFJFRklYX0NMQVNTfWNsaWNrcy1pbml0aWFsaXplZGAsXHJDT05URU5UX0FSRUFTX1dSQVBQRVI6IGAke1BSRUZJWF9DTEFTU31jb250ZW50LWFyZWFzLXdyYXBwZXJgLFxyXG59OyIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQge1xybmVzdGVkQ29udGFpbmVyRW5hYmxlZDogdHJ1ZSxccmV4cGxpY2l0U25pcHBldEVuYWJsZWQ6IGZhbHNlLFxyY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQ6IGBccjxkaXYgY2xhc3M9XCJyb3dcIj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiPlxyPC9kaXY+XHI8L2Rpdj5ccmAsXHJidG5BZGRDb250ZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4nLFxyYnRuQWRkQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHJidG5BZGRTdWJDb250YWluZXJUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWNvbHVtbnNcIj48L2k+JyxccmJ0bkFkZENvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtbGlzdC11bFwiPjwvaT4nLFxyYnRuTW92ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXNvcnRcIj48L2k+JyxccmJ0bk1vdmVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3NcIj48L2k+JyxccmJ0blNldHRpbmdDb250YWluZXJUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+JyxccmJ0blNldHRpbmdDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+JyxccmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+JyxccmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+JyxccmJ0bkRlbGV0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHJidG5EZWxldGVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4nLFxyY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQ6ICdBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb250YWluZXI/IFRoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lIScsXHJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbXBvbmVudD8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxccmRlZmF1bHRDb21wb25lbnRUeXBlOiAnYmxhbmsnLFxyc25pcHBldHNVcmw6ICdzbmlwcGV0cy9zbmlwcGV0cy5odG1sJyxccnNuaXBwZXRzRmlsdGVyRW5hYmxlZDogdHJ1ZSxccnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcjogJzsnLFxyaWZyYW1lTW9kZTogZmFsc2UsXHJjb250ZW50U3R5bGVzOiBbXSxccmNvbnRlbnRBcmVhc1NlbGVjdG9yOiBudWxsLFxyY29udGVudEFyZWFzV3JhcHBlcjogYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLkNPTlRFTlRfQVJFQVNfV1JBUFBFUn1cIj48L2Rpdj5gLFxyY29udGFpbmVyU2V0dGluZ0VuYWJsZWQ6IGZhbHNlLFxyY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbjogbnVsbCxccmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb246IG51bGwsXHJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uOiBudWxsLFxyb25SZWFkeTogZnVuY3Rpb24gKCkge1xyfSxccm9uU25pcHBldHNMb2FkZWQ6IGZ1bmN0aW9uIChtb2RhbCkge1xyfSxccm9uU25pcHBldHNFcnJvcjogZnVuY3Rpb24gKG1vZGFsLCBlcnJvcikge1xyfSxccm9uSW5pdElmcmFtZTogZnVuY3Rpb24gKGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSkge1xyfSxccm9uQ29udGVudENoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY29udGVudEFyZWEpIHtccn0sXHJvbkJlZm9yZUluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25Jbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxccm9uQmVmb3JlSW5pdENvbnRhaW5lcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHJvbkNvbnRhaW5lckR1cGxpY2F0ZWQ6IGZ1bmN0aW9uIChldmVudCwgb3JpZ2luYWxDb250YWluZXIsIG5ld0NvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHJvbkNvbnRhaW5lclNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxccm9uQ29udGFpbmVyU25pcHBldEFkZGVkOiBmdW5jdGlvbiAoZXZlbnQsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSkge1xyfSxccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHJvbkJlZm9yZUluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25Jbml0Q29tcG9uZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxccm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHJvbkNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25Db21wb25lbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25Db21wb25lbnREdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25Db21wb25lbnRTZWxlY3RlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25EeW5hbWljQ29udGVudExvYWRlZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCByZXNwb25zZSwgc3RhdHVzLCB4aHIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyb25EeW5hbWljQ29udGVudEVycm9yOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIHJlc3BvbnNlLCBzdGF0dXMsIHhociwgY29udGVudEFyZWEpIHtccn1cclxufTtcciIsImV4cG9ydCBkZWZhdWx0IHtcckFMTDogMCxcckNPTlRBSU5FUjogMSxcckNPTVBPTkVOVDogMlxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJDT05URU5UX0FSRUE6IDAsXHJDT05UQUlORVI6IDEsXHJTVUJfQ09OVEFJTkVSOiAyLFxyQ09OVEFJTkVSX0NPTlRFTlQ6IDMsXHJTVUJfQ09OVEFJTkVSX0NPTlRFTlQ6IDQsXHJDT01QT05FTlQ6IDVcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCB0YXJnZXQpIHtccmxvZygnY29udmVydFRvQ29udGFpbmVyJywgY29udGVudEFyZWEsIHRhcmdldCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVyO1xyaWYgKHRhcmdldC5pcygnc2VjdGlvbicpKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXInKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyXCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWlubmVyXCI+PC9zZWN0aW9uPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRhaW5lciwgaXNOZXN0ZWQpIHtccmxvZyhgZ2V0Q29udGFpbmVyQ29udGVudCAtIGlzTmVzdGVkPSR7aXNOZXN0ZWR9YCwgY29udGFpbmVyKTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250YWluZXJJbm5lciA9IGNvbnRhaW5lci5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyLWlubmVyJykuY2xvbmUoKTtccmNvbnRhaW5lcklubmVyLmZpbmQoJ1tkYXRhLXR5cGU9Y29udGFpbmVyLWNvbnRlbnRdJykubm90KGlzTmVzdGVkID8gJycgOiAnLmtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJjb250YWluZXJDb250ZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50IGtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50IHVpLXNvcnRhYmxlJykucmVtb3ZlQXR0cignaWQnKTtccmxldCBjb250YWluZXJDb250ZW50SW5uZXIgPSBjb250YWluZXJDb250ZW50LmNoaWxkcmVuKCk7XHJsZXQgY29udGVudCA9ICcnO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY2hpbGQpO1xyfSBlbHNlIGlmIChjaGlsZC5pcygnLmtlZGl0b3Itc3ViLWNvbnRhaW5lcicpKSB7XHJjb250ZW50ICs9IHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250ZW50KTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbj4ke2NvbnRhaW5lcklubmVyLmh0bWwoKX08L3NlY3Rpb24+YDtcclxufSIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lcikge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgaXNOZXN0ZWQgPSBvcHRpb25zLm5lc3RlZENvbnRhaW5lckVuYWJsZWQgJiYgY29udGFpbmVyLmNsb3Nlc3QoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDA7XHJsb2coYGluaXRDb250YWluZXIgLSBpc05lc3RlZD0ke2lzTmVzdGVkfWAsIGNvbnRlbnRBcmVhLCBjb250YWluZXIpO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykgfHwgIWNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJykpIHtccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lcicpO1xyfVxybG9nKCdSZW5kZXIgS0VkaXRvciB0b29sYmFyIGZvciBjb250YWluZXInLCBjb250YWluZXIpO1xyY29udGFpbmVyLmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUikpO1xyY29udGFpbmVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKGlzTmVzdGVkID8gJ3N1Yi1jb250YWluZXInIDogJ2NvbnRhaW5lcicpKTtccmxldCBjb250YWluZXJDb250ZW50cyA9IGNvbnRhaW5lci5maW5kKCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKTtccmxvZyhgSW5pdGlhbGl6ZSAke2NvbnRhaW5lckNvbnRlbnRzLmxlbmd0aH0gY29udGFpbmVyIGNvbnRlbnQocylgKTtccmNvbnRhaW5lckNvbnRlbnRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lckNvbnRlbnQgPSAkKHRoaXMpO1xyaWYgKG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCAmJiAhaXNOZXN0ZWQgJiYgY29udGFpbmVyQ29udGVudC5wYXJlbnRzKCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwKSB7XHIvLyBEbyBub3RoaW5nIGJlY2F1c2UgaXQncyBjb250YWluZXIgY29udGVudCBvZiBzdWIgY29udGFpbmVyXHJyZXR1cm47XHJ9XHJzZWxmLmluaXRDb250YWluZXJDb250ZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKTtccn0pO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb250YWluZXIuY2FsbChzZWxmLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb250YWluZXInKTtccmNvbnRhaW5lci5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJ9IGVsc2Uge1xyaWYgKGNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb250YWluZXInKSkge1xybG9nKCdDb250YWluZXIgaXMgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtccn0gZWxzZSB7XHJsb2coJ0NvbnRhaW5lciBpcyBpbml0aWFsaXppbmcuLi4nKTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpIHtccmxvZyhgaW5pdENvbnRhaW5lckNvbnRlbnQgLSBpc05lc3RlZD0ke2lzTmVzdGVkfWAsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJjb250YWluZXJDb250ZW50LmFkZENsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50Jyk7XHJpZiAoaXNOZXN0ZWQpIHtccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50Jyk7XHJ9XHJjb250YWluZXJDb250ZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdjb250YWluZXItY29udGVudCcpKTtccmxldCBjb250YWluZXJDb250ZW50SW5uZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci1jb250YWluZXItY29udGVudC1pbm5lclwiPjwvZGl2PicpO1xyY29udGFpbmVyQ29udGVudElubmVyLmh0bWwoY29udGFpbmVyQ29udGVudC5odG1sKCkpO1xyY29udGFpbmVyQ29udGVudC5odG1sKGNvbnRhaW5lckNvbnRlbnRJbm5lcik7XHJsb2coJ0luaXRpYWxpemUgdG9vbGJhciBmb3IgY29udGFpbmVyIGNvbnRlbnQnKTtccmxldCBjb250YWluZXJDb250ZW50VG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoaXNOZXN0ZWQgPyBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UKSk7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5hcHBlbmRUbyhjb250YWluZXJDb250ZW50KTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmlmICghaXNOZXN0ZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBTTklQUEVUX1RZUEUuQ09OVEFJTkVSKTtccn0pO1xyfVxyfVxyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbXBvbmVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSk7XHJ9IGVsc2Uge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBpc05lc3RlZCA/IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgOiBvcHRpb25zLm5lc3RlZENvbnRhaW5lckVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQUxMIDogU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn1ccmxvZygnSW5pdGlhbGl6ZSAkLmZuLnNvcnRhYmxlIGZvciBjb250YWluZXIgY29udGVudCcpO1xyY29udGFpbmVyQ29udGVudElubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5idG4tY29tcG9uZW50LXJlcG9zaXRpb24sIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250YWluZXItY29udGVudC1pbm5lcicsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsb2coJ09uIHJlY2VpdmVkIHNuaXBwZXQnLCBldmVudCwgdWkpO1xybGV0IGhlbHBlciA9IHVpLmhlbHBlcjtccmxldCBpdGVtID0gdWkuaXRlbTtccmxldCBjb250YWluZXI7XHJpZiAoaGVscGVyKSB7XHJoZWxwZXIucmVtb3ZlKCk7XHJ9XHJjb250YWluZXIgPSBpdGVtLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyJCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGFpbmVyLmFkZENsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xybG9nKCdJbml0aWFsaXplIGV4aXN0aW5nIGNvbXBvbmVudHMgaW5zaWRlIGNvbnRhaW5lciBjb250ZW50Jyk7XHJjb250YWluZXJDb250ZW50SW5uZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjaGlsZCA9ICQodGhpcyk7XHJpZiAoY2hpbGQuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIGNoaWxkKTtccn0gZWxzZSB7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xybG9nKCdpbml0Q29udGVudEFyZWEnLCBjb250ZW50QXJlYSk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRlbnRBcmVhLmFkZENsYXNzKCdrZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IGNvbnRlbnQgPSBjb250ZW50QXJlYS5odG1sKCk7XHJsZXQgY29udGVudEFyZWFJbm5lciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWNvbnRlbnQtYXJlYS1pbm5lclwiPjwvZGl2PicpLmh0bWwoY29udGVudCk7XHJjb250ZW50QXJlYS5odG1sKGNvbnRlbnRBcmVhSW5uZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhLmNhbGwoc2VsZiwgY29udGVudEFyZWEpO1xyfVxyaWYgKCFkb250SW5pdFRvb2xiYXIpIHtccmxldCBjb250ZW50QXJlYVRvb2xiYXIgPSAkKHNlbGYuZ2VuZXJhdGVUb29sYmFyKFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUEpKTtccmNvbnRlbnRBcmVhLmFwcGVuZChjb250ZW50QXJlYVRvb2xiYXIpO1xyY29udGVudEFyZWFUb29sYmFyLmNoaWxkcmVuKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCA/ICcuYnRuLWFkZC1jb250YWluZXInIDogJy5idG4tYWRkLWNvbnRlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGVudEFyZWFJbm5lciwgb3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gU05JUFBFVF9UWVBFLkNPTlRBSU5FUiA6IFNOSVBQRVRfVFlQRS5BTEwpO1xyfSk7XHJ9XHJsb2coJ0luaXRpYWxpemUgJC5mbi5zb3J0YWJsZSBmb3IgY29udGVudCBhcmVhJyk7XHJjb250ZW50QXJlYUlubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5rZWRpdG9yLXRvb2xiYXItY29udGFpbmVyOm5vdCgua2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXIpIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250ZW50LWFyZWEnLFxyYXhpczogJ3knLFxydG9sZXJhbmNlOiAncG9pbnRlcicsXHJzb3J0OiBmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0Jyk7XHJ9LFxycmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xybG9nKCdPbiByZWNlaXZlZCBzbmlwcGV0JywgZXZlbnQsIHVpKTtccmxldCBoZWxwZXIgPSB1aS5oZWxwZXI7XHJsZXQgaXRlbSA9IHVpLml0ZW07XHJpZiAoaGVscGVyKSB7XHJoZWxwZXIucmVtb3ZlKCk7XHJ9XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpdGVtLmFkZENsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RhcnQ6IGZ1bmN0aW9uIChlLCB1aSkge1xydWkuaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0b3A6IGZ1bmN0aW9uIChlLCB1aSkge1xyaWYgKHVpLmhlbHBlcikge1xydWkuaGVscGVyLnJlbW92ZSgpO1xyfVxydWkuaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfVxyfSk7XHJsb2coJ0luaXRpYWxpemUgZXhpc3RpbmcgY29udGFpbmVycyBpbiBjb250ZW50IGFyZWEnKTtccmNvbnRlbnRBcmVhSW5uZXIuY2hpbGRyZW4oJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCAkKHRoaXMpKTtccn0pO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbnRlbnRBcmVhID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgY29udGVudERhdGEgPSBvcHRpb25zLm9uSW5pdENvbnRlbnRBcmVhLmNhbGwoc2VsZiwgY29udGVudEFyZWEpO1xyaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLmxlbmd0aCA+IDApIHtcciQuZWFjaChjb250ZW50RGF0YSwgZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxvZygnaW5pdENvbnRlbnRBcmVhcycpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXI7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXM7XHJpZiAob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcikge1xyY29udGVudEFyZWFzID0gY29udGVudEFyZWFzV3JhcHBlci5maW5kKG9wdGlvbnMuY29udGVudEFyZWFzU2VsZWN0b3IpO1xyfVxyaWYgKCFjb250ZW50QXJlYXMgfHwgY29udGVudEFyZWFzLmxlbmd0aCA9PT0gMCkge1xybG9nKCdEbyBub3QgZmluZCBhbnkgY29udGVudCBhcmVhLiBDcmVhdGluZyBkZWZhdWx0IGNvbnRlbnQgYXJlYS4uLicpO1xybGV0IG9yaWdpbmFsQ29udGVudCA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbCgpO1xyY29udGVudEFyZWFzID0gJCgnPGRpdiAvPicpLmh0bWwob3JpZ2luYWxDb250ZW50KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZW1wdHkoKS5hcHBlbmQoY29udGVudEFyZWFzKTtccn1ccmNvbnRlbnRBcmVhcy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250ZW50QXJlYSA9ICQodGhpcyk7XHJpZiAoIWNvbnRlbnRBcmVhLmF0dHIoJ2lkJykpIHtccmNvbnRlbnRBcmVhLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdjb250ZW50LWFyZWEnKSk7XHJ9XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQ7XHJsZXQgaWQgPSBzZWxmLmlkO1xybGV0IGNvbnRlbnQgPSBzZWxmLmdldENvbnRlbnQoZmFsc2UpO1xyaWYgKHNlbGYub3B0aW9ucy5pZnJhbWVNb2RlKSB7XHJzZWxmLmlmcmFtZVdyYXBwZXIucmVtb3ZlKCk7XHJ9IGVsc2Uge1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLnJlbW92ZSgpO1xyfVxyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQudmFsKGNvbnRlbnQpO1xyfSBlbHNlIHtccmVsZW1lbnQuaHRtbChjb250ZW50KTtccn1ccmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaGlkZGVuLWVsZW1lbnQnKTtccmVsZW1lbnQuZGF0YSgna2VkaXRvcicsIG51bGwpO1xyZGVsZXRlIEtFZGl0b3IuaW5zdGFuY2VzW2lkXTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGluQXJyYXkpIHtccmxldCBzZWxmID0gdGhpcztccmxldCByZXN1bHQgPSBbXTtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBodG1sID0gJyc7XHIkKHRoaXMpLmNoaWxkcmVuKCcua2VkaXRvci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXIgPSAkKHRoaXMpO1xyaHRtbCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyKTtccn0pO1xycmVzdWx0LnB1c2goaHRtbCk7XHJ9KTtccnJldHVybiBpbkFycmF5ID8gcmVzdWx0IDogcmVzdWx0LmpvaW4oJ1xcbicpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IG9yaWdpbmFsQ29udGVudCA9IGVsZW1lbnQuaXMoJ3RleHRhcmVhJykgPyBlbGVtZW50LnZhbCgpIDogZWxlbWVudC5odG1sKCk7XHJsZXQgd3JhcHBlciA9IHNlbGYuaWZyYW1lV3JhcHBlciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItaWZyYW1lLXdyYXBwZXJcIj48L2Rpdj4nKTtccmxldCBpZnJhbWUgPSBzZWxmLmlmcmFtZSA9ICQoJzxpZnJhbWUgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItaWZyYW1lXCI+PC9pZnJhbWU+Jyk7XHJlbGVtZW50LmFmdGVyKHdyYXBwZXIpO1xyd3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnaWZyYW1lLXdyYXBwZXInKSkuYXBwZW5kKGlmcmFtZSk7XHJlbGVtZW50LmFkZENsYXNzKCdrZWRpdG9yLWhpZGRlbi1lbGVtZW50Jyk7XHJsZXQgaWZyYW1lRG9jID0gc2VsZi5pZnJhbWVEb2MgPSBpZnJhbWUuY29udGVudHMoKTtcci8vIEZpeCBpc3N1ZSBGaXJlZm94IGNhbid0IHJlbmRlciBjb250ZW50IGluc2lkZSBpZnJhbWVcci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyaWZyYW1lRG9jLmdldCgwKS5vcGVuKCk7XHJpZnJhbWVEb2MuZ2V0KDApLmNsb3NlKCk7XHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccnNlbGYud2luZG93ID0gaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cgPyBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA6IGlmcmFtZVswXS5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJsZXQgaWZyYW1lSGVhZCA9IHNlbGYuaWZyYW1lSGVhZCA9IGlmcmFtZURvYy5maW5kKCdoZWFkJyk7XHJsZXQgaWZyYW1lQm9keSA9IHNlbGYuaWZyYW1lQm9keSA9IHNlbGYuYm9keSA9IGlmcmFtZURvYy5maW5kKCdib2R5Jyk7XHJsb2coJ0FkZGluZyBzdHlsZXMgdG8gaWZyYW1lLi4uJyk7XHJsZXQgc3R5bGVzID0gJyc7XHIkKCdbZGF0YS10eXBlPVwia2VkaXRvci1zdHlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHN0eWxlID0gJCh0aGlzKTtccmxldCBocmVmID0gc3R5bGUuYXR0cignaHJlZicpIHx8IHN0eWxlLmF0dHIoJ2RhdGEtaHJlZicpIHx8ICcnO1xyaWYgKGhyZWYpIHtccnN0eWxlcyArPSBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke2hyZWZ9XCIgLz5cXG5gO1xyfSBlbHNlIHtccnN0eWxlcyArPSBgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPiR7c3R5bGUuaHRtbCgpfTwvc3R5bGU+XFxuYDtccn1ccn0pO1xyaWYgKG9wdGlvbnMuY29udGVudFN0eWxlcyAmJiAkLmlzQXJyYXkob3B0aW9ucy5jb250ZW50U3R5bGVzKSkge1xyJC5lYWNoKG9wdGlvbnMuY29udGVudFN0eWxlcywgZnVuY3Rpb24gKGksIHN0eWxlKSB7XHJsZXQgaWRTdHIgPSAnJztccmlmIChzdHlsZS5pZCkge1xyaWRTdHIgPSBgIGlkPVwiJHtzdHlsZS5pZH1cIiBgO1xyfVxyaWYgKHN0eWxlLmhyZWYpIHtccnN0eWxlcyArPSBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke3N0eWxlLmhyZWZ9XCIgJHtpZFN0cn0gLz5cXG5gO1xyfSBlbHNlIHtccnN0eWxlcyArPSBgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiICR7aWRTdHJ9PiR7c3R5bGUuY29udGVudH08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtccn1ccmlmcmFtZUhlYWQuYXBwZW5kKHN0eWxlcyk7XHJsb2coJ0FkZGluZyBvcmlnaW5hbCBjb250ZW50IHRvIGlmcmFtZS4uLicpO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlcihvcmlnaW5hbENvbnRlbnQpO1xyaWZyYW1lQm9keS5hcHBlbmQoY29udGVudEFyZWFzV3JhcHBlcik7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIgPSBjb250ZW50QXJlYXNXcmFwcGVyO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdElmcmFtZSA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRJZnJhbWUuY2FsbChzZWxmLCBpZnJhbWUsIGlmcmFtZUhlYWQsIGlmcmFtZUJvZHkpO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWZyYW1lLCB3cmFwcGVyKSB7XHJpZiAoIXdyYXBwZXIpIHtccmlmcmFtZS53cmFwKCc8ZGl2IGNsYXNzPVwia2VkaXRvci1pZnJhbWUtd3JhcHBlci1mYWtlXCI+PC9kaXY+Jyk7XHJ3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xyfVxyd3JhcHBlci5hZGRDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xybGV0IGNvdmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItaWZyYW1lLWNvdmVyXCI+PC9kaXY+Jyk7XHJ3cmFwcGVyLnByZXBlbmQoY292ZXIpO1xyd3JhcHBlci5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtccndyYXBwZXIucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1jb3ZlcicpO1xyfSk7XHJjb3Zlci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyd3JhcHBlci5hZGRDbGFzcygnaGlkZGVuLWNvdmVyJyk7XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztccmltcG9ydCBERUZBVUxUUyBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0cyc7XHJpbXBvcnQgbG9nIGZyb20gJy4vdXRpbHMvbG9nJztcclxuaW1wb3J0IGVycm9yIGZyb20gJy4vdXRpbHMvZXJyb3InO1xyXG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL3V0aWxzL2dlbmVyYXRlSWQnO1xyXG5pbXBvcnQgZ2VuZXJhdGVUb29sYmFyIGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVUb29sYmFyJztcclxuaW1wb3J0IGdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlcic7XHJcbmltcG9ydCBiZWF1dGlmeUNhdGVnb3JpZXMgZnJvbSAnLi91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgZ2V0RGF0YUF0dHJpYnV0ZXMgZnJvbSAnLi91dGlscy9nZXREYXRhQXR0cmlidXRlcyc7XHJcbmltcG9ydCBnZXRDbGlja2VkRWxlbWVudCBmcm9tICcuL3V0aWxzL2dldENsaWNrZWRFbGVtZW50JztcclxuaW1wb3J0IGluaXRLRWRpdG9yQ2xpY2tzIGZyb20gJy4vdXRpbHMvaW5pdEtFZGl0b3JDbGlja3MnO1xyaW1wb3J0IGluaXRJZnJhbWUgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZSc7XHJcbmltcG9ydCBpbml0SWZyYW1lQ292ZXIgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZUNvdmVyJztccmltcG9ydCBpbml0U2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5pdFNpZGViYXInO1xyXG5pbXBvcnQgb3BlblNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL29wZW5TaWRlYmFyJztcclxuaW1wb3J0IGNsb3NlU2lkZWJhciBmcm9tICcuL3NpZGViYXIvY2xvc2VTaWRlYmFyJztccmltcG9ydCByZW5kZXJTbmlwcGV0cyBmcm9tICcuL3NuaXBwZXQvcmVuZGVyU25pcHBldHMnO1xyXG5pbXBvcnQgaW5pdFNuaXBwZXRzRmlsdGVyIGZyb20gJy4vc25pcHBldC9pbml0U25pcHBldHNGaWx0ZXInO1xyaW1wb3J0IGluaXRTbmlwcGV0c01vZGFsIGZyb20gJy4vbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwnO1xyXG5pbXBvcnQgb3Blbk1vZGFsIGZyb20gJy4vbW9kYWwvb3Blbk1vZGFsJztcclxuaW1wb3J0IGNsb3NlTW9kYWwgZnJvbSAnLi9tb2RhbC9jbG9zZU1vZGFsJztccmltcG9ydCBpbml0Q29udGVudEFyZWFzIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcyc7XHJcbmltcG9ydCBpbml0Q29udGVudEFyZWEgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEnO1xyaW1wb3J0IGNvbnZlcnRUb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9jb252ZXJ0VG9Db250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXJDb250ZW50JztcclxuaW1wb3J0IGdldENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvZ2V0Q29udGFpbmVyQ29udGVudCc7XHJpbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRUeXBlJztcclxuaW1wb3J0IGNvbnZlcnRUb0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9jb252ZXJ0VG9Db21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0Q29tcG9uZW50JztcclxuaW1wb3J0IGluaXREeW5hbWljQ29udGVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0RHluYW1pY0NvbnRlbnQnO1xyXG5pbXBvcnQgZGVsZXRlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2RlbGV0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCBnZXRDb21wb25lbnRDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQnO1xyaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcclxuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9kZXN0cm95JztcclxuaW1wb3J0IGdldENvbnRlbnQgZnJvbSAnLi9nZXRDb250ZW50JztcclxuaW1wb3J0IHNldENvbnRlbnQgZnJvbSAnLi9zZXRDb250ZW50JztccmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3IubGVzcyc7XHIvLyBDaGVjayBkZXBlbmRlbmNpZXNcclxuaWYgKCEkLmZuLnNvcnRhYmxlKSB7XHJlcnJvcignJC5mbi5zb3J0YWJsZSBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGltcG9ydCAkLmZuLnNvcnRhYmxlIGludG8geW91ciBkb2N1bWVudCBmb3IgY29udGludWUgdXNpbmcgS0VkaXRvci4nKTtcclxufVxyLy8gS0VkaXRvciBjbGFzc1xyXG5jbGFzcyBLRWRpdG9yIHtccnN0YXRpYyBERUZBVUxUUyA9IERFRkFVTFRTO1xyc3RhdGljIGRlYnVnID0gZmFsc2U7XHJzdGF0aWMgdmVyc2lvbiA9ICcyLjAuMCc7XHJzdGF0aWMgaW5zdGFuY2VzID0ge307XHJzdGF0aWMgY29tcG9uZW50cyA9IHtccmJsYW5rOiB7XHJzZXR0aW5nRW5hYmxlZDogZmFsc2Vccn1ccn07XHJzdGF0aWMgbG9nKC4uLmFyZ3MpIHtccmxvZyguLi5hcmdzKTtccn1ccnN0YXRpYyBlcnJvciguLi5hcmdzKSB7XHJlcnJvciguLi5hcmdzKTtccn1ccnN0YXRpYyBpbml0KHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gbmV3IEtFZGl0b3IodGFyZ2V0LCBjb25maWcpO1xyfVxyY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBpbml0LmFwcGx5KHRoaXMsIFt0YXJnZXQsIGNvbmZpZ10pO1xyfVxyZ2VuZXJhdGVJZCh0eXBlKSB7XHJyZXR1cm4gZ2VuZXJhdGVJZC5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyKGNvbnRlbnQpIHtccnJldHVybiBnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIuYXBwbHkodGhpcywgW2NvbnRlbnRdKTtccn1ccmdlbmVyYXRlVG9vbGJhcih0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xycmV0dXJuIGdlbmVyYXRlVG9vbGJhci5hcHBseSh0aGlzLCBbdHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGVdKTtccn1ccmJlYXV0aWZ5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XHJyZXR1cm4gYmVhdXRpZnlDYXRlZ29yaWVzLmFwcGx5KHRoaXMsIFtjYXRlZ29yaWVzXSk7XHJ9XHJzZXRTZXR0aW5nQ29udGFpbmVyKGNvbnRhaW5lcikge1xydGhpcy5zZXR0aW5nQ29udGFpbmVyID0gY29udGFpbmVyO1xyfVxyZ2V0U2V0dGluZ0NvbnRhaW5lcigpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb250YWluZXI7XHJ9XHJzZXRTZXR0aW5nQ29tcG9uZW50KGNvbXBvbmVudCkge1xydGhpcy5zZXR0aW5nQ29tcG9uZW50ID0gY29tcG9uZW50O1xyfVxyZ2V0U2V0dGluZ0NvbXBvbmVudCgpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb21wb25lbnQ7XHJ9XHJnZXREYXRhQXR0cmlidXRlcyh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccnJldHVybiBnZXREYXRhQXR0cmlidXRlcy5hcHBseSh0aGlzLCBbdGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5XSk7XHJ9XHJnZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudFR5cGUuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q2xpY2tlZEVsZW1lbnQoZXZlbnQsIHNlbGVjdG9yKSB7XHJyZXR1cm4gZ2V0Q2xpY2tlZEVsZW1lbnQuYXBwbHkodGhpcywgW2V2ZW50LCBzZWxlY3Rvcl0pO1xyfVxyLy8gSWZyYW1lXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdElmcmFtZSgpIHtccnJldHVybiBpbml0SWZyYW1lLmFwcGx5KHRoaXMpO1xyfVxyaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcikge1xycmV0dXJuIGluaXRJZnJhbWVDb3Zlci5hcHBseSh0aGlzLCBbaWZyYW1lLCB3cmFwcGVyXSk7XHJ9XHIvLyBLRWRpdG9yIGNsaWNrc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRLRWRpdG9yQ2xpY2tzKCkge1xycmV0dXJuIGluaXRLRWRpdG9yQ2xpY2tzLmFwcGx5KHRoaXMpO1xyfVxyLy8gU2lkZWJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTaWRlYmFyKCkge1xycmV0dXJuIGluaXRTaWRlYmFyLmFwcGx5KHRoaXMpO1xyfVxyb3BlblNpZGViYXIodGFyZ2V0KSB7XHJyZXR1cm4gb3BlblNpZGViYXIuYXBwbHkodGhpcywgW3RhcmdldF0pO1xyfVxyY2xvc2VTaWRlYmFyKCkge1xycmV0dXJuIGNsb3NlU2lkZWJhci5hcHBseSh0aGlzKTtccn1cci8vIExlZ2FjeSBtZXRob2RzLiBERVBSRUNBVEVEXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2hvd1NldHRpbmdQYW5lbCh0YXJnZXQpIHtccnRoaXMub3BlblNpZGViYXIodGFyZ2V0KTtccn1ccmhpZGVTZXR0aW5nUGFuZWwoKSB7XHJ0aGlzLmNsb3NlU2lkZWJhcigpO1xyfVxyLy8gU25pcHBldCBtb2RhbFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTbmlwcGV0c01vZGFsKCkge1xycmV0dXJuIGluaXRTbmlwcGV0c01vZGFsLmFwcGx5KHRoaXMpO1xyfVxycmVuZGVyU25pcHBldHMocmVzcCkge1xycmV0dXJuIHJlbmRlclNuaXBwZXRzLmFwcGx5KHRoaXMsIFtyZXNwXSk7XHJ9XHJpbml0U25pcHBldHNGaWx0ZXIodHlwZSkge1xycmV0dXJuIGluaXRTbmlwcGV0c0ZpbHRlci5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyb3Blbk1vZGFsKHRhcmdldCwgc25pcHBldFR5cGUpIHtccnJldHVybiBvcGVuTW9kYWwuYXBwbHkodGhpcywgW3RhcmdldCwgc25pcHBldFR5cGVdKTtccn1ccmNsb3NlTW9kYWwoKSB7XHJyZXR1cm4gY2xvc2VNb2RhbC5hcHBseSh0aGlzKTtccn1cci8vIENvbnRlbnQgYXJlYXNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0Q29udGVudEFyZWFzKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYXMuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xycmV0dXJuIGluaXRDb250ZW50QXJlYS5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcl0pO1xyfVxyLy8gQ29udGFpbmVyc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJyZXR1cm4gY29udmVydFRvQ29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgdGFyZ2V0XSk7XHJ9XHJpbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccnJldHVybiBpbml0Q29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyXSk7XHJ9XHJpbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xycmV0dXJuIGluaXRDb250YWluZXJDb250ZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZF0pO1xyfVxyLy8gQ29tcG9uZW50c1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccnJldHVybiBjb252ZXJ0VG9Db21wb25lbnQuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZ10pO1xyfVxyaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccnJldHVybiBpbml0Q29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnRdKTtccn1ccmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCkge1xycmV0dXJuIGluaXREeW5hbWljQ29udGVudC5hcHBseSh0aGlzLCBbZHluYW1pY0VsZW1lbnRdKTtccn1ccmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpIHtccnJldHVybiBkZWxldGVDb21wb25lbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyLy8gR2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJnZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudENvbnRlbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJyZXR1cm4gZ2V0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGFpbmVyLCBpc05lc3RlZF0pO1xyfVxyZ2V0Q29udGVudChpbkFycmF5KSB7XHJyZXR1cm4gZ2V0Q29udGVudC5hcHBseSh0aGlzLCBbaW5BcnJheV0pO1xyfVxyLy8gU2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJzZXRDb250ZW50KGNvbnRlbnQsIGNvbnRlbnRBcmVhKSB7XHJyZXR1cm4gc2V0Q29udGVudC5hcHBseSh0aGlzLCBbY29udGVudCwgY29udGVudEFyZWFdKTtccn1cci8vIERlc3Ryb3lcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJkZXN0cm95KCkge1xycmV0dXJuIGRlc3Ryb3kuYXBwbHkodGhpcyk7XHJ9XHJcbn1cci8vIEtFZGl0b3IgcGx1Z2luc1xyXG4kLmZuLmtlZGl0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xybGV0IGVsZW1lbnQgPSAkKHRoaXMpO1xybGV0IGluc3RhbmNlID0gZWxlbWVudC5kYXRhKCdrZWRpdG9yJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Vbb3B0aW9uc10gJiYgdHlwZW9mIGluc3RhbmNlW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJyZXR1cm4gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyfVxyfSBlbHNlIHtccmlmICghaW5zdGFuY2UpIHtccmluc3RhbmNlID0gS0VkaXRvci5pbml0KGVsZW1lbnQsIG9wdGlvbnMpO1xyZWxlbWVudC5kYXRhKCdrZWRpdG9yJywgaW5zdGFuY2UpO1xyfVxycmV0dXJuIGluc3RhbmNlO1xyfVxyXG59O1xyd2luZG93LktFZGl0b3IgPSAkLmtlZGl0b3IgPSAkLmZuLmtlZGl0b3IuY29uc3RydWN0b3IgPSBLRWRpdG9yO1xyXG4iLCJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyXG5pbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBjb25maWcpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50ID0gdGFyZ2V0O1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgREVGQVVMVFMsIGNvbmZpZyk7XHJpZiAob3B0aW9ucy5pZnJhbWVNb2RlKSB7XHJzZWxmLmluaXRJZnJhbWUoKTtccn0gZWxzZSB7XHJzZWxmLndpbmRvdyA9IHdpbmRvdztccnNlbGYuYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gZWxlbWVudC52YWwoKSB8fCBlbGVtZW50Lmh0bWwoKSB8fCAnJztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIob3JpZ2luYWxDb250ZW50KTtccmlmIChlbGVtZW50LmlzKCd0ZXh0YXJlYScpKSB7XHJlbGVtZW50LmFmdGVyKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyZWxlbWVudC5hZGRDbGFzcyhDTEFTU19OQU1FUy5ISURERU5fRUxFTUVOVCk7XHJ9IGVsc2Uge1xyZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXNXcmFwcGVyKTtccn1ccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9IGNvbnRlbnRBcmVhc1dyYXBwZXI7XHJ9XHJzZWxmLmluaXRTaWRlYmFyKCk7XHJzZWxmLmluaXRTbmlwcGV0c01vZGFsKCk7XHJzZWxmLmluaXRDb250ZW50QXJlYXMoKTtccmlmICghc2VsZi5ib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVTLkNMSUNLU19JTklUSUFMSVpFRCkpIHtccnNlbGYuaW5pdEtFZGl0b3JDbGlja3MoKTtccn1ccnNlbGYuaWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccktFZGl0b3IuaW5zdGFuY2VzW3NlbGYuaWRdID0gc2VsZjtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblJlYWR5ID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uUmVhZHkuY2FsbChzZWxmKTtccn1cclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xyc2VsZi5tb2RhbFRhcmdldCA9IG51bGw7XHJzZWxmLm1vZGFsQWN0aW9uID0gbnVsbDtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbCgnJyk7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIC5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xybW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJcbmltcG9ydCBlcnJvciBmcm9tICcuLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IG1vZGFsSWQgPSBzZWxmLmdlbmVyYXRlSWQoJ21vZGFsJyk7XHJsZXQgc25pcHBldHNXcmFwcGVySHRtbCA9ICcnO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb250YWluZXJcIj48L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudFwiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfSBlbHNlIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0c1wiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfVxybGV0IG1vZGFsID0gc2VsZi5tb2RhbCA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1tb2RhbFwiIGlkPVwiJHttb2RhbElkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtaGVhZGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHI8aDQgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLXRpdGxlXCI+PC9oND5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtYm9keVwiPiR7c25pcHBldHNXcmFwcGVySHRtbH08L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWZvb3RlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQga2VkaXRvci1tb2RhbC1jbG9zZVwiPkNsb3NlPC9idXR0b24+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tcHJpbWFyeSBrZWRpdG9yLW1vZGFsLWFkZFwiPkFkZDwvYnV0dG9uPlxyPC9kaXY+XHI8L2Rpdj5ccmApO1xyaWYgKHR5cGVvZiBvcHRpb25zLnNuaXBwZXRzVXJsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLnNuaXBwZXRzVXJsLmxlbmd0aCA+IDApIHtccmxvZyhgR2V0dGluZyBzbmlwcGV0cyBmb3JtIFwiJHtvcHRpb25zLnNuaXBwZXRzVXJsfVwiLi4uYCk7XHIkLmFqYXgoe1xydHlwZTogJ2dldCcsXHJkYXRhVHlwZTogJ2h0bWwnLFxydXJsOiBvcHRpb25zLnNuaXBwZXRzVXJsLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3ApIHtccmxvZygnU3VjY2VzcyBpbiBnZXR0aW5nIHNuaXBwZXRzJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0xvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xycmVzcCA9IG9wdGlvbnMub25TbmlwcGV0c0xvYWRlZC5jYWxsKHNlbGYsIHJlc3ApIHx8IHJlc3A7XHJ9XHJzZWxmLnJlbmRlclNuaXBwZXRzKHJlc3ApO1xyaWYgKG9wdGlvbnMuc25pcHBldHNGaWx0ZXJFbmFibGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQ09OVEFJTkVSKTtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSBlbHNlIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5BTEwpO1xyfVxyfVxyfSxccmVycm9yOiBmdW5jdGlvbiAoanFYSFIpIHtccmxvZygnRXJyb3Igd2hlbiBnZXR0aW5nIHNuaXBwZXRzJywganFYSFIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vblNuaXBwZXRzRXJyb3IuY2FsbChzZWxmLCBqcVhIUik7XHJ9XHJ9XHJ9KTtcci8vIENsb3NlIGJ1dHRvbnNccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBZGQgYnV0dG9uXHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1hZGQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNlbGVjdGVkU25pcHBldCA9IG1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRTbmlwcGV0Lmxlbmd0aCA9PT0gMCkge1xycmV0dXJuO1xyfVxybGV0IGNvbnRlbnRBcmVhID0gc2VsZi5tb2RhbFRhcmdldC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBzbmlwcGV0VHlwZSA9IHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCBzbmlwcGV0Q29udGVudEVsZW1lbnQgPSBtb2RhbC5maW5kKHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXNuaXBwZXQnKSk7XHJsZXQgc25pcHBldENvbnRlbnQgPSBzbmlwcGV0Q29udGVudEVsZW1lbnQuaHRtbCgpO1xybGV0IGlzQWRkaW5nQ29udGFpbmVyID0gZmFsc2U7XHJsZXQgaXNBZGRpbmdDb21wb25lbnQgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSBmYWxzZTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnN3aXRjaCAoc2VsZi5tb2RhbFNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJpc0FkZGluZ0NvbXBvbmVudCA9IHRydWU7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn0gZWxzZSB7XHJpZiAoc25pcHBldFR5cGUgPT09ICdjb250YWluZXInKSB7XHJpc0FkZGluZ0NvbnRhaW5lciA9IHRydWU7XHJ9IGVsc2Uge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyaWYgKHNlbGYubW9kYWxUYXJnZXQuaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyJykpIHtccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccn0gZWxzZSB7XHJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSB0cnVlO1xyfVxyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyfVxybGV0IG5ld0NvbnRhaW5lcjtccmxldCBuZXdDb21wb25lbnQ7XHJpZiAoaXNBZGRpbmdDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29tcG9uZW50KTtccmxldCBjb250YWluZXIgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccn1ccmlmIChpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke29wdGlvbnMuY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xybmV3Q29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmVxKDApLmh0bWwobmV3Q29tcG9uZW50KTtccnNlbGYubW9kYWxUYXJnZXQuYXBwZW5kKG5ld0NvbnRhaW5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccn1ccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBY3Rpb24gY2xpY2sgZm9yIHNuaXBwZXRccm1vZGFsLm9uKCdjbGljaycsICcua2VkaXRvci1zbmlwcGV0JywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmlmICghc25pcHBldC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyc25pcHBldC5wYXJlbnQoKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccnNuaXBwZXQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJ9XHJ9KTtccmxldCBjc3NUcmFuc2l0aW9uRW5kID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnO1xybW9kYWwub24oY3NzVHJhbnNpdGlvbkVuZCwgKCkgPT4ge1xyaWYgKCFtb2RhbC5oYXNDbGFzcygnc2hvd2VkJykpIHtccm1vZGFsLmNzcygnZGlzcGxheScsICdub25lJyk7XHIkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKCdvcGVuZWQtbW9kYWwnKTtccn1ccn0pO1xybW9kYWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJ9IGVsc2Uge1xyZXJyb3IoJ1wic25pcHBldHNVcmxcIiBtdXN0IGJlIG5vdCBudWxsIScpO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJsb2coJ29wZW5Nb2RhbCcsIHRhcmdldCwgc25pcHBldFR5cGUpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IG1vZGFsVGl0bGUgPSAnJztccnN3aXRjaCAoc25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccm1vZGFsVGl0bGUgPSAnQWRkIGNvbnRhaW5lcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccm1vZGFsVGl0bGUgPSAnQWRkIGNvbXBvbmVudCc7XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtccm1vZGFsLmZpbmQoc25pcHBldFR5cGUgPT09IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgPyAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnQnIDogJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJ9IGVsc2Uge1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcicpLmNzcygnZGlzcGxheScsICdibG9jaycpLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRbZGF0YS10eXBlPWNvbnRhaW5lcl0nKS5jc3MoJ2Rpc3BsYXknLCBzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICdub25lJyA6ICdibG9jaycpO1xybW9kYWxUaXRsZSA9ICdBZGQgY29udGVudCc7XHJ9XHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC10aXRsZScpLmh0bWwobW9kYWxUaXRsZSk7XHJzZWxmLm1vZGFsVGFyZ2V0ID0gdGFyZ2V0O1xyc2VsZi5tb2RhbFNuaXBwZXRUeXBlID0gc25pcHBldFR5cGU7XHJtb2RhbC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcciQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyc2V0VGltZW91dCgoKSA9PiB7XHJtb2RhbC5hZGRDbGFzcygnc2hvd2VkJyk7XHJ9LCAwKTtcclxufTtcclxuIiwiaW1wb3J0IGVycm9yIGZyb20gXCIuL3V0aWxzL2Vycm9yXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudCwgY29udGVudEFyZWEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xyaWYgKCFjb250ZW50QXJlYSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmNoaWxkcmVuKCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccn0gZWxzZSB7XHJpZiAoIWNvbnRlbnRBcmVhLmpxdWVyeSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoY29udGVudEFyZWEpO1xyfVxyfVxyaWYgKGNvbnRlbnRBcmVhLmxlbmd0aCA9PT0gMCkge1xyZXJyb3IoJ0NvbnRlbnQgYXJlYSBkb2VzIG5vdCBleGlzdCEnKTtccn1ccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudCk7XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSwgdHJ1ZSk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5JykuY2hpbGRyZW4oJy5hY3RpdmUnKTtccmlmIChhY3RpdmVGb3JtLmxlbmd0aCA+IDApIHtccmlmIChhY3RpdmVGb3JtLmlzKCcua2VkaXRvci1jb250YWluZXItc2V0dGluZycpKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uLmNhbGwoc2VsZiwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9IGVsc2Uge1xybGV0IGFjdGl2ZVR5cGUgPSBhY3RpdmVGb3JtLmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbYWN0aXZlVHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmhpZGVTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIGFjdGl2ZUZvcm0sIHNlbGYpO1xyfVxyfVxyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJ9XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQobnVsbCk7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIobnVsbCk7XHJzaWRlYmFyLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcclxufSIsImltcG9ydCBlcnJvciBmcm9tIFwiLi4vdXRpbHMvZXJyb3JcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhcklkID0gc2VsZi5nZW5lcmF0ZUlkKCdzaWRlYmFyJyk7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhciA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zaWRlYmFyXCIgaWQ9XCIke3NpZGViYXJJZH1cIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1oZWFkZXJcIj5ccjxzcGFuIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItdGl0bGVcIj48L3NwYW4+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItY2xvc2VcIj4mdGltZXM7PC9hPlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItYm9keVwiPjwvZGl2PlxyPC9kaXY+XHJgKTtccnNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfSk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItYm9keScpO1xyc2lkZWJhckJvZHkub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnJldHVybiBmYWxzZTtccn0pO1xyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgZm9ybSA9ICQoJzxkaXYgIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNldHRpbmctZm9ybSBrZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nXCI+PC9kaXY+Jyk7XHJzaWRlYmFyQm9keS5hcHBlbmQoZm9ybSk7XHJsb2coJ0luaXRpYWxpemUgY29udGFpbmVyIHNldHRpbmcgcGFuZWwnKTtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbi5jYWxsKHNlbGYsIGZvcm0sIHNlbGYpO1xyfSBlbHNlIHtccmVycm9yKCdcImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb25cIiBpcyBub3QgZnVuY3Rpb24hJyk7XHJ9XHJ9XHJzaWRlYmFyLmFwcGVuZFRvKG9wdGlvbnMuaWZyYW1lTW9kZSA/IHNlbGYuaWZyYW1lV3JhcHBlciA6IHNlbGYuYm9keSk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgc2lkZWJhclRpdGxlID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLXRpdGxlJyk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItYm9keScpO1xybGV0IGFjdGl2ZUZvcm0gPSBzaWRlYmFyQm9keS5jaGlsZHJlbignLmFjdGl2ZScpO1xyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIobnVsbCk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZSh0YXJnZXQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJzaWRlYmFyVGl0bGUuaHRtbChjb21wb25lbnREYXRhLnNldHRpbmdUaXRsZSk7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyQm9keS5maW5kKGAua2VkaXRvci1zZXR0aW5nLSR7Y29tcG9uZW50VHlwZX1gKTtccmlmIChzZXR0aW5nRm9ybS5sZW5ndGggPT09IDApIHtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyc2V0dGluZ0Zvcm0gPSAkKGBccjxkaXZccmRhdGEtdHlwZT1cIiR7Y29tcG9uZW50VHlwZX1cIlxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2V0dGluZy1mb3JtIGtlZGl0b3Itc2V0dGluZy0ke2NvbXBvbmVudFR5cGV9IGNsZWFyZml4IGFjdGl2ZVwiXHI+XHI8L2Rpdj5ccmApO1xybGV0IGxvYWRpbmdUZXh0ID0gJCgnPHNwYW4gLz4nKS5odG1sKCdMb2FkaW5nLi4uJyk7XHJzaWRlYmFyQm9keS5hcHBlbmQoc2V0dGluZ0Zvcm0pO1xyc2V0dGluZ0Zvcm0uYXBwZW5kKGxvYWRpbmdUZXh0KTtccmxldCBpbml0RnVuY3Rpb24gPSBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCBzZWxmKTtcciQud2hlbihpbml0RnVuY3Rpb24pLmRvbmUoZnVuY3Rpb24gKCkge1xybG9nKGBJbml0aWFsaXplZCBzZXR0aW5nIGZvcm0gZm9yIGNvbXBvbmVudCB0eXBlIFwiJHtjb21wb25lbnRUeXBlfVwiYCk7XHJzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtccmxvYWRpbmdUZXh0LnJlbW92ZSgpO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgdGFyZ2V0LCBzZWxmKTtccn1ccn0sIDEwMCk7XHJ9KTtccn1ccn0gZWxzZSB7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyfVxyfSBlbHNlIHtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcih0YXJnZXQpO1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KG51bGwpO1xyc2lkZWJhclRpdGxlLmh0bWwoJ0NvbnRhaW5lciBTZXR0aW5ncycpO1xybGV0IHNldHRpbmdGb3JtID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1jb250YWluZXItc2V0dGluZycpO1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbi5jYWxsKHNlbGYsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyfVxyc2lkZWJhci5hZGRDbGFzcygnb3BlbmVkJyk7XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxvZygnaW5pdFNuaXBwZXRzRmlsdGVyJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJsZXQgY2F0ZWdvcmllcztccmxldCBzbmlwcGV0c1dyYXBwZXJTZWxlY3RvcjtccnN3aXRjaCAodHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnQnO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxybGV0IGNhdGVnb3JpZXNPcHRpb25zID0gJyc7XHIkLmVhY2goY2F0ZWdvcmllcywgZnVuY3Rpb24gKGksIGNhdGVnb3J5KSB7XHJjYXRlZ29yaWVzT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7Y2F0ZWdvcnl9XCI+JHtjYXRlZ29yeX08L29wdGlvbj5gO1xyfSk7XHJsZXQgc25pcHBldHNXcmFwcGVyID0gbW9kYWwuZmluZChzbmlwcGV0c1dyYXBwZXJTZWxlY3Rvcik7XHJsZXQgc25pcHBldHMgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5jaGlsZHJlbignLmtlZGl0b3Itc25pcHBldCcpO1xyc25pcHBldHNXcmFwcGVyLnByZXBlbmQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXItd3JhcHBlclwiPlxyPHNlbGVjdCBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXJcIj5ccjxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+QWxsPC9vcHRpb24+XHIke2NhdGVnb3JpZXNPcHRpb25zfVxyPC9zZWxlY3Q+XHI8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1zZWFyY2hcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiVHlwZSB0byBzZWFyY2guLi5cIiAvPlxyPC9kaXY+XHJgKTtccnNuaXBwZXRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGNhdGVnb3JpZXMgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJykgfHwgJyc7XHJsZXQgZmlsdGVyQ2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMudG9Mb3dlckNhc2UoKTtccmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccmZpbHRlckNhdGVnb3JpZXMgPSBmaWx0ZXJDYXRlZ29yaWVzLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccnNuaXBwZXQuZGF0YSgnY2F0ZWdvcmllcycsIGNhdGVnb3JpZXMpO1xyc25pcHBldC5kYXRhKCdjYXRlZ29yaWVzRmlsdGVyJywgZmlsdGVyQ2F0ZWdvcmllcyk7XHJ9KTtccmxldCB0eHRTZWFyY2ggPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtc2VhcmNoJyk7XHJsZXQgY2JiRmlsdGVyID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWZpbHRlcicpO1xybGV0IGRvRmlsdGVyID0gZnVuY3Rpb24gKCkge1xybGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSAoY2JiRmlsdGVyLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xybGV0IHNlYXJjaFRleHQgPSAodHh0U2VhcmNoLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyc25pcHBldHMuZmlsdGVyKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZENhdGVnb3J5IHx8IHNlYXJjaFRleHQpIHtccmxvZygnRmlsdGVyaW5nIHNuaXBwZXRzJyk7XHJzbmlwcGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBkYXRhQ2F0ZWdvcmllcyA9IHNuaXBwZXQuZGF0YSgnY2F0ZWdvcmllc0ZpbHRlcicpO1xybGV0IGRhdGFDYXRlZ29yaWVzU3RyaW5nID0gZGF0YUNhdGVnb3JpZXMuam9pbignOycpO1xybGV0IGVycm9yID0gMDtccmlmIChzZWxlY3RlZENhdGVnb3J5KSB7XHJpZiAoJC5pbkFycmF5KHNlbGVjdGVkQ2F0ZWdvcnksIGRhdGFDYXRlZ29yaWVzKSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJpZiAoc2VhcmNoVGV4dCkge1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCd0aXRsZScpLnRvTG93ZXJDYXNlKCk7XHJpZiAodGl0bGUuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEgJiYgZGF0YUNhdGVnb3JpZXNTdHJpbmcuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJzbmlwcGV0W2Vycm9yID09PSAwID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKCdub3QtbWF0Y2hlZCcpO1xyfSk7XHJ9IGVsc2Uge1xybG9nKCdTaG93IGFsbCBzbmlwcGV0cycpO1xyc25pcHBldHMucmVtb3ZlQ2xhc3MoJ25vdC1tYXRjaGVkJyk7XHJ9XHJ9O1xyY2JiRmlsdGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJkb0ZpbHRlcigpO1xyfSk7XHJsZXQgdGltZXI7XHJ0eHRTZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XHJjbGVhclRpbWVvdXQodGltZXIpO1xydGltZXIgPSBzZXRUaW1lb3V0KGRvRmlsdGVyLCAyMDApO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwKSB7XHJsb2coJ3JlbmRlclNuaXBwZXRzJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0c0NvbnRhaW5lckh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbXBvbmVudEh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbnRlbnRIdG1sID0gJyc7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gW107XHIkKHJlc3ApLmZpbHRlcignZGl2JykuZWFjaChmdW5jdGlvbiAoaSkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IHNuaXBwZXRJZCA9IHNlbGYuZ2VuZXJhdGVJZCgnc25pcHBldCcpO1xybGV0IGNvbnRlbnQgPSBzbmlwcGV0Lmh0bWwoKS50cmltKCk7XHJsZXQgcHJldmlld1VybCA9IHNuaXBwZXQuYXR0cignZGF0YS1wcmV2aWV3Jyk7XHJsZXQgdHlwZSA9IHNuaXBwZXQuYXR0cignZGF0YS10eXBlJyk7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci10aXRsZScpO1xybGV0IGNhdGVnb3JpZXMgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJykgfHwgJyc7XHJsZXQgc25pcHBldEh0bWwgPSBgXHI8c2VjdGlvblxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldFwiXHJkYXRhLXNuaXBwZXQ9XCIjJHtzbmlwcGV0SWR9XCJccmRhdGEtdHlwZT1cIiR7dHlwZX1cIlxydGl0bGU9XCIke3RpdGxlfVwiXHJkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcz1cIiR7Y2F0ZWdvcmllc31cIlxyPlxyPHNwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlld1VybH0nKVwiPjwvc3Bhbj48L3NwYW4+XHI8L3NlY3Rpb24+XHJgO1xyY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzbmlwcGV0c0NvbnRhaW5lckh0bWwgKz0gc25pcHBldEh0bWw7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLmNvbmNhdChjYXRlZ29yaWVzKTtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNuaXBwZXRzQ29tcG9uZW50SHRtbCArPSBzbmlwcGV0SHRtbDtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMuY29uY2F0KGNhdGVnb3JpZXMpO1xyfVxybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhzbmlwcGV0LCBbJ2RhdGEtcHJldmlldycsICdkYXRhLXR5cGUnLCAnZGF0YS1rZWRpdG9yLXRpdGxlJywgJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJ10sIHRydWUpO1xyc25pcHBldHNDb250ZW50SHRtbCArPSBgPHNjcmlwdCBpZD1cIiR7c25pcHBldElkfVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+JHtjb250ZW50fTwvc2NyaXB0PmA7XHJ9KTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwpO1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnQnKS5odG1sKHNuaXBwZXRzQ29tcG9uZW50SHRtbCk7XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmh0bWwoc25pcHBldHNDb250YWluZXJIdG1sICsgc25pcHBldHNDb21wb25lbnRIdG1sKVxyfVxyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1ib2R5JykuYXBwZW5kKHNuaXBwZXRzQ29udGVudEh0bWwpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2F0ZWdvcmllcykge1xybGV0IG5ld0FycmF5ID0gW107XHJmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtccmxldCBjYXRlZ29yeSA9IGNhdGVnb3JpZXNbaV0gfHwgJyc7XHJpZiAoY2F0ZWdvcnkgIT09ICcnICYmICQuaW5BcnJheShjYXRlZ29yeSwgbmV3QXJyYXkpID09PSAtMSkge1xybmV3QXJyYXkucHVzaChjYXRlZ29yeSk7XHJ9XHJ9XHJyZXR1cm4gbmV3QXJyYXkuc29ydCgpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZSkgPT4ge1xydGhyb3cgbmV3IEVycm9yKGBbIEtFZGl0b3IgXSAke21lc3NhZ2V9YCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gJChvcHRpb25zLmNvbnRlbnRBcmVhc1dyYXBwZXIgfHwgJzxkaXYgLz4nKTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignY2xhc3MnLCAna2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS13cmFwcGVyJyk7XHJpZiAoIWNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignaWQnKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGVudC1hcmVhLXdyYXBwZXInKSk7XHJ9XHJjb250ZW50QXJlYXNXcmFwcGVyLmh0bWwoY29udGVudCk7XHJyZXR1cm4gY29udGVudEFyZWFzV3JhcHBlcjtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHR5cGUgPSAnJykgPT4ge1xybGV0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJsZXQgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTg3NjU0MzIxMCk7XHJyZXR1cm4gYGtlZGl0b3ItJHt0eXBlfS0ke3RpbWVzdGFtcH0ke3JhbmRvbX1gO1xyXG59O1xyXG4iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy90b29sYmFyVHlwZSc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNldHRpbmdCdG4gPSAnJztccmlmICghb3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJsZXQgdG9vbGJhckNsYXNzID0gJyc7XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUE6XHJ0b29sYmFyQ2xhc3MgPSAna2VkaXRvci1jb250ZW50LWFyZWEtdG9vbGJhcic7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhcic7XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpICR7dG9vbGJhckNsYXNzfVwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGVudFwiIHRpdGxlPVwiQWRkIGNvbnRlbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29udGVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUE6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRhaW5lclwiIHRpdGxlPVwiQWRkIGNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSOlxyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb250YWluZXJUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb250YWluZXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29udGFpbmVyVGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSOlxyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb250YWluZXJUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb250YWluZXIga2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29udGFpbmVyVGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVDpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyIGtlZGl0b3ItYnRuLWdyb3VwXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBzdWItY29udGFpbmVyXCI+JHtvcHRpb25zLmJ0bkFkZFN1YkNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29tcG9uZW50XCIgdGl0bGU9XCJBZGQgY29tcG9uZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29tcG9uZW50XCIgdGl0bGU9XCJBZGQgY29tcG9uZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT01QT05FTlQ6XHJpZiAoaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb21wb25lbnRUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb21wb25lbnRcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29tcG9uZW50VGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb21wb25lbnRUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0b3IpIHtccmxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJsZXQgY2xvc2VzdCA9IHRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtccmlmICh0YXJnZXQuaXMoc2VsZWN0b3IpKSB7XHJyZXR1cm4gdGFyZ2V0O1xyfSBlbHNlIGlmIChjbG9zZXN0Lmxlbmd0aCA+IDApIHtccnJldHVybiBjbG9zZXN0O1xyfSBlbHNlIHtccnJldHVybiBudWxsO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBpc0FycmF5ID8gW10gOiB7fTtccmlmICghaWdub3JlQXR0cmlidXRlcykge1xyaWdub3JlQXR0cmlidXRlcyA9IFtdO1xyfVxyJC5lYWNoKHRhcmdldC5nZXQoMCkuYXR0cmlidXRlcywgZnVuY3Rpb24gKGksIGF0dHIpIHtccmlmIChhdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA9PT0gMCAmJiAkLmluQXJyYXkoYXR0ci5uYW1lLCBpZ25vcmVBdHRyaWJ1dGVzKSA9PT0gLTEpIHtccmlmIChpc0FycmF5KSB7XHJkYXRhQXR0cmlidXRlcy5wdXNoKGAke2F0dHIubmFtZX09XCIke2F0dHIudmFsdWV9XCJgKTtccn0gZWxzZSB7XHJkYXRhQXR0cmlidXRlc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtccn1ccn1ccn0pO1xycmV0dXJuIGRhdGFBdHRyaWJ1dGVzO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsb2coJ2luaXRLRWRpdG9yQ2xpY2tzJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBib2R5ID0gc2VsZi5ib2R5O1xyYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xybGV0IHNpZGViYXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1zaWRlYmFyJyk7XHJsZXQgbW9kYWwgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1tb2RhbCcpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRhaW5lcikge1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhciAmJiAhbW9kYWwpIHtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJsZXQgY29tcG9uZW50ID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29tcG9uZW50KSB7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbXBvbmVudC5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhcikge1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29udGFpbmVyLXNldHRpbmcnLCBidG4pO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgYm9keS5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbnRhaW5lci5pcyhzZWxmLnNldHRpbmdDb250YWluZXIpKSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9IGVsc2Uge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWR1cGxpY2F0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgYnRuKTtccmxldCBjb250YWluZXIgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29udGFpbmVyID0gJChzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBidG4ucGFyZW50KCkuaGFzQ2xhc3MoJ2tlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyJykpKTtccmNvbnRhaW5lci5hZnRlcihuZXdDb250YWluZXIpO1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJsb2coJ0NvbnRhaW5lciBpcyBkdXBsaWNhdGVkJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29udGFpbmVyLWRlbGV0ZScsIGJ0bik7XHJpZiAoY29uZmlybShvcHRpb25zLmNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0KSkge1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb21wb25lbnRzID0gY29udGFpbmVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBzZXR0aW5nQ29tcG9uZW50ID0gc2VsZi5zZXR0aW5nQ29tcG9uZW50O1xyaWYgKHNldHRpbmdDb21wb25lbnQpIHtccmxldCBzZXR0aW5nQ29tcG9uZW50UGFyZW50ID0gc2V0dGluZ0NvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChzZXR0aW5nQ29tcG9uZW50UGFyZW50LmlzKGNvbnRhaW5lcikpIHtccmxvZygnRGVsZXRpbmcgY29udGFpbmVyIGlzIGNvbnRhaW5lciBvZiBzZXR0aW5nIGNvbnRhaW5lci4gQ2xvc2Ugc2V0dGluZyBwYW5lbCBmb3IgdGhpcyBzZXR0aW5nIGNvbXBvbmVudCcsIHNldHRpbmdDb21wb25lbnQpO1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSBpZiAoY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccmxvZygnRGVsZXRpbmcgY29udGFpbmVyIGlzIHNldHRpbmcgY29udGFpbmVyLiBDbG9zZSBzZXR0aW5nIHBhbmVsIGZvciB0aGlzIGNvbnRhaW5lcicsIGNvbnRhaW5lcik7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xyY29tcG9uZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtccnNlbGYuZGVsZXRlQ29tcG9uZW50KCQodGhpcykpO1xyfSk7XHJ9XHJjb250YWluZXIucmVtb3ZlKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtc2V0dGluZycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb21wb25lbnQtc2V0dGluZycsIGJ0bik7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xyaWYgKGJvZHkuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29tcG9uZW50LmlzKHNlbGYuc2V0dGluZ0NvbXBvbmVudCgpKSkge1xyc2VsZi5vcGVuU2lkZWJhcihjb21wb25lbnQpO1xyfSBlbHNlIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5vcGVuU2lkZWJhcihjb21wb25lbnQpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1kdXBsaWNhdGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29tcG9uZW50LWR1cGxpY2F0ZScsIGJ0bik7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRhaW5lciA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb21wb25lbnQgPSAkKHNlbGYuZ2V0Q29tcG9uZW50Q29udGVudChjb21wb25lbnQpKTtccmNvbXBvbmVudC5hZnRlcihuZXdDb21wb25lbnQpO1xyc2VsZi5jb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccmxvZygnQ29tcG9uZW50IGlzIGR1cGxpY2F0ZWQnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudER1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29tcG9uZW50LWRlbGV0ZScsIGJ0bik7XHJpZiAoY29uZmlybShvcHRpb25zLmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0KSkge1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKGNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQpKSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyc2VsZi5kZWxldGVDb21wb25lbnQoY29tcG9uZW50KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudERlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnREZWxldGVkLmNhbGwoc2VsZiwgZSwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyYm9keS5hZGRDbGFzcygna2VkaXRvci1jbGlja3MtaW5pdGlhbGl6ZWQnKTtcclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztccmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJpZiAoY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicgJiYgJC5rZWRpdG9yLmRlYnVnKSB7XHJjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1sgS0VkaXRvciBdICcsIC4uLmFyZ3NdKTtccn1cclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=