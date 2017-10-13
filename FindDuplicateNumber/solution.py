class Solution(object):
    def findDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 0: return -1
        
        # Ideal from: http://keithschwarz.com/interesting/code/?dir=find-duplicate
        # We have to see the input array from a whole different angle.
        # This array in fact is a map(or route function) for a route, which is
        #   x_0 = 0                     => Step 0: start from the position x_0
        #   f(1) => nums[x_0] = x_1     => Step 1: from x_0 go to x_1
        #   f(2) => nums[x_1] = x_2     => Step 2: from x_1 go to x_2
        #   ... ...
        #   f(i) => nums[x_i] = x_{i+1} => Step i: from x_i go to x_{i+1}.
        # If there was infinite nums, the route would go along forever without any position revisited.
        # If the nums was finite with no repeated position, the route would be a perfect circle loop.
        # If the nums was finite with repeated position, the route would be rho-shaped.
        # The key point is to find the start of the rho-shaped circle, x_c.
        # x_c is the dulpicated number.
        
        # To find x_c, we have to borrow Floyd 's "tortoise and hare" algorithm to find the x_l,
        # where f(stepsToL) = x_l == x_2l = f(doubleStepsToL) and
        # stepsToL is the smallest multiple of the length of the rho-shaped circle(rhoLen) larger than stepsToC.
        posL = nums[0]
        pos2L = nums[nums[0]]
        while posL != pos2L:
            posL = nums[posL]
            pos2L = nums[nums[pos2L]]
            
        # After finding x_l, now we are able to find x_c.
        # Consider stepsToL is the smallest multiple of rhoLen larger than stepsToC.
        # Hence f(stepsToL) ends at f(stepC) plus (rhoLen - stepsToC) steps forward.
        # So we know we will reach f(stepsToC) again after stepC steps forward starting from f(stepsToL),
        # which is to find f(stepsToC) = f(stepsToL + stepsToC).
        posC = 0
        while posC != posL:
            posC = nums[posC]
            posL = nums[posL]
        return posC
        
