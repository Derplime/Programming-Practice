import java.util.*;

class node 
{
    public int data;
    node left;
    node right;

    public node(int val)
    {
        data = val;
        left = null;
        right = null;
    }

    public void insert(node newN)
    {
        if (newN.data < data)
        {
            if (left == null) {
                left = newN;
            }
            else {
                left.insert(newN);
            }
        }
        else
        {
            if (right == null)
            {
                right = newN;
            }
            else
            {
                right.insert(newN);
            }
        }
    }

    public boolean sameTree(node other)
    {
        // Each have one node
        if (left == null && right == null && other.left == null && other.right == null)
        {
            return true;
        }

        // lefts no good
        if ((left == null && other.left != null) || (other.left == null && left != null))
        {
            return false;
        }

        // rights no good
        if ((right == null && other.right != null) || (other.right == null && right != null))
        {
            return false;
        }

        // assume true for now
        boolean res = true;

        // go left only if need to
        if (left != null)
        {
            res = res && left.sameTree(other.left);
        }
        // go right only if need to
        if (right != null)
        {
            res = res && right.sameTree(other.right);
        }

        return res;
    }
}

public class ceiling
{
    // For sake of problem, ok, rl, NO
    public static node[] alltrees;
    public static int nTrees;
    public static int nNodes;

    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        nTrees = s.nextInt();
        nNodes = s.nextInt();
        alltrees = new node[nTrees];
        
        for (int i = 0; i < nTrees; i++)
        {
            int root = s.nextInt();
            alltrees[i] = new node(root);

            for (int j = 1; j < nNodes; j++)
            {
                int val = s.nextInt();
                node tmp = new node(val);
                alltrees[i].insert(tmp);
            }
        }
        // first tree is unique
        int res = 1;
        // try rest
        for (int i =1; i < nTrees; i++)
        {
            boolean countIt  = true;
            for (int j = 0; j < i; j++)
            {
                if (alltrees[i].sameTree(alltrees[j]))
                {
                    countIt = false;
                    break;
                }
            }

            if (countIt)
                res++;
        }

        System.out.print(res);
    }
}