function decodeWays(cipher) {
  return calcWays(0, cipher.length - 1, cipher);
}

const cache = {};

function calcWays(s, e, cipher) {
  let key = `${s}-${e}`;
  if (cache[key]) return cache[key];
  
  let count = e - s + 1;
  if (count <= 0) throw "Shouldn't hit a zero count";
  
  let ans = 0;
  if (count === 1) {
    ans = 1;
  } else if (count === 2) {
    let first = parseInt(cipher[s]);
    if (first === 1) {
      ans = 2;
    } else if (first === 2) {
      let second = parseInt(cipher[e]);
      ans = second <= 6 ? 2 : 1;
    } else {
      ans = 1;
    }
  } else {
    ans = calcWays(s + 1, e, cipher);
    let num = parseInt(cipher[s] + cipher[s + 1]);
    if (num <= 26) {
      ans += calcWays(s + 2, e, cipher);
    }
  }
  cache[key] = ans;
  return ans;
}
