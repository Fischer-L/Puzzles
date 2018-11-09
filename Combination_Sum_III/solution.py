class Solution:
  def combinationSum3(self, k, n):
    """
    :type candidates: List[int]
    :type target: int
    :rtype: List[List[int]]
    """
    ans = []
    candidates = self._createCandidates(n)
    self._findCombos(k, n, candidates, 0, len(candidates), ans, [])
    return ans
  
  def _createCandidates(self, n):
    i = 1
    candidates = []
    while i < 10 and i <= n:
      candidates.append(i)
      i += 1
    return candidates
      
  def _findCombos(self, k, target, candidates, s, e, ans, combo):
    if k == 0 or target < 0:
      if target == 0: ans.append(combo.copy())
      return
    k -= 1
    
    for i in range(s, e):
      v = candidates[i]
      if v > target: break
      combo.append(v)
      self._findCombos(k, target-v, candidates, i+1, e, ans, combo)
      combo.pop()
      
