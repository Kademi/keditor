import KEditor from 'keditor';

KEditor.components['audio'] = {
    settingEnabled: true,
    
    settingTitle: 'Audio Settings',
    
    init: function (contentArea, container, component, keditor) {
        let componentContent = component.find('.keditor-component-content');
        
        if (componentContent.find('.audio-wrapper').length === 0) {
            componentContent.wrapInner('<div class="audio-wrapper"></div>');
        }
    },
    
    initSettingForm: function (form, keditor) {
        form.append(
            '<form class="form-horizontal">' +
            '     <div class="form-group">' +
            '         <label class="col-sm-12">Audio file</label>' +
            '         <div class="col-sm-12">' +
            '             <div class="audio-toolbar">' +
            '                 <a href="#" class="btn-audio-upload btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>' +
            '                 <input class="audio-upload" type="file" style="display: none" />' +
            '             </div>' +
            '         </div>' +
            '     </div>' +
            '     <div class="form-group">' +
            '         <label class="col-sm-12">Autoplay</label>' +
            '         <div class="col-sm-12">' +
            '             <input type="checkbox" class="audio-autoplay" />' +
            '         </div>' +
            '     </div>' +
            '     <div class="form-group">' +
            '         <label class="col-sm-12">Show Controls</label>' +
            '         <div class="col-sm-12">' +
            '             <input type="checkbox" class="audio-controls" checked />' +
            '         </div>' +
            '     </div>' +
            '     <div class="form-group">' +
            '         <label class="col-sm-12">Width (%)</label>' +
            '         <div class="col-sm-12">' +
            '             <input type="number" min="20" max="100" class="form-control audio-width" value="100" />' +
            '         </div>' +
            '     </div>' +
            '</form>'
        );
        
        let fileInput = form.find('.audio-upload');
        let btnAudioUpload = form.find('.btn-audio-upload');
        btnAudioUpload.off('click').on('click', function (e) {
            e.preventDefault();
            
            fileInput.trigger('click');
        });
        fileInput.off('change').on('change', function () {
            let file = this.files[0];
            if (/audio/.test(file.type)) {
                // Todo: Upload to your server :)
                
                let audio = keditor.getSettingComponent().find('audio');
                audio.attr('src', URL.createObjectURL(file));
            } else {
                alert('Your selected file is not an audio file!');
            }
        });
        
        let autoplayToggle = form.find('.audio-autoplay');
        autoplayToggle.on('click', function () {
            let audio = keditor.getSettingComponent().find('audio');
            audio.prop('autoplay', this.checked);
        });
        
        let controlsToggle = form.find('.audio-controls');
        controlsToggle.on('click', function () {
            let audio = keditor.getSettingComponent().find('audio');
            audio.prop('controls', this.checked);
        });
        
        let audioWidth = form.find('.audio-width');
        audioWidth.on('change', function () {
            let audio = keditor.getSettingComponent().find('audio');
            let wrapper = audio.parent();
            
            wrapper.attr('data-width', this.value);
            audio.css('width', this.value + '%');
        });
    },
    
    showSettingForm: function (form, component, keditor) {
        let audio = component.find('audio');
        let wrapper = audio.parent();
        
        let autoplayToggle = form.find('.audio-autoplay');
        let controlsToggle = form.find('.audio-controls');
        let audioWidth = form.find('.audio-width');
        
        autoplayToggle.prop('checked', !!audio.attr('autoplay'));
        controlsToggle.prop('checked', !!audio.attr('controls'));
        audioWidth.val(wrapper.attr('data-width') || 100);
    }
};
