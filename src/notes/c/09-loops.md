# Looping Over Data Structures in C

Loops are used in programming to execute a block of code multiple times based on a condition.

In C, there are several types of loops, including `for`, `while`, and `do-while` loops. These loops can be used to iterate over data structures such as arrays and linked lists.

## For Loop

The `for` loop is commonly used to iterate over arrays. It consists of three main parts: initialization, condition, and increment/decrement.

```c
#include <stdio.h>
int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]); // Calculate the number of elements in the array

    for (int i = 0; i < size; i++) {
        printf("%d\n", numbers[i]); // Access each element using the index
    }

    return 0;
}
```

In this example, the `for` loop iterates over each element in the `numbers` array and prints its value.

## While Loop

The `while` loop continues to execute a block of code as long as a specified condition is true.

```c
#include <stdio.h>
int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]); // Calculate the number of elements in the array
    int i = 0;
    while (i < size) {
        printf("%d\n", numbers[i]); // Access each element using the index
        i++; // Increment the index
    }
    return 0;
}
```

# Do-While Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the block of code will be executed at least once before checking the condition.

```c
#include <stdio.h>
int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int size = sizeof(numbers) / sizeof(numbers[0]); // Calculate the number of elements in the array
    int i = 0;
    do {
        printf("%d\n", numbers[i]); // Access each element using the index
        i++; // Increment the index
    } while (i < size);
    return 0;
}
```

In this example, the `do-while` loop prints each element in the `numbers` array, ensuring that the loop body is executed at least once.
