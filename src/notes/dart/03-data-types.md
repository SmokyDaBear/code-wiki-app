# Dart Data Types & Null Safety

## Primitives

- `int`, `double`, `num`, `String`, `bool`.

### Number Types

- `int`: Integer values.
- `double`: Floating-point values.
- `num`: Supertype of `int` and `double`(can hold either).

```dart
int a = 10;
double b = 3.14;
num c = 42; // can be int or double
```

Reassigning an int variable to a double will cause a compilation error.

### Strings

- Use single or double quotes, although standard practice is to use single quotes for simple strings, unless double quotes are needed for interpolation or to avoid escaping.

```dart
String single = 'Hello';
String double = "'World'";
```

## Collections

Collections are generic iterable types in Dart, used to store multiple values which can be iterated over.

For Lists and Sets, the contained types are specified using angle brackets `<>`, and can only hold values of that type (or subtypes).

Maps contain key-value pairs, where both keys and values can have specified types.
Lists

- `List<T>`, `Set<T>`, `Map<K,V>`.

```dart
final nums = <int>[1, 2, 3];
final unique = <String>{'a', 'b'};
final dict = <String, int>{'a': 1};
```

### Fixed-length vs Growable Lists

- Fixed-length: length cannot change after creation.
- Growable: length can change (default when using list literals).

#### Initilizing a List with a fixed length

Specify `List` followed by the data type in angle brackets`<>`, then use the `filled` constructor with the desired length and a default value wrapped in parentheses`()`.

```dart
final fixedLengthList = List<int>.filled(3, 0); // Initial value of the list after creation: [0, 0, 0]
```

## Null Safety

- Non-nullable by default.
- Use `T?` for nullable types.
- Use `!` to assert non-null (avoid where possible).
- `late` for delayed initialization.

Docs: https://dart.dev/null-safety

## Records (Dart 3)

```dart
(String, int) pair = ('age', 42);
({String name, int age}) person = (name: 'Jes', age: 30);
```

Docs: https://dart.dev/language/records

## Enums with Members

```dart
enum Color {
  red(0xFF0000), green(0x00FF00), blue(0x0000FF);
  final int hex;
  const Color(this.hex);
}
```

Docs: https://dart.dev/language/enum

## Classes, Mixins, Extensions

```dart
mixin Serializable {
  Map<String, Object?> toJson();
}

class User with Serializable {
  final String id;
  final String name;
  User(this.id, this.name);
  @override
  Map<String, Object?> toJson() => {'id': id, 'name': name};
}

extension StringX on String {
  String get shout => toUpperCase() + '!';
}
```

Docs: https://dart.dev/language/classes

## Generics

```dart
class Box<T> {
  final T value;
  Box(this.value);
}
```

Docs: https://dart.dev/language/generics

## Futures & Streams

- `Future<T>` for single async result.
- `Stream<T>` for sequences.
  Docs: https://dart.dev/codelabs/async-await
