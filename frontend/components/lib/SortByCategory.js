const SortByCategory = (c, i) => {
    const items = i.map((item) => {
        return item.item_categories[0].category.name;
    });
    return c.filter((category) => items.includes(category.name));
};
export default SortByCategory;
