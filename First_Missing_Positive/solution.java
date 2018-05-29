class Solution {
    public int firstMissingPositive(int[] nums) {
        int n = 0;
        int idx = 0;
        final int L = nums == null ? 0 : nums.length;
        for (int i = 0; i < L; ++i) {
            n = nums[i];
            while (1 <= n && n <= L) {
                idx = n - 1;
                n = nums[idx];
                nums[idx] = Integer.MIN_VALUE;
            }
        }
        
        for (int i = 0; i < L; ++i) {
            if (nums[i] != Integer.MIN_VALUE) return i + 1;
        }
        return L + 1; 
    }
}
