# Dart Standard Practices

## Effective Dart
- Follow style, usage, and API design guidelines.
- Prefer clear naming, small files, and meaningful docs.
Docs: https://dart.dev/guides/language/effective-dart

## Lints & Analysis
- Use `package:lints` or `flutter_lints`.
- Add `analysis_options.yaml` with recommended rules.
- Run `dart analyze` in CI.
Docs: https://dart.dev/tools/analysis

## Error Handling
- Use exceptions thoughtfully; avoid catching `Exception` broadly.
- Prefer typed errors; validate inputs early.

## Immutability
- Prefer `final` fields, `const` constructors where possible.
- Value types via records when suitable.

## Asynchronous Code
- Avoid synchronous I/O in async flows.
- Cancel stream subscriptions; handle timeouts.

## Testing
- Use `package:test` with clear arrange/act/assert.
- Mock with fakes or stubbed implementations.
Docs: https://dart.dev/guides/testing

## Formatting & Docs
- `dart format .` before commit.
- Use doc comments `///` for public APIs.

## Package Hygiene
- Keep public API in `lib/` and `export` selectively.
- `src/` for internal code; don’t import `src/` from outside.

