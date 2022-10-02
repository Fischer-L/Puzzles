class UnionFind {
  constructor (n) {
    this._count = n;
    this._parent = Array(n).fill(0).map((_, i) => i);
  }

  union (a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      this._parent[b] = rootA;
      count--;
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
