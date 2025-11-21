# CSS Selectors

CSS selectors are patterns used to select and style HTML elements. They define which elements a set of CSS rules will apply to.
Selectors can target elements based on their tag name, class, ID, attributes, and more.

As we learned in the [CSS Basics](../css/02-basics.md) section, we can use classes, ids, and element names as selectors, as well as data attributes from HTML.

## Types of Selectors

- **Element Selector**: Selects all elements of a specific type.
  ```css
  p {
    color: blue;
  }
  ```
- **Class Selector**: Selects all elements with a specific class.
  ```css
  .highlight {
    background-color: yellow;
  }
  ```
- **ID Selector**: Selects a single element with a specific ID.
  ```css
  #header {
    font-size: 24px;
  }
  ```
- **Attribute Selector**: Selects elements based on the presence or value of an attribute.
  ```css
  input[type="text"] {
    border: 1px solid black;
  }
  ```
- **Universal Selector**: Selects all elements on the page.
  ```css
  * {
    margin: 0;
    padding: 0;
  }
  ```
- **Descendant Selector**: Selects elements that are descendants of a specified element using a space between the ancestor and descendant selectors.
  ```css
  div p {
    color: green;
  }
  ```
- **Child Selector**: Selects elements that are direct children of a specified element using the `>` symbol.
  ```css
  ul > li {
    list-style-type: square;
  }
  ```
  #### Note the difference between descendant and child selectors: the descendant selector targets all nested elements, while the child selector only targets direct children.
- **Pseudo-class Selector**: Selects elements based on their state or position using a colon (`:`).
  ```css
  a:hover {
    color: red;
  }
  ```
- **Pseudo-element Selector**: Selects and styles specific parts of an element using double colons (`::`).
  ```css
  p::first-letter {
    font-size: 200%;
  }
  ```
  #### Types of Pseudo-elements:
  - `::before`: Inserts content before an element's content.
  - `::after`: Inserts content after an element's content.
  - `::first-letter`: Styles the first letter of an element.
  - `::first-line`: Styles the first line of an element.

## Combining Selectors

Selectors can be combined to create more specific rules. Here are some examples:

- **Multiple Class Selectors**: Selects elements with multiple classes.
  ```css
  .btn.primary {
    background-color: blue;
  }
  ```
- **Class and Element Selector**: Selects specific elements with a certain class.
  ```css
  div.container {
    padding: 20px;
  }
  ```
- **ID and Pseudo-class Selector**: Selects an element with a specific ID when it is hovered over.
  ```css
  #submit-button:hover {
    background-color: green;
  }
  ```
- **Attribute and Pseudo-element Selector**: Selects input elements of type text and styles the first letter.
  ```css
  input[type="text"]::first-letter {
    font-weight: bold;
  }
  ```
