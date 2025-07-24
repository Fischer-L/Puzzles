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

const edges = [ [0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1] ];
const expected = [ 2, 0, 3, 3, 2 ];
const result = bellman_ford(1, edges, 5);
if (JSON.stringify(result) === JSON.stringify(expected)) {
  console.log("Success on bellman_ford");
} else {
  console.error("Error on bellman_ford");
}

const negativeEdges = [ [0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,-1],[3,4,1] ];
try {
  bellman_ford(1, negativeEdges, 5);
  console.log("Fail to find a negative cycle");
} catch (e) {
  console.log("Success: " + e);
}






