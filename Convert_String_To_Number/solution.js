function toNumber (char) {
  const num = char.charCodeAt(0) - '0'.charCodeAt(0);
  if (0 <= num && num <= 9) {
    return num;
  }
  return -1;
}

function convertStringToNumber (str) {
  let sum = 0;
  let factor = 1;
  let decimal = false;
  let negative = false;
  let start = 0;
  if (str[0] === '-') {
    negative = true;
    start++;
  } else if (str[0] === '.') {
    decimal = true;
    start++;
  }

  for (let i = start; i < str.length; i++) {
    const c = str[i];
    if (c === '.') {
      if (decimal) {
        break;
      }
      decimal = true;
      factor = 0.1;
    } else {
      const num = toNumber(c);
      if (num < 0) {
        break;
      }
      if (decimal) {
        sum = sum + (num * factor);
        factor *= 0.1;
      } else {
        sum = sum * factor + num;
        factor *= 10;
      }
    }
  }
  
  return sum * (negative ? -1 : 1);
}
