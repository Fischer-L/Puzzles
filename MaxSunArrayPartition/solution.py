
class Solution(object):
    def arrayPairSum(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        sum = 0
        i = len(nums) - 1
        nums.sort()
        while (i >= 0):
          sum += nums[i-1]
          i -= 2
        return sum

testData = []
testData.append(([1, 4, 3, 2], 4))
testData.append(([1, 4, 3, 2, 0, -1], 3))

solution = Solution()
for data in testData:
  sum = solution.arrayPairSum(data[0])
  print('sum: %d == ans: %d: %s' % (sum, data[1], sum == data[1]))
