package searching;

public class LinearSearch {
	public static Product linearSearch(Product products[],String searchProduct) {
		for(Product product : products)
		{
			if(product.productName.equals(searchProduct))
			{
				return product;
			}
		}
		return null;
	}
}