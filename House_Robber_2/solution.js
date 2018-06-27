/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const L = nums.length;
    if (L == 1) return nums[0];
    return Math.max(
        robByRange(nums, 0, L-2),
        robByRange(nums, 1, L-1)
    );
};

function robByRange(nums, s, e) {
    let p1 = 0;
    let p2 = 0;
    let current = 0;
    for (let i = s; i <= e; ++i) {
        current = Math.max(p1, p2 + nums[i]);
        p2 = p1;
        p1 = current;
    }
    return current;
}
