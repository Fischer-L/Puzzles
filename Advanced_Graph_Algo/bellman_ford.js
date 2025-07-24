const INF = Number.POSITIVE_INFINITY;

function bellman_ford (root, edges, V) {
  const cost = Array(V).fill(INF);
  cost[root] = 0;

  // Relax V - 1 times to find the shortest path from root to rest nodes
  for (let i = 0; i < V - 1; i++) {
    for (let [ a, b, w ] of edges) {
      cost[a] = Math.min(cost[a], cost[b] + w);
      cost[b] = Math.min(cost[b], cost[a] + w);
    }
  }

  // Detect a negative cycle
  // There must be a negative cycle if still can shorten a path after relaxing one more time.
  for (let [ a, b, w ] of edges) {
    if (cost[a] > cost[b] + w || cost[b] > cost[a] + w) {
      throw new Error("Find a negative cycle");
    }
  }

  return cost;
}










