class Solution {
    public int rob(int[] nums) {
        final int L = nums.length;
        if (L == 1) return nums[0];
        return Math.max(
            this.robByRange(nums, 0, L-2),
            this.robByRange(nums, 1, L-1)
        );
    }
    
    private int robByRange(int[] nums, int s, int e) {
        int p1 = 0;
        int p2 = 0;
        int current = 0;
        for (int i = s; i <= e; i++) {
            current = Math.max(p1, p2 + nums[i]);
            p2 = p1;
            p1 = current;
        }
        return current;
    }
}
