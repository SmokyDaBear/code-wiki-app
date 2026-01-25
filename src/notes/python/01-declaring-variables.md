# Declaring Variables in Python

In Python, declaring variables is straightforward and does not require explicit type definitions. You can create a variable by simply assigning a value to it using the equals sign (`=`).

Python is dynamically types, so there is no need to specify type declarations. The type of the variable is inferred from the value assigned to it.

ALthough bad practice, you can also reassign variables to different types.

```python
# Declaring variables

age = 25               # Integer
name = "Alice"        # String
height = 5.7          # Float
is_student = True     # Boolean

# Reassigning variable to a different type (not recommended)
age = "Twenty Five"   # Now age is a String
```

### Variable Naming Rules

When declaring variables in Python, keep the following rules in mind:

- Variable names must start with a letter (a-z, A-Z) or an underscore (\_).
- The rest of the variable name can contain letters, digits (0-9), and underscores.
- Variable names are case-sensitive (e.g., `age` and `Age` are different).
- Avoid using Python reserved keywords (like `if`, `for`, `while`, etc.)
- Use descriptive names that convey the purpose of the variable.
