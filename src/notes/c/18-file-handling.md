# Reading and Writing Files in C

In C, file handling is performed using functions provided in the standard I/O library, which is included by adding the following line at the beginning of your program:

```c
#include <stdio.h>
```

This library provides functions to create, read, write, and close files.

## Opening a File

To open a file, you use the `fopen` function, which takes two arguments: the name of the file and the mode in which to open it.

The name of the file is specified as a string, and if the file is in the same directory as your program, you can simply provide the filename. Otherwise, you need to provide the full path to the file.

The mode can be:

- `"r"`: Read mode (file must exist)
- `"w"`: Write mode (creates a new file or truncates an existing file)
- `"a"`: Append mode (creates a new file or appends to an existing file)
- `"r+"`: Read and write mode (file must exist)

```c
char fileName[] = "example.txt";
FILE *file = fopen(fileName, "r"); // Open file for reading
```

While the file is open, you can perform various operations on it.

## Reading from a File

To read data from a file, you can use functions like `fgetc`, `fgets`, or `fread`.

### Example: Reading a File Character by Character `fgetc`

```c
int ch;
while ((ch = fgetc(file)) != EOF) {
    putchar(ch); // Print each character to the console
}
```

In this example, we initialize ch with an int type to accommodate the EOF value.

### Example: Reading a Line from a File `fgets`

```c
char buffer[256];
if (fgets(buffer, sizeof(buffer), file) != NULL) {
    printf("%s", buffer); // Print the line read from the file
}
```

### Example: Reading Binary Data `fread`

```c
struct Data {
    int id;
    float value;
};
struct Data data;
fread(&data, sizeof(struct Data), 1, file); // Read binary data into the structure
```

## Writing to a File

To write data to a file, you can use functions like `fputc`, `fputs`, or `fwrite`.

### Example: Writing a Character to a File `fputc`

```c
fputc('A', file); // Write character 'A' to the file
```

### Example: Writing a String to a File `fputs`

```c
fputs("Hello, World!\n", file); // Write string to the file
```

### Example: Writing Binary Data `fwrite`

```c
struct Data {
    int id;
    float value;
};
struct Data data = {1, 3.14f};
fwrite(&data, sizeof(struct Data), 1, file); // Write binary data from the structure to the file
```

## Closing a File

After you are done with file operations, it is important to close the file using the `fclose` function to free up resources.

```c
fclose(file); // Close the file
```

This ensures that all data is properly written to the file and that system resources are released.
This also allows other programs to access the file if needed.
