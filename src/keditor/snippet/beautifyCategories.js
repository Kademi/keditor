export default function (categories) {
    let newArray = [];
    for (let i = 0; i < categories.length; i++) {
        let category = categories[i] || '';
        
        if (category !== '' && $.inArray(category, newArray) === -1) {
            newArray.push(category);
        }
    }
    
    return newArray.sort();
};
