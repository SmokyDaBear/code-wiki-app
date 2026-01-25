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
