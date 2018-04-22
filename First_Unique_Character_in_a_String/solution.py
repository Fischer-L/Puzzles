def findUnique(str):
  dict = {}
  L = len(str)
  for i in range(L):
    s = str[i]
    if s not in dict: dict[s] = 1
    else: dict[s] += 1
    
  for i in range(L):
    s = str[i]
    if dict[s] == 1: return i
  return -1
