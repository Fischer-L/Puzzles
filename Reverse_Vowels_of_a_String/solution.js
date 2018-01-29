/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let targets = [];
  s = s.split("");
  for (let i = s.length - 1; i >= 0; --i) {
    if (vowels.includes(s[i])) {
        targets.push(s[i]);
        s[i] = null;
    }
  }
  for (let i = s.length - 1; i >= 0; --i) {
    if (s[i] === null) s[i] = targets.pop();
  }
  return s.join("");
};
