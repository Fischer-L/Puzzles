const INF = Number.MAX_SAFE_INTEGER;

function walsAndGates (rooms) {  
  const M = rooms.length;
  const N = rooms[0].length;
  let q = [];

  for (let m = 0; m < M; m++) {
    for (let n = 0; n < N; n++) {
      if (rooms[m][n] === 0) q.push([ m, n ]);
    }
  }

  let depth = 1;
  while (q.length) {
    const nextQ = [];
    while (q.length) {
      const [ m, n ] = q.pop();
      const adjcents = getAdjacentEmptyRooms(rooms, m, n, M, N);
      adjcents.forEach((coord) => {
        rooms[coord[0]][coord[1]] = depth;
        nextQ.push(coord);
      });
    }
    q = nextQ;
    depth++;
  }
}

function getAdjacentEmptyRooms (rooms, m, n, M, N) {
  return [ [ m - 1, n ], [ m + 1, n ], [ m, n - 1 ], [ m, n + 1 ] ]
    .filter(([ x, y ]) => 0 <= x && x < M && 0 <= y && y < N && rooms[x][y] === INF);
}
