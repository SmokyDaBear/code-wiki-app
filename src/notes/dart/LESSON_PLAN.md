# Dart Lesson Plan (2–4 Weeks)

A structured plan with daily goals, exercises, and checkpoints.

## Week 1 — Core Language
- Day 1: Setup
  - Install Dart: https://dart.dev/get-dart (Windows installers or Chocolatey)
  - Verify: `dart --version`
  - Editor: VS Code + Dart extensions.
  - Exercise: Print "Hello, Dart" from `bin/main.dart`.
- Day 2: Syntax & Control Flow
  - Variables, `final` vs `const`, `var` vs explicit types.
  - Control flow: `if`, `for`, `while`, `switch`.
  - Exercise: FizzBuzz and a `switch` with pattern matching on tuples.
- Day 3: Functions & Imports
  - Named/optional params, default values, arrow functions.
  - Imports/exports.
  - Exercise: Build small utilities library (`lib/utils.dart`) and use it in `bin/`.
- Day 4: Collections & Iteration
  - `List`, `Set`, `Map`, iteration, functional methods (`map`, `where`, `reduce`).
  - Exercise: Transform a list of objects and aggregate results.
- Day 5: Null Safety
  - `?`, `!`, `late`, `required`, non-nullable types.
  - Exercise: Refactor code to be null-safe and remove `!` where possible.

## Week 2 — OOP & Async
- Day 6: Classes & Constructors
  - `extends`, `implements`, `mixin`, factory constructors.
  - Exercise: Model a `User` with validation; add `toJson()`/`fromJson()`.
- Day 7: Generics & Enums
  - Generic classes/functions, bounded generics, enums with members.
  - Exercise: Build a typed repository interface.
- Day 8: Extensions & Sealed Types
  - Extension methods, sealed/base/final classes (Dart 3 features).
  - Exercise: Add extensions for `Iterable<T>` convenience.
- Day 9: Async — `Future`
  - `async`/`await`, error handling.
  - Exercise: Fetch JSON (mock or real) and parse; handle errors.
- Day 10: Streams
  - `Stream`, broadcast vs single-subscription, transformations.
  - Exercise: Create a ticker stream; implement pause/resume.

## Week 3 — Tooling, Testing, Compilation
- Day 11: Project Structure
  - `pubspec.yaml`, `lib/`, `bin/`, `test/`.
  - Exercise: Initialize a package and publish locally.
- Day 12: Lints & Analyzer
  - `analysis_options.yaml`, recommended lints, `dart analyze`.
  - Exercise: Enable lints; fix all warnings.
- Day 13: Testing
  - `package:test`, groups, matchers, setup/teardown.
  - Exercise: Unit tests for your utilities and models.
- Day 14: Compilation
  - `dart compile exe`, `dart compile js`, Wasm basics.
  - Exercise: Produce native binary for your CLI.

## Week 4 — Ecosystem & Capstone
- Day 15–17: Choose a Path
  - Flutter: widgets, state, navigation.
  - Server: `shelf` routing, middleware.
  - CLI: robust argument parsing (`args`), config, logging.
- Day 18–20: Capstone Project
  - Implement features, write tests, add docs.
- Day 21: Polish & Ship
  - Format, analyze, package, optional publish.

## References
- Language Tour: https://dart.dev/guides/language/language-tour
- Effective Dart: https://dart.dev/guides/language/effective-dart
- Packages & pub: https://dart.dev/tools/pub
- Testing: https://dart.dev/guides/testing
- Compile: https://dart.dev/tools/dart-compile
- Web: https://dart.dev/web
- Wasm: https://dart.dev/wasm
- Flutter: https://docs.flutter.dev