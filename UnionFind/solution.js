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
      this._parent[b] = a;
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

  connected (a, b) {
    return this.find(a) === this.find(b);
  }

  find (a) {
    if (this._parent[a] !== a) {
      this._parent[a] = this.find(this._parent[a]);
    }
    return this._parent[a];
  }

  get count () {
    return this._count;
  }
}
