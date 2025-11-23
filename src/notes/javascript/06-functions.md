# Functions

Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an output (return value).

## Function Declaration

A function can be declared using the `function` keyword followed by the function name and parentheses `()`.

```javascript
function greet() {
  console.log("Hello");
}
```

## Parameters and Arguments

Functions can take parameters, which are placeholders for the values (arguments) that will be passed to the function when it is called.

The parameters are placed inside the parentheses `()` in the function declaration after the function name, and separated by commas if there are multiple parameters.

```javascript
function logMessage(message) {
  console.log(message);
}
```

## The Return Statement

Functions can return a value using the `return` statement. When a function reaches a `return` statement, it stops executing and returns the specified value.

```javascript
function add(a, b) {
  return a + b;
}
```

## Calling a Function

To execute a function, you call it by using its name followed by parentheses `()`. If the function has parameters, you provide the arguments inside the parentheses.

```javascript
function greet() {
  console.log("Hello");
}

greet(); // Output: Hello
```

## Function Expression

A function can also be defined as a function expression, where the function is assigned to a variable.

```javascript
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3)); // Output: 5
```

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions. They are often used for anonymous functions or callbacks.

```javascript
const multiply = (a, b) => {
  return a * b;
};

console.log(multiply(2, 3)); // Output: 6
```

### Implicit Return

If the function body contains a single expression, you can omit the curly braces and the `return` keyword for an implicit return.

```javascript
const square = (x) => x * x;
console.log(square(4)); // Output: 16
```

## Methods

Methods are functions that are properties of an object. They can be defined using function expressions or shorthand syntax.

```javascript
const person = {
  name: "Alice",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Output: Hello, my name is Alice
```

## Higher-Order Functions

Higher-order functions are functions that can take other functions as arguments or return functions as their result. They are commonly used for operations like mapping, filtering, and reducing arrays.

- The functions taken as arguments are called "callback functions" or "callbacks".

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

## Recursion

Recursion is a technique where a function calls itself in order to solve a problem. A recursive function typically has a base case to stop the recursion and a recursive case to continue calling itself.

```javascript
function factorial(n) {
  if (n === 0) {
    return 1; // Base case
  }
  return n * factorial(n - 1); // Recursive case
}
console.log(factorial(5)); // Output: 120
```
