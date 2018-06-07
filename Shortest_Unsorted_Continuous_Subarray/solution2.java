class Solution {
    public int findUnsortedSubarray(int[] nums) {
        final int L = nums == null ? 0 : nums.length;
        if (L == 0) return 0;
        
        int e = 0;
        int s = L;
        int maxOnLeft = nums[0];
        int minOnRight = nums[L-1];
        for (int i = 0, j = L - 1; i < L; i++, j--) {
            // maxOnLeft = Math.max(nums[i], maxOnLeft);
            // minOnRight = Math.min(nums[j], minOnRight);
            // This is faster than Math.max/Math.min per the leetcode results
            if (nums[i] > maxOnLeft) maxOnLeft = nums[i];
            if (nums[j] < minOnRight) minOnRight = nums[j];
            
            // The i-th number should >= the left-side max.
            // If not, the position is wrong.
            if (nums[i] < maxOnLeft) e = i;
            // The j-th number should <= the right-side min.
            // If not, the position is wrong.
            if (nums[j] > minOnRight) s = j;
        }
        return e > s ? e - s + 1 : 0;
    }
}
