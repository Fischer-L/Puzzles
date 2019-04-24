/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const sumsMap = {};
  for (let i of A) {
    for (let j of B) {
      const sum = i + j;
      const count = sumsMap[sum] || 0;
      sumsMap[sum] = count + 1;
    }
  }
  let total = 0;
  for (let i of C) {
    for (let j of D) {
      const sum = - i - j;
      total += sumsMap[sum] || 0;
    }
  }
  return total;
};
