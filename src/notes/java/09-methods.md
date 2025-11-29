# Methods

In Java, a method is a block of code that performs a specific task. Methods are used to organize code into reusable sections, making it easier to read, maintain, and debug.

## Defining a Method

To define a method in Java, you need to specify the following components:

- Access Modifier: Specifies the visibility of the method (e.g., `public`, `private`, `protected`).
- Return Type: Indicates the type of value the method will return (e.g., `int`, `String`, or `void` if it doesn't return anything).
- Method Name: A descriptive name for the method that follows camelCase naming conventions.
  - camelCase is the naming convention with a lowercase first letter of first word, then uppercase first letter of subsequent words and all other letters lowercase. Example: myMethodName
- Parameters (optional): A comma-separated list of input values the method accepts, enclosed in parentheses `()`.
- Method Body: The block of code enclosed in curly braces `{}` that defines what the method does.

Here is an example of a simple method definition:

```java
public int addNumbers(int a, int b) {
    return a + b;
}
```

In this example:

- `public` is the access modifier, allowing the method to be accessed from other classes.
- `int` is the return type, indicating that the method will return an integer value.
- `addNumbers` is the method name.
- `(int a, int b)` are the parameters, which are two integers that the method takes as input.
- The method body contains a single statement that returns the sum of `a` and `b`.

## Calling a Method

To call a method in Java, you use the method name followed by parentheses `()`, and pass any required arguments if the method has parameters.

Here is an example of how to call the `addNumbers` method defined above:

```java
int result = addNumbers(5, 10);
System.out.println("The sum is: " + result); // Output: The sum is: 15
```

## Method Overloading

Method overloading is a feature in Java that allows you to define multiple methods with the same name but different parameter lists (different types, number, or both).

This enables you to create methods that perform similar tasks but with different input data.

Here is an example of method overloading:

For an `int` addition method:

```java
public int addNumbers(int a, int b) {
    return a + b;
}
```

For a `double` addition method:

```java
public double addNumbers(double a, double b) {
    return a + b;
}
```

Both of these methods can coexist in the same class, and the appropriate method will be called based on the argument types provided during the method call.

This is done automatically by the Java compiler.

```java
int intResult = addNumbers(5, 10); // Calls the int version
double doubleResult = addNumbers(5.5, 10.2); // Calls the double version
```

## Recursion

Recursion is a programming technique where a method calls itself to solve a problem. A recursive method typically has two main components:

- Base Case: A condition that stops the recursion to prevent infinite loops.
- Recursive Case: The part of the method that calls itself with modified arguments to approach the base case.

Here is an example of a recursive method that calculates the factorial of a number:

- A `factorial` of a non-negative integer `n` is the product of all positive integers less than or equal to `n`.
  - The factorial of `0` is defined to be `1`. And for any positive integer `n`, the factorial is `n * (n-1) * (n-2) * ... * 1`.

```java
public int factorial(int n) {
    if (n == 0) { // Base case
        return 1;
    } else { // Recursive case
        return n * factorial(n - 1);
    }
}
```

In this example, the `factorial` method calls itself with `n - 1` until it reaches the base case where `n` is `0`.
You can call the `factorial` method like this:

```java
int result = factorial(5);
System.out.println("Factorial of 5 is: " + result); // Output: Factorial of 5 is: 120
```
