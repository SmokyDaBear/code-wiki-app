# Data Types in C

C provides several built-in data types that allow you to store and manipulate different kinds of data. Understanding these data types is essential for effective programming in C.

## Numeric Data Types

C has several numeric data types, the most common of which are:

1. **int**: Used to store integer values (whole numbers). The size of `int` can vary depending on the system, but it is typically 4 bytes.

```c
int a = 10; // Example of an integer variable
```

2. **float**: Used to store single-precision floating-point numbers (decimal numbers). It typically occupies 4 bytes.
   - Float variables require the suffix `f` or `F` when defining a literal value.

```c
float b = 3.14f; // Example of a float variable
```

3. **double**: Used to store double-precision floating-point numbers. It typically occupies 8 bytes.

```c
double c = 3.14159265359; // Example of a double variable
```

4. **long**: Used to store larger integer values. The size of `long` can vary, but it is typically at least 4 bytes.
   - Long variables require the suffix `l` or `L` when defining a literal value.

```c
long largeInt = 100000L; // Example of a long variable
```

5. **short**: Used to store smaller integer values. It typically occupies 2 bytes.

```c
short smallInt = 100; // Example of a short variable
```

6. **long long**: Used to store very large integer values. It typically occupies 8 bytes.
   - Long long variables require the suffix `ll` or `LL` when defining a literal value.

```c
long long veryLargeInt = 10000000000LL; // Example of a long long variable
```

7. **byte**: Used to store small integer values, typically ranging from 0 to 255. It usually occupies 1 byte.

```c
uint8_t byteValue = 255; // Example of a byte variable
```

### Unsigned Data Types

**unsigned**: A modifier that can be applied to `int`, `char`, `short`, `long`, and `long long` to indicate that the variable can only hold non-negative values, effectively doubling the upper limit of the range.

    - Creating a variable as unsigned requires the `unsigned` keyword before the data type, and the suffix `U` or `u` when defining a literal value.

```c
unsigned int positiveInt = 3000000000U; // Example of an unsigned int variable
```

## Character Data Type

1. **char**: Used to store single characters. It typically occupies 1 byte.

```c
char d = 'A'; // Example of a char variable
```

## Void Data Type

1. **void**: Represents the absence of a value. It is commonly used for functions that do not return a value.

```c
void myFunction() {
    // Function code here
}
```

## Strings(Character Arrays)

C does not have a built-in string data type. Instead, strings are represented as arrays of characters terminated by a null character (`'\0'`).

```c
char str[] = "Hello, World!"; // Example of a string (character array)
```

## Type Conversion

C allows for type conversion between different data types, either implicitly or explicitly.

### Implicit Conversion

Implicit conversion occurs when the compiler automatically converts one data type to another during operations.

```c
int a = 10;
float b = 5.5f;
float result = a + b; // 'a' is implicitly converted to float
```

### Explicit Conversion (Type Casting)

Explicit conversion, or type casting, is when you manually convert one data type to another using a cast operator.

The type that you want to convert to is placed in parentheses before the value to be converted.

```c
float a = 5.5f;
int b = (int)a; // 'a' is explicitly cast to int, resulting in 5
```

Can also be used to convert a number into a character, however this uses the ASCII values of characters:

```c
int num = 65;
char ch = (char)num; // 'ch' will be 'A' since 65 is the ASCII value for 'A'
```

The reverse of this is also possible:

```c
char ch = 'B';
int num = (int)ch; // 'num' will be 66 since 'B' is 66 in ASCII
```

To convert a number as a literal string into an integer, you can use the `atoi` function from the `<stdlib.h>` library:

```c
#include <stdlib.h>
char strNum[] = "1234";
int num = atoi(strNum); // 'num' will be 1234 as an integer
```

And the reverse using the `sprintf` function from the `<stdio.h>` library:

```c
#include <stdio.h>
int num = 5678;
char strNum[10];
sprintf(strNum, "%d", num); // 'strNum' will be "5678" as a string
```
