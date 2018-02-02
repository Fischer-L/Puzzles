/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    digits = [...digits];
    let lettersCombs = [];
    digits.forEach(d => {
        let letters = digitToLetters(+d);
        if (d) lettersCombs.push(letters);
    });
    let prevAns, ans;
    let combs = lettersCombs.shift();
    if (combs) ans = combs;
    while (combs = lettersCombs.shift()) {
        prevAns = ans;
        ans = [];
        prevAns.forEach(str => {
            combs.forEach(l => {
                ans.push(str + l);
            });
        });
    }
    return ans;
};

var digitToLetters = function(digit) {
    switch (digit) {
        case 2: return ["a", "b", "c"];
        case 3: return ["d", "e", "f"];
        case 4: return ["g", "h", "i"];
        case 5: return ["j", "k", "l"];
        case 6: return ["m", "n", "o"];
        case 7: return ["p", "q", "r", "s"];
        case 8: return ["t", "u", "v"];
        case 9: return ["w", "x", "y", "z"];
        default: return null;
    }
}
