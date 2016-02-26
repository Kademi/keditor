/**
 * KEditor Google Map Component
 * @copyright: Kademi (http://kademi.co)
 * @author: Kademi (http://kademi.co)
 * @version: @{version}
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
