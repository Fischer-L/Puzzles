/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let perms = [[]];
    const L = nums.length;
    if (L == 0) {
        return perms;
    } else if (L == 1) {
        perms.push([nums[0]]);
        return perms;
    }
    
    if (L >= 2) {
        let a = nums.pop();
        let b = nums.pop();
        perms.push([a], [b], [a, b]);
    }
    
    let v = nums.pop();
    let additions = null;
    while (v !== undefined) {
        additions = perms.map(p => {
            p = p.slice();
            p.push(v);
            return p;
        });
        perms.push(...additions);
        v = nums.pop();
    }
    return perms;
};
