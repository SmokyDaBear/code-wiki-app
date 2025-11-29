# Inheritance and `super` in Java

Inheritance is a key feature of object-oriented programming that allows a new class to inherit properties and methods from an existing class.

- This promotes code reusability and establishes a hierarchical relationship between classes.

When a class _inherits_ from another class, it is called a _subclass_ (or derived class), and the class it inherits from is called a _superclass_ (or base class).

The `extends` keyword is used to create a subclass that inherits from a superclass.

The `super` keyword is used to refer to the immediate parent class of a subclass.

It is commonly used in two main scenarios:

- to call a parent class constructor
- and to access parent class methods and variables.

## Extending a Class

Let's say we have a base class called `Animal`:

```java
public class Animal {
    private String name;
    public Animal(String name) {
        this.name = name;
    }
    public void makeSound() {
        System.out.println("Some generic animal sound");
    }
}
```

Now, we can create a subclass called `Dog` that extends the `Animal` class:

First, import the `Animal` class if it's in a different package:

```java
import your.package.name.Animal;
```

Then, use the `extends` keyword to create the subclass extending the `Animal` class:

- the `super` keyword is used in the `Dog` constructor to call the parent class (`Animal`) constructor and initialize the `name` property.

- the `@override` annotation indicates that the `makeSound` method in the `Dog` class is overriding the method from the `Animal` class.

```java
public class Dog extends Animal {
    public Dog(String name) {
        super(name); // Calling the parent class constructor
    }
    @Override
    public void makeSound() {
        super.makeSound(); // Optionally calling the parent class method
        System.out.println("Bark");
    }
}
```

## Polymorphism through Inheritance

Polymorphism is a concept in object-oriented programming that allows methods to do different things based on the object that it is acting upon.

In the context of inheritance, polymorphism allows a subclass to provide a specific implementation of a method that is already defined in its superclass.

In the example above, the `Dog` class overrides the `makeSound` method of the `Animal` class to provide a specific sound for dogs.

When you call the `makeSound` method on an `Animal` reference that points to a `Dog` object, the overridden method in the `Dog` class is executed:

```java
Animal myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Some generic animal sound
                   //         Bark
```

This demonstrates polymorphism, as the same method call behaves differently based on the actual object type (`Dog` in this case) rather than the reference type (`Animal`).
