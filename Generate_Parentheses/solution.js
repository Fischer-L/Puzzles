/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let ans = genParentheses(n * 2);
    return ans;
};

var combinationCache = {};

var genParentheses = function (n) {
    if (n <= 1) return null;
    if (combinationCache[n]) return combinationCache[n];
    
    let totalCombs = [];
    for (let s = 0, m = 1; m < n; m += 2) {
        let combs = [];
        let frontCombs = genParentheses(m - s - 1);
        if (frontCombs) {
            frontCombs.forEach(c => combs.push(`(${c})`));
        } else {
            combs.push("()");
        }
        let tailCombs = genParentheses(n - m - 1);
        if (tailCombs) {
            combs = combs.reduce((newCombs, front) => {
                tailCombs.forEach(c => newCombs.push(front + c));
                return newCombs;
            }, []);
        }
        totalCombs = totalCombs.concat(combs);
    }
    
    combinationCache[n] = totalCombs;
    return totalCombs;
}
