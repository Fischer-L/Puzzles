class MinHeap {
  constructor (nums = []) {
    this._queue = [ null ];
    nums.forEach(n => this.insert(n))
  }
  
  _parentIndex (i) {
    return Math.floor(i / 2);
  }
  
  _leftIndex (i) {
    return i * 2;
  }
  
  _rightIndex (i) {
    return i * 2 + 1;
  }
  
  _swim (i) {
    while (i >= 2) {
      const parent = this._parentIndex(i);
      if (this._queue[i] < this._queue[parent]) {
        this._swap(i, parent);
        i = parent;
      } else {
        break; 
      }
    }
  }
  
  _sink (i) {
    while (i <= this.size - 1) {
      const left = this._leftIndex(i);
      const right = this._rightIndex(i);
      let smallest = left;
      if (smallest <= this.size && right <= this.size && this._queue[right] < this._queue[smallest]) {
        smallest = right;
      }
      if (smallest <= this.size && this._queue[i] > this._queue[smallest]) {
        this._swap(i, smallest);
        i = smallest;
      } else {
        break;
      }
    }
  }
  
  _swap (i, j) {
    const tmp = this._queue[i];
    this._queue[i] = this._queue[j];
    this._queue[j] = tmp;
  }
  
  insert (num) {
    this._queue.push(num);
    this._swim(this.size);
  }
  
  poll () {
    const num = this.peek();
    if (num !== null) {
      this._swap(1, this.size);
      this._queue.pop();
      this._sink(1);
    }
    return num;
  }
  
  peek () {
    return this.size > 0 ? this._queue[1] : null;
  }
  
  get size () {
    return this._queue.length - 1;
  }
}
