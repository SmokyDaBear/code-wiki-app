# The DOM

The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages like JavaScript to manipulate the content, structure, and style of web pages dynamically.
With the DOM, you can:

- Access and modify HTML elements and their attributes.
- Change the CSS styles of elements.
- Add or remove elements from the document.
- Respond to user events like clicks and key presses.

## Key Words:

- **Element**: An individual HTML tag in the document, such as `<div>`, `<p>`, or `<a>`.
- **Node**: A single point in the DOM tree, which can be an element, text, or attribute.
- **Document Object**: The root of the DOM tree, representing the entire HTML document.
- **Event**: An action or occurrence that happens in the system, such as a user clicking a button or loading a page.
- **Event Listener**: A function that waits for a specific event to occur and executes code in response.

## Accessing DOM Elements

You can access DOM elements using various methods provided by the `document` object. Some common methods include:

- `getElementById()`: Selects an element by its ID.
- `getElementsByClassName()`: Selects elements by their class name.
- `getElementsByTagName()`: Selects elements by their tag name.
- `querySelector()`: Selects the first element that matches a CSS selector.
- `querySelectorAll()`: Selects all elements that match a CSS selector.

### Getting an Element by ID

getElementById() is used to select a single element with a specific ID, which is taken as an argument in string format.

```javascript
const elementById = document.getElementById("myId");

elementById.style.color = "blue";
```

### Query Selector

You can use querySelector() to select the first element that matches a specified CSS selector.

The syntax is similar to CSS, so for an ID, you use `#`, and for a class, you use `.` before the name.

Query selectors can be:

- IDs
  - Use a `#` followed by the ID name like `#myId`.
- classes
  - Use a `.` followed by the class name like `.myClass`.
- tags/element types
  - Simply use the tag name like `div`, `p`, `span`, etc.
- data attributes
  - For data attributes, you can use the attribute selector syntax like `[data-attribute="value"]`.
- or any valid CSS selector.

Theses can also be combined to form more specific selectors.

```javascript
const firstParagraph = document.querySelector("p");
firstParagraph.style.fontSize = "20px";
```

### Query Selector All

querySelectorAll() is used to select all elements that match a specified CSS selector. It returns a NodeList of all matching elements.

```javascript
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((para) => {
  para.style.color = "green";
});
```

## Modifying DOM Elements

Once you have accessed DOM elements, you can modify their properties, attributes, and styles. Here are some common ways to modify DOM elements:

### Changing Content

You can change the content of an element using the `innerHTML`, `innerText`, or `textContent` properties.

#### InnerHTML

When setting `innerHTML`, this is sometimes a security risk if the content includes user input, as it can lead to Cross-Site Scripting (XSS) attacks. Always sanitize user input before inserting it into the DOM.

This is referred to as "dangerously set innerHTML" in some frameworks.

```javascript
const myDiv = document.getElementById("myDiv");
myDiv.innerHTML = "<strong>New Content</strong>";
```

#### InnerText

Setting `innerText` will treat the content as plain text, so don't use any HTML tags as they will be displayed as text rather than being rendered.

```javascript
const myDiv = document.getElementById("myDiv");
myDiv.innerText = "New Text Content";
```

#### TextContent

Setting `textContent` will also treat the content as plain text, similar to `innerText`. However, `textContent` is generally faster and more efficient for simply updating text.

```javascript
const myDiv = document.getElementById("myDiv");
myDiv.textContent = "New Text Content";
```

### Changing Styles

You can change the CSS styles of an element using the `style` property.

Most CSS properties are accessed using camelCase notation in JavaScript. For example, `background-color` becomes `backgroundColor`, and `font-size` becomes `fontSize`.

```javascript
const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "yellow";
myDiv.style.fontSize = "18px";
```

### Adding and Removing Elements

You can add new elements to the DOM using methods like `createElement()`, `appendChild()`, and `insertBefore()`. You can remove elements using the `removeChild()` method.

```javascript
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new paragraph.";
document.body.appendChild(newParagraph); // Adds the new paragraph to the end of the body
const oldParagraph = document.getElementById("oldParagraph");
document.body.removeChild(oldParagraph); // Removes the old paragraph from the body
```

You can also use the `remove()` method directly on the element to remove it from the DOM.

```javascript
const oldParagraph = document.getElementById("oldParagraph");
oldParagraph.remove(); // Removes the old paragraph from the DOM
```

### Nodes and Node Lists

When you use methods like `getElementsByClassName()`, `getElementsByTagName()`, or `querySelectorAll()`, they return a Node or NodeList. This is a HTMLCollection of elements. You can iterate over these collections using loops or the `forEach()` method (for NodeLists).

To iterate over a NodeList, you can use:

- A `for` loop
- A `for...of` loop
- The `forEach()` method (for NodeLists)

