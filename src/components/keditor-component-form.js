import $ from 'jquery';
import KEditor from 'keditor';
const flog = KEditor.log;

KEditor.components['form'] = {
    initFormBuilder: function (component) {
        let self = this;
        
        let formBuilderArea = component.find('.form-builder-area');
        let formData = component.find('.form-data');
        let formContent = component.find('.form-content');
        
        component.find('.keditor-component-content').prepend(
            '<p class="form-builder-tools" style="text-align: right;">' +
            '    <a href="#" class="btn btn-primary btn-preview-form">Preview form</a> ' +
            '    <a href="#" class="btn btn-info btn-edit-form disabled">Edit form</a>' +
            '</p>'
        );
        
        let btnEditForm = component.find('.btn-edit-form');
        let btnPreviewForm = component.find('.btn-preview-form');
        
        formBuilderArea.formBuilder({
            disableInjectedStyle: true,
            showActionButtons: false,
            dataType: 'json',
            formData: formData.html(),
            disableFields: [
                'autocomplete',
                'paragraph',
                'header'
            ],
            disabledAttrs: ['access'],
            
            typeUserDisabledAttrs: {
                'checkbox-group': [
                    'toggle',
                    'inline'
                ]
            }
        });
        
        btnEditForm.on('click', function (e) {
            e.preventDefault();
            
            if (!btnEditForm.hasClass('disabled')) {
                formBuilderArea.show();
                formContent.hide();
                btnEditForm.addClass('disabled');
                btnPreviewForm.removeClass('disabled');
            }
        });
        
        btnPreviewForm.on('click', function (e) {
            e.preventDefault();
            
            if (!btnPreviewForm.hasClass('disabled')) {
                self.renderForm(component);
                
                formBuilderArea.hide();
                formContent.show();
                btnEditForm.removeClass('disabled');
                btnPreviewForm.addClass('disabled');
            }
        });
    },
    
    renderForm: function (component, formBuilder) {
        let formContent = component.find('.form-content');
        
        if (!formBuilder) {
            let formBuilderArea = component.find('.form-builder-area');
            formBuilder = formBuilderArea.data('formBuilder');
        }
        
        formContent.formRender({
            dataType: 'json',
            formData: formBuilder.actions.getData('json')
        });
        
        if (formContent.hasClass('form-horizontal')) {
            formContent.children('div').each(function () {
                let div = $(this);
                let dataGrid = formContent.attr('data-grid') || '4-8';
                dataGrid = dataGrid.split('-');
                
                if (div.attr('class')) {
                    if (div.hasClass('fb-button')) {
                        div.find('button').wrap('<div class="col-sm-' + dataGrid[1] + ' col-sm-offset-' + dataGrid[0] + '"></div>');
                    } else {
                        let label = div.children('label');
                        let input = div.children('input, select, textarea');
                        let subDiv = div.children('div');
                        
                        label.addClass('control-label col-sm-' + dataGrid[0]);
                        
                        if (subDiv.length > 0) {
                            subDiv.addClass('col-sm-' + dataGrid[1]);
                        } else {
                            input.addClass('form-control').wrap('<div class="col-sm-' + dataGrid[1] + '"></div>');
                        }
                    }
                }
            });
        }
    },
    
    init: function (contentArea, container, component, keditor) {
        flog('init "form" component', component);
        
        let componentContent = component.find('.keditor-component-content');
        let formBuilder = component.find('.form-builder-area');
        let formContent = component.find('.form-content');
        let formData = component.find('.form-data');
        
        if (formData.length === 0) {
            componentContent.append('<div class="form-data" style="display: none !important;"></div>')
        }
        
        if (formContent.length === 0) {
            componentContent.append('<form class="form-content" style="display: none !important;"></form>')
        } else {
            formContent.hide()
        }
        
        if (formBuilder.length === 0) {
            formBuilder = $('<div class="form-builder-area clearfix"></div>');
            componentContent.append(formBuilder);
        }
        
        this.initFormBuilder(component);
    },
    
    getContent: function (component, keditor) {
        flog('getContent "form" component', component);
        
        let self = this;
        let componentContent = component.find('.keditor-component-content');
        let formData = component.find('.form-data');
        let formBuilderArea = $('#' + component.attr('id')).find('.form-builder-area');
        let formBuilder = formBuilderArea.data('formBuilder');
        
        self.renderForm(component, formBuilder);
        formData.html(formBuilder.actions.getData('json'));
        component.find('.form-builder-area, .form-builder-tools').remove();
        component.find('.form-content').show();
        
        return componentContent.html();
    },
    
    settingEnabled: true,
    
    settingTitle: 'Form Settings',
    
    initSettingForm: function (form, keditor) {
        flog('initSettingForm "form" component');
        
        let self = this;
        
        form.html(
            '<div class="form-horizontal">' +
            '    <div class="form-group">' +
            '        <label class="col-sm-12">Action</label>' +
            '        <div class="col-sm-12">' +
            '            <input type="text" class="form-control txt-form-action" />' +
            '        </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '        <label class="col-sm-12">Method</label>' +
            '        <div class="col-sm-12">' +
            '            <select class="form-control select-method">' +
            '                <option value="get">Get</option>' +
            '                <option value="post">Post</option>' +
            '                <option value="put">Put</option>' +
            '                <option value="delete">Delete</option>' +
            '            </select>' +
            '        </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '        <label class="col-sm-12">Enctype</label>' +
            '        <div class="col-sm-12">' +
            '            <select class="form-control select-enctype">' +
            '                <option value="text/plain">text/plain</option>' +
            '                <option value="multipart/form-data">multipart/form-data</option>' +
            '                <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>' +
            '            </select>' +
            '        </div>' +
            '    </div>' +
            '    <div class="form-group">' +
            '        <label class="col-sm-12">Layout</label>' +
            '        <div class="col-sm-12">' +
            '            <select class="form-control select-layout">' +
            '                <option value="">Normal</option>' +
            '                <option value="form-horizontal">Horizontal</option>' +
            '                <option value="form-inline">Inline</option>' +
            '            </select>' +
            '        </div>' +
            '    </div>' +
            '    <div class="form-group select-grid-wrapper">' +
            '        <label class="col-sm-12">Grid setting</label>' +
            '        <div class="col-sm-12">' +
            '            <select class="form-control select-grid">' +
            '                <option value="2-10">col-2 col-10</option>' +
            '                <option value="3-9">col-3 col-9</option>' +
            '                <option value="4-8">col-4 col-8</option>' +
            '                <option value="5-7">col-5 col-7</option>' +
            '                <option value="6-6">col-6 col-6</option>' +
            '            </select>' +
            '            <small class="help-block">This setting is for width of label and control with number of cols as unit</small>' +
            '        </div>' +
            '    </div>' +
            '</div>'
        );
        
        
        form.find('.txt-form-action').on('change', function () {
            let component = keditor.getSettingComponent();
            let formContent = component.find('.form-content');
            
            formContent.attr('action', this.value);
        });
        
        form.find('.select-method').on('change', function () {
            let component = keditor.getSettingComponent();
            let formContent = component.find('.form-content');
            
            formContent.attr('action', this.value);
        });
        
        form.find('.select-enctype').on('change', function () {
            let component = keditor.getSettingComponent();
            let formContent = component.find('.form-content');
            
            formContent.attr('enctype', this.value);
        });
        
        form.find('.select-layout').on('change', function () {
            let component = keditor.getSettingComponent();
            let formContent = component.find('.form-content');
            
            formContent.removeClass('form-inline form-horizontal');
            if (this.value) {
                formContent.addClass(this.value);
            }
            self.renderForm(component);
            form.find('.select-grid-wrapper').css('display', this.value === 'form-horizontal' ? 'block' : 'none');
        });
        
        form.find('.select-grid').on('change', function () {
            let component = keditor.getSettingComponent();
            let formContent = component.find('.form-content');
            
            formContent.attr('data-grid', this.value);
            self.renderForm(component);
        });
    },
    
    showSettingForm: function (form, component, keditor) {
        flog('showSettingForm "form" component', component);
        let formContent = component.find('.form-content');
        
        let layout = '';
        if (formContent.hasClass('form-inline')) {
            layout = 'form-inline';
        } else if (formContent.hasClass('form-horizontal')) {
            layout = 'form-horizontal';
        }
        
        form.find('.txt-form-action').val(formContent.attr('action') || '');
        form.find('.select-method').val(formContent.attr('method') || 'get');
        form.find('.select-enctype').val(formContent.attr('enctype'));
        form.find('.select-layout').val(layout);
        form.find('.select-grid-wrapper').css('display', layout === 'form-horizontal' ? 'block' : 'none');
        form.find('.select-grid').val(formContent.attr('data-grid') || '4-8');
    }
};
