# Syntax

C syntax is the set of rules that define how C programs are written and interpreted. Here are some key aspects of C syntax:

## Comments

Comments in C are used to explain code and are ignored by the compiler. There are two types of comments:

- Single-line comments: Start with `//` and continue to the end of the line.

```c
// This is a single-line comment
```

- Multi-line comments: Start with `/*` and end with `*/`.

```c
/* This is a
   multi-line comment */
```

## Ending Statements

In C, each statement must end with a semicolon (`;`). This indicates the end of a complete instruction.

```c
int a = 5; // Statement ends with a semicolon
a = a + 10; // Another statement
```

## Blocks of Code

Blocks of code are enclosed in curly braces (`{}`) and are used to group multiple statements together. This is commonly seen in functions, loops, and conditional statements.

```c
if (a > 0) {
    // This block executes if the condition is true
    printf("a is positive\n");
} else {
    // This block executes if the condition is false
    printf("a is not positive\n");
}
```
