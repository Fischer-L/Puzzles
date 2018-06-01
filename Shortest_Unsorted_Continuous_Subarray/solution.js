/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const L = nums ? nums.length : 0;
    if (L == 0) return 0;
    
    let n = 0;
    
    let minUnsortIdx = -1;
    let minUnsortValue = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < L; ++i) {
        n = nums[i];
        if (n < minUnsortValue && n < nums[i-1]) {
            minUnsortIdx = i;
            minUnsortValue = n;
        }
    }
    
    if (minUnsortIdx < 0) return 0;
    
    let maxUnsortIdx = -1;
    let maxUnsortValue = Number.MIN_SAFE_INTEGER;
    for (let i = L-2; i >= 0; --i) {
        n = nums[i];
        if (n > maxUnsortValue && n > nums[i+1]) {
            maxUnsortIdx = i;
            maxUnsortValue = n;
        }
    }
    
    minUnsortIdx = nums.findIndex(n => n > minUnsortValue);
    for (let i = L-1; i > maxUnsortIdx; --i) {
        if (nums[i] < maxUnsortValue) {
            maxUnsortIdx = i;
            break;
        }
    }
    return maxUnsortIdx - minUnsortIdx + 1;
};
