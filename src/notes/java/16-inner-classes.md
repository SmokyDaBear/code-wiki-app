# Inner Classes

Similar to how classes can extend a superclass or implement interfaces, Java also allows you to define classes within other classes, known as inner classes.

Inner classes can be useful for logically grouping classes that are only used in one place, increasing encapsulation, and improving code organization.

Unlike regular classes, inner classes have access to the members (including private members) of the outer class, and they can also be set to `private`, `protected`, or `public`, wheras regular classes can only have package-private or public access.

## Types of Inner Classes

There are several types of inner classes in Java:

- **Private Inner Classes**: These are inner classes declared with the `private` access modifier. They can only be accessed within the outer class.
- **Protected Inner Classes**: These inner classes are declared with the `protected` access modifier. They can be accessed within the same package and by subclasses of the outer class.
- **Static Inner Classes**: These are inner classes declared with the `static` keyword. They do not have access to instance variables and methods of the outer class unless they have a reference to an instance of the outer class.
- **Anonymous Classes**: These are inner classes without a name, defined and instantiated in a single expression. They are often used for implementing interfaces or extending classes in a concise way.

## Example of a Private Inner Class

Here's an example of a private inner class:

```java
public class OuterBank {
  // Outer class member
    public String bankName;
    // Map to hold accounts
    private Map<String, Account> accounts = new HashMap<>();
    // Private inner class
    private class Account {
      // Inner class member
        private String accountNumber;
        private double balance;
        // Inner class constructor
        public Account(String accountNumber, double startingBalance) {
            this.accountNumber = accountNumber;
            this.balance = startingBalance;
        }
    }
    // Outer class constructor
    public OuterBank(String bankName) {
        this.bankName = bankName;
    }
    // Method to create an instance of the private inner class
    public Account createAccount(String accountNumber, double startingBalance) {
        // Create a new Account instance
        Account account = new Account(accountNumber, startingBalance);

        // Store the account in the map
        this.accounts.put(accountNumber, account);
        // Return the created account
        return account;
    }
}

```

Here we created a public outer class `OuterBank` with a private inner class `Account`.

The `Account` class is private and can only be accessed within the `OuterBank` class.

The `createAccount` method in the outer class creates and returns an instance of the private inner class `Account`.

## Example of a Static Inner Class

Here's an example of a static inner class:

```java
public class Utils {
    // Static inner class
    public static class String {
        // Static method in the inner class
        public static String reverse(String input) {
            return new StringBuilder(input).reverse().toString();
        }
        public String toUpperCase(String input) {
            return input.toUpperCase();
        }
    }
    public static void main(String[] args) {
        // Accessing the static inner class method
        String reversed = Utils.String.reverse("Hello");
        System.out.println(reversed); // Output: olleH
    }
}
```

This is a utility class `Utils` that contains a static inner class `String` with a static method `reverse`.

We could add on some other string utility methods to this inner class as well, or even create other static inner classes for different utilities, such as `Math` or `DateTime`.

In the `main` method, we demonstrate how to access the static inner class method `reverse` without needing to create an instance of the outer class `Utils`.

You can also create instances of static inner classes using the following syntax:

```java
Utils.String stringUtil = new Utils.String();
```

This creates an instance of the static inner class `String` from the outer class `Utils`.

We can then call non-static methods on this instance:

```java
String uppercased = stringUtil.toUpperCase("hello");
System.out.println(uppercased); // Output: HELLO
```

## Anonymous Inner Classes

Anonymous inner classes are a way to define and instantiate a class at the same time, usually for implementing interfaces or extending classes in a concise manner.

Here's an example of an anonymous inner class implementing an interface:

```java
public interface Greeting {
    void sayHello();
}
public class Main {
    public static void main(String[] args) {
        // Creating an anonymous inner class that implements the Greeting interface
        Greeting greeting = new Greeting() {
            @Override
            public void sayHello() {
                System.out.println("Hello, World!");
            }
        };
        // Calling the method
        greeting.sayHello(); // Output: Hello, World!
    }
}
```

We didn't create a new named class that implements the `Greeting` interface; instead, we defined it inline as an anonymous inner class, using the `new` keyword followed by the interface name and a class body, and using the `@Override` annotation to implement the `sayHello` method.
