/**
 * n {number}
 * edges {number[][]}
 */
function countComponents (n, edges) {
  const uf = new UnionFind(n);
  edges.forEach((a, b) => uf.union(a, b));
  return uf.count;
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
    this._parent[b] = rootA;
    this._count--;
  }
  
  connected (a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    return rootA === rootB;
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
