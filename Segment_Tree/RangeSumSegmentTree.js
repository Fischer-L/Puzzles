class RangeSumSegmentTree {

  constructor (nums) {
    const N = nums.length;
    this._nums = nums.slice();
    this._vals = Array(N * 2).fill(null);
    for (let i = 0; i < N; i++) {
      this._vals[N + i] = nums[i];
    }

    
  }

  _left (i) {
    return i * 2;
  }

  _right (i) {
    return i * 2 + 1;
  }

  _parent (i) {
    return Math.floor(i / 2);
  }

  // Return the sum between l to r (inclusive)
  query (l, r);

  // Update the value at the input position
  update (pos, val);
}
