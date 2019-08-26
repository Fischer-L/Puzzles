/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let ans = [];
  
  let numMap = nums1.reduce((numMap, n) => {
    numMap[n] = numMap[n] ? numMap[n] + 1 : 1;
    return numMap;
  }, {});
  
  for (let n of nums2) {
    if (numMap[n]) {
      ans.push(n);
      numMap[n]--;
    }
  }
  return ans;
};
