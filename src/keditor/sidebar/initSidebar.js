import error from "../utils/error";
import log from '../utils/log';

export default function () {
    let self = this;
    let options = self.options;
    let sidebarId = self.generateId('sidebar');
    
    let sidebar = self.sidebar = $(`
                <div class="keditor-ui keditor-sidebar" id="${sidebarId}">
                    <div class="keditor-ui keditor-sidebar-header">
                        <span class="keditor-ui keditor-sidebar-title"></span>
                        <a href="javascript:void(0);" class="keditor-ui keditor-sidebar-close">&times;</a>
                    </div>
                    <div class="keditor-ui keditor-sidebar-body"></div>
                </div>
            `);
    
    sidebar.find('.keditor-sidebar-close').on('click', function (e) {
        e.preventDefault();
        
        self.closeSidebar();
    });
    
    let sidebarBody = sidebar.find('.keditor-sidebar-body');
    sidebarBody.on('submit', 'form', function (e) {
        e.preventDefault();
        return false;
    });
    
    if (options.containerSettingEnabled === true) {
        if (typeof options.containerSettingInitFunction === 'function') {
            
            let form = $('<div  class="keditor-ui keditor-setting-form keditor-container-setting"></div>');
            sidebarBody.append(form);
            
            log('Initialize container setting panel');
            options.containerSettingInitFunction.call(self, form, self);
        } else {
            error('"containerSettingInitFunction" is not function!');
        }
    }
    
    sidebar.appendTo(options.iframeMode ? self.iframeWrapper : self.body);
};
