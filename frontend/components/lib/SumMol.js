const sumMol = (mixmol) => {
    const arr = mixmol.map((x) => x.retenu);
    const sm = arr.reduce((a, b) => a + b);
    return Number(sm);
};
export default sumMol;
