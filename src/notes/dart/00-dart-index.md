# Dart

Dart is a modern, object-oriented programming language developed by Google. It is optimized for building web, server, desktop, and mobile applications. Dart features a clean syntax, strong typing with null safety, and supports both just-in-time (JIT) and ahead-of-time (AOT) compilation.

## Official Resources
- Language Tour: https://dart.dev/guides/language/language-tour
- Tools Overview: https://dart.dev/tools

## Installing Dart

### Windows

1. Download the Dart SDK(Software Development Kit) from the official site: https://dart.dev/get-dart
2. Extract the ZIP file to a desired location (e.g., `C:\dart`).
3. Add the `bin` directory to your system PATH:
   - Open System Properties > Environment Variables.
   - Edit the `Path` variable and add `C:\dart\bin`.
4. Verify installation by running `dart --version` in Command Prompt.

Alternatively, install via Chocolatey(Preferred Method of CLI Geeks):

make sure you have Chocolatey installed:

```bash 
choco --version
```

Then run:

```bash
choco install dart-sdk
```

To confirm installation, run:

```bash
dart --version
```

## Linux

1. Follow the instructions at https://dart.dev/get-dart to set up the apt repository.
2. Install the Dart SDK:

```bash
sudo apt update
sudo apt install dart
```
3. Verify installation:

```bash
dart --version
```