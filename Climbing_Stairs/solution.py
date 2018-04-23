def climbStairs(n):
  if n == 1 or n == 2: return n
  
  curr = 0
  oneBelow = 2
  twoBelow = 1
  while n > 2:
    curr = oneBelow + twoBelow
    oneBelow = curr
    twoBelow = oneBelow
    n -= 1
  return curr
