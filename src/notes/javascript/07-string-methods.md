# Methods

In JavaScript, methods are functions that are associated with objects. They are used to define behaviors for objects and can manipulate the object's properties or perform actions related to the object.

There are many built-in methods in JavaScript for different data types, such as strings, arrays, and objects. You can also create your own custom methods.

## String Methods

Strings in JavaScript come with several built-in methods that allow you to manipulate and work with string data.

- The methods are "called" on string instances using dot `.` notation, and since they are functions, they should be followed by parentheses `()`, which may include arguments if the method requires them.

Here are some commonly used string methods:

- `toUpperCase()`: Converts the string to uppercase letters.

  ```javascript
  let str = "hello";
  console.log(str.toUpperCase()); // Output: "HELLO"
  ```

- `toLowerCase()`: Converts the string to lowercase letters.

  ```javascript
  let str = "HELLO";
  console.log(str.toLowerCase()); // Output: "hello"
  ```

- `charAt(index)`: Returns the character at the specified index.

  ```javascript
  let str = "hello";
  console.log(str.charAt(1)); // Output: "e"
  ```

- `indexOf(substring)`: Returns the index of the first occurrence of the specified substring.

  ```javascript
  let str = "hello world";
  console.log(str.indexOf("world")); // Output: 6
  ```

- `slice(start, end)`: Extracts a section of the string and returns it as a new string.

  - `start` is the index to begin extraction (inclusive), meaning the character at this index is included in the returned substring.
  - `end` is the index to end extraction (exclusive), meaning the character at this index is not included in the returned substring,
    if you omit `end`, the slice continues to the end of the string.

  ```javascript
  let str = "hello world";
  console.log(str.slice(0, 5)); // Output: "hello"
  ```

- `replace(searchValue, newValue)`: Replaces occurrences of a specified value with a new value.

  ```javascript
  let str = "hello world";
  console.log(str.replace("world", "there")); // Output: "hello there"
  ```

- `trim()`: Removes whitespace from both ends of the string.

  ```javascript
  let str = "   hello world   ";
  console.log(str.trim()); // Output: "hello world"
  ```

- `split(separator)`: Splits the string into an array of substrings based on the specified separator.

  ```javascript
  let str = "apple,banana,cherry";
  console.log(str.split(",")); // Output: ["apple", "banana", "cherry"]
  ```

  - If the `separator` is omitted, the entire string is returned as a single element array.

  ```javascript
  let str = "hello";
  console.log(str.split()); // Output: ["hello"]
  ```

- `includes(substring)`: Checks if the string contains the specified substring and returns a boolean value.

  ```javascript
  let str = "hello world";
  console.log(str.includes("world")); // Output: true
  ```

- `startsWith(substring)`: Checks if the string starts with the specified substring and returns a boolean value.

  ```javascript
  let str = "hello world";
  console.log(str.startsWith("hello")); // Output: true
  ```

- `endsWith(substring)`: Checks if the string ends with the specified substring and returns a boolean value.

  ```javascript
  let str = "hello world";
  console.log(str.endsWith("world")); // Output: true
  ```

## Custom Methods

You can also create your own methods by defining functions and attaching them to objects.

Use the `prototype` property to add methods to built-in objects like `String`.

If you want to add a method to the string prototype so that all string instances can use it, you can do so like this:

```javascript
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
```

#### Notice how the methods are chained together using dot notation, this is a common practice in JavaScript to perform multiple operations in a single line, making the code more concise and readable.

Now you can use the `reverse` method on any string:

```javascript
let str = "hello";
console.log(str.reverse()); // Output: "olleh"
```
