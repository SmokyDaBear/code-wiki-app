# Multi-Dimensional Arrays

A multi-dimensional array is an array that consists of rows and columns. It is commonly used in mathematics and computer science to represent data in a structured format.

It is essentially an array of arrays, where each element is accessed using two indices: one for the row and one for the column.

## Initializing a Matrix (Two-Dimensional Array)

To initialize a matrix in C, you can declare a two-dimensional array and assign values to its elements. Here is an example of how to initialize a 2x3 matrix:

```c
int matrix[2][3] = {
    {1, 2, 3},// First row
    {4, 5, 6}// Second row
};
```

You can also initialize a matrix without explicitly specifying the size of the second dimension:

```c
int matrix[][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
```