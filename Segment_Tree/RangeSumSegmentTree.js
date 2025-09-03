class RangeSumSegmentTree {

  constructor (nums) {
    const N = nums.length;
    this._nums = nums.slice();
    this._vals = Array(N * 4).fill(0);
    this._build (0, 0, N - 1);
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

    const a = this._left(i);
    const b = this._right(i);
    const m = Math.floor((l + r) / 2);
    let sum = this._build(a, l, m) + this._build(b, m + 1, r);
    this._vals[i] = sum;
    return sum;
    
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

    const a = this._left(i);
    const b = this._right(i);
    const m = Math.floor((l + r) / 2);
    if (e <= m) {
      return this._query(a, l, m, s, e);
    } else if (s >= m + 1) {
      return this._query(b, m + 1, r, s, e);
    } else {
      return this._query(a, l, m, s, m) + this._query(b, m + 1, r, m + 1, e);
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

    const a = this._left(i);
    const b = this._right(i);
    const m = Math.floor((l + r) / 2);
    let sum = 0;
    if (pos <= m) {
      sum = this._update(a, l, m, pos, val) + this._vals[b];
    } else {
      sum = this._vals[a] + this._update(b, m + 1, r, pos, val);
    }
    this._vals[i] = sum;
    return sum;
  }
}
