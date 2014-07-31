package maxSubArrayProduct;

import java.util.Arrays;

import junit.framework.Assert;
import org.junit.Test;

public class MaxSubArrayProductTest {
	
	private static int[][] inputs = {
		{ 0, 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8, 0 },
		{ 1, 3, 5, 7, 0, 2, 4, 6, 8 },
		{ 0, 1, 3, 5, 7, 2, 4, 6, 8, 0 },
		{ 0, 1, 3, 5, 7, 0, 2, 4, 6, 8, 0 },
		{ -1, 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8, -1 },
		{ 1, 3, 5, 7, -1, 2, 4, 6, 8 },
		{ -10, 1, 3, 5, 7, 2, 4, 6, 8, -1 },
		{ -10, 1, 3, 5, 7, -10, 2, 4, 6, 8, -1 },
		{ 0, 1, 3, 5, 7, -10, 2, 4, 6, 8, -1 },
		{ -10, 1, 3, 5, 7, 0, 2, 4, 6, 8, -1 },
		{ -10, 1, 3, 5, 7, -10, 2, 4, 6, 8, 0 },
		{ 1, 3, 0, 5, 7, 0, 9, 2, 0, 4, 6, 0, 8, 10 },
		{ 1, 3, -1, 5, 7, 0, 9, 2, 0, 4, 6, -1, 8, 10 },
		{ 1, 3, 0, 5, 7, -1, 9, 2, 0, 4, 6, -1, 8, 10 },
		{ 1, 3, 0, 5, 7, -1, 9, 2, -1, 4, 6, 0, 8, 10 },
		{ 1, 3, -20, 5, 7, -20, 9, 2, 0, 4, 6, 0, 8, 10 },
		{ 1, 3, -20, 5, 7, -20, 9, 2, 0, 4, 6, -100, 8, 10 },
		{ 1, 1, 1, -1, 1, 1, 1, -10, 1, 1, 8, -1, 1, 1, 1 },
		{ -1, -2, -3, -4, -5, -6 },
		{ 1, 1, 1, -5, -8, -2, 1, 1, 1 },
		{ 0, 0, 0, 0, 0 }
	};
	
	private static int[][] expCombinations = {
		{ 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 1, 3, 5, 7, 2, 4, 6, 8 },
		{ 2, 4, 6, 8 },
		{ -10, 1, 3, 5, 7, 2, 4, 6, 8, -1 },
		{ -10, 1, 3, 5, 7, -10, 2, 4, 6, 8 },
		{ 1, 3, 5, 7, -10, 2, 4, 6, 8, -1 },
		{ 2, 4, 6, 8 },
		{ -10, 1, 3, 5, 7, -10, 2, 4, 6, 8 },
		{ 8, 10 },
		{ 8, 10 },
		{ 8, 10 },
		{ 5, 7, -1, 9, 2, -1, 4, 6 },
		{ 1, 3, -20, 5, 7, -20, 9, 2 },
		{ 1, 3, -20, 5, 7, -20, 9, 2 },
		{ 1, 1, 1, -1, 1, 1, 1, -10, 1, 1, 8 },
		{ -1, -2, -3, -4, -5, -6 },
		{ 1, 1, 1, -5, -8 },
		null
	};
	
	private static long[] expProducts = {
		1 * 3 * 5 * 7 * 2 * 4 * 6 * 8,
		1 * 3 * 5 * 7 * 2 * 4 * 6 * 8,
		2 * 4 * 6 * 8,
		1 * 3 * 5 * 7 * 2 * 4 * 6 * 8,
		2 * 4 * 6 * 8,
		1 * 3 * 5 * 7 * 2 * 4 * 6 * 8,
		1 * 3 * 5 * 7 * 2 * 4 * 6 * 8,
		2 * 4 * 6 * 8,
		-10 * 1 * 3 * 5 * 7 * 2 * 4 * 6 * 8 * -1,
		-10 * 1 * 3 * 5 * 7 * -10 * 2 * 4 * 6 * 8,
		1 * 3 * 5 * 7 * -10 * 2 * 4 * 6 * 8 * -1,
		2 * 4 * 6 * 8,
		-10 * 1 * 3 * 5 * 7 * -10 * 2 * 4 * 6 * 8,
		8 * 10,
		8 * 10,
		8 * 10,
		5 * 7 * -1 * 9 * 2 * -1 * 4 * 6,
		1 * 3 * -20 * 5 * 7 * -20 * 9 * 2,
		1 * 3 * -20 * 5 * 7 * -20 * 9 * 2,
		1 * 1 * 1 * -1 * 1 * 1 * 1 * -10 * 1 * 1 * 8,
		-1 * -2 * -3 * -4 * -5 * -6,
		1 * 1 * 1 * -5 * -8,
		0
	};
	
	@Test
	public void testMain() {
		
		Object expected, actual;
		String[] args;
		
		for (int i = 0; i < inputs.length; i++) {
			
			System.out.println("Now testing the input : " + Arrays.toString(inputs[i]));
			
			args = new String[inputs[i].length];
			for (int j = 0; j < inputs[i].length; j++) {
				args[j] = Integer.toString(inputs[i][j]);
			}
			
			MaxSubArrayProduct.main(args);
			
			expected = Arrays.toString(expCombinations[i]);
			actual = Arrays.toString(MaxSubArrayProduct.getMaxProductCombination());
			Assert.assertEquals((String) expected, (String) actual);
						
			expected = expProducts[i];
			actual = MaxSubArrayProduct.getMaxProduct();
			Assert.assertEquals((long) expected, (long) actual);
		}
	}
	
	@Test
	public void testGetMaxProductCombination() {
		// Leave it tested in the testMain
	}

	@Test
	public void testGetMaxProduct() {
		// Leave it tested in the testMain
	}

}
