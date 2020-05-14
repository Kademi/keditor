import '../styles/keditor-component-text.less';

import KEditor from 'keditor';
import CKEDITOR from 'ckeditor';

CKEDITOR.disableAutoInline = true;

// Fix issue: Scroll to bottom when pasting text or pressing ENTER in CKEditor
CKEDITOR.dom.element.prototype.scrollIntoView = () => { return; };
CKEDITOR.dom.selection.prototype.scrollIntoView = () => { return; };
CKEDITOR.dom.range.prototype.scrollIntoView = () => { return; };

// Text component
// ---------------------------------------------------------------------
KEditor.components['text'] = {
    options: {
        toolbarGroups: [
            { name: 'document', groups: ['mode', 'document', 'doctools'] },
            { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
            { name: 'forms', groups: ['forms'] },
            { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
            { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
            { name: 'links', groups: ['links'] },
            { name: 'insert', groups: ['insert'] },
            '/',
            { name: 'clipboard', groups: ['clipboard', 'undo'] },
            { name: 'styles', groups: ['styles'] },
            { name: 'colors', groups: ['colors'] },
        ],
        title: false,
        allowedContent: true, // DISABLES Advanced Content Filter. This is so templates with classes: allowed through
        bodyId: 'editor',
        templates_replaceContent: false,
        enterMode: 'P',
        forceEnterMode: true,
        format_tags: 'p;h1;h2;h3;h4;h5;h6',
        removePlugins: 'table,magicline,tableselection,tabletools',
        removeButtons: 'Save,NewPage,Preview,Print,Templates,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,HiddenField,ImageButton,Button,Select,Textarea,TextField,Radio,Checkbox,Outdent,Indent,Blockquote,CreateDiv,Language,Table,HorizontalRule,Smiley,SpecialChar,PageBreak,Iframe,Styles,BGColor,Maximize,About,ShowBlocks,BidiLtr,BidiRtl,Flash,Image,Subscript,Superscript,Anchor',
        minimumChangeMilliseconds: 100,
    },

    init: function (contentArea, container, component, keditor) {
        let self = this;
        let options = keditor.options;

        let componentContent = component.children('.keditor-component-content');
        componentContent.prop('contenteditable', true);

        componentContent.on('input', function (e) {
            if (typeof options.onComponentChanged === 'function') {
                options.onComponentChanged.call(keditor, e, component);
            }

            if (typeof options.onContainerChanged === 'function') {
                options.onContainerChanged.call(keditor, e, container, contentArea);
            }

            if (typeof options.onContentChanged === 'function') {
                options.onContentChanged.call(keditor, e, contentArea);
            }
        });

        let editor = CKEDITOR.inline(componentContent[0], self.options);
        editor.on('instanceReady', function () {
            $('#cke_' + componentContent.attr('id')).appendTo(keditor.wrapper);

            if (typeof options.onComponentReady === 'function') {
                options.onComponentReady.call(contentArea, component, editor);
            }
        });

        editor.on('key', function (event) {
            const isCtrl = event.data.domEvent.$.ctrlKey;
            if ((isCtrl && event.data.domEvent.$.keyCode === 86) || event.data.domEvent.$.keyCode === 13) {
                console.log('Dont scroll!!')
                keditor.iframeBody.scrollTop($(editor.element.$).offset().top);
                // componentContent.css('height', 200);
                // keditor.iframeBody.css('overflow', 'visible');
                setTimeout(() => {
                    // event.cancel();
                    // console.log(window);
                    // keditor.iframeBody.css('overflow', '');
                    // keditor.iframeBody.scrollTop($(editor.element.$).offset().top);
                }, 10);
            }
        }, editor);
    },

    getContent: function (component, keditor) {
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
        let id = component.find('.keditor-component-content').attr('id');
        CKEDITOR.instances[id] && CKEDITOR.instances[id].destroy();
    },
};
