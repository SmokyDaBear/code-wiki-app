# Strings and Text Representation in Computers

Strings are sequences of characters used to represent text in computer systems. They can include letters, numbers, symbols, and whitespace. In programming, strings are typically enclosed in quotation marks (single, double, or backticks) to differentiate them from other data types.

After understanding how numbers are represented in computers, and then how characters are encoded using systems like ASCII and Unicode, we can now explore how strings, which are essentially sequences of these characters, are handled in computer science.

## String Representation

Strings are represented in computers as arrays of characters, where each character is stored using a specific encoding scheme like ASCII or Unicode. Each character in the string corresponds to a numerical value based on the encoding standard, allowing computers to store and manipulate text data.

An Array is a data structure that holds a collection of elements, typically of the same data type, in a contiguous block of memory. Each element in the array can be accessed using its index, which represents its position within the array.

- An array will start at index 0 for the first element, index 1 for the second element, and so on.
- In memory, an array is stored as a sequence of values, with each value occupying a specific amount of space based on its data type.
- The amount of memory allocated for an array depends on the number of elements it contains and the size of each element.

</br>

For example, the string "Hello" can be represented in memory as an array of characters:
| Index | 0 | 1 | 2 | 3 | 4 |
|-------|-----|-----|-----|-----|-----|
| Char | H | e | l | l | o |

In memory, this string would be stored as a sequence of bytes corresponding to the ASCII or Unicode values of each character.
For example, using ASCII encoding, the string "Hello" would be represented in memory as the following byte values:
| Char | H | e | l | l | o |
|-------|-----|-----|-----|-----|-----|
| ASCII | 72 | 101 | 108 | 108 | 111 |
| Binary | 01001000 | 01100101 | 01101100 | 01101100 | 01101111 |

In memory, these byte values would be stored in contiguous memory locations, allowing the computer to efficiently access and manipulate the string data.

When setting a variable to a string value, the computer allocates memory for each character in the string based on its encoding, and stores the corresponding byte values in those memory locations.

It also stores metadata about the string, such as its length, to facilitate operations like concatenation, slicing, and searching.

The location in memory where the string is stored is called a memory address, or a pointer to the string data.

The full string would also typically be terminated with a special null character (`\0` in C/C++), which indicates the end of the string in memory.

## String Manipulation

String manipulation refers to the various operations that can be performed on strings, such as concatenation, slicing, searching, and replacing characters or substrings. These operations are essential for processing and managing text data in programming.

Let's say you want to change the character at index 1 of the string "Hello" to 'a', resulting in the new string "Hallo". In memory, this would involve updating the byte value at index 1 from `101` (ASCII for 'e') to `97` (ASCII for 'a').
| Index | 0 | 1 | 2 | 3 | 4 | null |
|-------|-----|-----|-----|-----|-----|-----|
| Char | H | a | l | l | o | \0 |
| ASCII | 72 | 97 | 108 | 108 | 111 | 0 |
| Binary | 01001000 | 01100001 | 01101100 | 01101100 | 01101111 | 00000000 |

This change would be reflected in the memory locations where the string is stored, updating the byte value at index 1 accordingly.

Remember that the index begins at 0, so index 1 corresponds to the second character in the string.

String manipulation operations can be performed using built-in functions or methods provided by programming languages, or through custom algorithms implemented by developers.

### Common string manipulation operations include:

- **Concatenation**: Combining two or more strings into a single string.
- **Slicing**: Extracting a portion of a string based on specified indices.
- **Searching**: Finding the position of a specific character or substring within a string.
- **Replacing**: Substituting occurrences of a character or substring with another value.

## String Immutability

In many programming languages, strings are immutable, meaning that once a string is created, it cannot be changed. Any operation that modifies a string will result in the creation of a new string rather than altering the original string in memory.

For example, if you have a string variable `str = "Hello"` and you want to change it to "Hallo", the original string "Hello" remains unchanged in memory.

Instead, a new string "Hallo" is created and assigned to the variable `str`.

The memory location of `str` now points to the new string, while the original string still exists in memory until it is garbage collected.

This immutability has implications for memory management and performance, as creating new strings for every modification can lead to increased memory usage and processing time, especially for large strings or frequent modifications.

To mitigate this, some languages provide mutable string types or string builder classes that allow for more efficient string manipulation.

### Example of String Immutability

```python
str = "Hello"
str = str.replace("e", "a")  # Creates a new string "Hallo"
print(str)  # Output: "Hallo"
```

### Garbage Collection

Garbage collection is an automatic memory management process used by many programming languages to reclaim memory occupied by objects that are no longer in use or referenced by the program.

When a string (or any object) is no longer needed, the garbage collector identifies it as unreachable and frees up the memory it occupied, making it available for future allocations.

This process helps prevent memory leaks and optimizes memory usage, allowing developers to focus on writing code without worrying about manual memory management. However, the specifics of garbage collection can vary between programming languages and their respective runtime environments.

Some languages, like Java and Python, have built-in garbage collectors that automatically handle memory management. Others, like C and C++, require developers to manually manage memory allocation and deallocation, which can lead to issues if not handled properly.
