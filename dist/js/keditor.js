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
    success: function success(response, status, jqXHR) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Dynamic content is loaded', dynamicElement, response, status, jqXHR);
      dynamicElement.html(response);

      if (typeof options.onDynamicContentLoaded === 'function') {
        options.onDynamicContentLoaded.call(self, dynamicElement, jqXHR, contentArea);
      }
    },
    error: function error(jqXHR, textStatus, errorThrown) {
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Error when loading dynamic content', dynamicElement, jqXHR, textStatus, errorThrown);

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
  // Enable nested container or not
  // @option {Boolean}
  nestedContainerEnabled: true,
  // Enable explicit snippet or not. When disable, there is only one button for adding. If add button is in content area or container, you can add component or containers. If add button is in sub-container, you just can add only component. When you add component in content area, please make sure you config "containerForQuickAddComponent" option
  // @option {Boolean}
  explicitSnippetEnabled: false,
  // containerForQuickAddComponent The container snippet which will be added automatically in content are when you adding a component. Note: component will be added in first container content of container
  // @option {String}
  containerForQuickAddComponent: "\n<div class=\"row\">\n<div class=\"col-sm-12\" data-type=\"container-content\">\n</div>\n</div>\n",
  // Text content for add content button. This available only when "explicitSippetEnabled" is "false"
  // @option {String}
  btnAddContentText: '<i class="fa fa-plus"></i>',
  // Text content for add container button
  // @option {String}
  btnAddContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
  // Text content for add sub-container button
  // @option {String}
  btnAddSubContainerText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-columns"></i>',
  // Text content for add component button
  // @option {String}
  btnAddComponentText: '<i class="fa fa-plus"></i> <i class="fa fa-fw fa-list-ul"></i>',
  // Text content for move button of container
  // @option {String}
  btnMoveContainerText: '<i class="fa fa-sort"></i>',
  // Text content for move button of component
  // @option {String}
  btnMoveComponentText: '<i class="fa fa-arrows"></i>',
  // Text content for setting button of container
  // @option {String}
  btnSettingContainerText: '<i class="fa fa-cog"></i>',
  // Text content for setting button of component
  // @option {String}
  btnSettingComponentText: '<i class="fa fa-cog"></i>',
  // Text content for duplicate button of container
  // @option {String}
  btnDuplicateContainerText: '<i class="fa fa-files-o"></i>',
  // Text content for duplicate button of component
  // @option {String}
  btnDuplicateComponentText: '<i class="fa fa-files-o"></i>',
  // Text content for delete button of container
  // @option {String}
  btnDeleteContainerText: '<i class="fa fa-times"></i>',
  // Text content for delete button of component
  // @option {String}
  btnDeleteComponentText: '<i class="fa fa-times"></i>',
  // Text content for confirm dialog when deleting container
  // @option {String}
  confirmDeleteContainerText: 'Are you sure that you want to delete this container? This action can not be undone!',
  // Text content for confirm dialog when deleting container
  // @option {String}
  confirmDeleteComponentText: 'Are you sure that you want to delete this component? This action can not be undone!',
  // Default component type of component. If type of component does not exist in KEditor.components, will be used "defaultComponentType" as type of this component. If is function, argument is component
  // @option {String|Function}
  // @param {jQuery} component
  defaultComponentType: 'blank',
  // Url to snippets file
  // @option {String}
  snippetsUrl: 'snippets/snippets.html',
  // Enable filtering snippets by categories and text searching or not
  // @option {Boolean}
  snippetsFilterEnabled: true,
  // The separator character between each categories
  // @option {String}
  snippetsCategoriesSeparator: ';',
  // KEditor is created inside an iframe or not. KEditor is created inside an iframe or not. KEditor will add all elements which have 'data-type=keditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element
  // @option {Boolean}
  iframeMode: false,
  // Content styles for iframe mode
  // @option {Array<Object>}
  // @example:
  // [
  //     {
  //         href: '/path/to/style/file'
  //     }, {
  //         content: 'a { color: red; }'
  //     }
  // ]
  contentStyles: [],
  // Selector of content areas. If is null or selector does not match any elements, will create default content area and wrap all content inside it.
  // @option {String}
  contentAreasSelector: null,
  // The wrapper element for all contents inside iframe or new div which will contains content of textarea. It's just for displaying purpose. If you want all contents inside iframe are appended into body tag, just leave it as blank
  // @option {String}
  contentAreasWrapper: "<div class=\"".concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].CONTENT_AREAS_WRAPPER, "\"></div>"),
  // Enable setting panel for container
  // @option {Boolean}
  containerSettingEnabled: false,
  // Method will be called when initializing setting panel for container
  // @option {Function}
  // @param {jQuery} container
  // @param {KEditor} keditorInstance
  containerSettingInitFunction: null,
  // Method will be called when setting panel for container is showed
  // @option {Function}
  // @param {jQuery} settingForm
  // @param {jQuery} container
  // @param {KEditor} keditorInstance
  containerSettingShowFunction: null,
  // Method will be called when setting panel for container is hidden
  // @option {Function}
  // @param {jQuery} settingForm
  // @param {KEditor} keditorInstance
  containerSettingHideFunction: null,
  // Callback will be called after keditor instance is ready
  // @option {Function}
  onReady: function onReady() {},
  // Callback will be called after snippets are loaded. If you want to modify snippets content, please return modified
  // @option {Function}
  // @param {String} resp
  // @return {String}
  onSnippetsLoaded: function onSnippetsLoaded(resp) {},
  // Callback will be called when error in loading snippets
  // @option {Function}
  // @param {jqXHR} jqXHR
  onSnippetsError: function onSnippetsError(jqXHR) {},
  // Callback will be called after iframe and content areas wrapper inside it are created
  // @option {Function}
  // @param {jQuery} iframe
  // @param {jQuery} iframeHead
  // @param {jQuery} iframeBody
  onInitIframe: function onInitIframe(iframe, iframeHead, iframeBody) {},
  // Callback will be called when content is changed. Includes add, delete, duplicate container or component. Or content of a component is changed
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} contentArea
  onContentChanged: function onContentChanged(event, contentArea) {},
  // Callback will be called before initializing container
  // @option {Function}
  // @param {jQuery} contentArea
  onBeforeInitContentArea: function onBeforeInitContentArea(contentArea) {},
  // Callback will be called when initializing content area. It can return array of jQuery objects which will be initialized as container in content area. By default, all first level sections under content area will be initialized
  // @option {Function}
  // @param {jQuery} contentArea
  onInitContentArea: function onInitContentArea(contentArea) {},
  // Callback will be called before initializing container
  // @option {Function}
  // @param {jQuery} container
  // @param {jQuery} contentArea
  onBeforeInitContainer: function onBeforeInitContainer(container, contentArea) {},
  // Callback will be called when initializing container. It can return array of jQuery objects which will be initialized as editable components in container content (NOTE: these objects MUST be under elements which have attribute data-type="container-content"). By default, all first level sections under container content will be initialized
  // @option {Function}
  // @param {jQuery} container
  // @param {jQuery} contentArea
  onInitContainer: function onInitContainer(container, contentArea) {},
  // Callback will be called before container is deleted
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedContainer
  // @param {jQuery} contentArea
  onBeforeContainerDeleted: function onBeforeContainerDeleted(event, selectedContainer, contentArea) {},
  // Callback will be called after container and its components are already deleted
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedContainer
  // @param {jQuery} contentArea
  onContainerDeleted: function onContainerDeleted(event, selectedContainer, contentArea) {},
  // Callback will be called when content of container is changed. It can be when container received new component from snippet or from other container. Or content of any components are changed or any components are deleted or duplicated
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} changedContainer
  // @param {jQuery} contentArea
  onContainerChanged: function onContainerChanged(event, changedContainer, contentArea) {},
  // Callback will be called when a container is duplicated
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} originalContainer
  // @param {jQuery} newContainer
  // @param {jQuery} contentArea
  onContainerDuplicated: function onContainerDuplicated(event, originalContainer, newContainer, contentArea) {},
  // Callback will be called when a container is selected
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedContainer
  // @param {jQuery} contentArea
  onContainerSelected: function onContainerSelected(event, selectedContainer, contentArea) {},
  // Callback will be called when a container snippet is added in a content area
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} newContainer
  // @param {jQuery} selectedSnippet
  // @param {jQuery} contentArea
  onContainerSnippetAdded: function onContainerSnippetAdded(event, newContainer, selectedSnippet, contentArea) {},
  // Callback will be called after component is initialized. This callback is available or not is depend on component type handler.
  // @option {Function}
  // @param {jQuery} component
  onComponentReady: function onComponentReady(component) {},
  // Callback will be called before initializing component
  // @option {Function}
  // @param {jQuery} component
  // @param {jQuery} contentArea
  onBeforeInitComponent: function onBeforeInitComponent(component, contentArea) {},
  // Callback will be called when initializing component
  // @option {Function}
  // @param {jQuery} component
  // @param {jQuery} contentArea
  onInitComponent: function onInitComponent(component, contentArea) {},
  // Callback will be called before a component is deleted
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedComponent
  // @param {jQuery} contentArea
  onBeforeComponentDeleted: function onBeforeComponentDeleted(event, selectedComponent, contentArea) {},
  // Callback will be called after a component is deleted
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedComponent
  // @param {jQuery} contentArea
  onComponentDeleted: function onComponentDeleted(event, selectedComponent, contentArea) {},
  // Callback will be called when content of a component is changed
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} changedComponent
  // @param {jQuery} contentArea
  onComponentChanged: function onComponentChanged(event, changedComponent, contentArea) {},
  // Callback will be called when a component is duplicated
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} originalComponent
  // @param {jQuery} newComponent
  // @param {jQuery} contentArea
  onComponentDuplicated: function onComponentDuplicated(event, originalComponent, newComponent, contentArea) {},
  // Callback will be called when a component is selected
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} selectedComponent
  // @param {jQuery} contentArea
  onComponentSelected: function onComponentSelected(event, selectedComponent, contentArea) {},
  // Callback will be called after a component snippet is added in a container
  // @option {Function}
  // @param {Event} event
  // @param {jQuery} newComponent
  // @param {jQuery} selectedSnippet
  // @param {jQuery} contentArea
  onComponentSnippetAdded: function onComponentSnippetAdded(event, newComponent, selectedSnippet, contentArea) {},
  // Callback will be called before loading dynamic content
  // @option {Function}
  // @param {jQuery} dynamicElement
  // @param {jQuery} component
  // @param {jQuery} contentArea
  onBeforeDynamicContentLoad: function onBeforeDynamicContentLoad(dynamicElement, component, contentArea) {},
  // Callback will be called after dynamic content is loaded
  // @option {Function}
  // @param {jQuery} dynamicElement
  // @param {jqXHR} , jqXHR
  // @param {jQuery} contentArea
  onDynamicContentLoaded: function onDynamicContentLoaded(dynamicElement, jqXHR, contentArea) {},
  // Callback will be called if loading dynamic content is error, abort or timeout
  // @option {Function}
  // @param {jQuery} dynamicElement
  // @param {jqXHR} , jqXHR
  // @param {jQuery} contentArea
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
/* harmony import */ var _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./snippet/addSnippet */ "./src/keditor/snippet/addSnippet.js");
/* harmony import */ var _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modal/initSnippetsModal */ "./src/keditor/modal/initSnippetsModal.js");
/* harmony import */ var _modal_openModal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modal/openModal */ "./src/keditor/modal/openModal.js");
/* harmony import */ var _modal_closeModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modal/closeModal */ "./src/keditor/modal/closeModal.js");
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

    return _init__WEBPACK_IMPORTED_MODULE_34__["default"].apply(this, [target, config]);
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
      return _component_getComponentType__WEBPACK_IMPORTED_MODULE_28__["default"].apply(this, [component]);
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
      return _modal_initSnippetsModal__WEBPACK_IMPORTED_MODULE_19__["default"].apply(this);
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
      return _modal_openModal__WEBPACK_IMPORTED_MODULE_20__["default"].apply(this, [target, snippetType]);
    }
  }, {
    key: "closeModal",
    value: function closeModal() {
      return _modal_closeModal__WEBPACK_IMPORTED_MODULE_21__["default"].apply(this);
    } // Content areas
    //---------------------------------

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
      return _snippet_addSnippet__WEBPACK_IMPORTED_MODULE_18__["default"].apply(this, [type, title, previewUrl, categories, content, dataAttributes]);
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");
/* harmony import */ var _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSnippetFilter */ "./src/keditor/snippet/renderSnippetFilter.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



/* harmony default export */ __webpack_exports__["default"] = (function (type) {
  Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('initSnippetsFilter');
  var self = this;
  var options = self.options;

  var _renderSnippetFilter$ = _renderSnippetFilter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, type),
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
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Filtering snippets');
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
      Object(_utils_log__WEBPACK_IMPORTED_MODULE_0__["default"])('Show all snippets');
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
  var snippetId = self.generateId('snippet');
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
/* harmony import */ var _utils_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log */ "./src/keditor/utils/log.js");
/* harmony import */ var _renderSnippet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderSnippet */ "./src/keditor/snippet/renderSnippet.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



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
  $(resp).filter('div').each(function () {
    var snippet = $(this);
    var content = snippet.html().trim();
    var previewUrl = snippet.attr('data-preview');
    var type = snippet.attr('data-type');
    var title = snippet.attr('data-keditor-title');
    var categories = snippet.attr('data-keditor-categories') || '';
    var dataAttributes = self.getDataAttributes(snippet, ['data-preview', 'data-type', 'data-keditor-title', 'data-keditor-categories'], true);

    var _renderSnippet$call = _renderSnippet__WEBPACK_IMPORTED_MODULE_1__["default"].call(self, type, title, previewUrl, categories, content, dataAttributes),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2dldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9pbml0S0VkaXRvckNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLmxlc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiXSwibmFtZXMiOlsiY29udGVudEFyZWEiLCJjb250YWluZXIiLCJ0YXJnZXQiLCJpc0V4aXN0aW5nIiwibG9nIiwiaXMiLCJzZWxmIiwiaXNTZWN0aW9uIiwiY29tcG9uZW50IiwiYWRkQ2xhc3MiLCJ3cmFwSW5uZXIiLCJ3cmFwIiwicGFyZW50IiwiaW5pdENvbXBvbmVudCIsImNvbXBvbmVudFR5cGUiLCJnZXRDb21wb25lbnRUeXBlIiwiY29tcG9uZW50RGF0YSIsIktFZGl0b3IiLCJjb21wb25lbnRzIiwiZGVzdHJveSIsImNhbGwiLCJyZW1vdmUiLCJjbG9uZWRDb21wb25lbnQiLCJjbG9uZSIsImRhdGFBdHRyaWJ1dGVzIiwiZ2V0RGF0YUF0dHJpYnV0ZXMiLCJjb250ZW50IiwiaWZyYW1lV3JhcHBlciIsImZpbmQiLCJsZW5ndGgiLCJpZnJhbWUiLCJjaGlsZHJlbiIsImhhc0NsYXNzIiwidW53cmFwIiwicmVtb3ZlQ2xhc3MiLCJnZXRDb250ZW50IiwiY29tcG9uZW50Q29udGVudCIsImh0bWwiLCJlYWNoIiwiJCIsImpvaW4iLCJvcHRpb25zIiwiYXR0ciIsInJlcGxhY2UiLCJkZWZhdWx0Q29tcG9uZW50VHlwZSIsImVycm9yIiwiYm9keSIsImdlbmVyYXRlSWQiLCJvbkJlZm9yZUluaXRDb21wb25lbnQiLCJhcHBlbmQiLCJnZW5lcmF0ZVRvb2xiYXIiLCJUT09MQkFSX1RZUEUiLCJDT01QT05FTlQiLCJzZXR0aW5nRW5hYmxlZCIsImR5bmFtaWNFbGVtZW50IiwiaW5pdER5bmFtaWNDb250ZW50IiwiaW5pdCIsIm9uSW5pdENvbXBvbmVudCIsImNsb3Nlc3QiLCJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCIsImR5bmFtaWNIcmVmIiwiZGF0YSIsInBhcmFtIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImpxWEhSIiwib25EeW5hbWljQ29udGVudExvYWRlZCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsIm9uRHluYW1pY0NvbnRlbnRFcnJvciIsIlBSRUZJWF9DTEFTUyIsIlVJIiwiSElEREVOX0VMRU1FTlQiLCJDTElDS1NfSU5JVElBTElaRUQiLCJDT05URU5UX0FSRUFTX1dSQVBQRVIiLCJuZXN0ZWRDb250YWluZXJFbmFibGVkIiwiZXhwbGljaXRTbmlwcGV0RW5hYmxlZCIsImNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IiwiYnRuQWRkQ29udGVudFRleHQiLCJidG5BZGRDb250YWluZXJUZXh0IiwiYnRuQWRkU3ViQ29udGFpbmVyVGV4dCIsImJ0bkFkZENvbXBvbmVudFRleHQiLCJidG5Nb3ZlQ29udGFpbmVyVGV4dCIsImJ0bk1vdmVDb21wb25lbnRUZXh0IiwiYnRuU2V0dGluZ0NvbnRhaW5lclRleHQiLCJidG5TZXR0aW5nQ29tcG9uZW50VGV4dCIsImJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQiLCJidG5EdXBsaWNhdGVDb21wb25lbnRUZXh0IiwiYnRuRGVsZXRlQ29udGFpbmVyVGV4dCIsImJ0bkRlbGV0ZUNvbXBvbmVudFRleHQiLCJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dCIsImNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0Iiwic25pcHBldHNVcmwiLCJzbmlwcGV0c0ZpbHRlckVuYWJsZWQiLCJzbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IiLCJpZnJhbWVNb2RlIiwiY29udGVudFN0eWxlcyIsImNvbnRlbnRBcmVhc1NlbGVjdG9yIiwiY29udGVudEFyZWFzV3JhcHBlciIsIkNMQVNTX05BTUVTIiwiY29udGFpbmVyU2V0dGluZ0VuYWJsZWQiLCJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiIsImNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24iLCJvblJlYWR5Iiwib25TbmlwcGV0c0xvYWRlZCIsInJlc3AiLCJvblNuaXBwZXRzRXJyb3IiLCJvbkluaXRJZnJhbWUiLCJpZnJhbWVIZWFkIiwiaWZyYW1lQm9keSIsIm9uQ29udGVudENoYW5nZWQiLCJldmVudCIsIm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhIiwib25Jbml0Q29udGVudEFyZWEiLCJvbkJlZm9yZUluaXRDb250YWluZXIiLCJvbkluaXRDb250YWluZXIiLCJvbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQiLCJzZWxlY3RlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRGVsZXRlZCIsIm9uQ29udGFpbmVyQ2hhbmdlZCIsImNoYW5nZWRDb250YWluZXIiLCJvbkNvbnRhaW5lckR1cGxpY2F0ZWQiLCJvcmlnaW5hbENvbnRhaW5lciIsIm5ld0NvbnRhaW5lciIsIm9uQ29udGFpbmVyU2VsZWN0ZWQiLCJvbkNvbnRhaW5lclNuaXBwZXRBZGRlZCIsInNlbGVjdGVkU25pcHBldCIsIm9uQ29tcG9uZW50UmVhZHkiLCJvbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQiLCJzZWxlY3RlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RGVsZXRlZCIsIm9uQ29tcG9uZW50Q2hhbmdlZCIsImNoYW5nZWRDb21wb25lbnQiLCJvbkNvbXBvbmVudER1cGxpY2F0ZWQiLCJvcmlnaW5hbENvbXBvbmVudCIsIm5ld0NvbXBvbmVudCIsIm9uQ29tcG9uZW50U2VsZWN0ZWQiLCJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZCIsIkFMTCIsIkNPTlRBSU5FUiIsIkNPTlRFTlRfQVJFQSIsIlNVQl9DT05UQUlORVIiLCJDT05UQUlORVJfQ09OVEVOVCIsIlNVQl9DT05UQUlORVJfQ09OVEVOVCIsImluaXRDb250YWluZXIiLCJpc05lc3RlZCIsImNvbnRhaW5lcklubmVyIiwibm90IiwiY29udGFpbmVyQ29udGVudCIsInJlbW92ZUF0dHIiLCJjb250YWluZXJDb250ZW50SW5uZXIiLCJjaGlsZCIsImdldENvbXBvbmVudENvbnRlbnQiLCJnZXRDb250YWluZXJDb250ZW50IiwiY29udGFpbmVyQ29udGVudHMiLCJwYXJlbnRzIiwiaW5pdENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50VG9vbGJhciIsImFwcGVuZFRvIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuTW9kYWwiLCJTTklQUEVUX1RZUEUiLCJzb3J0YWJsZSIsImhhbmRsZSIsImhlbHBlciIsIml0ZW1zIiwiY29ubmVjdFdpdGgiLCJ0b2xlcmFuY2UiLCJzb3J0IiwicmVjZWl2ZSIsInVpIiwiaXRlbSIsInN0YXJ0Iiwic3RvcCIsImNvbnZlcnRUb0NvbnRhaW5lciIsImNvbnZlcnRUb0NvbXBvbmVudCIsImRvbnRJbml0VG9vbGJhciIsImNvbnRlbnRBcmVhSW5uZXIiLCJjb250ZW50QXJlYVRvb2xiYXIiLCJheGlzIiwiY2xvc2VTaWRlYmFyIiwiY29udGVudERhdGEiLCJjb250ZW50QXJlYXMiLCJvcmlnaW5hbENvbnRlbnQiLCJlbXB0eSIsImluaXRDb250ZW50QXJlYSIsImVsZW1lbnQiLCJpZCIsInZhbCIsImluc3RhbmNlcyIsImluQXJyYXkiLCJyZXN1bHQiLCJwdXNoIiwid3JhcHBlciIsImFmdGVyIiwiaWZyYW1lRG9jIiwiY29udGVudHMiLCJnZXQiLCJvcGVuIiwiY2xvc2UiLCJ3aW5kb3ciLCJjb250ZW50V2luZG93IiwiY29udGVudERvY3VtZW50IiwiZGVmYXVsdFZpZXciLCJzdHlsZXMiLCJzdHlsZSIsImhyZWYiLCJpc0FycmF5IiwiaSIsImlkU3RyIiwiZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyIiwiY292ZXIiLCJwcmVwZW5kIiwiZm4iLCJjb25maWciLCJhcHBseSIsImlzQ29tcG9uZW50Q29uZmlndXJhYmxlIiwiY2F0ZWdvcmllcyIsImJlYXV0aWZ5Q2F0ZWdvcmllcyIsInNldHRpbmdDb250YWluZXIiLCJzZXR0aW5nQ29tcG9uZW50IiwiaWdub3JlQXR0cmlidXRlcyIsInNlbGVjdG9yIiwiZ2V0Q2xpY2tlZEVsZW1lbnQiLCJpbml0SWZyYW1lIiwiaW5pdElmcmFtZUNvdmVyIiwiaW5pdEtFZGl0b3JDbGlja3MiLCJpbml0U2lkZWJhciIsIm9wZW5TaWRlYmFyIiwiaW5pdFNuaXBwZXRzTW9kYWwiLCJyZW5kZXJTbmlwcGV0cyIsImluaXRTbmlwcGV0c0ZpbHRlciIsInNuaXBwZXRUeXBlIiwiY2xvc2VNb2RhbCIsImluaXRDb250ZW50QXJlYXMiLCJkZWxldGVDb21wb25lbnQiLCJzZXRDb250ZW50IiwidGl0bGUiLCJwcmV2aWV3VXJsIiwiYWRkU25pcHBldCIsIkRFRkFVTFRTIiwiYmxhbmsiLCJrZWRpdG9yIiwiaW5zdGFuY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXJndW1lbnRzIiwiY29uc3RydWN0b3IiLCJleHRlbmQiLCJkb2N1bWVudCIsIm1vZGFsIiwibW9kYWxUYXJnZXQiLCJtb2RhbEFjdGlvbiIsIm1vZGFsSWQiLCJzbmlwcGV0c1dyYXBwZXJIdG1sIiwic25pcHBldENvbnRlbnRFbGVtZW50Iiwic25pcHBldENvbnRlbnQiLCJpc0FkZGluZ0NvbnRhaW5lciIsImlzQWRkaW5nQ29tcG9uZW50IiwiaXNBZGRpbmdDb21wb25lbnRXaXRoQ29udGFpbmVyIiwibW9kYWxTbmlwcGV0VHlwZSIsImVxIiwic25pcHBldCIsImNzc1RyYW5zaXRpb25FbmQiLCJjc3MiLCJtb2RhbFRpdGxlIiwic2V0VGltZW91dCIsImpxdWVyeSIsInNpZGViYXIiLCJhY3RpdmVGb3JtIiwiYWN0aXZlVHlwZSIsImhpZGVTZXR0aW5nRm9ybSIsInNldFNldHRpbmdDb21wb25lbnQiLCJzZXRTZXR0aW5nQ29udGFpbmVyIiwic2lkZWJhcklkIiwic2lkZWJhckJvZHkiLCJmb3JtIiwic2lkZWJhclRpdGxlIiwic2V0dGluZ1RpdGxlIiwic2V0dGluZ0Zvcm0iLCJpbml0U2V0dGluZ0Zvcm0iLCJsb2FkaW5nVGV4dCIsImluaXRGdW5jdGlvbiIsIndoZW4iLCJkb25lIiwic2hvd1NldHRpbmdGb3JtIiwiZXh0cmFEYXRhIiwicmVuZGVyU25pcHBldCIsInNuaXBwZXRQcmV2aWV3SHRtbCIsInNuaXBwZXRDb250ZW50SHRtbCIsInNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyIsInNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyIsInNuaXBwZXRzQ2F0ZWdvcmllcyIsImluZGV4T2YiLCJmaWx0ZXJUeXBlIiwicmVuZGVyU25pcHBldEZpbHRlciIsImNhdGVnb3JpZXNPcHRpb25zIiwic25pcHBldHNXcmFwcGVyIiwidHJpZ2dlciIsInR4dFNlYXJjaCIsImNiYkZpbHRlciIsImRvRmlsdGVyIiwic2VsZWN0ZWRDYXRlZ29yeSIsInRvTG93ZXJDYXNlIiwic2VhcmNoVGV4dCIsInNuaXBwZXRzIiwiZmlsdGVyIiwiZGF0YUNhdGVnb3JpZXNTdHJpbmciLCJkYXRhQ2F0ZWdvcmllcyIsInNwbGl0IiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzbmlwcGV0SWQiLCJjb25jYXQiLCJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciIsImNhdGVnb3J5Iiwic25pcHBldHNDb250YWluZXJIdG1sIiwic25pcHBldHNDb21wb25lbnRIdG1sIiwic25pcHBldHNDb250ZW50SHRtbCIsInRyaW0iLCJuZXdBcnJheSIsIm1lc3NhZ2UiLCJFcnJvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwic2V0dGluZ0J0biIsInRvb2xiYXJDbGFzcyIsImF0dHJpYnV0ZXMiLCJuYW1lIiwidmFsdWUiLCJidG4iLCJjb25maXJtIiwic2V0dGluZ0NvbXBvbmVudFBhcmVudCIsImNvbnNvbGUiLCJkZWJ1ZyIsImFyZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVy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ckI7O0FBQ0EsVUFBSSxPQUFPaUMsT0FBTyxDQUFDK0Ysa0JBQWYsS0FBc0MsVUFBMUMsRUFBc0Q7QUFDdEQvRixlQUFPLENBQUMrRixrQkFBUixDQUEyQnBILElBQTNCLENBQWdDZCxJQUFoQyxFQUFzQ2dLLENBQXRDLEVBQXlDOUosU0FBekMsRUFBb0RSLFdBQXBEO0FBQ0M7O0FBQ0QsVUFBSSxPQUFPeUMsT0FBTyxDQUFDb0Ysa0JBQWYsS0FBc0MsVUFBMUMsRUFBc0Q7QUFDdERwRixlQUFPLENBQUNvRixrQkFBUixDQUEyQnpHLElBQTNCLENBQWdDZCxJQUFoQyxFQUFzQ2dLLENBQXRDLEVBQXlDckssU0FBekMsRUFBb0RELFdBQXBEO0FBQ0M7O0FBQ0QsVUFBSSxPQUFPeUMsT0FBTyxDQUFDMkUsZ0JBQWYsS0FBb0MsVUFBeEMsRUFBb0Q7QUFDcEQzRSxlQUFPLENBQUMyRSxnQkFBUixDQUF5QmhHLElBQXpCLENBQThCZCxJQUE5QixFQUFvQ2dLLENBQXBDLEVBQXVDdEssV0FBdkM7QUFDQztBQUNBO0FBQ0EsR0F6QkQ7QUEwQkE4QyxNQUFJLENBQUNyQyxRQUFMLENBQWMsNEJBQWQ7QUFDQztBQUFBLEM7Ozs7Ozs7Ozs7OztBQzdLRDtBQUFBO0FBQUE7QUFBQTtBQUNlLDJFQUFhO0FBQzVCLE1BQUlpVixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDdFYsR0FBZixLQUF1QixVQUFsQyxJQUFnRG1DLDZDQUFDLENBQUNtTixPQUFGLENBQVVpRyxLQUE5RCxFQUFxRTtBQUFBLHNDQURsREMsSUFDa0Q7QUFEbERBLFVBQ2tEO0FBQUE7O0FBQ3JFRixXQUFPLENBQUN0VixHQUFSLENBQVkyTixLQUFaLENBQWtCMkgsT0FBbEIsR0FBNEIsY0FBNUIsU0FBK0NFLElBQS9DO0FBQ0M7QUFDQSxDQUpELEU7Ozs7Ozs7Ozs7O0FDREEsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoianMva2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9rZWRpdG9yL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZykge1xybG9nKCdjb252ZXJ0VG9Db21wb25lbnQnLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpO1xyaWYgKHRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhcicpKSB7XHJyZXR1cm47XHJ9XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgaXNTZWN0aW9uID0gdGFyZ2V0LmlzKCdzZWN0aW9uJyk7XHJsZXQgY29tcG9uZW50O1xyaWYgKGlzU2VjdGlvbikge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50Jyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj4nKTtccmNvbXBvbmVudCA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj48L3NlY3Rpb24+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyfVxyaWYgKGlzRXhpc3RpbmcpIHtccmNvbXBvbmVudC5hZGRDbGFzcygnZXhpc3RpbmctY29tcG9uZW50Jyk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybG9nKCdkZWxldGVDb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuZGVzdHJveS5jYWxsKGNvbXBvbmVudERhdGEsIGNvbXBvbmVudCwgc2VsZik7XHJ9XHJjb21wb25lbnQucmVtb3ZlKCk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxvZygnZ2V0Q29tcG9uZW50Q29udGVudCcpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNsb25lZENvbXBvbmVudCA9IGNvbXBvbmVudC5jbG9uZSgpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY2xvbmVkQ29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjbG9uZWRDb21wb25lbnQsIG51bGwsIHRydWUpO1xybGV0IGNvbnRlbnQ7XHIvLyBIYW5kbGUgaWZyYW1lLXdyYXBwZXJccmxldCBpZnJhbWVXcmFwcGVyID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJpZiAoaWZyYW1lV3JhcHBlci5sZW5ndGggPiAwKSB7XHJpZnJhbWVXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWlmcmFtZS1jb3ZlcicpLnJlbW92ZSgpO1xybGV0IGlmcmFtZSA9IGlmcmFtZVdyYXBwZXIuY2hpbGRyZW4oJ2lmcmFtZScpO1xyaWYgKGlmcmFtZVdyYXBwZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXItZmFrZScpKSB7XHJpZnJhbWUudW53cmFwKCk7XHJ9IGVsc2Uge1xyaWZyYW1lV3JhcHBlci5yZW1vdmVDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyfVxyfVxyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmdldENvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtccmNvbnRlbnQgPSBjb21wb25lbnREYXRhLmdldENvbnRlbnQuY2FsbChjb21wb25lbnREYXRhLCBjbG9uZWRDb21wb25lbnQsIHNlbGYpO1xyfSBlbHNlIHtccmxldCBjb21wb25lbnRDb250ZW50ID0gY2xvbmVkQ29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29udGVudCA9IGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyY2xvbmVkQ29tcG9uZW50Lmh0bWwoY29udGVudCkuZmluZCgnW2RhdGEtZHluYW1pYy1ocmVmXScpLmVhY2goZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5odG1sKCcnKTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+JHtjbG9uZWRDb21wb25lbnQuaHRtbCgpfTwvc2VjdGlvbj5gO1xyXG59O1xyXG4iLCJpbXBvcnQgZXJyb3IgZnJvbSAnLi4vdXRpbHMvZXJyb3InO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb21wb25lbnRUeXBlID0gKGNvbXBvbmVudC5hdHRyKCdkYXRhLXR5cGUnKSB8fCAnJykucmVwbGFjZSgnY29tcG9uZW50LScsICcnKTtccmlmIChjb21wb25lbnRUeXBlICYmIChjb21wb25lbnRUeXBlIGluIEtFZGl0b3IuY29tcG9uZW50cykpIHtccnJldHVybiBjb21wb25lbnRUeXBlO1xyfSBlbHNlIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ3N0cmluZycpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlO1xyfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50VHlwZSA9IG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUuY2FsbChzZWxmLCBjb21wb25lbnQpO1xyfVxyaWYgKCFjb21wb25lbnRUeXBlKSB7XHJlcnJvcignQ29tcG9uZW50IHR5cGUgaXMgdW5kZWZpbmVkIScpO1xyfVxybG9nKGBGYWxsYmFjayB0byBkZWZhdWx0Q29tcG9uZW50VHlwZTogJHtjb21wb25lbnRUeXBlfWApO1xycmV0dXJuIGNvbXBvbmVudFR5cGU7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJsb2coJ2luaXRDb21wb25lbnQnLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgYm9keSA9IHNlbGYuYm9keTtccmlmICghY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbXBvbmVudCcpIHx8ICFjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpKSB7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyY29tcG9uZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdjb21wb25lbnQnKSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29tcG9uZW50ID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbXBvbmVudC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdjb21wb25lbnQtY29udGVudCcpKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCk7XHJsb2coYENvbXBvbmVudCB0eXBlOiAke2NvbXBvbmVudFR5cGV9YCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmxvZygnUmVuZGVyIEtFZGl0b3IgdG9vbGJhciBmb3IgY29tcG9uZW50JywgY29tcG9uZW50KTtccmNvbXBvbmVudC5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTVBPTkVOVCwgY29tcG9uZW50RGF0YS5zZXR0aW5nRW5hYmxlZCkpO1xyY29tcG9uZW50LmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBkeW5hbWljRWxlbWVudCA9ICQodGhpcyk7XHJzZWxmLmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCk7XHJ9KTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmluaXQuY2FsbChjb21wb25lbnREYXRhLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIHNlbGYpO1xyfSBlbHNlIHtccmxvZyhgXCJpbml0XCIgZnVuY3Rpb24gb2YgY29tcG9uZW50IHR5cGUgXCIke2NvbXBvbmVudFR5cGV9XCIgZG9lcyBub3QgZXhpc3RgKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50Jyk7XHJjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyfSBlbHNlIHtccmlmIChjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50JykpIHtccmxvZygnQ29tcG9uZW50IGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XHJ9IGVsc2Uge1xybG9nKCdDb21wb25lbnQgaXMgaW5pdGlhbGl6aW5nLi4uJyk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCkge1xybG9nKCdpbml0RHluYW1pY0NvbnRlbnQnLCBkeW5hbWljRWxlbWVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb21wb25lbnQgPSBkeW5hbWljRWxlbWVudC5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250ZW50QXJlYSA9IGR5bmFtaWNFbGVtZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyZHluYW1pY0VsZW1lbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2R5bmFtaWMtZWxlbWVudCcpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBkeW5hbWljSHJlZiA9IGR5bmFtaWNFbGVtZW50LmF0dHIoJ2RhdGEtZHluYW1pYy1ocmVmJyk7XHJsZXQgZGF0YSA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY29tcG9uZW50LCBbJ2RhdGEtdHlwZScsICdkYXRhLWR5bmFtaWMtaHJlZiddLCBmYWxzZSk7XHJkYXRhID0gJC5wYXJhbShkYXRhKTtccmxvZyhgRHluYW1pYyBocmVmOiAke2R5bmFtaWNIcmVmfSwgRGF0YTogJHtkYXRhfWApO1xycmV0dXJuICQuYWpheCh7XHJ1cmw6IGR5bmFtaWNIcmVmLFxyZGF0YTogZGF0YSxccnR5cGU6ICdHRVQnLFxyZGF0YVR5cGU6ICdIVE1MJyxccnN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzLCBqcVhIUikge1xybG9nKCdEeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkJywgZHluYW1pY0VsZW1lbnQsIHJlc3BvbnNlLCBzdGF0dXMsIGpxWEhSKTtccmR5bmFtaWNFbGVtZW50Lmh0bWwocmVzcG9uc2UpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfSxccmVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xybG9nKCdFcnJvciB3aGVuIGxvYWRpbmcgZHluYW1pYyBjb250ZW50JywgZHluYW1pY0VsZW1lbnQsIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50RXJyb3IuY2FsbChzZWxmLCBkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyXG59O1xyXG4iLCJjb25zdCBQUkVGSVhfQ0xBU1MgPSAna2VkaXRvci0nO1xyZXhwb3J0IGRlZmF1bHQge1xyVUk6IGAke1BSRUZJWF9DTEFTU311aWAsXHJISURERU5fRUxFTUVOVDogYCR7UFJFRklYX0NMQVNTfWhpZGRlbi1lbGVtZW50YCxcckNMSUNLU19JTklUSUFMSVpFRDogYCR7UFJFRklYX0NMQVNTfWNsaWNrcy1pbml0aWFsaXplZGAsXHJDT05URU5UX0FSRUFTX1dSQVBQRVI6IGAke1BSRUZJWF9DTEFTU31jb250ZW50LWFyZWFzLXdyYXBwZXJgLFxyXG59OyIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQge1xyLy8gRW5hYmxlIG5lc3RlZCBjb250YWluZXIgb3Igbm90XHIvLyBAb3B0aW9uIHtCb29sZWFufVxybmVzdGVkQ29udGFpbmVyRW5hYmxlZDogdHJ1ZSxcci8vIEVuYWJsZSBleHBsaWNpdCBzbmlwcGV0IG9yIG5vdC4gV2hlbiBkaXNhYmxlLCB0aGVyZSBpcyBvbmx5IG9uZSBidXR0b24gZm9yIGFkZGluZy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBjb250ZW50IGFyZWEgb3IgY29udGFpbmVyLCB5b3UgY2FuIGFkZCBjb21wb25lbnQgb3IgY29udGFpbmVycy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBzdWItY29udGFpbmVyLCB5b3UganVzdCBjYW4gYWRkIG9ubHkgY29tcG9uZW50LiBXaGVuIHlvdSBhZGQgY29tcG9uZW50IGluIGNvbnRlbnQgYXJlYSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgY29uZmlnIFwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnRcIiBvcHRpb25cci8vIEBvcHRpb24ge0Jvb2xlYW59XHJleHBsaWNpdFNuaXBwZXRFbmFibGVkOiBmYWxzZSxcci8vIGNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IFRoZSBjb250YWluZXIgc25pcHBldCB3aGljaCB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkgaW4gY29udGVudCBhcmUgd2hlbiB5b3UgYWRkaW5nIGEgY29tcG9uZW50LiBOb3RlOiBjb21wb25lbnQgd2lsbCBiZSBhZGRlZCBpbiBmaXJzdCBjb250YWluZXIgY29udGVudCBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50OiBgXHI8ZGl2IGNsYXNzPVwicm93XCI+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIj5ccjwvZGl2PlxyPC9kaXY+XHJgLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29udGVudCBidXR0b24uIFRoaXMgYXZhaWxhYmxlIG9ubHkgd2hlbiBcImV4cGxpY2l0U2lwcGV0RW5hYmxlZFwiIGlzIFwiZmFsc2VcIlxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29udGVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgYWRkIGNvbnRhaW5lciBidXR0b25cci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkFkZENvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgc3ViLWNvbnRhaW5lciBidXR0b25cci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkFkZFN1YkNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29tcG9uZW50IGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1saXN0LXVsXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIG1vdmUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuTW92ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXNvcnRcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5Nb3ZlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtYXJyb3dzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuU2V0dGluZ0NvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBzZXR0aW5nIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0blNldHRpbmdDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkRlbGV0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGRlbGV0ZSBidXR0b24gb2YgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5EZWxldGVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBjb25maXJtIGRpYWxvZyB3aGVuIGRlbGV0aW5nIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQ6ICdBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb250YWluZXI/IFRoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lIScsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbXBvbmVudD8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8vIERlZmF1bHQgY29tcG9uZW50IHR5cGUgb2YgY29tcG9uZW50LiBJZiB0eXBlIG9mIGNvbXBvbmVudCBkb2VzIG5vdCBleGlzdCBpbiBLRWRpdG9yLmNvbXBvbmVudHMsIHdpbGwgYmUgdXNlZCBcImRlZmF1bHRDb21wb25lbnRUeXBlXCIgYXMgdHlwZSBvZiB0aGlzIGNvbXBvbmVudC4gSWYgaXMgZnVuY3Rpb24sIGFyZ3VtZW50IGlzIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfEZ1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyZGVmYXVsdENvbXBvbmVudFR5cGU6ICdibGFuaycsXHIvLyBVcmwgdG8gc25pcHBldHMgZmlsZVxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyc25pcHBldHNVcmw6ICdzbmlwcGV0cy9zbmlwcGV0cy5odG1sJyxcci8vIEVuYWJsZSBmaWx0ZXJpbmcgc25pcHBldHMgYnkgY2F0ZWdvcmllcyBhbmQgdGV4dCBzZWFyY2hpbmcgb3Igbm90XHIvLyBAb3B0aW9uIHtCb29sZWFufVxyc25pcHBldHNGaWx0ZXJFbmFibGVkOiB0cnVlLFxyLy8gVGhlIHNlcGFyYXRvciBjaGFyYWN0ZXIgYmV0d2VlbiBlYWNoIGNhdGVnb3JpZXNcci8vIEBvcHRpb24ge1N0cmluZ31ccnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcjogJzsnLFxyLy8gS0VkaXRvciBpcyBjcmVhdGVkIGluc2lkZSBhbiBpZnJhbWUgb3Igbm90LiBLRWRpdG9yIGlzIGNyZWF0ZWQgaW5zaWRlIGFuIGlmcmFtZSBvciBub3QuIEtFZGl0b3Igd2lsbCBhZGQgYWxsIGVsZW1lbnRzIHdoaWNoIGhhdmUgJ2RhdGEtdHlwZT1rZWRpdG9yLXN0eWxlJyBmb3IgaWZyYW1lIHN0eWxlc2hlZXQuIFRoZXNlIGVsZW1lbnRzIGNhbiBiZSAnbGluaycsICdzdHlsZScgb3IgYW55IHRhZ3MuIElmIHRoZXNlIGVsZW1lbnRzIGhhdmUgJ2hyZWYnIGF0dHJpYnV0ZSwgd2lsbCBjcmVhdGUgbGluayB0YWcgd2l0aCBocmVmLiBJZiB0aGVzZSBlbGVtZW50cyBkbyBub3QgaGF2ZSAnaHJlZicgYXR0cmlidXRlLCB3aWxsIGNyZWF0ZSBzdHlsZSB0YWcgd2l0aCBjc3MgcnVsZSBpcyBodG1sIGNvZGUgaW5zaWRlIGVsZW1lbnRcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJpZnJhbWVNb2RlOiBmYWxzZSxcci8vIENvbnRlbnQgc3R5bGVzIGZvciBpZnJhbWUgbW9kZVxyLy8gQG9wdGlvbiB7QXJyYXk8T2JqZWN0Pn1cci8vIEBleGFtcGxlOlxyLy8gW1xyLy8gICAgIHtcci8vICAgICAgICAgaHJlZjogJy9wYXRoL3RvL3N0eWxlL2ZpbGUnXHIvLyAgICAgfSwge1xyLy8gICAgICAgICBjb250ZW50OiAnYSB7IGNvbG9yOiByZWQ7IH0nXHIvLyAgICAgfVxyLy8gXVxyY29udGVudFN0eWxlczogW10sXHIvLyBTZWxlY3RvciBvZiBjb250ZW50IGFyZWFzLiBJZiBpcyBudWxsIG9yIHNlbGVjdG9yIGRvZXMgbm90IG1hdGNoIGFueSBlbGVtZW50cywgd2lsbCBjcmVhdGUgZGVmYXVsdCBjb250ZW50IGFyZWEgYW5kIHdyYXAgYWxsIGNvbnRlbnQgaW5zaWRlIGl0LlxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29udGVudEFyZWFzU2VsZWN0b3I6IG51bGwsXHIvLyBUaGUgd3JhcHBlciBlbGVtZW50IGZvciBhbGwgY29udGVudHMgaW5zaWRlIGlmcmFtZSBvciBuZXcgZGl2IHdoaWNoIHdpbGwgY29udGFpbnMgY29udGVudCBvZiB0ZXh0YXJlYS4gSXQncyBqdXN0IGZvciBkaXNwbGF5aW5nIHB1cnBvc2UuIElmIHlvdSB3YW50IGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIGFyZSBhcHBlbmRlZCBpbnRvIGJvZHkgdGFnLCBqdXN0IGxlYXZlIGl0IGFzIGJsYW5rXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb250ZW50QXJlYXNXcmFwcGVyOiBgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuQ09OVEVOVF9BUkVBU19XUkFQUEVSfVwiPjwvZGl2PmAsXHIvLyBFbmFibGUgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtCb29sZWFufVxyY29udGFpbmVyU2V0dGluZ0VuYWJsZWQ6IGZhbHNlLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbjogbnVsbCxcci8vIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBzaG93ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IHNldHRpbmdGb3JtXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbjogbnVsbCxcci8vIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBoaWRkZW5cci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IHNldHRpbmdGb3JtXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbjogbnVsbCxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGtlZGl0b3IgaW5zdGFuY2UgaXMgcmVhZHlcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyb25SZWFkeTogZnVuY3Rpb24gKCkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHNuaXBwZXRzIGFyZSBsb2FkZWQuIElmIHlvdSB3YW50IHRvIG1vZGlmeSBzbmlwcGV0cyBjb250ZW50LCBwbGVhc2UgcmV0dXJuIG1vZGlmaWVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7U3RyaW5nfSByZXNwXHIvLyBAcmV0dXJuIHtTdHJpbmd9XHJvblNuaXBwZXRzTG9hZGVkOiBmdW5jdGlvbiAocmVzcCkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gZXJyb3IgaW4gbG9hZGluZyBzbmlwcGV0c1xyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pxWEhSfSBqcVhIUlxyb25TbmlwcGV0c0Vycm9yOiBmdW5jdGlvbiAoanFYSFIpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBpZnJhbWUgYW5kIGNvbnRlbnQgYXJlYXMgd3JhcHBlciBpbnNpZGUgaXQgYXJlIGNyZWF0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZVxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZUhlYWRcci8vIEBwYXJhbSB7alF1ZXJ5fSBpZnJhbWVCb2R5XHJvbkluaXRJZnJhbWU6IGZ1bmN0aW9uIChpZnJhbWUsIGlmcmFtZUhlYWQsIGlmcmFtZUJvZHkpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgaXMgY2hhbmdlZC4gSW5jbHVkZXMgYWRkLCBkZWxldGUsIGR1cGxpY2F0ZSBjb250YWluZXIgb3IgY29tcG9uZW50LiBPciBjb250ZW50IG9mIGEgY29tcG9uZW50IGlzIGNoYW5nZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250ZW50Q2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVJbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRlbnQgYXJlYS4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGNvbnRhaW5lciBpbiBjb250ZW50IGFyZWEuIEJ5IGRlZmF1bHQsIGFsbCBmaXJzdCBsZXZlbCBzZWN0aW9ucyB1bmRlciBjb250ZW50IGFyZWEgd2lsbCBiZSBpbml0aWFsaXplZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uSW5pdENvbnRlbnRBcmVhOiBmdW5jdGlvbiAoY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlSW5pdENvbnRhaW5lcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb250YWluZXIuIEl0IGNhbiByZXR1cm4gYXJyYXkgb2YgalF1ZXJ5IG9iamVjdHMgd2hpY2ggd2lsbCBiZSBpbml0aWFsaXplZCBhcyBlZGl0YWJsZSBjb21wb25lbnRzIGluIGNvbnRhaW5lciBjb250ZW50IChOT1RFOiB0aGVzZSBvYmplY3RzIE1VU1QgYmUgdW5kZXIgZWxlbWVudHMgd2hpY2ggaGF2ZSBhdHRyaWJ1dGUgZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIikuIEJ5IGRlZmF1bHQsIGFsbCBmaXJzdCBsZXZlbCBzZWN0aW9ucyB1bmRlciBjb250YWluZXIgY29udGVudCB3aWxsIGJlIGluaXRpYWxpemVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBjb250YWluZXIgaXMgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBjb250YWluZXIgYW5kIGl0cyBjb21wb25lbnRzIGFyZSBhbHJlYWR5IGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckRlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBjb250ZW50IG9mIGNvbnRhaW5lciBpcyBjaGFuZ2VkLiBJdCBjYW4gYmUgd2hlbiBjb250YWluZXIgcmVjZWl2ZWQgbmV3IGNvbXBvbmVudCBmcm9tIHNuaXBwZXQgb3IgZnJvbSBvdGhlciBjb250YWluZXIuIE9yIGNvbnRlbnQgb2YgYW55IGNvbXBvbmVudHMgYXJlIGNoYW5nZWQgb3IgYW55IGNvbXBvbmVudHMgYXJlIGRlbGV0ZWQgb3IgZHVwbGljYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNoYW5nZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBpcyBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gb3JpZ2luYWxDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJEdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBpcyBzZWxlY3RlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyU2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBzbmlwcGV0IGlzIGFkZGVkIGluIGEgY29udGVudCBhcmVhXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gbmV3Q29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRTbmlwcGV0XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyU25pcHBldEFkZGVkOiBmdW5jdGlvbiAoZXZlbnQsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gVGhpcyBjYWxsYmFjayBpcyBhdmFpbGFibGUgb3Igbm90IGlzIGRlcGVuZCBvbiBjb21wb25lbnQgdHlwZSBoYW5kbGVyLlxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHJvbkNvbXBvbmVudFJlYWR5OiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb21wb25lbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29tcG9uZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBhIGNvbXBvbmVudCBpcyBkZWxldGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVDb21wb25lbnREZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IGlzIGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBjb250ZW50IG9mIGEgY29tcG9uZW50IGlzIGNoYW5nZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjaGFuZ2VkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50Q2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50LCBjaGFuZ2VkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgZHVwbGljYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IG9yaWdpbmFsQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gbmV3Q29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50RHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgc2VsZWN0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudFNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250YWluZXJcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZFNuaXBwZXRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnRTbmlwcGV0QWRkZWQ6IGZ1bmN0aW9uIChldmVudCwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgZHluYW1pYyBjb250ZW50XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgZHluYW1pYyBjb250ZW50IGlzIGxvYWRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcci8vIEBwYXJhbSB7anFYSFJ9ICwganFYSFJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25EeW5hbWljQ29udGVudExvYWRlZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBpZiBsb2FkaW5nIGR5bmFtaWMgY29udGVudCBpcyBlcnJvciwgYWJvcnQgb3IgdGltZW91dFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcci8vIEBwYXJhbSB7anFYSFJ9ICwganFYSFJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25EeW5hbWljQ29udGVudEVycm9yOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfVxyXG59O1xyIiwiZXhwb3J0IGRlZmF1bHQge1xyQUxMOiAwLFxyQ09OVEFJTkVSOiAxLFxyQ09NUE9ORU5UOiAyXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcckNPTlRFTlRfQVJFQTogMCxcckNPTlRBSU5FUjogMSxcclNVQl9DT05UQUlORVI6IDIsXHJDT05UQUlORVJfQ09OVEVOVDogMyxcclNVQl9DT05UQUlORVJfQ09OVEVOVDogNCxcckNPTVBPTkVOVDogNVxyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIHRhcmdldCkge1xybG9nKCdjb252ZXJ0VG9Db250YWluZXInLCBjb250ZW50QXJlYSwgdGFyZ2V0KTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250YWluZXI7XHJpZiAodGFyZ2V0LmlzKCdzZWN0aW9uJykpIHtccnRhcmdldC5hZGRDbGFzcygna2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lcicpO1xydGFyZ2V0LndyYXBJbm5lcignPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWlubmVyXCI+PC9zZWN0aW9uPicpO1xyY29udGFpbmVyID0gdGFyZ2V0O1xyfSBlbHNlIHtccnRhcmdldC53cmFwKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXJcIj48c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj48L3NlY3Rpb24+PC9zZWN0aW9uPicpO1xyY29udGFpbmVyID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGFpbmVyLCBpc05lc3RlZCkge1xybG9nKGBnZXRDb250YWluZXJDb250ZW50IC0gaXNOZXN0ZWQ9JHtpc05lc3RlZH1gLCBjb250YWluZXIpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRhaW5lcklubmVyID0gY29udGFpbmVyLmNoaWxkcmVuKCcua2VkaXRvci1jb250YWluZXItaW5uZXInKS5jbG9uZSgpO1xyY29udGFpbmVySW5uZXIuZmluZCgnW2RhdGEtdHlwZT1jb250YWluZXItY29udGVudF0nKS5ub3QoaXNOZXN0ZWQgPyAnJyA6ICcua2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXJDb250ZW50ID0gJCh0aGlzKTtccmNvbnRhaW5lckNvbnRlbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQga2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQgdWktc29ydGFibGUnKS5yZW1vdmVBdHRyKCdpZCcpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRJbm5lciA9IGNvbnRhaW5lckNvbnRlbnQuY2hpbGRyZW4oKTtccmxldCBjb250ZW50ID0gJyc7XHJjb250YWluZXJDb250ZW50SW5uZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjaGlsZCA9ICQodGhpcyk7XHJpZiAoY2hpbGQuaXMoJy5rZWRpdG9yLWNvbXBvbmVudCcpKSB7XHJjb250ZW50ICs9IHNlbGYuZ2V0Q29tcG9uZW50Q29udGVudChjaGlsZCk7XHJ9IGVsc2UgaWYgKGNoaWxkLmlzKCcua2VkaXRvci1zdWItY29udGFpbmVyJykpIHtccmNvbnRlbnQgKz0gc2VsZi5nZXRDb250YWluZXJDb250ZW50KGNoaWxkLCB0cnVlKTtccn1ccn0pO1xyY29udGFpbmVyQ29udGVudC5odG1sKGNvbnRlbnQpO1xyfSk7XHJyZXR1cm4gYDxzZWN0aW9uPiR7Y29udGFpbmVySW5uZXIuaHRtbCgpfTwvc2VjdGlvbj5gO1xyXG59IiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBpc05lc3RlZCA9IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCAmJiBjb250YWluZXIuY2xvc2VzdCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMDtccmxvZyhgaW5pdENvbnRhaW5lciAtIGlzTmVzdGVkPSR7aXNOZXN0ZWR9YCwgY29udGVudEFyZWEsIGNvbnRhaW5lcik7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb250YWluZXInKSB8fCAhY29udGFpbmVyLmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKSkge1xyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb250YWluZXIgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29udGFpbmVyLmNhbGwoc2VsZiwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoaXNOZXN0ZWQpIHtccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1zdWItY29udGFpbmVyJyk7XHJ9XHJsb2coJ1JlbmRlciBLRWRpdG9yIHRvb2xiYXIgZm9yIGNvbnRhaW5lcicsIGNvbnRhaW5lcik7XHJjb250YWluZXIuYXBwZW5kKHNlbGYuZ2VuZXJhdGVUb29sYmFyKGlzTmVzdGVkID8gVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVIgOiBUT09MQkFSX1RZUEUuQ09OVEFJTkVSKSk7XHJjb250YWluZXIuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoaXNOZXN0ZWQgPyAnc3ViLWNvbnRhaW5lcicgOiAnY29udGFpbmVyJykpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRzID0gY29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpO1xybG9nKGBJbml0aWFsaXplICR7Y29udGFpbmVyQ29udGVudHMubGVuZ3RofSBjb250YWluZXIgY29udGVudChzKWApO1xyY29udGFpbmVyQ29udGVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJpZiAob3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmICFpc05lc3RlZCAmJiBjb250YWluZXJDb250ZW50LnBhcmVudHMoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtcci8vIERvIG5vdGhpbmcgYmVjYXVzZSBpdCdzIGNvbnRhaW5lciBjb250ZW50IG9mIHN1YiBjb250YWluZXJccnJldHVybjtccn1ccnNlbGYuaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpO1xyY29udGFpbmVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKTtccn0gZWxzZSB7XHJpZiAoY29udGFpbmVyLmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpKSB7XHJsb2coJ0NvbnRhaW5lciBpcyBhbHJlYWR5IGluaXRpYWxpemVkIScpO1xyfSBlbHNlIHtccmxvZygnQ29udGFpbmVyIGlzIGluaXRpYWxpemluZy4uLicpO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtcclxuaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlXCI7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xybG9nKGBpbml0Q29udGFpbmVyQ29udGVudCAtIGlzTmVzdGVkPSR7aXNOZXN0ZWR9YCwgY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQnKTtccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQnKTtccn1ccmNvbnRhaW5lckNvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbnRhaW5lci1jb250ZW50JykpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRJbm5lciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyXCI+PC9kaXY+Jyk7XHJjb250YWluZXJDb250ZW50SW5uZXIuaHRtbChjb250YWluZXJDb250ZW50Lmh0bWwoKSk7XHJjb250YWluZXJDb250ZW50Lmh0bWwoY29udGFpbmVyQ29udGVudElubmVyKTtccmxvZygnSW5pdGlhbGl6ZSB0b29sYmFyIGZvciBjb250YWluZXIgY29udGVudCcpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQgOiBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQpKTtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmFwcGVuZFRvKGNvbnRhaW5lckNvbnRlbnQpO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKCFpc05lc3RlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyfSk7XHJ9XHJ9XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29tcG9uZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn0gZWxzZSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIGlzTmVzdGVkID8gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA6IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5BTEwgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfVxybG9nKCdJbml0aWFsaXplICQuZm4uc29ydGFibGUgZm9yIGNvbnRhaW5lciBjb250ZW50Jyk7XHJjb250YWluZXJDb250ZW50SW5uZXIuc29ydGFibGUoe1xyaGFuZGxlOiAnLmJ0bi1jb21wb25lbnQtcmVwb3NpdGlvbiwgLmJ0bi1jb250YWluZXItcmVwb3NpdGlvbicsXHJoZWxwZXI6ICdjbG9uZScsXHJpdGVtczogJz4gc2VjdGlvbicsXHJjb25uZWN0V2l0aDogJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyJyxccnRvbGVyYW5jZTogJ3BvaW50ZXInLFxyc29ydDogZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtZGVmYXVsdCcpO1xyfSxccnJlY2VpdmU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtccmxvZygnT24gcmVjZWl2ZWQgc25pcHBldCcsIGV2ZW50LCB1aSk7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xybGV0IGNvbnRhaW5lcjtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccmNvbnRhaW5lciA9IGl0ZW0uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHIkKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RhcnQ6IGZ1bmN0aW9uIChlLCB1aSkge1xydWkuaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0b3A6IGZ1bmN0aW9uIChlLCB1aSkge1xyaWYgKHVpLmhlbHBlcikge1xydWkuaGVscGVyLnJlbW92ZSgpO1xyfVxydWkuaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfVxyfSk7XHJsb2coJ0luaXRpYWxpemUgZXhpc3RpbmcgY29tcG9uZW50cyBpbnNpZGUgY29udGFpbmVyIGNvbnRlbnQnKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNoaWxkID0gJCh0aGlzKTtccmlmIChjaGlsZC5maW5kKCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgY2hpbGQpO1xyfSBlbHNlIHtccnNlbGYuY29udmVydFRvQ29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNoaWxkLCB0cnVlKTtccn1ccn0pO1xyXG59O1xyXG4iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtcclxuaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlXCI7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgZG9udEluaXRUb29sYmFyKSB7XHJsb2coJ2luaXRDb250ZW50QXJlYScsIGNvbnRlbnRBcmVhKTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGVudEFyZWEuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGVudC1hcmVhJyk7XHJsZXQgY29udGVudCA9IGNvbnRlbnRBcmVhLmh0bWwoKTtccmxldCBjb250ZW50QXJlYUlubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyXCI+PC9kaXY+JykuaHRtbChjb250ZW50KTtccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudEFyZWFJbm5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoIWRvbnRJbml0VG9vbGJhcikge1xybGV0IGNvbnRlbnRBcmVhVG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQSkpO1xyY29udGVudEFyZWEuYXBwZW5kKGNvbnRlbnRBcmVhVG9vbGJhcik7XHJjb250ZW50QXJlYVRvb2xiYXIuY2hpbGRyZW4ob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gJy5idG4tYWRkLWNvbnRhaW5lcicgOiAnLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250ZW50QXJlYUlubmVyLCBvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkFMTCk7XHJ9KTtccn1ccmxvZygnSW5pdGlhbGl6ZSAkLmZuLnNvcnRhYmxlIGZvciBjb250ZW50IGFyZWEnKTtccmNvbnRlbnRBcmVhSW5uZXIuc29ydGFibGUoe1xyaGFuZGxlOiAnLmtlZGl0b3ItdG9vbGJhci1jb250YWluZXI6bm90KC5rZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lcikgLmJ0bi1jb250YWluZXItcmVwb3NpdGlvbicsXHJpdGVtczogJz4gc2VjdGlvbicsXHJoZWxwZXI6ICdjbG9uZScsXHJjb25uZWN0V2l0aDogJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJheGlzOiAneScsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsb2coJ09uIHJlY2VpdmVkIHNuaXBwZXQnLCBldmVudCwgdWkpO1xybGV0IGhlbHBlciA9IHVpLmhlbHBlcjtccmxldCBpdGVtID0gdWkuaXRlbTtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRlbnRBcmVhKTtccn1ccml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdGFydDogZnVuY3Rpb24gKGUsIHVpKSB7XHJ1aS5pdGVtLmFkZENsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RvcDogZnVuY3Rpb24gKGUsIHVpKSB7XHJpZiAodWkuaGVscGVyKSB7XHJ1aS5oZWxwZXIucmVtb3ZlKCk7XHJ9XHJ1aS5pdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9XHJ9KTtccmxvZygnSW5pdGlhbGl6ZSBleGlzdGluZyBjb250YWluZXJzIGluIGNvbnRlbnQgYXJlYScpO1xyY29udGVudEFyZWFJbm5lci5jaGlsZHJlbignc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccmxldCBjb250ZW50RGF0YSA9IG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEubGVuZ3RoID4gMCkge1xyJC5lYWNoKGNvbnRlbnREYXRhLCBmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybG9nKCdpbml0Q29udGVudEFyZWFzJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGVudEFyZWFzV3JhcHBlciA9IHNlbGYuY29udGVudEFyZWFzV3JhcHBlcjtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbnRlbnRBcmVhcztccmlmIChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKSB7XHJjb250ZW50QXJlYXMgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcik7XHJ9XHJpZiAoIWNvbnRlbnRBcmVhcyB8fCBjb250ZW50QXJlYXMubGVuZ3RoID09PSAwKSB7XHJsb2coJ0RvIG5vdCBmaW5kIGFueSBjb250ZW50IGFyZWEuIENyZWF0aW5nIGRlZmF1bHQgY29udGVudCBhcmVhLi4uJyk7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gY29udGVudEFyZWFzV3JhcHBlci5odG1sKCk7XHJjb250ZW50QXJlYXMgPSAkKCc8ZGl2IC8+JykuaHRtbChvcmlnaW5hbENvbnRlbnQpO1xyY29udGVudEFyZWFzV3JhcHBlci5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXMpO1xyfVxyY29udGVudEFyZWFzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRlbnRBcmVhID0gJCh0aGlzKTtccmlmICghY29udGVudEFyZWEuYXR0cignaWQnKSkge1xyY29udGVudEFyZWEuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbnRlbnQtYXJlYScpKTtccn1ccnNlbGYuaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhKTtccn0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgZWxlbWVudCA9IHNlbGYuZWxlbWVudDtccmxldCBpZCA9IHNlbGYuaWQ7XHJsZXQgY29udGVudCA9IHNlbGYuZ2V0Q29udGVudChmYWxzZSk7XHJpZiAoc2VsZi5vcHRpb25zLmlmcmFtZU1vZGUpIHtccnNlbGYuaWZyYW1lV3JhcHBlci5yZW1vdmUoKTtccn0gZWxzZSB7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIucmVtb3ZlKCk7XHJ9XHJpZiAoZWxlbWVudC5pcygndGV4dGFyZWEnKSkge1xyZWxlbWVudC52YWwoY29udGVudCk7XHJ9IGVsc2Uge1xyZWxlbWVudC5odG1sKGNvbnRlbnQpO1xyfVxyZWxlbWVudC5yZW1vdmVDbGFzcygna2VkaXRvci1oaWRkZW4tZWxlbWVudCcpO1xyZWxlbWVudC5kYXRhKCdrZWRpdG9yJywgbnVsbCk7XHJkZWxldGUgS0VkaXRvci5pbnN0YW5jZXNbaWRdO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaW5BcnJheSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IHJlc3VsdCA9IFtdO1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYS1pbm5lcicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGh0bWwgPSAnJztcciQodGhpcykuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRhaW5lcicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lciA9ICQodGhpcyk7XHJodG1sICs9IHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIpO1xyfSk7XHJyZXN1bHQucHVzaChodG1sKTtccn0pO1xycmV0dXJuIGluQXJyYXkgPyByZXN1bHQgOiByZXN1bHQuam9pbignXFxuJyk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQ7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gZWxlbWVudC5pcygndGV4dGFyZWEnKSA/IGVsZW1lbnQudmFsKCkgOiBlbGVtZW50Lmh0bWwoKTtccmxldCB3cmFwcGVyID0gc2VsZi5pZnJhbWVXcmFwcGVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1pZnJhbWUtd3JhcHBlclwiPjwvZGl2PicpO1xybGV0IGlmcmFtZSA9IHNlbGYuaWZyYW1lID0gJCgnPGlmcmFtZSBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1pZnJhbWVcIj48L2lmcmFtZT4nKTtccmVsZW1lbnQuYWZ0ZXIod3JhcHBlcik7XHJ3cmFwcGVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdpZnJhbWUtd3JhcHBlcicpKS5hcHBlbmQoaWZyYW1lKTtccmVsZW1lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaGlkZGVuLWVsZW1lbnQnKTtccmxldCBpZnJhbWVEb2MgPSBzZWxmLmlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50cygpO1xyLy8gRml4IGlzc3VlIEZpcmVmb3ggY2FuJ3QgcmVuZGVyIGNvbnRlbnQgaW5zaWRlIGlmcmFtZVxyLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJpZnJhbWVEb2MuZ2V0KDApLm9wZW4oKTtccmlmcmFtZURvYy5nZXQoMCkuY2xvc2UoKTtcci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyc2VsZi53aW5kb3cgPSBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA/IGlmcmFtZVswXS5jb250ZW50V2luZG93IDogaWZyYW1lWzBdLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztccmxldCBpZnJhbWVIZWFkID0gc2VsZi5pZnJhbWVIZWFkID0gaWZyYW1lRG9jLmZpbmQoJ2hlYWQnKTtccmxldCBpZnJhbWVCb2R5ID0gc2VsZi5pZnJhbWVCb2R5ID0gc2VsZi5ib2R5ID0gaWZyYW1lRG9jLmZpbmQoJ2JvZHknKTtccmxvZygnQWRkaW5nIHN0eWxlcyB0byBpZnJhbWUuLi4nKTtccmxldCBzdHlsZXMgPSAnJztcciQoJ1tkYXRhLXR5cGU9XCJrZWRpdG9yLXN0eWxlXCJdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc3R5bGUgPSAkKHRoaXMpO1xybGV0IGhyZWYgPSBzdHlsZS5hdHRyKCdocmVmJykgfHwgc3R5bGUuYXR0cignZGF0YS1ocmVmJykgfHwgJyc7XHJpZiAoaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7aHJlZn1cIiAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+JHtzdHlsZS5odG1sKCl9PC9zdHlsZT5cXG5gO1xyfVxyfSk7XHJpZiAob3B0aW9ucy5jb250ZW50U3R5bGVzICYmICQuaXNBcnJheShvcHRpb25zLmNvbnRlbnRTdHlsZXMpKSB7XHIkLmVhY2gob3B0aW9ucy5jb250ZW50U3R5bGVzLCBmdW5jdGlvbiAoaSwgc3R5bGUpIHtccmxldCBpZFN0ciA9ICcnO1xyaWYgKHN0eWxlLmlkKSB7XHJpZFN0ciA9IGAgaWQ9XCIke3N0eWxlLmlkfVwiIGA7XHJ9XHJpZiAoc3R5bGUuaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7c3R5bGUuaHJlZn1cIiAke2lkU3RyfSAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgJHtpZFN0cn0+JHtzdHlsZS5jb250ZW50fTwvc3R5bGU+XFxuYDtccn1ccn0pO1xyfVxyaWZyYW1lSGVhZC5hcHBlbmQoc3R5bGVzKTtccmxvZygnQWRkaW5nIG9yaWdpbmFsIGNvbnRlbnQgdG8gaWZyYW1lLi4uJyk7XHJsZXQgY29udGVudEFyZWFzV3JhcHBlciA9IHNlbGYuZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyKG9yaWdpbmFsQ29udGVudCk7XHJpZnJhbWVCb2R5LmFwcGVuZChjb250ZW50QXJlYXNXcmFwcGVyKTtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9IGNvbnRlbnRBcmVhc1dyYXBwZXI7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0SWZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdElmcmFtZS5jYWxsKHNlbGYsIGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpZnJhbWUsIHdyYXBwZXIpIHtccmlmICghd3JhcHBlcikge1xyaWZyYW1lLndyYXAoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWlmcmFtZS13cmFwcGVyLWZha2VcIj48L2Rpdj4nKTtccndyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJ9XHJ3cmFwcGVyLmFkZENsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJsZXQgY292ZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci1pZnJhbWUtY292ZXJcIj48L2Rpdj4nKTtccndyYXBwZXIucHJlcGVuZChjb3Zlcik7XHJ3cmFwcGVyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyd3JhcHBlci5yZW1vdmVDbGFzcygnaGlkZGVuLWNvdmVyJyk7XHJ9KTtccmNvdmVyLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJ3cmFwcGVyLmFkZENsYXNzKCdoaWRkZW4tY292ZXInKTtccn0pO1xyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyaW1wb3J0IERFRkFVTFRTIGZyb20gJy4vY29uc3RhbnRzL2RlZmF1bHRzJztccmltcG9ydCBsb2cgZnJvbSAnLi91dGlscy9sb2cnO1xyXG5pbXBvcnQgZXJyb3IgZnJvbSAnLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVJZCc7XHJcbmltcG9ydCBnZW5lcmF0ZVRvb2xiYXIgZnJvbSAnLi91dGlscy9nZW5lcmF0ZVRvb2xiYXInO1xyXG5pbXBvcnQgZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyIGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyJztcclxuaW1wb3J0IGJlYXV0aWZ5Q2F0ZWdvcmllcyBmcm9tICcuL3V0aWxzL2JlYXV0aWZ5Q2F0ZWdvcmllcyc7XHJcbmltcG9ydCBnZXREYXRhQXR0cmlidXRlcyBmcm9tICcuL3V0aWxzL2dldERhdGFBdHRyaWJ1dGVzJztcclxuaW1wb3J0IGdldENsaWNrZWRFbGVtZW50IGZyb20gJy4vdXRpbHMvZ2V0Q2xpY2tlZEVsZW1lbnQnO1xyXG5pbXBvcnQgaW5pdEtFZGl0b3JDbGlja3MgZnJvbSAnLi91dGlscy9pbml0S0VkaXRvckNsaWNrcyc7XHJpbXBvcnQgaW5pdElmcmFtZSBmcm9tICcuL2lmcmFtZS9pbml0SWZyYW1lJztcclxuaW1wb3J0IGluaXRJZnJhbWVDb3ZlciBmcm9tICcuL2lmcmFtZS9pbml0SWZyYW1lQ292ZXInO1xyaW1wb3J0IGluaXRTaWRlYmFyIGZyb20gJy4vc2lkZWJhci9pbml0U2lkZWJhcic7XHJcbmltcG9ydCBvcGVuU2lkZWJhciBmcm9tICcuL3NpZGViYXIvb3BlblNpZGViYXInO1xyXG5pbXBvcnQgY2xvc2VTaWRlYmFyIGZyb20gJy4vc2lkZWJhci9jbG9zZVNpZGViYXInO1xyaW1wb3J0IHJlbmRlclNuaXBwZXRzIGZyb20gJy4vc25pcHBldC9yZW5kZXJTbmlwcGV0cyc7XHJcbmltcG9ydCBpbml0U25pcHBldHNGaWx0ZXIgZnJvbSAnLi9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlcic7XHJcbmltcG9ydCBhZGRTbmlwcGV0IGZyb20gJy4vc25pcHBldC9hZGRTbmlwcGV0JztccmltcG9ydCBpbml0U25pcHBldHNNb2RhbCBmcm9tICcuL21vZGFsL2luaXRTbmlwcGV0c01vZGFsJztcclxuaW1wb3J0IG9wZW5Nb2RhbCBmcm9tICcuL21vZGFsL29wZW5Nb2RhbCc7XHJcbmltcG9ydCBjbG9zZU1vZGFsIGZyb20gJy4vbW9kYWwvY2xvc2VNb2RhbCc7XHJpbXBvcnQgaW5pdENvbnRlbnRBcmVhcyBmcm9tICcuL2NvbnRlbnRBcmVhL2luaXRDb250ZW50QXJlYXMnO1xyXG5pbXBvcnQgaW5pdENvbnRlbnRBcmVhIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhJztccmltcG9ydCBjb252ZXJ0VG9Db250YWluZXIgZnJvbSAnLi9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXIgZnJvbSAnLi9jb250YWluZXIvaW5pdENvbnRhaW5lcic7XHJcbmltcG9ydCBpbml0Q29udGFpbmVyQ29udGVudCBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudCc7XHJcbmltcG9ydCBnZXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2dldENvbnRhaW5lckNvbnRlbnQnO1xyaW1wb3J0IGdldENvbXBvbmVudFR5cGUgZnJvbSAnLi9jb21wb25lbnQvZ2V0Q29tcG9uZW50VHlwZSc7XHJcbmltcG9ydCBjb252ZXJ0VG9Db21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50JztcclxuaW1wb3J0IGluaXRDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvaW5pdENvbXBvbmVudCc7XHJcbmltcG9ydCBpbml0RHluYW1pY0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnQvaW5pdER5bmFtaWNDb250ZW50JztcclxuaW1wb3J0IGRlbGV0ZUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQnO1xyXG5pbXBvcnQgZ2V0Q29tcG9uZW50Q29udGVudCBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRDb250ZW50JztccmltcG9ydCBpbml0IGZyb20gJy4vaW5pdCc7XHJcbmltcG9ydCBkZXN0cm95IGZyb20gJy4vZGVzdHJveSc7XHJcbmltcG9ydCBnZXRDb250ZW50IGZyb20gJy4vZ2V0Q29udGVudCc7XHJcbmltcG9ydCBzZXRDb250ZW50IGZyb20gJy4vc2V0Q29udGVudCc7XHJpbXBvcnQgJy4uL3N0eWxlcy9rZWRpdG9yLmxlc3MnO1xyLy8gQ2hlY2sgZGVwZW5kZW5jaWVzXHJcbmlmICghJC5mbi5zb3J0YWJsZSkge1xyZXJyb3IoJyQuZm4uc29ydGFibGUgZG9lcyBub3QgZXhpc3QuIFBsZWFzZSBpbXBvcnQgJC5mbi5zb3J0YWJsZSBpbnRvIHlvdXIgZG9jdW1lbnQgZm9yIGNvbnRpbnVlIHVzaW5nIEtFZGl0b3IuJyk7XHJcbn1cci8vIEtFZGl0b3IgY2xhc3NcclxuY2xhc3MgS0VkaXRvciB7XHJzdGF0aWMgREVGQVVMVFMgPSBERUZBVUxUUztccnN0YXRpYyBkZWJ1ZyA9IGZhbHNlO1xyc3RhdGljIHZlcnNpb24gPSAnMi4wLjAnO1xyc3RhdGljIGluc3RhbmNlcyA9IHt9O1xyc3RhdGljIGNvbXBvbmVudHMgPSB7XHJibGFuazoge1xyc2V0dGluZ0VuYWJsZWQ6IGZhbHNlXHJ9XHJ9O1xyc3RhdGljIGxvZyguLi5hcmdzKSB7XHJsb2coLi4uYXJncyk7XHJ9XHJzdGF0aWMgZXJyb3IoLi4uYXJncykge1xyZXJyb3IoLi4uYXJncyk7XHJ9XHJzdGF0aWMgaW5pdCh0YXJnZXQsIGNvbmZpZykge1xycmV0dXJuIG5ldyBLRWRpdG9yKHRhcmdldCwgY29uZmlnKTtccn1ccmNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gaW5pdC5hcHBseSh0aGlzLCBbdGFyZ2V0LCBjb25maWddKTtccn1ccmdlbmVyYXRlSWQodHlwZSkge1xycmV0dXJuIGdlbmVyYXRlSWQuYXBwbHkodGhpcywgW3R5cGVdKTtccn1ccmdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlcihjb250ZW50KSB7XHJyZXR1cm4gZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyLmFwcGx5KHRoaXMsIFtjb250ZW50XSk7XHJ9XHJnZW5lcmF0ZVRvb2xiYXIodHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccnJldHVybiBnZW5lcmF0ZVRvb2xiYXIuYXBwbHkodGhpcywgW3R5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlXSk7XHJ9XHJiZWF1dGlmeUNhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xycmV0dXJuIGJlYXV0aWZ5Q2F0ZWdvcmllcy5hcHBseSh0aGlzLCBbY2F0ZWdvcmllc10pO1xyfVxyc2V0U2V0dGluZ0NvbnRhaW5lcihjb250YWluZXIpIHtccnRoaXMuc2V0dGluZ0NvbnRhaW5lciA9IGNvbnRhaW5lcjtccn1ccmdldFNldHRpbmdDb250YWluZXIoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29udGFpbmVyO1xyfVxyc2V0U2V0dGluZ0NvbXBvbmVudChjb21wb25lbnQpIHtccnRoaXMuc2V0dGluZ0NvbXBvbmVudCA9IGNvbXBvbmVudDtccn1ccmdldFNldHRpbmdDb21wb25lbnQoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29tcG9uZW50O1xyfVxyZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5KSB7XHJyZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZXMuYXBwbHkodGhpcywgW3RhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheV0pO1xyfVxyZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRUeXBlLmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENsaWNrZWRFbGVtZW50KGV2ZW50LCBzZWxlY3Rvcikge1xycmV0dXJuIGdldENsaWNrZWRFbGVtZW50LmFwcGx5KHRoaXMsIFtldmVudCwgc2VsZWN0b3JdKTtccn1cci8vIElmcmFtZVxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRJZnJhbWUoKSB7XHJyZXR1cm4gaW5pdElmcmFtZS5hcHBseSh0aGlzKTtccn1ccmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpIHtccnJldHVybiBpbml0SWZyYW1lQ292ZXIuYXBwbHkodGhpcywgW2lmcmFtZSwgd3JhcHBlcl0pO1xyfVxyLy8gS0VkaXRvciBjbGlja3Ncci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0S0VkaXRvckNsaWNrcygpIHtccnJldHVybiBpbml0S0VkaXRvckNsaWNrcy5hcHBseSh0aGlzKTtccn1cci8vIFNpZGViYXJcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U2lkZWJhcigpIHtccnJldHVybiBpbml0U2lkZWJhci5hcHBseSh0aGlzKTtccn1ccm9wZW5TaWRlYmFyKHRhcmdldCkge1xycmV0dXJuIG9wZW5TaWRlYmFyLmFwcGx5KHRoaXMsIFt0YXJnZXRdKTtccn1ccmNsb3NlU2lkZWJhcigpIHtccnJldHVybiBjbG9zZVNpZGViYXIuYXBwbHkodGhpcyk7XHJ9XHIvLyBMZWdhY3kgbWV0aG9kcy4gREVQUkVDQVRFRFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccnNob3dTZXR0aW5nUGFuZWwodGFyZ2V0KSB7XHJ0aGlzLm9wZW5TaWRlYmFyKHRhcmdldCk7XHJ9XHJoaWRlU2V0dGluZ1BhbmVsKCkge1xydGhpcy5jbG9zZVNpZGViYXIoKTtccn1cci8vIFNuaXBwZXQgbW9kYWxcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U25pcHBldHNNb2RhbCgpIHtccnJldHVybiBpbml0U25pcHBldHNNb2RhbC5hcHBseSh0aGlzKTtccn1ccnJlbmRlclNuaXBwZXRzKHJlc3ApIHtccnJldHVybiByZW5kZXJTbmlwcGV0cy5hcHBseSh0aGlzLCBbcmVzcF0pO1xyfVxyaW5pdFNuaXBwZXRzRmlsdGVyKHR5cGUpIHtccnJldHVybiBpbml0U25pcHBldHNGaWx0ZXIuYXBwbHkodGhpcywgW3R5cGVdKTtccn1ccm9wZW5Nb2RhbCh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJyZXR1cm4gb3Blbk1vZGFsLmFwcGx5KHRoaXMsIFt0YXJnZXQsIHNuaXBwZXRUeXBlXSk7XHJ9XHJjbG9zZU1vZGFsKCkge1xycmV0dXJuIGNsb3NlTW9kYWwuYXBwbHkodGhpcyk7XHJ9XHIvLyBDb250ZW50IGFyZWFzXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdENvbnRlbnRBcmVhcygpIHtccnJldHVybiBpbml0Q29udGVudEFyZWFzLmFwcGx5KHRoaXMpO1xyfVxyaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccnJldHVybiBpbml0Q29udGVudEFyZWEuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXJdKTtccn1cci8vIENvbnRhaW5lcnNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIHRhcmdldCkge1xycmV0dXJuIGNvbnZlcnRUb0NvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIHRhcmdldF0pO1xyfVxyaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKSB7XHJyZXR1cm4gaW5pdENvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lcl0pO1xyfVxyaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpIHtccnJldHVybiBpbml0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWRdKTtccn1cci8vIENvbXBvbmVudHNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJyZXR1cm4gY29udmVydFRvQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmddKTtccn1ccmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJyZXR1cm4gaW5pdENvbXBvbmVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50XSk7XHJ9XHJpbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpIHtccnJldHVybiBpbml0RHluYW1pY0NvbnRlbnQuYXBwbHkodGhpcywgW2R5bmFtaWNFbGVtZW50XSk7XHJ9XHJkZWxldGVDb21wb25lbnQoY29tcG9uZW50KSB7XHJyZXR1cm4gZGVsZXRlQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1cci8vIEdldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZ2V0Q29tcG9uZW50Q29udGVudChjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRDb250ZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBpc05lc3RlZCkge1xycmV0dXJuIGdldENvbnRhaW5lckNvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRhaW5lciwgaXNOZXN0ZWRdKTtccn1ccmdldENvbnRlbnQoaW5BcnJheSkge1xycmV0dXJuIGdldENvbnRlbnQuYXBwbHkodGhpcywgW2luQXJyYXldKTtccn1cci8vIFNldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2V0Q29udGVudChjb250ZW50LCBjb250ZW50QXJlYSkge1xycmV0dXJuIHNldENvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRlbnQsIGNvbnRlbnRBcmVhXSk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZGVzdHJveSgpIHtccnJldHVybiBkZXN0cm95LmFwcGx5KHRoaXMpO1xyfVxyLy8gRGVzdHJveVxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmFkZFNuaXBwZXQodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKSB7XHJyZXR1cm4gYWRkU25pcHBldC5hcHBseSh0aGlzLCBbdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzXSk7XHJ9XHJcbn1cci8vIEtFZGl0b3IgcGx1Z2luc1xyXG4kLmZuLmtlZGl0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xybGV0IGVsZW1lbnQgPSAkKHRoaXMpO1xybGV0IGluc3RhbmNlID0gZWxlbWVudC5kYXRhKCdrZWRpdG9yJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Vbb3B0aW9uc10gJiYgdHlwZW9mIGluc3RhbmNlW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJyZXR1cm4gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyfVxyfSBlbHNlIHtccmlmICghaW5zdGFuY2UpIHtccmluc3RhbmNlID0gS0VkaXRvci5pbml0KGVsZW1lbnQsIG9wdGlvbnMpO1xyZWxlbWVudC5kYXRhKCdrZWRpdG9yJywgaW5zdGFuY2UpO1xyfVxycmV0dXJuIGluc3RhbmNlO1xyfVxyXG59O1xyd2luZG93LktFZGl0b3IgPSAkLmtlZGl0b3IgPSAkLmZuLmtlZGl0b3IuY29uc3RydWN0b3IgPSBLRWRpdG9yO1xyXG4iLCJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyXG5pbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBjb25maWcpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50ID0gdGFyZ2V0O1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgREVGQVVMVFMsIGNvbmZpZyk7XHJpZiAob3B0aW9ucy5pZnJhbWVNb2RlKSB7XHJzZWxmLmluaXRJZnJhbWUoKTtccn0gZWxzZSB7XHJzZWxmLndpbmRvdyA9IHdpbmRvdztccnNlbGYuYm9keSA9ICQoZG9jdW1lbnQuYm9keSk7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gZWxlbWVudC52YWwoKSB8fCBlbGVtZW50Lmh0bWwoKSB8fCAnJztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIob3JpZ2luYWxDb250ZW50KTtccmlmIChlbGVtZW50LmlzKCd0ZXh0YXJlYScpKSB7XHJlbGVtZW50LmFmdGVyKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyZWxlbWVudC5hZGRDbGFzcyhDTEFTU19OQU1FUy5ISURERU5fRUxFTUVOVCk7XHJ9IGVsc2Uge1xyZWxlbWVudC5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXNXcmFwcGVyKTtccn1ccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9IGNvbnRlbnRBcmVhc1dyYXBwZXI7XHJ9XHJzZWxmLmluaXRTaWRlYmFyKCk7XHJzZWxmLmluaXRTbmlwcGV0c01vZGFsKCk7XHJzZWxmLmluaXRDb250ZW50QXJlYXMoKTtccmlmICghc2VsZi5ib2R5Lmhhc0NsYXNzKENMQVNTX05BTUVTLkNMSUNLU19JTklUSUFMSVpFRCkpIHtccnNlbGYuaW5pdEtFZGl0b3JDbGlja3MoKTtccn1ccnNlbGYuaWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccktFZGl0b3IuaW5zdGFuY2VzW3NlbGYuaWRdID0gc2VsZjtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblJlYWR5ID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uUmVhZHkuY2FsbChzZWxmKTtccn1cclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xyc2VsZi5tb2RhbFRhcmdldCA9IG51bGw7XHJzZWxmLm1vZGFsQWN0aW9uID0gbnVsbDtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbCgnJyk7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIC5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xybW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJcbmltcG9ydCBlcnJvciBmcm9tICcuLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IG1vZGFsSWQgPSBzZWxmLmdlbmVyYXRlSWQoJ21vZGFsJyk7XHJsZXQgc25pcHBldHNXcmFwcGVySHRtbCA9ICcnO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb250YWluZXJcIj48L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudFwiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfSBlbHNlIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0c1wiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfVxybGV0IG1vZGFsID0gc2VsZi5tb2RhbCA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1tb2RhbFwiIGlkPVwiJHttb2RhbElkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtaGVhZGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHI8aDQgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLXRpdGxlXCI+PC9oND5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtYm9keVwiPiR7c25pcHBldHNXcmFwcGVySHRtbH08L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWZvb3RlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQga2VkaXRvci1tb2RhbC1jbG9zZVwiPkNsb3NlPC9idXR0b24+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tcHJpbWFyeSBrZWRpdG9yLW1vZGFsLWFkZFwiPkFkZDwvYnV0dG9uPlxyPC9kaXY+XHI8L2Rpdj5ccmApO1xyaWYgKHR5cGVvZiBvcHRpb25zLnNuaXBwZXRzVXJsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLnNuaXBwZXRzVXJsLmxlbmd0aCA+IDApIHtccmxvZyhgR2V0dGluZyBzbmlwcGV0cyBmb3JtIFwiJHtvcHRpb25zLnNuaXBwZXRzVXJsfVwiLi4uYCk7XHIkLmFqYXgoe1xydHlwZTogJ2dldCcsXHJkYXRhVHlwZTogJ2h0bWwnLFxydXJsOiBvcHRpb25zLnNuaXBwZXRzVXJsLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3ApIHtccmxvZygnU3VjY2VzcyBpbiBnZXR0aW5nIHNuaXBwZXRzJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0xvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xycmVzcCA9IG9wdGlvbnMub25TbmlwcGV0c0xvYWRlZC5jYWxsKHNlbGYsIHJlc3ApIHx8IHJlc3A7XHJ9XHJzZWxmLnJlbmRlclNuaXBwZXRzKHJlc3ApO1xyaWYgKG9wdGlvbnMuc25pcHBldHNGaWx0ZXJFbmFibGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQ09OVEFJTkVSKTtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSBlbHNlIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5BTEwpO1xyfVxyfVxyfSxccmVycm9yOiBmdW5jdGlvbiAoanFYSFIpIHtccmxvZygnRXJyb3Igd2hlbiBnZXR0aW5nIHNuaXBwZXRzJywganFYSFIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vblNuaXBwZXRzRXJyb3IuY2FsbChzZWxmLCBqcVhIUik7XHJ9XHJ9XHJ9KTtcci8vIENsb3NlIGJ1dHRvbnNccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBZGQgYnV0dG9uXHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1hZGQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNlbGVjdGVkU25pcHBldCA9IG1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRTbmlwcGV0Lmxlbmd0aCA9PT0gMCkge1xycmV0dXJuO1xyfVxybGV0IGNvbnRlbnRBcmVhID0gc2VsZi5tb2RhbFRhcmdldC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBzbmlwcGV0VHlwZSA9IHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCBzbmlwcGV0Q29udGVudEVsZW1lbnQgPSBtb2RhbC5maW5kKHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXNuaXBwZXQnKSk7XHJsZXQgc25pcHBldENvbnRlbnQgPSBzbmlwcGV0Q29udGVudEVsZW1lbnQuaHRtbCgpO1xybGV0IGlzQWRkaW5nQ29udGFpbmVyID0gZmFsc2U7XHJsZXQgaXNBZGRpbmdDb21wb25lbnQgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSBmYWxzZTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnN3aXRjaCAoc2VsZi5tb2RhbFNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJpc0FkZGluZ0NvbXBvbmVudCA9IHRydWU7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn0gZWxzZSB7XHJpZiAoc25pcHBldFR5cGUgPT09ICdjb250YWluZXInKSB7XHJpc0FkZGluZ0NvbnRhaW5lciA9IHRydWU7XHJ9IGVsc2Uge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyaWYgKHNlbGYubW9kYWxUYXJnZXQuaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyJykpIHtccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccn0gZWxzZSB7XHJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSB0cnVlO1xyfVxyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyfVxybGV0IG5ld0NvbnRhaW5lcjtccmxldCBuZXdDb21wb25lbnQ7XHJpZiAoaXNBZGRpbmdDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29tcG9uZW50KTtccmxldCBjb250YWluZXIgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccn1ccmlmIChpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke29wdGlvbnMuY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xybmV3Q29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmVxKDApLmh0bWwobmV3Q29tcG9uZW50KTtccnNlbGYubW9kYWxUYXJnZXQuYXBwZW5kKG5ld0NvbnRhaW5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccn1ccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBY3Rpb24gY2xpY2sgZm9yIHNuaXBwZXRccm1vZGFsLm9uKCdjbGljaycsICcua2VkaXRvci1zbmlwcGV0JywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmlmICghc25pcHBldC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyc25pcHBldC5wYXJlbnQoKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccnNuaXBwZXQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJ9XHJ9KTtccmxldCBjc3NUcmFuc2l0aW9uRW5kID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnO1xybW9kYWwub24oY3NzVHJhbnNpdGlvbkVuZCwgKCkgPT4ge1xyaWYgKCFtb2RhbC5oYXNDbGFzcygnc2hvd2VkJykpIHtccm1vZGFsLmNzcygnZGlzcGxheScsICdub25lJyk7XHIkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKCdvcGVuZWQtbW9kYWwnKTtccn1ccn0pO1xybW9kYWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJ9IGVsc2Uge1xyZXJyb3IoJ1wic25pcHBldHNVcmxcIiBtdXN0IGJlIG5vdCBudWxsIScpO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJsb2coJ29wZW5Nb2RhbCcsIHRhcmdldCwgc25pcHBldFR5cGUpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IG1vZGFsVGl0bGUgPSAnJztccnN3aXRjaCAoc25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccm1vZGFsVGl0bGUgPSAnQWRkIGNvbnRhaW5lcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccm1vZGFsVGl0bGUgPSAnQWRkIGNvbXBvbmVudCc7XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtccm1vZGFsLmZpbmQoc25pcHBldFR5cGUgPT09IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgPyAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnQnIDogJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJ9IGVsc2Uge1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcicpLmNzcygnZGlzcGxheScsICdibG9jaycpLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRbZGF0YS10eXBlPWNvbnRhaW5lcl0nKS5jc3MoJ2Rpc3BsYXknLCBzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICdub25lJyA6ICdibG9jaycpO1xybW9kYWxUaXRsZSA9ICdBZGQgY29udGVudCc7XHJ9XHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC10aXRsZScpLmh0bWwobW9kYWxUaXRsZSk7XHJzZWxmLm1vZGFsVGFyZ2V0ID0gdGFyZ2V0O1xyc2VsZi5tb2RhbFNuaXBwZXRUeXBlID0gc25pcHBldFR5cGU7XHJtb2RhbC5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcciQoZG9jdW1lbnQuYm9keSkuYWRkQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyc2V0VGltZW91dCgoKSA9PiB7XHJtb2RhbC5hZGRDbGFzcygnc2hvd2VkJyk7XHJ9LCAwKTtcclxufTtcclxuIiwiaW1wb3J0IGVycm9yIGZyb20gXCIuL3V0aWxzL2Vycm9yXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudCwgY29udGVudEFyZWEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xyaWYgKCFjb250ZW50QXJlYSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmNoaWxkcmVuKCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccn0gZWxzZSB7XHJpZiAoIWNvbnRlbnRBcmVhLmpxdWVyeSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoY29udGVudEFyZWEpO1xyfVxyfVxyaWYgKGNvbnRlbnRBcmVhLmxlbmd0aCA9PT0gMCkge1xyZXJyb3IoJ0NvbnRlbnQgYXJlYSBkb2VzIG5vdCBleGlzdCEnKTtccn1ccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudCk7XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSwgdHJ1ZSk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5JykuY2hpbGRyZW4oJy5hY3RpdmUnKTtccmlmIChhY3RpdmVGb3JtLmxlbmd0aCA+IDApIHtccmlmIChhY3RpdmVGb3JtLmlzKCcua2VkaXRvci1jb250YWluZXItc2V0dGluZycpKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uLmNhbGwoc2VsZiwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9IGVsc2Uge1xybGV0IGFjdGl2ZVR5cGUgPSBhY3RpdmVGb3JtLmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbYWN0aXZlVHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmhpZGVTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIGFjdGl2ZUZvcm0sIHNlbGYpO1xyfVxyfVxyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJ9XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQobnVsbCk7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIobnVsbCk7XHJzaWRlYmFyLnJlbW92ZUNsYXNzKCdvcGVuZWQnKTtcclxufSIsImltcG9ydCBlcnJvciBmcm9tIFwiLi4vdXRpbHMvZXJyb3JcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhcklkID0gc2VsZi5nZW5lcmF0ZUlkKCdzaWRlYmFyJyk7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhciA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zaWRlYmFyXCIgaWQ9XCIke3NpZGViYXJJZH1cIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1oZWFkZXJcIj5ccjxzcGFuIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItdGl0bGVcIj48L3NwYW4+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItY2xvc2VcIj4mdGltZXM7PC9hPlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXItYm9keVwiPjwvZGl2PlxyPC9kaXY+XHJgKTtccnNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfSk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItYm9keScpO1xyc2lkZWJhckJvZHkub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnJldHVybiBmYWxzZTtccn0pO1xyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgZm9ybSA9ICQoJzxkaXYgIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNldHRpbmctZm9ybSBrZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nXCI+PC9kaXY+Jyk7XHJzaWRlYmFyQm9keS5hcHBlbmQoZm9ybSk7XHJsb2coJ0luaXRpYWxpemUgY29udGFpbmVyIHNldHRpbmcgcGFuZWwnKTtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbi5jYWxsKHNlbGYsIGZvcm0sIHNlbGYpO1xyfSBlbHNlIHtccmVycm9yKCdcImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb25cIiBpcyBub3QgZnVuY3Rpb24hJyk7XHJ9XHJ9XHJzaWRlYmFyLmFwcGVuZFRvKG9wdGlvbnMuaWZyYW1lTW9kZSA/IHNlbGYuaWZyYW1lV3JhcHBlciA6IHNlbGYuYm9keSk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgc2lkZWJhclRpdGxlID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLXRpdGxlJyk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItYm9keScpO1xybGV0IGFjdGl2ZUZvcm0gPSBzaWRlYmFyQm9keS5jaGlsZHJlbignLmFjdGl2ZScpO1xyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIobnVsbCk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZSh0YXJnZXQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJzaWRlYmFyVGl0bGUuaHRtbChjb21wb25lbnREYXRhLnNldHRpbmdUaXRsZSk7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyQm9keS5maW5kKGAua2VkaXRvci1zZXR0aW5nLSR7Y29tcG9uZW50VHlwZX1gKTtccmlmIChzZXR0aW5nRm9ybS5sZW5ndGggPT09IDApIHtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyc2V0dGluZ0Zvcm0gPSAkKGBccjxkaXZccmRhdGEtdHlwZT1cIiR7Y29tcG9uZW50VHlwZX1cIlxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2V0dGluZy1mb3JtIGtlZGl0b3Itc2V0dGluZy0ke2NvbXBvbmVudFR5cGV9IGNsZWFyZml4IGFjdGl2ZVwiXHI+XHI8L2Rpdj5ccmApO1xybGV0IGxvYWRpbmdUZXh0ID0gJCgnPHNwYW4gLz4nKS5odG1sKCdMb2FkaW5nLi4uJyk7XHJzaWRlYmFyQm9keS5hcHBlbmQoc2V0dGluZ0Zvcm0pO1xyc2V0dGluZ0Zvcm0uYXBwZW5kKGxvYWRpbmdUZXh0KTtccmxldCBpbml0RnVuY3Rpb24gPSBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCBzZWxmKTtcciQud2hlbihpbml0RnVuY3Rpb24pLmRvbmUoZnVuY3Rpb24gKCkge1xybG9nKGBJbml0aWFsaXplZCBzZXR0aW5nIGZvcm0gZm9yIGNvbXBvbmVudCB0eXBlIFwiJHtjb21wb25lbnRUeXBlfVwiYCk7XHJzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtccmxvYWRpbmdUZXh0LnJlbW92ZSgpO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgdGFyZ2V0LCBzZWxmKTtccn1ccn0sIDEwMCk7XHJ9KTtccn1ccn0gZWxzZSB7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyfVxyfSBlbHNlIHtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcih0YXJnZXQpO1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KG51bGwpO1xyc2lkZWJhclRpdGxlLmh0bWwoJ0NvbnRhaW5lciBTZXR0aW5ncycpO1xybGV0IHNldHRpbmdGb3JtID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1jb250YWluZXItc2V0dGluZycpO1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbi5jYWxsKHNlbGYsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyfVxyc2lkZWJhci5hZGRDbGFzcygnb3BlbmVkJyk7XHJcbn07XHJcbiIsImltcG9ydCByZW5kZXJTbmlwcGV0IGZyb20gXCIuL3JlbmRlclNuaXBwZXRcIjtcclxuaW1wb3J0IHJlbmRlclNuaXBwZXRGaWx0ZXIgZnJvbSBcIi4vcmVuZGVyU25pcHBldEZpbHRlclwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl0gPSByZW5kZXJTbmlwcGV0LmNhbGwoc2VsZiwgdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGV4dHJhRGF0YSk7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhbLi4uc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMsIC4uLnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzXSk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyJykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbCk7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudCcpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpO1xyfVxyfSBlbHNlIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKVxyfVxyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1ib2R5JykuYXBwZW5kKHNuaXBwZXRDb250ZW50SHRtbCk7XHJsZXQgZmlsdGVyVHlwZTtccmlmIChvcHRpb25zLnNuaXBwZXRzRmlsdGVyRW5hYmxlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyZmlsdGVyVHlwZSA9IHR5cGUgPT09ICdjb250YWluZXInID8gU05JUFBFVF9UWVBFLkNPTlRBSU5FUiA6IFNOSVBQRVRfVFlQRS5DT01QT05FTlQ7XHJ9IGVsc2Uge1xyZmlsdGVyVHlwZSA9IFNOSVBQRVRfVFlQRS5BTEw7XHJ9XHJ9XHJsZXQgW2NhdGVnb3JpZXNPcHRpb25zLCBzbmlwcGV0c1dyYXBwZXJdID0gcmVuZGVyU25pcHBldEZpbHRlci5jYWxsKHRoaXMsIGZpbHRlclR5cGUpO1xyc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWZpbHRlcicpLmh0bWwoY2F0ZWdvcmllc09wdGlvbnMpLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJcbmltcG9ydCByZW5kZXJTbmlwcGV0RmlsdGVyIGZyb20gXCIuL3JlbmRlclNuaXBwZXRGaWx0ZXJcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlKSB7XHJsb2coJ2luaXRTbmlwcGV0c0ZpbHRlcicpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgW2NhdGVnb3JpZXNPcHRpb25zLCBzbmlwcGV0c1dyYXBwZXJdID0gcmVuZGVyU25pcHBldEZpbHRlci5jYWxsKHRoaXMsIHR5cGUpO1xyc25pcHBldHNXcmFwcGVyLnByZXBlbmQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXItd3JhcHBlclwiPlxyPHNlbGVjdCBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1maWx0ZXJcIj5cciR7Y2F0ZWdvcmllc09wdGlvbnN9XHI8L3NlbGVjdD5ccjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLXNlYXJjaFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHRvIHNlYXJjaC4uLlwiIC8+XHI8L2Rpdj5ccmApO1xybGV0IHR4dFNlYXJjaCA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1zZWFyY2gnKTtccmxldCBjYmJGaWx0ZXIgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtZmlsdGVyJyk7XHJsZXQgZG9GaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IChjYmJGaWx0ZXIudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgc2VhcmNoVGV4dCA9ICh0eHRTZWFyY2gudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgc25pcHBldHMgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5jaGlsZHJlbignLmtlZGl0b3Itc25pcHBldCcpO1xyc25pcHBldHMuZmlsdGVyKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZENhdGVnb3J5IHx8IHNlYXJjaFRleHQpIHtccmxvZygnRmlsdGVyaW5nIHNuaXBwZXRzJyk7XHJzbmlwcGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBkYXRhQ2F0ZWdvcmllc1N0cmluZyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKS50b0xvd2VyQ2FzZSgpO1xybGV0IGRhdGFDYXRlZ29yaWVzID0gZGF0YUNhdGVnb3JpZXNTdHJpbmcuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xybGV0IGVycm9yID0gMDtccmlmIChzZWxlY3RlZENhdGVnb3J5KSB7XHJpZiAoJC5pbkFycmF5KHNlbGVjdGVkQ2F0ZWdvcnksIGRhdGFDYXRlZ29yaWVzKSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJpZiAoc2VhcmNoVGV4dCkge1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCd0aXRsZScpLnRvTG93ZXJDYXNlKCk7XHJpZiAodGl0bGUuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEgJiYgZGF0YUNhdGVnb3JpZXNTdHJpbmcuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJzbmlwcGV0W2Vycm9yID09PSAwID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKCdub3QtbWF0Y2hlZCcpO1xyfSk7XHJ9IGVsc2Uge1xybG9nKCdTaG93IGFsbCBzbmlwcGV0cycpO1xyc25pcHBldHMucmVtb3ZlQ2xhc3MoJ25vdC1tYXRjaGVkJyk7XHJ9XHJ9O1xyY2JiRmlsdGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJkb0ZpbHRlcigpO1xyfSk7XHJsZXQgdGltZXI7XHJ0eHRTZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XHJjbGVhclRpbWVvdXQodGltZXIpO1xydGltZXIgPSBzZXRUaW1lb3V0KGRvRmlsdGVyLCAyMDApO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0SWQgPSBzZWxmLmdlbmVyYXRlSWQoJ3NuaXBwZXQnKTtccmxldCBzbmlwcGV0UHJldmlld0h0bWwgPSBgXHI8c2VjdGlvblxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldFwiXHJkYXRhLXNuaXBwZXQ9XCIjJHtzbmlwcGV0SWR9XCJccmRhdGEtdHlwZT1cIiR7dHlwZX1cIlxydGl0bGU9XCIke3RpdGxlfVwiXHJkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcz1cIiR7Y2F0ZWdvcmllc31cIlxyPlxyPHNwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlld1VybH0nKVwiPjwvc3Bhbj48L3NwYW4+XHI8L3NlY3Rpb24+XHJgO1xybGV0IHNuaXBwZXRDb250ZW50SHRtbCA9IGA8c2NyaXB0IGlkPVwiJHtzbmlwcGV0SWR9XCIgdHlwZT1cInRleHQvaHRtbFwiICR7ZXh0cmFEYXRhLmpvaW4oJyAnKX0+JHtjb250ZW50fTwvc2NyaXB0PmA7XHJjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zcGxpdChvcHRpb25zLnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcik7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMuY29uY2F0KGNhdGVnb3JpZXMpO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9XHJyZXR1cm4gW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IGNhdGVnb3JpZXM7XHJsZXQgc25pcHBldHNXcmFwcGVyU2VsZWN0b3I7XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkFMTDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT05UQUlORVI6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmxldCBjYXRlZ29yaWVzT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkFsbDwvb3B0aW9uPic7XHIkLmVhY2goY2F0ZWdvcmllcywgZnVuY3Rpb24gKGksIGNhdGVnb3J5KSB7XHJjYXRlZ29yaWVzT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7Y2F0ZWdvcnl9XCI+JHtjYXRlZ29yeX08L29wdGlvbj5gO1xyfSk7XHJyZXR1cm4gW1xyY2F0ZWdvcmllc09wdGlvbnMsXHJtb2RhbC5maW5kKHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yKVxyXTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyXG5pbXBvcnQgcmVuZGVyU25pcHBldCBmcm9tICcuL3JlbmRlclNuaXBwZXQnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJlc3ApIHtccmxvZygncmVuZGVyU25pcHBldHMnKTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNuaXBwZXRzQ29udGFpbmVySHRtbCA9ICcnO1xybGV0IHNuaXBwZXRzQ29tcG9uZW50SHRtbCA9ICcnO1xybGV0IHNuaXBwZXRzQ29udGVudEh0bWwgPSAnJztccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gW107XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBbXTtcciQocmVzcCkuZmlsdGVyKCdkaXYnKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBjb250ZW50ID0gc25pcHBldC5odG1sKCkudHJpbSgpO1xybGV0IHByZXZpZXdVcmwgPSBzbmlwcGV0LmF0dHIoJ2RhdGEtcHJldmlldycpO1xybGV0IHR5cGUgPSBzbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItdGl0bGUnKTtccmxldCBjYXRlZ29yaWVzID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcycpIHx8ICcnO1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhzbmlwcGV0LCBbJ2RhdGEtcHJldmlldycsICdkYXRhLXR5cGUnLCAnZGF0YS1rZWRpdG9yLXRpdGxlJywgJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJ10sIHRydWUpO1xybGV0IFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXSA9IHJlbmRlclNuaXBwZXQuY2FsbChzZWxmLCB0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpO1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzbmlwcGV0c0NvbnRhaW5lckh0bWwgKz0gc25pcHBldFByZXZpZXdIdG1sO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc25pcHBldHNDb21wb25lbnRIdG1sICs9IHNuaXBwZXRQcmV2aWV3SHRtbDtccn1ccnNuaXBwZXRzQ29udGVudEh0bWwgKz0gc25pcHBldENvbnRlbnRIdG1sO1xyfSk7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhbLi4uc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMsIC4uLnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzXSk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lcicpLmh0bWwoc25pcHBldHNDb250YWluZXJIdG1sKTtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50JykuaHRtbChzbmlwcGV0c0NvbXBvbmVudEh0bWwpO1xyfSBlbHNlIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMnKS5odG1sKHNuaXBwZXRzQ29udGFpbmVySHRtbCArIHNuaXBwZXRzQ29tcG9uZW50SHRtbClccn1ccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtYm9keScpLmFwcGVuZChzbmlwcGV0c0NvbnRlbnRIdG1sKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNhdGVnb3JpZXMpIHtccmxldCBuZXdBcnJheSA9IFtdO1xyZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJsZXQgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2ldIHx8ICcnO1xyaWYgKGNhdGVnb3J5ICE9PSAnJyAmJiAkLmluQXJyYXkoY2F0ZWdvcnksIG5ld0FycmF5KSA9PT0gLTEpIHtccm5ld0FycmF5LnB1c2goY2F0ZWdvcnkpO1xyfVxyfVxycmV0dXJuIG5ld0FycmF5LnNvcnQoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKG1lc3NhZ2UpID0+IHtccnRocm93IG5ldyBFcnJvcihgWyBLRWRpdG9yIF0gJHttZXNzYWdlfWApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29udGVudEFyZWFzV3JhcHBlciA9ICQob3B0aW9ucy5jb250ZW50QXJlYXNXcmFwcGVyIHx8ICc8ZGl2IC8+Jyk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2NsYXNzJywgJ2tlZGl0b3ItdWkga2VkaXRvci1jb250ZW50LWFyZWEtd3JhcHBlcicpO1xyaWYgKCFjb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2lkJykpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbnRlbnQtYXJlYS13cmFwcGVyJykpO1xyfVxyY29udGVudEFyZWFzV3JhcHBlci5odG1sKGNvbnRlbnQpO1xycmV0dXJuIGNvbnRlbnRBcmVhc1dyYXBwZXI7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0ICh0eXBlID0gJycpID0+IHtccmxldCB0aW1lc3RhbXAgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xybGV0IHJhbmRvbSA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDk4NzY1NDMyMTApO1xycmV0dXJuIGBrZWRpdG9yLSR7dHlwZX0tJHt0aW1lc3RhbXB9JHtyYW5kb219YDtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvdG9vbGJhclR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzZXR0aW5nQnRuID0gJyc7XHJpZiAoIW9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybGV0IHRvb2xiYXJDbGFzcyA9ICcnO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXInO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXInO1xycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSAke3Rvb2xiYXJDbGFzc31cIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRlbnRcIiB0aXRsZT1cIkFkZCBjb250ZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbnRlbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBjb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyIGtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhciBrZWRpdG9yLWJ0bi1ncm91cFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgc3ViLWNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRTdWJDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09NUE9ORU5UOlxyaWYgKGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29tcG9uZW50VGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29tcG9uZW50XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbXBvbmVudFRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdG9yKSB7XHJsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xybGV0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XHJpZiAodGFyZ2V0LmlzKHNlbGVjdG9yKSkge1xycmV0dXJuIHRhcmdldDtccn0gZWxzZSBpZiAoY2xvc2VzdC5sZW5ndGggPiAwKSB7XHJyZXR1cm4gY2xvc2VzdDtccn0gZWxzZSB7XHJyZXR1cm4gbnVsbDtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheSkge1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gaXNBcnJheSA/IFtdIDoge307XHJpZiAoIWlnbm9yZUF0dHJpYnV0ZXMpIHtccmlnbm9yZUF0dHJpYnV0ZXMgPSBbXTtccn1cciQuZWFjaCh0YXJnZXQuZ2V0KDApLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJpZiAoYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDAgJiYgJC5pbkFycmF5KGF0dHIubmFtZSwgaWdub3JlQXR0cmlidXRlcykgPT09IC0xKSB7XHJpZiAoaXNBcnJheSkge1xyZGF0YUF0dHJpYnV0ZXMucHVzaChgJHthdHRyLm5hbWV9PVwiJHthdHRyLnZhbHVlfVwiYCk7XHJ9IGVsc2Uge1xyZGF0YUF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XHJ9XHJ9XHJ9KTtccnJldHVybiBkYXRhQXR0cmlidXRlcztcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybG9nKCdpbml0S0VkaXRvckNsaWNrcycpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgYm9keSA9IHNlbGYuYm9keTtccmJvZHkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmxldCBzaWRlYmFyID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3Itc2lkZWJhcicpO1xybGV0IG1vZGFsID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItbW9kYWwnKTtccmxldCBjb250YWluZXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1jb250YWluZXInKTtccmlmIChjb250YWluZXIpIHtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJykpIHtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0gZWxzZSB7XHJpZiAoIXNpZGViYXIgJiYgIW1vZGFsKSB7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyfVxybGV0IGNvbXBvbmVudCA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xyaWYgKGNvbXBvbmVudCkge1xyaWYgKCFjb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbXBvbmVudC5wYXJlbnQoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0gZWxzZSB7XHJpZiAoIXNpZGViYXIpIHtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbnRhaW5lci1zZXR0aW5nJywgYnRuKTtccmxldCBjb250YWluZXIgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoYm9keS5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2V0dGluZycpICYmIGJvZHkuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNpZGViYXInKSkge1xyaWYgKCFjb250YWluZXIuaXMoc2VsZi5zZXR0aW5nQ29udGFpbmVyKSkge1xyc2VsZi5vcGVuU2lkZWJhcihjb250YWluZXIpO1xyfSBlbHNlIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5vcGVuU2lkZWJhcihjb250YWluZXIpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1kdXBsaWNhdGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29udGFpbmVyLWR1cGxpY2F0ZScsIGJ0bik7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xybGV0IG5ld0NvbnRhaW5lciA9ICQoc2VsZi5nZXRDb250YWluZXJDb250ZW50KGNvbnRhaW5lciwgYnRuLnBhcmVudCgpLmhhc0NsYXNzKCdrZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lcicpKSk7XHJjb250YWluZXIuYWZ0ZXIobmV3Q29udGFpbmVyKTtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xybG9nKCdDb250YWluZXIgaXMgZHVwbGljYXRlZCcpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyRHVwbGljYXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckR1cGxpY2F0ZWQuY2FsbChzZWxmLCBjb250YWluZXIsIG5ld0NvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbnRhaW5lci1kZWxldGUnLCBidG4pO1xyaWYgKGNvbmZpcm0ob3B0aW9ucy5jb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dCkpIHtccmxldCBjb250YWluZXIgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29tcG9uZW50cyA9IGNvbnRhaW5lci5maW5kKCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVDb250YWluZXJEZWxldGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgc2V0dGluZ0NvbXBvbmVudCA9IHNlbGYuc2V0dGluZ0NvbXBvbmVudDtccmlmIChzZXR0aW5nQ29tcG9uZW50KSB7XHJsZXQgc2V0dGluZ0NvbXBvbmVudFBhcmVudCA9IHNldHRpbmdDb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoc2V0dGluZ0NvbXBvbmVudFBhcmVudC5pcyhjb250YWluZXIpKSB7XHJsb2coJ0RlbGV0aW5nIGNvbnRhaW5lciBpcyBjb250YWluZXIgb2Ygc2V0dGluZyBjb250YWluZXIuIENsb3NlIHNldHRpbmcgcGFuZWwgZm9yIHRoaXMgc2V0dGluZyBjb21wb25lbnQnLCBzZXR0aW5nQ29tcG9uZW50KTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJ9IGVsc2UgaWYgKGNvbnRhaW5lci5pcyhzZWxmLnNldHRpbmdDb250YWluZXIpKSB7XHJsb2coJ0RlbGV0aW5nIGNvbnRhaW5lciBpcyBzZXR0aW5nIGNvbnRhaW5lci4gQ2xvc2Ugc2V0dGluZyBwYW5lbCBmb3IgdGhpcyBjb250YWluZXInLCBjb250YWluZXIpO1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccmlmIChjb21wb25lbnRzLmxlbmd0aCA+IDApIHtccmNvbXBvbmVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJzZWxmLmRlbGV0ZUNvbXBvbmVudCgkKHRoaXMpKTtccn0pO1xyfVxyY29udGFpbmVyLnJlbW92ZSgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyRGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckRlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29tcG9uZW50LXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29tcG9uZW50LXNldHRpbmcnLCBidG4pO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmlmIChib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgYm9keS5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQoKSkpIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbXBvbmVudC1kdXBsaWNhdGUnLCBidG4pO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29tcG9uZW50ID0gJChzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY29tcG9uZW50KSk7XHJjb21wb25lbnQuYWZ0ZXIobmV3Q29tcG9uZW50KTtccnNlbGYuY29udmVydFRvQ29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIG5ld0NvbXBvbmVudCk7XHJsb2coJ0NvbXBvbmVudCBpcyBkdXBsaWNhdGVkJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbXBvbmVudC1kZWxldGUnLCBidG4pO1xyaWYgKGNvbmZpcm0ob3B0aW9ucy5jb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCkpIHtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccnNlbGYuZGVsZXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9KTtccmJvZHkuYWRkQ2xhc3MoJ2tlZGl0b3ItY2xpY2tzLWluaXRpYWxpemVkJyk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJleHBvcnQgZGVmYXVsdCAoLi4uYXJncykgPT4ge1xyaWYgKGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nICYmICQua2VkaXRvci5kZWJ1Zykge1xyY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbIEtFZGl0b3IgXSAnLCAuLi5hcmdzXSk7XHJ9XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiXSwic291cmNlUm9vdCI6IiJ9