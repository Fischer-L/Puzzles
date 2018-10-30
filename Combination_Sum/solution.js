/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const L = candidates.length;
  const ans = [];
  candidates.sort();
  for (let i = 0; i < L; i++) {
    let combo = sumCombo(candidates, i, L, target);
    if (combo) ans.push(...combo);
  }
  return ans;
};

function sumCombo(candidates, s, e, target) {
  const prefix = candidates[s];
  target -= prefix;
  
  if (target < 0) return null;
  
  if (target === 0) return [[prefix]];
  
  const combo = [];
  for (let i = s; i < e; i++) {
    let subCombo = sumCombo(candidates, i, e, target);
    if (subCombo) {
      subCombo.forEach(sub => sub.push(prefix));
      combo.push(...subCombo);
    } else if (candidates[i] > target) {
      break;
    }
  }
  return combo.length > 0 ? combo : null;
}
