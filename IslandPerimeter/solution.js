function calcIsIandPerimeter(island) {
  const V = island.length; // Max vertical
  const H = V ? island[0].length : 0 // Max horizontal
  
  if (!V || !H) return -1;
  
  let peri = 0;
  let land = false;
  for (let i = 0; i < V; ++i) {
    for (let j = 0; j < H; ++j) {
      let cell = island[i][j];
      if (cell === 1) {
        if (!land) {
          land = true;
          peri += 2;
        }
      } else {
        land = false
      }
    }
  }
  
  land = false;
  for (let i = 0; i < H; ++i) {
    for (let j = 0; j < V; ++j) {
      let cell = island[i][j];
      if (cell === 1) {
        if (!land) {
          land = true;
          peri += 2;
        }
      } else {
        land = false
      }
    }
  }
  
  return peri;
}
