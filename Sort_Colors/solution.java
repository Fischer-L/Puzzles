class Solution {
    public void sortColors(int[] nums) {
        final int L = nums != null ? nums.length : -1;
        if (L <= 1) return;
        
        int first1s = 0;
        int first2s = L;
        for (int i = 0; i < first2s; i++) {
            int n = nums[i];
            if (n == 0) {
                this.swap(nums, i, first1s);
                first1s++;
            } else if (n == 2) {
                first2s--;
                this.swap(nums, i, first2s);
                i--;
            }
        }
    }
    
    private void swap(int[] nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
}
