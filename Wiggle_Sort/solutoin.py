def wiggleSort(A):
  L = len(A)
  need_S2B = True # Need small to big
  
  for i in range(L - 1):
    s2b = True if A[i] < A[i+1] else False
    if s2b != need_S2B:
      tmp = A[i]
      A[i] = A[i+1]
      A[i+1] = tmp
    need_S2B = False if need_S2B else True
    
  return A
