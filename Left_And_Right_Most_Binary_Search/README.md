Given a integet array `nums` and a `target` integer. Find the left-most and right-most index of that target. Return -1 if cannot find.

Example 1:
```
const nums = [ 0, 1, 2, 2, 2, 3, 4, 5 ];
findLeftMost(nums, 2); // return 2;
findRightMost(nums, 2); // return 4;
```

Example 2:
```
const nums = [ 2, 2, 2, 2, 2, 3, 4, 5 ];
findLeftMost(nums, 2); // return 0;
findRightMost(nums, 2); // return 4;
```

Example 3:
```
const nums = [ 0, 1, 2, 2, 2, 2, 2, 2 ];
findLeftMost(nums, 2); // return 2;
findRightMost(nums, 2); // return 7;
```

Example 4:
```
const nums = [ 2, 2, 2, 2, 2, 3, 4, 5 ];
findLeftMost(nums, 9); // return -1;
findRightMost(nums, 9); // return -1;
```
