# Java Basics

## Writing Your First Java Program

Here's a simple "Hello, World!" program in Java:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

Understanding the Code:

- `public` refers to the **access modifier**, indicating that the class is accessible from other classes. This can also be set to `private`, `protected`, or default (no modifier).
- `class` is a keyword used to declare a class in Java. A class is a blueprint for creating objects.
- `HelloWorld` is the name of the class. In Java, class names typically start with an uppercase letter and follow the CamelCase convention.
- `public static void main(String[] args)` is the main method, which is the entry point of any Java application.
- `String[] args` is an array of strings that stores command-line arguments passed to the program.
- `System.out.println("Hello, World!");` is a statement that prints the text "Hello, World!" to the console. `System.out` is a standard output stream, and `println` is a method that prints the specified string followed by a new line.

Don't worry about understanding everything at once. As you continue learning Java, these concepts will become clearer!

## Key Concepts in Java

- **Type Safety**: Java is a statically typed language. Types refers to the _kind_ of data like a `string`(text), `int`(integer number), `boolean`(true/false), etc. Every variable and expression has a type that is known at compile time. This helps catch errors early in the development process.
- **Object-Oriented Programming (OOP)**: Java is built around the principles of OOP, which includes concepts like classes, objects, inheritance, encapsulation, and polymorphism.
- **Platform Independence**: Java code is compiled into bytecode, which can run on any device with a Java Virtual Machine (JVM). This makes Java applications portable across different platforms.
- **Memory Management**: Java has an automatic garbage collection mechanism that helps manage memory by reclaiming memory occupied by objects that are no longer in use.
- **Exception Handling**: Java provides a robust exception handling mechanism that allows developers to handle runtime errors gracefully using `try`, `catch`, `finally`, and `throw` keywords.
- **Multithreading**: Java supports multithreading, allowing concurrent execution of two or more threads for maximum CPU utilization.

## Types in Java

Java has two main categories of types: primitive types and reference types.

### Primitive Types

- `byte`: 8-bit signed _integer_ or number (-128 to 127)
- `short`: 16-bit signed integer (-32,768 to 32,767)
- `int`: 32-bit signed integer (-2,147,483,648 to 2,147,483,647)
- `long`: 64-bit signed integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
- `float`: 32-bit floating-point number (single precision)
- `double`: 64-bit floating-point number (double precision)
- `char`: 16-bit Unicode character
- `boolean`: Represents one of two values: `true` or `false`

### Reference Types

- **Classes**: User-defined data types that encapsulate data and behavior.
- **Interfaces**: Abstract types that define a contract for classes to implement.
- **Arrays**: Objects that store multiple values of the same type in a single variable.
- **Enums**: Special data types that define a set of named constants.
- **Strings**: Objects that represent sequences of characters.
- **Collections**: Data structures like `List`, `Set`, and `Map` that store groups of objects.

#### Note: Reference types store references (memory addresses) to the actual data, while primitive types store the actual values.

You can also tell them apart because primitive types are written in lowercase (e.g., `int`, `boolean`), while reference types start with an uppercase letter (e.g., `String`, `ArrayList`).

## Methods (Functions) in Java

In Java, functions are referred to as methods. A method is a block of code that performs a specific task and is defined within a class.

Like the example `HelloWorld` program above, the `main` method is a special method that serves as the entry point for Java applications.

Here's the general syntax for defining a method in Java:

```java
accessModifier returnType methodName(parameterType parameterName, ...) {
    // method body
    // code to be executed
    return value; // if returnType is not void
}
```

### Void Methods

Void refers to methods that do not return any value. Instead of returning a value, they perform an action, like modifying an object or printing output to the console.

Example of a void method:

```java
public void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
```

## Classes and Objects

In Java, a **Class** is a blueprint for creating objects.

An **Object** is an instance of a class that encapsulates data and behavior.

To understand Classes, first understand the basic project structure of a Java program:

```
MyProject/
 ├── src/
 │   └── Main.java
 ├── bin/
 │   └── Main.class
 │   └── Second.class etc.
 ├───lib/
 │   ├── some-library.jar
 │   └── another-library.jar
 ├───assets/
 │   ├── some-picture.png
 │   ├── some-audio.wav
 │   └── another-picture.png
 └── README.md
```

- The source folder (`src/`) contains the Java source code files (`.java`).
- The binary folder (`bin/`) contains the compiled bytecode files (`.class`).
- The library folder (`lib/`) contains external libraries or dependencies used by the project.
- The assets folder (`assets/`) contains any static resources like images, audio files, etc.

When first writing Java programs, you can keep all your `.java` files in the `src/` folder. As your project grows, you might want to organize your code into packages (subfolders) within the `src/` folder.

### Example Class

Here's an example of a simple Java class:

```java
public class Dog {
    // Attributes (fields)
    String name;
    int age;
    String breed;
    // Constructor
    public Dog(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    // Method
    public void bark() {
        System.out.println(name + " says Woof!");
    }
}
```

This class defines a `Dog` with attributes like `name`, `age`, and `breed`, a constructor to initialize these attributes, and a method `bark()` that prints a message to the console.
