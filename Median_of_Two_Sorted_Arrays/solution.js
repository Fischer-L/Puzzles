/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const L1 = nums1 ? nums1.length : 0;
    const L2 = nums2 ? nums2.length : 0;
    if (L1 === 0 && L2 === 0) {
        return 0;
    }
    
    const L = L1 + L2;
    let counts = {};
    if (L % 2 == 0) {
        counts.left = (L/2) - 1;
        counts.right = counts.left + 1;
    } else {
        counts.left = Math.floor(L/2);
        counts.right = counts.left;
    }
    let long = L1 > L2 ? nums1 : nums2;
    let short = L1 > L2 ? nums2 : nums1;

    let left = searchNumByCount(0, long.length-1, long, 0, short.length-1, short, counts.left);
    let right = counts.right == counts.left ? 
        left : searchNumByCount(0, long.length-1, long, 0, short.length-1, short, counts.right);
    return (left + right) / 2;
};

function searchNumByCount(s1, e1, long, s2, e2, short, count) {
    if (s1 > e1 || s2 > e2) {
        let i = 0;
        let nums = null;
        if (s1 > e1) {
            nums = short;
            i = count - s1;
        } else {
            nums = long;
            i = count - s2;
        }
        return nums[i];
    }
    
    // This is log(long.length)
    let m1 = Math.floor((s1 + e1) / 2);
    // This is log(short.length)
    let range = findRange(s2, e2, short, long[m1]);
    let leftCount = m1 + range[1];
    if (count < leftCount) {
        return searchNumByCount(s1, m1-1, long, s2, range[0], short, count);
    } else if (count > leftCount) {
        return searchNumByCount(m1+1, e1, long, range[1], e2, short, count);
    } else {
        return long[m1];
    }
}

function findRange(s, e, nums, target) {
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        let v = nums[m];
        if (v < target) {
            s = m + 1;
        } else if (v >= target) {
            e = m - 1;
        }
    }
    return [e, s];
}
