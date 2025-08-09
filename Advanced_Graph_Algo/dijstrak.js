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
}

// edges: [ [ a, b, weight ], .... ]
function dijstrak (root, edges, V) {
  class MinHeap extends HeapBase {
    _isPrior (i, j) {
      const a = this._vals[i].cost;
      const b = this._vals[j].cost;
      return a < b;
    }
  }

  const graph = edges.reduce((_graph, [ a, b, weight ]) => {
    _graph[a].push({ adj: b, weight });
    _graph[b].push({ adj: a, weight });
    return _graph;
  }, Array.from(Array(V), () => []));
  const costs = Array(V).fill(INF);
  const relaxed = Array(V).fill(false);
  const h = new MinHeap();

  costs[root] = 0;
  h.push({ city: root, cost: 0 });

  while (h.size) {
    const { city: c } = h.pop();
    if (relaxed[c]) {
      continue;
    }
    relaxed[c] = true;
    
    graph[c].forEach(({ adj, weight }) => {
      if (relaxed[adj]) {
        return;
      }
      const cost2 = costs[c] + weight;
      if (cost2 < costs[adj]) {
        costs[adj] = cost2;
        h.push({ city: adj, cost: cost2 });
      }
    });
  }
  return costs;
}

const edges = [ [0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1] ];
const expected = [ 2, 0, 3, 3, 2 ];
const result = dijstrak(1, edges, 5);
if (JSON.stringify(result) === JSON.stringify(expected)) {
  console.log("Success on dijstrak");
} else {
  console.error("Error on dijstrak");
}





