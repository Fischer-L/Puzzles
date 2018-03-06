/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const L = nums.length;
    let nonTwoIdx = -1;
    let nonZeroIdx = L;
    
    for (let i = 0; i < L; ++i) {
        if (nums[i] !== 0) {
            nonZeroIdx = i;
            break;
        }
    }
    
    for (let i = L - 1; i >= 0; --i) {
        if (nums[i] !== 2) {
            nonTwoIdx = i;
            break;
        }
    }
    
    for(let current = nonZeroIdx; current <= nonTwoIdx; ++current) {
        let v = nums[current];
        if (v === 0) {
            swap(nums, current, nonZeroIdx);
            nonZeroIdx++;
        } else if (v === 2) {
            swap(nums, current, nonTwoIdx);
            nonTwoIdx--;
            current--;
        }
    }
};

var swap = function(nums, i, j) {
    let buf = nums[i];
    nums[i] = nums[j];
    nums[j] = buf;
}
