/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let ans = [];
  
  if (!s || !p) return ans;
  
  let sLen = s.length, pLen = p.length;
  if (sLen === 0 || pLen === 0 || sLen < pLen) return ans;
  
  let b = e = 0, lackCount = pLen, lackMap = {};
  for (let c of p) {
    if (lackMap[c]) {
      lackMap[c]++;
    } else {
      lackMap[c] = 1;
    }
  }
  
  let c;
  while (e < pLen) {
    c = s[e];
    lackMap[c]--;
    if (lackMap[c] >= 0) lackCount--;
    e++;
  }
  if (lackCount === 0) ans.push(b);
  
  while (e < sLen) {
    c = s[b];
    lackMap[c]++;
    if (lackMap[c] > 0) lackCount++;
    b++;
    
    c = s[e];
    lackMap[c]--;
    if (lackMap[c] >= 0) lackCount--;
    e++;
    
    if (lackCount === 0) ans.push(b);
  }
  
  return ans;
};
