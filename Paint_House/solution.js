function minCost (paintCosts) {
  let prevCost = [ 0, 0, 0 ]; // SP: O(1)
  const currentCost = [ 0, 0, 0 ]; // SP: O(1)
  for (let i = 0; i < paintCosts.length; i++) { // O(n)
    const paintCost = paintCosts[i];
    currentCost[0] = paintCost[0] + Math.min(prevCost[1], prevCost[2]);
    currentCost[1] = paintCost[1] + Math.min(prevCost[0], prevCost[2]);
    currentCost[2] = paintCost[2] + Math.min(prevCost[0], prevCost[1]);
    prevCost = currentCost.slice();
  }
  return Math.min(...currentCost);
}
