class Solution:
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        ans = []
        candidates.sort()
        L = len(candidates)
        for i in range(L):
            combo = self._sumCombo(candidates, i, L, target)
            if combo: ans += combo
        return ans
        
    def _sumCombo(self, candidates, s, e, target):
        target -= candidates[s]
        
        if target < 0:  return None
        
        prefix = [candidates[s]]
        if target == 0: return [prefix]
        
        combo = []
        for i in range(s, e):
            subCombo = self._sumCombo(candidates, i, e, target)
            if subCombo: 
                for j in range(len(subCombo)):
                    combo.append(prefix + subCombo[j])
            else:
                break
        return combo if combo else None
