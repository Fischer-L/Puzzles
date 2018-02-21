var findCelebrity = function(n) {
  let candidates = [];
  for (let i = 0; i < n; ++i) candidates.push(i);
  
  while (candidates.length >= 2) {
    let a = candidates.pop();
    let b = candidates.pop();
    let knew = knows(a, b);
    if (knew) {
      candidates.push(b);
    } else {
      candidates.push(a);
    }
  }
  
  let celebrity = -1;
  if (candidates.length) {
    celebrity = candidates[0];
    for (let i = 0; i < n; ++i) {
      if (celebrity != i) {
        if (!knows(i, celebrity) || knows(celebrity, i)) return -1;
      }
    }
  }
  return celebrity;
}

var knows = function(a, b) {
  if (a == b) return true;
  if (a == 1) return false;
  return true;
}
