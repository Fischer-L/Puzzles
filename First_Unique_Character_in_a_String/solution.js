/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dict = {};
  for (let i = s.length - 1; i >= 0; --i) {
      let c = s[i];
      if (dict[c] === undefined) dict[c] = 0;
      ++dict[c];
  }
  for (let i = 0; i < s.length; ++i) {
    let c = s[i];
    if (dict[c] == 1) return i;
  }
  return -1;
};
