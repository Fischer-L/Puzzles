/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  const ans = [];
  candidates.sort((a, b) => a - b);
  findCombos(target, candidates, 0, candidates.length, ans, []);
  return ans;
};

function findCombos(target, candidates, s, e, ans, combo) {
  if (target < 0) return;
  
  if (target === 0) {
    ans.push(combo.slice());
    return;
  }
  
  for (let i = s; i < e; i++) {
    let v = candidates[i];
    
    if (v > target) break;
    
    if (i != s && v === candidates[i-1]) continue;
    
    combo.push(v);
    findCombos(target-v, candidates, i+1, e, ans, combo);
    combo.pop();
  }
}
