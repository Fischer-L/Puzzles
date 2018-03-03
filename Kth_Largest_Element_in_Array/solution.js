/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k = nums.length - k;
    if (k < 0) return -1;
    
    while (nums.length) {
        let [a ,b, pivot] = pivotPartition(nums);
        if (a.length == k) return pivot;
        if (a.length > k) {
            nums = a;
        } else {
            nums = b;
            k = k - a.length - 1;
        }
    }
    return -1;
};

var pivotPartition = function (nums) {
    let pivot = pickPivot(nums);
    let a = [];
    let b = [];
    for (let i = nums.length - 1; i >= 0; --i) {
        if (i != pivot) {
            if (nums[i] <= nums[pivot]) {
                a.push(nums[i]);
            } else {
                b.push(nums[i]);
            }
        }
    }
    return [a, b, nums[pivot]];
}

var pickPivot = function (nums) {
    let L = nums.length - 1;
    if (L <= 1) return L;
    
    let mid = Math.floor(L / 2);
    let a = nums[0];
    let b = nums[mid];
    let c = nums[L]
    if (a > b) {
        if (c > a) return 0;
        if (c > b) return L;
        return mid;
    } else {
        if (c > b) return mid;
        if (c > a) return L;
        return 0;
    }
}
