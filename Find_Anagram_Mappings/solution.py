def findAnagram(A, B):
  L = len(B)
  if L == 0: return None
  
  mapB = {}
  for i in range(L):
    b = B[i]
    if b not in mapB: mapB[b] = i
    
  anaMap = []
  for i in range(L):
    a = A[i]
    anaMap.append(mapB[a])
    
  return anaMap
