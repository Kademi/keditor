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
      formBuilder = jquery__WEBPACK_IMPORTED_MODULE_1___default()('<div class="form-builder-area clearfix"></div>');
      componentContent.append(formBuilder);
    }

    this.initFormBuilder(component);
  },
  getContent: function getContent(component, keditor) {
    flog('getContent "form" component', component);
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
/* harmony import */ var InlineEditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! InlineEditor */ "InlineEditor");
/* harmony import */ var InlineEditor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(InlineEditor__WEBPACK_IMPORTED_MODULE_2__);


var flog = keditor__WEBPACK_IMPORTED_MODULE_1___default.a.log;

var instances = {}; // Text component
// ---------------------------------------------------------------------

keditor__WEBPACK_IMPORTED_MODULE_1___default.a.components['text'] = {
  init: function init(contentArea, container, component, keditor) {
    flog('init "text" component', component);
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
      flog('CKEditor is ready', component);
      instances[componentContent.attr('id')] = editor;

      if (typeof options.onComponentReady === 'function') {
        options.onComponentReady.call(keditor, component, editor);
      }
    })["catch"](function (error) {
      console.error(error);
    });
  },
  getContent: function getContent(component, keditor) {
    flog('getContent "text" component', component);
    var componentContent = component.find('.keditor-component-content');
    var editor = instances[componentContent.attr('id')];

    if (editor) {
      return editor.getData();
    } else {
      return componentContent.html();
    }
  },
  destroy: function destroy(component, keditor) {
    flog('destroy "text" component', component);
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
    flog('showSettingForm "video" settings', form, component);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3M/OGI5YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJJbmxpbmVFZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJLRWRpdG9yXCIiXSwibmFtZXMiOlsiZmxvZyIsIktFZGl0b3IiLCJsb2ciLCJjb21wb25lbnRzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudCIsImtlZGl0b3IiLCJjb21wb25lbnRDb250ZW50IiwiY2hpbGRyZW4iLCJhdWRpbyIsImZpbmQiLCJ1bndyYXAiLCJodG1sIiwic2V0dGluZ0VuYWJsZWQiLCJzZXR0aW5nVGl0bGUiLCJpbml0U2V0dGluZ0Zvcm0iLCJmb3JtIiwiYXBwZW5kIiwic2hvd1NldHRpbmdGb3JtIiwib3B0aW9ucyIsImZpbGVJbnB1dCIsImJ0bkF1ZGlvRmlsZUlucHV0Iiwib2ZmIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiZmlsZSIsImZpbGVzIiwidGVzdCIsInR5cGUiLCJhdHRyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsInNob3dTZXR0aW5nUGFuZWwiLCJhbGVydCIsImF1dG9wbGF5VG9nZ2xlIiwiY2hlY2tlZCIsInJlbW92ZUF0dHIiLCJzaG93Y29udHJvbHNUb2dnbGUiLCJhdWRpb1dpZHRoIiwiY3NzIiwidmFsdWUiLCJpbml0Rm9ybUJ1aWxkZXIiLCJzZWxmIiwiZm9ybUJ1aWxkZXJBcmVhIiwiZm9ybURhdGEiLCJmb3JtQ29udGVudCIsInByZXBlbmQiLCJidG5FZGl0Rm9ybSIsImJ0blByZXZpZXdGb3JtIiwiZm9ybUJ1aWxkZXIiLCJkaXNhYmxlSW5qZWN0ZWRTdHlsZSIsInNob3dBY3Rpb25CdXR0b25zIiwiZGF0YVR5cGUiLCJkaXNhYmxlRmllbGRzIiwiZGlzYWJsZWRBdHRycyIsInR5cGVVc2VyRGlzYWJsZWRBdHRycyIsImhhc0NsYXNzIiwic2hvdyIsImhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVuZGVyRm9ybSIsImRhdGEiLCJmb3JtUmVuZGVyIiwiYWN0aW9ucyIsImdldERhdGEiLCJlYWNoIiwiZGl2IiwiJCIsImRhdGFHcmlkIiwic3BsaXQiLCJ3cmFwIiwibGFiZWwiLCJpbnB1dCIsInN1YkRpdiIsImxlbmd0aCIsImluaXQiLCJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInJlbW92ZSIsImdldFNldHRpbmdDb21wb25lbnQiLCJsYXlvdXQiLCJ2YWwiLCJpZnJhbWUiLCJ3cmFwcGVyIiwicGFyZW50IiwiaW5pdElmcmFtZUNvdmVyIiwiYnRuRWRpdCIsImlucHV0RGF0YSIsInByb21wdCIsInNyYyIsImJ0bjE2OSIsImJ0bjQzIiwiaW1nIiwicGhvdG9FZGl0IiwibmV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWFkQXNEYXRhVVJMIiwiaW5wdXRBbGlnbiIsInBhbmVsIiwiaW5wdXRSZXNwb25zaXZlIiwiY2JiU3R5bGUiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsInJhdGlvIiwiYWxnaW4iLCJwcm9wIiwiaW5zdGFuY2VzIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2FsbCIsIm9uQ29udGFpbmVyQ2hhbmdlZCIsIm9uQ29udGVudENoYW5nZWQiLCJJbmxpbmVFZGl0b3IiLCJjcmVhdGUiLCJnZXQiLCJmb250RmFtaWx5IiwidGhlbiIsImVkaXRvciIsIm9uQ29tcG9uZW50UmVhZHkiLCJlcnJvciIsImNvbnNvbGUiLCJkZXN0cm95IiwiaWQiLCJ2aWRlbyIsImlzIiwibG9vcFRvZ2dsZSIsImNvbnRyb2xUb2dnbGUiLCJ2aWRlb1dpZHRoIiwiY3VycmVudFJhdGlvIiwiZmlsdGVyIiwidmltZW9SZWdleCIsIm1hdGNoIiwiY2hrQXV0b3BsYXkiLCJlbWJlZEl0ZW0iLCJjdXJyZW50VXJsIiwibmV3VXJsIiwicmVwbGFjZSIsImluZGV4T2YiLCJ5b3V0dWJlUmVnZXgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNQSxJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDOUJDLFlBQVUsRUFBRSxvQkFBVUMsU0FBVixFQUFxQkMsT0FBckIsRUFBOEI7QUFDMUNOLFFBQUksQ0FBQyx5Q0FBRCxDQUFKO0FBQ0EsUUFBSU8sZ0JBQWdCLEdBQUdGLFNBQVMsQ0FBQ0csUUFBVixDQUFtQiw0QkFBbkIsQ0FBdkI7QUFDQSxRQUFJQyxLQUFLLEdBQUdGLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQixPQUF0QixDQUFaO0FBQ0FELFNBQUssQ0FBQ0UsTUFBTjtBQUNBLFdBQU9KLGdCQUFnQixDQUFDSyxJQUFqQixFQUFQO0FBQ0MsR0FQNkI7QUFROUJDLGdCQUFjLEVBQUUsSUFSYztBQVM5QkMsY0FBWSxFQUFFLGdCQVRnQjtBQVU5QkMsaUJBQWUsRUFBRSx5QkFBVUMsSUFBVixFQUFnQlYsT0FBaEIsRUFBeUI7QUFDMUNOLFFBQUksQ0FBQyx1QkFBRCxFQUEwQmdCLElBQTFCLENBQUo7QUFDQUEsUUFBSSxDQUFDQyxNQUFMLENBQ0EsbUNBQ0EsK0JBREEsR0FFQSwyRUFGQSxHQUdBLGtDQUhBLEdBSUEsMENBSkEsR0FLQSxpSEFMQSxHQU1BLGtGQU5BLEdBT0EscUJBUEEsR0FRQSxpQkFSQSxHQVNBLGFBVEEsR0FVQSwrQkFWQSxHQVdBLHlFQVhBLEdBWUEsa0NBWkEsR0FhQSw0REFiQSxHQWNBLGlCQWRBLEdBZUEsYUFmQSxHQWdCQSwrQkFoQkEsR0FpQkEsa0ZBakJBLEdBa0JBLGtDQWxCQSxHQW1CQSx3RUFuQkEsR0FvQkEsaUJBcEJBLEdBcUJBLGFBckJBLEdBc0JBLCtCQXRCQSxHQXVCQSx1RUF2QkEsR0F3QkEsa0NBeEJBLEdBeUJBLDJHQXpCQSxHQTBCQSxpQkExQkEsR0EyQkEsYUEzQkEsR0E0QkEsU0E3QkE7QUErQkMsR0EzQzZCO0FBNEM5QkMsaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMsbUNBQUQsRUFBc0NnQixJQUF0QyxFQUE0Q1gsU0FBNUMsQ0FBSjtBQUNBLFFBQUljLE9BQU8sR0FBR2IsT0FBTyxDQUFDYSxPQUF0QjtBQUNBLFFBQUlWLEtBQUssR0FBR0osU0FBUyxDQUFDSyxJQUFWLENBQWUsT0FBZixDQUFaO0FBQ0EsUUFBSVUsU0FBUyxHQUFHSixJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFoQjtBQUNBLFFBQUlXLGlCQUFpQixHQUFHTCxJQUFJLENBQUNOLElBQUwsQ0FBVSxxQkFBVixDQUF4QjtBQUNBVyxxQkFBaUIsQ0FBQ0MsR0FBbEIsQ0FBc0IsT0FBdEIsRUFBK0JDLEVBQS9CLENBQWtDLE9BQWxDLEVBQTJDLFVBQVVDLENBQVYsRUFBYTtBQUN4REEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FMLGVBQVMsQ0FBQ00sT0FBVixDQUFrQixPQUFsQjtBQUNDLEtBSEQ7QUFJQU4sYUFBUyxDQUFDRSxHQUFWLENBQWMsUUFBZCxFQUF3QkMsRUFBeEIsQ0FBMkIsUUFBM0IsRUFBcUMsWUFBWTtBQUNqRCxVQUFJSSxJQUFJLEdBQUcsS0FBS0MsS0FBTCxDQUFXLENBQVgsQ0FBWDs7QUFDQSxVQUFJLFFBQVFDLElBQVIsQ0FBYUYsSUFBSSxDQUFDRyxJQUFsQixDQUFKLEVBQTZCO0FBQzdCO0FBQ0FyQixhQUFLLENBQUNzQixJQUFOLENBQVcsS0FBWCxFQUFrQkMsR0FBRyxDQUFDQyxlQUFKLENBQW9CTixJQUFwQixDQUFsQjtBQUNBbEIsYUFBSyxDQUFDeUIsSUFBTixDQUFXLFlBQVk7QUFDdkI1QixpQkFBTyxDQUFDNkIsZ0JBQVIsQ0FBeUI5QixTQUF6QixFQUFvQ2MsT0FBcEM7QUFDQyxTQUZEO0FBR0MsT0FORCxNQU1PO0FBQ1BpQixhQUFLLENBQUMsMENBQUQsQ0FBTDtBQUNDO0FBQ0EsS0FYRDtBQVlBLFFBQUlDLGNBQWMsR0FBR3JCLElBQUksQ0FBQ04sSUFBTCxDQUFVLGlCQUFWLENBQXJCO0FBQ0EyQixrQkFBYyxDQUFDZixHQUFmLENBQW1CLE9BQW5CLEVBQTRCQyxFQUE1QixDQUErQixPQUEvQixFQUF3QyxVQUFVQyxDQUFWLEVBQWE7QUFDckQsVUFBSSxLQUFLYyxPQUFULEVBQWtCO0FBQ2xCN0IsYUFBSyxDQUFDc0IsSUFBTixDQUFXLFVBQVgsRUFBdUIsVUFBdkI7QUFDQyxPQUZELE1BRU87QUFDUHRCLGFBQUssQ0FBQzhCLFVBQU4sQ0FBaUIsVUFBakI7QUFDQztBQUNBLEtBTkQ7QUFPQSxRQUFJQyxrQkFBa0IsR0FBR3hCLElBQUksQ0FBQ04sSUFBTCxDQUFVLHFCQUFWLENBQXpCO0FBQ0E4QixzQkFBa0IsQ0FBQ2xCLEdBQW5CLENBQXVCLE9BQXZCLEVBQWdDQyxFQUFoQyxDQUFtQyxPQUFuQyxFQUE0QyxVQUFVQyxDQUFWLEVBQWE7QUFDekQsVUFBSSxLQUFLYyxPQUFULEVBQWtCO0FBQ2xCN0IsYUFBSyxDQUFDc0IsSUFBTixDQUFXLFVBQVgsRUFBdUIsVUFBdkI7QUFDQyxPQUZELE1BRU87QUFDUHRCLGFBQUssQ0FBQzhCLFVBQU4sQ0FBaUIsVUFBakI7QUFDQztBQUNBLEtBTkQ7QUFPQSxRQUFJRSxVQUFVLEdBQUd6QixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWpCO0FBQ0ErQixjQUFVLENBQUNuQixHQUFYLENBQWUsUUFBZixFQUF5QkMsRUFBekIsQ0FBNEIsUUFBNUIsRUFBc0MsWUFBWTtBQUNsRGQsV0FBSyxDQUFDaUMsR0FBTixDQUFVLE9BQVYsRUFBbUIsS0FBS0MsS0FBTCxHQUFhLEdBQWhDO0FBQ0MsS0FGRDtBQUdDO0FBdEY2QixDQUE5QixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLElBQU0zQyxJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsTUFBbkIsSUFBNkI7QUFDN0J5QyxpQkFBZSxFQUFFLHlCQUFVdkMsU0FBVixFQUFxQjtBQUN0QyxRQUFJd0MsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJQyxlQUFlLEdBQUd6QyxTQUFTLENBQUNLLElBQVYsQ0FBZSxvQkFBZixDQUF0QjtBQUNBLFFBQUlxQyxRQUFRLEdBQUcxQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxZQUFmLENBQWY7QUFDQSxRQUFJc0MsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBTCxhQUFTLENBQUNLLElBQVYsQ0FBZSw0QkFBZixFQUE2Q3VDLE9BQTdDLENBQ0EsOERBQ0EsNEVBREEsR0FFQSwyRUFGQSxHQUdBLE1BSkE7QUFNQSxRQUFJQyxXQUFXLEdBQUc3QyxTQUFTLENBQUNLLElBQVYsQ0FBZSxnQkFBZixDQUFsQjtBQUNBLFFBQUl5QyxjQUFjLEdBQUc5QyxTQUFTLENBQUNLLElBQVYsQ0FBZSxtQkFBZixDQUFyQjtBQUNBb0MsbUJBQWUsQ0FBQ00sV0FBaEIsQ0FBNEI7QUFDNUJDLDBCQUFvQixFQUFFLElBRE07QUFFNUJDLHVCQUFpQixFQUFFLEtBRlM7QUFHNUJDLGNBQVEsRUFBRSxNQUhrQjtBQUk1QlIsY0FBUSxFQUFFQSxRQUFRLENBQUNuQyxJQUFULEVBSmtCO0FBSzVCNEMsbUJBQWEsRUFBRSxDQUNmLGNBRGUsRUFFZixXQUZlLEVBR2YsUUFIZSxDQUxhO0FBVTVCQyxtQkFBYSxFQUFFLENBQUMsUUFBRCxDQVZhO0FBVzVCQywyQkFBcUIsRUFBRTtBQUN2QiwwQkFBa0IsQ0FDbEIsUUFEa0IsRUFFbEIsUUFGa0I7QUFESztBQVhLLEtBQTVCO0FBa0JBUixlQUFXLENBQUMzQixFQUFaLENBQWUsT0FBZixFQUF3QixVQUFVQyxDQUFWLEVBQWE7QUFDckNBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxVQUFJLENBQUN5QixXQUFXLENBQUNTLFFBQVosQ0FBcUIsVUFBckIsQ0FBTCxFQUF1QztBQUN2Q2IsdUJBQWUsQ0FBQ2MsSUFBaEI7QUFDQVosbUJBQVcsQ0FBQ2EsSUFBWjtBQUNBWCxtQkFBVyxDQUFDWSxRQUFaLENBQXFCLFVBQXJCO0FBQ0FYLHNCQUFjLENBQUNZLFdBQWYsQ0FBMkIsVUFBM0I7QUFDQztBQUNBLEtBUkQ7QUFTQVosa0JBQWMsQ0FBQzVCLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBVUMsQ0FBVixFQUFhO0FBQ3hDQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsVUFBSSxDQUFDMEIsY0FBYyxDQUFDUSxRQUFmLENBQXdCLFVBQXhCLENBQUwsRUFBMEM7QUFDMUNkLFlBQUksQ0FBQ21CLFVBQUwsQ0FBZ0IzRCxTQUFoQjtBQUNBeUMsdUJBQWUsQ0FBQ2UsSUFBaEI7QUFDQWIsbUJBQVcsQ0FBQ1ksSUFBWjtBQUNBVixtQkFBVyxDQUFDYSxXQUFaLENBQXdCLFVBQXhCO0FBQ0FaLHNCQUFjLENBQUNXLFFBQWYsQ0FBd0IsVUFBeEI7QUFDQztBQUNBLEtBVEQ7QUFVQyxHQW5ENEI7QUFvRDdCRSxZQUFVLEVBQUUsb0JBQVUzRCxTQUFWLEVBQXFCK0MsV0FBckIsRUFBa0M7QUFDOUMsUUFBSUosV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjs7QUFDQSxRQUFJLENBQUMwQyxXQUFMLEVBQWtCO0FBQ2xCLFVBQUlOLGVBQWUsR0FBR3pDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLG9CQUFmLENBQXRCO0FBQ0EwQyxpQkFBVyxHQUFHTixlQUFlLENBQUNtQixJQUFoQixDQUFxQixhQUFyQixDQUFkO0FBQ0M7O0FBQ0RqQixlQUFXLENBQUNrQixVQUFaLENBQXVCO0FBQ3ZCWCxjQUFRLEVBQUUsTUFEYTtBQUV2QlIsY0FBUSxFQUFFSyxXQUFXLENBQUNlLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCO0FBRmEsS0FBdkI7O0FBSUEsUUFBSXBCLFdBQVcsQ0FBQ1csUUFBWixDQUFxQixpQkFBckIsQ0FBSixFQUE2QztBQUM3Q1gsaUJBQVcsQ0FBQ3hDLFFBQVosQ0FBcUIsS0FBckIsRUFBNEI2RCxJQUE1QixDQUFpQyxZQUFZO0FBQzdDLFlBQUlDLEdBQUcsR0FBR0MsNkNBQUMsQ0FBQyxJQUFELENBQVg7QUFDQSxZQUFJQyxRQUFRLEdBQUd4QixXQUFXLENBQUNqQixJQUFaLENBQWlCLFdBQWpCLEtBQWlDLEtBQWhEO0FBQ0F5QyxnQkFBUSxHQUFHQSxRQUFRLENBQUNDLEtBQVQsQ0FBZSxHQUFmLENBQVg7O0FBQ0EsWUFBSUgsR0FBRyxDQUFDdkMsSUFBSixDQUFTLE9BQVQsQ0FBSixFQUF1QjtBQUN2QixjQUFJdUMsR0FBRyxDQUFDWCxRQUFKLENBQWEsV0FBYixDQUFKLEVBQStCO0FBQy9CVyxlQUFHLENBQUM1RCxJQUFKLENBQVMsUUFBVCxFQUFtQmdFLElBQW5CLENBQXdCLHdCQUF3QkYsUUFBUSxDQUFDLENBQUQsQ0FBaEMsR0FBc0MsaUJBQXRDLEdBQTBEQSxRQUFRLENBQUMsQ0FBRCxDQUFsRSxHQUF3RSxVQUFoRztBQUNDLFdBRkQsTUFFTztBQUNQLGdCQUFJRyxLQUFLLEdBQUdMLEdBQUcsQ0FBQzlELFFBQUosQ0FBYSxPQUFiLENBQVo7QUFDQSxnQkFBSW9FLEtBQUssR0FBR04sR0FBRyxDQUFDOUQsUUFBSixDQUFhLHlCQUFiLENBQVo7QUFDQSxnQkFBSXFFLE1BQU0sR0FBR1AsR0FBRyxDQUFDOUQsUUFBSixDQUFhLEtBQWIsQ0FBYjtBQUNBbUUsaUJBQUssQ0FBQ2IsUUFBTixDQUFlLDBCQUEwQlUsUUFBUSxDQUFDLENBQUQsQ0FBakQ7O0FBQ0EsZ0JBQUlLLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUN2QkQsb0JBQU0sQ0FBQ2YsUUFBUCxDQUFnQixZQUFZVSxRQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNDLGFBRkQsTUFFTztBQUNQSSxtQkFBSyxDQUFDZCxRQUFOLENBQWUsY0FBZixFQUErQlksSUFBL0IsQ0FBb0Msd0JBQXdCRixRQUFRLENBQUMsQ0FBRCxDQUFoQyxHQUFzQyxVQUExRTtBQUNDO0FBQ0E7QUFDQTtBQUNBLE9BbkJEO0FBb0JDO0FBQ0EsR0FwRjRCO0FBcUY3Qk8sTUFBSSxFQUFFLGNBQVVDLFdBQVYsRUFBdUJDLFNBQXZCLEVBQWtDNUUsU0FBbEMsRUFBNkNDLE9BQTdDLEVBQXNEO0FBQzVETixRQUFJLENBQUMsdUJBQUQsRUFBMEJLLFNBQTFCLENBQUo7QUFDQSxRQUFJRSxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDSyxJQUFWLENBQWUsNEJBQWYsQ0FBdkI7QUFDQSxRQUFJMEMsV0FBVyxHQUFHL0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsb0JBQWYsQ0FBbEI7QUFDQSxRQUFJc0MsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBLFFBQUlxQyxRQUFRLEdBQUcxQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxZQUFmLENBQWY7O0FBQ0EsUUFBSXFDLFFBQVEsQ0FBQytCLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDM0J2RSxzQkFBZ0IsQ0FBQ1UsTUFBakIsQ0FBd0IsaUVBQXhCO0FBQ0M7O0FBQ0QsUUFBSStCLFdBQVcsQ0FBQzhCLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDOUJ2RSxzQkFBZ0IsQ0FBQ1UsTUFBakIsQ0FBd0Isc0VBQXhCO0FBQ0MsS0FGRCxNQUVPO0FBQ1ArQixpQkFBVyxDQUFDYSxJQUFaO0FBQ0M7O0FBQ0QsUUFBSVQsV0FBVyxDQUFDMEIsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUM5QjFCLGlCQUFXLEdBQUdtQiw2Q0FBQyxDQUFDLGdEQUFELENBQWY7QUFDQWhFLHNCQUFnQixDQUFDVSxNQUFqQixDQUF3Qm1DLFdBQXhCO0FBQ0M7O0FBQ0QsU0FBS1IsZUFBTCxDQUFxQnZDLFNBQXJCO0FBQ0MsR0F4RzRCO0FBeUc3QkQsWUFBVSxFQUFFLG9CQUFVQyxTQUFWLEVBQXFCQyxPQUFyQixFQUE4QjtBQUMxQ04sUUFBSSxDQUFDLDZCQUFELEVBQWdDSyxTQUFoQyxDQUFKO0FBQ0EsUUFBSXdDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSXRDLGdCQUFnQixHQUFHRixTQUFTLENBQUNLLElBQVYsQ0FBZSw0QkFBZixDQUF2QjtBQUNBLFFBQUlxQyxRQUFRLEdBQUcxQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxZQUFmLENBQWY7QUFDQSxRQUFJb0MsZUFBZSxHQUFHeUIsNkNBQUMsQ0FBQyxNQUFNbEUsU0FBUyxDQUFDMEIsSUFBVixDQUFlLElBQWYsQ0FBUCxDQUFELENBQThCckIsSUFBOUIsQ0FBbUMsb0JBQW5DLENBQXRCO0FBQ0EsUUFBSTBDLFdBQVcsR0FBR04sZUFBZSxDQUFDbUIsSUFBaEIsQ0FBcUIsYUFBckIsQ0FBbEI7QUFDQXBCLFFBQUksQ0FBQ21CLFVBQUwsQ0FBZ0IzRCxTQUFoQixFQUEyQitDLFdBQTNCO0FBQ0FMLFlBQVEsQ0FBQ25DLElBQVQsQ0FBY3dDLFdBQVcsQ0FBQ2UsT0FBWixDQUFvQkMsT0FBcEIsQ0FBNEIsTUFBNUIsQ0FBZDtBQUNBL0QsYUFBUyxDQUFDSyxJQUFWLENBQWUseUNBQWYsRUFBMER3RSxNQUExRDtBQUNBN0UsYUFBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixFQUFnQ2tELElBQWhDO0FBQ0EsV0FBT3JELGdCQUFnQixDQUFDSyxJQUFqQixFQUFQO0FBQ0MsR0FySDRCO0FBc0g3QkMsZ0JBQWMsRUFBRSxJQXRIYTtBQXVIN0JDLGNBQVksRUFBRSxlQXZIZTtBQXdIN0JDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsa0NBQUQsQ0FBSjtBQUNBLFFBQUk2QyxJQUFJLEdBQUcsSUFBWDtBQUNBN0IsUUFBSSxDQUFDSixJQUFMLENBQ0Esa0NBQ0EsOEJBREEsR0FFQSxpREFGQSxHQUdBLGlDQUhBLEdBSUEsd0VBSkEsR0FLQSxnQkFMQSxHQU1BLFlBTkEsR0FPQSw4QkFQQSxHQVFBLGlEQVJBLEdBU0EsaUNBVEEsR0FVQSx5REFWQSxHQVdBLGtEQVhBLEdBWUEsb0RBWkEsR0FhQSxrREFiQSxHQWNBLHdEQWRBLEdBZUEsdUJBZkEsR0FnQkEsZ0JBaEJBLEdBaUJBLFlBakJBLEdBa0JBLDhCQWxCQSxHQW1CQSxrREFuQkEsR0FvQkEsaUNBcEJBLEdBcUJBLDBEQXJCQSxHQXNCQSxnRUF0QkEsR0F1QkEsa0ZBdkJBLEdBd0JBLDhHQXhCQSxHQXlCQSx1QkF6QkEsR0EwQkEsZ0JBMUJBLEdBMkJBLFlBM0JBLEdBNEJBLDhCQTVCQSxHQTZCQSxpREE3QkEsR0E4QkEsaUNBOUJBLEdBK0JBLHlEQS9CQSxHQWdDQSxrREFoQ0EsR0FpQ0EscUVBakNBLEdBa0NBLDZEQWxDQSxHQW1DQSx1QkFuQ0EsR0FvQ0EsZ0JBcENBLEdBcUNBLFlBckNBLEdBc0NBLGtEQXRDQSxHQXVDQSx1REF2Q0EsR0F3Q0EsaUNBeENBLEdBeUNBLHVEQXpDQSxHQTBDQSw0REExQ0EsR0EyQ0EsMERBM0NBLEdBNENBLDBEQTVDQSxHQTZDQSwwREE3Q0EsR0E4Q0EsMERBOUNBLEdBK0NBLHVCQS9DQSxHQWdEQSwwSEFoREEsR0FpREEsZ0JBakRBLEdBa0RBLFlBbERBLEdBbURBLFFBcERBO0FBc0RBSSxRQUFJLENBQUNOLElBQUwsQ0FBVSxrQkFBVixFQUE4QmEsRUFBOUIsQ0FBaUMsUUFBakMsRUFBMkMsWUFBWTtBQUN2RCxVQUFJbEIsU0FBUyxHQUFHQyxPQUFPLENBQUM2RSxtQkFBUixFQUFoQjtBQUNBLFVBQUluQyxXQUFXLEdBQUczQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxlQUFmLENBQWxCO0FBQ0FzQyxpQkFBVyxDQUFDakIsSUFBWixDQUFpQixRQUFqQixFQUEyQixLQUFLWSxLQUFoQztBQUNDLEtBSkQ7QUFLQTNCLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGdCQUFWLEVBQTRCYSxFQUE1QixDQUErQixRQUEvQixFQUF5QyxZQUFZO0FBQ3JELFVBQUlsQixTQUFTLEdBQUdDLE9BQU8sQ0FBQzZFLG1CQUFSLEVBQWhCO0FBQ0EsVUFBSW5DLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7QUFDQXNDLGlCQUFXLENBQUNqQixJQUFaLENBQWlCLFFBQWpCLEVBQTJCLEtBQUtZLEtBQWhDO0FBQ0MsS0FKRDtBQUtBM0IsUUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsRUFBNkJhLEVBQTdCLENBQWdDLFFBQWhDLEVBQTBDLFlBQVk7QUFDdEQsVUFBSWxCLFNBQVMsR0FBR0MsT0FBTyxDQUFDNkUsbUJBQVIsRUFBaEI7QUFDQSxVQUFJbkMsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBc0MsaUJBQVcsQ0FBQ2pCLElBQVosQ0FBaUIsU0FBakIsRUFBNEIsS0FBS1ksS0FBakM7QUFDQyxLQUpEO0FBS0EzQixRQUFJLENBQUNOLElBQUwsQ0FBVSxnQkFBVixFQUE0QmEsRUFBNUIsQ0FBK0IsUUFBL0IsRUFBeUMsWUFBWTtBQUNyRCxVQUFJbEIsU0FBUyxHQUFHQyxPQUFPLENBQUM2RSxtQkFBUixFQUFoQjtBQUNBLFVBQUluQyxXQUFXLEdBQUczQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxlQUFmLENBQWxCO0FBQ0FzQyxpQkFBVyxDQUFDZSxXQUFaLENBQXdCLDZCQUF4Qjs7QUFDQSxVQUFJLEtBQUtwQixLQUFULEVBQWdCO0FBQ2hCSyxtQkFBVyxDQUFDYyxRQUFaLENBQXFCLEtBQUtuQixLQUExQjtBQUNDOztBQUNERSxVQUFJLENBQUNtQixVQUFMLENBQWdCM0QsU0FBaEI7QUFDQVcsVUFBSSxDQUFDTixJQUFMLENBQVUsc0JBQVYsRUFBa0NnQyxHQUFsQyxDQUFzQyxTQUF0QyxFQUFpRCxLQUFLQyxLQUFMLEtBQWUsaUJBQWYsR0FBbUMsT0FBbkMsR0FBNkMsTUFBOUY7QUFDQyxLQVREO0FBVUEzQixRQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLEVBQTBCYSxFQUExQixDQUE2QixRQUE3QixFQUF1QyxZQUFZO0FBQ25ELFVBQUlsQixTQUFTLEdBQUdDLE9BQU8sQ0FBQzZFLG1CQUFSLEVBQWhCO0FBQ0EsVUFBSW5DLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7QUFDQXNDLGlCQUFXLENBQUNqQixJQUFaLENBQWlCLFdBQWpCLEVBQThCLEtBQUtZLEtBQW5DO0FBQ0FFLFVBQUksQ0FBQ21CLFVBQUwsQ0FBZ0IzRCxTQUFoQjtBQUNDLEtBTEQ7QUFNQyxHQWhONEI7QUFpTjdCYSxpQkFBZSxFQUFFLHlCQUFVRixJQUFWLEVBQWdCWCxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDckROLFFBQUksQ0FBQyxrQ0FBRCxFQUFxQ0ssU0FBckMsQ0FBSjtBQUNBLFFBQUkyQyxXQUFXLEdBQUczQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxlQUFmLENBQWxCO0FBQ0EsUUFBSTBFLE1BQU0sR0FBRyxFQUFiOztBQUNBLFFBQUlwQyxXQUFXLENBQUNXLFFBQVosQ0FBcUIsYUFBckIsQ0FBSixFQUF5QztBQUN6Q3lCLFlBQU0sR0FBRyxhQUFUO0FBQ0MsS0FGRCxNQUVPLElBQUlwQyxXQUFXLENBQUNXLFFBQVosQ0FBcUIsaUJBQXJCLENBQUosRUFBNkM7QUFDcER5QixZQUFNLEdBQUcsaUJBQVQ7QUFDQzs7QUFDRHBFLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGtCQUFWLEVBQThCMkUsR0FBOUIsQ0FBa0NyQyxXQUFXLENBQUNqQixJQUFaLENBQWlCLFFBQWpCLEtBQThCLEVBQWhFO0FBQ0FmLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGdCQUFWLEVBQTRCMkUsR0FBNUIsQ0FBZ0NyQyxXQUFXLENBQUNqQixJQUFaLENBQWlCLFFBQWpCLEtBQThCLEtBQTlEO0FBQ0FmLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGlCQUFWLEVBQTZCMkUsR0FBN0IsQ0FBaUNyQyxXQUFXLENBQUNqQixJQUFaLENBQWlCLFNBQWpCLENBQWpDO0FBQ0FmLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGdCQUFWLEVBQTRCMkUsR0FBNUIsQ0FBZ0NELE1BQWhDO0FBQ0FwRSxRQUFJLENBQUNOLElBQUwsQ0FBVSxzQkFBVixFQUFrQ2dDLEdBQWxDLENBQXNDLFNBQXRDLEVBQWlEMEMsTUFBTSxLQUFLLGlCQUFYLEdBQStCLE9BQS9CLEdBQXlDLE1BQTFGO0FBQ0FwRSxRQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLEVBQTBCMkUsR0FBMUIsQ0FBOEJyQyxXQUFXLENBQUNqQixJQUFaLENBQWlCLFdBQWpCLEtBQWlDLEtBQS9EO0FBQ0M7QUFoTzRCLENBQTdCLEM7Ozs7Ozs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTS9CLElBQUksR0FBR0MsOENBQU8sQ0FBQ0MsR0FBckI7QUFDQUQsOENBQU8sQ0FBQ0UsVUFBUixDQUFtQixXQUFuQixJQUFrQztBQUNsQzRFLE1BQUksRUFBRSxjQUFVQyxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQzVFLFNBQWxDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RE4sUUFBSSxDQUFDLDRCQUFELEVBQStCSyxTQUEvQixDQUFKO0FBQ0EsUUFBSWlGLE1BQU0sR0FBR2pGLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLFFBQWYsQ0FBYjtBQUNBLFFBQUk2RSxPQUFPLEdBQUdELE1BQU0sQ0FBQ0UsTUFBUCxFQUFkO0FBQ0FsRixXQUFPLENBQUNtRixlQUFSLENBQXdCSCxNQUF4QixFQUFnQ0MsT0FBaEM7QUFDQyxHQU5pQztBQU9sQzFFLGdCQUFjLEVBQUUsSUFQa0I7QUFRbENDLGNBQVksRUFBRSxxQkFSb0I7QUFTbENDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsdUNBQUQsQ0FBSjtBQUNBZ0IsUUFBSSxDQUFDQyxNQUFMLENBQ0EsbUNBQ0EsNkJBREEsR0FFQSxnQ0FGQSxHQUdBLDJHQUhBLEdBSUEsZUFKQSxHQUtBLFdBTEEsR0FNQSw2QkFOQSxHQU9BLHNEQVBBLEdBUUEsZ0NBUkEsR0FTQSxpR0FUQSxHQVVBLCtGQVZBLEdBV0EsZUFYQSxHQVlBLFdBWkEsR0FhQSxTQWRBO0FBZ0JBLFFBQUl5RSxPQUFPLEdBQUcxRSxJQUFJLENBQUNOLElBQUwsQ0FBVSxxQkFBVixDQUFkO0FBQ0FnRixXQUFPLENBQUNuRSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDakNBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlrRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQyw2Q0FBRCxDQUF0QjtBQUNBLFVBQUlOLE1BQU0sR0FBR2YsNkNBQUMsQ0FBQ29CLFNBQUQsQ0FBZDtBQUNBLFVBQUlFLEdBQUcsR0FBR1AsTUFBTSxDQUFDdkQsSUFBUCxDQUFZLEtBQVosQ0FBVjs7QUFDQSxVQUFJdUQsTUFBTSxDQUFDUixNQUFQLEdBQWdCLENBQWhCLElBQXFCZSxHQUFyQixJQUE0QkEsR0FBRyxDQUFDZixNQUFKLEdBQWEsQ0FBN0MsRUFBZ0Q7QUFDaER4RSxlQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLHdCQUFuQyxFQUE2RHFCLElBQTdELENBQWtFLEtBQWxFLEVBQXlFOEQsR0FBekU7QUFDQyxPQUZELE1BRU87QUFDUHpELGFBQUssQ0FBQyx3Q0FBRCxDQUFMO0FBQ0M7QUFDQSxLQVZEO0FBV0EsUUFBSTBELE1BQU0sR0FBRzlFLElBQUksQ0FBQ04sSUFBTCxDQUFVLG9CQUFWLENBQWI7QUFDQW9GLFVBQU0sQ0FBQ3ZFLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVVDLENBQVYsRUFBYTtBQUNoQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FuQixhQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLG1CQUFuQyxFQUF3RHFELFdBQXhELENBQW9FLHVCQUFwRSxFQUE2RkQsUUFBN0YsQ0FBc0csd0JBQXRHO0FBQ0MsS0FIRDtBQUlBLFFBQUlpQyxLQUFLLEdBQUcvRSxJQUFJLENBQUNOLElBQUwsQ0FBVSxtQkFBVixDQUFaO0FBQ0FxRixTQUFLLENBQUN4RSxFQUFOLENBQVMsT0FBVCxFQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDL0JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx3QkFBcEUsRUFBOEZELFFBQTlGLENBQXVHLHVCQUF2RztBQUNDLEtBSEQ7QUFJQztBQWpEaUMsQ0FBbEMsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNOUQsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBRCw4Q0FBTyxDQUFDRSxVQUFSLENBQW1CLE9BQW5CLElBQThCO0FBQzlCNEUsTUFBSSxFQUFFLGNBQVVDLFdBQVYsRUFBdUJDLFNBQXZCLEVBQWtDNUUsU0FBbEMsRUFBNkNDLE9BQTdDLEVBQXNEO0FBQzVETixRQUFJLENBQUMsd0JBQUQsRUFBMkJLLFNBQTNCLENBQUo7QUFDQSxRQUFJRSxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDRyxRQUFWLENBQW1CLDRCQUFuQixDQUF2QjtBQUNBLFFBQUl3RixHQUFHLEdBQUd6RixnQkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0IsS0FBdEIsQ0FBVjtBQUNBc0YsT0FBRyxDQUFDdEQsR0FBSixDQUFRLFNBQVIsRUFBbUIsY0FBbkI7QUFDQyxHQU42QjtBQU85QjdCLGdCQUFjLEVBQUUsSUFQYztBQVE5QkMsY0FBWSxFQUFFLGdCQVJnQjtBQVM5QkMsaUJBQWUsRUFBRSx5QkFBVUMsSUFBVixFQUFnQlYsT0FBaEIsRUFBeUI7QUFDMUNOLFFBQUksQ0FBQyxtQ0FBRCxDQUFKO0FBQ0EsUUFBSTZDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSTFCLE9BQU8sR0FBR2IsT0FBTyxDQUFDYSxPQUF0QjtBQUNBSCxRQUFJLENBQUNDLE1BQUwsQ0FDQSxtQ0FDQSw2QkFEQSxHQUVBLGdDQUZBLEdBR0EsMEdBSEEsR0FJQSx3REFKQSxHQUtBLGVBTEEsR0FNQSxXQU5BLEdBT0EsNkJBUEEsR0FRQSxpRUFSQSxHQVNBLGdDQVRBLEdBVUEsMkRBVkEsR0FXQSxtREFYQSxHQVlBLHVEQVpBLEdBYUEscURBYkEsR0FjQSxzQkFkQSxHQWVBLGVBZkEsR0FnQkEsV0FoQkEsR0FpQkEsNkJBakJBLEdBa0JBLGlFQWxCQSxHQW1CQSxnQ0FuQkEsR0FvQkEsMkRBcEJBLEdBcUJBLCtDQXJCQSxHQXNCQSw2REF0QkEsR0F1QkEsMkRBdkJBLEdBd0JBLGlFQXhCQSxHQXlCQSxzQkF6QkEsR0EwQkEsZUExQkEsR0EyQkEsV0EzQkEsR0E0QkEsNkJBNUJBLEdBNkJBLDJFQTdCQSxHQThCQSxnQ0E5QkEsR0ErQkEsNERBL0JBLEdBZ0NBLGVBaENBLEdBaUNBLFdBakNBLEdBa0NBLDZCQWxDQSxHQW1DQSxpRUFuQ0EsR0FvQ0EsZ0NBcENBLEdBcUNBLDBFQXJDQSxHQXNDQSxlQXRDQSxHQXVDQSxXQXZDQSxHQXdDQSw2QkF4Q0EsR0F5Q0EsbUVBekNBLEdBMENBLGdDQTFDQSxHQTJDQSwyRUEzQ0EsR0E0Q0EsZUE1Q0EsR0E2Q0EsV0E3Q0EsR0E4Q0EsU0EvQ0E7QUFpREEsUUFBSWdGLFNBQVMsR0FBR2pGLElBQUksQ0FBQ04sSUFBTCxDQUFVLGFBQVYsQ0FBaEI7QUFDQSxRQUFJVSxTQUFTLEdBQUc2RSxTQUFTLENBQUNDLElBQVYsRUFBaEI7QUFDQUQsYUFBUyxDQUFDMUUsRUFBVixDQUFhLE9BQWIsRUFBc0IsVUFBVUMsQ0FBVixFQUFhO0FBQ25DQSxPQUFDLENBQUNDLGNBQUY7QUFDQUwsZUFBUyxDQUFDTSxPQUFWLENBQWtCLE9BQWxCO0FBQ0MsS0FIRDtBQUlBTixhQUFTLENBQUNHLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFlBQVk7QUFDbkMsVUFBSUksSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBVyxDQUFYLENBQVg7O0FBQ0EsVUFBSSxRQUFRQyxJQUFSLENBQWFGLElBQUksQ0FBQ0csSUFBbEIsQ0FBSixFQUE2QjtBQUM3QixZQUFJcUUsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUNBRCxjQUFNLENBQUNFLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFVBQVU3RSxDQUFWLEVBQWE7QUFDN0MsY0FBSXdFLEdBQUcsR0FBRzFGLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsS0FBbkMsQ0FBVjtBQUNBc0YsYUFBRyxDQUFDakUsSUFBSixDQUFTLEtBQVQsRUFBZ0JQLENBQUMsQ0FBQzhFLE1BQUYsQ0FBU0MsTUFBekI7QUFDQVAsYUFBRyxDQUFDdEQsR0FBSixDQUFRO0FBQ1I4RCxpQkFBSyxFQUFFLEVBREM7QUFFUkMsa0JBQU0sRUFBRTtBQUZBLFdBQVI7QUFJQVQsYUFBRyxDQUFDOUQsSUFBSixDQUFTLFlBQVk7QUFDckI1QixtQkFBTyxDQUFDNkIsZ0JBQVIsQ0FBeUI3QixPQUFPLENBQUM2RSxtQkFBUixFQUF6QixFQUF3RGhFLE9BQXhEO0FBQ0MsV0FGRDtBQUdDLFNBVkQ7QUFXQWdGLGNBQU0sQ0FBQ08sYUFBUCxDQUFxQixLQUFLOUUsS0FBTCxDQUFXLENBQVgsQ0FBckI7QUFDQyxPQWRELE1BY087QUFDUFEsYUFBSyxDQUFDLGtDQUFELENBQUw7QUFDQztBQUNBLEtBbkJEO0FBb0JBLFFBQUl1RSxVQUFVLEdBQUczRixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWpCO0FBQ0FpRyxjQUFVLENBQUNwRixFQUFYLENBQWMsUUFBZCxFQUF3QixZQUFZO0FBQ3BDLFVBQUlxRixLQUFLLEdBQUd0RyxPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLGNBQW5DLENBQVo7QUFDQWtHLFdBQUssQ0FBQ2xFLEdBQU4sQ0FBVSxZQUFWLEVBQXdCLEtBQUtDLEtBQTdCO0FBQ0MsS0FIRDtBQUlBLFFBQUlrRSxlQUFlLEdBQUc3RixJQUFJLENBQUNOLElBQUwsQ0FBVSxtQkFBVixDQUF0QjtBQUNBbUcsbUJBQWUsQ0FBQ3RGLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDeENqQixhQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLEtBQW5DLEVBQTBDLEtBQUs0QixPQUFMLEdBQWUsVUFBZixHQUE0QixhQUF0RSxFQUFxRixnQkFBckY7QUFDQyxLQUZEO0FBR0EsUUFBSXdFLFFBQVEsR0FBRzlGLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBZjtBQUNBb0csWUFBUSxDQUFDdkYsRUFBVCxDQUFZLFFBQVosRUFBc0IsWUFBWTtBQUNsQyxVQUFJeUUsR0FBRyxHQUFHMUYsT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxLQUFuQyxDQUFWO0FBQ0EsVUFBSTJFLEdBQUcsR0FBRyxLQUFLMUMsS0FBZjtBQUNBcUQsU0FBRyxDQUFDakMsV0FBSixDQUFnQixzQ0FBaEI7O0FBQ0EsVUFBSXNCLEdBQUosRUFBUztBQUNUVyxXQUFHLENBQUNsQyxRQUFKLENBQWF1QixHQUFiO0FBQ0M7QUFDQSxLQVBEO0FBUUEsUUFBSTBCLFVBQVUsR0FBRy9GLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBakI7QUFDQSxRQUFJc0csV0FBVyxHQUFHaEcsSUFBSSxDQUFDTixJQUFMLENBQVUsZUFBVixDQUFsQjtBQUNBcUcsY0FBVSxDQUFDeEYsRUFBWCxDQUFjLFFBQWQsRUFBd0IsWUFBWTtBQUNwQyxVQUFJeUUsR0FBRyxHQUFHMUYsT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxLQUFuQyxDQUFWO0FBQ0EsVUFBSXVHLFFBQVEsR0FBRyxDQUFDLEtBQUt0RSxLQUFyQjtBQUNBLFVBQUl1RSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxRQUFRLEdBQUdwRSxJQUFJLENBQUN3RSxLQUEzQixDQUFoQjs7QUFDQSxVQUFJSixRQUFRLElBQUksQ0FBaEIsRUFBbUI7QUFDbkJBLGdCQUFRLEdBQUdwRSxJQUFJLENBQUMyRCxLQUFoQjtBQUNBVSxpQkFBUyxHQUFHckUsSUFBSSxDQUFDNEQsTUFBakI7QUFDQSxhQUFLOUQsS0FBTCxHQUFhc0UsUUFBYjtBQUNDOztBQUNEakIsU0FBRyxDQUFDdEQsR0FBSixDQUFRO0FBQ1IsaUJBQVN1RSxRQUREO0FBRVIsa0JBQVVDO0FBRkYsT0FBUjtBQUlBRixpQkFBVyxDQUFDM0IsR0FBWixDQUFnQjZCLFNBQWhCO0FBQ0MsS0FkRDtBQWVBRixlQUFXLENBQUN6RixFQUFaLENBQWUsUUFBZixFQUF5QixZQUFZO0FBQ3JDLFVBQUl5RSxHQUFHLEdBQUcxRixPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLEtBQW5DLENBQVY7QUFDQSxVQUFJd0csU0FBUyxHQUFHLENBQUMsS0FBS3ZFLEtBQXRCO0FBQ0EsVUFBSXNFLFFBQVEsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdGLFNBQVMsR0FBR3JFLElBQUksQ0FBQ3dFLEtBQTVCLENBQWY7O0FBQ0EsVUFBSUgsU0FBUyxJQUFJLENBQWpCLEVBQW9CO0FBQ3BCRCxnQkFBUSxHQUFHcEUsSUFBSSxDQUFDMkQsS0FBaEI7QUFDQVUsaUJBQVMsR0FBR3JFLElBQUksQ0FBQzRELE1BQWpCO0FBQ0EsYUFBSzlELEtBQUwsR0FBYXVFLFNBQWI7QUFDQzs7QUFDRGxCLFNBQUcsQ0FBQ3RELEdBQUosQ0FBUTtBQUNSLGtCQUFVd0UsU0FERjtBQUVSLGlCQUFTRDtBQUZELE9BQVI7QUFJQUYsZ0JBQVUsQ0FBQzFCLEdBQVgsQ0FBZTRCLFFBQWY7QUFDQyxLQWREO0FBZUMsR0ExSTZCO0FBMkk5Qi9GLGlCQUFlLEVBQUUseUJBQVVGLElBQVYsRUFBZ0JYLFNBQWhCLEVBQTJCQyxPQUEzQixFQUFvQztBQUNyRE4sUUFBSSxDQUFDLG1DQUFELEVBQXNDSyxTQUF0QyxDQUFKO0FBQ0EsUUFBSXdDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSThELFVBQVUsR0FBRzNGLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBakI7QUFDQSxRQUFJbUcsZUFBZSxHQUFHN0YsSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBdEI7QUFDQSxRQUFJcUcsVUFBVSxHQUFHL0YsSUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixDQUFqQjtBQUNBLFFBQUlzRyxXQUFXLEdBQUdoRyxJQUFJLENBQUNOLElBQUwsQ0FBVSxlQUFWLENBQWxCO0FBQ0EsUUFBSW9HLFFBQVEsR0FBRzlGLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBZjtBQUNBLFFBQUlrRyxLQUFLLEdBQUd2RyxTQUFTLENBQUNLLElBQVYsQ0FBZSxjQUFmLENBQVo7QUFDQSxRQUFJc0YsR0FBRyxHQUFHWSxLQUFLLENBQUNsRyxJQUFOLENBQVcsS0FBWCxDQUFWO0FBQ0EsUUFBSTRHLEtBQUssR0FBR1YsS0FBSyxDQUFDbEUsR0FBTixDQUFVLFlBQVYsQ0FBWjs7QUFDQSxRQUFJNEUsS0FBSyxLQUFLLE9BQVYsSUFBcUJBLEtBQUssS0FBSyxRQUFuQyxFQUE2QztBQUM3Q0EsV0FBSyxHQUFHLE1BQVI7QUFDQzs7QUFDRCxRQUFJdEIsR0FBRyxDQUFDckMsUUFBSixDQUFhLGFBQWIsQ0FBSixFQUFpQztBQUNqQ21ELGNBQVEsQ0FBQ3pCLEdBQVQsQ0FBYSxhQUFiO0FBQ0MsS0FGRCxNQUVPLElBQUlXLEdBQUcsQ0FBQ3JDLFFBQUosQ0FBYSxZQUFiLENBQUosRUFBZ0M7QUFDdkNtRCxjQUFRLENBQUN6QixHQUFULENBQWEsWUFBYjtBQUNDLEtBRk0sTUFFQSxJQUFJVyxHQUFHLENBQUNyQyxRQUFKLENBQWEsZUFBYixDQUFKLEVBQW1DO0FBQzFDbUQsY0FBUSxDQUFDekIsR0FBVCxDQUFhLGVBQWI7QUFDQyxLQUZNLE1BRUE7QUFDUHlCLGNBQVEsQ0FBQ3pCLEdBQVQsQ0FBYSxFQUFiO0FBQ0M7O0FBQ0RzQixjQUFVLENBQUN0QixHQUFYLENBQWVpQyxLQUFmO0FBQ0FULG1CQUFlLENBQUNVLElBQWhCLENBQXFCLFNBQXJCLEVBQWdDdkIsR0FBRyxDQUFDckMsUUFBSixDQUFhLGdCQUFiLENBQWhDO0FBQ0FvRCxjQUFVLENBQUMxQixHQUFYLENBQWVXLEdBQUcsQ0FBQ1EsS0FBSixFQUFmO0FBQ0FRLGVBQVcsQ0FBQzNCLEdBQVosQ0FBZ0JXLEdBQUcsQ0FBQ1MsTUFBSixFQUFoQjtBQUNBbEMsaURBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYXhDLElBQWIsQ0FBa0IsS0FBbEIsRUFBeUJpRSxHQUFHLENBQUNqRSxJQUFKLENBQVMsS0FBVCxDQUF6QixFQUEwQ0csSUFBMUMsQ0FBK0MsWUFBWTtBQUMzRFcsVUFBSSxDQUFDd0UsS0FBTCxHQUFhLEtBQUtiLEtBQUwsR0FBYSxLQUFLQyxNQUEvQjtBQUNBNUQsVUFBSSxDQUFDMkQsS0FBTCxHQUFhLEtBQUtBLEtBQWxCO0FBQ0EzRCxVQUFJLENBQUM0RCxNQUFMLEdBQWMsS0FBS0EsTUFBbkI7QUFDQyxLQUpEO0FBS0M7QUEzSzZCLENBQTlCLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU16RyxJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0E7QUFDQSxJQUFNc0gsU0FBUyxHQUFHLEVBQWxCLEMsQ0FDQTtBQUNBOztBQUNBdkgsOENBQU8sQ0FBQ0UsVUFBUixDQUFtQixNQUFuQixJQUE2QjtBQUM3QjRFLE1BQUksRUFBRSxjQUFVQyxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQzVFLFNBQWxDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RE4sUUFBSSxDQUFDLHVCQUFELEVBQTBCSyxTQUExQixDQUFKO0FBQ0EsUUFBSWMsT0FBTyxHQUFHYixPQUFPLENBQUNhLE9BQXRCO0FBQ0EsUUFBSVosZ0JBQWdCLEdBQUdGLFNBQVMsQ0FBQ0csUUFBVixDQUFtQiw0QkFBbkIsQ0FBdkI7QUFDQUQsb0JBQWdCLENBQUNnSCxJQUFqQixDQUFzQixpQkFBdEIsRUFBeUMsSUFBekM7QUFDQWhILG9CQUFnQixDQUFDZ0IsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBVUMsQ0FBVixFQUFhO0FBQzFDLFVBQUksT0FBT0wsT0FBTyxDQUFDc0csa0JBQWYsS0FBc0MsVUFBMUMsRUFBc0Q7QUFDdER0RyxlQUFPLENBQUNzRyxrQkFBUixDQUEyQkMsSUFBM0IsQ0FBZ0MxQyxXQUFoQyxFQUE2Q3hELENBQTdDLEVBQWdEbkIsU0FBaEQ7QUFDQzs7QUFDRCxVQUFJLE9BQU9jLE9BQU8sQ0FBQ3dHLGtCQUFmLEtBQXNDLFVBQTFDLEVBQXNEO0FBQ3REeEcsZUFBTyxDQUFDd0csa0JBQVIsQ0FBMkJELElBQTNCLENBQWdDMUMsV0FBaEMsRUFBNkN4RCxDQUE3QyxFQUFnRHlELFNBQWhEO0FBQ0M7O0FBQ0QsVUFBSSxPQUFPOUQsT0FBTyxDQUFDeUcsZ0JBQWYsS0FBb0MsVUFBeEMsRUFBb0Q7QUFDcER6RyxlQUFPLENBQUN5RyxnQkFBUixDQUF5QkYsSUFBekIsQ0FBOEJwSCxPQUE5QixFQUF1Q2tCLENBQXZDLEVBQTBDd0QsV0FBMUM7QUFDQztBQUNBLEtBVkQ7QUFXQTZDLHVEQUFZLENBQ1hDLE1BREQsQ0FDUXZILGdCQUFnQixDQUFDd0gsR0FBakIsQ0FBcUIsQ0FBckIsQ0FEUixFQUNpQztBQUNqQ0MsZ0JBQVUsRUFBRTtBQUNaN0csZUFBTyxFQUFFLENBQ1QsU0FEUyxFQUVULDhCQUZTLEVBR1QsaUNBSFMsRUFJVCxnQkFKUyxFQUtULGdEQUxTLEVBTVQsNEJBTlMsRUFPVCwrQkFQUyxFQVFULHFDQVJTLEVBU1QsNkJBVFM7QUFERztBQURxQixLQURqQyxFQWdCQzhHLElBaEJELENBZ0JNLFVBQUFDLE1BQU0sRUFBSTtBQUNoQmxJLFVBQUksQ0FBQyxtQkFBRCxFQUFzQkssU0FBdEIsQ0FBSjtBQUNBbUgsZUFBUyxDQUFDakgsZ0JBQWdCLENBQUN3QixJQUFqQixDQUFzQixJQUF0QixDQUFELENBQVQsR0FBeUNtRyxNQUF6Qzs7QUFDQSxVQUFJLE9BQU8vRyxPQUFPLENBQUNnSCxnQkFBZixLQUFvQyxVQUF4QyxFQUFvRDtBQUNwRGhILGVBQU8sQ0FBQ2dILGdCQUFSLENBQXlCVCxJQUF6QixDQUE4QnBILE9BQTlCLEVBQXVDRCxTQUF2QyxFQUFrRDZILE1BQWxEO0FBQ0M7QUFDQSxLQXRCRCxXQXVCTyxVQUFBRSxLQUFLLEVBQUk7QUFDaEJDLGFBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0MsS0F6QkQ7QUEwQkMsR0EzQzRCO0FBNEM3QmhJLFlBQVUsRUFBRSxvQkFBVUMsU0FBVixFQUFxQkMsT0FBckIsRUFBOEI7QUFDMUNOLFFBQUksQ0FBQyw2QkFBRCxFQUFnQ0ssU0FBaEMsQ0FBSjtBQUNBLFFBQUlFLGdCQUFnQixHQUFHRixTQUFTLENBQUNLLElBQVYsQ0FBZSw0QkFBZixDQUF2QjtBQUNBLFFBQUl3SCxNQUFNLEdBQUdWLFNBQVMsQ0FBQ2pILGdCQUFnQixDQUFDd0IsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBRCxDQUF0Qjs7QUFDQSxRQUFJbUcsTUFBSixFQUFZO0FBQ1osYUFBT0EsTUFBTSxDQUFDOUQsT0FBUCxFQUFQO0FBQ0MsS0FGRCxNQUVPO0FBQ1AsYUFBTzdELGdCQUFnQixDQUFDSyxJQUFqQixFQUFQO0FBQ0M7QUFDQSxHQXJENEI7QUFzRDdCMEgsU0FBTyxFQUFFLGlCQUFVakksU0FBVixFQUFxQkMsT0FBckIsRUFBOEI7QUFDdkNOLFFBQUksQ0FBQywwQkFBRCxFQUE2QkssU0FBN0IsQ0FBSjtBQUNBLFFBQUlrSSxFQUFFLEdBQUdsSSxTQUFTLENBQUNLLElBQVYsQ0FBZSw0QkFBZixFQUE2Q3FCLElBQTdDLENBQWtELElBQWxELENBQVQ7QUFDQSxRQUFJbUcsTUFBTSxHQUFHVixTQUFTLENBQUNlLEVBQUQsQ0FBdEI7O0FBQ0EsUUFBSUwsTUFBSixFQUFZO0FBQ1pBLFlBQU0sQ0FBQ0ksT0FBUDtBQUNBLGFBQU9kLFNBQVMsQ0FBQ2UsRUFBRCxDQUFoQjtBQUNDO0FBQ0E7QUE5RDRCLENBQTdCLEM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTXZJLElBQUksR0FBR0MsOENBQU8sQ0FBQ0MsR0FBckI7QUFDQUQsOENBQU8sQ0FBQ0UsVUFBUixDQUFtQixPQUFuQixJQUE4QjtBQUM5QjRFLE1BQUksRUFBRSxjQUFVQyxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQzVFLFNBQWxDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RE4sUUFBSSxDQUFDLHdCQUFELEVBQTJCSyxTQUEzQixDQUFKO0FBQ0EsUUFBSUUsZ0JBQWdCLEdBQUdGLFNBQVMsQ0FBQ0csUUFBVixDQUFtQiw0QkFBbkIsQ0FBdkI7QUFDQSxRQUFJZ0ksS0FBSyxHQUFHakksZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCLE9BQXRCLENBQVo7O0FBQ0EsUUFBSSxDQUFDOEgsS0FBSyxDQUFDaEQsTUFBTixHQUFlaUQsRUFBZixDQUFrQixnQkFBbEIsQ0FBTCxFQUEwQztBQUMxQ0QsV0FBSyxDQUFDOUQsSUFBTixDQUFXLG1DQUFYO0FBQ0M7QUFDQSxHQVI2QjtBQVM5QnRFLFlBQVUsRUFBRSxvQkFBVUMsU0FBVixFQUFxQkMsT0FBckIsRUFBOEI7QUFDMUNOLFFBQUksQ0FBQyw4QkFBRCxFQUFpQ0ssU0FBakMsQ0FBSjtBQUNBLFFBQUlFLGdCQUFnQixHQUFHRixTQUFTLENBQUNHLFFBQVYsQ0FBbUIsNEJBQW5CLENBQXZCO0FBQ0EsUUFBSWdJLEtBQUssR0FBR2pJLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQixPQUF0QixDQUFaO0FBQ0E4SCxTQUFLLENBQUM3SCxNQUFOO0FBQ0EsV0FBT0osZ0JBQWdCLENBQUNLLElBQWpCLEVBQVA7QUFDQyxHQWY2QjtBQWdCOUJDLGdCQUFjLEVBQUUsSUFoQmM7QUFpQjlCQyxjQUFZLEVBQUUsZ0JBakJnQjtBQWtCOUJDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsdUJBQUQsRUFBMEJnQixJQUExQixDQUFKO0FBQ0FBLFFBQUksQ0FBQ0MsTUFBTDtBQThDQSxRQUFJRyxTQUFTLEdBQUdKLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBaEI7QUFDQU0sUUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsRUFBOEJhLEVBQTlCLENBQWlDLE9BQWpDLEVBQTBDLFVBQVVDLENBQVYsRUFBYTtBQUN2REEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FMLGVBQVMsQ0FBQ00sT0FBVixDQUFrQixPQUFsQjtBQUNDLEtBSEQ7QUFJQU4sYUFBUyxDQUFDRyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQ25DLFVBQUlJLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQ0EsVUFBSTRHLEtBQUssR0FBR2xJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsT0FBbkMsQ0FBWjs7QUFDQSxVQUFJLFFBQVFtQixJQUFSLENBQWFGLElBQUksQ0FBQ0csSUFBbEIsQ0FBSixFQUE2QjtBQUM3QjtBQUNBMEcsYUFBSyxDQUFDekcsSUFBTixDQUFXLEtBQVgsRUFBa0JDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQk4sSUFBcEIsQ0FBbEI7QUFDQyxPQUhELE1BR087QUFDUFMsYUFBSyxDQUFDLDBDQUFELENBQUw7QUFDQztBQUNBLEtBVEQ7QUFVQSxRQUFJQyxjQUFjLEdBQUdyQixJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFyQjtBQUNBMkIsa0JBQWMsQ0FBQ2QsRUFBZixDQUFrQixPQUFsQixFQUEyQixZQUFZO0FBQ3ZDLFVBQUlpSCxLQUFLLEdBQUdsSSxPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLE9BQW5DLENBQVo7QUFDQThILFdBQUssQ0FBQ2pCLElBQU4sQ0FBVyxVQUFYLEVBQXVCLEtBQUtqRixPQUE1QjtBQUNDLEtBSEQ7QUFJQSxRQUFJb0csVUFBVSxHQUFHMUgsSUFBSSxDQUFDTixJQUFMLENBQVUsYUFBVixDQUFqQjtBQUNBZ0ksY0FBVSxDQUFDbkgsRUFBWCxDQUFjLE9BQWQsRUFBdUIsWUFBWTtBQUNuQyxVQUFJaUgsS0FBSyxHQUFHbEksT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxPQUFuQyxDQUFaO0FBQ0E4SCxXQUFLLENBQUNqQixJQUFOLENBQVcsTUFBWCxFQUFtQixLQUFLakYsT0FBeEI7QUFDQyxLQUhEO0FBSUEsUUFBSStFLEtBQUssR0FBR3JHLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBWjtBQUNBMkcsU0FBSyxDQUFDOUYsRUFBTixDQUFTLE9BQVQsRUFBa0IsWUFBWTtBQUM5QixVQUFJaUgsS0FBSyxHQUFHbEksT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxPQUFuQyxDQUFaO0FBQ0E4SCxXQUFLLENBQUN6RyxJQUFOLENBQVcsWUFBWCxFQUF5QixLQUFLWSxLQUE5QjtBQUNBM0IsVUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixFQUEwQmdCLE9BQTFCLENBQWtDLFFBQWxDO0FBQ0MsS0FKRDtBQUtBLFFBQUlpSCxhQUFhLEdBQUczSCxJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFwQjtBQUNBaUksaUJBQWEsQ0FBQ3BILEVBQWQsQ0FBaUIsT0FBakIsRUFBMEIsWUFBWTtBQUN0QyxVQUFJaUgsS0FBSyxHQUFHbEksT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxPQUFuQyxDQUFaO0FBQ0E4SCxXQUFLLENBQUNqQixJQUFOLENBQVcsVUFBWCxFQUF1QixLQUFLakYsT0FBNUI7QUFDQyxLQUhEO0FBSUEsUUFBSXNHLFVBQVUsR0FBRzVILElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBakI7QUFDQWtJLGNBQVUsQ0FBQ3JILEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQVk7QUFDcEMsVUFBSWlILEtBQUssR0FBR2xJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsT0FBbkMsQ0FBWjtBQUNBLFVBQUltSSxZQUFZLEdBQUdMLEtBQUssQ0FBQ3pHLElBQU4sQ0FBVyxZQUFYLE1BQTZCLE1BQTdCLEdBQXNDLEtBQUssQ0FBM0MsR0FBK0MsSUFBSSxDQUF0RTtBQUNBLFVBQUkwRSxNQUFNLEdBQUcsS0FBSzlELEtBQUwsR0FBYWtHLFlBQTFCO0FBQ0FMLFdBQUssQ0FBQ3pHLElBQU4sQ0FBVyxPQUFYLEVBQW9CLEtBQUtZLEtBQXpCO0FBQ0E2RixXQUFLLENBQUN6RyxJQUFOLENBQVcsUUFBWCxFQUFxQjBFLE1BQXJCO0FBQ0MsS0FORDtBQU9DLEdBOUc2QjtBQStHOUJ2RixpQkFBZSxFQUFFLHlCQUFVRixJQUFWLEVBQWdCWCxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDckROLFFBQUksQ0FBQyxrQ0FBRCxFQUFxQ2dCLElBQXJDLEVBQTJDWCxTQUEzQyxDQUFKO0FBQ0EsUUFBSW1JLEtBQUssR0FBR25JLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLE9BQWYsQ0FBWjtBQUNBLFFBQUkyQixjQUFjLEdBQUdyQixJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFyQjtBQUNBMkIsa0JBQWMsQ0FBQ2tGLElBQWYsQ0FBb0IsU0FBcEIsRUFBK0JpQixLQUFLLENBQUNqQixJQUFOLENBQVcsVUFBWCxDQUEvQjtBQUNBLFFBQUltQixVQUFVLEdBQUcxSCxJQUFJLENBQUNOLElBQUwsQ0FBVSxhQUFWLENBQWpCO0FBQ0FnSSxjQUFVLENBQUNuQixJQUFYLENBQWdCLFNBQWhCLEVBQTJCaUIsS0FBSyxDQUFDakIsSUFBTixDQUFXLE1BQVgsQ0FBM0I7QUFDQSxRQUFJRixLQUFLLEdBQUdyRyxJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQVo7QUFDQTJHLFNBQUssQ0FBQ0UsSUFBTixDQUFXLFNBQVgsRUFBc0IsS0FBdEIsRUFBNkJ1QixNQUE3QixDQUFvQyxhQUFhTixLQUFLLENBQUN6RyxJQUFOLENBQVcsWUFBWCxDQUFiLEdBQXdDLElBQTVFLEVBQWtGd0YsSUFBbEYsQ0FBdUYsU0FBdkYsRUFBa0csSUFBbEc7QUFDQSxRQUFJb0IsYUFBYSxHQUFHM0gsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBcEI7QUFDQWlJLGlCQUFhLENBQUNwQixJQUFkLENBQW1CLFNBQW5CLEVBQThCaUIsS0FBSyxDQUFDakIsSUFBTixDQUFXLFVBQVgsQ0FBOUI7QUFDQSxRQUFJcUIsVUFBVSxHQUFHNUgsSUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixDQUFqQjtBQUNBa0ksY0FBVSxDQUFDdkQsR0FBWCxDQUFlbUQsS0FBSyxDQUFDekcsSUFBTixDQUFXLE9BQVgsQ0FBZjtBQUNDO0FBNUg2QixDQUE5QixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU0vQixJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDOUI0RSxNQUFJLEVBQUUsY0FBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0M1RSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDNUROLFFBQUksQ0FBQyx3QkFBRCxFQUEyQkssU0FBM0IsQ0FBSjtBQUNBLFFBQUlpRixNQUFNLEdBQUdqRixTQUFTLENBQUNLLElBQVYsQ0FBZSxRQUFmLENBQWI7QUFDQSxRQUFJNkUsT0FBTyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsRUFBZDtBQUNBbEYsV0FBTyxDQUFDbUYsZUFBUixDQUF3QkgsTUFBeEIsRUFBZ0NDLE9BQWhDO0FBQ0MsR0FONkI7QUFPOUIxRSxnQkFBYyxFQUFFLElBUGM7QUFROUJDLGNBQVksRUFBRSxnQkFSZ0I7QUFTOUJDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsbUNBQUQsQ0FBSjtBQUNBZ0IsUUFBSSxDQUFDQyxNQUFMLENBQ0EsbUNBQ0EsNkJBREEsR0FFQSxnQ0FGQSxHQUdBLHlHQUhBLEdBSUEsZUFKQSxHQUtBLFdBTEEsR0FNQSw2QkFOQSxHQU9BLGtEQVBBLEdBUUEsZ0NBUkEsR0FTQSwwREFUQSxHQVVBLGVBVkEsR0FXQSxXQVhBLEdBWUEsNkJBWkEsR0FhQSxzREFiQSxHQWNBLGdDQWRBLEdBZUEsNkZBZkEsR0FnQkEsMkZBaEJBLEdBaUJBLGVBakJBLEdBa0JBLFdBbEJBLEdBbUJBLFNBcEJBO0FBc0JBLFFBQUl5RSxPQUFPLEdBQUcxRSxJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFkO0FBQ0FnRixXQUFPLENBQUNuRSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFVQyxDQUFWLEVBQWE7QUFDakNBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBLFVBQUlrRSxTQUFTLEdBQUdDLE1BQU0sQ0FBQyxpQ0FBRCxDQUF0QjtBQUNBLFVBQUltRCxVQUFVLEdBQUcsNklBQWpCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHckQsU0FBUyxDQUFDcUQsS0FBVixDQUFnQkQsVUFBaEIsQ0FBWjs7QUFDQSxVQUFJQyxLQUFLLElBQUlBLEtBQUssQ0FBQyxDQUFELENBQWxCLEVBQXVCO0FBQ3ZCMUksZUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyx3QkFBbkMsRUFBNkRxQixJQUE3RCxDQUFrRSxLQUFsRSxFQUF5RSxvQ0FBb0NpSCxLQUFLLENBQUMsQ0FBRCxDQUF6QyxHQUErQyw4QkFBeEg7QUFDQyxPQUZELE1BRU87QUFDUDVHLGFBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0M7QUFDQSxLQVZEO0FBV0EsUUFBSTBELE1BQU0sR0FBRzlFLElBQUksQ0FBQ04sSUFBTCxDQUFVLGdCQUFWLENBQWI7QUFDQW9GLFVBQU0sQ0FBQ3ZFLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVVDLENBQVYsRUFBYTtBQUNoQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FuQixhQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLG1CQUFuQyxFQUF3RHFELFdBQXhELENBQW9FLHVCQUFwRSxFQUE2RkQsUUFBN0YsQ0FBc0csd0JBQXRHO0FBQ0MsS0FIRDtBQUlBLFFBQUlpQyxLQUFLLEdBQUcvRSxJQUFJLENBQUNOLElBQUwsQ0FBVSxlQUFWLENBQVo7QUFDQXFGLFNBQUssQ0FBQ3hFLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFVBQVVDLENBQVYsRUFBYTtBQUMvQkEsT0FBQyxDQUFDQyxjQUFGO0FBQ0FuQixhQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLG1CQUFuQyxFQUF3RHFELFdBQXhELENBQW9FLHdCQUFwRSxFQUE4RkQsUUFBOUYsQ0FBdUcsdUJBQXZHO0FBQ0MsS0FIRDtBQUlBLFFBQUltRixXQUFXLEdBQUdqSSxJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFsQjtBQUNBdUksZUFBVyxDQUFDMUgsRUFBWixDQUFlLE9BQWYsRUFBd0IsWUFBWTtBQUNwQyxVQUFJMkgsU0FBUyxHQUFHNUksT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyx3QkFBbkMsQ0FBaEI7QUFDQSxVQUFJeUksVUFBVSxHQUFHRCxTQUFTLENBQUNuSCxJQUFWLENBQWUsS0FBZixDQUFqQjtBQUNBLFVBQUlxSCxNQUFNLEdBQUlELFVBQVUsQ0FBQ0UsT0FBWCxDQUFtQixTQUFuQixFQUE4QixFQUE5QixDQUFELEdBQXNDLHdDQUF0QyxJQUFrRkosV0FBVyxDQUFDUixFQUFaLENBQWUsVUFBZixJQUE2QixDQUE3QixHQUFpQyxDQUFuSCxDQUFiO0FBQ0F6SSxVQUFJLENBQUMsa0JBQWtCbUosVUFBbkIsRUFBK0IsY0FBY0MsTUFBN0MsQ0FBSjtBQUNBRixlQUFTLENBQUNuSCxJQUFWLENBQWUsS0FBZixFQUFzQnFILE1BQXRCO0FBQ0MsS0FORDtBQU9DLEdBL0Q2QjtBQWdFOUJsSSxpQkFBZSxFQUFFLHlCQUFVRixJQUFWLEVBQWdCWCxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDckROLFFBQUksQ0FBQyxtQ0FBRCxFQUFzQ0ssU0FBdEMsQ0FBSjtBQUNBLFFBQUk2SSxTQUFTLEdBQUc3SSxTQUFTLENBQUNLLElBQVYsQ0FBZSx3QkFBZixDQUFoQjtBQUNBLFFBQUl1SSxXQUFXLEdBQUdqSSxJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFsQjtBQUNBLFFBQUltRixHQUFHLEdBQUdxRCxTQUFTLENBQUNuSCxJQUFWLENBQWUsS0FBZixDQUFWO0FBQ0FrSCxlQUFXLENBQUMxQixJQUFaLENBQWlCLFNBQWpCLEVBQTRCMUIsR0FBRyxDQUFDeUQsT0FBSixDQUFZLFlBQVosTUFBOEIsQ0FBQyxDQUEzRDtBQUNDO0FBdEU2QixDQUE5QixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU10SixJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsU0FBbkIsSUFBZ0M7QUFDaEM0RSxNQUFJLEVBQUUsY0FBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0M1RSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDNUROLFFBQUksQ0FBQywwQkFBRCxFQUE2QkssU0FBN0IsQ0FBSjtBQUNBLFFBQUlpRixNQUFNLEdBQUdqRixTQUFTLENBQUNLLElBQVYsQ0FBZSxRQUFmLENBQWI7QUFDQSxRQUFJNkUsT0FBTyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsRUFBZDtBQUNBbEYsV0FBTyxDQUFDbUYsZUFBUixDQUF3QkgsTUFBeEIsRUFBZ0NDLE9BQWhDO0FBQ0MsR0FOK0I7QUFPaEMxRSxnQkFBYyxFQUFFLElBUGdCO0FBUWhDQyxjQUFZLEVBQUUsa0JBUmtCO0FBU2hDQyxpQkFBZSxFQUFFLHlCQUFVQyxJQUFWLEVBQWdCVixPQUFoQixFQUF5QjtBQUMxQ04sUUFBSSxDQUFDLHFDQUFELENBQUo7QUFDQWdCLFFBQUksQ0FBQ0MsTUFBTCxDQUNBLG1DQUNBLDZCQURBLEdBRUEsZ0NBRkEsR0FHQSwyR0FIQSxHQUlBLGVBSkEsR0FLQSxXQUxBLEdBTUEsNkJBTkEsR0FPQSxrREFQQSxHQVFBLGdDQVJBLEdBU0EsNERBVEEsR0FVQSxlQVZBLEdBV0EsV0FYQSxHQVlBLDZCQVpBLEdBYUEsc0RBYkEsR0FjQSxnQ0FkQSxHQWVBLCtGQWZBLEdBZ0JBLDZGQWhCQSxHQWlCQSxlQWpCQSxHQWtCQSxXQWxCQSxHQW1CQSxTQXBCQTtBQXNCQSxRQUFJeUUsT0FBTyxHQUFHMUUsSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBZDtBQUNBZ0YsV0FBTyxDQUFDbkUsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBVUMsQ0FBVixFQUFhO0FBQ2pDQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJa0UsU0FBUyxHQUFHQyxNQUFNLENBQUMsbUNBQUQsQ0FBdEI7QUFDQSxVQUFJMkQsWUFBWSxHQUFHLDBJQUFuQjtBQUNBLFVBQUlQLEtBQUssR0FBR3JELFNBQVMsQ0FBQ3FELEtBQVYsQ0FBZ0JPLFlBQWhCLENBQVo7O0FBQ0EsVUFBSVAsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFsQixFQUF1QjtBQUN2QjFJLGVBQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsd0JBQW5DLEVBQTZEcUIsSUFBN0QsQ0FBa0UsS0FBbEUsRUFBeUUsbUNBQW1DaUgsS0FBSyxDQUFDLENBQUQsQ0FBakg7QUFDQyxPQUZELE1BRU87QUFDUDVHLGFBQUssQ0FBQyw4QkFBRCxDQUFMO0FBQ0M7QUFDQSxLQVZEO0FBV0EsUUFBSTBELE1BQU0sR0FBRzlFLElBQUksQ0FBQ04sSUFBTCxDQUFVLGtCQUFWLENBQWI7QUFDQW9GLFVBQU0sQ0FBQ3ZFLEVBQVAsQ0FBVSxPQUFWLEVBQW1CLFVBQVVDLENBQVYsRUFBYTtBQUNoQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FuQixhQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLG1CQUFuQyxFQUF3RHFELFdBQXhELENBQW9FLHVCQUFwRSxFQUE2RkQsUUFBN0YsQ0FBc0csd0JBQXRHO0FBQ0MsS0FIRDtBQUlBLFFBQUlpQyxLQUFLLEdBQUcvRSxJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFaO0FBQ0FxRixTQUFLLENBQUN4RSxFQUFOLENBQVMsT0FBVCxFQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDL0JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx3QkFBcEUsRUFBOEZELFFBQTlGLENBQXVHLHVCQUF2RztBQUNDLEtBSEQ7QUFJQSxRQUFJbUYsV0FBVyxHQUFHakksSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBbEI7QUFDQXVJLGVBQVcsQ0FBQzFILEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVk7QUFDcEMsVUFBSTJILFNBQVMsR0FBRzVJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsd0JBQW5DLENBQWhCO0FBQ0EsVUFBSXlJLFVBQVUsR0FBR0QsU0FBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsQ0FBakI7QUFDQSxVQUFJcUgsTUFBTSxHQUFJRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsU0FBbkIsRUFBOEIsRUFBOUIsQ0FBRCxHQUFzQyxZQUF0QyxJQUFzREosV0FBVyxDQUFDUixFQUFaLENBQWUsVUFBZixJQUE2QixDQUE3QixHQUFpQyxDQUF2RixDQUFiO0FBQ0F6SSxVQUFJLENBQUMsa0JBQWtCbUosVUFBbkIsRUFBK0IsY0FBY0MsTUFBN0MsQ0FBSjtBQUNBRixlQUFTLENBQUNuSCxJQUFWLENBQWUsS0FBZixFQUFzQnFILE1BQXRCO0FBQ0MsS0FORDtBQU9DLEdBL0QrQjtBQWdFaENsSSxpQkFBZSxFQUFFLHlCQUFVRixJQUFWLEVBQWdCWCxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDckROLFFBQUksQ0FBQyxxQ0FBRCxFQUF3Q0ssU0FBeEMsQ0FBSjtBQUNBLFFBQUk2SSxTQUFTLEdBQUc3SSxTQUFTLENBQUNLLElBQVYsQ0FBZSx3QkFBZixDQUFoQjtBQUNBLFFBQUl1SSxXQUFXLEdBQUdqSSxJQUFJLENBQUNOLElBQUwsQ0FBVSxtQkFBVixDQUFsQjtBQUNBLFFBQUltRixHQUFHLEdBQUdxRCxTQUFTLENBQUNuSCxJQUFWLENBQWUsS0FBZixDQUFWO0FBQ0FrSCxlQUFXLENBQUMxQixJQUFaLENBQWlCLFNBQWpCLEVBQTRCMUIsR0FBRyxDQUFDeUQsT0FBSixDQUFZLFlBQVosTUFBOEIsQ0FBQyxDQUEzRDtBQUNDO0FBdEUrQixDQUFoQyxDOzs7Ozs7Ozs7OztBQ0hBLHVDOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHFEIiwiZmlsZSI6ImpzL2tlZGl0b3ItY29tcG9uZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIklubGluZUVkaXRvclwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIktFZGl0b3JcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wiSW5saW5lRWRpdG9yXCIsIFwialF1ZXJ5XCIsIFwiS0VkaXRvclwiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwiSW5saW5lRWRpdG9yXCIpLCByZXF1aXJlKFwialF1ZXJ5XCIpLCByZXF1aXJlKFwiS0VkaXRvclwiKSkgOiBmYWN0b3J5KHJvb3RbXCJJbmxpbmVFZGl0b3JcIl0sIHJvb3RbXCJqUXVlcnlcIl0sIHJvb3RbXCJLRWRpdG9yXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX0lubGluZUVkaXRvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tlZGl0b3JfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvbXBvbmVudHMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtYXVkaW8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LWZvcm0uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtcGhvdG8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXRleHQuanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC12aW1lby5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQteW91dHViZS5qcyc7XHIiLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztcclxuY29uc3QgZmxvZyA9IEtFZGl0b3IubG9nO1xyS0VkaXRvci5jb21wb25lbnRzWydhdWRpbyddID0ge1xyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnZ2V0Q29udGVudCBcImF1ZGlvXCIgY29tcG9uZW50LCBjb21wb25lbnQnKTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGF1ZGlvID0gY29tcG9uZW50Q29udGVudC5maW5kKCdhdWRpbycpO1xyYXVkaW8udW53cmFwKCk7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdBdWRpbyBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwiYXVkaW9cIiBzZXR0aW5ncycsIGZvcm0pO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvRmlsZUlucHV0XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BdWRpbyBmaWxlPC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdWRpby10b29sYmFyXCI+JyArXHInICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLWF1ZGlvRmlsZUlucHV0IGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L2E+JyArXHInICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJhdWRpb0ZpbGVJbnB1dFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgICAgICAgPC9kaXY+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLWF1dG9wbGF5XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhdWRpby1hdXRvcGxheVwiIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLXNob3djb250cm9sc1wiIGNsYXNzPVwiY29sLXNtLTEyXCI+U2hvdyBDb250cm9sczwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJhdWRpby1zaG93Y29udHJvbHNcIiBjaGVja2VkIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccicgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICAgPGxhYmVsIGZvcj1cImF1ZGlvLXdpZHRoXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5XaWR0aCAoJSk8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cImF1ZGlvLXdpZHRoXCIgbWluPVwiMjBcIiBtYXg9XCIxMDBcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIHZhbHVlPVwiMTAwXCIgLz4nICtccicgICAgICAgICA8L2Rpdj4nICtccicgICAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwiYXVkaW9cIiBjb21wb25lbnQnLCBmb3JtLCBjb21wb25lbnQpO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJsZXQgYXVkaW8gPSBjb21wb25lbnQuZmluZCgnYXVkaW8nKTtccmxldCBmaWxlSW5wdXQgPSBmb3JtLmZpbmQoJyNhdWRpb0ZpbGVJbnB1dCcpO1xybGV0IGJ0bkF1ZGlvRmlsZUlucHV0ID0gZm9ybS5maW5kKCcuYnRuLWF1ZGlvRmlsZUlucHV0Jyk7XHJidG5BdWRpb0ZpbGVJbnB1dC5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmZpbGVJbnB1dC50cmlnZ2VyKCdjbGljaycpO1xyfSk7XHJmaWxlSW5wdXQub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xyaWYgKC9hdWRpby8udGVzdChmaWxlLnR5cGUpKSB7XHIvLyBUb2RvOiBVcGxvYWQgdG8geW91ciBzZXJ2ZXIgOilccmF1ZGlvLmF0dHIoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyYXVkaW8ubG9hZChmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLnNob3dTZXR0aW5nUGFuZWwoY29tcG9uZW50LCBvcHRpb25zKTtccn0pO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IGFuIGF1ZGlvIGZpbGUhJyk7XHJ9XHJ9KTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnI2F1ZGlvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccmF1ZGlvLmF0dHIoJ2F1dG9wbGF5JywgJ2F1dG9wbGF5Jyk7XHJ9IGVsc2Uge1xyYXVkaW8ucmVtb3ZlQXR0cignYXV0b3BsYXknKTtccn1ccn0pO1xybGV0IHNob3djb250cm9sc1RvZ2dsZSA9IGZvcm0uZmluZCgnI2F1ZGlvLXNob3djb250cm9scycpO1xyc2hvd2NvbnRyb2xzVG9nZ2xlLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyaWYgKHRoaXMuY2hlY2tlZCkge1xyYXVkaW8uYXR0cignY29udHJvbHMnLCAnY29udHJvbHMnKTtccn0gZWxzZSB7XHJhdWRpby5yZW1vdmVBdHRyKCdjb250cm9scycpO1xyfVxyfSk7XHJsZXQgYXVkaW9XaWR0aCA9IGZvcm0uZmluZCgnI2F1ZGlvLXdpZHRoJyk7XHJhdWRpb1dpZHRoLm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmF1ZGlvLmNzcygnd2lkdGgnLCB0aGlzLnZhbHVlICsgJyUnKTtccn0pO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3MnO1xyaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1snZm9ybSddID0ge1xyaW5pdEZvcm1CdWlsZGVyOiBmdW5jdGlvbiAoY29tcG9uZW50KSB7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1EYXRhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWRhdGEnKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKS5wcmVwZW5kKFxyJzxwIGNsYXNzPVwiZm9ybS1idWlsZGVyLXRvb2xzXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiByaWdodDtcIj4nICtccicgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJldmlldy1mb3JtXCI+UHJldmlldyBmb3JtPC9hPiAnICtccicgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4taW5mbyBidG4tZWRpdC1mb3JtIGRpc2FibGVkXCI+RWRpdCBmb3JtPC9hPicgK1xyJzwvcD4nXHIpO1xybGV0IGJ0bkVkaXRGb3JtID0gY29tcG9uZW50LmZpbmQoJy5idG4tZWRpdC1mb3JtJyk7XHJsZXQgYnRuUHJldmlld0Zvcm0gPSBjb21wb25lbnQuZmluZCgnLmJ0bi1wcmV2aWV3LWZvcm0nKTtccmZvcm1CdWlsZGVyQXJlYS5mb3JtQnVpbGRlcih7XHJkaXNhYmxlSW5qZWN0ZWRTdHlsZTogdHJ1ZSxccnNob3dBY3Rpb25CdXR0b25zOiBmYWxzZSxccmRhdGFUeXBlOiAnanNvbicsXHJmb3JtRGF0YTogZm9ybURhdGEuaHRtbCgpLFxyZGlzYWJsZUZpZWxkczogW1xyJ2F1dG9jb21wbGV0ZScsXHIncGFyYWdyYXBoJyxccidoZWFkZXInXHJdLFxyZGlzYWJsZWRBdHRyczogWydhY2Nlc3MnXSxccnR5cGVVc2VyRGlzYWJsZWRBdHRyczoge1xyJ2NoZWNrYm94LWdyb3VwJzogW1xyJ3RvZ2dsZScsXHInaW5saW5lJ1xyXVxyfVxyfSk7XHJidG5FZGl0Rm9ybS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyaWYgKCFidG5FZGl0Rm9ybS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyZm9ybUJ1aWxkZXJBcmVhLnNob3coKTtccmZvcm1Db250ZW50LmhpZGUoKTtccmJ0bkVkaXRGb3JtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyYnRuUHJldmlld0Zvcm0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJ9XHJ9KTtccmJ0blByZXZpZXdGb3JtLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJpZiAoIWJ0blByZXZpZXdGb3JtLmhhc0NsYXNzKCdkaXNhYmxlZCcpKSB7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccmZvcm1CdWlsZGVyQXJlYS5oaWRlKCk7XHJmb3JtQ29udGVudC5zaG93KCk7XHJidG5FZGl0Rm9ybS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtccmJ0blByZXZpZXdGb3JtLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xyfVxyfSk7XHJ9LFxycmVuZGVyRm9ybTogZnVuY3Rpb24gKGNvbXBvbmVudCwgZm9ybUJ1aWxkZXIpIHtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJpZiAoIWZvcm1CdWlsZGVyKSB7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xyZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlckFyZWEuZGF0YSgnZm9ybUJ1aWxkZXInKTtccn1ccmZvcm1Db250ZW50LmZvcm1SZW5kZXIoe1xyZGF0YVR5cGU6ICdqc29uJyxccmZvcm1EYXRhOiBmb3JtQnVpbGRlci5hY3Rpb25zLmdldERhdGEoJ2pzb24nKVxyfSk7XHJpZiAoZm9ybUNvbnRlbnQuaGFzQ2xhc3MoJ2Zvcm0taG9yaXpvbnRhbCcpKSB7XHJmb3JtQ29udGVudC5jaGlsZHJlbignZGl2JykuZWFjaChmdW5jdGlvbiAoKSB7XHJsZXQgZGl2ID0gJCh0aGlzKTtccmxldCBkYXRhR3JpZCA9IGZvcm1Db250ZW50LmF0dHIoJ2RhdGEtZ3JpZCcpIHx8ICc0LTgnO1xyZGF0YUdyaWQgPSBkYXRhR3JpZC5zcGxpdCgnLScpO1xyaWYgKGRpdi5hdHRyKCdjbGFzcycpKSB7XHJpZiAoZGl2Lmhhc0NsYXNzKCdmYi1idXR0b24nKSkge1xyZGl2LmZpbmQoJ2J1dHRvbicpLndyYXAoJzxkaXYgY2xhc3M9XCJjb2wtc20tJyArIGRhdGFHcmlkWzFdICsgJyBjb2wtc20tb2Zmc2V0LScgKyBkYXRhR3JpZFswXSArICdcIj48L2Rpdj4nKTtccn0gZWxzZSB7XHJsZXQgbGFiZWwgPSBkaXYuY2hpbGRyZW4oJ2xhYmVsJyk7XHJsZXQgaW5wdXQgPSBkaXYuY2hpbGRyZW4oJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XHJsZXQgc3ViRGl2ID0gZGl2LmNoaWxkcmVuKCdkaXYnKTtccmxhYmVsLmFkZENsYXNzKCdjb250cm9sLWxhYmVsIGNvbC1zbS0nICsgZGF0YUdyaWRbMF0pO1xyaWYgKHN1YkRpdi5sZW5ndGggPiAwKSB7XHJzdWJEaXYuYWRkQ2xhc3MoJ2NvbC1zbS0nICsgZGF0YUdyaWRbMV0pO1xyfSBlbHNlIHtccmlucHV0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wnKS53cmFwKCc8ZGl2IGNsYXNzPVwiY29sLXNtLScgKyBkYXRhR3JpZFsxXSArICdcIj48L2Rpdj4nKTtccn1ccn1ccn1ccn0pO1xyfVxyfSxccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJmb3JtXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZm9ybUJ1aWxkZXIgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tYnVpbGRlci1hcmVhJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGZvcm1EYXRhID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWRhdGEnKTtccmlmIChmb3JtRGF0YS5sZW5ndGggPT09IDApIHtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZm9ybS1kYXRhXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XCI+PC9kaXY+Jylccn1ccmlmIChmb3JtQ29udGVudC5sZW5ndGggPT09IDApIHtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKCc8Zm9ybSBjbGFzcz1cImZvcm0tY29udGVudFwiIHN0eWxlPVwiZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1wiPjwvZm9ybT4nKVxyfSBlbHNlIHtccmZvcm1Db250ZW50LmhpZGUoKVxyfVxyaWYgKGZvcm1CdWlsZGVyLmxlbmd0aCA9PT0gMCkge1xyZm9ybUJ1aWxkZXIgPSAkKCc8ZGl2IGNsYXNzPVwiZm9ybS1idWlsZGVyLWFyZWEgY2xlYXJmaXhcIj48L2Rpdj4nKTtccmNvbXBvbmVudENvbnRlbnQuYXBwZW5kKGZvcm1CdWlsZGVyKTtccn1ccnRoaXMuaW5pdEZvcm1CdWlsZGVyKGNvbXBvbmVudCk7XHJ9LFxyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnZ2V0Q29udGVudCBcImZvcm1cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJsZXQgZm9ybUJ1aWxkZXJBcmVhID0gJCgnIycgKyBjb21wb25lbnQuYXR0cignaWQnKSkuZmluZCgnLmZvcm0tYnVpbGRlci1hcmVhJyk7XHJsZXQgZm9ybUJ1aWxkZXIgPSBmb3JtQnVpbGRlckFyZWEuZGF0YSgnZm9ybUJ1aWxkZXInKTtccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQsIGZvcm1CdWlsZGVyKTtccmZvcm1EYXRhLmh0bWwoZm9ybUJ1aWxkZXIuYWN0aW9ucy5nZXREYXRhKCdqc29uJykpO1xyY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYSwgLmZvcm0tYnVpbGRlci10b29scycpLnJlbW92ZSgpO1xyY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKS5zaG93KCk7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdGb3JtIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXRTZXR0aW5nRm9ybSBcImZvcm1cIiBjb21wb25lbnQnKTtccmxldCBzZWxmID0gdGhpcztccmZvcm0uaHRtbChccic8ZGl2IGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BY3Rpb248L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIHR4dC1mb3JtLWFjdGlvblwiIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5NZXRob2Q8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LW1ldGhvZFwiPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZ2V0XCI+R2V0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJwb3N0XCI+UG9zdDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHV0XCI+UHV0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJkZWxldGVcIj5EZWxldGU8L29wdGlvbj4nICtccicgICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkVuY3R5cGU8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWVuY3R5cGVcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRleHQvcGxhaW5cIj50ZXh0L3BsYWluPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+bXVsdGlwYXJ0L2Zvcm0tZGF0YTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCI+YXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5MYXlvdXQ8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWxheW91dFwiPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9ybWFsPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtLWhvcml6b250YWxcIj5Ib3Jpem9udGFsPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJmb3JtLWlubGluZVwiPklubGluZTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cCBzZWxlY3QtZ3JpZC13cmFwcGVyXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5HcmlkIHNldHRpbmc8L2xhYmVsPicgK1xyJyAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJmb3JtLWNvbnRyb2wgc2VsZWN0LWdyaWRcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjItMTBcIj5jb2wtMiBjb2wtMTA8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjMtOVwiPmNvbC0zIGNvbC05PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0LThcIj5jb2wtNCBjb2wtODwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNS03XCI+Y29sLTUgY29sLTc8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjYtNlwiPmNvbC02IGNvbC02PC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVwiaGVscC1ibG9ja1wiPlRoaXMgc2V0dGluZyBpcyBmb3Igd2lkdGggb2YgbGFiZWwgYW5kIGNvbnRyb2wgd2l0aCBudW1iZXIgb2YgY29scyBhcyB1bml0PC9zbWFsbD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccic8L2Rpdj4nXHIpO1xyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdhY3Rpb24nLCB0aGlzLnZhbHVlKTtccn0pO1xyZm9ybS5maW5kKCcuc2VsZWN0LW1ldGhvZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1lbmN0eXBlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdlbmN0eXBlJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGNvbXBvbmVudCA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmZvcm1Db250ZW50LnJlbW92ZUNsYXNzKCdmb3JtLWlubGluZSBmb3JtLWhvcml6b250YWwnKTtccmlmICh0aGlzLnZhbHVlKSB7XHJmb3JtQ29udGVudC5hZGRDbGFzcyh0aGlzLnZhbHVlKTtccn1ccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWdyaWQtd3JhcHBlcicpLmNzcygnZGlzcGxheScsIHRoaXMudmFsdWUgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnLCB0aGlzLnZhbHVlKTtccnNlbGYucmVuZGVyRm9ybShjb21wb25lbnQpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJmb3JtXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJsZXQgbGF5b3V0ID0gJyc7XHJpZiAoZm9ybUNvbnRlbnQuaGFzQ2xhc3MoJ2Zvcm0taW5saW5lJykpIHtccmxheW91dCA9ICdmb3JtLWlubGluZSc7XHJ9IGVsc2UgaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWhvcml6b250YWwnKSkge1xybGF5b3V0ID0gJ2Zvcm0taG9yaXpvbnRhbCc7XHJ9XHJmb3JtLmZpbmQoJy50eHQtZm9ybS1hY3Rpb24nKS52YWwoZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJykgfHwgJycpO1xyZm9ybS5maW5kKCcuc2VsZWN0LW1ldGhvZCcpLnZhbChmb3JtQ29udGVudC5hdHRyKCdtZXRob2QnKSB8fCAnZ2V0Jyk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZW5jdHlwZScpLnZhbChmb3JtQ29udGVudC5hdHRyKCdlbmN0eXBlJykpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWxheW91dCcpLnZhbChsYXlvdXQpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWdyaWQtd3JhcHBlcicpLmNzcygnZGlzcGxheScsIGxheW91dCA9PT0gJ2Zvcm0taG9yaXpvbnRhbCcgPyAnYmxvY2snIDogJ25vbmUnKTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkJykudmFsKGZvcm1Db250ZW50LmF0dHIoJ2RhdGEtZ3JpZCcpIHx8ICc0LTgnKTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1snZ29vZ2xlbWFwJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwiZ29vZ2xlbWFwXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBpZnJhbWUgPSBjb21wb25lbnQuZmluZCgnaWZyYW1lJyk7XHJsZXQgd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccmtlZGl0b3IuaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcik7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdHb29nbGUgTWFwIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXRTZXR0aW5nRm9ybSBcImdvb2dsZW1hcFwiIGNvbXBvbmVudCcpO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLWdvb2dsZW1hcC1lZGl0XCI+VXBkYXRlIE1hcDwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLWdvb2dsZW1hcC0xNjlcIj4xNjo5PC9idXR0b24+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLWdvb2dsZW1hcC00M1wiPjQ6MzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccmxldCBidG5FZGl0ID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgR29vZ2xlIE1hcCBlbWJlZCBjb2RlIGluIGhlcmU6Jyk7XHJsZXQgaWZyYW1lID0gJChpbnB1dERhdGEpO1xybGV0IHNyYyA9IGlmcmFtZS5hdHRyKCdzcmMnKTtccmlmIChpZnJhbWUubGVuZ3RoID4gMCAmJiBzcmMgJiYgc3JjLmxlbmd0aCA+IDApIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCBzcmMpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIEdvb2dsZSBNYXAgZW1iZWQgY29kZSBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC0xNjknKTtccmJ0bjE2OS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKTtccn0pO1xybGV0IGJ0bjQzID0gZm9ybS5maW5kKCcuYnRuLWdvb2dsZW1hcC00MycpO1xyYnRuNDMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJyk7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sncGhvdG8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJwaG90b1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBpbWcgPSBjb21wb25lbnRDb250ZW50LmZpbmQoJ2ltZycpO1xyaW1nLmNzcygnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1Bob3RvIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXRTZXR0aW5nRm9ybSBcInBob3RvXCIgY29tcG9uZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJsZXQgb3B0aW9ucyA9IGtlZGl0b3Iub3B0aW9ucztccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5XCIgaWQ9XCJwaG90by1lZGl0XCI+Q2hhbmdlIFBob3RvPC9idXR0b24+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgZm9yPVwicGhvdG8tYWxpZ25cIiBjbGFzcz1cImNvbC1zbS0xMlwiPkFsaWduPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPHNlbGVjdCBpZD1cInBob3RvLWFsaWduXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGVmdFwiPkxlZnQ8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2VudGVyXCI+Q2VudGVyPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInJpZ2h0XCI+UmlnaHQ8L29wdGlvbj4nICtccicgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgZm9yPVwicGhvdG8tc3R5bGVcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlN0eWxlPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPHNlbGVjdCBpZD1cInBob3RvLXN0eWxlXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+Tm9uZTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbWctcm91bmRlZFwiPlJvdW5kZWQ8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLWNpcmNsZVwiPkNpcmNsZTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJpbWctdGh1bWJuYWlsXCI+VGh1bWJuYWlsPC9vcHRpb24+JyArXHInICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXJlc3BvbnNpdmVcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlJlc3BvbnNpdmU8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJwaG90by1yZXNwb25zaXZlXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXdpZHRoXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5XaWR0aDwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG90by13aWR0aFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLWhlaWdodFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+SGVpZ2h0PC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInBob3RvLWhlaWdodFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgcGhvdG9FZGl0ID0gZm9ybS5maW5kKCcjcGhvdG8tZWRpdCcpO1xybGV0IGZpbGVJbnB1dCA9IHBob3RvRWRpdC5uZXh0KCk7XHJwaG90b0VkaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmZpbGVJbnB1dC50cmlnZ2VyKCdjbGljaycpO1xyfSk7XHJmaWxlSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBmaWxlID0gdGhpcy5maWxlc1swXTtccmlmICgvaW1hZ2UvLnRlc3QoZmlsZS50eXBlKSkge1xybGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uIChlKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJpbWcuYXR0cignc3JjJywgZS50YXJnZXQucmVzdWx0KTtccmltZy5jc3Moe1xyd2lkdGg6ICcnLFxyaGVpZ2h0OiAnJ1xyfSk7XHJpbWcubG9hZChmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLnNob3dTZXR0aW5nUGFuZWwoa2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCksIG9wdGlvbnMpO1xyfSk7XHJ9KTtccnJlYWRlci5yZWFkQXNEYXRhVVJMKHRoaXMuZmlsZXNbMF0pO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IHBob3RvIScpO1xyfVxyfSk7XHJsZXQgaW5wdXRBbGlnbiA9IGZvcm0uZmluZCgnI3Bob3RvLWFsaWduJyk7XHJpbnB1dEFsaWduLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgcGFuZWwgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcucGhvdG8tcGFuZWwnKTtccnBhbmVsLmNzcygndGV4dC1hbGlnbicsIHRoaXMudmFsdWUpO1xyfSk7XHJsZXQgaW5wdXRSZXNwb25zaXZlID0gZm9ybS5maW5kKCcjcGhvdG8tcmVzcG9uc2l2ZScpO1xyaW5wdXRSZXNwb25zaXZlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpW3RoaXMuY2hlY2tlZCA/ICdhZGRDbGFzcycgOiAncmVtb3ZlQ2xhc3MnXSgnaW1nLXJlc3BvbnNpdmUnKTtccn0pO1xybGV0IGNiYlN0eWxlID0gZm9ybS5maW5kKCcjcGhvdG8tc3R5bGUnKTtccmNiYlN0eWxlLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgdmFsID0gdGhpcy52YWx1ZTtccmltZy5yZW1vdmVDbGFzcygnaW1nLXJvdW5kZWQgaW1nLWNpcmNsZSBpbWctdGh1bWJuYWlsJyk7XHJpZiAodmFsKSB7XHJpbWcuYWRkQ2xhc3ModmFsKTtccn1ccn0pO1xybGV0IGlucHV0V2lkdGggPSBmb3JtLmZpbmQoJyNwaG90by13aWR0aCcpO1xybGV0IGlucHV0SGVpZ2h0ID0gZm9ybS5maW5kKCcjcGhvdG8taGVpZ2h0Jyk7XHJpbnB1dFdpZHRoLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgbmV3V2lkdGggPSArdGhpcy52YWx1ZTtccmxldCBuZXdIZWlnaHQgPSBNYXRoLnJvdW5kKG5ld1dpZHRoIC8gc2VsZi5yYXRpbyk7XHJpZiAobmV3V2lkdGggPD0gMCkge1xybmV3V2lkdGggPSBzZWxmLndpZHRoO1xybmV3SGVpZ2h0ID0gc2VsZi5oZWlnaHQ7XHJ0aGlzLnZhbHVlID0gbmV3V2lkdGg7XHJ9XHJpbWcuY3NzKHtccid3aWR0aCc6IG5ld1dpZHRoLFxyJ2hlaWdodCc6IG5ld0hlaWdodFxyfSk7XHJpbnB1dEhlaWdodC52YWwobmV3SGVpZ2h0KTtccn0pO1xyaW5wdXRIZWlnaHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBpbWcgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCdpbWcnKTtccmxldCBuZXdIZWlnaHQgPSArdGhpcy52YWx1ZTtccmxldCBuZXdXaWR0aCA9IE1hdGgucm91bmQobmV3SGVpZ2h0ICogc2VsZi5yYXRpbyk7XHJpZiAobmV3SGVpZ2h0IDw9IDApIHtccm5ld1dpZHRoID0gc2VsZi53aWR0aDtccm5ld0hlaWdodCA9IHNlbGYuaGVpZ2h0O1xydGhpcy52YWx1ZSA9IG5ld0hlaWdodDtccn1ccmltZy5jc3Moe1xyJ2hlaWdodCc6IG5ld0hlaWdodCxccid3aWR0aCc6IG5ld1dpZHRoXHJ9KTtccmlucHV0V2lkdGgudmFsKG5ld1dpZHRoKTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwicGhvdG9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGlucHV0QWxpZ24gPSBmb3JtLmZpbmQoJyNwaG90by1hbGlnbicpO1xybGV0IGlucHV0UmVzcG9uc2l2ZSA9IGZvcm0uZmluZCgnI3Bob3RvLXJlc3BvbnNpdmUnKTtccmxldCBpbnB1dFdpZHRoID0gZm9ybS5maW5kKCcjcGhvdG8td2lkdGgnKTtccmxldCBpbnB1dEhlaWdodCA9IGZvcm0uZmluZCgnI3Bob3RvLWhlaWdodCcpO1xybGV0IGNiYlN0eWxlID0gZm9ybS5maW5kKCcjcGhvdG8tc3R5bGUnKTtccmxldCBwYW5lbCA9IGNvbXBvbmVudC5maW5kKCcucGhvdG8tcGFuZWwnKTtccmxldCBpbWcgPSBwYW5lbC5maW5kKCdpbWcnKTtccmxldCBhbGdpbiA9IHBhbmVsLmNzcygndGV4dC1hbGlnbicpO1xyaWYgKGFsZ2luICE9PSAncmlnaHQnIHx8IGFsZ2luICE9PSAnY2VudGVyJykge1xyYWxnaW4gPSAnbGVmdCc7XHJ9XHJpZiAoaW1nLmhhc0NsYXNzKCdpbWctcm91bmRlZCcpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy1yb3VuZGVkJyk7XHJ9IGVsc2UgaWYgKGltZy5oYXNDbGFzcygnaW1nLWNpcmNsZScpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy1jaXJjbGUnKTtccn0gZWxzZSBpZiAoaW1nLmhhc0NsYXNzKCdpbWctdGh1bWJuYWlsJykpIHtccmNiYlN0eWxlLnZhbCgnaW1nLXRodW1ibmFpbCcpO1xyfSBlbHNlIHtccmNiYlN0eWxlLnZhbCgnJyk7XHJ9XHJpbnB1dEFsaWduLnZhbChhbGdpbik7XHJpbnB1dFJlc3BvbnNpdmUucHJvcCgnY2hlY2tlZCcsIGltZy5oYXNDbGFzcygnaW1nLXJlc3BvbnNpdmUnKSk7XHJpbnB1dFdpZHRoLnZhbChpbWcud2lkdGgoKSk7XHJpbnB1dEhlaWdodC52YWwoaW1nLmhlaWdodCgpKTtcciQoJzxpbWcgLz4nKS5hdHRyKCdzcmMnLCBpbWcuYXR0cignc3JjJykpLmxvYWQoZnVuY3Rpb24gKCkge1xyc2VsZi5yYXRpbyA9IHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtccnNlbGYud2lkdGggPSB0aGlzLndpZHRoO1xyc2VsZi5oZWlnaHQgPSB0aGlzLmhlaWdodDtccn0pO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztccmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztcclxuaW1wb3J0IElubGluZUVkaXRvciBmcm9tICdJbmxpbmVFZGl0b3InO1xyY29uc3QgaW5zdGFuY2VzID0ge307XHIvLyBUZXh0IGNvbXBvbmVudFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuS0VkaXRvci5jb21wb25lbnRzWyd0ZXh0J10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidGV4dFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgb3B0aW9ucyA9IGtlZGl0b3Iub3B0aW9ucztccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xyY29tcG9uZW50Q29udGVudC5wcm9wKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtccmNvbXBvbmVudENvbnRlbnQub24oJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBvbmVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRDaGFuZ2VkLmNhbGwoY29udGVudEFyZWEsIGUsIGNvbXBvbmVudCk7XHJ9XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db250YWluZXJDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlLCBjb250YWluZXIpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGVudENoYW5nZWQgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db250ZW50Q2hhbmdlZC5jYWxsKGtlZGl0b3IsIGUsIGNvbnRlbnRBcmVhKTtccn1ccn0pO1xySW5saW5lRWRpdG9yXHIuY3JlYXRlKGNvbXBvbmVudENvbnRlbnQuZ2V0KDApLCB7XHJmb250RmFtaWx5OiB7XHJvcHRpb25zOiBbXHInZGVmYXVsdCcsXHInQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZicsXHInQ291cmllciBOZXcsIENvdXJpZXIsIG1vbm9zcGFjZScsXHInR2VvcmdpYSwgc2VyaWYnLFxyJ0x1Y2lkYSBTYW5zIFVuaWNvZGUsIEx1Y2lkYSBHcmFuZGUsIHNhbnMtc2VyaWYnLFxyJ1RhaG9tYSwgR2VuZXZhLCBzYW5zLXNlcmlmJyxccidUaW1lcyBOZXcgUm9tYW4sIFRpbWVzLCBzZXJpZicsXHInVHJlYnVjaGV0IE1TLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyJ1ZlcmRhbmEsIEdlbmV2YSwgc2Fucy1zZXJpZidccl1ccn1ccn0pXHIudGhlbihlZGl0b3IgPT4ge1xyZmxvZygnQ0tFZGl0b3IgaXMgcmVhZHknLCBjb21wb25lbnQpO1xyaW5zdGFuY2VzW2NvbXBvbmVudENvbnRlbnQuYXR0cignaWQnKV0gPSBlZGl0b3I7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRSZWFkeSA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbXBvbmVudFJlYWR5LmNhbGwoa2VkaXRvciwgY29tcG9uZW50LCBlZGl0b3IpO1xyfVxyfSlcci5jYXRjaChlcnJvciA9PiB7XHJjb25zb2xlLmVycm9yKGVycm9yKTtccn0pO1xyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJ0ZXh0XCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZWRpdG9yID0gaW5zdGFuY2VzW2NvbXBvbmVudENvbnRlbnQuYXR0cignaWQnKV07XHJpZiAoZWRpdG9yKSB7XHJyZXR1cm4gZWRpdG9yLmdldERhdGEoKTtccn0gZWxzZSB7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9XHJ9LFxyZGVzdHJveTogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnZGVzdHJveSBcInRleHRcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGlkID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50JykuYXR0cignaWQnKTtccmxldCBlZGl0b3IgPSBpbnN0YW5jZXNbaWRdO1xyaWYgKGVkaXRvcikge1xyZWRpdG9yLmRlc3Ryb3koKTtccmRlbGV0ZSBpbnN0YW5jZXNbaWRdO1xyfVxyfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztccmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sndmlkZW8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ2aWRlb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCB2aWRlbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgndmlkZW8nKTtccmlmICghdmlkZW8ucGFyZW50KCkuaXMoJy52aWRlby13cmFwcGVyJykpIHtccnZpZGVvLndyYXAoJzxkaXYgY2xhc3M9XCJ2aWRlby13cmFwcGVyXCI+PC9kaXY+Jyk7XHJ9XHJ9LFxyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnZ2V0Q29udGVudCBcInZpZGVvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IHZpZGVvID0gY29tcG9uZW50Q29udGVudC5maW5kKCd2aWRlbycpO1xydmlkZW8udW53cmFwKCk7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdWaWRlbyBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidmlkZW9cIiBzZXR0aW5ncycsIGZvcm0pO1xyZm9ybS5hcHBlbmQoYFxyPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8taW5wdXRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlZpZGVvIGZpbGU8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGRpdiBjbGFzcz1cInZpZGVvLXRvb2xiYXJcIj5ccjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4tdmlkZW8taW5wdXQgYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiPjxpIGNsYXNzPVwiZmEgZmEtdXBsb2FkXCI+PC9pPjwvYT5ccjxpbnB1dCBjbGFzcz1cInZpZGVvLWlucHV0XCIgdHlwZT1cImZpbGVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIiAvPlxyPC9kaXY+XHI8L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5ccjxsYWJlbCBmb3I9XCJ2aWRlby1hdXRvcGxheVwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidmlkZW8tYXV0b3BsYXlcIiAvPlxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8tbG9vcFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+TG9vcDwvbGFiZWw+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHI8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aWRlby1sb29wXCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cInZpZGVvLWNvbnRyb2xzXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TaG93IENvbnRyb2xzPC9sYWJlbD5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInZpZGVvLWNvbnRyb2xzXCIgY2hlY2tlZCAvPlxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SYXRpbzwvbGFiZWw+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHI8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInZpZGVvLXJhZGlvXCIgY2xhc3M9XCJ2aWRlby1yYXRpb1wiIHZhbHVlPVwiNC8zXCIgY2hlY2tlZCAvPiA0OjNccjwvZGl2PlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ2aWRlby1yYWRpb1wiIGNsYXNzPVwidmlkZW8tcmF0aW9cIiB2YWx1ZT1cIjE2LzlcIiAvPiAxNjo5XHI8L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5ccjxsYWJlbCBmb3I9XCJ2aWRlby13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGggKHB4KTwvbGFiZWw+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHI8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwidmlkZW8td2lkdGggZm9ybS1jb250cm9sXCIgbWluPVwiMzIwXCIgbWF4PVwiMTkyMFwiIHZhbHVlPVwiMzIwXCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8L2Zvcm0+XHJgKTtccmxldCBmaWxlSW5wdXQgPSBmb3JtLmZpbmQoJy52aWRlby1pbnB1dCcpO1xyZm9ybS5maW5kKCcuYnRuLXZpZGVvLWlucHV0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmZpbGVJbnB1dC50cmlnZ2VyKCdjbGljaycpO1xyfSk7XHJmaWxlSW5wdXQub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBmaWxlID0gdGhpcy5maWxlc1swXTtccmxldCB2aWRlbyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ3ZpZGVvJyk7XHJpZiAoL3ZpZGVvLy50ZXN0KGZpbGUudHlwZSkpIHtcci8vIFRvZG86IFVwbG9hZCB0byB5b3VyIHNlcnZlciA6KVxydmlkZW8uYXR0cignc3JjJywgVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlKSk7XHJ9IGVsc2Uge1xyYWxlcnQoJ1lvdXIgc2VsZWN0ZWQgZmlsZSBpcyBub3QgYW4gdmlkZW8gZmlsZSEnKTtccn1ccn0pO1xybGV0IGF1dG9wbGF5VG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tYXV0b3BsYXknKTtccmF1dG9wbGF5VG9nZ2xlLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtccmxldCB2aWRlbyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ3ZpZGVvJyk7XHJ2aWRlby5wcm9wKCdhdXRvcGxheScsIHRoaXMuY2hlY2tlZCk7XHJ9KTtccmxldCBsb29wVG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tbG9vcCcpO1xybG9vcFRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xydmlkZW8ucHJvcCgnbG9vcCcsIHRoaXMuY2hlY2tlZCk7XHJ9KTtccmxldCByYXRpbyA9IGZvcm0uZmluZCgnLnZpZGVvLXJhdGlvJyk7XHJyYXRpby5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xydmlkZW8uYXR0cignZGF0YS1yYXRpbycsIHRoaXMudmFsdWUpO1xyZm9ybS5maW5kKCcudmlkZW8td2lkdGgnKS50cmlnZ2VyKCdjaGFuZ2UnKTtccn0pO1xybGV0IGNvbnRyb2xUb2dnbGUgPSBmb3JtLmZpbmQoJy52aWRlby1jb250cm9scycpO1xyY29udHJvbFRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xydmlkZW8ucHJvcCgnY29udHJvbHMnLCB0aGlzLmNoZWNrZWQpO1xyfSk7XHJsZXQgdmlkZW9XaWR0aCA9IGZvcm0uZmluZCgnLnZpZGVvLXdpZHRoJyk7XHJ2aWRlb1dpZHRoLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xybGV0IGN1cnJlbnRSYXRpbyA9IHZpZGVvLmF0dHIoJ2RhdGEtcmF0aW8nKSA9PT0gJzE2LzknID8gMTYgLyA5IDogNCAvIDM7XHJsZXQgaGVpZ2h0ID0gdGhpcy52YWx1ZSAvIGN1cnJlbnRSYXRpbztccnZpZGVvLmF0dHIoJ3dpZHRoJywgdGhpcy52YWx1ZSk7XHJ2aWRlby5hdHRyKCdoZWlnaHQnLCBoZWlnaHQpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJ2aWRlb1wiIHNldHRpbmdzJywgZm9ybSwgY29tcG9uZW50KTtccmxldCB2aWRlbyA9IGNvbXBvbmVudC5maW5kKCd2aWRlbycpO1xybGV0IGF1dG9wbGF5VG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tYXV0b3BsYXknKTtccmF1dG9wbGF5VG9nZ2xlLnByb3AoJ2NoZWNrZWQnLCB2aWRlby5wcm9wKCdhdXRvcGxheScpKTtccmxldCBsb29wVG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tbG9vcCcpO1xybG9vcFRvZ2dsZS5wcm9wKCdjaGVja2VkJywgdmlkZW8ucHJvcCgnbG9vcCcpKTtccmxldCByYXRpbyA9IGZvcm0uZmluZCgnLnZpZGVvLXJhdGlvJyk7XHJyYXRpby5wcm9wKCdjaGVja2VkJywgZmFsc2UpLmZpbHRlcignW3ZhbHVlPVwiJyArIHZpZGVvLmF0dHIoJ2RhdGEtcmF0aW8nKSArICdcIl0nKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJsZXQgY29udHJvbFRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWNvbnRyb2xzJyk7XHJjb250cm9sVG9nZ2xlLnByb3AoJ2NoZWNrZWQnLCB2aWRlby5wcm9wKCdjb250cm9scycpKTtccmxldCB2aWRlb1dpZHRoID0gZm9ybS5maW5kKCcudmlkZW8td2lkdGgnKTtccnZpZGVvV2lkdGgudmFsKHZpZGVvLmF0dHIoJ3dpZHRoJykpO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztcclxuY29uc3QgZmxvZyA9IEtFZGl0b3IubG9nO1xyS0VkaXRvci5jb21wb25lbnRzWyd2aW1lbyddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInZpbWVvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBpZnJhbWUgPSBjb21wb25lbnQuZmluZCgnaWZyYW1lJyk7XHJsZXQgd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccmtlZGl0b3IuaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcik7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdWaW1lbyBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJ2aW1lb1wiIGNvbXBvbmVudCcpO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLXZpbWVvLWVkaXRcIj5DaGFuZ2UgVmlkZW88L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aW1lby1hdXRvcGxheVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkFzcGVjdCBSYXRpbzwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdmltZW8tMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi12aW1lby00M1wiPjQ6MzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccmxldCBidG5FZGl0ID0gZm9ybS5maW5kKCcuYnRuLXZpbWVvLWVkaXQnKTtccmJ0bkVkaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBpbnB1dERhdGEgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciBWaW1lbyBVUkwgaW4gaGVyZTonKTtccmxldCB2aW1lb1JlZ2V4ID0gL2h0dHBzPzpcXC9cXC8oPzp3d3dcXC58cGxheWVyXFwuKT92aW1lby5jb21cXC8oPzpjaGFubmVsc1xcLyg/OlxcdytcXC8pP3xncm91cHNcXC8oW15cXC9dKilcXC92aWRlb3NcXC98YWxidW1cXC8oXFxkKylcXC92aWRlb1xcL3x2aWRlb1xcL3wpKFxcZCspKD86JHxcXC98XFw/KS87XHJsZXQgbWF0Y2ggPSBpbnB1dERhdGEubWF0Y2godmltZW9SZWdleCk7XHJpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLycgKyBtYXRjaFsxXSArICc/YnlsaW5lPTAmcG9ydHJhaXQ9MCZiYWRnZT0wJyk7XHJ9IGVsc2Uge1xyYWxlcnQoJ1lvdXIgVmltZW8gVVJMIGlzIGludmFsaWQhJyk7XHJ9XHJ9KTtccmxldCBidG4xNjkgPSBmb3JtLmZpbmQoJy5idG4tdmltZW8tMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi12aW1lby00MycpO1xyYnRuNDMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJyk7XHJ9KTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3ZpbWVvLWF1dG9wbGF5Jyk7XHJjaGtBdXRvcGxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgZW1iZWRJdGVtID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpO1xybGV0IGN1cnJlbnRVcmwgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJsZXQgbmV3VXJsID0gKGN1cnJlbnRVcmwucmVwbGFjZSgvKFxcPy4rKSsvLCAnJykpICsgJz9ieWxpbmU9MCZwb3J0cmFpdD0wJmJhZGdlPTAmYXV0b3BsYXk9JyArIChjaGtBdXRvcGxheS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwKTtccmZsb2coJ0N1cnJlbnQgdXJsOiAnICsgY3VycmVudFVybCwgJ05ldyB1cmw6ICcgKyBuZXdVcmwpO1xyZW1iZWRJdGVtLmF0dHIoJ3NyYycsIG5ld1VybCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInZpbWVvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBlbWJlZEl0ZW0gPSBjb21wb25lbnQuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjdmltZW8tYXV0b3BsYXknKTtccmxldCBzcmMgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJjaGtBdXRvcGxheS5wcm9wKCdjaGVja2VkJywgc3JjLmluZGV4T2YoJ2F1dG9wbGF5PTEnKSAhPT0gLTEpO1xyfVxyXG59O1xyXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xyXG5pbXBvcnQgS0VkaXRvciBmcm9tICdrZWRpdG9yJztcclxuY29uc3QgZmxvZyA9IEtFZGl0b3IubG9nO1xyS0VkaXRvci5jb21wb25lbnRzWyd5b3V0dWJlJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwieW91dHViZVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnWW91dHViZSBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJ5b3V0dWJlXCIgY29tcG9uZW50Jyk7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeSBidG4teW91dHViZS1lZGl0XCI+Q2hhbmdlIFZpZGVvPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwieW91dHViZS1hdXRvcGxheVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkFzcGVjdCBSYXRpbzwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4teW91dHViZS0xNjlcIj4xNjo5PC9idXR0b24+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXlvdXR1YmUtNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi15b3V0dWJlLWVkaXQnKTtccmJ0bkVkaXQub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmxldCBpbnB1dERhdGEgPSBwcm9tcHQoJ1BsZWFzZSBlbnRlciBZb3V0dWJlIFVSTCBpbiBoZXJlOicpO1xybGV0IHlvdXR1YmVSZWdleCA9IC9eKD86aHR0cCg/OnMpPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86bVxcLik/KD86eW91dHVcXC5iZVxcL3x5b3V0dWJlXFwuY29tXFwvKD86KD86d2F0Y2gpP1xcPyg/Oi4qJik/dig/OmkpPz18KD86ZW1iZWR8dnx2aXx1c2VyKVxcLykpKFteXFw/JlxcXCInPl0rKS87XHJsZXQgbWF0Y2ggPSBpbnB1dERhdGEubWF0Y2goeW91dHViZVJlZ2V4KTtccmlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpLmF0dHIoJ3NyYycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgbWF0Y2hbMV0pO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIFlvdXR1YmUgVVJMIGlzIGludmFsaWQhJyk7XHJ9XHJ9KTtccmxldCBidG4xNjkgPSBmb3JtLmZpbmQoJy5idG4teW91dHViZS0xNjknKTtccmJ0bjE2OS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKTtccn0pO1xybGV0IGJ0bjQzID0gZm9ybS5maW5kKCcuYnRuLXlvdXR1YmUtNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN5b3V0dWJlLWF1dG9wbGF5Jyk7XHJjaGtBdXRvcGxheS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgZW1iZWRJdGVtID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpO1xybGV0IGN1cnJlbnRVcmwgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJsZXQgbmV3VXJsID0gKGN1cnJlbnRVcmwucmVwbGFjZSgvKFxcPy4rKSsvLCAnJykpICsgJz9hdXRvcGxheT0nICsgKGNoa0F1dG9wbGF5LmlzKCc6Y2hlY2tlZCcpID8gMSA6IDApO1xyZmxvZygnQ3VycmVudCB1cmw6ICcgKyBjdXJyZW50VXJsLCAnTmV3IHVybDogJyArIG5ld1VybCk7XHJlbWJlZEl0ZW0uYXR0cignc3JjJywgbmV3VXJsKTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwieW91dHViZVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZW1iZWRJdGVtID0gY29tcG9uZW50LmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3lvdXR1YmUtYXV0b3BsYXknKTtccmxldCBzcmMgPSBlbWJlZEl0ZW0uYXR0cignc3JjJyk7XHJjaGtBdXRvcGxheS5wcm9wKCdjaGVja2VkJywgc3JjLmluZGV4T2YoJ2F1dG9wbGF5PTEnKSAhPT0gLTEpO1xyfVxyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfSW5saW5lRWRpdG9yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2pxdWVyeV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rZWRpdG9yX187Il0sInNvdXJjZVJvb3QiOiIifQ==