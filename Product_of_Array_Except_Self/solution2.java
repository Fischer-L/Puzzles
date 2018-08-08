class Solution {
    public int[] productExceptSelf(int[] nums) {
        final int L = nums == null ? 0 : nums.length;
        if (L <= 0) return null;
        
        int[] ans = new int[L];
        ans[0] = 1;
        
        for (int i = 1; i < L; i++) {
            ans[i] = ans[i-1] * nums[i-1];
        }
        for (int i = L-2, buf = 1; i >= 0; i--) {
            buf = buf * nums[i+1];
            ans[i] = ans[i] * buf;
        }
        return ans;
    }
}
