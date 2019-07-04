import CSS_CLASS from '../constants/cssClass';

export default function (containerContentInner) {
    if (containerContentInner.length === 0) {
        return;
    }
    
    let hasComponent = containerContentInner.children().length > 0;
    containerContentInner[hasComponent ? 'addClass' : 'removeClass'](CSS_CLASS.STATE_HAS_COMPONENT);
};
