# Functions in C

Functions in C are blocks of code that perform specific tasks and can be reused throughout a program. They help in organizing code, improving readability, and reducing redundancy.

## Defining a Function

To create or _declare_ a function in C, you need to specify the return type, function name, and parameters (if any).

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

Even if you don't need a return value, avoid using `void` as it can cause uninteded behavior.

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

### Passing an array as a parameter

When passing an array to a function, you actually pass a pointer to the first element of the array. This means that any changes made to the array elements within the function will affect the original array.

```c
void modifyArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2; // Example modification: double each element with the '*=' operator
    }
}
```

## Calling a Function

To call or _execute_ a function, you simply use its name followed by parentheses containing any required arguments.

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

## Standard Practices for Functions

It is standard practice to declare function prototypes at the beginning of your file or in a separate header file. This helps in organizing code and allows for better readability.

Here is an example of declaring a function prototype and defining the function later in the code:

```c
#include <stdio.h>
// Function prototype
int add(int a, int b);
int main() {
    int sum = add(3, 4); // Calling the function
    printf("Sum: %d\n", sum);
    return 0;
}
// Function definition
int add(int a, int b) {
    return a + b;
}
```

Whenever the function is called, the compiler checks the prototype to ensure that the correct number and types of arguments are being passed.

This also allows functions to call each other, before they are defined in the code.

This structure allows you to separate the function declaration from its implementation, making it easier to manage larger programs.

## Recursion

Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem. It is commonly used for problems that can be broken down into smaller, similar subproblems.

Here is an example of a recursive function that calculates the factorial of a number:

```c
int factorial(int n) {
    if (n == 0) {
        return 1; // Base case: factorial of 0 is 1
    } else {
        return n * factorial(n - 1); // Recursive case calling itself
    }
}
```

Note that when using resursion, it is important to define a base case to prevent infinite recursion, which can lead to stack overflow errors and infinite loops.

## Inline Keyword for Functions

Normally, when a function is called, the program control jumps to the function's code, executes it, and then returns to the point where the function was called. This process involves some overhead due to the function call mechanism.

The inline keyword is used to suggest to the compiler that it should attempt to embed the function's code directly at each point the function is called, rather than performing a traditional function call. This can improve performance for small, frequently called functions by eliminating the overhead of a function call.

Only use the inline keyword for small functions where the overhead of a function call is significant compared to the execution time of the function itself.

Should NOT be used for large functions, as it can lead to code bloat and negatively impact performance, if the function is recursive as it can lead to infinite inlining, or if the function's address is taken (e.g., when using function pointers).

Also shouldn't be used for functions that are very rarely called, as the benefits of inlining would be negligible in such cases.

```c
inline int square(int x) {
    return x * x; // Example inline function that returns the square of a number
}
int main() {
    int result = square(5); // Calling the inline function
    printf("Square: %d\n", result);
    return 0;
}

// When compiled, it is essentially the same as:
int main() {
    int result = 5 * 5; // The function call is replaced with the function's code
    printf("Square: %d\n", result);
    return 0;
}
```
