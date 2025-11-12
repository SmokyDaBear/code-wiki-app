# TypeScript Basics

Welcome to TypeScript! This guide covers the fundamentals of TypeScript, a typed superset of JavaScript.

## What is TypeScript?

TypeScript is a programming language developed by Microsoft that builds on JavaScript by adding static type definitions. It compiles to plain JavaScript and runs anywhere JavaScript runs.

## Benefits of TypeScript

- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocompletion and refactoring
- **Self-Documenting Code**: Types serve as documentation
- **Modern JavaScript Features**: Access to latest JavaScript features

## Basic Types

### Primitive Types

```typescript
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let value: null = null;
let notDefined: undefined = undefined;
```

### Arrays

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];
```

### Objects

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

## Functions

### Function Types

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const multiply = (a: number, b: number): number => a * b;
```

### Optional and Default Parameters

```typescript
function greet(name: string, greeting: string = "Hello"): string {
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

## Type Aliases and Union Types

```typescript
type Status = "pending" | "approved" | "rejected";
type ID = string | number;

interface Task {
  id: ID;
  title: string;
  status: Status;
}
```

## Generics

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

## Next Steps

- Learn about [Advanced Types](advanced-types.md)
- Explore [Decorators](decorators.md)
- Master [Module Systems](modules.md)
