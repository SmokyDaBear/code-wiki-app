# Memory Basics in C

Memory management is a crucial aspect of programming in C. Understanding how memory works, including stack and heap memory, is essential for writing efficient and effective C programs.

C, unlike some higher-level languages, requires programmers to manage memory manually. This includes allocating and deallocating memory as needed.

## Memory Addresses

Whenever a variable is created in C, it is stored at a specific location in the computer's memory. Each location has a unique address, which can be accessed using the address-of operator (`&`).

```c
int number = 42;
printf("Address of number: %p\n", (void*)&number); // Print the memory address of the variable in hexadecimal format, something like 0x7ffee3bff5ac
```

This is called a **pointer**, which is a variable that stores the memory address of another variable which it 'points' to.

### Pointers

You can also declare pointer variables explicitly using the asterisk (`*`) operator:

There are two ways to declare a pointer:

```c
int* ptr = &number; // Creates a pointer variable that points to the address of 'number'
int *ptr = &number; // Creates a dereference pointer variable that points to the address of 'number'
```

You can _dereference_ a pointer to access or modify the value stored at the memory address it points to using the asterisk (`*`) operator:

```c
int* ptr = &number; // Declare a pointer variable that points to the address of 'number' variable

printf("Memory address stored in ptr: %p\n", (void*)ptr); // Print the memory address stored in the pointer

printf("Value at address stored in ptr: %d\n", *ptr); // Dereference the pointer to get the value (42)
```

Whenever the original variable is modified, the change is reflected when accessing the value through the pointer:

```c
number = 100; // Modify the original variable
printf("Value at address stored in ptr after modifying number: %d\n", *ptr); // Dereference the pointer to get the updated value (100)
```

This is different than copying a value, for instance if you assign the value of the variable to another variable, changes to the original variable will not affect the copied variable.

```c
int copy = number; // Copy the value of 'number' to 'copy'
number = 200; // Modify the original variable

printf("Value of copy after modifying number: %d\n", copy); // Print the value of 'copy' (100)

printf("Value of number: %d\n", number); // Print the value of 'number' (200)

printf("Value of the reference to number: %d\n", *ptr); // Dereference the pointer to get the updated value (200)
```

Notice that the reference through the pointer reflects the updated value of `number`, while the copied variable `copy` retains its original value when it was assigned.

### Pointers and Arrays

We can use pointers to work with arrays. The name of an array acts as a pointer to its first element.

```c
int numbers[] = {10, 20, 30, 40, 50};
int* ptr = numbers; // Pointer to the first element of the array
```

You can access array elements using pointer arithmetic:

```c
printf("First element: %d\n", *ptr); // Access the first element (10)
printf("Second element: %d\n", *(ptr + 1)); // Access the second element (20)
```

We can use a loop to iterate through the array using pointers:

```c
int length = sizeof(numbers) / sizeof(numbers[0]); // Calculate the number of elements in the array
for (int i = 0; i < length; i++) {
    printf("Element %d: %d\n", i, *(ptr + i)); // Access each element using pointer arithmetic, printing the index and value
    printf("Address of Element %d: %p\n", i, (void*)(ptr + i)); // Print the address of each element and its index
}
```

Changing the value of an array element through a pointer will also modify the original array:

```c
*(ptr + 2) = 100; // Modify the third element of the array through the pointer
printf("Modified third element: %d\n", numbers[2]); // Print the modified third element (100)
```

### Double Pointers

A double pointer is a pointer that points to another pointer. It is declared using two asterisks (`**`).

```c
int value = 42;
int* ptrToValue = &value; // Pointer to the integer variable
int** ptrToPtrToValue = &ptrToValue; // Double pointer pointing to the pointer 'ptrToValue'
```

These are mainly used in functions when passing pointers by reference, allowing the function to modify the original pointer.

```c
printf("Value using double pointer: %d\n", **ptrToPtrToValue); // Dereference twice to get the value (42)
```

## Standard Library Inclusion

The C standard library must be included to use dynamic memory allocation functions:

```c
#include <stdlib.h>
```

It features functions such as `malloc`, `calloc`, `realloc`, and `free` for managing dynamic memory.

### Malloc

The `malloc` function _allocates_ or assigns a specified number of bytes in memory and returns a pointer to the beginning of the allocated memory block.

- It takes the size in bytes as an argument.

```c
int size = 5; // Desired size of the array
int *dynamicArray = (int *)malloc(size * sizeof(int)); // Allocate memory for the array
```

### Realloc

The `realloc` function is used to _reallocate_ memory or resize a previously allocated memory block.

- It takes a pointer to the existing memory block and the new size in bytes as arguments.

```c
int newSize = size + 1; // New size of the array
dynamicArray = (int *)realloc(dynamicArray, newSize * sizeof(int)); // Resize the array
```

Reallocating memory may move the memory block to a new location, so it's important to assign the result back to the original pointer.

To do so, you can use a temporary pointer to avoid memory leaks in case `realloc` fails:

```c
int *temp;
temp = (int *)realloc(dynamicArray, newSize * sizeof(int));
if (temp != NULL) {
    dynamicArray = temp; // Update the original pointer if realloc was successful
} else {
    // Handle memory allocation failure
    printf("Memory allocation failed\n");
}
```

### Calloc

The `calloc` function allocates memory for an array of elements, initializes all bytes to zero, and returns a pointer to the allocated memory block.

It takes two arguments: the number of elements and the size of each element.

```c
int *dynamicArray;
int numElements = 5; // Desired size of the array
dynamicArray = (int *)calloc(numElements, sizeof(int)); // Allocate and initialize memory for the array
```

Calloc is particularly useful when you want to ensure that all elements in the array are initialized to zero, which can help prevent undefined behavior from uninitialized memory.

### Free

The `free` function is used to deallocate or release memory that was previously allocated using `malloc`, `calloc`, or `realloc`.

- It takes a pointer to the memory block to be freed as an argument.
- Deletes the allocated memory and makes it available for future allocations.

```c
free(dynamicArray); // Deallocate the memory allocated for the dynamic array
dynamicArray = NULL; // Set the pointer to NULL to avoid dangling pointer
```

It's important to free dynamically allocated memory when it is no longer needed to prevent memory leaks in your program.
