/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let map = {};
  for (let c of J) map[c] = 1;
  let num = 0;
  for (let c of S) {
    if (map[c]) num += map[c];
  }
  return num;
};
