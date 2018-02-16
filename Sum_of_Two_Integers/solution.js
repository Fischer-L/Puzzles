/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while ((a & b) != 0) {
        a = a ^ b;
        b = (b & (a ^ b)) << 1;
    }
    return a | b;
};
