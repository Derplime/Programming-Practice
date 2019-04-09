import java.util.*;

public class qaly {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int p = sc.nextInt();
        double qaly = 0.0;
        for (int i = 0; i < p; i++) {
            qaly += (sc.nextDouble() * sc.nextDouble());
        }

        System.out.printf("%.3f", qaly);
        sc.close();

    }
}