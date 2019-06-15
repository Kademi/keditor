import KEditor from 'keditor';

KEditor.components['vimeo'] = {
    init: function (contentArea, container, component, keditor) {
        let iframe = component.find('iframe');
        let wrapper = iframe.parent();
        keditor.initIframeCover(iframe, wrapper);
    },
    
    settingEnabled: true,
    
    settingTitle: 'Vimeo Settings',
    
    initSettingForm: function (form, keditor) {
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
        
        let btnEdit = form.find('.btn-vimeo-edit');
        btnEdit.on('click', function (e) {
            e.preventDefault();
            
            let inputData = prompt('Please enter Vimeo URL in here:');
            let vimeoRegex = /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/;
            let match = inputData.match(vimeoRegex);
            if (match && match[1]) {
                keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://player.vimeo.com/video/' + match[1] + '?byline=0&portrait=0&badge=0');
            } else {
                alert('Your Vimeo URL is invalid!');
            }
        });
        
        let btn169 = form.find('.btn-vimeo-169');
        btn169.on('click', function (e) {
            e.preventDefault();
            
            keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
        });
        
        let btn43 = form.find('.btn-vimeo-43');
        btn43.on('click', function (e) {
            e.preventDefault();
            
            keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
        });
        
        let chkAutoplay = form.find('#vimeo-autoplay');
        chkAutoplay.on('click', function () {
            let embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
            let currentUrl = embedItem.attr('src');
            let newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?byline=0&portrait=0&badge=0&autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);
            embedItem.attr('src', newUrl);
        });
    },
    
    showSettingForm: function (form, component, keditor) {
        let embedItem = component.find('.embed-responsive-item');
        let chkAutoplay = form.find('#vimeo-autoplay');
        let src = embedItem.attr('src');
        
        chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
    }
};
