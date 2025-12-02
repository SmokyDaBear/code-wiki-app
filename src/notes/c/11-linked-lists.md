# Linked Lists in C

Linked lists are dynamic data structures that consist of nodes, where each node contains data and a pointer to the next node.

This allows for efficient insertion and deletion of elements, as the size of the linked list can grow or shrink as needed.

## Creating a Linked List Node

First, import the standard library for memory allocation functions:

```c
#include <stdio.h>
#include <stdlib.h>
```

To create a linked list in C, you first need to define a structure for the nodes.

- Use the `struct` keyword to define a new structure type.

```c

// Define the structure for a linked list node
struct Node {
    int data; // Data part of the node
    struct Node* next; // Pointer to the next node
};
```

## Creating and Initializing Nodes

To create and initialize a new node, you can use the `malloc` function to allocate memory for the node.

Let's create a function to create a new node:

```c
// Function to create a new node
struct Node* createNode(int data) {
  // Allocate memory for a new node
    struct Node* newNode = (struct Node*)malloc(sizeof(struct Node));
    // Initialize the node's data and next pointer
    newNode->data = data;
    // Set the next pointer to NULL
    newNode->next = NULL;
    return newNode;
}
```

## Adding Nodes to the Linked List

To add nodes to the linked list, you can create a function that appends a new node at the end of the list.

```c
// Function to append a node at the end of the linked list
int appendNode(struct Node** headRef, int data) {
    struct Node* newNode = createNode(data);
    if (*headRef == NULL) {
        *headRef = newNode; // If the list is empty, set the new node as the head
        return 0;
    }
    struct Node* current = *headRef;
    while (current->next != NULL) {
        current = current->next; // Traverse to the end of the list
    }
    current->next = newNode; // Link the new node at the end
    return 0;
}
```

## Looping Over Linked Lists

To iterate over a linked list, you typically use a `while` loop.

```c
int main() {
    // Create a simple linked list: 10 -> 20 -> 30
    struct Node* head = createNode(10);
    head->next = createNode(20);
    head->next->next = createNode(30);

    struct Node* current = head;
    while (current != NULL) {
        printf("%d -> ", current->data);
        current = current->next;
    };
    return 0;
}
```
