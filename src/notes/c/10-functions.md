# Functions in C

Functions in C are blocks of code that perform specific tasks and can be reused throughout a program. They help in organizing code, improving readability, and reducing redundancy.

## Defining a Function

To define a function in C, you need to specify the return type, function name, and parameters (if any).

The general syntax for defining a function is as follows:

```c
return_type function_name(parameter_list) {
    // Function body
}
```

An example of an function that adds two intergers and returns the result:

```c
int myFunction(int a, int b) {
    // Function body
    return a + b; // Example return statement
}
```

If you don't need a return value, avoid using `void` as it can cause uninteded behavior.

Instead, you can return an integer value to indicate success or failure, usually 0 for success and 1 for failure.

```c
// Function that performs an action without returning a value
int performAction() {
    // Function body
    return 0; // Indicate success
}
```

## Function Parameters

Functions can accept parameters, which are values passed to the function when it is called.

Parameters allow functions to operate on different data without changing the function's code.

```c
int multiply(int x, int y) {
    return x * y; // Example function that multiplies two integers
}
```

Parameters can be of any data type, including primitive types (like `int`, `float`, `char`), arrays, pointers, and user-defined types (like `struct`).

## Calling a Function

To call a function, you simply use its name followed by parentheses containing any required arguments.

```c
int result = myFunction(5, 10); // Calling the function and storing the result
```

## Importing Function Prototypes

To use functions defined in other files, you need to declare their prototypes at the beginning of your file or include the appropriate header files.

```c
#include <stdio.h>
// Function prototype
int myFunction(int a, int b);
```

This allows the compiler to recognize the function when it is called later in the code.

Then, import the `myFunction` definition from another file:

```c
#include "myFunctions.h" // Assuming myFunctions.h contains the prototype for myFunction
```
