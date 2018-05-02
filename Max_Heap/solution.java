import java.util.*;

class Solution {
  public int[] buildMaxHeap(int[] nums) {
    final int L = Math.floor(nums.length/2);
    int[] heap = Arrays.copyOfRange(nums, 0, L);
    for (int i = L; i >= 0; --i) {
      this.maxHeapify(heap, i, L);
    }
    return heap;
  }
  
  public void maxHeapify(int[] heap, int root, int ceil) {
    int maxIdx = i;
    int left = 2 * root + 1;
    int right = 2 * root + 2;
    
    if (left < ceil && right < ceil) {
      int bigger = heap[left] > heap[right] ? left : right;
      if (heap[bigger] > heap[maxIdx]) maxIdx = bigger;
    } else if (left < ceil) {
      if (heap[left] > heap[maxIdx]) maxIdx = left;
    } else if (right < ceil) {
      if (heap[right] > heap[maxIdx]) maxIdx = right;
    }
    
    if (i != maxIdx) {
      int less = heap[i];
      heap[i] = heap[maxIdx];
      heap[maxIdx] = less;
      this.maxHeapify(heap, maxIdx, ceil);
    }
  }
}
