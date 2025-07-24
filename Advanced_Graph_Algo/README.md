## Floyd-Warshall
- Purpose: Find the shortest path distance between all pair of nodes i and j in the graph.
- Limitation:
  - Negative edge weights: Y
  - Negative weight cycles: Can detect
- Complexity:
  - Time complexity: O(V ^ 3)
  - Space complexity: O(1) if compute on the current graph matrix

## Bellman-Ford
- Purpose: Find the shortest distances from a given source to all other vertices
- Limitation:
  - Negative edge weights: Y
  - Negative weight cycles: Can detect
- Complexity:
  - Time complexity: O(V * E)
  - Space complexity: O(1) if compute on the current graph matrix
 
## Dijistrak
- Purpose: Find the shortest distances from a given source to all other vertices
- Limitation:
  - Negative edge weights: N
  - Negative weight cycles: N
- Complexity:
  - Time complexity: O(E * log(V)) with a MinHeap
  - Space complexity: O(V) for a Heap
 

