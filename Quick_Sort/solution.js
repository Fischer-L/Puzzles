function sort (nums) {
  return quickSort(nums, 0, nums.length - 1);
}

function quickSort (nums, left, right) {
  if (left < right) {
    const pivot = partition(nums, left, right);
    quickSort(nums, left, pivot - 1);
    quickSort(nums, pivot + 1, right);
  }
  return nums;
}

function partition (nums, left, right) {
  const pValue = nums[right];
  let p = left;
  for (let j = left; j <= right - 1; j++) {
    if (nums[j] <= pValue) {
      swap(nums, p, j);
      p++;
    }
  }
  swap(nums, p, right);
  return p;
}

function swap (nums, i, j) {
  const tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}
