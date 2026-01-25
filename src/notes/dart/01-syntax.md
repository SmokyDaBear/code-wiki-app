# Dart Basics: Syntax & Control Flow

Similar to C family languages, Dart has a familiar syntax with some unique features.

Note the return type `void` in this case, followed by the `main` function which is the entry point of the program.

## Hello World

```dart
void main() {
  print('Hello, Dart');
}
```

## Variables & Constants

- `var`: type inferred, can be reassigned.(Like JavaScript `let` and `var`)
- `final`: single assignment at runtime (like `const` in JavaScript **not** reassignable).
- `const`: compile-time constant.
- Explicit types preferred in APIs.

### Final and Const

While similar, as both cannot be reassigned, `final` allows for runtime assignment, whereas `const` requires compile-time constants.

```dart
final now = DateTime.now();
const pi = 3.14159;
int count = 0;
String name = 'Randy';
```

## Functions

- Named and optional parameters with defaults.
- Arrow functions for simple expressions.

```dart
int add(int a, {int b = 0}) => a + b;

void greet(String name, [String? title]) {
  print('Hello ${title ?? ''} $name');
}
```

## Control Flow

```dart
for (var i = 0; i < 3; i++) {
  print(i);
}

if (count > 0) {
  print('Positive');
} else {
  print('Zero or negative');
}
```

## Pattern Matching (Dart 3)

```dart
(Object a, Object b) pair = ('x', 42);

switch (pair) {
  case (String s, int n):
    print('String $s and int $n');
  default:
    print('Other');
}
```

## Classes & Constructors

```dart
class Point {
  final int x;
  final int y;
  const Point(this.x, this.y);

  factory Point.origin() => const Point(0, 0);
}
```

## Async: Futures & Streams

```dart
Future<String> fetch() async {
  await Future.delayed(Duration(milliseconds: 100));
  return 'result';
}

Stream<int> ticker(int n) async* {
  for (var i = 0; i < n; i++) {
    yield i;
  }
}
```

## Error Handling

```dart
try {
  throw Exception('Oops');
} catch (e, st) {
  print('Error: $e');
}
```

References:

- Language Tour: https://dart.dev/guides/language/language-tour
- Records & Patterns: https://dart.dev/language/patterns
