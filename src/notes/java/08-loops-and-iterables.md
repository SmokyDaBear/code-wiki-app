# Loops and Iterables in Java

Loops are fundamental constructs in programming that allow you to execute a block of code multiple times based on certain conditions. In Java, loops are commonly used to iterate over arrays, collections, and other data structures.

Iterables are objects that can be iterated over, meaning you can traverse through their elements one by one. In Java, many data structures implement the `Iterable` interface, allowing you to use enhanced `for` loops to iterate over them easily.

## Loops

A loop is a programming construct that allows you to repeat a block of code multiple times based on a condition.

In Java, there are several types of loops, including:

- `for` - traditional for loops that iterate a specific number of times.
- `while` - while loops that continue as long as a condition is true.
- `do-while` - do-while loops that execute the block of code at least once before checking the condition.

Additionally, Java provides the _enhanced_ `for` loop (also known as the "for-each" loop) for iterating over collections and arrays.

### The `for` Loop

The `for` loop is used when you know in advance how many times you want to execute a block of code.

It consists of three main parts:

- initialization
- condition
- and increment/decrement.

Here is the syntax of a basic `for` loop, with `i` as the loop counter, a condition of `i < 5` and an increment of 1 or `i++`:

```java
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}
```

### The `while` Loop

The `while` loop continues to execute a block of code as long as a specified condition is true.
Here is the syntax of a basic `while` loop:

```java
int i = 0;
while (i < 5) {
    System.out.println("Iteration: " + i);
    i++;
}
```

### The `do-while` Loop

The `do-while` loop is similar to the `while` loop, but it guarantees that the block of code will execute at least once before checking the condition.
Here is the syntax of a basic `do-while` loop:

```java
int i = 0;
do {
    System.out.println("Iteration: " + i);
    i++;
} while (false);
```

In this case, even though the condition is `false`, the loop will execute once before terminating.

## Iterables and the Enhanced `for` Loop

Iterables are objects that can be iterated over, meaning you can traverse through their elements one by one. In Java, many data structures implement the `Iterable` interface, allowing you to use enhanced `for` loops to iterate over them easily.

These objects include:

- Arrays
- ArrayLists
- HashSets
- Strings (as a sequence of characters)
  The enhanced `for` loop provides a simpler syntax for iterating over these collections without needing to manage an index variable explicitly.

### The Enhanced `for` Loop

The enhanced `for` loop is used to iterate over elements in an array or any object that implements the `Iterable` interface. It simplifies the syntax and improves code readability.
Here is the syntax of an enhanced `for` loop:

```java
for (Type element : collection) {
    // Use the element
}
```

Similar to the traditional `for` loop, but instead of managing an index, you directly access each element in the collection, and assign it to the variable `element` of type `Type`.

To iterate over a string, you can use the enhanced `for` loop as follows:

```java
String message = "Hello";
for (char ch : message.toCharArray()) {
    System.out.println(ch);
}
```

`.toCharArray()` converts the string into an array of characters, allowing you to iterate over each character in the string.

### Example: Iterating Over an ArrayList or Array

```java
// Importing the ArrayList utility class
import java.util.ArrayList;

// Initializing an ArrayList of strings
ArrayList<String> fruits = new ArrayList<>();

// Adding elements to the ArrayList
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");

// Using the enhanced for loop to iterate over the ArrayList
for (String fruit : fruits) {
    System.out.println(fruit);
}

```

## Break and Continue Statements

In Java, the `break` and `continue` statements are used to control the flow of loops.

### Break

Break is used to exit a loop prematurely when a certain condition is met.

```java
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break; // Exit the loop when i is 5
    }
    System.out.println(i);
}
```

This will print numbers from 0 to 4, and then exit the loop when `i` reaches 5.

### Continue

Continue is used to skip the current iteration of a loop and move to the next iteration.

```java
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println(i);
}
```

This will print only odd numbers from 0 to 9, skipping the even numbers.
