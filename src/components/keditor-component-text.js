import '../styles/keditor-component-text.less';
import KEditor from 'keditor';
const instances = {};

// Text component
// ---------------------------------------------------------------------
KEditor.components['text'] = {
    options: {
        toolbarGroups: [
            {name: 'document', groups: ['mode', 'document', 'doctools']},
            {name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing']},
            {name: 'basicstyles', groups: ['basicstyles', 'cleanup']},
            {name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph']},
            {name: 'links', groups: ['links']},
            {name: 'insert', groups: ['insert']},
            {name: 'clipboard', groups: ['clipboard', 'undo']},
            {name: 'styles', groups: ['styles']},
            {name: 'colors', groups: ['colors']},
        ],
        title: false,
        allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
        bodyId: 'editor',
        templates_replaceContent: false,
        enterMode: 'P',
        forceEnterMode: true,
        format_tags: 'p;h1;h2;h3;h4;h5;h6',
        removePlugins: 'table,magicline,tableselection,tabletools,div',
        removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
        minimumChangeMilliseconds: 100
    },
    
    initCKEditor: function (keditor, callback) {
        if (keditor.iframeWindow.CKEDITOR) {
            callback(keditor.iframeWindow.CKEDITOR);
        } else {
            let ckeditorSrc = $(document.body).find('[data-type="ckeditor-script"]').attr('src');
            let ckeditorScript = keditor.iframeDoc[0].createElement('script');
            ckeditorScript.type = 'text/javascript';
            ckeditorScript.onreadystatechange = function () {
                keditor.iframeWindow.CKEDITOR.disableAutoInline = true;
                callback(keditor.iframeWindow.CKEDITOR);
            };
            ckeditorScript.onload = function () {
                keditor.iframeWindow.CKEDITOR.disableAutoInline = true;
                callback(keditor.iframeWindow.CKEDITOR);
            };
            keditor.iframeHead.append(ckeditorScript);
            ckeditorScript.src = ckeditorSrc;
        }
    },
    
    init: function (contentArea, container, component, keditor) {
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
                options.onContentChanged.call(keditor, e, contentArea);
            }
        });
        
        self.initCKEditor(keditor, function (CKEDITOR) {
            let editor = CKEDITOR.inline(componentContent[0], self.options);
            instances[componentContent.attr('id')] = editor;
            editor.on('instanceReady', function () {
                if (typeof options.onComponentReady === 'function') {
                    options.onComponentReady.call(contentArea, component, editor);
                }
            });
        });
    },
    
    getContent: function (component, keditor) {
        let componentContent = component.find('.keditor-component-content');
        let id = componentContent.attr('id');
        let editor = instances[id];
        if (editor) {
            return editor.getData();
        } else {
            return componentContent.html();
        }
    },
    
    destroy: function (component, keditor) {
        let id = component.find('.keditor-component-content').attr('id');
        instances[id] && instances[id].destroy();
    }
};
