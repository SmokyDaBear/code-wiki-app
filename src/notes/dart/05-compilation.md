# Dart Compilation & Runtimes

## JIT vs AOT
- JIT (development): fast hot reload, run with `dart run`.
- AOT (release): ahead-of-time native compilation for speed.

Docs: https://dart.dev/tools/dart-compile

## Native Executables
```bash
dart compile exe bin/app.dart -o build/app.exe
```
Produces a native binary (Windows `.exe`).

## JavaScript (Web)
```bash
dart compile js bin/app.dart -o build/app.js
```
Uses `dart2js` to target browsers.
Docs: https://dart.dev/web

## WebAssembly (Wasm)
- `dart2wasm` compiles Dart to Wasm for web.
- Suitable for compute-heavy tasks.
Docs: https://dart.dev/wasm

## Snapshots & Other Targets
- `aot-snapshot`, `jit-snapshot`, `kernel` for advanced scenarios.
Docs: https://dart.dev/tools/dart-compile

## Flutter Builds
- Debug (JIT), Profile, Release (AOT) modes.
Docs: https://docs.flutter.dev/deployment

