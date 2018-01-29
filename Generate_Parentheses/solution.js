/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let s = 0; // start
    let e = (n * 2) - 1; // end
    let ans = genParentheses(s, e);
    return ans;
};

var combinationCache = {};

var genParentheses = function (s, e) {
    if (s >= e)  return null;
    
    let comb = combinationCache[s + "-" + e];
    if (comb) return comb;
    
    let frontCombinations = null;
    let tailCombinations = null;
    for (let i = s + 1; i < e; s += 2) {
        frontCombinations = genParentheses(s, i);
        if (e - i + 1 > 1) {
            tailCombinations = genParentheses(i + 1, e);
        }
    }
    comb = [];
    if (frontCombinations) {
        let len = frontCombinations.length - 1;
        for (let i = 0; i < len; ++i) {
            comb.push(`(${frontCombinations[i]})`);
        }
    }
    if (tailCombinations) {
        let buf = [];
        let cLen = comb.length - 1;
        let tLen = tailCombinations.length - 1;
        for (let i = 0; i < cLen; ++i) {
            let c = comb[i];
            for (let j = 0; j < tLen; ++j) {
                buf.push(c + tailCombinations[j]);
            }
        }
        comb = buf;
    }
    if (comb.length == 0) comb = ["()"];
    combinationCache[s + "-" + e] = comb;
    return comb;
}
