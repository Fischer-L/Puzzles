/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const pLen = p.length;
  const sLen = s.length;
  const mapP = calcCharMap(p, 0, pLen);
  const mapS = calcCharMap(s, 0, pLen);
  const keys = Object.keys(mapP);
  const ans = [];
  let b = 0, e = pLen - 1;
  while (e < sLen) {
    if (isAnagram(keys, mapP, mapS)) ans.push(b);
    e++;
    if (e < sLen) {
      const charEnd = s[e];
      if (!mapS[charEnd]) {
        mapS[charEnd] = 1;
      } else {
        mapS[charEnd]++;
      }
      const charBegin = s[b];
      mapS[charBegin]--;
      b++;
    }
  }
  return ans;
};

function calcCharMap(str, s ,e) {
  const map = {};
  for (let i = s; i < e; i++) {
    const c = str[i];
    if (!map[c]) {
      map[c] = 1;
    } else {
      map[c]++;
    }
  }
  return map;
}

function isAnagram(keys, mapA, mapB) {
  return !keys.some(k => mapA[k] !== mapB[k]);
}
