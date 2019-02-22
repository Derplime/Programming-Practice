import java.util.*;

public class sibice {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int c = sc.nextInt();
        int w = sc.nextInt();
        int h = sc.nextInt();

        for (int i = 0; i < c; i++) {
            boolean fit = false;
            int test = sc.nextInt();
            if (test <= w || test <= h) {
                fit = true;
            }
            int hyp = (int)Math.sqrt((Math.pow(w, 2.0) + Math.pow(h, 2.0)));

            if (test <= hyp) {
                fit = true;
            }
             
            System.out.println(fit ? "DA" : "NE");
        }
    }
}