/**
 * KEditor Audio Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
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
