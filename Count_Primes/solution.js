/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    const stop = Math.floor(Math.sqrt(n-1));
    
    let primes = [0, 0];
    for (let i = 2; i < n; ++i) primes.push(1);
    
    for (let i = 2; i <= stop; ++i) {
        if (primes[i]) {
            let k = i * i;
            while (k < n) {
                primes[k] = 0;
                k += i;
            }
        }
    }
    return primes.reduce((count, p) => {
        if (p) count++;
        return count;
    }, 0);
};
