# Strings in Java

In Java, a _string_ is a sequence of characters that is used to represent text. Strings in Java are objects of the `String` class, which provides various methods for manipulating and working with strings.

## Declaring and Initializing Strings

You can declare and initialize string variables in Java using double quotes (`" "`). Here are some examples:

```java
String greeting = "Hello, World!";
String emptyString = "";
String multiLineString = "This is line one.\nThis is line two.";
```

#### Note: In Java, strings are immutable, meaning that once a string is created, it cannot be changed. Any operation that seems to modify a string actually creates a new string with a new reference in memory.

The original remains unchanged until it is no longer referenced and gets garbage collected.

## String Operations

Java provides several operations and methods for working with strings. Here are some common ones:

### **Concatenation**: You can concatenate (join) two or more strings using the `+` operator.

```java
String firstName = "John";
String lastName = "Doe";
String fullName = firstName + " " + lastName; // "John Doe"
```

### **String Methods**

The `String` class provides various methods for string manipulation and information retrieval. Some useful methods include:

- `length()`: Returns the length of the string as an `integer`.
- `charAt(int index)`: Returns the character at the specified index as a `char`.
- `substring(int beginIndex, int endIndex)`: Returns a `substring` from the specified beginIndex to endIndex.
- `toUpperCase()`: Converts every character in the string to uppercase.
  - to replace just one character, use `replace(...)` instead, with a single character as arguments.
- `toLowerCase()`: Converts every character in the string to lowercase.
- `trim()`: Removes leading and trailing whitespace from the string.
- `replace(char oldChar, char newChar)`: Replaces all occurrences of oldChar with newChar.
- `indexOf(String str)`: Returns the index of the first occurrence of the specified substring, or -1 if not found.
- `equals(String anotherString)`: Compares two strings for equality.
- `contains(CharSequence s)`: Checks if the string contains the specified sequence of characters.
- `split(String regex)`: Splits the string into an array of substrings based on the specified regular expression.
  - The regex can be a simple character like a comma `,` or more complex patterns.

```java
String sample = " Hello, Java! ";
int length = sample.length(); // 14
char ch = sample.charAt(1); // 'H'
String sub = sample.substring(1, 6); // "Hello"
String upper = sample.toUpperCase(); // " HELLO, JAVA! "
String lower = sample.toLowerCase(); // " hello, java! "
String trimmed = sample.trim(); // "Hello, Java!"
String replaced = sample.replace('a', 'o'); // " Hello, Jovo! "
int index = sample.indexOf("Java"); // 8
boolean isEqual = sample.equals(" Hello, Java! "); // true
boolean containsJava = sample.contains("Java"); // true
String[] parts = sample.split(", "); // [" Hello", "Java! "]
```

#### Note the `String[]` (with square brackets) indicate an array of strings. We will cover arrays in more detail later, but for now, just know that it is a collection of multiple string values.

- `toCharArray()`: Converts the string to a new character array.

```java
String example = "Java";
char[] charArray = example.toCharArray(); // ['J', 'a', 'v', 'a']
```
