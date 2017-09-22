class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        accumlationsCount = collections.Counter();
        accumlationsCount[0] = 1
        ans = total = 0
        for i in nums:
            total += i
            ans += accumlationsCount[total - k]
            accumlationsCount[total] += 1
        return ans
        
