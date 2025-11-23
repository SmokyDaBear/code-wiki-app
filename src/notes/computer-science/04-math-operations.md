# How Computers Perform Basic Math Operations

Computers perform basic math operations using a combination of binary arithmetic and logic gates within the CPU (Central Processing Unit). The fundamental operations include addition, subtraction, multiplication, and division. These operations are executed using binary numbers, which are represented using only two digits: 0 and 1.

## Binary Arithmetic

Binary arithmetic works similarly to decimal arithmetic but uses base-2 instead of base-10. Here are the basic rules for binary addition:

- 0 + 0 = 0
- 0 + 1 = 1
- 1 + 0 = 1
- 1 + 1 = 10 (which is 0 with a carry of 1. Equivalent to 2 in decimal format)

### Example: Binary Addition

To add the binary numbers `1011` (11 in decimal) and `1101` (13 in decimal):

```
   1011
+  1101
--------
  11000
```

The result is `11000`, which is 24 in decimal.

### Two's Complement for Subtraction

Computers often use a method called two's complement to perform binary subtraction. This method allows subtraction to be handled as an addition problem by inverting the bits of the number to be subtracted and adding one.

The **most significant bit (MSB)** in a binary number is the leftmost bit, which represents the highest value position. In two's complement representation, the MSB also indicates the sign of the number (0 for positive, 1 for negative).

| Bits      | Unsigned value | Signed value (Two's complement) |
| --------- | -------------- | ------------------------------- |
| 0000 0000 | 0              | 0                               |
| 0000 0001 | 1              | 1                               |
| 0000 0010 | 2              | 2                               |
| 0111 1110 | 126            | 126                             |
| 0111 1111 | 127            | 127                             |
| 1000 0000 | 128            | −128                            |
| 1000 0001 | 129            | −127                            |
| 1000 0010 | 130            | −126                            |
| 1111 1110 | 254            | −2                              |
| 1111 1111 | 255            | −1                              |

### Example: Binary Subtraction

To subtract the binary number `1101` (13 in decimal) from `1011` (11 in decimal), we can use the method of two's complement:

1. Find the two's complement of `1101`:

- Invert the digits: `0010`
- Add 1: `0010 + 0001 = 0011`

2. Add the two's complement to `1011`:

```
   1011
+  0011
--------
   1110

```

The result is `1110`, which is -2 in decimal (indicating that 11 - 13 = -2).

### Multiplication and Division

Multiplication and division in binary are performed using methods similar to those used in decimal arithmetic, such as repeated addition for multiplication and repeated subtraction for division. However, these operations are more complex and typically handled by specialized circuits within the CPU known as the Arithmetic Logic Unit (ALU).

For multiplication, binary numbers are shifted and added based on the bits of the multiplier. For division, the process involves shifting and subtracting to find the quotient and remainder.

## Logic Gates and Arithmetic Logic Unit (ALU)

Computers use logic gates to perform binary arithmetic operations. Logic gates are electronic circuits that take one or more binary inputs and produce a single binary output based on a specific logical function.

The most common logic gates used in arithmetic operations are

- AND
  - A gate that outputs 1 only if both inputs are 1.
- OR
  - A gate that outputs 1 if at least one input is 1.
- NOT
  - A gate that inverts the input (0 becomes 1, and 1 becomes 0).
- XOR (exclusive OR)
  - A gate that outputs 1 if the inputs are different (one is 0 and the other is 1).
- NAND
  - A gate that outputs 0 only if both inputs are 1.

The Arithmetic Logic Unit (ALU) is a critical component of the CPU that performs arithmetic and logical operations. It uses a combination of logic gates to carry out operations like addition, subtraction, multiplication, and division.

The ALU takes binary inputs, processes them using the appropriate logic gates, and produces a binary output that represents the result of the operation.

We can use these gates to build circuits that perform more complex operations, such as multi-bit addition and subtraction, by combining multiple gates in specific configurations.

We can tap into these gates when performing equallity checks and comparisons between numbers as well.

### Example: Equality Check Using Logic Gates

To check if two binary numbers are equal, we can use the XNOR gate, which outputs 1 if both inputs are the same (either both 0 or both 1).
For example, to check if `1010` and `1010`(decimal 10) are equal:

```
   1 0 1 0
   1 0 1 0
   ---------
   1 1 1 1 (Output of XNOR gates)
```

Since all outputs are 1, the two numbers are equal.
If we compare `1010` and `1001`(decimal 10 and 9):

```
   1 0 1 0
   1 0 0 1
   ---------
   1 1 0 0 (Output of XNOR gates)
```

Since not all outputs are 1, the two numbers are not equal.
