class Solution(object):
    def moveZeroes(self, nums):
        """
        :type nums: List[int]
        :rtype: void Do not return anything, modify nums in-place instead.
        """
        zeros = []
        while True:
          try:
            nums.remove(0)
            zeros.append(0)
          except ValueError:
            if len(zeros) > 0: nums.extend(zeros)
            break
          
