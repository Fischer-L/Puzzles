/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const ans = [];
  let evenIdx = 0;
  let oddIdx = 1;
  for (v of A) {
    if (v % 2 === 0) {
      ans[evenIdx] = v;
      evenIdx += 2;
    } else {
      ans[oddIdx] = v;
      oddIdx += 2;
    }
  }
  return ans;
};
