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
            handles: 'resizer, none',
            create: function () {
                $(this).find(`.${CSS_CLASS.UI_RESIZER}`).attr('title', options.locale.columnResizeTitle);
            },
            resize: function (e, ui) {
                let col = $(this);
                let deviceClass = options.bootstrap.deviceClass[self.deviceMode];
                let bsClass = `col-${deviceClass}-1 col-${deviceClass}-2 col-${deviceClass}-3 col-${deviceClass}-4 col-${deviceClass}-5 col-${deviceClass}-6 col-${deviceClass}-7 col-${deviceClass}-8 col-${deviceClass}-9 col-${deviceClass}-10 col-${deviceClass}-11 col-${deviceClass}-12`;
    
                let row = col.parent();
                let colNum = getColByWidth(options.bootstrap.gridSystem,100 * ui.size.width / row.innerWidth());
                col.removeClass(bsClass).addClass(`col-${deviceClass}-${colNum}`);
                col.css('width', '');
                col.css('height', '');
            }
        });
    }
};