#### Converting HTMLCollection to Array

If you need to use array methods on an HTMLCollection, you can convert it to an array using `Array.from()` or the spread operator (`...`).

```javascript
const items = document.getElementsByClassName("item");
for (let item of ...items) {
  item.style.color = "red";
}
```

We can can then use array methods like `map()`, `filter()`, etc., on the converted array.

Sorting and filtering can also be done on the array.

```javascript
const filteredItems = itemsArray.filter((item) =>
  item.textContent.includes("important")
);
filteredItems.forEach((item) => {
  item.style.fontWeight = "bold";
});
```

To sort the items based on their text content:

```javascript
const container = document.getElementById("container");
const items = container.getElementsByClassName("item");

const itemsArray = Array.from(items);
const sortedItems = itemsArray.sort((a, b) =>
  a.textContent.localeCompare(b.textContent)
);
sortedItems.forEach((item) => {
  container.appendChild(item); // Re-append to container in sorted order
});
```

#### Children and Parents

You can access the child elements of a parent element using the `children` property, and you can access the parent element of a child using the `parentElement` property.

```javascript
const parent = document.getElementById("parentElement");
const children = parent.children; // HTMLCollection of child elements
const firstChild = children[0];
const parentOfChild = firstChild.parentElement; // Accessing the parent element
```

## Events and Listeners

You can respond to user interactions and other events using event listeners. An event listener is a function that waits for a specific event to occur on an element and executes code in response.

Types of Events:

- `click`: Triggered when an element is clicked.
- `mouseover`: Triggered when the mouse pointer moves over an element.
- `mouseout`: Triggered when the mouse pointer moves out of an element.
- `keydown`: Triggered when a key is pressed down.
- `keyup`: Triggered when a key is released.
- `load`: Triggered when the page or an image has finished loading.

### Adding Event Listeners

You can add an event listener to an element using the `addEventListener()` method.

```javascript
const button = document.getElementById("myButton");
button.addEventListener("click", function () {
  alert("Button was clicked!");
});
```

- An alert is a popup box that displays a message to the user.

### Removing Event Listeners

You can remove an event listener using the `removeEventListener()` method. You need to provide the same function reference that was used when adding the listener.

```javascript
function handleClick() {
  alert("Button was clicked!");
}
button.addEventListener("click", handleClick);
// To remove the event listener
button.removeEventListener("click", handleClick);
```

#### Note that in order to remove an event listener, the function must be named (not an anonymous function) so that the same reference can be passed to `removeEventListener()`.

### Event Object

When an event occurs, an event object is passed to the event listener function. This object contains information about the event, such as the target element, event type, and other properties.

```javascript
button.addEventListener("click", function (event) {
  console.log("Event type:", event.type); // Output: "click"
  console.log("Target element:", event.target); // Output: the button element
});
```

### Event Delegation

Event delegation is a technique where you add a single event listener to a parent element instead of adding separate listeners to each child element. This is useful for handling events on dynamically added elements.

```javascript
window.addEventListener("click", function (event) {
  if (event.target && event.target.matches("button.dynamic-button")) {
    alert("Dynamic button clicked!");
  }
});
```

In this example, the event listener is added to the `window` object, and it checks if the clicked target matches the selector for dynamically added buttons.

Lets say you have a modal, and when the modal pops us we add an event listener to the entire window to close the modal when clicking outside of it. This is a common use case for event delegation.

```javascript
const modal = document.getElementById("myModal");
window.addEventListener("click", function (event) {
  if (!modal.contains(event.target)) {
    modal.style.display = "none"; // Close the modal
  }
});
```

You can abstract this into a function to reuse it for multiple modals.

```javascript
function addModalCloseListener(modal) {
  window.addEventListener("click", function (event) {
    if (!modal.contains(event.target)) {
      modal.style.display = "none"; // Close the modal
    }
  });
}
```

Make sure to clean up the listener when the modal is closed to avoid wasting memory.

```javascript
function addModalCloseListener(modal) {
  function handleClick(event) {
    if (!modal.contains(event.target)) {
      modal.style.display = "none"; // Close the modal
      window.removeEventListener("click", handleClick); // Clean up listener
    }
  }
  window.addEventListener("click", handleClick);
}
```

## Bubbling and Capturing

When an event occurs on an element, it goes through two phases: capturing and bubbling.

- **Capturing Phase**: The event starts from the root of the DOM tree and travels down to the target element.
- **Bubbling Phase**: After reaching the target element, the event bubbles up from the target element back to the root.
  By default, event listeners are set to listen during the bubbling phase. However, you can specify that an event listener should listen during the capturing phase by passing a third argument as `true` to `addEventListener()`.

```javascript
element.addEventListener(
  "click",
  function () {
    console.log("Capturing phase");
  },
  true
); // true for capturing phase
```
