const gridSystem = [{
    width: 8.33333333,
    col: 1
}, {
    width: 16.66666667,
    col: 2
}, {
    width: 25,
    col: 3
}, {
    width: 33.33333333,
    col: 4
}, {
    width: 41.66666667,
    col: 5
}, {
    width: 50,
    col: 6
}, {
    width: 58.33333333,
    col: 7
}, {
    width: 66.66666667,
    col: 8
}, {
    width: 75,
    col: 9
}, {
    width: 83.33333333,
    col: 10
}, {
    width: 91.66666667,
    col: 11
}, {
    width: 100,
    col: 12
}, {
    width: 10000,
    col: 10000
}];

const getColByWidth = (width) => {
    let closest;
    let minDiff;
    
    for (let i = 0; i < gridSystem.length; ++i) {
        let diff = Math.abs(gridSystem[i].width - width);
        
        if (!minDiff || diff < minDiff) {
            closest = i;
            minDiff = diff;
        } else {
            return gridSystem[closest]['col'];
            
        }
    }
    
    return null;
};

export default function (container) {
    let self = this;
    let cols = container.find('.row > [class*="col-"]');
    
    cols.length > 0 && cols.resizable({
        handles: 'resizer',
        resize: function (e, ui) {
            let col = $(this);
            let deviceMode = self.deviceMode;
            let bsClass = `col-${deviceMode}-1 col-${deviceMode}-2 col-${deviceMode}-3 col-${deviceMode}-4 col-${deviceMode}-5 col-${deviceMode}-6 col-${deviceMode}-7 col-${deviceMode}-8 col-${deviceMode}-9 col-${deviceMode}-10 col-${deviceMode}-11 col-${deviceMode}-12`;
            
            let row = col.parent();
            let colNum = getColByWidth(100 * col.outerWidth() / row.innerWidth());
            col.removeClass(bsClass).addClass(`col-${deviceMode}-${colNum}`);
            col.css('width', '');
            col.css('height', '');
        }
    });
};
