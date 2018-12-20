export default function (event, selector) {
    let target = $(event.target);
    let closest = target.closest(selector);
    
    if (target.is(selector)) {
        return target;
    } else if (closest.length > 0) {
        return closest;
    } else {
        return null;
    }
};
