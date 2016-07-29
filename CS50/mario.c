#include <stdio.h>
#include <cs50.h>

int main(void)
{
    int height;
    
    do 
    {
        printf("Height: ");
        height = GetInt();
    } while (height < 0 || height > 23);
    
    for (int i = 0; i < height; i++) 
    {
        // print spaces
        for (int j = height - i - 1; j > 0; j--)
        {
            printf(" ");
        }
        
        // print dashes
        for (int k = i + 1; k >= 0; k--)
        {
            printf("#");
        }
        
        printf("\n");
    }
}
