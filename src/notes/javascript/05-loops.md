# Loops in JavaScript

Loops are used in JavaScript to execute a block of code multiple times until a specified condition is met. They are essential for tasks that require repetition, such as iterating over arrays or performing actions a certain number of times.

### Key Words:

- iteration: The process of repeating a block of code.
- loop control variable: A variable that controls the number of iterations in a loop.

## Types of Loops

JavaScript provides several types of loops, including:

- `for` loop
- `while` loop
- `do...while` loop
- `for...in` loop
- `for...of` loop

## For Loop

The `for` loop is used to execute a block of code a specific number of times. It consists of three main parts: initialization, condition, and increment/decrement.

### Syntax

```javascript
for (initialization; condition; increment / decrement) {
  // code to be executed on each iteration
}
```

Example:

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In this example, the loop initializes `i` to `0`, checks if `i` is less than `5`, and increments `i` by `1` on each iteration. The loop will print numbers `0` to `4`.

#### Note: Using the less than operator (`<`) in the condition ensures that the loop runs exactly 5 times, from `0` to `4`, when it reaches `5`, the condition becomes false, and the loop stops.

## While Loop

The `while` loop executes a block of code as long as a specified condition is true.

### Syntax

```javascript
while (condition) {
  // code to be executed on each iteration
}
```

Example:

```javascript
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

In this example, the loop will continue to execute as long as `i` is less than `5`, printing numbers `0` to `4`.

#### Note: Ensure to increment the loop control variable (`i++`) inside the loop to avoid infinite loops.

## Do...While Loop

The `do...while` loop is similar to the `while` loop, but it guarantees that the code block will be executed at least once before checking the condition.

### Syntax

```javascript
do {
  // code to be executed on each iteration
} while (condition);
```

Example:

```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

In this example, the loop will print numbers `0` to `4`, similar to the `while` loop, but it ensures that the code block runs at least once.

## For...In and For...Of Loops

The `for...in` loop is used to iterate over the enumerable properties of an object.

- A Enumerable property is a property that can be iterated over in a loop.

### Syntax

```javascript
for (key in object) {
  // code to be executed for each property
}
```

The `for...of` loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc.

### Syntax

```javascript
for (value of iterable) {
  // code to be executed for each value
}
```

We will cover these loops in more detail in later notes, after we learn about objects and arrays.
