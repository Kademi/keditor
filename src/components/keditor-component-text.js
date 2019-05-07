import $ from 'jquery';
import KEditor from 'keditor';
const flog = KEditor.log;
import CKEDITOR from 'ckeditor';

CKEDITOR.disableAutoInline = true;

// Text component
// ---------------------------------------------------------------------
KEditor.components['text'] = {
    options: {
        toolbarGroups: [
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
            {name: 'forms', groups: ['forms']},
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
            {name: 'links', groups: ['links']},
            {name: 'insert', groups: ['insert']},
            '/',
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            {name: 'styles', groups: ['styles']},
            {name: 'colors', groups: ['colors']},
            {name: 'tools', groups: ['tools']},
            {name: 'others', groups: ['others']},
        ],
        title: false,
        allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
        bodyId: 'editor',
        templates_replaceContent: false,
        enterMode: 'P',
        forceEnterMode: true,
        format_tags: 'p;h1;h2;h3;h4;h5;h6',
        removePlugins: 'table,magicline,tabletools',
        removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
        minimumChangeMilliseconds: 100
    },
    
    init: function (contentArea, container, component, keditor) {
        flog('init "text" component', component);
        
        let self = this;
        let options = keditor.options;
        
        let componentContent = component.children('.keditor-component-content');
        componentContent.prop('contenteditable', true);
        
        componentContent.on('input', function (e) {
            if (typeof options.onComponentChanged === 'function') {
                options.onComponentChanged.call(contentArea, e, component);
            }
            
            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(contentArea, e, container);
            }
            
            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(contentArea, e);
            }
        });
        
        let editor = componentContent.ckeditor(self.options).editor;
        editor.on('instanceReady', function () {
            flog('CKEditor is ready', component);
            
            if (typeof options.onComponentReady === 'function') {
                options.onComponentReady.call(contentArea, component, editor);
            }
        });
    },
    
    getContent: function (component, keditor) {
        flog('getContent "text" component', component);
        
        let componentContent = component.find('.keditor-component-content');
        let id = componentContent.attr('id');
        let editor = CKEDITOR.instances[id];
        if (editor) {
            return editor.getData();
        } else {
            return componentContent.html();
        }
    },
    
    destroy: function (component, keditor) {
        flog('destroy "text" component', component);
        
        let id = component.find('.keditor-component-content').attr('id');
        let editor = CKEDITOR.instances[id];
        if (editor) {
            editor.destroy();
        }
    }
};
