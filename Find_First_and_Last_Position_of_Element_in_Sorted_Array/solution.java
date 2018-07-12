class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = -1;
        int last = -1;
        
        int v = 0;
        int s = 0;
        int m = -1;
        int e = nums == null ? -1 : nums.length - 1;
        while (s <= e) {
            m = (s + e) / 2;
            v = nums[m];
            if (target > v) {
                s = m + 1;
            } else if (target < v) {
                e = m - 1;
            } else {
                first = m;
                if (m > 0 && nums[m-1] == target) {
                    first = this.searchFirstPos(target, nums, s, m-1);
                }
                last = m;
                if (m < nums.length - 1 && nums[m+1] == target) {
                    last = this.searchLastPos(target, nums, m+1, e);
                }
                return new int[] {first, last};
            }
        }
        return new int[] {-1, -1};
    }
    
    private int searchFirstPos(int target, int[] nums, int s, int e) {
        int v = 0;
        int m = -1;
        while (s <= e) {
            m = (s + e) / 2;
            v = nums[m];
            if (target > v) {
                s = m + 1;
            } else if (target < v) {
                e = m -1;
            } else {
                if (m > 0 && nums[m-1] == target) {
                    e = m - 1;
                } else {
                    return m;
                }
            }
        }
        return -1;
    }
    
    private int searchLastPos(int target, int[] nums, int s, int e) {
        int v = 0;
        int m = -1;
        final int L = nums.length - 1;
        while (s <= e) {
            m = (s + e) / 2;
            v = nums[m];
            if (target > v) {
                s = m + 1;
            } else if (target < v) {
                e = m - 1;
            } else {
                if (m < L && nums[m+1] == target) {
                   s = m + 1; 
                } else {
                    return m;
                }
            }
        }
        return -1;
    }
}
