# Comparisons and Conditionals in Java

Comparisons and conditionals are fundamental concepts in programming that allow you to control the flow of your program based on certain conditions.

## Conditional Statements

Conditional statements allow you to execute different blocks of code based on certain conditions. The most common conditional statements in Java are `if`, `else if`, and `else`.

### The `if` Statement

The `if` statement evaluates a boolean expression and executes a block of code if the expression is true.

```java
int number = 10;
if (number > 5) {
    System.out.println("The number is greater than 5");
}
```

### The `else if` Statement

The `else if` statement allows you to check multiple conditions in sequence.

```java
int number = 10;

if (number > 15) {
    System.out.println("The number is greater than 15");
} else if (number > 5) {
    System.out.println("The number is greater than 5 but less than or equal to 15");
}
```

### The `else` Statement

The `else` statement provides a block of code that will execute if none of the previous conditions are true.

```java
int number = 3;

if (number > 5) {
    System.out.println("The number is greater than 5");
} else if(number == 5){
    System.out.println("The number is equal to 5");
} else {
    System.out.println("The number is less than 5");
}
```

## Comparison Operators

In Java, you can compare primitive data types using comparison operators including:

- `==` - equal to.
- `!=` - **not** equal to.
- `<` - less than.
- `>` - greater than.
- `<=` - less than or equal to.
- `>=` - greater than or equal to.

```java
int a = 5;
int b = 10;

if (a < b) {
    System.out.println("a is less than b");
}
```

### .equals() Method for Object Comparison

When comparing objects (including arrays and strings), you should use the `.equals()` method instead of `==`, which checks for reference equality. For example:

```java
String str1 = new String("hello");
String str2 = new String("hello");

if (str1.equals(str2)) {
    System.out.println("str1 is equal to str2");
}
```

For arrays, you can use the `Arrays.equals()` method from the `java.util.Arrays` class to compare the contents of two arrays:

```java
import java.util.Arrays;

int[] arr1 = {1, 2, 3};
int[] arr2 = {1, 2, 3};

if (Arrays.equals(arr1, arr2)) {
    System.out.println("arr1 is equal to arr2");
}
```

Remember that using `==` with objects checks if both references point to the same object in memory, not if their contents are the same.

The exception to this rule is primitive data types (like `int`, `char`, `boolean`, etc.), where `==` checks for value equality.

Think of it like numbers: a char is a number representing a character, so comparing two chars with `==` checks if they have the same numeric value, same for integers, and booleans are a `1` if true and `0` if false.

## Ternary Operator

The ternary operator is a shorthand way of writing simple `if-else` statements.

It takes three operands:

- a condition followed by a question mark `?`
- a value if the condition is true followed by a colon `:`
- and a value if the condition is false, ending the expression with a semicolon `;`.

```java
int number = 10;

String result = (number > 5) ? "Greater than 5" : "5 or less";

System.out.println(result); // Output: Greater than 5
```

### Chaining Ternary Operators

Ternary operators can be chained to handle multiple conditions, but be cautious as it can reduce code readability.

```java
int number = 10;
String result =
(number > 15) ? "Greater than 15" :
(number > 5) ? "Greater than 5 but less than or equal to 15" :
"5 or less";
System.out.println(result); // Output: Greater than 5 but less than or equal to 15
```
