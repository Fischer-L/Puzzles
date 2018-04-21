/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for (let i = 0; i < nums.length; ++i) {
        let k = Math.abs(nums[i]) - 1;
        let v = nums[k];
        if (v > 0) nums[k] = -1 * v;
    }
    let missing = [];
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) missing.push(i + 1);
    }
    return missing;
};
