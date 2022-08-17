function getModifiedArray(length, updates) {
  const diffs = Array(length).fill(0);
  updates.forEach((s, e, inc) => {
    diffs[s] += inc;
    if (e + 1 < length) {
      diffs[e+1] -= inc;
    }
  });
  const results = [ diffs[0] ];
  for (let i = 1; i < length; i++) {
    results.push(diffs[i-1] + diffs[i]);
  }
  return results;
}
