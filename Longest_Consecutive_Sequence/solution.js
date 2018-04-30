/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const L = nums.length;
    if (L <= 1) return L;
    
    let path = {};
    let heads = [];
    for (let i = 0; i < L; ++i) path[nums[i]] = { here: i, next: -1 };
    for (let i = 0; i < L; ++i) {
        let n = nums[i];
        if (path[n+1]) path[n].next = path[n+1].here;
        if (!path[n-1]) heads.push(i);   
    }
    
    let length = 1;
    let longest = -1;
    while (heads.length) {
        let i = heads.pop();
        let n = nums[i];
        while (path[n].next >= 0) {
            length++;
            n = nums[path[n].next];
            longest = Math.max(longest, length);
        }
        length = 1;
    }
    return Math.max(longest, length);
};
