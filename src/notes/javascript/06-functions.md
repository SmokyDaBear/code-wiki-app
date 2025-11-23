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
