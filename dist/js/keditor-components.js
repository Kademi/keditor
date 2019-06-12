(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("InlineEditor"), require("jQuery"), require("KEditor"));
	else if(typeof define === 'function' && define.amd)
		define(["InlineEditor", "jQuery", "KEditor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("InlineEditor"), require("jQuery"), require("KEditor")) : factory(root["InlineEditor"], root["jQuery"], root["KEditor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_InlineEditor__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_keditor__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _keditor_component_audio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keditor-component-audio.js */ "./src/components/keditor-component-audio.js");
/* harmony import */ var _keditor_component_form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keditor-component-form.js */ "./src/components/keditor-component-form.js");
/* harmony import */ var _keditor_component_googlemap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./keditor-component-googlemap.js */ "./src/components/keditor-component-googlemap.js");
/* harmony import */ var _keditor_component_photo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keditor-component-photo.js */ "./src/components/keditor-component-photo.js");
/* harmony import */ var _keditor_component_text_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keditor-component-text.js */ "./src/components/keditor-component-text.js");
/* harmony import */ var _keditor_component_video_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keditor-component-video.js */ "./src/components/keditor-component-video.js");
/* harmony import */ var _keditor_component_vimeo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keditor-component-vimeo.js */ "./src/components/keditor-component-vimeo.js");
/* harmony import */ var _keditor_component_youtube_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keditor-component-youtube.js */ "./src/components/keditor-component-youtube.js");









/***/ }),

/***/ "./src/components/keditor-component-audio.js":
/*!***************************************************!*\
  !*** ./src/components/keditor-component-audio.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['audio'] = {
  getContent: function getContent(component, keditor) {
    var componentContent = component.children('.keditor-component-content');
    var audio = componentContent.find('audio');
    audio.unwrap();
    return componentContent.html();
  },
  settingEnabled: true,
  settingTitle: 'Audio Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    form.append('<form class="form-horizontal">' + '     <div class="form-group">' + '         <label for="audioFileInput" class="col-sm-12">Audio file</label>' + '         <div class="col-sm-12">' + '             <div class="audio-toolbar">' + '                 <a href="#" class="btn-audioFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' + '                 <input id="audioFileInput" type="file" style="display: none" />' + '             </div>' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-autoplay" class="col-sm-12">Autoplay</label>' + '         <div class="col-sm-12">' + '             <input type="checkbox" id="audio-autoplay" />' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-showcontrols" class="col-sm-12">Show Controls</label>' + '         <div class="col-sm-12">' + '             <input type="checkbox" id="audio-showcontrols" checked />' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-width" class="col-sm-12">Width (%)</label>' + '         <div class="col-sm-12">' + '             <input type="number" id="audio-width" min="20" max="100" class="form-control" value="100" />' + '         </div>' + '     </div>' + '</form>');
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var options = keditor.options;
    var audio = component.find('audio');
    var fileInput = form.find('#audioFileInput');
    var btnAudioFileInput = form.find('.btn-audioFileInput');
    btnAudioFileInput.off('click').on('click', function (e) {
      e.preventDefault();
      fileInput.trigger('click');
    });
    fileInput.off('change').on('change', function () {
      var file = this.files[0];

      if (/audio/.test(file.type)) {
        // Todo: Upload to your server :)
        audio.attr('src', URL.createObjectURL(file));
        audio.load(function () {
          keditor.showSettingPanel(component, options);
        });
      } else {
        alert('Your selected file is not an audio file!');
      }
    });
    var autoplayToggle = form.find('#audio-autoplay');
    autoplayToggle.off('click').on('click', function (e) {
      if (this.checked) {
        audio.attr('autoplay', 'autoplay');
      } else {
        audio.removeAttr('autoplay');
      }
    });
    var showcontrolsToggle = form.find('#audio-showcontrols');
    showcontrolsToggle.off('click').on('click', function (e) {
      if (this.checked) {
        audio.attr('controls', 'controls');
      } else {
        audio.removeAttr('controls');
      }
    });
    var audioWidth = form.find('#audio-width');
    audioWidth.off('change').on('change', function () {
      audio.css('width', this.value + '%');
    });
  }
};

/***/ }),

/***/ "./src/components/keditor-component-form.js":
/*!**************************************************!*\
  !*** ./src/components/keditor-component-form.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/keditor-component-form.less */ "./src/styles/keditor-component-form.less");
/* harmony import */ var _styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_2__);



var flog = keditor__WEBPACK_IMPORTED_MODULE_2___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_2___default.a.components['form'] = {
  initFormBuilder: function initFormBuilder(component) {
    var self = this;
    var formBuilderArea = component.find('.form-builder-area');
    var formData = component.find('.form-data');
    var formContent = component.find('.form-content');
    component.find('.keditor-component-content').prepend('<p class="form-builder-tools" style="text-align: right;">' + '    <a href="#" class="btn btn-primary btn-preview-form">Preview form</a> ' + '    <a href="#" class="btn btn-info btn-edit-form disabled">Edit form</a>' + '</p>');
    var btnEditForm = component.find('.btn-edit-form');
    var btnPreviewForm = component.find('.btn-preview-form');
    formBuilderArea.formBuilder({
      disableInjectedStyle: true,
      showActionButtons: false,
      dataType: 'json',
      formData: formData.html(),
      disableFields: ['autocomplete', 'paragraph', 'header'],
      disabledAttrs: ['access'],
      typeUserDisabledAttrs: {
        'checkbox-group': ['toggle', 'inline']
      }
    });
    btnEditForm.on('click', function (e) {
      e.preventDefault();

      if (!btnEditForm.hasClass('disabled')) {
        formBuilderArea.show();
        formContent.hide();
        btnEditForm.addClass('disabled');
        btnPreviewForm.removeClass('disabled');
      }
    });
    btnPreviewForm.on('click', function (e) {
      e.preventDefault();

      if (!btnPreviewForm.hasClass('disabled')) {
        self.renderForm(component);
        formBuilderArea.hide();
        formContent.show();
        btnEditForm.removeClass('disabled');
        btnPreviewForm.addClass('disabled');
      }
    });
  },
  renderForm: function renderForm(component, formBuilder) {
    var formContent = component.find('.form-content');

    if (!formBuilder) {
      var formBuilderArea = component.find('.form-builder-area');
      formBuilder = formBuilderArea.data('formBuilder');
    }

    formContent.formRender({
      dataType: 'json',
      formData: formBuilder.actions.getData('json')
    });

    if (formContent.hasClass('form-horizontal')) {
      formContent.children('div').each(function () {
        var div = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
        var dataGrid = formContent.attr('data-grid') || '4-8';
        dataGrid = dataGrid.split('-');

        if (div.attr('class')) {
          if (div.hasClass('fb-button')) {
            div.find('button').wrap('<div class="col-sm-' + dataGrid[1] + ' col-sm-offset-' + dataGrid[0] + '"></div>');
          } else {
            var label = div.children('label');
            var input = div.children('input, select, textarea');
            var subDiv = div.children('div');
            label.addClass('control-label col-sm-' + dataGrid[0]);

            if (subDiv.length > 0) {
              subDiv.addClass('col-sm-' + dataGrid[1]);
            } else {
              input.addClass('form-control').wrap('<div class="col-sm-' + dataGrid[1] + '"></div>');
            }
          }
        }
      });
    }
  },
  init: function init(contentArea, container, component, keditor) {
    var componentContent = component.find('.keditor-component-content');
    var formBuilder = component.find('.form-builder-area');
    var formContent = component.find('.form-content');
    var formData = component.find('.form-data');

    if (formData.length === 0) {
      componentContent.append('<div class="form-data" style="display: none !important;"></div>');
    }

    if (formContent.length === 0) {
      componentContent.append('<form class="form-content" style="display: none !important;"></form>');
    } else {
      formContent.hide();
    }

    if (formBuilder.length === 0) {
      formBuilder = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="form-builder-area clearfix"></div>');
      componentContent.append(formBuilder);
    }

    this.initFormBuilder(component);
  },
  getContent: function getContent(component, keditor) {
    var self = this;
    var componentContent = component.find('.keditor-component-content');
    var formData = component.find('.form-data');
    var formBuilderArea = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + component.attr('id')).find('.form-builder-area');
    var formBuilder = formBuilderArea.data('formBuilder');
    self.renderForm(component, formBuilder);
    formData.html(formBuilder.actions.getData('json'));
    component.find('.form-builder-area, .form-builder-tools').remove();
    component.find('.form-content').show();
    return componentContent.html();
  },
  settingEnabled: true,
  settingTitle: 'Form Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    var self = this;
    form.html('<div class="form-horizontal">' + '    <div class="form-group">' + '        <label class="col-sm-12">Action</label>' + '        <div class="col-sm-12">' + '            <input type="text" class="form-control txt-form-action" />' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label class="col-sm-12">Method</label>' + '        <div class="col-sm-12">' + '            <select class="form-control select-method">' + '                <option value="get">Get</option>' + '                <option value="post">Post</option>' + '                <option value="put">Put</option>' + '                <option value="delete">Delete</option>' + '            </select>' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label class="col-sm-12">Enctype</label>' + '        <div class="col-sm-12">' + '            <select class="form-control select-enctype">' + '                <option value="text/plain">text/plain</option>' + '                <option value="multipart/form-data">multipart/form-data</option>' + '                <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>' + '            </select>' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label class="col-sm-12">Layout</label>' + '        <div class="col-sm-12">' + '            <select class="form-control select-layout">' + '                <option value="">Normal</option>' + '                <option value="form-horizontal">Horizontal</option>' + '                <option value="form-inline">Inline</option>' + '            </select>' + '        </div>' + '    </div>' + '    <div class="form-group select-grid-wrapper">' + '        <label class="col-sm-12">Grid setting</label>' + '        <div class="col-sm-12">' + '            <select class="form-control select-grid">' + '                <option value="2-10">col-2 col-10</option>' + '                <option value="3-9">col-3 col-9</option>' + '                <option value="4-8">col-4 col-8</option>' + '                <option value="5-7">col-5 col-7</option>' + '                <option value="6-6">col-6 col-6</option>' + '            </select>' + '            <small class="help-block">This setting is for width of label and control with number of cols as unit</small>' + '        </div>' + '    </div>' + '</div>');
    form.find('.txt-form-action').on('change', function () {
      var component = keditor.getSettingComponent();
      var formContent = component.find('.form-content');
      formContent.attr('action', this.value);
    });
    form.find('.select-method').on('change', function () {
      var component = keditor.getSettingComponent();
      var formContent = component.find('.form-content');
      formContent.attr('action', this.value);
    });
    form.find('.select-enctype').on('change', function () {
      var component = keditor.getSettingComponent();
      var formContent = component.find('.form-content');
      formContent.attr('enctype', this.value);
    });
    form.find('.select-layout').on('change', function () {
      var component = keditor.getSettingComponent();
      var formContent = component.find('.form-content');
      formContent.removeClass('form-inline form-horizontal');

      if (this.value) {
        formContent.addClass(this.value);
      }

      self.renderForm(component);
      form.find('.select-grid-wrapper').css('display', this.value === 'form-horizontal' ? 'block' : 'none');
    });
    form.find('.select-grid').on('change', function () {
      var component = keditor.getSettingComponent();
      var formContent = component.find('.form-content');
      formContent.attr('data-grid', this.value);
      self.renderForm(component);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var formContent = component.find('.form-content');
    var layout = '';

    if (formContent.hasClass('form-inline')) {
      layout = 'form-inline';
    } else if (formContent.hasClass('form-horizontal')) {
      layout = 'form-horizontal';
    }

    form.find('.txt-form-action').val(formContent.attr('action') || '');
    form.find('.select-method').val(formContent.attr('method') || 'get');
    form.find('.select-enctype').val(formContent.attr('enctype'));
    form.find('.select-layout').val(layout);
    form.find('.select-grid-wrapper').css('display', layout === 'form-horizontal' ? 'block' : 'none');
    form.find('.select-grid').val(formContent.attr('data-grid') || '4-8');
  }
};

/***/ }),

