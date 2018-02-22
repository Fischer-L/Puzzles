/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let m1 = 0; // The money at the odd number house
    let m2 = 0; // The money at the even number house
    for (let i = 0; i < nums.length; ++i) {
        if (i % 2) {
            m1 = Math.max(m1 + nums[i], m2);
        } else {
            m2 = Math.max(m2 + nums[i], m1);
        }
    }
    return Math.max(m1, m2);
};
