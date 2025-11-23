# Sets and Maps

Sets and Maps, as well as WeakSets and WeakMaps, are built-in data structures in JavaScript that provide efficient ways to store and manage collections of data.

They feature unique properties and methods that differentiate them from traditional arrays and objects, and also offer specific use cases including memory management with weak references.

If a object is only referenced by a WeakMap or WeakSet, it can be garbage collected, which helps in managing memory effectively.

## Sets

A **Set** is a collection of unique values. It can store any type of value, whether primitive or object references.

One of its main features is that it automatically removes duplicate values.

### Creating a Set

You can create a Set using the `Set` constructor.

```javascript
const mySet = new Set();
```

You can also initialize a Set with an array of values:

```javascript
const numArray = [1, 2, 3, 4, 5, 5, 4];
const mySet = new Set(numArray); // Duplicates will be removed
```

### Adding and Removing Values

You can add values to a Set using the `add()` method and remove them using the `delete()` method.

```javascript
mySet.add(6);
mySet.delete(3);
```

### Checking for Values

You can check if a Set contains a specific value using the `has()` method.

```javascript
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(10)); // Output: false
```

### Iterating Over a Set

You can iterate over the values in a Set using a `for...of` loop or the `forEach()` method.

```javascript
for (let value of mySet) {
  console.log(value);
}
```

```javascript
mySet.forEach((value) => {
  console.log(value);
});
```

## Maps

A **Map** is a collection of key-value pairs where both keys and values can be of any type. Unlike objects, Maps maintain the order of insertion and allow for keys of any type.

### Creating a Map

You can create a Map using the `Map` constructor.

```javascript
const myMap = new Map();
```

You can also initialize a Map with an array of key-value pairs:

```javascript
const keyValueArray = [
  ["name", "Alice"],
  ["age", 30],
];
const myMap = new Map(keyValueArray);
```

Initializing a Map with an object literal is not directly supported; you need to convert the object to an array of key-value pairs first.

To do this, you can use `Object.entries()`:

```javascript
const obj = { name: "Alice", age: 30 };
const myMap = new Map(Object.entries(obj));
```

### Adding and Removing Key-Value Pairs

You can add key-value pairs to a Map using the `set()` method and remove them using the `delete()` method.

```javascript
myMap.set("city", "New York");
myMap.delete("age");
```

### Checking for Keys

You can check if a Map contains a specific key using the `has()` method.

```javascript
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age")); // Output: false
```

### Iterating Over a Map

You can iterate over the key-value pairs in a Map using a `for...of` loop or the `forEach()` method.

#### Using for...of loop

```javascript
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
```

#### Using forEach() method

```javascript
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

## WeakSets and WeakMaps

**WeakSets** and **WeakMaps** are similar to Sets and Maps, but they only hold weak references to their objects. This means that if there are no other references to an object stored in a WeakSet or WeakMap, it can be garbage collected.

### Creating a WeakSet

You can create a WeakSet using the `WeakSet` constructor. This works the same way as a Set, but only accepts objects as values.

```javascript
const myWeakSet = new WeakSet();
```

### Adding and Removing Values

You can add objects to a WeakSet using the `add()` method and remove them using the `delete()` method.
Same as Sets, but only objects are allowed.

```javascript
const obj1 = { name: "Object 1" };
myWeakSet.add(obj1);
myWeakSet.delete(obj1);
```

You can also use the `has()` method to check for the presence of an object in a WeakSet.

```javascript
console.log(myWeakSet.has(obj1)); // Output: true or false depending on whether obj1 is in the WeakSet
```

### Creating a WeakMap

You can create a WeakMap using the `WeakMap` constructor. This works the same way as a Map, but only accepts objects as keys.

```javascript
const myWeakMap = new WeakMap();
```

### Adding and Removing Key-Value Pairs

You can add key-value pairs to a WeakMap using the `set()` method and remove them using the `delete()` method.
Same as Maps, but only objects are allowed as keys.

## When to Use Sets and Maps, and their Weak Counterparts

- Use **Sets** when you need to store a collection of unique values and want to efficiently check for the presence of a value.
- Use **Maps** when you need to store key-value pairs and want to maintain the order of insertion.
- Use **WeakSets** when you need to store a collection of objects without preventing them from being garbage collected.
- Use **WeakMaps** when you need to associate data with objects without preventing those objects from being garbage collected.
