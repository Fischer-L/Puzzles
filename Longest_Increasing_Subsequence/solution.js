/**
 * From https://www.geeksforgeeks.org/longest-monotonically-increasing-subsequence-size-n-log-n/
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let seqTrails = [];
  for (let i = 0; i < nums.length; ++i) {
      let v = nums[i];
      let L = seqTrails.length - 1;
      if (L < 0) {
          seqTrails.push(v);
      } else {
          if (v > seqTrails[L]) {
              seqTrails.push(v);
          } else if (v < seqTrails[L]) {
              let ceiling = findCeiling(v, seqTrails);
              seqTrails[ceiling] = v;
          }
      }
  }
  return seqTrails.length;
}

var findCeiling = function(v, arr) {
    let s = 0;
    let e = arr.length - 1;
    while (s <= e) {
        let m = Math.floor((s + e) / 2);
        if (v == arr[m]) {
            return m;
        } else if (v < arr[m]) {
            e = m - 1;
        } else if (v > arr[m]) {
            s = m + 1;
        }
    }
    return s;
}
