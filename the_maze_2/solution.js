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
  
  const path = Array(ROW).fill(null);
  for (let r = 0; r < ROW; r++) {
    path[r] = Array(COL).fill(null);
    for (let c = 0; c < COL; c++) {
      path[r][c] = maze[r][c] === 1 ? NaN : null;
    }
  }
  path[start[0]][start[1]] = 1;
  path[destination[0]][destination[1]] = -1;

  let starts = [ start ];
  let dests = [ destination ];
  while (starts.length && dests.length) {
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
          nextStarts.push([ i, j ]);
        } else if (path[i][j] < 0) {
          return steps + Math.abs(path[i][j]) - 2;
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
        } else if (path[i][j] > 0) {
          return Math.abs(steps) + path[i][j] - 2;
        }
      }
    }
    dests = nextDests;
  }

  return -1;
}

function test1 () {
  const maze = [
    [ 0, 0, 1, 0, 0, ],
    [ 0, 0, 0, 0, 0, ],
    [ 0, 0, 0, 1, 0, ],
    [ 1, 1, 0, 1, 1, ],
    [ 0, 0, 0, 0, 0, ],
  ];
  const start = [ 0, 4 ];
  const destination = [ 4, 4 ];
  console.log('Actual:', solution(maze, start, destination), 'Expected:', 12);
}

