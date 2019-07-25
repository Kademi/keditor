import CSS_CLASS from '../constants/cssClass';

const getColByWidth = (grid, width) => {
    let closest;
    let minDiff;
    
    for (let i = 0; i < grid.length; ++i) {
        let diff = Math.abs(grid[i].width - width);
        
        if (!minDiff || diff < minDiff) {
            closest = i;
            minDiff = diff;
        } else {
            return grid[closest]['col'];
            
        }
    }
    
    return null;
};

export default function (container) {
    let self = this;
    let options = self.options;
    let cols = container.find('.row > [class*="col-"]');
    
    if (cols.length > 0) {
        cols.resizable({
            handles: 'resizer',
            create: function () {
                $(this).find(`.${CSS_CLASS.UI_RESIZER}`).attr('title', options.locale.columnResizeTitle);
            },
            resize: function () {
                let col = $(this);
                let deviceMode = self.deviceMode;
                let bsClass = `col-${deviceMode}-1 col-${deviceMode}-2 col-${deviceMode}-3 col-${deviceMode}-4 col-${deviceMode}-5 col-${deviceMode}-6 col-${deviceMode}-7 col-${deviceMode}-8 col-${deviceMode}-9 col-${deviceMode}-10 col-${deviceMode}-11 col-${deviceMode}-12`;
            
                let row = col.parent();
                let colNum = getColByWidth(options.bootstrap.gridSystem,100 * col.outerWidth() / row.innerWidth());
                col.removeClass(bsClass).addClass(`col-${deviceMode}-${colNum}`);
                col.css('width', '');
                col.css('height', '');
            }
        });
    }
};
