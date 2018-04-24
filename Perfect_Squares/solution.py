import math

def numSquares(n):
  i = math.floor(math.sqrt(n))
  sqrts = []
  while i > 0:
    sqrts.append(i ** 2)
    i -= 1
  
  least = leastSquares(n, sqrts)
  print(least)
  return len(least)

leastMap = {
  1: [1],
  2: [1, 1],
  3: [1, 1, 1],
  4: [4],
  5: [1, 4],
  6: [1, 1, 4]
}

def leastSquares(n, sqrts):
  if n in leastMap: return leastMap[n]
  
  least = None
  for i in range(len(sqrts)):
    sq = sqrts[i]
    comb = [sq]
    rest = n - sq
    
    if rest > 0:
      restComb = leastSquares(rest, filterSquares(rest, sqrts))
      comb = comb + restComb
      
    if least == None or len(comb) < len(least):
      least = comb
      if len(least) == 1: break
      
      
  leastMap[n] = least
  return least
  
def filterSquares(n, sqrts):  
  s = 0
  e = len(sqrts) - 1
  while s <= e:
    m = math.floor((s + e)/2)
    mv = sqrts[m]
    if n == mv:
      break;
    elif n > mv:
      if n <= sqrts[m-1]:
        break
      else:
        e = m - 1
    else:
      if n >= sqrts[m+1]:
        m = m + 1
        break
      else:
        s = m + 1
  return sqrts[m:]        
