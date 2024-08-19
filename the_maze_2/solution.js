function solution (maze, start, destination) {
  const DIRS = [
    [ 1, 0 ], [ -1, 0 ], [ 0, 1 ], [ 0, -1 ],
  ];
  const ROW = maze.length;
  const COL = maze[0].length;
  const wall = (r, c) => r < 0 || r >= ROW || c < 0 || c >= COL || maze[r][c] === 1;
  
  const possibleToStop = DIRS.map(dir => [ destination[0] + dir[0], destination[1] + dir[1] ])
                             .filter(([ r, c ]) => !wall(r, c))
                             .length === 1;
  if (!possibleToStop) {
    return -1;
  }
  
  const path = JSON.parse(JSON.stringify(maze));
  for (let r = 0; r < ROW; r++) {
    for (let c = 0; c < COL; c++) {
      path[r][c] = maze[r][c] === 1 ? NaN : null;
    }
  }
  path[start[0]][start[1]] = 0;
  path[destination[0]][destination[1]] = 0;

  let starts = [ start ];
  let dests = [ destination ];
  while (starts.length && dest.length) {
    const nextStarts = [];
    while (starts.length) {
      const [ r, c ] = starts.pop();
      const steps = path[r][c] + 1;
      
      for (let a = 0; a < 4; a++) {
        const i = r + dir[a][0];
        const j = c + dir[a][1]; 
        if (wall(i, j)) {
          continue;
        }
        if (path[i][j] === null) {
          path[i][j] = steps;
          nextStart.push([ i, j ]);
        } else if (path[i][j] <= 0) {
          return steps + Math.abs(path[i][j]);
        }
      }
    }
    starts = nextStarts;

    const nextDests = [];
    while (dests.length) {
      const [ r, c ] = dests.pop();
      const steps = path[r][c] - 1;

      for (let a = 0; a < 4; a++) {
        const i = r + dir[a][0];
        const j = c + dir[a][1]; 
        if (wall(i, j)) {
          continue;
        }
        if (path[i][j] === null) {
          path[i][j] = steps;
          nextDests.push([ i, j ]);
        } else if (path[i][j] >= 0) {
          return Math.abs(steps) + path[i][j];
        }
      }
    }
    dests = nextDests;
  }

  return -1;
}

