# Conditionals

Conditionals in JavaScript are used to perform different actions based on different conditions. The primary conditional statements in JavaScript are:

- `if`
- `else if`
- `else`
- `switch`

## If Statement

The `if` statement is used to execute a block of code if a specified condition is true. The expression inside the parentheses `()` is evaluated, and if it returns true, the code block inside the curly braces `{}` is executed.

```javascript
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
```

## Else Statement

The `else` statement is used to execute a block of code if the condition in the `if` statement is false.

```javascript
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

## Else If Statement

The `else if` statement is used to specify a new condition to test if the previous `if` condition was false.

```javascript
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

## Switch Statement

The `switch` statement is used to perform different actions based on different conditions. It is often used as an alternative to multiple `else if` statements when you have many conditions to check.

At runtime, switch statements are generally slightly faster than if-else statements, but the difference is usually negligible for most applications, and readability should be prioritized.

### Syntax:

A switch statement starts with the `switch` keyword, followed by an expression in parentheses `()`.

The code block is enclosed in curly braces `{}` and contains multiple `case` clauses. Each `case` clause checks for a specific value, and if the expression matches that value, the corresponding code block is executed.

The `break` statement is used to exit the switch statement after a case is executed. The `default` clause is optional and is executed if none of the other cases match.

```javascript
let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);
```
