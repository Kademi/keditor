/**!
 * KEditor - Kademi content editor
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: 1.1.7
 * @dependencies: $, $.fn.draggable, $.fn.droppable, $.fn.sortable, Bootstrap (optional), FontAwesome (optional)
 */
(function ($) {
    var KEditor = $.keditor;
    var flog = KEditor.log;
    
    KEditor.components['audio'] = {
        getContent: function (component, keditor) {
            flog('getContent "audio" component, component');
            
            var componentContent = component.children('.keditor-component-content');
            var audio = componentContent.find('audio');
            audio.unwrap();
            
            return componentContent.html();
        },
        
        settingEnabled: true,
        
        settingTitle: 'Audio Settings',
        
        initSettingForm: function (form, keditor) {
            flog('init "audio" settings', form);
            
            form.append(
                '<form class="form-horizontal">' +
                '     <div class="form-group">' +
                '         <label for="audioFileInput" class="col-sm-12">Audio file</label>' +
                '         <div class="col-sm-12">' +
                '             <div class="audio-toolbar">' +
                '                 <a href="#" class="btn-audioFileInput btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' +
                '                 <input id="audioFileInput" type="file" style="display: none" />' +
                '             </div>' +
                '         </div>' +
                '     </div>' +
                '     <div class="form-group">' +
                '         <label for="audio-autoplay" class="col-sm-12">Autoplay</label>' +
                '         <div class="col-sm-12">' +
                '             <input type="checkbox" id="audio-autoplay" />' +
                '         </div>' +
                '     </div>' +
                '     <div class="form-group">' +
                '         <label for="audio-showcontrols" class="col-sm-12">Show Controls</label>' +
                '         <div class="col-sm-12">' +
                '             <input type="checkbox" id="audio-showcontrols" checked />' +
                '         </div>' +
                '     </div>' +
                '     <div class="form-group">' +
                '         <label for="audio-width" class="col-sm-12">Width (%)</label>' +
                '         <div class="col-sm-12">' +
                '             <input type="number" id="audio-width" min="20" max="100" class="form-control" value="100" />' +
                '         </div>' +
                '     </div>' +
                '</form>'
            );
        },
        
        showSettingForm: function (form, component, keditor) {
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
})(jQuery);
