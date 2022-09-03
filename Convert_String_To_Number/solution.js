function toNumber (char) {
  const num = char.charCodeAt(0) - '0'.charCodeAt(0);
  if (0 <= num && num <= 9) {
    return num;
  }
  return NaN;
}

function convertStringToNumber (str) {
  let sum = 0;
  let factor = 10;
  let decimalFactor = 0.1;
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
    } else {
      const num = toNumber(c);
      if (Number.isNaN(num)) {
        break;
      }
      if (decimal) {
        sum = sum + (num * decimalFactor);
        decimalFactor *= 0.1;
      } else {
        sum = sum * factor + num;
      }
    }
  }
  
  return sum * (negative ? -1 : 1);
}
