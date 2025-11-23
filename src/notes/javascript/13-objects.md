# Objects

In JavaScript, an object is a collection of key-value pairs, where each key (also called a property) is a string (or symbol) and the value can be any data type, including other objects or functions. Objects are used to store and organize data in a structured way.

## Key Words:

- **property**: A key-value pair in an object, where the key is a string (or symbol) and the value can be any data type.
- **method**: A function that is a property of an object.
- **this**: A special keyword that refers to the current object context within a method.
- **nested object**: An object that is a property of another object.
- **enumerable property**: A property that can be iterated over in a loop.

## Creating Objects

You can create objects in JavaScript using object literals, the `Object` constructor, or the `class` syntax.

### Object Literals

The most common way to create an object is by using object literals, which are defined using curly braces `{}`.

```javascript
const person = {
  name: "John",
  age: 30,
  isEmployed: true,
};
```

### Object Constructor

You can also create an object using the `Object` constructor.

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
person.isEmployed = true;
```

### Class Syntax

With ES6, you can define a class and create objects using the `new` keyword.

```javascript
class Person {
  constructor(name, age, isEmployed) {
    this.name = name;
    this.age = age;
    this.isEmployed = isEmployed;
  }
}
const person = new Person("John", 30, true);
```

## Accessing and Modifying Object Properties

You can access and modify object properties using dot notation or bracket notation.

### Dot Notation

```javascript
console.log(person.name); // Output: John
person.age = 31; // Modify age property
```

### Bracket Notation

```javascript
console.log(person["isEmployed"]); // Output: true
person["name"] = "Jane"; // Modify name property
```

## Object Methods

Objects can also have methods, which are functions associated with the object.

```javascript
const person = {
  name: "John",
  age: 30,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // Output: Hello, my name is John
```

## Iterating Over Object Properties

You can iterate over the properties of an object using a `for...in` loop.

```javascript
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 30
// isEmployed: true
```

## Object Methods for Property Management

JavaScript provides several built-in Object Prototype methods to manage object properties:

- `Object.keys(obj)`: Returns an array of the object's own enumerable property names.

  ```javascript
  console.log(Object.keys(person)); // Output: ["name", "age", "isEmployed"]
  ```

- `Object.values(obj)`: Returns an array of the object's own enumerable property values.

  ```javascript
  console.log(Object.values(person)); // Output: ["John", 30, true]
  ```

- `Object.entries(obj)`: Returns an array of the object's own enumerable property [key, value] pairs.

  ```javascript
  console.log(Object.entries(person)); // Output: [["name", "John"], ["age", 30], ["isEmployed", true]]
  ```

- `Object.assign(target, ...sources)`: Copies properties from one or more source objects to a target object.

  ```javascript
  const additionalInfo = { city: "New York", country: "USA" };
  Object.assign(person, additionalInfo);
  console.log(person);
  // Output: { name: "John", age: 30, isEmployed: true, city: "New York", country: "USA" }
  ```

- `delete obj.property`: Deletes a property from an object.

  ```javascript
  delete person.isEmployed;
  console.log(person);
  // Output: { name: "John", age: 30, city: "New York", country: "USA" }
  ```

## Nested Objects

Nesting is a common practice in JavaScript where an object contains another object as a property. This allows for more complex data structures.

```javascript
const student = {
  name: "Alice",
  age: 22,
  address: {
    street: "123 Main St",
    city: "Wonderland",
    zipCode: "12345",
  },
};
```

You can access nested object properties using dot notation or bracket notation.

```javascript
console.log(student.address.city); // Output: Wonderland
student.address.zipCode = "54321"; // Modify nested property
```
