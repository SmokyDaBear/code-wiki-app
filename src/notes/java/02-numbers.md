# Integers/Numbers in Java

In Java, an **integer** is a data type that represents whole numbers (both positive and negative) without any decimal points. The primary integer data type in Java is `int`, which is a 32-bit signed two's complement integer.

## Integer Types in Java

Java provides several integer types, each with different sizes and ranges:

- `byte`: 8-bit signed integer (-128 to 127)
- `short`: 16-bit signed integer (-32,768 to 32,767)
- `int`: 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
- `long`: 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)

When deciding which integer type to use, consider the range of values you need to store.

For most applications, `int` is sufficient, but if you need to store larger values, you may want to use `long`.

### Keep memory usage in mind

If you are only storing a single number, the difference in memory usage between these types is negligible, but if you are working with large arrays or collections of numbers, choosing the appropriate type can help optimize memory consumption.

For example if you have an array of bytes instead of ints, you will use 4 times less memory.

## Declaring and Initializing Integers

You can declare and initialize integer variables in Java as follows:

```java
int myInt = 100;
long myLong = 100000L; // Note the 'L' suffix for long literals
byte myByte = 10;
short myShort = 20000;
```

## Integer Math Operations

Java supports various arithmetic operations on integers, including addition, subtraction, multiplication, division, and modulus. Here are some examples:

```java
int a = 10;
int b = 3;
int sum = a + b;
int difference = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;
```

### Using the Math class

Java provides a built-in `Math` class that includes methods for performing common mathematical operations. Some useful methods for integers include:

- `Math.abs(int a)`: Returns the absolute value of the integer.
- `Math.max(int a, int b)`: Returns the larger of two integers.
- `Math.min(int a, int b)`: Returns the smaller of two integers.
- `Math.pow(double a, double b)`: Returns the value of the first argument raised to the power of the second argument (note that this method returns a double).
- `Math.round(double a)`: Rounds a floating-point number to the nearest integer.
- `Math.sqrt(double a)`: Returns the square root of a number (returns a double).
- `Math.random()`: Returns a random double value between 0.0 and 1.0.

## Type Casting

In Java, you can convert between different integer types using type casting. This is especially important when converting from a larger type to a smaller type, as it may lead to data loss.

```java
int myInt = 100;
byte myByte = (byte) myInt; // Explicit casting from int to byte
```

Be cautious when casting, as converting a larger integer type to a smaller one can result in overflow or data loss if the value exceeds the range of the target type
It will default to the lower bits of the number.

```java
int largeInt = 130;
byte smallByte = (byte) largeInt; // smallByte will be -126 due to overflow
```

It is usually best to avoid casting unless absolutely necessary, or going from a smaller to a larger type which is safe and implicit.

```java
byte myByte = 10;
int myInt = myByte; // Implicit casting from byte to int
```
