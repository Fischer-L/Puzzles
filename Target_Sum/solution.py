class Solution:
  def findTargetSumWays(self, nums, S):
    """
    :type nums: List[int]
    :type S: int
    :rtype: int
    """
    prevMap = { 0: 1}
    currMap = None
    prevSums = [0]
    currSums = None
    for n in nums:
      currMap = {}
      currSums = []
      for s in prevSums:
        sCount = prevMap[s]
        self._updateCurrent(s + n, sCount, currMap, currSums)
        self._updateCurrent(s - n, sCount, currMap, currSums)
      prevMap = currMap
      prevSums = currSums
    return currMap[S] if S in currMap else 0

  def _updateCurrent(self, v, prevCount, currMap, currSums):
    currCount = currMap[v] if v in currMap else 0
    if currCount == 0: currSums.append(v)
    currMap[v] = currCount + prevCount