/***/ "./src/components/keditor-component-googlemap.js":
/*!*******************************************************!*\
  !*** ./src/components/keditor-component-googlemap.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['googlemap'] = {
  init: function init(contentArea, container, component, keditor) {
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Google Map Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    form.append('<form class="form-horizontal">' + '   <div class="form-group">' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-block btn-primary btn-googlemap-edit">Update Map</button>' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label class="col-sm-12">Aspect Ratio</label>' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-sm btn-default btn-googlemap-169">16:9</button>' + '           <button type="button" class="btn btn-sm btn-default btn-googlemap-43">4:3</button>' + '       </div>' + '   </div>' + '</form>');
    var btnEdit = form.find('.btn-googlemap-edit');
    btnEdit.on('click', function (e) {
      e.preventDefault();
      var inputData = prompt('Please enter Google Map embed code in here:');
      var iframe = jquery__WEBPACK_IMPORTED_MODULE_0___default()(inputData);
      var src = iframe.attr('src');

      if (iframe.length > 0 && src && src.length > 0) {
        keditor.getSettingComponent().find('.embed-responsive-item').attr('src', src);
      } else {
        alert('Your Google Map embed code is invalid!');
      }
    });
    var btn169 = form.find('.btn-googlemap-169');
    btn169.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
    });
    var btn43 = form.find('.btn-googlemap-43');
    btn43.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
    });
  }
};

/***/ }),

/***/ "./src/components/keditor-component-photo.js":
/*!***************************************************!*\
  !*** ./src/components/keditor-component-photo.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['photo'] = {
  init: function init(contentArea, container, component, keditor) {
    var componentContent = component.children('.keditor-component-content');
    var img = componentContent.find('img');
    img.css('display', 'inline-block');
  },
  settingEnabled: true,
  settingTitle: 'Photo Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    var self = this;
    var options = keditor.options;
    form.append('<form class="form-horizontal">' + '   <div class="form-group">' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-block btn-primary" id="photo-edit">Change Photo</button>' + '           <input type="file" style="display: none" />' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label for="photo-align" class="col-sm-12">Align</label>' + '       <div class="col-sm-12">' + '           <select id="photo-align" class="form-control">' + '               <option value="left">Left</option>' + '               <option value="center">Center</option>' + '               <option value="right">Right</option>' + '           </select>' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label for="photo-style" class="col-sm-12">Style</label>' + '       <div class="col-sm-12">' + '           <select id="photo-style" class="form-control">' + '               <option value="">None</option>' + '               <option value="img-rounded">Rounded</option>' + '               <option value="img-circle">Circle</option>' + '               <option value="img-thumbnail">Thumbnail</option>' + '           </select>' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label for="photo-responsive" class="col-sm-12">Responsive</label>' + '       <div class="col-sm-12">' + '           <input type="checkbox" id="photo-responsive" />' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label for="photo-width" class="col-sm-12">Width</label>' + '       <div class="col-sm-12">' + '           <input type="number" id="photo-width" class="form-control" />' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label for="photo-height" class="col-sm-12">Height</label>' + '       <div class="col-sm-12">' + '           <input type="number" id="photo-height" class="form-control" />' + '       </div>' + '   </div>' + '</form>');
    var photoEdit = form.find('#photo-edit');
    var fileInput = photoEdit.next();
    photoEdit.on('click', function (e) {
      e.preventDefault();
      fileInput.trigger('click');
    });
    fileInput.on('change', function () {
      var file = this.files[0];

      if (/image/.test(file.type)) {
        var reader = new FileReader();
        reader.addEventListener('load', function (e) {
          var img = keditor.getSettingComponent().find('img');
          img.attr('src', e.target.result);
          img.css({
            width: '',
            height: ''
          });
          img.load(function () {
            keditor.showSettingPanel(keditor.getSettingComponent(), options);
          });
        });
        reader.readAsDataURL(this.files[0]);
      } else {
        alert('Your selected file is not photo!');
      }
    });
    var inputAlign = form.find('#photo-align');
    inputAlign.on('change', function () {
      var panel = keditor.getSettingComponent().find('.photo-panel');
      panel.css('text-align', this.value);
    });
    var inputResponsive = form.find('#photo-responsive');
    inputResponsive.on('click', function () {
      keditor.getSettingComponent().find('img')[this.checked ? 'addClass' : 'removeClass']('img-responsive');
    });
    var cbbStyle = form.find('#photo-style');
    cbbStyle.on('change', function () {
      var img = keditor.getSettingComponent().find('img');
      var val = this.value;
      img.removeClass('img-rounded img-circle img-thumbnail');

      if (val) {
        img.addClass(val);
      }
    });
    var inputWidth = form.find('#photo-width');
    var inputHeight = form.find('#photo-height');
    inputWidth.on('change', function () {
      var img = keditor.getSettingComponent().find('img');
      var newWidth = +this.value;
      var newHeight = Math.round(newWidth / self.ratio);

      if (newWidth <= 0) {
        newWidth = self.width;
        newHeight = self.height;
        this.value = newWidth;
      }

      img.css({
        'width': newWidth,
        'height': newHeight
      });
      inputHeight.val(newHeight);
    });
    inputHeight.on('change', function () {
      var img = keditor.getSettingComponent().find('img');
      var newHeight = +this.value;
      var newWidth = Math.round(newHeight * self.ratio);

      if (newHeight <= 0) {
        newWidth = self.width;
        newHeight = self.height;
        this.value = newHeight;
      }

      img.css({
        'height': newHeight,
        'width': newWidth
      });
      inputWidth.val(newWidth);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var self = this;
    var inputAlign = form.find('#photo-align');
    var inputResponsive = form.find('#photo-responsive');
    var inputWidth = form.find('#photo-width');
    var inputHeight = form.find('#photo-height');
    var cbbStyle = form.find('#photo-style');
    var panel = component.find('.photo-panel');
    var img = panel.find('img');
    var algin = panel.css('text-align');

    if (algin !== 'right' || algin !== 'center') {
      algin = 'left';
    }

    if (img.hasClass('img-rounded')) {
      cbbStyle.val('img-rounded');
    } else if (img.hasClass('img-circle')) {
      cbbStyle.val('img-circle');
    } else if (img.hasClass('img-thumbnail')) {
      cbbStyle.val('img-thumbnail');
    } else {
      cbbStyle.val('');
    }

    inputAlign.val(algin);
    inputResponsive.prop('checked', img.hasClass('img-responsive'));
    inputWidth.val(img.width());
    inputHeight.val(img.height());
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('<img />').attr('src', img.attr('src')).load(function () {
      self.ratio = this.width / this.height;
      self.width = this.width;
      self.height = this.height;
    });
  }
};

/***/ }),

