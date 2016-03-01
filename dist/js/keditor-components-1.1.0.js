/**
 * KEditor Audio Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['audio'] = {
        /**
         * Function will be called when initializing a component with this type
         * @param {jQuery} contentArea
         * @param {jQuery} container
         * @param {jQuery} component
         * @param {Object} options
         */
        init: function (contentArea, container, component, options) {
            flog('init "audio" component', component);
        },

        /**
         * Function will be called for getting content of component from method of KEditor "target.keditor('getContent')"
         * @param {jQuery} component
         * @param {Object} options
         */
        getContent: function (component, options) {
            flog('getContent "audio" component, component');

            var componentContent = component.children('.keditor-component-content');
            var audio = componentContent.find('audio');
            audio.unwrap();

            return componentContent.html();
        },

        /**
         * Function will be called when deleting component
         * @param {jQuery} component
         * @param {Object} options
         */
        destroy: function (component, options) {

        },

        // Enable setting panel for this type or not
        settingEnabled: true,

        // Title of setting panel
        settingTitle: 'Audio settings',

        /**
         * Initialize setting form of this type
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         * @param {Object} options
         */
        initSettingForm: function (form, options) {
            flog('init "audio" settings', form);
            var self = this;
            form.append(
                '<form class="form-horizontal">' +
                    '<div class="form-group">' +
                        '<label for="audioFileInput" class="col-sm-12">Audio file</label>' +
                        '<div class="col-sm-12">' +
                            '<div class="audio-toolbar">'+
                                '<a href="#" class="btn-audioFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>'+
                                '<input id="audioFileInput" type="file" style="display: none">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="audio-autoplay" class="col-sm-12">Autoplay</label>' +
                        '<div class="col-sm-12">' +
                            '<input type="checkbox" id="audio-autoplay" />' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="audio-showcontrols" class="col-sm-12">Show Controls</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="checkbox" id="audio-showcontrols" checked />' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="audio-width" class="col-sm-12">Width (%)</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="number" id="audio-width" min="20" max="100" class="form-control" value="100" />' +
                        '</div>' +
                    '</div>' +
                '</form>'
            );


        },

        /**
         * Show setting form for this type. This function will be called when user clicks on setting button of component when setting panel is hidden. You can fulfill form controls in this function.
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         * @param {jQuery} component Component will be applied setting
         * @param {Object} options
         */
        showSettingForm: function (form, component, options) {
            var audio = component.find('audio');
            var fileInput = form.find('#audioFileInput');
            var btnAudioFileInput = form.find('.btn-audioFileInput');
            btnAudioFileInput.on('click', function(e){
                e.preventDefault();

                fileInput.trigger('click');
            });
            fileInput.on('change', function () {
                var file = this.files[0];
                if (/audio/.test(file.type)) {
                    // Todo: Upload to your server :)

                    audio.attr('src', URL.createObjectURL(file));

                    audio.load(function () {
                        KEditor.showSettingPanel(component, options);
                    });
                } else {
                    alert('Your selected file is not an audio file!');
                }
            });

            var autoplayToggle = form.find('#audio-autoplay');
            autoplayToggle.on('click', function(e){
                if(this.checked){
                    audio.attr('autoplay','autoplay');
                }else{
                    audio.removeAttr('autoplay');
                }
            });

            var showcontrolsToggle = form.find('#audio-showcontrols');
            showcontrolsToggle.on('click', function(e){
                if(this.checked){
                    audio.attr('controls','controls');
                }else{
                    audio.removeAttr('controls');
                }
            });

            var audioWidth = form.find('#audio-width');
            audioWidth.on('change', function(){
                audio.css('width',this.value+'%');
            });
        },

        /**
         * Hide setting form for this type. This function will be called when user clicks again on setting button of component when setting panel is showed. You can clear setting form in this function
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         */
        hideSettingForm: function (form) {

        }
    };
})(jQuery);

