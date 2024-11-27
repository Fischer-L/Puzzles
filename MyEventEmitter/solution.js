class MyNode {

  constructor (val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class MyDoublyLinkedList {

  constructor () {
    this._nodes = new Set();
    this._head = new MyNode(null);
    this._tail = new MyNode(null);
    this._head.next = this._tail;
    this._tail.prev = this._head;
  }

  get size () {
    return this._nodes.size;
  }

  add (node) {
    if (!node || this._nodes.has(node)) {
      return;
    }
    const prev = this._tail.prev;
    prev.next = node;
    node.prev = prev;
    node.next = this._tail;
    this._tail.prev = node;
    this._nodes.add(node);
  }

  remove (node) {
    if (node && this._nodes.has(node)) {
      const { prev, next } = node;
      prev.next = next;
      next.prev = prev;
      node.prev = node.next = null;
      this._nodes.delete(node);
    }
  }

  poll () {
    if (this.size) {
      const first = this._head.next;
      this.remove(first);
      return first;
    }
    return null;
  }

  toArray () {
    const arr = [];
    let node = this._head.next;
    while (node !== this._tail) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }
}

class MyListenerList extends MyDoublyLinkedList {

  constructor () {
    super();
    this._nodeSet = new Map();
  }

  _getListenerNodes (listener) {
    if (!this._nodeSet.has(listener)) {
      this._nodeSet.set(listener, new Set());
    }
    return this._nodeSet.get(listener);
  }

  add (listener, option) {
    const node = new MyNode({ listener, option });
    const nodes = this._getListenerNodes(listener);
    nodes.add(node);
    super.add(node);
  }

  remove (node) {
    if (node) {
      const nodes = this._getListenerNodes(node.val.listener);
      nodes.delete(node);
      super.remove(node);
    }
  }

  removeAll (listener) {
    const arr = Array.from(this._getListenerNodes(listener));
    arr.forEach(node => this.remove(node));
  }

  poll () {
    const first = super.poll();
    this.remove(first);
    return first;
  }
}

class MyEventEmitter {

  constructor () {
    this._listenersMap = new Map();
  }

  _getListenerList (eventName) {
    if (!this._listenersMap.has(eventName)) {
      this._listenersMap.set(eventName, new MyListenerList());
    }
    return this._listenersMap.get(eventName);
  }

  on (eventName, listener) {
    const list = this._getListenerList(eventName);
    list.add(listener);
    return this;
  }

  once (eventName, listener) {
    const list = this._getListenerList(eventName);
    list.add(listener, { once: true });
    return this;
  }

  off (eventName, listener) {
    const list = this._getListenerList(eventName);
    list.removeAll(listener);
    return this;
  }

  emit (eventName, ...args) {
    const listeners = this._getListenerList(eventName);
    if (!listeners.size) {
      return;
    }
    const nodes = listeners.toArray();

    for (let i = 0; i < nodes.length; i++) {
      try {
        const { listener, option } = nodes[i].val;
        if (option?.once) {
          listeners.remove(nodes[i]);
        }
        listener.apply(undefined, args);
      } catch (e) {
        console.error(e);
      }
    }
    return this;
  }
}

const emitter = new MyEventEmitter();

function a (i) {
  console.log('a:', i);
}
function b (i) {
  console.log('b:', i);
  emitter.off('go', c);
  emitter.emit('go', i + 1);
}
function c (i) {
  console.log('c:', i);
}

emitter.on('go', a);
emitter.once('go', a);
emitter.once('go', b);
emitter.on('go', c);
emitter.on('go', a);
emitter.emit('go', 1);
console.log('end:', '4');
