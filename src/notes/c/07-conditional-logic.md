# Conditional Logic in C

Conditional Logic allows you to compare values and execute different blocks of code based on the results of those comparisons. In C, this is primarily done using `if`, `else if`, and `else` statements.

## IF-ELSE Statements

The if statement is used to execute a block of code based on a specified condition. If the condition evaluates to true, the code block inside the if statement is executed. If the condition is false, the code block is skipped.

The else statement can be used in conjunction with the if statement to provide an alternative block of code that will be executed if the condition is false.

There is also the else if statement, which allows you to check multiple conditions in sequence.

### If Statement

```c
int a=10, b=20;
bool aLessThanB = (a < b);
if (aLessThanB) {
    printf("a is less than b\n");
}
```

In this example, the condition `a < b` is evaluated. Since it is true, the message "a is less than b" will be printed.

### Else-if Statement

```c
int a=10, b=20;
if (a > b) {
    printf("a is greater than b\n");
} else if (a < b) {
    printf("a is less than b\n");
}
```

In this example, the first condition `a > b` is false, so the program checks the else-if condition `a < b`, which is true. Therefore, the message "a is less than b" will be printed.

### Else Statement

```c
int a=10, b=20;
if (a > b) {
    printf("a is greater than b\n");
}else if (a < b>){
    printf("a is less than b\n");
} else {
    printf("a and b are equal\n");
}
```

## Ternary Operations (Short-hand If-Else)

The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

- The condition is followed by a question mark `?`.
- The value to return if the condition is true comes next, followed by a colon `:`.
- Finally, the value to return if the condition is false is specified and followed by a semicolon `;`.

```c
int a = 10, b = 20;
const char* result = (a < b) ? "a is less than b" : "a is not less than b";
printf("%s\n", result);
```

## Switch Statement

The switch statement is another way to perform conditional logic based on the value of a variable. It allows you to execute different blocks of code based on the value of an expression.

- Use the `switch` keyword followed by the variable or expression in parentheses.

- Inside the switch block, use `case` labels to define different possible values and the corresponding code to execute for each case followed by a colon `:`. The `break` statement is used to exit the switch block after executing a case.

- A `default` case can also be included to handle any values that do not match any of the specified cases.
  - The `default` case is special and doesn't require a `break` statement since it is the last case in the switch block.

```c
int day = 3;
switch (day) {
    case 1:
        printf("Monday\n");
        break;
    case 2:
        printf("Tuesday\n");
        break;
    case 3:
        printf("Wednesday\n");
        break;
    case 4:
        printf("Thursday\n");
        break;
    case 5:
        printf("Friday\n");
        break;
    case 6:
        printf("Saturday\n");
        break;
    case 7:
        printf("Sunday\n");
        break;
    default:
        printf("Invalid day\n");
}
```

In this example, the value of `day` is 3, so the program will print "Wednesday". The `break` statement is used to exit the switch block after executing the matching case. The `default` case is executed if none of the specified cases match the value of the expression.

## Nesting Conditional Statements

Conditional statements can be _nested_ within each other to create more complex decision-making structures. This means you can place an if, else if, else, or switch statement inside another if, else if, else, or switch statement.

```c
int a = 10, b = 20, c = 15;
if (a < b) {
    if (a < c) {
        printf("a is the smallest\n");
    } else {
        printf("c is the smallest\n");
    }
} else {
    if (b < c) {
        printf("b is the smallest\n");
    } else {
        printf("c is the smallest\n");
    }
}
```

In this example, the program first checks if `a` is less than `b`. If true, it then checks if `a` is also less than `c` to determine if `a` is the smallest.

If the first condition is false, it checks if `b` is less than `c` to find the smallest value among `b` and `c`.

Nesting allows for more detailed and specific conditions to be evaluated, enabling complex decision-making processes in your code.

Nesting can also make code harder to read and maintain, so it's important to use it judiciously and consider breaking complex logic into separate functions when appropriate.

### Avoid Nesting When Possible

An alternative to nesting is to use logical operators (like `&&` for AND, `||` for OR) to combine conditions in a single if statement. This can help keep the code flatter and more readable.

```c
int a = 10, b = 20, c = 15;
if (a < b && a < c) {
    printf("a is the smallest\n");
} else if (b < c) {
    printf("b is the smallest\n");
} else {
    printf("c is the smallest\n");
}
```

In this example, the conditions are combined using the logical AND operator `&&`, eliminating the need for nested if statements and improving readability.
