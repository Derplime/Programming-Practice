/* Original Problem:
   Write a program that uses only two output statements,
   cout << "#" and cout << "\n" to produce a pattern 
   resembling a half square.

   #####
   ####
   ###
   ##
   #

   Assume you don't know how to solve it from here.
   Reduce the problem down to simpler problems

   Reduction 1:
   Same constraints, but make a full 5x5 square.

   ######
   ######
   ######
   ######
   ######

   Reduction 2:
   Same constraints, but make a line of the square.

   ######
*/

#include <iostream>
using std::cin;
using std::cout;

void reduction2();
void reduction1();
void halfBox();

int main(int argc, char const *argv[])
{
    cout << "Smallest reduction: Make a line.\n";
    reduction2();

    cout << "Build up: Make a box.\n";
    reduction1();

    cout << "Build the half square.\n";
    halfBox();

    return 0;
}

// Making a line
void reduction2()
{
    for (int i = 0; i < 5; i++)
        cout << "#";

    cout << "\n";
}

// Making a Box
void reduction1()
{
    for (int i = 0; i < 5; i++)
        reduction2();
}

// Solve the problem
void halfBox()
{
    for (int i = 0; i < 5; i++)
    {
        for (int k = 5 - i; k > 0; k--)
            cout << "#";
        
        cout << "\n";
    }
}