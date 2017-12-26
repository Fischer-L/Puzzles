class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        # See Sieve of Eratosthenes algorithmn
        if n < 2: return 0
        
        primes = [ True ] * (n + 1)
        primes[0] = primes[1] = False
        for i in range(2, n):
            if primes[i] == False: continue
            ii = i * i
            if ii > n: break
            m = ii
            while m < n:
                primes[m] = False
                m += i
                
        return len([ i for i in range(n) if primes[i] ])
