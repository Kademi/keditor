import $ from 'jquery';
import KEditor from 'keditor';

const flog = KEditor.log;
import InlineEditor from 'InlineEditor';

const instances = {};

// Text component
// ---------------------------------------------------------------------
KEditor.components['text'] = {
    init: function (contentArea, container, component, keditor) {
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
        
        InlineEditor
            .create(componentContent.get(0), {
                fontFamily: {
                    options: [
                        'default',
                        'Arial, Helvetica, sans-serif',
                        'Courier New, Courier, monospace',
                        'Georgia, serif',
                        'Lucida Sans Unicode, Lucida Grande, sans-serif',
                        'Tahoma, Geneva, sans-serif',
                        'Times New Roman, Times, serif',
                        'Trebuchet MS, Helvetica, sans-serif',
                        'Verdana, Geneva, sans-serif'
                    ]
                }
            })
            .then(editor => {
                instances[componentContent.attr('id')] = editor;
                
                if (typeof options.onComponentReady === 'function') {
                    options.onComponentReady.call(keditor, component, editor);
                }
            })
            .catch(error => {
                console.error(error);
            });
    },
    
    getContent: function (component, keditor) {
        let componentContent = component.find('.keditor-component-content');
        let editor = instances[componentContent.attr('id')];
        if (editor) {
            return editor.getData();
        } else {
            return componentContent.html();
        }
    },
    
    destroy: function (component, keditor) {
        let id = component.find('.keditor-component-content').attr('id');
        let editor = instances[id];
        if (editor) {
            editor.destroy();
            delete instances[id];
        }
    }
};
