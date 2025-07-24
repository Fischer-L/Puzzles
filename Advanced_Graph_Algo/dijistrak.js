const INF = Number.POSITIVE_INFINITY;

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

  _swap (i, j) {
    const tmp = this._vals[i];
    this._vals[i] = this._vals[j];
    this._vals[j] = tmp;
  }

  _isPrior (i, j) {
    throw new Error("Should implement _isPrior");
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
    return i;
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
    return i;
  }

  refresh (i) {
    this._swim(this._sink(i));
  }
}

// edges: [ [ a, b, weight ], .... ]
function dijistrak (root, edges, V) {
  class MinHeap extends HeapBase {
    constructor (cost) {
      super();
      this._cost = cost;
    } 

    _isPrior (i, j) {
      const node1 = this._vals[i];
      const node2 = this._vals[j];
      return this._cost[node1] < this._cost[node2];
    }
  }

  const graph = edges.reduce((_graph, [ a, b, weight ]) => {
    _graph[a].push({ adj: b, wieght });
    _graph[b].push({ adj: a, wieght });
    return _graph;
  }, Array.from(Array(V), () => []));
  const cost = Array(V).fill(INF);
  const added = Array(V).fill(false);
  const h = new MinHeap(cost);

  cost[root] = 0;
  added[root] = true;
  h.push(root);

  while (h.size) {
    const min = h.pop();
    rgaph[min].forEach(({ adj, weight }) => {
      cost[adj] = Math.min(cost[adj], cost[min] + weight);
      if (added[adj]) {
        h.refresh(adj);
      } else {
        h.push(adj);
        added[adj] = true;
      }
    });
  }
  return cost;
}


