class Solution:
  def selfDividingNumbers(self, left: int, right: int) -> List[int]:
    ans = []
    while left <= right:
      if self._isSelfDividing(left) == True: ans.append(left)
      left += 1
    return ans
  
  def _isSelfDividing(self, target: int):
    n = target
    while n > 0:
      d = n % 10
      if d == 0 or target %d != 0: return False
      n = math.floor(n / 10)
    return True
