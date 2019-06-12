import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let options = self.options;
    let sidebarId = self.generateId();
    
    let sidebar = self.sidebar = $(`
        <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SIDEBAR}" id="${sidebarId}">
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SIDEBAR_HEADER}">
                <span class="${CLASS_NAMES.UI} ${CLASS_NAMES.SIDEBAR_TITLE}"></span>
                <a href="javascript:void(0);" class="${CLASS_NAMES.UI} ${CLASS_NAMES.SIDEBAR_CLOSER}">&times;</a>
            </div>
            <div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SIDEBAR_BODY}"></div>
        </div>
    `);
    
    sidebar.find(`.${CLASS_NAMES.SIDEBAR_CLOSER}`).on('click', function (e) {
        e.preventDefault();
        
        self.closeSidebar();
    });
    
    let sidebarBody = sidebar.find(`.${CLASS_NAMES.SIDEBAR_BODY}`);
    sidebarBody.on('submit', 'form', function (e) {
        e.preventDefault();
        return false;
    });
    
    if (options.containerSettingEnabled === true) {
        if (typeof options.containerSettingInitFunction === 'function') {
            
            let form = $(`<div class="${CLASS_NAMES.UI} ${CLASS_NAMES.SETTING_FORM} ${CLASS_NAMES.SETTING_CONTAINER}"></div>`);
            sidebarBody.append(form);
            
            options.containerSettingInitFunction.call(self, form, self);
        } else {
            self.error('"containerSettingInitFunction" is not function!');
        }
    }
    
    sidebar.appendTo(self.wrapper);
};
