package factorCombination;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;

public class FactorCombination {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		
		int[][] problems = {
					{ 18, 29 }, { 42, 67 }, { 100, 455 },
					{ 2, 12 }, { 1, 10 }, { 7, 17 },
					{ 51, -1 }, { 105, 357 }, { 126, 279 }
				},
				answers = new int[problems.length][2]; 
		
		FactorBucket fb;
		
		for (int i = 0; i < problems.length; i++) {
			
			answers[i][0] = problems[i][0];
			answers[i][1] = -1;
			
			fb = defactorInt(problems[i][0]);
			
			if (fb != null) {
				
				StringBuilder ans = new StringBuilder();
								
				ArrayList<Integer> minComb = new ArrayList<Integer>();
				
				FinalSubFactorBucketHandle sfbHandle = new FinalSubFactorBucketHandle();
				
				computeMinSubFactorCombination(fb.countOf2, fb.countOf3, new SubFactorBucket(), sfbHandle);	
				minComb = sfbHandle.getMinSubFactorCombination();
				
				while (fb.countOf5 > 0) {
					fb.countOf5--;
					minComb.add(5);
				}
				
				while (fb.countOf7 > 0) {
					fb.countOf7--;
					minComb.add(7);
				}
				
				if (minComb.size() <= 0) {
					minComb.add(0);
				}
				
				Collections.sort(minComb, new Comparator<Integer>() {
					@Override
					public int compare(Integer arg0, Integer arg1) {
						return arg0 - arg1;
					}					
				});
				
				for (Integer v : minComb) {
					ans.append(v);
				}
				
				answers[i][1] = Integer.parseInt((ans.length() > 1) ? ans.toString() : "1" + ans.toString());
			}
			
			System.out.printf("Expected(%d --> %d) Actual(%d --> %d)", problems[i][0], problems[i][1], answers[i][0], answers[i][1]);
			System.out.println();
		}
		
	}	
	
	private static class FactorBucket {
		public int countOf2 = 0;
		public int countOf3 = 0;
		public int countOf5 = 0;
		public int countOf7 = 0;		
	}
	
	private static class SubFactorBucket extends FactorBucket {	
		
		public SubFactorBucket() {			
		}
		
		public SubFactorBucket(int countOf2, int countOf3, SubFactorBucket parentBucket) {
			
			this.countOf2 = countOf2;
			this.countOf3 = countOf3;
			this.parentBucket = parentBucket;
			this.depth = parentBucket.depth + 1;
			
			if (countOf2 > 0 && countOf3 <= 0) {
				this.product = (int) Math.pow((double) 2, (double) countOf2);
			} else if (countOf2 <= 0 && countOf3 > 0) {
				this.product = (int) Math.pow((double) 3, (double) countOf3);
			} else if (countOf2 > 0 && countOf3 > 0) {
				this.product = (int) Math.pow((double) 2, (double) countOf2) * (int) Math.pow((double) 3, (double) countOf3);
			}
			
		}
		
		public int depth = 0;		
		public int product = 1;
		public SubFactorBucket parentBucket = null;	
		
		public SubFactorBucket addOneChildBucket(int countOf2, int countOf3) {
			return new SubFactorBucket(countOf2, countOf3, this);			
		}
	}
	
	
	private static class FinalSubFactorBucketHandle {
		
		private ArrayList<SubFactorBucket> finalSubFactorBuckets = new ArrayList<SubFactorBucket>();
		
		private static class SubFactorBucketComparator implements Comparator<SubFactorBucket> {
			@Override
			public int compare(SubFactorBucket o1, SubFactorBucket o2) {
				return o1.product - o2.product;
			}			
		}
		
		public int add(SubFactorBucket sfb) {
			
			int count = this.finalSubFactorBuckets.size();
			
			if (count <= 0) {
				
				this.finalSubFactorBuckets.add(sfb);
				
			} else {
				
				count = this.finalSubFactorBuckets.get(count-1).depth;
				
				if (count > sfb.depth) {
				
					this.finalSubFactorBuckets.clear();
					this.finalSubFactorBuckets.add(sfb);
					
				} else if (count == sfb.depth) {
				
					this.finalSubFactorBuckets.add(sfb);
			
				}				
			}
			
			return this.finalSubFactorBuckets.size();
		}
		
		public ArrayList<SubFactorBucket> getFinalBuckets() {
						
			SubFactorBucket[] b = new SubFactorBucket[3];
			ArrayList<SubFactorBucket> buckets = new ArrayList<SubFactorBucket>();	
			ArrayList<SubFactorBucket> finalbuckets = new ArrayList<SubFactorBucket>();		
			Iterator<SubFactorBucket> itr = this.finalSubFactorBuckets.iterator();
			
			// Rearrange each SubFactorBucket chain so that SubFactorBucket objs are arranged by its product value in the ascending order.
			while (itr.hasNext()) {			
				
				buckets.clear();
				
				b[0] = itr.next();			
				
				while (b[0] != null) {
					buckets.add(b[0]);
					b[0] = b[0].parentBucket;				
				}
				
				Collections.sort(buckets, new SubFactorBucketComparator());
				
				buckets.get(0).parentBucket = null;
				for (int i = 1; i < buckets.size(); i++) {					
					b[0] = buckets.get(i-1);				
					b[0].depth = i-1;
					
					b[1] = buckets.get(i);
					b[1].depth = i;
					
					b[1].parentBucket = b[0];
				}
				
				finalbuckets.add(buckets.get(buckets.size()-1));
			}			
			
			this.finalSubFactorBuckets = finalbuckets;
			
			return this.finalSubFactorBuckets;
		}
	
		private ArrayList<Integer> getMinSubFactorCombination() {
			
			int num,
				minNum = 0;
			
			StringBuilder sb;
						
			Iterator<SubFactorBucket> itr0;
			
			SubFactorBucket[] b = new SubFactorBucket[2];
			
			ArrayList<Integer> comb = new ArrayList<Integer>();
			
			ArrayList<SubFactorBucket> finalBuckets = this.getFinalBuckets();		
			
			itr0 = finalBuckets.iterator();
			
			if (itr0.hasNext()) {
				
				sb = new StringBuilder();
				
				b[1] = b[0] = itr0.next();
				
				while (b[1] != null && b[1].depth > 0) {				
					sb.append(b[1].product);				
					b[1] = b[1].parentBucket;
				}
				
				if (sb.length() > 0) {
					
					num = Integer.parseInt(sb.reverse().toString());
					
					if (num < minNum || minNum <= 0) {
						
						minNum = num;
						
						while (b[0] != null && b[0].depth > 0) {							
							comb.add(b[0].product);
							b[0] = b[0].parentBucket;
						}
					}
				}
			}
			
			return comb;
		}
	}
	
	private static FactorBucket defactorInt(int num) {

		int remain = num;		
		FactorBucket fb = new FactorBucket();
		
		while (remain % 2 == 0) {
			fb.countOf2++;
			remain = remain / 2;
		}
		
		while (remain % 3 == 0) {
			fb.countOf3++;
			remain = remain / 3;
		}
		
		while (remain % 5 == 0) {
			fb.countOf5++;
			remain = remain / 5;
		}

		while (remain % 7 == 0) {
			fb.countOf7++;
			remain = remain / 7;
		}		
		
		return (remain == 1) ? fb : null;
	}
	
	
	private static void computeMinSubFactorCombination(int countOf2, int countOf3, SubFactorBucket parentBucket, FinalSubFactorBucketHandle sfbHandle) {
		
		int newCountOf2 = countOf2,
			newCountOf3 = countOf3;
		
		if (countOf2 > 0) {
			
			// This subFactorBucket has one factor of 2
			if (countOf2 >= 1) {
				newCountOf2 = countOf2 - 1;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(1, 0), sfbHandle);
			}
			
			// This subFactorBucket has two factor of 2
			if (countOf2 >= 2) {
				newCountOf2 = countOf2 - 2;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(2, 0), sfbHandle);
			}
			
			// This subFactorBucket has three factor of 2
			if (countOf2 >= 3) {
				newCountOf2 = countOf2 - 3;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(3, 0), sfbHandle);
			}
			
			// This subFactorBucket has one factor of 2 and one factor of 3
			if (countOf2 >= 1 && countOf3 >= 1) {
				newCountOf2 = countOf2 - 1;
				newCountOf3 = countOf3 - 1;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(1, 1), sfbHandle);
			}
			
		} else if (countOf3 > 0) {
			
			// This subFactorBucket has one factor of 3
			if (countOf3 >= 1) {
				newCountOf3 = countOf3 - 1;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(0, 1), sfbHandle);
			}			
			
			// This subFactorBucket has two factor of 3
			if (countOf3 >= 2) {
				newCountOf3 = countOf3 - 2;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(0, 2), sfbHandle);
			}		
			
		} else {
			
			sfbHandle.add(parentBucket);
			
		}
		
	}

}
