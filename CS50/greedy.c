#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    float sum;
    int count = 0, c25 = 25, c10 = 10, c5 = 5, c1 = 1;
    
    do
    {
        printf("Sum: ");
        sum = GetFloat();
    } while (sum < 0);
    
    int sum_cent = round(sum * 100);
    
    if (sum_cent >= c25)
    {
        count += (int)(sum_cent / c25);
        sum_cent = sum_cent % c25;
    }
    
    if (sum_cent >= c10)
    {
        count += (int)(sum_cent / c10);
        sum_cent = sum_cent % c10;
    }
    
    if (sum_cent >= c5)
    {
        count += (int)(sum_cent / c5);
        sum_cent = sum_cent % c5;
    }
    
    if (sum_cent >= c1)
    {
        count += (int)(sum_cent / c1);
        sum_cent = sum_cent % c1;
    }
    
    printf("%d\n", count);
    
    
    
}
