# Interfaces and Abstract Classes in Java

Abstraction is a core principle of object-oriented programming that allows you to define common behaviors and properties for related classes while hiding the implementation details.

## Why Use Interfaces and Abstract Classes?

They help in designing flexible and maintainable code by providing a way to define _contracts_ for classes without dictating how those contracts should be fulfilled.

A **contract** specifies what methods a class must implement, ensuring consistency across different classes that share similar behaviors.

In Java, both interfaces and abstract classes are used to achieve abstraction, but they have some key differences:

## Abstract Classes

An abstract class is a class that cannot be instantiated on its own and is meant to be subclassed.

It can contain both abstract methods (without implementations) and concrete methods (with implementations), as well as instance variables.

Example of an abstract class:

- the `abstract` keyword is used to declare the class as abstract

```java
public abstract class Animal {

    // Instance variable, these will be inherited by subclasses
    private String name;
    // Constructor
    public Animal(String name) {
        this.name = name;
    }
    // Concrete method
    public String getName() {
        return name;
    }
    // Abstract method
    public abstract void makeSound(); // abstract method
}
```

## Implementing Abstract Classes

To use an abstract class, you need to create a subclass that extends the abstract class and provides implementations for all its abstract methods.

```java
public class Dog extends Animal {
    // Constructor extending the abstract class constructor with super()
    public Dog(String name) {
        super(name);
    }
    // Overriding the abstract method "makeSound"
    @Override
    public void makeSound() {
        System.out.println("Bark");
    }
}
```

## Interfaces

An interface is a reference type in Java that defines a contract for classes that implement it. It can contain method signatures (without implementations), default methods (with implementations), static methods, and constants (static final variables).

Key characteristics of interfaces:

- A class can implement multiple interfaces, allowing for multiple inheritance of type.
- All methods in an interface are implicitly public and abstract (except for default and static methods).
- Interfaces cannot have instance variables; they can only have constants.

Example of an interface:

```java
public interface Animal {
    void makeSound(); // abstract method

    default void sleep() { // default method
        System.out.println("Sleeping...");
    }
}
```

### Functional Interfaces

An interface with a single abstract method is called a functional interface.

Functional interfaces can be implemented using lambda expressions, providing a concise way to represent single-method interfaces.[Learn about lambda expressions here](./17-streams-and-lambda-expressions.md).
