class Solution:
  def fib(self, N: int) -> int:
    if N == 0: return 0
    if N == 1: return 1
    pre = 1
    pre2 = 0
    while N > 2:
      tmp = pre + pre2
      pre2 = pre
      pre = tmp
      N -= 1
    return pre + pre2
  
