(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("CKEDITOR"), require("jQuery"), require("KEditor"));
	else if(typeof define === 'function' && define.amd)
		define(["CKEDITOR", "jQuery", "KEditor"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("CKEDITOR"), require("jQuery"), require("KEditor")) : factory(root["CKEDITOR"], root["jQuery"], root["KEditor"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_ckeditor__, __WEBPACK_EXTERNAL_MODULE_jquery__, __WEBPACK_EXTERNAL_MODULE_keditor__) {
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
/* harmony import */ var _styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/keditor-component-form.less */ "./src/styles/keditor-component-form.less");
/* harmony import */ var _styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_component_form_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keditor_component_googlemap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keditor-component-googlemap.js */ "./src/components/keditor-component-googlemap.js");
/* harmony import */ var _keditor_component_photo_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./keditor-component-photo.js */ "./src/components/keditor-component-photo.js");
/* harmony import */ var _keditor_component_text_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./keditor-component-text.js */ "./src/components/keditor-component-text.js");
/* harmony import */ var _styles_keditor_component_text_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/keditor-component-text.less */ "./src/styles/keditor-component-text.less");
/* harmony import */ var _styles_keditor_component_text_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_keditor_component_text_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _keditor_component_video_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./keditor-component-video.js */ "./src/components/keditor-component-video.js");
/* harmony import */ var _keditor_component_vimeo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./keditor-component-vimeo.js */ "./src/components/keditor-component-vimeo.js");
/* harmony import */ var _keditor_component_youtube_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./keditor-component-youtube.js */ "./src/components/keditor-component-youtube.js");











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
    flog('getContent "audio" component, component');
    var componentContent = component.children('.keditor-component-content');
    var audio = componentContent.find('audio');
    audio.unwrap();
    return componentContent.html();
  },
  settingEnabled: true,
  settingTitle: 'Audio Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('init "audio" settings', form);
    form.append('<form class="form-horizontal">' + '     <div class="form-group">' + '         <label for="audioFileInput" class="col-sm-12">Audio file</label>' + '         <div class="col-sm-12">' + '             <div class="audio-toolbar">' + '                 <a href="#" class="btn-audioFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' + '                 <input id="audioFileInput" type="file" style="display: none" />' + '             </div>' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-autoplay" class="col-sm-12">Autoplay</label>' + '         <div class="col-sm-12">' + '             <input type="checkbox" id="audio-autoplay" />' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-showcontrols" class="col-sm-12">Show Controls</label>' + '         <div class="col-sm-12">' + '             <input type="checkbox" id="audio-showcontrols" checked />' + '         </div>' + '     </div>' + '     <div class="form-group">' + '         <label for="audio-width" class="col-sm-12">Width (%)</label>' + '         <div class="col-sm-12">' + '             <input type="number" id="audio-width" min="20" max="100" class="form-control" value="100" />' + '         </div>' + '     </div>' + '</form>');
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    flog('showSettingForm "audio" component', form, component);
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! keditor */ "keditor");
/* harmony import */ var keditor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(keditor__WEBPACK_IMPORTED_MODULE_1__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;
keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['form'] = {
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
        var div = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
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
    flog('init "form" component', component);
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
      formBuilder = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="form-builder-area clearfix"></div>');
      componentContent.append(formBuilder);
    }

    this.initFormBuilder(component);
  },
  getContent: function getContent(component, keditor) {
    flog('getContent "form" component', component);
    var self = this;
    var componentContent = component.find('.keditor-component-content');
    var formData = component.find('.form-data');
    var formBuilderArea = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + component.attr('id')).find('.form-builder-area');
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
    flog('initSettingForm "form" component');
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
    flog('showSettingForm "form" component', component);
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
    flog('init "googlemap" component', component);
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Google Map Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('initSettingForm "googlemap" component');
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
    flog('init "photo" component', component);
    var componentContent = component.children('.keditor-component-content');
    var img = componentContent.find('img');
    img.css('display', 'inline-block');
  },
  settingEnabled: true,
  settingTitle: 'Photo Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('initSettingForm "photo" component');
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
    flog('showSettingForm "photo" component', component);
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
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ckeditor */ "ckeditor");
/* harmony import */ var ckeditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ckeditor__WEBPACK_IMPORTED_MODULE_2__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;

ckeditor__WEBPACK_IMPORTED_MODULE_2___default.a.disableAutoInline = true; // Text component
// ---------------------------------------------------------------------

keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['text'] = {
  options: {
    toolbarGroups: [{
      name: 'document',
      groups: ['mode', 'document', 'doctools']
    }, {
      name: 'editing',
      groups: ['find', 'selection', 'spellchecker', 'editing']
    }, {
      name: 'forms',
      groups: ['forms']
    }, {
      name: 'basicstyles',
      groups: ['basicstyles', 'cleanup']
    }, {
      name: 'paragraph',
      groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']
    }, {
      name: 'links',
      groups: ['links']
    }, {
      name: 'insert',
      groups: ['insert']
    }, '/', {
      name: 'clipboard',
      groups: ['clipboard', 'undo']
    }, {
      name: 'styles',
      groups: ['styles']
    }, {
      name: 'colors',
      groups: ['colors']
    }, {
      name: 'tools',
      groups: ['tools']
    }, {
      name: 'others',
      groups: ['others']
    }],
    title: false,
    allowedContent: true,
    // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
    bodyId: 'editor',
    templates_replaceContent: false,
    enterMode: 'P',
    forceEnterMode: true,
    format_tags: 'p;h1;h2;h3;h4;h5;h6',
    removePlugins: 'table,magicline,tabletools',
    removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
    minimumChangeMilliseconds: 100
  },
  init: function init(contentArea, container, component, keditor) {
    flog('init "text" component', component);
    var self = this;
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
        options.onContentChanged.call(contentArea, e);
      }
    });
    var editor = componentContent.ckeditor(self.options).editor;
    editor.on('instanceReady', function () {
      flog('CKEditor is ready', component);

      if (typeof options.onComponentReady === 'function') {
        options.onComponentReady.call(contentArea, component, editor);
      }
    });
  },
  getContent: function getContent(component, keditor) {
    flog('getContent "text" component', component);
    var componentContent = component.find('.keditor-component-content');
    var id = componentContent.attr('id');
    var editor = ckeditor__WEBPACK_IMPORTED_MODULE_2___default.a.instances[id];

    if (editor) {
      return editor.getData();
    } else {
      return componentContent.html();
    }
  },
  destroy: function destroy(component, keditor) {
    flog('destroy "text" component', component);
    var id = component.find('.keditor-component-content').attr('id');
    var editor = ckeditor__WEBPACK_IMPORTED_MODULE_2___default.a.instances[id];

    if (editor) {
      editor.destroy();
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
    flog('init "video" component', component);
    var componentContent = component.children('.keditor-component-content');
    var video = componentContent.find('video');

    if (!video.parent().is('.video-wrapper')) {
      video.wrap('<div class="video-wrapper"></div>');
    }
  },
  getContent: function getContent(component, keditor) {
    flog('getContent "video" component', component);
    var componentContent = component.children('.keditor-component-content');
    var video = componentContent.find('video');
    video.unwrap();
    return componentContent.html();
  },
  settingEnabled: true,
  settingTitle: 'Video Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('init "video" settings', form);
    form.append('<form class="form-horizontal">' + '    <div class="form-group">' + '        <label for="videoFileInput" class="col-sm-12">Video file</label>' + '        <div class="col-sm-12">' + '            <div class="video-toolbar">' + '                <a href="#" class="btn-videoFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' + '                <input id="videoFileInput" type="file" style="display: none">' + '            </div>' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label for="video-autoplay" class="col-sm-12">Autoplay</label>' + '        <div class="col-sm-12">' + '            <input type="checkbox" id="video-autoplay" />' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label for="video-loop" class="col-sm-12">Loop</label>' + '        <div class="col-sm-12">' + '            <input type="checkbox" id="video-loop" />' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label for="video-showcontrols" class="col-sm-12">Show Controls</label>' + '        <div class="col-sm-12">' + '            <input type="checkbox" id="video-showcontrols" checked />' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label for="" class="col-sm-12">Ratio</label>' + '        <div class="col-sm-12">' + '            <input type="radio" name="video-radio" class="video-ratio" value="4/3" checked /> 4:3' + '        </div>' + '        <div class="col-sm-12">' + '            <input type="radio" name="video-radio" class="video-ratio" value="16/9" /> 16:9' + '        </div>' + '    </div>' + '    <div class="form-group">' + '        <label for="video-width" class="col-sm-12">Width (px)</label>' + '        <div class="col-sm-12">' + '            <input type="number" id="video-width" min="320" max="1920" class="form-control" value="320" />' + '        </div>' + '    </div>' + '</form>');
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    flog('showSettingForm "video" settings', form, component);
    var options = keditor.options;
    var video = component.find('video');
    var fileInput = form.find('#videoFileInput');
    var btnVideoFileInput = form.find('.btn-videoFileInput');
    btnVideoFileInput.on('click', function (e) {
      e.preventDefault();
      fileInput.trigger('click');
    });
    fileInput.off('change').on('change', function () {
      var file = this.files[0];

      if (/video/.test(file.type)) {
        // Todo: Upload to your server :)
        video.attr('src', URL.createObjectURL(file));
        video.load(function () {
          keditor.showSettingPanel(component, options);
        });
      } else {
        alert('Your selected file is not an video file!');
      }
    });
    var autoplayToggle = form.find('#video-autoplay');
    autoplayToggle.off('click').on('click', function (e) {
      if (this.checked) {
        video.prop('autoplay', true);
      } else {
        video.removeProp('autoplay');
      }
    });
    var loopToggle = form.find('#video-loop');
    loopToggle.off('click').on('click', function (e) {
      if (this.checked) {
        video.prop('loop', true);
      } else {
        video.removeProp('loop');
      }
    });
    var ratio = form.find('.video-ratio');
    ratio.off('click').on('click', function (e) {
      if (this.checked) {
        var currentWidth = video.css('width') || video.prop('width');
        currentWidth = currentWidth.replace('px', '');
        var currentRatio = this.value === '16/9' ? 16 / 9 : 4 / 3;
        var height = currentWidth / currentRatio;
        video.css('width', currentWidth + 'px');
        video.css('height', height + 'px');
        video.removeProp('width');
        video.removeProp('height');
      }
    });
    var showcontrolsToggle = form.find('#video-showcontrols');
    showcontrolsToggle.off('click').on('click', function (e) {
      if (this.checked) {
        video.attr('controls', 'controls');
      } else {
        video.removeAttr('controls');
      }
    });
    var videoWidth = form.find('#video-width');
    videoWidth.off('change').on('change', function () {
      video.css('width', this.value + 'px');
      var currentRatio = form.find('.video-ratio:checked').val() === '16/9' ? 16 / 9 : 4 / 3;
      var height = this.value / currentRatio;
      video.css('height', height + 'px');
      video.removeProp('width');
      video.removeProp('height');
    });
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
    flog('init "vimeo" component', component);
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Vimeo Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('initSettingForm "vimeo" component');
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
      flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
      embedItem.attr('src', newUrl);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    flog('showSettingForm "vimeo" component', component);
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
    flog('init "youtube" component', component);
    var iframe = component.find('iframe');
    var wrapper = iframe.parent();
    keditor.initIframeCover(iframe, wrapper);
  },
  settingEnabled: true,
  settingTitle: 'Youtube Settings',
  initSettingForm: function initSettingForm(form, keditor) {
    flog('initSettingForm "youtube" component');
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
      flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
      embedItem.attr('src', newUrl);
    });
  },
  showSettingForm: function showSettingForm(form, component, keditor) {
    flog('showSettingForm "youtube" component', component);
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

/***/ "./src/styles/keditor-component-text.less":
/*!************************************************!*\
  !*** ./src/styles/keditor-component-text.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ckeditor":
/*!***************************!*\
  !*** external "CKEDITOR" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ckeditor__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0Lmxlc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQ0tFRElUT1JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJLRWRpdG9yXCIiXSwibmFtZXMiOlsiZmxvZyIsIktFZGl0b3IiLCJsb2ciLCJjb21wb25lbnRzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudCIsImtlZGl0b3IiLCJjb21wb25lbnRDb250ZW50IiwiY2hpbGRyZW4iLCJhdWRpbyIsImZpbmQiLCJ1bndyYXAiLCJodG1sIiwic2V0dGluZ0VuYWJsZWQiLCJzZXR0aW5nVGl0bGUiLCJpbml0U2V0dGluZ0Zvcm0iLCJmb3JtIiwiYXBwZW5kIiwic2hvd1NldHRpbmdGb3JtIiwib3B0aW9ucyIsImZpbGVJbnB1dCIsImJ0bkF1ZGlvRmlsZUlucHV0Iiwib2ZmIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiZmlsZSIsImZpbGVzIiwidGVzdCIsInR5cGUiLCJhdHRyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsInNob3dTZXR0aW5nUGFuZWwiLCJhbGVydCIsImF1dG9wbGF5VG9nZ2xlIiwiY2hlY2tlZCIsInJlbW92ZUF0dHIiLCJzaG93Y29udHJvbHNUb2dnbGUiLCJhdWRpb1dpZHRoIiwiY3NzIiwidmFsdWUiLCJpbml0Rm9ybUJ1aWxkZXIiLCJzZWxmIiwiZm9ybUJ1aWxkZXJBcmVhIiwiZm9ybURhdGEiLCJmb3JtQ29udGVudCIsInByZXBlbmQiLCJidG5FZGl0Rm9ybSIsImJ0blByZXZpZXdGb3JtIiwiZm9ybUJ1aWxkZXIiLCJkaXNhYmxlSW5qZWN0ZWRTdHlsZSIsInNob3dBY3Rpb25CdXR0b25zIiwiZGF0YVR5cGUiLCJkaXNhYmxlRmllbGRzIiwiZGlzYWJsZWRBdHRycyIsInR5cGVVc2VyRGlzYWJsZWRBdHRycyIsImhhc0NsYXNzIiwic2hvdyIsImhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVuZGVyRm9ybSIsImRhdGEiLCJmb3JtUmVuZGVyIiwiYWN0aW9ucyIsImdldERhdGEiLCJlYWNoIiwiZGl2IiwiJCIsImRhdGFHcmlkIiwic3BsaXQiLCJ3cmFwIiwibGFiZWwiLCJpbnB1dCIsInN1YkRpdiIsImxlbmd0aCIsImluaXQiLCJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInJlbW92ZSIsImdldFNldHRpbmdDb21wb25lbnQiLCJsYXlvdXQiLCJ2YWwiLCJpZnJhbWUiLCJ3cmFwcGVyIiwicGFyZW50IiwiaW5pdElmcmFtZUNvdmVyIiwiYnRuRWRpdCIsImlucHV0RGF0YSIsInByb21wdCIsInNyYyIsImJ0bjE2OSIsImJ0bjQzIiwiaW1nIiwicGhvdG9FZGl0IiwibmV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWFkQXNEYXRhVVJMIiwiaW5wdXRBbGlnbiIsInBhbmVsIiwiaW5wdXRSZXNwb25zaXZlIiwiY2JiU3R5bGUiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsInJhdGlvIiwiYWxnaW4iLCJwcm9wIiwiQ0tFRElUT1IiLCJkaXNhYmxlQXV0b0lubGluZSIsInRvb2xiYXJHcm91cHMiLCJuYW1lIiwiZ3JvdXBzIiwidGl0bGUiLCJhbGxvd2VkQ29udGVudCIsImJvZHlJZCIsInRlbXBsYXRlc19yZXBsYWNlQ29udGVudCIsImVudGVyTW9kZSIsImZvcmNlRW50ZXJNb2RlIiwiZm9ybWF0X3RhZ3MiLCJyZW1vdmVQbHVnaW5zIiwicmVtb3ZlQnV0dG9ucyIsIm1pbmltdW1DaGFuZ2VNaWxsaXNlY29uZHMiLCJvbkNvbXBvbmVudENoYW5nZWQiLCJjYWxsIiwib25Db250YWluZXJDaGFuZ2VkIiwib25Db250ZW50Q2hhbmdlZCIsImVkaXRvciIsImNrZWRpdG9yIiwib25Db21wb25lbnRSZWFkeSIsImlkIiwiaW5zdGFuY2VzIiwiZGVzdHJveSIsInZpZGVvIiwiaXMiLCJidG5WaWRlb0ZpbGVJbnB1dCIsInJlbW92ZVByb3AiLCJsb29wVG9nZ2xlIiwiY3VycmVudFdpZHRoIiwicmVwbGFjZSIsImN1cnJlbnRSYXRpbyIsInZpZGVvV2lkdGgiLCJ2aW1lb1JlZ2V4IiwibWF0Y2giLCJjaGtBdXRvcGxheSIsImVtYmVkSXRlbSIsImN1cnJlbnRVcmwiLCJuZXdVcmwiLCJpbmRleE9m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bUYsR0FBRyxHQUFHZ0UsU0FBUyxDQUFDOUgsSUFBVixDQUFlLEtBQWYsQ0FBVjtBQUNBNkgsZUFBVyxDQUFDckMsSUFBWixDQUFpQixTQUFqQixFQUE0QjFCLEdBQUcsQ0FBQ21FLE9BQUosQ0FBWSxZQUFaLE1BQThCLENBQUMsQ0FBM0Q7QUFDQztBQXRFK0IsQ0FBaEMsQzs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJqcy9rZWRpdG9yLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJDS0VESVRPUlwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIktFZGl0b3JcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiQ0tFRElUT1JcIiwgXCJqUXVlcnlcIiwgXCJLRWRpdG9yXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBmYWN0b3J5KHJlcXVpcmUoXCJDS0VESVRPUlwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIktFZGl0b3JcIikpIDogZmFjdG9yeShyb290W1wiQ0tFRElUT1JcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJLRWRpdG9yXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NrZWRpdG9yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa2VkaXRvcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tcG9uZW50cy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtZm9ybS5qcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3ItY29tcG9uZW50LWZvcm0ubGVzcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtZ29vZ2xlbWFwLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdGV4dC5qcyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2tlZGl0b3ItY29tcG9uZW50LXRleHQubGVzcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdmlkZW8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC15b3V0dWJlLmpzJztcciIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2F1ZGlvJ10gPSB7XHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdnZXRDb250ZW50IFwiYXVkaW9cIiBjb21wb25lbnQsIGNvbXBvbmVudCcpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgYXVkaW8gPSBjb21wb25lbnRDb250ZW50LmZpbmQoJ2F1ZGlvJyk7XHJhdWRpby51bndyYXAoKTtccnJldHVybiBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ0F1ZGlvIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJhdWRpb1wiIHNldHRpbmdzJywgZm9ybSk7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgICA8bGFiZWwgZm9yPVwiYXVkaW9GaWxlSW5wdXRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkF1ZGlvIGZpbGU8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1ZGlvLXRvb2xiYXJcIj4nICtccicgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4tYXVkaW9GaWxlSW5wdXQgYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtdXBsb2FkXCI+PC9pPjwvYT4nICtccicgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImF1ZGlvRmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiAvPicgK1xyJyAgICAgICAgICAgICA8L2Rpdj4nICtccicgICAgICAgICA8L2Rpdj4nICtccicgICAgIDwvZGl2PicgK1xyJyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgICA8bGFiZWwgZm9yPVwiYXVkaW8tYXV0b3BsYXlcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImF1ZGlvLWF1dG9wbGF5XCIgLz4nICtccicgICAgICAgICA8L2Rpdj4nICtccicgICAgIDwvZGl2PicgK1xyJyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgICA8bGFiZWwgZm9yPVwiYXVkaW8tc2hvd2NvbnRyb2xzXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TaG93IENvbnRyb2xzPC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cImF1ZGlvLXNob3djb250cm9sc1wiIGNoZWNrZWQgLz4nICtccicgICAgICAgICA8L2Rpdj4nICtccicgICAgIDwvZGl2PicgK1xyJyAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgICA8bGFiZWwgZm9yPVwiYXVkaW8td2lkdGhcIiBjbGFzcz1cImNvbC1zbS0xMlwiPldpZHRoICglKTwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwiYXVkaW8td2lkdGhcIiBtaW49XCIyMFwiIG1heD1cIjEwMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIxMDBcIiAvPicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJhdWRpb1wiIGNvbXBvbmVudCcsIGZvcm0sIGNvbXBvbmVudCk7XHJsZXQgb3B0aW9ucyA9IGtlZGl0b3Iub3B0aW9ucztccmxldCBhdWRpbyA9IGNvbXBvbmVudC5maW5kKCdhdWRpbycpO1xybGV0IGZpbGVJbnB1dCA9IGZvcm0uZmluZCgnI2F1ZGlvRmlsZUlucHV0Jyk7XHJsZXQgYnRuQXVkaW9GaWxlSW5wdXQgPSBmb3JtLmZpbmQoJy5idG4tYXVkaW9GaWxlSW5wdXQnKTtccmJ0bkF1ZGlvRmlsZUlucHV0Lm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyZmlsZUlucHV0LnRyaWdnZXIoJ2NsaWNrJyk7XHJ9KTtccmZpbGVJbnB1dC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJpZiAoL2F1ZGlvLy50ZXN0KGZpbGUudHlwZSkpIHtcci8vIFRvZG86IFVwbG9hZCB0byB5b3VyIHNlcnZlciA6KVxyYXVkaW8uYXR0cignc3JjJywgVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJhdWRpby5sb2FkKGZ1bmN0aW9uICgpIHtccmtlZGl0b3Iuc2hvd1NldHRpbmdQYW5lbChjb21wb25lbnQsIG9wdGlvbnMpO1xyfSk7XHJ9IGVsc2Uge1xyYWxlcnQoJ1lvdXIgc2VsZWN0ZWQgZmlsZSBpcyBub3QgYW4gYXVkaW8gZmlsZSEnKTtccn1ccn0pO1xybGV0IGF1dG9wbGF5VG9nZ2xlID0gZm9ybS5maW5kKCcjYXVkaW8tYXV0b3BsYXknKTtccmF1dG9wbGF5VG9nZ2xlLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyaWYgKHRoaXMuY2hlY2tlZCkge1xyYXVkaW8uYXR0cignYXV0b3BsYXknLCAnYXV0b3BsYXknKTtccn0gZWxzZSB7XHJhdWRpby5yZW1vdmVBdHRyKCdhdXRvcGxheScpO1xyfVxyfSk7XHJsZXQgc2hvd2NvbnRyb2xzVG9nZ2xlID0gZm9ybS5maW5kKCcjYXVkaW8tc2hvd2NvbnRyb2xzJyk7XHJzaG93Y29udHJvbHNUb2dnbGUub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJpZiAodGhpcy5jaGVja2VkKSB7XHJhdWRpby5hdHRyKCdjb250cm9scycsICdjb250cm9scycpO1xyfSBlbHNlIHtccmF1ZGlvLnJlbW92ZUF0dHIoJ2NvbnRyb2xzJyk7XHJ9XHJ9KTtccmxldCBhdWRpb1dpZHRoID0gZm9ybS5maW5kKCcjYXVkaW8td2lkdGgnKTtccmF1ZGlvV2lkdGgub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyYXVkaW8uY3NzKCd3aWR0aCcsIHRoaXMudmFsdWUgKyAnJScpO1xyfSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2Zvcm0nXSA9IHtccmluaXRGb3JtQnVpbGRlcjogZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50JykucHJlcGVuZChccic8cCBjbGFzcz1cImZvcm0tYnVpbGRlci10b29sc1wiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+JyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByZXZpZXctZm9ybVwiPlByZXZpZXcgZm9ybTwvYT4gJyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLWVkaXQtZm9ybSBkaXNhYmxlZFwiPkVkaXQgZm9ybTwvYT4nICtccic8L3A+J1xyKTtccmxldCBidG5FZGl0Rm9ybSA9IGNvbXBvbmVudC5maW5kKCcuYnRuLWVkaXQtZm9ybScpO1xybGV0IGJ0blByZXZpZXdGb3JtID0gY29tcG9uZW50LmZpbmQoJy5idG4tcHJldmlldy1mb3JtJyk7XHJmb3JtQnVpbGRlckFyZWEuZm9ybUJ1aWxkZXIoe1xyZGlzYWJsZUluamVjdGVkU3R5bGU6IHRydWUsXHJzaG93QWN0aW9uQnV0dG9uczogZmFsc2UsXHJkYXRhVHlwZTogJ2pzb24nLFxyZm9ybURhdGE6IGZvcm1EYXRhLmh0bWwoKSxccmRpc2FibGVGaWVsZHM6IFtccidhdXRvY29tcGxldGUnLFxyJ3BhcmFncmFwaCcsXHInaGVhZGVyJ1xyXSxccmRpc2FibGVkQXR0cnM6IFsnYWNjZXNzJ10sXHJ0eXBlVXNlckRpc2FibGVkQXR0cnM6IHtccidjaGVja2JveC1ncm91cCc6IFtccid0b2dnbGUnLFxyJ2lubGluZSdccl1ccn1ccn0pO1xyYnRuRWRpdEZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmlmICghYnRuRWRpdEZvcm0uaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtccmZvcm1CdWlsZGVyQXJlYS5zaG93KCk7XHJmb3JtQ29udGVudC5oaWRlKCk7XHJidG5FZGl0Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccmJ0blByZXZpZXdGb3JtLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyfVxyfSk7XHJidG5QcmV2aWV3Rm9ybS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyaWYgKCFidG5QcmV2aWV3Rm9ybS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyc2VsZi5yZW5kZXJGb3JtKGNvbXBvbmVudCk7XHJmb3JtQnVpbGRlckFyZWEuaGlkZSgpO1xyZm9ybUNvbnRlbnQuc2hvdygpO1xyYnRuRWRpdEZvcm0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJidG5QcmV2aWV3Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccn1ccn0pO1xyfSxccnJlbmRlckZvcm06IGZ1bmN0aW9uIChjb21wb25lbnQsIGZvcm1CdWlsZGVyKSB7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyaWYgKCFmb3JtQnVpbGRlcikge1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJ9XHJmb3JtQ29udGVudC5mb3JtUmVuZGVyKHtccmRhdGFUeXBlOiAnanNvbicsXHJmb3JtRGF0YTogZm9ybUJ1aWxkZXIuYWN0aW9ucy5nZXREYXRhKCdqc29uJylccn0pO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWhvcml6b250YWwnKSkge1xyZm9ybUNvbnRlbnQuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGRpdiA9ICQodGhpcyk7XHJsZXQgZGF0YUdyaWQgPSBmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04JztccmRhdGFHcmlkID0gZGF0YUdyaWQuc3BsaXQoJy0nKTtccmlmIChkaXYuYXR0cignY2xhc3MnKSkge1xyaWYgKGRpdi5oYXNDbGFzcygnZmItYnV0dG9uJykpIHtccmRpdi5maW5kKCdidXR0b24nKS53cmFwKCc8ZGl2IGNsYXNzPVwiY29sLXNtLScgKyBkYXRhR3JpZFsxXSArICcgY29sLXNtLW9mZnNldC0nICsgZGF0YUdyaWRbMF0gKyAnXCI+PC9kaXY+Jyk7XHJ9IGVsc2Uge1xybGV0IGxhYmVsID0gZGl2LmNoaWxkcmVuKCdsYWJlbCcpO1xybGV0IGlucHV0ID0gZGl2LmNoaWxkcmVuKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xybGV0IHN1YkRpdiA9IGRpdi5jaGlsZHJlbignZGl2Jyk7XHJsYWJlbC5hZGRDbGFzcygnY29udHJvbC1sYWJlbCBjb2wtc20tJyArIGRhdGFHcmlkWzBdKTtccmlmIChzdWJEaXYubGVuZ3RoID4gMCkge1xyc3ViRGl2LmFkZENsYXNzKCdjb2wtc20tJyArIGRhdGFHcmlkWzFdKTtccn0gZWxzZSB7XHJpbnB1dC5hZGRDbGFzcygnZm9ybS1jb250cm9sJykud3JhcCgnPGRpdiBjbGFzcz1cImNvbC1zbS0nICsgZGF0YUdyaWRbMV0gKyAnXCI+PC9kaXY+Jyk7XHJ9XHJ9XHJ9XHJ9KTtccn1ccn0sXHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGZvcm1CdWlsZGVyID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJpZiAoZm9ybURhdGEubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZGF0YVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1wiPjwvZGl2PicpXHJ9XHJpZiAoZm9ybUNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGZvcm0gY2xhc3M9XCJmb3JtLWNvbnRlbnRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcIj48L2Zvcm0+Jylccn0gZWxzZSB7XHJmb3JtQ29udGVudC5oaWRlKClccn1ccmlmIChmb3JtQnVpbGRlci5sZW5ndGggPT09IDApIHtccmZvcm1CdWlsZGVyID0gJCgnPGRpdiBjbGFzcz1cImZvcm0tYnVpbGRlci1hcmVhIGNsZWFyZml4XCI+PC9kaXY+Jyk7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZChmb3JtQnVpbGRlcik7XHJ9XHJ0aGlzLmluaXRGb3JtQnVpbGRlcihjb21wb25lbnQpO1xyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJmb3JtXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZm9ybURhdGEgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tZGF0YScpO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9ICQoJyMnICsgY29tcG9uZW50LmF0dHIoJ2lkJykpLmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50LCBmb3JtQnVpbGRlcik7XHJmb3JtRGF0YS5odG1sKGZvcm1CdWlsZGVyLmFjdGlvbnMuZ2V0RGF0YSgnanNvbicpKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEsIC5mb3JtLWJ1aWxkZXItdG9vbHMnKS5yZW1vdmUoKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jykuc2hvdygpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnRm9ybSBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJmb3JtXCIgY29tcG9uZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJmb3JtLmh0bWwoXHInPGRpdiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QWN0aW9uPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0eHQtZm9ybS1hY3Rpb25cIiAvPicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TWV0aG9kPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1tZXRob2RcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdldFwiPkdldDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9zdFwiPlBvc3Q8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1dFwiPlB1dDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+RGVsZXRlPC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5FbmN0eXBlPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1lbmN0eXBlXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0L3BsYWluXCI+dGV4dC9wbGFpbjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPm11bHRpcGFydC9mb3JtLWRhdGE8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiPmFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TGF5b3V0PC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1sYXlvdXRcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vcm1hbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1ob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1pbmxpbmVcIj5JbmxpbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2VsZWN0LWdyaWQtd3JhcHBlclwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+R3JpZCBzZXR0aW5nPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1ncmlkXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyLTEwXCI+Y29sLTIgY29sLTEwPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzLTlcIj5jb2wtMyBjb2wtOTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC04XCI+Y29sLTQgY29sLTg8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUtN1wiPmNvbC01IGNvbC03PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2LTZcIj5jb2wtNiBjb2wtNjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImhlbHAtYmxvY2tcIj5UaGlzIHNldHRpbmcgaXMgZm9yIHdpZHRoIG9mIGxhYmVsIGFuZCBjb250cm9sIHdpdGggbnVtYmVyIG9mIGNvbHMgYXMgdW5pdDwvc21hbGw+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInPC9kaXY+J1xyKTtccmZvcm0uZmluZCgnLnR4dC1mb3JtLWFjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGNvbXBvbmVudCA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZW5jdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtbGF5b3V0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5yZW1vdmVDbGFzcygnZm9ybS1pbmxpbmUgZm9ybS1ob3Jpem9udGFsJyk7XHJpZiAodGhpcy52YWx1ZSkge1xyZm9ybUNvbnRlbnQuYWRkQ2xhc3ModGhpcy52YWx1ZSk7XHJ9XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCB0aGlzLnZhbHVlID09PSAnZm9ybS1ob3Jpem9udGFsJyA/ICdibG9jaycgOiAnbm9uZScpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZGF0YS1ncmlkJywgdGhpcy52YWx1ZSk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGxheW91dCA9ICcnO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWlubGluZScpKSB7XHJsYXlvdXQgPSAnZm9ybS1pbmxpbmUnO1xyfSBlbHNlIGlmIChmb3JtQ29udGVudC5oYXNDbGFzcygnZm9ybS1ob3Jpem9udGFsJykpIHtccmxheW91dCA9ICdmb3JtLWhvcml6b250YWwnO1xyfVxyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykudmFsKGZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicpIHx8ICcnKTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignbWV0aG9kJykgfHwgJ2dldCcpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWVuY3R5cGUnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScpKTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS52YWwobGF5b3V0KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCBsYXlvdXQgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLnZhbChmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04Jyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2dvb2dsZW1hcCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcImdvb2dsZW1hcFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnR29vZ2xlIE1hcCBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJnb29nbGVtYXBcIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi1nb29nbGVtYXAtZWRpdFwiPlVwZGF0ZSBNYXA8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXNwZWN0IFJhdGlvPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtZWRpdCcpO1xyYnRuRWRpdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGlucHV0RGF0YSA9IHByb21wdCgnUGxlYXNlIGVudGVyIEdvb2dsZSBNYXAgZW1iZWQgY29kZSBpbiBoZXJlOicpO1xybGV0IGlmcmFtZSA9ICQoaW5wdXREYXRhKTtccmxldCBzcmMgPSBpZnJhbWUuYXR0cignc3JjJyk7XHJpZiAoaWZyYW1lLmxlbmd0aCA+IDAgJiYgc3JjICYmIHNyYy5sZW5ndGggPiAwKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgc3JjKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBHb29nbGUgTWFwIGVtYmVkIGNvZGUgaXMgaW52YWxpZCEnKTtccn1ccn0pO1xybGV0IGJ0bjE2OSA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3Bob3RvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwicGhvdG9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgaW1nID0gY29tcG9uZW50Q29udGVudC5maW5kKCdpbWcnKTtccmltZy5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdQaG90byBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJwaG90b1wiIGNvbXBvbmVudCcpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIGlkPVwicGhvdG8tZWRpdFwiPkNoYW5nZSBQaG90bzwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLWFsaWduXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BbGlnbjwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1hbGlnblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+JyArXHInICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXN0eWxlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TdHlsZTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1zdHlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXJvdW5kZWRcIj5Sb3VuZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltZy1jaXJjbGVcIj5DaXJjbGU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXRodW1ibmFpbFwiPlRodW1ibmFpbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1yZXNwb25zaXZlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SZXNwb25zaXZlPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGhvdG8tcmVzcG9uc2l2ZVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGg8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvdG8td2lkdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkhlaWdodDwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IHBob3RvRWRpdCA9IGZvcm0uZmluZCgnI3Bob3RvLWVkaXQnKTtccmxldCBmaWxlSW5wdXQgPSBwaG90b0VkaXQubmV4dCgpO1xycGhvdG9FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJpZiAoL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHtccmxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xycmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xyaW1nLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJpbWcuY3NzKHtccndpZHRoOiAnJyxccmhlaWdodDogJydccn0pO1xyaW1nLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLCBvcHRpb25zKTtccn0pO1xyfSk7XHJyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzWzBdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBwaG90byEnKTtccn1ccn0pO1xybGV0IGlucHV0QWxpZ24gPSBmb3JtLmZpbmQoJyNwaG90by1hbGlnbicpO1xyaW5wdXRBbGlnbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHBhbmVsID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJwYW5lbC5jc3MoJ3RleHQtYWxpZ24nLCB0aGlzLnZhbHVlKTtccn0pO1xybGV0IGlucHV0UmVzcG9uc2l2ZSA9IGZvcm0uZmluZCgnI3Bob3RvLXJlc3BvbnNpdmUnKTtccmlucHV0UmVzcG9uc2l2ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCdpbWcnKVt0aGlzLmNoZWNrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2ltZy1yZXNwb25zaXZlJyk7XHJ9KTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJjYmJTdHlsZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IHZhbCA9IHRoaXMudmFsdWU7XHJpbWcucmVtb3ZlQ2xhc3MoJ2ltZy1yb3VuZGVkIGltZy1jaXJjbGUgaW1nLXRodW1ibmFpbCcpO1xyaWYgKHZhbCkge1xyaW1nLmFkZENsYXNzKHZhbCk7XHJ9XHJ9KTtccmxldCBpbnB1dFdpZHRoID0gZm9ybS5maW5kKCcjcGhvdG8td2lkdGgnKTtccmxldCBpbnB1dEhlaWdodCA9IGZvcm0uZmluZCgnI3Bob3RvLWhlaWdodCcpO1xyaW5wdXRXaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IG5ld1dpZHRoID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNlbGYucmF0aW8pO1xyaWYgKG5ld1dpZHRoIDw9IDApIHtccm5ld1dpZHRoID0gc2VsZi53aWR0aDtccm5ld0hlaWdodCA9IHNlbGYuaGVpZ2h0O1xydGhpcy52YWx1ZSA9IG5ld1dpZHRoO1xyfVxyaW1nLmNzcyh7XHInd2lkdGgnOiBuZXdXaWR0aCxccidoZWlnaHQnOiBuZXdIZWlnaHRccn0pO1xyaW5wdXRIZWlnaHQudmFsKG5ld0hlaWdodCk7XHJ9KTtccmlucHV0SGVpZ2h0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgbmV3SGVpZ2h0ID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3V2lkdGggPSBNYXRoLnJvdW5kKG5ld0hlaWdodCAqIHNlbGYucmF0aW8pO1xyaWYgKG5ld0hlaWdodCA8PSAwKSB7XHJuZXdXaWR0aCA9IHNlbGYud2lkdGg7XHJuZXdIZWlnaHQgPSBzZWxmLmhlaWdodDtccnRoaXMudmFsdWUgPSBuZXdIZWlnaHQ7XHJ9XHJpbWcuY3NzKHtccidoZWlnaHQnOiBuZXdIZWlnaHQsXHInd2lkdGgnOiBuZXdXaWR0aFxyfSk7XHJpbnB1dFdpZHRoLnZhbChuZXdXaWR0aCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInBob3RvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBpbnB1dEFsaWduID0gZm9ybS5maW5kKCcjcGhvdG8tYWxpZ24nKTtccmxldCBpbnB1dFJlc3BvbnNpdmUgPSBmb3JtLmZpbmQoJyNwaG90by1yZXNwb25zaXZlJyk7XHJsZXQgaW5wdXRXaWR0aCA9IGZvcm0uZmluZCgnI3Bob3RvLXdpZHRoJyk7XHJsZXQgaW5wdXRIZWlnaHQgPSBmb3JtLmZpbmQoJyNwaG90by1oZWlnaHQnKTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJsZXQgcGFuZWwgPSBjb21wb25lbnQuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJsZXQgaW1nID0gcGFuZWwuZmluZCgnaW1nJyk7XHJsZXQgYWxnaW4gPSBwYW5lbC5jc3MoJ3RleHQtYWxpZ24nKTtccmlmIChhbGdpbiAhPT0gJ3JpZ2h0JyB8fCBhbGdpbiAhPT0gJ2NlbnRlcicpIHtccmFsZ2luID0gJ2xlZnQnO1xyfVxyaWYgKGltZy5oYXNDbGFzcygnaW1nLXJvdW5kZWQnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctcm91bmRlZCcpO1xyfSBlbHNlIGlmIChpbWcuaGFzQ2xhc3MoJ2ltZy1jaXJjbGUnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctY2lyY2xlJyk7XHJ9IGVsc2UgaWYgKGltZy5oYXNDbGFzcygnaW1nLXRodW1ibmFpbCcpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy10aHVtYm5haWwnKTtccn0gZWxzZSB7XHJjYmJTdHlsZS52YWwoJycpO1xyfVxyaW5wdXRBbGlnbi52YWwoYWxnaW4pO1xyaW5wdXRSZXNwb25zaXZlLnByb3AoJ2NoZWNrZWQnLCBpbWcuaGFzQ2xhc3MoJ2ltZy1yZXNwb25zaXZlJykpO1xyaW5wdXRXaWR0aC52YWwoaW1nLndpZHRoKCkpO1xyaW5wdXRIZWlnaHQudmFsKGltZy5oZWlnaHQoKSk7XHIkKCc8aW1nIC8+JykuYXR0cignc3JjJywgaW1nLmF0dHIoJ3NyYycpKS5sb2FkKGZ1bmN0aW9uICgpIHtccnNlbGYucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJzZWxmLndpZHRoID0gdGhpcy53aWR0aDtccnNlbGYuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztcclxuaW1wb3J0IENLRURJVE9SIGZyb20gJ2NrZWRpdG9yJztcckNLRURJVE9SLmRpc2FibGVBdXRvSW5saW5lID0gdHJ1ZTtcci8vIFRleHQgY29tcG9uZW50XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5LRWRpdG9yLmNvbXBvbmVudHNbJ3RleHQnXSA9IHtccm9wdGlvbnM6IHtccnRvb2xiYXJHcm91cHM6IFtccntuYW1lOiAnZG9jdW1lbnQnLCBncm91cHM6IFsnbW9kZScsICdkb2N1bWVudCcsICdkb2N0b29scyddfSxccntuYW1lOiAnZWRpdGluZycsIGdyb3VwczogWydmaW5kJywgJ3NlbGVjdGlvbicsICdzcGVsbGNoZWNrZXInLCAnZWRpdGluZyddfSxccntuYW1lOiAnZm9ybXMnLCBncm91cHM6IFsnZm9ybXMnXX0sXHJ7bmFtZTogJ2Jhc2ljc3R5bGVzJywgZ3JvdXBzOiBbJ2Jhc2ljc3R5bGVzJywgJ2NsZWFudXAnXX0sXHJ7bmFtZTogJ3BhcmFncmFwaCcsIGdyb3VwczogWydsaXN0JywgJ2luZGVudCcsICdibG9ja3MnLCAnYWxpZ24nLCAnYmlkaScsICdwYXJhZ3JhcGgnXX0sXHJ7bmFtZTogJ2xpbmtzJywgZ3JvdXBzOiBbJ2xpbmtzJ119LFxye25hbWU6ICdpbnNlcnQnLCBncm91cHM6IFsnaW5zZXJ0J119LFxyJy8nLFxye25hbWU6ICdjbGlwYm9hcmQnLCBncm91cHM6IFsnY2xpcGJvYXJkJywgJ3VuZG8nXX0sXHJ7bmFtZTogJ3N0eWxlcycsIGdyb3VwczogWydzdHlsZXMnXX0sXHJ7bmFtZTogJ2NvbG9ycycsIGdyb3VwczogWydjb2xvcnMnXX0sXHJ7bmFtZTogJ3Rvb2xzJywgZ3JvdXBzOiBbJ3Rvb2xzJ119LFxye25hbWU6ICdvdGhlcnMnLCBncm91cHM6IFsnb3RoZXJzJ119LFxyXSxccnRpdGxlOiBmYWxzZSxccmFsbG93ZWRDb250ZW50OiB0cnVlLCAvLyBESVNBQkxFUyBBZHZhbmNlZCBDb250ZW50IEZpbHRlci4gVGhpcyBpcyBzbyB0ZW1wbGF0ZXMgd2l0aCBjbGFzc2VzOiBhbGxvd2VkIHRocm91Z2hccmJvZHlJZDogJ2VkaXRvcicsXHJ0ZW1wbGF0ZXNfcmVwbGFjZUNvbnRlbnQ6IGZhbHNlLFxyZW50ZXJNb2RlOiAnUCcsXHJmb3JjZUVudGVyTW9kZTogdHJ1ZSxccmZvcm1hdF90YWdzOiAncDtoMTtoMjtoMztoNDtoNTtoNicsXHJyZW1vdmVQbHVnaW5zOiAndGFibGUsbWFnaWNsaW5lLHRhYmxldG9vbHMnLFxycmVtb3ZlQnV0dG9uczogJ1NhdmUsTmV3UGFnZSxQcmV2aWV3LFByaW50LFRlbXBsYXRlcyxQYXN0ZVRleHQsUGFzdGVGcm9tV29yZCxGaW5kLFJlcGxhY2UsU2VsZWN0QWxsLFNjYXl0LEZvcm0sSGlkZGVuRmllbGQsSW1hZ2VCdXR0b24sQnV0dG9uLFNlbGVjdCxUZXh0YXJlYSxUZXh0RmllbGQsUmFkaW8sQ2hlY2tib3gsT3V0ZGVudCxJbmRlbnQsQmxvY2txdW90ZSxDcmVhdGVEaXYsTGFuZ3VhZ2UsVGFibGUsSG9yaXpvbnRhbFJ1bGUsU21pbGV5LFNwZWNpYWxDaGFyLFBhZ2VCcmVhayxJZnJhbWUsU3R5bGVzLEJHQ29sb3IsTWF4aW1pemUsQWJvdXQsU2hvd0Jsb2NrcyxCaWRpTHRyLEJpZGlSdGwsRmxhc2gsSW1hZ2UsU3Vic2NyaXB0LFN1cGVyc2NyaXB0LEFuY2hvcicsXHJtaW5pbXVtQ2hhbmdlTWlsbGlzZWNvbmRzOiAxMDBccn0sXHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidGV4dFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IGtlZGl0b3Iub3B0aW9ucztccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29tcG9uZW50Q29udGVudC5wcm9wKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtccmNvbXBvbmVudENvbnRlbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRDaGFuZ2VkLmNhbGwoY29udGVudEFyZWEsIGUsIGNvbXBvbmVudCk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlLCBjb250YWluZXIpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlKTtccn1ccn0pO1xybGV0IGVkaXRvciA9IGNvbXBvbmVudENvbnRlbnQuY2tlZGl0b3Ioc2VsZi5vcHRpb25zKS5lZGl0b3I7XHJlZGl0b3Iub24oJ2luc3RhbmNlUmVhZHknLCBmdW5jdGlvbiAoKSB7XHJmbG9nKCdDS0VkaXRvciBpcyByZWFkeScsIGNvbXBvbmVudCk7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRSZWFkeSA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFJlYWR5LmNhbGwoY29udGVudEFyZWEsIGNvbXBvbmVudCwgZWRpdG9yKTtccn1ccn0pO1xyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJ0ZXh0XCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgaWQgPSBjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyk7XHJsZXQgZWRpdG9yID0gQ0tFRElUT1IuaW5zdGFuY2VzW2lkXTtccmlmIChlZGl0b3IpIHtccnJldHVybiBlZGl0b3IuZ2V0RGF0YSgpO1xyfSBlbHNlIHtccnJldHVybiBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn1ccn0sXHJkZXN0cm95OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdkZXN0cm95IFwidGV4dFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWQgPSBjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKS5hdHRyKCdpZCcpO1xybGV0IGVkaXRvciA9IENLRURJVE9SLmluc3RhbmNlc1tpZF07XHJpZiAoZWRpdG9yKSB7XHJlZGl0b3IuZGVzdHJveSgpO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztcclxuY29uc3QgZmxvZyA9IEtFZGl0b3IubG9nO1xyS0VkaXRvci5jb21wb25lbnRzWyd2aWRlbyddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInZpZGVvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IHZpZGVvID0gY29tcG9uZW50Q29udGVudC5maW5kKCd2aWRlbycpO1xyaWYgKCF2aWRlby5wYXJlbnQoKS5pcygnLnZpZGVvLXdyYXBwZXInKSkge1xydmlkZW8ud3JhcCgnPGRpdiBjbGFzcz1cInZpZGVvLXdyYXBwZXJcIj48L2Rpdj4nKTtccn1ccn0sXHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdnZXRDb250ZW50IFwidmlkZW9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgdmlkZW8gPSBjb21wb25lbnRDb250ZW50LmZpbmQoJ3ZpZGVvJyk7XHJ2aWRlby51bndyYXAoKTtccnJldHVybiBjb21wb25lbnRDb250ZW50Lmh0bWwoKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1ZpZGVvIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ2aWRlb1wiIHNldHRpbmdzJywgZm9ybSk7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGZvcj1cInZpZGVvRmlsZUlucHV0XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5WaWRlbyBmaWxlPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlkZW8tdG9vbGJhclwiPicgK1xyJyAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLXZpZGVvRmlsZUlucHV0IGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L2E+JyArXHInICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInZpZGVvRmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj4nICtccicgICAgICAgICAgICA8L2Rpdj4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlby1hdXRvcGxheVwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInZpZGVvLWF1dG9wbGF5XCIgLz4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlby1sb29wXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5Mb29wPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aWRlby1sb29wXCIgLz4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlby1zaG93Y29udHJvbHNcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlNob3cgQ29udHJvbHM8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInZpZGVvLXNob3djb250cm9sc1wiIGNoZWNrZWQgLz4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlJhdGlvPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInZpZGVvLXJhZGlvXCIgY2xhc3M9XCJ2aWRlby1yYXRpb1wiIHZhbHVlPVwiNC8zXCIgY2hlY2tlZCAvPiA0OjMnICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidmlkZW8tcmFkaW9cIiBjbGFzcz1cInZpZGVvLXJhdGlvXCIgdmFsdWU9XCIxNi85XCIgLz4gMTY6OScgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGZvcj1cInZpZGVvLXdpZHRoXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5XaWR0aCAocHgpPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwidmlkZW8td2lkdGhcIiBtaW49XCIzMjBcIiBtYXg9XCIxOTIwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjMyMFwiIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJ2aWRlb1wiIHNldHRpbmdzJywgZm9ybSwgY29tcG9uZW50KTtccmxldCBvcHRpb25zID0ga2VkaXRvci5vcHRpb25zO1xybGV0IHZpZGVvID0gY29tcG9uZW50LmZpbmQoJ3ZpZGVvJyk7XHJsZXQgZmlsZUlucHV0ID0gZm9ybS5maW5kKCcjdmlkZW9GaWxlSW5wdXQnKTtccmxldCBidG5WaWRlb0ZpbGVJbnB1dCA9IGZvcm0uZmluZCgnLmJ0bi12aWRlb0ZpbGVJbnB1dCcpO1xyYnRuVmlkZW9GaWxlSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmZpbGVJbnB1dC50cmlnZ2VyKCdjbGljaycpO1xyfSk7XHJmaWxlSW5wdXQub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyaWYgKC92aWRlby8udGVzdChmaWxlLnR5cGUpKSB7XHIvLyBUb2RvOiBVcGxvYWQgdG8geW91ciBzZXJ2ZXIgOilccnZpZGVvLmF0dHIoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xydmlkZW8ubG9hZChmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLnNob3dTZXR0aW5nUGFuZWwoY29tcG9uZW50LCBvcHRpb25zKTtccn0pO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IGFuIHZpZGVvIGZpbGUhJyk7XHJ9XHJ9KTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnI3ZpZGVvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccnZpZGVvLnByb3AoJ2F1dG9wbGF5JywgdHJ1ZSk7XHJ9IGVsc2Uge1xydmlkZW8ucmVtb3ZlUHJvcCgnYXV0b3BsYXknKTtccn1ccn0pO1xybGV0IGxvb3BUb2dnbGUgPSBmb3JtLmZpbmQoJyN2aWRlby1sb29wJyk7XHJsb29wVG9nZ2xlLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyaWYgKHRoaXMuY2hlY2tlZCkge1xydmlkZW8ucHJvcCgnbG9vcCcsIHRydWUpO1xyfSBlbHNlIHtccnZpZGVvLnJlbW92ZVByb3AoJ2xvb3AnKTtccn1ccn0pO1xybGV0IHJhdGlvID0gZm9ybS5maW5kKCcudmlkZW8tcmF0aW8nKTtccnJhdGlvLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyaWYgKHRoaXMuY2hlY2tlZCkge1xybGV0IGN1cnJlbnRXaWR0aCA9IHZpZGVvLmNzcygnd2lkdGgnKSB8fCB2aWRlby5wcm9wKCd3aWR0aCcpO1xyY3VycmVudFdpZHRoID0gY3VycmVudFdpZHRoLnJlcGxhY2UoJ3B4JywgJycpO1xybGV0IGN1cnJlbnRSYXRpbyA9IHRoaXMudmFsdWUgPT09ICcxNi85JyA/IDE2IC8gOSA6IDQgLyAzO1xybGV0IGhlaWdodCA9IGN1cnJlbnRXaWR0aCAvIGN1cnJlbnRSYXRpbztccnZpZGVvLmNzcygnd2lkdGgnLCBjdXJyZW50V2lkdGggKyAncHgnKTtccnZpZGVvLmNzcygnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XHJ2aWRlby5yZW1vdmVQcm9wKCd3aWR0aCcpO1xydmlkZW8ucmVtb3ZlUHJvcCgnaGVpZ2h0Jyk7XHJ9XHJ9KTtccmxldCBzaG93Y29udHJvbHNUb2dnbGUgPSBmb3JtLmZpbmQoJyN2aWRlby1zaG93Y29udHJvbHMnKTtccnNob3djb250cm9sc1RvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccnZpZGVvLmF0dHIoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XHJ9IGVsc2Uge1xydmlkZW8ucmVtb3ZlQXR0cignY29udHJvbHMnKTtccn1ccn0pO1xybGV0IHZpZGVvV2lkdGggPSBmb3JtLmZpbmQoJyN2aWRlby13aWR0aCcpO1xydmlkZW9XaWR0aC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJ2aWRlby5jc3MoJ3dpZHRoJywgdGhpcy52YWx1ZSArICdweCcpO1xybGV0IGN1cnJlbnRSYXRpbyA9IGZvcm0uZmluZCgnLnZpZGVvLXJhdGlvOmNoZWNrZWQnKS52YWwoKSA9PT0gJzE2LzknID8gMTYgLyA5IDogNCAvIDM7XHJsZXQgaGVpZ2h0ID0gdGhpcy52YWx1ZSAvIGN1cnJlbnRSYXRpbztccnZpZGVvLmNzcygnaGVpZ2h0JywgaGVpZ2h0ICsgJ3B4Jyk7XHJ2aWRlby5yZW1vdmVQcm9wKCd3aWR0aCcpO1xydmlkZW8ucmVtb3ZlUHJvcCgnaGVpZ2h0Jyk7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sndmltZW8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ2aW1lb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnVmltZW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdFNldHRpbmdGb3JtIFwidmltZW9cIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi12aW1lby1lZGl0XCI+Q2hhbmdlIFZpZGVvPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmltZW8tYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXZpbWVvLTE2OVwiPjE2Ojk8L2J1dHRvbj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdmltZW8tNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi12aW1lby1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgVmltZW8gVVJMIGluIGhlcmU6Jyk7XHJsZXQgdmltZW9SZWdleCA9IC9odHRwcz86XFwvXFwvKD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xybGV0IG1hdGNoID0gaW5wdXREYXRhLm1hdGNoKHZpbWVvUmVnZXgpO1xyaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nICsgbWF0Y2hbMV0gKyAnP2J5bGluZT0wJnBvcnRyYWl0PTAmYmFkZ2U9MCcpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIFZpbWVvIFVSTCBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLXZpbWVvLTE2OScpO1xyYnRuMTY5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpO1xyfSk7XHJsZXQgYnRuNDMgPSBmb3JtLmZpbmQoJy5idG4tdmltZW8tNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN2aW1lby1hdXRvcGxheScpO1xyY2hrQXV0b3BsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IGVtYmVkSXRlbSA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjdXJyZW50VXJsID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xybGV0IG5ld1VybCA9IChjdXJyZW50VXJsLnJlcGxhY2UoLyhcXD8uKykrLywgJycpKSArICc/YnlsaW5lPTAmcG9ydHJhaXQ9MCZiYWRnZT0wJmF1dG9wbGF5PScgKyAoY2hrQXV0b3BsYXkuaXMoJzpjaGVja2VkJykgPyAxIDogMCk7XHJmbG9nKCdDdXJyZW50IHVybDogJyArIGN1cnJlbnRVcmwsICdOZXcgdXJsOiAnICsgbmV3VXJsKTtccmVtYmVkSXRlbS5hdHRyKCdzcmMnLCBuZXdVcmwpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJ2aW1lb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZW1iZWRJdGVtID0gY29tcG9uZW50LmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3ZpbWVvLWF1dG9wbGF5Jyk7XHJsZXQgc3JjID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xyY2hrQXV0b3BsYXkucHJvcCgnY2hlY2tlZCcsIHNyYy5pbmRleE9mKCdhdXRvcGxheT0xJykgIT09IC0xKTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sneW91dHViZSddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInlvdXR1YmVcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGlmcmFtZSA9IGNvbXBvbmVudC5maW5kKCdpZnJhbWUnKTtccmxldCB3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xya2VkaXRvci5pbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1lvdXR1YmUgU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdFNldHRpbmdGb3JtIFwieW91dHViZVwiIGNvbXBvbmVudCcpO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLXlvdXR1YmUtZWRpdFwiPkNoYW5nZSBWaWRlbzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInlvdXR1YmUtYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXlvdXR1YmUtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi15b3V0dWJlLTQzXCI+NDozPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IGJ0bkVkaXQgPSBmb3JtLmZpbmQoJy5idG4teW91dHViZS1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgWW91dHViZSBVUkwgaW4gaGVyZTonKTtccmxldCB5b3V0dWJlUmVnZXggPSAvXig/Omh0dHAoPzpzKT86XFwvXFwvKT8oPzp3d3dcXC4pPyg/Om1cXC4pPyg/OnlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyg/Oig/OndhdGNoKT9cXD8oPzouKiYpP3YoPzppKT89fCg/OmVtYmVkfHZ8dml8dXNlcilcXC8pKShbXlxcPyZcXFwiJz5dKykvO1xybGV0IG1hdGNoID0gaW5wdXREYXRhLm1hdGNoKHlvdXR1YmVSZWdleCk7XHJpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIG1hdGNoWzFdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBZb3V0dWJlIFVSTCBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLXlvdXR1YmUtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi15b3V0dWJlLTQzJyk7XHJidG40My5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKTtccn0pO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjeW91dHViZS1hdXRvcGxheScpO1xyY2hrQXV0b3BsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IGVtYmVkSXRlbSA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjdXJyZW50VXJsID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xybGV0IG5ld1VybCA9IChjdXJyZW50VXJsLnJlcGxhY2UoLyhcXD8uKykrLywgJycpKSArICc/YXV0b3BsYXk9JyArIChjaGtBdXRvcGxheS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwKTtccmZsb2coJ0N1cnJlbnQgdXJsOiAnICsgY3VycmVudFVybCwgJ05ldyB1cmw6ICcgKyBuZXdVcmwpO1xyZW1iZWRJdGVtLmF0dHIoJ3NyYycsIG5ld1VybCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInlvdXR1YmVcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGVtYmVkSXRlbSA9IGNvbXBvbmVudC5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN5b3V0dWJlLWF1dG9wbGF5Jyk7XHJsZXQgc3JjID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xyY2hrQXV0b3BsYXkucHJvcCgnY2hlY2tlZCcsIHNyYy5pbmRleE9mKCdhdXRvcGxheT0xJykgIT09IC0xKTtccn1cclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2NrZWRpdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rZWRpdG9yX187Il0sInNvdXJjZVJvb3QiOiIifQ==