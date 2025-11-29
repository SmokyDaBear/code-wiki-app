# Classes in Java

Classes in Java are blueprints for creating objects.

They _encapsulate_ data for the object and methods to manipulate that data.

A class defines the _properties_ (attributes) and behaviors (methods) that the objects created from the class will have.

## Encapsulation

Encapsulation is a fundamental principle of object-oriented programming that restricts direct access to an object's data and methods.

In Java, this is typically achieved by declaring class variables as `private` and providing `public` getter and setter methods to access and modify those variables.

- Private variables cannot be accessed directly from outside the class.

- Getter methods allow you to retrieve the value of a private variable.
- Setter methods allow you to modify the value of a private variable.

- Public methods can be accessed from outside the class.

## Scope

Scope refers to the visibility and lifetime of variables and methods within a class.

### **Instance Variables**

These are variables declared within a class but outside any method.

They are associated with an instance of the class and can be accessed by all methods within the class.

### **Local Variables**

These are variables declared within a method.

They are only accessible within that method and are created when the method is called and destroyed when the method exits.

### **Class Variables (Static Variables)**

These are variables declared with the `static` keyword within a class but outside any method.

They are shared among all instances of the class and can be accessed without creating an instance of the class.

### **Method Variables**

These are variables declared as parameters in method definitions.

They are only accessible within the method and are created when the method is called and destroyed when the method exits.

- similar to local variables but specifically used to pass values into methods as a parameter.

## Creating a Class

To create a class in Java, you use the `class` keyword followed by the class name and a pair of curly braces `{}` to define the body of the class.

- Naming the class should follow the PascalCase convention, where each word starts with a capital letter.
- A class should be defined in its own file with the same name as the class and a `.java` extension.
- A class needs to be declared as `public` if it is to be accessed from other classes, and have a constructor method to initialize the object's properties.

### The `this` Keyword

The `this` keyword is a reference variable in Java that refers to the current object.

Look at the example below using `this` to call its own instance variables.

Example of a simple class definition:

```java
public class Car {
    // Instance variables
    private String color;
    private String model;
    private int year;
    // Constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }
    // Getter methods
    public String getColor() {
        return color;
    }
    public String getModel() {
        return model;
    }
    public int getYear() {
        return year;
    }
}
```

Notice the instance variables `color`, `model`, and `year` are declared as `private`, meaning they cannot be accessed directly from outside the class.

We can provide a `getter` method for each variable to allow controlled access to their values like the `getColor()`, `getModel()`, and `getYear()` methods.

We can also provide `setter` methods to allow controlled modification of these variables if needed.

## Creating an Object

An object is an instance of a class.

To create an object, you use the `new` keyword followed by the class constructor.

Example of creating an object of the `Car` class:

```java
Car myCar = new Car("Red", "Toyota", 2020);
```

In this example, we create a new `Car` object named `myCar` with the color "Red", model "Toyota", and year 2020.

You can then access the object's properties using the getter methods:

```java
System.out.println("Car Model: " + myCar.getModel());
System.out.println("Car Color: " + myCar.getColor());
System.out.println("Car Year: " + myCar.getYear());
```

### Setter Methods

If you want to modify the properties of an object after it has been created, you can use setter methods.
Here is an example of adding setter methods to the `Car` class:

```java
    // Setter methods
    public void setColor(String color) {
        this.color = color;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public void setYear(int year) {
        this.year = year;
    }
```

You can then use these setter methods to change the properties of the `myCar` object:

```java
myCar.setColor("Blue");
System.out.println("Updated Car Color: " + myCar.getColor());
```

This will change the color of `myCar` to "Blue" and print the updated color.

## Static Keyword and Variables

The `static` keyword in Java is used to indicate that a particular member (variable or method) belongs to the class itself rather than to any specific instance of the class.

### Static Variables

Static variables are shared among all instances of a class.

They are declared using the `static` keyword and can be accessed without creating an instance of the class.

Example of a static variable:

```java
public class MathUtil {

    public static double pi = 3.14159; // Static variable for pi

    public static int add(int a, int b) {
        return a + b; // Static method to add two numbers
    }
    public static double getCircumference(double radius) {
        return 2 * pi * radius; // Static method to calculate circumference
    }
}
```

In this example, the `pi` variable is static as well as public, so it is shared among all instances of the `MathUtil` class.

You can access the static variable and methods directly using the class name without creating an instance:

```java
// Accessing static variable 'pi'
double area = MathUtil.pi * 5 * 5;
System.out.println("Area: " + area);

// Accessing static methods 'add' and 'getCircumference'
int sum = MathUtil.add(10, 20);
System.out.println("Sum: " + sum);

double circumference = MathUtil.getCircumference(5.0);
System.out.println("Circumference: " + circumference);
```

This particular class also has static methods `add` and `getCircumference` that can be called without creating an instance of the class.

This is also a special kind of class called a _utility_ class, which is a class that only contains static methods and variables and is not meant to be instantiated with `new`.

## Creating a Main Method

For testing purposes, you can create a `main` method to instantiate and interact with your classes.

Example of a `main` method to test the `Car` class:

```java
public class Car {
    // Instance variables
    private String color;
    private String model;
    private int year;
    // Constructor
    public Car(String color, String model, int year) {
        this.color = color;
        this.model = model;
        this.year = year;
    }
    // Getter methods
    public String getColor() {
        return color;
    }
    public String getModel() {
        return model;
    }
    public int getYear() {
        return year;
    }
    // Setter methods
    public void setColor(String color) {
        this.color = color;
    }
    public void setModel(String model) {
        this.model = model;
    }
    public void setYear(int year) {
        this.year = year;
    }
    // Main method for testing
    public static void main(String[] args) {
        // Creating an object of the Car class
        Car myCar = new Car("Red", "Toyota", 2020);
        // Accessing object properties using getter methods
        System.out.println("Car Model: " + myCar.getModel());
        System.out.println("Car Color: " + myCar.getColor());
        System.out.println("Car Year: " + myCar.getYear());
        // Modifying object properties using setter methods
        myCar.setColor("Blue");
        System.out.println("Updated Car Color: " + myCar.getColor());
    }
}
```

In this example, the `Main` class contains the `main` method, which is the starting point of the program.

After compiling both the `Car` and `Main` classes, you can run the `Main` class to see the output of the program.
