/**
 * KEditor Video Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
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
