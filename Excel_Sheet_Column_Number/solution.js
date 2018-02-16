/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    const L = s.length;
    if (L == 0) return 0;
    
    let ans = 0;
    let col = buildColValues();
    s = s.toLowerCase();
    for (let i = 0, p = L - 1; i < L; ++i, --p) {
        ans += col[s[i]] * 26 ** p;
    }
    return ans;
};

var buildColValues = function() {
    var s = "abcdefghijklmnopqrstuvwxyz";
    let col = {};
    for (let i = 0; i <= 26; ++i) col[s[i]] = i + 1;
    return col;
}
