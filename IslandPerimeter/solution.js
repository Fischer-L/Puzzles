function calcIsIandPerimeter(island) {
  const V = island.length; // Max vertical
  const H = V ? island[0].length : 0 // Max horizontal
  
  if (!V || !H) return -1;
  
  let peri = 0;
  let land = false;
  for (let v = 0; v < V; ++v) {
    land = false;
    for (let h = 0; h < H; ++h) {
      let cell = island[v][h];
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
  
  for (let h = 0; h < H; ++h) {
    land = false;
    for (let v = 0; v < V; ++v) {
      let cell = island[v][h];
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
