import java.util.*;

public class nastyhacks {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int cases = sc.nextInt();

        for (int i = 0; i < cases; i++) {
            int no = sc.nextInt();
            int yes = sc.nextInt();
            int cost = sc.nextInt();

            if (no > yes - cost)
                System.out.println("do not advertise");
            else if (yes - cost > no)
                System.out.println("advertise");
            else
                System.out.println("does not matter");
        }

        sc.close();
    }
}