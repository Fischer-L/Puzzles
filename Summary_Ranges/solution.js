/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const L = nums.length;
    if (L <= 0) return [];
    
    let ranges = [[nums[0], nums[0]]];
    for (let i = 1; i < L; ++i) {
        if (nums[i] == nums[i-1] + 1) {
            let r = ranges[ranges.length - 1];
            r[1] = nums[i];
            ranges[ranges.length - 1] = r;
        } else {
            ranges.push([nums[i], nums[i]]);
        }
    }
    return ranges.map(r => {
        return r[0] == r[1] ? "" + r[0] : r[0] + "->" + r[1];
    });
};
