class Solution:
  def sortArrayByParityII(self, A: List[int]) -> List[int]:
    ans = [ 0 ] * len(A)
    evenIdx = 0
    oddIdx = 1
    for v in A:
      if v % 2 == 0:
        ans[evenIdx] = v
        evenIdx += 2
      else:
        ans[oddIdx] = v
        oddIdx += 2
    return ans
    
