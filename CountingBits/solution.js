function countBits(n) {
  let ans = [0];
  for (let i = 0; i <= n; ++i) {
    let trail = i & 1 ? 1 : 0;
    ans[i] = ans[i>>1] + trail;
  }
  return ans;
}
