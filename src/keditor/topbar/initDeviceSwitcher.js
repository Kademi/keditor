import CLASS_NAMES from '../constants/classNames';

export default function () {
    let self = this;
    let topbarCenter = self.topbarCenter;
    let options = self.options;
    
    let btnMobile = $(`
        <a href="javascript:void(0);" title="View on mobile" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">
            <i class="fa fa-fw fa-mobile"></i>
        </a>
    `);
    btnMobile.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', options.widthMobile);
        btnMobile.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnTablet = $(`
        <a href="javascript:void(0);" title="View on tablet" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON}">
            <i class="fa fa-fw fa-tablet"></i>
        </a>
    `);
    btnTablet.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', options.widthTablet);
        btnTablet.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    let btnDesktop = $(`
        <a href="javascript:void(0);" title="View on desktop" class="${CLASS_NAMES.UI} ${CLASS_NAMES.TOPBAR_BUTTON} ${CLASS_NAMES.STATE_ACTIVE}">
            <i class="fa fa-fw fa-desktop"></i>
        </a>
    `);
    btnDesktop.on('click', function (e) {
        e.preventDefault();
        
        topbarCenter.find(`.${CLASS_NAMES.STATE_ACTIVE}`).removeClass(CLASS_NAMES.STATE_ACTIVE);
        self.iframeWrapper.css('width', '');
        btnDesktop.addClass(CLASS_NAMES.STATE_ACTIVE);
    });
    
    topbarCenter.append(btnMobile);
    topbarCenter.append(btnTablet);
    topbarCenter.append(btnDesktop);
};
