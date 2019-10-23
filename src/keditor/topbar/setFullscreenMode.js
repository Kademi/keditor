import enterFullscreen from '../utils/enterFullscreen';
import exitFullscreen from '../utils/exitFullscreen';

export default function (isOn) {
    let self = this;
    
    if (isOn) {
        enterFullscreen(self.wrapper[0]);
    } else {
        exitFullscreen();
    }
};
