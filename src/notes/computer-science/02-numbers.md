# How Computers Work: Numbers and Data Representation

Numbers are fundamental to how computers operate and process information.

Computers can use different types of numbers, including:

- **Binary Numbers**: The most basic form of numbers used in computers, represented using only two digits: 0 and 1. Each digit is called a "bit" (binary digit).
- **Decimal Numbers**: The standard number system used by humans, which is base-10 and uses digits from 0 to 9.
- **Hexadecimal Numbers**: A base-16 number system that uses digits 0-9 and letters A-F to represent values. It is often used in programming and computer science for its compact representation of binary data.

Computers use a binary number system to represent and process data. In this system, all information is encoded using only two digits: 0 and 1. Each digit in a binary number is called a "bit" (short for binary digit). Multiple bits can be combined to represent more complex data.

## Binary Number System

The binary number system is a base-2 numeral system that uses only two symbols: 0 and 1. Each position in a binary number represents a power of 2, starting from the rightmost position, which represents 2^0 (1), the next position to the left represents 2^1 (2), then 2^2 (4), and so on.

If you read a binary number from right to left, you can calculate its decimal equivalent by summing the values of the positions where there is a 1.

### Example: Converting Binary to Decimal

To convert the binary number `1101` to decimal:

- Start from the rightmost digit:
  - 1 × 2^0 = 1 × 1 = 1
  - 0 × 2^1 = 0 × 2 = 0
  - 1 × 2^2 = 1 × 4 = 4
  - 1 × 2^3 = 1 × 8 = 8
- Now, sum these values: 1 + 0 + 4 + 8 = 13
- Therefore, the binary number `1101` is equal to the decimal number `13`.

### Example: Converting Decimal to Binary

To convert the decimal number `13` to binary:

- Divide the number by 2 and record the remainder.
  - 13 ÷ 2 = 6, remainder 1
  - 6 ÷ 2 = 3, remainder 0
  - 3 ÷ 2 = 1, remainder 1
  - 1 ÷ 2 = 0, remainder 1
- Now, read the remainders from bottom to top: `1101`
- Therefore, the decimal number `13` is equal to the binary number `1101`.

## Hexadecimal Number System

The hexadecimal number system is a base-16 numeral system that uses sixteen distinct symbols: the numbers 0-9 represent values zero to nine, and the letters A-F represent values ten to fifteen. Hexadecimal is often used in computing as a more human-friendly representation of binary-coded values. Since our number system contains only ten digits (0-9), hexadecimal uses letters to represent values beyond nine.

| Hex Character | Decimal Value |
| ------------- | ------------- |
| 0             | 0             |
| 1             | 1             |
| 2             | 2             |
| 3             | 3             |
| 4             | 4             |
| 5             | 5             |
| 6             | 6             |
| 7             | 7             |
| 8             | 8             |
| 9             | 9             |
| A             | 10            |
| B             | 11            |
| C             | 12            |
| D             | 13            |
| E             | 14            |
| F             | 15            |

### Example: Converting Hexadecimal to Decimal

To convert the hexadecimal number `2F` to decimal:

- Start from the rightmost digit, multiplying each digit by 16 raised to the power of its position (starting from 0):
  - F × 16^0 = 15 × 1 = 15
  - 2 × 16^1 = 2 × 16 = 32
- Now, sum these values: 15 + 32 = 47
- Therefore, the hexadecimal number `2F` is equal to the decimal number `47`.

#### Note that raising a number to the power of 0 always results in 1, unless the base is 0 in which case it is undefined and can be ignored.

### Example: Converting Decimal to Hexadecimal

To convert the decimal number `47` to hexadecimal:

- Divide the number by 16 and record the remainder.
  - 47 ÷ 16 = 2, remainder 15 (F in hexadecimal)
  - 2 ÷ 16 = 0, remainder 2
- Now, read the remainders from bottom to top: `2F`
- Therefore, the decimal number `47` is equal to the hexadecimal number `2F`.

In most coding languages, hexadecimal numbers are prefixed with `0x` to distinguish them from decimal numbers. For example, `0x2F` represents the hexadecimal number `2F`.

There are also usually built-in functions in programming languages to convert between these number systems. For example, in JavaScript, you can use `parseInt(string, radix)` to convert a string representation of a number in a given base (radix) to a decimal integer, and `number.toString(radix)` to convert a decimal number to a string representation in a specified base.

### JavaScript Example:

```javascript
// Convert hexadecimal to decimal in JavaScript
const hexString = "2F";

const decimalValue = parseInt(hexString, 16); // 47

console.log(decimalValue); // Output: 47

// Convert decimal to hexadecimal in JavaScript
const decimalNumber = 47;

const hexValue = decimalNumber.toString(16).toUpperCase(); // "2F"

console.log(hexValue); // Output: 2F
```

## Character Encoding

After understanding how numbers are represented in computers, it's important to know how characters (letters, digits, symbols) are represented. Computers use character encoding schemes to map characters to specific numerical values.
This means, that letters and symbols are stored as numbers in the computer's memory, usually using standards like ASCII or Unicode which use hexadecimal or binary values to represent characters.

- **ASCII (American Standard Code for Information Interchange)**: A character encoding standard that uses 7 bits to represent characters, allowing for 128 unique symbols, including letters, digits, punctuation marks, and control characters.
- **Unicode**: A more comprehensive character encoding standard that can represent characters from multiple languages and symbol sets. Unicode can use different encoding forms, such as UTF-8, UTF-16, and UTF-32, to represent a vast number of characters. These encodings often use hexadecimal values to represent characters.

### Example: ASCII Character Encoding

In ASCII, the character 'A' is represented by the decimal value `65`, which is `41` in hexadecimal and `01000001` in binary.

| Character | Decimal | Hexadecimal | Binary   |
| --------- | ------- | ----------- | -------- |
| !         | 33      | 21          | 00100001 |
| 0         | 48      | 30          | 00110000 |
| 1         | 49      | 31          | 00110001 |
| 2         | 50      | 32          | 00110010 |
| A         | 65      | 41          | 01000001 |
| B         | 66      | 42          | 01000010 |
| C         | 67      | 43          | 01000011 |
| a         | 97      | 61          | 01100001 |
| b         | 98      | 62          | 01100010 |
| c         | 99      | 63          | 01100011 |

### Example: Unicode Character Encoding

In Unicode, the character '€' (Euro sign) is represented by the decimal value `8364`, which is `20AC` in hexadecimal and `0010000010101100` in binary.
| Character | Decimal | Hexadecimal | Binary |
|-----------|---------|-------------|-----------------|
| A | 65 | 41 | 01000001 |
| € | 8364 | 20AC | 0010000010101100|
| 中 | 20013 | 4E2D | 0100111000101101|

#### Note: Unicode can represent a vast number of characters from different languages and symbol sets, making it suitable for global applications.

#### Both ASCII and Unicode have the same values for the first 128 characters, ensuring compatibility between the two encoding schemes for basic English text.
