# Math Operations and Syntax in C

## Common Math Operations

C supports a variety of mathematical operations using standard operators. Here are some of the most common ones:

- **Addition (`+`)**: Adds two numbers together.

  ```c
  int sum = a + b; // Adds a and b
  ```

- **Subtraction (`-`)**: Subtracts one number from another.

  ```c
  int difference = a - b; // Subtracts b from a
  ```

- **Multiplication (`*`)**: Multiplies two numbers.

  ```c
  int product = a * b; // Multiplies a and b
  ```

- **Division (`/`)**: Divides one number by another.
  ```c
  int quotient = a / b; // Divides a by b
  ```
- **Modulus (`%`)**: Returns the remainder of a division operation.

  ```c
  int a = 10, b = 3;
  int remainder = a % b; // Remainder of 10 divided by 3 is 1
  ```

  ## Comparison Operators

  C also provides comparison operators to compare values:

- **Equal to (`==`)**: Checks if two values are equal.

  ```c
  int a= 5, b= 5;
  bool isEqual = (a == b); // isEqual will be true
  ```

- **Not equal to (`!=`)**: Checks if two values are not equal.

  ```c
  bool isNotEqual = (a != b); // isNotEqual will be false
  ```

- **Greater than (`>`)**: Checks if one value is greater than another.

  ```c
  bool isGreater = (a > b); // isGreater will be false
  ```

- **Less than (`<`)**: Checks if one value is less than another.

  ```c
  bool isLess = (a < b); // isLess will be false
  ```

- **Greater than or equal to (`>=`)** and **Less than or equal to (`<=`)**: Checks if one value is greater than or equal to or less than or equal to another.

- **And (`&&`)**: Logical AND operator.

  ```c
  bool bothGreaterThanZero = (a > 0) && (b > 0); // true if both conditions are true
  ```

- **Or (`||`)**: Logical OR operator.

  ```c
  bool atLeastOneGreaterThanZero = (a > 0) || (b > 0); // true if at least one condition is true
  ```

## Operator Precedence

C follows a specific order of operations, known as operator precedence, to determine how expressions are evaluated
. The precedence from highest to lowest is as follows:

1. Parentheses `()`

2. Unary operators (`+`, `-`, `++`, `--`, `!`)

3. Multiplication `*`, Division `/`, Modulus `%`

4. Addition `+`, Subtraction `-`

5. Relational operators (`<`, `<=`, `>`, `>=`)

6. Equality operators (`==`, `!=`)

7. Logical AND `&&`

8. Logical OR `||`