/**
 * KEditor Google Map Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['googlemap'] = {
        init: function (contentArea, container, component, options) {
            // Do nothing
        },

        getContent: function (component, options) {
            flog('getContent "googlemap" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.googlemap-cover').remove();

            return componentContent.html();
        },

        destroy: function (component, options) {
            // Do nothing
        },

        settingEnabled: true,

        settingTitle: 'Google Map Viewer',

        initSettingForm: function (form, options) {
            flog('initSettingForm "googlemap" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-googlemap-edit">Update Map</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-googlemap-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-googlemap-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-googlemap-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Google Map embed code in here:');
                var iframe = $(inputData);
                var src = iframe.attr('src');
                if (iframe.length > 0 && src && src.length > 0) {
                    KEditor.settingComponent.find('.embed-responsive-item').attr('src', src);
                } else {
                    alert('Your Google Map embed code is invalid!');
                }
            });

            var btn169 = form.find('.btn-googlemap-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-googlemap-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });
        },

        showSettingForm: function (form, component, options) {
            flog('showSettingForm "googlemap" component', component);

            var embedItem = component.find('.embed-responsive-item');
            var chkAutoplay = form.find('#googlemap-autoplay');
            var src = embedItem.attr('src');

            chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
        },

        hideSettingForm: function (form) {
            // Do nothing
        }
    };

})(jQuery);

/**
 * KEditor Photo Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['photo'] = {
        init: function (contentArea, container, component, options) {
            // Do nothing
        },

        getContent: function (component, options) {
            flog('getContent "photo" component, component');

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.photo-toolbar').remove();
            var img = componentContent.find('img');
            img.unwrap();

            return componentContent.html();
        },

        destroy: function (component, options) {
            // Do nothing
        },

        settingEnabled: true,

        settingTitle: 'Photo',

        initSettingForm: function (form, options) {
            var self = this;

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary" id="photo-edit">Change Photo</button>' +
                '           <input type="file" style="display: none" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-align" class="col-sm-12">Align</label>' +
                '       <div class="col-sm-12">' +
                '           <select id="photo-align" class="form-control">' +
                '               <option value="left">Left</option>' +
                '               <option value="center">Center</option>' +
                '               <option value="right">Right</option>' +
                '           </select>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-responsive" class="col-sm-12">Responsive</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="photo-responsive" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-width" class="col-sm-12">Width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="photo-width" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="photo-height" class="col-sm-12">Height</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="photo-height" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var photoEdit = form.find('#photo-edit');
            var fileInput = photoEdit.next();
            photoEdit.on('click', function (e) {
                e.preventDefault();

                fileInput.trigger('click');
            });
            fileInput.on('change', function () {
                var file = this.files[0];
                if (/image/.test(file.type)) {
                    var img = KEditor.settingComponent.find('img');
                    img.attr('src', URL.createObjectURL(file));
                    img.css({
                        width: '',
                        height: ''
                    });
                    img.load(function () {
                        KEditor.showSettingPanel(KEditor.settingComponent, options);
                    });
                } else {
                    alert('Your selected file is not photo!');
                }
            });

            var inputAlign = form.find('#photo-align');
            inputAlign.on('change', function () {
                var panel = KEditor.settingComponent.find('.photo-panel');
                panel.css('text-align', this.value);
            });

            var inputResponsive = form.find('#photo-responsive');
            inputResponsive.on('click', function () {
                KEditor.settingComponent.find('img')[this.checked ? 'addClass' : 'removeClass']('img-responsive');
            });

            var inputWidth = form.find('#photo-width');
            var inputHeight = form.find('#photo-height');
            inputWidth.on('change', function () {
                var img = KEditor.settingComponent.find('img');
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
                var img = KEditor.settingComponent.find('img');
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

        showSettingForm: function (form, component, options) {
            var self = this;
            var inputAlign = form.find('#photo-align');
            var inputResponsive = form.find('#photo-responsive');
            var inputWidth = form.find('#photo-width');
            var inputHeight = form.find('#photo-height');

            var panel = component.find('.photo-panel');
            var img = panel.find('img');

            var algin = panel.css('text-align');
            if (algin !== 'right' || algin !== 'center') {
                algin = 'left';
            }

            inputAlign.val(algin);
            inputResponsive.prop('checked', img.hasClass('img-responsive'));
            inputWidth.val(img.width());
            inputHeight.val(img.height());

            $('<img />').attr('src', img.attr('src')).load(function() {
                self.ratio = this.width / this.height;
                self.width = this.width;
                self.height = this.height;
            });
        },

        hideSettingForm: function (form) {
            // Do nothing
        }
    };

})(jQuery);

/**
 * KEditor Text Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    // Text component
    // ---------------------------------------------------------------------
    KEditor.components['text'] = {
        options: {
            toolbarGroups: [
                {name: 'document', groups: ['mode', 'document', 'doctools']},
                {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
                {name: 'forms', groups: ['forms']},
                {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
                {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
                {name: 'links', groups: ['links']},
                {name: 'insert', groups: ['insert']},
                '/',
                {name: 'clipboard', groups: ['clipboard', 'undo']},
                {name: 'styles', groups: ['styles']},
                {name: 'colors', groups: ['colors']},
                {name: 'tools', groups: ['tools']},
                {name: 'others', groups: ['others']},
            ],
            title: false,
            allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
            bodyId: 'editor',
            templates_replaceContent: false,
            enterMode: 'P',
            forceEnterMode: true,
            format_tags: 'p;h1;h2;h3;h4;h5;h6',
            removePlugins: 'table,magicline,tabletools',
            removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
            minimumChangeMilliseconds: 100
        },

        init: function (contentArea, container, component, options) {
            flog('init "text" component', component);
            var self = this;

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

        getContent: function (component, options) {
            flog('getContent "text" component', component);

            var componentContent = component.find('.keditor-component-content');
            var id = componentContent.attr('id');
            var editor = CKEDITOR.instances[id];
            if (editor) {
                return editor.getData();
            } else {
                return componentContent.html();
            }
        },

        destroy: function (component, options) {
            flog('destroy "text" component', component);

            var id = component.find('.keditor-component-content').attr('id');
            var editor = CKEDITOR.instances[id];
            if (editor) {
                editor.destroy();
            }
        }
    };

})(jQuery);

/**
 * KEditor Video Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['video'] = {
        /**
         * Function will be called when initializing a component with this type
         * @param {jQuery} contentArea
         * @param {jQuery} container
         * @param {jQuery} component
         * @param {Object} options
         */
        init: function (contentArea, container, component, options) {
            flog('init "video" component', component);
        },

        /**
         * Function will be called for getting content of component from method of KEditor "target.keditor('getContent')"
         * @param {jQuery} component
         * @param {Object} options
         */
        getContent: function (component, options) {
            flog('getContent "video" component, component');

            var componentContent = component.children('.keditor-component-content');
            var video = componentContent.find('video');
            video.unwrap();

            return componentContent.html();
        },

        /**
         * Function will be called when deleting component
         * @param {jQuery} component
         * @param {Object} options
         */
        destroy: function (component, options) {

        },

        // Enable setting panel for this type or not
        settingEnabled: true,

        // Title of setting panel
        settingTitle: 'Video settings',

        /**
         * Initialize setting form of this type
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         * @param {Object} options
         */
        initSettingForm: function (form, options) {
            flog('init "video" settings', form);
            var self = this;
            form.append(
                '<form class="form-horizontal">' +
                    '<div class="form-group">' +
                        '<label for="videoFileInput" class="col-sm-12">Video file</label>' +
                        '<div class="col-sm-12">' +
                            '<div class="video-toolbar">'+
                                '<a href="#" class="btn-videoFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>'+
                                '<input id="videoFileInput" type="file" style="display: none">' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="video-autoplay" class="col-sm-12">Autoplay</label>' +
                        '<div class="col-sm-12">' +
                            '<input type="checkbox" id="video-autoplay" />' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="video-loop" class="col-sm-12">Loop</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="checkbox" id="video-loop" />' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="video-showcontrols" class="col-sm-12">Show Controls</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="checkbox" id="video-showcontrols" checked />' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="" class="col-sm-12">Ratio</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="radio" name="video-radio" class="video-ratio" value="4/3" checked /> 4:3' +
                        '</div>' +
                        '<div class="col-sm-12">' +
                        '<input type="radio" name="video-radio" class="video-ratio" value="16/9" /> 16:9' +
                        '</div>' +
                    '</div>' +
                    '<div class="form-group">' +
                        '<label for="video-width" class="col-sm-12">Width (px)</label>' +
                        '<div class="col-sm-12">' +
                        '<input type="number" id="video-width" min="320" max="1920" class="form-control" value="320" />' +
                        '</div>' +
                    '</div>' +
                '</form>'
            );


        },

        /**
         * Show setting form for this type. This function will be called when user clicks on setting button of component when setting panel is hidden. You can fulfill form controls in this function.
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         * @param {jQuery} component Component will be applied setting
         * @param {Object} options
         */
        showSettingForm: function (form, component, options) {
            var video = component.find('video');
            var fileInput = form.find('#videoFileInput');
            var btnVideoFileInput = form.find('.btn-videoFileInput');
            btnVideoFileInput.on('click', function(e){
                e.preventDefault();

                fileInput.trigger('click');
            });
            fileInput.on('change', function () {
                var file = this.files[0];
                if (/video/.test(file.type)) {
                    // Todo: Upload to your server :)

                    video.attr('src', URL.createObjectURL(file));

                    video.load(function () {
                        KEditor.showSettingPanel(component, options);
                    });
                } else {
                    alert('Your selected file is not an video file!');
                }
            });

            var autoplayToggle = form.find('#video-autoplay');
            autoplayToggle.on('click', function(e){
                if(this.checked){
                    video.prop('autoplay', true);
                }else{
                    video.removeProp('autoplay');
                }
            });

            var loopToggle = form.find('#video-loop');
            loopToggle.on('click', function(e){
                if(this.checked){
                    video.prop('loop', true);
                }else{
                    video.removeProp('loop');
                }
            });

            var ratio = form.find('.video-ratio');
            ratio.on('click', function(e){
                if(this.checked){
                    var currentWidth = video.css('width') || video.prop('width');
                    currentWidth = currentWidth.replace('px','');

                    var currentRatio = this.value==='16/9'? 16/9 : 4/3;
                    var height = currentWidth/currentRatio;
                    video.css('width',currentWidth+'px');
                    video.css('height',height+'px');
                    video.removeProp('width');
                    video.removeProp('height');
                }
            });

            var showcontrolsToggle = form.find('#video-showcontrols');
            showcontrolsToggle.on('click', function(e){
                if(this.checked){
                    video.attr('controls','controls');
                }else{
                    video.removeAttr('controls');
                }
            });

            var videoWidth = form.find('#video-width');
            videoWidth.on('change', function(){
                video.css('width',this.value+'px');
                var currentRatio = form.find('.video-ratio:checked').val() === '16/9'? 16/9 : 4/3;
                var height = this.value / currentRatio;
                video.css('height',height+'px');
                video.removeProp('width');
                video.removeProp('height');
            });
        },

        /**
         * Hide setting form for this type. This function will be called when user clicks again on setting button of component when setting panel is showed. You can clear setting form in this function
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         */
        hideSettingForm: function (form) {

        }
    };
})(jQuery);

