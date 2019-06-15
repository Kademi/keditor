import KEditor from 'keditor';

KEditor.components['video'] = {
    init: function (contentArea, container, component, keditor) {
        let componentContent = component.children('.keditor-component-content');
        let video = componentContent.find('video');
        
        if (!video.parent().is('.video-wrapper')) {
            video.wrap('<div class="video-wrapper"></div>');
        }
    },
    
    getContent: function (component, keditor) {
        let componentContent = component.children('.keditor-component-content');
        let video = componentContent.find('video');
        video.unwrap();
        
        return componentContent.html();
    },
    
    settingEnabled: true,
    
    settingTitle: 'Video Settings',
    
    initSettingForm: function (form, keditor) {
        form.append(`
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="video-input" class="col-sm-12">Video file</label>
                    <div class="col-sm-12">
                        <div class="video-toolbar">
                            <a href="#" class="btn-video-input btn btn-sm btn-primary"><i class="fa fa-upload"></i></a>
                            <input class="video-input" type="file" style="display: none" />
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="video-autoplay" class="col-sm-12">Autoplay</label>
                    <div class="col-sm-12">
                        <input type="checkbox" class="video-autoplay" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="video-loop" class="col-sm-12">Loop</label>
                    <div class="col-sm-12">
                        <input type="checkbox" class="video-loop" />
                    </div>
                </div>
                <div class="form-group">
                    <label for="video-controls" class="col-sm-12">Show Controls</label>
                    <div class="col-sm-12">
                        <input type="checkbox" class="video-controls" checked />
                    </div>
                </div>
                <div class="form-group">
                    <label for="" class="col-sm-12">Ratio</label>
                    <div class="col-sm-12">
                        <input type="radio" name="video-radio" class="video-ratio" value="4/3" checked /> 4:3
                    </div>
                    <div class="col-sm-12">
                        <input type="radio" name="video-radio" class="video-ratio" value="16/9" /> 16:9
                    </div>
                </div>
                <div class="form-group">
                    <label for="video-width" class="col-sm-12">Width (px)</label>
                    <div class="col-sm-12">
                        <input type="number" class="video-width form-control" min="320" max="1920" value="320" />
                    </div>
                </div>
            </form>
        `);
        
        let fileInput = form.find('.video-input');
        form.find('.btn-video-input').on('click', function (e) {
            e.preventDefault();
            
            fileInput.trigger('click');
        });
        fileInput.on('change', function () {
            let file = this.files[0];
            let video = keditor.getSettingComponent().find('video');
            
            if (/video/.test(file.type)) {
                // Todo: Upload to your server :)
                
                video.attr('src', URL.createObjectURL(file));
            } else {
                alert('Your selected file is not an video file!');
            }
        });
        
        let autoplayToggle = form.find('.video-autoplay');
        autoplayToggle.on('click', function () {
            let video = keditor.getSettingComponent().find('video');
            
            video.prop('autoplay', this.checked);
        });
        
        let loopToggle = form.find('.video-loop');
        loopToggle.on('click', function () {
            let video = keditor.getSettingComponent().find('video');
            video.prop('loop', this.checked);
        });
        
        let ratio = form.find('.video-ratio');
        ratio.on('click', function () {
            let video = keditor.getSettingComponent().find('video');
            video.attr('data-ratio', this.value);
            form.find('.video-width').trigger('change');
        });
        
        let controlToggle = form.find('.video-controls');
        controlToggle.on('click', function () {
            let video = keditor.getSettingComponent().find('video');
            video.prop('controls', this.checked);
        });
        
        let videoWidth = form.find('.video-width');
        videoWidth.on('change', function () {
            let video = keditor.getSettingComponent().find('video');
            
            let currentRatio = video.attr('data-ratio') === '16/9' ? 16 / 9 : 4 / 3;
            let height = this.value / currentRatio;
            video.attr('width', this.value);
            video.attr('height', height);
        });
    },
    
    showSettingForm: function (form, component, keditor) {
        let video = component.find('video');
        
        let autoplayToggle = form.find('.video-autoplay');
        autoplayToggle.prop('checked', video.prop('autoplay'));
        
        let loopToggle = form.find('.video-loop');
        loopToggle.prop('checked', video.prop('loop'));
        
        let ratio = form.find('.video-ratio');
        ratio.prop('checked', false).filter('[value="' + video.attr('data-ratio') + '"]').prop('checked', true);
        
        let controlToggle = form.find('.video-controls');
        controlToggle.prop('checked', video.prop('controls'));
        
        let videoWidth = form.find('.video-width');
        videoWidth.val(video.attr('width'));
    }
};
