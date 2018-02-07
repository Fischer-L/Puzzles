var nextClosetTime = function (hhmm) {
  let digits = hhmm.split(":");
  digits = [ ...digits[0], ...digits[1] ].map(v => +v);
  let time = digits.slice();
  digits = digits.sort();

  let next = time.slice();
  let i = digits.indexOf(next[3]);
  next[3] = digits[++i % 4];
  if (isLater(next, time)) return format(next);

  let d = next[2];
  for (let i = 0; i < 4; ++i) {
    if (digits[i] > next[2] && digits[i] <= 5) {
      next[2] = digits[i];
      break;
    }
  }
  if (next[2] === d && digits[0] <= 5) {
    next[2] = digits[0];
  }
  if (isLater(next, time)) return format(next);

  for (let i = 0; i < 4; ++i) {
    if (digits[i] <= next[0] && digits[i] <= 2) {
      next[0] = digits[i];
      break;
    }
  }


  for (let i = 0; i < 4; ++i) {
    if (next[0] == 2) {
      if (digits[i] <= next[1] && digits[i] <= 3) {
        next[1] = digits[i];
        break;
      }
    } else {
      if (digits[i] <= next[1]) {
        next[1] = digits[i];
        break;
      }
    }
  }

  return format(next);

  function isLater(t1, t0) {
    for (let i = 0; i < 4; ++i) {
      if (t1[i] > t0[i]) return true;
    }
    return false;
  }

  function format(t) {
    return `${t[0]}${t[1]}:${t[2]}${t[3]}`;
  }

  return digits;
}
