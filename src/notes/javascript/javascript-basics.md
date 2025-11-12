# JavaScript Fundamentals

Welcome to JavaScript! This guide covers the core concepts of the JavaScript programming language.

## What is JavaScript?

JavaScript is a high-level, interpreted programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS.

## Variables and Data Types

### Variable Declarations

```javascript
// const - cannot be reassigned
const name = "John";

// let - can be reassigned, block-scoped
let age = 25;
age = 26; // OK

// var - function-scoped (avoid in modern JS)
var city = "New York";
```

### Data Types

```javascript
// Primitive types
const text = "Hello World"; // string
const number = 42; // number
const isTrue = true; // boolean
const nothing = null; // null
let undefined_var; // undefined

// Objects
const person = {
  name: "John",
  age: 30,
  city: "Boston",
};

// Arrays
const colors = ["red", "green", "blue"];
```

## Functions

### Function Declarations

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

### Arrow Functions

```javascript
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Short form
const greet = (name) => `Hello, ${name}!`;
```

## Control Structures

### Conditional Statements

```javascript
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}
```

### Loops

```javascript
// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// for...of loop
for (const color of colors) {
  console.log(color);
}

// forEach method
colors.forEach((color) => console.log(color));
```

## Next Steps

- Learn about [DOM Manipulation](dom-manipulation.md)
- Explore [Async JavaScript](async-javascript.md)
- Master [ES6+ Features](es6-features.md)
