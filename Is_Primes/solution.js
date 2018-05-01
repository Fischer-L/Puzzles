// For any prime number larger than 30, it must be this form:
//   - 30k + i
//   - where k = 1, 2, 3, ....
//   - where i = 1, 7, 11, 13, 17, 23, 27, 29
// So we can test an number larger than 30 with the above form.
function isPrimes(n) {
  if (n <= 30) {
    return [2, 3, 5, 7, 11, 13, 17, 23, 27, 29].includes(n);
  } else {
    return [1, 7, 11, 13, 17, 23, 27, 29].includes(n % 30);
  }
}
