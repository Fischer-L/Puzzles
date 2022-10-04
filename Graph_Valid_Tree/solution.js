function validTree(n, edges) {
  const u = new UnionFind(n);
  for (let i = 0; i < edges.length; i++) {
    const [ a, b ] = edges[i];
    if (u.find(a) === u.find(b)) {
      return false;
    }
    u.union(a, b);
  }
  return u.count === 1;
}

class UnionFind {
  constructor (n) {
    this._count = n;
    this._parent = Array(n).fill(0).map((_, i) => i);
  }

  union (a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA === rootB) {
      return;
    }

    if (rootA === a && rootB === b) {
      this._count--;
      this._parent[b] = rootA;
    } else if (rootA === a) {
      this._count--;
      this._parent[a] = rootB;
    } else if (rootB === b) {
      this._count--;
      this._parent[b] = rootA;
    } else {
      this.union(rootA, rootB);
    }
  }

  find (a) {
    if (a !== this._parent[a]) {
      this._parent[a] = this.find(this._parent[a]);
    }
    return this._parent[a];
  }

  get count () {
    return this._count;
  }
}
