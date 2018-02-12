/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0, j = 0;
    while (j < n) {
        let v1 = nums1[i];
        let v2 = nums2[j];
        if (v1 >= v2) {
            nums1.splice(i, 0, v2);
            ++j;
        }
        if (i < nums1.length - 1) ++i;
    }
};
