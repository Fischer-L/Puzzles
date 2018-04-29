/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let remains = nums.length - 1;
    for (let i = remains - 1; i >= 0; --i) {
        if (i + nums[i] >= remains) remains = i;
    }
    return remains === 0;
};
