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
    this._vals[i] = this._build(this._left(i), l, m) + this._build(this._right(i), m + 1, r);
  }

  // Return the sum between start(s) to end(e) (inclusive)
  query (s, e) {
    const N = this._nums.length;
    return this._query(0, 0, N - 1, Math.max(s, 0), Math.min(e, N - 1));
  }

  _query (i, l, r, s, e) {
    if (e < l || s > r) {
      return 0;
    }
    if (s === l && r === e) {
      return this._vals[i];
    }
    const m = Math.floor((s + e) / 2);
    if (e <= m) {
      return this._query(this._left(i), l, m, s, e);
    } else if (s >= m + 1) {
      return this._query(this._right(i), m + 1, r, s, e);
    } else {
      return this._query(this._left(i), l, m, s, m) + this._query(this._right(i), m + 1, r, m + 1, e);
    }
  }

  // Update the value at the input position
  update (pos, val) {
    const N = this._nums.length;
    this._update(0, 0, N - 1, Math.max(0, Math.min(N - 1, pos)), val);
  }

  _update (i, l, r, pos, val) {
    if (l === r && r === pos) {
      this._vals[i] = this._nums[pos] = val;
      return val;
    }

    const m = Math.floor((l + r) / 2);
    if (pos <= m) {
       this._vals[i] = this._update(this._left(i), l, m, pos, val) + this._vals[this._right(i)];
    } else {
      this._vals[i] =  this._vals[this._left(i)] + this._update(this._right(i), m + 1, r, pos, val);
    }
    return this._vals[i];
  }
}
