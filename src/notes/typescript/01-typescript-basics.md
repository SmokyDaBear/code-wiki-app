# TypeScript Basics

Welcome to TypeScript! This guide covers the fundamentals of TypeScript, a typed superset of JavaScript.

## What is TypeScript?

TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs.

## Benefits of TypeScript

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocompletion and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Modern JavaScript Features**: Access to latest JavaScript features
- **Large Ecosystem**: Compatible with existing JavaScript libraries
- **Maintainability**: Easier to manage large codebases

## Syntax Overview

TypeScript syntax is similar to JavaScript, with additional type annotations.

These annotations help define the types of variables, function parameters, and return values.

For variables, you can specify types like this:

```typescript
let message: string = "Hello, TypeScript!";
let count: number = 42;
let isActive: boolean = true;
```

#### Note the colon (`:`) followed by the type after the variable name.

## Basic Types

### Primitive Types

Primitive types in TypeScript include:

- `string`
- `number`
- `boolean`
- `null`
- `undefined`

```typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;
```

### Arrays

Any primitive type can be used in arrays by appending `[]` or using the `Array<type>` syntax:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];
```

### Objects

Objects can have specific property types:

```typescript
let person: {
  name: string;
  age: number;
  email?: string; // Optional property
} = {
  name: "John",
  age: 30,
};
```

But, it is more common to use interfaces or type aliases for defining object shapes, at least for larger objects.

## Interfaces

Interfaces define the shape of objects:

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  isActive: true,
};
```

## Type Aliases and Union Types

An alias creates a new name for a type. Union types allow a variable to hold more than one type like a `string | number`.

```typescript
type Status = "pending" | "approved" | "rejected"; // Union of string literals
type IDUnion = string | number; // Union of string and number

interface Task {
  id: IDUnion;
  title: string;
  status: Status;
}
```

## Functions

### Function Types

For functions, you can specify parameter and return types.

Parameter types go inside the parentheses, and the return type follows the parentheses after a colon.

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

If destructuring parameters, you can type them like this:

```typescript
function displayUser({ name, age }: { name: string; age: number }): void {
  console.log(`Name: ${name}, Age: ${age}`);
}
```

#### Note that the the first object in the parameter list is the destructured object, and the second object defines the types of its properties.

### Optional and Default Parameters

Default parameters can be defined by assigning a value in the function signature. Optional parameters are marked with a question mark (`?`).

```typescript
function greet(
  name: string, // Required parameter
  greeting: string = "Hello", // Default parameter
  optional?: string // Optional parameter
): string {
  if (optional) {
    return `${greeting}, ${name}! ${optional}`;
  }
  return `${greeting}, ${name}!`;
}

function createUser(name: string, age?: number): User {
  return {
    id: Math.random(),
    name,
    email: `${name.toLowerCase()}@example.com`,
    isActive: true,
  };
}
```

## Generics

Generics allow you to create reusable components that work with a variety of types.

```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface Repository<T> {
  findById(id: string): T | undefined;
  save(entity: T): void;
  delete(id: string): void;
}
```
