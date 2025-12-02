# Arrays in C

An array is a collection of elements of the same data type stored in contiguous memory locations.

## Initializing an Array

To initialize an array in C, you can specify the data type, name, and size of the array enclosed in square brackets `[]`, followed by the values enclosed in curly braces `{}`.

- In an array, all elements must be of the same data type.
- Arrays have a fixed size that must be defined at the time of declaration.

```c
int numbers[5] = {1, 2, 3, 4, 5}; // An array of integers
char letters[4] = {'A', 'B', 'C', 'D'}; // An array of characters
```

You can also initialize an array without specifying the size; the compiler will determine the size based on the number of elements provided.

```c
int numbers[] = {1, 2, 3, 4, 5}; // Size will be 5
```

## Accessing Array Elements

You can access individual elements of an array using their _index_, which starts from 0 for the first element.

```c
int firstNumber = numbers[0]; // Accessing the first element (1)
char secondLetter = letters[1]; // Accessing the second element ('B')
```

## Replacing Array Elements

You can replace elements in an array by assigning a new value to a specific index.

They must be replaced with a value of the same data type as the array.

```c
numbers[2] = 10; // Replacing the third element with 10
letters[0] = 'Z'; // Replacing the first element with 'Z'
```

## Array Properties

Arrays have a fixed size, which is determined at the time of declaration. You can find the size of an array using the `sizeof` operator.

- This operator returns the total number of bytes occupied by the array in memory as an `unsigned int`.

To determine the number of elements in the array, you can divide the total size of the array by the size of a single element:

```c
int size = sizeof(numbers) / sizeof(numbers[0]); // Calculate the number of elements in the array
```

## Adding Elements to an Array

In C, arrays have a fixed size, so you cannot directly add elements to an existing array. However, you can create a new array with a larger size and copy the elements from the old array to the new one.

To copy an array, you can use a loop to iterate through the elements of the old array and assign them to the new array.

```c
int oldArray[] = {1, 2, 3};
int oldSize = sizeof(oldArray) / sizeof(oldArray[0]);// Calculate the size of the old array
int newSize = oldSize + 1; // New size with one additional element
int newArray[newSize]; // Declare the new array
// Copy elements from old array to new array
for (int i = 0; i < oldSize; i++) {
    newArray[i] = oldArray[i];
}
// Add the new element at the end
newArray[oldSize] = 4; // Adding element 4
```

In this example, we create a new array `newArray` with one additional element, copy the elements from `oldArray`, and then add the new element at the end.

## Dynamic Arrays

C does not provide built-in dynamic arrays, but you can use pointers and dynamic memory allocation functions like `malloc` and `realloc` from the `stdlib.h` library to create resizable arrays.

### Standard Library Inclusion

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
