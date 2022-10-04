
function validTree(n, edges) {
  const graph = buildGraph(edges);
  const visited = new Set();
  traverse(graph, edges[0][0], edges[0][0], visited);
  return visited.size === n;
}

function buildGraph (edges) {
  const graph = {};
  edges.forEach(([ a, b ]) => {
    if (!graph[a]) {
      graph[a] = [];
    }
    if (!graph[b]) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  });
  return graph;
}

function traverse (graph, here, from, visited) {
  if (visited.has(here)) {
    return false;
  }
  visited.add(here);

  const neighbors = graph[here];
  for (let i = 0; i < neighbors.length; i++) {
    const to = neighbors[i];
    if (to !== from && !traverse(graph, to, here, visited)) {
     return false;
    }
  }
  return true;
}
