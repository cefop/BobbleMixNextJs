const getObjectByValue = (array, key, value) => {
    return array.filter((object) => object[key] === parseInt(value));
};
export default getObjectByValue;
