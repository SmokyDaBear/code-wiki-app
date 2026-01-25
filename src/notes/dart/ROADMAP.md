# Dart Learning Roadmap

This roadmap guides you from zero to practical Dart proficiency, with optional paths for Flutter, server-side, CLI tools, and web.

## Phase 1 — Fundamentals (Days 1–3)
- Install Dart SDK and set up editor tooling.
- Learn `main()`, variables, `final` vs `const`, control flow (`if`, `for`, `while`, `switch`).
- Functions, parameters (named/optional), imports.
- Run programs: `dart run`. Formatting: `dart format`.

Resources:
- Official: https://dart.dev/guides/language/language-tour
- Tools: https://dart.dev/tools

## Phase 2 — Types, Null Safety, Collections (Days 4–6)
- Built-in types: `int`, `double`, `num`, `String`, `bool`.
- Collections: `List`, `Set`, `Map`, iteration and higher-order functions.
- Null safety: `?`, `!`, `late`, `required`.
- Records and patterns (Dart 3): destructuring, pattern matching in `switch`.

Resources:
- Null safety: https://dart.dev/null-safety
- Records: https://dart.dev/language/records
- Patterns: https://dart.dev/language/patterns

## Phase 3 — OOP, Generics, Enums (Days 7–9)
- Classes, constructors, factory constructors, `extends`/`implements`/`mixin`.
- Abstract, sealed, base classes; extension methods.
- Generics and type inference.
- Enums with members.

Resources:
- Classes: https://dart.dev/language/classes
- Generics: https://dart.dev/language/generics
- Enums: https://dart.dev/language/enum

## Phase 4 — Async: Futures & Streams (Days 10–12)
- `Future`, `async`/`await`, error handling.
- `Stream`, subscriptions, transformations.
- Concurrency patterns and best practices.

Resources:
- Async: https://dart.dev/codelabs/async-await
- Streams: https://dart.dev/tutorials/language/streams

## Phase 5 — Project Structure, Tooling, Testing (Days 13–15)
- `pubspec.yaml`, `lib/`, `bin/`, `test/`, `example/`.
- Analyzer and lints (`analysis_options.yaml`, recommended lints).
- Unit tests with `package:test`.
- Build runner and code generation basics.

Resources:
- Packages & pub: https://dart.dev/tools/pub
- Testing: https://dart.dev/guides/testing
- Lints: https://dart.dev/tools/linter-rules

## Phase 6 — Compilation Targets (Days 16–17)
- JIT vs AOT, `dart compile exe` (native), `dart compile js` (web), and `dart2wasm`.
- Optimize builds; understand snapshots and release modes.

Resources:
- `dart compile`: https://dart.dev/tools/dart-compile
- Web (dart2js): https://dart.dev/web
- Wasm: https://dart.dev/wasm

## Phase 7 — Ecosystem Paths (Days 18–21+)
- Flutter (mobile, desktop, web): widgets, state management.
- Server-side: `shelf`, `dart_frog`.
- CLI tools.
- Interop/FFI.

Resources:
- Flutter: https://docs.flutter.dev
- Shelf: https://pub.dev/packages/shelf
- Dart Frog: https://dartfrog.vgv.dev
- FFI: https://dart.dev/guides/libraries/c-interop

## Milestone Projects
- CLI: build a small command-line todo app.
- Server: JSON API with `shelf`.
- Flutter: simple app with navigation and state.
