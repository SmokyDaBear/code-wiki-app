# Destructuring

Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables. It allows for cleaner and more readable code.

## Array Destructuring

You can extract values from an array and assign them to variables using square brackets `[]`.

```javascript
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
```

You can also skip elements by leaving empty spaces in the destructuring pattern.

```javascript
const numbers = [1, 2, 3];
const [a, , c] = numbers;
console.log(a); // Output: 1
console.log(c); // Output: 3
```

## Object Destructuring

You can extract properties from an object and assign them to variables using curly braces `{}`.

```javascript
const person = {
  name: "Alice",
  age: 30,
};
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 30
```

You can also assign properties to variables with different names.

```javascript
const person = {
  name: "Alice",
  age: 30,
};
const { name: personName, age: personAge } = person;
console.log(personName); // Output: Alice
console.log(personAge); // Output: 30
```

## Nested Destructuring

Destructuring can be used with nested objects and arrays as well.

```javascript
const student = {
  name: "Bob",
  scores: {
    math: 90,
    english: 85,
  },
};
const {
  name,
  scores: { math, english },
} = student;
console.log(name); // Output: Bob
console.log(math); // Output: 90
console.log(english); // Output: 85
```

## The Rest Operator

You can use the rest operator (`...`) to collect the remaining elements of an array or properties of an object into a new array or object.

```javascript
// Array Rest Operator
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

You can also destructure objects using the rest operator:

```javascript
// Object Rest Operator
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
};
const { name, ...rest } = person;
console.log(name); // Output: Alice
console.log(rest); // Output: { age: 30, city: "New York" }
```

The rest operator is useful when you want to extract specific values while keeping the rest of the data intact, but still accessible for edge cases.

## Using the Rest Operator in Function Parameters

You can use the rest operator in function parameters to accept a variable number of arguments.

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
```
