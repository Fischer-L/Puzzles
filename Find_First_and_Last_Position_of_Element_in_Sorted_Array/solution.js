/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let first = -1;
    let last = -1;
    
    let v = 0;
    let s = 0;
    let m = 0;
    let e = nums ? nums.length - 1 : -1;
    while (s <= e) {
        m = Math.floor((s + e) / 2);
        v = nums[m];
        if (target > v) {
            s = m + 1;
        } else if (target < v) {
            e = m - 1;
        } else {
            first = m;
            if (m > 0 && nums[m-1] == target) {
                first = searchFirstPos(target, nums, s, m-1);
            }
            last = m;
            if (m < nums.length - 1 && nums[m+1] == target) {
                last = searchLastPos(target, nums, m+1, e);
            }
            return [first, last];
        }
    }
    return [first, last];
};

function searchFirstPos(target, nums, s, e) {
    let v = 0;
    let m = 0;
    while (s <= e) {
        m = Math.floor((s + e) / 2);
        v = nums[m];
        if (target > v) {
            s = m + 1;
        } else if (target < v) {
            e = m - 1;
        } else {
            if (m > 0 && nums[m-1] == target) {
                e = m - 1;
            } else {
                return m;
            }
        }
    }
    return -1;
}

function searchLastPos(target, nums, s, e) {
    let v = 0;
    let m = 0;
    const L = nums.length - 1;
    while (s <= e) {
        m = Math.floor((s + e) / 2);
        v = nums[m];
        if (target > v) {
            s = m + 1;
        } else if (target < v) {
            e = m - 1;
        } else {
            if (m < L && nums[m+1] == target) {
                 s = m + 1;
            } else {
                return m;
            }
        }
    }
    return -1;
}
