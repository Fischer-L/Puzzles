/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n = 0;
    let idx = 0;
    const L = nums ? nums.length : 0;
    for (let i = 0; i < L; i++) {
        n = nums[i];
        while (1 <= n && n <= L) {
            idx = n - 1;
            n = nums[idx];
            nums[idx] = Number.MIN_SAFE_INTEGER;
        }
    }
    
    let missing = 0;
    for (let i = 0; i < L; i++) {
        if (nums[i] !== Number.MIN_SAFE_INTEGER) return i + 1;
    }
    return L + 1;
};
