import CLASS_NAMES from '../constants/classNames';
import generateId from '../utils/generateId';
import closeSidebar from './closeSidebar';

export default function () {
    let self = this;
    let sidebarId = generateId();
    
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
        
        closeSidebar.call(self);
    });
    
    self.sidebarTitle = sidebar.find(`.${CLASS_NAMES.SIDEBAR_TITLE}`);
    let sidebarBody = self.sidebarBody = sidebar.find(`.${CLASS_NAMES.SIDEBAR_BODY}`);
    sidebarBody.on('submit', 'form', function (e) {
        e.preventDefault();
        return false;
    });
    
    sidebar.appendTo(self.wrapper);
};
