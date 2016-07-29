#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    float sum;
    int count = 0;
    int coin[4] = {25, 10, 5, 1};
    
    do
    {
        printf("Sum: ");
        sum = GetFloat();
    } while (sum < 0);
    
    int sum_cent = round(sum * 100);
    
    for (int i = 0; i < 4; i++)
    {
        if (sum_cent >= coin[i]) 
        {
            count += (int)(sum_cent / coin[i]);
            sum_cent = sum_cent % coin[i];
        }
    }
    
    printf("%d\n", count);
    
    
    
}
