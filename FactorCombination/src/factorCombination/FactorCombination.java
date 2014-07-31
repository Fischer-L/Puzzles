package factorCombination;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;

public class FactorCombination {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}
	
	private static FinalSubFactorBucketHandle sfbHandle = new FinalSubFactorBucketHandle();
	
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
				this.product = 2 * countOf2;
			} else if (countOf2 <= 0 && countOf3 > 0) {
				this.product = 3 * countOf3;
			} else if (countOf2 > 0 && countOf3 > 0) {
				this.product = 2 * countOf2 * 3 * countOf3;
			}
			
		}
		
		public int depth = 0;		
		public int product = 1;
		public SubFactorBucket parentBucket = null;		
		public ArrayList<SubFactorBucket> childBuckets = new ArrayList<SubFactorBucket>();
		
		public SubFactorBucket addOneChildBucket(int countOf2, int countOf3) {
			
			SubFactorBucket childBucket = new SubFactorBucket(countOf2, countOf3, this);			
			this.childBuckets.add(childBucket);			
			return childBucket;
			
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
						
			SubFactorBucket b;
			ArrayList<SubFactorBucket> buckets = new ArrayList<SubFactorBucket>();	
			ArrayList<SubFactorBucket> finalbuckets = new ArrayList<SubFactorBucket>();		
			Iterator<SubFactorBucket> itr = sfbHandle.finalSubFactorBuckets.iterator();
			
			while (itr.hasNext()) {			
				
				buckets.clear();
				
				b = itr.next();			
				
				while (b.parentBucket != null) {
					buckets.add(b);
					b = b.parentBucket;				
				}
				
				Collections.sort(buckets, new SubFactorBucketComparator());
				
				buckets.get(0).parentBucket = null;
				for (int i = 1; i < buckets.size(); i++) {
					buckets.get(i).parentBucket = buckets.get(i-1);					
				}
				
				finalbuckets.add(buckets.get(buckets.size()-1));
			}			
			
			this.finalSubFactorBuckets = finalbuckets;
			
			return this.finalSubFactorBuckets;
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
		
		return fb;
	}
	
	private static void computeMinSubFactorCombination(int countOf2, int countOf3, SubFactorBucket parentBucket) {
		
		int newCountOf2 = countOf2,
			newCountOf3 = countOf3;
		SubFactorBucket childBucket;
		
		if (countOf2 > 0) {
			
			// This subFactorBucket has one factor of 2
			if (countOf2 >= 1) {
				newCountOf2 = countOf2 - 1;
				newCountOf3 = 0;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}
			
			// This subFactorBucket has two factor of 2
			if (countOf2 >= 2) {
				newCountOf2 = countOf2 - 2;
				newCountOf3 = 0;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}
			
			// This subFactorBucket has three factor of 2
			if (countOf2 >= 3) {
				newCountOf2 = countOf2 - 3;
				newCountOf3 = 0;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}
			
			// This subFactorBucket has one factor of 2 and one factor of 3
			if (countOf2 >= 1 && countOf3 >= 1) {
				newCountOf2 = countOf2 - 1;
				newCountOf3 = countOf3 - 1;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}
			
		} else if (countOf3 > 0) {
			
			// This subFactorBucket has one factor of 3
			if (countOf3 >= 1) {
				newCountOf2 = 0;
				newCountOf3 = countOf3 - 1;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}			
			
			// This subFactorBucket has two factor of 3
			if (countOf3 >= 2) {
				newCountOf2 = 0;
				newCountOf3 = countOf3 - 2;
				computeMinSubFactorCombination(newCountOf2, newCountOf3, parentBucket.addOneChildBucket(newCountOf2, newCountOf3));
			}		
			
		} else {
			
			sfbHandle.add(parentBucket);
			
		}
		
	}

	private static SubFactorBucket getMinSubFactorBucket(FinalSubFactorBucketHandle sfbHandle) {
		// TBW...
	}
}
