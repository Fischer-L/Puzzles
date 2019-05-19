from collections import Counter

class Solution:
  def findAnagrams(self, s: str, p: str) -> List[int]:
    ans = []
    if s == None or p == None: return ans
    
    sLen = len(s)
    pLen = len(p)
    if sLen == 0 or pLen == 0 or sLen < pLen: return ans
    
    b = e = 0
    lackCount = pLen
    lackMap = Counter(p)
    
    c = ''
    while e < pLen:
      c = s[e]
      lackMap[c] -= 1
      if lackMap[c] >= 0: lackCount -= 1
      e += 1
    if lackCount == 0: ans.append(b)
    
    while e < sLen:
      c = s[b]
      lackMap[c] += 1
      if lackMap[c] > 0: lackCount += 1
      b += 1
      
      c = s[e]
      lackMap[c] -= 1
      if lackMap[c] >= 0: lackCount -= 1
      e += 1
      
      if lackCount == 0: ans.append(b)
        
    return ans
    
