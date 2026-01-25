# Functions in Python

Functions are reusable blocks of code that perform a specific task. In Python, functions are defined using the `def` keyword, followed by the function name and parentheses `()`. You can also pass parameters to functions to provide input values.

```python
def greet(name):
    """This function greets the person passed in as a parameter."""
    print(f"Hello, {name}!")
```

This function `greet` takes one parameter, `name`, and prints a greeting message.

Note the `f` before the string in the `print` statement. This indicates that it is an f-string, which allows for embedding expressions inside string literals using curly braces `{}`.

In short, this allows dynamic strings where you can insert variable values directly into the string, and when the string is printed, the variable's value is displayed.

```python
firstName = "John"
lastName = "Doe"

def printFullName(first, last):
  fullName = f"{first} {last}"
  print(fullName)
```

To call a function, simply use its name followed by parentheses, passing any required arguments:

```python
greet("Alice")  # Output: Hello, Alice!
printFullName()  # Output: Full Name: John Doe
```
