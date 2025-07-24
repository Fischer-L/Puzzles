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
        if (dist[i][k] !== INF && dist[k][j] !== INF) {
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


const validGraph = [
  [ 0, 2, INF, INF, 8 ],
  [ 2, 0, 3, INF, 2 ],
  [ INF, 3, 0, 1, INF ],
  [ INF, INF, 1, 0, 1 ],
  [ 8, 2, INF, 1, 0 ]
];
const expectedResult = [
  [ 0, 2, 5, 5, 4 ],
  [ 2, 0, 3, 3, 2 ],
  [ 5, 3, 0, 1, 2 ],
  [ 5, 3, 1, 0, 1 ],
  [ 4, 2, 2, 1, 0 ]
];
if (JSON.stringify(floyd_marshall(validGraph)) === JSON.stringify(expectedResult)) {
  console.log("Success on validGraph");
} else {
  console.error("Error on validGraph");
}




