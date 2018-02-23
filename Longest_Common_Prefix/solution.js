/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const L = strs.length;
    let ans = "";
    let i = L ? 0 : -1;
    while (i >= 0) {
        let j = 0;
        let c = null;
        if (strs[j].length > i) {
            c = strs[j][i];
            ++j;
        }
        while (c && j < L) {
            if (i >= strs[j].length || c != strs[j][i]) break;
            ++j;
        }
        if (j >= L) {
            ans += c;
            ++i;
        } else {
            i = -1;
        }
    }
    return ans;
};
