function solution (nums, x) {
  const numFreq = Array(nums.length + 1).fill(0);
  nums.forEach(n => numFreq[n % x]++);

  for (let i = 1; i < numFreq.length; i++) {
    if (numFreq[i]) {
      // The number i exists
      continue;
    }
    if (numFreq[i % x] > 1) {
      // Assume x is 3, the number 5 with no freqs and the number 2 has 2 freqs.
      // We can produce a number 5 by adding 3 with one number 2.
      numFreq[i % x]--;
      numFreq[i]++;
    }
  }

  // If the number 0 is counted as well, then starts at `i = 0`
  for (let i = 1; i < numFreq.length; i++) {
    if (!numFreq[i]) {
      return i;
    }
  }
  return numFreq.length;
}
