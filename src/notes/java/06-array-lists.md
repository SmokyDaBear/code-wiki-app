# Array Lists

Array Lists in Java are part of the `java.util` package and provide a dynamic array-like structure that can grow and shrink in size as needed. They are more flexible than traditional arrays, allowing for easy addition, removal, and manipulation of elements.

They also require importing the `java.util` package to use them.

```java
import java.util.ArrayList;
```

## Creating an Array List

To create an Array List, you need to specify the type of elements it will hold using generics. Here's an example of how to create an Array List of strings:

```java
ArrayList<String> fruits = new ArrayList<>();
```

In this example, `fruits` is an Array List that can hold string values.

Notice the use of angle brackets `<>` to specify the type of elements (in this case, `String`), contrary to arrays which take the type followed by square brackets `[]`.

## Adding Elements

You can add elements to an Array List using the `add()` method. Here's how to add some fruits to the `fruits` Array List:

```java
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Orange");
```

## Accessing Elements

You can access elements in an Array List using the `get()` method, which takes the index of the element you want to retrieve. Here's an example:

```java
String firstFruit = fruits.get(0); // Accessing the first element (Apple)
System.out.println(firstFruit); // Output: Apple
```

## Removing Elements

You can remove elements from an Array List using the `remove()` method. You can remove an element by its index or by its value. Here's how to remove the second fruit (Banana) from the list:

```java
fruits.remove(1); // Removes the element at index 1 (Banana)
```
