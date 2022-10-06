function encode (strs) {
  return strs.reduce((output, s) =>  output + `${s.length}#${s}`, '');
}

function decode (str) {
  const output = [];
  const N = str.length;
  let i = 0;
  let len = '';
  while (i < N) {
    if (!len) {
      while (str[i] !== '#') {
       len += str[i++];
      }
    } else {
      const count = parseInt(len);
      len = '';
      output.push(str.substring(i, i + count));
      i += count - 1;
    }
    i++;
  }
  return output;
}
