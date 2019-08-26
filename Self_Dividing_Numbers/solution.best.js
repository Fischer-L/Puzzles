/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let ans = [];
  while (left <= right) {
    if (isSelfDividing(left)) ans.push(left);
    left++;
  }
  return ans;
};

function isSelfDividing (target) {
  let n = target;
  while (n > 0) {
    let d = n % 10;
    if (d === 0 || target % d !== 0) return false;
    n = Math.floor(n / 10);
  }
  return true;
}
