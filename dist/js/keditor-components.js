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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1hdWRpby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LWdvb2dsZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC1waG90by5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpZGVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXZpbWVvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmxlc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiSW5saW5lRWRpdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiS0VkaXRvclwiIl0sIm5hbWVzIjpbImZsb2ciLCJLRWRpdG9yIiwibG9nIiwiY29tcG9uZW50cyIsImdldENvbnRlbnQiLCJjb21wb25lbnQiLCJrZWRpdG9yIiwiY29tcG9uZW50Q29udGVudCIsImNoaWxkcmVuIiwiYXVkaW8iLCJmaW5kIiwidW53cmFwIiwiaHRtbCIsInNldHRpbmdFbmFibGVkIiwic2V0dGluZ1RpdGxlIiwiaW5pdFNldHRpbmdGb3JtIiwiZm9ybSIsImFwcGVuZCIsInNob3dTZXR0aW5nRm9ybSIsIm9wdGlvbnMiLCJmaWxlSW5wdXQiLCJidG5BdWRpb0ZpbGVJbnB1dCIsIm9mZiIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpZ2dlciIsImZpbGUiLCJmaWxlcyIsInRlc3QiLCJ0eXBlIiwiYXR0ciIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImxvYWQiLCJzaG93U2V0dGluZ1BhbmVsIiwiYWxlcnQiLCJhdXRvcGxheVRvZ2dsZSIsImNoZWNrZWQiLCJyZW1vdmVBdHRyIiwic2hvd2NvbnRyb2xzVG9nZ2xlIiwiYXVkaW9XaWR0aCIsImNzcyIsInZhbHVlIiwiaW5pdEZvcm1CdWlsZGVyIiwic2VsZiIsImZvcm1CdWlsZGVyQXJlYSIsImZvcm1EYXRhIiwiZm9ybUNvbnRlbnQiLCJwcmVwZW5kIiwiYnRuRWRpdEZvcm0iLCJidG5QcmV2aWV3Rm9ybSIsImZvcm1CdWlsZGVyIiwiZGlzYWJsZUluamVjdGVkU3R5bGUiLCJzaG93QWN0aW9uQnV0dG9ucyIsImRhdGFUeXBlIiwiZGlzYWJsZUZpZWxkcyIsImRpc2FibGVkQXR0cnMiLCJ0eXBlVXNlckRpc2FibGVkQXR0cnMiLCJoYXNDbGFzcyIsInNob3ciLCJoaWRlIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbmRlckZvcm0iLCJkYXRhIiwiZm9ybVJlbmRlciIsImFjdGlvbnMiLCJnZXREYXRhIiwiZWFjaCIsImRpdiIsIiQiLCJkYXRhR3JpZCIsInNwbGl0Iiwid3JhcCIsImxhYmVsIiwiaW5wdXQiLCJzdWJEaXYiLCJsZW5ndGgiLCJpbml0IiwiY29udGVudEFyZWEiLCJjb250YWluZXIiLCJyZW1vdmUiLCJnZXRTZXR0aW5nQ29tcG9uZW50IiwibGF5b3V0IiwidmFsIiwiaWZyYW1lIiwid3JhcHBlciIsInBhcmVudCIsImluaXRJZnJhbWVDb3ZlciIsImJ0bkVkaXQiLCJpbnB1dERhdGEiLCJwcm9tcHQiLCJzcmMiLCJidG4xNjkiLCJidG40MyIsImltZyIsInBob3RvRWRpdCIsIm5leHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsInJlc3VsdCIsIndpZHRoIiwiaGVpZ2h0IiwicmVhZEFzRGF0YVVSTCIsImlucHV0QWxpZ24iLCJwYW5lbCIsImlucHV0UmVzcG9uc2l2ZSIsImNiYlN0eWxlIiwiaW5wdXRXaWR0aCIsImlucHV0SGVpZ2h0IiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJNYXRoIiwicm91bmQiLCJyYXRpbyIsImFsZ2luIiwicHJvcCIsImluc3RhbmNlcyIsIm9uQ29tcG9uZW50Q2hhbmdlZCIsImNhbGwiLCJvbkNvbnRhaW5lckNoYW5nZWQiLCJvbkNvbnRlbnRDaGFuZ2VkIiwiSW5saW5lRWRpdG9yIiwiY3JlYXRlIiwiZ2V0IiwiZm9udEZhbWlseSIsInRoZW4iLCJlZGl0b3IiLCJvbkNvbXBvbmVudFJlYWR5IiwiZXJyb3IiLCJjb25zb2xlIiwiZGVzdHJveSIsImlkIiwidmlkZW8iLCJpcyIsImxvb3BUb2dnbGUiLCJjb250cm9sVG9nZ2xlIiwidmlkZW9XaWR0aCIsImN1cnJlbnRSYXRpbyIsImZpbHRlciIsInZpbWVvUmVnZXgiLCJtYXRjaCIsImNoa0F1dG9wbGF5IiwiZW1iZWRJdGVtIiwiY3VycmVudFVybCIsIm5ld1VybCIsInJlcGxhY2UiLCJpbmRleE9mIiwieW91dHViZVJlZ2V4Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBRCw4Q0FBTyxDQUFDRSxVQUFSLENBQW1CLE9BQW5CLElBQThCO0FBQzlCQyxZQUFVLEVBQUUsb0JBQVVDLFNBQVYsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzFDTixRQUFJLENBQUMseUNBQUQsQ0FBSjtBQUNBLFFBQUlPLGdCQUFnQixHQUFHRixTQUFTLENBQUNHLFFBQVYsQ0FBbUIsNEJBQW5CLENBQXZCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixnQkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0IsT0FBdEIsQ0FBWjtBQUNBRCxTQUFLLENBQUNFLE1BQU47QUFDQSxXQUFPSixnQkFBZ0IsQ0FBQ0ssSUFBakIsRUFBUDtBQUNDLEdBUDZCO0FBUTlCQyxnQkFBYyxFQUFFLElBUmM7QUFTOUJDLGNBQVksRUFBRSxnQkFUZ0I7QUFVOUJDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsdUJBQUQsRUFBMEJnQixJQUExQixDQUFKO0FBQ0FBLFFBQUksQ0FBQ0MsTUFBTCxDQUNBLG1DQUNBLCtCQURBLEdBRUEsMkVBRkEsR0FHQSxrQ0FIQSxHQUlBLDBDQUpBLEdBS0EsaUhBTEEsR0FNQSxrRkFOQSxHQU9BLHFCQVBBLEdBUUEsaUJBUkEsR0FTQSxhQVRBLEdBVUEsK0JBVkEsR0FXQSx5RUFYQSxHQVlBLGtDQVpBLEdBYUEsNERBYkEsR0FjQSxpQkFkQSxHQWVBLGFBZkEsR0FnQkEsK0JBaEJBLEdBaUJBLGtGQWpCQSxHQWtCQSxrQ0FsQkEsR0FtQkEsd0VBbkJBLEdBb0JBLGlCQXBCQSxHQXFCQSxhQXJCQSxHQXNCQSwrQkF0QkEsR0F1QkEsdUVBdkJBLEdBd0JBLGtDQXhCQSxHQXlCQSwyR0F6QkEsR0EwQkEsaUJBMUJBLEdBMkJBLGFBM0JBLEdBNEJBLFNBN0JBO0FBK0JDLEdBM0M2QjtBQTRDOUJDLGlCQUFlLEVBQUUseUJBQVVGLElBQVYsRUFBZ0JYLFNBQWhCLEVBQTJCQyxPQUEzQixFQUFvQztBQUNyRE4sUUFBSSxDQUFDLG1DQUFELEVBQXNDZ0IsSUFBdEMsRUFBNENYLFNBQTVDLENBQUo7QUFDQSxRQUFJYyxPQUFPLEdBQUdiLE9BQU8sQ0FBQ2EsT0FBdEI7QUFDQSxRQUFJVixLQUFLLEdBQUdKLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLE9BQWYsQ0FBWjtBQUNBLFFBQUlVLFNBQVMsR0FBR0osSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBaEI7QUFDQSxRQUFJVyxpQkFBaUIsR0FBR0wsSUFBSSxDQUFDTixJQUFMLENBQVUscUJBQVYsQ0FBeEI7QUFDQVcscUJBQWlCLENBQUNDLEdBQWxCLENBQXNCLE9BQXRCLEVBQStCQyxFQUEvQixDQUFrQyxPQUFsQyxFQUEyQyxVQUFVQyxDQUFWLEVBQWE7QUFDeERBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBTCxlQUFTLENBQUNNLE9BQVYsQ0FBa0IsT0FBbEI7QUFDQyxLQUhEO0FBSUFOLGFBQVMsQ0FBQ0UsR0FBVixDQUFjLFFBQWQsRUFBd0JDLEVBQXhCLENBQTJCLFFBQTNCLEVBQXFDLFlBQVk7QUFDakQsVUFBSUksSUFBSSxHQUFHLEtBQUtDLEtBQUwsQ0FBVyxDQUFYLENBQVg7O0FBQ0EsVUFBSSxRQUFRQyxJQUFSLENBQWFGLElBQUksQ0FBQ0csSUFBbEIsQ0FBSixFQUE2QjtBQUM3QjtBQUNBckIsYUFBSyxDQUFDc0IsSUFBTixDQUFXLEtBQVgsRUFBa0JDLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQk4sSUFBcEIsQ0FBbEI7QUFDQWxCLGFBQUssQ0FBQ3lCLElBQU4sQ0FBVyxZQUFZO0FBQ3ZCNUIsaUJBQU8sQ0FBQzZCLGdCQUFSLENBQXlCOUIsU0FBekIsRUFBb0NjLE9BQXBDO0FBQ0MsU0FGRDtBQUdDLE9BTkQsTUFNTztBQUNQaUIsYUFBSyxDQUFDLDBDQUFELENBQUw7QUFDQztBQUNBLEtBWEQ7QUFZQSxRQUFJQyxjQUFjLEdBQUdyQixJQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixDQUFyQjtBQUNBMkIsa0JBQWMsQ0FBQ2YsR0FBZixDQUFtQixPQUFuQixFQUE0QkMsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsVUFBVUMsQ0FBVixFQUFhO0FBQ3JELFVBQUksS0FBS2MsT0FBVCxFQUFrQjtBQUNsQjdCLGFBQUssQ0FBQ3NCLElBQU4sQ0FBVyxVQUFYLEVBQXVCLFVBQXZCO0FBQ0MsT0FGRCxNQUVPO0FBQ1B0QixhQUFLLENBQUM4QixVQUFOLENBQWlCLFVBQWpCO0FBQ0M7QUFDQSxLQU5EO0FBT0EsUUFBSUMsa0JBQWtCLEdBQUd4QixJQUFJLENBQUNOLElBQUwsQ0FBVSxxQkFBVixDQUF6QjtBQUNBOEIsc0JBQWtCLENBQUNsQixHQUFuQixDQUF1QixPQUF2QixFQUFnQ0MsRUFBaEMsQ0FBbUMsT0FBbkMsRUFBNEMsVUFBVUMsQ0FBVixFQUFhO0FBQ3pELFVBQUksS0FBS2MsT0FBVCxFQUFrQjtBQUNsQjdCLGFBQUssQ0FBQ3NCLElBQU4sQ0FBVyxVQUFYLEVBQXVCLFVBQXZCO0FBQ0MsT0FGRCxNQUVPO0FBQ1B0QixhQUFLLENBQUM4QixVQUFOLENBQWlCLFVBQWpCO0FBQ0M7QUFDQSxLQU5EO0FBT0EsUUFBSUUsVUFBVSxHQUFHekIsSUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixDQUFqQjtBQUNBK0IsY0FBVSxDQUFDbkIsR0FBWCxDQUFlLFFBQWYsRUFBeUJDLEVBQXpCLENBQTRCLFFBQTVCLEVBQXNDLFlBQVk7QUFDbERkLFdBQUssQ0FBQ2lDLEdBQU4sQ0FBVSxPQUFWLEVBQW1CLEtBQUtDLEtBQUwsR0FBYSxHQUFoQztBQUNDLEtBRkQ7QUFHQztBQXRGNkIsQ0FBOUIsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxJQUFNM0MsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBRCw4Q0FBTyxDQUFDRSxVQUFSLENBQW1CLE1BQW5CLElBQTZCO0FBQzdCeUMsaUJBQWUsRUFBRSx5QkFBVXZDLFNBQVYsRUFBcUI7QUFDdEMsUUFBSXdDLElBQUksR0FBRyxJQUFYO0FBQ0EsUUFBSUMsZUFBZSxHQUFHekMsU0FBUyxDQUFDSyxJQUFWLENBQWUsb0JBQWYsQ0FBdEI7QUFDQSxRQUFJcUMsUUFBUSxHQUFHMUMsU0FBUyxDQUFDSyxJQUFWLENBQWUsWUFBZixDQUFmO0FBQ0EsUUFBSXNDLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7QUFDQUwsYUFBUyxDQUFDSyxJQUFWLENBQWUsNEJBQWYsRUFBNkN1QyxPQUE3QyxDQUNBLDhEQUNBLDRFQURBLEdBRUEsMkVBRkEsR0FHQSxNQUpBO0FBTUEsUUFBSUMsV0FBVyxHQUFHN0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZ0JBQWYsQ0FBbEI7QUFDQSxRQUFJeUMsY0FBYyxHQUFHOUMsU0FBUyxDQUFDSyxJQUFWLENBQWUsbUJBQWYsQ0FBckI7QUFDQW9DLG1CQUFlLENBQUNNLFdBQWhCLENBQTRCO0FBQzVCQywwQkFBb0IsRUFBRSxJQURNO0FBRTVCQyx1QkFBaUIsRUFBRSxLQUZTO0FBRzVCQyxjQUFRLEVBQUUsTUFIa0I7QUFJNUJSLGNBQVEsRUFBRUEsUUFBUSxDQUFDbkMsSUFBVCxFQUprQjtBQUs1QjRDLG1CQUFhLEVBQUUsQ0FDZixjQURlLEVBRWYsV0FGZSxFQUdmLFFBSGUsQ0FMYTtBQVU1QkMsbUJBQWEsRUFBRSxDQUFDLFFBQUQsQ0FWYTtBQVc1QkMsMkJBQXFCLEVBQUU7QUFDdkIsMEJBQWtCLENBQ2xCLFFBRGtCLEVBRWxCLFFBRmtCO0FBREs7QUFYSyxLQUE1QjtBQWtCQVIsZUFBVyxDQUFDM0IsRUFBWixDQUFlLE9BQWYsRUFBd0IsVUFBVUMsQ0FBVixFQUFhO0FBQ3JDQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsVUFBSSxDQUFDeUIsV0FBVyxDQUFDUyxRQUFaLENBQXFCLFVBQXJCLENBQUwsRUFBdUM7QUFDdkNiLHVCQUFlLENBQUNjLElBQWhCO0FBQ0FaLG1CQUFXLENBQUNhLElBQVo7QUFDQVgsbUJBQVcsQ0FBQ1ksUUFBWixDQUFxQixVQUFyQjtBQUNBWCxzQkFBYyxDQUFDWSxXQUFmLENBQTJCLFVBQTNCO0FBQ0M7QUFDQSxLQVJEO0FBU0FaLGtCQUFjLENBQUM1QixFQUFmLENBQWtCLE9BQWxCLEVBQTJCLFVBQVVDLENBQVYsRUFBYTtBQUN4Q0EsT0FBQyxDQUFDQyxjQUFGOztBQUNBLFVBQUksQ0FBQzBCLGNBQWMsQ0FBQ1EsUUFBZixDQUF3QixVQUF4QixDQUFMLEVBQTBDO0FBQzFDZCxZQUFJLENBQUNtQixVQUFMLENBQWdCM0QsU0FBaEI7QUFDQXlDLHVCQUFlLENBQUNlLElBQWhCO0FBQ0FiLG1CQUFXLENBQUNZLElBQVo7QUFDQVYsbUJBQVcsQ0FBQ2EsV0FBWixDQUF3QixVQUF4QjtBQUNBWixzQkFBYyxDQUFDVyxRQUFmLENBQXdCLFVBQXhCO0FBQ0M7QUFDQSxLQVREO0FBVUMsR0FuRDRCO0FBb0Q3QkUsWUFBVSxFQUFFLG9CQUFVM0QsU0FBVixFQUFxQitDLFdBQXJCLEVBQWtDO0FBQzlDLFFBQUlKLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7O0FBQ0EsUUFBSSxDQUFDMEMsV0FBTCxFQUFrQjtBQUNsQixVQUFJTixlQUFlLEdBQUd6QyxTQUFTLENBQUNLLElBQVYsQ0FBZSxvQkFBZixDQUF0QjtBQUNBMEMsaUJBQVcsR0FBR04sZUFBZSxDQUFDbUIsSUFBaEIsQ0FBcUIsYUFBckIsQ0FBZDtBQUNDOztBQUNEakIsZUFBVyxDQUFDa0IsVUFBWixDQUF1QjtBQUN2QlgsY0FBUSxFQUFFLE1BRGE7QUFFdkJSLGNBQVEsRUFBRUssV0FBVyxDQUFDZSxPQUFaLENBQW9CQyxPQUFwQixDQUE0QixNQUE1QjtBQUZhLEtBQXZCOztBQUlBLFFBQUlwQixXQUFXLENBQUNXLFFBQVosQ0FBcUIsaUJBQXJCLENBQUosRUFBNkM7QUFDN0NYLGlCQUFXLENBQUN4QyxRQUFaLENBQXFCLEtBQXJCLEVBQTRCNkQsSUFBNUIsQ0FBaUMsWUFBWTtBQUM3QyxZQUFJQyxHQUFHLEdBQUdDLDZDQUFDLENBQUMsSUFBRCxDQUFYO0FBQ0EsWUFBSUMsUUFBUSxHQUFHeEIsV0FBVyxDQUFDakIsSUFBWixDQUFpQixXQUFqQixLQUFpQyxLQUFoRDtBQUNBeUMsZ0JBQVEsR0FBR0EsUUFBUSxDQUFDQyxLQUFULENBQWUsR0FBZixDQUFYOztBQUNBLFlBQUlILEdBQUcsQ0FBQ3ZDLElBQUosQ0FBUyxPQUFULENBQUosRUFBdUI7QUFDdkIsY0FBSXVDLEdBQUcsQ0FBQ1gsUUFBSixDQUFhLFdBQWIsQ0FBSixFQUErQjtBQUMvQlcsZUFBRyxDQUFDNUQsSUFBSixDQUFTLFFBQVQsRUFBbUJnRSxJQUFuQixDQUF3Qix3QkFBd0JGLFFBQVEsQ0FBQyxDQUFELENBQWhDLEdBQXNDLGlCQUF0QyxHQUEwREEsUUFBUSxDQUFDLENBQUQsQ0FBbEUsR0FBd0UsVUFBaEc7QUFDQyxXQUZELE1BRU87QUFDUCxnQkFBSUcsS0FBSyxHQUFHTCxHQUFHLENBQUM5RCxRQUFKLENBQWEsT0FBYixDQUFaO0FBQ0EsZ0JBQUlvRSxLQUFLLEdBQUdOLEdBQUcsQ0FBQzlELFFBQUosQ0FBYSx5QkFBYixDQUFaO0FBQ0EsZ0JBQUlxRSxNQUFNLEdBQUdQLEdBQUcsQ0FBQzlELFFBQUosQ0FBYSxLQUFiLENBQWI7QUFDQW1FLGlCQUFLLENBQUNiLFFBQU4sQ0FBZSwwQkFBMEJVLFFBQVEsQ0FBQyxDQUFELENBQWpEOztBQUNBLGdCQUFJSyxNQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDdkJELG9CQUFNLENBQUNmLFFBQVAsQ0FBZ0IsWUFBWVUsUUFBUSxDQUFDLENBQUQsQ0FBcEM7QUFDQyxhQUZELE1BRU87QUFDUEksbUJBQUssQ0FBQ2QsUUFBTixDQUFlLGNBQWYsRUFBK0JZLElBQS9CLENBQW9DLHdCQUF3QkYsUUFBUSxDQUFDLENBQUQsQ0FBaEMsR0FBc0MsVUFBMUU7QUFDQztBQUNBO0FBQ0E7QUFDQSxPQW5CRDtBQW9CQztBQUNBLEdBcEY0QjtBQXFGN0JPLE1BQUksRUFBRSxjQUFVQyxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQzVFLFNBQWxDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RE4sUUFBSSxDQUFDLHVCQUFELEVBQTBCSyxTQUExQixDQUFKO0FBQ0EsUUFBSUUsZ0JBQWdCLEdBQUdGLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLDRCQUFmLENBQXZCO0FBQ0EsUUFBSTBDLFdBQVcsR0FBRy9DLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLG9CQUFmLENBQWxCO0FBQ0EsUUFBSXNDLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7QUFDQSxRQUFJcUMsUUFBUSxHQUFHMUMsU0FBUyxDQUFDSyxJQUFWLENBQWUsWUFBZixDQUFmOztBQUNBLFFBQUlxQyxRQUFRLENBQUMrQixNQUFULEtBQW9CLENBQXhCLEVBQTJCO0FBQzNCdkUsc0JBQWdCLENBQUNVLE1BQWpCLENBQXdCLGlFQUF4QjtBQUNDOztBQUNELFFBQUkrQixXQUFXLENBQUM4QixNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzlCdkUsc0JBQWdCLENBQUNVLE1BQWpCLENBQXdCLHNFQUF4QjtBQUNDLEtBRkQsTUFFTztBQUNQK0IsaUJBQVcsQ0FBQ2EsSUFBWjtBQUNDOztBQUNELFFBQUlULFdBQVcsQ0FBQzBCLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDOUIxQixpQkFBVyxHQUFHbUIsNkNBQUMsQ0FBQyxnREFBRCxDQUFmO0FBQ0FoRSxzQkFBZ0IsQ0FBQ1UsTUFBakIsQ0FBd0JtQyxXQUF4QjtBQUNDOztBQUNELFNBQUtSLGVBQUwsQ0FBcUJ2QyxTQUFyQjtBQUNDLEdBeEc0QjtBQXlHN0JELFlBQVUsRUFBRSxvQkFBVUMsU0FBVixFQUFxQkMsT0FBckIsRUFBOEI7QUFDMUNOLFFBQUksQ0FBQyw2QkFBRCxFQUFnQ0ssU0FBaEMsQ0FBSjtBQUNBLFFBQUl3QyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUl0QyxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDSyxJQUFWLENBQWUsNEJBQWYsQ0FBdkI7QUFDQSxRQUFJcUMsUUFBUSxHQUFHMUMsU0FBUyxDQUFDSyxJQUFWLENBQWUsWUFBZixDQUFmO0FBQ0EsUUFBSW9DLGVBQWUsR0FBR3lCLDZDQUFDLENBQUMsTUFBTWxFLFNBQVMsQ0FBQzBCLElBQVYsQ0FBZSxJQUFmLENBQVAsQ0FBRCxDQUE4QnJCLElBQTlCLENBQW1DLG9CQUFuQyxDQUF0QjtBQUNBLFFBQUkwQyxXQUFXLEdBQUdOLGVBQWUsQ0FBQ21CLElBQWhCLENBQXFCLGFBQXJCLENBQWxCO0FBQ0FwQixRQUFJLENBQUNtQixVQUFMLENBQWdCM0QsU0FBaEIsRUFBMkIrQyxXQUEzQjtBQUNBTCxZQUFRLENBQUNuQyxJQUFULENBQWN3QyxXQUFXLENBQUNlLE9BQVosQ0FBb0JDLE9BQXBCLENBQTRCLE1BQTVCLENBQWQ7QUFDQS9ELGFBQVMsQ0FBQ0ssSUFBVixDQUFlLHlDQUFmLEVBQTBEd0UsTUFBMUQ7QUFDQTdFLGFBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsRUFBZ0NrRCxJQUFoQztBQUNBLFdBQU9yRCxnQkFBZ0IsQ0FBQ0ssSUFBakIsRUFBUDtBQUNDLEdBckg0QjtBQXNIN0JDLGdCQUFjLEVBQUUsSUF0SGE7QUF1SDdCQyxjQUFZLEVBQUUsZUF2SGU7QUF3SDdCQyxpQkFBZSxFQUFFLHlCQUFVQyxJQUFWLEVBQWdCVixPQUFoQixFQUF5QjtBQUMxQ04sUUFBSSxDQUFDLGtDQUFELENBQUo7QUFDQSxRQUFJNkMsSUFBSSxHQUFHLElBQVg7QUFDQTdCLFFBQUksQ0FBQ0osSUFBTCxDQUNBLGtDQUNBLDhCQURBLEdBRUEsaURBRkEsR0FHQSxpQ0FIQSxHQUlBLHdFQUpBLEdBS0EsZ0JBTEEsR0FNQSxZQU5BLEdBT0EsOEJBUEEsR0FRQSxpREFSQSxHQVNBLGlDQVRBLEdBVUEseURBVkEsR0FXQSxrREFYQSxHQVlBLG9EQVpBLEdBYUEsa0RBYkEsR0FjQSx3REFkQSxHQWVBLHVCQWZBLEdBZ0JBLGdCQWhCQSxHQWlCQSxZQWpCQSxHQWtCQSw4QkFsQkEsR0FtQkEsa0RBbkJBLEdBb0JBLGlDQXBCQSxHQXFCQSwwREFyQkEsR0FzQkEsZ0VBdEJBLEdBdUJBLGtGQXZCQSxHQXdCQSw4R0F4QkEsR0F5QkEsdUJBekJBLEdBMEJBLGdCQTFCQSxHQTJCQSxZQTNCQSxHQTRCQSw4QkE1QkEsR0E2QkEsaURBN0JBLEdBOEJBLGlDQTlCQSxHQStCQSx5REEvQkEsR0FnQ0Esa0RBaENBLEdBaUNBLHFFQWpDQSxHQWtDQSw2REFsQ0EsR0FtQ0EsdUJBbkNBLEdBb0NBLGdCQXBDQSxHQXFDQSxZQXJDQSxHQXNDQSxrREF0Q0EsR0F1Q0EsdURBdkNBLEdBd0NBLGlDQXhDQSxHQXlDQSx1REF6Q0EsR0EwQ0EsNERBMUNBLEdBMkNBLDBEQTNDQSxHQTRDQSwwREE1Q0EsR0E2Q0EsMERBN0NBLEdBOENBLDBEQTlDQSxHQStDQSx1QkEvQ0EsR0FnREEsMEhBaERBLEdBaURBLGdCQWpEQSxHQWtEQSxZQWxEQSxHQW1EQSxRQXBEQTtBQXNEQUksUUFBSSxDQUFDTixJQUFMLENBQVUsa0JBQVYsRUFBOEJhLEVBQTlCLENBQWlDLFFBQWpDLEVBQTJDLFlBQVk7QUFDdkQsVUFBSWxCLFNBQVMsR0FBR0MsT0FBTyxDQUFDNkUsbUJBQVIsRUFBaEI7QUFDQSxVQUFJbkMsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBc0MsaUJBQVcsQ0FBQ2pCLElBQVosQ0FBaUIsUUFBakIsRUFBMkIsS0FBS1ksS0FBaEM7QUFDQyxLQUpEO0FBS0EzQixRQUFJLENBQUNOLElBQUwsQ0FBVSxnQkFBVixFQUE0QmEsRUFBNUIsQ0FBK0IsUUFBL0IsRUFBeUMsWUFBWTtBQUNyRCxVQUFJbEIsU0FBUyxHQUFHQyxPQUFPLENBQUM2RSxtQkFBUixFQUFoQjtBQUNBLFVBQUluQyxXQUFXLEdBQUczQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxlQUFmLENBQWxCO0FBQ0FzQyxpQkFBVyxDQUFDakIsSUFBWixDQUFpQixRQUFqQixFQUEyQixLQUFLWSxLQUFoQztBQUNDLEtBSkQ7QUFLQTNCLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGlCQUFWLEVBQTZCYSxFQUE3QixDQUFnQyxRQUFoQyxFQUEwQyxZQUFZO0FBQ3RELFVBQUlsQixTQUFTLEdBQUdDLE9BQU8sQ0FBQzZFLG1CQUFSLEVBQWhCO0FBQ0EsVUFBSW5DLFdBQVcsR0FBRzNDLFNBQVMsQ0FBQ0ssSUFBVixDQUFlLGVBQWYsQ0FBbEI7QUFDQXNDLGlCQUFXLENBQUNqQixJQUFaLENBQWlCLFNBQWpCLEVBQTRCLEtBQUtZLEtBQWpDO0FBQ0MsS0FKRDtBQUtBM0IsUUFBSSxDQUFDTixJQUFMLENBQVUsZ0JBQVYsRUFBNEJhLEVBQTVCLENBQStCLFFBQS9CLEVBQXlDLFlBQVk7QUFDckQsVUFBSWxCLFNBQVMsR0FBR0MsT0FBTyxDQUFDNkUsbUJBQVIsRUFBaEI7QUFDQSxVQUFJbkMsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBc0MsaUJBQVcsQ0FBQ2UsV0FBWixDQUF3Qiw2QkFBeEI7O0FBQ0EsVUFBSSxLQUFLcEIsS0FBVCxFQUFnQjtBQUNoQkssbUJBQVcsQ0FBQ2MsUUFBWixDQUFxQixLQUFLbkIsS0FBMUI7QUFDQzs7QUFDREUsVUFBSSxDQUFDbUIsVUFBTCxDQUFnQjNELFNBQWhCO0FBQ0FXLFVBQUksQ0FBQ04sSUFBTCxDQUFVLHNCQUFWLEVBQWtDZ0MsR0FBbEMsQ0FBc0MsU0FBdEMsRUFBaUQsS0FBS0MsS0FBTCxLQUFlLGlCQUFmLEdBQW1DLE9BQW5DLEdBQTZDLE1BQTlGO0FBQ0MsS0FURDtBQVVBM0IsUUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixFQUEwQmEsRUFBMUIsQ0FBNkIsUUFBN0IsRUFBdUMsWUFBWTtBQUNuRCxVQUFJbEIsU0FBUyxHQUFHQyxPQUFPLENBQUM2RSxtQkFBUixFQUFoQjtBQUNBLFVBQUluQyxXQUFXLEdBQUczQyxTQUFTLENBQUNLLElBQVYsQ0FBZSxlQUFmLENBQWxCO0FBQ0FzQyxpQkFBVyxDQUFDakIsSUFBWixDQUFpQixXQUFqQixFQUE4QixLQUFLWSxLQUFuQztBQUNBRSxVQUFJLENBQUNtQixVQUFMLENBQWdCM0QsU0FBaEI7QUFDQyxLQUxEO0FBTUMsR0FoTjRCO0FBaU43QmEsaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMsa0NBQUQsRUFBcUNLLFNBQXJDLENBQUo7QUFDQSxRQUFJMkMsV0FBVyxHQUFHM0MsU0FBUyxDQUFDSyxJQUFWLENBQWUsZUFBZixDQUFsQjtBQUNBLFFBQUkwRSxNQUFNLEdBQUcsRUFBYjs7QUFDQSxRQUFJcEMsV0FBVyxDQUFDVyxRQUFaLENBQXFCLGFBQXJCLENBQUosRUFBeUM7QUFDekN5QixZQUFNLEdBQUcsYUFBVDtBQUNDLEtBRkQsTUFFTyxJQUFJcEMsV0FBVyxDQUFDVyxRQUFaLENBQXFCLGlCQUFyQixDQUFKLEVBQTZDO0FBQ3BEeUIsWUFBTSxHQUFHLGlCQUFUO0FBQ0M7O0FBQ0RwRSxRQUFJLENBQUNOLElBQUwsQ0FBVSxrQkFBVixFQUE4QjJFLEdBQTlCLENBQWtDckMsV0FBVyxDQUFDakIsSUFBWixDQUFpQixRQUFqQixLQUE4QixFQUFoRTtBQUNBZixRQUFJLENBQUNOLElBQUwsQ0FBVSxnQkFBVixFQUE0QjJFLEdBQTVCLENBQWdDckMsV0FBVyxDQUFDakIsSUFBWixDQUFpQixRQUFqQixLQUE4QixLQUE5RDtBQUNBZixRQUFJLENBQUNOLElBQUwsQ0FBVSxpQkFBVixFQUE2QjJFLEdBQTdCLENBQWlDckMsV0FBVyxDQUFDakIsSUFBWixDQUFpQixTQUFqQixDQUFqQztBQUNBZixRQUFJLENBQUNOLElBQUwsQ0FBVSxnQkFBVixFQUE0QjJFLEdBQTVCLENBQWdDRCxNQUFoQztBQUNBcEUsUUFBSSxDQUFDTixJQUFMLENBQVUsc0JBQVYsRUFBa0NnQyxHQUFsQyxDQUFzQyxTQUF0QyxFQUFpRDBDLE1BQU0sS0FBSyxpQkFBWCxHQUErQixPQUEvQixHQUF5QyxNQUExRjtBQUNBcEUsUUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixFQUEwQjJFLEdBQTFCLENBQThCckMsV0FBVyxDQUFDakIsSUFBWixDQUFpQixXQUFqQixLQUFpQyxLQUEvRDtBQUNDO0FBaE80QixDQUE3QixDOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU0vQixJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsV0FBbkIsSUFBa0M7QUFDbEM0RSxNQUFJLEVBQUUsY0FBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0M1RSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDNUROLFFBQUksQ0FBQyw0QkFBRCxFQUErQkssU0FBL0IsQ0FBSjtBQUNBLFFBQUlpRixNQUFNLEdBQUdqRixTQUFTLENBQUNLLElBQVYsQ0FBZSxRQUFmLENBQWI7QUFDQSxRQUFJNkUsT0FBTyxHQUFHRCxNQUFNLENBQUNFLE1BQVAsRUFBZDtBQUNBbEYsV0FBTyxDQUFDbUYsZUFBUixDQUF3QkgsTUFBeEIsRUFBZ0NDLE9BQWhDO0FBQ0MsR0FOaUM7QUFPbEMxRSxnQkFBYyxFQUFFLElBUGtCO0FBUWxDQyxjQUFZLEVBQUUscUJBUm9CO0FBU2xDQyxpQkFBZSxFQUFFLHlCQUFVQyxJQUFWLEVBQWdCVixPQUFoQixFQUF5QjtBQUMxQ04sUUFBSSxDQUFDLHVDQUFELENBQUo7QUFDQWdCLFFBQUksQ0FBQ0MsTUFBTCxDQUNBLG1DQUNBLDZCQURBLEdBRUEsZ0NBRkEsR0FHQSwyR0FIQSxHQUlBLGVBSkEsR0FLQSxXQUxBLEdBTUEsNkJBTkEsR0FPQSxzREFQQSxHQVFBLGdDQVJBLEdBU0EsaUdBVEEsR0FVQSwrRkFWQSxHQVdBLGVBWEEsR0FZQSxXQVpBLEdBYUEsU0FkQTtBQWdCQSxRQUFJeUUsT0FBTyxHQUFHMUUsSUFBSSxDQUFDTixJQUFMLENBQVUscUJBQVYsQ0FBZDtBQUNBZ0YsV0FBTyxDQUFDbkUsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBVUMsQ0FBVixFQUFhO0FBQ2pDQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJa0UsU0FBUyxHQUFHQyxNQUFNLENBQUMsNkNBQUQsQ0FBdEI7QUFDQSxVQUFJTixNQUFNLEdBQUdmLDZDQUFDLENBQUNvQixTQUFELENBQWQ7QUFDQSxVQUFJRSxHQUFHLEdBQUdQLE1BQU0sQ0FBQ3ZELElBQVAsQ0FBWSxLQUFaLENBQVY7O0FBQ0EsVUFBSXVELE1BQU0sQ0FBQ1IsTUFBUCxHQUFnQixDQUFoQixJQUFxQmUsR0FBckIsSUFBNEJBLEdBQUcsQ0FBQ2YsTUFBSixHQUFhLENBQTdDLEVBQWdEO0FBQ2hEeEUsZUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyx3QkFBbkMsRUFBNkRxQixJQUE3RCxDQUFrRSxLQUFsRSxFQUF5RThELEdBQXpFO0FBQ0MsT0FGRCxNQUVPO0FBQ1B6RCxhQUFLLENBQUMsd0NBQUQsQ0FBTDtBQUNDO0FBQ0EsS0FWRDtBQVdBLFFBQUkwRCxNQUFNLEdBQUc5RSxJQUFJLENBQUNOLElBQUwsQ0FBVSxvQkFBVixDQUFiO0FBQ0FvRixVQUFNLENBQUN2RSxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDaENBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx1QkFBcEUsRUFBNkZELFFBQTdGLENBQXNHLHdCQUF0RztBQUNDLEtBSEQ7QUFJQSxRQUFJaUMsS0FBSyxHQUFHL0UsSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBWjtBQUNBcUYsU0FBSyxDQUFDeEUsRUFBTixDQUFTLE9BQVQsRUFBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQy9CQSxPQUFDLENBQUNDLGNBQUY7QUFDQW5CLGFBQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsbUJBQW5DLEVBQXdEcUQsV0FBeEQsQ0FBb0Usd0JBQXBFLEVBQThGRCxRQUE5RixDQUF1Ryx1QkFBdkc7QUFDQyxLQUhEO0FBSUM7QUFqRGlDLENBQWxDLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsSUFBTTlELElBQUksR0FBR0MsOENBQU8sQ0FBQ0MsR0FBckI7QUFDQUQsOENBQU8sQ0FBQ0UsVUFBUixDQUFtQixPQUFuQixJQUE4QjtBQUM5QjRFLE1BQUksRUFBRSxjQUFVQyxXQUFWLEVBQXVCQyxTQUF2QixFQUFrQzVFLFNBQWxDLEVBQTZDQyxPQUE3QyxFQUFzRDtBQUM1RE4sUUFBSSxDQUFDLHdCQUFELEVBQTJCSyxTQUEzQixDQUFKO0FBQ0EsUUFBSUUsZ0JBQWdCLEdBQUdGLFNBQVMsQ0FBQ0csUUFBVixDQUFtQiw0QkFBbkIsQ0FBdkI7QUFDQSxRQUFJd0YsR0FBRyxHQUFHekYsZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCLEtBQXRCLENBQVY7QUFDQXNGLE9BQUcsQ0FBQ3RELEdBQUosQ0FBUSxTQUFSLEVBQW1CLGNBQW5CO0FBQ0MsR0FONkI7QUFPOUI3QixnQkFBYyxFQUFFLElBUGM7QUFROUJDLGNBQVksRUFBRSxnQkFSZ0I7QUFTOUJDLGlCQUFlLEVBQUUseUJBQVVDLElBQVYsRUFBZ0JWLE9BQWhCLEVBQXlCO0FBQzFDTixRQUFJLENBQUMsbUNBQUQsQ0FBSjtBQUNBLFFBQUk2QyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUkxQixPQUFPLEdBQUdiLE9BQU8sQ0FBQ2EsT0FBdEI7QUFDQUgsUUFBSSxDQUFDQyxNQUFMLENBQ0EsbUNBQ0EsNkJBREEsR0FFQSxnQ0FGQSxHQUdBLDBHQUhBLEdBSUEsd0RBSkEsR0FLQSxlQUxBLEdBTUEsV0FOQSxHQU9BLDZCQVBBLEdBUUEsaUVBUkEsR0FTQSxnQ0FUQSxHQVVBLDJEQVZBLEdBV0EsbURBWEEsR0FZQSx1REFaQSxHQWFBLHFEQWJBLEdBY0Esc0JBZEEsR0FlQSxlQWZBLEdBZ0JBLFdBaEJBLEdBaUJBLDZCQWpCQSxHQWtCQSxpRUFsQkEsR0FtQkEsZ0NBbkJBLEdBb0JBLDJEQXBCQSxHQXFCQSwrQ0FyQkEsR0FzQkEsNkRBdEJBLEdBdUJBLDJEQXZCQSxHQXdCQSxpRUF4QkEsR0F5QkEsc0JBekJBLEdBMEJBLGVBMUJBLEdBMkJBLFdBM0JBLEdBNEJBLDZCQTVCQSxHQTZCQSwyRUE3QkEsR0E4QkEsZ0NBOUJBLEdBK0JBLDREQS9CQSxHQWdDQSxlQWhDQSxHQWlDQSxXQWpDQSxHQWtDQSw2QkFsQ0EsR0FtQ0EsaUVBbkNBLEdBb0NBLGdDQXBDQSxHQXFDQSwwRUFyQ0EsR0FzQ0EsZUF0Q0EsR0F1Q0EsV0F2Q0EsR0F3Q0EsNkJBeENBLEdBeUNBLG1FQXpDQSxHQTBDQSxnQ0ExQ0EsR0EyQ0EsMkVBM0NBLEdBNENBLGVBNUNBLEdBNkNBLFdBN0NBLEdBOENBLFNBL0NBO0FBaURBLFFBQUlnRixTQUFTLEdBQUdqRixJQUFJLENBQUNOLElBQUwsQ0FBVSxhQUFWLENBQWhCO0FBQ0EsUUFBSVUsU0FBUyxHQUFHNkUsU0FBUyxDQUFDQyxJQUFWLEVBQWhCO0FBQ0FELGFBQVMsQ0FBQzFFLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFVBQVVDLENBQVYsRUFBYTtBQUNuQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0FMLGVBQVMsQ0FBQ00sT0FBVixDQUFrQixPQUFsQjtBQUNDLEtBSEQ7QUFJQU4sYUFBUyxDQUFDRyxFQUFWLENBQWEsUUFBYixFQUF1QixZQUFZO0FBQ25DLFVBQUlJLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVcsQ0FBWCxDQUFYOztBQUNBLFVBQUksUUFBUUMsSUFBUixDQUFhRixJQUFJLENBQUNHLElBQWxCLENBQUosRUFBNkI7QUFDN0IsWUFBSXFFLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQUQsY0FBTSxDQUFDRSxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxVQUFVN0UsQ0FBVixFQUFhO0FBQzdDLGNBQUl3RSxHQUFHLEdBQUcxRixPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLEtBQW5DLENBQVY7QUFDQXNGLGFBQUcsQ0FBQ2pFLElBQUosQ0FBUyxLQUFULEVBQWdCUCxDQUFDLENBQUM4RSxNQUFGLENBQVNDLE1BQXpCO0FBQ0FQLGFBQUcsQ0FBQ3RELEdBQUosQ0FBUTtBQUNSOEQsaUJBQUssRUFBRSxFQURDO0FBRVJDLGtCQUFNLEVBQUU7QUFGQSxXQUFSO0FBSUFULGFBQUcsQ0FBQzlELElBQUosQ0FBUyxZQUFZO0FBQ3JCNUIsbUJBQU8sQ0FBQzZCLGdCQUFSLENBQXlCN0IsT0FBTyxDQUFDNkUsbUJBQVIsRUFBekIsRUFBd0RoRSxPQUF4RDtBQUNDLFdBRkQ7QUFHQyxTQVZEO0FBV0FnRixjQUFNLENBQUNPLGFBQVAsQ0FBcUIsS0FBSzlFLEtBQUwsQ0FBVyxDQUFYLENBQXJCO0FBQ0MsT0FkRCxNQWNPO0FBQ1BRLGFBQUssQ0FBQyxrQ0FBRCxDQUFMO0FBQ0M7QUFDQSxLQW5CRDtBQW9CQSxRQUFJdUUsVUFBVSxHQUFHM0YsSUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixDQUFqQjtBQUNBaUcsY0FBVSxDQUFDcEYsRUFBWCxDQUFjLFFBQWQsRUFBd0IsWUFBWTtBQUNwQyxVQUFJcUYsS0FBSyxHQUFHdEcsT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxjQUFuQyxDQUFaO0FBQ0FrRyxXQUFLLENBQUNsRSxHQUFOLENBQVUsWUFBVixFQUF3QixLQUFLQyxLQUE3QjtBQUNDLEtBSEQ7QUFJQSxRQUFJa0UsZUFBZSxHQUFHN0YsSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBdEI7QUFDQW1HLG1CQUFlLENBQUN0RixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFZO0FBQ3hDakIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxLQUFuQyxFQUEwQyxLQUFLNEIsT0FBTCxHQUFlLFVBQWYsR0FBNEIsYUFBdEUsRUFBcUYsZ0JBQXJGO0FBQ0MsS0FGRDtBQUdBLFFBQUl3RSxRQUFRLEdBQUc5RixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWY7QUFDQW9HLFlBQVEsQ0FBQ3ZGLEVBQVQsQ0FBWSxRQUFaLEVBQXNCLFlBQVk7QUFDbEMsVUFBSXlFLEdBQUcsR0FBRzFGLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsS0FBbkMsQ0FBVjtBQUNBLFVBQUkyRSxHQUFHLEdBQUcsS0FBSzFDLEtBQWY7QUFDQXFELFNBQUcsQ0FBQ2pDLFdBQUosQ0FBZ0Isc0NBQWhCOztBQUNBLFVBQUlzQixHQUFKLEVBQVM7QUFDVFcsV0FBRyxDQUFDbEMsUUFBSixDQUFhdUIsR0FBYjtBQUNDO0FBQ0EsS0FQRDtBQVFBLFFBQUkwQixVQUFVLEdBQUcvRixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWpCO0FBQ0EsUUFBSXNHLFdBQVcsR0FBR2hHLElBQUksQ0FBQ04sSUFBTCxDQUFVLGVBQVYsQ0FBbEI7QUFDQXFHLGNBQVUsQ0FBQ3hGLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFlBQVk7QUFDcEMsVUFBSXlFLEdBQUcsR0FBRzFGLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsS0FBbkMsQ0FBVjtBQUNBLFVBQUl1RyxRQUFRLEdBQUcsQ0FBQyxLQUFLdEUsS0FBckI7QUFDQSxVQUFJdUUsU0FBUyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsUUFBUSxHQUFHcEUsSUFBSSxDQUFDd0UsS0FBM0IsQ0FBaEI7O0FBQ0EsVUFBSUosUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ25CQSxnQkFBUSxHQUFHcEUsSUFBSSxDQUFDMkQsS0FBaEI7QUFDQVUsaUJBQVMsR0FBR3JFLElBQUksQ0FBQzRELE1BQWpCO0FBQ0EsYUFBSzlELEtBQUwsR0FBYXNFLFFBQWI7QUFDQzs7QUFDRGpCLFNBQUcsQ0FBQ3RELEdBQUosQ0FBUTtBQUNSLGlCQUFTdUUsUUFERDtBQUVSLGtCQUFVQztBQUZGLE9BQVI7QUFJQUYsaUJBQVcsQ0FBQzNCLEdBQVosQ0FBZ0I2QixTQUFoQjtBQUNDLEtBZEQ7QUFlQUYsZUFBVyxDQUFDekYsRUFBWixDQUFlLFFBQWYsRUFBeUIsWUFBWTtBQUNyQyxVQUFJeUUsR0FBRyxHQUFHMUYsT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxLQUFuQyxDQUFWO0FBQ0EsVUFBSXdHLFNBQVMsR0FBRyxDQUFDLEtBQUt2RSxLQUF0QjtBQUNBLFVBQUlzRSxRQUFRLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixTQUFTLEdBQUdyRSxJQUFJLENBQUN3RSxLQUE1QixDQUFmOztBQUNBLFVBQUlILFNBQVMsSUFBSSxDQUFqQixFQUFvQjtBQUNwQkQsZ0JBQVEsR0FBR3BFLElBQUksQ0FBQzJELEtBQWhCO0FBQ0FVLGlCQUFTLEdBQUdyRSxJQUFJLENBQUM0RCxNQUFqQjtBQUNBLGFBQUs5RCxLQUFMLEdBQWF1RSxTQUFiO0FBQ0M7O0FBQ0RsQixTQUFHLENBQUN0RCxHQUFKLENBQVE7QUFDUixrQkFBVXdFLFNBREY7QUFFUixpQkFBU0Q7QUFGRCxPQUFSO0FBSUFGLGdCQUFVLENBQUMxQixHQUFYLENBQWU0QixRQUFmO0FBQ0MsS0FkRDtBQWVDLEdBMUk2QjtBQTJJOUIvRixpQkFBZSxFQUFFLHlCQUFVRixJQUFWLEVBQWdCWCxTQUFoQixFQUEyQkMsT0FBM0IsRUFBb0M7QUFDckROLFFBQUksQ0FBQyxtQ0FBRCxFQUFzQ0ssU0FBdEMsQ0FBSjtBQUNBLFFBQUl3QyxJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUk4RCxVQUFVLEdBQUczRixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWpCO0FBQ0EsUUFBSW1HLGVBQWUsR0FBRzdGLElBQUksQ0FBQ04sSUFBTCxDQUFVLG1CQUFWLENBQXRCO0FBQ0EsUUFBSXFHLFVBQVUsR0FBRy9GLElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBakI7QUFDQSxRQUFJc0csV0FBVyxHQUFHaEcsSUFBSSxDQUFDTixJQUFMLENBQVUsZUFBVixDQUFsQjtBQUNBLFFBQUlvRyxRQUFRLEdBQUc5RixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWY7QUFDQSxRQUFJa0csS0FBSyxHQUFHdkcsU0FBUyxDQUFDSyxJQUFWLENBQWUsY0FBZixDQUFaO0FBQ0EsUUFBSXNGLEdBQUcsR0FBR1ksS0FBSyxDQUFDbEcsSUFBTixDQUFXLEtBQVgsQ0FBVjtBQUNBLFFBQUk0RyxLQUFLLEdBQUdWLEtBQUssQ0FBQ2xFLEdBQU4sQ0FBVSxZQUFWLENBQVo7O0FBQ0EsUUFBSTRFLEtBQUssS0FBSyxPQUFWLElBQXFCQSxLQUFLLEtBQUssUUFBbkMsRUFBNkM7QUFDN0NBLFdBQUssR0FBRyxNQUFSO0FBQ0M7O0FBQ0QsUUFBSXRCLEdBQUcsQ0FBQ3JDLFFBQUosQ0FBYSxhQUFiLENBQUosRUFBaUM7QUFDakNtRCxjQUFRLENBQUN6QixHQUFULENBQWEsYUFBYjtBQUNDLEtBRkQsTUFFTyxJQUFJVyxHQUFHLENBQUNyQyxRQUFKLENBQWEsWUFBYixDQUFKLEVBQWdDO0FBQ3ZDbUQsY0FBUSxDQUFDekIsR0FBVCxDQUFhLFlBQWI7QUFDQyxLQUZNLE1BRUEsSUFBSVcsR0FBRyxDQUFDckMsUUFBSixDQUFhLGVBQWIsQ0FBSixFQUFtQztBQUMxQ21ELGNBQVEsQ0FBQ3pCLEdBQVQsQ0FBYSxlQUFiO0FBQ0MsS0FGTSxNQUVBO0FBQ1B5QixjQUFRLENBQUN6QixHQUFULENBQWEsRUFBYjtBQUNDOztBQUNEc0IsY0FBVSxDQUFDdEIsR0FBWCxDQUFlaUMsS0FBZjtBQUNBVCxtQkFBZSxDQUFDVSxJQUFoQixDQUFxQixTQUFyQixFQUFnQ3ZCLEdBQUcsQ0FBQ3JDLFFBQUosQ0FBYSxnQkFBYixDQUFoQztBQUNBb0QsY0FBVSxDQUFDMUIsR0FBWCxDQUFlVyxHQUFHLENBQUNRLEtBQUosRUFBZjtBQUNBUSxlQUFXLENBQUMzQixHQUFaLENBQWdCVyxHQUFHLENBQUNTLE1BQUosRUFBaEI7QUFDQWxDLGlEQUFDLENBQUMsU0FBRCxDQUFELENBQWF4QyxJQUFiLENBQWtCLEtBQWxCLEVBQXlCaUUsR0FBRyxDQUFDakUsSUFBSixDQUFTLEtBQVQsQ0FBekIsRUFBMENHLElBQTFDLENBQStDLFlBQVk7QUFDM0RXLFVBQUksQ0FBQ3dFLEtBQUwsR0FBYSxLQUFLYixLQUFMLEdBQWEsS0FBS0MsTUFBL0I7QUFDQTVELFVBQUksQ0FBQzJELEtBQUwsR0FBYSxLQUFLQSxLQUFsQjtBQUNBM0QsVUFBSSxDQUFDNEQsTUFBTCxHQUFjLEtBQUtBLE1BQW5CO0FBQ0MsS0FKRDtBQUtDO0FBM0s2QixDQUE5QixDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNekcsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBO0FBQ0EsSUFBTXNILFNBQVMsR0FBRyxFQUFsQixDLENBQ0E7QUFDQTs7QUFDQXZILDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsTUFBbkIsSUFBNkI7QUFDN0I0RSxNQUFJLEVBQUUsY0FBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0M1RSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDNUROLFFBQUksQ0FBQyx1QkFBRCxFQUEwQkssU0FBMUIsQ0FBSjtBQUNBLFFBQUljLE9BQU8sR0FBR2IsT0FBTyxDQUFDYSxPQUF0QjtBQUNBLFFBQUlaLGdCQUFnQixHQUFHRixTQUFTLENBQUNHLFFBQVYsQ0FBbUIsNEJBQW5CLENBQXZCO0FBQ0FELG9CQUFnQixDQUFDZ0gsSUFBakIsQ0FBc0IsaUJBQXRCLEVBQXlDLElBQXpDO0FBQ0FoSCxvQkFBZ0IsQ0FBQ2dCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFVBQVVDLENBQVYsRUFBYTtBQUMxQyxVQUFJLE9BQU9MLE9BQU8sQ0FBQ3NHLGtCQUFmLEtBQXNDLFVBQTFDLEVBQXNEO0FBQ3REdEcsZUFBTyxDQUFDc0csa0JBQVIsQ0FBMkJDLElBQTNCLENBQWdDMUMsV0FBaEMsRUFBNkN4RCxDQUE3QyxFQUFnRG5CLFNBQWhEO0FBQ0M7O0FBQ0QsVUFBSSxPQUFPYyxPQUFPLENBQUN3RyxrQkFBZixLQUFzQyxVQUExQyxFQUFzRDtBQUN0RHhHLGVBQU8sQ0FBQ3dHLGtCQUFSLENBQTJCRCxJQUEzQixDQUFnQzFDLFdBQWhDLEVBQTZDeEQsQ0FBN0MsRUFBZ0R5RCxTQUFoRDtBQUNDOztBQUNELFVBQUksT0FBTzlELE9BQU8sQ0FBQ3lHLGdCQUFmLEtBQW9DLFVBQXhDLEVBQW9EO0FBQ3BEekcsZUFBTyxDQUFDeUcsZ0JBQVIsQ0FBeUJGLElBQXpCLENBQThCcEgsT0FBOUIsRUFBdUNrQixDQUF2QyxFQUEwQ3dELFdBQTFDO0FBQ0M7QUFDQSxLQVZEO0FBV0E2Qyx1REFBWSxDQUNYQyxNQURELENBQ1F2SCxnQkFBZ0IsQ0FBQ3dILEdBQWpCLENBQXFCLENBQXJCLENBRFIsRUFDaUM7QUFDakNDLGdCQUFVLEVBQUU7QUFDWjdHLGVBQU8sRUFBRSxDQUNULFNBRFMsRUFFVCw4QkFGUyxFQUdULGlDQUhTLEVBSVQsZ0JBSlMsRUFLVCxnREFMUyxFQU1ULDRCQU5TLEVBT1QsK0JBUFMsRUFRVCxxQ0FSUyxFQVNULDZCQVRTO0FBREc7QUFEcUIsS0FEakMsRUFnQkM4RyxJQWhCRCxDQWdCTSxVQUFBQyxNQUFNLEVBQUk7QUFDaEJsSSxVQUFJLENBQUMsbUJBQUQsRUFBc0JLLFNBQXRCLENBQUo7QUFDQW1ILGVBQVMsQ0FBQ2pILGdCQUFnQixDQUFDd0IsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBRCxDQUFULEdBQXlDbUcsTUFBekM7O0FBQ0EsVUFBSSxPQUFPL0csT0FBTyxDQUFDZ0gsZ0JBQWYsS0FBb0MsVUFBeEMsRUFBb0Q7QUFDcERoSCxlQUFPLENBQUNnSCxnQkFBUixDQUF5QlQsSUFBekIsQ0FBOEJwSCxPQUE5QixFQUF1Q0QsU0FBdkMsRUFBa0Q2SCxNQUFsRDtBQUNDO0FBQ0EsS0F0QkQsV0F1Qk8sVUFBQUUsS0FBSyxFQUFJO0FBQ2hCQyxhQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNDLEtBekJEO0FBMEJDLEdBM0M0QjtBQTRDN0JoSSxZQUFVLEVBQUUsb0JBQVVDLFNBQVYsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzFDTixRQUFJLENBQUMsNkJBQUQsRUFBZ0NLLFNBQWhDLENBQUo7QUFDQSxRQUFJRSxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDSyxJQUFWLENBQWUsNEJBQWYsQ0FBdkI7QUFDQSxRQUFJd0gsTUFBTSxHQUFHVixTQUFTLENBQUNqSCxnQkFBZ0IsQ0FBQ3dCLElBQWpCLENBQXNCLElBQXRCLENBQUQsQ0FBdEI7O0FBQ0EsUUFBSW1HLE1BQUosRUFBWTtBQUNaLGFBQU9BLE1BQU0sQ0FBQzlELE9BQVAsRUFBUDtBQUNDLEtBRkQsTUFFTztBQUNQLGFBQU83RCxnQkFBZ0IsQ0FBQ0ssSUFBakIsRUFBUDtBQUNDO0FBQ0EsR0FyRDRCO0FBc0Q3QjBILFNBQU8sRUFBRSxpQkFBVWpJLFNBQVYsRUFBcUJDLE9BQXJCLEVBQThCO0FBQ3ZDTixRQUFJLENBQUMsMEJBQUQsRUFBNkJLLFNBQTdCLENBQUo7QUFDQSxRQUFJa0ksRUFBRSxHQUFHbEksU0FBUyxDQUFDSyxJQUFWLENBQWUsNEJBQWYsRUFBNkNxQixJQUE3QyxDQUFrRCxJQUFsRCxDQUFUO0FBQ0EsUUFBSW1HLE1BQU0sR0FBR1YsU0FBUyxDQUFDZSxFQUFELENBQXRCOztBQUNBLFFBQUlMLE1BQUosRUFBWTtBQUNaQSxZQUFNLENBQUNJLE9BQVA7QUFDQSxhQUFPZCxTQUFTLENBQUNlLEVBQUQsQ0FBaEI7QUFDQztBQUNBO0FBOUQ0QixDQUE3QixDOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLElBQU12SSxJQUFJLEdBQUdDLDhDQUFPLENBQUNDLEdBQXJCO0FBQ0FELDhDQUFPLENBQUNFLFVBQVIsQ0FBbUIsT0FBbkIsSUFBOEI7QUFDOUI0RSxNQUFJLEVBQUUsY0FBVUMsV0FBVixFQUF1QkMsU0FBdkIsRUFBa0M1RSxTQUFsQyxFQUE2Q0MsT0FBN0MsRUFBc0Q7QUFDNUROLFFBQUksQ0FBQyx3QkFBRCxFQUEyQkssU0FBM0IsQ0FBSjtBQUNBLFFBQUlFLGdCQUFnQixHQUFHRixTQUFTLENBQUNHLFFBQVYsQ0FBbUIsNEJBQW5CLENBQXZCO0FBQ0EsUUFBSWdJLEtBQUssR0FBR2pJLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQixPQUF0QixDQUFaOztBQUNBLFFBQUksQ0FBQzhILEtBQUssQ0FBQ2hELE1BQU4sR0FBZWlELEVBQWYsQ0FBa0IsZ0JBQWxCLENBQUwsRUFBMEM7QUFDMUNELFdBQUssQ0FBQzlELElBQU4sQ0FBVyxtQ0FBWDtBQUNDO0FBQ0EsR0FSNkI7QUFTOUJ0RSxZQUFVLEVBQUUsb0JBQVVDLFNBQVYsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzFDTixRQUFJLENBQUMsOEJBQUQsRUFBaUNLLFNBQWpDLENBQUo7QUFDQSxRQUFJRSxnQkFBZ0IsR0FBR0YsU0FBUyxDQUFDRyxRQUFWLENBQW1CLDRCQUFuQixDQUF2QjtBQUNBLFFBQUlnSSxLQUFLLEdBQUdqSSxnQkFBZ0IsQ0FBQ0csSUFBakIsQ0FBc0IsT0FBdEIsQ0FBWjtBQUNBOEgsU0FBSyxDQUFDN0gsTUFBTjtBQUNBLFdBQU9KLGdCQUFnQixDQUFDSyxJQUFqQixFQUFQO0FBQ0MsR0FmNkI7QUFnQjlCQyxnQkFBYyxFQUFFLElBaEJjO0FBaUI5QkMsY0FBWSxFQUFFLGdCQWpCZ0I7QUFrQjlCQyxpQkFBZSxFQUFFLHlCQUFVQyxJQUFWLEVBQWdCVixPQUFoQixFQUF5QjtBQUMxQ04sUUFBSSxDQUFDLHVCQUFELEVBQTBCZ0IsSUFBMUIsQ0FBSjtBQUNBQSxRQUFJLENBQUNDLE1BQUw7QUE4Q0EsUUFBSUcsU0FBUyxHQUFHSixJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWhCO0FBQ0FNLFFBQUksQ0FBQ04sSUFBTCxDQUFVLGtCQUFWLEVBQThCYSxFQUE5QixDQUFpQyxPQUFqQyxFQUEwQyxVQUFVQyxDQUFWLEVBQWE7QUFDdkRBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBTCxlQUFTLENBQUNNLE9BQVYsQ0FBa0IsT0FBbEI7QUFDQyxLQUhEO0FBSUFOLGFBQVMsQ0FBQ0csRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBWTtBQUNuQyxVQUFJSSxJQUFJLEdBQUcsS0FBS0MsS0FBTCxDQUFXLENBQVgsQ0FBWDtBQUNBLFVBQUk0RyxLQUFLLEdBQUdsSSxPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLE9BQW5DLENBQVo7O0FBQ0EsVUFBSSxRQUFRbUIsSUFBUixDQUFhRixJQUFJLENBQUNHLElBQWxCLENBQUosRUFBNkI7QUFDN0I7QUFDQTBHLGFBQUssQ0FBQ3pHLElBQU4sQ0FBVyxLQUFYLEVBQWtCQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JOLElBQXBCLENBQWxCO0FBQ0MsT0FIRCxNQUdPO0FBQ1BTLGFBQUssQ0FBQywwQ0FBRCxDQUFMO0FBQ0M7QUFDQSxLQVREO0FBVUEsUUFBSUMsY0FBYyxHQUFHckIsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBckI7QUFDQTJCLGtCQUFjLENBQUNkLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBWTtBQUN2QyxVQUFJaUgsS0FBSyxHQUFHbEksT0FBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxPQUFuQyxDQUFaO0FBQ0E4SCxXQUFLLENBQUNqQixJQUFOLENBQVcsVUFBWCxFQUF1QixLQUFLakYsT0FBNUI7QUFDQyxLQUhEO0FBSUEsUUFBSW9HLFVBQVUsR0FBRzFILElBQUksQ0FBQ04sSUFBTCxDQUFVLGFBQVYsQ0FBakI7QUFDQWdJLGNBQVUsQ0FBQ25ILEVBQVgsQ0FBYyxPQUFkLEVBQXVCLFlBQVk7QUFDbkMsVUFBSWlILEtBQUssR0FBR2xJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsT0FBbkMsQ0FBWjtBQUNBOEgsV0FBSyxDQUFDakIsSUFBTixDQUFXLE1BQVgsRUFBbUIsS0FBS2pGLE9BQXhCO0FBQ0MsS0FIRDtBQUlBLFFBQUkrRSxLQUFLLEdBQUdyRyxJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQVo7QUFDQTJHLFNBQUssQ0FBQzlGLEVBQU4sQ0FBUyxPQUFULEVBQWtCLFlBQVk7QUFDOUIsVUFBSWlILEtBQUssR0FBR2xJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsT0FBbkMsQ0FBWjtBQUNBOEgsV0FBSyxDQUFDekcsSUFBTixDQUFXLFlBQVgsRUFBeUIsS0FBS1ksS0FBOUI7QUFDQTNCLFVBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsRUFBMEJnQixPQUExQixDQUFrQyxRQUFsQztBQUNDLEtBSkQ7QUFLQSxRQUFJaUgsYUFBYSxHQUFHM0gsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBcEI7QUFDQWlJLGlCQUFhLENBQUNwSCxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVk7QUFDdEMsVUFBSWlILEtBQUssR0FBR2xJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsT0FBbkMsQ0FBWjtBQUNBOEgsV0FBSyxDQUFDakIsSUFBTixDQUFXLFVBQVgsRUFBdUIsS0FBS2pGLE9BQTVCO0FBQ0MsS0FIRDtBQUlBLFFBQUlzRyxVQUFVLEdBQUc1SCxJQUFJLENBQUNOLElBQUwsQ0FBVSxjQUFWLENBQWpCO0FBQ0FrSSxjQUFVLENBQUNySCxFQUFYLENBQWMsUUFBZCxFQUF3QixZQUFZO0FBQ3BDLFVBQUlpSCxLQUFLLEdBQUdsSSxPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLE9BQW5DLENBQVo7QUFDQSxVQUFJbUksWUFBWSxHQUFHTCxLQUFLLENBQUN6RyxJQUFOLENBQVcsWUFBWCxNQUE2QixNQUE3QixHQUFzQyxLQUFLLENBQTNDLEdBQStDLElBQUksQ0FBdEU7QUFDQSxVQUFJMEUsTUFBTSxHQUFHLEtBQUs5RCxLQUFMLEdBQWFrRyxZQUExQjtBQUNBTCxXQUFLLENBQUN6RyxJQUFOLENBQVcsT0FBWCxFQUFvQixLQUFLWSxLQUF6QjtBQUNBNkYsV0FBSyxDQUFDekcsSUFBTixDQUFXLFFBQVgsRUFBcUIwRSxNQUFyQjtBQUNDLEtBTkQ7QUFPQyxHQTlHNkI7QUErRzlCdkYsaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMsa0NBQUQsRUFBcUNnQixJQUFyQyxFQUEyQ1gsU0FBM0MsQ0FBSjtBQUNBLFFBQUltSSxLQUFLLEdBQUduSSxTQUFTLENBQUNLLElBQVYsQ0FBZSxPQUFmLENBQVo7QUFDQSxRQUFJMkIsY0FBYyxHQUFHckIsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBckI7QUFDQTJCLGtCQUFjLENBQUNrRixJQUFmLENBQW9CLFNBQXBCLEVBQStCaUIsS0FBSyxDQUFDakIsSUFBTixDQUFXLFVBQVgsQ0FBL0I7QUFDQSxRQUFJbUIsVUFBVSxHQUFHMUgsSUFBSSxDQUFDTixJQUFMLENBQVUsYUFBVixDQUFqQjtBQUNBZ0ksY0FBVSxDQUFDbkIsSUFBWCxDQUFnQixTQUFoQixFQUEyQmlCLEtBQUssQ0FBQ2pCLElBQU4sQ0FBVyxNQUFYLENBQTNCO0FBQ0EsUUFBSUYsS0FBSyxHQUFHckcsSUFBSSxDQUFDTixJQUFMLENBQVUsY0FBVixDQUFaO0FBQ0EyRyxTQUFLLENBQUNFLElBQU4sQ0FBVyxTQUFYLEVBQXNCLEtBQXRCLEVBQTZCdUIsTUFBN0IsQ0FBb0MsYUFBYU4sS0FBSyxDQUFDekcsSUFBTixDQUFXLFlBQVgsQ0FBYixHQUF3QyxJQUE1RSxFQUFrRndGLElBQWxGLENBQXVGLFNBQXZGLEVBQWtHLElBQWxHO0FBQ0EsUUFBSW9CLGFBQWEsR0FBRzNILElBQUksQ0FBQ04sSUFBTCxDQUFVLGlCQUFWLENBQXBCO0FBQ0FpSSxpQkFBYSxDQUFDcEIsSUFBZCxDQUFtQixTQUFuQixFQUE4QmlCLEtBQUssQ0FBQ2pCLElBQU4sQ0FBVyxVQUFYLENBQTlCO0FBQ0EsUUFBSXFCLFVBQVUsR0FBRzVILElBQUksQ0FBQ04sSUFBTCxDQUFVLGNBQVYsQ0FBakI7QUFDQWtJLGNBQVUsQ0FBQ3ZELEdBQVgsQ0FBZW1ELEtBQUssQ0FBQ3pHLElBQU4sQ0FBVyxPQUFYLENBQWY7QUFDQztBQTVINkIsQ0FBOUIsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNL0IsSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBRCw4Q0FBTyxDQUFDRSxVQUFSLENBQW1CLE9BQW5CLElBQThCO0FBQzlCNEUsTUFBSSxFQUFFLGNBQVVDLFdBQVYsRUFBdUJDLFNBQXZCLEVBQWtDNUUsU0FBbEMsRUFBNkNDLE9BQTdDLEVBQXNEO0FBQzVETixRQUFJLENBQUMsd0JBQUQsRUFBMkJLLFNBQTNCLENBQUo7QUFDQSxRQUFJaUYsTUFBTSxHQUFHakYsU0FBUyxDQUFDSyxJQUFWLENBQWUsUUFBZixDQUFiO0FBQ0EsUUFBSTZFLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxNQUFQLEVBQWQ7QUFDQWxGLFdBQU8sQ0FBQ21GLGVBQVIsQ0FBd0JILE1BQXhCLEVBQWdDQyxPQUFoQztBQUNDLEdBTjZCO0FBTzlCMUUsZ0JBQWMsRUFBRSxJQVBjO0FBUTlCQyxjQUFZLEVBQUUsZ0JBUmdCO0FBUzlCQyxpQkFBZSxFQUFFLHlCQUFVQyxJQUFWLEVBQWdCVixPQUFoQixFQUF5QjtBQUMxQ04sUUFBSSxDQUFDLG1DQUFELENBQUo7QUFDQWdCLFFBQUksQ0FBQ0MsTUFBTCxDQUNBLG1DQUNBLDZCQURBLEdBRUEsZ0NBRkEsR0FHQSx5R0FIQSxHQUlBLGVBSkEsR0FLQSxXQUxBLEdBTUEsNkJBTkEsR0FPQSxrREFQQSxHQVFBLGdDQVJBLEdBU0EsMERBVEEsR0FVQSxlQVZBLEdBV0EsV0FYQSxHQVlBLDZCQVpBLEdBYUEsc0RBYkEsR0FjQSxnQ0FkQSxHQWVBLDZGQWZBLEdBZ0JBLDJGQWhCQSxHQWlCQSxlQWpCQSxHQWtCQSxXQWxCQSxHQW1CQSxTQXBCQTtBQXNCQSxRQUFJeUUsT0FBTyxHQUFHMUUsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBZDtBQUNBZ0YsV0FBTyxDQUFDbkUsRUFBUixDQUFXLE9BQVgsRUFBb0IsVUFBVUMsQ0FBVixFQUFhO0FBQ2pDQSxPQUFDLENBQUNDLGNBQUY7QUFDQSxVQUFJa0UsU0FBUyxHQUFHQyxNQUFNLENBQUMsaUNBQUQsQ0FBdEI7QUFDQSxVQUFJbUQsVUFBVSxHQUFHLDZJQUFqQjtBQUNBLFVBQUlDLEtBQUssR0FBR3JELFNBQVMsQ0FBQ3FELEtBQVYsQ0FBZ0JELFVBQWhCLENBQVo7O0FBQ0EsVUFBSUMsS0FBSyxJQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFsQixFQUF1QjtBQUN2QjFJLGVBQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsd0JBQW5DLEVBQTZEcUIsSUFBN0QsQ0FBa0UsS0FBbEUsRUFBeUUsb0NBQW9DaUgsS0FBSyxDQUFDLENBQUQsQ0FBekMsR0FBK0MsOEJBQXhIO0FBQ0MsT0FGRCxNQUVPO0FBQ1A1RyxhQUFLLENBQUMsNEJBQUQsQ0FBTDtBQUNDO0FBQ0EsS0FWRDtBQVdBLFFBQUkwRCxNQUFNLEdBQUc5RSxJQUFJLENBQUNOLElBQUwsQ0FBVSxnQkFBVixDQUFiO0FBQ0FvRixVQUFNLENBQUN2RSxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDaENBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx1QkFBcEUsRUFBNkZELFFBQTdGLENBQXNHLHdCQUF0RztBQUNDLEtBSEQ7QUFJQSxRQUFJaUMsS0FBSyxHQUFHL0UsSUFBSSxDQUFDTixJQUFMLENBQVUsZUFBVixDQUFaO0FBQ0FxRixTQUFLLENBQUN4RSxFQUFOLENBQVMsT0FBVCxFQUFrQixVQUFVQyxDQUFWLEVBQWE7QUFDL0JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx3QkFBcEUsRUFBOEZELFFBQTlGLENBQXVHLHVCQUF2RztBQUNDLEtBSEQ7QUFJQSxRQUFJbUYsV0FBVyxHQUFHakksSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBbEI7QUFDQXVJLGVBQVcsQ0FBQzFILEVBQVosQ0FBZSxPQUFmLEVBQXdCLFlBQVk7QUFDcEMsVUFBSTJILFNBQVMsR0FBRzVJLE9BQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsd0JBQW5DLENBQWhCO0FBQ0EsVUFBSXlJLFVBQVUsR0FBR0QsU0FBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsQ0FBakI7QUFDQSxVQUFJcUgsTUFBTSxHQUFJRCxVQUFVLENBQUNFLE9BQVgsQ0FBbUIsU0FBbkIsRUFBOEIsRUFBOUIsQ0FBRCxHQUFzQyx3Q0FBdEMsSUFBa0ZKLFdBQVcsQ0FBQ1IsRUFBWixDQUFlLFVBQWYsSUFBNkIsQ0FBN0IsR0FBaUMsQ0FBbkgsQ0FBYjtBQUNBekksVUFBSSxDQUFDLGtCQUFrQm1KLFVBQW5CLEVBQStCLGNBQWNDLE1BQTdDLENBQUo7QUFDQUYsZUFBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsRUFBc0JxSCxNQUF0QjtBQUNDLEtBTkQ7QUFPQyxHQS9ENkI7QUFnRTlCbEksaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMsbUNBQUQsRUFBc0NLLFNBQXRDLENBQUo7QUFDQSxRQUFJNkksU0FBUyxHQUFHN0ksU0FBUyxDQUFDSyxJQUFWLENBQWUsd0JBQWYsQ0FBaEI7QUFDQSxRQUFJdUksV0FBVyxHQUFHakksSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBbEI7QUFDQSxRQUFJbUYsR0FBRyxHQUFHcUQsU0FBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsQ0FBVjtBQUNBa0gsZUFBVyxDQUFDMUIsSUFBWixDQUFpQixTQUFqQixFQUE0QjFCLEdBQUcsQ0FBQ3lELE9BQUosQ0FBWSxZQUFaLE1BQThCLENBQUMsQ0FBM0Q7QUFDQztBQXRFNkIsQ0FBOUIsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxJQUFNdEosSUFBSSxHQUFHQyw4Q0FBTyxDQUFDQyxHQUFyQjtBQUNBRCw4Q0FBTyxDQUFDRSxVQUFSLENBQW1CLFNBQW5CLElBQWdDO0FBQ2hDNEUsTUFBSSxFQUFFLGNBQVVDLFdBQVYsRUFBdUJDLFNBQXZCLEVBQWtDNUUsU0FBbEMsRUFBNkNDLE9BQTdDLEVBQXNEO0FBQzVETixRQUFJLENBQUMsMEJBQUQsRUFBNkJLLFNBQTdCLENBQUo7QUFDQSxRQUFJaUYsTUFBTSxHQUFHakYsU0FBUyxDQUFDSyxJQUFWLENBQWUsUUFBZixDQUFiO0FBQ0EsUUFBSTZFLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxNQUFQLEVBQWQ7QUFDQWxGLFdBQU8sQ0FBQ21GLGVBQVIsQ0FBd0JILE1BQXhCLEVBQWdDQyxPQUFoQztBQUNDLEdBTitCO0FBT2hDMUUsZ0JBQWMsRUFBRSxJQVBnQjtBQVFoQ0MsY0FBWSxFQUFFLGtCQVJrQjtBQVNoQ0MsaUJBQWUsRUFBRSx5QkFBVUMsSUFBVixFQUFnQlYsT0FBaEIsRUFBeUI7QUFDMUNOLFFBQUksQ0FBQyxxQ0FBRCxDQUFKO0FBQ0FnQixRQUFJLENBQUNDLE1BQUwsQ0FDQSxtQ0FDQSw2QkFEQSxHQUVBLGdDQUZBLEdBR0EsMkdBSEEsR0FJQSxlQUpBLEdBS0EsV0FMQSxHQU1BLDZCQU5BLEdBT0Esa0RBUEEsR0FRQSxnQ0FSQSxHQVNBLDREQVRBLEdBVUEsZUFWQSxHQVdBLFdBWEEsR0FZQSw2QkFaQSxHQWFBLHNEQWJBLEdBY0EsZ0NBZEEsR0FlQSwrRkFmQSxHQWdCQSw2RkFoQkEsR0FpQkEsZUFqQkEsR0FrQkEsV0FsQkEsR0FtQkEsU0FwQkE7QUFzQkEsUUFBSXlFLE9BQU8sR0FBRzFFLElBQUksQ0FBQ04sSUFBTCxDQUFVLG1CQUFWLENBQWQ7QUFDQWdGLFdBQU8sQ0FBQ25FLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVVDLENBQVYsRUFBYTtBQUNqQ0EsT0FBQyxDQUFDQyxjQUFGO0FBQ0EsVUFBSWtFLFNBQVMsR0FBR0MsTUFBTSxDQUFDLG1DQUFELENBQXRCO0FBQ0EsVUFBSTJELFlBQVksR0FBRywwSUFBbkI7QUFDQSxVQUFJUCxLQUFLLEdBQUdyRCxTQUFTLENBQUNxRCxLQUFWLENBQWdCTyxZQUFoQixDQUFaOztBQUNBLFVBQUlQLEtBQUssSUFBSUEsS0FBSyxDQUFDLENBQUQsQ0FBbEIsRUFBdUI7QUFDdkIxSSxlQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLHdCQUFuQyxFQUE2RHFCLElBQTdELENBQWtFLEtBQWxFLEVBQXlFLG1DQUFtQ2lILEtBQUssQ0FBQyxDQUFELENBQWpIO0FBQ0MsT0FGRCxNQUVPO0FBQ1A1RyxhQUFLLENBQUMsOEJBQUQsQ0FBTDtBQUNDO0FBQ0EsS0FWRDtBQVdBLFFBQUkwRCxNQUFNLEdBQUc5RSxJQUFJLENBQUNOLElBQUwsQ0FBVSxrQkFBVixDQUFiO0FBQ0FvRixVQUFNLENBQUN2RSxFQUFQLENBQVUsT0FBVixFQUFtQixVQUFVQyxDQUFWLEVBQWE7QUFDaENBLE9BQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsYUFBTyxDQUFDNkUsbUJBQVIsR0FBOEJ6RSxJQUE5QixDQUFtQyxtQkFBbkMsRUFBd0RxRCxXQUF4RCxDQUFvRSx1QkFBcEUsRUFBNkZELFFBQTdGLENBQXNHLHdCQUF0RztBQUNDLEtBSEQ7QUFJQSxRQUFJaUMsS0FBSyxHQUFHL0UsSUFBSSxDQUFDTixJQUFMLENBQVUsaUJBQVYsQ0FBWjtBQUNBcUYsU0FBSyxDQUFDeEUsRUFBTixDQUFTLE9BQVQsRUFBa0IsVUFBVUMsQ0FBVixFQUFhO0FBQy9CQSxPQUFDLENBQUNDLGNBQUY7QUFDQW5CLGFBQU8sQ0FBQzZFLG1CQUFSLEdBQThCekUsSUFBOUIsQ0FBbUMsbUJBQW5DLEVBQXdEcUQsV0FBeEQsQ0FBb0Usd0JBQXBFLEVBQThGRCxRQUE5RixDQUF1Ryx1QkFBdkc7QUFDQyxLQUhEO0FBSUEsUUFBSW1GLFdBQVcsR0FBR2pJLElBQUksQ0FBQ04sSUFBTCxDQUFVLG1CQUFWLENBQWxCO0FBQ0F1SSxlQUFXLENBQUMxSCxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFZO0FBQ3BDLFVBQUkySCxTQUFTLEdBQUc1SSxPQUFPLENBQUM2RSxtQkFBUixHQUE4QnpFLElBQTlCLENBQW1DLHdCQUFuQyxDQUFoQjtBQUNBLFVBQUl5SSxVQUFVLEdBQUdELFNBQVMsQ0FBQ25ILElBQVYsQ0FBZSxLQUFmLENBQWpCO0FBQ0EsVUFBSXFILE1BQU0sR0FBSUQsVUFBVSxDQUFDRSxPQUFYLENBQW1CLFNBQW5CLEVBQThCLEVBQTlCLENBQUQsR0FBc0MsWUFBdEMsSUFBc0RKLFdBQVcsQ0FBQ1IsRUFBWixDQUFlLFVBQWYsSUFBNkIsQ0FBN0IsR0FBaUMsQ0FBdkYsQ0FBYjtBQUNBekksVUFBSSxDQUFDLGtCQUFrQm1KLFVBQW5CLEVBQStCLGNBQWNDLE1BQTdDLENBQUo7QUFDQUYsZUFBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsRUFBc0JxSCxNQUF0QjtBQUNDLEtBTkQ7QUFPQyxHQS9EK0I7QUFnRWhDbEksaUJBQWUsRUFBRSx5QkFBVUYsSUFBVixFQUFnQlgsU0FBaEIsRUFBMkJDLE9BQTNCLEVBQW9DO0FBQ3JETixRQUFJLENBQUMscUNBQUQsRUFBd0NLLFNBQXhDLENBQUo7QUFDQSxRQUFJNkksU0FBUyxHQUFHN0ksU0FBUyxDQUFDSyxJQUFWLENBQWUsd0JBQWYsQ0FBaEI7QUFDQSxRQUFJdUksV0FBVyxHQUFHakksSUFBSSxDQUFDTixJQUFMLENBQVUsbUJBQVYsQ0FBbEI7QUFDQSxRQUFJbUYsR0FBRyxHQUFHcUQsU0FBUyxDQUFDbkgsSUFBVixDQUFlLEtBQWYsQ0FBVjtBQUNBa0gsZUFBVyxDQUFDMUIsSUFBWixDQUFpQixTQUFqQixFQUE0QjFCLEdBQUcsQ0FBQ3lELE9BQUosQ0FBWSxZQUFaLE1BQThCLENBQUMsQ0FBM0Q7QUFDQztBQXRFK0IsQ0FBaEMsQzs7Ozs7Ozs7Ozs7QUNIQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRCIsImZpbGUiOiJqcy9rZWRpdG9yLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJJbmxpbmVFZGl0b3JcIiksIHJlcXVpcmUoXCJqUXVlcnlcIiksIHJlcXVpcmUoXCJLRWRpdG9yXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcIklubGluZUVkaXRvclwiLCBcImpRdWVyeVwiLCBcIktFZGl0b3JcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcIklubGluZUVkaXRvclwiKSwgcmVxdWlyZShcImpRdWVyeVwiKSwgcmVxdWlyZShcIktFZGl0b3JcIikpIDogZmFjdG9yeShyb290W1wiSW5saW5lRWRpdG9yXCJdLCByb290W1wialF1ZXJ5XCJdLCByb290W1wiS0VkaXRvclwiXSk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9JbmxpbmVFZGl0b3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9rZWRpdG9yX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb21wb25lbnRzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LWF1ZGlvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1mb3JtLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC1nb29nbGVtYXAuanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXBob3RvLmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC10ZXh0LmpzJztccmltcG9ydCAnLi9rZWRpdG9yLWNvbXBvbmVudC12aWRlby5qcyc7XHJpbXBvcnQgJy4va2VkaXRvci1jb21wb25lbnQtdmltZW8uanMnO1xyaW1wb3J0ICcuL2tlZGl0b3ItY29tcG9uZW50LXlvdXR1YmUuanMnO1xyIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1snYXVkaW8nXSA9IHtccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJhdWRpb1wiIGNvbXBvbmVudCwgY29tcG9uZW50Jyk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCBhdWRpbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgnYXVkaW8nKTtccmF1ZGlvLnVud3JhcCgpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnQXVkaW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcImF1ZGlvXCIgc2V0dGluZ3MnLCBmb3JtKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpb0ZpbGVJbnB1dFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXVkaW8gZmlsZTwvbGFiZWw+JyArXHInICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXVkaW8tdG9vbGJhclwiPicgK1xyJyAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0bi1hdWRpb0ZpbGVJbnB1dCBidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCI+PGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+PC9hPicgK1xyJyAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiYXVkaW9GaWxlSW5wdXRcIiB0eXBlPVwiZmlsZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZVwiIC8+JyArXHInICAgICAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby1hdXRvcGxheVwiIGNsYXNzPVwiY29sLXNtLTEyXCI+QXV0b3BsYXk8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYXVkaW8tYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby1zaG93Y29udHJvbHNcIiBjbGFzcz1cImNvbC1zbS0xMlwiPlNob3cgQ29udHJvbHM8L2xhYmVsPicgK1xyJyAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiYXVkaW8tc2hvd2NvbnRyb2xzXCIgY2hlY2tlZCAvPicgK1xyJyAgICAgICAgIDwvZGl2PicgK1xyJyAgICAgPC9kaXY+JyArXHInICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgIDxsYWJlbCBmb3I9XCJhdWRpby13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGggKCUpPC9sYWJlbD4nICtccicgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJhdWRpby13aWR0aFwiIG1pbj1cIjIwXCIgbWF4PVwiMTAwXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiB2YWx1ZT1cIjEwMFwiIC8+JyArXHInICAgICAgICAgPC9kaXY+JyArXHInICAgICA8L2Rpdj4nICtccic8L2Zvcm0+J1xyKTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcImF1ZGlvXCIgY29tcG9uZW50JywgZm9ybSwgY29tcG9uZW50KTtccmxldCBvcHRpb25zID0ga2VkaXRvci5vcHRpb25zO1xybGV0IGF1ZGlvID0gY29tcG9uZW50LmZpbmQoJ2F1ZGlvJyk7XHJsZXQgZmlsZUlucHV0ID0gZm9ybS5maW5kKCcjYXVkaW9GaWxlSW5wdXQnKTtccmxldCBidG5BdWRpb0ZpbGVJbnB1dCA9IGZvcm0uZmluZCgnLmJ0bi1hdWRpb0ZpbGVJbnB1dCcpO1xyYnRuQXVkaW9GaWxlSW5wdXQub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9mZignY2hhbmdlJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBmaWxlID0gdGhpcy5maWxlc1swXTtccmlmICgvYXVkaW8vLnRlc3QoZmlsZS50eXBlKSkge1xyLy8gVG9kbzogVXBsb2FkIHRvIHlvdXIgc2VydmVyIDopXHJhdWRpby5hdHRyKCdzcmMnLCBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpKTtccmF1ZGlvLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGNvbXBvbmVudCwgb3B0aW9ucyk7XHJ9KTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBhbiBhdWRpbyBmaWxlIScpO1xyfVxyfSk7XHJsZXQgYXV0b3BsYXlUb2dnbGUgPSBmb3JtLmZpbmQoJyNhdWRpby1hdXRvcGxheScpO1xyYXV0b3BsYXlUb2dnbGUub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJpZiAodGhpcy5jaGVja2VkKSB7XHJhdWRpby5hdHRyKCdhdXRvcGxheScsICdhdXRvcGxheScpO1xyfSBlbHNlIHtccmF1ZGlvLnJlbW92ZUF0dHIoJ2F1dG9wbGF5Jyk7XHJ9XHJ9KTtccmxldCBzaG93Y29udHJvbHNUb2dnbGUgPSBmb3JtLmZpbmQoJyNhdWRpby1zaG93Y29udHJvbHMnKTtccnNob3djb250cm9sc1RvZ2dsZS5vZmYoJ2NsaWNrJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmlmICh0aGlzLmNoZWNrZWQpIHtccmF1ZGlvLmF0dHIoJ2NvbnRyb2xzJywgJ2NvbnRyb2xzJyk7XHJ9IGVsc2Uge1xyYXVkaW8ucmVtb3ZlQXR0cignY29udHJvbHMnKTtccn1ccn0pO1xybGV0IGF1ZGlvV2lkdGggPSBmb3JtLmZpbmQoJyNhdWRpby13aWR0aCcpO1xyYXVkaW9XaWR0aC5vZmYoJ2NoYW5nZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJhdWRpby5jc3MoJ3dpZHRoJywgdGhpcy52YWx1ZSArICclJyk7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMva2VkaXRvci1jb21wb25lbnQtZm9ybS5sZXNzJztccmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2Zvcm0nXSA9IHtccmluaXRGb3JtQnVpbGRlcjogZnVuY3Rpb24gKGNvbXBvbmVudCkge1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50JykucHJlcGVuZChccic8cCBjbGFzcz1cImZvcm0tYnVpbGRlci10b29sc1wiIHN0eWxlPVwidGV4dC1hbGlnbjogcmlnaHQ7XCI+JyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByZXZpZXctZm9ybVwiPlByZXZpZXcgZm9ybTwvYT4gJyArXHInICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJidG4gYnRuLWluZm8gYnRuLWVkaXQtZm9ybSBkaXNhYmxlZFwiPkVkaXQgZm9ybTwvYT4nICtccic8L3A+J1xyKTtccmxldCBidG5FZGl0Rm9ybSA9IGNvbXBvbmVudC5maW5kKCcuYnRuLWVkaXQtZm9ybScpO1xybGV0IGJ0blByZXZpZXdGb3JtID0gY29tcG9uZW50LmZpbmQoJy5idG4tcHJldmlldy1mb3JtJyk7XHJmb3JtQnVpbGRlckFyZWEuZm9ybUJ1aWxkZXIoe1xyZGlzYWJsZUluamVjdGVkU3R5bGU6IHRydWUsXHJzaG93QWN0aW9uQnV0dG9uczogZmFsc2UsXHJkYXRhVHlwZTogJ2pzb24nLFxyZm9ybURhdGE6IGZvcm1EYXRhLmh0bWwoKSxccmRpc2FibGVGaWVsZHM6IFtccidhdXRvY29tcGxldGUnLFxyJ3BhcmFncmFwaCcsXHInaGVhZGVyJ1xyXSxccmRpc2FibGVkQXR0cnM6IFsnYWNjZXNzJ10sXHJ0eXBlVXNlckRpc2FibGVkQXR0cnM6IHtccidjaGVja2JveC1ncm91cCc6IFtccid0b2dnbGUnLFxyJ2lubGluZSdccl1ccn1ccn0pO1xyYnRuRWRpdEZvcm0ub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmlmICghYnRuRWRpdEZvcm0uaGFzQ2xhc3MoJ2Rpc2FibGVkJykpIHtccmZvcm1CdWlsZGVyQXJlYS5zaG93KCk7XHJmb3JtQ29udGVudC5oaWRlKCk7XHJidG5FZGl0Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccmJ0blByZXZpZXdGb3JtLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xyfVxyfSk7XHJidG5QcmV2aWV3Rm9ybS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xyaWYgKCFidG5QcmV2aWV3Rm9ybS5oYXNDbGFzcygnZGlzYWJsZWQnKSkge1xyc2VsZi5yZW5kZXJGb3JtKGNvbXBvbmVudCk7XHJmb3JtQnVpbGRlckFyZWEuaGlkZSgpO1xyZm9ybUNvbnRlbnQuc2hvdygpO1xyYnRuRWRpdEZvcm0ucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XHJidG5QcmV2aWV3Rm9ybS5hZGRDbGFzcygnZGlzYWJsZWQnKTtccn1ccn0pO1xyfSxccnJlbmRlckZvcm06IGZ1bmN0aW9uIChjb21wb25lbnQsIGZvcm1CdWlsZGVyKSB7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyaWYgKCFmb3JtQnVpbGRlcikge1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEnKTtccmZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJ9XHJmb3JtQ29udGVudC5mb3JtUmVuZGVyKHtccmRhdGFUeXBlOiAnanNvbicsXHJmb3JtRGF0YTogZm9ybUJ1aWxkZXIuYWN0aW9ucy5nZXREYXRhKCdqc29uJylccn0pO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWhvcml6b250YWwnKSkge1xyZm9ybUNvbnRlbnQuY2hpbGRyZW4oJ2RpdicpLmVhY2goZnVuY3Rpb24gKCkge1xybGV0IGRpdiA9ICQodGhpcyk7XHJsZXQgZGF0YUdyaWQgPSBmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04JztccmRhdGFHcmlkID0gZGF0YUdyaWQuc3BsaXQoJy0nKTtccmlmIChkaXYuYXR0cignY2xhc3MnKSkge1xyaWYgKGRpdi5oYXNDbGFzcygnZmItYnV0dG9uJykpIHtccmRpdi5maW5kKCdidXR0b24nKS53cmFwKCc8ZGl2IGNsYXNzPVwiY29sLXNtLScgKyBkYXRhR3JpZFsxXSArICcgY29sLXNtLW9mZnNldC0nICsgZGF0YUdyaWRbMF0gKyAnXCI+PC9kaXY+Jyk7XHJ9IGVsc2Uge1xybGV0IGxhYmVsID0gZGl2LmNoaWxkcmVuKCdsYWJlbCcpO1xybGV0IGlucHV0ID0gZGl2LmNoaWxkcmVuKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xybGV0IHN1YkRpdiA9IGRpdi5jaGlsZHJlbignZGl2Jyk7XHJsYWJlbC5hZGRDbGFzcygnY29udHJvbC1sYWJlbCBjb2wtc20tJyArIGRhdGFHcmlkWzBdKTtccmlmIChzdWJEaXYubGVuZ3RoID4gMCkge1xyc3ViRGl2LmFkZENsYXNzKCdjb2wtc20tJyArIGRhdGFHcmlkWzFdKTtccn0gZWxzZSB7XHJpbnB1dC5hZGRDbGFzcygnZm9ybS1jb250cm9sJykud3JhcCgnPGRpdiBjbGFzcz1cImNvbC1zbS0nICsgZGF0YUdyaWRbMV0gKyAnXCI+PC9kaXY+Jyk7XHJ9XHJ9XHJ9XHJ9KTtccn1ccn0sXHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGZvcm1CdWlsZGVyID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmxldCBmb3JtRGF0YSA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1kYXRhJyk7XHJpZiAoZm9ybURhdGEubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGRpdiBjbGFzcz1cImZvcm0tZGF0YVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1wiPjwvZGl2PicpXHJ9XHJpZiAoZm9ybUNvbnRlbnQubGVuZ3RoID09PSAwKSB7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZCgnPGZvcm0gY2xhc3M9XCJmb3JtLWNvbnRlbnRcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcIj48L2Zvcm0+Jylccn0gZWxzZSB7XHJmb3JtQ29udGVudC5oaWRlKClccn1ccmlmIChmb3JtQnVpbGRlci5sZW5ndGggPT09IDApIHtccmZvcm1CdWlsZGVyID0gJCgnPGRpdiBjbGFzcz1cImZvcm0tYnVpbGRlci1hcmVhIGNsZWFyZml4XCI+PC9kaXY+Jyk7XHJjb21wb25lbnRDb250ZW50LmFwcGVuZChmb3JtQnVpbGRlcik7XHJ9XHJ0aGlzLmluaXRGb3JtQnVpbGRlcihjb21wb25lbnQpO1xyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJmb3JtXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBjb21wb25lbnRDb250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgZm9ybURhdGEgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tZGF0YScpO1xybGV0IGZvcm1CdWlsZGVyQXJlYSA9ICQoJyMnICsgY29tcG9uZW50LmF0dHIoJ2lkJykpLmZpbmQoJy5mb3JtLWJ1aWxkZXItYXJlYScpO1xybGV0IGZvcm1CdWlsZGVyID0gZm9ybUJ1aWxkZXJBcmVhLmRhdGEoJ2Zvcm1CdWlsZGVyJyk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50LCBmb3JtQnVpbGRlcik7XHJmb3JtRGF0YS5odG1sKGZvcm1CdWlsZGVyLmFjdGlvbnMuZ2V0RGF0YSgnanNvbicpKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1idWlsZGVyLWFyZWEsIC5mb3JtLWJ1aWxkZXItdG9vbHMnKS5yZW1vdmUoKTtccmNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jykuc2hvdygpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnRm9ybSBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJmb3JtXCIgY29tcG9uZW50Jyk7XHJsZXQgc2VsZiA9IHRoaXM7XHJmb3JtLmh0bWwoXHInPGRpdiBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QWN0aW9uPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImZvcm0tY29udHJvbCB0eHQtZm9ybS1hY3Rpb25cIiAvPicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TWV0aG9kPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1tZXRob2RcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImdldFwiPkdldDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicG9zdFwiPlBvc3Q8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInB1dFwiPlB1dDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGVsZXRlXCI+RGVsZXRlPC9vcHRpb24+JyArXHInICAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5FbmN0eXBlPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1lbmN0eXBlXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJ0ZXh0L3BsYWluXCI+dGV4dC9wbGFpbjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiPm11bHRpcGFydC9mb3JtLWRhdGE8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiPmFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgPC9kaXY+JyArXHInICAgIDwvZGl2PicgK1xyJyAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+TGF5b3V0PC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1sYXlvdXRcIj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vcm1hbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1ob3Jpem9udGFsXCI+SG9yaXpvbnRhbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZm9ybS1pbmxpbmVcIj5JbmxpbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgIDwvZGl2PicgK1xyJyAgICA8L2Rpdj4nICtccicgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXAgc2VsZWN0LWdyaWQtd3JhcHBlclwiPicgK1xyJyAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+R3JpZCBzZXR0aW5nPC9sYWJlbD4nICtccicgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiZm9ybS1jb250cm9sIHNlbGVjdC1ncmlkXCI+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyLTEwXCI+Y29sLTIgY29sLTEwPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzLTlcIj5jb2wtMyBjb2wtOTwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNC04XCI+Y29sLTQgY29sLTg8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjUtN1wiPmNvbC01IGNvbC03PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI2LTZcIj5jb2wtNiBjb2wtNjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgIDwvc2VsZWN0PicgK1xyJyAgICAgICAgICAgIDxzbWFsbCBjbGFzcz1cImhlbHAtYmxvY2tcIj5UaGlzIHNldHRpbmcgaXMgZm9yIHdpZHRoIG9mIGxhYmVsIGFuZCBjb250cm9sIHdpdGggbnVtYmVyIG9mIGNvbHMgYXMgdW5pdDwvc21hbGw+JyArXHInICAgICAgICA8L2Rpdj4nICtccicgICAgPC9kaXY+JyArXHInPC9kaXY+J1xyKTtccmZvcm0uZmluZCgnLnR4dC1mb3JtLWFjdGlvbicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignYWN0aW9uJywgdGhpcy52YWx1ZSk7XHJ9KTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGNvbXBvbmVudCA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpO1xybGV0IGZvcm1Db250ZW50ID0gY29tcG9uZW50LmZpbmQoJy5mb3JtLWNvbnRlbnQnKTtccmZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZW5jdHlwZScpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScsIHRoaXMudmFsdWUpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtbGF5b3V0Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtccmxldCBjb21wb25lbnQgPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKTtccmxldCBmb3JtQ29udGVudCA9IGNvbXBvbmVudC5maW5kKCcuZm9ybS1jb250ZW50Jyk7XHJmb3JtQ29udGVudC5yZW1vdmVDbGFzcygnZm9ybS1pbmxpbmUgZm9ybS1ob3Jpem9udGFsJyk7XHJpZiAodGhpcy52YWx1ZSkge1xyZm9ybUNvbnRlbnQuYWRkQ2xhc3ModGhpcy52YWx1ZSk7XHJ9XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCB0aGlzLnZhbHVlID09PSAnZm9ybS1ob3Jpem9udGFsJyA/ICdibG9jaycgOiAnbm9uZScpO1xyfSk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgY29tcG9uZW50ID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xyZm9ybUNvbnRlbnQuYXR0cignZGF0YS1ncmlkJywgdGhpcy52YWx1ZSk7XHJzZWxmLnJlbmRlckZvcm0oY29tcG9uZW50KTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwiZm9ybVwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZm9ybUNvbnRlbnQgPSBjb21wb25lbnQuZmluZCgnLmZvcm0tY29udGVudCcpO1xybGV0IGxheW91dCA9ICcnO1xyaWYgKGZvcm1Db250ZW50Lmhhc0NsYXNzKCdmb3JtLWlubGluZScpKSB7XHJsYXlvdXQgPSAnZm9ybS1pbmxpbmUnO1xyfSBlbHNlIGlmIChmb3JtQ29udGVudC5oYXNDbGFzcygnZm9ybS1ob3Jpem9udGFsJykpIHtccmxheW91dCA9ICdmb3JtLWhvcml6b250YWwnO1xyfVxyZm9ybS5maW5kKCcudHh0LWZvcm0tYWN0aW9uJykudmFsKGZvcm1Db250ZW50LmF0dHIoJ2FjdGlvbicpIHx8ICcnKTtccmZvcm0uZmluZCgnLnNlbGVjdC1tZXRob2QnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignbWV0aG9kJykgfHwgJ2dldCcpO1xyZm9ybS5maW5kKCcuc2VsZWN0LWVuY3R5cGUnKS52YWwoZm9ybUNvbnRlbnQuYXR0cignZW5jdHlwZScpKTtccmZvcm0uZmluZCgnLnNlbGVjdC1sYXlvdXQnKS52YWwobGF5b3V0KTtccmZvcm0uZmluZCgnLnNlbGVjdC1ncmlkLXdyYXBwZXInKS5jc3MoJ2Rpc3BsYXknLCBsYXlvdXQgPT09ICdmb3JtLWhvcml6b250YWwnID8gJ2Jsb2NrJyA6ICdub25lJyk7XHJmb3JtLmZpbmQoJy5zZWxlY3QtZ3JpZCcpLnZhbChmb3JtQ29udGVudC5hdHRyKCdkYXRhLWdyaWQnKSB8fCAnNC04Jyk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ2dvb2dsZW1hcCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcImdvb2dsZW1hcFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnR29vZ2xlIE1hcCBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJnb29nbGVtYXBcIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi1nb29nbGVtYXAtZWRpdFwiPlVwZGF0ZSBNYXA8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLXNtLTEyXCI+QXNwZWN0IFJhdGlvPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi1nb29nbGVtYXAtNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtZWRpdCcpO1xyYnRuRWRpdC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xybGV0IGlucHV0RGF0YSA9IHByb21wdCgnUGxlYXNlIGVudGVyIEdvb2dsZSBNYXAgZW1iZWQgY29kZSBpbiBoZXJlOicpO1xybGV0IGlmcmFtZSA9ICQoaW5wdXREYXRhKTtccmxldCBzcmMgPSBpZnJhbWUuYXR0cignc3JjJyk7XHJpZiAoaWZyYW1lLmxlbmd0aCA+IDAgJiYgc3JjICYmIHNyYy5sZW5ndGggPiAwKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgc3JjKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBHb29nbGUgTWFwIGVtYmVkIGNvZGUgaXMgaW52YWxpZCEnKTtccn1ccn0pO1xybGV0IGJ0bjE2OSA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi1nb29nbGVtYXAtNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJ9XHJcbn07XHJcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBLRWRpdG9yIGZyb20gJ2tlZGl0b3InO1xyXG5jb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3Bob3RvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwicGhvdG9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgaW1nID0gY29tcG9uZW50Q29udGVudC5maW5kKCdpbWcnKTtccmltZy5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJ9LFxyc2V0dGluZ0VuYWJsZWQ6IHRydWUsXHJzZXR0aW5nVGl0bGU6ICdQaG90byBTZXR0aW5ncycsXHJpbml0U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0U2V0dGluZ0Zvcm0gXCJwaG90b1wiIGNvbXBvbmVudCcpO1xybGV0IHNlbGYgPSB0aGlzO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJmb3JtLmFwcGVuZChccic8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiPicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1ibG9jayBidG4tcHJpbWFyeVwiIGlkPVwicGhvdG8tZWRpdFwiPkNoYW5nZSBQaG90bzwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLWFsaWduXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5BbGlnbjwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1hbGlnblwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxlZnRcIj5MZWZ0PC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNlbnRlclwiPkNlbnRlcjwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJyaWdodFwiPlJpZ2h0PC9vcHRpb24+JyArXHInICAgICAgICAgICA8L3NlbGVjdD4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGxhYmVsIGZvcj1cInBob3RvLXN0eWxlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5TdHlsZTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwaG90by1zdHlsZVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk5vbmU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXJvdW5kZWRcIj5Sb3VuZGVkPC9vcHRpb24+JyArXHInICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImltZy1jaXJjbGVcIj5DaXJjbGU8L29wdGlvbj4nICtccicgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaW1nLXRodW1ibmFpbFwiPlRodW1ibmFpbDwvb3B0aW9uPicgK1xyJyAgICAgICAgICAgPC9zZWxlY3Q+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1yZXNwb25zaXZlXCIgY2xhc3M9XCJjb2wtc20tMTJcIj5SZXNwb25zaXZlPC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwicGhvdG8tcmVzcG9uc2l2ZVwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by13aWR0aFwiIGNsYXNzPVwiY29sLXNtLTEyXCI+V2lkdGg8L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGlkPVwicGhvdG8td2lkdGhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBmb3I9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkhlaWdodDwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgaWQ9XCJwaG90by1oZWlnaHRcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIC8+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IHBob3RvRWRpdCA9IGZvcm0uZmluZCgnI3Bob3RvLWVkaXQnKTtccmxldCBmaWxlSW5wdXQgPSBwaG90b0VkaXQubmV4dCgpO1xycGhvdG9FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJpZiAoL2ltYWdlLy50ZXN0KGZpbGUudHlwZSkpIHtccmxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xycmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoZSkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xyaW1nLmF0dHIoJ3NyYycsIGUudGFyZ2V0LnJlc3VsdCk7XHJpbWcuY3NzKHtccndpZHRoOiAnJyxccmhlaWdodDogJydccn0pO1xyaW1nLmxvYWQoZnVuY3Rpb24gKCkge1xya2VkaXRvci5zaG93U2V0dGluZ1BhbmVsKGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLCBvcHRpb25zKTtccn0pO1xyfSk7XHJyZWFkZXIucmVhZEFzRGF0YVVSTCh0aGlzLmZpbGVzWzBdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBzZWxlY3RlZCBmaWxlIGlzIG5vdCBwaG90byEnKTtccn1ccn0pO1xybGV0IGlucHV0QWxpZ24gPSBmb3JtLmZpbmQoJyNwaG90by1hbGlnbicpO1xyaW5wdXRBbGlnbi5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHBhbmVsID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJwYW5lbC5jc3MoJ3RleHQtYWxpZ24nLCB0aGlzLnZhbHVlKTtccn0pO1xybGV0IGlucHV0UmVzcG9uc2l2ZSA9IGZvcm0uZmluZCgnI3Bob3RvLXJlc3BvbnNpdmUnKTtccmlucHV0UmVzcG9uc2l2ZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCdpbWcnKVt0aGlzLmNoZWNrZWQgPyAnYWRkQ2xhc3MnIDogJ3JlbW92ZUNsYXNzJ10oJ2ltZy1yZXNwb25zaXZlJyk7XHJ9KTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJjYmJTdHlsZS5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IHZhbCA9IHRoaXMudmFsdWU7XHJpbWcucmVtb3ZlQ2xhc3MoJ2ltZy1yb3VuZGVkIGltZy1jaXJjbGUgaW1nLXRodW1ibmFpbCcpO1xyaWYgKHZhbCkge1xyaW1nLmFkZENsYXNzKHZhbCk7XHJ9XHJ9KTtccmxldCBpbnB1dFdpZHRoID0gZm9ybS5maW5kKCcjcGhvdG8td2lkdGgnKTtccmxldCBpbnB1dEhlaWdodCA9IGZvcm0uZmluZCgnI3Bob3RvLWhlaWdodCcpO1xyaW5wdXRXaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IGltZyA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJ2ltZycpO1xybGV0IG5ld1dpZHRoID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3SGVpZ2h0ID0gTWF0aC5yb3VuZChuZXdXaWR0aCAvIHNlbGYucmF0aW8pO1xyaWYgKG5ld1dpZHRoIDw9IDApIHtccm5ld1dpZHRoID0gc2VsZi53aWR0aDtccm5ld0hlaWdodCA9IHNlbGYuaGVpZ2h0O1xydGhpcy52YWx1ZSA9IG5ld1dpZHRoO1xyfVxyaW1nLmNzcyh7XHInd2lkdGgnOiBuZXdXaWR0aCxccidoZWlnaHQnOiBuZXdIZWlnaHRccn0pO1xyaW5wdXRIZWlnaHQudmFsKG5ld0hlaWdodCk7XHJ9KTtccmlucHV0SGVpZ2h0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgaW1nID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnaW1nJyk7XHJsZXQgbmV3SGVpZ2h0ID0gK3RoaXMudmFsdWU7XHJsZXQgbmV3V2lkdGggPSBNYXRoLnJvdW5kKG5ld0hlaWdodCAqIHNlbGYucmF0aW8pO1xyaWYgKG5ld0hlaWdodCA8PSAwKSB7XHJuZXdXaWR0aCA9IHNlbGYud2lkdGg7XHJuZXdIZWlnaHQgPSBzZWxmLmhlaWdodDtccnRoaXMudmFsdWUgPSBuZXdIZWlnaHQ7XHJ9XHJpbWcuY3NzKHtccidoZWlnaHQnOiBuZXdIZWlnaHQsXHInd2lkdGgnOiBuZXdXaWR0aFxyfSk7XHJpbnB1dFdpZHRoLnZhbChuZXdXaWR0aCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInBob3RvXCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBzZWxmID0gdGhpcztccmxldCBpbnB1dEFsaWduID0gZm9ybS5maW5kKCcjcGhvdG8tYWxpZ24nKTtccmxldCBpbnB1dFJlc3BvbnNpdmUgPSBmb3JtLmZpbmQoJyNwaG90by1yZXNwb25zaXZlJyk7XHJsZXQgaW5wdXRXaWR0aCA9IGZvcm0uZmluZCgnI3Bob3RvLXdpZHRoJyk7XHJsZXQgaW5wdXRIZWlnaHQgPSBmb3JtLmZpbmQoJyNwaG90by1oZWlnaHQnKTtccmxldCBjYmJTdHlsZSA9IGZvcm0uZmluZCgnI3Bob3RvLXN0eWxlJyk7XHJsZXQgcGFuZWwgPSBjb21wb25lbnQuZmluZCgnLnBob3RvLXBhbmVsJyk7XHJsZXQgaW1nID0gcGFuZWwuZmluZCgnaW1nJyk7XHJsZXQgYWxnaW4gPSBwYW5lbC5jc3MoJ3RleHQtYWxpZ24nKTtccmlmIChhbGdpbiAhPT0gJ3JpZ2h0JyB8fCBhbGdpbiAhPT0gJ2NlbnRlcicpIHtccmFsZ2luID0gJ2xlZnQnO1xyfVxyaWYgKGltZy5oYXNDbGFzcygnaW1nLXJvdW5kZWQnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctcm91bmRlZCcpO1xyfSBlbHNlIGlmIChpbWcuaGFzQ2xhc3MoJ2ltZy1jaXJjbGUnKSkge1xyY2JiU3R5bGUudmFsKCdpbWctY2lyY2xlJyk7XHJ9IGVsc2UgaWYgKGltZy5oYXNDbGFzcygnaW1nLXRodW1ibmFpbCcpKSB7XHJjYmJTdHlsZS52YWwoJ2ltZy10aHVtYm5haWwnKTtccn0gZWxzZSB7XHJjYmJTdHlsZS52YWwoJycpO1xyfVxyaW5wdXRBbGlnbi52YWwoYWxnaW4pO1xyaW5wdXRSZXNwb25zaXZlLnByb3AoJ2NoZWNrZWQnLCBpbWcuaGFzQ2xhc3MoJ2ltZy1yZXNwb25zaXZlJykpO1xyaW5wdXRXaWR0aC52YWwoaW1nLndpZHRoKCkpO1xyaW5wdXRIZWlnaHQudmFsKGltZy5oZWlnaHQoKSk7XHIkKCc8aW1nIC8+JykuYXR0cignc3JjJywgaW1nLmF0dHIoJ3NyYycpKS5sb2FkKGZ1bmN0aW9uICgpIHtccnNlbGYucmF0aW8gPSB0aGlzLndpZHRoIC8gdGhpcy5oZWlnaHQ7XHJzZWxmLndpZHRoID0gdGhpcy53aWR0aDtccnNlbGYuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJ9KTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJjb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJcbmltcG9ydCBJbmxpbmVFZGl0b3IgZnJvbSAnSW5saW5lRWRpdG9yJztccmNvbnN0IGluc3RhbmNlcyA9IHt9O1xyLy8gVGV4dCBjb21wb25lbnRcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbktFZGl0b3IuY29tcG9uZW50c1sndGV4dCddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInRleHRcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IG9wdGlvbnMgPSBrZWRpdG9yLm9wdGlvbnM7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmNvbXBvbmVudENvbnRlbnQucHJvcCgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XHJjb21wb25lbnRDb250ZW50Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uIChlKSB7XHJpZiAodHlwZW9mIG9wdGlvbnMub25Db21wb25lbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29tcG9uZW50Q2hhbmdlZC5jYWxsKGNvbnRlbnRBcmVhLCBlLCBjb21wb25lbnQpO1xyfVxyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29udGFpbmVyQ2hhbmdlZCA9PT0gJ2Z1bmN0aW9uJykge1xyb3B0aW9ucy5vbkNvbnRhaW5lckNoYW5nZWQuY2FsbChjb250ZW50QXJlYSwgZSwgY29udGFpbmVyKTtccn1ccmlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbnRlbnRDaGFuZ2VkID09PSAnZnVuY3Rpb24nKSB7XHJvcHRpb25zLm9uQ29udGVudENoYW5nZWQuY2FsbChrZWRpdG9yLCBlLCBjb250ZW50QXJlYSk7XHJ9XHJ9KTtccklubGluZUVkaXRvclxyLmNyZWF0ZShjb21wb25lbnRDb250ZW50LmdldCgwKSwge1xyZm9udEZhbWlseToge1xyb3B0aW9uczogW1xyJ2RlZmF1bHQnLFxyJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnLFxyJ0NvdXJpZXIgTmV3LCBDb3VyaWVyLCBtb25vc3BhY2UnLFxyJ0dlb3JnaWEsIHNlcmlmJyxccidMdWNpZGEgU2FucyBVbmljb2RlLCBMdWNpZGEgR3JhbmRlLCBzYW5zLXNlcmlmJyxccidUYWhvbWEsIEdlbmV2YSwgc2Fucy1zZXJpZicsXHInVGltZXMgTmV3IFJvbWFuLCBUaW1lcywgc2VyaWYnLFxyJ1RyZWJ1Y2hldCBNUywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyxccidWZXJkYW5hLCBHZW5ldmEsIHNhbnMtc2VyaWYnXHJdXHJ9XHJ9KVxyLnRoZW4oZWRpdG9yID0+IHtccmZsb2coJ0NLRWRpdG9yIGlzIHJlYWR5JywgY29tcG9uZW50KTtccmluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldID0gZWRpdG9yO1xyaWYgKHR5cGVvZiBvcHRpb25zLm9uQ29tcG9uZW50UmVhZHkgPT09ICdmdW5jdGlvbicpIHtccm9wdGlvbnMub25Db21wb25lbnRSZWFkeS5jYWxsKGtlZGl0b3IsIGNvbXBvbmVudCwgZWRpdG9yKTtccn1ccn0pXHIuY2F0Y2goZXJyb3IgPT4ge1xyY29uc29sZS5lcnJvcihlcnJvcik7XHJ9KTtccn0sXHJnZXRDb250ZW50OiBmdW5jdGlvbiAoY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdnZXRDb250ZW50IFwidGV4dFwiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpO1xybGV0IGVkaXRvciA9IGluc3RhbmNlc1tjb21wb25lbnRDb250ZW50LmF0dHIoJ2lkJyldO1xyaWYgKGVkaXRvcikge1xycmV0dXJuIGVkaXRvci5nZXREYXRhKCk7XHJ9IGVsc2Uge1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfVxyfSxccmRlc3Ryb3k6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2Rlc3Ryb3kgXCJ0ZXh0XCIgY29tcG9uZW50JywgY29tcG9uZW50KTtccmxldCBpZCA9IGNvbXBvbmVudC5maW5kKCcua2VkaXRvci1jb21wb25lbnQtY29udGVudCcpLmF0dHIoJ2lkJyk7XHJsZXQgZWRpdG9yID0gaW5zdGFuY2VzW2lkXTtccmlmIChlZGl0b3IpIHtccmVkaXRvci5kZXN0cm95KCk7XHJkZWxldGUgaW5zdGFuY2VzW2lkXTtccn1ccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJjb25zdCBmbG9nID0gS0VkaXRvci5sb2c7XHJLRWRpdG9yLmNvbXBvbmVudHNbJ3ZpZGVvJ10gPSB7XHJpbml0OiBmdW5jdGlvbiAoY29udGVudEFyZWEsIGNvbnRhaW5lciwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdpbml0IFwidmlkZW9cIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGNvbXBvbmVudENvbnRlbnQgPSBjb21wb25lbnQuY2hpbGRyZW4oJy5rZWRpdG9yLWNvbXBvbmVudC1jb250ZW50Jyk7XHJsZXQgdmlkZW8gPSBjb21wb25lbnRDb250ZW50LmZpbmQoJ3ZpZGVvJyk7XHJpZiAoIXZpZGVvLnBhcmVudCgpLmlzKCcudmlkZW8td3JhcHBlcicpKSB7XHJ2aWRlby53cmFwKCc8ZGl2IGNsYXNzPVwidmlkZW8td3JhcHBlclwiPjwvZGl2PicpO1xyfVxyfSxccmdldENvbnRlbnQ6IGZ1bmN0aW9uIChjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2dldENvbnRlbnQgXCJ2aWRlb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgY29tcG9uZW50Q29udGVudCA9IGNvbXBvbmVudC5jaGlsZHJlbignLmtlZGl0b3ItY29tcG9uZW50LWNvbnRlbnQnKTtccmxldCB2aWRlbyA9IGNvbXBvbmVudENvbnRlbnQuZmluZCgndmlkZW8nKTtccnZpZGVvLnVud3JhcCgpO1xycmV0dXJuIGNvbXBvbmVudENvbnRlbnQuaHRtbCgpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnVmlkZW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInZpZGVvXCIgc2V0dGluZ3MnLCBmb3JtKTtccmZvcm0uYXBwZW5kKGBccjxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cInZpZGVvLWlucHV0XCIgY2xhc3M9XCJjb2wtc20tMTJcIj5WaWRlbyBmaWxlPC9sYWJlbD5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxkaXYgY2xhc3M9XCJ2aWRlby10b29sYmFyXCI+XHI8YSBocmVmPVwiI1wiIGNsYXNzPVwiYnRuLXZpZGVvLWlucHV0IGJ0biBidG4tc20gYnRuLXByaW1hcnlcIj48aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT48L2E+XHI8aW5wdXQgY2xhc3M9XCJ2aWRlby1pbnB1dFwiIHR5cGU9XCJmaWxlXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lXCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8tYXV0b3BsYXlcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInZpZGVvLWF1dG9wbGF5XCIgLz5ccjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cInZpZGVvLWxvb3BcIiBjbGFzcz1cImNvbC1zbS0xMlwiPkxvb3A8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwidmlkZW8tbG9vcFwiIC8+XHI8L2Rpdj5ccjwvZGl2PlxyPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5ccjxsYWJlbCBmb3I9XCJ2aWRlby1jb250cm9sc1wiIGNsYXNzPVwiY29sLXNtLTEyXCI+U2hvdyBDb250cm9sczwvbGFiZWw+XHI8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XHI8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJ2aWRlby1jb250cm9sc1wiIGNoZWNrZWQgLz5ccjwvZGl2PlxyPC9kaXY+XHI8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyPGxhYmVsIGZvcj1cIlwiIGNsYXNzPVwiY29sLXNtLTEyXCI+UmF0aW88L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ2aWRlby1yYWRpb1wiIGNsYXNzPVwidmlkZW8tcmF0aW9cIiB2YWx1ZT1cIjQvM1wiIGNoZWNrZWQgLz4gNDozXHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5ccjxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidmlkZW8tcmFkaW9cIiBjbGFzcz1cInZpZGVvLXJhdGlvXCIgdmFsdWU9XCIxNi85XCIgLz4gMTY6OVxyPC9kaXY+XHI8L2Rpdj5ccjxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHI8bGFiZWwgZm9yPVwidmlkZW8td2lkdGhcIiBjbGFzcz1cImNvbC1zbS0xMlwiPldpZHRoIChweCk8L2xhYmVsPlxyPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxyPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cInZpZGVvLXdpZHRoIGZvcm0tY29udHJvbFwiIG1pbj1cIjMyMFwiIG1heD1cIjE5MjBcIiB2YWx1ZT1cIjMyMFwiIC8+XHI8L2Rpdj5ccjwvZGl2PlxyPC9mb3JtPlxyYCk7XHJsZXQgZmlsZUlucHV0ID0gZm9ybS5maW5kKCcudmlkZW8taW5wdXQnKTtccmZvcm0uZmluZCgnLmJ0bi12aWRlby1pbnB1dCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJmaWxlSW5wdXQudHJpZ2dlcignY2xpY2snKTtccn0pO1xyZmlsZUlucHV0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xyaWYgKC92aWRlby8udGVzdChmaWxlLnR5cGUpKSB7XHIvLyBUb2RvOiBVcGxvYWQgdG8geW91ciBzZXJ2ZXIgOilccnZpZGVvLmF0dHIoJ3NyYycsIFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSkpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIHNlbGVjdGVkIGZpbGUgaXMgbm90IGFuIHZpZGVvIGZpbGUhJyk7XHJ9XHJ9KTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJsZXQgdmlkZW8gPSBrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCd2aWRlbycpO1xydmlkZW8ucHJvcCgnYXV0b3BsYXknLCB0aGlzLmNoZWNrZWQpO1xyfSk7XHJsZXQgbG9vcFRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWxvb3AnKTtccmxvb3BUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLnByb3AoJ2xvb3AnLCB0aGlzLmNoZWNrZWQpO1xyfSk7XHJsZXQgcmF0aW8gPSBmb3JtLmZpbmQoJy52aWRlby1yYXRpbycpO1xycmF0aW8ub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLmF0dHIoJ2RhdGEtcmF0aW8nLCB0aGlzLnZhbHVlKTtccmZvcm0uZmluZCgnLnZpZGVvLXdpZHRoJykudHJpZ2dlcignY2hhbmdlJyk7XHJ9KTtccmxldCBjb250cm9sVG9nZ2xlID0gZm9ybS5maW5kKCcudmlkZW8tY29udHJvbHMnKTtccmNvbnRyb2xUb2dnbGUub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccnZpZGVvLnByb3AoJ2NvbnRyb2xzJywgdGhpcy5jaGVja2VkKTtccn0pO1xybGV0IHZpZGVvV2lkdGggPSBmb3JtLmZpbmQoJy52aWRlby13aWR0aCcpO1xydmlkZW9XaWR0aC5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xybGV0IHZpZGVvID0ga2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgndmlkZW8nKTtccmxldCBjdXJyZW50UmF0aW8gPSB2aWRlby5hdHRyKCdkYXRhLXJhdGlvJykgPT09ICcxNi85JyA/IDE2IC8gOSA6IDQgLyAzO1xybGV0IGhlaWdodCA9IHRoaXMudmFsdWUgLyBjdXJyZW50UmF0aW87XHJ2aWRlby5hdHRyKCd3aWR0aCcsIHRoaXMudmFsdWUpO1xydmlkZW8uYXR0cignaGVpZ2h0JywgaGVpZ2h0KTtccn0pO1xyfSxccnNob3dTZXR0aW5nRm9ybTogZnVuY3Rpb24gKGZvcm0sIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnc2hvd1NldHRpbmdGb3JtIFwidmlkZW9cIiBzZXR0aW5ncycsIGZvcm0sIGNvbXBvbmVudCk7XHJsZXQgdmlkZW8gPSBjb21wb25lbnQuZmluZCgndmlkZW8nKTtccmxldCBhdXRvcGxheVRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWF1dG9wbGF5Jyk7XHJhdXRvcGxheVRvZ2dsZS5wcm9wKCdjaGVja2VkJywgdmlkZW8ucHJvcCgnYXV0b3BsYXknKSk7XHJsZXQgbG9vcFRvZ2dsZSA9IGZvcm0uZmluZCgnLnZpZGVvLWxvb3AnKTtccmxvb3BUb2dnbGUucHJvcCgnY2hlY2tlZCcsIHZpZGVvLnByb3AoJ2xvb3AnKSk7XHJsZXQgcmF0aW8gPSBmb3JtLmZpbmQoJy52aWRlby1yYXRpbycpO1xycmF0aW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5maWx0ZXIoJ1t2YWx1ZT1cIicgKyB2aWRlby5hdHRyKCdkYXRhLXJhdGlvJykgKyAnXCJdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xybGV0IGNvbnRyb2xUb2dnbGUgPSBmb3JtLmZpbmQoJy52aWRlby1jb250cm9scycpO1xyY29udHJvbFRvZ2dsZS5wcm9wKCdjaGVja2VkJywgdmlkZW8ucHJvcCgnY29udHJvbHMnKSk7XHJsZXQgdmlkZW9XaWR0aCA9IGZvcm0uZmluZCgnLnZpZGVvLXdpZHRoJyk7XHJ2aWRlb1dpZHRoLnZhbCh2aWRlby5hdHRyKCd3aWR0aCcpKTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sndmltZW8nXSA9IHtccmluaXQ6IGZ1bmN0aW9uIChjb250ZW50QXJlYSwgY29udGFpbmVyLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ2luaXQgXCJ2aW1lb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgaWZyYW1lID0gY29tcG9uZW50LmZpbmQoJ2lmcmFtZScpO1xybGV0IHdyYXBwZXIgPSBpZnJhbWUucGFyZW50KCk7XHJrZWRpdG9yLmluaXRJZnJhbWVDb3ZlcihpZnJhbWUsIHdyYXBwZXIpO1xyfSxccnNldHRpbmdFbmFibGVkOiB0cnVlLFxyc2V0dGluZ1RpdGxlOiAnVmltZW8gU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdFNldHRpbmdGb3JtIFwidmltZW9cIiBjb21wb25lbnQnKTtccmZvcm0uYXBwZW5kKFxyJzxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCI+JyArXHInICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWJsb2NrIGJ0bi1wcmltYXJ5IGJ0bi12aW1lby1lZGl0XCI+Q2hhbmdlIFZpZGVvPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJyAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+JyArXHInICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1zbS0xMlwiPkF1dG9wbGF5PC9sYWJlbD4nICtccicgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPicgK1xyJyAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwidmltZW8tYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXZpbWVvLTE2OVwiPjE2Ojk8L2J1dHRvbj4nICtccicgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tZGVmYXVsdCBidG4tdmltZW8tNDNcIj40OjM8L2J1dHRvbj4nICtccicgICAgICAgPC9kaXY+JyArXHInICAgPC9kaXY+JyArXHInPC9mb3JtPidccik7XHJsZXQgYnRuRWRpdCA9IGZvcm0uZmluZCgnLmJ0bi12aW1lby1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgVmltZW8gVVJMIGluIGhlcmU6Jyk7XHJsZXQgdmltZW9SZWdleCA9IC9odHRwcz86XFwvXFwvKD86d3d3XFwufHBsYXllclxcLik/dmltZW8uY29tXFwvKD86Y2hhbm5lbHNcXC8oPzpcXHcrXFwvKT98Z3JvdXBzXFwvKFteXFwvXSopXFwvdmlkZW9zXFwvfGFsYnVtXFwvKFxcZCspXFwvdmlkZW9cXC98dmlkZW9cXC98KShcXGQrKSg/OiR8XFwvfFxcPykvO1xybGV0IG1hdGNoID0gaW5wdXREYXRhLm1hdGNoKHZpbWVvUmVnZXgpO1xyaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJykuYXR0cignc3JjJywgJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlby8nICsgbWF0Y2hbMV0gKyAnP2J5bGluZT0wJnBvcnRyYWl0PTAmYmFkZ2U9MCcpO1xyfSBlbHNlIHtccmFsZXJ0KCdZb3VyIFZpbWVvIFVSTCBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLXZpbWVvLTE2OScpO1xyYnRuMTY5Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKS5hZGRDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpO1xyfSk7XHJsZXQgYnRuNDMgPSBmb3JtLmZpbmQoJy5idG4tdmltZW8tNDMnKTtccmJ0bjQzLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJrZWRpdG9yLmdldFNldHRpbmdDb21wb25lbnQoKS5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZScpLnJlbW92ZUNsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5JykuYWRkQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpO1xyfSk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN2aW1lby1hdXRvcGxheScpO1xyY2hrQXV0b3BsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IGVtYmVkSXRlbSA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjdXJyZW50VXJsID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xybGV0IG5ld1VybCA9IChjdXJyZW50VXJsLnJlcGxhY2UoLyhcXD8uKykrLywgJycpKSArICc/YnlsaW5lPTAmcG9ydHJhaXQ9MCZiYWRnZT0wJmF1dG9wbGF5PScgKyAoY2hrQXV0b3BsYXkuaXMoJzpjaGVja2VkJykgPyAxIDogMCk7XHJmbG9nKCdDdXJyZW50IHVybDogJyArIGN1cnJlbnRVcmwsICdOZXcgdXJsOiAnICsgbmV3VXJsKTtccmVtYmVkSXRlbS5hdHRyKCdzcmMnLCBuZXdVcmwpO1xyfSk7XHJ9LFxyc2hvd1NldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwgY29tcG9uZW50LCBrZWRpdG9yKSB7XHJmbG9nKCdzaG93U2V0dGluZ0Zvcm0gXCJ2aW1lb1wiIGNvbXBvbmVudCcsIGNvbXBvbmVudCk7XHJsZXQgZW1iZWRJdGVtID0gY29tcG9uZW50LmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjaGtBdXRvcGxheSA9IGZvcm0uZmluZCgnI3ZpbWVvLWF1dG9wbGF5Jyk7XHJsZXQgc3JjID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xyY2hrQXV0b3BsYXkucHJvcCgnY2hlY2tlZCcsIHNyYy5pbmRleE9mKCdhdXRvcGxheT0xJykgIT09IC0xKTtccn1cclxufTtcclxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuaW1wb3J0IEtFZGl0b3IgZnJvbSAna2VkaXRvcic7XHJcbmNvbnN0IGZsb2cgPSBLRWRpdG9yLmxvZztccktFZGl0b3IuY29tcG9uZW50c1sneW91dHViZSddID0ge1xyaW5pdDogZnVuY3Rpb24gKGNvbnRlbnRBcmVhLCBjb250YWluZXIsIGNvbXBvbmVudCwga2VkaXRvcikge1xyZmxvZygnaW5pdCBcInlvdXR1YmVcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGlmcmFtZSA9IGNvbXBvbmVudC5maW5kKCdpZnJhbWUnKTtccmxldCB3cmFwcGVyID0gaWZyYW1lLnBhcmVudCgpO1xya2VkaXRvci5pbml0SWZyYW1lQ292ZXIoaWZyYW1lLCB3cmFwcGVyKTtccn0sXHJzZXR0aW5nRW5hYmxlZDogdHJ1ZSxccnNldHRpbmdUaXRsZTogJ1lvdXR1YmUgU2V0dGluZ3MnLFxyaW5pdFNldHRpbmdGb3JtOiBmdW5jdGlvbiAoZm9ybSwga2VkaXRvcikge1xyZmxvZygnaW5pdFNldHRpbmdGb3JtIFwieW91dHViZVwiIGNvbXBvbmVudCcpO1xyZm9ybS5hcHBlbmQoXHInPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tYmxvY2sgYnRuLXByaW1hcnkgYnRuLXlvdXR1YmUtZWRpdFwiPkNoYW5nZSBWaWRlbzwvYnV0dG9uPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5BdXRvcGxheTwvbGFiZWw+JyArXHInICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj4nICtccicgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD1cInlvdXR1YmUtYXV0b3BsYXlcIiAvPicgK1xyJyAgICAgICA8L2Rpdj4nICtccicgICA8L2Rpdj4nICtccicgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPicgK1xyJyAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtc20tMTJcIj5Bc3BlY3QgUmF0aW88L2xhYmVsPicgK1xyJyAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+JyArXHInICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWRlZmF1bHQgYnRuLXlvdXR1YmUtMTY5XCI+MTY6OTwvYnV0dG9uPicgK1xyJyAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1kZWZhdWx0IGJ0bi15b3V0dWJlLTQzXCI+NDozPC9idXR0b24+JyArXHInICAgICAgIDwvZGl2PicgK1xyJyAgIDwvZGl2PicgK1xyJzwvZm9ybT4nXHIpO1xybGV0IGJ0bkVkaXQgPSBmb3JtLmZpbmQoJy5idG4teW91dHViZS1lZGl0Jyk7XHJidG5FZGl0Lm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJlLnByZXZlbnREZWZhdWx0KCk7XHJsZXQgaW5wdXREYXRhID0gcHJvbXB0KCdQbGVhc2UgZW50ZXIgWW91dHViZSBVUkwgaW4gaGVyZTonKTtccmxldCB5b3V0dWJlUmVnZXggPSAvXig/Omh0dHAoPzpzKT86XFwvXFwvKT8oPzp3d3dcXC4pPyg/Om1cXC4pPyg/OnlvdXR1XFwuYmVcXC98eW91dHViZVxcLmNvbVxcLyg/Oig/OndhdGNoKT9cXD8oPzouKiYpP3YoPzppKT89fCg/OmVtYmVkfHZ8dml8dXNlcilcXC8pKShbXlxcPyZcXFwiJz5dKykvO1xybGV0IG1hdGNoID0gaW5wdXREYXRhLm1hdGNoKHlvdXR1YmVSZWdleCk7XHJpZiAobWF0Y2ggJiYgbWF0Y2hbMV0pIHtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKS5hdHRyKCdzcmMnLCAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIG1hdGNoWzFdKTtccn0gZWxzZSB7XHJhbGVydCgnWW91ciBZb3V0dWJlIFVSTCBpcyBpbnZhbGlkIScpO1xyfVxyfSk7XHJsZXQgYnRuMTY5ID0gZm9ybS5maW5kKCcuYnRuLXlvdXR1YmUtMTY5Jyk7XHJidG4xNjkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtccmUucHJldmVudERlZmF1bHQoKTtccmtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlJykucmVtb3ZlQ2xhc3MoJ2VtYmVkLXJlc3BvbnNpdmUtNGJ5MycpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTE2Ynk5Jyk7XHJ9KTtccmxldCBidG40MyA9IGZvcm0uZmluZCgnLmJ0bi15b3V0dWJlLTQzJyk7XHJidG40My5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyZS5wcmV2ZW50RGVmYXVsdCgpO1xya2VkaXRvci5nZXRTZXR0aW5nQ29tcG9uZW50KCkuZmluZCgnLmVtYmVkLXJlc3BvbnNpdmUnKS5yZW1vdmVDbGFzcygnZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OScpLmFkZENsYXNzKCdlbWJlZC1yZXNwb25zaXZlLTRieTMnKTtccn0pO1xybGV0IGNoa0F1dG9wbGF5ID0gZm9ybS5maW5kKCcjeW91dHViZS1hdXRvcGxheScpO1xyY2hrQXV0b3BsYXkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xybGV0IGVtYmVkSXRlbSA9IGtlZGl0b3IuZ2V0U2V0dGluZ0NvbXBvbmVudCgpLmZpbmQoJy5lbWJlZC1yZXNwb25zaXZlLWl0ZW0nKTtccmxldCBjdXJyZW50VXJsID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xybGV0IG5ld1VybCA9IChjdXJyZW50VXJsLnJlcGxhY2UoLyhcXD8uKykrLywgJycpKSArICc/YXV0b3BsYXk9JyArIChjaGtBdXRvcGxheS5pcygnOmNoZWNrZWQnKSA/IDEgOiAwKTtccmZsb2coJ0N1cnJlbnQgdXJsOiAnICsgY3VycmVudFVybCwgJ05ldyB1cmw6ICcgKyBuZXdVcmwpO1xyZW1iZWRJdGVtLmF0dHIoJ3NyYycsIG5ld1VybCk7XHJ9KTtccn0sXHJzaG93U2V0dGluZ0Zvcm06IGZ1bmN0aW9uIChmb3JtLCBjb21wb25lbnQsIGtlZGl0b3IpIHtccmZsb2coJ3Nob3dTZXR0aW5nRm9ybSBcInlvdXR1YmVcIiBjb21wb25lbnQnLCBjb21wb25lbnQpO1xybGV0IGVtYmVkSXRlbSA9IGNvbXBvbmVudC5maW5kKCcuZW1iZWQtcmVzcG9uc2l2ZS1pdGVtJyk7XHJsZXQgY2hrQXV0b3BsYXkgPSBmb3JtLmZpbmQoJyN5b3V0dWJlLWF1dG9wbGF5Jyk7XHJsZXQgc3JjID0gZW1iZWRJdGVtLmF0dHIoJ3NyYycpO1xyY2hrQXV0b3BsYXkucHJvcCgnY2hlY2tlZCcsIHNyYy5pbmRleE9mKCdhdXRvcGxheT0xJykgIT09IC0xKTtccn1cclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX0lubGluZUVkaXRvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qcXVlcnlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfa2VkaXRvcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=