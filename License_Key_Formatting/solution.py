def formatLicenseKey(key, K):
  str = ""
  for i in range(len(key)):
    c = key[i]
    if c != "-": str += c
    
  k = K
  newKey = ""
  l = len(str) - 1
  str = str.upper()
  while l >= 0:
    if k == 0:
      newKey = "-" + newKey
      k = K
    newKey = str[l] + newKey
    l -= 1
    k -= 1
  
  if newKey[0] == "-": newKey = newKey[:1]
  return newKey
