function extracArraytNumberToken (str) {
  let token = '';
  let end = -1;
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c === ',' || c === ']') {
      end = i;
      break;
    }
    token += c.trim();
  }
  return [ token, str.substring(end) ];
}

function extractArrayStringToken (str) {
  let tokens = str[0];
  let end = -1;

  for (let i = 1; i < str.length; i++) {
    const c = str[i];
    tokens += c;
    if (c === '"') {
      end = i + 1;
      break;
    } else if (c === '\\') {
      i++;
      tokens += str[i];
    }
  }
  if (end < 0) {
    throw new Error(`Find not end of a string token: ${str}`);
  }

  const restStr = str.substring(end).trim();
  if (restStr[0] !== ',' && restStr[0] !== ']') {
    throw new Error(`invalid string token: ${str}`);
  }
  return [ tokens, restStr ];
}

function extractArrayTokens (str) {
  if (str[0] !== '[') {
    throw new Error(`decode an invalid array str: ${str}`);
  }

  const tokens = [];
  let restStr = '';
  let substr = str.substring(1).trim();

  while (substr.length) {
    const c = substr[0];

    if (c === ']') {
      restStr = substr.substring(1);
      break;
    } else if (c === '[') {
      const result = decodeArrayTokens(substr);
      tokens.push(result[0]);
      substr = result[1];
    } else if (c === ' ' || c === '\t' || c === ',') {
      substr = substr.substring(1);
    } else {
      const result = c === '"' ? extractArrayStringToken(substr) : extracArraytNumberToken(substr);
      tokens.push(result[0]);
      substr = result[1];
    }

    substr = substr.trim();
  }

  return [ tokens, restStr ];
}
