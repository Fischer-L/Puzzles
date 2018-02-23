/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let s = 1;
    let e = x;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        let m2 = m ** 2;
        if (x > m2) {
            s = m;
        } else if (x < m2) {
            e = m - 1;
        }
        if (x == m2) return m;
        if (s == e) return s;
        if (s + 1 == e) return x >= e ** 2 ? e : s;
    }
    return 0;
};
