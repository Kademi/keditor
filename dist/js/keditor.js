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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb21wb25lbnQvY29udmVydFRvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbXBvbmVudC9kZWxldGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXRDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvY2xhc3NOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb25zdGFudHMvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29uc3RhbnRzL3NuaXBwZXRUeXBlLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnN0YW50cy90b29sYmFyVHlwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250YWluZXIvY29udmVydFRvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2NvbnRhaW5lci9pbml0Q29udGFpbmVyQ29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvY29udGVudEFyZWEvaW5pdENvbnRlbnRBcmVhV3JhcHBlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL2Rlc3Ryb3kuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvZ2V0Q29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pZnJhbWUvaW5pdElmcmFtZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvaWZyYW1lL2luaXRJZnJhbWVDb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9pbml0LmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL21vZGFsL2Nsb3NlTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvaW5pdFNuaXBwZXRzTW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvbW9kYWwvb3Blbk1vZGFsLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NldENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9jbG9zZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc2lkZWJhci9pbml0U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zaWRlYmFyL29wZW5TaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvYWRkU25pcHBldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L2luaXRTbmlwcGV0c0ZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci9zbmlwcGV0L3JlbmRlclNuaXBwZXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3Ivc25pcHBldC9yZW5kZXJTbmlwcGV0RmlsdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3NuaXBwZXQvcmVuZGVyU25pcHBldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tlZGl0b3IvdG9wYmFyL2luaXREZXZpY2VTd2l0Y2hlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci90b3BiYXIvaW5pdFRvcGJhck1vZGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2JlYXV0aWZ5Q2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZW5lcmF0ZUlkLmpzIiwid2VicGFjazovLy8uL3NyYy9rZWRpdG9yL3V0aWxzL2dlbmVyYXRlVG9vbGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXRDbGlja2VkRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMva2VkaXRvci91dGlscy9nZXREYXRhQXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2tlZGl0b3IubGVzcz8yNmYzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImNvbnRlbnRBcmVhIiwiY29udGFpbmVyIiwidGFyZ2V0IiwiaXNFeGlzdGluZyIsImlzIiwic2VsZiIsImlzU2VjdGlvbiIsImNvbXBvbmVudCIsImFkZENsYXNzIiwid3JhcElubmVyIiwid3JhcCIsInBhcmVudCIsImluaXRDb21wb25lbnQiLCJjb21wb25lbnRUeXBlIiwiZ2V0Q29tcG9uZW50VHlwZSIsImNvbXBvbmVudERhdGEiLCJLRWRpdG9yIiwiY29tcG9uZW50cyIsImRlc3Ryb3kiLCJjYWxsIiwicmVtb3ZlIiwiY2xvbmVkQ29tcG9uZW50IiwiY2xvbmUiLCJkYXRhQXR0cmlidXRlcyIsImdldERhdGFBdHRyaWJ1dGVzIiwiY29udGVudCIsImlmcmFtZVdyYXBwZXIiLCJmaW5kIiwibGVuZ3RoIiwiaWZyYW1lIiwiY2hpbGRyZW4iLCJoYXNDbGFzcyIsInVud3JhcCIsInJlbW92ZUNsYXNzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudENvbnRlbnQiLCJodG1sIiwiZWFjaCIsIiQiLCJqb2luIiwib3B0aW9ucyIsImF0dHIiLCJyZXBsYWNlIiwiZGVmYXVsdENvbXBvbmVudFR5cGUiLCJlcnJvciIsImdlbmVyYXRlSWQiLCJvbkJlZm9yZUluaXRDb21wb25lbnQiLCJhcHBlbmQiLCJnZW5lcmF0ZVRvb2xiYXIiLCJUT09MQkFSX1RZUEUiLCJDT01QT05FTlQiLCJzZXR0aW5nRW5hYmxlZCIsImR5bmFtaWNFbGVtZW50IiwiaW5pdER5bmFtaWNDb250ZW50IiwiaW5pdCIsIm9uSW5pdENvbXBvbmVudCIsImNsb3Nlc3QiLCJvbkJlZm9yZUR5bmFtaWNDb250ZW50TG9hZCIsImR5bmFtaWNIcmVmIiwiZGF0YSIsInBhcmFtIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsInN0YXR1cyIsImpxWEhSIiwib25EeW5hbWljQ29udGVudExvYWRlZCIsInRleHRTdGF0dXMiLCJlcnJvclRocm93biIsIm9uRHluYW1pY0NvbnRlbnRFcnJvciIsIkNMQVNTX05BTUVTIiwiVUkiLCJXUkFQUEVSIiwiSElEREVOX0VMRU1FTlQiLCJTSURFQkFSIiwiU0lERUJBUl9IRUFERVIiLCJTSURFQkFSX0JPRFkiLCJTSURFQkFSX1RJVExFIiwiU0lERUJBUl9DTE9TRVIiLCJTSURFQkFSX09QRU5FRCIsIlRPUEJBUiIsIlRPUEJBUl9MRUZUIiwiVE9QQkFSX1JJR0hUIiwiVE9QQkFSX0NFTlRFUiIsIlRPUEJBUl9CVVRUT04iLCJUT1BCQVJfQlVUVE9OX0FDVElWRSIsIlNFVFRJTkciLCJTRVRUSU5HX0NPTlRBSU5FUiIsIlNFVFRJTkdfRk9STSIsIlNFVFRJTkdfRk9STV9BQ1RJVkUiLCJDT05URU5UX0FSRUFTX1dSQVBQRVIiLCJDT05URU5UX0FSRUFTIiwiQ09OVEVOVF9BUkVBIiwiSUZSQU1FIiwiSUZSQU1FX1dSQVBQRVIiLCJJRlJBTUVfRkFLRVIiLCJJRlJBTUVfQ09WRVJfV1JBUFBFUiIsIklGUkFNRV9DT1ZFUiIsIklGUkFNRV9DT1ZFUl9ISURERU4iLCJuZXN0ZWRDb250YWluZXJFbmFibGVkIiwiZXhwbGljaXRTbmlwcGV0RW5hYmxlZCIsImNvbnRhaW5lckZvclF1aWNrQWRkQ29tcG9uZW50IiwiYnRuQWRkQ29udGVudFRleHQiLCJidG5BZGRDb250YWluZXJUZXh0IiwiYnRuQWRkU3ViQ29udGFpbmVyVGV4dCIsImJ0bkFkZENvbXBvbmVudFRleHQiLCJidG5Nb3ZlQ29udGFpbmVyVGV4dCIsImJ0bk1vdmVDb21wb25lbnRUZXh0IiwiYnRuU2V0dGluZ0NvbnRhaW5lclRleHQiLCJidG5TZXR0aW5nQ29tcG9uZW50VGV4dCIsImJ0bkR1cGxpY2F0ZUNvbnRhaW5lclRleHQiLCJidG5EdXBsaWNhdGVDb21wb25lbnRUZXh0IiwiYnRuRGVsZXRlQ29udGFpbmVyVGV4dCIsImJ0bkRlbGV0ZUNvbXBvbmVudFRleHQiLCJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dCIsImNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0Iiwid2lkdGhNb2JpbGUiLCJ3aWR0aFRhYmxldCIsInNuaXBwZXRzVXJsIiwic25pcHBldHNGaWx0ZXJFbmFibGVkIiwic25pcHBldHNDYXRlZ29yaWVzU2VwYXJhdG9yIiwiY29udGVudFN0eWxlcyIsImNvbnRlbnRBcmVhc1NlbGVjdG9yIiwiY29udGVudEFyZWFzV3JhcHBlciIsImNvbnRhaW5lclNldHRpbmdFbmFibGVkIiwiY29udGFpbmVyU2V0dGluZ0luaXRGdW5jdGlvbiIsImNvbnRhaW5lclNldHRpbmdTaG93RnVuY3Rpb24iLCJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uIiwib25SZWFkeSIsIm9uU25pcHBldHNMb2FkZWQiLCJyZXNwIiwib25TbmlwcGV0c0Vycm9yIiwib25Jbml0SWZyYW1lIiwiaWZyYW1lSGVhZCIsImlmcmFtZUJvZHkiLCJvbkNvbnRlbnRDaGFuZ2VkIiwiZXZlbnQiLCJvbkJlZm9yZUluaXRDb250ZW50QXJlYSIsIm9uSW5pdENvbnRlbnRBcmVhIiwib25CZWZvcmVJbml0Q29udGFpbmVyIiwib25Jbml0Q29udGFpbmVyIiwib25CZWZvcmVDb250YWluZXJEZWxldGVkIiwic2VsZWN0ZWRDb250YWluZXIiLCJvbkNvbnRhaW5lckRlbGV0ZWQiLCJvbkNvbnRhaW5lckNoYW5nZWQiLCJjaGFuZ2VkQ29udGFpbmVyIiwib25Db250YWluZXJEdXBsaWNhdGVkIiwib3JpZ2luYWxDb250YWluZXIiLCJuZXdDb250YWluZXIiLCJvbkNvbnRhaW5lclNlbGVjdGVkIiwib25Db250YWluZXJTbmlwcGV0QWRkZWQiLCJzZWxlY3RlZFNuaXBwZXQiLCJvbkNvbXBvbmVudFJlYWR5Iiwib25CZWZvcmVDb21wb25lbnREZWxldGVkIiwic2VsZWN0ZWRDb21wb25lbnQiLCJvbkNvbXBvbmVudERlbGV0ZWQiLCJvbkNvbXBvbmVudENoYW5nZWQiLCJjaGFuZ2VkQ29tcG9uZW50Iiwib25Db21wb25lbnREdXBsaWNhdGVkIiwib3JpZ2luYWxDb21wb25lbnQiLCJuZXdDb21wb25lbnQiLCJvbkNvbXBvbmVudFNlbGVjdGVkIiwib25Db21wb25lbnRTbmlwcGV0QWRkZWQiLCJBTEwiLCJDT05UQUlORVIiLCJTVUJfQ09OVEFJTkVSIiwiQ09OVEFJTkVSX0NPTlRFTlQiLCJTVUJfQ09OVEFJTkVSX0NPTlRFTlQiLCJpbml0Q29udGFpbmVyIiwiaXNOZXN0ZWQiLCJjb250YWluZXJJbm5lciIsIm5vdCIsImNvbnRhaW5lckNvbnRlbnQiLCJyZW1vdmVBdHRyIiwiY29udGFpbmVyQ29udGVudElubmVyIiwiY2hpbGQiLCJnZXRDb21wb25lbnRDb250ZW50IiwiZ2V0Q29udGFpbmVyQ29udGVudCIsImNvbnRhaW5lckNvbnRlbnRzIiwicGFyZW50cyIsImluaXRDb250YWluZXJDb250ZW50IiwiY29udGFpbmVyQ29udGVudFRvb2xiYXIiLCJhcHBlbmRUbyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0Iiwib3Blbk1vZGFsIiwiU05JUFBFVF9UWVBFIiwic29ydGFibGUiLCJoYW5kbGUiLCJoZWxwZXIiLCJpdGVtcyIsImNvbm5lY3RXaXRoIiwidG9sZXJhbmNlIiwic29ydCIsInJlY2VpdmUiLCJ1aSIsIml0ZW0iLCJzdGFydCIsInN0b3AiLCJjb252ZXJ0VG9Db250YWluZXIiLCJjb252ZXJ0VG9Db21wb25lbnQiLCJkb250SW5pdFRvb2xiYXIiLCJjb250ZW50QXJlYUlubmVyIiwiY29udGVudEFyZWFUb29sYmFyIiwiYXhpcyIsImNsb3NlU2lkZWJhciIsImNvbnRlbnREYXRhIiwiZWxlbWVudCIsIndyYXBwZXIiLCJhZnRlciIsImlmcmFtZURvYyIsImNvbnRlbnRzIiwiZ2V0Iiwib3BlbiIsImNsb3NlIiwiaWZyYW1lV2luZG93IiwiY29udGVudFdpbmRvdyIsImNvbnRlbnREb2N1bWVudCIsImRlZmF1bHRWaWV3Iiwic3R5bGVzIiwic3R5bGUiLCJpZFN0ciIsImhyZWYiLCJpc0FycmF5IiwiaSIsImlkIiwidmFsIiwiaW5pdENvbnRlbnRBcmVhcyIsImluaXRJZnJhbWVBY3Rpb25zIiwiY29udGVudEFyZWFzIiwib3JpZ2luYWxDb250ZW50IiwiZW1wdHkiLCJpbml0Q29udGVudEFyZWEiLCJpbnN0YW5jZXMiLCJpbkFycmF5IiwicmVzdWx0IiwicHVzaCIsInNpZGViYXIiLCJnZXRDbGlja2VkRWxlbWVudCIsIm1vZGFsIiwiYnRuIiwic2V0dGluZ0NvbnRhaW5lciIsIm9wZW5TaWRlYmFyIiwiY29uZmlybSIsInNldHRpbmdDb21wb25lbnQiLCJzZXR0aW5nQ29tcG9uZW50UGFyZW50IiwiZGVsZXRlQ29tcG9uZW50IiwiY292ZXIiLCJwcmVwZW5kIiwiZm4iLCJjb25zb2xlIiwibG9nIiwia2VkaXRvciIsImRlYnVnIiwiYXJncyIsImFwcGx5IiwibWVzc2FnZSIsIkVycm9yIiwiY29uZmlnIiwiaXNDb21wb25lbnRDb25maWd1cmFibGUiLCJjYXRlZ29yaWVzIiwiYmVhdXRpZnlDYXRlZ29yaWVzIiwiaWdub3JlQXR0cmlidXRlcyIsInNlbGVjdG9yIiwiaW5pdElmcmFtZUNvdmVyIiwiaW5pdFRvcGJhciIsImluaXREZXZpY2VTd2l0Y2hlciIsImluaXRUb3BiYXJNb2RlcyIsImluaXRTaWRlYmFyIiwiaW5pdFNuaXBwZXRzTW9kYWwiLCJyZW5kZXJTbmlwcGV0cyIsImluaXRTbmlwcGV0c0ZpbHRlciIsInNuaXBwZXRUeXBlIiwiY2xvc2VNb2RhbCIsImluaXRDb250ZW50QXJlYVdyYXBwZXIiLCJzZXRDb250ZW50IiwidGl0bGUiLCJwcmV2aWV3VXJsIiwiYWRkU25pcHBldCIsIkRFRkFVTFRTIiwiYmxhbmsiLCJpbnN0YW5jZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJhcmd1bWVudHMiLCJ3aW5kb3ciLCJjb25zdHJ1Y3RvciIsImV4dGVuZCIsIm1vZGFsVGFyZ2V0IiwibW9kYWxBY3Rpb24iLCJtb2RhbElkIiwic25pcHBldHNXcmFwcGVySHRtbCIsInNuaXBwZXRDb250ZW50RWxlbWVudCIsInNuaXBwZXRDb250ZW50IiwiaXNBZGRpbmdDb250YWluZXIiLCJpc0FkZGluZ0NvbXBvbmVudCIsImlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciIsIm1vZGFsU25pcHBldFR5cGUiLCJib2R5IiwiZXEiLCJzbmlwcGV0IiwiY3NzVHJhbnNpdGlvbkVuZCIsImNzcyIsImRvY3VtZW50IiwibW9kYWxUaXRsZSIsInNldFRpbWVvdXQiLCJqcXVlcnkiLCJhY3RpdmVGb3JtIiwiYWN0aXZlVHlwZSIsImhpZGVTZXR0aW5nRm9ybSIsInNldFNldHRpbmdDb21wb25lbnQiLCJzZXRTZXR0aW5nQ29udGFpbmVyIiwic2lkZWJhcklkIiwic2lkZWJhckJvZHkiLCJmb3JtIiwic2lkZWJhclRpdGxlIiwic2V0dGluZ1RpdGxlIiwic2V0dGluZ0Zvcm1DbGFzcyIsInNldHRpbmdGb3JtIiwiaW5pdFNldHRpbmdGb3JtIiwibG9hZGluZ1RleHQiLCJpbml0RnVuY3Rpb24iLCJ3aGVuIiwiZG9uZSIsInNob3dTZXR0aW5nRm9ybSIsImV4dHJhRGF0YSIsInJlbmRlclNuaXBwZXQiLCJzbmlwcGV0UHJldmlld0h0bWwiLCJzbmlwcGV0Q29udGVudEh0bWwiLCJzbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMiLCJzbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMiLCJzbmlwcGV0c0NhdGVnb3JpZXMiLCJpbmRleE9mIiwiZmlsdGVyVHlwZSIsInJlbmRlclNuaXBwZXRGaWx0ZXIiLCJjYXRlZ29yaWVzT3B0aW9ucyIsInNuaXBwZXRzV3JhcHBlciIsInRyaWdnZXIiLCJ0eHRTZWFyY2giLCJjYmJGaWx0ZXIiLCJkb0ZpbHRlciIsInNlbGVjdGVkQ2F0ZWdvcnkiLCJ0b0xvd2VyQ2FzZSIsInNlYXJjaFRleHQiLCJzbmlwcGV0cyIsImZpbHRlciIsImRhdGFDYXRlZ29yaWVzU3RyaW5nIiwiZGF0YUNhdGVnb3JpZXMiLCJzcGxpdCIsInRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic25pcHBldElkIiwiY29uY2F0Iiwic25pcHBldHNXcmFwcGVyU2VsZWN0b3IiLCJjYXRlZ29yeSIsInNuaXBwZXRzQ29udGFpbmVySHRtbCIsInNuaXBwZXRzQ29tcG9uZW50SHRtbCIsInNuaXBwZXRzQ29udGVudEh0bWwiLCJ0cmltIiwidG9wYmFyQ2VudGVyIiwiYnRuTW9iaWxlIiwiYnRuVGFibGV0IiwiYnRuRGVza3RvcCIsInRvcGJhcklkIiwidG9wYmFyIiwidG9wYmFyTGVmdCIsInRvcGJhclJpZ2h0IiwibmV3QXJyYXkiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0VGltZSIsInJhbmRvbSIsIk1hdGgiLCJyb3VuZCIsInNldHRpbmdCdG4iLCJ0b29sYmFyQ2xhc3MiLCJh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Qzs7Ozs7Ozs7Ozs7O0FDVkQ7QUFBZSx5RUFBVXRELE1BQVYsRUFBa0J3USxnQkFBbEIsRUFBb0N2QyxPQUFwQyxFQUE2QztBQUM1RCxNQUFJNU0sY0FBYyxHQUFHNE0sT0FBTyxHQUFHLEVBQUgsR0FBUSxFQUFwQzs7QUFDQSxNQUFJLENBQUN1QyxnQkFBTCxFQUF1QjtBQUN2QkEsb0JBQWdCLEdBQUcsRUFBbkI7QUFDQzs7QUFDRHBPLEdBQUMsQ0FBQ0QsSUFBRixDQUFPbkMsTUFBTSxDQUFDc04sR0FBUCxDQUFXLENBQVgsRUFBY3FLLFVBQXJCLEVBQWlDLFVBQVV6SixDQUFWLEVBQWEzTCxJQUFiLEVBQW1CO0FBQ3BELFFBQUlBLElBQUksQ0FBQ3FWLElBQUwsQ0FBVTdDLE9BQVYsQ0FBa0IsT0FBbEIsTUFBK0IsQ0FBL0IsSUFBb0MzUyxDQUFDLENBQUN3TSxPQUFGLENBQVVyTSxJQUFJLENBQUNxVixJQUFmLEVBQXFCcEgsZ0JBQXJCLE1BQTJDLENBQUMsQ0FBcEYsRUFBdUY7QUFDdkYsVUFBSXZDLE9BQUosRUFBYTtBQUNiNU0sc0JBQWMsQ0FBQ3lOLElBQWYsV0FBdUJ2TSxJQUFJLENBQUNxVixJQUE1QixnQkFBcUNyVixJQUFJLENBQUNzVixLQUExQztBQUNDLE9BRkQsTUFFTztBQUNQeFcsc0JBQWMsQ0FBQ2tCLElBQUksQ0FBQ3FWLElBQU4sQ0FBZCxHQUE0QnJWLElBQUksQ0FBQ3NWLEtBQWpDO0FBQ0M7QUFDQTtBQUNBLEdBUkQ7QUFTQSxTQUFPeFcsY0FBUDtBQUNDO0FBQUEsQzs7Ozs7Ozs7Ozs7QUNmRCx1Qzs7Ozs7Ozs7Ozs7QUNBQSxvRCIsImZpbGUiOiJqcy9rZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImpRdWVyeVwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwialF1ZXJ5XCIpKSA6IGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2tlZGl0b3IvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgdGFyZ2V0LCBpc0V4aXN0aW5nKSB7XHJpZiAodGFyZ2V0LmlzKCcua2VkaXRvci1jb250YWluZXItY29udGVudC10b29sYmFyJykpIHtccnJldHVybjtccn1ccmxldCBzZWxmID0gdGhpcztccmxldCBpc1NlY3Rpb24gPSB0YXJnZXQuaXMoJ3NlY3Rpb24nKTtccmxldCBjb21wb25lbnQ7XHJpZiAoaXNTZWN0aW9uKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQnKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbXBvbmVudC1jb250ZW50XCI+PC9zZWN0aW9uPicpO1xyY29tcG9uZW50ID0gdGFyZ2V0O1xyfSBlbHNlIHtccnRhcmdldC53cmFwKCc8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnRcIj48c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPjwvc2VjdGlvbj48L3NlY3Rpb24+Jyk7XHJjb21wb25lbnQgPSB0YXJnZXQucGFyZW50KCkucGFyZW50KCk7XHJ9XHJpZiAoaXNFeGlzdGluZykge1xyY29tcG9uZW50LmFkZENsYXNzKCdleGlzdGluZy1jb21wb25lbnQnKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29tcG9uZW50VHlwZSA9IHNlbGYuZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50RGF0YS5kZXN0cm95LmNhbGwoY29tcG9uZW50RGF0YSwgY29tcG9uZW50LCBzZWxmKTtccn1ccmNvbXBvbmVudC5yZW1vdmUoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNsb25lZENvbXBvbmVudCA9IGNvbXBvbmVudC5jbG9uZSgpO1xybGV0IGNvbXBvbmVudFR5cGUgPSBzZWxmLmdldENvbXBvbmVudFR5cGUoY2xvbmVkQ29tcG9uZW50KTtccmxldCBjb21wb25lbnREYXRhID0gS0VkaXRvci5jb21wb25lbnRzW2NvbXBvbmVudFR5cGVdO1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjbG9uZWRDb21wb25lbnQsIG51bGwsIHRydWUpO1xybGV0IGNvbnRlbnQ7XHIvLyBIYW5kbGUgaWZyYW1lLXdyYXBwZXJccmxldCBpZnJhbWVXcmFwcGVyID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWlmcmFtZS13cmFwcGVyJyk7XHJpZiAoaWZyYW1lV3JhcHBlci5sZW5ndGggPiAwKSB7XHJpZnJhbWVXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWlmcmFtZS1jb3ZlcicpLnJlbW92ZSgpO1xybGV0IGlmcmFtZSA9IGlmcmFtZVdyYXBwZXIuY2hpbGRyZW4oJ2lmcmFtZScpO1xyaWYgKGlmcmFtZVdyYXBwZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaWZyYW1lLXdyYXBwZXItZmFrZScpKSB7XHJpZnJhbWUudW53cmFwKCk7XHJ9IGVsc2Uge1xyaWZyYW1lV3JhcHBlci5yZW1vdmVDbGFzcygna2VkaXRvci1pZnJhbWUtd3JhcHBlcicpO1xyfVxyfVxyaWYgKHR5cGVvZiBjb21wb25lbnREYXRhLmdldENvbnRlbnQgPT09ICdmdW5jdGlvbicpIHtccmNvbnRlbnQgPSBjb21wb25lbnREYXRhLmdldENvbnRlbnQuY2FsbChjb21wb25lbnREYXRhLCBjbG9uZWRDb21wb25lbnQsIHNlbGYpO1xyfSBlbHNlIHtccmxldCBjb21wb25lbnRDb250ZW50ID0gY2xvbmVkQ29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29udGVudCA9IGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyY2xvbmVkQ29tcG9uZW50Lmh0bWwoY29udGVudCkuZmluZCgnW2RhdGEtZHluYW1pYy1ocmVmXScpLmVhY2goZnVuY3Rpb24gKCkge1xyJCh0aGlzKS5odG1sKCcnKTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+JHtjbG9uZWRDb21wb25lbnQuaHRtbCgpfTwvc2VjdGlvbj5gO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb21wb25lbnRUeXBlID0gKGNvbXBvbmVudC5hdHRyKCdkYXRhLXR5cGUnKSB8fCAnJykucmVwbGFjZSgnY29tcG9uZW50LScsICcnKTtccmlmIChjb21wb25lbnRUeXBlICYmIChjb21wb25lbnRUeXBlIGluIEtFZGl0b3IuY29tcG9uZW50cykpIHtccnJldHVybiBjb21wb25lbnRUeXBlO1xyfSBlbHNlIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ3N0cmluZycpIHtccmNvbXBvbmVudFR5cGUgPSBvcHRpb25zLmRlZmF1bHRDb21wb25lbnRUeXBlO1xyfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5kZWZhdWx0Q29tcG9uZW50VHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xyY29tcG9uZW50VHlwZSA9IG9wdGlvbnMuZGVmYXVsdENvbXBvbmVudFR5cGUuY2FsbChzZWxmLCBjb21wb25lbnQpO1xyfVxyaWYgKCFjb21wb25lbnRUeXBlKSB7XHJzZWxmLmVycm9yKCdDb21wb25lbnQgdHlwZSBpcyB1bmRlZmluZWQhJyk7XHJ9XHJyZXR1cm4gY29tcG9uZW50VHlwZTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmlmICghY29tcG9uZW50Lmhhc0NsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbXBvbmVudCcpIHx8ICFjb21wb25lbnQuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpKSB7XHJjb21wb25lbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6aW5nLWNvbXBvbmVudCcpO1xyY29tcG9uZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29tcG9uZW50Q29udGVudC5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccmNvbXBvbmVudC5hcHBlbmQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTVBPTkVOVCwgY29tcG9uZW50RGF0YS5zZXR0aW5nRW5hYmxlZCkpO1xyY29tcG9uZW50LmZpbmQoJ1tkYXRhLWR5bmFtaWMtaHJlZl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBkeW5hbWljRWxlbWVudCA9ICQodGhpcyk7XHJzZWxmLmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCk7XHJ9KTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5pbml0ID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLmluaXQuY2FsbChjb21wb25lbnREYXRhLCBjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIHNlbGYpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uSW5pdENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkluaXRDb21wb25lbnQuY2FsbChzZWxmLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmNvbXBvbmVudC5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXplZC1jb21wb25lbnQnKTtccmNvbXBvbmVudC5yZW1vdmVDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29tcG9uZW50Jyk7XHJ9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50ID0gZHluYW1pY0VsZW1lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBkeW5hbWljRWxlbWVudC5jbG9zZXN0KCcua2VkaXRvci1jb250ZW50LWFyZWEnKTtccmR5bmFtaWNFbGVtZW50LmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxybGV0IGR5bmFtaWNIcmVmID0gZHluYW1pY0VsZW1lbnQuYXR0cignZGF0YS1keW5hbWljLWhyZWYnKTtccmxldCBkYXRhID0gc2VsZi5nZXREYXRhQXR0cmlidXRlcyhjb21wb25lbnQsIFsnZGF0YS10eXBlJywgJ2RhdGEtZHluYW1pYy1ocmVmJ10sIGZhbHNlKTtccmRhdGEgPSAkLnBhcmFtKGRhdGEpO1xycmV0dXJuICQuYWpheCh7XHJ1cmw6IGR5bmFtaWNIcmVmLFxyZGF0YTogZGF0YSxccnR5cGU6ICdHRVQnLFxyZGF0YVR5cGU6ICdIVE1MJyxccnN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzLCBqcVhIUikge1xyZHluYW1pY0VsZW1lbnQuaHRtbChyZXNwb25zZSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudExvYWRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkR5bmFtaWNDb250ZW50TG9hZGVkLmNhbGwoc2VsZiwgZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSk7XHJ9XHJ9LFxyZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25EeW5hbWljQ29udGVudEVycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uRHluYW1pY0NvbnRlbnRFcnJvci5jYWxsKHNlbGYsIGR5bmFtaWNFbGVtZW50LCBqcVhIUiwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJcbn07XHJcbiIsImNvbnN0IENMQVNTX05BTUVTID0ge1xyVUk6ICdrZWRpdG9yLXVpJyxccldSQVBQRVI6ICdrZWRpdG9yLXdyYXBwZXInLFxySElEREVOX0VMRU1FTlQ6ICdrZWRpdG9yLWhpZGRlbi1lbGVtZW50JyxcclNJREVCQVI6ICdrZWRpdG9yLXNpZGViYXInLFxyU0lERUJBUl9IRUFERVI6ICdrZWRpdG9yLXNpZGViYXItaGVhZGVyJyxcclNJREVCQVJfQk9EWTogJ2tlZGl0b3Itc2lkZWJhci1ib2R5JyxcclNJREVCQVJfVElUTEU6ICdrZWRpdG9yLXNpZGViYXItdGl0bGUnLFxyU0lERUJBUl9DTE9TRVI6ICdrZWRpdG9yLXNpZGViYXItY2xvc2VyJyxcclNJREVCQVJfT1BFTkVEOiAnb3BlbmVkJyxcclRPUEJBUjogJ2tlZGl0b3ItdG9wYmFyJyxcclRPUEJBUl9MRUZUOiAna2VkaXRvci10b3BiYXItbGVmdCcsXHJUT1BCQVJfUklHSFQ6ICdrZWRpdG9yLXRvcGJhci1yaWdodCcsXHJUT1BCQVJfQ0VOVEVSOiAna2VkaXRvci10b3BiYXItY2VudGVyJyxcclRPUEJBUl9CVVRUT046ICdrZWRpdG9yLXRvcGJhci1idG4nLFxyVE9QQkFSX0JVVFRPTl9BQ1RJVkU6ICdhY3RpdmUnLFxyU0VUVElORzogJ2tlZGl0b3Itc2V0dGluZycsXHJTRVRUSU5HX0NPTlRBSU5FUjogJ2tlZGl0b3Itc2V0dGluZy1jb250YWluZXInLFxyU0VUVElOR19GT1JNOiAna2VkaXRvci1zZXR0aW5nLWZvcm0nLFxyU0VUVElOR19GT1JNX0FDVElWRTogJ2FjdGl2ZScsXHJDT05URU5UX0FSRUFTX1dSQVBQRVI6ICdrZWRpdG9yLWNvbnRlbnQtYXJlYXMtd3JhcHBlcicsXHJDT05URU5UX0FSRUFTOiAna2VkaXRvci1jb250ZW50LWFyZWFzJyxcckNPTlRFTlRfQVJFQTogJ2tlZGl0b3ItY29udGVudC1hcmVhJyxccklGUkFNRTogJ2tlZGl0b3ItaWZyYW1lJyxccklGUkFNRV9XUkFQUEVSOiAna2VkaXRvci1pZnJhbWUtd3JhcHBlcicsXHJJRlJBTUVfRkFLRVI6ICdrZWRpdG9yLWlmcmFtZS1mYWtlcicsXHJJRlJBTUVfQ09WRVJfV1JBUFBFUjogJ2tlZGl0b3ItaWZyYW1lLWNvdmVyLXdyYXBwZXInLFxySUZSQU1FX0NPVkVSOiAna2VkaXRvci1pZnJhbWUtY292ZXInLFxySUZSQU1FX0NPVkVSX0hJRERFTjogJ2hpZGRlbi1jb3ZlcicsXHJDT01QT05FTlQ6ICdrZWRpdG9yLWNvbXBvbmVudCcsXHJcbn07XHJleHBvcnQgZGVmYXVsdCBDTEFTU19OQU1FUztcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4vY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCB7XHIvLyBFbmFibGUgbmVzdGVkIGNvbnRhaW5lciBvciBub3Rcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJuZXN0ZWRDb250YWluZXJFbmFibGVkOiB0cnVlLFxyLy8gRW5hYmxlIGV4cGxpY2l0IHNuaXBwZXQgb3Igbm90LiBXaGVuIGRpc2FibGUsIHRoZXJlIGlzIG9ubHkgb25lIGJ1dHRvbiBmb3IgYWRkaW5nLiBJZiBhZGQgYnV0dG9uIGlzIGluIGNvbnRlbnQgYXJlYSBvciBjb250YWluZXIsIHlvdSBjYW4gYWRkIGNvbXBvbmVudCBvciBjb250YWluZXJzLiBJZiBhZGQgYnV0dG9uIGlzIGluIHN1Yi1jb250YWluZXIsIHlvdSBqdXN0IGNhbiBhZGQgb25seSBjb21wb25lbnQuIFdoZW4geW91IGFkZCBjb21wb25lbnQgaW4gY29udGVudCBhcmVhLCBwbGVhc2UgbWFrZSBzdXJlIHlvdSBjb25maWcgXCJjb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudFwiIG9wdGlvblxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccmV4cGxpY2l0U25pcHBldEVuYWJsZWQ6IGZhbHNlLFxyLy8gY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQgVGhlIGNvbnRhaW5lciBzbmlwcGV0IHdoaWNoIHdpbGwgYmUgYWRkZWQgYXV0b21hdGljYWxseSBpbiBjb250ZW50IGFyZSB3aGVuIHlvdSBhZGRpbmcgYSBjb21wb25lbnQuIE5vdGU6IGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGluIGZpcnN0IGNvbnRhaW5lciBjb250ZW50IG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyY29udGFpbmVyRm9yUXVpY2tBZGRDb21wb25lbnQ6IGBccjxkaXYgY2xhc3M9XCJyb3dcIj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIiBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiPlxyPC9kaXY+XHI8L2Rpdj5ccmAsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb250ZW50IGJ1dHRvbi4gVGhpcyBhdmFpbGFibGUgb25seSB3aGVuIFwiZXhwbGljaXRTaXBwZXRFbmFibGVkXCIgaXMgXCJmYWxzZVwiXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb250ZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBhZGQgY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBzdWItY29udGFpbmVyIGJ1dHRvblxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuQWRkU3ViQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtcGx1c1wiPjwvaT4gPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1jb2x1bW5zXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGFkZCBjb21wb25lbnQgYnV0dG9uXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5BZGRDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1wbHVzXCI+PC9pPiA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWxpc3QtdWxcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgbW92ZSBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5Nb3ZlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtc29ydFwiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBtb3ZlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bk1vdmVDb21wb25lbnRUZXh0OiAnPGkgY2xhc3M9XCJmYSBmYS1hcnJvd3NcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3Igc2V0dGluZyBidXR0b24gb2YgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJidG5TZXR0aW5nQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtY29nXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIHNldHRpbmcgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuU2V0dGluZ0NvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLWNvZ1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkdXBsaWNhdGUgYnV0dG9uIG9mIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtZmlsZXMtb1wiPjwvaT4nLFxyLy8gVGV4dCBjb250ZW50IGZvciBkZWxldGUgYnV0dG9uIG9mIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7U3RyaW5nfVxyYnRuRGVsZXRlQ29udGFpbmVyVGV4dDogJzxpIGNsYXNzPVwiZmEgZmEtdGltZXNcIj48L2k+Jyxcci8vIFRleHQgY29udGVudCBmb3IgZGVsZXRlIGJ1dHRvbiBvZiBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ31ccmJ0bkRlbGV0ZUNvbXBvbmVudFRleHQ6ICc8aSBjbGFzcz1cImZhIGZhLXRpbWVzXCI+PC9pPicsXHIvLyBUZXh0IGNvbnRlbnQgZm9yIGNvbmZpcm0gZGlhbG9nIHdoZW4gZGVsZXRpbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb25maXJtRGVsZXRlQ29udGFpbmVyVGV4dDogJ0FyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNvbnRhaW5lcj8gVGhpcyBhY3Rpb24gY2FuIG5vdCBiZSB1bmRvbmUhJyxcci8vIFRleHQgY29udGVudCBmb3IgY29uZmlybSBkaWFsb2cgd2hlbiBkZWxldGluZyBjb250YWluZXJcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbmZpcm1EZWxldGVDb21wb25lbnRUZXh0OiAnQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgY29tcG9uZW50PyBUaGlzIGFjdGlvbiBjYW4gbm90IGJlIHVuZG9uZSEnLFxyLy8gV2lkdGggb2YgbW9iaWxlIGRldmljZVxyLy8gQG9wdGlvbiB7TnVtYmVyfVxyd2lkdGhNb2JpbGU6IDMyMCxcci8vIFdpZHRoIG9mIHRhYmxldCBkZXZpY2Vcci8vIEBvcHRpb24ge051bWJlcn1ccndpZHRoVGFibGV0OiA3NjgsXHIvLyBEZWZhdWx0IGNvbXBvbmVudCB0eXBlIG9mIGNvbXBvbmVudC4gSWYgdHlwZSBvZiBjb21wb25lbnQgZG9lcyBub3QgZXhpc3QgaW4gS0VkaXRvci5jb21wb25lbnRzLCB3aWxsIGJlIHVzZWQgXCJkZWZhdWx0Q29tcG9uZW50VHlwZVwiIGFzIHR5cGUgb2YgdGhpcyBjb21wb25lbnQuIElmIGlzIGZ1bmN0aW9uLCBhcmd1bWVudCBpcyBjb21wb25lbnRcci8vIEBvcHRpb24ge1N0cmluZ3xGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRccmRlZmF1bHRDb21wb25lbnRUeXBlOiAnYmxhbmsnLFxyLy8gVXJsIHRvIHNuaXBwZXRzIGZpbGVcci8vIEBvcHRpb24ge1N0cmluZ31ccnNuaXBwZXRzVXJsOiAnc25pcHBldHMvc25pcHBldHMuaHRtbCcsXHIvLyBFbmFibGUgZmlsdGVyaW5nIHNuaXBwZXRzIGJ5IGNhdGVnb3JpZXMgYW5kIHRleHQgc2VhcmNoaW5nIG9yIG5vdFxyLy8gQG9wdGlvbiB7Qm9vbGVhbn1ccnNuaXBwZXRzRmlsdGVyRW5hYmxlZDogdHJ1ZSxcci8vIFRoZSBzZXBhcmF0b3IgY2hhcmFjdGVyIGJldHdlZW4gZWFjaCBjYXRlZ29yaWVzXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJzbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3I6ICc7Jyxcci8vIENvbnRlbnQgc3R5bGVzIGZvciBpZnJhbWUgbW9kZS4gQmVzaWRlIG9mIHRoaXMgb3B0aW9uLCBLRWRpdG9yIHdpbGwgYWRkIGFsbCBlbGVtZW50cyB3aGljaCBoYXZlICdkYXRhLXR5cGU9a2VkaXRvci1zdHlsZScgZm9yIGlmcmFtZSBzdHlsZXNoZWV0LiBUaGVzZSBlbGVtZW50cyBjYW4gYmUgJ2xpbmsnLCAnc3R5bGUnIG9yIGFueSB0YWdzLiBJZiB0aGVzZSBlbGVtZW50cyBoYXZlICdocmVmJyBhdHRyaWJ1dGUsIHdpbGwgY3JlYXRlIGxpbmsgdGFnIHdpdGggaHJlZi4gSWYgdGhlc2UgZWxlbWVudHMgZG8gbm90IGhhdmUgJ2hyZWYnIGF0dHJpYnV0ZSwgd2lsbCBjcmVhdGUgc3R5bGUgdGFnIHdpdGggY3NzIHJ1bGUgaXMgaHRtbCBjb2RlIGluc2lkZSBlbGVtZW50XHIvLyBAb3B0aW9uIHtBcnJheTxPYmplY3Q+fVxyLy8gQGV4YW1wbGU6XHIvLyBbXHIvLyAgICAge1xyLy8gICAgICAgICBocmVmOiAnL3BhdGgvdG8vc3R5bGUvZmlsZSdcci8vICAgICB9LCB7XHIvLyAgICAgICAgIGNvbnRlbnQ6ICdhIHsgY29sb3I6IHJlZDsgfSdcci8vICAgICB9XHIvLyBdXHJjb250ZW50U3R5bGVzOiBbXSxcci8vIFNlbGVjdG9yIG9mIGNvbnRlbnQgYXJlYXMuIElmIGlzIG51bGwgb3Igc2VsZWN0b3IgZG9lcyBub3QgbWF0Y2ggYW55IGVsZW1lbnRzLCB3aWxsIGNyZWF0ZSBkZWZhdWx0IGNvbnRlbnQgYXJlYSBhbmQgd3JhcCBhbGwgY29udGVudCBpbnNpZGUgaXQuXHIvLyBAb3B0aW9uIHtTdHJpbmd9XHJjb250ZW50QXJlYXNTZWxlY3RvcjogbnVsbCxcci8vIFRoZSB3cmFwcGVyIGVsZW1lbnQgZm9yIGFsbCBjb250ZW50cyBpbnNpZGUgaWZyYW1lIG9yIG5ldyBkaXYgd2hpY2ggd2lsbCBjb250YWlucyBjb250ZW50IG9mIHRleHRhcmVhLiBJdCdzIGp1c3QgZm9yIGRpc3BsYXlpbmcgcHVycG9zZS4gSWYgeW91IHdhbnQgYWxsIGNvbnRlbnRzIGluc2lkZSBpZnJhbWUgYXJlIGFwcGVuZGVkIGludG8gYm9keSB0YWcsIGp1c3QgbGVhdmUgaXQgYXMgYmxhbmtcci8vIEBvcHRpb24ge1N0cmluZ31ccmNvbnRlbnRBcmVhc1dyYXBwZXI6IGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9XCI+PC9kaXY+YCxcci8vIEVuYWJsZSBzZXR0aW5nIHBhbmVsIGZvciBjb250YWluZXJcci8vIEBvcHRpb24ge0Jvb2xlYW59XHJjb250YWluZXJTZXR0aW5nRW5hYmxlZDogZmFsc2UsXHIvLyBNZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIHNob3dlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uOiBudWxsLFxyLy8gTWV0aG9kIHdpbGwgYmUgY2FsbGVkIHdoZW4gc2V0dGluZyBwYW5lbCBmb3IgY29udGFpbmVyIGlzIGhpZGRlblxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2V0dGluZ0Zvcm1cci8vIEBwYXJhbSB7S0VkaXRvcn0ga2VkaXRvckluc3RhbmNlXHJjb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uOiBudWxsLFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIga2VkaXRvciBpbnN0YW5jZSBpcyByZWFkeVxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHJvblJlYWR5OiBmdW5jdGlvbiAoKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgc25pcHBldHMgYXJlIGxvYWRlZC4gSWYgeW91IHdhbnQgdG8gbW9kaWZ5IHNuaXBwZXRzIGNvbnRlbnQsIHBsZWFzZSByZXR1cm4gbW9kaWZpZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtTdHJpbmd9IHJlc3Bcci8vIEByZXR1cm4ge1N0cmluZ31ccm9uU25pcHBldHNMb2FkZWQ6IGZ1bmN0aW9uIChyZXNwKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBlcnJvciBpbiBsb2FkaW5nIHNuaXBwZXRzXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7anFYSFJ9IGpxWEhSXHJvblNuaXBwZXRzRXJyb3I6IGZ1bmN0aW9uIChqcVhIUikge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGlmcmFtZSBhbmQgY29udGVudCBhcmVhcyB3cmFwcGVyIGluc2lkZSBpdCBhcmUgY3JlYXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lXHIvLyBAcGFyYW0ge2pRdWVyeX0gaWZyYW1lSGVhZFxyLy8gQHBhcmFtIHtqUXVlcnl9IGlmcmFtZUJvZHlccm9uSW5pdElmcmFtZTogZnVuY3Rpb24gKGlmcmFtZSwgaWZyYW1lSGVhZCwgaWZyYW1lQm9keSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gY29udGVudCBpcyBjaGFuZ2VkLiBJbmNsdWRlcyBhZGQsIGRlbGV0ZSwgZHVwbGljYXRlIGNvbnRhaW5lciBvciBjb21wb25lbnQuIE9yIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRlbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGluaXRpYWxpemluZyBjb250YWluZXJcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUluaXRDb250ZW50QXJlYTogZnVuY3Rpb24gKGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBpbml0aWFsaXppbmcgY29udGVudCBhcmVhLiBJdCBjYW4gcmV0dXJuIGFycmF5IG9mIGpRdWVyeSBvYmplY3RzIHdoaWNoIHdpbGwgYmUgaW5pdGlhbGl6ZWQgYXMgY29udGFpbmVyIGluIGNvbnRlbnQgYXJlYS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRlbnQgYXJlYSB3aWxsIGJlIGluaXRpYWxpemVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Jbml0Q29udGVudEFyZWE6IGZ1bmN0aW9uIChjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGJlZm9yZSBpbml0aWFsaXppbmcgY29udGFpbmVyXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVJbml0Q29udGFpbmVyOiBmdW5jdGlvbiAoY29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHdoZW4gaW5pdGlhbGl6aW5nIGNvbnRhaW5lci4gSXQgY2FuIHJldHVybiBhcnJheSBvZiBqUXVlcnkgb2JqZWN0cyB3aGljaCB3aWxsIGJlIGluaXRpYWxpemVkIGFzIGVkaXRhYmxlIGNvbXBvbmVudHMgaW4gY29udGFpbmVyIGNvbnRlbnQgKE5PVEU6IHRoZXNlIG9iamVjdHMgTVVTVCBiZSB1bmRlciBlbGVtZW50cyB3aGljaCBoYXZlIGF0dHJpYnV0ZSBkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiKS4gQnkgZGVmYXVsdCwgYWxsIGZpcnN0IGxldmVsIHNlY3Rpb25zIHVuZGVyIGNvbnRhaW5lciBjb250ZW50IHdpbGwgYmUgaW5pdGlhbGl6ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb250YWluZXI6IGZ1bmN0aW9uIChjb250YWluZXIsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGNvbnRhaW5lciBpcyBkZWxldGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25CZWZvcmVDb250YWluZXJEZWxldGVkOiBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdGVkQ29udGFpbmVyLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGFmdGVyIGNvbnRhaW5lciBhbmQgaXRzIGNvbXBvbmVudHMgYXJlIGFscmVhZHkgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29udGFpbmVyXHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29udGFpbmVyRGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgY29udGFpbmVyIGlzIGNoYW5nZWQuIEl0IGNhbiBiZSB3aGVuIGNvbnRhaW5lciByZWNlaXZlZCBuZXcgY29tcG9uZW50IGZyb20gc25pcHBldCBvciBmcm9tIG90aGVyIGNvbnRhaW5lci4gT3IgY29udGVudCBvZiBhbnkgY29tcG9uZW50cyBhcmUgY2hhbmdlZCBvciBhbnkgY29tcG9uZW50cyBhcmUgZGVsZXRlZCBvciBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY2hhbmdlZENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckNoYW5nZWQ6IGZ1bmN0aW9uIChldmVudCwgY2hhbmdlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIGR1cGxpY2F0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBvcmlnaW5hbENvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbnRhaW5lclxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbnRhaW5lckR1cGxpY2F0ZWQ6IGZ1bmN0aW9uIChldmVudCwgb3JpZ2luYWxDb250YWluZXIsIG5ld0NvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIGlzIHNlbGVjdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gc2VsZWN0ZWRDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTZWxlY3RlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbnRhaW5lciwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGEgY29udGFpbmVyIHNuaXBwZXQgaXMgYWRkZWQgaW4gYSBjb250ZW50IGFyZWFcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb250YWluZXJcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZFNuaXBwZXRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db250YWluZXJTbmlwcGV0QWRkZWQ6IGZ1bmN0aW9uIChldmVudCwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIGluaXRpYWxpemVkLiBUaGlzIGNhbGxiYWNrIGlzIGF2YWlsYWJsZSBvciBub3QgaXMgZGVwZW5kIG9uIGNvbXBvbmVudCB0eXBlIGhhbmRsZXIuXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBjb21wb25lbnRccm9uQ29tcG9uZW50UmVhZHk6IGZ1bmN0aW9uIChjb21wb25lbnQpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGNvbXBvbmVudFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlSW5pdENvbXBvbmVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGluaXRpYWxpemluZyBjb21wb25lbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkluaXRDb21wb25lbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYmVmb3JlIGEgY29tcG9uZW50IGlzIGRlbGV0ZWRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtFdmVudH0gZXZlbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBzZWxlY3RlZENvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgaXMgZGVsZXRlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50RGVsZXRlZDogZnVuY3Rpb24gKGV2ZW50LCBzZWxlY3RlZENvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCB3aGVuIGNvbnRlbnQgb2YgYSBjb21wb25lbnQgaXMgY2hhbmdlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNoYW5nZWRDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnRDaGFuZ2VkOiBmdW5jdGlvbiAoZXZlbnQsIGNoYW5nZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBkdXBsaWNhdGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7RXZlbnR9IGV2ZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gb3JpZ2luYWxDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBuZXdDb21wb25lbnRcci8vIEBwYXJhbSB7alF1ZXJ5fSBjb250ZW50QXJlYVxyb25Db21wb25lbnREdXBsaWNhdGVkOiBmdW5jdGlvbiAoZXZlbnQsIG9yaWdpbmFsQ29tcG9uZW50LCBuZXdDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgd2hlbiBhIGNvbXBvbmVudCBpcyBzZWxlY3RlZFxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkQ29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQ29tcG9uZW50U2VsZWN0ZWQ6IGZ1bmN0aW9uIChldmVudCwgc2VsZWN0ZWRDb21wb25lbnQsIGNvbnRlbnRBcmVhKSB7XHJ9LFxyLy8gQ2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYWZ0ZXIgYSBjb21wb25lbnQgc25pcHBldCBpcyBhZGRlZCBpbiBhIGNvbnRhaW5lclxyLy8gQG9wdGlvbiB7RnVuY3Rpb259XHIvLyBAcGFyYW0ge0V2ZW50fSBldmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IG5ld0NvbXBvbmVudFxyLy8gQHBhcmFtIHtqUXVlcnl9IHNlbGVjdGVkU25pcHBldFxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkNvbXBvbmVudFNuaXBwZXRBZGRlZDogZnVuY3Rpb24gKGV2ZW50LCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgbG9hZGluZyBkeW5hbWljIGNvbnRlbnRcci8vIEBvcHRpb24ge0Z1bmN0aW9ufVxyLy8gQHBhcmFtIHtqUXVlcnl9IGR5bmFtaWNFbGVtZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29tcG9uZW50XHIvLyBAcGFyYW0ge2pRdWVyeX0gY29udGVudEFyZWFccm9uQmVmb3JlRHluYW1pY0NvbnRlbnRMb2FkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGNvbXBvbmVudCwgY29udGVudEFyZWEpIHtccn0sXHIvLyBDYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBhZnRlciBkeW5hbWljIGNvbnRlbnQgaXMgbG9hZGVkXHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50TG9hZGVkOiBmdW5jdGlvbiAoZHluYW1pY0VsZW1lbnQsIGpxWEhSLCBjb250ZW50QXJlYSkge1xyfSxcci8vIENhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIGlmIGxvYWRpbmcgZHluYW1pYyBjb250ZW50IGlzIGVycm9yLCBhYm9ydCBvciB0aW1lb3V0XHIvLyBAb3B0aW9uIHtGdW5jdGlvbn1cci8vIEBwYXJhbSB7alF1ZXJ5fSBkeW5hbWljRWxlbWVudFxyLy8gQHBhcmFtIHtqcVhIUn0gLCBqcVhIUlxyLy8gQHBhcmFtIHtqUXVlcnl9IGNvbnRlbnRBcmVhXHJvbkR5bmFtaWNDb250ZW50RXJyb3I6IGZ1bmN0aW9uIChkeW5hbWljRWxlbWVudCwganFYSFIsIGNvbnRlbnRBcmVhKSB7XHJ9XHJcbn07XHIiLCJleHBvcnQgZGVmYXVsdCB7XHJBTEw6IDAsXHJDT05UQUlORVI6IDEsXHJDT01QT05FTlQ6IDJcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyQ09OVEVOVF9BUkVBOiAwLFxyQ09OVEFJTkVSOiAxLFxyU1VCX0NPTlRBSU5FUjogMixcckNPTlRBSU5FUl9DT05URU5UOiAzLFxyU1VCX0NPTlRBSU5FUl9DT05URU5UOiA0LFxyQ09NUE9ORU5UOiA1XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgY29udGFpbmVyO1xyaWYgKHRhcmdldC5pcygnc2VjdGlvbicpKSB7XHJ0YXJnZXQuYWRkQ2xhc3MoJ2tlZGl0b3ItdWkga2VkaXRvci1jb250YWluZXInKTtccnRhcmdldC53cmFwSW5uZXIoJzxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldDtccn0gZWxzZSB7XHJ0YXJnZXQud3JhcCgnPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyXCI+PHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWlubmVyXCI+PC9zZWN0aW9uPjwvc2VjdGlvbj4nKTtccmNvbnRhaW5lciA9IHRhcmdldC5wYXJlbnQoKS5wYXJlbnQoKTtccn1ccnNlbGYuaW5pdENvbnRhaW5lcihjb250ZW50QXJlYSwgY29udGFpbmVyKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRhaW5lciwgaXNOZXN0ZWQpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBjb250YWluZXJJbm5lciA9IGNvbnRhaW5lci5jaGlsZHJlbignLmtlZGl0b3ItY29udGFpbmVyLWlubmVyJykuY2xvbmUoKTtccmNvbnRhaW5lcklubmVyLmZpbmQoJ1tkYXRhLXR5cGU9Y29udGFpbmVyLWNvbnRlbnRdJykubm90KGlzTmVzdGVkID8gJycgOiAnLmtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJjb250YWluZXJDb250ZW50LnJlbW92ZUNsYXNzKCdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50IGtlZGl0b3Itc3ViLWNvbnRhaW5lci1jb250ZW50IHVpLXNvcnRhYmxlJykucmVtb3ZlQXR0cignaWQnKTtccmxldCBjb250YWluZXJDb250ZW50SW5uZXIgPSBjb250YWluZXJDb250ZW50LmNoaWxkcmVuKCk7XHJsZXQgY29udGVudCA9ICcnO1xyY29udGFpbmVyQ29udGVudElubmVyLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY2hpbGQgPSAkKHRoaXMpO1xyaWYgKGNoaWxkLmlzKCcua2VkaXRvci1jb21wb25lbnQnKSkge1xyY29udGVudCArPSBzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY2hpbGQpO1xyfSBlbHNlIGlmIChjaGlsZC5pcygnLmtlZGl0b3Itc3ViLWNvbnRhaW5lcicpKSB7XHJjb250ZW50ICs9IHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250ZW50KTtccn0pO1xycmV0dXJuIGA8c2VjdGlvbj4ke2NvbnRhaW5lcklubmVyLmh0bWwoKX08L3NlY3Rpb24+YDtcclxufSIsImltcG9ydCBUT09MQkFSX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy90b29sYmFyVHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IGlzTmVzdGVkID0gb3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmIGNvbnRhaW5lci5jbG9zZXN0KCdbZGF0YS10eXBlPVwiY29udGFpbmVyLWNvbnRlbnRcIl0nKS5sZW5ndGggPiAwO1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ2tlZGl0b3ItaW5pdGlhbGl6ZWQtY29udGFpbmVyJykgfHwgIWNvbnRhaW5lci5oYXNDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJykpIHtccmNvbnRhaW5lci5hZGRDbGFzcygna2VkaXRvci1pbml0aWFsaXppbmctY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKGlzTmVzdGVkKSB7XHJjb250YWluZXIuYWRkQ2xhc3MoJ2tlZGl0b3Itc3ViLWNvbnRhaW5lcicpO1xyfVxyY29udGFpbmVyLmFwcGVuZChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSIDogVE9PTEJBUl9UWVBFLkNPTlRBSU5FUikpO1xyY29udGFpbmVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRzID0gY29udGFpbmVyLmZpbmQoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpO1xyY29udGFpbmVyQ29udGVudHMuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgY29udGFpbmVyQ29udGVudCA9ICQodGhpcyk7XHJpZiAob3B0aW9ucy5uZXN0ZWRDb250YWluZXJFbmFibGVkICYmICFpc05lc3RlZCAmJiBjb250YWluZXJDb250ZW50LnBhcmVudHMoJ1tkYXRhLXR5cGU9XCJjb250YWluZXItY29udGVudFwiXScpLmxlbmd0aCA+IDApIHtcci8vIERvIG5vdGhpbmcgYmVjYXVzZSBpdCdzIGNvbnRhaW5lciBjb250ZW50IG9mIHN1YiBjb250YWluZXJccnJldHVybjtccn1ccnNlbGYuaW5pdENvbnRhaW5lckNvbnRlbnQoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29udGFpbmVyQ29udGVudCwgaXNOZXN0ZWQpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGFpbmVyID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uSW5pdENvbnRhaW5lci5jYWxsKHNlbGYsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyY29udGFpbmVyLmFkZENsYXNzKCdrZWRpdG9yLWluaXRpYWxpemVkLWNvbnRhaW5lcicpO1xyY29udGFpbmVyLnJlbW92ZUNsYXNzKCdrZWRpdG9yLWluaXRpYWxpemluZy1jb250YWluZXInKTtccn1cclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbnRhaW5lckNvbnRlbnQsIGlzTmVzdGVkKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmNvbnRhaW5lckNvbnRlbnQuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQnKTtccmlmIChpc05lc3RlZCkge1xyY29udGFpbmVyQ29udGVudC5hZGRDbGFzcygna2VkaXRvci1zdWItY29udGFpbmVyLWNvbnRlbnQnKTtccn1ccmNvbnRhaW5lckNvbnRlbnQuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJsZXQgY29udGFpbmVyQ29udGVudElubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXJcIj48L2Rpdj4nKTtccmNvbnRhaW5lckNvbnRlbnRJbm5lci5odG1sKGNvbnRhaW5lckNvbnRlbnQuaHRtbCgpKTtccmNvbnRhaW5lckNvbnRlbnQuaHRtbChjb250YWluZXJDb250ZW50SW5uZXIpO1xybGV0IGNvbnRhaW5lckNvbnRlbnRUb29sYmFyID0gJChzZWxmLmdlbmVyYXRlVG9vbGJhcihpc05lc3RlZCA/IFRPT0xCQVJfVFlQRS5TVUJfQ09OVEFJTkVSX0NPTlRFTlQgOiBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQpKTtccmNvbnRhaW5lckNvbnRlbnRUb29sYmFyLmFwcGVuZFRvKGNvbnRhaW5lckNvbnRlbnQpO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKCFpc05lc3RlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyY29udGFpbmVyQ29udGVudFRvb2xiYXIuY2hpbGRyZW4oJy5idG4tYWRkLWNvbnRhaW5lcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIFNOSVBQRVRfVFlQRS5DT05UQUlORVIpO1xyfSk7XHJ9XHJ9XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29tcG9uZW50Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnNlbGYub3Blbk1vZGFsKGNvbnRhaW5lckNvbnRlbnRJbm5lciwgU05JUFBFVF9UWVBFLkNPTVBPTkVOVCk7XHJ9KTtccn0gZWxzZSB7XHJjb250YWluZXJDb250ZW50VG9vbGJhci5jaGlsZHJlbignLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250YWluZXJDb250ZW50SW5uZXIsIGlzTmVzdGVkID8gU05JUFBFVF9UWVBFLkNPTVBPTkVOVCA6IG9wdGlvbnMubmVzdGVkQ29udGFpbmVyRW5hYmxlZCA/IFNOSVBQRVRfVFlQRS5BTEwgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0pO1xyfVxyY29udGFpbmVyQ29udGVudElubmVyLnNvcnRhYmxlKHtccmhhbmRsZTogJy5idG4tY29tcG9uZW50LXJlcG9zaXRpb24sIC5idG4tY29udGFpbmVyLXJlcG9zaXRpb24nLFxyaGVscGVyOiAnY2xvbmUnLFxyaXRlbXM6ICc+IHNlY3Rpb24nLFxyY29ubmVjdFdpdGg6ICcua2VkaXRvci1jb250YWluZXItY29udGVudC1pbm5lcicsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xybGV0IGNvbnRhaW5lcjtccmlmIChoZWxwZXIpIHtccmhlbHBlci5yZW1vdmUoKTtccn1ccmNvbnRhaW5lciA9IGl0ZW0uY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAoIWNvbnRhaW5lci5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHIkKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250YWluZXIuYWRkQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkLmNhbGwoc2VsZiwgZXZlbnQsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGV2ZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpdGVtLnJlbW92ZUNsYXNzKCdrZWRpdG9yLXVpLWRyYWdnaW5nJyk7XHJ9LFxyc3RhcnQ6IGZ1bmN0aW9uIChlLCB1aSkge1xydWkuaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0b3A6IGZ1bmN0aW9uIChlLCB1aSkge1xyaWYgKHVpLmhlbHBlcikge1xydWkuaGVscGVyLnJlbW92ZSgpO1xyfVxydWkuaXRlbS5yZW1vdmVDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfVxyfSk7XHJjb250YWluZXJDb250ZW50SW5uZXIuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjaGlsZCA9ICQodGhpcyk7XHJpZiAoY2hpbGQuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykubGVuZ3RoID4gMCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsIGNoaWxkKTtccn0gZWxzZSB7XHJzZWxmLmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjaGlsZCwgdHJ1ZSk7XHJ9XHJ9KTtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3Rvb2xiYXJUeXBlXCI7XHJcbmltcG9ydCBTTklQUEVUX1RZUEUgZnJvbSBcIi4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZVwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBkb250SW5pdFRvb2xiYXIpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xyY29udGVudEFyZWEuYWRkQ2xhc3MoJ2tlZGl0b3ItY29udGVudC1hcmVhJyk7XHJsZXQgY29udGVudCA9IGNvbnRlbnRBcmVhLmh0bWwoKTtccmxldCBjb250ZW50QXJlYUlubmVyID0gJCgnPGRpdiBjbGFzcz1cImtlZGl0b3ItY29udGVudC1hcmVhLWlubmVyXCI+PC9kaXY+JykuaHRtbChjb250ZW50KTtccmNvbnRlbnRBcmVhLmh0bWwoY29udGVudEFyZWFJbm5lcik7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25CZWZvcmVJbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAoIWRvbnRJbml0VG9vbGJhcikge1xybGV0IGNvbnRlbnRBcmVhVG9vbGJhciA9ICQoc2VsZi5nZW5lcmF0ZVRvb2xiYXIoVE9PTEJBUl9UWVBFLkNPTlRFTlRfQVJFQSkpO1xyY29udGVudEFyZWEuYXBwZW5kKGNvbnRlbnRBcmVhVG9vbGJhcik7XHJjb250ZW50QXJlYVRvb2xiYXIuY2hpbGRyZW4ob3B0aW9ucy5leHBsaWNpdFNuaXBwZXRFbmFibGVkID8gJy5idG4tYWRkLWNvbnRhaW5lcicgOiAnLmJ0bi1hZGQtY29udGVudCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJzZWxmLm9wZW5Nb2RhbChjb250ZW50QXJlYUlubmVyLCBvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQgPyBTTklQUEVUX1RZUEUuQ09OVEFJTkVSIDogU05JUFBFVF9UWVBFLkFMTCk7XHJ9KTtccn1ccmNvbnRlbnRBcmVhSW5uZXIuc29ydGFibGUoe1xyaGFuZGxlOiAnLmtlZGl0b3ItdG9vbGJhci1jb250YWluZXI6bm90KC5rZWRpdG9yLXRvb2xiYXItc3ViLWNvbnRhaW5lcikgLmJ0bi1jb250YWluZXItcmVwb3NpdGlvbicsXHJpdGVtczogJz4gc2VjdGlvbicsXHJoZWxwZXI6ICdjbG9uZScsXHJjb25uZWN0V2l0aDogJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScsXHJheGlzOiAneScsXHJ0b2xlcmFuY2U6ICdwb2ludGVyJyxccnNvcnQ6IGZ1bmN0aW9uICgpIHtcciQodGhpcykucmVtb3ZlQ2xhc3MoJ3VpLXN0YXRlLWRlZmF1bHQnKTtccn0sXHJyZWNlaXZlOiBmdW5jdGlvbiAoZXZlbnQsIHVpKSB7XHJsZXQgaGVscGVyID0gdWkuaGVscGVyO1xybGV0IGl0ZW0gPSB1aS5pdGVtO1xyaWYgKGhlbHBlcikge1xyaGVscGVyLnJlbW92ZSgpO1xyfVxyc2VsZi5jbG9zZVNpZGViYXIoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBldmVudCwgY29udGVudEFyZWEpO1xyfVxyaXRlbS5hZGRDbGFzcygna2VkaXRvci11aS1kcmFnZ2luZycpO1xyfSxccnN0YXJ0OiBmdW5jdGlvbiAoZSwgdWkpIHtccnVpLml0ZW0uYWRkQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn0sXHJzdG9wOiBmdW5jdGlvbiAoZSwgdWkpIHtccmlmICh1aS5oZWxwZXIpIHtccnVpLmhlbHBlci5yZW1vdmUoKTtccn1ccnVpLml0ZW0ucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItdWktZHJhZ2dpbmcnKTtccn1ccn0pO1xyY29udGVudEFyZWFJbm5lci5jaGlsZHJlbignc2VjdGlvbicpLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5jb252ZXJ0VG9Db250YWluZXIoY29udGVudEFyZWEsICQodGhpcykpO1xyfSk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEgPT09ICdmdW5jdGlvbicpIHtccmxldCBjb250ZW50RGF0YSA9IG9wdGlvbnMub25Jbml0Q29udGVudEFyZWEuY2FsbChzZWxmLCBjb250ZW50QXJlYSk7XHJpZiAoY29udGVudERhdGEgJiYgY29udGVudERhdGEubGVuZ3RoID4gMCkge1xyJC5lYWNoKGNvbnRlbnREYXRhLCBmdW5jdGlvbiAoKSB7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgJCh0aGlzKSk7XHJ9KTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0IENMQVNTX05BTUVTIGZyb20gJy4uL2NvbnN0YW50cy9jbGFzc05hbWVzJztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBlbGVtZW50ID0gc2VsZi5lbGVtZW50O1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgd3JhcHBlciA9IHNlbGYud3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLldSQVBQRVJ9XCI+PC9kaXY+YCk7XHJsZXQgaWZyYW1lV3JhcHBlciA9IHNlbGYuaWZyYW1lV3JhcHBlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLklGUkFNRV9XUkFQUEVSfVwiPjwvZGl2PmApO1xybGV0IGlmcmFtZSA9IHNlbGYuaWZyYW1lID0gJChgPGlmcmFtZSBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuSUZSQU1FfVwiPjwvaWZyYW1lPmApO1xyZWxlbWVudC5hZnRlcih3cmFwcGVyKTtccmVsZW1lbnQuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuSElEREVOX0VMRU1FTlQpO1xyaWZyYW1lV3JhcHBlci5odG1sKGlmcmFtZSk7XHJ3cmFwcGVyLmF0dHIoJ2lkJywgc2VsZi5nZW5lcmF0ZUlkKCkpLmFwcGVuZChpZnJhbWVXcmFwcGVyKTtccnNlbGYuaWZyYW1lRG9jID0gaWZyYW1lLmNvbnRlbnRzKCk7XHIvLyBGaXggaXNzdWUgRmlyZWZveCBjYW4ndCByZW5kZXIgY29udGVudCBpbnNpZGUgaWZyYW1lXHIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1ccnNlbGYuaWZyYW1lRG9jLmdldCgwKS5vcGVuKCk7XHJzZWxmLmlmcmFtZURvYy5nZXQoMCkuY2xvc2UoKTtcci8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyc2VsZi5pZnJhbWVXaW5kb3cgPSBpZnJhbWVbMF0uY29udGVudFdpbmRvdyA/IGlmcmFtZVswXS5jb250ZW50V2luZG93IDogaWZyYW1lWzBdLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0VmlldztccnNlbGYuaWZyYW1lSGVhZCA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2hlYWQnKTtccnNlbGYuaWZyYW1lQm9keSA9IHNlbGYuaWZyYW1lRG9jLmZpbmQoJ2JvZHknKTtcci8vIEdlbmVyYXRlIGhlYWQgY29udGVudCBmb3IgaWZyYW1lXHJsZXQgc3R5bGVzID0gJyc7XHIkKCdbZGF0YS10eXBlPVwia2VkaXRvci1zdHlsZVwiXScpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IHN0eWxlID0gJCh0aGlzKTtccmxldCBpZFN0ciA9IHN0eWxlLmF0dHIoJ2lkJykgfHwgJyc7XHJsZXQgaHJlZiA9IHN0eWxlLmF0dHIoJ2hyZWYnKSB8fCBzdHlsZS5hdHRyKCdkYXRhLWhyZWYnKSB8fCAnJztccmlmIChocmVmKSB7XHJzdHlsZXMgKz0gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiJHtocmVmfVwiICR7aWRTdHJ9IC8+XFxuYDtccn0gZWxzZSB7XHJzdHlsZXMgKz0gYDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIiAke2lkU3RyfT4ke3N0eWxlLmh0bWwoKX08L3N0eWxlPlxcbmA7XHJ9XHJ9KTtcciQuaXNBcnJheShvcHRpb25zLmNvbnRlbnRTdHlsZXMpICYmICQuZWFjaChvcHRpb25zLmNvbnRlbnRTdHlsZXMsIGZ1bmN0aW9uIChpLCBzdHlsZSkge1xybGV0IGlkU3RyID0gc3R5bGUuaWQgfHwgJyc7XHJpZiAoc3R5bGUuaHJlZikge1xyc3R5bGVzICs9IGA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIiR7c3R5bGUuaHJlZn1cIiAke2lkU3RyfSAvPlxcbmA7XHJ9IGVsc2Uge1xyc3R5bGVzICs9IGA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCIgJHtpZFN0cn0+JHtzdHlsZS5jb250ZW50fTwvc3R5bGU+XFxuYDtccn1ccn0pO1xyc2VsZi5pZnJhbWVIZWFkLmFwcGVuZChzdHlsZXMpO1xyLy8gR2VuZXJhdGUgYm9keSBjb250ZW50IGZvciBpZnJhbWVccnNlbGYuY29udGVudEFyZWFzV3JhcHBlciA9ICQob3B0aW9ucy5jb250ZW50QXJlYXNXcmFwcGVyIHx8ICc8ZGl2IC8+Jyk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuYXR0cignY2xhc3MnLCBgJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5DT05URU5UX0FSRUFTX1dSQVBQRVJ9YCk7XHJzZWxmLmNvbnRlbnRBcmVhc1dyYXBwZXIuaHRtbChlbGVtZW50LnZhbCgpIHx8IGVsZW1lbnQuaHRtbCgpIHx8ICcnKTtccmlmICghc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyLmF0dHIoJ2lkJykpIHtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5hdHRyKCdpZCcsIHNlbGYuZ2VuZXJhdGVJZCgpKTtccn1ccnNlbGYuaWZyYW1lQm9keS5hcHBlbmQoc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkluaXRJZnJhbWUgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Jbml0SWZyYW1lLmNhbGwoc2VsZiwgc2VsZi5pZnJhbWUsIHNlbGYuaWZyYW1lSGVhZCwgc2VsZi5pZnJhbWVCb2R5KTtccn1ccnNlbGYuaW5pdENvbnRlbnRBcmVhcygpO1xyc2VsZi5pbml0SWZyYW1lQWN0aW9ucygpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xybGV0IGNvbnRlbnRBcmVhcztccmlmIChvcHRpb25zLmNvbnRlbnRBcmVhc1NlbGVjdG9yKSB7XHJjb250ZW50QXJlYXMgPSBjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQob3B0aW9ucy5jb250ZW50QXJlYXNTZWxlY3Rvcik7XHJ9XHJpZiAoIWNvbnRlbnRBcmVhcyB8fCBjb250ZW50QXJlYXMubGVuZ3RoID09PSAwKSB7XHJsZXQgb3JpZ2luYWxDb250ZW50ID0gY29udGVudEFyZWFzV3JhcHBlci5odG1sKCk7XHJjb250ZW50QXJlYXMgPSAkKCc8ZGl2IC8+JykuaHRtbChvcmlnaW5hbENvbnRlbnQpO1xyY29udGVudEFyZWFzV3JhcHBlci5lbXB0eSgpLmFwcGVuZChjb250ZW50QXJlYXMpO1xyfVxyY29udGVudEFyZWFzLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGNvbnRlbnRBcmVhID0gJCh0aGlzKTtccmlmICghY29udGVudEFyZWEuYXR0cignaWQnKSkge1xyY29udGVudEFyZWEuYXR0cignaWQnLCBzZWxmLmdlbmVyYXRlSWQoKSk7XHJ9XHJzZWxmLmluaXRDb250ZW50QXJlYShjb250ZW50QXJlYSk7XHJ9KTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGVsZW1lbnQgPSBzZWxmLmVsZW1lbnQ7XHJsZXQgaWQgPSBzZWxmLmlkO1xybGV0IGNvbnRlbnQgPSBzZWxmLmdldENvbnRlbnQoZmFsc2UpO1xyc2VsZi53cmFwcGVyLnJlbW92ZSgpO1xyaWYgKGVsZW1lbnQuaXMoJ3RleHRhcmVhJykpIHtccmVsZW1lbnQudmFsKGNvbnRlbnQpO1xyfSBlbHNlIHtccmVsZW1lbnQuaHRtbChjb250ZW50KTtccn1ccmVsZW1lbnQucmVtb3ZlQ2xhc3MoJ2tlZGl0b3ItaGlkZGVuLWVsZW1lbnQnKTtccmVsZW1lbnQuZGF0YSgna2VkaXRvcicsIG51bGwpO1xyZGVsZXRlIEtFZGl0b3IuaW5zdGFuY2VzW2lkXTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGluQXJyYXkpIHtccmxldCBzZWxmID0gdGhpcztccmxldCByZXN1bHQgPSBbXTtccnNlbGYuY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250ZW50LWFyZWEtaW5uZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBodG1sID0gJyc7XHIkKHRoaXMpLmNoaWxkcmVuKCcua2VkaXRvci1jb250YWluZXInKS5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBjb250YWluZXIgPSAkKHRoaXMpO1xyaHRtbCArPSBzZWxmLmdldENvbnRhaW5lckNvbnRlbnQoY29udGFpbmVyKTtccn0pO1xycmVzdWx0LnB1c2goaHRtbCk7XHJ9KTtccnJldHVybiBpbkFycmF5ID8gcmVzdWx0IDogcmVzdWx0LmpvaW4oJ1xcbicpO1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBjb250ZW50QXJlYXNXcmFwcGVyID0gc2VsZi5jb250ZW50QXJlYXNXcmFwcGVyO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xybGV0IHNpZGViYXIgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1zaWRlYmFyJyk7XHJsZXQgbW9kYWwgPSBzZWxmLmdldENsaWNrZWRFbGVtZW50KGUsICcua2VkaXRvci1tb2RhbCcpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYuZ2V0Q2xpY2tlZEVsZW1lbnQoZSwgJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRhaW5lcikge1xyaWYgKCFjb250YWluZXIuaGFzQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKSkge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb250YWluZXIuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbnRhaW5lci5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29udGFpbmVyLnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhciAmJiAhbW9kYWwpIHtccmNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZCgnLmtlZGl0b3ItY29udGFpbmVyLnNob3dlZC1rZWRpdG9yLXRvb2xiYXInKS5yZW1vdmVDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJsZXQgY29tcG9uZW50ID0gc2VsZi5nZXRDbGlja2VkRWxlbWVudChlLCAnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJpZiAoY29tcG9uZW50KSB7XHJpZiAoIWNvbXBvbmVudC5oYXNDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpKSB7XHJjb250ZW50QXJlYXNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmNvbXBvbmVudC5hZGRDbGFzcygnc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LnBhcmVudCgpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50U2VsZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTZWxlY3RlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyfVxyfSBlbHNlIHtccmlmICghc2lkZWJhcikge1xyY29udGVudEFyZWFzV3JhcHBlci5maW5kKCcua2VkaXRvci1jb21wb25lbnQuc2hvd2VkLWtlZGl0b3ItdG9vbGJhcicpLnJlbW92ZUNsYXNzKCdzaG93ZWQta2VkaXRvci10b29sYmFyJyk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLXNldHRpbmcnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGJ0biA9ICQodGhpcyk7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKGNvbnRlbnRBcmVhc1dyYXBwZXIuaGFzQ2xhc3MoJ29wZW5lZC1rZWRpdG9yLXNldHRpbmcnKSAmJiBjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zaWRlYmFyJykpIHtccmlmICghY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29udGFpbmVyKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb250YWluZXItZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbnRhaW5lciA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb250YWluZXInKTtccmxldCBjb250ZW50QXJlYSA9IGNvbnRhaW5lci5wYXJlbnQoKTtccmxldCBuZXdDb250YWluZXIgPSAkKHNlbGYuZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGJ0bi5wYXJlbnQoKS5oYXNDbGFzcygna2VkaXRvci10b29sYmFyLXN1Yi1jb250YWluZXInKSkpO1xyY29udGFpbmVyLmFmdGVyKG5ld0NvbnRhaW5lcik7XHJzZWxmLmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgbmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckR1cGxpY2F0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEdXBsaWNhdGVkLmNhbGwoc2VsZiwgY29udGFpbmVyLCBuZXdDb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIub24oJ2NsaWNrJywgJy5idG4tY29udGFpbmVyLWRlbGV0ZScsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgYnRuID0gJCh0aGlzKTtccmlmIChjb25maXJtKG9wdGlvbnMuY29uZmlybURlbGV0ZUNvbnRhaW5lclRleHQpKSB7XHJsZXQgY29udGFpbmVyID0gYnRuLmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbXBvbmVudHMgPSBjb250YWluZXIuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25CZWZvcmVDb250YWluZXJEZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQmVmb3JlQ29udGFpbmVyRGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxybGV0IHNldHRpbmdDb21wb25lbnQgPSBzZWxmLnNldHRpbmdDb21wb25lbnQ7XHJpZiAoc2V0dGluZ0NvbXBvbmVudCkge1xybGV0IHNldHRpbmdDb21wb25lbnRQYXJlbnQgPSBzZXR0aW5nQ29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xyaWYgKHNldHRpbmdDb21wb25lbnRQYXJlbnQuaXMoY29udGFpbmVyKSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccn0gZWxzZSBpZiAoY29udGFpbmVyLmlzKHNlbGYuc2V0dGluZ0NvbnRhaW5lcikpIHtccnNlbGYuY2xvc2VTaWRlYmFyKCk7XHJ9XHJpZiAoY29tcG9uZW50cy5sZW5ndGggPiAwKSB7XHJjb21wb25lbnRzLmVhY2goZnVuY3Rpb24gKCkge1xyc2VsZi5kZWxldGVDb21wb25lbnQoJCh0aGlzKSk7XHJ9KTtccn1ccmNvbnRhaW5lci5yZW1vdmUoKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRhaW5lckRlbGV0ZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250YWluZXJEZWxldGVkLmNhbGwoc2VsZiwgZSwgY29udGFpbmVyLCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyfVxyfSk7XHJjb250ZW50QXJlYXNXcmFwcGVyLm9uKCdjbGljaycsICcuYnRuLWNvbXBvbmVudC1zZXR0aW5nJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmlmIChjb250ZW50QXJlYXNXcmFwcGVyLmhhc0NsYXNzKCdvcGVuZWQta2VkaXRvci1zZXR0aW5nJykgJiYgY29udGVudEFyZWFzV3JhcHBlci5oYXNDbGFzcygnb3BlbmVkLWtlZGl0b3Itc2lkZWJhcicpKSB7XHJpZiAoIWNvbXBvbmVudC5pcyhzZWxmLnNldHRpbmdDb21wb25lbnQoKSkpIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn0gZWxzZSB7XHJzZWxmLmNsb3NlU2lkZWJhcigpO1xyfVxyfSBlbHNlIHtccnNlbGYub3BlblNpZGViYXIoY29tcG9uZW50KTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZHVwbGljYXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xybGV0IGNvbXBvbmVudCA9IGJ0bi5jbG9zZXN0KCcua2VkaXRvci1jb21wb25lbnQnKTtccmxldCBjb250YWluZXIgPSBjb21wb25lbnQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJsZXQgY29udGVudEFyZWEgPSBjb250YWluZXIucGFyZW50KCk7XHJsZXQgbmV3Q29tcG9uZW50ID0gJChzZWxmLmdldENvbXBvbmVudENvbnRlbnQoY29tcG9uZW50KSk7XHJjb21wb25lbnQuYWZ0ZXIobmV3Q29tcG9uZW50KTtccnNlbGYuY29udmVydFRvQ29tcG9uZW50KGNvbnRlbnRBcmVhLCBjb250YWluZXIsIG5ld0NvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREdXBsaWNhdGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RHVwbGljYXRlZC5jYWxsKHNlbGYsIGNvbXBvbmVudCwgbmV3Q29tcG9uZW50LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRhaW5lciwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xyY29udGVudEFyZWFzV3JhcHBlci5vbignY2xpY2snLCAnLmJ0bi1jb21wb25lbnQtZGVsZXRlJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBidG4gPSAkKHRoaXMpO1xyaWYgKGNvbmZpcm0ob3B0aW9ucy5jb25maXJtRGVsZXRlQ29tcG9uZW50VGV4dCkpIHtccmxldCBjb21wb25lbnQgPSBidG4uY2xvc2VzdCgnLmtlZGl0b3ItY29tcG9uZW50Jyk7XHJsZXQgY29udGFpbmVyID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRhaW5lcicpO1xybGV0IGNvbnRlbnRBcmVhID0gY29tcG9uZW50LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQmVmb3JlQ29tcG9uZW50RGVsZXRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkJlZm9yZUNvbXBvbmVudERlbGV0ZWQuY2FsbChzZWxmLCBlLCBjb21wb25lbnQsIGNvbnRlbnRBcmVhKTtccn1ccmlmIChjb21wb25lbnQuaXMoc2VsZi5zZXR0aW5nQ29tcG9uZW50KSkge1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn1ccnNlbGYuZGVsZXRlQ29tcG9uZW50KGNvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnREZWxldGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50RGVsZXRlZC5jYWxsKHNlbGYsIGUsIGNvbXBvbmVudCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250YWluZXIsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9XHJ9KTtccmNvbnRlbnRBcmVhc1dyYXBwZXIuYWRkQ2xhc3MoJ2tlZGl0b3ItY2xpY2tzLWluaXRpYWxpemVkJyk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoaWZyYW1lLCB3cmFwcGVyKSB7XHJpZiAoIXdyYXBwZXIpIHtccmlmcmFtZS53cmFwKGA8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5JRlJBTUVfRkFLRVJ9XCI+PC9kaXY+YCk7XHJ3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xyfVxyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfV1JBUFBFUn1gKTtccmxldCBjb3ZlciA9ICQoYDxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLklGUkFNRV9DT1ZFUn1cIj48L2Rpdj5gKTtccndyYXBwZXIucHJlcGVuZChjb3Zlcik7XHJ3cmFwcGVyLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyd3JhcHBlci5yZW1vdmVDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJjb3Zlci5vbignZGJsY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyd3JhcHBlci5hZGRDbGFzcyhgJHtDTEFTU19OQU1FUy5JRlJBTUVfQ09WRVJfSElEREVOfWApO1xyfSk7XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJpbXBvcnQgREVGQVVMVFMgZnJvbSAnLi9jb25zdGFudHMvZGVmYXVsdHMnO1xyaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9nZW5lcmF0ZUlkJztcclxuaW1wb3J0IGdlbmVyYXRlVG9vbGJhciBmcm9tICcuL3V0aWxzL2dlbmVyYXRlVG9vbGJhcic7XHJcbmltcG9ydCBiZWF1dGlmeUNhdGVnb3JpZXMgZnJvbSAnLi91dGlscy9iZWF1dGlmeUNhdGVnb3JpZXMnO1xyXG5pbXBvcnQgZ2V0RGF0YUF0dHJpYnV0ZXMgZnJvbSAnLi91dGlscy9nZXREYXRhQXR0cmlidXRlcyc7XHJcbmltcG9ydCBnZXRDbGlja2VkRWxlbWVudCBmcm9tICcuL3V0aWxzL2dldENsaWNrZWRFbGVtZW50JztccmltcG9ydCBpbml0SWZyYW1lQWN0aW9ucyBmcm9tICcuL2lmcmFtZS9pbml0SWZyYW1lQWN0aW9ucyc7XHJcbmltcG9ydCBpbml0SWZyYW1lQ292ZXIgZnJvbSAnLi9pZnJhbWUvaW5pdElmcmFtZUNvdmVyJztccmltcG9ydCBpbml0VG9wYmFyIGZyb20gJy4vdG9wYmFyL2luaXRUb3BiYXInO1xyXG5pbXBvcnQgaW5pdFRvcGJhck1vZGVzIGZyb20gJy4vdG9wYmFyL2luaXRUb3BiYXJNb2Rlcyc7XHJcbmltcG9ydCBpbml0RGV2aWNlU3dpdGNoZXIgZnJvbSAnLi90b3BiYXIvaW5pdERldmljZVN3aXRjaGVyJztccmltcG9ydCBpbml0U2lkZWJhciBmcm9tICcuL3NpZGViYXIvaW5pdFNpZGViYXInO1xyXG5pbXBvcnQgb3BlblNpZGViYXIgZnJvbSAnLi9zaWRlYmFyL29wZW5TaWRlYmFyJztcclxuaW1wb3J0IGNsb3NlU2lkZWJhciBmcm9tICcuL3NpZGViYXIvY2xvc2VTaWRlYmFyJztccmltcG9ydCByZW5kZXJTbmlwcGV0cyBmcm9tICcuL3NuaXBwZXQvcmVuZGVyU25pcHBldHMnO1xyXG5pbXBvcnQgaW5pdFNuaXBwZXRzRmlsdGVyIGZyb20gJy4vc25pcHBldC9pbml0U25pcHBldHNGaWx0ZXInO1xyXG5pbXBvcnQgYWRkU25pcHBldCBmcm9tICcuL3NuaXBwZXQvYWRkU25pcHBldCc7XHJpbXBvcnQgaW5pdFNuaXBwZXRzTW9kYWwgZnJvbSAnLi9tb2RhbC9pbml0U25pcHBldHNNb2RhbCc7XHJcbmltcG9ydCBvcGVuTW9kYWwgZnJvbSAnLi9tb2RhbC9vcGVuTW9kYWwnO1xyXG5pbXBvcnQgY2xvc2VNb2RhbCBmcm9tICcuL21vZGFsL2Nsb3NlTW9kYWwnO1xyaW1wb3J0IGluaXRDb250ZW50QXJlYVdyYXBwZXIgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFXcmFwcGVyJztcclxuaW1wb3J0IGluaXRDb250ZW50QXJlYXMgZnJvbSAnLi9jb250ZW50QXJlYS9pbml0Q29udGVudEFyZWFzJztcclxuaW1wb3J0IGluaXRDb250ZW50QXJlYSBmcm9tICcuL2NvbnRlbnRBcmVhL2luaXRDb250ZW50QXJlYSc7XHJpbXBvcnQgY29udmVydFRvQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyL2NvbnZlcnRUb0NvbnRhaW5lcic7XHJcbmltcG9ydCBpbml0Q29udGFpbmVyIGZyb20gJy4vY29udGFpbmVyL2luaXRDb250YWluZXInO1xyXG5pbXBvcnQgaW5pdENvbnRhaW5lckNvbnRlbnQgZnJvbSAnLi9jb250YWluZXIvaW5pdENvbnRhaW5lckNvbnRlbnQnO1xyXG5pbXBvcnQgZ2V0Q29udGFpbmVyQ29udGVudCBmcm9tICcuL2NvbnRhaW5lci9nZXRDb250YWluZXJDb250ZW50JztccmltcG9ydCBnZXRDb21wb25lbnRUeXBlIGZyb20gJy4vY29tcG9uZW50L2dldENvbXBvbmVudFR5cGUnO1xyXG5pbXBvcnQgY29udmVydFRvQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2NvbnZlcnRUb0NvbXBvbmVudCc7XHJcbmltcG9ydCBpbml0Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50L2luaXRDb21wb25lbnQnO1xyXG5pbXBvcnQgaW5pdER5bmFtaWNDb250ZW50IGZyb20gJy4vY29tcG9uZW50L2luaXREeW5hbWljQ29udGVudCc7XHJcbmltcG9ydCBkZWxldGVDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQvZGVsZXRlQ29tcG9uZW50JztcclxuaW1wb3J0IGdldENvbXBvbmVudENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnQvZ2V0Q29tcG9uZW50Q29udGVudCc7XHJpbXBvcnQgaW5pdCBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgZGVzdHJveSBmcm9tICcuL2Rlc3Ryb3knO1xyXG5pbXBvcnQgZ2V0Q29udGVudCBmcm9tICcuL2dldENvbnRlbnQnO1xyXG5pbXBvcnQgc2V0Q29udGVudCBmcm9tICcuL3NldENvbnRlbnQnO1xyaW1wb3J0ICcuLi9zdHlsZXMva2VkaXRvci5sZXNzJztcci8vIENoZWNrIGRlcGVuZGVuY2llc1xyXG5pZiAoISQuZm4uc29ydGFibGUpIHtccmVycm9yKCckLmZuLnNvcnRhYmxlIGRvZXMgbm90IGV4aXN0LiBQbGVhc2UgaW1wb3J0ICQuZm4uc29ydGFibGUgaW50byB5b3VyIGRvY3VtZW50IGZvciBjb250aW51ZSB1c2luZyBLRWRpdG9yLicpO1xyXG59XHIvLyBLRWRpdG9yIGNsYXNzXHJcbmNsYXNzIEtFZGl0b3Ige1xyc3RhdGljIERFRkFVTFRTID0gREVGQVVMVFM7XHJzdGF0aWMgZGVidWcgPSBmYWxzZTtccnN0YXRpYyB2ZXJzaW9uID0gJzIuMC4wJztccnN0YXRpYyBpbnN0YW5jZXMgPSB7fTtccnN0YXRpYyBjb21wb25lbnRzID0ge1xyYmxhbms6IHtccnNldHRpbmdFbmFibGVkOiBmYWxzZVxyfVxyfTtccnN0YXRpYyBsb2coLi4uYXJncykge1xyaWYgKGNvbnNvbGUgJiYgdHlwZW9mIGNvbnNvbGUubG9nID09PSAnZnVuY3Rpb24nICYmICQua2VkaXRvci5kZWJ1Zykge1xyY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydbIEtFZGl0b3IgXSAnLCAuLi5hcmdzXSk7XHJjb25zb2xlLmxvZyhgXCJsb2dcIiBpcyBERVBSRUNBVEVELiBXaWxsIGJlIHJlbW92ZWQgc29vbi4gUGxlYXNlIHVzZSBcImNvbnNvbGUubG9nXCIgaW5zdGVhZCFgKTtccn1ccn1ccnN0YXRpYyBlcnJvcihtZXNzYWdlKSB7XHJ0aHJvdyBuZXcgRXJyb3IoYFsgS0VkaXRvciBdICR7bWVzc2FnZX1gKTtccn1ccnN0YXRpYyBpbml0KHRhcmdldCwgY29uZmlnKSB7XHJyZXR1cm4gbmV3IEtFZGl0b3IodGFyZ2V0LCBjb25maWcpO1xyfVxyY29uc3RydWN0b3IodGFyZ2V0LCBjb25maWcpIHtccnJldHVybiBpbml0LmFwcGx5KHRoaXMsIFt0YXJnZXQsIGNvbmZpZ10pO1xyfVxyZ2VuZXJhdGVJZCgpIHtccnJldHVybiBnZW5lcmF0ZUlkKCk7XHJ9XHJnZW5lcmF0ZVRvb2xiYXIodHlwZSwgaXNDb21wb25lbnRDb25maWd1cmFibGUpIHtccnJldHVybiBnZW5lcmF0ZVRvb2xiYXIuYXBwbHkodGhpcywgW3R5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlXSk7XHJ9XHJiZWF1dGlmeUNhdGVnb3JpZXMoY2F0ZWdvcmllcykge1xycmV0dXJuIGJlYXV0aWZ5Q2F0ZWdvcmllcy5hcHBseSh0aGlzLCBbY2F0ZWdvcmllc10pO1xyfVxyc2V0U2V0dGluZ0NvbnRhaW5lcihjb250YWluZXIpIHtccnRoaXMuc2V0dGluZ0NvbnRhaW5lciA9IGNvbnRhaW5lcjtccn1ccmdldFNldHRpbmdDb250YWluZXIoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29udGFpbmVyO1xyfVxyc2V0U2V0dGluZ0NvbXBvbmVudChjb21wb25lbnQpIHtccnRoaXMuc2V0dGluZ0NvbXBvbmVudCA9IGNvbXBvbmVudDtccn1ccmdldFNldHRpbmdDb21wb25lbnQoKSB7XHJyZXR1cm4gdGhpcy5zZXR0aW5nQ29tcG9uZW50O1xyfVxyZ2V0RGF0YUF0dHJpYnV0ZXModGFyZ2V0LCBpZ25vcmVBdHRyaWJ1dGVzLCBpc0FycmF5KSB7XHJyZXR1cm4gZ2V0RGF0YUF0dHJpYnV0ZXMuYXBwbHkodGhpcywgW3RhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheV0pO1xyfVxyZ2V0Q29tcG9uZW50VHlwZShjb21wb25lbnQpIHtccnJldHVybiBnZXRDb21wb25lbnRUeXBlLmFwcGx5KHRoaXMsIFtjb21wb25lbnRdKTtccn1ccmdldENsaWNrZWRFbGVtZW50KGV2ZW50LCBzZWxlY3Rvcikge1xycmV0dXJuIGdldENsaWNrZWRFbGVtZW50LmFwcGx5KHRoaXMsIFtldmVudCwgc2VsZWN0b3JdKTtccn1cci8vIElmcmFtZVxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpIHtccnJldHVybiBpbml0SWZyYW1lQ292ZXIuYXBwbHkodGhpcywgW2lmcmFtZSwgd3JhcHBlcl0pO1xyfVxyLy8gS0VkaXRvciBjbGlja3Ncci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0SWZyYW1lQWN0aW9ucygpIHtccnJldHVybiBpbml0SWZyYW1lQWN0aW9ucy5hcHBseSh0aGlzKTtccn1cci8vIFRvcGJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRUb3BiYXIoKSB7XHJyZXR1cm4gaW5pdFRvcGJhci5hcHBseSh0aGlzKTtccn1ccmluaXREZXZpY2VTd2l0Y2hlcigpIHtccnJldHVybiBpbml0RGV2aWNlU3dpdGNoZXIuYXBwbHkodGhpcyk7XHJ9XHJpbml0VG9wYmFyTW9kZXMoKSB7XHJyZXR1cm4gaW5pdFRvcGJhck1vZGVzLmFwcGx5KHRoaXMpO1xyfVxyLy8gU2lkZWJhclxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTaWRlYmFyKCkge1xycmV0dXJuIGluaXRTaWRlYmFyLmFwcGx5KHRoaXMpO1xyfVxyb3BlblNpZGViYXIodGFyZ2V0KSB7XHJyZXR1cm4gb3BlblNpZGViYXIuYXBwbHkodGhpcywgW3RhcmdldF0pO1xyfVxyY2xvc2VTaWRlYmFyKCkge1xycmV0dXJuIGNsb3NlU2lkZWJhci5hcHBseSh0aGlzKTtccn1cci8vIExlZ2FjeSBtZXRob2RzLiBERVBSRUNBVEVEXHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyc2hvd1NldHRpbmdQYW5lbCh0YXJnZXQpIHtccnRoaXMub3BlblNpZGViYXIodGFyZ2V0KTtccn1ccmhpZGVTZXR0aW5nUGFuZWwoKSB7XHJ0aGlzLmNsb3NlU2lkZWJhcigpO1xyfVxyLy8gU25pcHBldCBtb2RhbFxyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmluaXRTbmlwcGV0c01vZGFsKCkge1xycmV0dXJuIGluaXRTbmlwcGV0c01vZGFsLmFwcGx5KHRoaXMpO1xyfVxycmVuZGVyU25pcHBldHMocmVzcCkge1xycmV0dXJuIHJlbmRlclNuaXBwZXRzLmFwcGx5KHRoaXMsIFtyZXNwXSk7XHJ9XHJpbml0U25pcHBldHNGaWx0ZXIodHlwZSkge1xycmV0dXJuIGluaXRTbmlwcGV0c0ZpbHRlci5hcHBseSh0aGlzLCBbdHlwZV0pO1xyfVxyb3Blbk1vZGFsKHRhcmdldCwgc25pcHBldFR5cGUpIHtccnJldHVybiBvcGVuTW9kYWwuYXBwbHkodGhpcywgW3RhcmdldCwgc25pcHBldFR5cGVdKTtccn1ccmNsb3NlTW9kYWwoKSB7XHJyZXR1cm4gY2xvc2VNb2RhbC5hcHBseSh0aGlzKTtccn1cci8vIENvbnRlbnQgYXJlYXNcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJpbml0Q29udGVudEFyZWFXcmFwcGVyKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYVdyYXBwZXIuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWFzKCkge1xycmV0dXJuIGluaXRDb250ZW50QXJlYXMuYXBwbHkodGhpcyk7XHJ9XHJpbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcikge1xycmV0dXJuIGluaXRDb250ZW50QXJlYS5hcHBseSh0aGlzLCBbY29udGVudEFyZWEsIGRvbnRJbml0VG9vbGJhcl0pO1xyfVxyLy8gQ29udGFpbmVyc1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbnRhaW5lcihjb250ZW50QXJlYSwgdGFyZ2V0KSB7XHJyZXR1cm4gY29udmVydFRvQ29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgdGFyZ2V0XSk7XHJ9XHJpbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBjb250YWluZXIpIHtccnJldHVybiBpbml0Q29udGFpbmVyLmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyXSk7XHJ9XHJpbml0Q29udGFpbmVyQ29udGVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZCkge1xycmV0dXJuIGluaXRDb250YWluZXJDb250ZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb250YWluZXJDb250ZW50LCBpc05lc3RlZF0pO1xyfVxyLy8gQ29tcG9uZW50c1xyLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1ccmNvbnZlcnRUb0NvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCB0YXJnZXQsIGlzRXhpc3RpbmcpIHtccnJldHVybiBjb252ZXJ0VG9Db21wb25lbnQuYXBwbHkodGhpcywgW2NvbnRlbnRBcmVhLCBjb250YWluZXIsIHRhcmdldCwgaXNFeGlzdGluZ10pO1xyfVxyaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQpIHtccnJldHVybiBpbml0Q29tcG9uZW50LmFwcGx5KHRoaXMsIFtjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnRdKTtccn1ccmluaXREeW5hbWljQ29udGVudChkeW5hbWljRWxlbWVudCkge1xycmV0dXJuIGluaXREeW5hbWljQ29udGVudC5hcHBseSh0aGlzLCBbZHluYW1pY0VsZW1lbnRdKTtccn1ccmRlbGV0ZUNvbXBvbmVudChjb21wb25lbnQpIHtccnJldHVybiBkZWxldGVDb21wb25lbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyLy8gR2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJnZXRDb21wb25lbnRDb250ZW50KGNvbXBvbmVudCkge1xycmV0dXJuIGdldENvbXBvbmVudENvbnRlbnQuYXBwbHkodGhpcywgW2NvbXBvbmVudF0pO1xyfVxyZ2V0Q29udGFpbmVyQ29udGVudChjb250YWluZXIsIGlzTmVzdGVkKSB7XHJyZXR1cm4gZ2V0Q29udGFpbmVyQ29udGVudC5hcHBseSh0aGlzLCBbY29udGFpbmVyLCBpc05lc3RlZF0pO1xyfVxyZ2V0Q29udGVudChpbkFycmF5KSB7XHJyZXR1cm4gZ2V0Q29udGVudC5hcHBseSh0aGlzLCBbaW5BcnJheV0pO1xyfVxyLy8gU2V0IGNvbnRlbnRcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJzZXRDb250ZW50KGNvbnRlbnQsIGNvbnRlbnRBcmVhKSB7XHJyZXR1cm4gc2V0Q29udGVudC5hcHBseSh0aGlzLCBbY29udGVudCwgY29udGVudEFyZWFdKTtccn1cci8vIERlc3Ryb3lcci8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJkZXN0cm95KCkge1xycmV0dXJuIGRlc3Ryb3kuYXBwbHkodGhpcyk7XHJ9XHIvLyBEZXN0cm95XHIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyYWRkU25pcHBldCh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXMpIHtccnJldHVybiBhZGRTbmlwcGV0LmFwcGx5KHRoaXMsIFt0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZGF0YUF0dHJpYnV0ZXNdKTtccn1cclxufVxyLy8gS0VkaXRvciBwbHVnaW5zXHJcbiQuZm4ua2VkaXRvciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XHJsZXQgZWxlbWVudCA9ICQodGhpcyk7XHJsZXQgaW5zdGFuY2UgPSBlbGVtZW50LmRhdGEoJ2tlZGl0b3InKTtccmlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtccmlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZVtvcHRpb25zXSAmJiB0eXBlb2YgaW5zdGFuY2Vbb3B0aW9uc10gPT09ICdmdW5jdGlvbicpIHtccnJldHVybiBpbnN0YW5jZVtvcHRpb25zXS5hcHBseShpbnN0YW5jZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKSk7XHJ9XHJ9IGVsc2Uge1xyaWYgKCFpbnN0YW5jZSkge1xyaW5zdGFuY2UgPSBLRWRpdG9yLmluaXQoZWxlbWVudCwgb3B0aW9ucyk7XHJlbGVtZW50LmRhdGEoJ2tlZGl0b3InLCBpbnN0YW5jZSk7XHJ9XHJyZXR1cm4gaW5zdGFuY2U7XHJ9XHJcbn07XHJ3aW5kb3cuS0VkaXRvciA9ICQua2VkaXRvciA9ICQuZm4ua2VkaXRvci5jb25zdHJ1Y3RvciA9IEtFZGl0b3I7XHJcbiIsImltcG9ydCBERUZBVUxUUyBmcm9tICcuL2NvbnN0YW50cy9kZWZhdWx0cyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodGFyZ2V0LCBjb25maWcpIHtccmxldCBzZWxmID0gdGhpcztccnNlbGYuZWxlbWVudCA9IHRhcmdldDtccnNlbGYub3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBERUZBVUxUUywgY29uZmlnKTtccnNlbGYuaW5pdENvbnRlbnRBcmVhV3JhcHBlcigpO1xyc2VsZi5pbml0VG9wYmFyKCk7XHJzZWxmLmluaXRTaWRlYmFyKCk7XHJzZWxmLmluaXRTbmlwcGV0c01vZGFsKCk7XHJzZWxmLmlkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJLRWRpdG9yLmluc3RhbmNlc1tzZWxmLmlkXSA9IHNlbGY7XHJpZiAodHlwZW9mIHNlbGYub3B0aW9ucy5vblJlYWR5ID09PSAnZnVuY3Rpb24nKSB7XHJzZWxmLm9wdGlvbnMub25SZWFkeS5jYWxsKHNlbGYpO1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xyc2VsZi5tb2RhbFRhcmdldCA9IG51bGw7XHJzZWxmLm1vZGFsQWN0aW9uID0gbnVsbDtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLXRpdGxlJykuaHRtbCgnJyk7XHJtb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyIC5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xybW9kYWwucmVtb3ZlQ2xhc3MoJ3Nob3dlZCcpO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gJy4uL2NvbnN0YW50cy9zbmlwcGV0VHlwZSc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBtb2RhbElkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJsZXQgc25pcHBldHNXcmFwcGVySHRtbCA9ICcnO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc25pcHBldHNXcmFwcGVySHRtbCA9IGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXIga2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lclwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMga2VkaXRvci1zbmlwcGV0cy1jb250YWluZXJcIj48L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3Itc25pcHBldHMtd3JhcHBlciBrZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50XCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cyBrZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudFwiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfSBlbHNlIHtccnNuaXBwZXRzV3JhcHBlckh0bWwgPSBgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0cy13cmFwcGVyXCI+XHI8ZGl2IGNsYXNzPVwia2VkaXRvci1zbmlwcGV0c1wiPjwvZGl2PlxyPC9kaXY+XHJgO1xyfVxybGV0IG1vZGFsID0gc2VsZi5tb2RhbCA9ICQoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1tb2RhbFwiIGlkPVwiJHttb2RhbElkfVwiPlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtaGVhZGVyXCI+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtY2xvc2VcIj4mdGltZXM7PC9idXR0b24+XHI8aDQgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLXRpdGxlXCI+PC9oND5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImtlZGl0b3ItbW9kYWwtYm9keVwiPiR7c25pcHBldHNXcmFwcGVySHRtbH08L2Rpdj5ccjxkaXYgY2xhc3M9XCJrZWRpdG9yLW1vZGFsLWZvb3RlclwiPlxyPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQga2VkaXRvci1tb2RhbC1jbG9zZVwiPkNsb3NlPC9idXR0b24+XHI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tcHJpbWFyeSBrZWRpdG9yLW1vZGFsLWFkZFwiPkFkZDwvYnV0dG9uPlxyPC9kaXY+XHI8L2Rpdj5ccmApO1xyaWYgKHR5cGVvZiBvcHRpb25zLnNuaXBwZXRzVXJsID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLnNuaXBwZXRzVXJsLmxlbmd0aCA+IDApIHtcciQuYWpheCh7XHJ0eXBlOiAnZ2V0JyxccmRhdGFUeXBlOiAnaHRtbCcsXHJ1cmw6IG9wdGlvbnMuc25pcHBldHNVcmwsXHJzdWNjZXNzOiBmdW5jdGlvbiAocmVzcCkge1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uU25pcHBldHNMb2FkZWQgPT09ICdmdW5jdGlvbicpIHtccnJlc3AgPSBvcHRpb25zLm9uU25pcHBldHNMb2FkZWQuY2FsbChzZWxmLCByZXNwKSB8fCByZXNwO1xyfVxyc2VsZi5yZW5kZXJTbmlwcGV0cyhyZXNwKTtccmlmIChvcHRpb25zLnNuaXBwZXRzRmlsdGVyRW5hYmxlZCkge1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc2VsZi5pbml0U25pcHBldHNGaWx0ZXIoU05JUFBFVF9UWVBFLkNPTlRBSU5FUik7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQ09NUE9ORU5UKTtccn0gZWxzZSB7XHJzZWxmLmluaXRTbmlwcGV0c0ZpbHRlcihTTklQUEVUX1RZUEUuQUxMKTtccn1ccn1ccn0sXHJlcnJvcjogZnVuY3Rpb24gKGpxWEhSKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25TbmlwcGV0c0Vycm9yID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uU25pcHBldHNFcnJvci5jYWxsKHNlbGYsIGpxWEhSKTtccn1ccn1ccn0pO1xyLy8gQ2xvc2UgYnV0dG9uc1xybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFkZCBidXR0b25ccm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWFkZCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgc2VsZWN0ZWRTbmlwcGV0ID0gbW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlciAuc2VsZWN0ZWQnKTtccmlmIChzZWxlY3RlZFNuaXBwZXQubGVuZ3RoID09PSAwKSB7XHJyZXR1cm47XHJ9XHJsZXQgY29udGVudEFyZWEgPSBzZWxmLm1vZGFsVGFyZ2V0LmNsb3Nlc3QoJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xybGV0IHNuaXBwZXRUeXBlID0gc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtdHlwZScpO1xybGV0IHNuaXBwZXRDb250ZW50RWxlbWVudCA9IG1vZGFsLmZpbmQoc2VsZWN0ZWRTbmlwcGV0LmF0dHIoJ2RhdGEtc25pcHBldCcpKTtccmxldCBzbmlwcGV0Q29udGVudCA9IHNuaXBwZXRDb250ZW50RWxlbWVudC5odG1sKCk7XHJsZXQgaXNBZGRpbmdDb250YWluZXIgPSBmYWxzZTtccmxldCBpc0FkZGluZ0NvbXBvbmVudCA9IGZhbHNlO1xybGV0IGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IGZhbHNlO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc3dpdGNoIChzZWxmLm1vZGFsU25pcHBldFR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmlzQWRkaW5nQ29tcG9uZW50ID0gdHJ1ZTtccmJyZWFrO1xyY2FzZSBTTklQUEVUX1RZUEUuQ09OVEFJTkVSOlxyaXNBZGRpbmdDb250YWluZXIgPSB0cnVlO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfSBlbHNlIHtccmlmIChzbmlwcGV0VHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccmlzQWRkaW5nQ29udGFpbmVyID0gdHJ1ZTtccn0gZWxzZSB7XHJzd2l0Y2ggKHNlbGYubW9kYWxTbmlwcGV0VHlwZSkge1xyY2FzZSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UOlxyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5BTEw6XHJpZiAoc2VsZi5tb2RhbFRhcmdldC5pcygnLmtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtaW5uZXInKSkge1xyaXNBZGRpbmdDb21wb25lbnQgPSB0cnVlO1xyfSBlbHNlIHtccmlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lciA9IHRydWU7XHJ9XHJicmVhaztccmRlZmF1bHQ6XHIvLyBEbyBub3RoaW5nXHJ9XHJ9XHJ9XHJsZXQgbmV3Q29udGFpbmVyO1xybGV0IG5ld0NvbXBvbmVudDtccmlmIChpc0FkZGluZ0NvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb250YWluZXIpO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyU25pcHBldEFkZGVkLmNhbGwoc2VsZiwgZSwgbmV3Q29udGFpbmVyLCBzZWxlY3RlZFNuaXBwZXQsIGNvbnRlbnRBcmVhKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChzZWxmLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJzZWxmLmluaXRDb250YWluZXIoY29udGVudEFyZWEsIG5ld0NvbnRhaW5lcik7XHJ9XHJpZiAoaXNBZGRpbmdDb21wb25lbnQpIHtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJzZWxmLm1vZGFsVGFyZ2V0LmFwcGVuZChuZXdDb21wb25lbnQpO1xybGV0IGNvbnRhaW5lciA9IHNlbGYubW9kYWxUYXJnZXQuY2xvc2VzdCgnLmtlZGl0b3ItY29udGFpbmVyJyk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRTbmlwcGV0QWRkZWQuY2FsbChzZWxmLCBlLCBuZXdDb21wb25lbnQsIHNlbGVjdGVkU25pcHBldCwgY29udGVudEFyZWEpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKHNlbGYsIGUsIGNvbnRlbnRBcmVhKTtccn1ccnNlbGYuaW5pdENvbXBvbmVudChjb250ZW50QXJlYSwgY29udGFpbmVyLCBuZXdDb21wb25lbnQpO1xyfVxyaWYgKGlzQWRkaW5nQ29tcG9uZW50V2l0aENvbnRhaW5lcikge1xyc2VsZi5ib2R5LmZpbmQoJy5rZWRpdG9yLWNvbnRhaW5lci5zaG93ZWQta2VkaXRvci10b29sYmFyJykucmVtb3ZlQ2xhc3MoJ3Nob3dlZC1rZWRpdG9yLXRvb2xiYXInKTtccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldENvbnRlbnRFbGVtZW50LCBudWxsLCB0cnVlKTtccm5ld0NvbnRhaW5lciA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyIHNob3dlZC1rZWRpdG9yLXRvb2xiYXJcIj5ccjxzZWN0aW9uIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1pbm5lclwiPiR7b3B0aW9ucy5jb250YWluZXJGb3JRdWlja0FkZENvbXBvbmVudH08L3NlY3Rpb24+XHI8L3NlY3Rpb24+XHJgKTtccm5ld0NvbXBvbmVudCA9ICQoYFxyPHNlY3Rpb24gY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29tcG9uZW50XCIgZGF0YS10eXBlPVwiJHtzbmlwcGV0VHlwZX1cIiAke2RhdGFBdHRyaWJ1dGVzLmpvaW4oJyAnKX0+XHI8c2VjdGlvbiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1jb21wb25lbnQtY29udGVudFwiPiR7c25pcHBldENvbnRlbnR9PC9zZWN0aW9uPlxyPC9zZWN0aW9uPlxyYCk7XHJuZXdDb250YWluZXIuZmluZCgnW2RhdGEtdHlwZT1cImNvbnRhaW5lci1jb250ZW50XCJdJykuZXEoMCkuaHRtbChuZXdDb21wb25lbnQpO1xyc2VsZi5tb2RhbFRhcmdldC5hcHBlbmQobmV3Q29udGFpbmVyKTtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFNuaXBwZXRBZGRlZC5jYWxsKHNlbGYsIGUsIG5ld0NvbXBvbmVudCwgc2VsZWN0ZWRTbmlwcGV0LCBjb250ZW50QXJlYSk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250ZW50Q2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkLmNhbGwoc2VsZiwgZSwgY29udGVudEFyZWEpO1xyfVxyc2VsZi5pbml0Q29udGFpbmVyKGNvbnRlbnRBcmVhLCBuZXdDb250YWluZXIpO1xyfVxyc2VsZi5jbG9zZU1vZGFsKCk7XHJ9KTtcci8vIEFjdGlvbiBjbGljayBmb3Igc25pcHBldFxybW9kYWwub24oJ2NsaWNrJywgJy5rZWRpdG9yLXNuaXBwZXQnLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IHNuaXBwZXQgPSAkKHRoaXMpO1xyaWYgKCFzbmlwcGV0Lmhhc0NsYXNzKCdzZWxlY3RlZCcpKSB7XHJzbmlwcGV0LnBhcmVudCgpLmZpbmQoJy5zZWxlY3RlZCcpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xyc25pcHBldC5hZGRDbGFzcygnc2VsZWN0ZWQnKTtccn1ccn0pO1xybGV0IGNzc1RyYW5zaXRpb25FbmQgPSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCc7XHJtb2RhbC5vbihjc3NUcmFuc2l0aW9uRW5kLCAoKSA9PiB7XHJpZiAoIW1vZGFsLmhhc0NsYXNzKCdzaG93ZWQnKSkge1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcciQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoJ29wZW5lZC1tb2RhbCcpO1xyfVxyfSk7XHJtb2RhbC5hcHBlbmRUbyhkb2N1bWVudC5ib2R5KTtccn0gZWxzZSB7XHJzZWxmLmVycm9yKCdcInNuaXBwZXRzVXJsXCIgbXVzdCBiZSBub3QgbnVsbCEnKTtccn1cclxufTtcclxuIiwiaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvc25pcHBldFR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgc25pcHBldFR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBtb2RhbCA9IHNlbGYubW9kYWw7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBtb2RhbFRpdGxlID0gJyc7XHJzd2l0Y2ggKHNuaXBwZXRUeXBlKSB7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT05UQUlORVI6XHJtb2RhbFRpdGxlID0gJ0FkZCBjb250YWluZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT01QT05FTlQ6XHJtb2RhbFRpdGxlID0gJ0FkZCBjb21wb25lbnQnO1xyYnJlYWs7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybW9kYWwuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtd3JhcHBlcicpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJtb2RhbC5maW5kKHNuaXBwZXRUeXBlID09PSBTTklQUEVUX1RZUEUuQ09NUE9ORU5UID8gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50JyA6ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lcicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyfSBlbHNlIHtccm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKS5maW5kKCcua2VkaXRvci1zbmlwcGV0W2RhdGEtdHlwZT1jb250YWluZXJdJykuY3NzKCdkaXNwbGF5Jywgc25pcHBldFR5cGUgPT09IFNOSVBQRVRfVFlQRS5DT01QT05FTlQgPyAnbm9uZScgOiAnYmxvY2snKTtccm1vZGFsVGl0bGUgPSAnQWRkIGNvbnRlbnQnO1xyfVxybW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtdGl0bGUnKS5odG1sKG1vZGFsVGl0bGUpO1xyc2VsZi5tb2RhbFRhcmdldCA9IHRhcmdldDtccnNlbGYubW9kYWxTbmlwcGV0VHlwZSA9IHNuaXBwZXRUeXBlO1xybW9kYWwuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHIkKGRvY3VtZW50LmJvZHkpLmFkZENsYXNzKCdvcGVuZWQtbW9kYWwnKTtccnNldFRpbWVvdXQoKCkgPT4ge1xybW9kYWwuYWRkQ2xhc3MoJ3Nob3dlZCcpO1xyfSwgMCk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZW50LCBjb250ZW50QXJlYSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbnRlbnRBcmVhc1dyYXBwZXIgPSBzZWxmLndyYXBwZXI7XHJpZiAoIWNvbnRlbnRBcmVhKSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbnRlbnQtYXJlYScpO1xyfSBlbHNlIHtccmlmICghY29udGVudEFyZWEuanF1ZXJ5KSB7XHJjb250ZW50QXJlYSA9IGNvbnRlbnRBcmVhc1dyYXBwZXIuZmluZChjb250ZW50QXJlYSk7XHJ9XHJ9XHJpZiAoY29udGVudEFyZWEubGVuZ3RoID09PSAwKSB7XHJzZWxmLmVycm9yKCdDb250ZW50IGFyZWEgZG9lcyBub3QgZXhpc3QhJyk7XHJ9XHJjb250ZW50QXJlYS5odG1sKGNvbnRlbnQpO1xyc2VsZi5pbml0Q29udGVudEFyZWEoY29udGVudEFyZWEsIHRydWUpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9YCkuY2hpbGRyZW4oYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkV9YCk7XHJpZiAoYWN0aXZlRm9ybS5sZW5ndGggPiAwKSB7XHJpZiAoYWN0aXZlRm9ybS5pcyhgLiR7Q0xBU1NfTkFNRVMuU0VUVElOR19DT05UQUlORVJ9YCkpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSGlkZUZ1bmN0aW9uID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLmNvbnRhaW5lclNldHRpbmdIaWRlRnVuY3Rpb24uY2FsbChzZWxmLCBhY3RpdmVGb3JtLCBzZWxmKTtccn1ccn0gZWxzZSB7XHJsZXQgYWN0aXZlVHlwZSA9IGFjdGl2ZUZvcm0uYXR0cignZGF0YS10eXBlJyk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1thY3RpdmVUeXBlXTtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5oaWRlU2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuaGlkZVNldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgYWN0aXZlRm9ybSwgc2VsZik7XHJ9XHJ9XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyfVxyc2VsZi5zZXRTZXR0aW5nQ29tcG9uZW50KG51bGwpO1xyc2VsZi5zZXRTZXR0aW5nQ29udGFpbmVyKG51bGwpO1xyc2lkZWJhci5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5TSURFQkFSX09QRU5FRCk7XHJcbn0iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhcklkID0gc2VsZi5nZW5lcmF0ZUlkKCk7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhciA9ICQoYFxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUn1cIiBpZD1cIiR7c2lkZWJhcklkfVwiPlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9IRUFERVJ9XCI+XHI8c3BhbiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0lERUJBUl9USVRMRX1cIj48L3NwYW4+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5TSURFQkFSX0NMT1NFUn1cIj4mdGltZXM7PC9hPlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9XCI+PC9kaXY+XHI8L2Rpdj5ccmApO1xyc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0NMT1NFUn1gKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyc2VsZi5jbG9zZVNpZGViYXIoKTtccn0pO1xybGV0IHNpZGViYXJCb2R5ID0gc2lkZWJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5TSURFQkFSX0JPRFl9YCk7XHJzaWRlYmFyQm9keS5vbignc3VibWl0JywgJ2Zvcm0nLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xycmV0dXJuIGZhbHNlO1xyfSk7XHJpZiAob3B0aW9ucy5jb250YWluZXJTZXR0aW5nRW5hYmxlZCA9PT0gdHJ1ZSkge1xyaWYgKHR5cGVvZiBvcHRpb25zLmNvbnRhaW5lclNldHRpbmdJbml0RnVuY3Rpb24gPT09ICdmdW5jdGlvbicpIHtccmxldCBmb3JtID0gJChgPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNfSAke0NMQVNTX05BTUVTLlNFVFRJTkdfQ09OVEFJTkVSfVwiPjwvZGl2PmApO1xyc2lkZWJhckJvZHkuYXBwZW5kKGZvcm0pO1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uLmNhbGwoc2VsZiwgZm9ybSwgc2VsZik7XHJ9IGVsc2Uge1xyc2VsZi5lcnJvcignXCJjb250YWluZXJTZXR0aW5nSW5pdEZ1bmN0aW9uXCIgaXMgbm90IGZ1bmN0aW9uIScpO1xyfVxyfVxyc2lkZWJhci5hcHBlbmRUbyhzZWxmLndyYXBwZXIpO1xyXG59O1xyXG4iLCJpbXBvcnQgQ0xBU1NfTkFNRVMgZnJvbSAnLi4vY29uc3RhbnRzL2NsYXNzTmFtZXMnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgc2lkZWJhciA9IHNlbGYuc2lkZWJhcjtccmxldCBzaWRlYmFyVGl0bGUgPSBzaWRlYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlNJREVCQVJfVElUTEV9YCk7XHJsZXQgc2lkZWJhckJvZHkgPSBzaWRlYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlNJREVCQVJfQk9EWX1gKTtccmxldCBhY3RpdmVGb3JtID0gc2lkZWJhckJvZHkuY2hpbGRyZW4oYC4ke0NMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkV9YCk7XHJhY3RpdmVGb3JtLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlNFVFRJTkdfRk9STV9BQ1RJVkUpO1xyaWYgKHRhcmdldC5pcyhgLiR7Q0xBU1NfTkFNRVMuQ09NUE9ORU5UfWApKSB7XHJzZWxmLnNldFNldHRpbmdDb21wb25lbnQodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbnRhaW5lcihudWxsKTtccmxldCBjb21wb25lbnRUeXBlID0gc2VsZi5nZXRDb21wb25lbnRUeXBlKHRhcmdldCk7XHJsZXQgY29tcG9uZW50RGF0YSA9IEtFZGl0b3IuY29tcG9uZW50c1tjb21wb25lbnRUeXBlXTtccnNpZGViYXJUaXRsZS5odG1sKGNvbXBvbmVudERhdGEuc2V0dGluZ1RpdGxlKTtccmxldCBzZXR0aW5nRm9ybUNsYXNzID0gYCR7Q0xBU1NfTkFNRVMuU0VUVElOR30tJHtjb21wb25lbnRUeXBlfWA7XHJsZXQgc2V0dGluZ0Zvcm0gPSBzaWRlYmFyQm9keS5maW5kKGAuJHtzZXR0aW5nRm9ybUNsYXNzfWApO1xyaWYgKHNldHRpbmdGb3JtLmxlbmd0aCA9PT0gMCkge1xybGV0IGNvbXBvbmVudERhdGEgPSBLRWRpdG9yLmNvbXBvbmVudHNbY29tcG9uZW50VHlwZV07XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuaW5pdFNldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJzZXR0aW5nRm9ybSA9ICQoYFxyPGRpdlxyZGF0YS10eXBlPVwiJHtjb21wb25lbnRUeXBlfVwiXHJjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNfSAke3NldHRpbmdGb3JtQ2xhc3N9IGNsZWFyZml4ICR7Q0xBU1NfTkFNRVMuU0VUVElOR19GT1JNX0FDVElWRX1cIlxyPlxyPC9kaXY+XHJgKTtccmxldCBsb2FkaW5nVGV4dCA9ICQoJzxzcGFuIC8+JykuaHRtbCgnTG9hZGluZy4uLicpO1xyc2lkZWJhckJvZHkuYXBwZW5kKHNldHRpbmdGb3JtKTtccnNldHRpbmdGb3JtLmFwcGVuZChsb2FkaW5nVGV4dCk7XHJsZXQgaW5pdEZ1bmN0aW9uID0gY29tcG9uZW50RGF0YS5pbml0U2V0dGluZ0Zvcm0uY2FsbChjb21wb25lbnREYXRhLCBzZXR0aW5nRm9ybSwgc2VsZik7XHIkLndoZW4oaW5pdEZ1bmN0aW9uKS5kb25lKGZ1bmN0aW9uICgpIHtccnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xybG9hZGluZ1RleHQucmVtb3ZlKCk7XHJpZiAodHlwZW9mIGNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtID09PSAnZnVuY3Rpb24nKSB7XHJjb21wb25lbnREYXRhLnNob3dTZXR0aW5nRm9ybS5jYWxsKGNvbXBvbmVudERhdGEsIHNldHRpbmdGb3JtLCB0YXJnZXQsIHNlbGYpO1xyfVxyfSwgMTAwKTtccn0pO1xyfVxyfSBlbHNlIHtccmlmICh0eXBlb2YgY29tcG9uZW50RGF0YS5zaG93U2V0dGluZ0Zvcm0gPT09ICdmdW5jdGlvbicpIHtccmNvbXBvbmVudERhdGEuc2hvd1NldHRpbmdGb3JtLmNhbGwoY29tcG9uZW50RGF0YSwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccn0gZWxzZSB7XHJzZWxmLnNldFNldHRpbmdDb250YWluZXIodGFyZ2V0KTtccnNlbGYuc2V0U2V0dGluZ0NvbXBvbmVudChudWxsKTtccnNpZGViYXJUaXRsZS5odG1sKCdDb250YWluZXIgU2V0dGluZ3MnKTtccmxldCBzZXR0aW5nRm9ybSA9IHNpZGViYXIuZmluZChgLiR7Q0xBU1NfTkFNRVMuU0VUVElOR19DT05UQUlORVJ9YCk7XHJpZiAodHlwZW9mIG9wdGlvbnMuY29udGFpbmVyU2V0dGluZ1Nob3dGdW5jdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5jb250YWluZXJTZXR0aW5nU2hvd0Z1bmN0aW9uLmNhbGwoc2VsZiwgc2V0dGluZ0Zvcm0sIHRhcmdldCwgc2VsZik7XHJ9XHJzZXR0aW5nRm9ybS5hZGRDbGFzcyhDTEFTU19OQU1FUy5TRVRUSU5HX0ZPUk1fQUNUSVZFKTtccn1ccnNpZGViYXIuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuU0lERUJBUl9PUEVORUQpO1xyXG59O1xyXG4iLCJpbXBvcnQgcmVuZGVyU25pcHBldCBmcm9tIFwiLi9yZW5kZXJTbmlwcGV0XCI7XHJcbmltcG9ydCByZW5kZXJTbmlwcGV0RmlsdGVyIGZyb20gXCIuL3JlbmRlclNuaXBwZXRGaWx0ZXJcIjtcclxuaW1wb3J0IFNOSVBQRVRfVFlQRSBmcm9tIFwiLi4vY29uc3RhbnRzL3NuaXBwZXRUeXBlXCI7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGV4dHJhRGF0YSkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBzZWxmLm9wdGlvbnM7XHJsZXQgW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdID0gcmVuZGVyU25pcHBldC5jYWxsKHNlbGYsIHR5cGUsIHRpdGxlLCBwcmV2aWV3VXJsLCBjYXRlZ29yaWVzLCBjb250ZW50LCBleHRyYURhdGEpO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoWy4uLnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLCAuLi5zZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllc10pO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyaWYgKHR5cGUgPT09ICdjb250YWluZXInKSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbnRhaW5lcicpLmFwcGVuZChzbmlwcGV0UHJldmlld0h0bWwpO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb21wb25lbnQnKS5hcHBlbmQoc25pcHBldFByZXZpZXdIdG1sKTtccn1ccn0gZWxzZSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuYXBwZW5kKHNuaXBwZXRQcmV2aWV3SHRtbClccn1ccnNlbGYubW9kYWwuZmluZCgnLmtlZGl0b3ItbW9kYWwtYm9keScpLmFwcGVuZChzbmlwcGV0Q29udGVudEh0bWwpO1xybGV0IGZpbHRlclR5cGU7XHJpZiAob3B0aW9ucy5zbmlwcGV0c0ZpbHRlckVuYWJsZWQpIHtccmlmIChvcHRpb25zLmV4cGxpY2l0U25pcHBldEVuYWJsZWQpIHtccmZpbHRlclR5cGUgPSB0eXBlID09PSAnY29udGFpbmVyJyA/IFNOSVBQRVRfVFlQRS5DT05UQUlORVIgOiBTTklQUEVUX1RZUEUuQ09NUE9ORU5UO1xyfSBlbHNlIHtccmZpbHRlclR5cGUgPSBTTklQUEVUX1RZUEUuQUxMO1xyfVxyfVxybGV0IFtjYXRlZ29yaWVzT3B0aW9ucywgc25pcHBldHNXcmFwcGVyXSA9IHJlbmRlclNuaXBwZXRGaWx0ZXIuY2FsbCh0aGlzLCBmaWx0ZXJUeXBlKTtccnNuaXBwZXRzV3JhcHBlci5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1maWx0ZXInKS5odG1sKGNhdGVnb3JpZXNPcHRpb25zKS50cmlnZ2VyKCdjaGFuZ2UnKTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXRGaWx0ZXIgZnJvbSBcIi4vcmVuZGVyU25pcHBldEZpbHRlclwiO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBvcHRpb25zID0gc2VsZi5vcHRpb25zO1xybGV0IFtjYXRlZ29yaWVzT3B0aW9ucywgc25pcHBldHNXcmFwcGVyXSA9IHJlbmRlclNuaXBwZXRGaWx0ZXIuY2FsbCh0aGlzLCB0eXBlKTtccnNuaXBwZXRzV3JhcHBlci5wcmVwZW5kKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtZmlsdGVyLXdyYXBwZXJcIj5ccjxzZWxlY3QgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldHMtZmlsdGVyXCI+XHIke2NhdGVnb3JpZXNPcHRpb25zfVxyPC9zZWxlY3Q+XHI8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1zbmlwcGV0cy1zZWFyY2hcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiVHlwZSB0byBzZWFyY2guLi5cIiAvPlxyPC9kaXY+XHJgKTtccmxldCB0eHRTZWFyY2ggPSBzbmlwcGV0c1dyYXBwZXIuZmluZCgnLmtlZGl0b3Itc25pcHBldHMtc2VhcmNoJyk7XHJsZXQgY2JiRmlsdGVyID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWZpbHRlcicpO1xybGV0IGRvRmlsdGVyID0gZnVuY3Rpb24gKCkge1xybGV0IHNlbGVjdGVkQ2F0ZWdvcnkgPSAoY2JiRmlsdGVyLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xybGV0IHNlYXJjaFRleHQgPSAodHh0U2VhcmNoLnZhbCgpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xybGV0IHNuaXBwZXRzID0gc25pcHBldHNXcmFwcGVyLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuY2hpbGRyZW4oJy5rZWRpdG9yLXNuaXBwZXQnKTtccnNuaXBwZXRzLmZpbHRlcignLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XHJpZiAoc2VsZWN0ZWRDYXRlZ29yeSB8fCBzZWFyY2hUZXh0KSB7XHJzbmlwcGV0cy5lYWNoKGZ1bmN0aW9uICgpIHtccmxldCBzbmlwcGV0ID0gJCh0aGlzKTtccmxldCBkYXRhQ2F0ZWdvcmllc1N0cmluZyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKS50b0xvd2VyQ2FzZSgpO1xybGV0IGRhdGFDYXRlZ29yaWVzID0gZGF0YUNhdGVnb3JpZXNTdHJpbmcuc3BsaXQob3B0aW9ucy5zbmlwcGV0c0NhdGVnb3JpZXNTZXBhcmF0b3IpO1xybGV0IGVycm9yID0gMDtccmlmIChzZWxlY3RlZENhdGVnb3J5KSB7XHJpZiAoJC5pbkFycmF5KHNlbGVjdGVkQ2F0ZWdvcnksIGRhdGFDYXRlZ29yaWVzKSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJpZiAoc2VhcmNoVGV4dCkge1xybGV0IHRpdGxlID0gc25pcHBldC5hdHRyKCd0aXRsZScpLnRvTG93ZXJDYXNlKCk7XHJpZiAodGl0bGUuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEgJiYgZGF0YUNhdGVnb3JpZXNTdHJpbmcuaW5kZXhPZihzZWFyY2hUZXh0KSA9PT0gLTEpIHtccmVycm9yKys7XHJ9XHJ9XHJzbmlwcGV0W2Vycm9yID09PSAwID8gJ3JlbW92ZUNsYXNzJyA6ICdhZGRDbGFzcyddKCdub3QtbWF0Y2hlZCcpO1xyfSk7XHJ9IGVsc2Uge1xyc25pcHBldHMucmVtb3ZlQ2xhc3MoJ25vdC1tYXRjaGVkJyk7XHJ9XHJ9O1xyY2JiRmlsdGVyLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJkb0ZpbHRlcigpO1xyfSk7XHJsZXQgdGltZXI7XHJ0eHRTZWFyY2gub24oJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7XHJjbGVhclRpbWVvdXQodGltZXIpO1xydGltZXIgPSBzZXRUaW1lb3V0KGRvRmlsdGVyLCAyMDApO1xyfSk7XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlLCB0aXRsZSwgcHJldmlld1VybCwgY2F0ZWdvcmllcywgY29udGVudCwgZXh0cmFEYXRhKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0SWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccmxldCBzbmlwcGV0UHJldmlld0h0bWwgPSBgXHI8c2VjdGlvblxyY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3Itc25pcHBldFwiXHJkYXRhLXNuaXBwZXQ9XCIjJHtzbmlwcGV0SWR9XCJccmRhdGEtdHlwZT1cIiR7dHlwZX1cIlxydGl0bGU9XCIke3RpdGxlfVwiXHJkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcz1cIiR7Y2F0ZWdvcmllc31cIlxyPlxyPHNwYW4+PHNwYW4gc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7cHJldmlld1VybH0nKVwiPjwvc3Bhbj48L3NwYW4+XHI8L3NlY3Rpb24+XHJgO1xybGV0IHNuaXBwZXRDb250ZW50SHRtbCA9IGA8c2NyaXB0IGlkPVwiJHtzbmlwcGV0SWR9XCIgdHlwZT1cInRleHQvaHRtbFwiICR7ZXh0cmFEYXRhLmpvaW4oJyAnKX0+JHtjb250ZW50fTwvc2NyaXB0PmA7XHJjYXRlZ29yaWVzID0gY2F0ZWdvcmllcy5zcGxpdChvcHRpb25zLnNuaXBwZXRzQ2F0ZWdvcmllc1NlcGFyYXRvcik7XHJpZiAodHlwZSA9PT0gJ2NvbnRhaW5lcicpIHtccnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMuY29uY2F0KGNhdGVnb3JpZXMpO1xyfSBlbHNlIGlmICh0eXBlLmluZGV4T2YoJ2NvbXBvbmVudCcpICE9PSAtMSkge1xyc2VsZi5zbmlwcGV0c0NvbXBvbmVudENhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcy5jb25jYXQoY2F0ZWdvcmllcyk7XHJ9XHJyZXR1cm4gW1xyc25pcHBldFByZXZpZXdIdG1sLFxyc25pcHBldENvbnRlbnRIdG1sXHJdO1xyXG59O1xyXG4iLCJpbXBvcnQgU05JUFBFVF9UWVBFIGZyb20gXCIuLi9jb25zdGFudHMvc25pcHBldFR5cGVcIjtccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh0eXBlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgbW9kYWwgPSBzZWxmLm1vZGFsO1xybGV0IGNhdGVnb3JpZXM7XHJsZXQgc25pcHBldHNXcmFwcGVyU2VsZWN0b3I7XHJzd2l0Y2ggKHR5cGUpIHtccmNhc2UgU05JUFBFVF9UWVBFLkFMTDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXInO1xyYnJlYWs7XHJjYXNlIFNOSVBQRVRfVFlQRS5DT05UQUlORVI6XHJjYXRlZ29yaWVzID0gc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXM7XHJzbmlwcGV0c1dyYXBwZXJTZWxlY3RvciA9ICcua2VkaXRvci1zbmlwcGV0cy13cmFwcGVyLWNvbnRhaW5lcic7XHJicmVhaztccmNhc2UgU05JUFBFVF9UWVBFLkNPTVBPTkVOVDpccmNhdGVnb3JpZXMgPSBzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcztccnNuaXBwZXRzV3JhcHBlclNlbGVjdG9yID0gJy5rZWRpdG9yLXNuaXBwZXRzLXdyYXBwZXItY29tcG9uZW50JztccmJyZWFrO1xyZGVmYXVsdDpcci8vIERvIG5vdGhpbmdccn1ccmxldCBjYXRlZ29yaWVzT3B0aW9ucyA9ICc8b3B0aW9uIHZhbHVlPVwiXCIgc2VsZWN0ZWQ9XCJzZWxlY3RlZFwiPkFsbDwvb3B0aW9uPic7XHIkLmVhY2goY2F0ZWdvcmllcywgZnVuY3Rpb24gKGksIGNhdGVnb3J5KSB7XHJjYXRlZ29yaWVzT3B0aW9ucyArPSBgPG9wdGlvbiB2YWx1ZT1cIiR7Y2F0ZWdvcnl9XCI+JHtjYXRlZ29yeX08L29wdGlvbj5gO1xyfSk7XHJyZXR1cm4gW1xyY2F0ZWdvcmllc09wdGlvbnMsXHJtb2RhbC5maW5kKHNuaXBwZXRzV3JhcHBlclNlbGVjdG9yKVxyXTtcclxufTtcclxuIiwiaW1wb3J0IHJlbmRlclNuaXBwZXQgZnJvbSAnLi9yZW5kZXJTbmlwcGV0JztccmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChyZXNwKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzbmlwcGV0c0NvbnRhaW5lckh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbXBvbmVudEh0bWwgPSAnJztccmxldCBzbmlwcGV0c0NvbnRlbnRIdG1sID0gJyc7XHJzZWxmLnNuaXBwZXRzQ2F0ZWdvcmllcyA9IFtdO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBbXTtccnNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzID0gW107XHIkKHJlc3ApLmZpbHRlcignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgc25pcHBldCA9ICQodGhpcyk7XHJsZXQgY29udGVudCA9IHNuaXBwZXQuaHRtbCgpLnRyaW0oKTtccmxldCBwcmV2aWV3VXJsID0gc25pcHBldC5hdHRyKCdkYXRhLXByZXZpZXcnKTtccmxldCB0eXBlID0gc25pcHBldC5hdHRyKCdkYXRhLXR5cGUnKTtccmxldCB0aXRsZSA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLXRpdGxlJyk7XHJsZXQgY2F0ZWdvcmllcyA9IHNuaXBwZXQuYXR0cignZGF0YS1rZWRpdG9yLWNhdGVnb3JpZXMnKSB8fCAnJztccmxldCBkYXRhQXR0cmlidXRlcyA9IHNlbGYuZ2V0RGF0YUF0dHJpYnV0ZXMoc25pcHBldCwgWydkYXRhLXByZXZpZXcnLCAnZGF0YS10eXBlJywgJ2RhdGEta2VkaXRvci10aXRsZScsICdkYXRhLWtlZGl0b3ItY2F0ZWdvcmllcyddLCB0cnVlKTtccmxldCBbXHJzbmlwcGV0UHJldmlld0h0bWwsXHJzbmlwcGV0Q29udGVudEh0bWxccl0gPSByZW5kZXJTbmlwcGV0LmNhbGwoc2VsZiwgdHlwZSwgdGl0bGUsIHByZXZpZXdVcmwsIGNhdGVnb3JpZXMsIGNvbnRlbnQsIGRhdGFBdHRyaWJ1dGVzKTtccmlmICh0eXBlID09PSAnY29udGFpbmVyJykge1xyc25pcHBldHNDb250YWluZXJIdG1sICs9IHNuaXBwZXRQcmV2aWV3SHRtbDtccn0gZWxzZSBpZiAodHlwZS5pbmRleE9mKCdjb21wb25lbnQnKSAhPT0gLTEpIHtccnNuaXBwZXRzQ29tcG9uZW50SHRtbCArPSBzbmlwcGV0UHJldmlld0h0bWw7XHJ9XHJzbmlwcGV0c0NvbnRlbnRIdG1sICs9IHNuaXBwZXRDb250ZW50SHRtbDtccn0pO1xyc2VsZi5zbmlwcGV0c0NvbnRhaW5lckNhdGVnb3JpZXMgPSBzZWxmLmJlYXV0aWZ5Q2F0ZWdvcmllcyhzZWxmLnNuaXBwZXRzQ29udGFpbmVyQ2F0ZWdvcmllcyk7XHJzZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllcyA9IHNlbGYuYmVhdXRpZnlDYXRlZ29yaWVzKHNlbGYuc25pcHBldHNDb21wb25lbnRDYXRlZ29yaWVzKTtccnNlbGYuc25pcHBldHNDYXRlZ29yaWVzID0gc2VsZi5iZWF1dGlmeUNhdGVnb3JpZXMoWy4uLnNlbGYuc25pcHBldHNDb250YWluZXJDYXRlZ29yaWVzLCAuLi5zZWxmLnNuaXBwZXRzQ29tcG9uZW50Q2F0ZWdvcmllc10pO1xyaWYgKG9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xyc2VsZi5tb2RhbC5maW5kKCcua2VkaXRvci1zbmlwcGV0cy1jb250YWluZXInKS5odG1sKHNuaXBwZXRzQ29udGFpbmVySHRtbCk7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzLWNvbXBvbmVudCcpLmh0bWwoc25pcHBldHNDb21wb25lbnRIdG1sKTtccn0gZWxzZSB7XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLXNuaXBwZXRzJykuaHRtbChzbmlwcGV0c0NvbnRhaW5lckh0bWwgKyBzbmlwcGV0c0NvbXBvbmVudEh0bWwpXHJ9XHJzZWxmLm1vZGFsLmZpbmQoJy5rZWRpdG9yLW1vZGFsLWJvZHknKS5hcHBlbmQoc25pcHBldHNDb250ZW50SHRtbCk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgdG9wYmFyQ2VudGVyID0gc2VsZi50b3BiYXJDZW50ZXI7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBidG5Nb2JpbGUgPSAkKGA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIHRpdGxlPVwiVmlldyBvbiBtb2JpbGVcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLW1vYmlsZVwiPjwvaT48L2E+YCk7XHJidG5Nb2JpbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccnRvcGJhckNlbnRlci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1gKS5yZW1vdmVDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJzZWxmLmlmcmFtZVdyYXBwZXIuY3NzKCd3aWR0aCcsIG9wdGlvbnMud2lkdGhNb2JpbGUpO1xyYnRuTW9iaWxlLmFkZENsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccn0pO1xybGV0IGJ0blRhYmxldCA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdGl0bGU9XCJWaWV3IG9uIHRhYmxldFwiIGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OfVwiPjxpIGNsYXNzPVwiZmEgZmEtZncgZmEtdGFibGV0XCI+PC9pPjwvYT5gKTtccmJ0blRhYmxldC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgb3B0aW9ucy53aWR0aFRhYmxldCk7XHJidG5UYWJsZXQuYWRkQ2xhc3MoQ0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTl9BQ1RJVkUpO1xyfSk7XHJsZXQgYnRuRGVza3RvcCA9ICQoYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgdGl0bGU9XCJWaWV3IG9uIGRlc2t0b3BcIiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0JVVFRPTn0gJHtDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRX1cIj48aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWRlc2t0b3BcIj48L2k+PC9hPmApO1xyYnRuRGVza3RvcC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xydG9wYmFyQ2VudGVyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFfWApLnJlbW92ZUNsYXNzKENMQVNTX05BTUVTLlRPUEJBUl9CVVRUT05fQUNUSVZFKTtccnNlbGYuaWZyYW1lV3JhcHBlci5jc3MoJ3dpZHRoJywgJycpO1xyYnRuRGVza3RvcC5hZGRDbGFzcyhDTEFTU19OQU1FUy5UT1BCQVJfQlVUVE9OX0FDVElWRSk7XHJ9KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuTW9iaWxlKTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuVGFibGV0KTtccnRvcGJhckNlbnRlci5hcHBlbmQoYnRuRGVza3RvcCk7XHJcbn07XHJcbiIsImltcG9ydCBDTEFTU19OQU1FUyBmcm9tICcuLi9jb25zdGFudHMvY2xhc3NOYW1lcyc7XHJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgdG9wYmFySWQgPSBzZWxmLmdlbmVyYXRlSWQoKTtccnNlbGYudG9wYmFyID0gJChgXHI8ZGl2IGNsYXNzPVwiJHtDTEFTU19OQU1FUy5VSX0gJHtDTEFTU19OQU1FUy5UT1BCQVJ9XCIgaWQ9XCIke3RvcGJhcklkfVwiPlxyPGRpdiBjbGFzcz1cIiR7Q0xBU1NfTkFNRVMuVUl9ICR7Q0xBU1NfTkFNRVMuVE9QQkFSX0xFRlR9XCI+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9DRU5URVJ9XCI+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCIke0NMQVNTX05BTUVTLlVJfSAke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1cIj5ccjwvZGl2PlxyPC9kaXY+XHJgKTtccnNlbGYudG9wYmFyTGVmdCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9MRUZUfWApO1xyc2VsZi50b3BiYXJDZW50ZXIgPSBzZWxmLnRvcGJhci5maW5kKGAuJHtDTEFTU19OQU1FUy5UT1BCQVJfQ0VOVEVSfWApO1xyc2VsZi50b3BiYXJSaWdodCA9IHNlbGYudG9wYmFyLmZpbmQoYC4ke0NMQVNTX05BTUVTLlRPUEJBUl9SSUdIVH1gKTtccnNlbGYudG9wYmFyLmFwcGVuZFRvKHNlbGYud3JhcHBlcik7XHJzZWxmLmluaXREZXZpY2VTd2l0Y2hlcigpO1xyc2VsZi5pbml0VG9wYmFyTW9kZXMoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNhdGVnb3JpZXMpIHtccmxldCBuZXdBcnJheSA9IFtdO1xyZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XHJsZXQgY2F0ZWdvcnkgPSBjYXRlZ29yaWVzW2ldIHx8ICcnO1xyaWYgKGNhdGVnb3J5ICE9PSAnJyAmJiAkLmluQXJyYXkoY2F0ZWdvcnksIG5ld0FycmF5KSA9PT0gLTEpIHtccm5ld0FycmF5LnB1c2goY2F0ZWdvcnkpO1xyfVxyfVxycmV0dXJuIG5ld0FycmF5LnNvcnQoKTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xybGV0IHRpbWVzdGFtcCA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJsZXQgcmFuZG9tID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogOTg3NjU0MzIxMCk7XHJyZXR1cm4gYGtlZGl0b3ItdWktJHt0aW1lc3RhbXB9JHtyYW5kb219YDtcclxufTtcclxuIiwiaW1wb3J0IFRPT0xCQVJfVFlQRSBmcm9tICcuLi9jb25zdGFudHMvdG9vbGJhclR5cGUnO1xyZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHR5cGUsIGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IHNlbGYub3B0aW9ucztccmxldCBzZXR0aW5nQnRuID0gJyc7XHJpZiAoIW9wdGlvbnMuZXhwbGljaXRTbmlwcGV0RW5hYmxlZCkge1xybGV0IHRvb2xiYXJDbGFzcyA9ICcnO1xyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxydG9vbGJhckNsYXNzID0gJ2tlZGl0b3ItY29udGVudC1hcmVhLXRvb2xiYXInO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUl9DT05URU5UOlxyY2FzZSAgVE9PTEJBUl9UWVBFLlNVQl9DT05UQUlORVJfQ09OVEVOVDpccnRvb2xiYXJDbGFzcyA9ICdrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXInO1xycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSAke3Rvb2xiYXJDbGFzc31cIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbnRlbnRcIiB0aXRsZT1cIkFkZCBjb250ZW50XCI+JHtvcHRpb25zLmJ0bkFkZENvbnRlbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyfVxyc3dpdGNoICh0eXBlKSB7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEVOVF9BUkVBOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRlbnQtYXJlYS10b29sYmFyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItYnRuIGtlZGl0b3ItYnRuLWRlZmF1bHQgYnRuLWFkZC1jb250YWluZXJcIiB0aXRsZT1cIkFkZCBjb250YWluZXJcIj4ke29wdGlvbnMuYnRuQWRkQ29udGFpbmVyVGV4dH08L2E+XHI8L2Rpdj5ccmApO1xyY2FzZSAgVE9PTEJBUl9UWVBFLkNPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUjpccmlmIChvcHRpb25zLmNvbnRhaW5lclNldHRpbmdFbmFibGVkID09PSB0cnVlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb250YWluZXItc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29udGFpbmVyVGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29udGFpbmVyIGtlZGl0b3ItdG9vbGJhci1zdWItY29udGFpbmVyXCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbnRhaW5lclRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbnRhaW5lci1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29udGFpbmVyVGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29udGFpbmVyLWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb250YWluZXJUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09OVEFJTkVSX0NPTlRFTlQ6XHJyZXR1cm4gKGBccjxkaXYgY2xhc3M9XCJrZWRpdG9yLXVpIGtlZGl0b3ItY29udGFpbmVyLWNvbnRlbnQtdG9vbGJhciBrZWRpdG9yLWJ0bi1ncm91cFwiPlxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWJ0biBrZWRpdG9yLWJ0bi1kZWZhdWx0IGJ0bi1hZGQtY29udGFpbmVyXCIgdGl0bGU9XCJBZGQgc3ViLWNvbnRhaW5lclwiPiR7b3B0aW9ucy5idG5BZGRTdWJDb250YWluZXJUZXh0fTwvYT5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuU1VCX0NPTlRBSU5FUl9DT05URU5UOlxycmV0dXJuIChgXHI8ZGl2IGNsYXNzPVwia2VkaXRvci11aSBrZWRpdG9yLWNvbnRhaW5lci1jb250ZW50LXRvb2xiYXJcIj5ccjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBjbGFzcz1cImtlZGl0b3ItdWkga2VkaXRvci1idG4ga2VkaXRvci1idG4tZGVmYXVsdCBidG4tYWRkLWNvbXBvbmVudFwiIHRpdGxlPVwiQWRkIGNvbXBvbmVudFwiPiR7b3B0aW9ucy5idG5BZGRDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJjYXNlICBUT09MQkFSX1RZUEUuQ09NUE9ORU5UOlxyaWYgKGlzQ29tcG9uZW50Q29uZmlndXJhYmxlKSB7XHJzZXR0aW5nQnRuID0gYDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMCk7XCIgY2xhc3M9XCJrZWRpdG9yLXVpIGJ0bi1jb21wb25lbnQtc2V0dGluZ1wiPiR7b3B0aW9ucy5idG5TZXR0aW5nQ29tcG9uZW50VGV4dH08L2E+YDtccn1ccnJldHVybiAoYFxyPGRpdiBjbGFzcz1cImtlZGl0b3ItdG9vbGJhciBrZWRpdG9yLXRvb2xiYXItY29tcG9uZW50XCI+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LXJlcG9zaXRpb25cIj4ke29wdGlvbnMuYnRuTW92ZUNvbXBvbmVudFRleHR9PC9hPlxyJHtzZXR0aW5nQnRufVxyPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKTtcIiBjbGFzcz1cImtlZGl0b3ItdWkgYnRuLWNvbXBvbmVudC1kdXBsaWNhdGVcIj4ke29wdGlvbnMuYnRuRHVwbGljYXRlQ29tcG9uZW50VGV4dH08L2E+XHI8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwia2VkaXRvci11aSBidG4tY29tcG9uZW50LWRlbGV0ZVwiPiR7b3B0aW9ucy5idG5EZWxldGVDb21wb25lbnRUZXh0fTwvYT5ccjwvZGl2PlxyYCk7XHJkZWZhdWx0OlxyLy8gRG8gbm90aGluZ1xyfVxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZXZlbnQsIHNlbGVjdG9yKSB7XHJsZXQgdGFyZ2V0ID0gJChldmVudC50YXJnZXQpO1xybGV0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdChzZWxlY3Rvcik7XHJpZiAodGFyZ2V0LmlzKHNlbGVjdG9yKSkge1xycmV0dXJuIHRhcmdldDtccn0gZWxzZSBpZiAoY2xvc2VzdC5sZW5ndGggPiAwKSB7XHJyZXR1cm4gY2xvc2VzdDtccn0gZWxzZSB7XHJyZXR1cm4gbnVsbDtccn1cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHRhcmdldCwgaWdub3JlQXR0cmlidXRlcywgaXNBcnJheSkge1xybGV0IGRhdGFBdHRyaWJ1dGVzID0gaXNBcnJheSA/IFtdIDoge307XHJpZiAoIWlnbm9yZUF0dHJpYnV0ZXMpIHtccmlnbm9yZUF0dHJpYnV0ZXMgPSBbXTtccn1cciQuZWFjaCh0YXJnZXQuZ2V0KDApLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChpLCBhdHRyKSB7XHJpZiAoYXR0ci5uYW1lLmluZGV4T2YoJ2RhdGEtJykgPT09IDAgJiYgJC5pbkFycmF5KGF0dHIubmFtZSwgaWdub3JlQXR0cmlidXRlcykgPT09IC0xKSB7XHJpZiAoaXNBcnJheSkge1xyZGF0YUF0dHJpYnV0ZXMucHVzaChgJHthdHRyLm5hbWV9PVwiJHthdHRyLnZhbHVlfVwiYCk7XHJ9IGVsc2Uge1xyZGF0YUF0dHJpYnV0ZXNbYXR0ci5uYW1lXSA9IGF0dHIudmFsdWU7XHJ9XHJ9XHJ9KTtccnJldHVybiBkYXRhQXR0cmlidXRlcztcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyJdLCJzb3VyY2VSb290IjoiIn0=