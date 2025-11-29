# Streams and Lambda Expressions in Java

**Streams** are a powerful feature in Java that allows for functional-style operations on collections of data.
They provide a way to process sequences of elements (like collections, arrays, etc.) in a declarative manner.

**Lambda Expressions** provide a way to implement functional interfaces in a more concise manner, often replacing the need for anonymous classes.

## Streams

Streams support various operations, including:

- **Filtering**: Selecting elements based on a condition, and filtering out unwanted elements.
- **Mapping**: Transforming elements from one form to another.
- **Reducing**: Combining elements to produce a single result.

### Filtering with Streams

Here's an example of filtering a list of integers to get only even numbers:

- The `.stream()` method converts the list into a stream.
  - This allows you to perform stream operations on the collection.
- The `.filter()` method takes a lambda expression that defines the condition for filtering (in this case, checking if a number is even).
  - If the returned value is `true`, the element is included in the resulting stream. If `false`, it is removed.
- The `.collect(Collectors.toList())` method collects the filtered results back into a list.

These methods can be chained together to create a pipeline of operations that are applied to the data in a readable and efficient way.

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);
        List<Integer> evenNumbers = numbers
        .stream()
        .filter(n -> n % 2 == 0)
        .collect(Collectors.toList());
        System.out.println(evenNumbers); // Output: [2, 4, 6]
    }
}
```

### Mapping with Streams

Use the `.map()` method to transform elements in a stream. For example, you can square each number in a list:

```java
List<Integer> squaredNumbers = numbers
.stream()
.map(n -> n * n)
.collect(Collectors.toList());

System.out.println(squaredNumbers); // Output: [1, 4, 9, 16, 25, 36]
```

### Reducing with Streams

Use the `.reduce()` method to combine elements in a stream. For example, you can calculate the sum of all numbers in a list:

```java
int sum = numbers
.stream()
.reduce(0, (a, b) -> a + b);
System.out.println(sum); // Output: 21
```

## Functional Interfaces

A functional interface is an interface that contains exactly one abstract method.

They can be implemented using lambda expressions, providing a concise way to represent single-method interfaces.

Here is an example of a functional interface:

```java
@FunctionalInterface
public interface Greeting {
    void sayHello(); // single abstract method
}
```

- The `@FunctionalInterface` annotation is optional but recommended, as it indicates that the interface is intended to be a functional interface and helps the compiler enforce this constraint.

If using an anonymous inner class to implement the `Greeting` interface, it would look like this:

```java
public class Main {
    public static void main(String[] args) {
        // Creating an anonymous inner class that implements the Greeting interface
        Greeting greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Hello, World!");
            }
        };
        // Calling the method
        greeting.sayHello(); // Output: Hello, World!
    }
}
```

## Lambda Expressions

Lambda expressions provide a more concise way to implement functional interfaces (interfaces with a single abstract method) compared to anonymous inner classes.

Here's an example of using a lambda expression to implement the same `Greeting` interface:

```java
public class Main {
    public static void main(String[] args) {
        // Using a lambda expression to implement the Greeting interface
        Greeting greeting = () -> System.out.println("Hello, World!");
        // Calling the method
        greeting.sayHello(); // Output: Hello, World!
    }
}
```

These are like arrow functions in JavaScript, where `()` represents the parameters (none in this case), and `->` separates the parameters from the method body, removing the need for `@Override`, `{}`(curly braces) around the method body, and the class boilerplate.
