# Arrays

Arrays in Java are a type of `object` that can hold multiple values of the same data type. They provide a way to store and manage collections of data efficiently.

## Declaring and Initializing Arrays

First, you need to import the package from java.util:

```java
import java.util.Arrays;
```

In Java, you must declare the type and size of the array before using it. Here are some examples of how to declare and initialize arrays:

```java
// Declaring and initializing an array of integers
int[] numbers = new int[5]; // An array that can hold 5 integers
```

Note the type declaration of `int` followed by angle brackets `[]` indicating that this is an array type.

Then the `new` keyword is used to create the array in memory, followed by the size of the array in square brackets.

This array can hold 5 integer values, _indexed_ from 0 to 4.

- The index is the position of each element in the array, starting from 0 and ending with the array length minus one.

## Accessing Array Elements

You can access and modify elements in an array using their index. Here's an example:

```java
numbers[0] = 10; // Assigning value 10 to the first element
numbers[1] = 20; // Assigning value 20 to the second element

int firstNumber = numbers[0]; // Accessing the first element (10) and storing it in a variable

System.out.println(firstNumber); // Output: 10
System.out.println(numbers[1]); // Output: 20
```
