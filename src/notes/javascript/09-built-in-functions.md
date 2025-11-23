# JavaScript Built-in Functions

JavaScript provides several built-in functions that are readily available for use without needing to define them yourself. These functions perform common tasks and operations, making it easier to work with data and perform calculations.

## Common Built-in Functions

### parseInt()

The `parseInt()` function converts a string to an integer. It takes two arguments: the string to be converted and an optional radix (base) for the conversion.

```javascript
const str = "42";
const num = parseInt(str, 10); // Converts to base 10 integer
console.log(num); // Output: 42
```

### parseFloat()

The `parseFloat()` function converts a string to a floating-point number.

```javascript
const str = "3.14";
const num = parseFloat(str);
console.log(num); // Output: 3.14
```

### isNaN()

The `isNaN()` function checks if a value is `NaN` (Not-a-Number). It returns `true` if the value is `NaN`, and `false` otherwise.

```javascript
console.log(isNaN("hello")); // Output: true
console.log(isNaN(42)); // Output: false
```

### Number()

The `Number()` function converts a value to a number.

```javascript
console.log(Number("123")); // Output: 123
console.log(Number(true)); // Output: 1
```

### String()

The `String()` function converts a value to a string.

```javascript
console.log(String(123)); // Output: "123"
console.log(String(false)); // Output: "false"
```

### Boolean()

The `Boolean()` function converts a value to a boolean (`true` or `false`).

This function follows specific rules for conversion called "truthy" and "falsy" values:

- Values like `0`, `null`, `undefined`, `NaN`, and empty strings (`""`) convert to `false`.
- All other values convert to `true`.
- This includes non-empty strings, non-zero numbers, objects, and arrays.

```javascript
console.log(Boolean(1)); // Output: true
console.log(Boolean(0)); // Output: false
```

### encodeURIComponent() and decodeURIComponent()

The `encodeURIComponent()` function encodes a URI component by replacing each instance of certain characters with one, two, three, or four escape sequences representing the UTF-8 encoding of the character.

```javascript
const uri = "https://example.com/page?name=John Doe&age=25";
const encodedUri = encodeURIComponent(uri);
console.log(encodedUri); // Output: "https%3A%2F%2Fexample.com%2Fpage%3Fname%3DJohn%20Doe%26age%3D25"
```

The `decodeURIComponent()` function decodes a URI component that was previously encoded.

```javascript
const decodedUri = decodeURIComponent(encodedUri);
console.log(decodedUri); // Output: "https://example.com/page?name=John Doe&age=25"
```

## Math Functions

JavaScript provides a built-in `Math` object that contains various mathematical functions and constants. Here are some commonly used `Math` functions:

### Math.abs(x)

Returns the absolute value of `x`.

```javascript
console.log(Math.abs(-5)); // Output: 5
```

### Math.ceil(x)

Rounds `x` up to the nearest integer.

```javascript
console.log(Math.ceil(4.2)); // Output: 5
```

### Math.floor(x)

Rounds `x` down to the nearest integer.

```javascript
console.log(Math.floor(4.8)); // Output: 4
```

### Math.round(x)

Rounds `x` to the nearest integer.

```javascript
console.log(Math.round(4.5)); // Output: 5
console.log(Math.round(4.4)); // Output: 4
```

### Math.max(a, b, ...)

Returns the largest of the given numbers.

```javascript
console.log(Math.max(1, 5, 3)); // Output: 5
```

### Math.min(a, b, ...)

Returns the smallest of the given numbers.

```javascript
console.log(Math.min(1, 5, 3)); // Output: 1
```

### Math.random()

Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

```javascript
console.log(Math.random()); // Output: A random number between 0 and 1
```

#### The `Math.random()` function generates pseudo-random numbers, which means they are not truly random but are generated using an algorithm. For cryptographic purposes or when higher quality randomness is needed, consider using the Web Crypto API.

### Math.sqrt(x)

Returns the square root of `x`.

```javascript
console.log(Math.sqrt(16)); // Output: 4
```

### Math.pow(base, exponent)

Returns the base raised to the power of the exponent.

- The first argument is the base number.
- The second argument is the exponent to which the base number is raised.

```javascript
const base = 2;
const exponent = 3;

console.log(Math.pow(base, exponent)); // Output: 8
```
