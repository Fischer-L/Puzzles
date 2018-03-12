/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
    return findLongestCount(s, k, 0, s.length - 1);
};

var findLongestCount = function (s, k, start, end) {
    if (s.length < k || end - start + 1 < k || start > end) return 0;
        
    let frequency = {};
    let charLessThanK = new Set();
    for (let i = start; i <= end; ++i) {
        let c = s[i];
        if (!frequency[c]) frequency[c] = 0;
        ++frequency[c];
        if (frequency[c] < k) {
            charLessThanK.add(c);
        } else {
            charLessThanK.delete(c);
        }
    }
    
    if (charLessThanK.size === 0) return end - start + 1;
    
    let count = 0;
    let j = start, i = j;
    while (j <= end) {
        if (charLessThanK.has(s[j])) {
            count = Math.max(count, findLongestCount(s, k, i, j - 1));
            i = ++j;
        } else {
            ++j;
        }
    }
    if (i < j) {
        count = Math.max(count, findLongestCount(s, k, i, j - 1));
    }
    return count;
};
