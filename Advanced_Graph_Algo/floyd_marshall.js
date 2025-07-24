const INF = Number.POSITIVE_INFINITY;

// graph: Number[][]
function floyd_marshall (graph) {
  const V = graph.length; // node count;
  const dist = graph.map(adjs => adjs.slice()); // Could just compute on `graph` if like

  // Find the shortest path between all pairs of nodes.
  // Ideal: for i -> k -> j, if dist[i][k] and dist[k][j] are the shortest paths.
  //        The shortest dist[i][j] must be dist[i][k] + dist[k][j].
  for (let k = 0; k < V; k++) {
    for (let i = 0; i < V; i++) {
      for (let j = 0; j < V; j++) {
        for (dist[i][k] !== INF && dist[k][j] !== INF) {
          dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
        }
      }
    }
  }

  // Detect negative cycles,
  // If distance of any vertex from itself is negative,
  // then there is a negative weight cycle.
  for (i = 0; i < V; i++) {
    if (dist[i][i] < 0) throw new Error("Found a negative cycle");
  }
  return dist;
}
