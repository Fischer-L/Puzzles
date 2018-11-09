class Solution:
  def combinationSum2(self, candidates, target):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    ans = []
    candidates.sort()
    self._findCombos(target, candidates, 0, len(candidates), ans, [])
    return ans
      
  def _findCombos(self, target, candidates, s, e, ans, combo):
    if target < 0: return
    
    if target == 0:
      ans.append(combo.copy())
      return
    
    for i in range(s, e):
      v = candidates[i]
      
      if v > target: break
      
      if i != s and v == candidates[i-1]: continue
      
      combo.append(v)
      self._findCombos(target-v, candidates, i+1, e, ans, combo)
      combo.pop()
      
