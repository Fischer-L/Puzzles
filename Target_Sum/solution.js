/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let prevMap = { [0]: 1 };
    let currMap = null;
    let prevSums = [0];
    let currSums = null;
    for (let n of nums) {
      currMap = {};
      currSums = [];
      for (let s of prevSums) {
        let sCount = prevMap[s];
        updateCurrent(s + n, sCount, currMap, currSums);
        updateCurrent(s - n, sCount, currMap, currSums);
      }
      prevMap = currMap;
      prevSums = currSums;
    }
    return currMap[S] || 0;
};

function updateCurrent(v, prevCount, currMap, currSums) {
  let currCount = currMap[v] || 0;
  if (currCount === 0) currSums.push(v);
  currMap[v] = currCount + prevCount;
}
