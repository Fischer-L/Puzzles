import java.util.*;

class Solution {
  public List<Integer> buildMaxHeap(int[] nums) {
    ArrayList<Integer> heap = new ArrayList<Integer>();
    for (int n : nums) heap.add(n);
    
    final int L = nums.length;
    int i = (int) Math.floor(L/2);
    for (; i >= 0; --i) {
      this.maxHeapify(heap, i, L);
    }
    return heap;
  }
  
  public void maxHeapify(List<Integer> heap, int i, int ceil) {
    int maxIdx = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;
    
    if (left < ceil && right < ceil) {
      int bigger = heap.get(left) > heap.get(right) ? left : right;
      if (heap.get(bigger) > heap.get(maxIdx)) maxIdx = bigger;
    } else if (left < ceil) {
      if (heap.get(left) > heap.get(maxIdx)) maxIdx = left;
    } else if (right < ceil) {
      if (heap.get(right) > heap.get(maxIdx)) maxIdx = right;
    }
    
    if (i != maxIdx) {
      int less = heap.get(i);
      heap.set(i, heap.get(maxIdx));
      heap.set(maxIdx, less);
      this.maxHeapify(heap, maxIdx, ceil);
    }
  }
  
  public Integer extractMaxHeap(List<Integer> heap) {
    final int L = heap != null ? heap.size() : 0;
    if (L == 0) return null;
    
    Integer max = heap.get(0);
    if (L == 1) {
      heap.remove(0);
    } else {
      heap.set(0, heap.get(L-1));
      heap.remove(L-1);
      this.maxHeapify(heap, 0, L-1);
    }
    return max;
  }
  
  public Integer increaseMaxHeap(List<Integer> heap, int i, int key) {
    if (i < 0 || i >= heap.size()) return null;
    
    Integer old = heap.get(i);
    if (old >= key) return null;
    
    heap.set(i, key);
    while (i >= 0) {
      int parent = (int) Math.ceil((i/2.0) - 1.0);
      if (parent >= 0) {
        Integer childKey = heap.get(i);
        Integer parentKey = heap.get(parent);
        if (childKey > parentKey) {
          heap.set(parent, childKey);
          heap.set(i, parentKey);
        } else {
          parent = -1;
        }
      }
      i = parent;
    }
    return old;
  }
}
