import '../styles/keditor-component-form.less';

import $ from 'jquery';
import KEditor from 'keditor';

let modal;
let formBuilder;

KEditor.components['form'] = {
    emptyContent: '<p class="text-muted lead text-center"><br />[No form content]<br /><br /></p>',
    
    renderForm: function (component) {
        let formContent = component.find('.form-content');
        let temp = $('<div />');
    
        temp.formRender({
            dataType: 'json',
            formData: formBuilder.actions.getData('json')
        });
        
        formContent.html(temp.html());
        
        if (formContent.hasClass('form-horizontal')) {
            formContent.children('div').each(function () {
                let div = $(this);
                let dataGrid = formContent.attr('data-grid') || '4-8';
                dataGrid = dataGrid.split('-');
                
                if (div.attr('class')) {
                    if (div.hasClass('fb-button')) {
                        div.find('button').wrap(`<div class="col-sm-${dataGrid[1]} col-sm-offset-${dataGrid[0]}"></div>`);
                    } else {
                        let label = div.children('label');
                        let input = div.children('input, select, textarea');
                        let subDiv = div.children('div');
                        
                        label.addClass(`control-label col-sm-${dataGrid[0]}`);
                        
                        if (subDiv.length > 0) {
                            subDiv.addClass(`col-sm-${dataGrid[1]}`);
                        } else {
                            input.addClass('form-control').wrap(`<div class="col-sm-${dataGrid[1]}"></div>`);
                        }
                    }
                }
            });
        }
    },
    
    initModal: function (keditor) {
        let self = this;
        
        modal = keditor.initModal('keditor-modal-form');
        modal.find('.keditor-modal-title').html('Design form');
    
        modal.css({
            visibility: 'hidden',
            display: 'block',
            opacity: 1
        });
    
        modal.find('.keditor-modal-body').append(`
            <div class="form-builder-area-wrapper">
                <div class="form-builder-area"></div>
            </div>
        `);
        formBuilder = modal.find('.form-builder-area').formBuilder({
            showActionButtons: false,
            dataType: 'json',
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
    
        modal.find('.keditor-modal-footer').html(`
            <button type="button" class="keditor-ui keditor-btn keditor-btn-default keditor-modal-close">Close</button>
            <button type="button" class="keditor-ui keditor-btn keditor-btn-primary btn-save-form">Save</button>
        `);
    
        modal.find('.btn-save-form').on('click', function (e) {
            e.preventDefault();
        
            let component = keditor.getSettingComponent();
            component.find('.form-data').html(formBuilder.actions.getData('json'));
            self.renderForm(component);
            keditor.hideModal(modal);
        });
    
        setTimeout(() => {
            modal.css({
                visibility: '',
                display: '',
                opacity: ''
            });
        }, 500);
    },
    
    init: function (contentArea, container, component, keditor) {
        let self = this;
        let componentContent = component.find('.keditor-component-content');
        let formContent = component.find('.form-content');
        let formData = component.find('.form-data');
        
        if (formData.length === 0) {
            componentContent.append('<div class="form-data" style="display: none !important;"></div>')
        }
        
        if (formContent.length === 0) {
            componentContent.append(`<form class="form-content">${self.emptyContent}</form>`);
        }
    
        if (!modal) {
            self.initModal(keditor);
        }
    },
    
    settingEnabled: true,
    
    settingTitle: 'Form Settings',
    
    initSettingForm: function (form, keditor) {
        let self = this;
        
        form.html(`
            <div class="form-horizontal">
                <div class="form-group">
                    <div class="col-sm-12">
                       <button class="btn btn-primary btn-block btn-design-form" type="button"><i class="fa fa-paint-brush"></i> Design form</button>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-12">Action</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control txt-form-action" />
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-12">Method</label>
                    <div class="col-sm-12">
                        <select class="form-control select-method">
                            <option value="get">Get</option>
                            <option value="post">Post</option>
                            <option value="put">Put</option>
                            <option value="delete">Delete</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-12">Enctype</label>
                    <div class="col-sm-12">
                        <select class="form-control select-enctype">
                            <option value="text/plain">text/plain</option>
                            <option value="multipart/form-data">multipart/form-data</option>
                            <option value="application/x-www-form-urlencoded">application/x-www-form-urlencoded</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-12">Layout</label>
                    <div class="col-sm-12">
                        <select class="form-control select-layout">
                            <option value="">Normal</option>
                            <option value="form-horizontal">Horizontal</option>
                            <option value="form-inline">Inline</option>
                        </select>
                    </div>
                </div>
                <div class="form-group select-grid-wrapper">
                    <label class="col-sm-12">Grid setting</label>
                    <div class="col-sm-12">
                        <select class="form-control select-grid">
                            <option value="2-10">col-2 col-10</option>
                            <option value="3-9">col-3 col-9</option>
                            <option value="4-8">col-4 col-8</option>
                            <option value="5-7">col-5 col-7</option>
                            <option value="6-6">col-6 col-6</option>
                        </select>
                        <small class="help-block">This setting is for width of label and control with number of cols as unit</small>
                    </div>
                </div>
            </div>
        `);
        
        form.find('.btn-design-form').on('click', function (e) {
            e.preventDefault();
            
            let component = keditor.getSettingComponent();
            formBuilder.actions.setData(component.find('.form-data').html());
            keditor.showModal(modal);
        });
        
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
