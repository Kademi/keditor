import KEditor from 'keditor';

KEditor.components['youtube'] = {
    init: function (contentArea, container, component, keditor) {
        let iframe = component.find('iframe');
        let wrapper = iframe.parent();
        keditor.initIframeCover(iframe, wrapper);
    },
    
    settingEnabled: true,
    
    settingTitle: 'Youtube Settings',
    
    initSettingForm: function (form, keditor) {
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
        
        let btnEdit = form.find('.btn-youtube-edit');
        btnEdit.on('click', function (e) {
            e.preventDefault();
            
            let inputData = prompt('Please enter Youtube URL in here:');
            let youtubeRegex = /^(?:http(?:s)?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?v(?:i)?=|(?:embed|v|vi|user)\/))([^\?&\"'>]+)/;
            let match = inputData.match(youtubeRegex);
            if (match && match[1]) {
                keditor.getSettingComponent().find('.embed-responsive-item').attr('src', 'https://www.youtube.com/embed/' + match[1]);
            } else {
                alert('Your Youtube URL is invalid!');
            }
        });
        
        let btn169 = form.find('.btn-youtube-169');
        btn169.on('click', function (e) {
            e.preventDefault();
            
            keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-4by3').addClass('embed-responsive-16by9');
        });
        
        let btn43 = form.find('.btn-youtube-43');
        btn43.on('click', function (e) {
            e.preventDefault();
            
            keditor.getSettingComponent().find('.embed-responsive').removeClass('embed-responsive-16by9').addClass('embed-responsive-4by3');
        });
        
        let chkAutoplay = form.find('#youtube-autoplay');
        chkAutoplay.on('click', function () {
            let embedItem = keditor.getSettingComponent().find('.embed-responsive-item');
            let currentUrl = embedItem.attr('src');
            let newUrl = (currentUrl.replace(/(\?.+)+/, '')) + '?autoplay=' + (chkAutoplay.is(':checked') ? 1 : 0);
            embedItem.attr('src', newUrl);
        });
    },
    
    showSettingForm: function (form, component, keditor) {
        let embedItem = component.find('.embed-responsive-item');
        let chkAutoplay = form.find('#youtube-autoplay');
        let src = embedItem.attr('src');
        
        chkAutoplay.prop('checked', src.indexOf('autoplay=1') !== -1);
    }
};
