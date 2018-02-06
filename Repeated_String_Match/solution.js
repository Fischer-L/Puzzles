/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var repeatedStringMatch = function(A, B) {
    const minTimes = Math.ceil(B.length / A.length);
    const regB = new RegExp(B);
    let repeat = A.repeat(minTimes);
    if (repeat.match(regB)) return minTimes;
    repeat += A;
    if (repeat.match(regB)) return minTimes + 1;
    return -1;
};
