class MaxHeap {
  constructor (nums = []) {
    this._queue = [ null ];
    nums.forEach(n => this.insert(n));
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
  
  _swap (i, j) {
    const tmp = this._queue[i];
    this._queue[i] = this._queue[j];
    this._queue[j] = tmp;
  }
  
  _swim (i) {
    while (i >= 2) {
      const parent = this._parentIndex(i);
      if (this._queue[i] > this._queue[parent]) {
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
      let largest = left;
      if (largest <= this.size && right <= this.size && this._queue[right] > this._queue[largest]) {
        largest = right;
      }
      if (largest <= this.size && this._queue[i] < this._queue[largest]) {
        this._swap(i, largest);
        i = largest;
      } else {
        break;
      }
    }
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
