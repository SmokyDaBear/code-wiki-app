# User Inputs

In C, you can take user input using the `scanf` function, which is part of the standard I/O library. The `scanf` function reads formatted input from the standard input (usually the keyboard) and stores it in the provided variable addresses.

## Syntax of `scanf`

### Importing the Standard I/O Library

To use the `scanf` function, you need to include the standard I/O library at the beginning of your C program:

```c
#include <stdio.h>
```

This is the same library used for printing output with `printf`.

### Using the `scanf` Function

The `scanf` function takes a format string followed by the addresses of variables where the input data will be stored. The format string specifies the type of data to be read, using format specifiers similar to those used in `printf`.

#### First, create a variable to store the input value:

```c
int number;
```

#### Then, use `scanf` to read and store the input from the user:

- specify the format specifier for an integer (`%d`) or whatever type you are reading.
- use the address-of operator (`&`) to pass the address of the variable where the input will be stored.

```c
scanf("%d", &number);
```

When the user inputs a value and presses Enter, `scanf` reads the input and stores it in the `number` variable.

#### Limitations and Considerations

The `scanf` function has some limitations and considerations to keep in mind:

- It does not handle invalid input gracefully. If the user enters data that does not match the expected format, `scanf` may leave the variable unchanged and can lead to undefined behavior.

- It also treats whitespace (spaces, tabs, newlines) as delimiters, which affects how input is read, essentially only reading up to the first whitespace character for string inputs.

### Example: Reading a String from User Input

To read a string from user input, you can use the `%s` format specifier. Here is an example:

```c
char name[50]; // Declare a character array to hold the string
printf("Enter your name: ");
scanf("%s", name); // Read the string input from the user
printf("Hello, %s!\n", name); // Print the input string
```

In this case, if the user inputs "Bob Jones", only "Bob" will be stored in the `name` variable, as `scanf` stops reading at the first whitespace character.

To get around this limitation, you can use `fgets` to read an entire line of input, including spaces. Here is an example using `fgets`:

```c
char name[50]; // Declare a character array to hold the string
printf("Enter your full name: ");
fgets(name, sizeof(name), stdin); // Read the entire line of input
printf("Hello, %s", name); // Print the input string
```

In this example, `fgets` reads the entire line of input, including spaces, and stores it in the `name` variable. Note that `fgets` also includes the newline character (`\n`) at the end of the input, so you may want to remove it if necessary.

#### To remove the newline character from the string read by `fgets`, you can do the use the strcspn function from string.h:

`strcspn` computes the length of the initial segment of the string which consists entirely of characters not in the specified set (in this case, the newline character). By using this function, you can find the position of the newline character and replace it with a null terminator (`\0`), effectively removing it from the string.

It returns the index of the first occurrence of any character from the second string (in this case, `"\n"`) in the first string (`name`). If no such character is found, it returns the length of the first string.

```c
name[strcspn(name, "\n")] = 0; // Replace the newline character with a null terminator
```

## When to use `scanf` vs `fgets`

Use `scanf` when you need to read simple, formatted input (like integers or single words) and are confident that the user will provide valid input.

Use `fgets` when you need to read strings that may contain spaces or when you want to read an entire line of input, as it provides more control over the input process and can help avoid some of the pitfalls associated with `scanf`.
