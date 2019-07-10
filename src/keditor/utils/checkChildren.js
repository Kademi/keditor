import CSS_CLASS from '../constants/cssClass';

export default function (target) {
    console.log(target)
    if (target.length === 0) {
        return;
    }
    
    let hasComponent = target.children().length > 0;
    target[hasComponent ? 'addClass' : 'removeClass'](CSS_CLASS.STATE_HAS_CHILDREN);
};
