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
  // Width of mobile device
  // @option {Number}
  widthMobile: 320,
  // Width of tablet device
  // @option {Number}
  widthTablet: 768,
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
  // Content styles for iframe mode. Beside of this option, KEditor will add all elements which have 'data-type=keditor-style' for iframe stylesheet. These elements can be 'link', 'style' or any tags. If these elements have 'href' attribute, will create link tag with href. If these elements do not have 'href' attribute, will create style tag with css rule is html code inside element
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
  var btnMobile = $("<a href=\"javascript:void(0);\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-mobile\"></i></a>"));
  btnMobile.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
    self.iframeWrapper.css('width', options.widthMobile);
    btnMobile.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
  });
  var btnTablet = $("<a href=\"javascript:void(0);\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, "\"><i class=\"fa fa-fw fa-tablet\"></i></a>"));
  btnTablet.on('click', function (e) {
    e.preventDefault();
    topbarCenter.find(".".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE)).removeClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
    self.iframeWrapper.css('width', options.widthTablet);
    btnTablet.addClass(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE);
  });
  var btnDesktop = $("<a href=\"javascript:void(0);\" class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_BUTTON_ACTIVE, "\"><i class=\"fa fa-fw fa-desktop\"></i></a>"));
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
  self.topbar = $("\n<div class=\"".concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR, "\" id=\"").concat(topbarId, "\">\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_LEFT, "\">\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_CENTER, "\">\n</div>\n<div class=\"").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].UI, " ").concat(_constants_classNames__WEBPACK_IMPORTED_MODULE_0__["default"].TOPBAR_RIGHT, "\">\n</div>\n</div>\n"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvZ2V0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pZnJhbWUvaW5pdElmcmFtZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdG9wYmFyL2luaXREZXZpY2VTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhck1vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2JlYXV0aWZ5Q2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2tlZGl0b3IubGVzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiJdLCJuYW1lcyI6WyJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInRhcmdldCIsImlzRXhpc3RpbmciLCJpcyIsInNlbGYiLCJpc1NlY3Rpb24iLCJjb21wb25lbnQiLCJhZGRDbGFzcyIsIndyYXBJbm5lciIsIndyYXAiLCJwYXJlbnQiLCJpbml0Q29tcG9uZW50IiwiY29tcG9uZW50VHlwZSIsImdldENvbXBvbmVudFR5cGUiLCJjb21wb25lbnREYXRhIiwiS0VkaXRvciIsImNvbXBvbmVudHMiLCJkZXN0cm95IiwiY2FsbCIsInJlbW92ZSIsImNsb25lZENvbXBvbmVudCIsImNsb25lIiwiZGF0YUF0dHJpYnV0ZXMiLCJnZXREYXRhQXR0cmlidXRlcyIsImNvbnRlbnQiLCJpZnJhbWVXcmFwcGVyIiwiZmluZCIsImxlbmd0aCIsImlmcmFtZSIsImNoaWxkcmVuIiwiaGFzQ2xhc3MiLCJ1bndyYXAiLCJyZW1vdmVDbGFzcyIsImdldENvbnRlbnQiLCJjb21wb25lbnRDb250ZW50IiwiaHRtbCIsImVhY2giLCIkIiwiam9pbiIsIm9wdGlvbnMiLCJhdHRyIiwicmVwbGFjZSIsImRlZmF1bHRDb21wb25lbnRUeXBlIiwiZXJyb3IiLCJnZW5lcmF0ZUlkIiwib25CZWZvcmVJbml0Q29tcG9uZW50IiwiYXBwZW5kIiwiZ2VuZXJhdGVUb29sYmFyIiwiVE9PTEJBUl9UWVBFIiwiQ09NUE9ORU5UIiwic2V0dGluZ0VuYWJsZWQiLCJkeW5hbWljRWxlbWVudCIsImluaXREeW5hbWljQ29udGVudCIsImluaXQiLCJvbkluaXRDb21wb25lbnQiLCJjbG9zZXN0Iiwib25CZWZvcmVEeW5hbWljQ29udGVudExvYWQiLCJkeW5hbWljSHJlZiIsImRhdGEiLCJwYXJhbSIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqcVhIUiIsIm9uRHluYW1pY0NvbnRlbnRMb2FkZWQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJvbkR5bmFtaWNDb250ZW50RXJyb3IiLCJDTEFTU19OQU1FUyIsIlVJIiwiV1JBUFBFUiIsIkhJRERFTl9FTEVNRU5UIiwiU0lERUJBUiIsIlNJREVCQVJfSEVBREVSIiwiU0lERUJBUl9CT0RZIiwiU0lERUJBUl9USVRMRSIsIlNJREVCQVJfQ0xPU0VSIiwiU0lERUJBUl9PUEVORUQiLCJUT1BCQVIiLCJUT1BCQVJfTEVGVCIsIlRPUEJBUl9SSUdIVCIsIlRPUEJBUl9DRU5URVIiLCJUT1BCQVJfQlVUVE9OIiwiVE9QQkFSX0JVVFRPTl9BQ1RJVkUiLCJTRVRUSU5HIiwiU0VUVElOR19DT05UQUlORVIiLCJTRVRUSU5HX0ZPUk0iLCJTRVRUSU5HX0ZPUk1fQUNUSVZFIiwiQ09OVEVOVF9BUkVBU19XUkFQUEVSIiwiQ09OVEVOVF9BUkVBUyIsIkNPTlRFTlRfQVJFQSIsIklGUkFNRSIsIklGUkFNRV9XUkFQUEVSIiwiSUZSQU1FX0ZBS0VSIiwiSUZSQU1FX0NPVkVSX1dSQVBQRVIiLCJJRlJBTUVfQ09WRVIiLCJJRlJBTUVfQ09WRVJfSElEREVOIiwibmVzdGVkQ29udGFpbmVyRW5hYmxlZCIsImV4cGxpY2l0U25pcHBldEVuYWJsZWQiLCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudCIsImJ0bkFkZENvbnRlbnRUZXh0IiwiYnRuQWRkQ29udGFpbmVyVGV4dCIsImJ0bkFkZFN1YkNvbnRhaW5lclRleHQiLCJidG5BZGRDb21wb25lbnRUZXh0IiwiYnRuTW92ZUNvbnRhaW5lclRleHQiLCJidG5Nb3ZlQ29tcG9uZW50VGV4dCIsImJ0blNldHRpbmdDb250YWluZXJUZXh0IiwiYnRuU2V0dGluZ0NvbXBvbmVudFRleHQiLCJidG5EdXBsaWNhdGVDb250YWluZXJUZXh0IiwiYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dCIsImJ0bkRlbGV0ZUNvbnRhaW5lclRleHQiLCJidG5EZWxldGVDb21wb25lbnRUZXh0IiwiY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQiLCJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCIsIndpZHRoTW9iaWxlIiwid2lkdGhUYWJsZXQiLCJzbmlwcGV0c1VybCIsInNuaXBwZXRzRmlsdGVyRW5hYmxlZCIsInNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvciIsImNvbnRlbnRTdHlsZXMiLCJjb250ZW50QXJlYXNTZWxlY3RvciIsImNvbnRlbnRBcmVhc1dyYXBwZXIiLCJjb250YWluZXJTZXR0aW5nRW5hYmxlZCIsImNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24iLCJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uIiwiY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiIsIm9uUmVhZHkiLCJvblNuaXBwZXRzTG9hZGVkIiwicmVzcCIsIm9uU25pcHBldHNFcnJvciIsIm9uSW5pdElmcmFtZSIsImlmcmFtZUhlYWQiLCJpZnJhbWVCb2R5Iiwib25Db250ZW50Q2hhbmdlZCIsImV2ZW50Iiwib25CZWZvcmVJbml0Q29udGVudEFyZWEiLCJvbkluaXRDb250ZW50QXJlYSIsIm9uQmVmb3JlSW5pdENvbnRhaW5lciIsIm9uSW5pdENvbnRhaW5lciIsIm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCIsInNlbGVjdGVkQ29udGFpbmVyIiwib25Db250YWluZXJEZWxldGVkIiwib25Db250YWluZXJDaGFuZ2VkIiwiY2hhbmdlZENvbnRhaW5lciIsIm9uQ29udGFpbmVyRHVwbGljYXRlZCIsIm9yaWdpbmFsQ29udGFpbmVyIiwibmV3Q29udGFpbmVyIiwib25Db250YWluZXJTZWxlY3RlZCIsIm9uQ29udGFpbmVyU25pcHBldEFkZGVkIiwic2VsZWN0ZWRTbmlwcGV0Iiwib25Db21wb25lbnRSZWFkeSIsIm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCIsInNlbGVjdGVkQ29tcG9uZW50Iiwib25Db21wb25lbnREZWxldGVkIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2hhbmdlZENvbXBvbmVudCIsIm9uQ29tcG9uZW50RHVwbGljYXRlZCIsIm9yaWdpbmFsQ29tcG9uZW50IiwibmV3Q29tcG9uZW50Iiwib25Db21wb25lbnRTZWxlY3RlZCIsIm9uQ29tcG9uZW50U25pcHBldEFkZGVkIiwiQUxMIiwiQ09OVEFJTkVSIiwiU1VCX0NPTlRBSU5FUiIsIkNPTlRBSU5FUl9DT05URU5UIiwiU1VCX0NPTlRBSU5FUl9DT05URU5UIiwiaW5pdENvbnRhaW5lciIsImlzTmVzdGVkIiwiY29udGFpbmVySW5uZXIiLCJub3QiLCJjb250YWluZXJDb250ZW50IiwicmVtb3ZlQXR0ciIsImNvbnRhaW5lckNvbnRlbnRJbm5lciIsImNoaWxkIiwiZ2V0Q29tcG9uZW50Q29udGVudCIsImdldENvbnRhaW5lckNvbnRlbnQiLCJjb250YWluZXJDb250ZW50cyIsInBhcmVudHMiLCJpbml0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRUb29sYmFyIiwiYXBwZW5kVG8iLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm9wZW5Nb2RhbCIsIlNOSVBQRVRfVFlQRSIsInNvcnRhYmxlIiwiaGFuZGxlIiwiaGVscGVyIiwiaXRlbXMiLCJjb25uZWN0V2l0aCIsInRvbGVyYW5jZSIsInNvcnQiLCJyZWNlaXZlIiwidWkiLCJpdGVtIiwic3RhcnQiLCJzdG9wIiwiY29udmVydFRvQ29udGFpbmVyIiwiY29udmVydFRvQ29tcG9uZW50IiwiZG9udEluaXRUb29sYmFyIiwiY29udGVudEFyZWFJbm5lciIsImNvbnRlbnRBcmVhVG9vbGJhciIsImF4aXMiLCJjbG9zZVNpZGViYXIiLCJjb250ZW50RGF0YSIsImVsZW1lbnQiLCJ3cmFwcGVyIiwiYWZ0ZXIiLCJpZnJhbWVEb2MiLCJjb250ZW50cyIsImdldCIsIm9wZW4iLCJjbG9zZSIsImlmcmFtZVdpbmRvdyIsImNvbnRlbnRXaW5kb3ciLCJjb250ZW50RG9jdW1lbnQiLCJkZWZhdWx0VmlldyIsInN0eWxlcyIsInN0eWxlIiwiaWRTdHIiLCJocmVmIiwiaXNBcnJheSIsImkiLCJpZCIsInZhbCIsImluaXRDb250ZW50QXJlYXMiLCJpbml0SWZyYW1lQWN0aW9ucyIsImNvbnRlbnRBcmVhcyIsIm9yaWdpbmFsQ29udGVudCIsImVtcHR5IiwiaW5pdENvbnRlbnRBcmVhIiwiaW5zdGFuY2VzIiwiaW5BcnJheSIsInJlc3VsdCIsInB1c2giLCJzaWRlYmFyIiwiZ2V0Q2xpY2tlZEVsZW1lbnQiLCJtb2RhbCIsImJ0biIsInNldHRpbmdDb250YWluZXIiLCJvcGVuU2lkZWJhciIsImNvbmZpcm0iLCJzZXR0aW5nQ29tcG9uZW50Iiwic2V0dGluZ0NvbXBvbmVudFBhcmVudCIsImRlbGV0ZUNvbXBvbmVudCIsImNvdmVyIiwicHJlcGVuZCIsImZuIiwiY29uc29sZSIsImxvZyIsImtlZGl0b3IiLCJkZWJ1ZyIsImFyZ3MiLCJhcHBseSIsIm1lc3NhZ2UiLCJFcnJvciIsImNvbmZpZyIsImlzQ29tcG9uZW50Q29uZmlndXJhYmxlIiwiY2F0ZWdvcmllcyIsImJlYXV0aWZ5Q2F0ZWdvcmllcyIsImlnbm9yZUF0dHJpYnV0ZXMiLCJzZWxlY3RvciIsImluaXRJZnJhbWVDb3ZlciIsImluaXRUb3BiYXIiLCJpbml0RGV2aWNlU3dpdGNoZXIiLCJpbml0VG9wYmFyTW9kZXMiLCJpbml0U2lkZWJhciIsImluaXRTbmlwcGV0c01vZGFsIiwicmVuZGVyU25pcHBldHMiLCJpbml0U25pcHBldHNGaWx0ZXIiLCJzbmlwcGV0VHlwZSIsImNsb3NlTW9kYWwiLCJpbml0Q29udGVudEFyZWFXcmFwcGVyIiwic2V0Q29udGVudCIsInRpdGxlIiwicHJldmlld1VybCIsImFkZFNuaXBwZXQiLCJERUZBVUxUUyIsImJsYW5rIiwiaW5zdGFuY2UiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXJndW1lbnRzIiwid2luZG93IiwiY29uc3RydWN0b3IiLCJleHRlbmQiLCJtb2RhbFRhcmdldCIsIm1vZGFsQWN0aW9uIiwibW9kYWxJZCIsInNuaXBwZXRzV3JhcHBlckh0bWwiLCJzbmlwcGV0Q29udGVudEVsZW1lbnQiLCJzbmlwcGV0Q29udGVudCIsImlzQWRkaW5nQ29udGFpbmVyIiwiaXNBZGRpbmdDb21wb25lbnQiLCJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIiLCJtb2RhbFNuaXBwZXRUeXBlIiwiYm9keSIsImVxIiwic25pcHBldCIsImNzc1RyYW5zaXRpb25FbmQiLCJjc3MiLCJkb2N1bWVudCIsIm1vZGFsVGl0bGUiLCJzZXRUaW1lb3V0IiwianF1ZXJ5IiwiYWN0aXZlRm9ybSIsImFjdGl2ZVR5cGUiLCJoaWRlU2V0dGluZ0Zvcm0iLCJzZXRTZXR0aW5nQ29tcG9uZW50Iiwic2V0U2V0dGluZ0NvbnRhaW5lciIsInNpZGViYXJJZCIsInNpZGViYXJCb2R5IiwiZm9ybSIsInNpZGViYXJUaXRsZSIsInNldHRpbmdUaXRsZSIsInNldHRpbmdGb3JtQ2xhc3MiLCJzZXR0aW5nRm9ybSIsImluaXRTZXR0aW5nRm9ybSIsImxvYWRpbmdUZXh0IiwiaW5pdEZ1bmN0aW9uIiwid2hlbiIsImRvbmUiLCJzaG93U2V0dGluZ0Zvcm0iLCJleHRyYURhdGEiLCJyZW5kZXJTbmlwcGV0Iiwic25pcHBldFByZXZpZXdIdG1sIiwic25pcHBldENvbnRlbnRIdG1sIiwic25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzIiwic25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzIiwic25pcHBldHNDYXRlZ29yaWVzIiwiaW5kZXhPZiIsImZpbHRlclR5cGUiLCJyZW5kZXJTbmlwcGV0RmlsdGVyIiwiY2F0ZWdvcmllc09wdGlvbnMiLCJzbmlwcGV0c1dyYXBwZXIiLCJ0cmlnZ2VyIiwidHh0U2VhcmNoIiwiY2JiRmlsdGVyIiwiZG9GaWx0ZXIiLCJzZWxlY3RlZENhdGVnb3J5IiwidG9Mb3dlckNhc2UiLCJzZWFyY2hUZXh0Iiwic25pcHBldHMiLCJmaWx0ZXIiLCJkYXRhQ2F0ZWdvcmllc1N0cmluZyIsImRhdGFDYXRlZ29yaWVzIiwic3BsaXQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsInNuaXBwZXRJZCIsImNvbmNhdCIsInNuaXBwZXRzV3JhcHBlclNlbGVjdG9yIiwiY2F0ZWdvcnkiLCJzbmlwcGV0c0NvbnRhaW5lckh0bWwiLCJzbmlwcGV0c0NvbXBvbmVudEh0bWwiLCJzbmlwcGV0c0NvbnRlbnRIdG1sIiwidHJpbSIsInRvcGJhckNlbnRlciIsImJ0bk1vYmlsZSIsImJ0blRhYmxldCIsImJ0bkRlc2t0b3AiLCJ0b3BiYXJJZCIsInRvcGJhciIsInRvcGJhckxlZnQiLCJ0b3BiYXJSaWdodCIsIm5ld0FycmF5IiwidGltZXN0YW1wIiwiRGF0ZSIsImdldFRpbWUiLCJyYW5kb20iLCJNYXRoIiwicm91bmQiLCJzZXR0aW5nQnRuIiwidG9vbGJhckNsYXNzIiwiYXR0cmli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Ozs7Ozs7OztBQ1ZEO0FBQWUseUVBQVV0RCxNQUFWLEVBQWtCd1EsZ0JBQWxCLEVBQW9DdkMsT0FBcEMsRUFBNkM7QUFDNUQsTUFBSTVNLGNBQWMsR0FBRzRNLE9BQU8sR0FBRyxFQUFILEdBQVEsRUFBcEM7O0FBQ0EsTUFBSSxDQUFDdUMsZ0JBQUwsRUFBdUI7QUFDdkJBLG9CQUFnQixHQUFHLEVBQW5CO0FBQ0M7O0FBQ0RwTyxHQUFDLENBQUNELElBQUYsQ0FBT25DLE1BQU0sQ0FBQ3NOLEdBQVAsQ0FBVyxDQUFYLEVBQWNxSyxVQUFyQixFQUFpQyxVQUFVekosQ0FBVixFQUFhM0wsSUFBYixFQUFtQjtBQUNwRCxRQUFJQSxJQUFJLENBQUNxVixJQUFMLENBQVU3QyxPQUFWLENBQWtCLE9BQWxCLE1BQStCLENBQS9CLElBQW9DM1MsQ0FBQyxDQUFDd00sT0FBRixDQUFVck0sSUFBSSxDQUFDcVYsSUFBZixFQUFxQnBILGdCQUFyQixNQUEyQyxDQUFDLENBQXBGLEVBQXVGO0FBQ3ZGLFVBQUl2QyxPQUFKLEVBQWE7QUFDYjVNLHNCQUFjLENBQUN5TixJQUFmLFdBQXVCdk0sSUFBSSxDQUFDcVYsSUFBNUIsZ0JBQXFDclYsSUFBSSxDQUFDc1YsS0FBMUM7QUFDQyxPQUZELE1BRU87QUFDUHhXLHNCQUFjLENBQUNrQixJQUFJLENBQUNxVixJQUFOLENBQWQsR0FBNEJyVixJQUFJLENBQUNzVixLQUFqQztBQUNDO0FBQ0E7QUFDQSxHQVJEO0FBU0EsU0FBT3hXLGNBQVA7QUFDQztBQUFBLEM7Ozs7Ozs7Ozs7O0FDZkQsdUM7Ozs7Ozs7Ozs7O0FDQUEsb0QiLCJmaWxlIjoianMva2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJqUXVlcnlcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpRdWVyeVwiKSkgOiBmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9rZWRpdG9yL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZykge1xyaWYgKHRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhcicpKSB7XHJyZXR1cm47XHJ9XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgaXNTZWN0aW9uID0gdGFyZ2V0LmlzKCdzZWN0aW9uJyk7XHJsZXQgY29tcG9uZW50O1xyaWYgKGlzU2VjdGlvbikge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50Jyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj4nKTtccmNvbXBvbmVudCA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj48L3NlY3Rpb24+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0LnBhcmVudCgpLnBhcmVudCgpO1xyfVxyaWYgKGlzRXhpc3RpbmcpIHtccmNvbXBvbmVudC5hZGRDbGFzcygnZXhpc3RpbmctY29tcG9uZW50Jyk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmRlc3Ryb3kgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuZGVzdHJveS5jYWxsKGNvbXBvbmVudERhdGEsIGNvbXBvbmVudCwgc2VsZik7XHJ9XHJjb21wb25lbnQucmVtb3ZlKCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjbG9uZWRDb21wb25lbnQgPSBjb21wb25lbnQuY2xvbmUoKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNsb25lZENvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY2xvbmVkQ29tcG9uZW50LCBudWxsLCB0cnVlKTtccmxldCBjb250ZW50O1xyLy8gSGFuZGxlIGlmcmFtZS13cmFwcGVyXHJsZXQgaWZyYW1lV3JhcHBlciA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyaWYgKGlmcmFtZVdyYXBwZXIubGVuZ3RoID4gMCkge1xyaWZyYW1lV3JhcHBlci5maW5kKCcua2VkaXRvci1pZnJhbWUtY292ZXInKS5yZW1vdmUoKTtccmxldCBpZnJhbWUgPSBpZnJhbWVXcmFwcGVyLmNoaWxkcmVuKCdpZnJhbWUnKTtccmlmIChpZnJhbWVXcmFwcGVyLmhhc0NsYXNzKCdrZWRpdG9yLWlmcmFtZS13cmFwcGVyLWZha2UnKSkge1xyaWZyYW1lLnVud3JhcCgpO1xyfSBlbHNlIHtccmlmcmFtZVdyYXBwZXIucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInKTtccn1ccn1ccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5nZXRDb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XHJjb250ZW50ID0gY29tcG9uZW50RGF0YS5nZXRDb250ZW50LmNhbGwoY29tcG9uZW50RGF0YSwgY2xvbmVkQ29tcG9uZW50LCBzZWxmKTtccn0gZWxzZSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNsb25lZENvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbnRlbnQgPSBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn1ccmNsb25lZENvbXBvbmVudC5odG1sKGNvbnRlbnQpLmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcciQodGhpcykuaHRtbCgnJyk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24gJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PiR7Y2xvbmVkQ29tcG9uZW50Lmh0bWwoKX08L3NlY3Rpb24+YDtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50VHlwZSA9IChjb21wb25lbnQuYXR0cignZGF0YS10eXBlJykgfHwgJycpLnJlcGxhY2UoJ2NvbXBvbmVudC0nLCAnJyk7XHJpZiAoY29tcG9uZW50VHlwZSAmJiAoY29tcG9uZW50VHlwZSBpbiBLRWRpdG9yLmNvbXBvbmVudHMpKSB7XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn0gZWxzZSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdzdHJpbmcnKSB7XHJjb21wb25lbnRUeXBlID0gb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZTtccn0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUgPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlLmNhbGwoc2VsZiwgY29tcG9uZW50KTtccn1ccmlmICghY29tcG9uZW50VHlwZSkge1xyc2VsZi5lcnJvcignQ29tcG9uZW50IHR5cGUgaXMgdW5kZWZpbmVkIScpO1xyfVxycmV0dXJuIGNvbXBvbmVudFR5cGU7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKSB8fCAhY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKSkge1xyY29tcG9uZW50LmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb21wb25lbnQnKTtccmNvbXBvbmVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJjb21wb25lbnQuYXBwZW5kKHNlbGYuZ2VuZXJhdGVUb29sYmFyKFRPT0xCQVJfVFlQRS5DT01QT05FTlQsIGNvbXBvbmVudERhdGEuc2V0dGluZ0VuYWJsZWQpKTtccmNvbXBvbmVudC5maW5kKCdbZGF0YS1keW5hbWljLWhyZWZdJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgZHluYW1pY0VsZW1lbnQgPSAkKHRoaXMpO1xyc2VsZi5pbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpO1xyfSk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdCA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5pbml0LmNhbGwoY29tcG9uZW50RGF0YSwgY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBzZWxmKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRDb21wb25lbnQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0Q29tcG9uZW50LmNhbGwoc2VsZiwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29tcG9uZW50Jyk7XHJjb21wb25lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGNvbXBvbmVudCA9IGR5bmFtaWNFbGVtZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGVudC1hcmVhJyk7XHJkeW5hbWljRWxlbWVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBkeW5hbWljSHJlZiA9IGR5bmFtaWNFbGVtZW50LmF0dHIoJ2RhdGEtZHluYW1pYy1ocmVmJyk7XHJsZXQgZGF0YSA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoY29tcG9uZW50LCBbJ2RhdGEtdHlwZScsICdkYXRhLWR5bmFtaWMtaHJlZiddLCBmYWxzZSk7XHJkYXRhID0gJC5wYXJhbShkYXRhKTtccnJldHVybiAkLmFqYXgoe1xydXJsOiBkeW5hbWljSHJlZixccmRhdGE6IGRhdGEsXHJ0eXBlOiAnR0VUJyxccmRhdGFUeXBlOiAnSFRNTCcsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UsIHN0YXR1cywganFYSFIpIHtccmR5bmFtaWNFbGVtZW50Lmh0bWwocmVzcG9uc2UpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZC5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfSxccmVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50RXJyb3IuY2FsbChzZWxmLCBkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyXG59O1xyXG4iLCJjb25zdCBDTEFTU19OQU1FUyA9IHtcclVJOiAna2VkaXRvci11aScsXHJXUkFQUEVSOiAna2VkaXRvci13cmFwcGVyJyxcckhJRERFTl9FTEVNRU5UOiAna2VkaXRvci1oaWRkZW4tZWxlbWVudCcsXHJTSURFQkFSOiAna2VkaXRvci1zaWRlYmFyJyxcclNJREVCQVJfSEVBREVSOiAna2VkaXRvci1zaWRlYmFyLWhlYWRlcicsXHJTSURFQkFSX0JPRFk6ICdrZWRpdG9yLXNpZGViYXItYm9keScsXHJTSURFQkFSX1RJVExFOiAna2VkaXRvci1zaWRlYmFyLXRpdGxlJyxcclNJREVCQVJfQ0xPU0VSOiAna2VkaXRvci1zaWRlYmFyLWNsb3NlcicsXHJTSURFQkFSX09QRU5FRDogJ29wZW5lZCcsXHJUT1BCQVI6ICdrZWRpdG9yLXRvcGJhcicsXHJUT1BCQVJfTEVGVDogJ2tlZGl0b3ItdG9wYmFyLWxlZnQnLFxyVE9QQkFSX1JJR0hUOiAna2VkaXRvci10b3BiYXItcmlnaHQnLFxyVE9QQkFSX0NFTlRFUjogJ2tlZGl0b3ItdG9wYmFyLWNlbnRlcicsXHJUT1BCQVJfQlVUVE9OOiAna2VkaXRvci10b3BiYXItYnRuJyxcclRPUEJBUl9CVVRUT05fQUNUSVZFOiAnYWN0aXZlJyxcclNFVFRJTkc6ICdrZWRpdG9yLXNldHRpbmcnLFxyU0VUVElOR19DT05UQUlORVI6ICdrZWRpdG9yLXNldHRpbmctY29udGFpbmVyJyxcclNFVFRJTkdfRk9STTogJ2tlZGl0b3Itc2V0dGluZy1mb3JtJyxcclNFVFRJTkdfRk9STV9BQ1RJVkU6ICdhY3RpdmUnLFxyQ09OVEVOVF9BUkVBU19XUkFQUEVSOiAna2VkaXRvci1jb250ZW50LWFyZWFzLXdyYXBwZXInLFxyQ09OVEVOVF9BUkVBUzogJ2tlZGl0b3ItY29udGVudC1hcmVhcycsXHJDT05URU5UX0FSRUE6ICdrZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJJRlJBTUU6ICdrZWRpdG9yLWlmcmFtZScsXHJJRlJBTUVfV1JBUFBFUjogJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXInLFxySUZSQU1FX0ZBS0VSOiAna2VkaXRvci1pZnJhbWUtZmFrZXInLFxySUZSQU1FX0NPVkVSX1dSQVBQRVI6ICdrZWRpdG9yLWlmcmFtZS1jb3Zlci13cmFwcGVyJyxccklGUkFNRV9DT1ZFUjogJ2tlZGl0b3ItaWZyYW1lLWNvdmVyJyxccklGUkFNRV9DT1ZFUl9ISURERU46ICdoaWRkZW4tY292ZXInLFxyQ09NUE9ORU5UOiAna2VkaXRvci1jb21wb25lbnQnLFxyXG59O1xyZXhwb3J0IGRlZmF1bHQgQ0xBU1NfTkFNRVM7XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQge1xyLy8gRW5hYmxlIG5lc3RlZCBjb250YWluZXIgb3Igbm90XHIvLyBAb3B0aW9uIHtCb29sZWFufVxybmVzdGVkQ29udGFpbmVyRW5hYmxlZDogdHJ1ZSxcci8vIEVuYWJsZSBleHBsaWNpdCBzbmlwcGV0IG9yIG5vdC4gV2hlbiBkaXNhYmxlLCB0aGVyZSBpcyBvbmx5IG9uZSBidXR0b24gZm9yIGFkZGluZy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBjb250ZW50IGFyZWEgb3IgY29udGFpbmVyLCB5b3UgY2FuIGFkZCBjb21wb25lbnQgb3IgY29udGFpbmVycy4gSWYgYWRkIGJ1dHRvbiBpcyBpbiBzdWItY29udGFpbmVyLCB5b3UganVzdCBjYW4gYWRkIG9ubHkgY29tcG9uZW50LiBXaGVuIHlvdSBhZGQgY29tcG9uZW50IGluIGNvbnRlbnQgYXJlYSwgcGxlYXNlIG1ha2Ugc3VyZSB5b3UgY29uZmlnIFwiY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnRcIiBvcHRpb25cci8vIEBvcHRpb24ge0Jvb2xlYW59XHJleHBsaWNpdFNuaXBwZXRFbmFibGVkOiBmYWxzZSxcci8vIGNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IFRoZSBjb250YWluZXIgc25pcHBldCB3aGljaCB3aWxsIGJlIGFkZGVkIGF1dG9tYXRpY2FsbHkgaW4gY29udGVudCBhcmUgd2hlbiB5b3UgYWRkaW5nIGEgY29tcG9uZW50LiBOb3RlOiBjb21wb25lbnQgd2lsbCBiZSBhZGRlZCBpbiBmaXJzdCBjb250YWluZXIgY29udGVudCBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50OiBgXHI8ZGl2IGNsYXNzPVwicm93XCI+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCIgZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIj5ccjwvZGl2PlxyPC9kaXY+XHJgLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29udGVudCBidXR0b24uIFRoaXMgYXZhaWxhYmxlIG9ubHkgd2hlbiBcImV4cGxpY2l0U2lwcGV0RW5hYmxlZFwiIGlzIFwiZmFsc2VcIlxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29udGVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgYWRkIGNvbnRhaW5lciBidXR0b25cci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkFkZENvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgc3ViLWNvbnRhaW5lciBidXR0b25cci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkFkZFN1YkNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXBsdXNcIj48L2k+IDxpIGNsYXNzPVwiZmEgZmEtZncgZmEtY29sdW1uc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29tcG9uZW50IGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1saXN0LXVsXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIG1vdmUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuTW92ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXNvcnRcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5Nb3ZlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtYXJyb3dzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuU2V0dGluZ0NvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBzZXR0aW5nIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0blNldHRpbmdDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1jb2dcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZHVwbGljYXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkR1cGxpY2F0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWZpbGVzLW9cIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkRlbGV0ZUNvbnRhaW5lclRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGRlbGV0ZSBidXR0b24gb2YgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5EZWxldGVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS10aW1lc1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBjb25maXJtIGRpYWxvZyB3aGVuIGRlbGV0aW5nIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQ6ICdBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjb250YWluZXI/IFRoaXMgYWN0aW9uIGNhbiBub3QgYmUgdW5kb25lIScsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbXBvbmVudD8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8vIFdpZHRoIG9mIG1vYmlsZSBkZXZpY2Vcci8vIEBvcHRpb24ge051bWJlcn1ccndpZHRoTW9iaWxlOiAzMjAsXHIvLyBXaWR0aCBvZiB0YWJsZXQgZGV2aWNlXHIvLyBAb3B0aW9uIHtOdW1iZXJ9XHJ3aWR0aFRhYmxldDogNzY4LFxyLy8gRGVmYXVsdCBjb21wb25lbnQgdHlwZSBvZiBjb21wb25lbnQuIElmIHR5cGUgb2YgY29tcG9uZW50IGRvZXMgbm90IGV4aXN0IGluIEtFZGl0b3IuY29tcG9uZW50cywgd2lsbCBiZSB1c2VkIFwiZGVmYXVsdENvbXBvbmVudFR5cGVcIiBhcyB0eXBlIG9mIHRoaXMgY29tcG9uZW50LiBJZiBpcyBmdW5jdGlvbiwgYXJndW1lbnQgaXMgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtTdHJpbmd8RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHJkZWZhdWx0Q29tcG9uZW50VHlwZTogJ2JsYW5rJyxcci8vIFVybCB0byBzbmlwcGV0cyBmaWxlXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJzbmlwcGV0c1VybDogJ3NuaXBwZXRzL3NuaXBwZXRzLmh0bWwnLFxyLy8gRW5hYmxlIGZpbHRlcmluZyBzbmlwcGV0cyBieSBjYXRlZ29yaWVzIGFuZCB0ZXh0IHNlYXJjaGluZyBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJzbmlwcGV0c0ZpbHRlckVuYWJsZWQ6IHRydWUsXHIvLyBUaGUgc2VwYXJhdG9yIGNoYXJhY3RlciBiZXR3ZWVuIGVhY2ggY2F0ZWdvcmllc1xyLy8gQG9wdGlvbiB7U3RyaW5nfVxyc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yOiAnOycsXHIvLyBDb250ZW50IHN0eWxlcyBmb3IgaWZyYW1lIG1vZGUuIEJlc2lkZSBvZiB0aGlzIG9wdGlvbiwgS0VkaXRvciB3aWxsIGFkZCBhbGwgZWxlbWVudHMgd2hpY2ggaGF2ZSAnZGF0YS10eXBlPWtlZGl0b3Itc3R5bGUnIGZvciBpZnJhbWUgc3R5bGVzaGVldC4gVGhlc2UgZWxlbWVudHMgY2FuIGJlICdsaW5rJywgJ3N0eWxlJyBvciBhbnkgdGFncy4gSWYgdGhlc2UgZWxlbWVudHMgaGF2ZSAnaHJlZicgYXR0cmlidXRlLCB3aWxsIGNyZWF0ZSBsaW5rIHRhZyB3aXRoIGhyZWYuIElmIHRoZXNlIGVsZW1lbnRzIGRvIG5vdCBoYXZlICdocmVmJyBhdHRyaWJ1dGUsIHdpbGwgY3JlYXRlIHN0eWxlIHRhZyB3aXRoIGNzcyBydWxlIGlzIGh0bWwgY29kZSBpbnNpZGUgZWxlbWVudFxyLy8gQG9wdGlvbiB7QXJyYXk8T2JqZWN0Pn1cci8vIEBleGFtcGxlOlxyLy8gW1xyLy8gICAgIHtcci8vICAgICAgICAgaHJlZjogJy9wYXRoL3RvL3N0eWxlL2ZpbGUnXHIvLyAgICAgfSwge1xyLy8gICAgICAgICBjb250ZW50OiAnYSB7IGNvbG9yOiByZWQ7IH0nXHIvLyAgICAgfVxyLy8gXVxyY29udGVudFN0eWxlczogW10sXHIvLyBTZWxlY3RvciBvZiBjb250ZW50IGFyZWFzLiBJZiBpcyBudWxsIG9yIHNlbGVjdG9yIGRvZXMgbm90IG1hdGNoIGFueSBlbGVtZW50cywgd2lsbCBjcmVhdGUgZGVmYXVsdCBjb250ZW50IGFyZWEgYW5kIHdyYXAgYWxsIGNvbnRlbnQgaW5zaWRlIGl0LlxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29udGVudEFyZWFzU2VsZWN0b3I6IG51bGwsXHIvLyBUaGUgd3JhcHBlciBlbGVtZW50IGZvciBhbGwgY29udGVudHMgaW5zaWRlIGlmcmFtZSBvciBuZXcgZGl2IHdoaWNoIHdpbGwgY29udGFpbnMgY29udGVudCBvZiB0ZXh0YXJlYS4gSXQncyBqdXN0IGZvciBkaXNwbGF5aW5nIHB1cnBvc2UuIElmIHlvdSB3YW50IGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIGFyZSBhcHBlbmRlZCBpbnRvIGJvZHkgdGFnLCBqdXN0IGxlYXZlIGl0IGFzIGJsYW5rXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb250ZW50QXJlYXNXcmFwcGVyOiBgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuQ09OVEVOVF9BUkVBU19XUkFQUEVSfVwiPjwvZGl2PmAsXHIvLyBFbmFibGUgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtCb29sZWFufVxyY29udGFpbmVyU2V0dGluZ0VuYWJsZWQ6IGZhbHNlLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbjogbnVsbCxcci8vIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBzaG93ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IHNldHRpbmdGb3JtXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbjogbnVsbCxcci8vIE1ldGhvZCB3aWxsIGJlIGNhbGxlZCB3aGVuIHNldHRpbmcgcGFuZWwgZm9yIGNvbnRhaW5lciBpcyBoaWRkZW5cci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IHNldHRpbmdGb3JtXHIvLyBAcGFyYW0ge0tFZGl0b3J9IGtlZGl0b3JJbnN0YW5jZVxyY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbjogbnVsbCxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGtlZGl0b3IgaW5zdGFuY2UgaXMgcmVhZHlcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyb25SZWFkeTogZnVuY3Rpb24gKCkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIHNuaXBwZXRzIGFyZSBsb2FkZWQuIElmIHlvdSB3YW50IHRvIG1vZGlmeSBzbmlwcGV0cyBjb250ZW50LCBwbGVhc2UgcmV0dXJuIG1vZGlmaWVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7U3RyaW5nfSByZXNwXHIvLyBAcmV0dXJuIHtTdHJpbmd9XHJvblNuaXBwZXRzTG9hZGVkOiBmdW5jdGlvbiAocmVzcCkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gZXJyb3IgaW4gbG9hZGluZyBzbmlwcGV0c1xyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pxWEhSfSBqcVhIUlxyb25TbmlwcGV0c0Vycm9yOiBmdW5jdGlvbiAoanFYSFIpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBpZnJhbWUgYW5kIGNvbnRlbnQgYXJlYXMgd3JhcHBlciBpbnNpZGUgaXQgYXJlIGNyZWF0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZVxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZUhlYWRcci8vIEBwYXJhbSB7alF1ZXJ5fSBpZnJhbWVCb2R5XHJvbkluaXRJZnJhbWU6IGZ1bmN0aW9uIChpZnJhbWUsIGlmcmFtZUhlYWQsIGlmcmFtZUJvZHkpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgaXMgY2hhbmdlZC4gSW5jbHVkZXMgYWRkLCBkZWxldGUsIGR1cGxpY2F0ZSBjb250YWluZXIgb3IgY29tcG9uZW50LiBPciBjb250ZW50IG9mIGEgY29tcG9uZW50IGlzIGNoYW5nZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250ZW50Q2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVJbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRlbnQgYXJlYS4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGNvbnRhaW5lciBpbiBjb250ZW50IGFyZWEuIEJ5IGRlZmF1bHQsIGFsbCBmaXJzdCBsZXZlbCBzZWN0aW9ucyB1bmRlciBjb250ZW50IGFyZWEgd2lsbCBiZSBpbml0aWFsaXplZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uSW5pdENvbnRlbnRBcmVhOiBmdW5jdGlvbiAoY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlSW5pdENvbnRhaW5lcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb250YWluZXIuIEl0IGNhbiByZXR1cm4gYXJyYXkgb2YgalF1ZXJ5IG9iamVjdHMgd2hpY2ggd2lsbCBiZSBpbml0aWFsaXplZCBhcyBlZGl0YWJsZSBjb21wb25lbnRzIGluIGNvbnRhaW5lciBjb250ZW50IChOT1RFOiB0aGVzZSBvYmplY3RzIE1VU1QgYmUgdW5kZXIgZWxlbWVudHMgd2hpY2ggaGF2ZSBhdHRyaWJ1dGUgZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIikuIEJ5IGRlZmF1bHQsIGFsbCBmaXJzdCBsZXZlbCBzZWN0aW9ucyB1bmRlciBjb250YWluZXIgY29udGVudCB3aWxsIGJlIGluaXRpYWxpemVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBjb250YWluZXIgaXMgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBjb250YWluZXIgYW5kIGl0cyBjb21wb25lbnRzIGFyZSBhbHJlYWR5IGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckRlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBjb250ZW50IG9mIGNvbnRhaW5lciBpcyBjaGFuZ2VkLiBJdCBjYW4gYmUgd2hlbiBjb250YWluZXIgcmVjZWl2ZWQgbmV3IGNvbXBvbmVudCBmcm9tIHNuaXBwZXQgb3IgZnJvbSBvdGhlciBjb250YWluZXIuIE9yIGNvbnRlbnQgb2YgYW55IGNvbXBvbmVudHMgYXJlIGNoYW5nZWQgb3IgYW55IGNvbXBvbmVudHMgYXJlIGRlbGV0ZWQgb3IgZHVwbGljYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNoYW5nZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBpcyBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gb3JpZ2luYWxDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJEdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBpcyBzZWxlY3RlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyU2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbnRhaW5lciBzbmlwcGV0IGlzIGFkZGVkIGluIGEgY29udGVudCBhcmVhXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gbmV3Q29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRTbmlwcGV0XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyU25pcHBldEFkZGVkOiBmdW5jdGlvbiAoZXZlbnQsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyBpbml0aWFsaXplZC4gVGhpcyBjYWxsYmFjayBpcyBhdmFpbGFibGUgb3Igbm90IGlzIGRlcGVuZCBvbiBjb21wb25lbnQgdHlwZSBoYW5kbGVyLlxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHJvbkNvbXBvbmVudFJlYWR5OiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb21wb25lbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29tcG9uZW50XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29tcG9uZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBhIGNvbXBvbmVudCBpcyBkZWxldGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVDb21wb25lbnREZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IGlzIGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBjb250ZW50IG9mIGEgY29tcG9uZW50IGlzIGNoYW5nZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjaGFuZ2VkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50Q2hhbmdlZDogZnVuY3Rpb24gKGV2ZW50LCBjaGFuZ2VkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgZHVwbGljYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IG9yaWdpbmFsQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gbmV3Q29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50RHVwbGljYXRlZDogZnVuY3Rpb24gKGV2ZW50LCBvcmlnaW5hbENvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gYSBjb21wb25lbnQgaXMgc2VsZWN0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudFNlbGVjdGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29tcG9uZW50LCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGEgY29tcG9uZW50IHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250YWluZXJcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZFNuaXBwZXRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnRTbmlwcGV0QWRkZWQ6IGZ1bmN0aW9uIChldmVudCwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGxvYWRpbmcgZHluYW1pYyBjb250ZW50XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgZHluYW1pYyBjb250ZW50IGlzIGxvYWRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcci8vIEBwYXJhbSB7anFYSFJ9ICwganFYSFJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25EeW5hbWljQ29udGVudExvYWRlZDogZnVuY3Rpb24gKGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBpZiBsb2FkaW5nIGR5bmFtaWMgY29udGVudCBpcyBlcnJvciwgYWJvcnQgb3IgdGltZW91dFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gZHluYW1pY0VsZW1lbnRcci8vIEBwYXJhbSB7anFYSFJ9ICwganFYSFJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25EeW5hbWljQ29udGVudEVycm9yOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfVxyXG59O1xyIiwiZXhwb3J0IGRlZmF1bHQge1xyQUxMOiAwLFxyQ09OVEFJTkVSOiAxLFxyQ09NUE9ORU5UOiAyXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcckNPTlRFTlRfQVJFQTogMCxcckNPTlRBSU5FUjogMSxcclNVQl9DT05UQUlORVI6IDIsXHJDT05UQUlORVJfQ09OVEVOVDogMyxcclNVQl9DT05UQUlORVJfQ09OVEVOVDogNCxcckNPTVBPTkVOVDogNVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIHRhcmdldCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRhaW5lcjtccmlmICh0YXJnZXQuaXMoJ3NlY3Rpb24nKSkge1xydGFyZ2V0LmFkZENsYXNzKCdrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyJyk7XHJ0YXJnZXQud3JhcElubmVyKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQ7XHJ9IGVsc2Uge1xydGFyZ2V0LndyYXAoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lclwiPjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb250YWluZXIgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIGNvbnRhaW5lcik7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVySW5uZXIgPSBjb250YWluZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRhaW5lci1pbm5lcicpLmNsb25lKCk7XHJjb250YWluZXJJbm5lci5maW5kKCdbZGF0YS10eXBlPWNvbnRhaW5lci1jb250ZW50XScpLm5vdChpc05lc3RlZCA/ICcnIDogJy5rZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCcpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lckNvbnRlbnQgPSAkKHRoaXMpO1xyY29udGFpbmVyQ29udGVudC5yZW1vdmVDbGFzcygna2VkaXRvci1jb250YWluZXItY29udGVudCBrZWRpdG9yLXN1Yi1jb250YWluZXItY29udGVudCB1aS1zb3J0YWJsZScpLnJlbW92ZUF0dHIoJ2lkJyk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gY29udGFpbmVyQ29udGVudC5jaGlsZHJlbigpO1xybGV0IGNvbnRlbnQgPSAnJztccmNvbnRhaW5lckNvbnRlbnRJbm5lci5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNoaWxkID0gJCh0aGlzKTtccmlmIChjaGlsZC5pcygnLmtlZGl0b3ItY29tcG9uZW50JykpIHtccmNvbnRlbnQgKz0gc2VsZi5nZXRDb21wb25lbnRDb250ZW50KGNoaWxkKTtccn0gZWxzZSBpZiAoY2hpbGQuaXMoJy5rZWRpdG9yLXN1Yi1jb250YWluZXInKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50Lmh0bWwoY29udGVudCk7XHJ9KTtccnJldHVybiBgPHNlY3Rpb24+JHtjb250YWluZXJJbm5lci5odG1sKCl9PC9zZWN0aW9uPmA7XHJcbn0iLCJpbXBvcnQgVE9PTEJBUl9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvdG9vbGJhclR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBpc05lc3RlZCA9IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCAmJiBjb250YWluZXIuY2xvc2VzdCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMDtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpIHx8ICFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb250YWluZXIuY2FsbChzZWxmLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLXN1Yi1jb250YWluZXInKTtccn1ccmNvbnRhaW5lci5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoaXNOZXN0ZWQgPyBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUiA6IFRPT0xCQVJfVFlQRS5DT05UQUlORVIpKTtccmNvbnRhaW5lci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmxldCBjb250YWluZXJDb250ZW50cyA9IGNvbnRhaW5lci5maW5kKCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKTtccmNvbnRhaW5lckNvbnRlbnRzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRhaW5lckNvbnRlbnQgPSAkKHRoaXMpO1xyaWYgKG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCAmJiAhaXNOZXN0ZWQgJiYgY29udGFpbmVyQ29udGVudC5wYXJlbnRzKCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwKSB7XHIvLyBEbyBub3RoaW5nIGJlY2F1c2UgaXQncyBjb250YWluZXIgY29udGVudCBvZiBzdWIgY29udGFpbmVyXHJyZXR1cm47XHJ9XHJzZWxmLmluaXRDb250YWluZXJDb250ZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKTtccn0pO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbnRhaW5lciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb250YWluZXIuY2FsbChzZWxmLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb250YWluZXInKTtccmNvbnRhaW5lci5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJjb250YWluZXJDb250ZW50LmFkZENsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50Jyk7XHJpZiAoaXNOZXN0ZWQpIHtccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50Jyk7XHJ9XHJjb250YWluZXJDb250ZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRJbm5lciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyXCI+PC9kaXY+Jyk7XHJjb250YWluZXJDb250ZW50SW5uZXIuaHRtbChjb250YWluZXJDb250ZW50Lmh0bWwoKSk7XHJjb250YWluZXJDb250ZW50Lmh0bWwoY29udGFpbmVyQ29udGVudElubmVyKTtccmxldCBjb250YWluZXJDb250ZW50VG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoaXNOZXN0ZWQgPyBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UKSk7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5hcHBlbmRUbyhjb250YWluZXJDb250ZW50KTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmlmICghaXNOZXN0ZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmNoaWxkcmVuKCcuYnRuLWFkZC1jb250YWluZXInKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBTTklQUEVUX1RZUEUuQ09OVEFJTkVSKTtccn0pO1xyfVxyfVxyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbXBvbmVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT01QT05FTlQpO1xyfSk7XHJ9IGVsc2Uge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGFpbmVyQ29udGVudElubmVyLCBpc05lc3RlZCA/IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgOiBvcHRpb25zLm5lc3RlZENvbnRhaW5lckVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQUxMIDogU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn1ccmNvbnRhaW5lckNvbnRlbnRJbm5lci5zb3J0YWJsZSh7XHJoYW5kbGU6ICcuYnRuLWNvbXBvbmVudC1yZXBvc2l0aW9uLCAuYnRuLWNvbnRhaW5lci1yZXBvc2l0aW9uJyxccmhlbHBlcjogJ2Nsb25lJyxccml0ZW1zOiAnPiBzZWN0aW9uJyxccmNvbm5lY3RXaXRoOiAnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInLFxydG9sZXJhbmNlOiAncG9pbnRlcicsXHJzb3J0OiBmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0Jyk7XHJ9LFxycmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xybGV0IGhlbHBlciA9IHVpLmhlbHBlcjtccmxldCBpdGVtID0gdWkuaXRlbTtccmxldCBjb250YWluZXI7XHJpZiAoaGVscGVyKSB7XHJoZWxwZXIucmVtb3ZlKCk7XHJ9XHJjb250YWluZXIgPSBpdGVtLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyJCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGFpbmVyLmFkZENsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCBjaGlsZCk7XHJ9IGVsc2Uge1xyc2VsZi5jb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY2hpbGQsIHRydWUpO1xyfVxyfSk7XHJcbn07XHJcbiIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyXG5pbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgZG9udEluaXRUb29sYmFyKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRlbnRBcmVhLmFkZENsYXNzKCdrZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IGNvbnRlbnQgPSBjb250ZW50QXJlYS5odG1sKCk7XHJsZXQgY29udGVudEFyZWFJbm5lciA9ICQoJzxkaXYgY2xhc3M9XCJrZWRpdG9yLWNvbnRlbnQtYXJlYS1pbm5lclwiPjwvZGl2PicpLmh0bWwoY29udGVudCk7XHJjb250ZW50QXJlYS5odG1sKGNvbnRlbnRBcmVhSW5uZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRlbnRBcmVhLmNhbGwoc2VsZiwgY29udGVudEFyZWEpO1xyfVxyaWYgKCFkb250SW5pdFRvb2xiYXIpIHtccmxldCBjb250ZW50QXJlYVRvb2xiYXIgPSAkKHNlbGYuZ2VuZXJhdGVUb29sYmFyKFRPT0xCQVJfVFlQRS5DT05URU5UX0FSRUEpKTtccmNvbnRlbnRBcmVhLmFwcGVuZChjb250ZW50QXJlYVRvb2xiYXIpO1xyY29udGVudEFyZWFUb29sYmFyLmNoaWxkcmVuKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCA/ICcuYnRuLWFkZC1jb250YWluZXInIDogJy5idG4tYWRkLWNvbnRlbnQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5vcGVuTW9kYWwoY29udGVudEFyZWFJbm5lciwgb3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gU05JUFBFVF9UWVBFLkNPTlRBSU5FUiA6IFNOSVBQRVRfVFlQRS5BTEwpO1xyfSk7XHJ9XHJjb250ZW50QXJlYUlubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5rZWRpdG9yLXRvb2xiYXItY29udGFpbmVyOm5vdCgua2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXIpIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250ZW50LWFyZWEnLFxyYXhpczogJ3knLFxydG9sZXJhbmNlOiAncG9pbnRlcicsXHJzb3J0OiBmdW5jdGlvbiAoKSB7XHIkKHRoaXMpLnJlbW92ZUNsYXNzKCd1aS1zdGF0ZS1kZWZhdWx0Jyk7XHJ9LFxycmVjZWl2ZTogZnVuY3Rpb24gKGV2ZW50LCB1aSkge1xybGV0IGhlbHBlciA9IHVpLmhlbHBlcjtccmxldCBpdGVtID0gdWkuaXRlbTtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRlbnRBcmVhKTtccn1ccml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdGFydDogZnVuY3Rpb24gKGUsIHVpKSB7XHJ1aS5pdGVtLmFkZENsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RvcDogZnVuY3Rpb24gKGUsIHVpKSB7XHJpZiAodWkuaGVscGVyKSB7XHJ1aS5oZWxwZXIucmVtb3ZlKCk7XHJ9XHJ1aS5pdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhSW5uZXIuY2hpbGRyZW4oJ3NlY3Rpb24nKS5lYWNoKGZ1bmN0aW9uICgpIHtccnNlbGYuY29udmVydFRvQ29udGFpbmVyKGNvbnRlbnRBcmVhLCAkKHRoaXMpKTtccn0pO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbnRlbnRBcmVhID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgY29udGVudERhdGEgPSBvcHRpb25zLm9uSW5pdENvbnRlbnRBcmVhLmNhbGwoc2VsZiwgY29udGVudEFyZWEpO1xyaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLmxlbmd0aCA+IDApIHtcciQuZWFjaChjb250ZW50RGF0YSwgZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJ9XHJ9XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgZWxlbWVudCA9IHNlbGYuZWxlbWVudDtccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHdyYXBwZXIgPSBzZWxmLndyYXBwZXIgPSAkKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5XUkFQUEVSfVwiPjwvZGl2PmApO1xybGV0IGlmcmFtZVdyYXBwZXIgPSBzZWxmLmlmcmFtZVdyYXBwZXIgPSAkKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5JRlJBTUVfV1JBUFBFUn1cIj48L2Rpdj5gKTtccmxldCBpZnJhbWUgPSBzZWxmLmlmcmFtZSA9ICQoYDxpZnJhbWUgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLklGUkFNRX1cIj48L2lmcmFtZT5gKTtccmVsZW1lbnQuYWZ0ZXIod3JhcHBlcik7XHJlbGVtZW50LmFkZENsYXNzKENMQVNTX05BTUVTLkhJRERFTl9FTEVNRU5UKTtccmlmcmFtZVdyYXBwZXIuaHRtbChpZnJhbWUpO1xyd3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKS5hcHBlbmQoaWZyYW1lV3JhcHBlcik7XHJzZWxmLmlmcmFtZURvYyA9IGlmcmFtZS5jb250ZW50cygpO1xyLy8gRml4IGlzc3VlIEZpcmVmb3ggY2FuJ3QgcmVuZGVyIGNvbnRlbnQgaW5zaWRlIGlmcmFtZVxyLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJzZWxmLmlmcmFtZURvYy5nZXQoMCkub3BlbigpO1xyc2VsZi5pZnJhbWVEb2MuZ2V0KDApLmNsb3NlKCk7XHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccnNlbGYuaWZyYW1lV2luZG93ID0gaWZyYW1lWzBdLmNvbnRlbnRXaW5kb3cgPyBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA6IGlmcmFtZVswXS5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJzZWxmLmlmcmFtZUhlYWQgPSBzZWxmLmlmcmFtZURvYy5maW5kKCdoZWFkJyk7XHJzZWxmLmlmcmFtZUJvZHkgPSBzZWxmLmlmcmFtZURvYy5maW5kKCdib2R5Jyk7XHIvLyBHZW5lcmF0ZSBoZWFkIGNvbnRlbnQgZm9yIGlmcmFtZVxybGV0IHN0eWxlcyA9ICcnO1xyJCgnW2RhdGEtdHlwZT1cImtlZGl0b3Itc3R5bGVcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzdHlsZSA9ICQodGhpcyk7XHJsZXQgaWRTdHIgPSBzdHlsZS5hdHRyKCdpZCcpIHx8ICcnO1xybGV0IGhyZWYgPSBzdHlsZS5hdHRyKCdocmVmJykgfHwgc3R5bGUuYXR0cignZGF0YS1ocmVmJykgfHwgJyc7XHJpZiAoaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7aHJlZn1cIiAke2lkU3RyfSAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgJHtpZFN0cn0+JHtzdHlsZS5odG1sKCl9PC9zdHlsZT5cXG5gO1xyfVxyfSk7XHIkLmlzQXJyYXkob3B0aW9ucy5jb250ZW50U3R5bGVzKSAmJiAkLmVhY2gob3B0aW9ucy5jb250ZW50U3R5bGVzLCBmdW5jdGlvbiAoaSwgc3R5bGUpIHtccmxldCBpZFN0ciA9IHN0eWxlLmlkIHx8ICcnO1xyaWYgKHN0eWxlLmhyZWYpIHtccnN0eWxlcyArPSBgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIke3N0eWxlLmhyZWZ9XCIgJHtpZFN0cn0gLz5cXG5gO1xyfSBlbHNlIHtccnN0eWxlcyArPSBgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiICR7aWRTdHJ9PiR7c3R5bGUuY29udGVudH08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtccnNlbGYuaWZyYW1lSGVhZC5hcHBlbmQoc3R5bGVzKTtcci8vIEdlbmVyYXRlIGJvZHkgY29udGVudCBmb3IgaWZyYW1lXHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIgPSAkKG9wdGlvbnMuY29udGVudEFyZWFzV3JhcHBlciB8fCAnPGRpdiAvPicpO1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2NsYXNzJywgYCR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuQ09OVEVOVF9BUkVBU19XUkFQUEVSfWApO1xyc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmh0bWwoZWxlbWVudC52YWwoKSB8fCBlbGVtZW50Lmh0bWwoKSB8fCAnJyk7XHJpZiAoIXNlbGYuY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcpKSB7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJ9XHJzZWxmLmlmcmFtZUJvZHkuYXBwZW5kKHNlbGYuY29udGVudEFyZWFzV3JhcHBlcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0SWZyYW1lID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdElmcmFtZS5jYWxsKHNlbGYsIHNlbGYuaWZyYW1lLCBzZWxmLmlmcmFtZUhlYWQsIHNlbGYuaWZyYW1lQm9keSk7XHJ9XHJzZWxmLmluaXRDb250ZW50QXJlYXMoKTtccnNlbGYuaW5pdElmcmFtZUFjdGlvbnMoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29udGVudEFyZWFzV3JhcHBlciA9IHNlbGYuY29udGVudEFyZWFzV3JhcHBlcjtccmxldCBjb250ZW50QXJlYXM7XHJpZiAob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcikge1xyY29udGVudEFyZWFzID0gY29udGVudEFyZWFzV3JhcHBlci5maW5kKG9wdGlvbnMuY29udGVudEFyZWFzU2VsZWN0b3IpO1xyfVxyaWYgKCFjb250ZW50QXJlYXMgfHwgY29udGVudEFyZWFzLmxlbmd0aCA9PT0gMCkge1xybGV0IG9yaWdpbmFsQ29udGVudCA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbCgpO1xyY29udGVudEFyZWFzID0gJCgnPGRpdiAvPicpLmh0bWwob3JpZ2luYWxDb250ZW50KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZW1wdHkoKS5hcHBlbmQoY29udGVudEFyZWFzKTtccn1ccmNvbnRlbnRBcmVhcy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250ZW50QXJlYSA9ICQodGhpcyk7XHJpZiAoIWNvbnRlbnRBcmVhLmF0dHIoJ2lkJykpIHtccmNvbnRlbnRBcmVhLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xyfVxyc2VsZi5pbml0Q29udGVudEFyZWEoY29udGVudEFyZWEpO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IGlkID0gc2VsZi5pZDtccmxldCBjb250ZW50ID0gc2VsZi5nZXRDb250ZW50KGZhbHNlKTtccnNlbGYud3JhcHBlci5yZW1vdmUoKTtccmlmIChlbGVtZW50LmlzKCd0ZXh0YXJlYScpKSB7XHJlbGVtZW50LnZhbChjb250ZW50KTtccn0gZWxzZSB7XHJlbGVtZW50Lmh0bWwoY29udGVudCk7XHJ9XHJlbGVtZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWhpZGRlbi1lbGVtZW50Jyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBudWxsKTtccmRlbGV0ZSBLRWRpdG9yLmluc3RhbmNlc1tpZF07XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChpbkFycmF5KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgcmVzdWx0ID0gW107XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgaHRtbCA9ICcnO1xyJCh0aGlzKS5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyJykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyID0gJCh0aGlzKTtccmh0bWwgKz0gc2VsZi5nZXRDb250YWluZXJDb250ZW50KGNvbnRhaW5lcik7XHJ9KTtccnJlc3VsdC5wdXNoKGh0bWwpO1xyfSk7XHJyZXR1cm4gaW5BcnJheSA/IHJlc3VsdCA6IHJlc3VsdC5qb2luKCdcXG4nKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29udGVudEFyZWFzV3JhcHBlciA9IHNlbGYuY29udGVudEFyZWFzV3JhcHBlcjtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmxldCBzaWRlYmFyID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3Itc2lkZWJhcicpO1xybGV0IG1vZGFsID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItbW9kYWwnKTtccmxldCBjb250YWluZXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1jb250YWluZXInKTtccmlmIChjb250YWluZXIpIHtccmlmICghY29udGFpbmVyLmhhc0NsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJykpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0gZWxzZSB7XHJpZiAoIXNpZGViYXIgJiYgIW1vZGFsKSB7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyfVxybGV0IGNvbXBvbmVudCA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xyaWYgKGNvbXBvbmVudCkge1xyaWYgKCFjb21wb25lbnQuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbXBvbmVudC5wYXJlbnQoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNlbGVjdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0gZWxzZSB7XHJpZiAoIXNpZGViYXIpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyfVxyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgY29udGVudEFyZWFzV3JhcHBlci5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbnRhaW5lci5pcyhzZWxmLnNldHRpbmdDb250YWluZXIpKSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9IGVsc2Uge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbnRhaW5lcik7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWR1cGxpY2F0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxldCBjb250YWluZXIgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29udGFpbmVyID0gJChzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBidG4ucGFyZW50KCkuaGFzQ2xhc3MoJ2tlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyJykpKTtccmNvbnRhaW5lci5hZnRlcihuZXdDb250YWluZXIpO1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbnRhaW5lciwgbmV3Q29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWNvbnRhaW5lci1kZWxldGUnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJpZiAoY29uZmlybShvcHRpb25zLmNvbmZpcm1EZWxldGVDb250YWluZXJUZXh0KSkge1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb21wb25lbnRzID0gY29udGFpbmVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbnRhaW5lckRlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBzZXR0aW5nQ29tcG9uZW50ID0gc2VsZi5zZXR0aW5nQ29tcG9uZW50O1xyaWYgKHNldHRpbmdDb21wb25lbnQpIHtccmxldCBzZXR0aW5nQ29tcG9uZW50UGFyZW50ID0gc2V0dGluZ0NvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmlmIChzZXR0aW5nQ29tcG9uZW50UGFyZW50LmlzKGNvbnRhaW5lcikpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJ9IGVsc2UgaWYgKGNvbnRhaW5lci5pcyhzZWxmLnNldHRpbmdDb250YWluZXIpKSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyaWYgKGNvbXBvbmVudHMubGVuZ3RoID4gMCkge1xyY29tcG9uZW50cy5lYWNoKGZ1bmN0aW9uICgpIHtccnNlbGYuZGVsZXRlQ29tcG9uZW50KCQodGhpcykpO1xyfSk7XHJ9XHJjb250YWluZXIucmVtb3ZlKCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtc2V0dGluZycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29udGVudEFyZWFzV3JhcHBlci5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2V0dGluZycpICYmIGNvbnRlbnRBcmVhc1dyYXBwZXIuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNpZGViYXInKSkge1xyaWYgKCFjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KCkpKSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbXBvbmVudCk7XHJ9IGVsc2Uge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSB7XHJzZWxmLm9wZW5TaWRlYmFyKGNvbXBvbmVudCk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29tcG9uZW50LWR1cGxpY2F0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xybGV0IG5ld0NvbXBvbmVudCA9ICQoc2VsZi5nZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkpO1xyY29tcG9uZW50LmFmdGVyKG5ld0NvbXBvbmVudCk7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudER1cGxpY2F0ZWQuY2FsbChzZWxmLCBjb21wb25lbnQsIG5ld0NvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29tcG9uZW50LWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbXBvbmVudFRleHQpKSB7XHJsZXQgY29tcG9uZW50ID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbXBvbmVudCcpO1xybGV0IGNvbnRhaW5lciA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbXBvbmVudC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVDb21wb25lbnREZWxldGVkLmNhbGwoc2VsZiwgZSwgY29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoY29tcG9uZW50LmlzKHNlbGYuc2V0dGluZ0NvbXBvbmVudCkpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJzZWxmLmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmFkZENsYXNzKCdrZWRpdG9yLWNsaWNrcy1pbml0aWFsaXplZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGlmcmFtZSwgd3JhcHBlcikge1xyaWYgKCF3cmFwcGVyKSB7XHJpZnJhbWUud3JhcChgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuSUZSQU1FX0ZBS0VSfVwiPjwvZGl2PmApO1xyd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccn1ccndyYXBwZXIuYWRkQ2xhc3MoYCR7Q0xBU1NfTkFNRVMuSUZSQU1FX0NPVkVSX1dSQVBQRVJ9YCk7XHJsZXQgY292ZXIgPSAkKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJ9XCI+PC9kaXY+YCk7XHJ3cmFwcGVyLnByZXBlbmQoY292ZXIpO1xyd3JhcHBlci5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtccndyYXBwZXIucmVtb3ZlQ2xhc3MoYCR7Q0xBU1NfTkFNRVMuSUZSQU1FX0NPVkVSX0hJRERFTn1gKTtccn0pO1xyY292ZXIub24oJ2RibGNsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccndyYXBwZXIuYWRkQ2xhc3MoYCR7Q0xBU1NfTkFNRVMuSUZSQU1FX0NPVkVSX0hJRERFTn1gKTtccn0pO1xyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyaW1wb3J0IERFRkFVTFRTIGZyb20gJy4vY29uc3RhbnRzL2RlZmF1bHRzJztccmltcG9ydCBnZW5lcmF0ZUlkIGZyb20gJy4vdXRpbHMvZ2VuZXJhdGVJZCc7XHJcbmltcG9ydCBnZW5lcmF0ZVRvb2xiYXIgZnJvbSAnLi91dGlscy9nZW5lcmF0ZVRvb2xiYXInO1xyXG5pbXBvcnQgYmVhdXRpZnlDYXRlZ29yaWVzIGZyb20gJy4vdXRpbHMvYmVhdXRpZnlDYXRlZ29yaWVzJztcclxuaW1wb3J0IGdldERhdGFBdHRyaWJ1dGVzIGZyb20gJy4vdXRpbHMvZ2V0RGF0YUF0dHJpYnV0ZXMnO1xyXG5pbXBvcnQgZ2V0Q2xpY2tlZEVsZW1lbnQgZnJvbSAnLi91dGlscy9nZXRDbGlja2VkRWxlbWVudCc7XHJpbXBvcnQgaW5pdElmcmFtZUFjdGlvbnMgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZUFjdGlvbnMnO1xyXG5pbXBvcnQgaW5pdElmcmFtZUNvdmVyIGZyb20gJy4vaWZyYW1lL2luaXRJZnJhbWVDb3Zlcic7XHJpbXBvcnQgaW5pdFRvcGJhciBmcm9tICcuL3RvcGJhci9pbml0VG9wYmFyJztcclxuaW1wb3J0IGluaXRUb3BiYXJNb2RlcyBmcm9tICcuL3RvcGJhci9pbml0VG9wYmFyTW9kZXMnO1xyXG5pbXBvcnQgaW5pdERldmljZVN3aXRjaGVyIGZyb20gJy4vdG9wYmFyL2luaXREZXZpY2VTd2l0Y2hlcic7XHJpbXBvcnQgaW5pdFNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2luaXRTaWRlYmFyJztcclxuaW1wb3J0IG9wZW5TaWRlYmFyIGZyb20gJy4vc2lkZWJhci9vcGVuU2lkZWJhcic7XHJcbmltcG9ydCBjbG9zZVNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL2Nsb3NlU2lkZWJhcic7XHJpbXBvcnQgcmVuZGVyU25pcHBldHMgZnJvbSAnLi9zbmlwcGV0L3JlbmRlclNuaXBwZXRzJztcclxuaW1wb3J0IGluaXRTbmlwcGV0c0ZpbHRlciBmcm9tICcuL3NuaXBwZXQvaW5pdFNuaXBwZXRzRmlsdGVyJztcclxuaW1wb3J0IGFkZFNuaXBwZXQgZnJvbSAnLi9zbmlwcGV0L2FkZFNuaXBwZXQnO1xyaW1wb3J0IGluaXRTbmlwcGV0c01vZGFsIGZyb20gJy4vbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwnO1xyXG5pbXBvcnQgb3Blbk1vZGFsIGZyb20gJy4vbW9kYWwvb3Blbk1vZGFsJztcclxuaW1wb3J0IGNsb3NlTW9kYWwgZnJvbSAnLi9tb2RhbC9jbG9zZU1vZGFsJztccmltcG9ydCBpbml0Q29udGVudEFyZWFXcmFwcGVyIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhV3JhcHBlcic7XHJcbmltcG9ydCBpbml0Q29udGVudEFyZWFzIGZyb20gJy4vY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhcyc7XHJcbmltcG9ydCBpbml0Q29udGVudEFyZWEgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEnO1xyaW1wb3J0IGNvbnZlcnRUb0NvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9jb252ZXJ0VG9Db250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lciBmcm9tICcuL2NvbnRhaW5lci9pbml0Q29udGFpbmVyJztcclxuaW1wb3J0IGluaXRDb250YWluZXJDb250ZW50IGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXJDb250ZW50JztcclxuaW1wb3J0IGdldENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvZ2V0Q29udGFpbmVyQ29udGVudCc7XHJpbXBvcnQgZ2V0Q29tcG9uZW50VHlwZSBmcm9tICcuL2NvbXBvbmVudC9nZXRDb21wb25lbnRUeXBlJztcclxuaW1wb3J0IGNvbnZlcnRUb0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9jb252ZXJ0VG9Db21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdENvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0Q29tcG9uZW50JztcclxuaW1wb3J0IGluaXREeW5hbWljQ29udGVudCBmcm9tICcuL2NvbXBvbmVudC9pbml0RHluYW1pY0NvbnRlbnQnO1xyXG5pbXBvcnQgZGVsZXRlQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2RlbGV0ZUNvbXBvbmVudCc7XHJcbmltcG9ydCBnZXRDb21wb25lbnRDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQnO1xyaW1wb3J0IGluaXQgZnJvbSAnLi9pbml0JztcclxuaW1wb3J0IGRlc3Ryb3kgZnJvbSAnLi9kZXN0cm95JztcclxuaW1wb3J0IGdldENvbnRlbnQgZnJvbSAnLi9nZXRDb250ZW50JztcclxuaW1wb3J0IHNldENvbnRlbnQgZnJvbSAnLi9zZXRDb250ZW50JztccmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3IubGVzcyc7XHIvLyBDaGVjayBkZXBlbmRlbmNpZXNcclxuaWYgKCEkLmZuLnNvcnRhYmxlKSB7XHJlcnJvcignJC5mbi5zb3J0YWJsZSBkb2VzIG5vdCBleGlzdC4gUGxlYXNlIGltcG9ydCAkLmZuLnNvcnRhYmxlIGludG8geW91ciBkb2N1bWVudCBmb3IgY29udGludWUgdXNpbmcgS0VkaXRvci4nKTtcclxufVxyLy8gS0VkaXRvciBjbGFzc1xyXG5jbGFzcyBLRWRpdG9yIHtccnN0YXRpYyBERUZBVUxUUyA9IERFRkFVTFRTO1xyc3RhdGljIGRlYnVnID0gZmFsc2U7XHJzdGF0aWMgdmVyc2lvbiA9ICcyLjAuMCc7XHJzdGF0aWMgaW5zdGFuY2VzID0ge307XHJzdGF0aWMgY29tcG9uZW50cyA9IHtccmJsYW5rOiB7XHJzZXR0aW5nRW5hYmxlZDogZmFsc2Vccn1ccn07XHJzdGF0aWMgbG9nKC4uLmFyZ3MpIHtccmlmIChjb25zb2xlICYmIHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gJ2Z1bmN0aW9uJyAmJiAkLmtlZGl0b3IuZGVidWcpIHtccmNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIFsnWyBLRWRpdG9yIF0gJywgLi4uYXJnc10pO1xyY29uc29sZS5sb2coYFwibG9nXCIgaXMgREVQUkVDQVRFRC4gV2lsbCBiZSByZW1vdmVkIHNvb24uIFBsZWFzZSB1c2UgXCJjb25zb2xlLmxvZ1wiIGluc3RlYWQhYCk7XHJ9XHJ9XHJzdGF0aWMgZXJyb3IobWVzc2FnZSkge1xydGhyb3cgbmV3IEVycm9yKGBbIEtFZGl0b3IgXSAke21lc3NhZ2V9YCk7XHJ9XHJzdGF0aWMgaW5pdCh0YXJnZXQsIGNvbmZpZykge1xycmV0dXJuIG5ldyBLRWRpdG9yKHRhcmdldCwgY29uZmlnKTtccn1ccmNvbnN0cnVjdG9yKHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gaW5pdC5hcHBseSh0aGlzLCBbdGFyZ2V0LCBjb25maWddKTtccn1ccmdlbmVyYXRlSWQoKSB7XHJyZXR1cm4gZ2VuZXJhdGVJZCgpO1xyfVxyZ2VuZXJhdGVUb29sYmFyKHR5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJyZXR1cm4gZ2VuZXJhdGVUb29sYmFyLmFwcGx5KHRoaXMsIFt0eXBlLCBpc0NvbXBvbmVudENvbmZpZ3VyYWJsZV0pO1xyfVxyYmVhdXRpZnlDYXRlZ29yaWVzKGNhdGVnb3JpZXMpIHtccnJldHVybiBiZWF1dGlmeUNhdGVnb3JpZXMuYXBwbHkodGhpcywgW2NhdGVnb3JpZXNdKTtccn1ccnNldFNldHRpbmdDb250YWluZXIoY29udGFpbmVyKSB7XHJ0aGlzLnNldHRpbmdDb250YWluZXIgPSBjb250YWluZXI7XHJ9XHJnZXRTZXR0aW5nQ29udGFpbmVyKCkge1xycmV0dXJuIHRoaXMuc2V0dGluZ0NvbnRhaW5lcjtccn1ccnNldFNldHRpbmdDb21wb25lbnQoY29tcG9uZW50KSB7XHJ0aGlzLnNldHRpbmdDb21wb25lbnQgPSBjb21wb25lbnQ7XHJ9XHJnZXRTZXR0aW5nQ29tcG9uZW50KCkge1xycmV0dXJuIHRoaXMuc2V0dGluZ0NvbXBvbmVudDtccn1ccmdldERhdGFBdHRyaWJ1dGVzKHRhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheSkge1xycmV0dXJuIGdldERhdGFBdHRyaWJ1dGVzLmFwcGx5KHRoaXMsIFt0YXJnZXQsIGlnbm9yZUF0dHJpYnV0ZXMsIGlzQXJyYXldKTtccn1ccmdldENvbXBvbmVudFR5cGUoY29tcG9uZW50KSB7XHJyZXR1cm4gZ2V0Q29tcG9uZW50VHlwZS5hcHBseSh0aGlzLCBbY29tcG9uZW50XSk7XHJ9XHJnZXRDbGlja2VkRWxlbWVudChldmVudCwgc2VsZWN0b3IpIHtccnJldHVybiBnZXRDbGlja2VkRWxlbWVudC5hcHBseSh0aGlzLCBbZXZlbnQsIHNlbGVjdG9yXSk7XHJ9XHIvLyBJZnJhbWVcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKSB7XHJyZXR1cm4gaW5pdElmcmFtZUNvdmVyLmFwcGx5KHRoaXMsIFtpZnJhbWUsIHdyYXBwZXJdKTtccn1cci8vIEtFZGl0b3IgY2xpY2tzXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdElmcmFtZUFjdGlvbnMoKSB7XHJyZXR1cm4gaW5pdElmcmFtZUFjdGlvbnMuYXBwbHkodGhpcyk7XHJ9XHIvLyBUb3BiYXJcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0VG9wYmFyKCkge1xycmV0dXJuIGluaXRUb3BiYXIuYXBwbHkodGhpcyk7XHJ9XHJpbml0RGV2aWNlU3dpdGNoZXIoKSB7XHJyZXR1cm4gaW5pdERldmljZVN3aXRjaGVyLmFwcGx5KHRoaXMpO1xyfVxyaW5pdFRvcGJhck1vZGVzKCkge1xycmV0dXJuIGluaXRUb3BiYXJNb2Rlcy5hcHBseSh0aGlzKTtccn1cci8vIFNpZGViYXJcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U2lkZWJhcigpIHtccnJldHVybiBpbml0U2lkZWJhci5hcHBseSh0aGlzKTtccn1ccm9wZW5TaWRlYmFyKHRhcmdldCkge1xycmV0dXJuIG9wZW5TaWRlYmFyLmFwcGx5KHRoaXMsIFt0YXJnZXRdKTtccn1ccmNsb3NlU2lkZWJhcigpIHtccnJldHVybiBjbG9zZVNpZGViYXIuYXBwbHkodGhpcyk7XHJ9XHIvLyBMZWdhY3kgbWV0aG9kcy4gREVQUkVDQVRFRFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccnNob3dTZXR0aW5nUGFuZWwodGFyZ2V0KSB7XHJ0aGlzLm9wZW5TaWRlYmFyKHRhcmdldCk7XHJ9XHJoaWRlU2V0dGluZ1BhbmVsKCkge1xydGhpcy5jbG9zZVNpZGViYXIoKTtccn1cci8vIFNuaXBwZXQgbW9kYWxcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0U25pcHBldHNNb2RhbCgpIHtccnJldHVybiBpbml0U25pcHBldHNNb2RhbC5hcHBseSh0aGlzKTtccn1ccnJlbmRlclNuaXBwZXRzKHJlc3ApIHtccnJldHVybiByZW5kZXJTbmlwcGV0cy5hcHBseSh0aGlzLCBbcmVzcF0pO1xyfVxyaW5pdFNuaXBwZXRzRmlsdGVyKHR5cGUpIHtccnJldHVybiBpbml0U25pcHBldHNGaWx0ZXIuYXBwbHkodGhpcywgW3R5cGVdKTtccn1ccm9wZW5Nb2RhbCh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJyZXR1cm4gb3Blbk1vZGFsLmFwcGx5KHRoaXMsIFt0YXJnZXQsIHNuaXBwZXRUeXBlXSk7XHJ9XHJjbG9zZU1vZGFsKCkge1xycmV0dXJuIGNsb3NlTW9kYWwuYXBwbHkodGhpcyk7XHJ9XHIvLyBDb250ZW50IGFyZWFzXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyaW5pdENvbnRlbnRBcmVhV3JhcHBlcigpIHtccnJldHVybiBpbml0Q29udGVudEFyZWFXcmFwcGVyLmFwcGx5KHRoaXMpO1xyfVxyaW5pdENvbnRlbnRBcmVhcygpIHtccnJldHVybiBpbml0Q29udGVudEFyZWFzLmFwcGx5KHRoaXMpO1xyfVxyaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccnJldHVybiBpbml0Q29udGVudEFyZWEuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXJdKTtccn1cci8vIENvbnRhaW5lcnNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIHRhcmdldCkge1xycmV0dXJuIGNvbnZlcnRUb0NvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIHRhcmdldF0pO1xyfVxyaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKSB7XHJyZXR1cm4gaW5pdENvbnRhaW5lci5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lcl0pO1xyfVxyaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpIHtccnJldHVybiBpbml0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWRdKTtccn1cci8vIENvbXBvbmVudHNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJjb252ZXJ0VG9Db21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJyZXR1cm4gY29udmVydFRvQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmddKTtccn1ccmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJyZXR1cm4gaW5pdENvbXBvbmVudC5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50XSk7XHJ9XHJpbml0RHluYW1pY0NvbnRlbnQoZHluYW1pY0VsZW1lbnQpIHtccnJldHVybiBpbml0RHluYW1pY0NvbnRlbnQuYXBwbHkodGhpcywgW2R5bmFtaWNFbGVtZW50XSk7XHJ9XHJkZWxldGVDb21wb25lbnQoY29tcG9uZW50KSB7XHJyZXR1cm4gZGVsZXRlQ29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1cci8vIEdldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZ2V0Q29tcG9uZW50Q29udGVudChjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRDb250ZW50LmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyLCBpc05lc3RlZCkge1xycmV0dXJuIGdldENvbnRhaW5lckNvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRhaW5lciwgaXNOZXN0ZWRdKTtccn1ccmdldENvbnRlbnQoaW5BcnJheSkge1xycmV0dXJuIGdldENvbnRlbnQuYXBwbHkodGhpcywgW2luQXJyYXldKTtccn1cci8vIFNldCBjb250ZW50XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2V0Q29udGVudChjb250ZW50LCBjb250ZW50QXJlYSkge1xycmV0dXJuIHNldENvbnRlbnQuYXBwbHkodGhpcywgW2NvbnRlbnQsIGNvbnRlbnRBcmVhXSk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyZGVzdHJveSgpIHtccnJldHVybiBkZXN0cm95LmFwcGx5KHRoaXMpO1xyfVxyLy8gRGVzdHJveVxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmFkZFNuaXBwZXQodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKSB7XHJyZXR1cm4gYWRkU25pcHBldC5hcHBseSh0aGlzLCBbdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzXSk7XHJ9XHJcbn1cci8vIEtFZGl0b3IgcGx1Z2luc1xyXG4kLmZuLmtlZGl0b3IgPSBmdW5jdGlvbiAob3B0aW9ucykge1xybGV0IGVsZW1lbnQgPSAkKHRoaXMpO1xybGV0IGluc3RhbmNlID0gZWxlbWVudC5kYXRhKCdrZWRpdG9yJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XHJpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2Vbb3B0aW9uc10gJiYgdHlwZW9mIGluc3RhbmNlW29wdGlvbnNdID09PSAnZnVuY3Rpb24nKSB7XHJyZXR1cm4gaW5zdGFuY2Vbb3B0aW9uc10uYXBwbHkoaW5zdGFuY2UsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xyfVxyfSBlbHNlIHtccmlmICghaW5zdGFuY2UpIHtccmluc3RhbmNlID0gS0VkaXRvci5pbml0KGVsZW1lbnQsIG9wdGlvbnMpO1xyZWxlbWVudC5kYXRhKCdrZWRpdG9yJywgaW5zdGFuY2UpO1xyfVxycmV0dXJuIGluc3RhbmNlO1xyfVxyXG59O1xyd2luZG93LktFZGl0b3IgPSAkLmtlZGl0b3IgPSAkLmZuLmtlZGl0b3IuY29uc3RydWN0b3IgPSBLRWRpdG9yO1xyXG4iLCJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgY29uZmlnKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJzZWxmLmVsZW1lbnQgPSB0YXJnZXQ7XHJzZWxmLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgREVGQVVMVFMsIGNvbmZpZyk7XHJzZWxmLmluaXRDb250ZW50QXJlYVdyYXBwZXIoKTtccnNlbGYuaW5pdFRvcGJhcigpO1xyc2VsZi5pbml0U2lkZWJhcigpO1xyc2VsZi5pbml0U25pcHBldHNNb2RhbCgpO1xyc2VsZi5pZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xyS0VkaXRvci5pbnN0YW5jZXNbc2VsZi5pZF0gPSBzZWxmO1xyaWYgKHR5cGVvZiBzZWxmLm9wdGlvbnMub25SZWFkeSA9PT0gJ2Z1bmN0aW9uJykge1xyc2VsZi5vcHRpb25zLm9uUmVhZHkuY2FsbChzZWxmKTtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccnNlbGYubW9kYWxUYXJnZXQgPSBudWxsO1xyc2VsZi5tb2RhbEFjdGlvbiA9IG51bGw7XHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC10aXRsZScpLmh0bWwoJycpO1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccm1vZGFsLnJlbW92ZUNsYXNzKCdzaG93ZWQnKTtcclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvc25pcHBldFR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IHNuaXBwZXRzV3JhcHBlckh0bWwgPSAnJztccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIGtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXJcIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzIGtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyXCI+PC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudFwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnRcIj48L2Rpdj5ccjwvZGl2PlxyYDtccn0gZWxzZSB7XHJzbmlwcGV0c1dyYXBwZXJIdG1sID0gYFxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHNcIj48L2Rpdj5ccjwvZGl2PlxyYDtccn1ccmxldCBtb2RhbCA9IHNlbGYubW9kYWwgPSAkKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItbW9kYWxcIiBpZD1cIiR7bW9kYWxJZH1cIj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWhlYWRlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWNsb3NlXCI+JnRpbWVzOzwvYnV0dG9uPlxyPGg0IGNsYXNzPVwia2VkaXRvci1tb2RhbC10aXRsZVwiPjwvaDQ+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWJvZHlcIj4ke3NuaXBwZXRzV3JhcHBlckh0bWx9PC9kaXY+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1tb2RhbC1mb290ZXJcIj5ccjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGtlZGl0b3ItbW9kYWwtY2xvc2VcIj5DbG9zZTwvYnV0dG9uPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLXByaW1hcnkga2VkaXRvci1tb2RhbC1hZGRcIj5BZGQ8L2J1dHRvbj5ccjwvZGl2PlxyPC9kaXY+XHJgKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5zbmlwcGV0c1VybCA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5zbmlwcGV0c1VybC5sZW5ndGggPiAwKSB7XHIkLmFqYXgoe1xydHlwZTogJ2dldCcsXHJkYXRhVHlwZTogJ2h0bWwnLFxydXJsOiBvcHRpb25zLnNuaXBwZXRzVXJsLFxyc3VjY2VzczogZnVuY3Rpb24gKHJlc3ApIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkID09PSAnZnVuY3Rpb24nKSB7XHJyZXNwID0gb3B0aW9ucy5vblNuaXBwZXRzTG9hZGVkLmNhbGwoc2VsZiwgcmVzcCkgfHwgcmVzcDtccn1ccnNlbGYucmVuZGVyU25pcHBldHMocmVzcCk7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYuaW5pdFNuaXBwZXRzRmlsdGVyKFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9IGVsc2Uge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkFMTCk7XHJ9XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNFcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vblNuaXBwZXRzRXJyb3IuY2FsbChzZWxmLCBqcVhIUik7XHJ9XHJ9XHJ9KTtcci8vIENsb3NlIGJ1dHRvbnNccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBZGQgYnV0dG9uXHJtb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1hZGQnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNlbGVjdGVkU25pcHBldCA9IG1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIgLnNlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRTbmlwcGV0Lmxlbmd0aCA9PT0gMCkge1xycmV0dXJuO1xyfVxybGV0IGNvbnRlbnRBcmVhID0gc2VsZi5tb2RhbFRhcmdldC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmxldCBzbmlwcGV0VHlwZSA9IHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCBzbmlwcGV0Q29udGVudEVsZW1lbnQgPSBtb2RhbC5maW5kKHNlbGVjdGVkU25pcHBldC5hdHRyKCdkYXRhLXNuaXBwZXQnKSk7XHJsZXQgc25pcHBldENvbnRlbnQgPSBzbmlwcGV0Q29udGVudEVsZW1lbnQuaHRtbCgpO1xybGV0IGlzQWRkaW5nQ29udGFpbmVyID0gZmFsc2U7XHJsZXQgaXNBZGRpbmdDb21wb25lbnQgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSBmYWxzZTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnN3aXRjaCAoc2VsZi5tb2RhbFNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJpc0FkZGluZ0NvbXBvbmVudCA9IHRydWU7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTlRBSU5FUjpccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccn0gZWxzZSB7XHJpZiAoc25pcHBldFR5cGUgPT09ICdjb250YWluZXInKSB7XHJpc0FkZGluZ0NvbnRhaW5lciA9IHRydWU7XHJ9IGVsc2Uge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQUxMOlxyaWYgKHNlbGYubW9kYWxUYXJnZXQuaXMoJy5rZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LWlubmVyJykpIHtccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccn0gZWxzZSB7XHJpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIgPSB0cnVlO1xyfVxyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyfVxybGV0IG5ld0NvbnRhaW5lcjtccmxldCBuZXdDb21wb25lbnQ7XHJpZiAoaXNBZGRpbmdDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lclNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbnRhaW5lciwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50KSB7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29tcG9uZW50KTtccmxldCBjb250YWluZXIgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50U25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29tcG9uZW50LCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb21wb25lbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgbmV3Q29tcG9uZW50KTtccn1ccmlmIChpc0FkZGluZ0NvbXBvbmVudFdpdGhDb250YWluZXIpIHtccnNlbGYuYm9keS5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXRDb250ZW50RWxlbWVudCwgbnVsbCwgdHJ1ZSk7XHJuZXdDb250YWluZXIgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lciBzaG93ZWQta2VkaXRvci10b29sYmFyXCI+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXItaW5uZXJcIj4ke29wdGlvbnMuY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb21wb25lbnQgPSAkKGBccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudFwiIGRhdGEtdHlwZT1cIiR7c25pcHBldFR5cGV9XCIgJHtkYXRhQXR0cmlidXRlcy5qb2luKCcgJyl9PlxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnRcIj4ke3NuaXBwZXRDb250ZW50fTwvc2VjdGlvbj5ccjwvc2VjdGlvbj5ccmApO1xybmV3Q29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmVxKDApLmh0bWwobmV3Q29tcG9uZW50KTtccnNlbGYubW9kYWxUYXJnZXQuYXBwZW5kKG5ld0NvbnRhaW5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccn1ccnNlbGYuY2xvc2VNb2RhbCgpO1xyfSk7XHIvLyBBY3Rpb24gY2xpY2sgZm9yIHNuaXBwZXRccm1vZGFsLm9uKCdjbGljaycsICcua2VkaXRvci1zbmlwcGV0JywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmlmICghc25pcHBldC5oYXNDbGFzcygnc2VsZWN0ZWQnKSkge1xyc25pcHBldC5wYXJlbnQoKS5maW5kKCcuc2VsZWN0ZWQnKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtccnNuaXBwZXQuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XHJ9XHJ9KTtccmxldCBjc3NUcmFuc2l0aW9uRW5kID0gJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnO1xybW9kYWwub24oY3NzVHJhbnNpdGlvbkVuZCwgKCkgPT4ge1xyaWYgKCFtb2RhbC5oYXNDbGFzcygnc2hvd2VkJykpIHtccm1vZGFsLmNzcygnZGlzcGxheScsICdub25lJyk7XHIkKGRvY3VtZW50LmJvZHkpLnJlbW92ZUNsYXNzKCdvcGVuZWQtbW9kYWwnKTtccn1ccn0pO1xybW9kYWwuYXBwZW5kVG8oZG9jdW1lbnQuYm9keSk7XHJ9IGVsc2Uge1xyc2VsZi5lcnJvcignXCJzbmlwcGV0c1VybFwiIG11c3QgYmUgbm90IG51bGwhJyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSAnLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQsIHNuaXBwZXRUeXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgbW9kYWxUaXRsZSA9ICcnO1xyc3dpdGNoIChzbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxybW9kYWxUaXRsZSA9ICdBZGQgY29udGFpbmVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxybW9kYWxUaXRsZSA9ICdBZGQgY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xybW9kYWwuZmluZChzbmlwcGV0VHlwZSA9PT0gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA/ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCcgOiAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtccn0gZWxzZSB7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJykuZmluZCgnLmtlZGl0b3Itc25pcHBldFtkYXRhLXR5cGU9Y29udGFpbmVyXScpLmNzcygnZGlzcGxheScsIHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJ25vbmUnIDogJ2Jsb2NrJyk7XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250ZW50Jztccn1ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbChtb2RhbFRpdGxlKTtccnNlbGYubW9kYWxUYXJnZXQgPSB0YXJnZXQ7XHJzZWxmLm1vZGFsU25pcHBldFR5cGUgPSBzbmlwcGV0VHlwZTtccm1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyJChkb2N1bWVudC5ib2R5KS5hZGRDbGFzcygnb3BlbmVkLW1vZGFsJyk7XHJzZXRUaW1lb3V0KCgpID0+IHtccm1vZGFsLmFkZENsYXNzKCdzaG93ZWQnKTtccn0sIDApO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudCwgY29udGVudEFyZWEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi53cmFwcGVyO1xyaWYgKCFjb250ZW50QXJlYSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmNoaWxkcmVuKCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccn0gZWxzZSB7XHJpZiAoIWNvbnRlbnRBcmVhLmpxdWVyeSkge1xyY29udGVudEFyZWEgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoY29udGVudEFyZWEpO1xyfVxyfVxyaWYgKGNvbnRlbnRBcmVhLmxlbmd0aCA9PT0gMCkge1xyc2VsZi5lcnJvcignQ29udGVudCBhcmVhIGRvZXMgbm90IGV4aXN0IScpO1xyfVxyY29udGVudEFyZWEuaHRtbChjb250ZW50KTtccnNlbGYuaW5pdENvbnRlbnRBcmVhKGNvbnRlbnRBcmVhLCB0cnVlKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfWApLmNoaWxkcmVuKGAuJHtDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFfWApO1xyaWYgKGFjdGl2ZUZvcm0ubGVuZ3RoID4gMCkge1xyaWYgKGFjdGl2ZUZvcm0uaXMoYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfQ09OVEFJTkVSfWApKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0hpZGVGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uLmNhbGwoc2VsZiwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9IGVsc2Uge1xybGV0IGFjdGl2ZVR5cGUgPSBhY3RpdmVGb3JtLmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbYWN0aXZlVHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmhpZGVTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIGFjdGl2ZUZvcm0sIHNlbGYpO1xyfVxyfVxyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccnNpZGViYXIucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuU0lERUJBUl9PUEVORUQpO1xyXG59IiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXJJZCA9IHNlbGYuZ2VuZXJhdGVJZCgpO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXIgPSAkKGBccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJ9XCIgaWQ9XCIke3NpZGViYXJJZH1cIj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJfSEVBREVSfVwiPlxyPHNwYW4gY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNJREVCQVJfVElUTEV9XCI+PC9zcGFuPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9DTE9TRVJ9XCI+JnRpbWVzOzwvYT5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfVwiPjwvZGl2PlxyPC9kaXY+XHJgKTtccnNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9DTE9TRVJ9YCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9KTtccmxldCBzaWRlYmFyQm9keSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0lERUJBUl9CT0RZfWApO1xyc2lkZWJhckJvZHkub24oJ3N1Ym1pdCcsICdmb3JtJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnJldHVybiBmYWxzZTtccn0pO1xyaWYgKG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0VuYWJsZWQgPT09IHRydWUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJsZXQgZm9ybSA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STX0gJHtDTEFTU19OQU1FUy5TRVRUSU5HX0NPTlRBSU5FUn1cIj48L2Rpdj5gKTtccnNpZGViYXJCb2R5LmFwcGVuZChmb3JtKTtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbi5jYWxsKHNlbGYsIGZvcm0sIHNlbGYpO1xyfSBlbHNlIHtccnNlbGYuZXJyb3IoJ1wiY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvblwiIGlzIG5vdCBmdW5jdGlvbiEnKTtccn1ccn1ccnNpZGViYXIuYXBwZW5kVG8oc2VsZi53cmFwcGVyKTtcclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0YXJnZXQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IHNpZGViYXIgPSBzZWxmLnNpZGViYXI7XHJsZXQgc2lkZWJhclRpdGxlID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX1RJVExFfWApO1xybGV0IHNpZGViYXJCb2R5ID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9YCk7XHJsZXQgYWN0aXZlRm9ybSA9IHNpZGViYXJCb2R5LmNoaWxkcmVuKGAuJHtDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFfWApO1xyYWN0aXZlRm9ybS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccmlmICh0YXJnZXQuaXMoYC4ke0NMQVNTX05BTUVTLkNPTVBPTkVOVH1gKSkge1xyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIobnVsbCk7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZSh0YXJnZXQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJzaWRlYmFyVGl0bGUuaHRtbChjb21wb25lbnREYXRhLnNldHRpbmdUaXRsZSk7XHJsZXQgc2V0dGluZ0Zvcm1DbGFzcyA9IGAke0NMQVNTX05BTUVTLlNFVFRJTkd9LSR7Y29tcG9uZW50VHlwZX1gO1xybGV0IHNldHRpbmdGb3JtID0gc2lkZWJhckJvZHkuZmluZChgLiR7c2V0dGluZ0Zvcm1DbGFzc31gKTtccmlmIChzZXR0aW5nRm9ybS5sZW5ndGggPT09IDApIHtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmluaXRTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyc2V0dGluZ0Zvcm0gPSAkKGBccjxkaXZccmRhdGEtdHlwZT1cIiR7Y29tcG9uZW50VHlwZX1cIlxyY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STX0gJHtzZXR0aW5nRm9ybUNsYXNzfSBjbGVhcmZpeCAke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkV9XCJccj5ccjwvZGl2PlxyYCk7XHJsZXQgbG9hZGluZ1RleHQgPSAkKCc8c3BhbiAvPicpLmh0bWwoJ0xvYWRpbmcuLi4nKTtccnNpZGViYXJCb2R5LmFwcGVuZChzZXR0aW5nRm9ybSk7XHJzZXR0aW5nRm9ybS5hcHBlbmQobG9hZGluZ1RleHQpO1xybGV0IGluaXRGdW5jdGlvbiA9IGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHNlbGYpO1xyJC53aGVuKGluaXRGdW5jdGlvbikuZG9uZShmdW5jdGlvbiAoKSB7XHJzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtccmxvYWRpbmdUZXh0LnJlbW92ZSgpO1xyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgdGFyZ2V0LCBzZWxmKTtccn1ccn0sIDEwMCk7XHJ9KTtccn1ccn0gZWxzZSB7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRSk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKHRhcmdldCk7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQobnVsbCk7XHJzaWRlYmFyVGl0bGUuaHRtbCgnQ29udGFpbmVyIFNldHRpbmdzJyk7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfQ09OVEFJTkVSfWApO1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbi5jYWxsKHNlbGYsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyc2V0dGluZ0Zvcm0uYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRSk7XHJ9XHJzaWRlYmFyLmFkZENsYXNzKENMQVNTX05BTUVTLlNJREVCQVJfT1BFTkVEKTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSBcIi4vcmVuZGVyU25pcHBldFwiO1xyXG5pbXBvcnQgcmVuZGVyU25pcHBldEZpbHRlciBmcm9tIFwiLi9yZW5kZXJTbmlwcGV0RmlsdGVyXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXSA9IHJlbmRlclNuaXBwZXQuY2FsbChzZWxmLCB0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKTtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29tcG9uZW50JykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbCk7XHJ9XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldENvbnRlbnRIdG1sKTtccmxldCBmaWx0ZXJUeXBlO1xyaWYgKG9wdGlvbnMuc25pcHBldHNGaWx0ZXJFbmFibGVkKSB7XHJpZiAob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkKSB7XHJmaWx0ZXJUeXBlID0gdHlwZSA9PT0gJ2NvbnRhaW5lcicgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkNPTVBPTkVOVDtccn0gZWxzZSB7XHJmaWx0ZXJUeXBlID0gU05JUFBFVF9UWVBFLkFMTDtccn1ccn1ccmxldCBbY2F0ZWdvcmllc09wdGlvbnMsIHNuaXBwZXRzV3JhcHBlcl0gPSByZW5kZXJTbmlwcGV0RmlsdGVyLmNhbGwodGhpcywgZmlsdGVyVHlwZSk7XHJzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtZmlsdGVyJykuaHRtbChjYXRlZ29yaWVzT3B0aW9ucykudHJpZ2dlcignY2hhbmdlJyk7XHJcbn07XHJcbiIsImltcG9ydCByZW5kZXJTbmlwcGV0RmlsdGVyIGZyb20gXCIuL3JlbmRlclNuaXBwZXRGaWx0ZXJcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBbY2F0ZWdvcmllc09wdGlvbnMsIHNuaXBwZXRzV3JhcHBlcl0gPSByZW5kZXJTbmlwcGV0RmlsdGVyLmNhbGwodGhpcywgdHlwZSk7XHJzbmlwcGV0c1dyYXBwZXIucHJlcGVuZChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlci13cmFwcGVyXCI+XHI8c2VsZWN0IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRzLWZpbHRlclwiPlxyJHtjYXRlZ29yaWVzT3B0aW9uc31ccjwvc2VsZWN0PlxyPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtc2VhcmNoXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIlR5cGUgdG8gc2VhcmNoLi4uXCIgLz5ccjwvZGl2PlxyYCk7XHJsZXQgdHh0U2VhcmNoID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXNlYXJjaCcpO1xybGV0IGNiYkZpbHRlciA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1maWx0ZXInKTtccmxldCBkb0ZpbHRlciA9IGZ1bmN0aW9uICgpIHtccmxldCBzZWxlY3RlZENhdGVnb3J5ID0gKGNiYkZpbHRlci52YWwoKSB8fCAnJykudG9Mb3dlckNhc2UoKTtccmxldCBzZWFyY2hUZXh0ID0gKHR4dFNlYXJjaC52YWwoKSB8fCAnJykudG9Mb3dlckNhc2UoKTtccmxldCBzbmlwcGV0cyA9IHNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmNoaWxkcmVuKCcua2VkaXRvci1zbmlwcGV0Jyk7XHJzbmlwcGV0cy5maWx0ZXIoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgfHwgc2VhcmNoVGV4dCkge1xyc25pcHBldHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc25pcHBldCA9ICQodGhpcyk7XHJsZXQgZGF0YUNhdGVnb3JpZXNTdHJpbmcgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJykudG9Mb3dlckNhc2UoKTtccmxldCBkYXRhQ2F0ZWdvcmllcyA9IGRhdGFDYXRlZ29yaWVzU3RyaW5nLnNwbGl0KG9wdGlvbnMuc25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yKTtccmxldCBlcnJvciA9IDA7XHJpZiAoc2VsZWN0ZWRDYXRlZ29yeSkge1xyaWYgKCQuaW5BcnJheShzZWxlY3RlZENhdGVnb3J5LCBkYXRhQ2F0ZWdvcmllcykgPT09IC0xKSB7XHJlcnJvcisrO1xyfVxyfVxyaWYgKHNlYXJjaFRleHQpIHtccmxldCB0aXRsZSA9IHNuaXBwZXQuYXR0cigndGl0bGUnKS50b0xvd2VyQ2FzZSgpO1xyaWYgKHRpdGxlLmluZGV4T2Yoc2VhcmNoVGV4dCkgPT09IC0xICYmIGRhdGFDYXRlZ29yaWVzU3RyaW5nLmluZGV4T2Yoc2VhcmNoVGV4dCkgPT09IC0xKSB7XHJlcnJvcisrO1xyfVxyfVxyc25pcHBldFtlcnJvciA9PT0gMCA/ICdyZW1vdmVDbGFzcycgOiAnYWRkQ2xhc3MnXSgnbm90LW1hdGNoZWQnKTtccn0pO1xyfSBlbHNlIHtccnNuaXBwZXRzLnJlbW92ZUNsYXNzKCdub3QtbWF0Y2hlZCcpO1xyfVxyfTtccmNiYkZpbHRlci5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyZG9GaWx0ZXIoKTtccn0pO1xybGV0IHRpbWVyO1xydHh0U2VhcmNoLm9uKCdrZXlkb3duJywgZnVuY3Rpb24gKCkge1xyY2xlYXJUaW1lb3V0KHRpbWVyKTtccnRpbWVyID0gc2V0VGltZW91dChkb0ZpbHRlciwgMjAwKTtccn0pO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGV4dHJhRGF0YSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc25pcHBldElkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJsZXQgc25pcHBldFByZXZpZXdIdG1sID0gYFxyPHNlY3Rpb25ccmNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLXNuaXBwZXRcIlxyZGF0YS1zbmlwcGV0PVwiIyR7c25pcHBldElkfVwiXHJkYXRhLXR5cGU9XCIke3R5cGV9XCJccnRpdGxlPVwiJHt0aXRsZX1cIlxyZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXM9XCIke2NhdGVnb3JpZXN9XCJccj5ccjxzcGFuPjxzcGFuIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke3ByZXZpZXdVcmx9JylcIj48L3NwYW4+PC9zcGFuPlxyPC9zZWN0aW9uPlxyYDtccmxldCBzbmlwcGV0Q29udGVudEh0bWwgPSBgPHNjcmlwdCBpZD1cIiR7c25pcHBldElkfVwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiAke2V4dHJhRGF0YS5qb2luKCcgJyl9PiR7Y29udGVudH08L3NjcmlwdD5gO1xyY2F0ZWdvcmllcyA9IGNhdGVnb3JpZXMuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLmNvbmNhdChjYXRlZ29yaWVzKTtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMuY29uY2F0KGNhdGVnb3JpZXMpO1xyfVxycmV0dXJuIFtccnNuaXBwZXRQcmV2aWV3SHRtbCxccnNuaXBwZXRDb250ZW50SHRtbFxyXTtcclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG1vZGFsID0gc2VsZi5tb2RhbDtccmxldCBjYXRlZ29yaWVzO1xybGV0IHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyJztccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyY2F0ZWdvcmllcyA9IHNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzO1xyc25pcHBldHNXcmFwcGVyU2VsZWN0b3IgPSAnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlci1jb250YWluZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbXBvbmVudCc7XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJsZXQgY2F0ZWdvcmllc09wdGlvbnMgPSAnPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPVwic2VsZWN0ZWRcIj5BbGw8L29wdGlvbj4nO1xyJC5lYWNoKGNhdGVnb3JpZXMsIGZ1bmN0aW9uIChpLCBjYXRlZ29yeSkge1xyY2F0ZWdvcmllc09wdGlvbnMgKz0gYDxvcHRpb24gdmFsdWU9XCIke2NhdGVnb3J5fVwiPiR7Y2F0ZWdvcnl9PC9vcHRpb24+YDtccn0pO1xycmV0dXJuIFtccmNhdGVnb3JpZXNPcHRpb25zLFxybW9kYWwuZmluZChzbmlwcGV0c1dyYXBwZXJTZWxlY3Rvcilccl07XHJcbn07XHJcbiIsImltcG9ydCByZW5kZXJTbmlwcGV0IGZyb20gJy4vcmVuZGVyU25pcHBldCc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocmVzcCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc25pcHBldHNDb250YWluZXJIdG1sID0gJyc7XHJsZXQgc25pcHBldHNDb21wb25lbnRIdG1sID0gJyc7XHJsZXQgc25pcHBldHNDb250ZW50SHRtbCA9ICcnO1xyc2VsZi5zbmlwcGV0c0NhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gW107XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IFtdO1xyJChyZXNwKS5maWx0ZXIoJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xybGV0IGNvbnRlbnQgPSBzbmlwcGV0Lmh0bWwoKS50cmltKCk7XHJsZXQgcHJldmlld1VybCA9IHNuaXBwZXQuYXR0cignZGF0YS1wcmV2aWV3Jyk7XHJsZXQgdHlwZSA9IHNuaXBwZXQuYXR0cignZGF0YS10eXBlJyk7XHJsZXQgdGl0bGUgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci10aXRsZScpO1xybGV0IGNhdGVnb3JpZXMgPSBzbmlwcGV0LmF0dHIoJ2RhdGEta2VkaXRvci1jYXRlZ29yaWVzJykgfHwgJyc7XHJsZXQgZGF0YUF0dHJpYnV0ZXMgPSBzZWxmLmdldERhdGFBdHRyaWJ1dGVzKHNuaXBwZXQsIFsnZGF0YS1wcmV2aWV3JywgJ2RhdGEtdHlwZScsICdkYXRhLWtlZGl0b3ItdGl0bGUnLCAnZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnXSwgdHJ1ZSk7XHJsZXQgW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdID0gcmVuZGVyU25pcHBldC5jYWxsKHNlbGYsIHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBkYXRhQXR0cmlidXRlcyk7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNuaXBwZXRzQ29udGFpbmVySHRtbCArPSBzbmlwcGV0UHJldmlld0h0bWw7XHJ9IGVsc2UgaWYgKHR5cGUuaW5kZXhPZignY29tcG9uZW50JykgIT09IC0xKSB7XHJzbmlwcGV0c0NvbXBvbmVudEh0bWwgKz0gc25pcHBldFByZXZpZXdIdG1sO1xyfVxyc25pcHBldHNDb250ZW50SHRtbCArPSBzbmlwcGV0Q29udGVudEh0bWw7XHJ9KTtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMpO1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKFsuLi5zZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcywgLi4uc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXNdKTtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtY29udGFpbmVyJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwpO1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnQnKS5odG1sKHNuaXBwZXRzQ29tcG9uZW50SHRtbCk7XHJ9IGVsc2Uge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cycpLmh0bWwoc25pcHBldHNDb250YWluZXJIdG1sICsgc25pcHBldHNDb21wb25lbnRIdG1sKVxyfVxyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1tb2RhbC1ib2R5JykuYXBwZW5kKHNuaXBwZXRzQ29udGVudEh0bWwpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IHRvcGJhckNlbnRlciA9IHNlbGYudG9wYmFyQ2VudGVyO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgYnRuTW9iaWxlID0gJChgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLW1vYmlsZVwiPjwvaT48L2E+YCk7XHJidG5Nb2JpbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnRvcGJhckNlbnRlci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1gKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJzZWxmLmlmcmFtZVdyYXBwZXIuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGhNb2JpbGUpO1xyYnRuTW9iaWxlLmFkZENsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccn0pO1xybGV0IGJ0blRhYmxldCA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT059XCI+PGkgY2xhc3M9XCJmYSBmYS1mdyBmYS10YWJsZXRcIj48L2k+PC9hPmApO1xyYnRuVGFibGV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJ0b3BiYXJDZW50ZXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkV9YCkucmVtb3ZlQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyc2VsZi5pZnJhbWVXcmFwcGVyLmNzcygnd2lkdGgnLCBvcHRpb25zLndpZHRoVGFibGV0KTtccmJ0blRhYmxldC5hZGRDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJ9KTtccmxldCBidG5EZXNrdG9wID0gJChgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWRlc2t0b3BcIj48L2k+PC9hPmApO1xyYnRuRGVza3RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgJycpO1xyYnRuRGVza3RvcC5hZGRDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJ9KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuTW9iaWxlKTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuVGFibGV0KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuRGVza3RvcCk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgdG9wYmFySWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccnNlbGYudG9wYmFyID0gJChgXHI8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJ9XCIgaWQ9XCIke3RvcGJhcklkfVwiPlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0xFRlR9XCI+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9DRU5URVJ9XCI+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1cIj5ccjwvZGl2PlxyPC9kaXY+XHJgKTtccnNlbGYudG9wYmFyTGVmdCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9MRUZUfWApO1xyc2VsZi50b3BiYXJDZW50ZXIgPSBzZWxmLnRvcGJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQ0VOVEVSfWApO1xyc2VsZi50b3BiYXJSaWdodCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1gKTtccnNlbGYudG9wYmFyLmFwcGVuZFRvKHNlbGYud3JhcHBlcik7XHJzZWxmLmluaXREZXZpY2VTd2l0Y2hlcigpO1xyc2VsZi5pbml0VG9wYmFyTW9kZXMoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNhdGVnb3JpZXMpIHtccmxldCBuZXdBcnJheSA9IFtdO1xyZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJsZXQgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2ldIHx8ICcnO1xyaWYgKGNhdGVnb3J5ICE9PSAnJyAmJiAkLmluQXJyYXkoY2F0ZWdvcnksIG5ld0FycmF5KSA9PT0gLTEpIHtccm5ld0FycmF5LnB1c2goY2F0ZWdvcnkpO1xyfVxyfVxycmV0dXJuIG5ld0FycmF5LnNvcnQoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJsZXQgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTg3NjU0MzIxMCk7XHJyZXR1cm4gYGtlZGl0b3ItdWktJHt0aW1lc3RhbXB9JHtyYW5kb219YDtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvdG9vbGJhclR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzZXR0aW5nQnRuID0gJyc7XHJpZiAoIW9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybGV0IHRvb2xiYXJDbGFzcyA9ICcnO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXInO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXInO1xycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSAke3Rvb2xiYXJDbGFzc31cIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRlbnRcIiB0aXRsZT1cIkFkZCBjb250ZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbnRlbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBjb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyIGtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhciBrZWRpdG9yLWJ0bi1ncm91cFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgc3ViLWNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRTdWJDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09NUE9ORU5UOlxyaWYgKGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29tcG9uZW50VGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29tcG9uZW50XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbXBvbmVudFRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdG9yKSB7XHJsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xybGV0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XHJpZiAodGFyZ2V0LmlzKHNlbGVjdG9yKSkge1xycmV0dXJuIHRhcmdldDtccn0gZWxzZSBpZiAoY2xvc2VzdC5sZW5ndGggPiAwKSB7XHJyZXR1cm4gY2xvc2VzdDtccn0gZWxzZSB7XHJyZXR1cm4gbnVsbDtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheSkge1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gaXNBcnJheSA/IFtdIDoge307XHJpZiAoIWlnbm9yZUF0dHJpYnV0ZXMpIHtccmlnbm9yZUF0dHJpYnV0ZXMgPSBbXTtccn1cciQuZWFjaCh0YXJnZXQuZ2V0KDApLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJpZiAoYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDAgJiYgJC5pbkFycmF5KGF0dHIubmFtZSwgaWdub3JlQXR0cmlidXRlcykgPT09IC0xKSB7XHJpZiAoaXNBcnJheSkge1xyZGF0YUF0dHJpYnV0ZXMucHVzaChgJHthdHRyLm5hbWV9PVwiJHthdHRyLnZhbHVlfVwiYCk7XHJ9IGVsc2Uge1xyZGF0YUF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XHJ9XHJ9XHJ9KTtccnJldHVybiBkYXRhQXR0cmlidXRlcztcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=