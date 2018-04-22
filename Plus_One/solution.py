def plusOne(arr):
  L = len(arr)
  carry = 1
  for i in range(L):
    k = L - i - 1
    arr[k] += carry
    if arr[k] < 10:
      carry = 0
      break
    else:
      carry = 1
      arr[k] = 10 - arr[k]
  
  if carry > 0:
    return [carry] + arr
  return arr
