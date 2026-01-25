# Arrays

A JavaScript **Array** is a data structure that can hold more than one value at a time. It is a list-like object used to store multiple values in a single variable.

Since arrays can hold multiple values, they are useful for organizing and managing collections of data.

## Initializing an Array

You can create an array using square brackets `[]`, and you can store values of any data type, including numbers, strings, objects, and even other arrays.

```javascript
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]
```

## Accessing and Modifying Array Elements

You can access array elements using their index, which starts at 0 for the first element.

```javascript
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Orange
```

You can also modify array elements by assigning new values to specific indices.

```javascript
fruits[1] = "Mango";
console.log(fruits); // Output: ["Apple", "Mango", "Orange"]
```

## Array Methods

Similar to strings, arrays have built-in methods that allow you to manipulate and interact with them. Here are some commonly used array methods:

- `push()`: Adds one or more elements to the end of an array.

  ```javascript
  fruits.push("Grapes");
  console.log(fruits); // Output: ["Apple", "Mango", "Orange", "Grapes"]
  ```

- `pop()`: Removes the last element from an array.

  ```javascript
  fruits.pop();
  console.log(fruits); // Output: ["Apple", "Mango", "Orange"]
  ```

- `shift()`: Removes the first element from an array.

  ```javascript
  fruits.shift();
  console.log(fruits); // Output: ["Mango", "Orange"]
  ```

- `unshift()`: Adds one or more elements to the beginning of an array.

  ```javascript
  fruits.unshift("Pineapple");
  console.log(fruits); // Output: ["Pineapple", "Mango", "Orange"]
  ```

- `length`: Returns the number of elements in an array.

  ```javascript
  console.log(fruits.length); // Output: 3
  ```

- `indexOf()`: Returns the first index at which a given element can be found in the array, or -1 if it is not present.

  ```javascript
  console.log(fruits.indexOf("Mango")); // Output: 1
  console.log(fruits.indexOf("Banana")); // Output: -1 since it's not in the array
  ```

- `slice()`: Returns a shallow copy of a portion of an array into a new array object.

  - A shallow copy means that it copies the elements themselves, but if the elements are objects, it copies references to those objects, not the objects themselves.
  - If you want to create a deep copy of an array (where nested objects are also copied), you would need to use methods like `JSON.parse(JSON.stringify(array))` or libraries like Lodash.
  - Keep in mind if modifying nested objects in a shallow copy will affect the original array.

  ```javascript
  let citrus = fruits.slice(1, 3);
  console.log(citrus); // Output: ["Mango", "Orange"]
  ```

Some of these methods modify the original array, while others return new arrays or values without changing the original.

### Methods that modify the original array:

- `push()`
- `pop()`
- `shift()`
- `unshift()`

### Methods that do not modify the original array:

- `slice()`
- `indexOf()`

### Method return values:

- `length` returns a number representing the count of elements in the array.
- `indexOf()` returns the index of the specified element or -1 if not found.
- `slice()` returns a new array containing the selected elements.
- `push()`, `pop()`, `shift()`, and `unshift()` return the new length of the array after the operation.

## Iterating Over Arrays

You can use loops to iterate over the elements of an array. The `for` loop and `for...of` loop are commonly used for this purpose.

```javascript
// Using a for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Using a for...of loop
for (let fruit of fruits) {
  console.log(fruit);
}
```

This will output each fruit in the array.

In most cases, for...of loops are preferred for their simplicity and readability when iterating over arrays. If you need the index of each element during iteration, a traditional for loop or the forEach method would be more appropriate.

### The forEach Method

The `forEach` method executes a provided function once for each array element.
It loops through the array and applies the function to each element.
It takes a callback function as an argument, which receives the parameters of:

- the current element
- the index of the current element (optional)
- the entire array (optional)

```javascript
fruits.forEach(function (fruit, index) {
  console.log(`${index}: ${fruit}`);
});
```

You can create a function separately and pass it to forEach:

```javascript
function logFruit(fruit, index) {
  console.log(`${index}: ${fruit}`);
}

fruits.forEach(logFruit);
```

This will output:

```
0: Pineapple
1: Mango
2: Orange
```

## ES6+ Built-in Functions

ES6 (ECMAScript 2015) introduced several new built-in functions that enhance JavaScript's capabilities. Here are some commonly used ES6+ built-in functions:

### Array.from()

The `Array.from()` function creates a new array instance from an array-like or iterable object.

```javascript
const str = "hello";
const arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']
```

### Object.assign()

The `Object.assign()` function copies the values of all enumerable own properties from one or more source objects to a target object. It returns the target object.

```javascript
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // Output: { a: 1, b: 4, c: 5 }
```

#### When using `Object.assign()`, if there are properties with the same key in multiple source objects, the value from the last source object will overwrite the previous values. Which is why in the example above, the value of property `b` in the `target` object is overwritten by the value from the `source` object.

### Array.map()

The `Array.map()` function creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

### Array.filter()

The `Array.filter()` function creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
```

### Array.reduce()

The `Array.reduce()` function executes a reducer function on each element of the array, resulting in a single output value.

Takes in two arguments:

- a reducer function, which itself takes in four arguments:
  - the accumulator (the accumulated value previously returned in the last invocation of the reducer, or initial value, if supplied)
  - the current value (the current element being processed in the array)
  - the current index (the index of the current element being processed in the array)
  - the array (the array reduce was called upon)
- an optional initial value.

```javascript
const numbers = [1, 2, 3, 4];
let intialValue = 0;
const sum = numbers.reduce((accumulator, currentValue, index) => {
  console.log(index);
  return accumulator + currentValue;
}, intialValue);
console.log(sum); // Output: 10
```

### Array.find() and Array.findIndex()

The `Array.find()` function returns the value of the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, it returns `undefined`.

```javascript
const numbers = [1, 2, 3, 4, 5];
const firstGreaterThanThree = numbers.find((num) => num > 3);
console.log(firstGreaterThanThree); // Output: 4
```

#### Note that `Array.find()` returns the element itself, not its index. If you need the index, you can use `Array.findIndex()` instead, which works the same but returns the index of the found element or `-1` if not found.

```javascript
const numbers = [1, 2, 3, 4, 5];
const indexFirstGreaterThanThree = numbers.findIndex((num) => num > 3);
console.log(indexFirstGreaterThanThree); // Output: 3, the index of the element 4
```

### Sorting Arrays with Array.sort()

The `Array.sort()` function sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings in ascending order.

To sort numbers or custom objects, you can provide a compare function.

The compare function takes two arguments (a and b) and should return:

- A negative value if `a` should come before `b`
- A positive value if `b` should come after `a`
- Zero if `a` and `b` are considered equal

```javascript
const numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b); // Sorts numbers in ascending order
console.log(numbers); // Output: [1, 2, 3, 4, 5]
```

When comparing strings, you can use the `localeCompare()` method for proper alphabetical sorting:

```javascript
const fruits = ["banana", "apple", "cherry"];
fruits.sort((a, b) => a.localeCompare(b)); // Sorts strings in alphabetical order
console.log(fruits); // Output: ["apple", "banana", "cherry"]
```

Note that the sort method is a mutating method, meaning it changes the original array.

If you want to return a sorted copy of an array without modifying the original array, you can create a shallow copy of the array using the `slice()` method or the spread operator (`...`) before sorting.

```javascript
const numbers = [4, 2, 5, 1, 3];
const sortedNumbers = numbers.slice().sort(); // or use [...numbers].sort()
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]
console.log(numbers); // Original array remains unchanged: [4, 2, 5, 1, 3]
```
