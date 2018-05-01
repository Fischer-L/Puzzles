class Solution {
    public int countPrimes(int n) {
        int stop = (int) Math.floor(Math.sqrt(n-1));
        
        boolean[] primes = new boolean[n];
        for (int i = 2; i < n; ++i) primes[i] = true;
        
        for (int i = 2; i <= stop; ++i) {
            if (primes[i]) {
                int k = i * i;
                while (k < n) {
                    primes[k] = false;
                    k += i;
                }
            }
        }
        
        int count = 0;
        for (int i = 2; i < n; ++i) if (primes[i]) count++;
        return count;
    }
}
