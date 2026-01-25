# Dart Project Structure & Tooling

## Standard Package Layout
```
my_package/
  pubspec.yaml         # metadata, dependencies
  lib/                 # public library API
    my_package.dart
  bin/                 # executables (entry points)
    my_package.dart
  test/                # unit tests
  example/             # usage examples
```

## pubspec.yaml
- Name, version, environment (SDK constraints), dependencies, dev_dependencies.
- Scripts via `dart run` from `bin/`.

Docs: https://dart.dev/tools/pub/pubspec

## Analyzer & Lints
- Enable recommended lints in `analysis_options.yaml`.
- Run: `dart analyze`.

Docs: https://dart.dev/tools/analysis

## Formatting & Running
- Format: `dart format .`
- Run: `dart run bin/my_package.dart`

## Imports/Exports
```dart
// lib/src/util.dart (private to package by convention)
// lib/my_package.dart
export 'src/util.dart';
```

## Flutter vs Server/CLI
- Flutter adds `android/`, `ios/`, `web/`, `macos/`, etc. Managed by Flutter tooling.
- Server/CLI stays close to the standard layout above.

References:
- Packages & pub: https://dart.dev/tools/pub
- Analysis: https://dart.dev/tools/analysis
- Flutter structure: https://docs.flutter.dev/development/tools/sdk/release-notes