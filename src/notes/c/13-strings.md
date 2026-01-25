# Strings

C does not have a built-in string data type. Instead, strings are represented as arrays of characters terminated by a null character (`'\0'`).

## Creating a String

There are essentially two ways to create strings in C:

The first method is to create a character array and initialize it with a string literal:

```c
char str1[] = "Hello, World!"; // Example of a string (character array)
```

The second way is to create an array of characters and manually assign each character, including the null terminator:

```c
char str2[] = {'H', 'i', '!', '\0'}; // Example of a string (character array)
```

## Accessing and Modifying Strings

You can access individual characters in a string using their index, starting from 0. For example:

```c
char str[] = "Hello";
char firstChar = str[0]; // 'H'
char secondChar = str[1]; // 'e'
```

You can also modify characters in a string by assigning new values to specific indices:

```c
str[0] = 'h'; // Now str is "hello"
```

## Common String Functions

C provides several standard library functions for manipulating strings, which are declared in the `<string.h>` header file. Some commonly used string functions include:

- `strlen()`: Returns the length of a string (excluding the null terminator).
- `strcpy()`: Copies one string to another.
- `strcat()`: Concatenates (appends) one string to the end of another.
- `strcmp()`: Compares two strings lexicographically.

To use any of these functions, make sure to include the `<string.h>` header at the beginning of your program:

```c
#include <string.h>
```

### strlen Example

```c
char str[] = "Hello, World!";
size_t length = strlen(str); // length will be 13
```

#### Why use strlen insted of sizeof?

If using sizeof on a string, it will return the total size of the array in bytes, including the null terminator, whereas strlen returns the number of characters in the string excluding the null terminator.

Example:

```c
char str[] = "Hello";
size_t size = sizeof(str); // size will be 6 (5 characters + 1 null terminator)
size_t length = strlen(str); // length will be 5
```

### strcpy Example

```c
char source[] = "Hello";
char destination[20];
strcpy(destination, source); // destination now contains "Hello"
```

The copied string in `destination` will also include the null terminator, and the index for the copied string will be from 0 to 5 (5 being the null terminator), keep in mind that is 6 characters in total.

This also replaces whatever content was in `destination` before the copy.

### strcat Example

_Concatenates_ two strings together:

```c
char str1[20] = "Hello, ";
char str2[] = "World!";
strcat(str1, str2); // str1 now contains "Hello, World!"
```

### strcmp Example
_Compares_ two strings lexicographically:

```c
char str1[] = "apple";
char str2[] = "banana";
int result = strcmp(str1, str2); // result will be negative since "apple" is less than "banana" lexicographically

char str3[] = "apple-123";
char str4[] = "apple-124";
int result2 = strcmp(str3, str4); // result2 will be negative(-1) since '3' is less than '4'
```

#### How strcmp Works

The `strcmp` function compares two strings character by character based on their ASCII values. 

It starts with an index of 0, and compares the characters at that index in both strings. If the characters are equal, it moves to the next index and continues comparing until it finds a difference or reaches the null terminator in either string.

If it reaches the null terminator in both strings simultaneously, it means the strings are equal, and `strcmp` returns 0.

If the characters at the current index are different, `strcmp` returns the difference between their ASCII values (i.e., `str1[i] - str2[i]`).

If it reaches the null terminator in one string before the other, it means the shorter string is lexicographically less than the longer one. In this case, `strcmp` returns a negative value if the first string is shorter, or a positive value if the second string is shorter. 