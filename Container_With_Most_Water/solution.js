/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let water = 0;
    let i = 0;
    let j = height.length - 1;
    while (i < j) {
        let a = height[i];
        let b = height[j];
        water = Math.max(water, (j - i) * Math.min(a, b));
        if (a < b) {
            while (height[i] <= a) ++i;
        } else if (a > b) {
            while (height[j] <= b) --j;
        } else {
            ++i; --j;
        }
    }
    return water;
};
