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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9kZXN0cm95LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2dldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdXRpbHMvZ2VuZXJhdGVUb29sYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dldENsaWNrZWRFbGVtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dldERhdGFBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2luaXRLRWRpdG9yQ2xpY2tzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2tlZGl0b3IubGVzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInRhcmdldCIsImlzRXhpc3RpbmciLCJsb2ciLCJpcyIsInNlbGYiLCJpc1NlY3Rpb24iLCJjb21wb25lbnQiLCJhZGRDbGFzcyIsIndyYXBJbm5lciIsIndyYXAiLCJwYXJlbnQiLCJpbml0Q29tcG9uZW50IiwiY29tcG9uZW50VHlwZSIsImdldENvbXBvbmVudFR5cGUiLCJjb21wb25lbnREYXRhIiwiS0VkaXRvciIsImNvbXBvbmVudHMiLCJkZXN0cm95IiwiY2FsbCIsInJlbW92ZSIsImNsb25lZENvbXBvbmVudCIsImNsb25lIiwiZGF0YUF0dHJpYnV0ZXMiLCJnZXREYXRhQXR0cmlidXRlcyIsImNvbnRlbnQiLCJpZnJhbWVXcmFwcGVyIiwiZmluZCIsImxlbmd0aCIsImlmcmFtZSIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJ1bndyYXAiLCJyZW1vdmVDbGFzcyIsImdldENvbnRlbnQiLCJjb21wb25lbnRDb250ZW50IiwiaHRtbCIsImVhY2giLCIkIiwiam9pbiIsIm9wdGlvbnMiLCJhdHRyIiwicmVwbGFjZSIsImRlZmF1bHRDb21wb25lbnRUeXBlIiwiZXJyb3IiLCJib2R5IiwiZ2VuZXJhdGVJZCIsIm9uQmVmb3JlSW5pdENvbXBvbmVudCIsImFwcGVuZCIsImdlbmVyYXRlVG9vbGJhciIsIlRPT0xCQVJfVFlQRSIsIkNPTVBPTkVOVCIsInNldHRpbmdFbmFibGVkIiwiZHluYW1pY0VsZW1lbnQiLCJpbml0RHluYW1pY0NvbnRlbnQiLCJpbml0Iiwib25Jbml0Q29tcG9uZW50IiwiY2xvc2VzdCIsIm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkIiwiZHluYW1pY0hyZWYiLCJkYXRhIiwicGFyYW0iLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwianFYSFIiLCJvbkR5bmFtaWNDb250ZW50TG9hZGVkIiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwib25EeW5hbWljQ29udGVudEVycm9yIiwiUFJFRklYX0NMQVNTIiwiVUkiLCJISURERU5fRUxFTUVOVCIsIkNMSUNLU19JTklUSUFMSVpFRCIsIkNPTlRFTlRfQVJFQVNfV1JBUFBFUiIsIm5lc3RlZENvbnRhaW5lckVuYWJsZWQiLCJleHBsaWNpdFNuaXBwZXRFbmFibGVkIiwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQiLCJidG5BZGRDb250ZW50VGV4dCIsImJ0bkFkZENvbnRhaW5lclRleHQiLCJidG5BZGRTdWJDb250YWluZXJUZXh0IiwiYnRuQWRkQ29tcG9uZW50VGV4dCIsImJ0bk1vdmVDb250YWluZXJUZXh0IiwiYnRuTW92ZUNvbXBvbmVudFRleHQiLCJidG5TZXR0aW5nQ29udGFpbmVyVGV4dCIsImJ0blNldHRpbmdDb21wb25lbnRUZXh0IiwiYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dCIsImJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQiLCJidG5EZWxldGVDb250YWluZXJUZXh0IiwiYnRuRGVsZXRlQ29tcG9uZW50VGV4dCIsImNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0IiwiY29uZmlybURlbGV0ZUNvbXBvbmVudFRleHQiLCJzbmlwcGV0c1VybCIsInNuaXBwZXRzRmlsdGVyRW5hYmxlZCIsInNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvciIsImlmcmFtZU1vZGUiLCJjb250ZW50U3R5bGVzIiwiY29udGVudEFyZWFzU2VsZWN0b3IiLCJjb250ZW50QXJlYXNXcmFwcGVyIiwiQ0xBU1NfTkFNRVMiLCJjb250YWluZXJTZXR0aW5nRW5hYmxlZCIsImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24iLCJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiIsIm9uUmVhZHkiLCJvblNuaXBwZXRzTG9hZGVkIiwicmVzcCIsIm9uU25pcHBldHNFcnJvciIsIm9uSW5pdElmcmFtZSIsImlmcmFtZUhlYWQiLCJpZnJhbWVCb2R5Iiwib25Db250ZW50Q2hhbmdlZCIsImV2ZW50Iiwib25CZWZvcmVJbml0Q29udGVudEFyZWEiLCJvbkluaXRDb250ZW50QXJlYSIsIm9uQmVmb3JlSW5pdENvbnRhaW5lciIsIm9uSW5pdENvbnRhaW5lciIsIm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCIsInNlbGVjdGVkQ29udGFpbmVyIiwib25Db250YWluZXJEZWxldGVkIiwib25Db250YWluZXJDaGFuZ2VkIiwiY2hhbmdlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRHVwbGljYXRlZCIsIm9yaWdpbmFsQ29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwib25Db250YWluZXJTZWxlY3RlZCIsIm9uQ29udGFpbmVyU25pcHBldEFkZGVkIiwic2VsZWN0ZWRTbmlwcGV0Iiwib25Db21wb25lbnRSZWFkeSIsIm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCIsInNlbGVjdGVkQ29tcG9uZW50Iiwib25Db21wb25lbnREZWxldGVkIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2hhbmdlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RHVwbGljYXRlZCIsIm9yaWdpbmFsQ29tcG9uZW50IiwibmV3Q29tcG9uZW50Iiwib25Db21wb25lbnRTZWxlY3RlZCIsIm9uQ29tcG9uZW50U25pcHBldEFkZGVkIiwiQUxMIiwiQ09OVEFJTkVSIiwiQ09OVEVOVF9BUkVBIiwiU1VCX0NPTlRBSU5FUiIsIkNPTlRBSU5FUl9DT05URU5UIiwiU1VCX0NPTlRBSU5FUl9DT05URU5UIiwiaW5pdENvbnRhaW5lciIsImlzTmVzdGVkIiwiY29udGFpbmVySW5uZXIiLCJub3QiLCJjb250YWluZXJDb250ZW50IiwicmVtb3ZlQXR0ciIsImNvbnRhaW5lckNvbnRlbnRJbm5lciIsImNoaWxkIiwiZ2V0Q29tcG9uZW50Q29udGVudCIsImdldENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50cyIsInBhcmVudHMiLCJpbml0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRUb29sYmFyIiwiYXBwZW5kVG8iLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5Nb2RhbCIsIlNOSVBQRVRfVFlQRSIsInNvcnRhYmxlIiwiaGFuZGxlIiwiaGVscGVyIiwiaXRlbXMiLCJjb25uZWN0V2l0aCIsInRvbGVyYW5jZSIsInNvcnQiLCJyZWNlaXZlIiwidWkiLCJpdGVtIiwic3RhcnQiLCJzdG9wIiwiY29udmVydFRvQ29udGFpbmVyIiwiY29udmVydFRvQ29tcG9uZW50IiwiZG9udEluaXRUb29sYmFyIiwiY29udGVudEFyZWFJbm5lciIsImNvbnRlbnRBcmVhVG9vbGJhciIsImF4aXMiLCJjbG9zZVNpZGViYXIiLCJjb250ZW50RGF0YSIsImNvbnRlbnRBcmVhcyIsIm9yaWdpbmFsQ29udGVudCIsImVtcHR5IiwiaW5pdENvbnRlbnRBcmVhIiwiZWxlbWVudCIsImlkIiwidmFsIiwiaW5zdGFuY2VzIiwiaW5BcnJheSIsInJlc3VsdCIsInB1c2giLCJ3cmFwcGVyIiwiYWZ0ZXIiLCJpZnJhbWVEb2MiLCJjb250ZW50cyIsImdldCIsIm9wZW4iLCJjbG9zZSIsIndpbmRvdyIsImNvbnRlbnRXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInN0eWxlcyIsInN0eWxlIiwiaHJlZiIsImlzQXJyYXkiLCJpIiwiaWRTdHIiLCJnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIiLCJjb3ZlciIsInByZXBlbmQiLCJmbiIsImNvbmZpZyIsImFwcGx5IiwiaXNDb21wb25lbnRDb25maWd1cmFibGUiLCJjYXRlZ29yaWVzIiwiYmVhdXRpZnlDYXRlZ29yaWVzIiwic2V0dGluZ0NvbnRhaW5lciIsInNldHRpbmdDb21wb25lbnQiLCJpZ25vcmVBdHRyaWJ1dGVzIiwic2VsZWN0b3IiLCJnZXRDbGlja2VkRWxlbWVudCIsImluaXRJZnJhbWUiLCJpbml0SWZyYW1lQ292ZXIiLCJpbml0S0VkaXRvckNsaWNrcyIsImluaXRTaWRlYmFyIiwib3BlblNpZGViYXIiLCJpbml0U25pcHBldHNNb2RhbCIsInJlbmRlclNuaXBwZXRzIiwiaW5pdFNuaXBwZXRzRmlsdGVyIiwic25pcHBldFR5cGUiLCJjbG9zZU1vZGFsIiwiaW5pdENvbnRlbnRBcmVhcyIsImRlbGV0ZUNvbXBvbmVudCIsInNldENvbnRlbnQiLCJ0aXRsZSIsInByZXZpZXdVcmwiLCJhZGRTbmlwcGV0IiwiREVGQVVMVFMiLCJibGFuayIsImtlZGl0b3IiLCJpbnN0YW5jZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsImRvY3VtZW50IiwibW9kYWwiLCJtb2RhbFRhcmdldCIsIm1vZGFsQWN0aW9uIiwibW9kYWxJZCIsInNuaXBwZXRzV3JhcHBlckh0bWwiLCJzbmlwcGV0Q29udGVudEVsZW1lbnQiLCJzbmlwcGV0Q29udGVudCIsImlzQWRkaW5nQ29udGFpbmVyIiwiaXNBZGRpbmdDb21wb25lbnQiLCJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIiLCJtb2RhbFNuaXBwZXRUeXBlIiwiZXEiLCJzbmlwcGV0IiwiY3NzVHJhbnNpdGlvbkVuZCIsImNzcyIsIm1vZGFsVGl0bGUiLCJzZXRUaW1lb3V0IiwianF1ZXJ5Iiwic2lkZWJhciIsImFjdGl2ZUZvcm0iLCJhY3RpdmVUeXBlIiwiaGlkZVNldHRpbmdGb3JtIiwic2V0U2V0dGluZ0NvbXBvbmVudCIsInNldFNldHRpbmdDb250YWluZXIiLCJzaWRlYmFySWQiLCJzaWRlYmFyQm9keSIsImZvcm0iLCJzaWRlYmFyVGl0bGUiLCJzZXR0aW5nVGl0bGUiLCJzZXR0aW5nRm9ybSIsImluaXRTZXR0aW5nRm9ybSIsImxvYWRpbmdUZXh0IiwiaW5pdEZ1bmN0aW9uIiwid2hlbiIsImRvbmUiLCJzaG93U2V0dGluZ0Zvcm0iLCJleHRyYURhdGEiLCJyZW5kZXJTbmlwcGV0Iiwic25pcHBldFByZXZpZXdIdG1sIiwic25pcHBldENvbnRlbnRIdG1sIiwic25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzIiwic25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzIiwic25pcHBldHNDYXRlZ29yaWVzIiwiaW5kZXhPZiIsInNuaXBwZXRzV3JhcHBlclNlbGVjdG9yIiwiY2F0ZWdvcmllc09wdGlvbnMiLCJjYXRlZ29yeSIsInNuaXBwZXRzV3JhcHBlciIsInNuaXBwZXRzIiwiZmlsdGVyQ2F0ZWdvcmllcyIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJ0eHRTZWFyY2giLCJjYmJGaWx0ZXIiLCJkb0ZpbHRlciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWFyY2hUZXh0IiwiZmlsdGVyIiwiZGF0YUNhdGVnb3JpZXMiLCJkYXRhQ2F0ZWdvcmllc1N0cmluZyIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic25pcHBldElkIiwiY29uY2F0Iiwic25pcHBldHNDb250YWluZXJIdG1sIiwic25pcHBldHNDb21wb25lbnRIdG1sIiwic25pcHBldHNDb250ZW50SHRtbCIsInRyaW0iLCJuZXdBcnJheSIsIm1lc3NhZ2UiLCJFcnJvciIsInRpbWVzdGFtcCIsIkRhdGUiLCJnZXRUaW1lIiwicmFuZG9tIiwiTWF0aCIsInJvdW5kIiwic2V0dGluZ0J0biIsInRvb2xiYXJDbGFzcyIsImF0dHJpYnV0ZXMiLCJuYW1lIiwidmFsdWUiLCJidG4iLCJjb25maXJtIiwic2V0dGluZ0NvbXBvbmVudFBhcmVudCIsImNvbnNvbGUiLCJkZWJ1ZyIsImFyZ3MiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUNlLHlFQUFVQSxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQ0Ms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QyxFQUFvRDtBQUNwRDNFLGVBQU8sQ0FBQzJFLGdCQUFSLENBQXlCaEcsSUFBekIsQ0FBOEJkLElBQTlCLEVBQW9DZ0ssQ0FBcEMsRUFBdUN0SyxXQUF2QztBQUNDO0FBQ0E7QUFDQSxHQXpCRDtBQTBCQThDLE1BQUksQ0FBQ3JDLFFBQUwsQ0FBYyw0QkFBZDtBQUNDO0FBQUEsQzs7Ozs7Ozs7Ozs7O0FDN0tEO0FBQUE7QUFBQTtBQUFBO0FBQ2UsMkVBQWE7QUFDNUIsTUFBSStVLE9BQU8sSUFBSSxPQUFPQSxPQUFPLENBQUNwVixHQUFmLEtBQXVCLFVBQWxDLElBQWdEbUMsNkNBQUMsQ0FBQ21OLE9BQUYsQ0FBVStGLEtBQTlELEVBQXFFO0FBQUEsc0NBRGxEQyxJQUNrRDtBQURsREEsVUFDa0Q7QUFBQTs7QUFDckVGLFdBQU8sQ0FBQ3BWLEdBQVIsQ0FBWTJOLEtBQVosQ0FBa0J5SCxPQUFsQixHQUE0QixjQUE1QixTQUErQ0UsSUFBL0M7QUFDQztBQUNBLENBSkQsRTs7Ozs7Ozs7Ozs7QUNEQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJqcy9rZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2tlZGl0b3IvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJsb2coJ2NvbnZlcnRUb0NvbXBvbmVudCcsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZyk7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJykpIHtccnJldHVybjtccn1ccmxldCBzZWxmID0gdGhpcztccmxldCBpc1NlY3Rpb24gPSB0YXJnZXQuaXMoJ3NlY3Rpb24nKTtccmxldCBjb21wb25lbnQ7XHJpZiAoaXNTZWN0aW9uKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQnKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudC1jb250ZW50XCI+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0O1xyfSBlbHNlIHtccnRhcmdldC53cmFwKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnRcIj48c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb21wb25lbnQgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJpZiAoaXNFeGlzdGluZykge1xyY29tcG9uZW50LmFkZENsYXNzKCdleGlzdGluZy1jb21wb25lbnQnKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsb2coJ2RlbGV0ZUNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5kZXN0cm95LmNhbGwoY29tcG9uZW50RGF0YSwgY29tcG9uZW50LCBzZWxmKTtccn1ccmNvbXBvbmVudC5yZW1vdmUoKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybG9nKCdnZXRDb21wb25lbnRDb250ZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY2xvbmVkQ29tcG9uZW50ID0gY29tcG9uZW50LmNsb25lKCk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjbG9uZWRDb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKGNsb25lZENvbXBvbmVudCwgbnVsbCwgdHJ1ZSk7XHJsZXQgY29udGVudDtcci8vIEhhbmRsZSBpZnJhbWUtd3JhcHBlclxybGV0IGlmcmFtZVdyYXBwZXIgPSBjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccmlmIChpZnJhbWVXcmFwcGVyLmxlbmd0aCA+IDApIHtccmlmcmFtZVdyYXBwZXIuZmluZCgnLmtlZGl0b3ItaWZyYW1lLWNvdmVyJykucmVtb3ZlKCk7XHJsZXQgaWZyYW1lID0gaWZyYW1lV3JhcHBlci5jaGlsZHJlbignaWZyYW1lJyk7XHJpZiAoaWZyYW1lV3JhcHBlci5oYXNDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlci1mYWtlJykpIHtccmlmcmFtZS51bndyYXAoKTtccn0gZWxzZSB7XHJpZnJhbWVXcmFwcGVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJ9XHJ9XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZ2V0Q29udGVudCA9PT0gJ2Z1bmN0aW9uJykge1xyY29udGVudCA9IGNvbXBvbmVudERhdGEuZ2V0Q29udGVudC5jYWxsKGNvbXBvbmVudERhdGEsIGNsb25lZENvbXBvbmVudCwgc2VsZik7XHJ9IGVsc2Uge1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjbG9uZWRDb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJjb250ZW50ID0gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9XHJjbG9uZWRDb21wb25lbnQuaHRtbChjb250ZW50KS5maW5kKCdbZGF0YS1keW5hbWljLWhyZWZdJykuZWFjaChmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLmh0bWwoJycpO1xyfSk7XHJyZXR1cm4gYDxzZWN0aW9uICR7ZGF0YUF0dHJpYnV0ZXMuam9pbignICcpfT4ke2Nsb25lZENvbXBvbmVudC5odG1sKCl9PC9zZWN0aW9uPmA7XHJcbn07XHJcbiIsImltcG9ydCBlcnJvciBmcm9tICcuLi91dGlscy9lcnJvcic7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudFR5cGUgPSAoY29tcG9uZW50LmF0dHIoJ2RhdGEtdHlwZScpIHx8ICcnKS5yZXBsYWNlKCdjb21wb25lbnQtJywgJycpO1xyaWYgKGNvbXBvbmVudFR5cGUgJiYgKGNvbXBvbmVudFR5cGUgaW4gS0VkaXRvci5jb21wb25lbnRzKSkge1xycmV0dXJuIGNvbXBvbmVudFR5cGU7XHJ9IGVsc2Uge1xyaWYgKHR5cGVvZiBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlID09PSAnc3RyaW5nJykge1xyY29tcG9uZW50VHlwZSA9IG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGU7XHJ9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnRUeXBlID0gb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZS5jYWxsKHNlbGYsIGNvbXBvbmVudCk7XHJ9XHJpZiAoIWNvbXBvbmVudFR5cGUpIHtccmVycm9yKCdDb21wb25lbnQgdHlwZSBpcyB1bmRlZmluZWQhJyk7XHJ9XHJsb2coYEZhbGxiYWNrIHRvIGRlZmF1bHRDb21wb25lbnRUeXBlOiAke2NvbXBvbmVudFR5cGV9YCk7XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccmxvZygnaW5pdENvbXBvbmVudCcsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBib2R5ID0gc2VsZi5ib2R5O1xyaWYgKCFjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50JykgfHwgIWNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50JykpIHtccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJjb21wb25lbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbXBvbmVudCcpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2NvbXBvbmVudC1jb250ZW50JykpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtccmxvZyhgQ29tcG9uZW50IHR5cGU6ICR7Y29tcG9uZW50VHlwZX1gKTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xybG9nKCdSZW5kZXIgS0VkaXRvciB0b29sYmFyIGZvciBjb21wb25lbnQnLCBjb21wb25lbnQpO1xyY29tcG9uZW50LmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihUT09MQkFSX1RZUEUuQ09NUE9ORU5ULCBjb21wb25lbnREYXRhLnNldHRpbmdFbmFibGVkKSk7XHJjb21wb25lbnQuZmluZCgnW2RhdGEtZHluYW1pYy1ocmVmXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGR5bmFtaWNFbGVtZW50ID0gJCh0aGlzKTtccnNlbGYuaW5pdER5bmFtaWNDb250ZW50KGR5bmFtaWNFbGVtZW50KTtccn0pO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmluaXQgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaW5pdC5jYWxsKGNvbXBvbmVudERhdGEsIGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwgc2VsZik7XHJ9IGVsc2Uge1xybG9nKGBcImluaXRcIiBmdW5jdGlvbiBvZiBjb21wb25lbnQgdHlwZSBcIiR7Y29tcG9uZW50VHlwZX1cIiBkb2VzIG5vdCBleGlzdGApO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKTtccmNvbXBvbmVudC5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJ9IGVsc2Uge1xyaWYgKGNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKSkge1xybG9nKCdDb21wb25lbnQgaXMgYWxyZWFkeSBpbml0aWFsaXplZCEnKTtccn0gZWxzZSB7XHJsb2coJ0NvbXBvbmVudCBpcyBpbml0aWFsaXppbmcuLi4nKTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50KSB7XHJsb2coJ2luaXREeW5hbWljQ29udGVudCcsIGR5bmFtaWNFbGVtZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudCA9IGR5bmFtaWNFbGVtZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJkeW5hbWljRWxlbWVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnZHluYW1pYy1lbGVtZW50JykpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxybGV0IGR5bmFtaWNIcmVmID0gZHluYW1pY0VsZW1lbnQuYXR0cignZGF0YS1keW5hbWljLWhyZWYnKTtccmxldCBkYXRhID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjb21wb25lbnQsIFsnZGF0YS10eXBlJywgJ2RhdGEtZHluYW1pYy1ocmVmJ10sIGZhbHNlKTtccmRhdGEgPSAkLnBhcmFtKGRhdGEpO1xybG9nKGBEeW5hbWljIGhyZWY6ICR7ZHluYW1pY0hyZWZ9LCBEYXRhOiAke2RhdGF9YCk7XHJyZXR1cm4gJC5hamF4KHtccnVybDogZHluYW1pY0hyZWYsXHJkYXRhOiBkYXRhLFxydHlwZTogJ0dFVCcsXHJkYXRhVHlwZTogJ0hUTUwnLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIGpxWEhSKSB7XHJsb2coJ0R5bmFtaWMgY29udGVudCBpcyBsb2FkZWQnLCBkeW5hbWljRWxlbWVudCwgcmVzcG9uc2UsIHN0YXR1cywganFYSFIpO1xyZHluYW1pY0VsZW1lbnQuaHRtbChyZXNwb25zZSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50TG9hZGVkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSk7XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJsb2coJ0Vycm9yIHdoZW4gbG9hZGluZyBkeW5hbWljIGNvbnRlbnQnLCBkeW5hbWljRWxlbWVudCwganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvci5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJcbn07XHJcbiIsImNvbnN0IFBSRUZJWF9DTEFTUyA9ICdrZWRpdG9yLSc7XHJleHBvcnQgZGVmYXVsdCB7XHJVSTogYCR7UFJFRklYX0NMQVNTfXVpYCxcckhJRERFTl9FTEVNRU5UOiBgJHtQUkVGSVhfQ0xBU1N9aGlkZGVuLWVsZW1lbnRgLFxyQ0xJQ0tTX0lOSVRJQUxJWkVEOiBgJHtQUkVGSVhfQ0xBU1N9Y2xpY2tzLWluaXRpYWxpemVkYCxcckNPTlRFTlRfQVJFQVNfV1JBUFBFUjogYCR7UFJFRklYX0NMQVNTfWNvbnRlbnQtYXJlYXMtd3JhcHBlcmAsXHJcbn07IiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4vY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCB7XHIvLyBFbmFibGUgbmVzdGVkIGNvbnRhaW5lciBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJuZXN0ZWRDb250YWluZXJFbmFibGVkOiB0cnVlLFxyLy8gRW5hYmxlIGV4cGxpY2l0IHNuaXBwZXQgb3Igbm90LiBXaGVuIGRpc2FibGUsIHRoZXJlIGlzIG9ubHkgb25lIGJ1dHRvbiBmb3IgYWRkaW5nLiBJZiBhZGQgYnV0dG9uIGlzIGluIGNvbnRlbnQgYXJlYSBvciBjb250YWluZXIsIHlvdSBjYW4gYWRkIGNvbXBvbmVudCBvciBjb250YWluZXJzLiBJZiBhZGQgYnV0dG9uIGlzIGluIHN1Yi1jb250YWluZXIsIHlvdSBqdXN0IGNhbiBhZGQgb25seSBjb21wb25lbnQuIFdoZW4geW91IGFkZCBjb21wb25lbnQgaW4gY29udGVudCBhcmVhLCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBjb25maWcgXCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudFwiIG9wdGlvblxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccmV4cGxpY2l0U25pcHBldEVuYWJsZWQ6IGZhbHNlLFxyLy8gY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQgVGhlIGNvbnRhaW5lciBzbmlwcGV0IHdoaWNoIHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseSBpbiBjb250ZW50IGFyZSB3aGVuIHlvdSBhZGRpbmcgYSBjb21wb25lbnQuIE5vdGU6IGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGluIGZpcnN0IGNvbnRhaW5lciBjb250ZW50IG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQ6IGBccjxkaXYgY2xhc3M9XCJyb3dcIj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiPlxyPC9kaXY+XHI8L2Rpdj5ccmAsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb250ZW50IGJ1dHRvbi4gVGhpcyBhdmFpbGFibGUgb25seSB3aGVuIFwiZXhwbGljaXRTaXBwZXRFbmFibGVkXCIgaXMgXCJmYWxzZVwiXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb250ZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBzdWItY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkU3ViQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb21wb25lbnQgYnV0dG9uXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWxpc3QtdWxcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5Nb3ZlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtc29ydFwiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBtb3ZlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bk1vdmVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3NcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3Igc2V0dGluZyBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5TZXR0aW5nQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuU2V0dGluZ0NvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkZWxldGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRGVsZXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkRlbGV0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbnRhaW5lcj8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8vIFRleHQgY29udGVudCBmb3IgY29uZmlybSBkaWFsb2cgd2hlbiBkZWxldGluZyBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0OiAnQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tcG9uZW50PyBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZSEnLFxyLy8gRGVmYXVsdCBjb21wb25lbnQgdHlwZSBvZiBjb21wb25lbnQuIElmIHR5cGUgb2YgY29tcG9uZW50IGRvZXMgbm90IGV4aXN0IGluIEtFZGl0b3IuY29tcG9uZW50cywgd2lsbCBiZSB1c2VkIFwiZGVmYXVsdENvbXBvbmVudFR5cGVcIiBhcyB0eXBlIG9mIHRoaXMgY29tcG9uZW50LiBJZiBpcyBmdW5jdGlvbiwgYXJndW1lbnQgaXMgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd8RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHJkZWZhdWx0Q29tcG9uZW50VHlwZTogJ2JsYW5rJyxcci8vIFVybCB0byBzbmlwcGV0cyBmaWxlXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJzbmlwcGV0c1VybDogJ3NuaXBwZXRzL3NuaXBwZXRzLmh0bWwnLFxyLy8gRW5hYmxlIGZpbHRlcmluZyBzbmlwcGV0cyBieSBjYXRlZ29yaWVzIGFuZCB0ZXh0IHNlYXJjaGluZyBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJzbmlwcGV0c0ZpbHRlckVuYWJsZWQ6IHRydWUsXHIvLyBUaGUgc2VwYXJhdG9yIGNoYXJhY3RlciBiZXR3ZWVuIGVhY2ggY2F0ZWdvcmllc1xyLy8gQG9wdGlvbiB7U3RyaW5nfVxyc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yOiAnOycsXHIvLyBLRWRpdG9yIGlzIGNyZWF0ZWQgaW5zaWRlIGFuIGlmcmFtZSBvciBub3QuIEtFZGl0b3IgaXMgY3JlYXRlZCBpbnNpZGUgYW4gaWZyYW1lIG9yIG5vdC4gS0VkaXRvciB3aWxsIGFkZCBhbGwgZWxlbWVudHMgd2hpY2ggaGF2ZSAnZGF0YS10eXBlPWtlZGl0b3Itc3R5bGUnIGZvciBpZnJhbWUgc3R5bGVzaGVldC4gVGhlc2UgZWxlbWVudHMgY2FuIGJlICdsaW5rJywgJ3N0eWxlJyBvciBhbnkgdGFncy4gSWYgdGhlc2UgZWxlbWVudHMgaGF2ZSAnaHJlZicgYXR0cmlidXRlLCB3aWxsIGNyZWF0ZSBsaW5rIHRhZyB3aXRoIGhyZWYuIElmIHRoZXNlIGVsZW1lbnRzIGRvIG5vdCBoYXZlICdocmVmJyBhdHRyaWJ1dGUsIHdpbGwgY3JlYXRlIHN0eWxlIHRhZyB3aXRoIGNzcyBydWxlIGlzIGh0bWwgY29kZSBpbnNpZGUgZWxlbWVudFxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccmlmcmFtZU1vZGU6IGZhbHNlLFxyLy8gQ29udGVudCBzdHlsZXMgZm9yIGlmcmFtZSBtb2RlXHIvLyBAb3B0aW9uIHtBcnJheTxPYmplY3Q+fVxyLy8gQGV4YW1wbGU6XHIvLyBbXHIvLyAgICAge1xyLy8gICAgICAgICBocmVmOiAnL3BhdGgvdG8vc3R5bGUvZmlsZSdcci8vICAgICB9LCB7XHIvLyAgICAgICAgIGNvbnRlbnQ6ICdhIHsgY29sb3I6IHJlZDsgfSdcci8vICAgICB9XHIvLyBdXHJjb250ZW50U3R5bGVzOiBbXSxcci8vIFNlbGVjdG9yIG9mIGNvbnRlbnQgYXJlYXMuIElmIGlzIG51bGwgb3Igc2VsZWN0b3IgZG9lcyBub3QgbWF0Y2ggYW55IGVsZW1lbnRzLCB3aWxsIGNyZWF0ZSBkZWZhdWx0IGNvbnRlbnQgYXJlYSBhbmQgd3JhcCBhbGwgY29udGVudCBpbnNpZGUgaXQuXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb250ZW50QXJlYXNTZWxlY3RvcjogbnVsbCxcci8vIFRoZSB3cmFwcGVyIGVsZW1lbnQgZm9yIGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIG9yIG5ldyBkaXYgd2hpY2ggd2lsbCBjb250YWlucyBjb250ZW50IG9mIHRleHRhcmVhLiBJdCdzIGp1c3QgZm9yIGRpc3BsYXlpbmcgcHVycG9zZS4gSWYgeW91IHdhbnQgYWxsIGNvbnRlbnRzIGluc2lkZSBpZnJhbWUgYXJlIGFwcGVuZGVkIGludG8gYm9keSB0YWcsIGp1c3QgbGVhdmUgaXQgYXMgYmxhbmtcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbnRlbnRBcmVhc1dyYXBwZXI6IGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9XCI+PC9kaXY+YCxcci8vIEVuYWJsZSBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXJcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJjb250YWluZXJTZXR0aW5nRW5hYmxlZDogZmFsc2UsXHIvLyBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIHNob3dlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIGhpZGRlblxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uOiBudWxsLFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIga2VkaXRvciBpbnN0YW5jZSBpcyByZWFkeVxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHJvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgc25pcHBldHMgYXJlIGxvYWRlZC4gSWYgeW91IHdhbnQgdG8gbW9kaWZ5IHNuaXBwZXRzIGNvbnRlbnQsIHBsZWFzZSByZXR1cm4gbW9kaWZpZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtTdHJpbmd9IHJlc3Bcci8vIEByZXR1cm4ge1N0cmluZ31ccm9uU25pcHBldHNMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBlcnJvciBpbiBsb2FkaW5nIHNuaXBwZXRzXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7anFYSFJ9IGpxWEhSXHJvblNuaXBwZXRzRXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGlmcmFtZSBhbmQgY29udGVudCBhcmVhcyB3cmFwcGVyIGluc2lkZSBpdCBhcmUgY3JlYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lXHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lSGVhZFxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZUJvZHlccm9uSW5pdElmcmFtZTogZnVuY3Rpb24gKGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBpcyBjaGFuZ2VkLiBJbmNsdWRlcyBhZGQsIGRlbGV0ZSwgZHVwbGljYXRlIGNvbnRhaW5lciBvciBjb21wb25lbnQuIE9yIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRlbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb250YWluZXJcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29udGVudCBhcmVhLiBJdCBjYW4gcmV0dXJuIGFycmF5IG9mIGpRdWVyeSBvYmplY3RzIHdoaWNoIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgY29udGFpbmVyIGluIGNvbnRlbnQgYXJlYS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRlbnQgYXJlYSB3aWxsIGJlIGluaXRpYWxpemVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVJbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRhaW5lci4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGVkaXRhYmxlIGNvbXBvbmVudHMgaW4gY29udGFpbmVyIGNvbnRlbnQgKE5PVEU6IHRoZXNlIG9iamVjdHMgTVVTVCBiZSB1bmRlciBlbGVtZW50cyB3aGljaCBoYXZlIGF0dHJpYnV0ZSBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiKS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRhaW5lciBjb250ZW50IHdpbGwgYmUgaW5pdGlhbGl6ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGNvbnRhaW5lciBpcyBkZWxldGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbnRhaW5lciBhbmQgaXRzIGNvbXBvbmVudHMgYXJlIGFscmVhZHkgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgY29udGFpbmVyIGlzIGNoYW5nZWQuIEl0IGNhbiBiZSB3aGVuIGNvbnRhaW5lciByZWNlaXZlZCBuZXcgY29tcG9uZW50IGZyb20gc25pcHBldCBvciBmcm9tIG90aGVyIGNvbnRhaW5lci4gT3IgY29udGVudCBvZiBhbnkgY29tcG9uZW50cyBhcmUgY2hhbmdlZCBvciBhbnkgY29tcG9uZW50cyBhcmUgZGVsZXRlZCBvciBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIGR1cGxpY2F0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckR1cGxpY2F0ZWQ6IGZ1bmN0aW9uIChldmVudCwgb3JpZ2luYWxDb250YWluZXIsIG5ld0NvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIHNlbGVjdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTZWxlY3RlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250ZW50IGFyZWFcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZFNuaXBwZXRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTbmlwcGV0QWRkZWQ6IGZ1bmN0aW9uIChldmVudCwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLiBUaGlzIGNhbGxiYWNrIGlzIGF2YWlsYWJsZSBvciBub3QgaXMgZGVwZW5kIG9uIGNvbXBvbmVudCB0eXBlIGhhbmRsZXIuXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlSW5pdENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb21wb25lbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGEgY29tcG9uZW50IGlzIGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNoYW5nZWRDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gb3JpZ2luYWxDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnREdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBzZWxlY3RlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50U2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgc25pcHBldCBpcyBhZGRlZCBpbiBhIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkU25pcHBldFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBkeW5hbWljIGNvbnRlbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGR5bmFtaWNFbGVtZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBkeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50TG9hZGVkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGlmIGxvYWRpbmcgZHluYW1pYyBjb250ZW50IGlzIGVycm9yLCBhYm9ydCBvciB0aW1lb3V0XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50RXJyb3I6IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKSB7XHJ9XHJcbn07XHIiLCJleHBvcnQgZGVmYXVsdCB7XHJBTEw6IDAsXHJDT05UQUlORVI6IDEsXHJDT01QT05FTlQ6IDJcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyQ09OVEVOVF9BUkVBOiAwLFxyQ09OVEFJTkVSOiAxLFxyU1VCX0NPTlRBSU5FUjogMixcckNPTlRBSU5FUl9DT05URU5UOiAzLFxyU1VCX0NPTlRBSU5FUl9DT05URU5UOiA0LFxyQ09NUE9ORU5UOiA1XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJsb2coJ2NvbnZlcnRUb0NvbnRhaW5lcicsIGNvbnRlbnRBcmVhLCB0YXJnZXQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRhaW5lcjtccmlmICh0YXJnZXQuaXMoJ3NlY3Rpb24nKSkge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyJyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQ7XHJ9IGVsc2Uge1xydGFyZ2V0LndyYXAoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lclwiPjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIGNvbnRhaW5lcik7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJsb2coYGdldENvbnRhaW5lckNvbnRlbnQgLSBpc05lc3RlZD0ke2lzTmVzdGVkfWAsIGNvbnRhaW5lcik7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVySW5uZXIgPSBjb250YWluZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRhaW5lci1pbm5lcicpLmNsb25lKCk7XHJjb250YWluZXJJbm5lci5maW5kKCdbZGF0YS10eXBlPWNvbnRhaW5lci1jb250ZW50XScpLm5vdChpc05lc3RlZCA/ICcnIDogJy5rZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lckNvbnRlbnQgPSAkKHRoaXMpO1xyY29udGFpbmVyQ29udGVudC5yZW1vdmVDbGFzcygna2VkaXRvci1jb250YWluZXItY29udGVudCBrZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCB1aS1zb3J0YWJsZScpLnJlbW92ZUF0dHIoJ2lkJyk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gY29udGFpbmVyQ29udGVudC5jaGlsZHJlbigpO1xybGV0IGNvbnRlbnQgPSAnJztccmNvbnRhaW5lckNvbnRlbnRJbm5lci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNoaWxkID0gJCh0aGlzKTtccmlmIChjaGlsZC5pcygnLmtlZGl0b3ItY29tcG9uZW50JykpIHtccmNvbnRlbnQgKz0gc2VsZi5nZXRDb21wb25lbnRDb250ZW50KGNoaWxkKTtccn0gZWxzZSBpZiAoY2hpbGQuaXMoJy5rZWRpdG9yLXN1Yi1jb250YWluZXInKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50Lmh0bWwoY29udGVudCk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24+JHtjb250YWluZXJJbm5lci5odG1sKCl9PC9zZWN0aW9uPmA7XHJcbn0iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGlzTmVzdGVkID0gb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmIGNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwO1xybG9nKGBpbml0Q29udGFpbmVyIC0gaXNOZXN0ZWQ9JHtpc05lc3RlZH1gLCBjb250ZW50QXJlYSwgY29udGFpbmVyKTtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpIHx8ICFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb250YWluZXIuY2FsbChzZWxmLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLXN1Yi1jb250YWluZXInKTtccn1ccmxvZygnUmVuZGVyIEtFZGl0b3IgdG9vbGJhciBmb3IgY29udGFpbmVyJywgY29udGFpbmVyKTtccmNvbnRhaW5lci5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoaXNOZXN0ZWQgPyBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUiA6IFRPT0xCQVJfVFlQRS5DT05UQUlORVIpKTtccmNvbnRhaW5lci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZChpc05lc3RlZCA/ICdzdWItY29udGFpbmVyJyA6ICdjb250YWluZXInKSk7XHJsZXQgY29udGFpbmVyQ29udGVudHMgPSBjb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJyk7XHJsb2coYEluaXRpYWxpemUgJHtjb250YWluZXJDb250ZW50cy5sZW5ndGh9IGNvbnRhaW5lciBjb250ZW50KHMpYCk7XHJjb250YWluZXJDb250ZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXJDb250ZW50ID0gJCh0aGlzKTtccmlmIChvcHRpb25zLm5lc3RlZENvbnRhaW5lckVuYWJsZWQgJiYgIWlzTmVzdGVkICYmIGNvbnRhaW5lckNvbnRlbnQucGFyZW50cygnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyLy8gRG8gbm90aGluZyBiZWNhdXNlIGl0J3MgY29udGFpbmVyIGNvbnRlbnQgb2Ygc3ViIGNvbnRhaW5lclxycmV0dXJuO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCk7XHJ9KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb250YWluZXIgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0Q29udGFpbmVyLmNhbGwoc2VsZiwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJyk7XHJjb250YWluZXIucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpO1xyfSBlbHNlIHtccmlmIChjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykpIHtccmxvZygnQ29udGFpbmVyIGlzIGFscmVhZHkgaW5pdGlhbGl6ZWQhJyk7XHJ9IGVsc2Uge1xybG9nKCdDb250YWluZXIgaXMgaW5pdGlhbGl6aW5nLi4uJyk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKSB7XHJsb2coYGluaXRDb250YWluZXJDb250ZW50IC0gaXNOZXN0ZWQ9JHtpc05lc3RlZH1gLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1jb250YWluZXItY29udGVudCcpO1xyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXJDb250ZW50LmFkZENsYXNzKCdrZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCcpO1xyfVxyY29udGFpbmVyQ29udGVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGFpbmVyLWNvbnRlbnQnKSk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXJcIj48L2Rpdj4nKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5odG1sKGNvbnRhaW5lckNvbnRlbnQuaHRtbCgpKTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250YWluZXJDb250ZW50SW5uZXIpO1xybG9nKCdJbml0aWFsaXplIHRvb2xiYXIgZm9yIGNvbnRhaW5lciBjb250ZW50Jyk7XHJsZXQgY29udGFpbmVyQ29udGVudFRvb2xiYXIgPSAkKHNlbGYuZ2VuZXJhdGVUb29sYmFyKGlzTmVzdGVkID8gVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVCA6IFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVCkpO1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuYXBwZW5kVG8oY29udGFpbmVyQ29udGVudCk7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJpZiAoIWlzTmVzdGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTlRBSU5FUik7XHJ9KTtccn1ccn1ccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb21wb25lbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfSBlbHNlIHtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb250ZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgaXNOZXN0ZWQgPyBTTklQUEVUX1RZUEUuQ09NUE9ORU5UIDogb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkID8gU05JUFBFVF9UWVBFLkFMTCA6IFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSk7XHJ9XHJsb2coJ0luaXRpYWxpemUgJC5mbi5zb3J0YWJsZSBmb3IgY29udGFpbmVyIGNvbnRlbnQnKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5zb3J0YWJsZSh7XHJoYW5kbGU6ICcuYnRuLWNvbXBvbmVudC1yZXBvc2l0aW9uLCAuYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uJyxccmhlbHBlcjogJ2Nsb25lJyxccml0ZW1zOiAnPiBzZWN0aW9uJyxccmNvbm5lY3RXaXRoOiAnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInLFxydG9sZXJhbmNlOiAncG9pbnRlcicsXHJzb3J0OiBmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0Jyk7XHJ9LFxycmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xybG9nKCdPbiByZWNlaXZlZCBzbmlwcGV0JywgZXZlbnQsIHVpKTtccmxldCBoZWxwZXIgPSB1aS5oZWxwZXI7XHJsZXQgaXRlbSA9IHVpLml0ZW07XHJsZXQgY29udGFpbmVyO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyY29udGFpbmVyID0gaXRlbS5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJykpIHtcciQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRlbnRBcmVhKTtccn1ccml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdGFydDogZnVuY3Rpb24gKGUsIHVpKSB7XHJ1aS5pdGVtLmFkZENsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RvcDogZnVuY3Rpb24gKGUsIHVpKSB7XHJpZiAodWkuaGVscGVyKSB7XHJ1aS5oZWxwZXIucmVtb3ZlKCk7XHJ9XHJ1aS5pdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9XHJ9KTtccmxvZygnSW5pdGlhbGl6ZSBleGlzdGluZyBjb21wb25lbnRzIGluc2lkZSBjb250YWluZXIgY29udGVudCcpO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCBjaGlsZCk7XHJ9IGVsc2Uge1xyc2VsZi5jb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccmxvZygnaW5pdENvbnRlbnRBcmVhJywgY29udGVudEFyZWEpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJjb250ZW50QXJlYS5hZGRDbGFzcygna2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBjb250ZW50ID0gY29udGVudEFyZWEuaHRtbCgpO1xybGV0IGNvbnRlbnRBcmVhSW5uZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXJcIj48L2Rpdj4nKS5odG1sKGNvbnRlbnQpO1xyY29udGVudEFyZWEuaHRtbChjb250ZW50QXJlYUlubmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb250ZW50QXJlYSA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb250ZW50QXJlYS5jYWxsKHNlbGYsIGNvbnRlbnRBcmVhKTtccn1ccmlmICghZG9udEluaXRUb29sYmFyKSB7XHJsZXQgY29udGVudEFyZWFUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBKSk7XHJjb250ZW50QXJlYS5hcHBlbmQoY29udGVudEFyZWFUb29sYmFyKTtccmNvbnRlbnRBcmVhVG9vbGJhci5jaGlsZHJlbihvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyAnLmJ0bi1hZGQtY29udGFpbmVyJyA6ICcuYnRuLWFkZC1jb250ZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRlbnRBcmVhSW5uZXIsIG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5DT05UQUlORVIgOiBTTklQUEVUX1RZUEUuQUxMKTtccn0pO1xyfVxybG9nKCdJbml0aWFsaXplICQuZm4uc29ydGFibGUgZm9yIGNvbnRlbnQgYXJlYScpO1xyY29udGVudEFyZWFJbm5lci5zb3J0YWJsZSh7XHJoYW5kbGU6ICcua2VkaXRvci10b29sYmFyLWNvbnRhaW5lcjpub3QoLmtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyKSAuYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uJyxccml0ZW1zOiAnPiBzZWN0aW9uJyxccmhlbHBlcjogJ2Nsb25lJyxccmNvbm5lY3RXaXRoOiAnLmtlZGl0b3ItY29udGVudC1hcmVhJyxccmF4aXM6ICd5JyxccnRvbGVyYW5jZTogJ3BvaW50ZXInLFxyc29ydDogZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5yZW1vdmVDbGFzcygndWktc3RhdGUtZGVmYXVsdCcpO1xyfSxccnJlY2VpdmU6IGZ1bmN0aW9uIChldmVudCwgdWkpIHtccmxvZygnT24gcmVjZWl2ZWQgc25pcHBldCcsIGV2ZW50LCB1aSk7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyc2VsZi5jbG9zZVNpZGViYXIoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xybG9nKCdJbml0aWFsaXplIGV4aXN0aW5nIGNvbnRhaW5lcnMgaW4gY29udGVudCBhcmVhJyk7XHJjb250ZW50QXJlYUlubmVyLmNoaWxkcmVuKCdzZWN0aW9uJykuZWFjaChmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb250ZW50QXJlYSA9PT0gJ2Z1bmN0aW9uJykge1xybGV0IGNvbnRlbnREYXRhID0gb3B0aW9ucy5vbkluaXRDb250ZW50QXJlYS5jYWxsKHNlbGYsIGNvbnRlbnRBcmVhKTtccmlmIChjb250ZW50RGF0YSAmJiBjb250ZW50RGF0YS5sZW5ndGggPiAwKSB7XHIkLmVhY2goY29udGVudERhdGEsIGZ1bmN0aW9uICgpIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCAkKHRoaXMpKTtccn0pO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsb2coJ2luaXRDb250ZW50QXJlYXMnKTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29udGVudEFyZWFzO1xyaWYgKG9wdGlvbnMuY29udGVudEFyZWFzU2VsZWN0b3IpIHtccmNvbnRlbnRBcmVhcyA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKTtccn1ccmlmICghY29udGVudEFyZWFzIHx8IGNvbnRlbnRBcmVhcy5sZW5ndGggPT09IDApIHtccmxvZygnRG8gbm90IGZpbmQgYW55IGNvbnRlbnQgYXJlYS4gQ3JlYXRpbmcgZGVmYXVsdCBjb250ZW50IGFyZWEuLi4nKTtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBjb250ZW50QXJlYXNXcmFwcGVyLmh0bWwoKTtccmNvbnRlbnRBcmVhcyA9ICQoJzxkaXYgLz4nKS5odG1sKG9yaWdpbmFsQ29udGVudCk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmVtcHR5KCkuYXBwZW5kKGNvbnRlbnRBcmVhcyk7XHJ9XHJjb250ZW50QXJlYXMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGVudEFyZWEgPSAkKHRoaXMpO1xyaWYgKCFjb250ZW50QXJlYS5hdHRyKCdpZCcpKSB7XHJjb250ZW50QXJlYS5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgnY29udGVudC1hcmVhJykpO1xyfVxyc2VsZi5pbml0Q29udGVudEFyZWEoY29udGVudEFyZWEpO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IGlkID0gc2VsZi5pZDtccmxldCBjb250ZW50ID0gc2VsZi5nZXRDb250ZW50KGZhbHNlKTtccmlmIChzZWxmLm9wdGlvbnMuaWZyYW1lTW9kZSkge1xyc2VsZi5pZnJhbWVXcmFwcGVyLnJlbW92ZSgpO1xyfSBlbHNlIHtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5yZW1vdmUoKTtccn1ccmlmIChlbGVtZW50LmlzKCd0ZXh0YXJlYScpKSB7XHJlbGVtZW50LnZhbChjb250ZW50KTtccn0gZWxzZSB7XHJlbGVtZW50Lmh0bWwoY29udGVudCk7XHJ9XHJlbGVtZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWhpZGRlbi1lbGVtZW50Jyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBudWxsKTtccmRlbGV0ZSBLRWRpdG9yLmluc3RhbmNlc1tpZF07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpbkFycmF5KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgcmVzdWx0ID0gW107XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgaHRtbCA9ICcnO1xyJCh0aGlzKS5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyID0gJCh0aGlzKTtccmh0bWwgKz0gc2VsZi5nZXRDb250YWluZXJDb250ZW50KGNvbnRhaW5lcik7XHJ9KTtccnJlc3VsdC5wdXNoKGh0bWwpO1xyfSk7XHJyZXR1cm4gaW5BcnJheSA/IHJlc3VsdCA6IHJlc3VsdC5qb2luKCdcXG4nKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgZWxlbWVudCA9IHNlbGYuZWxlbWVudDtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBlbGVtZW50LmlzKCd0ZXh0YXJlYScpID8gZWxlbWVudC52YWwoKSA6IGVsZW1lbnQuaHRtbCgpO1xybGV0IHdyYXBwZXIgPSBzZWxmLmlmcmFtZVdyYXBwZXIgPSAkKCc8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWlmcmFtZS13cmFwcGVyXCI+PC9kaXY+Jyk7XHJsZXQgaWZyYW1lID0gc2VsZi5pZnJhbWUgPSAkKCc8aWZyYW1lIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWlmcmFtZVwiPjwvaWZyYW1lPicpO1xyZWxlbWVudC5hZnRlcih3cmFwcGVyKTtccndyYXBwZXIuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoJ2lmcmFtZS13cmFwcGVyJykpLmFwcGVuZChpZnJhbWUpO1xyZWxlbWVudC5hZGRDbGFzcygna2VkaXRvci1oaWRkZW4tZWxlbWVudCcpO1xybGV0IGlmcmFtZURvYyA9IHNlbGYuaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRzKCk7XHIvLyBGaXggaXNzdWUgRmlyZWZveCBjYW4ndCByZW5kZXIgY29udGVudCBpbnNpZGUgaWZyYW1lXHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccmlmcmFtZURvYy5nZXQoMCkub3BlbigpO1xyaWZyYW1lRG9jLmdldCgwKS5jbG9zZSgpO1xyLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJzZWxmLndpbmRvdyA9IGlmcmFtZVswXS5jb250ZW50V2luZG93ID8gaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cgOiBpZnJhbWVbMF0uY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3O1xybGV0IGlmcmFtZUhlYWQgPSBzZWxmLmlmcmFtZUhlYWQgPSBpZnJhbWVEb2MuZmluZCgnaGVhZCcpO1xybGV0IGlmcmFtZUJvZHkgPSBzZWxmLmlmcmFtZUJvZHkgPSBzZWxmLmJvZHkgPSBpZnJhbWVEb2MuZmluZCgnYm9keScpO1xybG9nKCdBZGRpbmcgc3R5bGVzIHRvIGlmcmFtZS4uLicpO1xybGV0IHN0eWxlcyA9ICcnO1xyJCgnW2RhdGEtdHlwZT1cImtlZGl0b3Itc3R5bGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzdHlsZSA9ICQodGhpcyk7XHJsZXQgaHJlZiA9IHN0eWxlLmF0dHIoJ2hyZWYnKSB8fCBzdHlsZS5hdHRyKCdkYXRhLWhyZWYnKSB8fCAnJztccmlmIChocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtocmVmfVwiIC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj4ke3N0eWxlLmh0bWwoKX08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtccmlmIChvcHRpb25zLmNvbnRlbnRTdHlsZXMgJiYgJC5pc0FycmF5KG9wdGlvbnMuY29udGVudFN0eWxlcykpIHtcciQuZWFjaChvcHRpb25zLmNvbnRlbnRTdHlsZXMsIGZ1bmN0aW9uIChpLCBzdHlsZSkge1xybGV0IGlkU3RyID0gJyc7XHJpZiAoc3R5bGUuaWQpIHtccmlkU3RyID0gYCBpZD1cIiR7c3R5bGUuaWR9XCIgYDtccn1ccmlmIChzdHlsZS5ocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtzdHlsZS5ocmVmfVwiICR7aWRTdHJ9IC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiAke2lkU3RyfT4ke3N0eWxlLmNvbnRlbnR9PC9zdHlsZT5cXG5gO1xyfVxyfSk7XHJ9XHJpZnJhbWVIZWFkLmFwcGVuZChzdHlsZXMpO1xybG9nKCdBZGRpbmcgb3JpZ2luYWwgY29udGVudCB0byBpZnJhbWUuLi4nKTtccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIob3JpZ2luYWxDb250ZW50KTtccmlmcmFtZUJvZHkuYXBwZW5kKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyID0gY29udGVudEFyZWFzV3JhcHBlcjtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRJZnJhbWUgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0SWZyYW1lLmNhbGwoc2VsZiwgaWZyYW1lLCBpZnJhbWVIZWFkLCBpZnJhbWVCb2R5KTtccn1cclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGlmcmFtZSwgd3JhcHBlcikge1xyaWYgKCF3cmFwcGVyKSB7XHJpZnJhbWUud3JhcCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItaWZyYW1lLXdyYXBwZXItZmFrZVwiPjwvZGl2PicpO1xyd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccn1ccndyYXBwZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccmxldCBjb3ZlciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWlmcmFtZS1jb3ZlclwiPjwvZGl2PicpO1xyd3JhcHBlci5wcmVwZW5kKGNvdmVyKTtccndyYXBwZXIub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJ3cmFwcGVyLnJlbW92ZUNsYXNzKCdoaWRkZW4tY292ZXInKTtccn0pO1xyY292ZXIub24oJ2RibGNsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccndyYXBwZXIuYWRkQ2xhc3MoJ2hpZGRlbi1jb3ZlcicpO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyaW1wb3J0IGxvZyBmcm9tICcuL3V0aWxzL2xvZyc7XHJcbmltcG9ydCBlcnJvciBmcm9tICcuL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUlkJztcclxuaW1wb3J0IGdlbmVyYXRlVG9vbGJhciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVG9vbGJhcic7XHJcbmltcG9ydCBnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXInO1xyXG5pbXBvcnQgYmVhdXRpZnlDYXRlZ29yaWVzIGZyb20gJy4vdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzJztcclxuaW1wb3J0IGdldERhdGFBdHRyaWJ1dGVzIGZyb20gJy4vdXRpbHMvZ2V0RGF0YUF0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgZ2V0Q2xpY2tlZEVsZW1lbnQgZnJvbSAnLi91dGlscy9nZXRDbGlja2VkRWxlbWVudCc7XHJcbmltcG9ydCBpbml0S0VkaXRvckNsaWNrcyBmcm9tICcuL3V0aWxzL2luaXRLRWRpdG9yQ2xpY2tzJztccmltcG9ydCBpbml0SWZyYW1lIGZyb20gJy4vaWZyYW1lL2luaXRJZnJhbWUnO1xyXG5pbXBvcnQgaW5pdElmcmFtZUNvdmVyIGZyb20gJy4vaWZyYW1lL2luaXRJZnJhbWVDb3Zlcic7XHJpbXBvcnQgaW5pdFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2luaXRTaWRlYmFyJztcclxuaW1wb3J0IG9wZW5TaWRlYmFyIGZyb20gJy4vc2lkZWJhci9vcGVuU2lkZWJhcic7XHJcbmltcG9ydCBjbG9zZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2Nsb3NlU2lkZWJhcic7XHJpbXBvcnQgcmVuZGVyU25pcHBldHMgZnJvbSAnLi9zbmlwcGV0L3JlbmRlclNuaXBwZXRzJztcclxuaW1wb3J0IGluaXRTbmlwcGV0c0ZpbHRlciBmcm9tICcuL3NuaXBwZXQvaW5pdFNuaXBwZXRzRmlsdGVyJztcclxuaW1wb3J0IGFkZFNuaXBwZXQgZnJvbSAnLi9zbmlwcGV0L2FkZFNuaXBwZXQnO1xyaW1wb3J0IGluaXRTbmlwcGV0c01vZGFsIGZyb20gJy4vbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwnO1xyXG5pbXBvcnQgb3Blbk1vZGFsIGZyb20gJy4vbW9kYWwvb3Blbk1vZGFsJztcclxuaW1wb3J0IGNsb3NlTW9kYWwgZnJvbSAnLi9tb2RhbC9jbG9zZU1vZGFsJztccmltcG9ydCBpbml0Q29udGVudEFyZWFzIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcyc7XHJcbmltcG9ydCBpbml0Q29udGVudEFyZWEgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEnO1xyaW1wb3J0IGNvbnZlcnRUb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9jb252ZXJ0VG9Db250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXJDb250ZW50JztcclxuaW1wb3J0IGdldENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvZ2V0Q29udGFpbmVyQ29udGVudCc7XHJpbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRUeXBlJztcclxuaW1wb3J0IGNvbnZlcnRUb0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9jb252ZXJ0VG9Db21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0Q29tcG9uZW50JztcclxuaW1wb3J0IGluaXREeW5hbWljQ29udGVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0RHluYW1pY0NvbnRlbnQnO1xyXG5pbXBvcnQgZGVsZXRlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2RlbGV0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCBnZXRDb21wb25lbnRDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQnO1xyaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcclxuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9kZXN0cm95JztcclxuaW1wb3J0IGdldENvbnRlbnQgZnJvbSAnLi9nZXRDb250ZW50JztcclxuaW1wb3J0IHNldENvbnRlbnQgZnJvbSAnLi9zZXRDb250ZW50JztccmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3IubGVzcyc7XHIvLyBDaGVjayBkZXBlbmRlbmNpZXNcclxuaWYgKCEkLmZuLnNvcnRhYmxlKSB7XHJlcnJvcignJC5mbi5zb3J0YWJsZSBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGltcG9ydCAkLmZuLnNvcnRhYmxlIGludG8geW91ciBkb2N1bWVudCBmb3IgY29udGludWUgdXNpbmcgS0VkaXRvci4nKTtcclxufVxyLy8gS0VkaXRvciBjbGFzc1xyXG5jbGFzcyBLRWRpdG9yIHtccnN0YXRpYyBERUZBVUxUUyA9IERFRkFVTFRTO1xyc3RhdGljIGRlYnVnID0gZmFsc2U7XHJzdGF0aWMgdmVyc2lvbiA9ICcyLjAuMCc7XHJzdGF0aWMgaW5zdGFuY2VzID0ge307XHJzdGF0aWMgY29tcG9uZW50cyA9IHtccmJsYW5rOiB7XHJzZXR0aW5nRW5hYmxlZDogZmFsc2Vccn1ccn07XHJzdGF0aWMgbG9nKC4uLmFyZ3MpIHtccmxvZyguLi5hcmdzKTtccn1ccnN0YXRpYyBlcnJvciguLi5hcmdzKSB7XHJlcnJvciguLi5hcmdzKTtccn1ccnN0YXRpYyBpbml0KHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gbmV3IEtFZGl0b3IodGFyZ2V0LCBjb25maWcpO1xyfVxyY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBpbml0LmFwcGx5KHRoaXMsIFt0YXJnZXQsIGNvbmZpZ10pO1xyfVxyZ2VuZXJhdGVJZCh0eXBlKSB7XHJyZXR1cm4gZ2VuZXJhdGVJZC5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyZ2VuZXJhdGVDb250ZW50QXJlYXNXcmFwcGVyKGNvbnRlbnQpIHtccnJldHVybiBnZW5lcmF0ZUNvbnRlbnRBcmVhc1dyYXBwZXIuYXBwbHkodGhpcywgW2NvbnRlbnRdKTtccn1ccmdlbmVyYXRlVG9vbGJhcih0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xycmV0dXJuIGdlbmVyYXRlVG9vbGJhci5hcHBseSh0aGlzLCBbdHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGVdKTtccn1ccmJlYXV0aWZ5Q2F0ZWdvcmllcyhjYXRlZ29yaWVzKSB7XHJyZXR1cm4gYmVhdXRpZnlDYXRlZ29yaWVzLmFwcGx5KHRoaXMsIFtjYXRlZ29yaWVzXSk7XHJ9XHJzZXRTZXR0aW5nQ29udGFpbmVyKGNvbnRhaW5lcikge1xydGhpcy5zZXR0aW5nQ29udGFpbmVyID0gY29udGFpbmVyO1xyfVxyZ2V0U2V0dGluZ0NvbnRhaW5lcigpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb250YWluZXI7XHJ9XHJzZXRTZXR0aW5nQ29tcG9uZW50KGNvbXBvbmVudCkge1xydGhpcy5zZXR0aW5nQ29tcG9uZW50ID0gY29tcG9uZW50O1xyfVxyZ2V0U2V0dGluZ0NvbXBvbmVudCgpIHtccnJldHVybiB0aGlzLnNldHRpbmdDb21wb25lbnQ7XHJ9XHJnZXREYXRhQXR0cmlidXRlcyh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccnJldHVybiBnZXREYXRhQXR0cmlidXRlcy5hcHBseSh0aGlzLCBbdGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5XSk7XHJ9XHJnZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudFR5cGUuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q2xpY2tlZEVsZW1lbnQoZXZlbnQsIHNlbGVjdG9yKSB7XHJyZXR1cm4gZ2V0Q2xpY2tlZEVsZW1lbnQuYXBwbHkodGhpcywgW2V2ZW50LCBzZWxlY3Rvcl0pO1xyfVxyLy8gSWZyYW1lXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdElmcmFtZSgpIHtccnJldHVybiBpbml0SWZyYW1lLmFwcGx5KHRoaXMpO1xyfVxyaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcikge1xycmV0dXJuIGluaXRJZnJhbWVDb3Zlci5hcHBseSh0aGlzLCBbaWZyYW1lLCB3cmFwcGVyXSk7XHJ9XHIvLyBLRWRpdG9yIGNsaWNrc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRLRWRpdG9yQ2xpY2tzKCkge1xycmV0dXJuIGluaXRLRWRpdG9yQ2xpY2tzLmFwcGx5KHRoaXMpO1xyfVxyLy8gU2lkZWJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTaWRlYmFyKCkge1xycmV0dXJuIGluaXRTaWRlYmFyLmFwcGx5KHRoaXMpO1xyfVxyb3BlblNpZGViYXIodGFyZ2V0KSB7XHJyZXR1cm4gb3BlblNpZGViYXIuYXBwbHkodGhpcywgW3RhcmdldF0pO1xyfVxyY2xvc2VTaWRlYmFyKCkge1xycmV0dXJuIGNsb3NlU2lkZWJhci5hcHBseSh0aGlzKTtccn1cci8vIExlZ2FjeSBtZXRob2RzLiBERVBSRUNBVEVEXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2hvd1NldHRpbmdQYW5lbCh0YXJnZXQpIHtccnRoaXMub3BlblNpZGViYXIodGFyZ2V0KTtccn1ccmhpZGVTZXR0aW5nUGFuZWwoKSB7XHJ0aGlzLmNsb3NlU2lkZWJhcigpO1xyfVxyLy8gU25pcHBldCBtb2RhbFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTbmlwcGV0c01vZGFsKCkge1xycmV0dXJuIGluaXRTbmlwcGV0c01vZGFsLmFwcGx5KHRoaXMpO1xyfVxycmVuZGVyU25pcHBldHMocmVzcCkge1xycmV0dXJuIHJlbmRlclNuaXBwZXRzLmFwcGx5KHRoaXMsIFtyZXNwXSk7XHJ9XHJpbml0U25pcHBldHNGaWx0ZXIodHlwZSkge1xycmV0dXJuIGluaXRTbmlwcGV0c0ZpbHRlci5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyb3Blbk1vZGFsKHRhcmdldCwgc25pcHBldFR5cGUpIHtccnJldHVybiBvcGVuTW9kYWwuYXBwbHkodGhpcywgW3RhcmdldCwgc25pcHBldFR5cGVdKTtccn1ccmNsb3NlTW9kYWwoKSB7XHJyZXR1cm4gY2xvc2VNb2RhbC5hcHBseSh0aGlzKTtccn1cci8vIENvbnRlbnQgYXJlYXNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0Q29udGVudEFyZWFzKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYXMuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xycmV0dXJuIGluaXRDb250ZW50QXJlYS5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcl0pO1xyfVxyLy8gQ29udGFpbmVyc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJyZXR1cm4gY29udmVydFRvQ29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgdGFyZ2V0XSk7XHJ9XHJpbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccnJldHVybiBpbml0Q29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyXSk7XHJ9XHJpbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xycmV0dXJuIGluaXRDb250YWluZXJDb250ZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZF0pO1xyfVxyLy8gQ29tcG9uZW50c1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccnJldHVybiBjb252ZXJ0VG9Db21wb25lbnQuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZ10pO1xyfVxyaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccnJldHVybiBpbml0Q29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnRdKTtccn1ccmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCkge1xycmV0dXJuIGluaXREeW5hbWljQ29udGVudC5hcHBseSh0aGlzLCBbZHluYW1pY0VsZW1lbnRdKTtccn1ccmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpIHtccnJldHVybiBkZWxldGVDb21wb25lbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyLy8gR2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJnZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudENvbnRlbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJyZXR1cm4gZ2V0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGFpbmVyLCBpc05lc3RlZF0pO1xyfVxyZ2V0Q29udGVudChpbkFycmF5KSB7XHJyZXR1cm4gZ2V0Q29udGVudC5hcHBseSh0aGlzLCBbaW5BcnJheV0pO1xyfVxyLy8gU2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJzZXRDb250ZW50KGNvbnRlbnQsIGNvbnRlbnRBcmVhKSB7XHJyZXR1cm4gc2V0Q29udGVudC5hcHBseSh0aGlzLCBbY29udGVudCwgY29udGVudEFyZWFdKTtccn1cci8vIERlc3Ryb3lcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJkZXN0cm95KCkge1xycmV0dXJuIGRlc3Ryb3kuYXBwbHkodGhpcyk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyYWRkU25pcHBldCh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpIHtccnJldHVybiBhZGRTbmlwcGV0LmFwcGx5KHRoaXMsIFt0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXNdKTtccn1cclxufVxyLy8gS0VkaXRvciBwbHVnaW5zXHJcbiQuZm4ua2VkaXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJsZXQgZWxlbWVudCA9ICQodGhpcyk7XHJsZXQgaW5zdGFuY2UgPSBlbGVtZW50LmRhdGEoJ2tlZGl0b3InKTtccmlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtccmlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVtvcHRpb25zXSAmJiB0eXBlb2YgaW5zdGFuY2Vbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtccnJldHVybiBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJ9XHJ9IGVsc2Uge1xyaWYgKCFpbnN0YW5jZSkge1xyaW5zdGFuY2UgPSBLRWRpdG9yLmluaXQoZWxlbWVudCwgb3B0aW9ucyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBpbnN0YW5jZSk7XHJ9XHJyZXR1cm4gaW5zdGFuY2U7XHJ9XHJcbn07XHJ3aW5kb3cuS0VkaXRvciA9ICQua2VkaXRvciA9ICQuZm4ua2VkaXRvci5jb25zdHJ1Y3RvciA9IEtFZGl0b3I7XHJcbiIsImltcG9ydCBERUZBVUxUUyBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0cyc7XHJcbmltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIGNvbmZpZykge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQgPSB0YXJnZXQ7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgY29uZmlnKTtccmlmIChvcHRpb25zLmlmcmFtZU1vZGUpIHtccnNlbGYuaW5pdElmcmFtZSgpO1xyfSBlbHNlIHtccnNlbGYud2luZG93ID0gd2luZG93O1xyc2VsZi5ib2R5ID0gJChkb2N1bWVudC5ib2R5KTtccmxldCBvcmlnaW5hbENvbnRlbnQgPSBlbGVtZW50LnZhbCgpIHx8IGVsZW1lbnQuaHRtbCgpIHx8ICcnO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmdlbmVyYXRlQ29udGVudEFyZWFzV3JhcHBlcihvcmlnaW5hbENvbnRlbnQpO1xyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQuYWZ0ZXIoY29udGVudEFyZWFzV3JhcHBlcik7XHJlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVTLkhJRERFTl9FTEVNRU5UKTtccn0gZWxzZSB7XHJlbGVtZW50LmVtcHR5KCkuYXBwZW5kKGNvbnRlbnRBcmVhc1dyYXBwZXIpO1xyfVxyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyID0gY29udGVudEFyZWFzV3JhcHBlcjtccn1ccnNlbGYuaW5pdFNpZGViYXIoKTtccnNlbGYuaW5pdFNuaXBwZXRzTW9kYWwoKTtccnNlbGYuaW5pdENvbnRlbnRBcmVhcygpO1xyaWYgKCFzZWxmLmJvZHkuaGFzQ2xhc3MoQ0xBU1NfTkFNRVMuQ0xJQ0tTX0lOSVRJQUxJWkVEKSkge1xyc2VsZi5pbml0S0VkaXRvckNsaWNrcygpO1xyfVxyc2VsZi5pZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xyS0VkaXRvci5pbnN0YW5jZXNbc2VsZi5pZF0gPSBzZWxmO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uUmVhZHkgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25SZWFkeS5jYWxsKHNlbGYpO1xyfVxyXG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJzZWxmLm1vZGFsVGFyZ2V0ID0gbnVsbDtccnNlbGYubW9kYWxBY3Rpb24gPSBudWxsO1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtdGl0bGUnKS5odG1sKCcnKTtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJtb2RhbC5yZW1vdmVDbGFzcygnc2hvd2VkJyk7XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztcclxuaW1wb3J0IGVycm9yIGZyb20gJy4uL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxJZCA9IHNlbGYuZ2VuZXJhdGVJZCgnbW9kYWwnKTtccmxldCBzbmlwcGV0c1dyYXBwZXJIdG1sID0gJyc7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJzbmlwcGV0c1dyYXBwZXJIdG1sID0gYFxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29udGFpbmVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lclwiPjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIGtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb21wb25lbnRcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzIGtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50XCI+PC9kaXY+XHI8L2Rpdj5ccmA7XHJ9IGVsc2Uge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXJcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzXCI+PC9kaXY+XHI8L2Rpdj5ccmA7XHJ9XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsID0gJChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLW1vZGFsXCIgaWQ9XCIke21vZGFsSWR9XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1oZWFkZXJcIj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci1tb2RhbC1jbG9zZVwiPiZ0aW1lczs8L2J1dHRvbj5ccjxoNCBjbGFzcz1cImtlZGl0b3ItbW9kYWwtdGl0bGVcIj48L2g0PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1ib2R5XCI+JHtzbmlwcGV0c1dyYXBwZXJIdG1sfTwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtZm9vdGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBrZWRpdG9yLW1vZGFsLWNsb3NlXCI+Q2xvc2U8L2J1dHRvbj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1wcmltYXJ5IGtlZGl0b3ItbW9kYWwtYWRkXCI+QWRkPC9idXR0b24+XHI8L2Rpdj5ccjwvZGl2PlxyYCk7XHJpZiAodHlwZW9mIG9wdGlvbnMuc25pcHBldHNVcmwgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuc25pcHBldHNVcmwubGVuZ3RoID4gMCkge1xybG9nKGBHZXR0aW5nIHNuaXBwZXRzIGZvcm0gXCIke29wdGlvbnMuc25pcHBldHNVcmx9XCIuLi5gKTtcciQuYWpheCh7XHJ0eXBlOiAnZ2V0JyxccmRhdGFUeXBlOiAnaHRtbCcsXHJ1cmw6IG9wdGlvbnMuc25pcHBldHNVcmwsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcCkge1xybG9nKCdTdWNjZXNzIGluIGdldHRpbmcgc25pcHBldHMnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XHJyZXNwID0gb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkLmNhbGwoc2VsZiwgcmVzcCkgfHwgcmVzcDtccn1ccnNlbGYucmVuZGVyU25pcHBldHMocmVzcCk7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9IGVsc2Uge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkFMTCk7XHJ9XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xybG9nKCdFcnJvciB3aGVuIGdldHRpbmcgc25pcHBldHMnLCBqcVhIUik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0Vycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uU25pcHBldHNFcnJvci5jYWxsKHNlbGYsIGpxWEhSKTtccn1ccn1ccn0pO1xyLy8gQ2xvc2UgYnV0dG9uc1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFkZCBidXR0b25ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWFkZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgc2VsZWN0ZWRTbmlwcGV0ID0gbW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZFNuaXBwZXQubGVuZ3RoID09PSAwKSB7XHJyZXR1cm47XHJ9XHJsZXQgY29udGVudEFyZWEgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IHNuaXBwZXRUeXBlID0gc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHNuaXBwZXRDb250ZW50RWxlbWVudCA9IG1vZGFsLmZpbmQoc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtc25pcHBldCcpKTtccmxldCBzbmlwcGV0Q29udGVudCA9IHNuaXBwZXRDb250ZW50RWxlbWVudC5odG1sKCk7XHJsZXQgaXNBZGRpbmdDb250YWluZXIgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudCA9IGZhbHNlO1xybGV0IGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IGZhbHNlO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyaXNBZGRpbmdDb250YWluZXIgPSB0cnVlO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfSBlbHNlIHtccmlmIChzbmlwcGV0VHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccn0gZWxzZSB7XHJzd2l0Y2ggKHNlbGYubW9kYWxTbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJpZiAoc2VsZi5tb2RhbFRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInKSkge1xyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyfSBlbHNlIHtccmlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IHRydWU7XHJ9XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJ9XHJsZXQgbmV3Q29udGFpbmVyO1xybGV0IG5ld0NvbXBvbmVudDtccmlmIChpc0FkZGluZ0NvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb250YWluZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJ9XHJpZiAoaXNBZGRpbmdDb21wb25lbnQpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb21wb25lbnQpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYubW9kYWxUYXJnZXQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7b3B0aW9ucy5jb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudH08L3NlY3Rpb24+XHI8L3NlY3Rpb24+XHJgKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykuZXEoMCkuaHRtbChuZXdDb21wb25lbnQpO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbXBvbmVudCwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFjdGlvbiBjbGljayBmb3Igc25pcHBldFxybW9kYWwub24oJ2NsaWNrJywgJy5rZWRpdG9yLXNuaXBwZXQnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xyaWYgKCFzbmlwcGV0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJzbmlwcGV0LnBhcmVudCgpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyc25pcHBldC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtccn1ccn0pO1xybGV0IGNzc1RyYW5zaXRpb25FbmQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCc7XHJtb2RhbC5vbihjc3NUcmFuc2l0aW9uRW5kLCAoKSA9PiB7XHJpZiAoIW1vZGFsLmhhc0NsYXNzKCdzaG93ZWQnKSkge1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcciQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyfVxyfSk7XHJtb2RhbC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtccn0gZWxzZSB7XHJlcnJvcignXCJzbmlwcGV0c1VybFwiIG11c3QgYmUgbm90IG51bGwhJyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztcclxuaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgc25pcHBldFR5cGUpIHtccmxvZygnb3Blbk1vZGFsJywgdGFyZ2V0LCBzbmlwcGV0VHlwZSk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxUaXRsZSA9ICcnO1xyc3dpdGNoIChzbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxybW9kYWxUaXRsZSA9ICdBZGQgY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxybW9kYWxUaXRsZSA9ICdBZGQgY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xybW9kYWwuZmluZChzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCcgOiAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtccn0gZWxzZSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykuZmluZCgnLmtlZGl0b3Itc25pcHBldFtkYXRhLXR5cGU9Y29udGFpbmVyXScpLmNzcygnZGlzcGxheScsIHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJ25vbmUnIDogJ2Jsb2NrJyk7XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250ZW50Jztccn1ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbChtb2RhbFRpdGxlKTtccnNlbGYubW9kYWxUYXJnZXQgPSB0YXJnZXQ7XHJzZWxmLm1vZGFsU25pcHBldFR5cGUgPSBzbmlwcGV0VHlwZTtccm1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnb3BlbmVkLW1vZGFsJyk7XHJzZXRUaW1lb3V0KCgpID0+IHtccm1vZGFsLmFkZENsYXNzKCdzaG93ZWQnKTtccn0sIDApO1xyXG59O1xyXG4iLCJpbXBvcnQgZXJyb3IgZnJvbSBcIi4vdXRpbHMvZXJyb3JcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50LCBjb250ZW50QXJlYSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXI7XHJpZiAoIWNvbnRlbnRBcmVhKSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyfSBlbHNlIHtccmlmICghY29udGVudEFyZWEuanF1ZXJ5KSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChjb250ZW50QXJlYSk7XHJ9XHJ9XHJpZiAoY29udGVudEFyZWEubGVuZ3RoID09PSAwKSB7XHJlcnJvcignQ29udGVudCBhcmVhIGRvZXMgbm90IGV4aXN0IScpO1xyfVxyY29udGVudEFyZWEuaHRtbChjb250ZW50KTtccnNlbGYuaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCB0cnVlKTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLWJvZHknKS5jaGlsZHJlbignLmFjdGl2ZScpO1xyaWYgKGFjdGl2ZUZvcm0ubGVuZ3RoID4gMCkge1xyaWYgKGFjdGl2ZUZvcm0uaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nJykpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24uY2FsbChzZWxmLCBhY3RpdmVGb3JtLCBzZWxmKTtccn1ccn0gZWxzZSB7XHJsZXQgYWN0aXZlVHlwZSA9IGFjdGl2ZUZvcm0uYXR0cignZGF0YS10eXBlJyk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1thY3RpdmVUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5oaWRlU2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtccn1ccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccnNpZGViYXIucmVtb3ZlQ2xhc3MoJ29wZW5lZCcpO1xyXG59IiwiaW1wb3J0IGVycm9yIGZyb20gXCIuLi91dGlscy9lcnJvclwiO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzaWRlYmFySWQgPSBzZWxmLmdlbmVyYXRlSWQoJ3NpZGViYXInKTtccmxldCBzaWRlYmFyID0gc2VsZi5zaWRlYmFyID0gJChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNpZGViYXJcIiBpZD1cIiR7c2lkZWJhcklkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zaWRlYmFyLWhlYWRlclwiPlxyPHNwYW4gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci10aXRsZVwiPjwvc3Bhbj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1jbG9zZVwiPiZ0aW1lczs8L2E+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2lkZWJhci1ib2R5XCI+PC9kaXY+XHI8L2Rpdj5ccmApO1xyc2lkZWJhci5maW5kKCcua2VkaXRvci1zaWRlYmFyLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9KTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5Jyk7XHJzaWRlYmFyQm9keS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xycmV0dXJuIGZhbHNlO1xyfSk7XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccmxldCBmb3JtID0gJCgnPGRpdiAgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc2V0dGluZy1mb3JtIGtlZGl0b3ItY29udGFpbmVyLXNldHRpbmdcIj48L2Rpdj4nKTtccnNpZGViYXJCb2R5LmFwcGVuZChmb3JtKTtccmxvZygnSW5pdGlhbGl6ZSBjb250YWluZXIgc2V0dGluZyBwYW5lbCcpO1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uLmNhbGwoc2VsZiwgZm9ybSwgc2VsZik7XHJ9IGVsc2Uge1xyZXJyb3IoJ1wiY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvblwiIGlzIG5vdCBmdW5jdGlvbiEnKTtccn1ccn1ccnNpZGViYXIuYXBwZW5kVG8ob3B0aW9ucy5pZnJhbWVNb2RlID8gc2VsZi5pZnJhbWVXcmFwcGVyIDogc2VsZi5ib2R5KTtcclxufTtcclxuIiwiaW1wb3J0IGxvZyBmcm9tICcuLi91dGlscy9sb2cnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBzaWRlYmFyVGl0bGUgPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLXNpZGViYXItdGl0bGUnKTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZCgnLmtlZGl0b3Itc2lkZWJhci1ib2R5Jyk7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXJCb2R5LmNoaWxkcmVuKCcuYWN0aXZlJyk7XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtccmlmICh0YXJnZXQuaXMoJy5rZWRpdG9yLWNvbXBvbmVudCcpKSB7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKHRhcmdldCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccnNpZGViYXJUaXRsZS5odG1sKGNvbXBvbmVudERhdGEuc2V0dGluZ1RpdGxlKTtccmxldCBzZXR0aW5nRm9ybSA9IHNpZGViYXJCb2R5LmZpbmQoYC5rZWRpdG9yLXNldHRpbmctJHtjb21wb25lbnRUeXBlfWApO1xyaWYgKHNldHRpbmdGb3JtLmxlbmd0aCA9PT0gMCkge1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJzZXR0aW5nRm9ybSA9ICQoYFxyPGRpdlxyZGF0YS10eXBlPVwiJHtjb21wb25lbnRUeXBlfVwiXHJjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zZXR0aW5nLWZvcm0ga2VkaXRvci1zZXR0aW5nLSR7Y29tcG9uZW50VHlwZX0gY2xlYXJmaXggYWN0aXZlXCJccj5ccjwvZGl2PlxyYCk7XHJsZXQgbG9hZGluZ1RleHQgPSAkKCc8c3BhbiAvPicpLmh0bWwoJ0xvYWRpbmcuLi4nKTtccnNpZGViYXJCb2R5LmFwcGVuZChzZXR0aW5nRm9ybSk7XHJzZXR0aW5nRm9ybS5hcHBlbmQobG9hZGluZ1RleHQpO1xybGV0IGluaXRGdW5jdGlvbiA9IGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHNlbGYpO1xyJC53aGVuKGluaXRGdW5jdGlvbikuZG9uZShmdW5jdGlvbiAoKSB7XHJsb2coYEluaXRpYWxpemVkIHNldHRpbmcgZm9ybSBmb3IgY29tcG9uZW50IHR5cGUgXCIke2NvbXBvbmVudFR5cGV9XCJgKTtccnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xybG9hZGluZ1RleHQucmVtb3ZlKCk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyfSwgMTAwKTtccn0pO1xyfVxyfSBlbHNlIHtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcygnYWN0aXZlJyk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQobnVsbCk7XHJzaWRlYmFyVGl0bGUuaHRtbCgnQ29udGFpbmVyIFNldHRpbmdzJyk7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyLmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci1zZXR0aW5nJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uLmNhbGwoc2VsZiwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcygnYWN0aXZlJyk7XHJ9XHJzaWRlYmFyLmFkZENsYXNzKCdvcGVuZWQnKTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSBcIi4vcmVuZGVyU25pcHBldFwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXSA9IHJlbmRlclNuaXBwZXQuY2FsbChzZWxmLCB0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKTtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50JykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldENvbnRlbnRIdG1sKTtcclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvc25pcHBldFR5cGUnO1xyXG5pbXBvcnQgbG9nIGZyb20gJy4uL3V0aWxzL2xvZyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSkge1xybG9nKCdpbml0U25pcHBldHNGaWx0ZXInKTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccmxldCBjYXRlZ29yaWVzO1xybGV0IHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCc7XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJsZXQgY2F0ZWdvcmllc09wdGlvbnMgPSAnJztcciQuZWFjaChjYXRlZ29yaWVzLCBmdW5jdGlvbiAoaSwgY2F0ZWdvcnkpIHtccmNhdGVnb3JpZXNPcHRpb25zICs9IGA8b3B0aW9uIHZhbHVlPVwiJHtjYXRlZ29yeX1cIj4ke2NhdGVnb3J5fTwvb3B0aW9uPmA7XHJ9KTtccmxldCBzbmlwcGV0c1dyYXBwZXIgPSBtb2RhbC5maW5kKHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yKTtccmxldCBzbmlwcGV0cyA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmNoaWxkcmVuKCcua2VkaXRvci1zbmlwcGV0Jyk7XHJzbmlwcGV0c1dyYXBwZXIucHJlcGVuZChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlci13cmFwcGVyXCI+XHI8c2VsZWN0IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlclwiPlxyPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5BbGw8L29wdGlvbj5cciR7Y2F0ZWdvcmllc09wdGlvbnN9XHI8L3NlbGVjdD5ccjxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLXNlYXJjaFwiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCJUeXBlIHRvIHNlYXJjaC4uLlwiIC8+XHI8L2Rpdj5ccmApO1xyc25pcHBldHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc25pcHBldCA9ICQodGhpcyk7XHJsZXQgY2F0ZWdvcmllcyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKSB8fCAnJztccmxldCBmaWx0ZXJDYXRlZ29yaWVzID0gY2F0ZWdvcmllcy50b0xvd2VyQ2FzZSgpO1xyY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xyZmlsdGVyQ2F0ZWdvcmllcyA9IGZpbHRlckNhdGVnb3JpZXMuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xyc25pcHBldC5kYXRhKCdjYXRlZ29yaWVzJywgY2F0ZWdvcmllcyk7XHJzbmlwcGV0LmRhdGEoJ2NhdGVnb3JpZXNGaWx0ZXInLCBmaWx0ZXJDYXRlZ29yaWVzKTtccn0pO1xybGV0IHR4dFNlYXJjaCA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1zZWFyY2gnKTtccmxldCBjYmJGaWx0ZXIgPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtZmlsdGVyJyk7XHJsZXQgZG9GaWx0ZXIgPSBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZWN0ZWRDYXRlZ29yeSA9IChjYmJGaWx0ZXIudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJsZXQgc2VhcmNoVGV4dCA9ICh0eHRTZWFyY2gudmFsKCkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XHJzbmlwcGV0cy5maWx0ZXIoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgfHwgc2VhcmNoVGV4dCkge1xybG9nKCdGaWx0ZXJpbmcgc25pcHBldHMnKTtccnNuaXBwZXRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGRhdGFDYXRlZ29yaWVzID0gc25pcHBldC5kYXRhKCdjYXRlZ29yaWVzRmlsdGVyJyk7XHJsZXQgZGF0YUNhdGVnb3JpZXNTdHJpbmcgPSBkYXRhQ2F0ZWdvcmllcy5qb2luKCc7Jyk7XHJsZXQgZXJyb3IgPSAwO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkpIHtccmlmICgkLmluQXJyYXkoc2VsZWN0ZWRDYXRlZ29yeSwgZGF0YUNhdGVnb3JpZXMpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccmlmIChzZWFyY2hUZXh0KSB7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ3RpdGxlJykudG9Mb3dlckNhc2UoKTtccmlmICh0aXRsZS5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSAmJiBkYXRhQ2F0ZWdvcmllc1N0cmluZy5pbmRleE9mKHNlYXJjaFRleHQpID09PSAtMSkge1xyZXJyb3IrKztccn1ccn1ccnNuaXBwZXRbZXJyb3IgPT09IDAgPyAncmVtb3ZlQ2xhc3MnIDogJ2FkZENsYXNzJ10oJ25vdC1tYXRjaGVkJyk7XHJ9KTtccn0gZWxzZSB7XHJsb2coJ1Nob3cgYWxsIHNuaXBwZXRzJyk7XHJzbmlwcGV0cy5yZW1vdmVDbGFzcygnbm90LW1hdGNoZWQnKTtccn1ccn07XHJjYmJGaWx0ZXIub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmRvRmlsdGVyKCk7XHJ9KTtccmxldCB0aW1lcjtccnR4dFNlYXJjaC5vbigna2V5ZG93bicsIGZ1bmN0aW9uICgpIHtccmNsZWFyVGltZW91dCh0aW1lcik7XHJ0aW1lciA9IHNldFRpbWVvdXQoZG9GaWx0ZXIsIDIwMCk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNuaXBwZXRJZCA9IHNlbGYuZ2VuZXJhdGVJZCgnc25pcHBldCcpO1xybGV0IHNuaXBwZXRQcmV2aWV3SHRtbCA9IGBccjxzZWN0aW9uXHJjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0XCJccmRhdGEtc25pcHBldD1cIiMke3NuaXBwZXRJZH1cIlxyZGF0YS10eXBlPVwiJHt0eXBlfVwiXHJ0aXRsZT1cIiR7dGl0bGV9XCJccmRhdGEta2VkaXRvci1jYXRlZ29yaWVzPVwiJHtjYXRlZ29yaWVzfVwiXHI+XHI8c3Bhbj48c3BhbiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtwcmV2aWV3VXJsfScpXCI+PC9zcGFuPjwvc3Bhbj5ccjwvc2VjdGlvbj5ccmA7XHJsZXQgc25pcHBldENvbnRlbnRIdG1sID0gYDxzY3JpcHQgaWQ9XCIke3NuaXBwZXRJZH1cIiB0eXBlPVwidGV4dC9odG1sXCIgJHtleHRyYURhdGEuam9pbignICcpfT4ke2NvbnRlbnR9PC9zY3JpcHQ+YDtccmNhdGVnb3JpZXMgPSBjYXRlZ29yaWVzLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzLmNvbmNhdChjYXRlZ29yaWVzKTtccn1ccnJldHVybiBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl07XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztcclxuaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSAnLi9yZW5kZXJTbmlwcGV0JztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwKSB7XHJsb2coJ3JlbmRlclNuaXBwZXRzJyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0c0NvbnRhaW5lckh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbXBvbmVudEh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbnRlbnRIdG1sID0gJyc7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gW107XHIkKHJlc3ApLmZpbHRlcignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc25pcHBldCA9ICQodGhpcyk7XHJsZXQgY29udGVudCA9IHNuaXBwZXQuaHRtbCgpLnRyaW0oKTtccmxldCBwcmV2aWV3VXJsID0gc25pcHBldC5hdHRyKCdkYXRhLXByZXZpZXcnKTtccmxldCB0eXBlID0gc25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCB0aXRsZSA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLXRpdGxlJyk7XHJsZXQgY2F0ZWdvcmllcyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKSB8fCAnJztccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldCwgWydkYXRhLXByZXZpZXcnLCAnZGF0YS10eXBlJywgJ2RhdGEta2VkaXRvci10aXRsZScsICdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcyddLCB0cnVlKTtccmxldCBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl0gPSByZW5kZXJTbmlwcGV0LmNhbGwoc2VsZiwgdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc25pcHBldHNDb250YWluZXJIdG1sICs9IHNuaXBwZXRQcmV2aWV3SHRtbDtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNuaXBwZXRzQ29tcG9uZW50SHRtbCArPSBzbmlwcGV0UHJldmlld0h0bWw7XHJ9XHJzbmlwcGV0c0NvbnRlbnRIdG1sICs9IHNuaXBwZXRDb250ZW50SHRtbDtccn0pO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoWy4uLnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLCAuLi5zZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllc10pO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5odG1sKHNuaXBwZXRzQ29udGFpbmVySHRtbCk7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudCcpLmh0bWwoc25pcHBldHNDb21wb25lbnRIdG1sKTtccn0gZWxzZSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwgKyBzbmlwcGV0c0NvbXBvbmVudEh0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldHNDb250ZW50SHRtbCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjYXRlZ29yaWVzKSB7XHJsZXQgbmV3QXJyYXkgPSBbXTtccmZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xybGV0IGNhdGVnb3J5ID0gY2F0ZWdvcmllc1tpXSB8fCAnJztccmlmIChjYXRlZ29yeSAhPT0gJycgJiYgJC5pbkFycmF5KGNhdGVnb3J5LCBuZXdBcnJheSkgPT09IC0xKSB7XHJuZXdBcnJheS5wdXNoKGNhdGVnb3J5KTtccn1ccn1ccnJldHVybiBuZXdBcnJheS5zb3J0KCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IChtZXNzYWdlKSA9PiB7XHJ0aHJvdyBuZXcgRXJyb3IoYFsgS0VkaXRvciBdICR7bWVzc2FnZX1gKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSAkKG9wdGlvbnMuY29udGVudEFyZWFzV3JhcHBlciB8fCAnPGRpdiAvPicpO1xyY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdjbGFzcycsICdrZWRpdG9yLXVpIGtlZGl0b3ItY29udGVudC1hcmVhLXdyYXBwZXInKTtccmlmICghY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcpKSB7XHJjb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCdjb250ZW50LWFyZWEtd3JhcHBlcicpKTtccn1ccmNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbChjb250ZW50KTtccnJldHVybiBjb250ZW50QXJlYXNXcmFwcGVyO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCAodHlwZSA9ICcnKSA9PiB7XHJsZXQgdGltZXN0YW1wID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtccmxldCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA5ODc2NTQzMjEwKTtccnJldHVybiBga2VkaXRvci0ke3R5cGV9LSR7dGltZXN0YW1wfSR7cmFuZG9tfWA7XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2V0dGluZ0J0biA9ICcnO1xyaWYgKCFvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmxldCB0b29sYmFyQ2xhc3MgPSAnJztccnN3aXRjaCAodHlwZSkge1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQTpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyJztccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVJfQ09OVEVOVDpccmNhc2UgIFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQ6XHJ0b29sYmFyQ2xhc3MgPSAna2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJztccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkgJHt0b29sYmFyQ2xhc3N9XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250ZW50XCIgdGl0bGU9XCJBZGQgY29udGVudFwiPiR7b3B0aW9ucy5idG5BZGRDb250ZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn1ccnN3aXRjaCAodHlwZSkge1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQTpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250ZW50LWFyZWEtdG9vbGJhclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgY29udGFpbmVyXCI+JHtvcHRpb25zLmJ0bkFkZENvbnRhaW5lclRleHR9PC9hPlxyPC9kaXY+XHJgKTtccmNhc2UgIFRPT0xCQVJfVFlQRS5DT05UQUlORVI6XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbnRhaW5lclRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbnRhaW5lclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb250YWluZXJUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVI6XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbnRhaW5lclRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbnRhaW5lciBrZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lclwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb250YWluZXJUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXIga2VkaXRvci1idG4tZ3JvdXBcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRhaW5lclwiIHRpdGxlPVwiQWRkIHN1Yi1jb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkU3ViQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb21wb25lbnRcIiB0aXRsZT1cIkFkZCBjb21wb25lbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb21wb25lbnRcIiB0aXRsZT1cIkFkZCBjb21wb25lbnRcIj4ke29wdGlvbnMuYnRuQWRkQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTVBPTkVOVDpccmlmIChpc0NvbXBvbmVudENvbmZpZ3VyYWJsZSkge1xyc2V0dGluZ0J0biA9IGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXNldHRpbmdcIj4ke29wdGlvbnMuYnRuU2V0dGluZ0NvbXBvbmVudFRleHR9PC9hPmA7XHJ9XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXRvb2xiYXIga2VkaXRvci10b29sYmFyLWNvbXBvbmVudFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1yZXBvc2l0aW9uXCI+JHtvcHRpb25zLmJ0bk1vdmVDb21wb25lbnRUZXh0fTwvYT5cciR7c2V0dGluZ0J0bn1ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtZHVwbGljYXRlXCI+JHtvcHRpb25zLmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHR9PC9hPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kZWxldGVcIj4ke29wdGlvbnMuYnRuRGVsZXRlQ29tcG9uZW50VGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3Rvcikge1xybGV0IHRhcmdldCA9ICQoZXZlbnQudGFyZ2V0KTtccmxldCBjbG9zZXN0ID0gdGFyZ2V0LmNsb3Nlc3Qoc2VsZWN0b3IpO1xyaWYgKHRhcmdldC5pcyhzZWxlY3RvcikpIHtccnJldHVybiB0YXJnZXQ7XHJ9IGVsc2UgaWYgKGNsb3Nlc3QubGVuZ3RoID4gMCkge1xycmV0dXJuIGNsb3Nlc3Q7XHJ9IGVsc2Uge1xycmV0dXJuIG51bGw7XHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXkpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IGlzQXJyYXkgPyBbXSA6IHt9O1xyaWYgKCFpZ25vcmVBdHRyaWJ1dGVzKSB7XHJpZ25vcmVBdHRyaWJ1dGVzID0gW107XHJ9XHIkLmVhY2godGFyZ2V0LmdldCgwKS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoaSwgYXR0cikge1xyaWYgKGF0dHIubmFtZS5pbmRleE9mKCdkYXRhLScpID09PSAwICYmICQuaW5BcnJheShhdHRyLm5hbWUsIGlnbm9yZUF0dHJpYnV0ZXMpID09PSAtMSkge1xyaWYgKGlzQXJyYXkpIHtccmRhdGFBdHRyaWJ1dGVzLnB1c2goYCR7YXR0ci5uYW1lfT1cIiR7YXR0ci52YWx1ZX1cImApO1xyfSBlbHNlIHtccmRhdGFBdHRyaWJ1dGVzW2F0dHIubmFtZV0gPSBhdHRyLnZhbHVlO1xyfVxyfVxyfSk7XHJyZXR1cm4gZGF0YUF0dHJpYnV0ZXM7XHJcbn07XHJcbiIsImltcG9ydCBsb2cgZnJvbSAnLi4vdXRpbHMvbG9nJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxvZygnaW5pdEtFZGl0b3JDbGlja3MnKTtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGJvZHkgPSBzZWxmLmJvZHk7XHJib2R5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJsZXQgc2lkZWJhciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLXNpZGViYXInKTtccmxldCBtb2RhbCA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLW1vZGFsJyk7XHJsZXQgY29udGFpbmVyID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoY29udGFpbmVyKSB7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGFpbmVyLmFkZENsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lclNlbGVjdGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9IGVsc2Uge1xyaWYgKCFzaWRlYmFyICYmICFtb2RhbCkge1xyYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccn1ccmxldCBjb21wb25lbnQgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1jb21wb25lbnQnKTtccmlmIChjb21wb25lbnQpIHtccmlmICghY29tcG9uZW50Lmhhc0NsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJykpIHtccmJvZHkuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29tcG9uZW50LmFkZENsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb21wb25lbnQucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFNlbGVjdGVkLmNhbGwoc2VsZiwgZSwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9IGVsc2Uge1xyaWYgKCFzaWRlYmFyKSB7XHJib2R5LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItc2V0dGluZycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb250YWluZXItc2V0dGluZycsIGJ0bik7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGJvZHkuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBib2R5Lmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn1ccn0pO1xyYm9keS5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbnRhaW5lci1kdXBsaWNhdGUnLCBidG4pO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb250YWluZXIgPSAkKHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGJ0bi5wYXJlbnQoKS5oYXNDbGFzcygna2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXInKSkpO1xyY29udGFpbmVyLmFmdGVyKG5ld0NvbnRhaW5lcik7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccmxvZygnQ29udGFpbmVyIGlzIGR1cGxpY2F0ZWQnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckR1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb250YWluZXItZGVsZXRlJywgYnRuKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQpKSB7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbXBvbmVudHMgPSBjb250YWluZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxybGV0IHNldHRpbmdDb21wb25lbnQgPSBzZWxmLnNldHRpbmdDb21wb25lbnQ7XHJpZiAoc2V0dGluZ0NvbXBvbmVudCkge1xybGV0IHNldHRpbmdDb21wb25lbnRQYXJlbnQgPSBzZXR0aW5nQ29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHNldHRpbmdDb21wb25lbnRQYXJlbnQuaXMoY29udGFpbmVyKSkge1xybG9nKCdEZWxldGluZyBjb250YWluZXIgaXMgY29udGFpbmVyIG9mIHNldHRpbmcgY29udGFpbmVyLiBDbG9zZSBzZXR0aW5nIHBhbmVsIGZvciB0aGlzIHNldHRpbmcgY29tcG9uZW50Jywgc2V0dGluZ0NvbXBvbmVudCk7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIGlmIChjb250YWluZXIuaXMoc2VsZi5zZXR0aW5nQ29udGFpbmVyKSkge1xybG9nKCdEZWxldGluZyBjb250YWluZXIgaXMgc2V0dGluZyBjb250YWluZXIuIENsb3NlIHNldHRpbmcgcGFuZWwgZm9yIHRoaXMgY29udGFpbmVyJywgY29udGFpbmVyKTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJjb21wb25lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5kZWxldGVDb21wb25lbnQoJCh0aGlzKSk7XHJ9KTtccn1ccmNvbnRhaW5lci5yZW1vdmUoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckRlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEZWxldGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJib2R5Lm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybG9nKCdDbGljayBvbiAuYnRuLWNvbXBvbmVudC1zZXR0aW5nJywgYnRuKTtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoYm9keS5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2V0dGluZycpICYmIGJvZHkuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNpZGViYXInKSkge1xyaWYgKCFjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KCkpKSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbXBvbmVudCk7XHJ9IGVsc2Uge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbXBvbmVudCk7XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29tcG9uZW50LWR1cGxpY2F0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb21wb25lbnQtZHVwbGljYXRlJywgYnRuKTtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xybGV0IG5ld0NvbXBvbmVudCA9ICQoc2VsZi5nZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkpO1xyY29tcG9uZW50LmFmdGVyKG5ld0NvbXBvbmVudCk7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xybG9nKCdDb21wb25lbnQgaXMgZHVwbGljYXRlZCcpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudER1cGxpY2F0ZWQuY2FsbChzZWxmLCBjb21wb25lbnQsIG5ld0NvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmJvZHkub24oJ2NsaWNrJywgJy5idG4tY29tcG9uZW50LWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxvZygnQ2xpY2sgb24gLmJ0bi1jb21wb25lbnQtZGVsZXRlJywgYnRuKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbXBvbmVudFRleHQpKSB7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRhaW5lciA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVDb21wb25lbnREZWxldGVkLmNhbGwoc2VsZiwgZSwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoY29tcG9uZW50LmlzKHNlbGYuc2V0dGluZ0NvbXBvbmVudCkpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJzZWxmLmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJib2R5LmFkZENsYXNzKCdrZWRpdG9yLWNsaWNrcy1pbml0aWFsaXplZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyZXhwb3J0IGRlZmF1bHQgKC4uLmFyZ3MpID0+IHtccmlmIChjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ2Z1bmN0aW9uJyAmJiAkLmtlZGl0b3IuZGVidWcpIHtccmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnWyBLRWRpdG9yIF0gJywgLi4uYXJnc10pO1xyfVxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187Il0sInNvdXJjZVJvb3QiOiIifQ==