const generateId = (type = '') => {
    let timestamp = (new Date()).getTime();
    let random = Math.round(Math.random() * 9876543210);
    return `keditor-${type}-${timestamp}${random}`;
};

export default generateId;