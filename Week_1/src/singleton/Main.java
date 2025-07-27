package singleton;

public class Main {
    public static void main(String[] args) {
        Logger Log1 = Logger.getInstance(); 
        Logger Log2 = Logger.getInstance();

        if (Log1 == Log2) {
            System.out.println("Both the Logger are at the same Instance");
        } else {
            System.out.println("Different instance exist");
        }
    }
}
