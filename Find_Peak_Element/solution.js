/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    return searchPeak(nums, 0, nums.length - 1);
};

var searchPeak = function(nums, floor, ceiling) {
    if (floor > ceiling) return -1;
    
    let mid = Math.floor((floor + ceiling) / 2);
    let m = nums[mid];
    
    let cmpToLeft = "greater";
    if (mid - 1 >= 0) {
        let l = nums[mid - 1];
        if (m < l) {
            cmpToLeft = "smaller";
        } else if (m == l) {
            cmpToLeft = "equal";
        }
    }
    
    let cmpToRight = "greater";
    if (mid + 1 < nums.length) {
        let r = nums[mid + 1];
        if (m < r) {
            cmpToRight = "smaller";
        } else if (m == r) {
            cmpToRight = "equal";
        }
    }
    
    if (cmpToLeft == "greater" && cmpToRight == "greater") {
        return mid;
    }
    
    if (cmpToLeft == "smaller") {
        return searchPeak(nums, floor, mid - 1);
    }
    
    if (cmpToRight == "smaller") {
        return searchPeak(nums, mid + 1, ceiling);
    }
    
    let peak = searchPeak(nums, floor, mid - 1);
    if (peak == -1) peak = searchPeak(nums, mid + 1, ceiling);
    return peak;
}
