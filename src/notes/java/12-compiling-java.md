# Comiling Java into Usable Programs

After writing your Java code in `.java` files, you need to compile them into bytecode that the Java Virtual Machine (JVM) can execute. This bytecode is stored in `.class` files.

## Installing the JDK

To compile Java programs, you need to have the Java Development Kit (JDK) installed on your machine. You can download the JDK from the official Oracle website or use a package manager suitable for your operating system.

On linux, you can install OpenJDK using your package manager. For example, on Ubuntu, you can run:

```bash
sudo apt update
sudo apt install openjdk-11-jdk # Install OpenJDK 11, or whatever version you need/prefer
```

## The `javac` Compiler

The Java compiler, `javac`, is used to compile Java source files into bytecode. You can run the `javac` command from the command line or terminal.

To compile a Java file, use the following command:

```bash
javac YourFileName.java
```

If this command is successful, it will generate a `YourFileName.class` file in the same directory.

If it fails, it will display error messages indicating what went wrong in your code.

## Running the Compiled Program

Once you have compiled your Java program, you can run it using the `java` command followed by the class name (without the `.class` extension).

```bash
java YourFileName
```

This command will start the Java Virtual Machine and execute the `main` method of the specified class.
Make sure that the class you are trying to run contains a `main` method defined as follows:

```java
public static void main(String[] args) {
    // Your code here
}
```
