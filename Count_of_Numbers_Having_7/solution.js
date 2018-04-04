/**
 * `let count = count7sMap.get(k);`
 * Here `count` is the count of numbers containing 7 from 0 ~ 10 ** k.
 * For example, when `k === 1`, only one *7* from 0 ~ 10 so `count === 1`.
 */
const  count7sMap = new Map([[0, 0], [1, 1]]);

/**
 * Get the count of numbers containing 7 from 0 ~ 10 ** `power`
 *
 * @param power {Integer} the power for the base 10.
 * @return {Integer} The count of numbers containing 7.
 */
function getCount7sByPower(power) {
  if (count7sMap.has(power)) {
    return count7sMap.get(power);
  }
  let count = 9 * getCount7sByPower(power - 1);
  count += 10 ** (power - 1);
  count7sMap.set(power, count);
  return count;
}

/**
 * @param N {Integer} Any positive safe Integer.
 * @return {Array} For example, if `N === 123`, it will return [3, 2, 1],
 *                 so `N` is decomposed into 1 * (10 ** 2) + 2 * 10 + 3.
 */
function decompose(N) {
  let factors = [];
  while (N) {
    factors.push(N % 10);
    N = Math.floor(N / 10);
  }
  return factors;
}

/**
 * Let's observe:
 * 
 * (1) `N` represents from 0 ~ 100.
 *     00, 01, 02, 03, 04, 05, 06, 07, 08, 09 => 1 count
 *     10, 11, 12, 13, 14, 15, 16, 17, 18, 19 => 1 count
 *     ... ...
 *     70, 71, 72, 73, 74, 75, 76, 77, 78, 79 => 10 counts
 *     80, 81, 82, 83, 84, 85, 86, 87, 88, 89 => 1 count
 *     90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100 => 1 count
 *     The total count is 19(= 9 * 1 + 10)
 *
 * (2) `N` represents from 0 ~ 1000.
 *     000, 001, 002, 003, 004, 005, 006, 007, 008, 009 => 1 count
 *     010, 011, 012, 013, 014, 015, 016, 017, 018, 019 => 1 count
 *     ... ...
 *     070, 071, 072, 073, 074, 075, 076, 077, 078, 079 => 10 counts
 *     080, 081, 082, 083, 084, 085, 086, 087, 088, 089 => 1 count
 *     090, 091, 092, 093, 094, 095, 096, 097, 098, 099 => 1 count
 *     (The subtotal is 19)
 *
 *     ... ...
 *
 *     700, 701, 702, 703, 704, 705, 706, 707, 708, 709 => 10 count
 *     710, 711, 712, 713, 714, 715, 716, 717, 718, 719 => 10 count
 *     ... ...
 *     770, 771, 772, 773, 774, 775, 776, 777, 778, 779 => 10 counts
 *     780, 781, 782, 783, 784, 785, 786, 787, 788, 789 => 10 count
 *     790, 791, 792, 793, 794, 795, 796, 797, 798, 799 => 10 count
 *     (The subtotal is 100)
 *
 *     ... ...
 *
 *     900, 901, 902, 903, 904, 905, 906, 907, 908, 909 => 1 count
 *     910, 911, 912, 913, 914, 915, 916, 917, 918, 919 => 1 count
 *     ... ...
 *     970, 971, 972, 973, 974, 975, 976, 977, 978, 979 => 10 counts
 *     980, 981, 982, 983, 984, 985, 986, 987, 988, 989 => 1 count
 *     990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000 => 1 count
 *     (The subtotal is 19)
 *
 *     The total count is 271(= 9 * 19 + 100)
 *
 * (3) `N` represents from 0 ~ a * (10 ** k).
 *     if a < 7, the count would be a * the count of 7s from 0 ~ 10 ** k.
 *     if a === 7, the count would be a * the count of 7s from 0 ~ (10 ** k) - 1 plus 1.
 *     if a > 7, the count would be (a - 1) * the count of 7s from 0 ~ 10 ** k plus 10 ** k.
 *
 * (4) `N` represents from 0 ~ a * (10 ** k) + b * (10 ** (k - 1)) + ... + z
 *     If `a < 7`, the total count would be the sum of the counts
 *     of 7s from 0 ~ a * (10 ** k), 0 ~  b * (10 ** (k - 1)), ..., z.
 *     If `a == 7`, the total count would be the sum of the counts
 *     of 7s from 0 ~ a * (10 ** k) plus the result of b * (10 ** (k - 1)) + ... + z
 *     If `a > 7`, the total count would be the sum of the counts
 *     of 7s from 0 ~ (a - 1) * (10 ** k) plus (10 ** k) plus the counts of 7s from the rest factors.
 *
 * @param N {Integer} Any positive safe Integer
 * @return {Integer} The count of numbers containing 7 from 1 ~ N (0 can always be ignored)
 */
function g(N) {
  if (N < 0) {
    throw "N should be a positive integer!";
  }
  if (!Number.isSafeInteger(N)) {
    // In case someone trys some super over large number.
    throw "N cannot exceed Number.MAX_SAFE_INTEGER!";
  }

  let count7s = 0;
  let factors = decompose(N);
  while (factors.length) {
    let power = factors.length - 1;
    let factor = factors.pop();
    if (power === 0) {
      if (factor >= 7) {
        count7s += 1;  
      }
    } else {
      if (factor <= 7) {
        count7s += factor * getCount7sByPower(power);
        if (factor === 7) {
          count7s += factors.reduce((sum, f, p) => {
            sum += f * (10 ** p);
            return sum;
          }, 1);
          factors = [];
        }
      } else {
        count7s += (factor - 1) * getCount7sByPower(power);
        count7s += 10 ** power;
      }
    }
  }
  return count7s;
}
