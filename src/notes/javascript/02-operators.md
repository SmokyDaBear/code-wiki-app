# Operators in JavaScript

Operators are special symbols or keywords in JavaScript that perform operations on operands (values or variables). They are used to manipulate data and perform calculations.
They are similar to most other commone programming languages.

## Types of Operators

JavaScript provides several types of operators, including:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators

## Arithmetic Operators

Arithmetic operators are used to perform mathematical operations.

### Common arithmetic operators:

- `+` : Addition
- `-` : Subtraction
- `*` : Multiplication
- `/` : Division

### Additional arithmetic operators:

- `%` : Modulus (Remainder)
  - Example: `5 % 2` results in `1`, since 5 divided by 2 leaves a remainder of 1.
- `**` : Exponentiation
  - Example: `2 ** 3` results in `8`, since 2 raised to the power of 3 is 8.
- `++` : Increment by 1
  - Example: `let a = 5; a++;` results in `a` being `6`.
- `--` : Decrement by 1
  - Example: `let a = 5; a--;` results in `a` being `4`.

#### Note: the increment (`++`) and decrement (`--`) operators can only be used with let and var declared variables, not with const, unless the const holds an object or array and you are modifying its properties or elements.

### Syntax Using Arithmetic Operators:

```javascript
let a = 10;

let b = 5;

let sum = a + b; // 15

let difference = a - b; // 5

let product = a * b; // 50

let quotient = a / b; // 2

let remainder = a % b; // 0

let power = a ** 2; // 100

a++; // a is now 11

b--; // b is now 4
```

## Comparison Operators

Comparison operators are used to compare two values and return a boolean result (`true` or `false`).

### Common comparison operators:

- `==` : Equal to (loose equality)
- `===` : Strict equal to
- `!=` : Not equal to (loose inequality)
- `!==` : Strict not equal to
- `>` : Greater than
- `<` : Less than
- `>=` : Greater than or equal to
- `<=` : Less than or equal to

#### The `loose` tag refers to the fact that these operators perform type coercion, meaning they convert the operands to the same type before making the comparison. The `strict` tag means that no type conversion is performed, and both value and type must be the same for the comparison to return true.

### Syntax Using Comparison Operators:

```javascript
let x = 10;

let y = "10";

const areStringsEqualToNumbers = x === y; // false, because types are different

const areValuesEqual = x == y; // true, because values are equal after type coercion

const isNotEqual = x != 5; // true

const isGreaterThan = x > 5; // true

const isLessThanOrEqual = x <= 10; // true
```

### Type Coercion

- The `==` and `!=` operators perform type coercion, meaning they convert the operands to the same type before making the comparison.
- The `===` and `!==` operators do not perform type coercion and compare both value and type.
  - It is generally recommended to use `===` and `!==` to avoid unexpected results due to type coercion.

## Logical Operators

Logical operators are used to combine multiple boolean expressions and return a boolean result.

#### Common logical operators:

- `&&` : Logical AND
- `||` : Logical OR
- `!` : Logical NOT

#### Syntax Using Logical Operators:

```javascript
let a = true;

let b = false;

const aAndB = a && b; // false

const aOrB = a || b; // true

const notA = !a; // false
```

## Assignment Operators

Assignment operators are used to assign values to variables.

#### Common assignment operators:

- `=` : Simple assignment
  - Example: `let x = 10;` assigns the value `10` to the variable `x`.
- `+=` : Addition assignment\
  - Example: `x += 5;` is equivalent to `x = x + 5;`, so if `x` was `10`, it becomes `15`.
- `-=` : Subtraction assignment
  - Example: `x -= 3;` is equivalent to `x = x - 3;`, so if `x` was `10`, it becomes `7`.
- `*=` : Multiplication assignment
  - Example: `x *= 2;` is equivalent to `x = x * 2;`, so if `x` was `10`, it becomes `20`.
- `**=` : Exponentiation assignment
  - Example: `x **= 3;` is equivalent to `x = x ** 3;`, so if `x` was `2`, it becomes `8`.
- `/=` : Division assignment
  - Example: `x /= 2;` is equivalent to `x = x / 2;`, so if `x` was `10`, it becomes `5`.
- `%=` : Modulus assignment
  - Example: `x %= 3;` is equivalent to `x = x % 3;`, so if `x` was `10`, it becomes `1`.

#### Note: Assignment operators can only be used with `let` and `var` declared variables, not with `const`, unless the `const` holds an object or array and you are modifying its properties or elements.
