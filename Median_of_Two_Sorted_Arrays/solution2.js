/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const L1 = nums1 ? nums1.length : 0;
    const L2 = nums2 ? nums2.length : 0;
    const odd = (L1 + L2) % 2 === 1;
    const half = Math.floor((L1 + L2) / 2);
    if (L1 === 0 && L2 === 0) {
        return 0;
    } else if (L1 === 0) {
        return odd ? nums2[half] : (nums2[half] + nums2[half-1]) / 2;
    } else if (L2 === 0) {
        return odd ? nums1[half] : (nums1[half] + nums1[half-1]) / 2;
    }
    
    let s = -1;
    let e = half;
    let med = 0;
    let leftMax = 0;
    let rightMin = 0;
    let left = [];
    let right = [];
    let longer = L1 >= L2 ? nums1 : nums2;
    let shorter = L1 >= L2 ? nums2 : nums1;
    
    while (s <= e) {
        left[0] = Math.floor((s + e) / 2);
        left[1] = half - left[0] - 2;
        if (left[1] >= shorter.length) {
            s = left[0] + 1;
            continue;
        }
        
        right[0] = left[0] + 1;
        right[1] = left[1] + 1;
        if (odd) {
            if (right[0] >= longer.length) {
                med = shorter[right[1]];
                right[1]++;
            } else if (right[1] >= longer.length) {
                med = longer[right[0]];
                right[0]++;
            } else {
                if (longer[right[0]] < shorter[right[1]]) {
                    med = longer[right[0]];
                    right[0]++;
                } else {
                    med = shorter[right[1]];
                    right[1]++;
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
            med = (leftMax + rightMin) / 2;
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
};
