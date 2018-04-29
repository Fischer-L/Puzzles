class Solution {
    public boolean canJump(int[] nums) {
        int maxRight = 0;
        int end = nums.length - 1;
        for (int i = 0; i <= end; ++i) {
            if (i <= maxRight) maxRight = Math.max(maxRight, i + nums[i]);
            if (maxRight >= end) return true;
        }
        return false;
    }
}
