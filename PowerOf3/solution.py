import math
class Solution(object):
    def isPowerOfThree(self, n):
        """
        :type n: int
        :rtype: bool
        """
        
    def maxPowerMethod(self, n):
        """
        Assume n in a 32-bit int. Let maxPower is the max power of 3 within the 32-bit int.
        Because the bae number 3 is a prime number, the maxPower could only be divided by power of 3.
        """
        MAX_INT = math.pow(2, 31) - 1
        maxExponent = math.floor(math.log(MAX_INT) / math.log(3))
        maxPowerOf3 = math.pow(3, maxExponent)
        return n > 0 and maxPowerOf3 % n == 0
    
      
   def logMethod(self, n):
       """
       Assume n = 10 ** a, 3 = 10 ** b.
       If n was power of 3, (n = 10 ** a) == (3 ** x = 10 ** (b * x)), which means a == b * x.
       Let log be the logarithm operation with the base 10.
       So a == b * x equals to log(n) == log(3) * x.
       Since n was power of 3, x must be an positive interger from 0, otherwise, n wan't.

       p.s 1: Can't take natural log here, because it will generate round off error for n=243.
              This is about computing error. With natural log, we will get:
              log(3) = 1.0986122886681098
              log(243) = 5.493061443340548
              ==> log(243) / log(3) = 4.999999999999999

       p.s 2: This is mathmatically correct.
              However, if the log operation computation produced some error, Python intends to,
              the whole result would be wrong.
       """
       if n == 0: return False
       x = math.log(n, 10) / math.log(3, 10)
       return x % 1 == 0
   
   def stringMethod(self, n):
       """
       Convert a number of power of 3 into radix-3 format as:
       "10" == 3
       "100" == 9
       "1000" === 27
       ... ...
       So if n wa a power of 3, it would become "10....".
       In terms of regex, we wcould test against "10*".
       
       p.s: This requires a built-in conversion function to do the job.
            If there wasn't one, like Python, we would have to implement one by ourselves.
       """
   
