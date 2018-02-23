/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let top = m + n - 1;
    while (i >= 0 && j >= 0) {
        let a = nums1[i];
        let b = nums2[j];
        if (a >= b) {
            nums1[top] = a;
            --i;
        } else {
            nums1[top] = b;
            --j;
        }
        --top;
    }
    while (j >= 0) {
        nums1[top] = nums2[j];
        --j;
        --top;
    }
};
