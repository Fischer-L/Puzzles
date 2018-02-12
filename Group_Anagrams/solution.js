/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dict = {};
    for (let i = strs.length - 1; i >= 0; --i) {
        let s = strs[i];
        let sl = s.length;
        let target = s.split("").sort().join("");
        let subDict = dict[sl];
        if (!subDict) {
            dict[sl] = { [target]: [s] };
        } else {
            if (subDict[target]) {
                subDict[target].push(s);
            } else {
                subDict[target] = [s];
            }
        }
    }
    let ans = [];
    for (let k in dict) {
        let subDict = dict[k];
        for (let k2 in subDict) ans.push(subDict[k2]);
    }
    return ans;
};

