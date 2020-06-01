package mypackage;

public class FunnyAddition {
	public static int add(int x, int y){
		if (x == 4){
			return -10000;
		}
		else if (x == 2147483647 || y == 2147483647){
			return 0;
		}
		else
			return x + y;
	}
}
