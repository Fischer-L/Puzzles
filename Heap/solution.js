class HeapBase {

  constructor () {
    this._vals = [ null ];
  }

  get size () {
    return this._vals.length - 1;
  }

  _left (i) {
    i = i * 2;
    return i <= this.size ? i : null;
  }

  _right (i) {
    i = i * 2 + 1;
    return i <= this.size ? i : null;
  }

  _parent (i) {
    return Math.floor(i / 2);
  }

  _swap (i , j) {
    const tmp = this._vals[i];
    this._vals[i] = this._vals[j];
    this._vals[j] = tmp;
  }

  _isPrior (i, j) {
    throw new Error('Should implement _isPrior');
  }

  peek () {
    return this.size > 0 ? this._vals[1] : null;
  }

  pop () {
    const v = this.peek();
    if (v !== null) {
      this._swap(1, this.size);
      this._vals.pop();
      this._sink(1);
    }
    return v;
  }

  _sink (i) {
    while (1 <= i && i < this.size) {
      const l = this._left(i);
      const r = this._right(i);
      let t = l;
      if (r && this._isPrior(r, t)) {
        t = r;
      }
      if (t && this._isPrior(t, i)) {
        this._swap(i, t);
        i = t;
      } else {
        break;
      }
    }
  }

  push (v) {
    this._vals.push(v);
    this._swim(this.size);
  }

  _swim (i) {
    while (1 < i && i <= this.size) {
      const p = this._parent(i);
      if (this._isPrior(i, p)) {
        this._swap(i, p);
        i = p;
      } else {
        break;
      }
    }
  }
}

class MinHeap extends HeapBase {

  _isPrior (i, j) {
    return this._vals[i] < this._vals[j];
  }
}

class MaxHeap extends HeapBase {

  _isPrior (i, j) {
    return this._vals[i] > this._vals[j];
  }
}
