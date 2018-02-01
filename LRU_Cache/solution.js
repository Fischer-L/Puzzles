/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.count = 0;
    this.nodeMap = {};
    this.head = this._mkNode(null, null);
    this.tail = this._mkNode(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype._mkNode = function(key, value) {
    return {
        key,
        value,
        prev: null,
        next: null
    };
}

LRUCache.prototype._rmNode = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
}

LRUCache.prototype._pushNode = function (node) {
    let oldLast = this.tail.prev;
    oldLast.next = node;
    node.prev = oldLast;
    node.next = this.tail;
    this.tail.prev = node;
}

LRUCache.prototype._unshiftNode = function (node) {
    let oldFirst = this.head.next;
    this.head.next = node;
    node.prev = this.head;
    node.next = oldFirst;
    oldFirst.prev = node;
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.nodeMap[key];
    if (!node) return -1;
    
    this._rmNode(node);
    this._unshiftNode(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.nodeMap[key];
    if (node) {
        this._rmNode(node);
        delete this.nodeMap[node.key];
        --this.count;
    }
    node = this._mkNode(key, value);
    this.nodeMap[key] = node;
    if (this.count == this.capacity) {
        let lru = this.tail.prev;
        delete this.nodeMap[lru.key];
        this._rmNode(lru);
        --this.count;
    }
    this._unshiftNode(node);
    ++this.count;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
