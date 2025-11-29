# Packages and Imports

In Java, packages are used to group related classes and interfaces together, providing a namespace management system that helps avoid naming conflicts.

Imports are used to bring classes and interfaces from other packages into the current file, allowing you to use them without needing to specify their full package names.

## Creating Packages

To create a package, you use the `package` keyword at the very top of your Java source file, followed by the package name. Package names typically follow a hierarchical naming convention using lowercase letters and dots to separate different levels.

Here is an example of how to declare a package:

```java
package com.example.myapp;
```

The folder structure of your project should reflect the package hierarchy. For example, the above package declaration would correspond to a directory structure like this:

```
src/
└── com/
    └── example/
        └── myapp/
            └── MyClass.java
```

## Importing Packages

To use classes and interfaces from other packages, you need to import them using the `import` statement. You can import specific classes or entire packages.
Here are some examples of import statements:

```java
import java.util.ArrayList; // Importing a specific class
import java.util.*;         // Importing all classes from the java.util package
```

Java also provides a way to import static members (fields and methods) of a class using the `import static` statement:

```java
import static java.lang.Math.PI; // Importing the static field PI from Math class
import static java.lang.Math.*;  // Importing all static members from Math class
```

## Using Imported Classes

Once you have imported a class or package, you can use the classes and interfaces defined within them directly in your code without needing to specify their full package names.

Here is an example of using the `ArrayList` class from the `java.util` package:

```java
import java.util.ArrayList;
public class MyApp {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Hello");
        list.add("World");
        System.out.println(list);
    }
}
```
