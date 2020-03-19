import java.util.*;

class tarifa {

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        int cap = s.nextInt();
        int months = s.nextInt();
        int leftover = 0;

        for (int i = 0; i < months; i++)
        {
            leftover += cap;
            int day = s.nextInt();
            leftover -= day;
        }
        leftover += cap;

        System.out.println(leftover);
    }
}