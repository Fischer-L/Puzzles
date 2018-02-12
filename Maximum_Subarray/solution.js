/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    let maxTillHere = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        maxTillHere = Math.max(maxTillHere + nums[i], nums[i]);
        max = Math.max(max, maxTillHere);
    }
    return max;
};
