/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(str, wordDict) {
    let dp = [];
    for (let i = 0; i < str.length; ++i) dp.push(false);
    for (let i = 0; i < str.length; ++i) {
        for (let j = 0; j < wordDict.length; ++j) {
            let w = wordDict[j];
            let e = i + 1;
            let s = e - w.length;
            if (s >= 0) {
                let sub = str.slice(s, e);
                if (sub == w) {
                    console.log(sub);
                    let k = s - 1;
                    if (k < 0 || dp[k]) {
                        dp[i] = true;
                    }
                }
            }
        }
    }
    console.log(dp);
    return !!dp[dp.length - 1];
};

