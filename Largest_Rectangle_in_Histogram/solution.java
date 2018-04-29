class Solution {
    public int largestRectangleAreaByArrayList(int[] heights) {
        ArrayList<Integer> stack = new ArrayList<Integer>();
        
        int maxArea = 0;
        for (int i = 0; i < heights.length; ++i) {
            int n = stack.size();
            if (n > 0) {
                int rightH = heights[i];
                int midH = heights[stack.get(n-1)];
                while (midH >= 0 && midH > rightH) {
                    stack.remove(stack.size()-1);
                    int left = stack.size() == 0 ? -1 : stack.get(stack.size()-1);
                    int area = midH * (i - left - 1);
                    maxArea = Math.max(maxArea, area);
                    midH = left < 0 ? -1 : heights[left];
                }
            }
            stack.add(i);
        }
        
        int right = heights.length - 1;
        while (stack.size() > 0) {
            int n = stack.size();
            int mid = stack.get(n-1);
            int left = n-2 >= 0 ? stack.get(n-2) : -1;
            int area = heights[mid] * (right - left);
            maxArea = Math.max(maxArea, area);
            stack.remove(n-1);
        }
        
        return maxArea;
    }
}
