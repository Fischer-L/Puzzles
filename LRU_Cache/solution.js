class LRUCache {
  constructor (capacity) {
    this._capacity = capacity;
    this._count = 0;
    this._nodeMap = {};
    this._head = this._makeNode(); // The most recent
    this._tail = this._makeNode(); // The least recent
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  _makeNode (key, value) {
    return {
      key, 
      value,
      next: null,
      prev: null,
    };
  }

  _removeNode (node) {
    if (!node || !this._nodeMap[node.key]) {
      return;
    }
    const { prev, next } = node;
    prev.next = next;
    next.prev = prev;
    node.prev = node.next = null;
    delete this._nodeMap[node.key];
  }

  _updateLatestNode (node) {
    if (!node) {
      return;
    }
    this._removeNode(node);
    const prev = this._head;
    const next = this._head.next;
    prev.next = node;
    next.prev = node;
    node.prev = prev;
    node.next = next;
    this._nodeMap[node.key] = node;
  }

  get (key) {
    const node = this._nodeMap[key];
    if (node) {
      this._updateLatestNode(node);
    }
    return node ? node.value : null;
  }

  put (key, value) {
    let node = null;
    let count = this._count;

    if (this._nodeMap[key]) {
      node = this._nodeMap[key];
      node.value = value;
    } else {
      node = this._makeNode(key, value);
      count++;
    }

    if (count > this._capacity) {
      this._removeNode(this._tail.prev);
      this._count--;
    }
    this._updateLatestNode(node);
    this._count = count;
  }

  get count () {
    return this._count;
  }
}
