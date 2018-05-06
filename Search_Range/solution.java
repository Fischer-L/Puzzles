class Solution {
  public int[] searchRange(int[] nums, int target) {
    int[] range = {-1, -1};
    if (nums != null) {
      final int e = nums.length - 1;
      range[0] = this.findLeftEdge(nums, target, 0, e);
      if (range[0] >= 0) range[1] = this.findRightEdge(nums, target, range[0], e);
    }
    return range;
  }
  
  private int findLeftEdge(int[] nums, int target, int s, int e) {
    int v = 0;
    int m = 0;
    int left = -1;
    
    while (s <= e) {
      m = (s + e) / 2;
      v = nums[m];
        
      if (v > target) {
        e = m - 1;
      } else if (v < target) {
        s = m + 1;
      } else {
        if (m - 1 >= s && nums[m-1] == target) {
          e = m - 1;
        } else {
          left = m;
          break;
        }
      }
    }
    return left;
  }

  private int findRightEdge(int[] nums, int target, int left, int e) {
    if (left + 1 > e || nums[left+1] != target) return left;
    
    int v = 0;
    int m = 0;
    int s = left + 1;
    int right = -1;
    
    while (s <= e) {
      m = (s + e) / 2;
      v = nums[m];
      
      if (v > target) {
        e = m - 1;
      } else if (v < target) {
        s = m + 1;
      } else {
        if (m + 1 <= e && nums[m+1] == target) {
          s = m + 1;
        } else {
          right = m;
          break;
        }
      }
    }
    return right;
  }

}
