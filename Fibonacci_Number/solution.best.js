/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) return 0;
  if (N === 1) return 1;
  
  let pre = 1;
  let pre2 = 0;
  while (N > 2) {
    let tmp = pre + pre2;
    pre2 = pre;
    pre = tmp;
    N--;
  }
  return pre + pre2;
};
