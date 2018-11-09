/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const ans = [];
  if (n >= k * (k + 1) / 2) {
    const candidates = createCandidates(n);
    findCombos(k, n, candidates, 0, candidates.length, ans, []);
  }
  return ans;
};

function createCandidates(n) {
  const candidates = [];
  for (let i = 1; i < 10 && i <= n; i++) candidates.push(i);
  return candidates;
}

function findCombos(k, target, candidates, s, e, ans, combo) {
  if (k == 0 || target < 0) {
    if (target === 0) ans.push(combo.slice());
    return;
  }
  k--;
  
  for (let i = s; i < e; i++) {
    let v = candidates[i];
    if (v > target) break;
    combo.push(v);
    findCombos(k, target-v, candidates, i+1, e, ans, combo);
    combo.pop();
  }
}
