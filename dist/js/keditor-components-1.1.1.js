/**
 * KEditor Audio Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.1
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    $.keditor.components['kaudio'] = {
        /**
         * Function will be called when initializing a component with this type
         * @param {jQuery} contentArea
         * @param {jQuery} container
         * @param {jQuery} component
         * @param {Object} options
         */
        init: function (contentArea, container, component, options) {
            flog('init "kaudio" component', component);
            var componentContent = component.children('.keditor-component-content');
            var audio = componentContent.find('audio');

            var btnUpload = componentContent.find('.audio-edit');
            var fileInput = btnUpload.next();
            btnUpload.on('click', function (e) {
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

        },

        /**
         * Function will be called for getting content of component from method of KEditor "target.keditor('getContent')"
         * @param {jQuery} component
         * @param {Object} options
         */
        getContent: function (component, options) {
            flog('getContent "kaudio" component, component');

            var componentContent = component.children('.keditor-component-content');
            componentContent.find('.audio-toolbar').parent().remove();
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
        settingTitle: 'KAudio settings',

        /**
         * Initialize setting form of this type
         * @param {jQuery} form Form contains all setting of this type and is child of div[id="keditor-setting-forms"]
         * @param {Object} options
         */
        initSettingForm: function (form, options) {
            var self = this;
            form.append(
                '<form class="form-horizontal">' +
                '   <div class="form-group">' +
                '       <label for="kaudio-autoplay" class="col-sm-12">Autoplay</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="checkbox" id="kaudio-autoplay" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="kaudio-width" class="col-sm-12">Width</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="kaudio-width" class="form-control" />' +
                '       </div>' +
                '   </div>' +
                '   <div class="form-group">' +
                '       <label for="kaudio-height" class="col-sm-12">Height</label>' +
                '       <div class="col-sm-12">' +
                '           <input type="number" id="kaudio-height" class="form-control" />' +
                '       </div>' +
                '   </div>' +
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
 * KEditor Photo Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.1
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap, FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;

    KEditor.components['photo'] = {
        init: function (contentArea, container, component, options) {
            flog('init "photo" component', component);

            var componentContent = component.children('.keditor-component-content');
            var img = componentContent.find('img');
            img.wrap('<div class="photo-wrapper"></div>');

            var wrapper = img.parent();
            wrapper.append(
                '<div class="photo-toolbar">' +
                '   <a href="#" class="photo-edit"><i class="fa fa-upload"></i></a>' +
                '   <input type="file" style="display: none" />' +
                '</div>'
            );

            var toolbar = wrapper.find('.photo-toolbar');
            var photoEdit = toolbar.find('.photo-edit');
            var fileInput = photoEdit.next();
            photoEdit.on('click', function (e) {
                e.preventDefault();

                fileInput.trigger('click');
            });

            fileInput.on('change', function () {
                var file = this.files[0];
                if (/image/.test(file.type)) {
                    img.attr('src', URL.createObjectURL(file));
                    img.css({
                        width: '',
                        height: ''
                    });
                    img.load(function () {
                        KEditor.showSettingPanel(component, options);
                    });
                } else {
                    alert('Your selected file is not photo!');
                }
            });
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

        settingTitle: 'Add image',

        initSettingForm: function (form, options) {
            var self = this;

            form.append(
                '<form class="form-horizontal">' +
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
 * @version: 1.1.1
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
            var componentContent = component.children('.keditor-component-content');
            componentContent.prop('contenteditable', true);

            var contentId = KEditor.generateId('component-content');
            flog('Id for component content is: ' + contentId);
            componentContent.attr('id', contentId);

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

            var editor = componentContent.ckeditor(this.options).editor;
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
