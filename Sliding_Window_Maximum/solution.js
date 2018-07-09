/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let window = [];
    let queue = [];
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (queue[0] <= i - k) {
            queue.shift();
        }
        while (queue.length && n > nums[queue[queue.length-1]]) {
            queue.pop();
        }
        queue.push(i);
        if (i+1 >= k) {
            window.push(nums[queue[0]]);
        }
    }
    return window;
};
