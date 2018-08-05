/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let freqMap = {};
    for (let i = nums.length-1; i >= 0; i--) {
        let key = nums[i];
        if (freqMap[key]) {
            ++freqMap[key];
        } else {
            freqMap[key] = 1;
        }
    }
    
    let freqBucket = [];
    freqBucket.length = nums.length + 1;
    Object.keys(freqMap).forEach(key => {
        let freq = freqMap[key];
        if (!freqBucket[freq]) freqBucket[freq] = [];
        freqBucket[freq].push(+key);
    });
    
    
    let ans = [];
    let i = freqBucket.length - 1;
    while (k > 0) {
        let keys = freqBucket[i];
        if (keys) {
            ans.push(...keys);
            if (k === ans.length) k = 0;
        }
        i--;
    }
    return ans
};
