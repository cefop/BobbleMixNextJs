export const ContextRecipeName = (arr, x) => {
    if (arr.length !== 0) {
        const sortedArr = _.orderBy(arr[0], ['id'], ['asc']);
        const mn = sortedArr.map(
            (i, k) =>
                `${(x === 'n' && i.volume) || (x === 'p' && i.percent.toFixed(0))}${
                    x === 'p' ? '%' : ''
                }-${i.name.replace(/ /g, '-')}`
        );
        const nameRecipe = mn.length > 1 && mn.join(' / ');
        //! add 1 to first aroma if 3x 33.333
        // if (x === 'p' && arr[0].length === 3 && nameRecipe.match('^33%')) {
        //     const modnameRecipe = nameRecipe.replace('33%', '34%');
        //     return modnameRecipe;
        // } else {
        //     return nameRecipe;
        // }
        return nameRecipe;
    }
};
