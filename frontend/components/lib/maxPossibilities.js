// combination of n and r
// The formula is : n!/(r!*(n - r)!).
export function productRange(a, b) {
    let prd = a;
    let i = a;
    while (i++ < b) {
        prd *= i;
    }
    return prd;
}
export default function combinations(n, r, x) {
    if (n === r) {
        return 1;
    }
    const pr = r < n - r ? n - r : r;
    if (x > 0) {
        // rounded by x
        return Math.ceil(productRange(pr + 1, n) / productRange(1, n - pr) / -x) * -x;
    } else {
        // not rounded
        return Math.ceil(productRange(pr + 1, n) / productRange(1, n - pr));
    }
}
