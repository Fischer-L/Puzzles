class RangeSumSegmentTree {

  constructor (nums) {
    const N = nums.length;
    this._nums = nums.slice();
    this._vals = Array(N * 2).fill(null);
    _build (0, 0, N - 1);
  }

  _left (i) {
    return i * 2 + 1;
  }

  _right (i) {
    return i * 2 + 2;
  }

  _parent (i) {
    return Math.floor((i - 1) / 2);
  }

  _build (i, l, r) {
    if (l === r) {
      this._vals[i] = this._nums[r];
      return this._vals[i];
    }
    const m = Math.floor((l + r) / 2);
    this._vals[i] = this._build(this._left(i), l, m) + this._build(this._right, m + 1, r);
  }

  // Return the sum between l to r (inclusive)
  query (l, r);

  // Update the value at the input position
  update (pos, val);
}
