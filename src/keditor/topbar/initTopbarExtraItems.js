export default function () {
    let self = this;
    let options = self.options;
    let topbarRight = self.topbarRight;
    
    $.isPlainObject(options.extraTopbarItems) && $.each(options.extraTopbarItems, (name, item) => {
        let btn = $(item.html);
        btn.addClass(`keditor-ui keditor-topbar-btn keditor-topbar-btn-${name}`);
        btn.on('click', item.click);
        
        topbarRight.append(btn);
    });
};
