class UnionFind {
  constructor (n) {
    this._count = n;
    this._parent = Array(n).fill(0).map((_, i) => i);
  }

  union (a, b) {
    const rootA = this.root(a);
    const rootB = this.root(b);
    if (rootA !== rootB) {
      this._parent[b] = rootA;
      count--;
    }
  }

  connected (a, b) {
    return this.root(a) === this.root(b);
  }

  root (a) {
    while (this._parent[a] !== a) {
      this._parent[a] = this.find(this._parent[a]);
    }
    return this._parent[a];
  }

  get count () {
    return this._count;
  }
}
