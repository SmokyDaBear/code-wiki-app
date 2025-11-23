# Scope

Scope refers to the accessibility of variables and functions in different parts of your code. In JavaScript, there are two main types of scope: global scope and local scope.

Block scope, introduced with `let` and `const` keywords in ES6, allows variables to be scoped to the nearest enclosing block (e.g., within curly braces `{}`).

## Global Scope

Variables declared outside of any function or block have global scope. They can be accessed from anywhere in the code.

```javascript
let globalVar = "I am global";
function printGlobalVar() {
  console.log(globalVar); // Accessible here
}
printGlobalVar(); // Output: I am global
```

They can also be manipulated from within functions.

```javascript
let count = 0;
function incrementCount() {
  count++;
}
incrementCount();
console.log(count); // Output: 1
```

## Local Scope

Variables declared within a function have local scope. They can only be accessed from within that function.

```javascript
function myFunction() {
  let localVar = "I am local";
  console.log(localVar); // Accessible here
}
myFunction(); // Output: I am local
console.log(localVar); // Error: localVar is not defined
```

Local variables cannot be accessed or modified from outside their function.

```javascript
function anotherFunction() {
  let secret = 42;
}
console.log(secret); // Error: secret is not defined
```

## Block Scope

Variables declared with `let` or `const` inside a block (e.g., within `{}`) have block scope. They can only be accessed within that block.

```javascript
{
  let blockVar = "I am block scoped";
  console.log(blockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined
```

Block-scoped variables cannot be accessed outside the block they are defined in.

```javascript
if (true) {
  const blockConst = "I am also block scoped";
  console.log(blockConst); // Accessible here
}
console.log(blockConst); // Error: blockConst is not defined
```

### Var and Function Scope

Variables declared with `var` are function-scoped, meaning they are accessible throughout the entire function they are declared in, regardless of block boundaries.

```javascript
function varExample() {
  if (true) {
    var functionVar = "I am function scoped";
  }
  console.log(functionVar); // Accessible here
}
varExample(); // Output: I am function scoped
```

If functionVar were declared with `let` or `const`, it would not be accessible outside the `if` block, and would result in an error.

This is called **hoisting** where `var` declarations are moved to the top of their enclosing function scope during compilation.

It's as if they are immediately declared at the top of the function, but not initialized until the line where they are defined is executed.
