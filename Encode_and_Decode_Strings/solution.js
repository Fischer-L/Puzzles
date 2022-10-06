function encode (strs) {
  return strs.reduce((output, s) =>  output + `${s.length}#${s}`, '');
}

function decode (str) {
  const output = [];
  const N = str.length;
  let i = 0;
  let s = '';
  let len = '';
  while (i < N) {
    const c = str[i];
    if (!s && c === '#') {
      let count = parseInt(len);
      len = '';
      while (count > 0) {
        i++;
        count--;
        s += str[i];
      }
      output.push(s);
      s = '';
    } else {
      len += c;
    }
    i++;
  }
  return output;
}
