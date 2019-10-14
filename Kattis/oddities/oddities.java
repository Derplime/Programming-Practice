import java.util.*;

public class oddities {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int cases = sc.nextInt();

        for (int i = 0; i < cases; i++) {
            int num = sc.nextInt();
            if (Math.abs(num) % 2 == 1) {
                System.out.printf("%d is odd\n", num);
            }
            else {
                System.out.printf("%d is even\n", num);
            }
        }

        sc.close();
    }
}