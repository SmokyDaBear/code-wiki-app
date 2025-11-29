# Collections

Collections in Java are data structures that allow you to store, organize, and manipulate groups of objects.

The Java Collections Framework provides a set of classes and interfaces to work with different types of collections, such as lists, sets, and maps.

## Common Collection Types

- **List**: An ordered collection that allows duplicate elements. Examples include `ArrayList` and `LinkedList`.
- **Set**: A collection that does not allow duplicate elements. Examples include `HashSet` and `TreeSet`.
- **Map**: A collection that stores key-value pairs, where each key is unique. Examples include `HashMap` and `TreeMap`.

## Using Collections

To use collections in Java, you need to import the relevant classes from the `java.util` package. Here are some examples of how to create and use different types of collections:

```java
import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
```

## Lists

Lists are ordered collections that allow duplicate elements. You can create a list using the `ArrayList` class:

```java
ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
fruits.add("Apple"); // Duplicate element allowed
System.out.println(fruits); // Output: [Apple, Banana, Apple]
```

## Sets

Sets are collections that do not allow duplicate elements. You can create a set using the `HashSet` class:

```java
HashSet<String> uniqueFruits = new HashSet<>();
uniqueFruits.add("Apple");
uniqueFruits.add("Banana");
uniqueFruits.add("Apple"); // Duplicate element ignored
System.out.println(uniqueFruits); // Output: [Apple, Banana]
```

## Maps

Maps store key-value pairs, where each key is unique. You can create a map using the `HashMap` class:

```java
HashMap<String, Integer> fruitPrices = new HashMap<>();
fruitPrices.put("Apple", 2);
fruitPrices.put("Banana", 1);
fruitPrices.put("Apple", 3); // Update value for key "Apple"
System.out.println(fruitPrices); // Output: {Apple=3, Banana=1}
```

## Iterating Over Collections

You can iterate over collections using enhanced `for` loops or iterators. Here’s an example of iterating over a list:

```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

To iterate over a map, you can use the `entrySet()` method:

- use the `entry.getKey()` and `entry.getValue()` methods to access the key and value of each entry in the map.

```java
for (Map.Entry<String, Integer> entry : fruitPrices.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

## Checking Collection Size and Emptiness

You can check the size of a collection using the `size()` method (returns `int`) and whether it is empty using the `isEmpty()` method (returns `boolean`):

```java
System.out.println("Number of fruits: " + fruits.size()); // Output: Number of fruits: 3
System.out.println("Is the set empty? " + uniqueFruits.isEmpty()); // Output: Is the set empty? false
```

## Removing Elements

You can remove elements from collections using methods like `remove()` for lists and sets, and `remove(key)` for maps:

```java
fruits.remove("Banana"); // Removes "Banana" from the list
uniqueFruits.remove("Apple"); // Removes "Apple" from the set
fruitPrices.remove("Banana"); // Removes the entry with key "Banana" from the map
```

## Adding All Elements from Another Collection

You can add all elements from one collection to another using the `addAll()` method.

This combines the elements of two collections to the collection it was called on (the collection before the `.`) without altering the collection passed as an argument.

Here's an example:

```java
ArrayList<String> moreFruits = new ArrayList<>();
moreFruits.add("Orange");
moreFruits.add("Grapes");

fruits.addAll(moreFruits);
System.out.println(fruits); // Output: [Apple, Banana, Apple, Orange, Grapes]
```
