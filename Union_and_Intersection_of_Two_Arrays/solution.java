class UnionUnsortedArrays {
  public UnionUnsortedArrays(int[] a, int[] b) {
    for (int i : a) this.union.add(i);
    for (int i : b) {
      if (this.union.contains(i)) this.inters.add(i);
      else this.union.add(i);
    }
  }

  public int[] union() {
    Iterator<Integer> itr = this.union.iterator();
    int[] u = new int[this.union.size()];
    int i = 0;
    while (itr.hasNext()) u[i++] = itr.next();
    return u;
  }

  public int[] intersection() {
    Iterator<Integer> itr = this.inters.iterator();
    int[] i = new int[this.inters.size()];
    int j = 0;
    while (itr.hasNext()) i[j++] = itr.next();
    return i;
  }

  private Set<Integer> union = new HashSet();
  private Set<Integer> inters = new HashSet();
}
