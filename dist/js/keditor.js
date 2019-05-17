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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2dldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2Vycm9yLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9pbml0S0VkaXRvckNsaWNrcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLmxlc3M/MjZmMyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInRhcmdldCIsImlzRXhpc3RpbmciLCJsb2ciLCJpcyIsInNlbGYiLCJpc1NlY3Rpb24iLCJjb21wb25lbnQiLCJhZGRDbGFzcyIsIndyYXBJbm5lciIsIndyYXAiLCJwYXJlbnQiLCJpbml0Q29tcG9uZW50IiwiY29tcG9uZW50VHlwZSIsImdldENvbXBvbmVudFR5cGUiLCJjb21wb25lbnREYXRhIiwiS0VkaXRvciIsImNvbXBvbmVudHMiLCJkZXN0cm95IiwiY2FsbCIsInJlbW92ZSIsImNsb25lZENvbXBvbmVudCIsImNsb25lIiwiZGF0YUF0dHJpYnV0ZXMiLCJnZXREYXRhQXR0cmlidXRlcyIsImNvbnRlbnQiLCJpZnJhbWVXcmFwcGVyIiwiZmluZCIsImxlbmd0aCIsImlmcmFtZSIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJ1bndyYXAiLCJyZW1vdmVDbGFzcyIsImdldENvbnRlbnQiLCJjb21wb25lbnRDb250ZW50IiwiaHRtbCIsImVhY2giLCIkIiwiam9pbiIsIm9wdGlvbnMiLCJhdHRyIiwicmVwbGFjZSIsImRlZmF1bHRDb21wb25lbnRUeXBlIiwiZXJyb3IiLCJib2R5IiwiZ2VuZXJhdGVJZCIsIm9uQmVmb3JlSW5pdENvbXBvbmVudCIsImFwcGVuZCIsImdlbmVyYXRlVG9vbGJhciIsIlRPT0xCQVJfVFlQRSIsIkNPTVBPTkVOVCIsInNldHRpbmdFbmFibGVkIiwiZHluYW1pY0VsZW1lbnQiLCJpbml0RHluYW1pY0NvbnRlbnQiLCJpbml0Iiwib25Jbml0Q29tcG9uZW50IiwiY2xvc2VzdCIsIm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkIiwiZHluYW1pY0hyZWYiLCJkYXRhIiwicGFyYW0iLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwianFYSFIiLCJvbkR5bmFtaWNDb250ZW50TG9hZGVkIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwib25EeW5hbWljQ29udGVudEVycm9yIiwiUFJFRklYX0NMQVNTIiwiVUkiLCJISURERU5fRUxFTUVOVCIsIkNMSUNLU19JTklUSUFMSVpFRCIsIkNPTlRFTlRfQVJFQVNfV1JBUFBFUiIsIm5lc3RlZENvbnRhaW5lckVuYWJsZWQiLCJleHBsaWNpdFNuaXBwZXRFbmFibGVkIiwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQiLCJidG5BZGRDb250ZW50VGV4dCIsImJ0bkFkZENvbnRhaW5lclRleHQiLCJidG5BZGRTdWJDb250YWluZXJUZXh0IiwiYnRuQWRkQ29tcG9uZW50VGV4dCIsImJ0bk1vdmVDb250YWluZXJUZXh0IiwiYnRuTW92ZUNvbXBvbmVudFRleHQiLCJidG5TZXR0aW5nQ29udGFpbmVyVGV4dCIsImJ0blNldHRpbmdDb21wb25lbnRUZXh0IiwiYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dCIsImJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQiLCJidG5EZWxldGVDb250YWluZXJUZXh0IiwiYnRuRGVsZXRlQ29tcG9uZW50VGV4dCIsImNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0IiwiY29uZmlybURlbGV0ZUNvbXBvbmVudFRleHQiLCJzbmlwcGV0c1VybCIsInNuaXBwZXRzRmlsdGVyRW5hYmxlZCIsInNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvciIsImlmcmFtZU1vZGUiLCJjb250ZW50U3R5bGVzIiwiY29udGVudEFyZWFzU2VsZWN0b3IiLCJjb250ZW50QXJlYXNXcmFwcGVyIiwiQ0xBU1NfTkFNRVMiLCJjb250YWluZXJTZXR0aW5nRW5hYmxlZCIsImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24iLCJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiIsIm9uUmVhZHkiLCJvblNuaXBwZXRzTG9hZGVkIiwicmVzcCIsIm9uU25pcHBldHNFcnJvciIsIm9uSW5pdElmcmFtZSIsImlmcmFtZUhlYWQiLCJpZnJhbWVCb2R5Iiwib25Db250ZW50Q2hhbmdlZCIsImV2ZW50Iiwib25CZWZvcmVJbml0Q29udGVudEFyZWEiLCJvbkluaXRDb250ZW50QXJlYSIsIm9uQmVmb3JlSW5pdENvbnRhaW5lciIsIm9uSW5pdENvbnRhaW5lciIsIm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCIsInNlbGVjdGVkQ29udGFpbmVyIiwib25Db250YWluZXJEZWxldGVkIiwib25Db250YWluZXJDaGFuZ2VkIiwiY2hhbmdlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRHVwbGljYXRlZCIsIm9yaWdpbmFsQ29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwib25Db250YWluZXJTZWxlY3RlZCIsIm9uQ29udGFpbmVyU25pcHBldEFkZGVkIiwic2VsZWN0ZWRTbmlwcGV0Iiwib25Db21wb25lbnRSZWFkeSIsIm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCIsInNlbGVjdGVkQ29tcG9uZW50Iiwib25Db21wb25lbnREZWxldGVkIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2hhbmdlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RHVwbGljYXRlZCIsIm9yaWdpbmFsQ29tcG9uZW50IiwibmV3Q29tcG9uZW50Iiwib25Db21wb25lbnRTZWxlY3RlZCIsIm9uQ29tcG9uZW50U25pcHBldEFkZGVkIiwiQUxMIiwiQ09OVEFJTkVSIiwiQ09OVEVOVF9BUkVBIiwiU1VCX0NPTlRBSU5FUiIsIkNPTlRBSU5FUl9DT05URU5UIiwiU1VCX0NPTlRBSU5FUl9DT05URU5UIiwiaW5pdENvbnRhaW5lciIsImlzTmVzdGVkIiwiY29udGFpbmVySW5uZXIiLCJub3QiLCJjb250YWluZXJDb250ZW50IiwicmVtb3ZlQXR0ciIsImNvbnRhaW5lckNvbnRlbnRJbm5lciIsImNoaWxkIiwiZ2V0Q29tcG9uZW50Q29udGVudCIsImdldENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50cyIsInBhcmVudHMiLCJpbml0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRUb29sYmFyIiwiYXBwZW5kVG8iLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5Nb2RhbCIsIlNOSVBQRVRfVFlQRSIsInNvcnRhYmxlIiwiaGFuZGxlIiwiaGVscGVyIiwiaXRlbXMiLCJjb25uZWN0V2l0aCIsInRvbGVyYW5jZSIsInNvcnQiLCJyZWNlaXZlIiwidWkiLCJpdGVtIiwic3RhcnQiLCJzdG9wIiwiY29udmVydFRvQ29udGFpbmVyIiwiY29udmVydFRvQ29tcG9uZW50IiwiZG9udEluaXRUb29sYmFyIiwiY29udGVudEFyZWFJbm5lciIsImNvbnRlbnRBcmVhVG9vbGJhciIsImF4aXMiLCJjbG9zZVNpZGViYXIiLCJjb250ZW50RGF0YSIsImNvbnRlbnRBcmVhcyIsIm9yaWdpbmFsQ29udGVudCIsImVtcHR5IiwiaW5pdENvbnRlbnRBcmVhIiwiZWxlbWVudCIsImlkIiwidmFsIiwiaW5zdGFuY2VzIiwiaW5BcnJheSIsInJlc3VsdCIsInB1c2giLCJ3cmFwcGVyIiwiYWZ0ZXIiLCJpZnJhbWVEb2MiLCJjb250ZW50cyIsImdldCIsIm9wZW4iLCJjbG9zZSIsIndpbmRvdyIsImNvbnRlbnRXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInN0eWxlcyIsInN0eWxlIiwiaHJlZiIsImlzQXJyYXkiLCJpIiwiaWRTdHIiLCJnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIiLCJjb3ZlciIsInByZXBlbmQiLCJmbiIsImNvbmZpZyIsImFwcGx5IiwiaXNDb21wb25lbnRDb25maWd1cmFibGUiLCJjYXRlZ29yaWVzIiwiYmVhdXRpZnlDYXRlZ29yaWVzIiwic2V0dGluZ0NvbnRhaW5lciIsInNldHRpbmdDb21wb25lbnQiLCJpZ25vcmVBdHRyaWJ1dGVzIiwic2VsZWN0b3IiLCJnZXRDbGlja2VkRWxlbWVudCIsImluaXRJZnJhbWUiLCJpbml0SWZyYW1lQ292ZXIiLCJpbml0S0VkaXRvckNsaWNrcyIsImluaXRTaWRlYmFyIiwib3BlblNpZGViYXIiLCJpbml0U25pcHBldHNNb2RhbCIsInJlbmRlclNuaXBwZXRzIiwiaW5pdFNuaXBwZXRzRmlsdGVyIiwic25pcHBldFR5cGUiLCJjbG9zZU1vZGFsIiwiaW5pdENvbnRlbnRBcmVhcyIsImRlbGV0ZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJ0aXRsZSIsInByZXZpZXdVcmwiLCJhZGRTbmlwcGV0IiwiREVGQVVMVFMiLCJibGFuayIsImtlZGl0b3IiLCJpbnN0YW5jZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsImRvY3VtZW50IiwibW9kYWwiLCJtb2RhbFRhcmdldCIsIm1vZGFsQWN0aW9uIiwibW9kYWxJZCIsInNuaXBwZXRzV3JhcHBlckh0bWwiLCJzbmlwcGV0Q29udGVudEVsZW1lbnQiLCJzbmlwcGV0Q29udGVudCIsImlzQWRkaW5nQ29udGFpbmVyIiwiaXNBZGRpbmdDb21wb25lbnQiLCJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIiLCJtb2RhbFNuaXBwZXRUeXBlIiwiZXEiLCJzbmlwcGV0IiwiY3NzVHJhbnNpdGlvbkVuZCIsImNzcyIsIm1vZGFsVGl0bGUiLCJzZXRUaW1lb3V0IiwianF1ZXJ5Iiwic2lkZWJhciIsImFjdGl2ZUZvcm0iLCJhY3RpdmVUeXBlIiwiaGlkZVNldHRpbmdGb3JtIiwic2V0U2V0dGluZ0NvbXBvbmVudCIsInNldFNldHRpbmdDb250YWluZXIiLCJzaWRlYmFySWQiLCJzaWRlYmFyQm9keSIsImZvcm0iLCJzaWRlYmFyVGl0bGUiLCJzZXR0aW5nVGl0bGUiLCJzZXR0aW5nRm9ybSIsImluaXRTZXR0aW5nRm9ybSIsImxvYWRpbmdUZXh0IiwiaW5pdEZ1bmN0aW9uIiwid2hlbiIsImRvbmUiLCJzaG93U2V0dGluZ0Zvcm0iLCJleHRyYURhdGEiLCJyZW5kZXJTbmlwcGV0Iiwic25pcHBldFByZXZpZXdIdG1sIiwic25pcHBldENvbnRlbnRIdG1sIiwic25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzIiwic25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzIiwic25pcHBldHNDYXRlZ29yaWVzIiwiaW5kZXhPZiIsImZpbHRlclR5cGUiLCJyZW5kZXJTbmlwcGV0RmlsdGVyIiwiY2F0ZWdvcmllc09wdGlvbnMiLCJzbmlwcGV0c1dyYXBwZXIiLCJ0cmlnZ2VyIiwidHh0U2VhcmNoIiwiY2JiRmlsdGVyIiwiZG9GaWx0ZXIiLCJzZWxlY3RlZENhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJzZWFyY2hUZXh0Iiwic25pcHBldHMiLCJmaWx0ZXIiLCJkYXRhQ2F0ZWdvcmllc1N0cmluZyIsImRhdGFDYXRlZ29yaWVzIiwic3BsaXQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNuaXBwZXRJZCIsImNvbmNhdCIsInNuaXBwZXRzV3JhcHBlclNlbGVjdG9yIiwiY2F0ZWdvcnkiLCJzbmlwcGV0c0NvbnRhaW5lckh0bWwiLCJzbmlwcGV0c0NvbXBvbmVudEh0bWwiLCJzbmlwcGV0c0NvbnRlbnRIdG1sIiwidHJpbSIsIm5ld0FycmF5IiwibWVzc2FnZSIsIkVycm9yIiwidGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJyYW5kb20iLCJNYXRoIiwicm91bmQiLCJzZXR0aW5nQnRuIiwidG9vbGJhckNsYXNzIiwiYXR0cmlidXRlcyIsIm5hbWUiLCJ2YWx1ZSIsImJ0biIsImNvbmZpcm0iLCJzZXR0aW5nQ29tcG9uZW50UGFyZW50IiwiY29uc29sZSIsImRlYnVnIiwiYXJncyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7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b2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2tlZGl0b3IvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJsb2coJ2NvbnZlcnRUb0NvbXBvbmVudCcsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZyk7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJykpIHtccnJldHVybjtccn1ccmxldCBzZWxmID0gdGhpcztccmxldCBpc1NlY3Rpb24gPSB0YXJnZXQuaXMoJ3NlY3Rpb24nKTtccmxldCBjb21wb25lbnQ7XHJpZiAoaXNTZWN0aW9uKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQnKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudC1jb250ZW50XCI+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0O1xyfSBlbHNlIHtccnRhcmdldC53cmFwKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnRcIj48c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb21wb25lbnQgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJpZiAoaXNFeGlzdGluZykge1xyY29tcG9uZW50LmFkZENsYXNzKCdleGlzdGluZy1jb21wb25lbnQnKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsb2coJ2RlbGV0ZUNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5kZXN0cm95LmNhbGwoY29tcG9uZW50RGF0YSwgY29tcG9uZW50LCBzZWxmKTtccn1ccmNvbXBvbmVudC5yZW1vdmUoKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybG9nKCdnZXRDb21wb25lbnRDb250ZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY2xvbmVkQ29tcG9uZW50ID0gY29tcG9uZW50LmNsb25lKCk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjbG9uZWRDb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKGNsb25lZENvbXBvbmVudCwgbnVsbCwgdHJ1ZSk7XHJsZXQgY29udGVudDtcci8vIEhhbmRsZSBpZnJhbWUtd3JhcHBlclxybGV0IGlmcmFtZVdyYXBwZXIgPSBjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccmlmIChpZnJhbWVXcmFwcGVyLmxlbmd0aCA+IDApIHtccmlmcmFtZVdyYXBwZXIuZmluZCgnLmtlZGl0b3ItaWZyYW1lLWNvdmVyJykucmVtb3ZlKCk7XHJsZXQgaWZyYW1lID0gaWZyYW1lV3JhcHBlci5jaGlsZHJlbignaWZyYW1lJyk7XHJpZiAoaWZyYW1lV3JhcHBlci5oYXNDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlci1mYWtlJykpIHtccmlmcmFtZS51bndyYXAoKTtccn0gZWxzZSB7XHJpZnJhbWVXcmFwcGVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJ9XHJ9XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZ2V0Q29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xyY29udGVudCA9IGNvbXBvbmVudERhdGEuZ2V0Q29udGVudC5jYWxsKGNvbXBvbmVudERhdGEsIGNsb25lZENvbXBvbmVudCwgc2VsZik7XHJ9IGVsc2Uge1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjbG9uZWRDb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJjb250ZW50ID0gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9XHJjbG9uZWRDb21wb25lbnQuaHRtbChjb250ZW50KS5maW5kKCdbZGF0YS1keW5hbWljLWhyZWZdJykuZWFjaChmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLmh0bWwoJycpO1xyfSk7XHJyZXR1cm4gYDxzZWN0aW9uICR7ZGF0YUF0dHJpYnV0ZXMuam9pbignICcpfT4ke2Nsb25lZENvbXBvbmVudC5odG1sKCl9PC9zZWN0aW9uPmA7XHJcbn07XHJcbiIsImltcG9ydCBlcnJvciBmcm9tICcuLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudFR5cGUgPSAoY29tcG9uZW50LmF0dHIoJ2RhdGEtdHlwZScpIHx8ICcnKS5yZXBsYWNlKCdjb21wb25lbnQtJywgJycpO1xyaWYgKGNvbXBvbmVudFR5cGUgJiYgKGNvbXBvbmVudFR5cGUgaW4gS0VkaXRvci5jb21wb25lbnRzKSkge1xycmV0dXJuIGNvbXBvbmVudFR5cGU7XHJ9IGVsc2Uge1xyaWYgKHR5cGVvZiBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlID09PSAnc3RyaW5nJykge1xyY29tcG9uZW50VHlwZSA9IG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGU7XHJ9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnRUeXBlID0gb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZS5jYWxsKHNlbGYsIGNvbXBvbmVudCk7XHJ9XHJpZiAoIWNvbXBvbmVudFR5cGUpIHtccmVycm9yKCdDb21wb25lbnQgdHlwZSBpcyB1bmRlZmluZWQhJyk7XHJ9XHJsb2coYEZhbGxiYWNrIHRvIGRlZmF1bHRDb21wb25lbnRUeXBlOiAke2NvbXBvbmVudFR5cGV9YCk7XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccmxvZygnaW5pdENvbXBvbmVudCcsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBib2R5ID0gc2VsZi5ib2R5O1xyaWYgKCFjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50JykgfHwgIWNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50JykpIHtccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJjb21wb25lbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbXBvbmVudCcpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbXBvbmVudC1jb250ZW50JykpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtccmxvZyhgQ29tcG9uZW50IHR5cGU6ICR7Y29tcG9uZW50VHlwZX1gKTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xybG9nKCdSZW5kZXIgS0VkaXRvciB0b29sYmFyIGZvciBjb21wb25lbnQnLCBjb21wb25lbnQpO1xyY29tcG9uZW50LmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihUT09MQkFSX1RZUEUuQ09NUE9ORU5ULCBjb21wb25lbnREYXRhLnNldHRpbmdFbmFibGVkKSk7XHJjb21wb25lbnQuZmluZCgnW2RhdGEtZHluYW1pYy1ocmVmXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGR5bmFtaWNFbGVtZW50ID0gJCh0aGlzKTtccnNlbGYuaW5pdER5bmFtaWNDb250ZW50KGR5bmFtaWNFbGVtZW50KTtccn0pO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmluaXQgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaW5pdC5jYWxsKGNvbXBvbmVudERhdGEsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwgc2VsZik7XHJ9IGVsc2Uge1xybG9nKGBcImluaXRcIiBmdW5jdGlvbiBvZiBjb21wb25lbnQgdHlwZSBcIiR7Y29tcG9uZW50VHlwZX1cIiBkb2VzIG5vdCBleGlzdGApO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKTtccmNvbXBvbmVudC5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJ9IGVsc2Uge1xyaWYgKGNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKSkge1xybG9nKCdDb21wb25lbnQgaXMgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtccn0gZWxzZSB7XHJsb2coJ0NvbXBvbmVudCBpcyBpbml0aWFsaXppbmcuLi4nKTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50KSB7XHJsb2coJ2luaXREeW5hbWljQ29udGVudCcsIGR5bmFtaWNFbGVtZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudCA9IGR5bmFtaWNFbGVtZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJkeW5hbWljRWxlbWVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnZHluYW1pYy1lbGVtZW50JykpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxybGV0IGR5bmFtaWNIcmVmID0gZHluYW1pY0VsZW1lbnQuYXR0cignZGF0YS1keW5hbWljLWhyZWYnKTtccmxldCBkYXRhID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjb21wb25lbnQsIFsnZGF0YS10eXBlJywgJ2RhdGEtZHluYW1pYy1ocmVmJ10sIGZhbHNlKTtccmRhdGEgPSAkLnBhcmFtKGRhdGEpO1xybG9nKGBEeW5hbWljIGhyZWY6ICR7ZHluYW1pY0hyZWZ9LCBEYXRhOiAke2RhdGF9YCk7XHJyZXR1cm4gJC5hamF4KHtccnVybDogZHluYW1pY0hyZWYsXHJkYXRhOiBkYXRhLFxydHlwZTogJ0dFVCcsXHJkYXRhVHlwZTogJ0hUTUwnLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIGpxWEhSKSB7XHJsb2coJ0R5bmFtaWMgY29udGVudCBpcyBsb2FkZWQnLCBkeW5hbWljRWxlbWVudCwgcmVzcG9uc2UsIHN0YXR1cywganFYSFIpO1xyZHluYW1pY0VsZW1lbnQuaHRtbChyZXNwb25zZSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50TG9hZGVkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSk7XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJsb2coJ0Vycm9yIHdoZW4gbG9hZGluZyBkeW5hbWljIGNvbnRlbnQnLCBkeW5hbWljRWxlbWVudCwganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvci5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJcbn07XHJcbiIsImNvbnN0IFBSRUZJWF9DTEFTUyA9ICdrZWRpdG9yLSc7XHJleHBvcnQgZGVmYXVsdCB7XHJVSTogYCR7UFJFRklYX0NMQVNTfXVpYCxcckhJRERFTl9FTEVNRU5UOiBgJHtQUkVGSVhfQ0xBU1N9aGlkZGVuLWVsZW1lbnRgLFxyQ0xJQ0tTX0lOSVRJQUxJWkVEOiBgJHtQUkVGSVhfQ0xBU1N9Y2xpY2tzLWluaXRpYWxpemVkYCxcckNPTlRFTlRfQVJFQVNfV1JBUFBFUjogYCR7UFJFRklYX0NMQVNTfWNvbnRlbnQtYXJlYXMtd3JhcHBlcmAsXHJcbn07IiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4vY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCB7XHIvLyBFbmFibGUgbmVzdGVkIGNvbnRhaW5lciBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJuZXN0ZWRDb250YWluZXJFbmFibGVkOiB0cnVlLFxyLy8gRW5hYmxlIGV4cGxpY2l0IHNuaXBwZXQgb3Igbm90LiBXaGVuIGRpc2FibGUsIHRoZXJlIGlzIG9ubHkgb25lIGJ1dHRvbiBmb3IgYWRkaW5nLiBJZiBhZGQgYnV0dG9uIGlzIGluIGNvbnRlbnQgYXJlYSBvciBjb250YWluZXIsIHlvdSBjYW4gYWRkIGNvbXBvbmVudCBvciBjb250YWluZXJzLiBJZiBhZGQgYnV0dG9uIGlzIGluIHN1Yi1jb250YWluZXIsIHlvdSBqdXN0IGNhbiBhZGQgb25seSBjb21wb25lbnQuIFdoZW4geW91IGFkZCBjb21wb25lbnQgaW4gY29udGVudCBhcmVhLCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBjb25maWcgXCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudFwiIG9wdGlvblxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccmV4cGxpY2l0U25pcHBldEVuYWJsZWQ6IGZhbHNlLFxyLy8gY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQgVGhlIGNvbnRhaW5lciBzbmlwcGV0IHdoaWNoIHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseSBpbiBjb250ZW50IGFyZSB3aGVuIHlvdSBhZGRpbmcgYSBjb21wb25lbnQuIE5vdGU6IGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGluIGZpcnN0IGNvbnRhaW5lciBjb250ZW50IG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQ6IGBccjxkaXYgY2xhc3M9XCJyb3dcIj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiPlxyPC9kaXY+XHI8L2Rpdj5ccmAsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb250ZW50IGJ1dHRvbi4gVGhpcyBhdmFpbGFibGUgb25seSB3aGVuIFwiZXhwbGljaXRTaXBwZXRFbmFibGVkXCIgaXMgXCJmYWxzZVwiXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb250ZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBzdWItY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkU3ViQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb21wb25lbnQgYnV0dG9uXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWxpc3QtdWxcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5Nb3ZlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtc29ydFwiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBtb3ZlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bk1vdmVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3NcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3Igc2V0dGluZyBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5TZXR0aW5nQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuU2V0dGluZ0NvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkZWxldGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRGVsZXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkRlbGV0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbnRhaW5lcj8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8vIFRleHQgY29udGVudCBmb3IgY29uZmlybSBkaWFsb2cgd2hlbiBkZWxldGluZyBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0OiAnQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tcG9uZW50PyBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZSEnLFxyLy8gRGVmYXVsdCBjb21wb25lbnQgdHlwZSBvZiBjb21wb25lbnQuIElmIHR5cGUgb2YgY29tcG9uZW50IGRvZXMgbm90IGV4aXN0IGluIEtFZGl0b3IuY29tcG9uZW50cywgd2lsbCBiZSB1c2VkIFwiZGVmYXVsdENvbXBvbmVudFR5cGVcIiBhcyB0eXBlIG9mIHRoaXMgY29tcG9uZW50LiBJZiBpcyBmdW5jdGlvbiwgYXJndW1lbnQgaXMgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd8RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHJkZWZhdWx0Q29tcG9uZW50VHlwZTogJ2JsYW5rJyxcci8vIFVybCB0byBzbmlwcGV0cyBmaWxlXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJzbmlwcGV0c1VybDogJ3NuaXBwZXRzL3NuaXBwZXRzLmh0bWwnLFxyLy8gRW5hYmxlIGZpbHRlcmluZyBzbmlwcGV0cyBieSBjYXRlZ29yaWVzIGFuZCB0ZXh0IHNlYXJjaGluZyBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJzbmlwcGV0c0ZpbHRlckVuYWJsZWQ6IHRydWUsXHIvLyBUaGUgc2VwYXJhdG9yIGNoYXJhY3RlciBiZXR3ZWVuIGVhY2ggY2F0ZWdvcmllc1xyLy8gQG9wdGlvbiB7U3RyaW5nfVxyc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yOiAnOycsXHIvLyBLRWRpdG9yIGlzIGNyZWF0ZWQgaW5zaWRlIGFuIGlmcmFtZSBvciBub3QuIEtFZGl0b3IgaXMgY3JlYXRlZCBpbnNpZGUgYW4gaWZyYW1lIG9yIG5vdC4gS0VkaXRvciB3aWxsIGFkZCBhbGwgZWxlbWVudHMgd2hpY2ggaGF2ZSAnZGF0YS10eXBlPWtlZGl0b3Itc3R5bGUnIGZvciBpZnJhbWUgc3R5bGVzaGVldC4gVGhlc2UgZWxlbWVudHMgY2FuIGJlICdsaW5rJywgJ3N0eWxlJyBvciBhbnkgdGFncy4gSWYgdGhlc2UgZWxlbWVudHMgaGF2ZSAnaHJlZicgYXR0cmlidXRlLCB3aWxsIGNyZWF0ZSBsaW5rIHRhZyB3aXRoIGhyZWYuIElmIHRoZXNlIGVsZW1lbnRzIGRvIG5vdCBoYXZlICdocmVmJyBhdHRyaWJ1dGUsIHdpbGwgY3JlYXRlIHN0eWxlIHRhZyB3aXRoIGNzcyBydWxlIGlzIGh0bWwgY29kZSBpbnNpZGUgZWxlbWVudFxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccmlmcmFtZU1vZGU6IGZhbHNlLFxyLy8gQ29udGVudCBzdHlsZXMgZm9yIGlmcmFtZSBtb2RlXHIvLyBAb3B0aW9uIHtBcnJheTxPYmplY3Q+fVxyLy8gQGV4YW1wbGU6XHIvLyBbXHIvLyAgICAge1xyLy8gICAgICAgICBocmVmOiAnL3BhdGgvdG8vc3R5bGUvZmlsZSdcci8vICAgICB9LCB7XHIvLyAgICAgICAgIGNvbnRlbnQ6ICdhIHsgY29sb3I6IHJlZDsgfSdcci8vICAgICB9XHIvLyBdXHJjb250ZW50U3R5bGVzOiBbXSxcci8vIFNlbGVjdG9yIG9mIGNvbnRlbnQgYXJlYXMuIElmIGlzIG51bGwgb3Igc2VsZWN0b3IgZG9lcyBub3QgbWF0Y2ggYW55IGVsZW1lbnRzLCB3aWxsIGNyZWF0ZSBkZWZhdWx0IGNvbnRlbnQgYXJlYSBhbmQgd3JhcCBhbGwgY29udGVudCBpbnNpZGUgaXQuXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb250ZW50QXJlYXNTZWxlY3RvcjogbnVsbCxcci8vIFRoZSB3cmFwcGVyIGVsZW1lbnQgZm9yIGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIG9yIG5ldyBkaXYgd2hpY2ggd2lsbCBjb250YWlucyBjb250ZW50IG9mIHRleHRhcmVhLiBJdCdzIGp1c3QgZm9yIGRpc3BsYXlpbmcgcHVycG9zZS4gSWYgeW91IHdhbnQgYWxsIGNvbnRlbnRzIGluc2lkZSBpZnJhbWUgYXJlIGFwcGVuZGVkIGludG8gYm9keSB0YWcsIGp1c3QgbGVhdmUgaXQgYXMgYmxhbmtcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbnRlbnRBcmVhc1dyYXBwZXI6IGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9XCI+PC9kaXY+YCxcci8vIEVuYWJsZSBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXJcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJjb250YWluZXJTZXR0aW5nRW5hYmxlZDogZmFsc2UsXHIvLyBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIHNob3dlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIGhpZGRlblxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uOiBudWxsLFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIga2VkaXRvciBpbnN0YW5jZSBpcyByZWFkeVxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHJvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgc25pcHBldHMgYXJlIGxvYWRlZC4gSWYgeW91IHdhbnQgdG8gbW9kaWZ5IHNuaXBwZXRzIGNvbnRlbnQsIHBsZWFzZSByZXR1cm4gbW9kaWZpZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtTdHJpbmd9IHJlc3Bcci8vIEByZXR1cm4ge1N0cmluZ31ccm9uU25pcHBldHNMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBlcnJvciBpbiBsb2FkaW5nIHNuaXBwZXRzXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7anFYSFJ9IGpxWEhSXHJvblNuaXBwZXRzRXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGlmcmFtZSBhbmQgY29udGVudCBhcmVhcyB3cmFwcGVyIGluc2lkZSBpdCBhcmUgY3JlYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lXHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lSGVhZFxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZUJvZHlccm9uSW5pdElmcmFtZTogZnVuY3Rpb24gKGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBpcyBjaGFuZ2VkLiBJbmNsdWRlcyBhZGQsIGRlbGV0ZSwgZHVwbGljYXRlIGNvbnRhaW5lciBvciBjb21wb25lbnQuIE9yIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRlbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb250YWluZXJcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29udGVudCBhcmVhLiBJdCBjYW4gcmV0dXJuIGFycmF5IG9mIGpRdWVyeSBvYmplY3RzIHdoaWNoIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgY29udGFpbmVyIGluIGNvbnRlbnQgYXJlYS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRlbnQgYXJlYSB3aWxsIGJlIGluaXRpYWxpemVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVJbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRhaW5lci4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGVkaXRhYmxlIGNvbXBvbmVudHMgaW4gY29udGFpbmVyIGNvbnRlbnQgKE5PVEU6IHRoZXNlIG9iamVjdHMgTVVTVCBiZSB1bmRlciBlbGVtZW50cyB3aGljaCBoYXZlIGF0dHJpYnV0ZSBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiKS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRhaW5lciBjb250ZW50IHdpbGwgYmUgaW5pdGlhbGl6ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGNvbnRhaW5lciBpcyBkZWxldGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbnRhaW5lciBhbmQgaXRzIGNvbXBvbmVudHMgYXJlIGFscmVhZHkgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgY29udGFpbmVyIGlzIGNoYW5nZWQuIEl0IGNhbiBiZSB3aGVuIGNvbnRhaW5lciByZWNlaXZlZCBuZXcgY29tcG9uZW50IGZyb20gc25pcHBldCBvciBmcm9tIG90aGVyIGNvbnRhaW5lci4gT3IgY29udGVudCBvZiBhbnkgY29tcG9uZW50cyBhcmUgY2hhbmdlZCBvciBhbnkgY29tcG9uZW50cyBhcmUgZGVsZXRlZCBvciBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIGR1cGxpY2F0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckR1cGxpY2F0ZWQ6IGZ1bmN0aW9uIChldmVudCwgb3JpZ2luYWxDb250YWluZXIsIG5ld0NvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIHNlbGVjdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTZWxlY3RlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250ZW50IGFyZWFcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZFNuaXBwZXRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTbmlwcGV0QWRkZWQ6IGZ1bmN0aW9uIChldmVudCwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLiBUaGlzIGNhbGxiYWNrIGlzIGF2YWlsYWJsZSBvciBub3QgaXMgZGVwZW5kIG9uIGNvbXBvbmVudCB0eXBlIGhhbmRsZXIuXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlSW5pdENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb21wb25lbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGEgY29tcG9uZW50IGlzIGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNoYW5nZWRDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gb3JpZ2luYWxDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnREdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBzZWxlY3RlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50U2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgc25pcHBldCBpcyBhZGRlZCBpbiBhIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkU25pcHBldFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBkeW5hbWljIGNvbnRlbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGR5bmFtaWNFbGVtZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBkeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50TG9hZGVkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGlmIGxvYWRpbmcgZHluYW1pYyBjb250ZW50IGlzIGVycm9yLCBhYm9ydCBvciB0aW1lb3V0XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50RXJyb3I6IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKSB7XHJ9XHJcbn07XHIiLCJleHBvcnQgZGVmYXVsdCB7XHJBTEw6IDAsXHJDT05UQUlORVI6IDEsXHJDT01QT05FTlQ6IDJcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyQ09OVEVOVF9BUkVBOiAwLFxyQ09OVEFJTkVSOiAxLFxyU1VCX0NPTlRBSU5FUjogMixcckNPTlRBSU5FUl9DT05URU5UOiAzLFxyU1VCX0NPTlRBSU5FUl9DT05URU5UOiA0LFxyQ09NUE9ORU5UOiA1XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJsb2coJ2NvbnZlcnRUb0NvbnRhaW5lcicsIGNvbnRlbnRBcmVhLCB0YXJnZXQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRhaW5lcjtccmlmICh0YXJnZXQuaXMoJ3NlY3Rpb24nKSkge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyJyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQ7XHJ9IGVsc2Uge1xydGFyZ2V0LndyYXAoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lclwiPjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIGNvbnRhaW5lcik7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJsb2coYGdldENvbnRhaW5lckNvbnRlbnQgLSBpc05lc3RlZD0ke2lzTmVzdGVkfWAsIGNvbnRhaW5lcik7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVySW5uZXIgPSBjb250YWluZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRhaW5lci1pbm5lcicpLmNsb25lKCk7XHJjb250YWluZXJJbm5lci5maW5kKCdbZGF0YS10eXBlPWNvbnRhaW5lci1jb250ZW50XScpLm5vdChpc05lc3RlZCA/ICcnIDogJy5rZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lckNvbnRlbnQgPSAkKHRoaXMpO1xyY29udGFpbmVyQ29udGVudC5yZW1vdmVDbGFzcygna2VkaXRvci1jb250YWluZXItY29udGVudCBrZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCB1aS1zb3J0YWJsZScpLnJlbW92ZUF0dHIoJ2lkJyk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gY29udGFpbmVyQ29udGVudC5jaGlsZHJlbigpO1xybGV0IGNvbnRlbnQgPSAnJztccmNvbnRhaW5lckNvbnRlbnRJbm5lci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNoaWxkID0gJCh0aGlzKTtccmlmIChjaGlsZC5pcygnLmtlZGl0b3ItY29tcG9uZW50JykpIHtccmNvbnRlbnQgKz0gc2VsZi5nZXRDb21wb25lbnRDb250ZW50KGNoaWxkKTtccn0gZWxzZSBpZiAoY2hpbGQuaXMoJy5rZWRpdG9yLXN1Yi1jb250YWluZXInKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50Lmh0bWwoY29udGVudCk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24+JHtjb250YWluZXJJbm5lci5odG1sKCl9PC9zZWN0aW9uPmA7XHJcbn0iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGlzTmVzdGVkID0gb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmIGNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwO1xybG9nKGBpbml0Q29udGFpbmVyIC0gaXNOZXN0ZWQ9JHtpc05lc3RlZH1gLCBjb250ZW50QXJlYSwgY29udGFpbmVyKTtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpIHx8ICFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb250YWluZXIuY2FsbChzZWxmLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLXN1Yi1jb250YWluZXInKTtccn1ccmxvZygnUmVuZGVyIEtFZGl0b3IgdG9vbGJhciBmb3IgY29udGFpbmVyJywgY29udGFpbmVyKTtccmNvbnRhaW5lci5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoaXNOZXN0ZWQgPyBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUiA6IFRPT0xCQVJfVFlQRS5DT05UQUlORVIpKTtccmNvbnRhaW5lci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZChpc05lc3RlZCA/ICdzdWItY29udGFpbmVyJyA6ICdjb250YWluZXInKSk7XHJsZXQgY29udGFpbmVyQ29udGVudHMgPSBjb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJyk7XHJsb2coYEluaXRpYWxpemUgJHtjb250YWluZXJDb250ZW50cy5sZW5ndGh9IGNvbnRhaW5lciBjb250ZW50KHMpYCk7XHJjb250YWluZXJDb250ZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXJDb250ZW50ID0gJCh0aGlzKTtccmlmIChvcHRpb25zLm5lc3RlZENvbnRhaW5lckVuYWJsZWQgJiYgIWlzTmVzdGVkICYmIGNvbnRhaW5lckNvbnRlbnQucGFyZW50cygnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyLy8gRG8gbm90aGluZyBiZWNhdXNlIGl0J3MgY29udGFpbmVyIGNvbnRlbnQgb2Ygc3ViIGNvbnRhaW5lclxycmV0dXJuO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCk7XHJ9KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb250YWluZXIgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0Q29udGFpbmVyLmNhbGwoc2VsZiwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJyk7XHJjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpO1xyfSBlbHNlIHtccmlmIChjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykpIHtccmxvZygnQ29udGFpbmVyIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XHJ9IGVsc2Uge1xybG9nKCdDb250YWluZXIgaXMgaW5pdGlhbGl6aW5nLi4uJyk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKSB7XHJsb2coYGluaXRDb250YWluZXJDb250ZW50IC0gaXNOZXN0ZWQ9JHtpc05lc3RlZH1gLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1jb250YWluZXItY29udGVudCcpO1xyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXJDb250ZW50LmFkZENsYXNzKCdrZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCcpO1xyfVxyY29udGFpbmVyQ29udGVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGFpbmVyLWNvbnRlbnQnKSk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXJcIj48L2Rpdj4nKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5odG1sKGNvbnRhaW5lckNvbnRlbnQuaHRtbCgpKTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250YWluZXJDb250ZW50SW5uZXIpO1xybG9nKCdJbml0aWFsaXplIHRvb2xiYXIgZm9yIGNvbnRhaW5lciBjb250ZW50Jyk7XHJsZXQgY29udGFpbmVyQ29udGVudFRvb2xiYXIgPSAkKHNlbGYuZ2VuZXJhdGVUb29sYmFyKGlzTmVzdGVkID8gVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVCA6IFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVCkpO1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuYXBwZW5kVG8oY29udGFpbmVyQ29udGVudCk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJpZiAoIWlzTmVzdGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTlRBSU5FUik7XHJ9KTtccn1ccn1ccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb21wb25lbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfSBlbHNlIHtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb250ZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgaXNOZXN0ZWQgPyBTTklQUEVUX1RZUEUuQ09NUE9ORU5UIDogb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkID8gU05JUFBFVF9UWVBFLkFMTCA6IFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSk7XHJ9XHJsb2coJ0luaXRpYWxpemUgJC5mbi5zb3J0YWJsZSBmb3IgY29udGFpbmVyIGNvbnRlbnQnKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5zb3J0YWJsZSh7XHJoYW5kbGU6ICcuYnRuLWNvbXBvbmVudC1yZXBvc2l0aW9uLCAuYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uJyxccmhlbHBlcjogJ2Nsb25lJyxccml0ZW1zOiAnPiBzZWN0aW9uJyxccmNvbm5lY3RXaXRoOiAnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInLFxydG9sZXJhbmNlOiAncG9pbnRlcicsXHJzb3J0OiBmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0Jyk7XHJ9LFxycmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xybG9nKCdPbiByZWNlaXZlZCBzbmlwcGV0JywgZXZlbnQsIHVpKTtccmxldCBoZWxwZXIgPSB1aS5oZWxwZXI7XHJsZXQgaXRlbSA9IHVpLml0ZW07XHJsZXQgY29udGFpbmVyO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyY29udGFpbmVyID0gaXRlbS5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJykpIHtcciQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRlbnRBcmVhKTtccn1ccml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdGFydDogZnVuY3Rpb24gKGUsIHVpKSB7XHJ1aS5pdGVtLmFkZENsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RvcDogZnVuY3Rpb24gKGUsIHVpKSB7XHJpZiAodWkuaGVscGVyKSB7XHJ1aS5oZWxwZXIucmVtb3ZlKCk7XHJ9XHJ1aS5pdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9XHJ9KTtccmxvZygnSW5pdGlhbGl6ZSBleGlzdGluZyBjb21wb25lbnRzIGluc2lkZSBjb250YWluZXIgY29udGVudCcpO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCBjaGlsZCk7XHJ9IGVsc2Uge1xyc2VsZi5jb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccmxvZygnaW5pdENvbnRlbnRBcmVhJywgY29udGVudEFyZWEpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJjb250ZW50QXJlYS5hZGRDbGFzcygna2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBjb250ZW50ID0gY29udGVudEFyZWEuaHRtbCgpO1xybGV0IGNvbnRlbnRBcmVhSW5uZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXJcIj48L2Rpdj4nKS5odG1sKGNvbnRlbnQpO1xyY29udGVudEFyZWEuaHRtbChjb250ZW50QXJlYUlubmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb250ZW50QXJlYSA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb250ZW50QXJlYS5jYWxsKHNlbGYsIGNvbnRlbnRBcmVhKTtccn1ccmlmICghZG9udEluaXRUb29sYmFyKSB7XHJsZXQgY29udGVudEFyZWFUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBKSk7XHJjb250ZW50QXJlYS5hcHBlbmQoY29udGVudEFyZWFUb29sYmFyKTtccmNvbnRlbnRBcmVhVG9vbGJhci5jaGlsZHJlbihvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyAnLmJ0bi1hZGQtY29udGFpbmVyJyA6ICcuYnRuLWFkZC1jb250ZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRlbnRBcmVhSW5uZXIsIG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5DT05UQUlORVIgOiBTTklQUEVUX1RZUEUuQUxMKTtccn0pO1xyfVxybG9nKCdJbml0aWFsaXplICQuZm4uc29ydGFibGUgZm9yIGNvbnRlbnQgYXJlYScpO1xyY29udGVudEFyZWFJbm5lci5zb3J0YWJsZSh7XHJoYW5kbGU6ICcua2VkaXRvci10b29sYmFyLWNvbnRhaW5lcjpub3QoLmtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyKSAuYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uJyxccml0ZW1zOiAnPiBzZWN0aW9uJyxccmhlbHBlcjogJ2Nsb25lJyxccmNvbm5lY3RXaXRoOiAnLmtlZGl0b3ItY29udGVudC1hcmVhJyxccmF4aXM6ICd5JyxccnRvbGVyYW5jZTogJ3BvaW50ZXInLFxyc29ydDogZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtZGVmYXVsdCcpO1xyfSxccnJlY2VpdmU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtccmxvZygnT24gcmVjZWl2ZWQgc25pcHBldCcsIGV2ZW50LCB1aSk7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyc2VsZi5jbG9zZVNpZGViYXIoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xybG9nKCdJbml0aWFsaXplIGV4aXN0aW5nIGNvbnRhaW5lcnMgaW4gY29udGVudCBhcmVhJyk7XHJjb250ZW50QXJlYUlubmVyLmNoaWxkcmVuKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb250ZW50QXJlYSA9PT0gJ2Z1bmN0aW9uJykge1xybGV0IGNvbnRlbnREYXRhID0gb3B0aW9ucy5vbkluaXRDb250ZW50QXJlYS5jYWxsKHNlbGYsIGNvbnRlbnRBcmVhKTtccmlmIChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5sZW5ndGggPiAwKSB7XHIkLmVhY2goY29udGVudERhdGEsIGZ1bmN0aW9uICgpIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCAkKHRoaXMpKTtccn0pO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsb2coJ2luaXRDb250ZW50QXJlYXMnKTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29udGVudEFyZWFzO1xyaWYgKG9wdGlvbnMuY29udGVudEFyZWFzU2VsZWN0b3IpIHtccmNvbnRlbnRBcmVhcyA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKTtccn1ccmlmICghY29udGVudEFyZWFzIHx8IGNvbnRlbnRBcmVhcy5sZW5ndGggPT09IDApIHtccmxvZygnRG8gbm90IGZpbmQgYW55IGNvbnRlbnQgYXJlYS4gQ3JlYXRpbmcgZGVmYXVsdCBjb250ZW50IGFyZWEuLi4nKTtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBjb250ZW50QXJlYXNXcmFwcGVyLmh0bWwoKTtccmNvbnRlbnRBcmVhcyA9ICQoJzxkaXYgLz4nKS5odG1sKG9yaWdpbmFsQ29udGVudCk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmVtcHR5KCkuYXBwZW5kKGNvbnRlbnRBcmVhcyk7XHJ9XHJjb250ZW50QXJlYXMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGVudEFyZWEgPSAkKHRoaXMpO1xyaWYgKCFjb250ZW50QXJlYS5hdHRyKCdpZCcpKSB7XHJjb250ZW50QXJlYS5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGVudC1hcmVhJykpO1xyfVxyc2VsZi5pbml0Q29udGVudEFyZWEoY29udGVudEFyZWEpO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IGlkID0gc2VsZi5pZDtccmxldCBjb250ZW50ID0gc2VsZi5nZXRDb250ZW50KGZhbHNlKTtccmlmIChzZWxmLm9wdGlvbnMuaWZyYW1lTW9kZSkge1xyc2VsZi5pZnJhbWVXcmFwcGVyLnJlbW92ZSgpO1xyfSBlbHNlIHtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5yZW1vdmUoKTtccn1ccmlmIChlbGVtZW50LmlzKCd0ZXh0YXJlYScpKSB7XHJlbGVtZW50LnZhbChjb250ZW50KTtccn0gZWxzZSB7XHJlbGVtZW50Lmh0bWwoY29udGVudCk7XHJ9XHJlbGVtZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWhpZGRlbi1lbGVtZW50Jyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBudWxsKTtccmRlbGV0ZSBLRWRpdG9yLmluc3RhbmNlc1tpZF07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpbkFycmF5KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgcmVzdWx0ID0gW107XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgaHRtbCA9ICcnO1xyJCh0aGlzKS5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyID0gJCh0aGlzKTtccmh0bWwgKz0gc2VsZi5nZXRDb250YWluZXJDb250ZW50KGNvbnRhaW5lcik7XHJ9KTtccnJlc3VsdC5wdXNoKGh0bWwpO1xyfSk7XHJyZXR1cm4gaW5BcnJheSA/IHJlc3VsdCA6IHJlc3VsdC5qb2luKCdcXG4nKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgZWxlbWVudCA9IHNlbGYuZWxlbWVudDtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBlbGVtZW50LmlzKCd0ZXh0YXJlYScpID8gZWxlbWVudC52YWwoKSA6IGVsZW1lbnQuaHRtbCgpO1xybGV0IHdyYXBwZXIgPSBzZWxmLmlmcmFtZVdyYXBwZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWlmcmFtZS13cmFwcGVyXCI+PC9kaXY+Jyk7XHJsZXQgaWZyYW1lID0gc2VsZi5pZnJhbWUgPSAkKCc8aWZyYW1lIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWlmcmFtZVwiPjwvaWZyYW1lPicpO1xyZWxlbWVudC5hZnRlcih3cmFwcGVyKTtccndyYXBwZXIuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2lmcmFtZS13cmFwcGVyJykpLmFwcGVuZChpZnJhbWUpO1xyZWxlbWVudC5hZGRDbGFzcygna2VkaXRvci1oaWRkZW4tZWxlbWVudCcpO1xybGV0IGlmcmFtZURvYyA9IHNlbGYuaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRzKCk7XHIvLyBGaXggaXNzdWUgRmlyZWZveCBjYW4ndCByZW5kZXIgY29udGVudCBpbnNpZGUgaWZyYW1lXHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccmlmcmFtZURvYy5nZXQoMCkub3BlbigpO1xyaWZyYW1lRG9jLmdldCgwKS5jbG9zZSgpO1xyLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJzZWxmLndpbmRvdyA9IGlmcmFtZVswXS5jb250ZW50V2luZG93ID8gaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cgOiBpZnJhbWVbMF0uY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xybGV0IGlmcmFtZUhlYWQgPSBzZWxmLmlmcmFtZUhlYWQgPSBpZnJhbWVEb2MuZmluZCgnaGVhZCcpO1xybGV0IGlmcmFtZUJvZHkgPSBzZWxmLmlmcmFtZUJvZHkgPSBzZWxmLmJvZHkgPSBpZnJhbWVEb2MuZmluZCgnYm9keScpO1xybG9nKCdBZGRpbmcgc3R5bGVzIHRvIGlmcmFtZS4uLicpO1xybGV0IHN0eWxlcyA9ICcnO1xyJCgnW2RhdGEtdHlwZT1cImtlZGl0b3Itc3R5bGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzdHlsZSA9ICQodGhpcyk7XHJsZXQgaHJlZiA9IHN0eWxlLmF0dHIoJ2hyZWYnKSB8fCBzdHlsZS5hdHRyKCdkYXRhLWhyZWYnKSB8fCAnJztccmlmIChocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtocmVmfVwiIC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4ke3N0eWxlLmh0bWwoKX08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtccmlmIChvcHRpb25zLmNvbnRlbnRTdHlsZXMgJiYgJC5pc0FycmF5KG9wdGlvbnMuY29udGVudFN0eWxlcykpIHtcciQuZWFjaChvcHRpb25zLmNvbnRlbnRTdHlsZXMsIGZ1bmN0aW9uIChpLCBzdHlsZSkge1xybGV0IGlkU3RyID0gJyc7XHJpZiAoc3R5bGUuaWQpIHtccmlkU3RyID0gYCBpZD1cIiR7c3R5bGUuaWR9XCIgYDtccn1ccmlmIChzdHlsZS5ocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtzdHlsZS5ocmVmfVwiICR7aWRTdHJ9IC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiAke2lkU3RyfT4ke3N0eWxlLmNvbnRlbnR9PC9zdHlsZT5cXG5gO1xyfVxyfSk7XHJ9XHJpZnJhbWVIZWFkLmFwcGVuZChzdHlsZXMpO1xybG9nKCdBZGRpbmcgb3JpZ2luYWwgY29udGVudCB0byBpZnJhbWUuLi4nKTtccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIob3JpZ2luYWxDb250ZW50KTtccmlmcmFtZUJvZHkuYXBwZW5kKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyID0gY29udGVudEFyZWFzV3JhcHBlcjtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRJZnJhbWUgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0SWZyYW1lLmNhbGwoc2VsZiwgaWZyYW1lLCBpZnJhbWVIZWFkLCBpZnJhbWVCb2R5KTtccn1cclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGlmcmFtZSwgd3JhcHBlcikge1xyaWYgKCF3cmFwcGVyKSB7XHJpZnJhbWUud3JhcCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItaWZyYW1lLXdyYXBwZXItZmFrZVwiPjwvZGl2PicpO1xyd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccn1ccndyYXBwZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccmxldCBjb3ZlciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWlmcmFtZS1jb3ZlclwiPjwvZGl2PicpO1xyd3JhcHBlci5wcmVwZW5kKGNvdmVyKTtccndyYXBwZXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJ3cmFwcGVyLnJlbW92ZUNsYXNzKCdoaWRkZW4tY292ZXInKTtccn0pO1xyY292ZXIub24oJ2RibGNsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccndyYXBwZXIuYWRkQ2xhc3MoJ2hpZGRlbi1jb3ZlcicpO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XHJcbmltcG9ydCBlcnJvciBmcm9tICcuL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUlkJztcclxuaW1wb3J0IGdlbmVyYXRlVG9vbGJhciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVG9vbGJhcic7XHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXInO1xyXG5pbXBvcnQgYmVhdXRpZnlDYXRlZ29yaWVzIGZyb20gJy4vdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzJztcclxuaW1wb3J0IGdldERhdGFBdHRyaWJ1dGVzIGZyb20gJy4vdXRpbHMvZ2V0RGF0YUF0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgZ2V0Q2xpY2tlZEVsZW1lbnQgZnJvbSAnLi91dGlscy9nZXRDbGlja2VkRWxlbWVudCc7XHJcbmltcG9ydCBpbml0S0VkaXRvckNsaWNrcyBmcm9tICcuL3V0aWxzL2luaXRLRWRpdG9yQ2xpY2tzJztccmltcG9ydCBpbml0SWZyYW1lIGZyb20gJy4vaWZyYW1lL2luaXRJZnJhbWUnO1xyXG5pbXBvcnQgaW5pdElmcmFtZUNvdmVyIGZyb20gJy4vaWZyYW1lL2luaXRJZnJhbWVDb3Zlcic7XHJpbXBvcnQgaW5pdFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2luaXRTaWRlYmFyJztcclxuaW1wb3J0IG9wZW5TaWRlYmFyIGZyb20gJy4vc2lkZWJhci9vcGVuU2lkZWJhcic7XHJcbmltcG9ydCBjbG9zZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2Nsb3NlU2lkZWJhcic7XHJpbXBvcnQgcmVuZGVyU25pcHBldHMgZnJvbSAnLi9zbmlwcGV0L3JlbmRlclNuaXBwZXRzJztcclxuaW1wb3J0IGluaXRTbmlwcGV0c0ZpbHRlciBmcm9tICcuL3NuaXBwZXQvaW5pdFNuaXBwZXRzRmlsdGVyJztcclxuaW1wb3J0IGFkZFNuaXBwZXQgZnJvbSAnLi9zbmlwcGV0L2FkZFNuaXBwZXQnO1xyaW1wb3J0IGluaXRTbmlwcGV0c01vZGFsIGZyb20gJy4vbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwnO1xyXG5pbXBvcnQgb3Blbk1vZGFsIGZyb20gJy4vbW9kYWwvb3Blbk1vZGFsJztcclxuaW1wb3J0IGNsb3NlTW9kYWwgZnJvbSAnLi9tb2RhbC9jbG9zZU1vZGFsJztccmltcG9ydCBpbml0Q29udGVudEFyZWFzIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcyc7XHJcbmltcG9ydCBpbml0Q29udGVudEFyZWEgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEnO1xyaW1wb3J0IGNvbnZlcnRUb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9jb252ZXJ0VG9Db250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXJDb250ZW50JztcclxuaW1wb3J0IGdldENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvZ2V0Q29udGFpbmVyQ29udGVudCc7XHJpbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRUeXBlJztcclxuaW1wb3J0IGNvbnZlcnRUb0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9jb252ZXJ0VG9Db21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0Q29tcG9uZW50JztcclxuaW1wb3J0IGluaXREeW5hbWljQ29udGVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0RHluYW1pY0NvbnRlbnQnO1xyXG5pbXBvcnQgZGVsZXRlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2RlbGV0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCBnZXRDb21wb25lbnRDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQnO1xyaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcclxuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9kZXN0cm95JztcclxuaW1wb3J0IGdldENvbnRlbnQgZnJvbSAnLi9nZXRDb250ZW50JztcclxuaW1wb3J0IHNldENvbnRlbnQgZnJvbSAnLi9zZXRDb250ZW50JztccmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3IubGVzcyc7XHIvLyBDaGVjayBkZXBlbmRlbmNpZXNcclxuaWYgKCEkLmZuLnNvcnRhYmxlKSB7XHJlcnJvcignJC5mbi5zb3J0YWJsZSBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGltcG9ydCAkLmZuLnNvcnRhYmxlIGludG8geW91ciBkb2N1bWVudCBmb3IgY29udGludWUgdXNpbmcgS0VkaXRvci4nKTtcclxufVxyLy8gS0VkaXRvciBjbGFzc1xyXG5jbGFzcyBLRWRpdG9yIHtccnN0YXRpYyBERUZBVUxUUyA9IERFRkFVTFRTO1xyc3RhdGljIGRlYnVnID0gZmFsc2U7XHJzdGF0aWMgdmVyc2lvbiA9ICcyLjAuMCc7XHJzdGF0aWMgaW5zdGFuY2VzID0ge307XHJzdGF0aWMgY29tcG9uZW50cyA9IHtccmJsYW5rOiB7XHJzZXR0aW5nRW5hYmxlZDogZmFsc2Vccn1ccn07XHJzdGF0aWMgbG9nKC4uLmFyZ3MpIHtccmxvZyguLi5hcmdzKTtccn1ccnN0YXRpYyBlcnJvciguLi5hcmdzKSB7XHJlcnJvciguLi5hcmdzKTtccn1ccnN0YXRpYyBpbml0KHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gbmV3IEtFZGl0b3IodGFyZ2V0LCBjb25maWcpO1xyfVxyY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBpbml0LmFwcGx5KHRoaXMsIFt0YXJnZXQsIGNvbmZpZ10pO1xyfVxyZ2VuZXJhdGVJZCh0eXBlKSB7XHJyZXR1cm4gZ2VuZXJhdGVJZC5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyKGNvbnRlbnQpIHtccnJldHVybiBnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIuYXBwbHkodGhpcywgW2NvbnRlbnRdKTtccn1ccmdlbmVyYXRlVG9vbGJhcih0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xycmV0dXJuIGdlbmVyYXRlVG9vbGJhci5hcHBseSh0aGlzLCBbdHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGVdKTtccn1ccmJlYXV0aWZ5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XHJyZXR1cm4gYmVhdXRpZnlDYXRlZ29yaWVzLmFwcGx5KHRoaXMsIFtjYXRlZ29yaWVzXSk7XHJ9XHJzZXRTZXR0aW5nQ29udGFpbmVyKGNvbnRhaW5lcikge1xydGhpcy5zZXR0aW5nQ29udGFpbmVyID0gY29udGFpbmVyO1xyfVxyZ2V0U2V0dGluZ0NvbnRhaW5lcigpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb250YWluZXI7XHJ9XHJzZXRTZXR0aW5nQ29tcG9uZW50KGNvbXBvbmVudCkge1xydGhpcy5zZXR0aW5nQ29tcG9uZW50ID0gY29tcG9uZW50O1xyfVxyZ2V0U2V0dGluZ0NvbXBvbmVudCgpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb21wb25lbnQ7XHJ9XHJnZXREYXRhQXR0cmlidXRlcyh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccnJldHVybiBnZXREYXRhQXR0cmlidXRlcy5hcHBseSh0aGlzLCBbdGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5XSk7XHJ9XHJnZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudFR5cGUuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q2xpY2tlZEVsZW1lbnQoZXZlbnQsIHNlbGVjdG9yKSB7XHJyZXR1cm4gZ2V0Q2xpY2tlZEVsZW1lbnQuYXBwbHkodGhpcywgW2V2ZW50LCBzZWxlY3Rvcl0pO1xyfVxyLy8gSWZyYW1lXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdElmcmFtZSgpIHtccnJldHVybiBpbml0SWZyYW1lLmFwcGx5KHRoaXMpO1xyfVxyaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcikge1xycmV0dXJuIGluaXRJZnJhbWVDb3Zlci5hcHBseSh0aGlzLCBbaWZyYW1lLCB3cmFwcGVyXSk7XHJ9XHIvLyBLRWRpdG9yIGNsaWNrc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRLRWRpdG9yQ2xpY2tzKCkge1xycmV0dXJuIGluaXRLRWRpdG9yQ2xpY2tzLmFwcGx5KHRoaXMpO1xyfVxyLy8gU2lkZWJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTaWRlYmFyKCkge1xycmV0dXJuIGluaXRTaWRlYmFyLmFwcGx5KHRoaXMpO1xyfVxyb3BlblNpZGViYXIodGFyZ2V0KSB7XHJyZXR1cm4gb3BlblNpZGViYXIuYXBwbHkodGhpcywgW3RhcmdldF0pO1xyfVxyY2xvc2VTaWRlYmFyKCkge1xycmV0dXJuIGNsb3NlU2lkZWJhci5hcHBseSh0aGlzKTtccn1cci8vIExlZ2FjeSBtZXRob2RzLiBERVBSRUNBVEVEXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2hvd1NldHRpbmdQYW5lbCh0YXJnZXQpIHtccnRoaXMub3BlblNpZGViYXIodGFyZ2V0KTtccn1ccmhpZGVTZXR0aW5nUGFuZWwoKSB7XHJ0aGlzLmNsb3NlU2lkZWJhcigpO1xyfVxyLy8gU25pcHBldCBtb2RhbFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTbmlwcGV0c01vZGFsKCkge1xycmV0dXJuIGluaXRTbmlwcGV0c01vZGFsLmFwcGx5KHRoaXMpO1xyfVxycmVuZGVyU25pcHBldHMocmVzcCkge1xycmV0dXJuIHJlbmRlclNuaXBwZXRzLmFwcGx5KHRoaXMsIFtyZXNwXSk7XHJ9XHJpbml0U25pcHBldHNGaWx0ZXIodHlwZSkge1xycmV0dXJuIGluaXRTbmlwcGV0c0ZpbHRlci5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyb3Blbk1vZGFsKHRhcmdldCwgc25pcHBldFR5cGUpIHtccnJldHVybiBvcGVuTW9kYWwuYXBwbHkodGhpcywgW3RhcmdldCwgc25pcHBldFR5cGVdKTtccn1ccmNsb3NlTW9kYWwoKSB7XHJyZXR1cm4gY2xvc2VNb2RhbC5hcHBseSh0aGlzKTtccn1cci8vIENvbnRlbnQgYXJlYXNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0Q29udGVudEFyZWFzKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYXMuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xycmV0dXJuIGluaXRDb250ZW50QXJlYS5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcl0pO1xyfVxyLy8gQ29udGFpbmVyc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJyZXR1cm4gY29udmVydFRvQ29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgdGFyZ2V0XSk7XHJ9XHJpbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccnJldHVybiBpbml0Q29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyXSk7XHJ9XHJpbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xycmV0dXJuIGluaXRDb250YWluZXJDb250ZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZF0pO1xyfVxyLy8gQ29tcG9uZW50c1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccnJldHVybiBjb252ZXJ0VG9Db21wb25lbnQuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZ10pO1xyfVxyaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccnJldHVybiBpbml0Q29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnRdKTtccn1ccmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCkge1xycmV0dXJuIGluaXREeW5hbWljQ29udGVudC5hcHBseSh0aGlzLCBbZHluYW1pY0VsZW1lbnRdKTtccn1ccmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpIHtccnJldHVybiBkZWxldGVDb21wb25lbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyLy8gR2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJnZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudENvbnRlbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJyZXR1cm4gZ2V0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGFpbmVyLCBpc05lc3RlZF0pO1xyfVxyZ2V0Q29udGVudChpbkFycmF5KSB7XHJyZXR1cm4gZ2V0Q29udGVudC5hcHBseSh0aGlzLCBbaW5BcnJheV0pO1xyfVxyLy8gU2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJzZXRDb250ZW50KGNvbnRlbnQsIGNvbnRlbnRBcmVhKSB7XHJyZXR1cm4gc2V0Q29udGVudC5hcHBseSh0aGlzLCBbY29udGVudCwgY29udGVudEFyZWFdKTtccn1cci8vIERlc3Ryb3lcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJkZXN0cm95KCkge1xycmV0dXJuIGRlc3Ryb3kuYXBwbHkodGhpcyk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyYWRkU25pcHBldCh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpIHtccnJldHVybiBhZGRTbmlwcGV0LmFwcGx5KHRoaXMsIFt0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXNdKTtccn1cclxufVxyLy8gS0VkaXRvciBwbHVnaW5zXHJcbiQuZm4ua2VkaXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJsZXQgZWxlbWVudCA9ICQodGhpcyk7XHJsZXQgaW5zdGFuY2UgPSBlbGVtZW50LmRhdGEoJ2tlZGl0b3InKTtccmlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtccmlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVtvcHRpb25zXSAmJiB0eXBlb2YgaW5zdGFuY2Vbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtccnJldHVybiBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJ9XHJ9IGVsc2Uge1xyaWYgKCFpbnN0YW5jZSkge1xyaW5zdGFuY2UgPSBLRWRpdG9yLmluaXQoZWxlbWVudCwgb3B0aW9ucyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBpbnN0YW5jZSk7XHJ9XHJyZXR1cm4gaW5zdGFuY2U7XHJ9XHJcbn07XHJ3aW5kb3cuS0VkaXRvciA9ICQua2VkaXRvciA9ICQuZm4ua2VkaXRvci5jb25zdHJ1Y3RvciA9IEtFZGl0b3I7XHJcbiIsImltcG9ydCBERUZBVUxUUyBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0cyc7XHJcbmltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIGNvbmZpZykge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQgPSB0YXJnZXQ7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgY29uZmlnKTtccmlmIChvcHRpb25zLmlmcmFtZU1vZGUpIHtccnNlbGYuaW5pdElmcmFtZSgpO1xyfSBlbHNlIHtccnNlbGYud2luZG93ID0gd2luZG93O1xyc2VsZi5ib2R5ID0gJChkb2N1bWVudC5ib2R5KTtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBlbGVtZW50LnZhbCgpIHx8IGVsZW1lbnQuaHRtbCgpIHx8ICcnO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlcihvcmlnaW5hbENvbnRlbnQpO1xyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQuYWZ0ZXIoY29udGVudEFyZWFzV3JhcHBlcik7XHJlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVTLkhJRERFTl9FTEVNRU5UKTtccn0gZWxzZSB7XHJlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyfVxyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyID0gY29udGVudEFyZWFzV3JhcHBlcjtccn1ccnNlbGYuaW5pdFNpZGViYXIoKTtccnNlbGYuaW5pdFNuaXBwZXRzTW9kYWwoKTtccnNlbGYuaW5pdENvbnRlbnRBcmVhcygpO1xyaWYgKCFzZWxmLmJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRVMuQ0xJQ0tTX0lOSVRJQUxJWkVEKSkge1xyc2VsZi5pbml0S0VkaXRvckNsaWNrcygpO1xyfVxyc2VsZi5pZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xyS0VkaXRvci5pbnN0YW5jZXNbc2VsZi5pZF0gPSBzZWxmO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uUmVhZHkgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25SZWFkeS5jYWxsKHNlbGYpO1xyfVxyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJzZWxmLm1vZGFsVGFyZ2V0ID0gbnVsbDtccnNlbGYubW9kYWxBY3Rpb24gPSBudWxsO1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtdGl0bGUnKS5odG1sKCcnKTtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJtb2RhbC5yZW1vdmVDbGFzcygnc2hvd2VkJyk7XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztcclxuaW1wb3J0IGVycm9yIGZyb20gJy4uL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxJZCA9IHNlbGYuZ2VuZXJhdGVJZCgnbW9kYWwnKTtccmxldCBzbmlwcGV0c1dyYXBwZXJIdG1sID0gJyc7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzbmlwcGV0c1dyYXBwZXJIdG1sID0gYFxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lclwiPjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIGtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnRcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzIGtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50XCI+PC9kaXY+XHI8L2Rpdj5ccmA7XHJ9IGVsc2Uge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXJcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzXCI+PC9kaXY+XHI8L2Rpdj5ccmA7XHJ9XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsID0gJChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLW1vZGFsXCIgaWQ9XCIke21vZGFsSWR9XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1oZWFkZXJcIj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci1tb2RhbC1jbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj5ccjxoNCBjbGFzcz1cImtlZGl0b3ItbW9kYWwtdGl0bGVcIj48L2g0PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1ib2R5XCI+JHtzbmlwcGV0c1dyYXBwZXJIdG1sfTwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtZm9vdGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBrZWRpdG9yLW1vZGFsLWNsb3NlXCI+Q2xvc2U8L2J1dHRvbj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1wcmltYXJ5IGtlZGl0b3ItbW9kYWwtYWRkXCI+QWRkPC9idXR0b24+XHI8L2Rpdj5ccjwvZGl2PlxyYCk7XHJpZiAodHlwZW9mIG9wdGlvbnMuc25pcHBldHNVcmwgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuc25pcHBldHNVcmwubGVuZ3RoID4gMCkge1xybG9nKGBHZXR0aW5nIHNuaXBwZXRzIGZvcm0gXCIke29wdGlvbnMuc25pcHBldHNVcmx9XCIuLi5gKTtcciQuYWpheCh7XHJ0eXBlOiAnZ2V0JyxccmRhdGFUeXBlOiAnaHRtbCcsXHJ1cmw6IG9wdGlvbnMuc25pcHBldHNVcmwsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcCkge1xybG9nKCdTdWNjZXNzIGluIGdldHRpbmcgc25pcHBldHMnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XHJyZXNwID0gb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkLmNhbGwoc2VsZiwgcmVzcCkgfHwgcmVzcDtccn1ccnNlbGYucmVuZGVyU25pcHBldHMocmVzcCk7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9IGVsc2Uge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkFMTCk7XHJ9XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xybG9nKCdFcnJvciB3aGVuIGdldHRpbmcgc25pcHBldHMnLCBqcVhIUik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0Vycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uU25pcHBldHNFcnJvci5jYWxsKHNlbGYsIGpxWEhSKTtccn1ccn1ccn0pO1xyLy8gQ2xvc2UgYnV0dG9uc1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFkZCBidXR0b25ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWFkZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgc2VsZWN0ZWRTbmlwcGV0ID0gbW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZFNuaXBwZXQubGVuZ3RoID09PSAwKSB7XHJyZXR1cm47XHJ9XHJsZXQgY29udGVudEFyZWEgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IHNuaXBwZXRUeXBlID0gc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHNuaXBwZXRDb250ZW50RWxlbWVudCA9IG1vZGFsLmZpbmQoc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtc25pcHBldCcpKTtccmxldCBzbmlwcGV0Q29udGVudCA9IHNuaXBwZXRDb250ZW50RWxlbWVudC5odG1sKCk7XHJsZXQgaXNBZGRpbmdDb250YWluZXIgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudCA9IGZhbHNlO1xybGV0IGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IGZhbHNlO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyaXNBZGRpbmdDb250YWluZXIgPSB0cnVlO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfSBlbHNlIHtccmlmIChzbmlwcGV0VHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccn0gZWxzZSB7XHJzd2l0Y2ggKHNlbGYubW9kYWxTbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJpZiAoc2VsZi5tb2RhbFRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInKSkge1xyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyfSBlbHNlIHtccmlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IHRydWU7XHJ9XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJ9XHJsZXQgbmV3Q29udGFpbmVyO1xybGV0IG5ld0NvbXBvbmVudDtccmlmIChpc0FkZGluZ0NvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb250YWluZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJ9XHJpZiAoaXNBZGRpbmdDb21wb25lbnQpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb21wb25lbnQpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYubW9kYWxUYXJnZXQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7b3B0aW9ucy5jb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudH08L3NlY3Rpb24+XHI8L3NlY3Rpb24+XHJgKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykuZXEoMCkuaHRtbChuZXdDb21wb25lbnQpO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbXBvbmVudCwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFjdGlvbiBjbGljayBmb3Igc25pcHBldFxybW9kYWwub24oJ2NsaWNrJywgJy5rZWRpdG9yLXNuaXBwZXQnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xyaWYgKCFzbmlwcGV0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJzbmlwcGV0LnBhcmVudCgpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyc25pcHBldC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtccn1ccn0pO1xybGV0IGNzc1RyYW5zaXRpb25FbmQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCc7XHJtb2RhbC5vbihjc3NUcmFuc2l0aW9uRW5kLCAoKSA9PiB7XHJpZiAoIW1vZGFsLmhhc0NsYXNzKCdzaG93ZWQnKSkge1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcciQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyfVxyfSk7XHJtb2RhbC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtccn0gZWxzZSB7XHJlcnJvcignXCJzbmlwcGV0c1VybFwiIG11c3QgYmUgbm90IG51bGwhJyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgc25pcHBldFR5cGUpIHtccmxvZygnb3Blbk1vZGFsJywgdGFyZ2V0LCBzbmlwcGV0VHlwZSk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxUaXRsZSA9ICcnO1xyc3dpdGNoIChzbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxybW9kYWxUaXRsZSA9ICdBZGQgY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxybW9kYWxUaXRsZSA9ICdBZGQgY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xybW9kYWwuZmluZChzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCcgOiAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtccn0gZWxzZSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykuZmluZCgnLmtlZGl0b3Itc25pcHBldFtkYXRhLXR5cGU9Y29udGFpbmVyXScpLmNzcygnZGlzcGxheScsIHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJ25vbmUnIDogJ2Jsb2NrJyk7XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250ZW50Jztccn1ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbChtb2RhbFRpdGxlKTtccnNlbGYubW9kYWxUYXJnZXQgPSB0YXJnZXQ7XHJzZWxmLm1vZGFsU25pcHBldFR5cGUgPSBzbmlwcGV0VHlwZTtccm1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnb3BlbmVkLW1vZGFsJyk7XHJzZXRUaW1lb3V0KCgpID0+IHtccm1vZGFsLmFkZENsYXNzKCdzaG93ZWQnKTtccn0sIDApO1xyXG59O1xyXG4iLCJpbXBvcnQgZXJyb3IgZnJvbSBcIi4vdXRpbHMvZXJyb3JcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50LCBjb250ZW50QXJlYSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXI7XHJpZiAoIWNvbnRlbnRBcmVhKSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyfSBlbHNlIHtccmlmICghY29udGVudEFyZWEuanF1ZXJ5KSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChjb250ZW50QXJlYSk7XHJ9XHJ9XHJpZiAoY29udGVudEFyZWEubGVuZ3RoID09PSAwKSB7XHJlcnJvcignQ29udGVudCBhcmVhIGRvZXMgbm90IGV4aXN0IScpO1xyfVxyY29udGVudEFyZWEuaHRtbChjb250ZW50KTtccnNlbGYuaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCB0cnVlKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLWJvZHknKS5jaGlsZHJlbignLmFjdGl2ZScpO1xyaWYgKGFjdGl2ZUZvcm0ubGVuZ3RoID4gMCkge1xyaWYgKGFjdGl2ZUZvcm0uaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nJykpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24uY2FsbChzZWxmLCBhY3RpdmVGb3JtLCBzZWxmKTtccn1ccn0gZWxzZSB7XHJsZXQgYWN0aXZlVHlwZSA9IGFjdGl2ZUZvcm0uYXR0cignZGF0YS10eXBlJyk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1thY3RpdmVUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5oaWRlU2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtccn1ccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccnNpZGViYXIucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG59IiwiaW1wb3J0IGVycm9yIGZyb20gXCIuLi91dGlscy9lcnJvclwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzaWRlYmFySWQgPSBzZWxmLmdlbmVyYXRlSWQoJ3NpZGViYXInKTtccmxldCBzaWRlYmFyID0gc2VsZi5zaWRlYmFyID0gJChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXJcIiBpZD1cIiR7c2lkZWJhcklkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zaWRlYmFyLWhlYWRlclwiPlxyPHNwYW4gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci10aXRsZVwiPjwvc3Bhbj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1jbG9zZVwiPiZ0aW1lczs8L2E+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1ib2R5XCI+PC9kaXY+XHI8L2Rpdj5ccmApO1xyc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9KTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5Jyk7XHJzaWRlYmFyQm9keS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xycmV0dXJuIGZhbHNlO1xyfSk7XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccmxldCBmb3JtID0gJCgnPGRpdiAgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2V0dGluZy1mb3JtIGtlZGl0b3ItY29udGFpbmVyLXNldHRpbmdcIj48L2Rpdj4nKTtccnNpZGViYXJCb2R5LmFwcGVuZChmb3JtKTtccmxvZygnSW5pdGlhbGl6ZSBjb250YWluZXIgc2V0dGluZyBwYW5lbCcpO1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uLmNhbGwoc2VsZiwgZm9ybSwgc2VsZik7XHJ9IGVsc2Uge1xyZXJyb3IoJ1wiY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvblwiIGlzIG5vdCBmdW5jdGlvbiEnKTtccn1ccn1ccnNpZGViYXIuYXBwZW5kVG8ob3B0aW9ucy5pZnJhbWVNb2RlID8gc2VsZi5pZnJhbWVXcmFwcGVyIDogc2VsZi5ib2R5KTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBzaWRlYmFyVGl0bGUgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItdGl0bGUnKTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5Jyk7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXJCb2R5LmNoaWxkcmVuKCcuYWN0aXZlJyk7XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtccmlmICh0YXJnZXQuaXMoJy5rZWRpdG9yLWNvbXBvbmVudCcpKSB7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKHRhcmdldCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccnNpZGViYXJUaXRsZS5odG1sKGNvbXBvbmVudERhdGEuc2V0dGluZ1RpdGxlKTtccmxldCBzZXR0aW5nRm9ybSA9IHNpZGViYXJCb2R5LmZpbmQoYC5rZWRpdG9yLXNldHRpbmctJHtjb21wb25lbnRUeXBlfWApO1xyaWYgKHNldHRpbmdGb3JtLmxlbmd0aCA9PT0gMCkge1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJzZXR0aW5nRm9ybSA9ICQoYFxyPGRpdlxyZGF0YS10eXBlPVwiJHtjb21wb25lbnRUeXBlfVwiXHJjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zZXR0aW5nLWZvcm0ga2VkaXRvci1zZXR0aW5nLSR7Y29tcG9uZW50VHlwZX0gY2xlYXJmaXggYWN0aXZlXCJccj5ccjwvZGl2PlxyYCk7XHJsZXQgbG9hZGluZ1RleHQgPSAkKCc8c3BhbiAvPicpLmh0bWwoJ0xvYWRpbmcuLi4nKTtccnNpZGViYXJCb2R5LmFwcGVuZChzZXR0aW5nRm9ybSk7XHJzZXR0aW5nRm9ybS5hcHBlbmQobG9hZGluZ1RleHQpO1xybGV0IGluaXRGdW5jdGlvbiA9IGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHNlbGYpO1xyJC53aGVuKGluaXRGdW5jdGlvbikuZG9uZShmdW5jdGlvbiAoKSB7XHJsb2coYEluaXRpYWxpemVkIHNldHRpbmcgZm9ybSBmb3IgY29tcG9uZW50IHR5cGUgXCIke2NvbXBvbmVudFR5cGV9XCJgKTtccnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xybG9hZGluZ1RleHQucmVtb3ZlKCk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyfSwgMTAwKTtccn0pO1xyfVxyfSBlbHNlIHtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcygnYWN0aXZlJyk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQobnVsbCk7XHJzaWRlYmFyVGl0bGUuaHRtbCgnQ29udGFpbmVyIFNldHRpbmdzJyk7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uLmNhbGwoc2VsZiwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcygnYWN0aXZlJyk7XHJ9XHJzaWRlYmFyLmFkZENsYXNzKCdvcGVuZWQnKTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSBcIi4vcmVuZGVyU25pcHBldFwiO1xyXG5pbXBvcnQgcmVuZGVyU25pcHBldEZpbHRlciBmcm9tIFwiLi9yZW5kZXJTbmlwcGV0RmlsdGVyXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXSA9IHJlbmRlclNuaXBwZXQuY2FsbChzZWxmLCB0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKTtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50JykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldENvbnRlbnRIdG1sKTtccmxldCBmaWx0ZXJUeXBlO1xyaWYgKG9wdGlvbnMuc25pcHBldHNGaWx0ZXJFbmFibGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJmaWx0ZXJUeXBlID0gdHlwZSA9PT0gJ2NvbnRhaW5lcicgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkNPTVBPTkVOVDtccn0gZWxzZSB7XHJmaWx0ZXJUeXBlID0gU05JUFBFVF9UWVBFLkFMTDtccn1ccn1ccmxldCBbY2F0ZWdvcmllc09wdGlvbnMsIHNuaXBwZXRzV3JhcHBlcl0gPSByZW5kZXJTbmlwcGV0RmlsdGVyLmNhbGwodGhpcywgZmlsdGVyVHlwZSk7XHJzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtZmlsdGVyJykuaHRtbChjYXRlZ29yaWVzT3B0aW9ucykudHJpZ2dlcignY2hhbmdlJyk7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcclxuaW1wb3J0IHJlbmRlclNuaXBwZXRGaWx0ZXIgZnJvbSBcIi4vcmVuZGVyU25pcHBldEZpbHRlclwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxvZygnaW5pdFNuaXBwZXRzRmlsdGVyJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBbY2F0ZWdvcmllc09wdGlvbnMsIHNuaXBwZXRzV3JhcHBlcl0gPSByZW5kZXJTbmlwcGV0RmlsdGVyLmNhbGwodGhpcywgdHlwZSk7XHJzbmlwcGV0c1dyYXBwZXIucHJlcGVuZChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlci13cmFwcGVyXCI+XHI8c2VsZWN0IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlclwiPlxyJHtjYXRlZ29yaWVzT3B0aW9uc31ccjwvc2VsZWN0PlxyPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtc2VhcmNoXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlR5cGUgdG8gc2VhcmNoLi4uXCIgLz5ccjwvZGl2PlxyYCk7XHJsZXQgdHh0U2VhcmNoID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXNlYXJjaCcpO1xybGV0IGNiYkZpbHRlciA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1maWx0ZXInKTtccmxldCBkb0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtccmxldCBzZWxlY3RlZENhdGVnb3J5ID0gKGNiYkZpbHRlci52YWwoKSB8fCAnJykudG9Mb3dlckNhc2UoKTtccmxldCBzZWFyY2hUZXh0ID0gKHR4dFNlYXJjaC52YWwoKSB8fCAnJykudG9Mb3dlckNhc2UoKTtccmxldCBzbmlwcGV0cyA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmNoaWxkcmVuKCcua2VkaXRvci1zbmlwcGV0Jyk7XHJzbmlwcGV0cy5maWx0ZXIoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgfHwgc2VhcmNoVGV4dCkge1xybG9nKCdGaWx0ZXJpbmcgc25pcHBldHMnKTtccnNuaXBwZXRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGRhdGFDYXRlZ29yaWVzU3RyaW5nID0gc25pcHBldC5hdHRyKCdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgZGF0YUNhdGVnb3JpZXMgPSBkYXRhQ2F0ZWdvcmllc1N0cmluZy5zcGxpdChvcHRpb25zLnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcik7XHJsZXQgZXJyb3IgPSAwO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkpIHtccmlmICgkLmluQXJyYXkoc2VsZWN0ZWRDYXRlZ29yeSwgZGF0YUNhdGVnb3JpZXMpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccmlmIChzZWFyY2hUZXh0KSB7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ3RpdGxlJykudG9Mb3dlckNhc2UoKTtccmlmICh0aXRsZS5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSAmJiBkYXRhQ2F0ZWdvcmllc1N0cmluZy5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccnNuaXBwZXRbZXJyb3IgPT09IDAgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ25vdC1tYXRjaGVkJyk7XHJ9KTtccn0gZWxzZSB7XHJsb2coJ1Nob3cgYWxsIHNuaXBwZXRzJyk7XHJzbmlwcGV0cy5yZW1vdmVDbGFzcygnbm90LW1hdGNoZWQnKTtccn1ccn07XHJjYmJGaWx0ZXIub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmRvRmlsdGVyKCk7XHJ9KTtccmxldCB0aW1lcjtccnR4dFNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uICgpIHtccmNsZWFyVGltZW91dCh0aW1lcik7XHJ0aW1lciA9IHNldFRpbWVvdXQoZG9GaWx0ZXIsIDIwMCk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNuaXBwZXRJZCA9IHNlbGYuZ2VuZXJhdGVJZCgnc25pcHBldCcpO1xybGV0IHNuaXBwZXRQcmV2aWV3SHRtbCA9IGBccjxzZWN0aW9uXHJjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0XCJccmRhdGEtc25pcHBldD1cIiMke3NuaXBwZXRJZH1cIlxyZGF0YS10eXBlPVwiJHt0eXBlfVwiXHJ0aXRsZT1cIiR7dGl0bGV9XCJccmRhdGEta2VkaXRvci1jYXRlZ29yaWVzPVwiJHtjYXRlZ29yaWVzfVwiXHI+XHI8c3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcmV2aWV3VXJsfScpXCI+PC9zcGFuPjwvc3Bhbj5ccjwvc2VjdGlvbj5ccmA7XHJsZXQgc25pcHBldENvbnRlbnRIdG1sID0gYDxzY3JpcHQgaWQ9XCIke3NuaXBwZXRJZH1cIiB0eXBlPVwidGV4dC9odG1sXCIgJHtleHRyYURhdGEuam9pbignICcpfT4ke2NvbnRlbnR9PC9zY3JpcHQ+YDtccmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzLmNvbmNhdChjYXRlZ29yaWVzKTtccn1ccnJldHVybiBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl07XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJsZXQgY2F0ZWdvcmllcztccmxldCBzbmlwcGV0c1dyYXBwZXJTZWxlY3RvcjtccnN3aXRjaCAodHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnQnO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxybGV0IGNhdGVnb3JpZXNPcHRpb25zID0gJzxvcHRpb24gdmFsdWU9XCJcIiBzZWxlY3RlZD1cInNlbGVjdGVkXCI+QWxsPC9vcHRpb24+JztcciQuZWFjaChjYXRlZ29yaWVzLCBmdW5jdGlvbiAoaSwgY2F0ZWdvcnkpIHtccmNhdGVnb3JpZXNPcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtjYXRlZ29yeX1cIj4ke2NhdGVnb3J5fTwvb3B0aW9uPmA7XHJ9KTtccnJldHVybiBbXHJjYXRlZ29yaWVzT3B0aW9ucyxccm1vZGFsLmZpbmQoc25pcHBldHNXcmFwcGVyU2VsZWN0b3IpXHJdO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJcbmltcG9ydCByZW5kZXJTbmlwcGV0IGZyb20gJy4vcmVuZGVyU25pcHBldCc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcCkge1xybG9nKCdyZW5kZXJTbmlwcGV0cycpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc25pcHBldHNDb250YWluZXJIdG1sID0gJyc7XHJsZXQgc25pcHBldHNDb21wb25lbnRIdG1sID0gJyc7XHJsZXQgc25pcHBldHNDb250ZW50SHRtbCA9ICcnO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gW107XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IFtdO1xyJChyZXNwKS5maWx0ZXIoJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGNvbnRlbnQgPSBzbmlwcGV0Lmh0bWwoKS50cmltKCk7XHJsZXQgcHJldmlld1VybCA9IHNuaXBwZXQuYXR0cignZGF0YS1wcmV2aWV3Jyk7XHJsZXQgdHlwZSA9IHNuaXBwZXQuYXR0cignZGF0YS10eXBlJyk7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci10aXRsZScpO1xybGV0IGNhdGVnb3JpZXMgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJykgfHwgJyc7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXQsIFsnZGF0YS1wcmV2aWV3JywgJ2RhdGEtdHlwZScsICdkYXRhLWtlZGl0b3ItdGl0bGUnLCAnZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnXSwgdHJ1ZSk7XHJsZXQgW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdID0gcmVuZGVyU25pcHBldC5jYWxsKHNlbGYsIHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBkYXRhQXR0cmlidXRlcyk7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNuaXBwZXRzQ29udGFpbmVySHRtbCArPSBzbmlwcGV0UHJldmlld0h0bWw7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzbmlwcGV0c0NvbXBvbmVudEh0bWwgKz0gc25pcHBldFByZXZpZXdIdG1sO1xyfVxyc25pcHBldHNDb250ZW50SHRtbCArPSBzbmlwcGV0Q29udGVudEh0bWw7XHJ9KTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwpO1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnQnKS5odG1sKHNuaXBwZXRzQ29tcG9uZW50SHRtbCk7XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmh0bWwoc25pcHBldHNDb250YWluZXJIdG1sICsgc25pcHBldHNDb21wb25lbnRIdG1sKVxyfVxyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1ib2R5JykuYXBwZW5kKHNuaXBwZXRzQ29udGVudEh0bWwpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2F0ZWdvcmllcykge1xybGV0IG5ld0FycmF5ID0gW107XHJmb3IgKGxldCBpID0gMDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtccmxldCBjYXRlZ29yeSA9IGNhdGVnb3JpZXNbaV0gfHwgJyc7XHJpZiAoY2F0ZWdvcnkgIT09ICcnICYmICQuaW5BcnJheShjYXRlZ29yeSwgbmV3QXJyYXkpID09PSAtMSkge1xybmV3QXJyYXkucHVzaChjYXRlZ29yeSk7XHJ9XHJ9XHJyZXR1cm4gbmV3QXJyYXkuc29ydCgpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAobWVzc2FnZSkgPT4ge1xydGhyb3cgbmV3IEVycm9yKGBbIEtFZGl0b3IgXSAke21lc3NhZ2V9YCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gJChvcHRpb25zLmNvbnRlbnRBcmVhc1dyYXBwZXIgfHwgJzxkaXYgLz4nKTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignY2xhc3MnLCAna2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS13cmFwcGVyJyk7XHJpZiAoIWNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignaWQnKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGVudC1hcmVhLXdyYXBwZXInKSk7XHJ9XHJjb250ZW50QXJlYXNXcmFwcGVyLmh0bWwoY29udGVudCk7XHJyZXR1cm4gY29udGVudEFyZWFzV3JhcHBlcjtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHR5cGUgPSAnJykgPT4ge1xybGV0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJsZXQgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTg3NjU0MzIxMCk7XHJyZXR1cm4gYGtlZGl0b3ItJHt0eXBlfS0ke3RpbWVzdGFtcH0ke3JhbmRvbX1gO1xyXG59O1xyXG4iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy90b29sYmFyVHlwZSc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNldHRpbmdCdG4gPSAnJztccmlmICghb3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJsZXQgdG9vbGJhckNsYXNzID0gJyc7XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUE6XHJ0b29sYmFyQ2xhc3MgPSAna2VkaXRvci1jb250ZW50LWFyZWEtdG9vbGJhcic7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhcic7XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpICR7dG9vbGJhckNsYXNzfVwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGVudFwiIHRpdGxlPVwiQWRkIGNvbnRlbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29udGVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUE6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRhaW5lclwiIHRpdGxlPVwiQWRkIGNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSOlxyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb250YWluZXJUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb250YWluZXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29udGFpbmVyVGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSOlxyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb250YWluZXJUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb250YWluZXIga2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29udGFpbmVyVGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVDpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyIGtlZGl0b3ItYnRuLWdyb3VwXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBzdWItY29udGFpbmVyXCI+JHtvcHRpb25zLmJ0bkFkZFN1YkNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29tcG9uZW50XCIgdGl0bGU9XCJBZGQgY29tcG9uZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29tcG9uZW50XCIgdGl0bGU9XCJBZGQgY29tcG9uZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT01QT05FTlQ6XHJpZiAoaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccnNldHRpbmdCdG4gPSBgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1zZXR0aW5nXCI+JHtvcHRpb25zLmJ0blNldHRpbmdDb21wb25lbnRUZXh0fTwvYT5gO1xyfVxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci10b29sYmFyIGtlZGl0b3ItdG9vbGJhci1jb21wb25lbnRcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtcmVwb3NpdGlvblwiPiR7b3B0aW9ucy5idG5Nb3ZlQ29tcG9uZW50VGV4dH08L2E+XHIke3NldHRpbmdCdG59XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWR1cGxpY2F0ZVwiPiR7b3B0aW9ucy5idG5EdXBsaWNhdGVDb21wb25lbnRUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtZGVsZXRlXCI+JHtvcHRpb25zLmJ0bkRlbGV0ZUNvbXBvbmVudFRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0b3IpIHtccmxldCB0YXJnZXQgPSAkKGV2ZW50LnRhcmdldCk7XHJsZXQgY2xvc2VzdCA9IHRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKTtccmlmICh0YXJnZXQuaXMoc2VsZWN0b3IpKSB7XHJyZXR1cm4gdGFyZ2V0O1xyfSBlbHNlIGlmIChjbG9zZXN0Lmxlbmd0aCA+IDApIHtccnJldHVybiBjbG9zZXN0O1xyfSBlbHNlIHtccnJldHVybiBudWxsO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBpc0FycmF5ID8gW10gOiB7fTtccmlmICghaWdub3JlQXR0cmlidXRlcykge1xyaWdub3JlQXR0cmlidXRlcyA9IFtdO1xyfVxyJC5lYWNoKHRhcmdldC5nZXQoMCkuYXR0cmlidXRlcywgZnVuY3Rpb24gKGksIGF0dHIpIHtccmlmIChhdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA9PT0gMCAmJiAkLmluQXJyYXkoYXR0ci5uYW1lLCBpZ25vcmVBdHRyaWJ1dGVzKSA9PT0gLTEpIHtccmlmIChpc0FycmF5KSB7XHJkYXRhQXR0cmlidXRlcy5wdXNoKGAke2F0dHIubmFtZX09XCIke2F0dHIudmFsdWV9XCJgKTtccn0gZWxzZSB7XHJkYXRhQXR0cmlidXRlc1thdHRyLm5hbWVdID0gYXR0ci52YWx1ZTtccn1ccn1ccn0pO1xycmV0dXJuIGRhdGFBdHRyaWJ1dGVzO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsb2coJ2luaXRLRWRpdG9yQ2xpY2tzJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBib2R5ID0gc2VsZi5ib2R5O1xyYm9keS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xybGV0IHNpZGViYXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1zaWRlYmFyJyk7XHJsZXQgbW9kYWwgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1tb2RhbCcpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRhaW5lcikge1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhciAmJiAhbW9kYWwpIHtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJsZXQgY29tcG9uZW50ID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29tcG9uZW50KSB7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbXBvbmVudC5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhcikge1xyYm9keS5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29udGFpbmVyLXNldHRpbmcnLCBidG4pO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgYm9keS5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbnRhaW5lci5pcyhzZWxmLnNldHRpbmdDb250YWluZXIpKSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9IGVsc2Uge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWR1cGxpY2F0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgYnRuKTtccmxldCBjb250YWluZXIgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29udGFpbmVyID0gJChzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBidG4ucGFyZW50KCkuaGFzQ2xhc3MoJ2tlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyJykpKTtccmNvbnRhaW5lci5hZnRlcihuZXdDb250YWluZXIpO1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJsb2coJ0NvbnRhaW5lciBpcyBkdXBsaWNhdGVkJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29udGFpbmVyLWRlbGV0ZScsIGJ0bik7XHJpZiAoY29uZmlybShvcHRpb25zLmNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0KSkge1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb21wb25lbnRzID0gY29udGFpbmVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBzZXR0aW5nQ29tcG9uZW50ID0gc2VsZi5zZXR0aW5nQ29tcG9uZW50O1xyaWYgKHNldHRpbmdDb21wb25lbnQpIHtccmxldCBzZXR0aW5nQ29tcG9uZW50UGFyZW50ID0gc2V0dGluZ0NvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChzZXR0aW5nQ29tcG9uZW50UGFyZW50LmlzKGNvbnRhaW5lcikpIHtccmxvZygnRGVsZXRpbmcgY29udGFpbmVyIGlzIGNvbnRhaW5lciBvZiBzZXR0aW5nIGNvbnRhaW5lci4gQ2xvc2Ugc2V0dGluZyBwYW5lbCBmb3IgdGhpcyBzZXR0aW5nIGNvbXBvbmVudCcsIHNldHRpbmdDb21wb25lbnQpO1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSBpZiAoY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccmxvZygnRGVsZXRpbmcgY29udGFpbmVyIGlzIHNldHRpbmcgY29udGFpbmVyLiBDbG9zZSBzZXR0aW5nIHBhbmVsIGZvciB0aGlzIGNvbnRhaW5lcicsIGNvbnRhaW5lcik7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xyY29tcG9uZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtccnNlbGYuZGVsZXRlQ29tcG9uZW50KCQodGhpcykpO1xyfSk7XHJ9XHJjb250YWluZXIucmVtb3ZlKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtc2V0dGluZycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb21wb25lbnQtc2V0dGluZycsIGJ0bik7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xyaWYgKGJvZHkuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29tcG9uZW50LmlzKHNlbGYuc2V0dGluZ0NvbXBvbmVudCgpKSkge1xyc2VsZi5vcGVuU2lkZWJhcihjb21wb25lbnQpO1xyfSBlbHNlIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5vcGVuU2lkZWJhcihjb21wb25lbnQpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1kdXBsaWNhdGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29tcG9uZW50LWR1cGxpY2F0ZScsIGJ0bik7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRhaW5lciA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb21wb25lbnQgPSAkKHNlbGYuZ2V0Q29tcG9uZW50Q29udGVudChjb21wb25lbnQpKTtccmNvbXBvbmVudC5hZnRlcihuZXdDb21wb25lbnQpO1xyc2VsZi5jb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccmxvZygnQ29tcG9uZW50IGlzIGR1cGxpY2F0ZWQnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudER1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsb2coJ0NsaWNrIG9uIC5idG4tY29tcG9uZW50LWRlbGV0ZScsIGJ0bik7XHJpZiAoY29uZmlybShvcHRpb25zLmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0KSkge1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKGNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQpKSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyc2VsZi5kZWxldGVDb21wb25lbnQoY29tcG9uZW50KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudERlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnREZWxldGVkLmNhbGwoc2VsZiwgZSwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyYm9keS5hZGRDbGFzcygna2VkaXRvci1jbGlja3MtaW5pdGlhbGl6ZWQnKTtcclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztccmV4cG9ydCBkZWZhdWx0ICguLi5hcmdzKSA9PiB7XHJpZiAoY29uc29sZSAmJiB0eXBlb2YgY29uc29sZS5sb2cgPT09ICdmdW5jdGlvbicgJiYgJC5rZWRpdG9yLmRlYnVnKSB7XHJjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBbJ1sgS0VkaXRvciBdICcsIC4uLmFyZ3NdKTtccn1cclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=