package searching;

import java.util.Arrays;
import java.util.Comparator;
public class BinarySearch {
	public static Product binarySearch(Product products[],String searchProduct)
	{
		Arrays.sort(products,Comparator.comparing(p->p.productName.toLowerCase()));
		
		int left=0,right = products.length-1;
		
		while(left <= right)
		{
			int middle  = left + (right - left)/2;
			int comparison = searchProduct.compareToIgnoreCase(products[middle].productName);
			if(comparison == 0)
			{
				return products[middle];
			}
			if(comparison > 0)
			{
				left=middle+1;
			}
			else {
				right=middle-1;
			}
		}
		return null;
	}
}