/***/ "./src/components/keditor-component-text.js":
/*!**************************************************!*\
  !*** ./src/components/keditor-component-text.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var InlineEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! InlineEditor */ "InlineEditor");
/* harmony import */ var InlineEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(InlineEditor__WEBPACK_IMPORTED_MODULE_2__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;

var instances = {}; // Text component
// ---------------------------------------------------------------------

keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['text'] = {
  init: function init(contentArea, container, component, keditor) {
    var options = keditor.options;
    var componentContent = component.children('.keditor-component-content');
    componentContent.prop('contenteditable', true);
    componentContent.on('input', function (e) {
      if (typeof options.onComponentChanged === 'function') {
        options.onComponentChanged.call(contentArea, e, component);
      }

      if (typeof options.onContainerChanged === 'function') {
        options.onContainerChanged.call(contentArea, e, container);
      }

      if (typeof options.onContentChanged === 'function') {
        options.onContentChanged.call(keditor, e, contentArea);
      }
    });
    InlineEditor__WEBPACK_IMPORTED_MODULE_2___default.a.create(componentContent.get(0), {
      fontFamily: {
        options: ['default', 'Arial, Helvetica, sans-serif', 'Courier New, Courier, monospace', 'Georgia, serif', 'Lucida Sans Unicode, Lucida Grande, sans-serif', 'Tahoma, Geneva, sans-serif', 'Times New Roman, Times, serif', 'Trebuchet MS, Helvetica, sans-serif', 'Verdana, Geneva, sans-serif']
      }
    }).then(function (editor) {
      instances[componentContent.attr('id')] = editor;

      if (typeof options.onComponentReady === 'function') {
        options.onComponentReady.call(keditor, component, editor);
      }
    })["catch"](function (error) {
      console.error(error);
    });
  },
  getContent: function getContent(component, keditor) {
    var componentContent = component.find('.keditor-component-content');
    var editor = instances[componentContent.attr('id')];

    if (editor) {
      return editor.getData();
    } else {
      return componentContent.html();
    }
  },
  destroy: function destroy(component, keditor) {
    var id = component.find('.keditor-component-content').attr('id');
    var editor = instances[id];

    if (editor) {
      editor.destroy();
      delete instances[id];
    }
  }
};

/***/ }),

/***/ "./src/components/keditor-component-video.js":
/*!***************************************************!*\
  !*** ./src/components/keditor-component-video.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['video'] = {
  init: function init(contentArea, container, component, keditor) {
    var componentContent = component.children('.keditor-component-content');
    var video = componentContent.find('video');

    if (!video.parent().is('.video-wrapper')) {
      video.wrap('<div class="video-wrapper"></div>');
    }
  },
  getContent: function getContent(component, keditor) {
    var componentContent = component.children('.keditor-component-content');
    var video = componentContent.find('video');
    video.unwrap();
    return componentContent.html();
  },
  settingEnabled: true,
  settingTitle: 'Video Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    form.append("\n<form class=\"form-horizontal\">\n<div class=\"form-group\">\n<label for=\"video-input\" class=\"col-sm-12\">Video file</label>\n<div class=\"col-sm-12\">\n<div class=\"video-toolbar\">\n<a href=\"#\" class=\"btn-video-input btn btn-sm btn-primary\"><i class=\"fa fa-upload\"></i></a>\n<input class=\"video-input\" type=\"file\" style=\"display: none\" />\n</div>\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"video-autoplay\" class=\"col-sm-12\">Autoplay</label>\n<div class=\"col-sm-12\">\n<input type=\"checkbox\" class=\"video-autoplay\" />\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"video-loop\" class=\"col-sm-12\">Loop</label>\n<div class=\"col-sm-12\">\n<input type=\"checkbox\" class=\"video-loop\" />\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"video-controls\" class=\"col-sm-12\">Show Controls</label>\n<div class=\"col-sm-12\">\n<input type=\"checkbox\" class=\"video-controls\" checked />\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"\" class=\"col-sm-12\">Ratio</label>\n<div class=\"col-sm-12\">\n<input type=\"radio\" name=\"video-radio\" class=\"video-ratio\" value=\"4/3\" checked /> 4:3\n</div>\n<div class=\"col-sm-12\">\n<input type=\"radio\" name=\"video-radio\" class=\"video-ratio\" value=\"16/9\" /> 16:9\n</div>\n</div>\n<div class=\"form-group\">\n<label for=\"video-width\" class=\"col-sm-12\">Width (px)</label>\n<div class=\"col-sm-12\">\n<input type=\"number\" class=\"video-width form-control\" min=\"320\" max=\"1920\" value=\"320\" />\n</div>\n</div>\n</form>\n");
    var fileInput = form.find('.video-input');
    form.find('.btn-video-input').on('click', function (e) {
      e.preventDefault();
      fileInput.trigger('click');
    });
    fileInput.on('change', function () {
      var file = this.files[0];
      var video = keditor.getSettingComponent().find('video');

      if (/video/.test(file.type)) {
        // Todo: Upload to your server :)
        video.attr('src', URL.createObjectURL(file));
      } else {
        alert('Your selected file is not an video file!');
      }
    });
    var autoplayToggle = form.find('.video-autoplay');
    autoplayToggle.on('click', function () {
      var video = keditor.getSettingComponent().find('video');
      video.prop('autoplay', this.checked);
    });
    var loopToggle = form.find('.video-loop');
    loopToggle.on('click', function () {
      var video = keditor.getSettingComponent().find('video');
      video.prop('loop', this.checked);
    });
    var ratio = form.find('.video-ratio');
    ratio.on('click', function () {
      var video = keditor.getSettingComponent().find('video');
      video.attr('data-ratio', this.value);
      form.find('.video-width').trigger('change');
    });
    var controlToggle = form.find('.video-controls');
    controlToggle.on('click', function () {
      var video = keditor.getSettingComponent().find('video');
      video.prop('controls', this.checked);
    });
    var videoWidth = form.find('.video-width');
    videoWidth.on('change', function () {
      var video = keditor.getSettingComponent().find('video');
      var currentRatio = video.attr('data-ratio') === '16/9' ? 16 / 9 : 4 / 3;
      var height = this.value / currentRatio;
      video.attr('width', this.value);
      video.attr('height', height);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var video = component.find('video');
    var autoplayToggle = form.find('.video-autoplay');
    autoplayToggle.prop('checked', video.prop('autoplay'));
    var loopToggle = form.find('.video-loop');
    loopToggle.prop('checked', video.prop('loop'));
    var ratio = form.find('.video-ratio');
    ratio.prop('checked', false).filter('[value="' + video.attr('data-ratio') + '"]').prop('checked', true);
    var controlToggle = form.find('.video-controls');
    controlToggle.prop('checked', video.prop('controls'));
    var videoWidth = form.find('.video-width');
    videoWidth.val(video.attr('width'));
  }
};

/***/ }),

/***/ "./src/components/keditor-component-vimeo.js":
/*!***************************************************!*\
  !*** ./src/components/keditor-component-vimeo.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['vimeo'] = {
  init: function init(contentArea, container, component, keditor) {
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Vimeo Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    form.append('<form class="form-horizontal">' + '   <div class="form-group">' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-block btn-primary btn-vimeo-edit">Change Video</button>' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label class="col-sm-12">Autoplay</label>' + '       <div class="col-sm-12">' + '           <input type="checkbox" id="vimeo-autoplay" />' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label class="col-sm-12">Aspect Ratio</label>' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-sm btn-default btn-vimeo-169">16:9</button>' + '           <button type="button" class="btn btn-sm btn-default btn-vimeo-43">4:3</button>' + '       </div>' + '   </div>' + '</form>');
    var btnEdit = form.find('.btn-vimeo-edit');
    btnEdit.on('click', function (e) {
      e.preventDefault();
      var inputData = prompt('Please enter Vimeo URL in here:');
      var vimeoRegex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
      var match = inputData.match(vimeoRegex);

      if (match && match[1]) {
        keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://player.vimeo.com/video/' + match[1] + '?byline=0&portrait=0&badge=0');
      } else {
        alert('Your Vimeo URL is invalid!');
      }
    });
    var btn169 = form.find('.btn-vimeo-169');
    btn169.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
    });
    var btn43 = form.find('.btn-vimeo-43');
    btn43.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
    });
    var chkAutoplay = form.find('#vimeo-autoplay');
    chkAutoplay.on('click', function () {
      var embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
      var currentUrl = embedItem.attr('src');
      var newUrl = currentUrl.replace(/(\?.+)+/, '') + '?byline=0&portrait=0&badge=0&autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);
      embedItem.attr('src', newUrl);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var embedItem = component.find('.embed-responsive-item');
    var chkAutoplay = form.find('#vimeo-autoplay');
    var src = embedItem.attr('src');
    chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
  }
};

/***/ }),

