# Constructors and Prototypes

In JavaScript, constructors are special functions used to create and initialize objects. Prototypes are a mechanism by which JavaScript objects inherit features from one another.

## Constructors

A constructor function is defined using the `function` keyword or the `class` syntax. When called with the `new` keyword, it creates a new object instance.

They are a bit dated now, but still important to understand.

```javascript
// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 30);
console.log(john.name); // Output: John
```

Classes provide a more modern syntax for defining constructors. Learn more about classes in the [Classes](./12-classes.md) section.

```javascript
// Class syntax
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const jane = new Person("Jane", 25);
console.log(jane.age); // Output: 25
```

## Prototypes

Every JavaScript object has a prototype. A prototype is also an object. All JavaScript objects inherit their properties and methods from their prototype.

You can add methods to a constructor's prototype so that all instances of that constructor share those methods.

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

john.greet(); // Output: Hello, my name is John
```

This is more memory efficient than defining the method inside the constructor, as all instances share the same method.

```javascript
function Person(name) {
  this.name = name;
  this.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
}
```
