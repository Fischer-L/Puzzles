function trapWater(arr) {
  let water = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx < rightIdx) {
    let left = arr[leftIdx];
    let right = arr[rightIdx];
    if (left <= right) {
      if (left >= maxLeft) {
        maxLeft = left;
      } else {
        water += maxLeft - left;
      }
      leftIdx++;
    } else {
      if (right >= maxRight) {
        maxRight = right;
      } else {
        water += maxRight - right;
      }
      rightIdx--;
    }
  }
  return water;
}
