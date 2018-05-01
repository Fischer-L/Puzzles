// For any prime number larger than 30, it must be this form:
//   - 30k + i
//   - where k = 1, 2, 3, ....
//   - where i = 1, 7, 11, 13, 17, 23, 27, 29
// So we can test an number larger than 30 with the above form.
function isPrimes(n) {
  const trailingI = [1, 7, 11, 13, 17, 23, 27, 29];
  
  if (n <= 30) {
    const primes = [2, 3, 5, ...trailingI];
    return primes.includes(n);
  } else {
    return trailingI.includes(n % 30);
  }
}
