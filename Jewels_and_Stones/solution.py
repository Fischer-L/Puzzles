from collections import Counter

class Solution:
  def numJewelsInStones(self, J, S):
    """
    :type J: str
    :type S: str
    :rtype: int
    """
    stonesCount = Counter(S)
    num = 0
    for c in J:
      if c in stonesCount: num += stonesCount[c]
    return num
       
