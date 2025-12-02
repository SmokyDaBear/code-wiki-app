# Variables in C

Variables in C are used to store data that can be manipulated throughout a program. Each variable must be declared with a specific data type before it can be used.

Once a variable is declared, it can be assigned a value and used in expressions, functions, and other operations.

They also have a scope (where they can be accessed) and a lifetime (how long they exist in memory), as well as a pointer (which holds the memory address of the variable).

## Declaring Variables

To declare a variable in C, you need to specify its data type followed by the variable name. Here are some examples of variable declarations:

```c
int age;               // Declares an integer variable named age
float height;         // Declares a float variable named height
char initial;         // Declares a char variable named initial
double weight;       // Declares a double variable named weight
```

These declarations created variables, but were not _assigned_ a value.

## Assigning Values to Variables

When we assign a value to a variable, we use the assignment operator (`=`):

- This is also called _initializing_ a variable when we assign a value at the time of declaration.

```c
age = 25;             // Assigns the value 25 to the variable age
height = 5.9f;       // Assigns the value 5.9 to the variable height
initial = 'J';       // Assigns the character 'J' to the variable initial
weight = 70.5;      // Assigns the value 70.5 to the variable weight
```

## Retriving and Using Variable Values

Once a variable has been declared and assigned a value, you can use it in expressions, functions, and other operations. For example, you can print the value of a variable using `printf`.

In C, you use format specifiers to indicate the type of data being printed:

```c
printf("Age: %d\n", age);               // Prints the value of age
printf("Height: %.2f\n", height);       // Prints the value of height with 2 decimal places
printf("Initial: %c\n", initial);       // Prints the value of initial
printf("Weight: %.2f\n", weight);      // Prints the value of weight with 2 decimal places
```

Learn more about [Format Specifiers and Data Types](./04-data-types.md)

## Variable Scope and Lifetime

In C, the scope of a variable determines where it can be accessed within the program. There are three main types of variable scope:

1. **Local Variables**: Declared within a function or block and can only be accessed within that function or block. They are created when the function is called and destroyed when the function exits.

```c
void myFunction() {
    int localVar = 10; // local variable
    printf("%d\n", localVar); // Accessible here
}

printf("%d\n", localVar); // Not accessible here, would cause an error
```

2. **Global Variables**: Declared outside of any function and can be accessed from any function within the same file (or other files if declared with `extern`). They exist for the lifetime of the program.

```c
int globalVar = 20; // global variable
void myFunction() {
    printf("%d\n", globalVar); // Accessible here
}
printf("%d\n", globalVar); // Accessible here as well
```

3. **Static Variables**: Declared with the `static` keyword, they retain their value between function calls. If declared within a function, they have local scope but persist for the lifetime of the program.

```c
void myFunction() {
    static int staticVar = 0; // static variable
    staticVar++;
    printf("%d\n", staticVar); // Retains value between calls
}
myFunction(); // Prints 1
myFunction(); // Prints 2
```

## Pointers

Pointers are variables that store the memory address of another variable. They are declared using the asterisk (`*`) symbol before the pointer name.

```c
int number = 42;          // Regular integer variable
int *pointerToNumber = &number; // Assigning the address of number to the pointer
```

You can access the value stored at the address pointed to by the pointer using the dereference operator (`*`):

```c
printf("Value of number: %d\n", *pointerToNumber); // Prints 42
```

Pointers are a powerful feature in C, allowing for dynamic memory management, array manipulation, and efficient function parameter passing.

## Initializing Multiple Variables

You can declare and initialize multiple variables of the same type in a single line by separating them with commas:

```c
int x = 10, y = 20, z = 30; // Declares and initializes three integer variables
```

You can also declare multiple variables without initializing them:

```c
float a, b, c; // Declares three float variables without initialization
```

And then assign values later, even making them the same value by setting them equal to one another:

```c
a = b = c = 5.5f; // Assigns the value 5.5 to all three float variables
```

## Constants

In C, you can declare constants using the `const` keyword. Constants are variables whose values cannot be changed after they are initialized.
They MUST be assigned a value at the time of declaration, and any attempt to modify them later will result in a compilation error.

```c
const int DAYS_IN_WEEK = 7; // Declares a constant integer variable
const float PI = 3.14159f;   // Declares a constant float variable
```

Attempting to modify a constant variable will result in a compilation error:

```c
DAYS_IN_WEEK = 8; // Error: cannot modify a constant variable
```

Attempting to initialize a constant variable without a value will also result in a compilation error:

```c
const int MAX_VALUE; // Error: constant variable must be initialized
```

## Naming Conventions

When naming variables in C, there are some rules and best practices to follow:

- Variable names must start with a letter (A-Z, a-z) or an underscore (\_), followed by letters, digits (0-9), or underscores.
- Variable names are case-sensitive (e.g., `myVar` and `myvar` are different).
- Avoid using C reserved keywords (e.g., `int`, `return`, `if`, etc.) as variable names.
- Use meaningful names that describe the purpose of the variable (e.g., `totalScore`, `userName`).
- Follow a consistent naming convention, such as camelCase or snake_case, throughout your codebase.
  - Typically, camelCase is used for variable names in C (e.g., `myVariableName`).

### Naming Constants

When naming constants, it is common practice to use all uppercase letters with underscores to separate words. This helps distinguish constants from regular variables.

```c
const int MAX_SPEED = 120; // Constant variable using uppercase naming convention
const float GRAVITY = 9.81f; // Another constant variable
```

By following these conventions, you can improve the readability and maintainability of your C code.
