/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const L1 = nums1 ? nums1.length : 0;
    const L2 = nums2 ? nums2.length : 0;
    const odd = (L1 + L2) % 2 === 1;
    const half = calHalf(L1, L2);
    if (L1 === 0 && L2 === 0) {
        return 0;
    } else if (L1 === 0) {
        return odd ? nums2[half] : calHalf(nums2[half], nums2[half-1]);
    } else if (L2 === 0) {
        return odd ? nums1[half] : calHalf(nums1[half], nums1[half-1]);
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
        left[0] = calHalf(s, e);
        left[1] = half - left[0] - 2;
    }
    return med;
};

function calHalf(a, b) {
    return Math.floor((a + b) / 2);
}
