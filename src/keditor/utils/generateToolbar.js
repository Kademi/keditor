import TOOLBAR_TYPE from '../constants/toolbarType';
import CLASS_NAMES from '../constants/classNames';

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
                        <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTENT}" title="Add content">${options.btnAddContentText}</a>
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
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTAINER}" title="Add container">${options.btnAddContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_SETTING}">${options.btnSettingContainerText}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_REPOSITION}">${options.btnMoveContainerText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DUPLICATE}">${options.btnDuplicateContainerText}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DELETE}">${options.btnDeleteContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_SETTING}">${options.btnSettingContainerText}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_CONTAINER} ${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_SUB_CONTAINER}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_REPOSITION}">${options.btnMoveContainerText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DUPLICATE}">${options.btnDuplicateContainerText}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_DELETE}">${options.btnDeleteContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR} ${CLASS_NAMES.BTN_GROUP}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_CONTAINER}" title="Add sub-container">${options.btnAddSubContainerText}</a>
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_COMPONENT}" title="Add component">${options.btnAddComponentText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
            return (`
                <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.CONTAINER_CONTENT_TOOLBAR}">
                    <a href="javascript:void(0)" class="${CLASS_NAMES.UI} ${CLASS_NAMES.BTN} ${CLASS_NAMES.BTN_DEFAULT} ${CLASS_NAMES.ADD_COMPONENT}" title="Add component">${options.btnAddComponentText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.COMPONENT:
            if (isComponentConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_SETTING}">${options.btnSettingComponentText}</a>`;
            }
            
            return (`
                <div class="${CLASS_NAMES.TOOLBAR} ${CLASS_NAMES.TOOLBAR_COMPONENT}">
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_REPOSITION}">${options.btnMoveComponentText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DUPLICATE}">${options.btnDuplicateComponentText}</a>
                    <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.COMPONENT_DELETE}">${options.btnDeleteComponentText}</a>
                </div>
            `);
        
        default:
        // Do nothing
    }
};
