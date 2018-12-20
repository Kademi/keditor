export default function (target, ignoreAttributes, isArray) {
    let dataAttributes = isArray ? [] : {};
    if (!ignoreAttributes) {
        ignoreAttributes = [];
    }
    
    $.each(target.get(0).attributes, function (i, attr) {
        if (attr.name.indexOf('data-') === 0 && $.inArray(attr.name, ignoreAttributes) === -1) {
            if (isArray) {
                dataAttributes.push(`${attr.name}="${attr.value}"`);
            } else {
                dataAttributes[attr.name] = attr.value;
            }
        }
    });
    
    return dataAttributes;
};
