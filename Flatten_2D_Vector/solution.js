class Vector2D {
  constructor(vectors) {
    this._vectors = vectors;
    this._i = 0;
    this._j = -1;
    this._moveToNext();
  }
  
  _moveToNext() {
    let i = this._i;
    if (i >= this._vectors.length) {
      this._i = i = null;
    }
    if (i === null) return;
    
    let v = this._vectors[i];
    if (v && v.length && this._j < v.length) {
      this._j++;
      return;
    }
    this._i = i + 1;
    this._j = -1;
    return this._moveToNext();
  }
  
  hasNext() {
    return this._i !== null;
  }
  
  next() {
    if (!this.hasNext()) return null;
    let n = this._vectors[this._i][this._j];
    this._moveToNext();
    return n;
  }
}
