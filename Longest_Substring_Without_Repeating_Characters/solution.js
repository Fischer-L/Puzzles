/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
    const L = str ? str.length : 0;
    if (L == 0) return 0;
    
    let s = 0;
    let e = 0;
    let longest = 0;
    let set = {};
    while (e < L) {
        let c = str[e];
        while (set[c]) delete set[str[s++]];
        set[c] = 1;
        longest = Math.max(longest, e - s + 1);
        e++;
    }
    return longest;
};
