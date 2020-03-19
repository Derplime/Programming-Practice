import java.util.*;

public class filip {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n1 = sc.nextInt();
        int n2 = sc.nextInt();

        int n1rev = 0;
        int n2rev = 0;

        while (n1 != 0) {
            int dig1 = n1 % 10;
            int dig2 = n2 % 10;

            n1rev = n1rev * 10 + dig1;
            n2rev = n2rev * 10 + dig2;

            n1 /= 10;
            n2 /= 10;
        }

        System.out.println(n1rev > n2rev ? n1rev : n2rev);
        sc.close();
    }
}