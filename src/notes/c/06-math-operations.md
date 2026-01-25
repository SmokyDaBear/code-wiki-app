# Math Operations and Syntax in C

## Libraries for Math Operations

Use the `<stdlib.h>` library for general mathematical functions and `<math.h>` for advanced mathematical operations.

```c
#include <stdlib.h>
#include <math.h>
```

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

## Advanced Math Functions

The `<math.h>` library provides several advanced mathematical functions, such as:

- `sqrt()`: Calculates the square root of a number.

  ```c
  double result = sqrt(16.0); // result will be 4.0
  ```

- `pow()`: Raises a number to the power of another number.

  ```c
  double result = pow(2.0, 3.0); // result will be 8.0
  ```

- `sin()`, `cos()`, `tan()`: Calculate the sine, cosine, and tangent of an angle (in radians).
  ```c
  double angle = 0.5; // in radians
  double sineValue = sin(angle);
  double cosineValue = cos(angle);
  double tangentValue = tan(angle);
  ```
- `log()`: Calculates the natural logarithm (base e) of a number.
  ```c
  double result = log(10.0); // result will be approximately 2.302585
  ```
- `exp()`: Calculates the exponential function of a number (e^x).
  ```c
  double result = exp(2.0); // result will be approximately 7.389056
  ```
- `ceil()`: Rounds a number **up** to the nearest integer.
  ```c
  double result = ceil(4.3); // result will be 5.0
  ```
- `floor()`: Rounds a number **down** to the nearest integer.
  ```c
  double result = floor(4.7); // result will be 4.0
  ```
- `fabs()`: Returns the absolute value of a floating-point number.
  ```c
  double result = fabs(-5.5); // result will be 5.5
  ```
- `fmod()`: Returns the remainder of the division of two floating-point numbers.
  ```c
  double result = fmod(5.3, 2.0); // result will be 1.3
  ```
