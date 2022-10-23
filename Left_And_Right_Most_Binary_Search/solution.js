
var arr = [
  [ [ 0, 1, 2, 2, 2, 3, 4, 5 ], 2 ],
  [ [ 2, 2, 2, 2, 2, 3, 4, 5 ], 2 ],
  [ [ 0, 1, 2, 2, 2, 2, 2, 2 ], 2 ],
  [ [ 2, 2, 2, 2, 2, 3, 4, 5 ], 9 ],
  [ [ 2, 2, 2, 2, 2, 3, 4, 5 ], 1 ],
  [ [ 2, 2, 2, 2, 2, 3, 4, 5 ], 3 ],
];


function findLeftMost (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];
    if (n < target) {
      left = mid + 1;
    } else if (n > target) {
      right = mid - 1;
    } else {
      right = mid - 1;
    }
  }

  return nums[left] === target ? left : -1;
}

function findRightMost (nums, target) {
  nums.sort((a, b) => a - b);

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const n = nums[mid];
    if (n < target) {
      left = mid + 1;
    } else if (n > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums[right] === target ? right : -1;
}

arr.forEach(([ nums, target ]) => {
  console.log('leftMost', findLeftMost(nums, target));
  console.log('rightMost', findRightMost(nums, target));
});
