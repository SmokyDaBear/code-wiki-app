# Function Pointers and Callbacks in C

In C, functions are first-class citizens, which means you can use pointers to refer to functions.

This allows you to pass functions as arguments to other functions, enabling the implementation of callbacks and higher-order functions.

A _Callback_ is a function that is passed as an argument to another function and is intended to be called at a later time, usually after some event or condition is met.

Callbacks are useful for using similar sets of data, but allowing different behaviors to be executed on that data depending on the context.

## Declaring Function Pointers

To declare a function pointer, you need to specify the return type and parameter types of the function it points to.

```c
// Normal function declaration
int function add(int a, int b) {
    return a + b;
}

// Function pointer declaration
int (*funcPtr)(int, int) = add; // Declare a function pointer and assign it to the 'add' function

// Using the function pointer to call the function
funcPtr(2, 3); // Call the function using the function pointer, returns 5

// Directly calling the function
add(2, 3); // Call the function directly, also returns 5
```

### Why not just call the function directly?

Using function pointers allows for more flexible and reusable code. You can pass different functions to the same function pointer, enabling dynamic behavior based on runtime conditions.

This also allows a function to be passed as an argument to another function, enabling callbacks.

## Using Function Pointers as Callbacks

You can use function pointers to implement callbacks by passing them as arguments to other functions.

```c
// Function that takes a callback function as an argument
void performOperation(int a, int b, int (*operation)(int, int)) {
    int result = operation(a, b); // Call the callback function
    printf("Result: %d\n", result);
}
// Callback functions
int add(int a, int b) {
    return a + b;
}
int multiply(int a, int b) {
    return a * b;
}
int main() {
    performOperation(5, 3, add); // Pass 'add' as the callback
    performOperation(5, 3, multiply); // Pass 'multiply' as the callback
    return 0;
}
```

In this example, the `performOperation` function takes two integers and a function pointer as arguments. It calls the provided callback function (`add` or `multiply`) to perform the operation.

We could use this for a calculator app, where a user selects an operation to perform on two numbers, and the appropriate function is passed as a callback to execute that operation.

## Storing Function Pointers in Arrays

You can also store function pointers in arrays, allowing you to create a list of functions that can be called dynamically.

```c
// Define some functions
int add(int a, int b) {
    return a + b;
}
int subtract(int a, int b) {
    return a - b;
}
int multiply(int a, int b) {
    return a * b;
}
// Array of function pointers
int (*operations[3])(int, int) = {add, subtract, multiply};
int main() {
    int a = 10, b = 5;
    for (int i = 0; i < 3; i++) {
        int result = operations[i](a, b); // Call each function in the array
        printf("Result: %d\n", result);
    }
    return 0;
}
```

In this example, we define three functions (`add`, `subtract`, and `multiply`) and store their pointers in an array called `operations`. We then iterate through the array and call each function dynamically.

This technique is useful for implementing menus or command systems where different operations can be selected and executed based on user input or other conditions.
