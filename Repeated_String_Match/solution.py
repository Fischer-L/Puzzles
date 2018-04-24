import re
import math

def matchRepeatedString(A, B):
  minTimes = math.ceil(len(B) / len(A))
  repeat = A * minTimes
  reg = re.compile(B)
  isSub = reg.search(repeat) != None
  if isSub: return minTimes
  repeat += A
  isSub = reg.search(repeat) != None
  if isSub: return minTimes + 1
  return -1
