class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        final int L1 = nums1 == null ? 0 : nums1.length;
        final int L2 = nums2 == null ? 0 : nums2.length;
        final boolean odd = (L1 + L2) % 2 == 1;
        final int half = (L1 + L2) / 2;
        if (L1 == 0 && L2 == 0) {
            return 0.0;
        } else if (L1 == 0) {
            return odd ? nums2[half] : (nums2[half] + nums2[half - 1]) / 2.0;
        } else if (L2 == 0) {
            return odd ? nums1[half] : (nums1[half] + nums1[half - 1]) / 2.0;
        }
        
        int s = -1;
        int e = half;
        int leftMax = 0;
        int rightMin = 0;
        Double med = null;
        int[] left = new int[2];
        int[] right = new int[2];
        int[] longer = L1 >= L2 ? nums1 : nums2;
        int[] shorter = L1 >= L2 ? nums2 : nums1;
        
        while (s <= e) {
            left[0] = (s + e) / 2;
            left[1] = Math.max(half - left[0] - 2, -1);
            if (left[1] >= shorter.length) {
                s = left[0] + 1;
                continue;
            }
            
            right[0] = left[0] + 1;
            right[1] = left[1] + 1;
            if (odd) {
                if (right[0] >= longer.length) {
                    med = (double) shorter[right[1]];
                    right[1]++;
                } else if (right[1] >= shorter.length) {
                    med = (double) longer[right[0]];
                    right[0]++;
                } else {
                    if (longer[right[0]] > shorter[right[1]]) {
                        med = (double) shorter[right[1]];
                        right[1]++;
                    } else {
                        med = (double) longer[right[0]];
                        right[0]++;
                    }
                }
            } else {
                if (left[0] < 0) {
                    leftMax = shorter[left[1]];    
                } else if (left[1] < 0) {
                    leftMax = longer[left[0]]; 
                } else {
                    leftMax = Math.max(longer[left[0]], shorter[left[1]]);
                }

                if (right[0] >= longer.length) {
                    rightMin = shorter[right[1]];
                } else if (right[1] >= shorter.length) {
                    rightMin = longer[right[0]];
                } else {
                    rightMin = Math.min(longer[right[0]], shorter[right[1]]);
                }
                med = (leftMax + rightMin) / 2.0;
            }
            
            if (left[0] >= 0 && longer[left[0]] > med) {
                e = left[0] - 1;
            } else if (left[1] >= 0 && shorter[left[1]] > med) {
                s = left[0] + 1;
            } else if (right[0] < longer.length && longer[right[0]] < med) {
                s = left[0] + 1;
            } else if (right[1] < shorter.length && shorter[right[1]] < med) {
                e = left[0] - 1;
            } else {
                s = e + 1;
            }
        }
        return med;
    }
}
