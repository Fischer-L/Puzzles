/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const L = nums ? nums.length : 0;
    if (L === 0) return 0;
    
    let e = 0;
    let s = L;
    let maxOnLeft = nums[0];
    let minOnRight = nums[L-1];
    for (let i = 0, j = L - 1; i < L; i++, j--) {
        maxOnLeft = Math.max(nums[i], maxOnLeft);
        minOnRight = Math.min(nums[j], minOnRight);
        // This is equal to Math.max/Math.min per the leetcode results
        // if (nums[i] > maxOnLeft) maxOnLeft = nums[i];
        // if (nums[j] < minOnRight) minOnRight = nums[j];
        
        if (nums[i] < maxOnLeft) e = i;
        if (nums[j] > minOnRight) s = j;
    }
    return e > s ? e - s + 1: 0;
};
