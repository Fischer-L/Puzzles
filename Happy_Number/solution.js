/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = [n];
    while (n != 1) {
        n = squareSumdigits(extractDigits(n));
        if (seen.includes(n)) return false;
        seen.push(n);
    }
    return true;
    
    function extractDigits(n) {
        let digits = [];
        do {
            let m = n % 10;
            digits.push(m);
            n = (n - m) / 10;
        } while (n)
        return digits;
    }
    
    function squareSumdigits(digits) {
        return digits.reduce((s, v) => s + v ** 2, 0);
    }
};