/**
 * KEditor Vimeo Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['vimeo'] = {
        init: function (contentArea, container, component, options) {
            // Do nothing
        },

        getContent: function (component, options) {
            flog('getContent "vimeo" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.vimeo-cover').remove();

            return componentContent.html();
        },

        destroy: function (component, options) {
            // Do nothing
        },

        settingEnabled: true,

        settingTitle: 'Vimeo Player',

        initSettingForm: function (form, options) {
            flog('initSettingForm "vimeo" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-vimeo-edit">Change Video</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="vimeo-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-vimeo-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-vimeo-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-vimeo-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Vimeo URL in here:');
                var vimeoRegex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
                var match = inputData.match(vimeoRegex);
                if (match && match[1]) {
                    KEditor.settingComponent.find('.embed-responsive-item').attr('src', 'https://player.vimeo.com/video/' + match[1] + '?byline=0&portrait=0&badge=0');
                } else {
                    alert('Your Vimeo URL is invalid!');
                }
            });

            var btn169 = form.find('.btn-vimeo-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-vimeo-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });

            var chkAutoplay = form.find('#vimeo-autoplay');
            chkAutoplay.on('click', function () {
                var embedItem = KEditor.settingComponent.find('.embed-responsive-item');
                var currentUrl = embedItem.attr('src');
                var newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?byline=0&portrait=0&badge=0&autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);

                flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
                embedItem.attr('src', newUrl);
            });
        },

        showSettingForm: function (form, component, options) {
            flog('showSettingForm "vimeo" component', component);

            var embedItem = component.find('.embed-responsive-item');
            var chkAutoplay = form.find('#vimeo-autoplay');
            var src = embedItem.attr('src');

            chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
        },

        hideSettingForm: function (form) {
            // Do nothing
        }
    };

})(jQuery);

/**
 * KEditor Youtube Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.0
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['youtube'] = {
        init: function (contentArea, container, component, options) {
            // Do nothing
        },

        getContent: function (component, options) {
            flog('getContent "youtube" component', component);

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.youtube-cover').remove();

            return componentContent.html();
        },

        destroy: function (component, options) {
            // Do nothing
        },

        settingEnabled: true,

        settingTitle: 'Youtube Player',

        initSettingForm: function (form, options) {
            flog('initSettingForm "youtube" component');

            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-block btn-primary btn-youtube-edit">Change Video</button>' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="youtube-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label class="col-sm-12">Aspect Ratio</label>' +
                '       <div class="col-sm-12">' +
                '           <button type="button" class="btn btn-sm btn-default btn-youtube-169">16:9</button>' +
                '           <button type="button" class="btn btn-sm btn-default btn-youtube-43">4:3</button>' +
                '       </div>' +
                '   </div>' +
                '</form>'
            );

            var btnEdit = form.find('.btn-youtube-edit');
            btnEdit.on('click', function (e) {
                e.preventDefault();

                var inputData = prompt('Please enter Youtube URL in here:');
                var youtubeRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/;
                var match = inputData.match(youtubeRegex);
                if (match && match[1]) {
                    KEditor.settingComponent.find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + match[1]);
                } else {
                    alert('Your Youtube URL is invalid!');
                }
            });

            var btn169 = form.find('.btn-youtube-169');
            btn169.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
            });

            var btn43 = form.find('.btn-youtube-43');
            btn43.on('click', function (e) {
                e.preventDefault();

                KEditor.settingComponent.find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
            });

            var chkAutoplay = form.find('#youtube-autoplay');
            chkAutoplay.on('click', function () {
                var embedItem = KEditor.settingComponent.find('.embed-responsive-item');
                var currentUrl = embedItem.attr('src');
                var newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);

                flog('Current url: ' + currentUrl, 'New url: ' + newUrl);
                embedItem.attr('src', newUrl);
            });
        },

        showSettingForm: function (form, component, options) {
            flog('showSettingForm "youtube" component', component);

            var embedItem = component.find('.embed-responsive-item');
            var chkAutoplay = form.find('#youtube-autoplay');
            var src = embedItem.attr('src');

            chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
        },

        hideSettingForm: function (form) {
            // Do nothing
        }
    };

})(jQuery);
