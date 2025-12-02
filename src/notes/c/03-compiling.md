# Compiling C Programs

To compile C programs, you typically use a C compiler such as GCC (GNU Compiler Collection). The compilation process involves converting the human-readable C source code into machine code that the computer can execute.

## Steps to Compile a C Program

1. **Write the Source Code**: Create a C source file with a `.c` extension using a text editor. For example, `hello.c`.

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

2. **Navigate to the Source Code Directory in a Terminal**: Open your terminal of choice, and use the `cd`(change directory) command to change to the directory where your C source file is located.

```bash
cd path/to/your/source/code
```

3. **Compile the Source Code**: Use the GCC compiler to compile the source code. The basic syntax is:

```bash
gcc -o output_name source_file.c
```

- -o specifies the name of the output executable file followed by the name you want to give to the executable.

If you don't specify the `-o` option, GCC will create an executable named `a.out` by default on Unix-like systems.

This will compile `source_file.c` and create an executable named `output_name`. For example:

4. **Run the Compiled Program**: After compilation, you can run the executable from the terminal:

```bash
./output_name
```
