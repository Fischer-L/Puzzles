/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const L = s.length;
    let longest = "";
    if (L == 1) {
        longest = s;
    } else if (L > 1) {
        for (let k = 0; k < L; ++k) {
            let f = -1, e = -1;
            for (let i = k, j = k+1; i >= 0, j < L; --i, ++j) {
                if (s[i] === s[j]) {
                    f = i;
                    e = j;
                } else {
                    break;
                }
            }
            if (e - f + 1 > longest.length) longest = s.substring(f, e + 1);
        }
        for (let k = 1; k < L; ++k) {
            let f = k, e = k;
            for (let i = k - 1, j = k + 1; i >= 0, j < L; --i, ++j) {
                if (s[i] === s[j]) {
                    f = i;
                    e = j;
                } else {
                    break;
                }
            }
            if (e - f + 1 > longest.length) longest = s.substring(f, e + 1);
        }
    }
    return longest;
};

