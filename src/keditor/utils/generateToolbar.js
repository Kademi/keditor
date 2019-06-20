import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';
import ICONS from '../constants/icons';

export default function (type, isComponentConfigurable) {
    let self = this;
    let options = self.options;
    let settingBtn = '';
    
    if (!options.explicitSnippetEnabled) {
        let toolbarClass = '';
        
        switch (type) {
            case TOOLBAR_TYPE.CONTENT_AREA:
                toolbarClass = CLASS_NAMES.CONTENT_AREA_TOOLBAR;
            
            case TOOLBAR_TYPE.CONTAINER_CONTENT:
            case TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
                toolbarClass = CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR;
                
                return (`
                    <div class="${CLASS_NAMES.UI} ${toolbarClass}">
                        <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="Add content">${ICONS.ADD_CONTENT}</a>
                    </div>
                `);
            
            default:
            // Do nothing
        }
    }
    
    switch (type) {
        case  TOOLBAR_TYPE.CONTENT_AREA:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTENT_AREA_TOOLBAR}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTAINER}" title="Add container">${ICONS.ADD_CONTAINER}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_SETTING}">${ICONS.SETTING_CONTAINER}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_REPOSITION}">${ICONS.MOVE_CONTAINER}</a>
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
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER} ${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_SUB_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_REPOSITION}">${ICONS.MOVE_CONTAINER}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DUPLICATE}">${ICONS.DUPLICATE_CONTAINER}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DELETE}">${ICONS.DELETE_CONTAINER}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR} ${CLASS_NAMES.BTN_GROUP}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTAINER}" title="Add sub-container">${ICONS.ADD_CONTAINER}</a>
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_COMPONENT}" title="Add component">${ICONS.ADD_COMPONENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_COMPONENT}" title="Add component">${ICONS.ADD_COMPONENT}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.COMPONENT:
            if (isComponentConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_SETTING}">${ICONS.SETTING_COMPONENT}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_COMPONENT}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_REPOSITION}">${ICONS.MOVE_COMPONENT}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DUPLICATE}">${ICONS.DUPLICATE_COMPONENT}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DELETE}">${ICONS.DELETE_COMPONENT}</a>
                </div>
            `);
        
        default:
        // Do nothing
    }
};
