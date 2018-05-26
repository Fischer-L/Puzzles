class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        final int L1 = nums1 == null ? 0 : nums1.length;
        final int L2 = nums2 == null ? 0 : nums2.length;
        if (L1 == 0 && L2 == 0) return 0;
        
        final boolean odd = (L1 + L2) % 2 == 1;
        final int half = this.calMid(L1, L2);
        int s = -1;
        int e = half;
        Double med = null;
        int[] left = new int[2];
        int[] right = new int[2];
        int[] longer = L1 >= L2 ? nums1 : nums2;
        int[] shorter = L1 >= L2 ? nums2 : nums1;
        
        while (med == null) {
            left[0] = this.calMid(s, e);
            left[1] = Math.max(half - left[0] - 2, -1);
            if (left[1] >= shorter.length) {
                s = left[0] + 1;
                continue;
            }
            
            right[0] = left[0] + 1;
            right[1] = left[1] + 1;
            if (odd) {
                
            }
        }
    }
    
    private int calMid(int a, int b) {
        return (int) Math.floor((a + b) / 2);
    }
}
