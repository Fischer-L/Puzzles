import math

def findPeak(arr):
  s = 0;
  e = len(arr) - 1;
  while s <= e:
    m = math.floor((s + e) / 2)
    if arr[m-1] > arr[m]:
      e = m
    elif arr[m] < arr[m+1]:
      s = m
    else:
      return m;
  return -1
