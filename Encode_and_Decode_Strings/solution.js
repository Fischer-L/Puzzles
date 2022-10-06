function encode (strs) {
  return strs.reduce((output, s) =>  output + `${s.length}#${s}`, '');
}

function decode (str) {
  const output = [];
  const N = str.length;
  let i = 0;
  let len = '';
  while (i < N) {
    while (str[i] !== '#') {
     len += str[i++];
    }
    i++;
    
    const count = parseInt(len);
    len = '';
    output.push(str.substring(i, i + count));
    i += count;
  }
  return output;
}
