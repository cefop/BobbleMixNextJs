const getKeyByValue = (object, value) => {
    if (object.name.toLowerCase().includes(value) || object.item_categories[0].category.name === value) {
        return true;
    }
};
export default getKeyByValue;
