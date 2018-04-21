function constrcutQueue(queue) {
  // nLog(n)
  queue.sort((a, b) => {
    let diff = a[1] - b[1];
    if (diff !== 0) return diff;
    return -1 * (a[0] - b[0]);
  });

  let ans = [];
  // 1
  if (queue.length) {
    ans.push(queue.shift());
  }
  
  while (queue.length) {
    let sub = [];
    let K = queue[0][1];
    // n
    while (queue.length && queue[0][1] === K) {
      sub.push(queue.shift());
    }
    // n^2
    while (sub.length) {
      let s = sub.shift();
      K = s[1];
      for (let i = 0; i < ans.length; ++i) {
        let a = ans[i];
        if (a[0] >= s[0]) --K;
        if (K <= 0) {
          if (K < 0) ans.splice(i, 0, s);
          if (K == 0) ans.splice(i+1, 0, s);
          break;
        }
      }
    }
  }
  return ans;
}
