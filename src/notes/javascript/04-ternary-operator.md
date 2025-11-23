# Ternary Expressions

The ternary operator is a concise way to perform conditional evaluations in JavaScript. It is often used as a shorthand for simple `if-else` statements.

### Syntax

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

- `condition`: A boolean expression that evaluates to `true` or `false`.
  - The condition is followed by a `?` operator.
- `expressionIfTrue`: The expression that is executed if the condition is `true`.
  - This is followed by a `:` operator, or another ternary expression for nested conditions.
- `expressionIfFalse`: The expression that is executed if the condition is `false`.

### Example

```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);
```

In this example, the condition `age >= 18` is evaluated. Since `age` is `20`, which is greater than `18`, the expression `"Yes"` is assigned to the variable `canVote`. If `age` were less than `18`, `"No"` would be assigned instead.

### Nested Ternary Operators

Ternary operators can be nested to handle multiple conditions, but be cautious as it can reduce code readability.

```javascript
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade);
```

In this example, the `score` is evaluated against multiple conditions to determine the corresponding `grade`. Since `score` is `85`, the result will be `"B"`.

### When to Use

- Use the ternary operator for simple conditional assignments to improve code conciseness.
- Avoid using it for complex conditions or multiple nested ternary operators, as it can make the code harder to read and maintain. In such cases, prefer using traditional `if-else` statements.

An example of a good use case for the ternary operator is when assigning a value based on a simple condition, such as determining if a number is even or odd:

```javascript
let number = 4;
let isEven = number % 2 === 0 ? "Even" : "Odd";
console.log(isEven); // Output: Even
```

In this case, the ternary operator provides a clear and concise way to assign the value of `isEven` based on whether `number` is even or odd, and is easily readable.
