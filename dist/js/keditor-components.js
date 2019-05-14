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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3M/OGI5YyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJJbmxpbmVFZGl0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqUXVlcnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJLRWRpdG9yXCIiXSwibmFtZXMiOlsiZmxvZyIsIktFZGl0b3IiLCJsb2ciLCJjb21wb25lbnRzIiwiZ2V0Q29udGVudCIsImNvbXBvbmVudCIsImtlZGl0b3IiLCJjb21wb25lbnRDb250ZW50IiwiY2hpbGRyZW4iLCJhdWRpbyIsImZpbmQiLCJ1bndyYXAiLCJodG1sIiwic2V0dGluZ0VuYWJsZWQiLCJzZXR0aW5nVGl0bGUiLCJpbml0U2V0dGluZ0Zvcm0iLCJmb3JtIiwiYXBwZW5kIiwic2hvd1NldHRpbmdGb3JtIiwib3B0aW9ucyIsImZpbGVJbnB1dCIsImJ0bkF1ZGlvRmlsZUlucHV0Iiwib2ZmIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiZmlsZSIsImZpbGVzIiwidGVzdCIsInR5cGUiLCJhdHRyIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwibG9hZCIsInNob3dTZXR0aW5nUGFuZWwiLCJhbGVydCIsImF1dG9wbGF5VG9nZ2xlIiwiY2hlY2tlZCIsInJlbW92ZUF0dHIiLCJzaG93Y29udHJvbHNUb2dnbGUiLCJhdWRpb1dpZHRoIiwiY3NzIiwidmFsdWUiLCJpbml0Rm9ybUJ1aWxkZXIiLCJzZWxmIiwiZm9ybUJ1aWxkZXJBcmVhIiwiZm9ybURhdGEiLCJmb3JtQ29udGVudCIsInByZXBlbmQiLCJidG5FZGl0Rm9ybSIsImJ0blByZXZpZXdGb3JtIiwiZm9ybUJ1aWxkZXIiLCJkaXNhYmxlSW5qZWN0ZWRTdHlsZSIsInNob3dBY3Rpb25CdXR0b25zIiwiZGF0YVR5cGUiLCJkaXNhYmxlRmllbGRzIiwiZGlzYWJsZWRBdHRycyIsInR5cGVVc2VyRGlzYWJsZWRBdHRycyIsImhhc0NsYXNzIiwic2hvdyIsImhpZGUiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVuZGVyRm9ybSIsImRhdGEiLCJmb3JtUmVuZGVyIiwiYWN0aW9ucyIsImdldERhdGEiLCJlYWNoIiwiZGl2IiwiJCIsImRhdGFHcmlkIiwic3BsaXQiLCJ3cmFwIiwibGFiZWwiLCJpbnB1dCIsInN1YkRpdiIsImxlbmd0aCIsImluaXQiLCJjb250ZW50QXJlYSIsImNvbnRhaW5lciIsInJlbW92ZSIsImdldFNldHRpbmdDb21wb25lbnQiLCJsYXlvdXQiLCJ2YWwiLCJpZnJhbWUiLCJ3cmFwcGVyIiwicGFyZW50IiwiaW5pdElmcmFtZUNvdmVyIiwiYnRuRWRpdCIsImlucHV0RGF0YSIsInByb21wdCIsInNyYyIsImJ0bjE2OSIsImJ0bjQzIiwiaW1nIiwicGhvdG9FZGl0IiwibmV4dCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJhZGRFdmVudExpc3RlbmVyIiwidGFyZ2V0IiwicmVzdWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJyZWFkQXNEYXRhVVJMIiwiaW5wdXRBbGlnbiIsInBhbmVsIiwiaW5wdXRSZXNwb25zaXZlIiwiY2JiU3R5bGUiLCJpbnB1dFdpZHRoIiwiaW5wdXRIZWlnaHQiLCJuZXdXaWR0aCIsIm5ld0hlaWdodCIsIk1hdGgiLCJyb3VuZCIsInJhdGlvIiwiYWxnaW4iLCJwcm9wIiwiaW5zdGFuY2VzIiwib25Db21wb25lbnRDaGFuZ2VkIiwiY2FsbCIsIm9uQ29udGFpbmVyQ2hhbmdlZCIsIm9uQ29udGVudENoYW5nZWQiLCJJbmxpbmVFZGl0b3IiLCJjcmVhdGUiLCJnZXQiLCJmb250RmFtaWx5IiwidGhlbiIsImVkaXRvciIsIm9uQ29tcG9uZW50UmVhZHkiLCJlcnJvciIsImNvbnNvbGUiLCJkZXN0cm95IiwiaWQiLCJ2aWRlbyIsImlzIiwiYnRuVmlkZW9GaWxlSW5wdXQiLCJyZW1vdmVQcm9wIiwibG9vcFRvZ2dsZSIsImN1cnJlbnRXaWR0aCIsInJlcGxhY2UiLCJjdXJyZW50UmF0aW8iLCJ2aWRlb1dpZHRoIiwidmltZW9SZWdleCIsIm1hdGNoIiwiY2hrQXV0b3BsYXkiLCJlbWJlZEl0ZW0iLCJjdXJyZW50VXJsIiwibmV3VXJsIiwiaW5kZXhPZiIsInlvdXR1YmVSZWdleCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7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QkFBUixHQUE4QnpFLElBQTlCLENBQW1DLHdCQUFuQyxDQUFoQjtBQUNBLFVBQUkySSxVQUFVLEdBQUdELFNBQVMsQ0FBQ3JILElBQVYsQ0FBZSxLQUFmLENBQWpCO0FBQ0EsVUFBSXVILE1BQU0sR0FBSUQsVUFBVSxDQUFDUCxPQUFYLENBQW1CLFNBQW5CLEVBQThCLEVBQTlCLENBQUQsR0FBc0MsWUFBdEMsSUFBc0RLLFdBQVcsQ0FBQ1YsRUFBWixDQUFlLFVBQWYsSUFBNkIsQ0FBN0IsR0FBaUMsQ0FBdkYsQ0FBYjtBQUNBekksVUFBSSxDQUFDLGtCQUFrQnFKLFVBQW5CLEVBQStCLGNBQWNDLE1BQTdDLENBQUo7QUFDQUYsZUFBUyxDQUFDckgsSUFBVixDQUFlLEtBQWYsRUFBc0J1SCxNQUF0QjtBQUNDLEtBTkQ7QUFPQyxHQS9EK0I7QUFnRWhDcEksaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMscUNBQUQsRUFBd0NLLFNBQXhDLENBQUo7QUFDQSxRQUFJK0ksU0FBUyxHQUFHL0ksU0FBUyxDQUFDSyxJQUFWLENBQWUsd0JBQWYsQ0FBaEI7QUFDQSxRQUFJeUksV0FBVyxHQUFHbkksSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBbEI7QUFDQSxRQUFJbUYsR0FBRyxHQUFHdUQsU0FBUyxDQUFDckgsSUFBVixDQUFlLEtBQWYsQ0FBVjtBQUNBb0gsZUFBVyxDQUFDNUIsSUFBWixDQUFpQixTQUFqQixFQUE0QjFCLEdBQUcsQ0FBQzBELE9BQUosQ0FBWSxZQUFaLE1BQThCLENBQUMsQ0FBM0Q7QUFDQztBQXRFK0IsQ0FBaEMsQzs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJqcy9rZWRpdG9yLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJJbmxpbmVFZGl0b3JcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJLRWRpdG9yXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIklubGluZUVkaXRvclwiLCBcImpRdWVyeVwiLCBcIktFZGl0b3JcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIklubGluZUVkaXRvclwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIktFZGl0b3JcIikpIDogZmFjdG9yeShyb290W1wiSW5saW5lRWRpdG9yXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1wiS0VkaXRvclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9JbmxpbmVFZGl0b3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rZWRpdG9yX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LWF1ZGlvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1nb29nbGVtYXAuanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXBob3RvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC12aWRlby5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdmltZW8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMnO1xyIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1snYXVkaW8nXSA9IHtccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJhdWRpb1wiIGNvbXBvbmVudCwgY29tcG9uZW50Jyk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBhdWRpbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgnYXVkaW8nKTtccmF1ZGlvLnVud3JhcCgpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnQXVkaW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcImF1ZGlvXCIgc2V0dGluZ3MnLCBmb3JtKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpb0ZpbGVJbnB1dFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXVkaW8gZmlsZTwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tdG9vbGJhclwiPicgK1xyJyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0bi1hdWRpb0ZpbGVJbnB1dCBidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+PC9hPicgK1xyJyAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYXVkaW9GaWxlSW5wdXRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIC8+JyArXHInICAgICAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby1hdXRvcGxheVwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYXVkaW8tYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby1zaG93Y29udHJvbHNcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlNob3cgQ29udHJvbHM8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYXVkaW8tc2hvd2NvbnRyb2xzXCIgY2hlY2tlZCAvPicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGggKCUpPC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJhdWRpby13aWR0aFwiIG1pbj1cIjIwXCIgbWF4PVwiMTAwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjEwMFwiIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcImF1ZGlvXCIgY29tcG9uZW50JywgZm9ybSwgY29tcG9uZW50KTtccmxldCBvcHRpb25zID0ga2VkaXRvci5vcHRpb25zO1xybGV0IGF1ZGlvID0gY29tcG9uZW50LmZpbmQoJ2F1ZGlvJyk7XHJsZXQgZmlsZUlucHV0ID0gZm9ybS5maW5kKCcjYXVkaW9GaWxlSW5wdXQnKTtccmxldCBidG5BdWRpb0ZpbGVJbnB1dCA9IGZvcm0uZmluZCgnLmJ0bi1hdWRpb0ZpbGVJbnB1dCcpO1xyYnRuQXVkaW9GaWxlSW5wdXQub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBmaWxlID0gdGhpcy5maWxlc1swXTtccmlmICgvYXVkaW8vLnRlc3QoZmlsZS50eXBlKSkge1xyLy8gVG9kbzogVXBsb2FkIHRvIHlvdXIgc2VydmVyIDopXHJhdWRpby5hdHRyKCdzcmMnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtccmF1ZGlvLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGNvbXBvbmVudCwgb3B0aW9ucyk7XHJ9KTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBhbiBhdWRpbyBmaWxlIScpO1xyfVxyfSk7XHJsZXQgYXV0b3BsYXlUb2dnbGUgPSBmb3JtLmZpbmQoJyNhdWRpby1hdXRvcGxheScpO1xyYXV0b3BsYXlUb2dnbGUub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJpZiAodGhpcy5jaGVja2VkKSB7XHJhdWRpby5hdHRyKCdhdXRvcGxheScsICdhdXRvcGxheScpO1xyfSBlbHNlIHtccmF1ZGlvLnJlbW92ZUF0dHIoJ2F1dG9wbGF5Jyk7XHJ9XHJ9KTtccmxldCBzaG93Y29udHJvbHNUb2dnbGUgPSBmb3JtLmZpbmQoJyNhdWRpby1zaG93Y29udHJvbHMnKTtccnNob3djb250cm9sc1RvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccmF1ZGlvLmF0dHIoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XHJ9IGVsc2Uge1xyYXVkaW8ucmVtb3ZlQXR0cignY29udHJvbHMnKTtccn1ccn0pO1xybGV0IGF1ZGlvV2lkdGggPSBmb3JtLmZpbmQoJyNhdWRpby13aWR0aCcpO1xyYXVkaW9XaWR0aC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJhdWRpby5jc3MoJ3dpZHRoJywgdGhpcy52YWx1ZSArICclJyk7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMva2VkaXRvci1jb21wb25lbnQtZm9ybS5sZXNzJztccmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2Zvcm0nXSA9IHtccmluaXRGb3JtQnVpbGRlcjogZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50JykucHJlcGVuZChccic8cCBjbGFzcz1cImZvcm0tYnVpbGRlci10b29sc1wiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+JyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByZXZpZXctZm9ybVwiPlByZXZpZXcgZm9ybTwvYT4gJyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLWVkaXQtZm9ybSBkaXNhYmxlZFwiPkVkaXQgZm9ybTwvYT4nICtccic8L3A+J1xyKTtccmxldCBidG5FZGl0Rm9ybSA9IGNvbXBvbmVudC5maW5kKCcuYnRuLWVkaXQtZm9ybScpO1xybGV0IGJ0blByZXZpZXdGb3JtID0gY29tcG9uZW50LmZpbmQoJy5idG4tcHJldmlldy1mb3JtJyk7XHJmb3JtQnVpbGRlckFyZWEuZm9ybUJ1aWxkZXIoe1xyZGlzYWJsZUluamVjdGVkU3R5bGU6IHRydWUsXHJzaG93QWN0aW9uQnV0dG9uczogZmFsc2UsXHJkYXRhVHlwZTogJ2pzb24nLFxyZm9ybURhdGE6IGZvcm1EYXRhLmh0bWwoKSxccmRpc2FibGVGaWVsZHM6IFtccidhdXRvY29tcGxldGUnLFxyJ3BhcmFncmFwaCcsXHInaGVhZGVyJ1xyXSxccmRpc2FibGVkQXR0cnM6IFsnYWNjZXNzJ10sXHJ0eXBlVXNlckRpc2FibGVkQXR0cnM6IHtccidjaGVja2JveC1ncm91cCc6IFtccid0b2dnbGUnLFxyJ2lubGluZSdccl1ccn1ccn0pO1xyYnRuRWRpdEZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmlmICghYnRuRWRpdEZvcm0uaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtccmZvcm1CdWlsZGVyQXJlYS5zaG93KCk7XHJmb3JtQ29udGVudC5oaWRlKCk7XHJidG5FZGl0Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccmJ0blByZXZpZXdGb3JtLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyfVxyfSk7XHJidG5QcmV2aWV3Rm9ybS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyaWYgKCFidG5QcmV2aWV3Rm9ybS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyc2VsZi5yZW5kZXJGb3JtKGNvbXBvbmVudCk7XHJmb3JtQnVpbGRlckFyZWEuaGlkZSgpO1xyZm9ybUNvbnRlbnQuc2hvdygpO1xyYnRuRWRpdEZvcm0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJidG5QcmV2aWV3Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccn1ccn0pO1xyfSxccnJlbmRlckZvcm06IGZ1bmN0aW9uIChjb21wb25lbnQsIGZvcm1CdWlsZGVyKSB7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyaWYgKCFmb3JtQnVpbGRlcikge1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJ9XHJmb3JtQ29udGVudC5mb3JtUmVuZGVyKHtccmRhdGFUeXBlOiAnanNvbicsXHJmb3JtRGF0YTogZm9ybUJ1aWxkZXIuYWN0aW9ucy5nZXREYXRhKCdqc29uJylccn0pO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWhvcml6b250YWwnKSkge1xyZm9ybUNvbnRlbnQuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGRpdiA9ICQodGhpcyk7XHJsZXQgZGF0YUdyaWQgPSBmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04JztccmRhdGFHcmlkID0gZGF0YUdyaWQuc3BsaXQoJy0nKTtccmlmIChkaXYuYXR0cignY2xhc3MnKSkge1xyaWYgKGRpdi5oYXNDbGFzcygnZmItYnV0dG9uJykpIHtccmRpdi5maW5kKCdidXR0b24nKS53cmFwKCc8ZGl2IGNsYXNzPVwiY29sLXNtLScgKyBkYXRhR3JpZFsxXSArICcgY29sLXNtLW9mZnNldC0nICsgZGF0YUdyaWRbMF0gKyAnXCI+PC9kaXY+Jyk7XHJ9IGVsc2Uge1xybGV0IGxhYmVsID0gZGl2LmNoaWxkcmVuKCdsYWJlbCcpO1xybGV0IGlucHV0ID0gZGl2LmNoaWxkcmVuKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xybGV0IHN1YkRpdiA9IGRpdi5jaGlsZHJlbignZGl2Jyk7XHJsYWJlbC5hZGRDbGFzcygnY29udHJvbC1sYWJlbCBjb2wtc20tJyArIGRhdGFHcmlkWzBdKTtccmlmIChzdWJEaXYubGVuZ3RoID4gMCkge1xyc3ViRGl2LmFkZENsYXNzKCdjb2wtc20tJyArIGRhdGFHcmlkWzFdKTtccn0gZWxzZSB7XHJpbnB1dC5hZGRDbGFzcygnZm9ybS1jb250cm9sJykud3JhcCgnPGRpdiBjbGFzcz1cImNvbC1zbS0nICsgZGF0YUdyaWRbMV0gKyAnXCI+PC9kaXY+Jyk7XHJ9XHJ9XHJ9XHJ9KTtccn1ccn0sXHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGZvcm1CdWlsZGVyID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJpZiAoZm9ybURhdGEubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZGF0YVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1wiPjwvZGl2PicpXHJ9XHJpZiAoZm9ybUNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGZvcm0gY2xhc3M9XCJmb3JtLWNvbnRlbnRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcIj48L2Zvcm0+Jylccn0gZWxzZSB7XHJmb3JtQ29udGVudC5oaWRlKClccn1ccmlmIChmb3JtQnVpbGRlci5sZW5ndGggPT09IDApIHtccmZvcm1CdWlsZGVyID0gJCgnPGRpdiBjbGFzcz1cImZvcm0tYnVpbGRlci1hcmVhIGNsZWFyZml4XCI+PC9kaXY+Jyk7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZChmb3JtQnVpbGRlcik7XHJ9XHJ0aGlzLmluaXRGb3JtQnVpbGRlcihjb21wb25lbnQpO1xyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJmb3JtXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZm9ybURhdGEgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tZGF0YScpO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9ICQoJyMnICsgY29tcG9uZW50LmF0dHIoJ2lkJykpLmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50LCBmb3JtQnVpbGRlcik7XHJmb3JtRGF0YS5odG1sKGZvcm1CdWlsZGVyLmFjdGlvbnMuZ2V0RGF0YSgnanNvbicpKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEsIC5mb3JtLWJ1aWxkZXItdG9vbHMnKS5yZW1vdmUoKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jykuc2hvdygpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnRm9ybSBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJmb3JtXCIgY29tcG9uZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJmb3JtLmh0bWwoXHInPGRpdiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QWN0aW9uPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0eHQtZm9ybS1hY3Rpb25cIiAvPicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TWV0aG9kPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1tZXRob2RcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdldFwiPkdldDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9zdFwiPlBvc3Q8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1dFwiPlB1dDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+RGVsZXRlPC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5FbmN0eXBlPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1lbmN0eXBlXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0L3BsYWluXCI+dGV4dC9wbGFpbjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPm11bHRpcGFydC9mb3JtLWRhdGE8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiPmFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TGF5b3V0PC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1sYXlvdXRcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vcm1hbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1ob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1pbmxpbmVcIj5JbmxpbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2VsZWN0LWdyaWQtd3JhcHBlclwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+R3JpZCBzZXR0aW5nPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1ncmlkXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyLTEwXCI+Y29sLTIgY29sLTEwPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzLTlcIj5jb2wtMyBjb2wtOTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC04XCI+Y29sLTQgY29sLTg8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUtN1wiPmNvbC01IGNvbC03PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2LTZcIj5jb2wtNiBjb2wtNjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImhlbHAtYmxvY2tcIj5UaGlzIHNldHRpbmcgaXMgZm9yIHdpZHRoIG9mIGxhYmVsIGFuZCBjb250cm9sIHdpdGggbnVtYmVyIG9mIGNvbHMgYXMgdW5pdDwvc21hbGw+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInPC9kaXY+J1xyKTtccmZvcm0uZmluZCgnLnR4dC1mb3JtLWFjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGNvbXBvbmVudCA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZW5jdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtbGF5b3V0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5yZW1vdmVDbGFzcygnZm9ybS1pbmxpbmUgZm9ybS1ob3Jpem9udGFsJyk7XHJpZiAodGhpcy52YWx1ZSkge1xyZm9ybUNvbnRlbnQuYWRkQ2xhc3ModGhpcy52YWx1ZSk7XHJ9XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCB0aGlzLnZhbHVlID09PSAnZm9ybS1ob3Jpem9udGFsJyA/ICdibG9jaycgOiAnbm9uZScpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZGF0YS1ncmlkJywgdGhpcy52YWx1ZSk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGxheW91dCA9ICcnO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWlubGluZScpKSB7XHJsYXlvdXQgPSAnZm9ybS1pbmxpbmUnO1xyfSBlbHNlIGlmIChmb3JtQ29udGVudC5oYXNDbGFzcygnZm9ybS1ob3Jpem9udGFsJykpIHtccmxheW91dCA9ICdmb3JtLWhvcml6b250YWwnO1xyfVxyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykudmFsKGZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicpIHx8ICcnKTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignbWV0aG9kJykgfHwgJ2dldCcpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWVuY3R5cGUnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScpKTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS52YWwobGF5b3V0KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCBsYXlvdXQgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLnZhbChmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04Jyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2dvb2dsZW1hcCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcImdvb2dsZW1hcFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnR29vZ2xlIE1hcCBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJnb29nbGVtYXBcIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi1nb29nbGVtYXAtZWRpdFwiPlVwZGF0ZSBNYXA8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXNwZWN0IFJhdGlvPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtZWRpdCcpO1xyYnRuRWRpdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGlucHV0RGF0YSA9IHByb21wdCgnUGxlYXNlIGVudGVyIEdvb2dsZSBNYXAgZW1iZWQgY29kZSBpbiBoZXJlOicpO1xybGV0IGlmcmFtZSA9ICQoaW5wdXREYXRhKTtccmxldCBzcmMgPSBpZnJhbWUuYXR0cignc3JjJyk7XHJpZiAoaWZyYW1lLmxlbmd0aCA+IDAgJiYgc3JjICYmIHNyYy5sZW5ndGggPiAwKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgc3JjKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBHb29nbGUgTWFwIGVtYmVkIGNvZGUgaXMgaW52YWxpZCEnKTtccn1ccn0pO1xybGV0IGJ0bjE2OSA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3Bob3RvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwicGhvdG9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgaW1nID0gY29tcG9uZW50Q29udGVudC5maW5kKCdpbWcnKTtccmltZy5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdQaG90byBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJwaG90b1wiIGNvbXBvbmVudCcpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIGlkPVwicGhvdG8tZWRpdFwiPkNoYW5nZSBQaG90bzwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLWFsaWduXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BbGlnbjwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1hbGlnblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+JyArXHInICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXN0eWxlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TdHlsZTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1zdHlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXJvdW5kZWRcIj5Sb3VuZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltZy1jaXJjbGVcIj5DaXJjbGU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXRodW1ibmFpbFwiPlRodW1ibmFpbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1yZXNwb25zaXZlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SZXNwb25zaXZlPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGhvdG8tcmVzcG9uc2l2ZVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGg8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvdG8td2lkdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkhlaWdodDwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IHBob3RvRWRpdCA9IGZvcm0uZmluZCgnI3Bob3RvLWVkaXQnKTtccmxldCBmaWxlSW5wdXQgPSBwaG90b0VkaXQubmV4dCgpO1xycGhvdG9FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJpZiAoL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHtccmxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xycmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xyaW1nLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJpbWcuY3NzKHtccndpZHRoOiAnJyxccmhlaWdodDogJydccn0pO1xyaW1nLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLCBvcHRpb25zKTtccn0pO1xyfSk7XHJyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzWzBdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBwaG90byEnKTtccn1ccn0pO1xybGV0IGlucHV0QWxpZ24gPSBmb3JtLmZpbmQoJyNwaG90by1hbGlnbicpO1xyaW5wdXRBbGlnbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHBhbmVsID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJwYW5lbC5jc3MoJ3RleHQtYWxpZ24nLCB0aGlzLnZhbHVlKTtccn0pO1xybGV0IGlucHV0UmVzcG9uc2l2ZSA9IGZvcm0uZmluZCgnI3Bob3RvLXJlc3BvbnNpdmUnKTtccmlucHV0UmVzcG9uc2l2ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCdpbWcnKVt0aGlzLmNoZWNrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2ltZy1yZXNwb25zaXZlJyk7XHJ9KTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJjYmJTdHlsZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IHZhbCA9IHRoaXMudmFsdWU7XHJpbWcucmVtb3ZlQ2xhc3MoJ2ltZy1yb3VuZGVkIGltZy1jaXJjbGUgaW1nLXRodW1ibmFpbCcpO1xyaWYgKHZhbCkge1xyaW1nLmFkZENsYXNzKHZhbCk7XHJ9XHJ9KTtccmxldCBpbnB1dFdpZHRoID0gZm9ybS5maW5kKCcjcGhvdG8td2lkdGgnKTtccmxldCBpbnB1dEhlaWdodCA9IGZvcm0uZmluZCgnI3Bob3RvLWhlaWdodCcpO1xyaW5wdXRXaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IG5ld1dpZHRoID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNlbGYucmF0aW8pO1xyaWYgKG5ld1dpZHRoIDw9IDApIHtccm5ld1dpZHRoID0gc2VsZi53aWR0aDtccm5ld0hlaWdodCA9IHNlbGYuaGVpZ2h0O1xydGhpcy52YWx1ZSA9IG5ld1dpZHRoO1xyfVxyaW1nLmNzcyh7XHInd2lkdGgnOiBuZXdXaWR0aCxccidoZWlnaHQnOiBuZXdIZWlnaHRccn0pO1xyaW5wdXRIZWlnaHQudmFsKG5ld0hlaWdodCk7XHJ9KTtccmlucHV0SGVpZ2h0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgbmV3SGVpZ2h0ID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3V2lkdGggPSBNYXRoLnJvdW5kKG5ld0hlaWdodCAqIHNlbGYucmF0aW8pO1xyaWYgKG5ld0hlaWdodCA8PSAwKSB7XHJuZXdXaWR0aCA9IHNlbGYud2lkdGg7XHJuZXdIZWlnaHQgPSBzZWxmLmhlaWdodDtccnRoaXMudmFsdWUgPSBuZXdIZWlnaHQ7XHJ9XHJpbWcuY3NzKHtccidoZWlnaHQnOiBuZXdIZWlnaHQsXHInd2lkdGgnOiBuZXdXaWR0aFxyfSk7XHJpbnB1dFdpZHRoLnZhbChuZXdXaWR0aCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInBob3RvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBpbnB1dEFsaWduID0gZm9ybS5maW5kKCcjcGhvdG8tYWxpZ24nKTtccmxldCBpbnB1dFJlc3BvbnNpdmUgPSBmb3JtLmZpbmQoJyNwaG90by1yZXNwb25zaXZlJyk7XHJsZXQgaW5wdXRXaWR0aCA9IGZvcm0uZmluZCgnI3Bob3RvLXdpZHRoJyk7XHJsZXQgaW5wdXRIZWlnaHQgPSBmb3JtLmZpbmQoJyNwaG90by1oZWlnaHQnKTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJsZXQgcGFuZWwgPSBjb21wb25lbnQuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJsZXQgaW1nID0gcGFuZWwuZmluZCgnaW1nJyk7XHJsZXQgYWxnaW4gPSBwYW5lbC5jc3MoJ3RleHQtYWxpZ24nKTtccmlmIChhbGdpbiAhPT0gJ3JpZ2h0JyB8fCBhbGdpbiAhPT0gJ2NlbnRlcicpIHtccmFsZ2luID0gJ2xlZnQnO1xyfVxyaWYgKGltZy5oYXNDbGFzcygnaW1nLXJvdW5kZWQnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctcm91bmRlZCcpO1xyfSBlbHNlIGlmIChpbWcuaGFzQ2xhc3MoJ2ltZy1jaXJjbGUnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctY2lyY2xlJyk7XHJ9IGVsc2UgaWYgKGltZy5oYXNDbGFzcygnaW1nLXRodW1ibmFpbCcpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy10aHVtYm5haWwnKTtccn0gZWxzZSB7XHJjYmJTdHlsZS52YWwoJycpO1xyfVxyaW5wdXRBbGlnbi52YWwoYWxnaW4pO1xyaW5wdXRSZXNwb25zaXZlLnByb3AoJ2NoZWNrZWQnLCBpbWcuaGFzQ2xhc3MoJ2ltZy1yZXNwb25zaXZlJykpO1xyaW5wdXRXaWR0aC52YWwoaW1nLndpZHRoKCkpO1xyaW5wdXRIZWlnaHQudmFsKGltZy5oZWlnaHQoKSk7XHIkKCc8aW1nIC8+JykuYXR0cignc3JjJywgaW1nLmF0dHIoJ3NyYycpKS5sb2FkKGZ1bmN0aW9uICgpIHtccnNlbGYucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJzZWxmLndpZHRoID0gdGhpcy53aWR0aDtccnNlbGYuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJjb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJcbmltcG9ydCBJbmxpbmVFZGl0b3IgZnJvbSAnSW5saW5lRWRpdG9yJztccmNvbnN0IGluc3RhbmNlcyA9IHt9O1xyLy8gVGV4dCBjb21wb25lbnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbktFZGl0b3IuY29tcG9uZW50c1sndGV4dCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInRleHRcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQucHJvcCgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XHJjb21wb25lbnRDb250ZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50Q2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlLCBjb21wb25lbnQpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChjb250ZW50QXJlYSwgZSwgY29udGFpbmVyKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChrZWRpdG9yLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccklubGluZUVkaXRvclxyLmNyZWF0ZShjb21wb25lbnRDb250ZW50LmdldCgwKSwge1xyZm9udEZhbWlseToge1xyb3B0aW9uczogW1xyJ2RlZmF1bHQnLFxyJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyJ0NvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2UnLFxyJ0dlb3JnaWEsIHNlcmlmJyxccidMdWNpZGEgU2FucyBVbmljb2RlLCBMdWNpZGEgR3JhbmRlLCBzYW5zLXNlcmlmJyxccidUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZicsXHInVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWYnLFxyJ1RyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxccidWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnXHJdXHJ9XHJ9KVxyLnRoZW4oZWRpdG9yID0+IHtccmZsb2coJ0NLRWRpdG9yIGlzIHJlYWR5JywgY29tcG9uZW50KTtccmluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldID0gZWRpdG9yO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50UmVhZHkgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRSZWFkeS5jYWxsKGtlZGl0b3IsIGNvbXBvbmVudCwgZWRpdG9yKTtccn1ccn0pXHIuY2F0Y2goZXJyb3IgPT4ge1xyY29uc29sZS5lcnJvcihlcnJvcik7XHJ9KTtccn0sXHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdnZXRDb250ZW50IFwidGV4dFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGVkaXRvciA9IGluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldO1xyaWYgKGVkaXRvcikge1xycmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XHJ9IGVsc2Uge1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyfSxccmRlc3Ryb3k6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2Rlc3Ryb3kgXCJ0ZXh0XCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBpZCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpLmF0dHIoJ2lkJyk7XHJsZXQgZWRpdG9yID0gaW5zdGFuY2VzW2lkXTtccmlmIChlZGl0b3IpIHtccmVkaXRvci5kZXN0cm95KCk7XHJkZWxldGUgaW5zdGFuY2VzW2lkXTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sndmlkZW8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ2aWRlb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCB2aWRlbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgndmlkZW8nKTtccmlmICghdmlkZW8ucGFyZW50KCkuaXMoJy52aWRlby13cmFwcGVyJykpIHtccnZpZGVvLndyYXAoJzxkaXYgY2xhc3M9XCJ2aWRlby13cmFwcGVyXCI+PC9kaXY+Jyk7XHJ9XHJ9LFxyZ2V0Q29udGVudDogZnVuY3Rpb24gKGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnZ2V0Q29udGVudCBcInZpZGVvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmNoaWxkcmVuKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IHZpZGVvID0gY29tcG9uZW50Q29udGVudC5maW5kKCd2aWRlbycpO1xydmlkZW8udW53cmFwKCk7XHJyZXR1cm4gY29tcG9uZW50Q29udGVudC5odG1sKCk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdWaWRlbyBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidmlkZW9cIiBzZXR0aW5ncycsIGZvcm0pO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlb0ZpbGVJbnB1dFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+VmlkZW8gZmlsZTwvbGFiZWw+JyArXHInICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZpZGVvLXRvb2xiYXJcIj4nICtccicgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0bi12aWRlb0ZpbGVJbnB1dCBidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+PC9hPicgK1xyJyAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJ2aWRlb0ZpbGVJbnB1dFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCI+JyArXHInICAgICAgICAgICAgPC9kaXY+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgZm9yPVwidmlkZW8tYXV0b3BsYXlcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aWRlby1hdXRvcGxheVwiIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgZm9yPVwidmlkZW8tbG9vcFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+TG9vcDwvbGFiZWw+JyArXHInICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmlkZW8tbG9vcFwiIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgZm9yPVwidmlkZW8tc2hvd2NvbnRyb2xzXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TaG93IENvbnRyb2xzPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ2aWRlby1zaG93Y29udHJvbHNcIiBjaGVja2VkIC8+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgZm9yPVwiXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SYXRpbzwvbGFiZWw+JyArXHInICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ2aWRlby1yYWRpb1wiIGNsYXNzPVwidmlkZW8tcmF0aW9cIiB2YWx1ZT1cIjQvM1wiIGNoZWNrZWQgLz4gNDozJyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInZpZGVvLXJhZGlvXCIgY2xhc3M9XCJ2aWRlby1yYXRpb1wiIHZhbHVlPVwiMTYvOVwiIC8+IDE2OjknICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgIDxsYWJlbCBmb3I9XCJ2aWRlby13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGggKHB4KTwvbGFiZWw+JyArXHInICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBpZD1cInZpZGVvLXdpZHRoXCIgbWluPVwiMzIwXCIgbWF4PVwiMTkyMFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgdmFsdWU9XCIzMjBcIiAvPicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwidmlkZW9cIiBzZXR0aW5ncycsIGZvcm0sIGNvbXBvbmVudCk7XHJsZXQgb3B0aW9ucyA9IGtlZGl0b3Iub3B0aW9ucztccmxldCB2aWRlbyA9IGNvbXBvbmVudC5maW5kKCd2aWRlbycpO1xybGV0IGZpbGVJbnB1dCA9IGZvcm0uZmluZCgnI3ZpZGVvRmlsZUlucHV0Jyk7XHJsZXQgYnRuVmlkZW9GaWxlSW5wdXQgPSBmb3JtLmZpbmQoJy5idG4tdmlkZW9GaWxlSW5wdXQnKTtccmJ0blZpZGVvRmlsZUlucHV0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBmaWxlID0gdGhpcy5maWxlc1swXTtccmlmICgvdmlkZW8vLnRlc3QoZmlsZS50eXBlKSkge1xyLy8gVG9kbzogVXBsb2FkIHRvIHlvdXIgc2VydmVyIDopXHJ2aWRlby5hdHRyKCdzcmMnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtccnZpZGVvLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGNvbXBvbmVudCwgb3B0aW9ucyk7XHJ9KTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBhbiB2aWRlbyBmaWxlIScpO1xyfVxyfSk7XHJsZXQgYXV0b3BsYXlUb2dnbGUgPSBmb3JtLmZpbmQoJyN2aWRlby1hdXRvcGxheScpO1xyYXV0b3BsYXlUb2dnbGUub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJpZiAodGhpcy5jaGVja2VkKSB7XHJ2aWRlby5wcm9wKCdhdXRvcGxheScsIHRydWUpO1xyfSBlbHNlIHtccnZpZGVvLnJlbW92ZVByb3AoJ2F1dG9wbGF5Jyk7XHJ9XHJ9KTtccmxldCBsb29wVG9nZ2xlID0gZm9ybS5maW5kKCcjdmlkZW8tbG9vcCcpO1xybG9vcFRvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccnZpZGVvLnByb3AoJ2xvb3AnLCB0cnVlKTtccn0gZWxzZSB7XHJ2aWRlby5yZW1vdmVQcm9wKCdsb29wJyk7XHJ9XHJ9KTtccmxldCByYXRpbyA9IGZvcm0uZmluZCgnLnZpZGVvLXJhdGlvJyk7XHJyYXRpby5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccmxldCBjdXJyZW50V2lkdGggPSB2aWRlby5jc3MoJ3dpZHRoJykgfHwgdmlkZW8ucHJvcCgnd2lkdGgnKTtccmN1cnJlbnRXaWR0aCA9IGN1cnJlbnRXaWR0aC5yZXBsYWNlKCdweCcsICcnKTtccmxldCBjdXJyZW50UmF0aW8gPSB0aGlzLnZhbHVlID09PSAnMTYvOScgPyAxNiAvIDkgOiA0IC8gMztccmxldCBoZWlnaHQgPSBjdXJyZW50V2lkdGggLyBjdXJyZW50UmF0aW87XHJ2aWRlby5jc3MoJ3dpZHRoJywgY3VycmVudFdpZHRoICsgJ3B4Jyk7XHJ2aWRlby5jc3MoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xydmlkZW8ucmVtb3ZlUHJvcCgnd2lkdGgnKTtccnZpZGVvLnJlbW92ZVByb3AoJ2hlaWdodCcpO1xyfVxyfSk7XHJsZXQgc2hvd2NvbnRyb2xzVG9nZ2xlID0gZm9ybS5maW5kKCcjdmlkZW8tc2hvd2NvbnRyb2xzJyk7XHJzaG93Y29udHJvbHNUb2dnbGUub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJpZiAodGhpcy5jaGVja2VkKSB7XHJ2aWRlby5hdHRyKCdjb250cm9scycsICdjb250cm9scycpO1xyfSBlbHNlIHtccnZpZGVvLnJlbW92ZUF0dHIoJ2NvbnRyb2xzJyk7XHJ9XHJ9KTtccmxldCB2aWRlb1dpZHRoID0gZm9ybS5maW5kKCcjdmlkZW8td2lkdGgnKTtccnZpZGVvV2lkdGgub2ZmKCdjaGFuZ2UnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xydmlkZW8uY3NzKCd3aWR0aCcsIHRoaXMudmFsdWUgKyAncHgnKTtccmxldCBjdXJyZW50UmF0aW8gPSBmb3JtLmZpbmQoJy52aWRlby1yYXRpbzpjaGVja2VkJykudmFsKCkgPT09ICcxNi85JyA/IDE2IC8gOSA6IDQgLyAzO1xybGV0IGhlaWdodCA9IHRoaXMudmFsdWUgLyBjdXJyZW50UmF0aW87XHJ2aWRlby5jc3MoJ2hlaWdodCcsIGhlaWdodCArICdweCcpO1xydmlkZW8ucmVtb3ZlUHJvcCgnd2lkdGgnKTtccnZpZGVvLnJlbW92ZVByb3AoJ2hlaWdodCcpO1xyfSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3ZpbWVvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidmltZW9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGlmcmFtZSA9IGNvbXBvbmVudC5maW5kKCdpZnJhbWUnKTtccmxldCB3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xya2VkaXRvci5pbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1ZpbWVvIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXRTZXR0aW5nRm9ybSBcInZpbWVvXCIgY29tcG9uZW50Jyk7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeSBidG4tdmltZW8tZWRpdFwiPkNoYW5nZSBWaWRlbzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInZpbWVvLWF1dG9wbGF5XCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXNwZWN0IFJhdGlvPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi12aW1lby0xNjlcIj4xNjo5PC9idXR0b24+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXZpbWVvLTQzXCI+NDozPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IGJ0bkVkaXQgPSBmb3JtLmZpbmQoJy5idG4tdmltZW8tZWRpdCcpO1xyYnRuRWRpdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGlucHV0RGF0YSA9IHByb21wdCgnUGxlYXNlIGVudGVyIFZpbWVvIFVSTCBpbiBoZXJlOicpO1xybGV0IHZpbWVvUmVnZXggPSAvaHR0cHM/OlxcL1xcLyg/Ond3d1xcLnxwbGF5ZXJcXC4pP3ZpbWVvLmNvbVxcLyg/OmNoYW5uZWxzXFwvKD86XFx3K1xcLyk/fGdyb3Vwc1xcLyhbXlxcL10qKVxcL3ZpZGVvc1xcL3xhbGJ1bVxcLyhcXGQrKVxcL3ZpZGVvXFwvfHZpZGVvXFwvfCkoXFxkKykoPzokfFxcL3xcXD8pLztccmxldCBtYXRjaCA9IGlucHV0RGF0YS5tYXRjaCh2aW1lb1JlZ2V4KTtccmlmIChtYXRjaCAmJiBtYXRjaFsxXSkge1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpLmF0dHIoJ3NyYycsICdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vJyArIG1hdGNoWzFdICsgJz9ieWxpbmU9MCZwb3J0cmFpdD0wJmJhZGdlPTAnKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBWaW1lbyBVUkwgaXMgaW52YWxpZCEnKTtccn1ccn0pO1xybGV0IGJ0bjE2OSA9IGZvcm0uZmluZCgnLmJ0bi12aW1lby0xNjknKTtccmJ0bjE2OS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKTtccn0pO1xybGV0IGJ0bjQzID0gZm9ybS5maW5kKCcuYnRuLXZpbWVvLTQzJyk7XHJidG40My5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKTtccn0pO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjdmltZW8tYXV0b3BsYXknKTtccmNoa0F1dG9wbGF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtccmxldCBlbWJlZEl0ZW0gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XHJsZXQgY3VycmVudFVybCA9IGVtYmVkSXRlbS5hdHRyKCdzcmMnKTtccmxldCBuZXdVcmwgPSAoY3VycmVudFVybC5yZXBsYWNlKC8oXFw/LispKy8sICcnKSkgKyAnP2J5bGluZT0wJnBvcnRyYWl0PTAmYmFkZ2U9MCZhdXRvcGxheT0nICsgKGNoa0F1dG9wbGF5LmlzKCc6Y2hlY2tlZCcpID8gMSA6IDApO1xyZmxvZygnQ3VycmVudCB1cmw6ICcgKyBjdXJyZW50VXJsLCAnTmV3IHVybDogJyArIG5ld1VybCk7XHJlbWJlZEl0ZW0uYXR0cignc3JjJywgbmV3VXJsKTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwidmltZW9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGVtYmVkSXRlbSA9IGNvbXBvbmVudC5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN2aW1lby1hdXRvcGxheScpO1xybGV0IHNyYyA9IGVtYmVkSXRlbS5hdHRyKCdzcmMnKTtccmNoa0F1dG9wbGF5LnByb3AoJ2NoZWNrZWQnLCBzcmMuaW5kZXhPZignYXV0b3BsYXk9MScpICE9PSAtMSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3lvdXR1YmUnXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ5b3V0dWJlXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBpZnJhbWUgPSBjb21wb25lbnQuZmluZCgnaWZyYW1lJyk7XHJsZXQgd3JhcHBlciA9IGlmcmFtZS5wYXJlbnQoKTtccmtlZGl0b3IuaW5pdElmcmFtZUNvdmVyKGlmcmFtZSwgd3JhcHBlcik7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdZb3V0dWJlIFNldHRpbmdzJyxccmluaXRTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGtlZGl0b3IpIHtccmZsb2coJ2luaXRTZXR0aW5nRm9ybSBcInlvdXR1YmVcIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi15b3V0dWJlLWVkaXRcIj5DaGFuZ2UgVmlkZW88L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ5b3V0dWJlLWF1dG9wbGF5XCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXNwZWN0IFJhdGlvPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi15b3V0dWJlLTE2OVwiPjE2Ojk8L2J1dHRvbj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4teW91dHViZS00M1wiPjQ6MzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccmxldCBidG5FZGl0ID0gZm9ybS5maW5kKCcuYnRuLXlvdXR1YmUtZWRpdCcpO1xyYnRuRWRpdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGlucHV0RGF0YSA9IHByb21wdCgnUGxlYXNlIGVudGVyIFlvdXR1YmUgVVJMIGluIGhlcmU6Jyk7XHJsZXQgeW91dHViZVJlZ2V4ID0gL14oPzpodHRwKD86cyk/OlxcL1xcLyk/KD86d3d3XFwuKT8oPzptXFwuKT8oPzp5b3V0dVxcLmJlXFwvfHlvdXR1YmVcXC5jb21cXC8oPzooPzp3YXRjaCk/XFw/KD86LiomKT92KD86aSk/PXwoPzplbWJlZHx2fHZpfHVzZXIpXFwvKSkoW15cXD8mXFxcIic+XSspLztccmxldCBtYXRjaCA9IGlucHV0RGF0YS5tYXRjaCh5b3V0dWJlUmVnZXgpO1xyaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBtYXRjaFsxXSk7XHJ9IGVsc2Uge1xyYWxlcnQoJ1lvdXIgWW91dHViZSBVUkwgaXMgaW52YWxpZCEnKTtccn1ccn0pO1xybGV0IGJ0bjE2OSA9IGZvcm0uZmluZCgnLmJ0bi15b3V0dWJlLTE2OScpO1xyYnRuMTY5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpO1xyfSk7XHJsZXQgYnRuNDMgPSBmb3JtLmZpbmQoJy5idG4teW91dHViZS00MycpO1xyYnRuNDMub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtMTZieTknKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS00YnkzJyk7XHJ9KTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3lvdXR1YmUtYXV0b3BsYXknKTtccmNoa0F1dG9wbGF5Lm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtccmxldCBlbWJlZEl0ZW0gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XHJsZXQgY3VycmVudFVybCA9IGVtYmVkSXRlbS5hdHRyKCdzcmMnKTtccmxldCBuZXdVcmwgPSAoY3VycmVudFVybC5yZXBsYWNlKC8oXFw/LispKy8sICcnKSkgKyAnP2F1dG9wbGF5PScgKyAoY2hrQXV0b3BsYXkuaXMoJzpjaGVja2VkJykgPyAxIDogMCk7XHJmbG9nKCdDdXJyZW50IHVybDogJyArIGN1cnJlbnRVcmwsICdOZXcgdXJsOiAnICsgbmV3VXJsKTtccmVtYmVkSXRlbS5hdHRyKCdzcmMnLCBuZXdVcmwpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJ5b3V0dWJlXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBlbWJlZEl0ZW0gPSBjb21wb25lbnQuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUtaXRlbScpO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjeW91dHViZS1hdXRvcGxheScpO1xybGV0IHNyYyA9IGVtYmVkSXRlbS5hdHRyKCdzcmMnKTtccmNoa0F1dG9wbGF5LnByb3AoJ2NoZWNrZWQnLCBzcmMuaW5kZXhPZignYXV0b3BsYXk9MScpICE9PSAtMSk7XHJ9XHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9JbmxpbmVFZGl0b3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfanF1ZXJ5X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2tlZGl0b3JfXzsiXSwic291cmNlUm9vdCI6IiJ9