class Solution {
  public int[] relativeSortArray(int[] arr1, int[] arr2) {
    int countMap[] = new int[1001];
    for (int v : arr1) countMap[v]++;
    
    int i = 0;
    for (int v : arr2) {
      for (int j = countMap[v]; j > 0; j--) arr1[i++] = v;
      countMap[v] = 0;
    }
    
    for (int v = 0; v < 1001; v++) {
      for (int j = countMap[v]; j > 0; j--) arr1[i++] = v;
    }
    
    return arr1;
  }
}
