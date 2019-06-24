import CLASS_NAMES from '../constants/classNames';

export default function (containerContentInner) {
    if (containerContentInner.length === 0) {
        return;
    }
    
    let hasComponent = containerContentInner.children().length > 0;
    containerContentInner[hasComponent ? 'addClass' : 'removeClass'](CLASS_NAMES.STATE_HAS_COMPONENT);
};
