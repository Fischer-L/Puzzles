/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const N = nums.length + 1;
    let actualSum = nums.reduce((s, v) => s + v + 1, 0);
    let expectedSum = (N + 1) * N / 2;
    let missing = expectedSum - actualSum;
    return missing ? missing - 1 : 0;
};
