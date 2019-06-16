import TOOLBAR_TYPE from '../constants/toolbarType';

export default function (type, isComponentConfigurable) {
    let self = this;
    let options = self.options;
    let settingBtn = '';
    
    if (!options.explicitSnippetEnabled) {
        let toolbarClass = '';
        
        switch (type) {
            case TOOLBAR_TYPE.CONTENT_AREA:
                toolbarClass = 'keditor-content-area-toolbar';
            
            case TOOLBAR_TYPE.CONTAINER_CONTENT:
            case TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
                toolbarClass = 'keditor-container-content-toolbar';
                
                return (`
                    <div class="keditor-ui ${toolbarClass}">
                        <a href="javascript:void(0)" class="keditor-ui keditor-btn keditor-btn-default btn-add-content" title="Add content">${options.btnAddContentText}</a>
                    </div>
                `);
            
            default:
            // Do nothing
        }
    }
    
    switch (type) {
        case  TOOLBAR_TYPE.CONTENT_AREA:
            return (`
                <div class="keditor-ui keditor-content-area-toolbar">
                    <a href="javascript:void(0)" class="keditor-ui keditor-btn keditor-btn-default btn-add-container" title="Add container">${options.btnAddContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="keditor-ui btn-container-setting">${options.btnSettingContainerText}</a>`;
            }
            
            return (`
                <div class="keditor-toolbar keditor-toolbar-container">
                    <a href="javascript:void(0);" class="keditor-ui btn-container-reposition">${options.btnMoveContainerText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="keditor-ui btn-container-duplicate">${options.btnDuplicateContainerText}</a>
                    <a href="javascript:void(0);" class="keditor-ui btn-container-delete">${options.btnDeleteContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER:
            if (options.containerSettingEnabled === true) {
                settingBtn = `<a href="javascript:void(0);" class="keditor-ui btn-container-setting">${options.btnSettingContainerText}</a>`;
            }
            
            return (`
                <div class="keditor-toolbar keditor-toolbar-container keditor-toolbar-sub-container">
                    <a href="javascript:void(0);" class="keditor-ui btn-container-reposition">${options.btnMoveContainerText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="keditor-ui btn-container-duplicate">${options.btnDuplicateContainerText}</a>
                    <a href="javascript:void(0);" class="keditor-ui btn-container-delete">${options.btnDeleteContainerText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.CONTAINER_CONTENT:
            return (`
                <div class="keditor-ui keditor-container-content-toolbar keditor-btn-group">
                    <a href="javascript:void(0)" class="keditor-ui keditor-btn keditor-btn-default btn-add-container" title="Add sub-container">${options.btnAddSubContainerText}</a>
                    <a href="javascript:void(0)" class="keditor-ui keditor-btn keditor-btn-default btn-add-component" title="Add component">${options.btnAddComponentText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.SUB_CONTAINER_CONTENT:
            return (`
                <div class="keditor-ui keditor-container-content-toolbar">
                    <a href="javascript:void(0)" class="keditor-ui keditor-btn keditor-btn-default btn-add-component" title="Add component">${options.btnAddComponentText}</a>
                </div>
            `);
        
        case  TOOLBAR_TYPE.COMPONENT:
            if (isComponentConfigurable) {
                settingBtn = `<a href="javascript:void(0);" class="keditor-ui btn-component-setting">${options.btnSettingComponentText}</a>`;
            }
            
            return (`
                <div class="keditor-toolbar keditor-toolbar-component">
                    <a href="javascript:void(0);" class="keditor-ui btn-component-reposition">${options.btnMoveComponentText}</a>
                    ${settingBtn}
                    <a href="javascript:void(0);" class="keditor-ui btn-component-duplicate">${options.btnDuplicateComponentText}</a>
                    <a href="javascript:void(0);" class="keditor-ui btn-component-delete">${options.btnDeleteComponentText}</a>
                </div>
            `);
        
        default:
        // Do nothing
    }
};
