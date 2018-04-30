/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let sign = 1;
    if (dividend < 0) {
        sign = -1;
        dividend = Math.abs(dividend);
    }
    if (divisor < 0) {
        sign = sign < 0 ? 1 : -1;
        divisor = Math.abs(divisor);
    }
    if (dividend < divisor) return 0;
    if (dividend === divisor) return sign > 0 ? 1 : -1;
    
    let q = 0;
    let d = divisor;
    while (dividend > d) {
        if (MAX_INT - d < d) break;
        d <<= 1;
        q++;
        if (dividend < d) q--;
    }
    dividend -= divisor << q;
    
    let quo = 1 << q;
    let rest = divide(dividend, divisor);
    if (sign > 0) {
        let diff = MAX_INT - quo;
        if (rest > diff) rest = diff;
    } else {
        quo = -quo;
        rest = -rest;
        let diff = MIN_INT - quo;
        if (rest < diff) rest = diff;
    }
    return quo + rest;
};

const MIN_INT = (-2) ** 31;
const MAX_INT = (2 ** 31) - 1;
