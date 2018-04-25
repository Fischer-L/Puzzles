def minStringWindow(str, t):
  tMap = {}
  for i in range(len(t)):
    c = t[i]
    if c not in tMap: tMap[c] = 0
    tMap[c] += 1
  
  L = len(str)
  minIdx = -1
  minLen = L + 1
  missingCount = len(t)
  s = 0
  e = 0
  while e < L:
    c = str[e]
    if c in tMap:
      tMap[c] -= 1
      if tMap[c] == 0: missingCount -= 1
    
    while missingCount == 0:
      if e - s + 1 < minLen:
        minIdx = s
        minLen = e - s + 1
      
      s += 1
      c = str[s-1]
      if c in tMap:
        tMap[c] += 1
        if tMap[c] > 0: missingCount += 1
        
    e += 1
  
  if minIdx >= 0:
    return str[minIdx : minIdx + minLen]
  return ""
