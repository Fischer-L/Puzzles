class HeapBase {
  constructor (cmp) {
    if (typeof cmp === 'function') {
      this._cmp = cmp;
    }
    
    this._q = [ null ];
  }
  
  _cmp (a, b) {
    return a - b;
  }

  _parent (i) {
    return Math.floor(i / 2);
  }

  _left (i) {
    return i * 2;
  }

  _right (i) {
    return i * 2 + 1;
  }

  _swap (i, j) {
    const tmp = this._q[i];
    this._q[i] = this._q[j];
    this._q[j] = tmp;
  }

  get size () {
    return this._q.length - 1;
  }

  insert (v) {
    this._q.push(v);
    this._swim(this.size);
  }

  peek () {
    return this.size ? this._q[1] : null;
  }

  pop () {
    const v = this.peek();
    if (v !== null) {
      this._swap(1, this.size);
      this._q.pop();
      this._sink(1);
    }
    return v;
  }
}

class MinHeap extends HeapBase {
  _swim (i) {
    while (i >= 2) {
      const p = this._parent(i);
      if (this._cmp(this._q[i], this._q[p]) < 0) {
        this._swap(i, p);
        i = p;
      } else {
        break;
      }
    }
  }

  _sink (i) {
    while (i < this.size) {
      const l = this._left(i);
      const r = this._right(i);
      let min = l;
      if (min <= this.size && r <= this.size && this._cmp(this._q[r], this._q[min]) < 0) {
        min = r;
      }
      if (min <= this.size && this._cmp(this._q[min], this._q[i]) < 0) {
        this._swap(i, min);
        i = min;
      } else {
        break;
      }
    }
  }
}


class MaxHeap extends HeapBase {
  _swim (i) {
    while (i >= 2) {
      const p = this._parent(i);
      if (this._cmp(this._q[i], this._q[p]) > 0) {
        this._swap(i, p);
        i = p;
      } else {
        break;
      }
    }
  }

  _sink (i) {
    while (i < this.size) {
      const l = this._left(i);
      const r = this._right(i);
      let max = l ;
      if (max <= this.size && r <= this.size && this._cmp(this._q[r], this._q[max]) > 0) {
        max = r;
      }
      if (max <= this.size && this._cmp(this._q[max], this._q[i]) > 0) {
        this._swap(i, max);
        i = max;
      } else {
        break;
      }
    } 
  }
}
