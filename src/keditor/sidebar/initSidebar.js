import CSS_CLASS from '../constants/cssClass';
import generateId from '../utils/generateId';
import closeSidebar from './closeSidebar';

export default function () {
    let self = this;
    let sidebarId = generateId();
    
    let sidebar = self.sidebar = $(`
        <div class="${CSS_CLASS.UI} ${CSS_CLASS.SIDEBAR}" id="${sidebarId}">
            <div class="${CSS_CLASS.UI} ${CSS_CLASS.SIDEBAR_HEADER}">
                <span class="${CSS_CLASS.UI} ${CSS_CLASS.SIDEBAR_TITLE}"></span>
                <a href="javascript:void(0);" class="${CSS_CLASS.UI} ${CSS_CLASS.SIDEBAR_CLOSER}">&times;</a>
            </div>
            <div class="${CSS_CLASS.UI} ${CSS_CLASS.SIDEBAR_BODY}"></div>
        </div>
    `);
    
    sidebar.find(`.${CSS_CLASS.SIDEBAR_CLOSER}`).on('click', function (e) {
        e.preventDefault();
        
        closeSidebar.call(self);
    });
    
    self.sidebarTitle = sidebar.find(`.${CSS_CLASS.SIDEBAR_TITLE}`);
    let sidebarBody = self.sidebarBody = sidebar.find(`.${CSS_CLASS.SIDEBAR_BODY}`);
    sidebarBody.on('submit', 'form', function (e) {
        e.preventDefault();
        return false;
    });
    
    sidebar.appendTo(self.wrapper);
};
