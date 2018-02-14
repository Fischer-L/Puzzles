/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let s = 0;
    let e = nums.length - 1;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        let v = nums[m];
        if (target >= nums[0]) {
            // The target is at the left side
            if (v < nums[0]) {
                // But the mid value is at the right side
                // so the target must be left to the mid value.
                v = target + 1;
            }
        } else {
            // target is at the right side
            if (v >= nums[0]) {
                // But the mid value is at the left side
                // so the target must be right to the mid value.
                v = target - 1;   
            }
        }
        
        if (target == v) {
            return m;
        } else if (target < v) {
            e = m - 1;
        } else if (target > v) {
            s = m + 1;
        }
    }
    return -1;
};
