/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  let numMap = {};
  nums.sort((a, b) => a - b);
  return calcPossibleNum(nums, target, numMap);
};


function calcPossibleNum(nums, target, numMap) {
  if (target == 0) return 1;
  
  if (numMap[target] >= 0) return numMap[target];
  
  let num = 0;
  for (let v of nums) {
    if (v > target) break;
    num += calcPossibleNum(nums, target-v, numMap)
  }
  numMap[target] = num;
  return num;
}
