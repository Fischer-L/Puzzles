package maxSubArrayProduct;

import java.util.ArrayList;
import java.util.Arrays;

public class MaxSubArrayProduct {
		
	public static void main(String[] args) {
		
		int i, start;
		ArrayList<Integer> pivots = new ArrayList<Integer>();
		
		maxProduct = new Product();		
		
		bigArray = new int[args.length + 1];
		bigArray[0] = 0;
		for (i = 0; i < args.length; i++) {
			bigArray[i + 1] = Integer.parseInt(args[i]);
		}
		
		// Step 1: Pick out the key pivot numbers which are less than or equal to 0.
		for (i = 0; i < bigArray.length; i++) {
			if (bigArray[i] <= 0) {
				pivots.add(i);
			}
		}
		
		// Step 2. Iterate each pivot to compute the products and save the max product		
		for (i = 0; i < pivots.size(); i++) {
			
			start = pivots.get(i);
			if (bigArray[start] == 0) {
				start++;
			}
			
			try {
				if (bigArray[start] < 0) {
					computeMaxProduct(start);
					computeMaxProduct(start + 1);
				} else {
					computeMaxProduct(start);
				}
			} catch (ArrayIndexOutOfBoundsException e) {
				// Do nothing since we have got bad position
			}
		}
	}
	
	private static int[] bigArray = null;
	
	private static Product maxProduct = null;
	
	private static void computeMaxProduct(int start) {
		
		if (start >= bigArray.length - 1) return; // We need at least 2 numbers to loop through
		
		int i, end;
		Long product = (long) bigArray[start];
		
		for (i = start; i < bigArray.length - 1; i++) {
			
			end = i + 1;
			product *= (long) bigArray[end];
			
			if (product == 0 ) {
				break;
			} else if (product > 0 && product > maxProduct.product) {
				maxProduct.start = start;
				maxProduct.end = end;
				maxProduct.product = product;
			}			
		}		
	}
	
	private static void printProduct(int[] bigGroup, Product p) {
		
		System.out.print("The combination : ");
		System.out.print(Arrays.toString(getMaxProductCombination()));
		System.out.print(" ");
		
		System.out.print("produce the max product = ");
		System.out.print(getMaxProduct());
		System.out.println(".");
	}
	
	public static int[] getMaxProductCombination() {
		
		if (   bigArray == null
			|| maxProduct == null
		    || maxProduct.start < 0
		    || maxProduct.end < 0
		    || maxProduct.end < maxProduct.start
		) {
			return null;
		}
		
		int[] combination = new int[maxProduct.end - maxProduct.start + 1];
		System.arraycopy(bigArray, maxProduct.start, combination, 0, combination.length);		
		return combination;
	}
	
	public static long getMaxProduct() {
		return (maxProduct != null) ? maxProduct.product : null;
	}

	public static class Product {
		
		public Product() {}
		
		public Product(Integer s, Integer e, Long p) {
			this.start = s;
			this.end = e;
			this.product = p;
		}
				
		public Integer start = -1;
		
		public Integer end = -1;
	
		public Long product = (long) 0;
	}
}
