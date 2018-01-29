/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; --i) {
      digits[i] = digits[i] + carry;
      if (digits[i] > 9) {
          carry = 1;
          digits[i] = 10 - digits[i];
      } else {
          carry = 0;
          break;
      }
  }
  if (carry) {
      digits.unshift(1);
  }
  return digits.length ? digits : [1];
};
