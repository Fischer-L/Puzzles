class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        final int L1 = nums1 == null ? 0 : nums1.length;
        final int L2 = nums2 == null ? 0 : nums2.length;
        if (L1 == 0 && L2 == 0) return 0;
        
        final int L = L1 + L2;
        int half = (int) Math.floor(L/2);
        int[] longer = nums1;
        int[] shorter = nums2;
        if (L1 < L2) {
            longer = nums2;
            shorter = nums1;
        }
        
        int right = this.searchNumByCount(0, longer.length-1, longer, 0, shorter.length-1, shorter, half);
        int left = right;
        if (L % 2 == 0) {
            left = this.searchNumByCount(0, longer.length-1, longer, 0, shorter.length-1, shorter, half-1);
        }
        return (left + right) / 2.0;
    }
    
    private int searchNumByCount(int s1, int e1, int[] longer, int s2, int e2, int[] shorter, int count) {
        if (s1 > e1 || s2 > e2) {
            int i = 0;
            int[] nums = null;
            if (s1 > e1) {
                nums = shorter;
                i = count - s1;
            } else {
                nums = longer;
                i = count - s2;
            }
            return nums[i];
        }
        
        int m1 = (int) Math.floor((s1 + e1) / 2);
        int[] range = this.findRange(s2, e2, shorter, longer[m1]);
        int leftCount = m1 + range[1];
        if (count < leftCount) {
            return this.searchNumByCount(s1, m1-1, longer, s2, range[0], shorter, count);
        } else if (count > leftCount) {
            return this.searchNumByCount(m1+1, e1, longer, range[1], e2, shorter, count);
        } else {
            return longer[m1];
        }
    }
    
    private int[] findRange(int s, int e, int[] nums, int target) {
        while (s <= e) {
            int m = (int) Math.floor((s + e) / 2);
            int v = nums[m];
            if (v < target) {
                s = m + 1;
            } else {
                e = m - 1;
            }
        }
        return new int[] {e, s};
    }
}