/***/ "./src/components/keditor-component-youtube.js":
/*!*****************************************************!*\
  !*** ./src/components/keditor-component-youtube.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['youtube'] = {
  init: function init(contentArea, container, component, keditor) {
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Youtube Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    form.append('<form class="form-horizontal">' + '   <div class="form-group">' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-block btn-primary btn-youtube-edit">Change Video</button>' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label class="col-sm-12">Autoplay</label>' + '       <div class="col-sm-12">' + '           <input type="checkbox" id="youtube-autoplay" />' + '       </div>' + '   </div>' + '   <div class="form-group">' + '       <label class="col-sm-12">Aspect Ratio</label>' + '       <div class="col-sm-12">' + '           <button type="button" class="btn btn-sm btn-default btn-youtube-169">16:9</button>' + '           <button type="button" class="btn btn-sm btn-default btn-youtube-43">4:3</button>' + '       </div>' + '   </div>' + '</form>');
    var btnEdit = form.find('.btn-youtube-edit');
    btnEdit.on('click', function (e) {
      e.preventDefault();
      var inputData = prompt('Please enter Youtube URL in here:');
      var youtubeRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/;
      var match = inputData.match(youtubeRegex);

      if (match && match[1]) {
        keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + match[1]);
      } else {
        alert('Your Youtube URL is invalid!');
      }
    });
    var btn169 = form.find('.btn-youtube-169');
    btn169.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
    });
    var btn43 = form.find('.btn-youtube-43');
    btn43.on('click', function (e) {
      e.preventDefault();
      keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
    });
    var chkAutoplay = form.find('#youtube-autoplay');
    chkAutoplay.on('click', function () {
      var embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
      var currentUrl = embedItem.attr('src');
      var newUrl = currentUrl.replace(/(\?.+)+/, '') + '?autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);
      embedItem.attr('src', newUrl);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    var embedItem = component.find('.embed-responsive-item');
    var chkAutoplay = form.find('#youtube-autoplay');
    var src = embedItem.attr('src');
    chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
  }
};

/***/ }),

/***/ "./src/styles/keditor-component-form.less":
/*!************************************************!*\
  !*** ./src/styles/keditor-component-form.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "InlineEditor":
/*!*******************************!*\
  !*** external "InlineEditor" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_InlineEditor__;

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_jquery__;

/***/ }),

