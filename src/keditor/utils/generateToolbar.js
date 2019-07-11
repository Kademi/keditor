import TOOLBAR_TYPE from '../constants/toolbarType';
import CSS_CLASS from '../constants/cssClass';
import ICON from '../constants/icon';

export default function (type, isConfigurable) {
    let self = this;
    let options = self.options;
    let settingBtn = '';
    
    switch (type) {
        case TOOLBAR_TYPE.CONTAINER:
        case TOOLBAR_TYPE.SUB_CONTAINER:
            if (isConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_SETTING}" title="${options.locale.setting}">${ICON.SETTING_CONTAINER}</a>`;
            }
            
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR} ${CSS_CLASS.TOOLBAR_CONTAINER} ${type === TOOLBAR_TYPE.SUB_CONTAINER ? CSS_CLASS.TOOLBAR_SUB_CONTAINER : ''}">
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_MOVE}" title="${options.locale.move}">${ICON.MOVE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_MOVE_UP}" title="${options.locale.moveUp}">${ICON.MOVE_UP_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_MOVE_DOWN}" title="${options.locale.moveDown}">${ICON.MOVE_DOWN_CONTAINER}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_CUT}" title="${options.locale.cut}">${ICON.CUT_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_COPY}" title="${options.locale.copy}">${ICON.COPY_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.CONTAINER_DELETE}" title="${options.locale.delete}">${ICON.DELETE_CONTAINER}</a>
                </div>
            `);
    
        case TOOLBAR_TYPE.COMPONENT:
            if (isConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_SETTING}" title="${options.locale.setting}">${ICON.SETTING_COMPONENT}</a>`;
            }
        
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR} ${CSS_CLASS.TOOLBAR_COMPONENT}">
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_MOVE}" title="${options.locale.move}">${ICON.MOVE_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_MOVE_UP}" title="${options.locale.moveUp}">${ICON.MOVE_UP_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_MOVE_DOWN}" title="${options.locale.moveDown}">${ICON.MOVE_DOWN_COMPONENT}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_CUT}" title="${options.locale.cut}">${ICON.CUT_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_COPY}" title="${options.locale.copy}">${ICON.COPY_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.COMPONENT_DELETE}" title="${options.locale.delete}">${ICON.DELETE_COMPONENT}</a>
                </div>
            `);
            
        case TOOLBAR_TYPE.CONTENT_AREA:
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR_CONTENT_AREA}">
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.BTN} ${CSS_CLASS.BTN_DEFAULT} ${CSS_CLASS.ADD_CONTENT}" title="${options.locale.addContent}">${ICON.ADD_CONTENT}</a>
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.BTN} ${CSS_CLASS.BTN_DEFAULT} ${CSS_CLASS.PASTE_CONTENT}" title="${options.locale.pasteContent}">${ICON.PASTE_CONTENT}</a>
                </div>
            `);
        
        case TOOLBAR_TYPE.CONTAINER_CONTENT:
        case TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR_CONTAINER_CONTENT} ${type === TOOLBAR_TYPE.SUB_CONTAINER_CONTENT ? CSS_CLASS.TOOLBAR_SUB_CONTAINER_CONTENT : ''}">
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.BTN} ${CSS_CLASS.BTN_DEFAULT} ${CSS_CLASS.ADD_CONTENT}" title="${options.locale.addContent}">${ICON.ADD_CONTENT}</a>
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.BTN} ${CSS_CLASS.BTN_DEFAULT} ${CSS_CLASS.PASTE_CONTENT}" title="${options.locale.pasteContent}">${ICON.PASTE_CONTENT}</a>
                </div>
            `);
    
        case TOOLBAR_TYPE.CONTAINER_BOTTOM:
        case TOOLBAR_TYPE.SUB_CONTAINER_BOTTOM:
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR} ${CSS_CLASS.TOOLBAR_BOTTOM} ${CSS_CLASS.TOOLBAR_CONTAINER_BOTTOM} ${type === TOOLBAR_TYPE.SUB_CONTAINER_BOTTOM ? CSS_CLASS.TOOLBAR_SUB_CONTAINER_BOTTOM : ''}">
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.ADD_CONTENT}" title="${options.locale.addContentBelow}">${ICON.ADD_CONTENT}</a>
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.PASTE_CONTENT}" title="${options.locale.pasteContentBelow}">${ICON.PASTE_CONTENT}</a>
                </div>
            `);
        
        case TOOLBAR_TYPE.COMPONENT_BOTTOM:
            return (`
                <div class="${CSS_CLASS.UI} ${CSS_CLASS.TOOLBAR} ${CSS_CLASS.TOOLBAR_BOTTOM} ${CSS_CLASS.TOOLBAR_COMPONENT_BOTTOM}">
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.ADD_CONTENT}" title="${options.locale.addContentBelow}">${ICON.ADD_CONTENT}</a>
                    <a href="javascript:void(0)" class="${CSS_CLASS.UI} ${CSS_CLASS.PASTE_CONTENT}" title="${options.locale.pasteContentBelow}">${ICON.PASTE_CONTENT}</a>
                </div>
            `);
        
        default:
        // Do nothing
    }
};
