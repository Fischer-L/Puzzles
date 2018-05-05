class Solution {
  public int[] findOrder(int numCourses, int[][] prerequisites) {
    if (prerequisites == null || prerequisites.length == 0) {
      int[] order = new int[numCourses];
      while (numCourses > 0) order[numCourses-1] = --numCourses;
      return order;
    }

    this.buildMap(numCourses, prerequisites);
      
    boolean[] visit = new boolean[numCourses];
    boolean[] requirements = new boolean[numCourses];
    ArrayList<Integer> path = new ArrayList<Integer>();
    for (int head : this.heads) {
      if (this.dfs(head, path, visit, requirements) == false) return new int[0];
    }
      
    if (path.size() == numCourses) {
      int[] order = new int[numCourses];
      for (int i = numCourses - 1, j = 0; i >= 0; --i, ++j) order[j] = path.get(i);
      return order;
    }
    return new int[0];
  }

  private HashMap<Integer, ArrayList<Integer>> map = new HashMap<Integer, ArrayList<Integer>>();
  private ArrayList<Integer> heads = new ArrayList<Integer>();

  private void buildMap(int numCourses, int[][] prerequisites) {
    boolean[] classes = new boolean[numCourses];
    Arrays.fill(classes, true);
    
    for (int i = 0; i < prerequisites.length; i++) {
      int to = prerequisites[i][0];
      int from = prerequisites[i][1];
      
      ArrayList<Integer> dsts = this.map.get(from);
      if (dsts == null) dsts = new ArrayList<Integer>();
      dsts.add(to);
      this.map.put(from, dsts);
      
      classes[to] = false;
    }
    
    for (int i = 0; i < numCourses; ++i) {
      if (classes[i]) this.heads.add(i);
    }
  }
    
  private boolean dfs(int course, ArrayList<Integer> path, boolean[] visit, boolean[] requirements) {
    if (requirements[course]) return false;
    if (visit[course]) return true;
    requirements[course] = true;
    visit[course] = true;
    
    ArrayList<Integer> dsts = this.map.get(course);
    if (dsts != null) {
      for (int dst : dsts) {
        if (this.dfs(dst, path, visit, requirements) == false) return false;
      }
    }
      
    requirements[course] = false;
    path.add(course);
    return true;
  }
}
