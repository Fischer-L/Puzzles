/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
    let ans = [];
    S = S.split("-").join("").toUpperCase();
    let i = S.length;
    do {
        i -= K;
        if (i >= 0) {
          ans.push(S.substr(i, K));
        } else {
            if (i + K > 0) ans.push(S.substr(0, i + K));
        }
    } while (i >= 0)
    return ans.reverse().join("-");
};
