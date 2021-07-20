const CustomReduceFilter = (array) => {
    const count = array.reduce((obj, i) => {
        obj[i.id] = (obj[i.id] || 0) + 1;
        return obj;
    }, {});

    const results = Object.keys(count)
        .filter((i) => count[i] >= 1)
        .map((i) => ({
            id: i,
            quantity: count[i],
            volume: count[i] * 10,
        }));
    return results;
};
export default CustomReduceFilter;
