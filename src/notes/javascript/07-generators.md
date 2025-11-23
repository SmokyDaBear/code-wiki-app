# Function Generators

Generators are a special type of function in JavaScript that can be paused and resumed, allowing you to produce a sequence of values over time.

Generators are asynchronous in nature and are useful for handling sequences of data, implementing iterators, and managing asynchronous programming patterns.

They are defined using the `function*` syntax and use the `yield` keyword to yield values.

## Defining a Generator Function

A generator function is defined using the `function*` syntax. Inside the function, you can use the `yield` keyword to yield values.

```javascript
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
```

#### Note the asterisk (\*) after the `function` keyword, which indicates that it is a generator function.

## Calling a Generator Function

When you call a generator function, it does not execute the function body immediately. Instead, it returns a generator object that can be used to control the execution of the function.

You can call the `next()` method on the generator object to resume execution until the next `yield` statement is encountered.

```javascript
const gen = numberGenerator();

console.log(gen.next()); // Output: { value: 1, done: false }
console.log(gen.next()); // Output: { value: 2, done: false }
console.log(gen.next()); // Output: { value: 3, done: false }
console.log(gen.next()); // Output: { value: undefined, done: true }
```

## Using Generators for Iteration

Generators can be used to create custom iterators. You can use a `for...of` loop to iterate over the values produced by a generator.

```javascript
function* fibonacciGenerator() {
  let a = 0,
    b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const fibGen = fibonacciGenerator();
for (let i = 0; i < 10; i++) {
  console.log(fibGen.next().value);
}
// Output: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
```
