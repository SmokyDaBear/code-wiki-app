# Pseudo-Selectors

Pseudo-selectors in CSS allow you to style elements based on their state or position in the document tree, rather than just their attributes. They are prefixed with a colon (`:`) and can be categorized into two main types: pseudo-classes and pseudo-elements.

## Pseudo-Classes

Pseudo-classes are used to define a special state of an element. Common pseudo-classes include:

- `:hover`: Applies styles when the user hovers over an element.
- `:focus`: Applies styles when an element is focused, such as when a user clicks on an input field.
- `:nth-child(n)`: Selects the nth child of a parent element.
- `:nth-of-type(n)`: Selects the nth child of a specific type (e.g., `div`, `p`).
- `:first-child`: Selects the first child of a parent element.
- `:last-child`: Selects the last child of a parent element.
- `:not(selector)`: Selects elements that do not match the specified selector.
- `:checked`: Selects checked input elements like checkboxes or radio buttons.
- `:disabled`: Selects disabled form elements.
- `:visited`: Styles links that have been visited by the user.
- `:active`: Styles an element when it is being activated by the user, such as when a button is being clicked.
- `:empty`: Selects elements that have no children (including text nodes).

#### Hover Example Code:

```css
.hover-demo-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.hover-demo-button:hover {
  background-color: darkblue;
  color: lightgray;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
```

#### Hover Example Output:

<button class="hover-demo-button">
  Hover over me
</button>

<style>
.hover-demo-button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hover-demo-button:hover {
  background-color: darkblue;
  color: lightgray;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
</style>

#### Focus Example Code:

```css
.input-field {
  padding: 10px;
  border: 6px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.input-field:focus {
  border-color: #4caf50;
  box-shadow: 0 0 6px rgba(76, 175, 80, 0.3);
  outline: none;
}
```

#### Focus Example Output:

<input type="text" class="focus-demo-input" placeholder="Click me to see focus styles">

<style>
.focus-demo-input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: all 0.3s ease;
  width: 250px;
  margin: 10px 0;
}

.focus-demo-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
  outline: none;
}
</style>

#### nth-child Example Code:

```css
.list-item {
  padding: 8px;
  margin: 2px 0;
}

.list-item:nth-child(odd) {
  background-color: #f0f0f0;
}

.list-item:nth-child(even) {
  background-color: #e0e0e0;
}

.list-item:nth-child(3) {
  background-color: #ffeb3b;
  font-weight: bold;
}
```

#### nth-child Example Output:

<div class="nth-child-demo">
  <div class="demo-list-item">Item 1 (odd)</div>
  <div class="demo-list-item">Item 2 (even)</div>
  <div class="demo-list-item">Item 3 (specifically targeted)</div>
  <div class="demo-list-item">Item 4 (even)</div>
  <div class="demo-list-item">Item 5 (odd)</div>
</div>

<style>
.demo-list-item {
  padding: 8px;
  margin: 2px 0;
  border-radius: 4px;
}

.demo-list-item:nth-child(odd) {
  background-color: #f0f0f0;
}

.demo-list-item:nth-child(even) {
  background-color: #e0e0e0;
}

.demo-list-item:nth-child(3) {
  background-color: #ffeb3b;
  font-weight: bold;
}
</style>

## Pseudo-Elements

Pseudo-elements allow you to style specific parts of an element. Common pseudo-elements include:

- `::before`: Inserts content before the content of an element.
- `::after`: Inserts content after the content of an element.
- `::first-letter`: Styles the first letter of an element.
- `::first-line`: Styles the first line of an element.
- `::selection`: Styles the portion of an element that is selected by the user.

#### ::before and ::after Example Code:

```css
.decorated-text {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  border-radius: 4px;
}

.decorated-text::before {
  content: "★";
  color: gold;
  margin-right: 8px;
}

.decorated-text::after {
  content: "★";
  color: gold;
  margin-left: 8px;
}
```

#### ::before and ::after Example Output:

<span class="decorated-demo-text">Important Message</span>

<style>
.decorated-demo-text {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  margin: 10px 0;
    color: #333;
  border-radius: 4px;
}

.decorated-demo-text::before {
  content: "★";
  color: gold;
  margin-right: 8px;
}

.decorated-demo-text::after {
  content: "★";
  color: gold;
  margin-left: 8px;
}
</style>

#### ::first-letter Example Code:

```css
.drop-cap {
  font-size: 16px;
  line-height: 1.5;
}

.drop-cap::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #4caf50;
  float: left;
  line-height: 1;
  margin: 0 8px 0 0;
}
```

#### ::first-letter Example Output:

<p class="drop-cap-demo">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

<style>
.drop-cap-demo {
  font-size: 16px;
  line-height: 1.5;
  margin: 15px 0;
  text-align: justify;
}

.drop-cap-demo::first-letter {
  font-size: 3em;
  font-weight: bold;
  color: #4caf50;
  float: left;
  line-height: 1;
  margin: 0 8px 0 0;
}
</style>

<br/>

#### ::selection Example Code:

```css
.selectable-text::selection {
  background-color: #4caf50;
  color: white;
}
```

#### ::selection Example Output:

<p class="selectable-demo-text">Try selecting this text to see the custom selection styling!</p>

<style>
.selectable-demo-text {
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin: 10px 0;
  user-select: text;
}

.selectable-demo-text::selection {
  background-color: #4caf50;
  color: white;
}
</style>

## Practical Tips

1. **Combine pseudo-selectors**: You can chain multiple pseudo-selectors like `.item:nth-child(odd):hover`
2. **Use transitions**: Add smooth transitions to make hover effects more polished
3. **Consider accessibility**: Ensure hover states are also accessible via keyboard navigation
4. **Performance**: Avoid complex pseudo-selectors on frequently changing elements

## Common Use Cases

- **Navigation menus**: Use `:hover` for dropdown menus and button effects
- **Form styling**: Use `:focus` for input fields and `:invalid` for form validation
- **Table styling**: Use `:nth-child()` for alternating row colors
- **Content decoration**: Use `::before` and `::after` for icons and decorative elements
