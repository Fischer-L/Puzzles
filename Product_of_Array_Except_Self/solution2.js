/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const L = nums ? nums.length : 0;
    if (L <= 0) return [];
    
    const ans = nums.slice();
    ans[0] = 1;
    
    for (let i = 1; i < L; i++) {
        ans[i] = ans[i-1] * nums[i-1];
    }
    
    for (let i = L-2, buf = 1; i >= 0; i--) {
        buf = buf * nums[i+1];
        ans[i] = ans[i] * buf;
    }
    return ans;
};
