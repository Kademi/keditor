import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';

export default function (type, isComponentConfigurable) {
    let self = this;
    let options = self.options;
    let settingBtn = '';
    
    switch (type) {
        case  TOOLBAR_TYPE.CONTENT_AREA:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOOLBAR_CONTENT_AREA}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="${options.locale.addContent}">${ICONS.ADD_CONTENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_SETTING}">${ICONS.SETTING_CONTAINER}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE}">${ICONS.MOVE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE_UP}">${ICONS.MOVE_UP_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE_DOWN}">${ICONS.MOVE_DOWN_CONTAINER}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DUPLICATE}">${ICONS.DUPLICATE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DELETE}">${ICONS.DELETE_CONTAINER}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_SETTING}">${ICONS.SETTING_CONTAINER}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER} ${CLASS_NAMES.TOOLBAR_SUB_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE}">${ICONS.MOVE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE_UP}">${ICONS.MOVE_UP_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_MOVE_DOWN}">${ICONS.MOVE_DOWN_CONTAINER}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DUPLICATE}">${ICONS.DUPLICATE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DELETE}">${ICONS.DELETE_CONTAINER}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER_BOTTOM:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOOLBAR_SUB_CONTAINER_BOTTOM}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="${options.locale.addContent}">${ICONS.ADD_CONTENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOOLBAR_CONTAINER_CONTENT}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="${options.locale.addContent}">${ICONS.ADD_CONTENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOOLBAR_CONTAINER_CONTENT}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="${options.locale.addContent}">${ICONS.ADD_CONTENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.COMPONENT:
            if (isComponentConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_SETTING}">${ICONS.SETTING_COMPONENT}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_COMPONENT}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_MOVE}">${ICONS.MOVE_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_MOVE_UP}">${ICONS.MOVE_UP_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_MOVE_DOWN}">${ICONS.MOVE_DOWN_COMPONENT}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DUPLICATE}">${ICONS.DUPLICATE_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DELETE}">${ICONS.DELETE_COMPONENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.COMPONENT_BOTTOM:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOOLBAR_COMPONENT_BOTTOM}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="${options.locale.addContent}">${ICONS.ADD_CONTENT}</a>
                </div>
            `);
        
        default:
        // Do nothing
    }
};
