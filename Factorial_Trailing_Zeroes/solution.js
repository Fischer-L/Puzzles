/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let fives = 0;
    let i = 5;
    while (i <= n) {
        fives += Math.floor(n / i);
        i = i * 5;
    }
    return fives;
};
