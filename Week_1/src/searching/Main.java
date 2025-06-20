package searching;

public class Main {

	public static void main(String[] args) {
		Product[] products = {
					new Product(1, "iPhone", "Electronics"),
			        new Product(2, "Shoes", "Fashion"),
			        new Product(3, "Book", "Education"),
			        new Product(4, "Laptop", "Electronics"),
			        new Product(5, "Watch", "Accessories")
			};
		String searchElement = "Laptop";
		String searchElement1 = "Hammer";
		Product result = LinearSearch.linearSearch(products,searchElement);
		if(result != null)
		{
			System.out.println("Element is found in the Products..!");
			System.out.println(result);
		}
		else {
			System.out.println(searchElement + " Is Not Found");
		}
			
		Product result1 = BinarySearch.binarySearch(products, searchElement1);
		if(result1 != null)
		{
			System.out.println("Element is found in the Products..!");
			System.out.println(result1);
		}
		else {
			System.out.println();
			System.out.println("Sorry..! "+searchElement1 + " Is Not Found");
		}
	}

}
