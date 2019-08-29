import KEY_MAP from '../constants/keyMap';
import setCopyContent from '../utils/setCopyContent';
import setFullscreenMode from '../topbar/setFullscreenMode';

export default function () {
    let self = this;
    
    self.iframeDoc.on('keydown', function (e) {
        switch (e.keyCode) {
            case KEY_MAP.ESC:
                setCopyContent.call(self, null);
                setFullscreenMode.call(self, false);
                break;
            
            default:
            // Do nothing
        }
    });
};
