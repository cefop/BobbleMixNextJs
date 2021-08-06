export const GroupByOccurence = (array, key) => {
    let occurenceArray = [];

    array.forEach((x) => {
        if (
            occurenceArray.some((val) => {
                return val[key] === x[key];
            })
        ) {
            occurenceArray.forEach((y) => {
                if (y[key] === x[key]) {
                    y.rating++;
                }
            });
        } else {
            const a = {};
            a[key] = x[key];
            a.createdAt = x.createdAt;
            a.name = x.name;
            a.nicotine = x.nicotine;
            a.volume = x.volume;
            a.rating = 1;
            occurenceArray = [...occurenceArray, a];
        }
    });
    return occurenceArray;
};
