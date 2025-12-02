# Printing and Including Libraries in C

In C, printing output to the console is typically done using the `printf` function, which is part of the standard input/output library (`stdio.h`). The `printf` function allows you to format and display text, numbers, and other data types.

Libraries are bits of pre-written code that provide additional functionality to your programs. In C, you can include libraries using the `#include` directive.

## Importing Libraries in C

Using the `#include` preprocessor directive tells the compiler to include the contents of a specified header file library in the program.

There are two common ways to include libraries:

1. **Standard Libraries**: These are included using angle brackets (`< >`). For example, to include the standard I/O library, you would write:

```c
#include <stdio.h>
```

2. **User-Defined Libraries**: These are included using double quotes (`" "`). For example, if you have a custom header file named `myheader.h`, you would include it like this:

```c
#include "myheader.h"
```

### Importing the Standard I/O Library For Printing

To use the `printf` function, you need to include the standard I/O library at the beginning of your C program:

```c
#include <stdio.h>
```

## Using the `printf` Function

The `printf` function takes a format string followed by a variable number of arguments. The format string contains text and format specifiers that indicate how to format the subsequent arguments.

Here is a simple example of using `printf` to print a message to the console:

```c
int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### Escape Sequences

In the Hello World example, `\n` is a newline character **escape sequence** that moves the cursor to the next line after printing the message.

The backslash (`\`) is used to introduce escape sequences in C. Using a backslash as a literal character would require escaping it with another backslash (`\\`).

Some other common escape sequences include:

- `\t`: Tab - horizontal tab
- `\\`: Backslash - prints a backslash character
- `\"`: Double quote - prints a double quote character
- `\'`: Single quote - prints a single quote character

#### Changing Text Color

You can change the text color in the console by using ANSI escape codes. For example, to print text in red, you can use the following code:

```c
    // Print red text
    printf("\033[31mThis text is red!\n");
    // Reset to default text color
    printf("\033[0mThis text is default color.\n");

```

The `\033[` sequence starts the ANSI escape code, `31m` sets the text color to red, and `0m` resets the text color to the default.

Other color codes include:

- `30m`: Black
- `32m`: Green
- `33m`: Yellow
- `34m`: Blue
- `35m`: Magenta
- `36m`: Cyan
- `37m`: White

### Format Specifiers

You can also use format specifiers to print different data types. Here are some common format specifiers:

- `%d`: Integer
- `%f`: Floating-point number
- `%c`: Character
- `%s`: String
