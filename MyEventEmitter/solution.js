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
    if (this._nodes.has(node)) {
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
    if (this._nodes.has(node)) {
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
    while (node.val !== this._tail.val) {
      arr.push(node);
      node = node.next;
    }
    return arr;
  }
}

class MyPayloadList extends MyDoublyLinkedList {

  constructor () {
    super();
  }

  add (args) {
    super.add(new MyNode({ args }));
  }
}

class MyListenerList {

  constructor () {
    this._nodeSet = new Map();
    this._list = new MyDoublyLinkedList();
  }

  _getListenerNodes (listener) {
    if (!this._nodeSet.has(listener)) {
      this._nodeSet.set(listener, new Set());
    }
    return this._nodeSet.get(listener);
  }

  get size () {
    return this._list.size;
  }

  add (listener, option) {
    const node = new MyNode({ listener, option });
    const nodes = this._getListenerNodes(listener);
    nodes.add(node);
    this._list.add(node);
  }

  remove (node) {
    const nodes = this._getListenerNodes(node.val.listener);
    nodes.delete(node);
    this._list.remove(node);
  }

  removeAll (listener) {
    const arr = Array.from(this._getListenerNodes(listener));
    arr.forEach(node => this.remove(node));
  }

  poll () {
    const first = this._list.poll();
    this.remove(first);
    return first;
  }

  toArray () {
    return this._list.toArray();
  }
}

class MyEventEmitter {

  constructor () {
    this._payloadsMap = new Map();
    this._listenersMap = new Map();
  }

  _getPayloadList (eventName) {
    if (!this._payloadsMap.has(eventName)) {
      this._payloadsMap.set(eventName, new MyPayloadList());
    }
    return this._payloadsMap.get(eventName);
  }

  _getListenerList (eventName) {
    if (!this._listenersMap.has(eventName)) {
      this._listenersMap.set(eventName, new MyListenerList());
    }
    return this._listenersMap.get(eventName);
  }

  _fire (eventName) {
    const payloads = this._getPayloadList(eventName);
    if (!payloads.size) {
      return;
    }
    const args = payloads.poll().val.args;

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
    this._getPayloadList(eventName).add(args);
    this._fire(eventName);
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
console.log('4');
