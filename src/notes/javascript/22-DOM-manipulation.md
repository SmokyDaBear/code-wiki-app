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
