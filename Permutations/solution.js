/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (nums.length <= 1) return [nums];
    let heads = nums.slice();
    let combs = [];
    while (heads.length) {
        let h = heads.shift();
        let subCombs = permute(nums.filter(v => v != h));
        subCombs.forEach(c => {
            c.unshift(h);
            combs.push(c);
        });
    }
    return combs;
}
