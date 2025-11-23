# Classes

In JavaScript, classes are a way to create objects and manage inheritance using a more familiar syntax compared to traditional prototype-based inheritance. Classes were introduced in ECMAScript 2015 (ES6) and provide a clearer and more concise way to define object blueprints.

## Defining a Class

You can define a class using the `class` keyword followed by the class name. The class body contains a constructor method and other methods.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
```

## Creating Instances

You can create instances of a class using the `new` keyword.

```javascript
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
console.log(person1.name); // Output: Alice
console.log(person2.age); // Output: 25
```

## Adding Methods

You can add methods to a class by defining them inside the class body.

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}
const person = new Person("Alice", 30);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
```

### Static Methods

You can define static methods that belong to the class itself rather than to instances of the class. Static methods are defined using the `static` keyword.

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  static power(base, exponent) {
    let result = base;

    for (let i = 1; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
}
```

### Calling Static Methods

You can call static methods directly on the class without creating an instance.

- Static methods are often used for utility functions that don't require any instance-specific data.

```javascript
console.log(MathUtils.add(5, 3)); // Output: 8
console.log(MathUtils.subtract(10, 4)); // Output: 6
console.log(MathUtils.multiply(6, 7)); // Output: 42
console.log(MathUtils.divide(20, 4)); // Output: 5
console.log(MathUtils.power(2, 3)); // Output: 8
```

## Inheritance

You can create a subclass that inherits from a parent class using the `extends` keyword.

```javascript
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // Call the parent class constructor
    this.jobTitle = jobTitle;
  }
}

//Creating an instance of the Employee class:
const employee = new Employee("Charlie", 28, "Developer");

//Accessing properties from both the Employee and Person classes:
console.log(employee.name); // Output: Charlie
console.log(employee.jobTitle); // Output: Developer

//Accessing the greet method inherited from the Person class:
employee.greet(); // Output: Hello, my name is Charlie and I am 28 years old.
```
