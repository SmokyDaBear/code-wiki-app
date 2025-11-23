# Variables and Data Types in JavaScript

A **variable** is a named container used to store data values. In JavaScript, you can declare variables using three keywords: `var`, `let`, and `const`. Each has its own characteristics and scope rules.

A **data type** is a classification that specifies which type of value a variable can hold, like a number, a string/text, or more complex structures.

### Key Words:

- **declaration**: The process of creating a variable and specifying its name.
- **initialization**: The process of assigning an initial value to a variable at the time of declaration.
  - when we say something is "initialized", it means it has been assigned a value, but note that a variable can be declared without being initialized.
- **scope**: The context in which a variable is accessible (global or local).
  - global scope: A variable declared outside any function or block, accessible from anywhere in the code.
  - local scope: A variable declared within a function or block, accessible only within that function or block.

## Variables

In JavaScript, variables are used to store data values. You can declare variables using three keywords: `var`, `let`, and `const`.

- `var`: Function-scoped variable. It can be re-declared and updated.
- `let`: Block-scoped variable. It can be updated but not re-declared within the same scope.
- `const`: Block-scoped variable. It cannot be updated or re-declared. It must be initialized at the time of declaration.
- Global variables: Variables declared without any keyword, accessible from anywhere in the code, but NEVER recommended.

### Delaring Variables

Note that variable names are case-sensitive and must begin with a letter, underscore (\_), or dollar sign ($). They cannot start with a number and cannot be JavaScript reserved keywords.

The common naming convention for variables in JavaScript is camelCase, where the first word is lowercase and each subsequent word starts with an uppercase letter (e.g., myVariableName).

```javascript
// Using var
var name = "Alice";
// Using let
let age = 25;
// Using const
const city = "New York";
```

#### Declaring Multiple Variables

You can declare multiple variables in a single statement by separating them with commas.

```javascript
let x = 10,
  y = 20,
  z = 30;
```

#### Declaring Variables Without Initialization

You can declare a variable without initializing it. The variable will have the value `undefined` until it is assigned a value.

```javascript
let score;
console.log(score); // Output: undefined
score = 100;
console.log(score); // Output: 100
```

- Note: This will throw an error if you try to do this with `const`, as `const` variables must be initialized at the time of declaration.

```javascript
const pi; // SyntaxError: Missing initializer in const declaration
```

### When to Use Each Type of Variable

#### Var

- Use `var` when you need function-scoped variables, but it's generally recommended to avoid using `var` in modern JavaScript due to its scoping issues.
- Prefer `let` and `const` for better block scoping and to avoid unintended behaviors.

#### Let

- Use `let` when you need a variable that can change value and is limited to the block scope.
- Avoid using `let` if you do not plan to reassign the variable.
- These can be used in loops where the variable value changes, or to declare variables that will be assigned later, or in conditional blocks.

#### Const

- Use `const` when you want to declare a variable that should not be reassigned.
- Since `const` variables cannot be reassigned, they are ideal for values that should remain constant throughout the program.
- Note that a `const` variable that holds an object or array can still have its properties or elements modified, it just cannot be reassigned to a different object or array.

#### Global Variables

Global variables are those declared outside any function or block. They can be accessed from anywhere in the code, and are generally considered bad practice due to potential naming conflicts and unintended side effects.

- Avoid using global variables as they can lead to conflicts and unexpected behavior in larger codebases.

Just for reference, here's how to declare a global variable, it does not use any keyword:

```javascript
globalVar = "I am a global variable";
```

## Data Types

A data type is a classification that specifies which type of value a variable can hold, like a number, text, or more complex structures.

Javascript is a loosely typed language, meaning you don't have to declare the data type of a variable explicitly. JavaScript has several built-in data types:

- **Number**: Represents both integer and floating-point numbers.
  - Example: `42`, `3.14`
- **String**: Represents a sequence of characters.
  - Example: `"Hello, World!"`, `'JavaScript'`
- **Boolean**: Represents logical values: `true` or `false`.
  - Example: `true`, `false`
- **Object**: Represents a collection of key-value pairs.
  - Example: `{ name: "Alice", age: 25 }`
- **Array**: A special type of object used to store ordered collections of values.
  - Example: `[1, 2, 3, 4, 5]`
- **Function**: A block of code designed to perform a particular task.
  - Example: `function greet() { return "Hello"; }`
- **Null**: Represents the intentional absence of any object value.
  - Example: `null` We typically use null to indicate that somethins is left empty intentionally.
- **Undefined**: Represents a variable that has been declared but not assigned a value.
  - Example: `undefined`

### Hoisting

In JavaScript, variable declarations using `var` are hoisted to the top of their scope, meaning they can be referenced before their declaration without causing an error (though their value will be `undefined` until the assignment is reached). However, `let` and `const` declarations are also hoisted but are not initialized, leading to a "temporal dead zone" where accessing them before declaration results in a ReferenceError.

```javascript
console.log(a); // Output: undefined (due to hoisting)
var a = 5;
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

#### This is one of the reasons why `let` and `const` are preferred over `var` in modern JavaScript, as the temporal dead zone helps catch errors related to variable usage before declaration.
