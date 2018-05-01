// For a prime number larger than 30, it must be this form:
//   - 30k + i
//   - where k = 1, 2, 3, ...
//   - where i = 1, 7, 11, 13, 17, 19, 23, 29
// So we can test an number with the above form
class Solution {
  public boolean isPrime(int n) {
    if (n <= 30) {
      int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
      for (int i : primes) if (i == n) return true;
      return false;
    }
    int[] mods = {7, 11, 13, 17, 19, 23, 29};
    int mod = n % 30;
    for (int i : mods) if (i == mod) return true;
    return false;
  }
}
