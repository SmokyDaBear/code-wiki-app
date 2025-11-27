# TypeScript Notes

Welcome to the TypeScript section! Here you'll find notes about TypeScript, the typed superset of JavaScript.

## About TypeScript

TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs.

Anything you can do in JavaScript, you can do in TypeScript, but with the added benefit of type safety and improved tooling.

## What is Type Safety?

Type safety means that the types of variables, function parameters, and return values are checked at compile time. This helps catch errors early in the development process, reducing runtime errors and improving code quality.

This means that if you try to assign a value of the wrong type to a variable, TypeScript will raise an error. For example:

```typescript
let age: number = 25;
age = "thirty"; // Error: Type 'string' is not assignable to type 'number'.
```

## Why Type Safety Matters

- **Early Error Detection**: Catch errors during development rather than at runtime.
- **Improved Code Quality**: Types serve as documentation, making code easier to understand.
- **Better Tooling**: Enhanced IDE support with autocompletion, refactoring, and navigation.
- **Maintainability**: Easier to maintain and refactor codebases as they grow.

## Available Topics

- [TypeScript Basics](01-typescript-basics.md) - Introduction to TypeScript fundamentals
