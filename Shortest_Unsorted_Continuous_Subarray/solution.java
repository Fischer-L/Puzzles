class Solution {
    public int findUnsortedSubarray(int[] nums) {
        final int L = nums == null ? 0 : nums.length;
        if (L == 0) return 0;
        
        int n = 0;
        
        int minUnsortIdx = -1;
        int minUnsortvalue = Integer.MAX_VALUE;
        for (int i = 1; i < L; ++i) {
            n = nums[i];
            if (n < minUnsortvalue && n < nums[i-1]) {
                minUnsortIdx = i;
                minUnsortvalue = n;
            }
        }
        
        if (minUnsortIdx < 0) return 0;
        
        int maxUnsortIdx = -1;
        int maxUnsrotValue = Integer.MIN_VALUE;
        for (int i = L - 2; i >= 0; --i) {
            n = nums[i];
            if (n > maxUnsrotValue && n > nums[i+1]) {
                maxUnsortIdx = i;
                maxUnsrotValue = n;
            }
        }
        
        for (int i = 0; i < minUnsortIdx; ++i) {
            if (nums[i] > minUnsortvalue) {
                minUnsortIdx = i;
                break;
            }
        }
        for (int i = L - 1; i > maxUnsortIdx; --i) {
            if (nums[i] < maxUnsrotValue) {
                maxUnsortIdx = i;
                break;
            }
        }
        return maxUnsortIdx - minUnsortIdx + 1;
    }
}
