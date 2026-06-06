# Closures

A closure is a function that has access to variables from its enclosing scope, even after the outer function has finished executing. In Dart, closures are created when you define a function inside another function.

## Example of a Closure

```dart
void add(int x) {
  dynamic innerFunction([int? y]) {
    if (y != null) {
      return x;
    } else {
      x += y;
      return innerFunction;
    }
  }
  return innerFunction;
}
```

This function `add` takes an integer `x` and returns an inner function `innerFunction`. The inner function has access to the variable `x` from the outer function, even after `add` has finished executing.

This allows you to create a closure that can maintain state across multiple calls.
You can also call the inner function directly with an argument to modify the value of `x`.

For example:

```dart
var add5 = add(5);
print(add5()); // Output: 5
add5(3);
print(add5()); // Output: 8
```

The function can also be called consecutively on itsself, allowing you to chain calls and modify the state of `x` with each call.

```dart
var add15 = add(5);
print(add15()); // Output: 5
// Wait, that is not right, we need to return 15...
add15(1)(1)(3)(4)(1);// This will add 1 + 1 + 3 + 4 + 1 to the initial value of 5, resulting in 15
print(add15()); // Output: 15
```
