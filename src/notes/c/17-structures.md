# Structures (structs) in C

Structures, or `structs`, in C are user-defined data types that allow you to group related variables of different types under a single name. This is particularly useful for organizing complex data.

## Defining a Structure

To define a structure, you use the `struct` keyword followed by the structure name and a block containing the member variables. Here's an example:

```c
struct Person {
    char name[50];
    int age;
    float height;
};
```

In this example, we define a structure named `Person` with three members: `name`, `age`, and `height`.

## Declaring Structure Variables

After defining a structure, you can declare variables of that type:

```c
struct Person person1;
struct Person person2;
```

You can also use the `typedef` (type definition) keyword to create an alias for the structure type, making it easier to declare variables:

```c
typedef struct {
    char name[50];
    int age;
    float height;
} Person;

Person person1;
Person person2;
```

## Accessing Structure Members

You can access and modify the members of a structure using the dot (`.`) operator:

```c
person1.age = 25;
strcpy(person1.name, "Alice");
person1.height = 5.6;
```

## Nested Structures

Structures can also contain other structures as members:

```c
struct Address {
    char street[100];
    char city[50];
    int zipCode;
};

struct Person {
    char name[50];
    int age;
    struct Address address; // Nested structure
};
```

## Conclusion

Structures are powerful tools in C that help you organize and manage related data efficiently. They are widely used in various applications, from simple programs to complex systems.