/***/ "keditor":
/*!**************************!*\
  !*** external "KEditor" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_keditor__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3M/OGI5YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJJbmxpbmVFZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJLRWRpdG9yXCIiXSwibmFtZXMiOlsiZmxvZyIsIktFZGl0b3IiLCJsb2ciLCJjb21wb25lbnRzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudCIsImtlZGl0b3IiLCJjb21wb25lbnRDb250ZW50IiwiY2hpbGRyZW4iLCJhdWRpbyIsImZpbmQiLCJ1bndyYXAiLCJodG1sIiwic2V0dGluZ0VuYWJsZWQiLCJzZXR0aW5nVGl0bGUiLCJpbml0U2V0dGluZ0Zvcm0iLCJmb3JtIiwiYXBwZW5kIiwic2hvd1NldHRpbmdGb3JtIiwib3B0aW9ucyIsImZpbGVJbnB1dCIsImJ0bkF1ZGlvRmlsZUlucHV0Iiwib2ZmIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiZmlsZSIsImZpbGVzIiwidGVzdCIsInR5cGUiLCJhdHRyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsInNob3dTZXR0aW5nUGFuZWwiLCJhbGVydCIsImF1dG9wbGF5VG9nZ2xlIiwiY2hlY2tlZCIsInJlbW92ZUF0dHIiLCJzaG93Y29udHJvbHNUb2dnbGUiLCJhdWRpb1dpZHRoIiwiY3NzIiwidmFsdWUiLCJpbml0Rm9ybUJ1aWxkZXIiLCJzZWxmIiwiZm9ybUJ1aWxkZXJBcmVhIiwiZm9ybURhdGEiLCJmb3JtQ29udGVudCIsInByZXBlbmQiLCJidG5FZGl0Rm9ybSIsImJ0blByZXZpZXdGb3JtIiwiZm9ybUJ1aWxkZXIiLCJkaXNhYmxlSW5qZWN0ZWRTdHlsZSIsInNob3dBY3Rpb25CdXR0b25zIiwiZGF0YVR5cGUiLCJkaXNhYmxlRmllbGRzIiwiZGlzYWJsZWRBdHRycyIsInR5cGVVc2VyRGlzYWJsZWRBdHRycyIsImhhc0NsYXNzIiwic2hvdyIsImhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVuZGVyRm9ybSIsImRhdGEiLCJmb3JtUmVuZGVyIiwiYWN0aW9ucyIsImdldERhdGEiLCJlYWNoIiwiZGl2IiwiJCIsImRhdGFHcmlkIiwic3BsaXQiLCJ3cmFwIiwibGFiZWwiLCJpbnB1dCIsInN1YkRpdiIsImxlbmd0aCIsImluaXQiLCJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInJlbW92ZSIsImdldFNldHRpbmdDb21wb25lbnQiLCJsYXlvdXQiLCJ2YWwiLCJpZnJhbWUiLCJ3cmFwcGVyIiwicGFyZW50IiwiaW5pdElmcmFtZUNvdmVyIiwiYnRuRWRpdCIsImlucHV0RGF0YSIsInByb21wdCIsInNyYyIsImJ0bjE2OSIsImJ0bjQzIiwiaW1nIiwicGhvdG9FZGl0IiwibmV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWFkQXNEYXRhVVJMIiwiaW5wdXRBbGlnbiIsInBhbmVsIiwiaW5wdXRSZXNwb25zaXZlIiwiY2JiU3R5bGUiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsInJhdGlvIiwiYWxnaW4iLCJwcm9wIiwiaW5zdGFuY2VzIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2FsbCIsIm9uQ29udGFpbmVyQ2hhbmdlZCIsIm9uQ29udGVudENoYW5nZWQiLCJJbmxpbmVFZGl0b3IiLCJjcmVhdGUiLCJnZXQiLCJmb250RmFtaWx5IiwidGhlbiIsImVkaXRvciIsIm9uQ29tcG9uZW50UmVhZHkiLCJlcnJvciIsImNvbnNvbGUiLCJkZXN0cm95IiwiaWQiLCJ2aWRlbyIsImlzIiwibG9vcFRvZ2dsZSIsImNvbnRyb2xUb2dnbGUiLCJ2aWRlb1dpZHRoIiwiY3VycmVudFJhdGlvIiwiZmlsdGVyIiwidmltZW9SZWdleCIsIm1hdGNoIiwiY2hrQXV0b3BsYXkiLCJlbWJlZEl0ZW0iLCJjdXJyZW50VXJsIiwibmV3VXJsIiwicmVwbGFjZSIsImluZGV4T2YiLCJ5b3V0dWJlUmVnZXgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FB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QUFHLENBQUN5RCxPQUFKLENBQVksWUFBWixNQUE4QixDQUFDLENBQTNEO0FBQ0M7QUFsRStCLENBQWhDLEM7Ozs7Ozs7Ozs7O0FDSEEsdUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEscUQiLCJmaWxlIjoianMva2VkaXRvci1jb21wb25lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiSW5saW5lRWRpdG9yXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwiS0VkaXRvclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJJbmxpbmVFZGl0b3JcIiwgXCJqUXVlcnlcIiwgXCJLRWRpdG9yXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJJbmxpbmVFZGl0b3JcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJLRWRpdG9yXCIpKSA6IGZhY3Rvcnkocm9vdFtcIklubGluZUVkaXRvclwiXSwgcm9vdFtcImpRdWVyeVwiXSwgcm9vdFtcIktFZGl0b3JcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfSW5saW5lRWRpdG9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa2VkaXRvcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtZm9ybS5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtZ29vZ2xlbWFwLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdGV4dC5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdmlkZW8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC15b3V0dWJlLmpzJztcciIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2F1ZGlvJ10gPSB7XHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBhdWRpbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgnYXVkaW8nKTtccmF1ZGlvLnVud3JhcCgpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnQXVkaW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvRmlsZUlucHV0XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BdWRpbyBmaWxlPC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby10b29sYmFyXCI+JyArXHInICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLWF1ZGlvRmlsZUlucHV0IGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L2E+JyArXHInICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhdWRpb0ZpbGVJbnB1dFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgICAgICAgPC9kaXY+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLWF1dG9wbGF5XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhdWRpby1hdXRvcGxheVwiIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLXNob3djb250cm9sc1wiIGNsYXNzPVwiY29sLXNtLTEyXCI+U2hvdyBDb250cm9sczwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhdWRpby1zaG93Y29udHJvbHNcIiBjaGVja2VkIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLXdpZHRoXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5XaWR0aCAoJSk8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImF1ZGlvLXdpZHRoXCIgbWluPVwiMjBcIiBtYXg9XCIxMDBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiMTAwXCIgLz4nICtccicgICAgICAgICA8L2Rpdj4nICtccicgICAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJsZXQgYXVkaW8gPSBjb21wb25lbnQuZmluZCgnYXVkaW8nKTtccmxldCBmaWxlSW5wdXQgPSBmb3JtLmZpbmQoJyNhdWRpb0ZpbGVJbnB1dCcpO1xybGV0IGJ0bkF1ZGlvRmlsZUlucHV0ID0gZm9ybS5maW5kKCcuYnRuLWF1ZGlvRmlsZUlucHV0Jyk7XHJidG5BdWRpb0ZpbGVJbnB1dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmZpbGVJbnB1dC50cmlnZ2VyKCdjbGljaycpO1xyfSk7XHJmaWxlSW5wdXQub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyaWYgKC9hdWRpby8udGVzdChmaWxlLnR5cGUpKSB7XHIvLyBUb2RvOiBVcGxvYWQgdG8geW91ciBzZXJ2ZXIgOilccmF1ZGlvLmF0dHIoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyYXVkaW8ubG9hZChmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLnNob3dTZXR0aW5nUGFuZWwoY29tcG9uZW50LCBvcHRpb25zKTtccn0pO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IGFuIGF1ZGlvIGZpbGUhJyk7XHJ9XHJ9KTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnI2F1ZGlvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccmF1ZGlvLmF0dHIoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5Jyk7XHJ9IGVsc2Uge1xyYXVkaW8ucmVtb3ZlQXR0cignYXV0b3BsYXknKTtccn1ccn0pO1xybGV0IHNob3djb250cm9sc1RvZ2dsZSA9IGZvcm0uZmluZCgnI2F1ZGlvLXNob3djb250cm9scycpO1xyc2hvd2NvbnRyb2xzVG9nZ2xlLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyaWYgKHRoaXMuY2hlY2tlZCkge1xyYXVkaW8uYXR0cignY29udHJvbHMnLCAnY29udHJvbHMnKTtccn0gZWxzZSB7XHJhdWRpby5yZW1vdmVBdHRyKCdjb250cm9scycpO1xyfVxyfSk7XHJsZXQgYXVkaW9XaWR0aCA9IGZvcm0uZmluZCgnI2F1ZGlvLXdpZHRoJyk7XHJhdWRpb1dpZHRoLm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmF1ZGlvLmNzcygnd2lkdGgnLCB0aGlzLnZhbHVlICsgJyUnKTtccn0pO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3MnO1xyaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1snZm9ybSddID0ge1xyaW5pdEZvcm1CdWlsZGVyOiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1EYXRhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWRhdGEnKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKS5wcmVwZW5kKFxyJzxwIGNsYXNzPVwiZm9ybS1idWlsZGVyLXRvb2xzXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDtcIj4nICtccicgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJldmlldy1mb3JtXCI+UHJldmlldyBmb3JtPC9hPiAnICtccicgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tZWRpdC1mb3JtIGRpc2FibGVkXCI+RWRpdCBmb3JtPC9hPicgK1xyJzwvcD4nXHIpO1xybGV0IGJ0bkVkaXRGb3JtID0gY29tcG9uZW50LmZpbmQoJy5idG4tZWRpdC1mb3JtJyk7XHJsZXQgYnRuUHJldmlld0Zvcm0gPSBjb21wb25lbnQuZmluZCgnLmJ0bi1wcmV2aWV3LWZvcm0nKTtccmZvcm1CdWlsZGVyQXJlYS5mb3JtQnVpbGRlcih7XHJkaXNhYmxlSW5qZWN0ZWRTdHlsZTogdHJ1ZSxccnNob3dBY3Rpb25CdXR0b25zOiBmYWxzZSxccmRhdGFUeXBlOiAnanNvbicsXHJmb3JtRGF0YTogZm9ybURhdGEuaHRtbCgpLFxyZGlzYWJsZUZpZWxkczogW1xyJ2F1dG9jb21wbGV0ZScsXHIncGFyYWdyYXBoJyxccidoZWFkZXInXHJdLFxyZGlzYWJsZWRBdHRyczogWydhY2Nlc3MnXSxccnR5cGVVc2VyRGlzYWJsZWRBdHRyczoge1xyJ2NoZWNrYm94LWdyb3VwJzogW1xyJ3RvZ2dsZScsXHInaW5saW5lJ1xyXVxyfVxyfSk7XHJidG5FZGl0Rm9ybS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyaWYgKCFidG5FZGl0Rm9ybS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyZm9ybUJ1aWxkZXJBcmVhLnNob3coKTtccmZvcm1Db250ZW50LmhpZGUoKTtccmJ0bkVkaXRGb3JtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyYnRuUHJldmlld0Zvcm0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJ9XHJ9KTtccmJ0blByZXZpZXdGb3JtLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJpZiAoIWJ0blByZXZpZXdGb3JtLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccmZvcm1CdWlsZGVyQXJlYS5oaWRlKCk7XHJmb3JtQ29udGVudC5zaG93KCk7XHJidG5FZGl0Rm9ybS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtccmJ0blByZXZpZXdGb3JtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyfVxyfSk7XHJ9LFxycmVuZGVyRm9ybTogZnVuY3Rpb24gKGNvbXBvbmVudCwgZm9ybUJ1aWxkZXIpIHtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJpZiAoIWZvcm1CdWlsZGVyKSB7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xyZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlckFyZWEuZGF0YSgnZm9ybUJ1aWxkZXInKTtccn1ccmZvcm1Db250ZW50LmZvcm1SZW5kZXIoe1xyZGF0YVR5cGU6ICdqc29uJyxccmZvcm1EYXRhOiBmb3JtQnVpbGRlci5hY3Rpb25zLmdldERhdGEoJ2pzb24nKVxyfSk7XHJpZiAoZm9ybUNvbnRlbnQuaGFzQ2xhc3MoJ2Zvcm0taG9yaXpvbnRhbCcpKSB7XHJmb3JtQ29udGVudC5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgZGl2ID0gJCh0aGlzKTtccmxldCBkYXRhR3JpZCA9IGZvcm1Db250ZW50LmF0dHIoJ2RhdGEtZ3JpZCcpIHx8ICc0LTgnO1xyZGF0YUdyaWQgPSBkYXRhR3JpZC5zcGxpdCgnLScpO1xyaWYgKGRpdi5hdHRyKCdjbGFzcycpKSB7XHJpZiAoZGl2Lmhhc0NsYXNzKCdmYi1idXR0b24nKSkge1xyZGl2LmZpbmQoJ2J1dHRvbicpLndyYXAoJzxkaXYgY2xhc3M9XCJjb2wtc20tJyArIGRhdGFHcmlkWzFdICsgJyBjb2wtc20tb2Zmc2V0LScgKyBkYXRhR3JpZFswXSArICdcIj48L2Rpdj4nKTtccn0gZWxzZSB7XHJsZXQgbGFiZWwgPSBkaXYuY2hpbGRyZW4oJ2xhYmVsJyk7XHJsZXQgaW5wdXQgPSBkaXYuY2hpbGRyZW4oJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XHJsZXQgc3ViRGl2ID0gZGl2LmNoaWxkcmVuKCdkaXYnKTtccmxhYmVsLmFkZENsYXNzKCdjb250cm9sLWxhYmVsIGNvbC1zbS0nICsgZGF0YUdyaWRbMF0pO1xyaWYgKHN1YkRpdi5sZW5ndGggPiAwKSB7XHJzdWJEaXYuYWRkQ2xhc3MoJ2NvbC1zbS0nICsgZGF0YUdyaWRbMV0pO1xyfSBlbHNlIHtccmlucHV0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wnKS53cmFwKCc8ZGl2IGNsYXNzPVwiY29sLXNtLScgKyBkYXRhR3JpZFsxXSArICdcIj48L2Rpdj4nKTtccn1ccn1ccn1ccn0pO1xyfVxyfSxccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZm9ybUJ1aWxkZXIgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tYnVpbGRlci1hcmVhJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGZvcm1EYXRhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWRhdGEnKTtccmlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1kYXRhXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XCI+PC9kaXY+Jylccn1ccmlmIChmb3JtQ29udGVudC5sZW5ndGggPT09IDApIHtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKCc8Zm9ybSBjbGFzcz1cImZvcm0tY29udGVudFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1wiPjwvZm9ybT4nKVxyfSBlbHNlIHtccmZvcm1Db250ZW50LmhpZGUoKVxyfVxyaWYgKGZvcm1CdWlsZGVyLmxlbmd0aCA9PT0gMCkge1xyZm9ybUJ1aWxkZXIgPSAkKCc8ZGl2IGNsYXNzPVwiZm9ybS1idWlsZGVyLWFyZWEgY2xlYXJmaXhcIj48L2Rpdj4nKTtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKGZvcm1CdWlsZGVyKTtccn1ccnRoaXMuaW5pdEZvcm1CdWlsZGVyKGNvbXBvbmVudCk7XHJ9LFxyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gJCgnIycgKyBjb21wb25lbnQuYXR0cignaWQnKSkuZmluZCgnLmZvcm0tYnVpbGRlci1hcmVhJyk7XHJsZXQgZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlckFyZWEuZGF0YSgnZm9ybUJ1aWxkZXInKTtccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQsIGZvcm1CdWlsZGVyKTtccmZvcm1EYXRhLmh0bWwoZm9ybUJ1aWxkZXIuYWN0aW9ucy5nZXREYXRhKCdqc29uJykpO1xyY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYSwgLmZvcm0tYnVpbGRlci10b29scycpLnJlbW92ZSgpO1xyY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKS5zaG93KCk7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdGb3JtIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmxldCBzZWxmID0gdGhpcztccmZvcm0uaHRtbChccic8ZGl2IGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BY3Rpb248L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHR4dC1mb3JtLWFjdGlvblwiIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5NZXRob2Q8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LW1ldGhvZFwiPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ2V0XCI+R2V0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb3N0XCI+UG9zdDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHV0XCI+UHV0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5EZWxldGU8L29wdGlvbj4nICtccicgICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkVuY3R5cGU8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWVuY3R5cGVcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRleHQvcGxhaW5cIj50ZXh0L3BsYWluPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+bXVsdGlwYXJ0L2Zvcm0tZGF0YTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI+YXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5MYXlvdXQ8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWxheW91dFwiPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9ybWFsPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtLWhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtLWlubGluZVwiPklubGluZTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzZWxlY3QtZ3JpZC13cmFwcGVyXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5HcmlkIHNldHRpbmc8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWdyaWRcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjItMTBcIj5jb2wtMiBjb2wtMTA8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMtOVwiPmNvbC0zIGNvbC05PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0LThcIj5jb2wtNCBjb2wtODwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNS03XCI+Y29sLTUgY29sLTc8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYtNlwiPmNvbC02IGNvbC02PC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiaGVscC1ibG9ja1wiPlRoaXMgc2V0dGluZyBpcyBmb3Igd2lkdGggb2YgbGFiZWwgYW5kIGNvbnRyb2wgd2l0aCBudW1iZXIgb2YgY29scyBhcyB1bml0PC9zbWFsbD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccic8L2Rpdj4nXHIpO1xyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdhY3Rpb24nLCB0aGlzLnZhbHVlKTtccn0pO1xyZm9ybS5maW5kKCcuc2VsZWN0LW1ldGhvZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1lbmN0eXBlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdlbmN0eXBlJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGNvbXBvbmVudCA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmZvcm1Db250ZW50LnJlbW92ZUNsYXNzKCdmb3JtLWlubGluZSBmb3JtLWhvcml6b250YWwnKTtccmlmICh0aGlzLnZhbHVlKSB7XHJmb3JtQ29udGVudC5hZGRDbGFzcyh0aGlzLnZhbHVlKTtccn1ccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWdyaWQtd3JhcHBlcicpLmNzcygnZGlzcGxheScsIHRoaXMudmFsdWUgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnLCB0aGlzLnZhbHVlKTtccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGxheW91dCA9ICcnO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWlubGluZScpKSB7XHJsYXlvdXQgPSAnZm9ybS1pbmxpbmUnO1xyfSBlbHNlIGlmIChmb3JtQ29udGVudC5oYXNDbGFzcygnZm9ybS1ob3Jpem9udGFsJykpIHtccmxheW91dCA9ICdmb3JtLWhvcml6b250YWwnO1xyfVxyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykudmFsKGZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicpIHx8ICcnKTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignbWV0aG9kJykgfHwgJ2dldCcpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWVuY3R5cGUnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScpKTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS52YWwobGF5b3V0KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCBsYXlvdXQgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLnZhbChmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04Jyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2dvb2dsZW1hcCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IGlmcmFtZSA9IGNvbXBvbmVudC5maW5kKCdpZnJhbWUnKTtccmxldCB3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xya2VkaXRvci5pbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ0dvb2dsZSBNYXAgU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLWdvb2dsZW1hcC1lZGl0XCI+VXBkYXRlIE1hcDwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLWdvb2dsZW1hcC0xNjlcIj4xNjo5PC9idXR0b24+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLWdvb2dsZW1hcC00M1wiPjQ6MzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccmxldCBidG5FZGl0ID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgR29vZ2xlIE1hcCBlbWJlZCBjb2RlIGluIGhlcmU6Jyk7XHJsZXQgaWZyYW1lID0gJChpbnB1dERhdGEpO1xybGV0IHNyYyA9IGlmcmFtZS5hdHRyKCdzcmMnKTtccmlmIChpZnJhbWUubGVuZ3RoID4gMCAmJiBzcmMgJiYgc3JjLmxlbmd0aCA+IDApIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCBzcmMpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIEdvb2dsZSBNYXAgZW1iZWQgY29kZSBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC0xNjknKTtccmJ0bjE2OS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKTtccn0pO1xybGV0IGJ0bjQzID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC00MycpO1xyYnRuNDMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJyk7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sncGhvdG8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGltZyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgnaW1nJyk7XHJpbWcuY3NzKCdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnUGhvdG8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIGlkPVwicGhvdG8tZWRpdFwiPkNoYW5nZSBQaG90bzwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLWFsaWduXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BbGlnbjwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1hbGlnblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+JyArXHInICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXN0eWxlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TdHlsZTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1zdHlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXJvdW5kZWRcIj5Sb3VuZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltZy1jaXJjbGVcIj5DaXJjbGU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXRodW1ibmFpbFwiPlRodW1ibmFpbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1yZXNwb25zaXZlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SZXNwb25zaXZlPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGhvdG8tcmVzcG9uc2l2ZVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGg8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvdG8td2lkdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkhlaWdodDwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IHBob3RvRWRpdCA9IGZvcm0uZmluZCgnI3Bob3RvLWVkaXQnKTtccmxldCBmaWxlSW5wdXQgPSBwaG90b0VkaXQubmV4dCgpO1xycGhvdG9FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJpZiAoL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHtccmxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xycmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xyaW1nLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJpbWcuY3NzKHtccndpZHRoOiAnJyxccmhlaWdodDogJydccn0pO1xyaW1nLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLCBvcHRpb25zKTtccn0pO1xyfSk7XHJyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzWzBdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBwaG90byEnKTtccn1ccn0pO1xybGV0IGlucHV0QWxpZ24gPSBmb3JtLmZpbmQoJyNwaG90by1hbGlnbicpO1xyaW5wdXRBbGlnbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHBhbmVsID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJwYW5lbC5jc3MoJ3RleHQtYWxpZ24nLCB0aGlzLnZhbHVlKTtccn0pO1xybGV0IGlucHV0UmVzcG9uc2l2ZSA9IGZvcm0uZmluZCgnI3Bob3RvLXJlc3BvbnNpdmUnKTtccmlucHV0UmVzcG9uc2l2ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCdpbWcnKVt0aGlzLmNoZWNrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2ltZy1yZXNwb25zaXZlJyk7XHJ9KTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJjYmJTdHlsZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IHZhbCA9IHRoaXMudmFsdWU7XHJpbWcucmVtb3ZlQ2xhc3MoJ2ltZy1yb3VuZGVkIGltZy1jaXJjbGUgaW1nLXRodW1ibmFpbCcpO1xyaWYgKHZhbCkge1xyaW1nLmFkZENsYXNzKHZhbCk7XHJ9XHJ9KTtccmxldCBpbnB1dFdpZHRoID0gZm9ybS5maW5kKCcjcGhvdG8td2lkdGgnKTtccmxldCBpbnB1dEhlaWdodCA9IGZvcm0uZmluZCgnI3Bob3RvLWhlaWdodCcpO1xyaW5wdXRXaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IG5ld1dpZHRoID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNlbGYucmF0aW8pO1xyaWYgKG5ld1dpZHRoIDw9IDApIHtccm5ld1dpZHRoID0gc2VsZi53aWR0aDtccm5ld0hlaWdodCA9IHNlbGYuaGVpZ2h0O1xydGhpcy52YWx1ZSA9IG5ld1dpZHRoO1xyfVxyaW1nLmNzcyh7XHInd2lkdGgnOiBuZXdXaWR0aCxccidoZWlnaHQnOiBuZXdIZWlnaHRccn0pO1xyaW5wdXRIZWlnaHQudmFsKG5ld0hlaWdodCk7XHJ9KTtccmlucHV0SGVpZ2h0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgbmV3SGVpZ2h0ID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3V2lkdGggPSBNYXRoLnJvdW5kKG5ld0hlaWdodCAqIHNlbGYucmF0aW8pO1xyaWYgKG5ld0hlaWdodCA8PSAwKSB7XHJuZXdXaWR0aCA9IHNlbGYud2lkdGg7XHJuZXdIZWlnaHQgPSBzZWxmLmhlaWdodDtccnRoaXMudmFsdWUgPSBuZXdIZWlnaHQ7XHJ9XHJpbWcuY3NzKHtccidoZWlnaHQnOiBuZXdIZWlnaHQsXHInd2lkdGgnOiBuZXdXaWR0aFxyfSk7XHJpbnB1dFdpZHRoLnZhbChuZXdXaWR0aCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmxldCBzZWxmID0gdGhpcztccmxldCBpbnB1dEFsaWduID0gZm9ybS5maW5kKCcjcGhvdG8tYWxpZ24nKTtccmxldCBpbnB1dFJlc3BvbnNpdmUgPSBmb3JtLmZpbmQoJyNwaG90by1yZXNwb25zaXZlJyk7XHJsZXQgaW5wdXRXaWR0aCA9IGZvcm0uZmluZCgnI3Bob3RvLXdpZHRoJyk7XHJsZXQgaW5wdXRIZWlnaHQgPSBmb3JtLmZpbmQoJyNwaG90by1oZWlnaHQnKTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJsZXQgcGFuZWwgPSBjb21wb25lbnQuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJsZXQgaW1nID0gcGFuZWwuZmluZCgnaW1nJyk7XHJsZXQgYWxnaW4gPSBwYW5lbC5jc3MoJ3RleHQtYWxpZ24nKTtccmlmIChhbGdpbiAhPT0gJ3JpZ2h0JyB8fCBhbGdpbiAhPT0gJ2NlbnRlcicpIHtccmFsZ2luID0gJ2xlZnQnO1xyfVxyaWYgKGltZy5oYXNDbGFzcygnaW1nLXJvdW5kZWQnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctcm91bmRlZCcpO1xyfSBlbHNlIGlmIChpbWcuaGFzQ2xhc3MoJ2ltZy1jaXJjbGUnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctY2lyY2xlJyk7XHJ9IGVsc2UgaWYgKGltZy5oYXNDbGFzcygnaW1nLXRodW1ibmFpbCcpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy10aHVtYm5haWwnKTtccn0gZWxzZSB7XHJjYmJTdHlsZS52YWwoJycpO1xyfVxyaW5wdXRBbGlnbi52YWwoYWxnaW4pO1xyaW5wdXRSZXNwb25zaXZlLnByb3AoJ2NoZWNrZWQnLCBpbWcuaGFzQ2xhc3MoJ2ltZy1yZXNwb25zaXZlJykpO1xyaW5wdXRXaWR0aC52YWwoaW1nLndpZHRoKCkpO1xyaW5wdXRIZWlnaHQudmFsKGltZy5oZWlnaHQoKSk7XHIkKCc8aW1nIC8+JykuYXR0cignc3JjJywgaW1nLmF0dHIoJ3NyYycpKS5sb2FkKGZ1bmN0aW9uICgpIHtccnNlbGYucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJzZWxmLndpZHRoID0gdGhpcy53aWR0aDtccnNlbGYuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJjb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJcbmltcG9ydCBJbmxpbmVFZGl0b3IgZnJvbSAnSW5saW5lRWRpdG9yJztccmNvbnN0IGluc3RhbmNlcyA9IHt9O1xyLy8gVGV4dCBjb21wb25lbnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbktFZGl0b3IuY29tcG9uZW50c1sndGV4dCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQucHJvcCgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XHJjb21wb25lbnRDb250ZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50Q2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlLCBjb21wb25lbnQpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChjb250ZW50QXJlYSwgZSwgY29udGFpbmVyKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChrZWRpdG9yLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccklubGluZUVkaXRvclxyLmNyZWF0ZShjb21wb25lbnRDb250ZW50LmdldCgwKSwge1xyZm9udEZhbWlseToge1xyb3B0aW9uczogW1xyJ2RlZmF1bHQnLFxyJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyJ0NvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2UnLFxyJ0dlb3JnaWEsIHNlcmlmJyxccidMdWNpZGEgU2FucyBVbmljb2RlLCBMdWNpZGEgR3JhbmRlLCBzYW5zLXNlcmlmJyxccidUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZicsXHInVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWYnLFxyJ1RyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxccidWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnXHJdXHJ9XHJ9KVxyLnRoZW4oZWRpdG9yID0+IHtccmluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldID0gZWRpdG9yO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50UmVhZHkgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRSZWFkeS5jYWxsKGtlZGl0b3IsIGNvbXBvbmVudCwgZWRpdG9yKTtccn1ccn0pXHIuY2F0Y2goZXJyb3IgPT4ge1xyY29uc29sZS5lcnJvcihlcnJvcik7XHJ9KTtccn0sXHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGVkaXRvciA9IGluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldO1xyaWYgKGVkaXRvcikge1xycmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XHJ9IGVsc2Uge1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyfSxccmRlc3Ryb3k6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmxldCBpZCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpLmF0dHIoJ2lkJyk7XHJsZXQgZWRpdG9yID0gaW5zdGFuY2VzW2lkXTtccmlmIChlZGl0b3IpIHtccmVkaXRvci5kZXN0cm95KCk7XHJkZWxldGUgaW5zdGFuY2VzW2lkXTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJjb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3ZpZGVvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCB2aWRlbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgndmlkZW8nKTtccmlmICghdmlkZW8ucGFyZW50KCkuaXMoJy52aWRlby13cmFwcGVyJykpIHtccnZpZGVvLndyYXAoJzxkaXYgY2xhc3M9XCJ2aWRlby13cmFwcGVyXCI+PC9kaXY+Jyk7XHJ9XHJ9LFxyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgdmlkZW8gPSBjb21wb25lbnRDb250ZW50LmZpbmQoJ3ZpZGVvJyk7XHJ2aWRlby51bndyYXAoKTtccnJldHVybiBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1ZpZGVvIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZvcm0uYXBwZW5kKGBccjxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cInZpZGVvLWlucHV0XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5WaWRlbyBmaWxlPC9sYWJlbD5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxkaXYgY2xhc3M9XCJ2aWRlby10b29sYmFyXCI+XHI8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLXZpZGVvLWlucHV0IGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L2E+XHI8aW5wdXQgY2xhc3M9XCJ2aWRlby1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8tYXV0b3BsYXlcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInZpZGVvLWF1dG9wbGF5XCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cInZpZGVvLWxvb3BcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkxvb3A8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidmlkZW8tbG9vcFwiIC8+XHI8L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5ccjxsYWJlbCBmb3I9XCJ2aWRlby1jb250cm9sc1wiIGNsYXNzPVwiY29sLXNtLTEyXCI+U2hvdyBDb250cm9sczwvbGFiZWw+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHI8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aWRlby1jb250cm9sc1wiIGNoZWNrZWQgLz5ccjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cIlwiIGNsYXNzPVwiY29sLXNtLTEyXCI+UmF0aW88L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ2aWRlby1yYWRpb1wiIGNsYXNzPVwidmlkZW8tcmF0aW9cIiB2YWx1ZT1cIjQvM1wiIGNoZWNrZWQgLz4gNDozXHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidmlkZW8tcmFkaW9cIiBjbGFzcz1cInZpZGVvLXJhdGlvXCIgdmFsdWU9XCIxNi85XCIgLz4gMTY6OVxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8td2lkdGhcIiBjbGFzcz1cImNvbC1zbS0xMlwiPldpZHRoIChweCk8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cInZpZGVvLXdpZHRoIGZvcm0tY29udHJvbFwiIG1pbj1cIjMyMFwiIG1heD1cIjE5MjBcIiB2YWx1ZT1cIjMyMFwiIC8+XHI8L2Rpdj5ccjwvZGl2PlxyPC9mb3JtPlxyYCk7XHJsZXQgZmlsZUlucHV0ID0gZm9ybS5maW5kKCcudmlkZW8taW5wdXQnKTtccmZvcm0uZmluZCgnLmJ0bi12aWRlby1pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xyaWYgKC92aWRlby8udGVzdChmaWxlLnR5cGUpKSB7XHIvLyBUb2RvOiBVcGxvYWQgdG8geW91ciBzZXJ2ZXIgOilccnZpZGVvLmF0dHIoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IGFuIHZpZGVvIGZpbGUhJyk7XHJ9XHJ9KTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xydmlkZW8ucHJvcCgnYXV0b3BsYXknLCB0aGlzLmNoZWNrZWQpO1xyfSk7XHJsZXQgbG9vcFRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWxvb3AnKTtccmxvb3BUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLnByb3AoJ2xvb3AnLCB0aGlzLmNoZWNrZWQpO1xyfSk7XHJsZXQgcmF0aW8gPSBmb3JtLmZpbmQoJy52aWRlby1yYXRpbycpO1xycmF0aW8ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLmF0dHIoJ2RhdGEtcmF0aW8nLCB0aGlzLnZhbHVlKTtccmZvcm0uZmluZCgnLnZpZGVvLXdpZHRoJykudHJpZ2dlcignY2hhbmdlJyk7XHJ9KTtccmxldCBjb250cm9sVG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tY29udHJvbHMnKTtccmNvbnRyb2xUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLnByb3AoJ2NvbnRyb2xzJywgdGhpcy5jaGVja2VkKTtccn0pO1xybGV0IHZpZGVvV2lkdGggPSBmb3JtLmZpbmQoJy52aWRlby13aWR0aCcpO1xydmlkZW9XaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccmxldCBjdXJyZW50UmF0aW8gPSB2aWRlby5hdHRyKCdkYXRhLXJhdGlvJykgPT09ICcxNi85JyA/IDE2IC8gOSA6IDQgLyAzO1xybGV0IGhlaWdodCA9IHRoaXMudmFsdWUgLyBjdXJyZW50UmF0aW87XHJ2aWRlby5hdHRyKCd3aWR0aCcsIHRoaXMudmFsdWUpO1xydmlkZW8uYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IHZpZGVvID0gY29tcG9uZW50LmZpbmQoJ3ZpZGVvJyk7XHJsZXQgYXV0b3BsYXlUb2dnbGUgPSBmb3JtLmZpbmQoJy52aWRlby1hdXRvcGxheScpO1xyYXV0b3BsYXlUb2dnbGUucHJvcCgnY2hlY2tlZCcsIHZpZGVvLnByb3AoJ2F1dG9wbGF5JykpO1xybGV0IGxvb3BUb2dnbGUgPSBmb3JtLmZpbmQoJy52aWRlby1sb29wJyk7XHJsb29wVG9nZ2xlLnByb3AoJ2NoZWNrZWQnLCB2aWRlby5wcm9wKCdsb29wJykpO1xybGV0IHJhdGlvID0gZm9ybS5maW5kKCcudmlkZW8tcmF0aW8nKTtccnJhdGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkuZmlsdGVyKCdbdmFsdWU9XCInICsgdmlkZW8uYXR0cignZGF0YS1yYXRpbycpICsgJ1wiXScpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtccmxldCBjb250cm9sVG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tY29udHJvbHMnKTtccmNvbnRyb2xUb2dnbGUucHJvcCgnY2hlY2tlZCcsIHZpZGVvLnByb3AoJ2NvbnRyb2xzJykpO1xybGV0IHZpZGVvV2lkdGggPSBmb3JtLmZpbmQoJy52aWRlby13aWR0aCcpO1xydmlkZW9XaWR0aC52YWwodmlkZW8uYXR0cignd2lkdGgnKSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3ZpbWVvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnVmltZW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLXZpbWVvLWVkaXRcIj5DaGFuZ2UgVmlkZW88L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aW1lby1hdXRvcGxheVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkFzcGVjdCBSYXRpbzwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdmltZW8tMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi12aW1lby00M1wiPjQ6MzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccmxldCBidG5FZGl0ID0gZm9ybS5maW5kKCcuYnRuLXZpbWVvLWVkaXQnKTtccmJ0bkVkaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBpbnB1dERhdGEgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciBWaW1lbyBVUkwgaW4gaGVyZTonKTtccmxldCB2aW1lb1JlZ2V4ID0gL2h0dHBzPzpcXC9cXC8oPzp3d3dcXC58cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzpjaGFubmVsc1xcLyg/OlxcdytcXC8pP3xncm91cHNcXC8oW15cXC9dKilcXC92aWRlb3NcXC98YWxidW1cXC8oXFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86JHxcXC98XFw/KS87XHJsZXQgbWF0Y2ggPSBpbnB1dERhdGEubWF0Y2godmltZW9SZWdleCk7XHJpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyBtYXRjaFsxXSArICc/YnlsaW5lPTAmcG9ydHJhaXQ9MCZiYWRnZT0wJyk7XHJ9IGVsc2Uge1xyYWxlcnQoJ1lvdXIgVmltZW8gVVJMIGlzIGludmFsaWQhJyk7XHJ9XHJ9KTtccmxldCBidG4xNjkgPSBmb3JtLmZpbmQoJy5idG4tdmltZW8tMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi12aW1lby00MycpO1xyYnRuNDMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJyk7XHJ9KTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3ZpbWVvLWF1dG9wbGF5Jyk7XHJjaGtBdXRvcGxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgZW1iZWRJdGVtID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpO1xybGV0IGN1cnJlbnRVcmwgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJsZXQgbmV3VXJsID0gKGN1cnJlbnRVcmwucmVwbGFjZSgvKFxcPy4rKSsvLCAnJykpICsgJz9ieWxpbmU9MCZwb3J0cmFpdD0wJmJhZGdlPTAmYXV0b3BsYXk9JyArIChjaGtBdXRvcGxheS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwKTtccmVtYmVkSXRlbS5hdHRyKCdzcmMnLCBuZXdVcmwpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgZW1iZWRJdGVtID0gY29tcG9uZW50LmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3ZpbWVvLWF1dG9wbGF5Jyk7XHJsZXQgc3JjID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xyY2hrQXV0b3BsYXkucHJvcCgnY2hlY2tlZCcsIHNyYy5pbmRleE9mKCdhdXRvcGxheT0xJykgIT09IC0xKTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sneW91dHViZSddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xybGV0IGlmcmFtZSA9IGNvbXBvbmVudC5maW5kKCdpZnJhbWUnKTtccmxldCB3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xya2VkaXRvci5pbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1lvdXR1YmUgU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLXlvdXR1YmUtZWRpdFwiPkNoYW5nZSBWaWRlbzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInlvdXR1YmUtYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXlvdXR1YmUtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi15b3V0dWJlLTQzXCI+NDozPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IGJ0bkVkaXQgPSBmb3JtLmZpbmQoJy5idG4teW91dHViZS1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgWW91dHViZSBVUkwgaW4gaGVyZTonKTtccmxldCB5b3V0dWJlUmVnZXggPSAvXig/Omh0dHAoPzpzKT86XFwvXFwvKT8oPzp3d3dcXC4pPyg/Om1cXC4pPyg/OnlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyg/Oig/OndhdGNoKT9cXD8oPzouKiYpP3YoPzppKT89fCg/OmVtYmVkfHZ8dml8dXNlcilcXC8pKShbXlxcPyZcXFwiJz5dKykvO1xybGV0IG1hdGNoID0gaW5wdXREYXRhLm1hdGNoKHlvdXR1YmVSZWdleCk7XHJpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIG1hdGNoWzFdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBZb3V0dWJlIFVSTCBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLXlvdXR1YmUtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi15b3V0dWJlLTQzJyk7XHJidG40My5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKTtccn0pO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjeW91dHViZS1hdXRvcGxheScpO1xyY2hrQXV0b3BsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IGVtYmVkSXRlbSA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjdXJyZW50VXJsID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xybGV0IG5ld1VybCA9IChjdXJyZW50VXJsLnJlcGxhY2UoLyhcXD8uKykrLywgJycpKSArICc/YXV0b3BsYXk9JyArIChjaGtBdXRvcGxheS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwKTtccmVtYmVkSXRlbS5hdHRyKCdzcmMnLCBuZXdVcmwpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJsZXQgZW1iZWRJdGVtID0gY29tcG9uZW50LmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3lvdXR1YmUtYXV0b3BsYXknKTtccmxldCBzcmMgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJjaGtBdXRvcGxheS5wcm9wKCdjaGVja2VkJywgc3JjLmluZGV4T2YoJ2F1dG9wbGF5PTEnKSAhPT0gLTEpO1xyfVxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfSW5saW5lRWRpdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rZWRpdG9yX187Il0sInNvdXJjZVJvb3QiOiIifQ==